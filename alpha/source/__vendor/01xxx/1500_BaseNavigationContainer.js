// Module ID: 1500
// Function ID: 1501
// Name: BaseNavigationContainer
// Dependencies: [1501, 1502, 1513, 1523, 1535, 1546, 1524, 1547, 1548, 1551, 1559, 1528, 1541, 1563, 1564, 1566, 1538, 1567, 1568, 1536, 1534, 1533, 1569, 1570, 1539, 1540, 1571, 1590, 1515, 1589, 1591, 1592, 1537, 1593, 1594]

// Module 1500 (BaseNavigationContainer)
import _createClass from "_createClass" /* 1501 */;
import CommonActions from "CommonActions" /* 1502 */;
import _mod1513 from "module_1513" /* 1513 */;
import react from "react" /* 1515 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1523 */;
import findFocusedRoute from "findFocusedRoute" /* 1524 */;
import react2 from "react" /* 1528 */;
import ThemeProvider from "ThemeProvider" /* 1533 */;
import react3 from "react" /* 1534 */;
import _mod1535 from "module_1535" /* 1535 */;
import _mod1536 from "module_1536" /* 1536 */;
import react4 from "react" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import _mod1539 from "module_1539" /* 1539 */;
import _mod1540 from "module_1540" /* 1540 */;
import react5 from "react" /* 1541 */;
import react6 from "react" /* 1546 */;
import _mod1547 from "module_1547" /* 1547 */;
import CHILD_STATE from "CHILD_STATE" /* 1548 */;
import _mod1551 from "module_1551" /* 1551 */;
import _mod1559 from "module_1559" /* 1559 */;
import react7 from "react" /* 1563 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1564 */;
import react8 from "react" /* 1566 */;
import react9 from "react" /* 1567 */;
import PreventRemoveProvider from "PreventRemoveProvider" /* 1568 */;
import react10 from "react" /* 1569 */;
import react11 from "react" /* 1570 */;
import _mod1571 from "module_1571" /* 1571 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1589 */;
import react12 from "react" /* 1590 */;
import _mod1591 from "module_1591" /* 1591 */;
import react13 from "react" /* 1592 */;
import react14 from "react" /* 1593 */;
import validatePathConfig from "validatePathConfig" /* 1594 */;

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

export const BaseNavigationContainer = _mod1513.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1535.createNavigatorFactory;
export const CurrentRenderContext = react6.CurrentRenderContext;
export { findFocusedRoute_export as findFocusedRoute };
export const getActionFromState = _mod1547.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = _mod1551.getPathFromState;
export const getStateFromPath = _mod1559.getStateFromPath;
export const NavigationContainerRefContext = react2.NavigationContainerRefContext;
export const NavigationContext = react5.NavigationContext;
export const NavigationHelpersContext = react7.NavigationHelpersContext;
export { NavigationIndependentTree_export as NavigationIndependentTree };
export const NavigationMetaContext = react8.NavigationMetaContext;
export const NavigationProvider = _mod1538.NavigationProvider;
export const NavigationRouteContext = _mod1538.NavigationRouteContext;
export const PreventRemoveContext = react9.PreventRemoveContext;
export { PreventRemoveProvider_export as PreventRemoveProvider };
export const createComponentForStaticNavigation = _mod1536.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1536.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1536.createScreenFactory;
export const ThemeContext = react3.ThemeContext;
export { ThemeProvider_export as ThemeProvider };
export const useTheme = react10.useTheme;
export const useFocusEffect = react11.useFocusEffect;
export const useIsFocused = _mod1539.useIsFocused;
export const useNavigation = _mod1540.useNavigation;
export const useNavigationBuilder = _mod1571.useNavigationBuilder;
export const useNavigationContainerRef = react12.useNavigationContainerRef;
export const useNavigationIndependentTree = react.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1591.usePreventRemove;
export const usePreventRemoveContext = react13.usePreventRemoveContext;
export const useRoute = react4.useRoute;
export const useStateForPath = react14.useStateForPath;
export { validatePathConfig_export as validatePathConfig };
