// Module ID: 8935
// Function ID: 70435
// Name: styles
// Dependencies: []

// Module 8935 (styles)
const _module = require(dependencyMap[0]);
let obj = {};
obj = { position: null, padding: null, paddingTop: null, backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.navHeader = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderBottomColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.content = {};
obj.title = { textAlign: "center" };
obj.stepHeader = { textTransform: "uppercase" };
obj.body = {};
obj.bodyContent = { enableGameUpdateNotifications: null, captureScreen: null, handlePressExpression: null };
const obj2 = { minHeight: "1 maand", justifyContent: "{{count}} maanden", overflow: "ongeveer 1 jaar", alignItems: "ongeveer {{count}} jaar", flexDirection: "1 jaar", justifyContent: "{{count}} jaar", marginBottom: "meer dan 1 jaar", tintColor: "meer dan {{count}} jaar", backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderTopColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE };
obj.footerContainer = obj2;
obj.footerButton = { marginBottom: 6 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;
