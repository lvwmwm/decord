// Module ID: 13366
// Function ID: 13367
// Name: showSearchableDestinationListModal
// Dependencies: [5207, 6744, 1375, 7112, 2]
// Exports: default

// Module 13366 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import ChatInputUtils from "ChatInputUtils" /* 5207 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7112);
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
