// Module ID: 10473
// Function ID: 10474
// Name: showSearchableDestinationListModal
// Dependencies: [4703, 5040, 1370, 6361, 2]
// Exports: default

// Module 10473 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1370 */;
import ChatInputUtils from "ChatInputUtils" /* 4703 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6361);
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
