// Module ID: 17589
// Function ID: 17590
// Name: HomeDrawerFavoritesRow
// Dependencies: [19, 21, 558, 576, 17582, 5216, 1128, 2]

// Module 17589 (HomeDrawerFavoritesRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5216 */;
import HomeDrawerShared from "HomeDrawerShared" /* 17582 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function HomeDrawerFavoritesRowExpandedChildren() {
  let first;
  let intl;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const HomeDrawerSharedItem = tmp(17582).HomeDrawerSharedItem;
    ({ variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl.string(intl2.t.wMWyci) });
    const Text = tmp(5216).Text;
    intl = tmp(1128).intl;
    const tmp6 = <HomeDrawerSharedItem title={null} subtitle={null} />;
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function HomeDrawerFavoritesRowExpandedChildren() {
  let intl;
  const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
  ({ variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl.string(intl2.t.wMWyci) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <HomeDrawerSharedItem title={null} subtitle={null} />;
});
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = tmp3;
