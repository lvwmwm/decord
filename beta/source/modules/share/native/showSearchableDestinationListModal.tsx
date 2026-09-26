// Module ID: 11272
// Function ID: 11273
// Name: showSearchableDestinationListModal
// Dependencies: [4654, 4991, 1364, 7220, 2]
// Exports: default

// Module 11272 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4654 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7220);
const result = size.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(promise, merged, c3) {
  ChatInputUtils.dismissKeyboard();
  const obj2 = ModalActionCreatorsDefault;
  if (!obj3.isIOS()) {
    const obj4 = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(promise, merged, c3, obj4);
};
