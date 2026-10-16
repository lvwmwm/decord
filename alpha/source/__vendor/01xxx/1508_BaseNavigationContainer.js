// Module ID: 1508
// Function ID: 1509
// Name: BaseNavigationContainer
// Dependencies: [1509, 1510, 1521, 1531, 1543, 1554, 1532, 1555, 1556, 1559, 1567, 1536, 1549, 1571, 1572, 1574, 1546, 1575, 1576, 1544, 1542, 1541, 1577, 1578, 1547, 1548, 1579, 1598, 1523, 1597, 1599, 1600, 1545, 1601, 1602]

// Module 1508 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1509 */;
import CommonActions from "CommonActions" /* 1510 */;
import _mod1521 from "module_1521" /* 1521 */;
import react from "react" /* 1523 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1531 */;
import findFocusedRoute from "findFocusedRoute" /* 1532 */;
import react2 from "react" /* 1536 */;
import ThemeProvider from "ThemeProvider" /* 1541 */;
import react3 from "react" /* 1542 */;
import _mod1543 from "module_1543" /* 1543 */;
import _mod1544 from "module_1544" /* 1544 */;
import react4 from "react" /* 1545 */;
import _mod1546 from "module_1546" /* 1546 */;
import _mod1547 from "module_1547" /* 1547 */;
import _mod1548 from "module_1548" /* 1548 */;
import react5 from "react" /* 1549 */;
import react6 from "react" /* 1554 */;
import _mod1555 from "module_1555" /* 1555 */;
import CHILD_STATE from "CHILD_STATE" /* 1556 */;
import _mod1559 from "module_1559" /* 1559 */;
import _mod1567 from "module_1567" /* 1567 */;
import react7 from "react" /* 1571 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1572 */;
import react8 from "react" /* 1574 */;
import react9 from "react" /* 1575 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1576 */;
import react10 from "react" /* 1577 */;
import react11 from "react" /* 1578 */;
import _mod1579 from "module_1579" /* 1579 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1597 */;
import react12 from "react" /* 1598 */;
import _mod1599 from "module_1599" /* 1599 */;
import react13 from "react" /* 1600 */;
import react14 from "react" /* 1601 */;
import validatePathConfig from "validatePathConfig" /* 1602 */;

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

export const BaseNavigationContainer = _mod1521.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1543.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1555.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1559.getPathFromState;
export const getStateFromPath = _mod1567.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1546.NavigationProvider;
export const NavigationRouteContext = _mod1546.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1544.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1544.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1544.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1547.useIsFocused;
export const useNavigation = _mod1548.useNavigation;
export const useNavigationBuilder = _mod1579.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1599.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
