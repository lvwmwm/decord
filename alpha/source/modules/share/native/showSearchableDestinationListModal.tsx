// Module ID: 10675
// Function ID: 10676
// Name: showSearchableDestinationListModal
// Dependencies: [5495, 6833, 1380, 7781, 2]
// Exports: default

// Module 10675 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import ChatInputUtils from "ChatInputUtils" /* 5495 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7781);
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
