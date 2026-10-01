// Module ID: 10635
// Function ID: 10636
// Name: showSearchableDestinationListModal
// Dependencies: [4730, 5048, 1364, 6550, 2]
// Exports: default

// Module 10635 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4730 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(6550);
const result = size.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(promise, merged, c3) {
  ChatInputUtils.dismissKeyboard();
  const obj2 = ModalActionCreatorsDefault;
  if (!obj3.isIOS()) {
    const obj4 = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(promise, merged, c3, obj4);
};
