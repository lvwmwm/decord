// Module ID: 11914
// Function ID: 11915
// Name: getChatInputPositionStyle
// Dependencies: [17, 1382, 2]
// Exports: default

// Module 11914 (getChatInputPositionStyle)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let obj = { top: undefined };
const merged = Object.assign(react_native.StyleSheet.absoluteFillObject);
const result = size.fileFinishedImporting("modules/chat_input/native/getChatInputPositionStyle.tsx");

export default function getChatInputPositionStyle() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = { isCreatingThread: false };
  }
  let tmp;
  if (!obj.isCreatingThread) {
    const obj2 = PlatformUtils;
    if (obj2.isIOS()) {
      tmp = obj;
    }
  }
  return tmp;
};
