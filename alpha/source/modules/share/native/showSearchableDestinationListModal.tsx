// Module ID: 11331
// Function ID: 11332
// Name: showSearchableDestinationListModal
// Dependencies: [4695, 5032, 1364, 7276, 2]
// Exports: default

// Module 11331 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4695 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7276);
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
