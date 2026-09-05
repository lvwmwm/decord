// Module ID: 16312
// Function ID: 16313
// Name: HomeDrawerFavoritesRowExpandedChildren
// Dependencies: [19, 21, 16305, 4556, 1114, 2]
// Exports: HomeDrawerFavoritesRowExpandedChildren

// Module 16312 (HomeDrawerFavoritesRowExpandedChildren)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import HomeDrawerSharedItem from "HomeDrawerSharedItem" /* 16305 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.wMWyci);
  obj[0] = jsx(Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
  return jsx(HomeDrawerSharedItem.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
};
