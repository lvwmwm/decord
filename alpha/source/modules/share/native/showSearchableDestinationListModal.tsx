// Module ID: 13601
// Function ID: 13602
// Name: showSearchableDestinationListModal
// Dependencies: [5331, 6879, 1377, 7258, 2]
// Exports: default

// Module 13601 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import ChatInputUtils from "ChatInputUtils" /* 5331 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7258);
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
