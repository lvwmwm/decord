// Module ID: 16236
// Function ID: 16237
// Name: HomeDrawerFavoritesRowExpandedChildren
// Dependencies: [19, 21, 16229, 4477, 1233, 2]
// Exports: HomeDrawerFavoritesRowExpandedChildren

// Module 16236 (HomeDrawerFavoritesRowExpandedChildren)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4477 */;
import HomeDrawerSharedItem from "HomeDrawerSharedItem" /* 16229 */;
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
