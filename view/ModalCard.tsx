import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  visible: boolean;
  message: string;
  onClose: () => void;
};

const ModalCard: React.FC<Props> = ({ visible, message, onClose }) => (
  <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
    <View style={styles.overlay}>
      <View style={styles.card}>
        <Text style={styles.title}></Text>
        <Text style={styles.body}>{message}</Text>
        <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel="Close modal" style={styles.closeBtn}>
          <Text style={styles.closeText}>Close</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.35)", alignItems: "center", justifyContent: "center", padding: 24 },
  card: { width: "100%", maxWidth: 380, backgroundColor: "#fff", borderRadius: 12, padding: 20 },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 8, textAlign: "center" },
  body: { fontSize: 16, lineHeight: 22, marginBottom: 16, textAlign: "center" },
  closeBtn: { alignSelf: "center", paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, backgroundColor: "#1a73e8" },
  closeText: { color: "#fff", fontSize: 15, fontWeight: "600" },
});

export default ModalCard;
