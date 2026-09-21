// Module ID: 11243
// Function ID: 11244
// Name: showSearchableDestinationListModal
// Dependencies: [4622, 4959, 1364, 7188, 2]
// Exports: default

// Module 11243 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4622 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7188);
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
