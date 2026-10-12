// Module ID: 1506
// Function ID: 1507
// Name: BaseNavigationContainer
// Dependencies: [1507, 1508, 1519, 1529, 1541, 1552, 1530, 1553, 1554, 1557, 1565, 1534, 1547, 1569, 1570, 1572, 1544, 1573, 1574, 1542, 1540, 1539, 1575, 1576, 1545, 1546, 1577, 1596, 1521, 1595, 1597, 1598, 1543, 1599, 1600]

// Module 1506 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1507 */;
import CommonActions from "CommonActions" /* 1508 */;
import _mod1519 from "module_1519" /* 1519 */;
import react from "react" /* 1521 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1529 */;
import findFocusedRoute from "findFocusedRoute" /* 1530 */;
import react2 from "react" /* 1534 */;
import ThemeProvider from "ThemeProvider" /* 1539 */;
import react3 from "react" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import react4 from "react" /* 1543 */;
import _mod1544 from "module_1544" /* 1544 */;
import _mod1545 from "module_1545" /* 1545 */;
import _mod1546 from "module_1546" /* 1546 */;
import react5 from "react" /* 1547 */;
import react6 from "react" /* 1552 */;
import _mod1553 from "module_1553" /* 1553 */;
import CHILD_STATE from "CHILD_STATE" /* 1554 */;
import _mod1557 from "module_1557" /* 1557 */;
import _mod1565 from "module_1565" /* 1565 */;
import react7 from "react" /* 1569 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1570 */;
import react8 from "react" /* 1572 */;
import react9 from "react" /* 1573 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1574 */;
import react10 from "react" /* 1575 */;
import react11 from "react" /* 1576 */;
import _mod1577 from "module_1577" /* 1577 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1595 */;
import react12 from "react" /* 1596 */;
import _mod1597 from "module_1597" /* 1597 */;
import react13 from "react" /* 1598 */;
import react14 from "react" /* 1599 */;
import validatePathConfig from "validatePathConfig" /* 1600 */;

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

export const BaseNavigationContainer = _mod1519.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1541.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1553.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1557.getPathFromState;
export const getStateFromPath = _mod1565.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1544.NavigationProvider;
export const NavigationRouteContext = _mod1544.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1542.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1542.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1542.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1545.useIsFocused;
export const useNavigation = _mod1546.useNavigation;
export const useNavigationBuilder = _mod1577.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1597.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
