import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackHandler, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { initialModal, ModalModel } from "./model/ui";
import ModalCard from "./view/ModalCard";

const App: React.FC = () => {
  const [modal, setModal] = useState<ModalModel>(initialModal);

  const open = () => setModal((prev) => ({ ...prev, visible: true }));
  const close = () => setModal((prev) => ({ ...prev, visible: false }));

  useEffect(() => {
    if (!modal.visible || Platform.OS !== "android") return;
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      close();
      return true;
    });
    return () => sub.remove();
  }, [modal.visible]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Pressable onPress={open} accessibilityRole="button" accessibilityLabel="Show modal message">
          <Text style={styles.trigger}>Show modal message</Text>
        </Pressable>

        <ModalCard visible={modal.visible} message={modal.message} onClose={close} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  trigger: { fontSize: 18, color: "#1a73e8" },
});

export default App;
