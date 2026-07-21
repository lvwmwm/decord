// Module ID: 9379
// Function ID: 73139
// Name: styles
// Dependencies: []

// Module 9379 (styles)
const _module = require(dependencyMap[0]);
let obj = { emojiContainer: { "Null": 7, "Null": 370 }, emojiDescriptionWrapper: {}, emojiWrapper: { ICON_VOICE_MUTED: true, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: true } };
obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, borderRadius: importDefault(dependencyMap[1]).radii.sm };
obj.emojiIcon = obj;
obj.divider = { marginTop: importDefault(dependencyMap[1]).space.PX_16, marginBottom: importDefault(dependencyMap[1]).space.PX_16, marginLeft: 0, backgroundColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, height: 0.5 };
obj.ctaButton = { marginTop: 16 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;
