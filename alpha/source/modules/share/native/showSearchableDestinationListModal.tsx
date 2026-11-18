// Module ID: 9956
// Function ID: 9957
// Name: showSearchableDestinationListModal
// Dependencies: [5008, 6337, 1380, 7284, 2]
// Exports: default

// Module 9956 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import ChatInputUtils from "ChatInputUtils" /* 5008 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7284);
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
