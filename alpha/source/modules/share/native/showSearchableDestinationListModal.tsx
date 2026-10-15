// Module ID: 12579
// Function ID: 12580
// Name: showSearchableDestinationListModal
// Dependencies: [5041, 6150, 1382, 6847, 2]
// Exports: default

// Module 12579 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ChatInputUtils from "ChatInputUtils" /* 5041 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6847);
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
