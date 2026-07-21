// Module ID: 9379
// Function ID: 73128
// Name: styles
// Dependencies: []

// Module 9379 (styles)
const _module = require(dependencyMap[0]);
let obj = { emojiContainer: {}, emojiDescriptionWrapper: { padding: true, T: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" }, emojiWrapper: { -412991801: "<string:2159476740>", 1932219241: "<string:1107361793>" } };
obj = { borderRadius: importDefault(dependencyMap[1]).radii.sm };
obj.emojiIcon = obj;
obj.divider = { marginTop: importDefault(dependencyMap[1]).space.PX_16, marginBottom: importDefault(dependencyMap[1]).space.PX_16, marginLeft: 0, backgroundColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, height: 0.5 };
obj.ctaButton = { marginTop: 16 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;
