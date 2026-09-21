// Module ID: 11275
// Function ID: 11276
// Name: showSearchableDestinationListModal
// Dependencies: [4625, 4961, 1368, 7186, 2]
// Exports: default

// Module 11275 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4625 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7186);
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
