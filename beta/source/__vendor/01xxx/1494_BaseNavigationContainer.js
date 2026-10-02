// Module ID: 1494
// Function ID: 1495
// Name: BaseNavigationContainer
// Dependencies: [1495, 1496, 1507, 1517, 1529, 1540, 1518, 1541, 1542, 1545, 1553, 1522, 1535, 1557, 1558, 1560, 1532, 1561, 1562, 1530, 1528, 1527, 1563, 1564, 1533, 1534, 1565, 1584, 1509, 1583, 1585, 1586, 1531, 1587, 1588]

// Module 1494 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1495 */;
import CommonActions from "CommonActions" /* 1496 */;
import _mod1507 from "module_1507" /* 1507 */;
import react from "react" /* 1509 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1517 */;
import findFocusedRoute from "findFocusedRoute" /* 1518 */;
import react2 from "react" /* 1522 */;
import ThemeProvider from "ThemeProvider" /* 1527 */;
import react3 from "react" /* 1528 */;
import _mod1529 from "module_1529" /* 1529 */;
import _mod1530 from "module_1530" /* 1530 */;
import react4 from "react" /* 1531 */;
import _mod1532 from "module_1532" /* 1532 */;
import _mod1533 from "module_1533" /* 1533 */;
import _mod1534 from "module_1534" /* 1534 */;
import react5 from "react" /* 1535 */;
import react6 from "react" /* 1540 */;
import _mod1541 from "module_1541" /* 1541 */;
import CHILD_STATE from "CHILD_STATE" /* 1542 */;
import _mod1545 from "module_1545" /* 1545 */;
import _mod1553 from "module_1553" /* 1553 */;
import react7 from "react" /* 1557 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1558 */;
import react8 from "react" /* 1560 */;
import react9 from "react" /* 1561 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1562 */;
import react10 from "react" /* 1563 */;
import react11 from "react" /* 1564 */;
import _mod1565 from "module_1565" /* 1565 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1583 */;
import react12 from "react" /* 1584 */;
import _mod1585 from "module_1585" /* 1585 */;
import react13 from "react" /* 1586 */;
import react14 from "react" /* 1587 */;
import validatePathConfig from "validatePathConfig" /* 1588 */;

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

export const BaseNavigationContainer = _mod1507.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1529.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1541.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1545.getPathFromState;
export const getStateFromPath = _mod1553.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1532.NavigationProvider;
export const NavigationRouteContext = _mod1532.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1530.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1530.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1530.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1533.useIsFocused;
export const useNavigation = _mod1534.useNavigation;
export const useNavigationBuilder = _mod1565.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1585.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
