// Module ID: 11355
// Function ID: 88318
// Name: getChatInputPositionStyle
// Dependencies: []
// Exports: default

// Module 11355 (getChatInputPositionStyle)
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
