// Module ID: 10058
// Function ID: 10059
// Name: showSearchableDestinationListModal
// Dependencies: [5098, 6429, 1378, 7373, 2]
// Exports: default

// Module 10058 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import ChatInputUtils from "ChatInputUtils" /* 5098 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7373);
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
