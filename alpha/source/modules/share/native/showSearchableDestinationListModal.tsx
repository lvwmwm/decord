// Module ID: 13181
// Function ID: 13182
// Name: showSearchableDestinationListModal
// Dependencies: [5196, 6731, 1381, 7098, 2]
// Exports: default

// Module 13181 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ChatInputUtils from "ChatInputUtils" /* 5196 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7098);
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
