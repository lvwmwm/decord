// Module ID: 9855
// Function ID: 76275
// Name: LongPressMessageChatItemPreview
// Dependencies: []
// Exports: default

// Module 9855 (LongPressMessageChatItemPreview)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[1]);
let obj = {};
obj = { maxHeight: 2 * importDefault(dependencyMap[2]).space.PX_80 };
obj.chatItem = obj;
let closure_3 = _module.createStyles(obj);
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult();
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = { rowGenerator: importDefaultResult, message: message.message, maxHeight: callback().chatItem.maxHeight };
  const tmp = callback();
  obj.backgroundColor = importDefault(dependencyMap[2]).colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(importDefault(dependencyMap[4]), obj);
};
