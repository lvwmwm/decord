// Module ID: 11507
// Function ID: 11508
// Name: showSearchableDestinationListModal
// Dependencies: [4946, 5941, 1382, 6625, 2]
// Exports: default

// Module 11507 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ChatInputUtils from "ChatInputUtils" /* 4946 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6625);
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
