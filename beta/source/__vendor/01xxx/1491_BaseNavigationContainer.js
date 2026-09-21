// Module ID: 1491
// Function ID: 1492
// Name: BaseNavigationContainer
// Dependencies: [1492, 1493, 1504, 1514, 1526, 1537, 1515, 1538, 1539, 1542, 1550, 1519, 1532, 1554, 1555, 1557, 1529, 1558, 1559, 1527, 1525, 1524, 1560, 1561, 1530, 1531, 1562, 1581, 1506, 1580, 1582, 1583, 1528, 1584, 1585]

// Module 1491 (BaseNavigationContainer)
import _mod1504 from "module_1504" /* 1504 */;
import _mod1506 from "module_1506" /* 1506 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1514 */;
import findFocusedRoute from "findFocusedRoute" /* 1515 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1519 */;
import ThemeProvider from "ThemeProvider" /* 1524 */;
import _mod1525 from "module_1525" /* 1525 */;
import _mod1526 from "module_1526" /* 1526 */;
import _mod1527 from "module_1527" /* 1527 */;
import _mod1528 from "module_1528" /* 1528 */;
import _mod1529 from "module_1529" /* 1529 */;
import context1 from "context1" /* 1530 */;
import _mod1531 from "module_1531" /* 1531 */;
import NavigationContext from "NavigationContext" /* 1532 */;
import CurrentRenderContext from "CurrentRenderContext" /* 1537 */;
import _mod1538 from "module_1538" /* 1538 */;
import CHILD_STATE from "CHILD_STATE" /* 1539 */;
import serializeParamValue from "serializeParamValue" /* 1542 */;
import prepareConfigResources from "prepareConfigResources" /* 1550 */;
import NavigationHelpersContext from "NavigationHelpersContext" /* 1554 */;
import NavigationIndependentTree from "NavigationIndependentTree" /* 1555 */;
import NavigationMetaContext from "NavigationMetaContext" /* 1557 */;
import PreventRemoveContext from "PreventRemoveContext" /* 1558 */;
import transformPreventedRoutes from "transformPreventedRoutes" /* 1559 */;
import _mod1560 from "module_1560" /* 1560 */;
import _mod1561 from "module_1561" /* 1561 */;
import _mod1562 from "module_1562" /* 1562 */;
import NavigationStateListenerProvider from "NavigationStateListenerProvider" /* 1580 */;
import _mod1581 from "module_1581" /* 1581 */;
import _mod1582 from "module_1582" /* 1582 */;
import _mod1583 from "module_1583" /* 1583 */;
import _mod1584 from "module_1584" /* 1584 */;
import _mod1585 from "module_1585" /* 1585 */;

const require = globalThis.__r;

for (const key10013 in require("PrivateValueStore")) {
  arg5[key10013] = require("PrivateValueStore")[key10013];
  continue;
}
for (const key10017 in require("CommonActions")) {
  arg5[key10017] = require("CommonActions")[key10017];
  continue;
}

export const BaseNavigationContainer = _mod1504.BaseNavigationContainer;
export const createNavigationContainerRef = NOT_INITIALIZED_ERROR.createNavigationContainerRef;
export const createNavigatorFactory = _mod1526.createNavigatorFactory;
export const CurrentRenderContext = CurrentRenderContext.CurrentRenderContext;
export const findFocusedRoute = findFocusedRoute.findFocusedRoute;
export const getActionFromState = _mod1538.getActionFromState;
export const getFocusedRouteNameFromRoute = CHILD_STATE.getFocusedRouteNameFromRoute;
export const getPathFromState = serializeParamValue.getPathFromState;
export const getStateFromPath = prepareConfigResources.getStateFromPath;
export const NavigationContainerRefContext = NavigationContainerRefContext.NavigationContainerRefContext;
export const NavigationContext = NavigationContext.NavigationContext;
export const NavigationHelpersContext = NavigationHelpersContext.NavigationHelpersContext;
export const NavigationIndependentTree = NavigationIndependentTree.NavigationIndependentTree;
export const NavigationMetaContext = NavigationMetaContext.NavigationMetaContext;
export const NavigationProvider = _mod1529.NavigationProvider;
export const NavigationRouteContext = _mod1529.NavigationRouteContext;
export const PreventRemoveContext = PreventRemoveContext.PreventRemoveContext;
export const PreventRemoveProvider = transformPreventedRoutes.PreventRemoveProvider;
export const createComponentForStaticNavigation = _mod1527.createComponentForStaticNavigationDeprecated;
export const createPathConfigForStaticNavigation = _mod1527.createPathConfigForStaticNavigation;
export const createScreenFactory = _mod1527.createScreenFactory;
export const ThemeContext = _mod1525.ThemeContext;
export const ThemeProvider = ThemeProvider.ThemeProvider;
export const useTheme = _mod1560.useTheme;
export const useFocusEffect = _mod1561.useFocusEffect;
export const useIsFocused = context1.useIsFocused;
export const useNavigation = _mod1531.useNavigation;
export const useNavigationBuilder = _mod1562.useNavigationBuilder;
export const useNavigationContainerRef = _mod1581.useNavigationContainerRef;
export const useNavigationIndependentTree = _mod1506.useNavigationIndependentTree;
export const useNavigationState = NavigationStateListenerProvider.useNavigationState;
export const usePreventRemove = _mod1582.usePreventRemove;
export const usePreventRemoveContext = _mod1583.usePreventRemoveContext;
export const useRoute = _mod1528.useRoute;
export const useStateForPath = _mod1584.useStateForPath;
export const validatePathConfig = _mod1585.validatePathConfig;
