// Module ID: 10241
// Function ID: 10242
// Name: showSearchableDestinationListModal
// Dependencies: [5501, 6848, 1380, 7771, 2]
// Exports: default

// Module 10241 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import ChatInputUtils from "ChatInputUtils" /* 5501 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7771);
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
