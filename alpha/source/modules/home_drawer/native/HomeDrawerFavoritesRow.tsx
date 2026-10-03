// Module ID: 16249
// Function ID: 16250
// Name: HomeDrawerFavoritesRow
// Dependencies: [19, 21, 558, 576, 16242, 4886, 1126, 2]

// Module 16249 (HomeDrawerFavoritesRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16242 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const HomeDrawerSharedItem = tmp(16242).HomeDrawerSharedItem;
    ({ variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl.string(intl2.t.wMWyci) });
    const Text = tmp(4886).Text;
    intl = tmp(1126).intl;
    const tmp6 = <HomeDrawerSharedItem title={null} subtitle={null} />;
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let intl;
  const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
  ({ variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl.string(intl2.t.wMWyci) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <HomeDrawerSharedItem title={null} subtitle={null} />;
});
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = tmp3;
