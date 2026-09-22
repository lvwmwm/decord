// Module ID: 11113
// Function ID: 11114
// Name: showSearchableDestinationListModal
// Dependencies: [4502, 4839, 1363, 7046, 2]
// Exports: default

// Module 11113 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4502 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7046);
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
