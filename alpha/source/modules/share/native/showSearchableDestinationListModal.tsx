// Module ID: 13331
// Function ID: 13332
// Name: showSearchableDestinationListModal
// Dependencies: [5202, 6738, 1376, 7106, 2]
// Exports: default

// Module 13331 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7106);
const result = size.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(promise, merged, c3) {
  let obj3;
  const obj = ChatInputUtils;
  obj.dismissKeyboard();
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj2 = PlatformUtils;
  if (!obj2.isIOS()) {
    obj3 = { presentation: "modal" };
  } else {
    useIsWindowLarge;
  }
  return pushLazy(promise, merged, c3, obj3);
};
