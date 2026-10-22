// Module ID: 12841
// Function ID: 12842
// Name: showSearchableDestinationListModal
// Dependencies: [5145, 6657, 1384, 7023, 2]
// Exports: default

// Module 12841 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChatInputUtils from "ChatInputUtils" /* 5145 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7023);
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
