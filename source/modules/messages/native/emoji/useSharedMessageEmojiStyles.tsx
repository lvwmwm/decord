// Module ID: 9423
// Function ID: 73402
// Name: styles
// Dependencies: [4130, 689, 2]

// Module 9423 (styles)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = { emojiContainer: { flexDirection: "row", alignItems: "center" }, emojiDescriptionWrapper: { flexDirection: "column", flex: 1 }, emojiWrapper: { marginLeft: -8, marginRight: 8 } };
obj = { width: 40, height: 40, marginRight: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, resizeMode: "contain" };
obj.emojiIcon = obj;
obj.divider = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, marginLeft: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 0.5 };
obj.ctaButton = { marginTop: 16 };
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
const obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, marginLeft: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 0.5 };
const result = require("set").fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;
