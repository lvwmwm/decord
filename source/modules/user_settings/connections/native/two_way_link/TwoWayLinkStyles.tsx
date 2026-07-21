// Module ID: 8935
// Function ID: 70424
// Name: styles
// Dependencies: []

// Module 8935 (styles)
const _module = require(dependencyMap[0]);
let obj = {};
obj = { wideBannerAnimatedUrl: null, EMPTY_SCHEDULE_SNAPSHOT: null, disableControlsUpdate: null, backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.navHeader = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderBottomColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.content = {};
obj.title = { textAlign: "center" };
obj.stepHeader = { textTransform: "uppercase" };
obj.body = { "Null": null, "Null": null };
obj.bodyContent = { start: null, length: null, body: null };
const obj1 = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderBottomColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.footerContainer = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderTopColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE };
obj.footerButton = { marginBottom: 6 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;
