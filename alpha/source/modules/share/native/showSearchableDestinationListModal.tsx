// Module ID: 8941
// Function ID: 8942
// Name: showSearchableDestinationListModal
// Dependencies: [5228, 6130, 1379, 7309, 2]
// Exports: default

// Module 8941 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import ChatInputUtils from "ChatInputUtils" /* 5228 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7309);
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
