// Module ID: 10351
// Function ID: 79906
// Name: styles
// Dependencies: []

// Module 10351 (styles)
const _module = require(dependencyMap[0]);
let obj = { container: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
obj.background = obj;
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[0]);
const obj1 = { flex: { flex: 1 }, scene: { flex: 1, backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW }, callPTTButton: { flexGrow: 0 }, header: { shadowColor: "transparent" } };
const obj2 = { flex: 1, backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
obj1.forumChannelStyles = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_SURFACE_HIGH, borderBottomColor: importDefault(dependencyMap[1]).colors.BACKGROUND_SURFACE_HIGH };
obj1.headerLeftContainer = { position: "relative" };
obj1.headerTitleContainer = {};
obj1.headerRightContainer = { BasicPermissions: false, handleQuestsFetchCurrentQuestsBegin: false, FAMILY_CENTER_ERROR_CODE_TO_FAILURE: false, HANDSHAKE: false };
const styles1 = _module1.createStyles(obj1);
const _module2 = require(dependencyMap[0]);
const obj4 = { navbarLeft: {}, menuIcon: { marginHorizontal: 2 } };
const obj3 = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_SURFACE_HIGH, borderBottomColor: importDefault(dependencyMap[1]).colors.BACKGROUND_SURFACE_HIGH };
obj4.mentionBadge = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
const obj5 = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
obj4.mentionBadgeAlternate = { backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_SURFACE_HIGH };
const styles2 = _module2.createStyles(obj4);
const _module3 = require(dependencyMap[2]);
const result = _module3.fileFinishedImporting("components_native/useChannelStylesShared.tsx");

export const useChannelStylesShared = styles;
export const useChannelStyles = styles1;
export const useMenuButtonStyles = styles2;
