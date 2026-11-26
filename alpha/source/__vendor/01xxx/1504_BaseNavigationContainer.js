// Module ID: 1504
// Function ID: 1505
// Name: BaseNavigationContainer
// Dependencies: [1505, 1506, 1517, 1527, 1539, 1550, 1528, 1551, 1552, 1555, 1563, 1532, 1545, 1567, 1568, 1570, 1542, 1571, 1572, 1540, 1538, 1537, 1573, 1574, 1543, 1544, 1575, 1594, 1519, 1593, 1595, 1596, 1541, 1597, 1598]

// Module 1504 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1505 */;
import CommonActions from "CommonActions" /* 1506 */;
import _mod1517 from "module_1517" /* 1517 */;
import react from "react" /* 1519 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1527 */;
import findFocusedRoute from "findFocusedRoute" /* 1528 */;
import react2 from "react" /* 1532 */;
import ThemeProvider from "ThemeProvider" /* 1537 */;
import react3 from "react" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import react4 from "react" /* 1541 */;
import _mod1542 from "module_1542" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import _mod1544 from "module_1544" /* 1544 */;
import react5 from "react" /* 1545 */;
import react6 from "react" /* 1550 */;
import _mod1551 from "module_1551" /* 1551 */;
import CHILD_STATE from "CHILD_STATE" /* 1552 */;
import _mod1555 from "module_1555" /* 1555 */;
import _mod1563 from "module_1563" /* 1563 */;
import react7 from "react" /* 1567 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1568 */;
import react8 from "react" /* 1570 */;
import react9 from "react" /* 1571 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1572 */;
import react10 from "react" /* 1573 */;
import react11 from "react" /* 1574 */;
import _mod1575 from "module_1575" /* 1575 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1593 */;
import react12 from "react" /* 1594 */;
import _mod1595 from "module_1595" /* 1595 */;
import react13 from "react" /* 1596 */;
import react14 from "react" /* 1597 */;
import validatePathConfig from "validatePathConfig" /* 1598 */;

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

export const BaseNavigationContainer = _mod1517.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1539.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1551.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1555.getPathFromState;
export const getStateFromPath = _mod1563.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1542.NavigationProvider;
export const NavigationRouteContext = _mod1542.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1540.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1540.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1540.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1543.useIsFocused;
export const useNavigation = _mod1544.useNavigation;
export const useNavigationBuilder = _mod1575.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1595.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
