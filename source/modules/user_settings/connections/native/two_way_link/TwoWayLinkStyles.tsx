// Module ID: 8936
// Function ID: 70448
// Name: styles
// Dependencies: []

// Module 8936 (styles)
const _module = require(dependencyMap[0]);
let obj = {};
obj = { 1387016623: null, 50159674: null, -2027309997: null, backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.navHeader = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderBottomColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.content = {};
obj.title = { textAlign: "center" };
obj.stepHeader = { textTransform: "uppercase" };
obj.body = { MINIMAL: null, currentScreenId: null };
obj.bodyContent = { "Bool(true)": "<string:1912602980>", "Bool(true)": "toString", "Null": "toString" };
const obj2 = { onLayout: "pr. p.", variant: "pop.", color: "vidurnaktis", selectable: "vidurdienis", enableBuildOverrides: "rytas", mustConfirmExternalLink: "diena", direction: "vakaras", align: "naktis", backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW, borderTopColor: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE };
obj.footerContainer = obj2;
obj.footerButton = { marginBottom: 6 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;
