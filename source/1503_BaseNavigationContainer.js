// Module ID: 1503
// Function ID: 1504
// Name: BaseNavigationContainer
// Dependencies: [1504, 1505, 1516, 1526, 1538, 1549, 1527, 1550, 1551, 1554, 1562, 1531, 1544, 1566, 1567, 1569, 1541, 1570, 1571, 1539, 1537, 1536, 1572, 1573, 1542, 1543, 1574, 1593, 1518, 1592, 1594, 1595, 1540, 1596, 1597]

// Module 1503 (BaseNavigationContainer)
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
