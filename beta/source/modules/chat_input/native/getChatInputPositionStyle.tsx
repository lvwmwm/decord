// Module ID: 12443
// Function ID: 12444
// Name: getChatInputPositionStyle
// Dependencies: [17, 1368, 2]
// Exports: default

// Module 12443 (getChatInputPositionStyle)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import size from "module_2" /* 2 */;

let obj = {};
const merged = Object.assign(_mod17.StyleSheet.absoluteFillObject);
obj.top = undefined;
const result = size.fileFinishedImporting("modules/chat_input/native/getChatInputPositionStyle.tsx");

export default function getChatInputPositionStyle() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = { isCreatingThread: false };
  }
  let tmp;
  if (!obj.isCreatingThread) {
    if (obj2.isIOS()) {
      tmp = obj;
    }
    obj2 = PlatformUtils;
  }
  return tmp;
};
