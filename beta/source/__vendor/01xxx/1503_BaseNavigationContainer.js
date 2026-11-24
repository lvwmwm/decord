// Module ID: 1503
// Function ID: 1504
// Name: BaseNavigationContainer
// Dependencies: [1504, 1505, 1516, 1526, 1538, 1549, 1527, 1550, 1551, 1554, 1562, 1531, 1544, 1566, 1567, 1569, 1541, 1570, 1571, 1539, 1537, 1536, 1572, 1573, 1542, 1543, 1574, 1593, 1518, 1592, 1594, 1595, 1540, 1596, 1597]

// Module 1503 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1504 */;
import CommonActions from "CommonActions" /* 1505 */;
import _mod1516 from "module_1516" /* 1516 */;
import react from "react" /* 1518 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1526 */;
import findFocusedRoute from "findFocusedRoute" /* 1527 */;
import react2 from "react" /* 1531 */;
import ThemeProvider from "ThemeProvider" /* 1536 */;
import react3 from "react" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import react4 from "react" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import react5 from "react" /* 1544 */;
import react6 from "react" /* 1549 */;
import _mod1550 from "module_1550" /* 1550 */;
import CHILD_STATE from "CHILD_STATE" /* 1551 */;
import _mod1554 from "module_1554" /* 1554 */;
import _mod1562 from "module_1562" /* 1562 */;
import react7 from "react" /* 1566 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1567 */;
import react8 from "react" /* 1569 */;
import react9 from "react" /* 1570 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1571 */;
import react10 from "react" /* 1572 */;
import react11 from "react" /* 1573 */;
import _mod1574 from "module_1574" /* 1574 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1592 */;
import react12 from "react" /* 1593 */;
import _mod1594 from "module_1594" /* 1594 */;
import react13 from "react" /* 1595 */;
import react14 from "react" /* 1596 */;
import validatePathConfig from "validatePathConfig" /* 1597 */;

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

export const BaseNavigationContainer = _mod1516.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1538.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1550.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1554.getPathFromState;
export const getStateFromPath = _mod1562.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1541.NavigationProvider;
export const NavigationRouteContext = _mod1541.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1539.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1539.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1539.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1542.useIsFocused;
export const useNavigation = _mod1543.useNavigation;
export const useNavigationBuilder = _mod1574.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1594.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
