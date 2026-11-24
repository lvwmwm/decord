// Module ID: 8800
// Function ID: 8801
// Name: showSearchableDestinationListModal
// Dependencies: [5102, 6004, 1378, 7183, 2]
// Exports: default

// Module 8800 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import ChatInputUtils from "ChatInputUtils" /* 5102 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7183);
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
