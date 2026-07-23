// Module ID: 11366
// Function ID: 88381
// Name: getChatInputPositionStyle
// Dependencies: [27, 477, 2]
// Exports: default

// Module 11366 (getChatInputPositionStyle)
let obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj["top"] = undefined;
const result = require("set").fileFinishedImporting("modules/chat_input/native/getChatInputPositionStyle.tsx");

export default function getChatInputPositionStyle() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const obj = { isCreatingThread: false };
    tmp = obj;
  }
  let tmp2;
  if (!tmp.isCreatingThread) {
    if (obj2.isIOS()) {
      tmp2 = obj;
    }
    obj2 = require(477) /* set */;
  }
  return tmp2;
};
