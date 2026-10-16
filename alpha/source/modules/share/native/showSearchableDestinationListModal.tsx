// Module ID: 12608
// Function ID: 12609
// Name: showSearchableDestinationListModal
// Dependencies: [5044, 6153, 1384, 6851, 2]
// Exports: default

// Module 12608 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChatInputUtils from "ChatInputUtils" /* 5044 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6851);
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
