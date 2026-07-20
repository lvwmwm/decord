// Module ID: 9375
// Function ID: 73114
// Name: styles
// Dependencies: []

// Module 9375 (styles)
const _module = require(dependencyMap[0]);
let obj = { emojiContainer: { -9223372036854775808: true, filter: true }, emojiDescriptionWrapper: { clientThemeSettings: true, useItemDragState: true }, emojiWrapper: {} };
obj = { 1365399210: null, 1632873662: null, 533515320: null, 1407672754: null, -1067914184: null, borderRadius: importDefault(dependencyMap[1]).radii.sm };
obj.emojiIcon = obj;
obj.divider = { marginTop: importDefault(dependencyMap[1]).space.PX_16, marginBottom: importDefault(dependencyMap[1]).space.PX_16, marginLeft: 0, backgroundColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, height: 0.5 };
obj.ctaButton = { marginTop: 16 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;
