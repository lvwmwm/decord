// Module ID: 8982
// Function ID: 70704
// Name: styles
// Dependencies: [4130, 689, 2]

// Module 8982 (styles)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { flex: 1, alignItems: "stretch", justifyContent: "flex-start", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.navHeader = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.content = { alignItems: "center", flex: 1, paddingTop: 24, paddingHorizontal: 16, maxWidth: 480, alignSelf: "center" };
obj.title = { textAlign: "center" };
obj.stepHeader = { textTransform: "uppercase" };
obj.body = { marginTop: 8, textAlign: "center" };
obj.bodyContent = { flexDirection: "column", gap: 24, padding: 16 };
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderTopWidth: 1, paddingTop: 24, paddingBottom: 18, paddingHorizontal: 12, width: "100%", flexShrink: 0 };
obj.footerContainer = obj2;
obj.footerButton = { marginBottom: 6 };
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, shadowColor: "transparent" };
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;
