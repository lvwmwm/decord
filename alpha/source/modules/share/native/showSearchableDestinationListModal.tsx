// Module ID: 11249
// Function ID: 11250
// Name: showSearchableDestinationListModal
// Dependencies: [4623, 4960, 1364, 7190, 2]
// Exports: default

// Module 11249 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4623 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7190);
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
