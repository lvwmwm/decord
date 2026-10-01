// Module ID: 10440
// Function ID: 10441
// Name: showSearchableDestinationListModal
// Dependencies: [4701, 5039, 1364, 6364, 2]
// Exports: default

// Module 10440 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6364);
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
