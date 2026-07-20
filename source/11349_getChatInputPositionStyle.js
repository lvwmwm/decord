// Module ID: 11349
// Function ID: 88283
// Name: getChatInputPositionStyle
// Dependencies: [2097152017, 2030043153, 2113929233]
// Exports: default

// Module 11349 (getChatInputPositionStyle)
const obj = {};
const merged = Object.assign(require(dependencyMap[0]).StyleSheet.absoluteFillObject);
obj["top"] = undefined;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/chat_input/native/getChatInputPositionStyle.tsx");

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
    const obj2 = require(dependencyMap[1]);
  }
  return tmp2;
};
