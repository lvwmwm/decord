// Module ID: 1488
// Function ID: 1489
// Name: BaseNavigationContainer
// Dependencies: [1489, 1490, 1501, 1511, 1523, 1534, 1512, 1535, 1536, 1539, 1547, 1516, 1529, 1551, 1552, 1554, 1526, 1555, 1556, 1524, 1522, 1521, 1557, 1558, 1527, 1528, 1559, 1578, 1503, 1577, 1579, 1580, 1525, 1581, 1582]

// Module 1488 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1489 */;
import CommonActions from "CommonActions" /* 1490 */;
import _mod1501 from "module_1501" /* 1501 */;
import react from "react" /* 1503 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1511 */;
import findFocusedRoute from "findFocusedRoute" /* 1512 */;
import react2 from "react" /* 1516 */;
import ThemeProvider from "ThemeProvider" /* 1521 */;
import react3 from "react" /* 1522 */;
import _mod1523 from "module_1523" /* 1523 */;
import _mod1524 from "module_1524" /* 1524 */;
import react4 from "react" /* 1525 */;
import _mod1526 from "module_1526" /* 1526 */;
import _mod1527 from "module_1527" /* 1527 */;
import _mod1528 from "module_1528" /* 1528 */;
import react5 from "react" /* 1529 */;
import react6 from "react" /* 1534 */;
import _mod1535 from "module_1535" /* 1535 */;
import CHILD_STATE from "CHILD_STATE" /* 1536 */;
import _mod1539 from "module_1539" /* 1539 */;
import _mod1547 from "module_1547" /* 1547 */;
import react7 from "react" /* 1551 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1552 */;
import react8 from "react" /* 1554 */;
import react9 from "react" /* 1555 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1556 */;
import react10 from "react" /* 1557 */;
import react11 from "react" /* 1558 */;
import _mod1559 from "module_1559" /* 1559 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1577 */;
import react12 from "react" /* 1578 */;
import _mod1579 from "module_1579" /* 1579 */;
import react13 from "react" /* 1580 */;
import react14 from "react" /* 1581 */;
import validatePathConfig from "validatePathConfig" /* 1582 */;

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

export const BaseNavigationContainer = _mod1501.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1523.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1535.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1539.getPathFromState;
export const getStateFromPath = _mod1547.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1526.NavigationProvider;
export const NavigationRouteContext = _mod1526.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1524.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1524.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1524.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1527.useIsFocused;
export const useNavigation = _mod1528.useNavigation;
export const useNavigationBuilder = _mod1559.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1579.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
