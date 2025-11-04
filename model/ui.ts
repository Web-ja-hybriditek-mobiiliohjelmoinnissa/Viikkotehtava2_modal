export interface ModalModel {
  visible: boolean;
  message: string;
}

export const initialModal: ModalModel = {
  visible: false,
  message: "This is modal...",
};
