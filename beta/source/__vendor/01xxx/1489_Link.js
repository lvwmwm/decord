// Module ID: 1489
// Function ID: 1490
// Name: Link
// Dependencies: [1490, 1491, 1586, 1590, 1600, 1588, 1599, 1591, 1603, 1605, 1592, 1606, 1587, 1601, 1607, 1608, 1609, 1610]

// Module 1489 (Link)
import _mod1586 from "module_1586" /* 1586 */;
import _mod1587 from "module_1587" /* 1587 */;
import get_options from "get options" /* 1588 */;
import _mod1590 from "module_1590" /* 1590 */;
import _mod1591 from "module_1591" /* 1591 */;
import DefaultTheme from "DefaultTheme" /* 1592 */;
import _mod1599 from "module_1599" /* 1599 */;
import _mod1600 from "module_1600" /* 1600 */;
import clone from "clone" /* 1601 */;
import ServerContainer from "ServerContainer" /* 1603 */;
import DarkTheme from "DarkTheme" /* 1605 */;
import _mod1606 from "module_1606" /* 1606 */;
import _mod1607 from "module_1607" /* 1607 */;
import _mod1608 from "module_1608" /* 1608 */;
import _mod1609 from "module_1609" /* 1609 */;
import _mod1610 from "module_1610" /* 1610 */;

const require = globalThis.__r;

for (const key10013 in require("module_1490")) {
  arg5[key10013] = require("module_1490")[key10013];
  continue;
}
for (const key10017 in require("BaseNavigationContainer")) {
  arg5[key10017] = require("BaseNavigationContainer")[key10017];
  continue;
}

export const createStandardNavigationFactories = _mod1586.createStandardNavigationFactories;
export const createStaticNavigation = _mod1590.createStaticNavigation;
export const Link = _mod1600.Link;
export const LinkingContext = get_options.LinkingContext;
export const LocaleDirContext = _mod1599.LocaleDirContext;
export const NavigationContainer = _mod1591.NavigationContainer;
export const ServerContainer = ServerContainer.ServerContainer;
export const DarkTheme = DarkTheme.DarkTheme;
export const DefaultTheme = DefaultTheme.DefaultTheme;
export const UNSTABLE_UnhandledLinkingContext = _mod1606.UnhandledLinkingContext;
export const useLinkBuilder = _mod1587.useLinkBuilder;
export const useLinkProps = clone.useLinkProps;
export const useLinkTo = _mod1607.useLinkTo;
export const useLocale = _mod1608.useLocale;
export const useRoutePath = _mod1609.useRoutePath;
export const useScrollToTop = _mod1610.useScrollToTop;
