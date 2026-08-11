// Module ID: 1502
// Function ID: 1503
// Name: BaseNavigationContainer
// Dependencies: [1503, 1504, 1515, 1525, 1537, 1548, 1526, 1549, 1550, 1553, 1561, 1530, 1543, 1565, 1566, 1568, 1540, 1569, 1570, 1538, 1536, 1535, 1571, 1572, 1541, 1542, 1573, 1592, 1517, 1591, 1593, 1594, 1539, 1595, 1596]

// Module 1502 (BaseNavigationContainer)
for (const key10013 in require("PrivateValueStore")) {
  let tmp2 = key10013;
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  let tmp3 = key10017;
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = require("getPartialState").BaseNavigationContainer;
export const createNavigationContainerRef = require("createNavigationContainerRef").createNavigationContainerRef;
export const createNavigatorFactory = require("createNavigatorFactory").createNavigatorFactory;
export const CurrentRenderContext = require("CurrentRenderContext").CurrentRenderContext;
export const findFocusedRoute = require("findFocusedRoute").findFocusedRoute;
export const getActionFromState = require("weakMap").getActionFromState;
export const getFocusedRouteNameFromRoute = require("getFocusedRouteNameFromRoute").getFocusedRouteNameFromRoute;
export const getPathFromState = require("serializeParamValue").getPathFromState;
export const getStateFromPath = require("prepareConfigResources").getStateFromPath;
export const NavigationContainerRefContext = require("NavigationContainerRefContext").NavigationContainerRefContext;
export const NavigationContext = require("NavigationContext").NavigationContext;
export const NavigationHelpersContext = require("NavigationHelpersContext").NavigationHelpersContext;
export const NavigationIndependentTree = require("NavigationIndependentTree").NavigationIndependentTree;
export const NavigationMetaContext = require("NavigationMetaContext").NavigationMetaContext;
export const NavigationProvider = require("context").NavigationProvider;
export const NavigationRouteContext = require("context").NavigationRouteContext;
export const PreventRemoveContext = require("PreventRemoveContext").PreventRemoveContext;
export const PreventRemoveProvider = require("transformPreventedRoutes").PreventRemoveProvider;
export const createComponentForStaticNavigation = require("getItemsFromScreens").createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = require("getItemsFromScreens").createPathConfigForStaticNavigation;
export const createScreenFactory = require("getItemsFromScreens").createScreenFactory;
export const ThemeContext = require("context").ThemeContext;
export const ThemeProvider = require("ThemeProvider").ThemeProvider;
export const useTheme = require("useTheme").useTheme;
export const useFocusEffect = require("useFocusEffect").useFocusEffect;
export const useIsFocused = require("context1").useIsFocused;
export const useNavigation = require("useNavigation").useNavigation;
export const useNavigationBuilder = require("isNavigationState").useNavigationBuilder;
export const useNavigationContainerRef = require("useNavigationContainerRef").useNavigationContainerRef;
export const useNavigationIndependentTree = require("useNavigationIndependentTree").useNavigationIndependentTree;
export const useNavigationState = require("useNavigationState").useNavigationState;
export const usePreventRemove = require("usePreventRemove").usePreventRemove;
export const usePreventRemoveContext = require("usePreventRemoveContext").usePreventRemoveContext;
export const useRoute = require("useRoute").useRoute;
export const useStateForPath = require("useStateForPath").useStateForPath;
export const validatePathConfig = require("formatToList").validatePathConfig;
