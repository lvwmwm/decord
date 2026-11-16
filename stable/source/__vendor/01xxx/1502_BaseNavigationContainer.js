// Module ID: 1502
// Function ID: 1503
// Name: BaseNavigationContainer
// Dependencies: [1503, 1504, 1515, 1525, 1537, 1548, 1526, 1549, 1550, 1553, 1561, 1530, 1543, 1565, 1566, 1568, 1540, 1569, 1570, 1538, 1536, 1535, 1571, 1572, 1541, 1542, 1573, 1592, 1517, 1591, 1593, 1594, 1539, 1595, 1596]

// Module 1502 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1503 */;
import CommonActions from "CommonActions" /* 1504 */;
import _mod1515 from "module_1515" /* 1515 */;
import react from "react" /* 1517 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1525 */;
import findFocusedRoute from "findFocusedRoute" /* 1526 */;
import react2 from "react" /* 1530 */;
import ThemeProvider from "ThemeProvider" /* 1535 */;
import react3 from "react" /* 1536 */;
import _mod1537 from "module_1537" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import react4 from "react" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import react5 from "react" /* 1543 */;
import react6 from "react" /* 1548 */;
import _mod1549 from "module_1549" /* 1549 */;
import CHILD_STATE from "CHILD_STATE" /* 1550 */;
import _mod1553 from "module_1553" /* 1553 */;
import _mod1561 from "module_1561" /* 1561 */;
import react7 from "react" /* 1565 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1566 */;
import react8 from "react" /* 1568 */;
import react9 from "react" /* 1569 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1570 */;
import react10 from "react" /* 1571 */;
import react11 from "react" /* 1572 */;
import _mod1573 from "module_1573" /* 1573 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1591 */;
import react12 from "react" /* 1592 */;
import _mod1593 from "module_1593" /* 1593 */;
import react13 from "react" /* 1594 */;
import react14 from "react" /* 1595 */;
import validatePathConfig from "validatePathConfig" /* 1596 */;

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

export const BaseNavigationContainer = _mod1515.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1537.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1549.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1553.getPathFromState;
export const getStateFromPath = _mod1561.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1540.NavigationProvider;
export const NavigationRouteContext = _mod1540.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1538.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1538.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1538.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1541.useIsFocused;
export const useNavigation = _mod1542.useNavigation;
export const useNavigationBuilder = _mod1573.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1593.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
