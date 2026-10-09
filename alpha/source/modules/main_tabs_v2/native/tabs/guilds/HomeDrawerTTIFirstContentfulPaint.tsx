// Module ID: 16725
// Function ID: 16726
// Name: HomeDrawerTTIFirstContentfulPaint
// Dependencies: [19, 21, 558, 576, 7190, 11447, 2]

// Module 16725 (HomeDrawerTTIFirstContentfulPaint)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7190 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const TTIFirstContentfulPaint = tmp(11447);
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function HomeDrawerTTIFirstContentfulPaint() {
  let tmp4;
  let tmp5;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = TTIAnalyticsUtils;
      obj.trackAppUIViewed();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const layoutEffect = react.useLayoutEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function HomeDrawerTTIFirstContentfulPaint() {
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
  }, []);
  return jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx");

export default tmp2;
