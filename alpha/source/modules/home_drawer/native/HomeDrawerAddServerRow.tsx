// Module ID: 16594
// Function ID: 16595
// Name: HomeDrawerAddServerRow
// Dependencies: [19, 21, 558, 576, 16546, 5086, 1126, 2]

// Module 16594 (HomeDrawerAddServerRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16546 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function HomeDrawerAddServerRowExpandedChildren() {
  let first;
  let intl;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const HomeDrawerSharedItem = tmp(16546).HomeDrawerSharedItem;
    ({ variant: "text-md/medium", color: "text-default", children: intl.string(intl2.t.l5WIbf) });
    const Text = tmp(5086).Text;
    intl = tmp(1126).intl;
    const tmp6 = <HomeDrawerSharedItem title={null} subtitle={null} />;
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function HomeDrawerAddServerRowExpandedChildren() {
  let intl;
  const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
  ({ variant: "text-md/medium", color: "text-default", children: intl.string(intl2.t.l5WIbf) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <HomeDrawerSharedItem title={null} subtitle={null} />;
});
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = tmp3;
