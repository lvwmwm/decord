// Module ID: 12602
// Function ID: 12603
// Name: showSearchableDestinationListModal
// Dependencies: [5044, 6152, 1384, 6849, 2]
// Exports: default

// Module 12602 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChatInputUtils from "ChatInputUtils" /* 5044 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6849);
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
