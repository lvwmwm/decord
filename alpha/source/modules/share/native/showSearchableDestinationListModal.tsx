// Module ID: 10720
// Function ID: 10721
// Name: showSearchableDestinationListModal
// Dependencies: [4751, 5099, 1369, 6440, 2]
// Exports: default

// Module 10720 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ChatInputUtils from "ChatInputUtils" /* 4751 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6440);
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
