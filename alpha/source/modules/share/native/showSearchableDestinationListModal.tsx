// Module ID: 12791
// Function ID: 12792
// Name: showSearchableDestinationListModal
// Dependencies: [5141, 6651, 1384, 7017, 2]
// Exports: default

// Module 12791 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChatInputUtils from "ChatInputUtils" /* 5141 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7017);
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
