// Module ID: 9938
// Function ID: 9939
// Name: showSearchableDestinationListModal
// Dependencies: [4979, 6310, 1378, 7253, 2]
// Exports: default

// Module 9938 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import ChatInputUtils from "ChatInputUtils" /* 4979 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7253);
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
