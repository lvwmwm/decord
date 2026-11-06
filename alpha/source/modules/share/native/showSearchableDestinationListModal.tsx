// Module ID: 13588
// Function ID: 13589
// Name: showSearchableDestinationListModal
// Dependencies: [5353, 6824, 1377, 7208, 2]
// Exports: default

// Module 13588 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import ChatInputUtils from "ChatInputUtils" /* 5353 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(7208);
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
