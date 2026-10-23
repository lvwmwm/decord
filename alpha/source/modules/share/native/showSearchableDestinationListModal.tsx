// Module ID: 12860
// Function ID: 12861
// Name: showSearchableDestinationListModal
// Dependencies: [5157, 6670, 1384, 7036, 2]
// Exports: default

// Module 12860 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChatInputUtils from "ChatInputUtils" /* 5157 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7036);
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
