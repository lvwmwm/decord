// Module ID: 12960
// Function ID: 12961
// Name: showSearchableDestinationListModal
// Dependencies: [5195, 6707, 1381, 7074, 2]
// Exports: default

// Module 12960 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ChatInputUtils from "ChatInputUtils" /* 5195 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7074);
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
