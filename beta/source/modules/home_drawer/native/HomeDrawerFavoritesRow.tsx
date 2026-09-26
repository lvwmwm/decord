// Module ID: 16655
// Function ID: 16656
// Name: HomeDrawerFavoritesRow
// Dependencies: [19, 21, 16648, 4784, 1115, 2]
// Exports: HomeDrawerFavoritesRowExpandedChildren

// Module 16655 (HomeDrawerFavoritesRow)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4784 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16648 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.wMWyci);
  obj.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
  return jsx(HomeDrawerShared.HomeDrawerSharedItem, { title: null, subtitle: null });
};
