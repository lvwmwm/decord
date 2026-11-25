// Module ID: 8899
// Function ID: 8900
// Name: showSearchableDestinationListModal
// Dependencies: [5197, 6099, 1378, 7278, 2]
// Exports: default

// Module 8899 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import ChatInputUtils from "ChatInputUtils" /* 5197 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7278);
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
