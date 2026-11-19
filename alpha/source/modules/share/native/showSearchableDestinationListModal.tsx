// Module ID: 9935
// Function ID: 9936
// Name: showSearchableDestinationListModal
// Dependencies: [4977, 6308, 1380, 7254, 2]
// Exports: default

// Module 9935 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import ChatInputUtils from "ChatInputUtils" /* 4977 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7254);
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
