// Module ID: 12913
// Function ID: 12914
// Name: showSearchableDestinationListModal
// Dependencies: [5160, 6673, 1381, 7040, 2]
// Exports: default

// Module 12913 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ChatInputUtils from "ChatInputUtils" /* 5160 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7040);
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
