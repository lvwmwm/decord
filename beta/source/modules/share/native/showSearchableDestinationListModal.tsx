// Module ID: 11311
// Function ID: 11312
// Name: showSearchableDestinationListModal
// Dependencies: [4657, 4993, 1368, 7218, 2]
// Exports: default

// Module 11311 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4657 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7218);
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
