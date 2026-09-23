// Module ID: 16756
// Function ID: 16757
// Name: HomeDrawerAddServerRow
// Dependencies: [19, 21, 16708, 4823, 1115, 2]
// Exports: HomeDrawerAddServerRowExpandedChildren

// Module 16756 (HomeDrawerAddServerRow)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4823 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16708 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.l5WIbf);
  obj.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: null });
  return jsx(HomeDrawerShared.HomeDrawerSharedItem, { title: null, subtitle: null });
};
