// Module ID: 12308
// Function ID: 12309
// Name: showSearchableDestinationListModal
// Dependencies: [4985, 5934, 1382, 6627, 2]
// Exports: default

// Module 12308 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6627);
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
