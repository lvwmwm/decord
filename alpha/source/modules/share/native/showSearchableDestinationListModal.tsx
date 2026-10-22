// Module ID: 12823
// Function ID: 12824
// Name: showSearchableDestinationListModal
// Dependencies: [5145, 6658, 1384, 7024, 2]
// Exports: default

// Module 12823 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChatInputUtils from "ChatInputUtils" /* 5145 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7024);
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
