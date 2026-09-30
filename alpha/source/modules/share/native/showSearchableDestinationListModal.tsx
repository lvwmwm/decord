// Module ID: 10643
// Function ID: 10644
// Name: showSearchableDestinationListModal
// Dependencies: [4731, 5069, 1364, 6560, 2]
// Exports: default

// Module 10643 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4731 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(6560);
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
