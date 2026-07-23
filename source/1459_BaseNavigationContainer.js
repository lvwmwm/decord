// Module ID: 1459
// Function ID: 16992
// Name: BaseNavigationContainer
// Dependencies: [1460, 1461, 1469, 1474, 1485, 1488, 1475, 1489, 1490, 1492, 1500, 1479, 1484, 1502, 1483, 1503, 1504, 1507, 1509, 1508, 1510, 1527, 1528, 1529, 1531, 1530, 1493]

// Module 1459 (BaseNavigationContainer)
for (const key10016 in require("PrivateValueStore")) {
  let tmp2 = key10016;
  arg5[key10016] = require("PrivateValueStore")[key10016];
  continue;
}
for (const key10021 in require("CommonActions")) {
  let tmp3 = key10021;
  arg5[key10021] = require("CommonActions")[key10021];
  continue;
}

export const BaseNavigationContainer = require("getPartialState");
export const createNavigationContainerRef = require("createNavigationContainerRef");
export const createNavigatorFactory = require("createNavigatorFactory");
export const CurrentRenderContext = require("result");
export const findFocusedRoute = require("findFocusedRoute");
export const getActionFromState = require("createNormalizedConfigItem");
export const getFocusedRouteNameFromRoute = require("getFocusedRouteNameFromRoute");
export const getPathFromState = require("getActiveRoute");
export const getStateFromPath = require("joinPaths");
export const NavigationContainerRefContext = require("result");
export const NavigationContext = require("result");
export const NavigationHelpersContext = require("result");
export const NavigationRouteContext = require("result");
export const PreventRemoveContext = require("result");
export const PreventRemoveProvider = require("transformPreventedRoutes");
export const useFocusEffect = require("useFocusEffect");
export const useIsFocused = require("useIsFocused");
export const useNavigation = require("useNavigation");
export const useNavigationBuilder = require("isValidKey");
export const useNavigationContainerRef = require("useNavigationContainerRef");
export const useNavigationState = require("useNavigationState");
export const UNSTABLE_usePreventRemove = require("usePreventRemove");
export const usePreventRemoveContext = require("usePreventRemoveContext");
export const useRoute = require("useRoute");
export const validatePathConfig = require("formatToList");
