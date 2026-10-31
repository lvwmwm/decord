// Module ID: 13002
// Function ID: 13003
// Name: ConjurePerfTraceStatsHeader
// Dependencies: [19, 17, 21, 5014, 575, 13003, 10894, 5624, 2]
// Exports: default

// Module 13002 (ConjurePerfTraceStatsHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 13003 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { op: obj2, model: obj3, tool: obj4, setup: obj5, worktree: { backgroundColor: nativeDefault.colors.ICON_STRONG }, sandbox: { backgroundColor: nativeDefault.colors.STATUS_WARNING }, build: { backgroundColor: nativeDefault.colors.STATUS_POSITIVE }, platform: { backgroundColor: nativeDefault.colors.ICON_MUTED }, other: { backgroundColor: nativeDefault.colors.ICON_SUBTLE } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_NOTIFICATION };
obj4 = { backgroundColor: nativeDefault.colors.TEXT_LINK };
obj5 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_INFO };
({ backgroundColor: nativeDefault.colors.ICON_STRONG });
({ backgroundColor: nativeDefault.colors.STATUS_WARNING });
({ backgroundColor: nativeDefault.colors.STATUS_POSITIVE });
({ backgroundColor: nativeDefault.colors.ICON_MUTED });
({ backgroundColor: nativeDefault.colors.ICON_SUBTLE });
const styles = createStyles(obj);
createStyles = createStyles_mod;
const createStyles2 = createStyles.createStyles;
const obj11 = { header: { gap: nativeDefault.space.PX_4 }, bar: { flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, legend: { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_12, rowGap: nativeDefault.space.PX_4 }, legendItem: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, swatch: size };
({ gap: nativeDefault.space.PX_4 });
({ flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
({ flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_12, rowGap: nativeDefault.space.PX_4 });
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles2(obj11);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatsHeader.tsx");

export default function ConjurePerfTraceStatsHeader(stats) {
  let PERF_CATEGORIES;
  let categories;
  let closure_1;
  let items;
  stats = stats.stats;
  let tmp = stats;
  let obj = stats(13003);
  const perfModelSummaryResult = obj.perfModelSummary(stats);
  let tmp4 = closure_6();
  dependencyMap = tmp4;
  let closure_2 = styles();
  let obj2 = { style: tmp4.header, children: items };
  let obj3 = {
    style: tmp4.bar,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: categories.map((item) => {
      let category;
      let items;
      let ms;
      ({ category, ms } = item);
      let tmp = null;
      if (0 !== ms) {
        const obj = { style: items };
        items = [closure_2[category], ];
        const obj2 = { flex: ms };
        items[1] = obj2;
        tmp = _false(View, obj, category);
      }
      return tmp;
    })
  };
  categories = stats.categories;
  let tmp5 = closure_4;
  let tmp6 = closure_2;
  items = [closure_3(closure_2, obj3), , ];
  let obj4 = {
    style: tmp4.legend,
    children: PERF_CATEGORIES.map((item) => {
      let items;
      let items1;
      const obj = ConjurePerfTraceFormat;
      const perfCategoryTotalResult = obj.perfCategoryTotal(stats, item);
      const obj3 = { style: items };
      items = [closure_1.swatch, closure_2[item]];
      const obj2 = { style: closure_1.legendItem, children: items1 };
      items1 = [_false(View, obj3), , ];
      const obj4 = { variant: "text-xs/normal", color: "text-muted", children: ConjurePerfTraceFormat.PERF_CATEGORY_LABELS[item] };
      const Text = Text_Text.Text;
      items1[1] = _false(Text, obj4);
      let tmp6Result = null;
      const tmp4 = React3;
      const tmp5 = View;
      const tmp6 = _false;
      if (null != perfCategoryTotalResult) {
        const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: perfCategoryTotalResult };
        tmp6Result = tmp6(Text_Text.Text, obj5);
      }
      items1[2] = tmp6Result;
      return tmp4(tmp5, obj2, item);
    })
  };
  PERF_CATEGORIES = stats(10894).PERF_CATEGORIES;
  items[1] = closure_3(closure_2, obj4);
  let tmp7Result = null;
  const tmp7 = closure_3;
  if (null != perfModelSummaryResult) {
    let obj5 = { variant: "text-sm/normal", color: "text-default", children: perfModelSummaryResult };
    tmp7Result = tmp7(tmp(5624).Text, obj5);
  }
  items[2] = tmp7Result;
  return tmp5(tmp6, obj2);
};
export const usePerfCategoryColors = styles;
