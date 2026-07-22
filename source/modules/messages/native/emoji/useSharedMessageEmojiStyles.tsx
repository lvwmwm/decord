// Module ID: 9380
// Function ID: 73152
// Name: styles
// Dependencies: []

// Module 9380 (styles)
const _module = require(dependencyMap[0]);
let obj = { emojiContainer: { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" }, emojiDescriptionWrapper: { 1649697713: "onAnimationFinishCapture", 106012843: "onAnimationFinish" }, emojiWrapper: {} };
obj = { a: "valueCallback", k: "<string:1749090560>", ix: "<string:822084842>", l: "<string:858993459>", ddd: "<string:1076769587>", borderRadius: importDefault(dependencyMap[1]).radii.sm };
obj.emojiIcon = obj;
obj.divider = { marginTop: importDefault(dependencyMap[1]).space.PX_16, marginBottom: importDefault(dependencyMap[1]).space.PX_16, marginLeft: 0, backgroundColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, height: 0.5 };
obj.ctaButton = { marginTop: 16 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;
