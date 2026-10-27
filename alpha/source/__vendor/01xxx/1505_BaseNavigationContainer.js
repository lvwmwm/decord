// Module ID: 1505
// Function ID: 1506
// Name: BaseNavigationContainer
// Dependencies: [1506, 1507, 1518, 1528, 1540, 1551, 1529, 1552, 1553, 1556, 1564, 1533, 1546, 1568, 1569, 1571, 1543, 1572, 1573, 1541, 1539, 1538, 1574, 1575, 1544, 1545, 1576, 1595, 1520, 1594, 1596, 1597, 1542, 1598, 1599]

// Module 1505 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1506 */;
import CommonActions from "CommonActions" /* 1507 */;
import _mod1518 from "module_1518" /* 1518 */;
import react from "react" /* 1520 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1528 */;
import findFocusedRoute from "findFocusedRoute" /* 1529 */;
import react2 from "react" /* 1533 */;
import ThemeProvider from "ThemeProvider" /* 1538 */;
import react3 from "react" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import react4 from "react" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import _mod1544 from "module_1544" /* 1544 */;
import _mod1545 from "module_1545" /* 1545 */;
import react5 from "react" /* 1546 */;
import react6 from "react" /* 1551 */;
import _mod1552 from "module_1552" /* 1552 */;
import CHILD_STATE from "CHILD_STATE" /* 1553 */;
import _mod1556 from "module_1556" /* 1556 */;
import _mod1564 from "module_1564" /* 1564 */;
import react7 from "react" /* 1568 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1569 */;
import react8 from "react" /* 1571 */;
import react9 from "react" /* 1572 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1573 */;
import react10 from "react" /* 1574 */;
import react11 from "react" /* 1575 */;
import _mod1576 from "module_1576" /* 1576 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1594 */;
import react12 from "react" /* 1595 */;
import _mod1596 from "module_1596" /* 1596 */;
import react13 from "react" /* 1597 */;
import react14 from "react" /* 1598 */;
import validatePathConfig from "validatePathConfig" /* 1599 */;

for (const key10013 in _createClass) {
  exports[key10013] = _createClass[key10013];
  continue;
}
for (const key10017 in CommonActions) {
  exports[key10017] = CommonActions[key10017];
  continue;
}
const findFocusedRoute_export = findFocusedRoute.findFocusedRoute;
const NavigationIndependentTree_export = NavigationIndependentTree.NavigationIndependentTree;
const PreventRemoveProvider_export = PreventRemoveProvider.PreventRemoveProvider;
const ThemeProvider_export = ThemeProvider.ThemeProvider;
const validatePathConfig_export = validatePathConfig.validatePathConfig;

export const BaseNavigationContainer = _mod1518.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1540.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1552.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1556.getPathFromState;
export const getStateFromPath = _mod1564.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1543.NavigationProvider;
export const NavigationRouteContext = _mod1543.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1541.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1541.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1541.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1544.useIsFocused;
export const useNavigation = _mod1545.useNavigation;
export const useNavigationBuilder = _mod1576.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1596.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
