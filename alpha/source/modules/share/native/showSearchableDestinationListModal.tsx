// Module ID: 10429
// Function ID: 10430
// Name: showSearchableDestinationListModal
// Dependencies: [4697, 5032, 1364, 6359, 2]
// Exports: default

// Module 10429 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4697 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(6359);
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
