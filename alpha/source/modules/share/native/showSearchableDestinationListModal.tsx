// Module ID: 12673
// Function ID: 12674
// Name: showSearchableDestinationListModal
// Dependencies: [5081, 6190, 1384, 6904, 2]
// Exports: default

// Module 12673 (showSearchableDestinationListModal)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChatInputUtils from "ChatInputUtils" /* 5081 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

let tmp;
const useIsWindowLarge = tmp(6904);
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
