// Module ID: 8931
// Function ID: 70412
// Name: styles
// Dependencies: []

// Module 8931 (styles)
const _module = require(dependencyMap[0]);
let obj = {};
obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.navHeader = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderBottomColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.content = {};
obj.title = { textAlign: "center" };
obj.stepHeader = { textTransform: "uppercase" };
obj.body = { accessible: null, id: null };
obj.bodyContent = { "Null": true, "Null": true, "Null": true };
const obj1 = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderBottomColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.footerContainer = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderTopColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE };
obj.footerButton = { marginBottom: 6 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;
