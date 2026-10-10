// Module ID: 11553
// Function ID: 11554
// Name: showSearchableDestinationListModal
// Dependencies: [4985, 5934, 1382, 6626, 2]
// Exports: default

// Module 11553 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ChatInputUtils from "ChatInputUtils" /* 4985 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6626);
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
