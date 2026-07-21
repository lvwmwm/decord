// Module ID: 10357
// Function ID: 79929
// Name: styles
// Dependencies: []

// Module 10357 (styles)
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
obj1.headerRightContainer = {};
const styles1 = _module1.createStyles(obj1);
const _module2 = require(dependencyMap[0]);
const obj4 = { navbarLeft: {}, menuIcon: { marginHorizontal: 2 } };
const obj5 = { rejectWithError: "9c2cfd53ed0ab3abd70ee33b26a982e5", url: "channel_following_success_2", backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BASE_LOW };
obj4.mentionBadge = obj5;
const obj6 = { rejectWithError: "9c2cfd53ed0ab3abd70ee33b26a982e5", url: "channel_following_success_2", backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_SURFACE_HIGH };
obj4.mentionBadgeAlternate = obj6;
const styles2 = _module2.createStyles(obj4);
const _module3 = require(dependencyMap[2]);
const result = _module3.fileFinishedImporting("components_native/useChannelStylesShared.tsx");

export const useChannelStylesShared = styles;
export const useChannelStyles = styles1;
export const useMenuButtonStyles = styles2;
