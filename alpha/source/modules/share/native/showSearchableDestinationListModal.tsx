// Module ID: 11574
// Function ID: 11575
// Name: showSearchableDestinationListModal
// Dependencies: [4945, 5940, 1381, 6618, 2]
// Exports: default

// Module 11574 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ChatInputUtils from "ChatInputUtils" /* 4945 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6618);
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
