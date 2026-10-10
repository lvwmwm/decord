// Module ID: 17278
// Function ID: 17279
// Name: ConjurePerfTraceStatsHeader
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 17279, 13224, 5088, 2]

// Module 17278 (ConjurePerfTraceStatsHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 17279 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePerfTraceStatsHeader(stats) {
  let closure_1;
  let items;
  let tmp11;
  let tmp4;
  let tmp = stats;
  let obj = stats(576);
  const cResult = obj.c(25);
  stats = stats.stats;
  if (cResult[0] !== stats) {
    const tmpResult = tmp(17279);
    const perfModelSummaryResult = tmpResult.perfModelSummary(stats);
    cResult[0] = stats;
    cResult[1] = perfModelSummaryResult;
    tmp4 = perfModelSummaryResult;
  } else {
    tmp4 = cResult[1];
  }
  let tmp6 = closure_6();
  dependencyMap = tmp6;
  const tmp7 = styles();
  let closure_2 = tmp7;
  if (cResult[2] === tmp7) {
    let tmp10;
    if (cResult[3] === stats.categories) {
      tmp10 = cResult[4];
    }
    if (cResult[7] === tmp6.bar) {
      let tmp13;
      if (cResult[8] === tmp10) {
        tmp13 = cResult[9];
      }
      if (cResult[10] === tmp7) {
        if (cResult[11] === stats) {
          if (cResult[12] === tmp6.legendItem) {
            let tmp18;
            if (cResult[13] === tmp6.swatch) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === tmp6.legend) {
              let tmp20;
              let tmp24;
              if (cResult[16] === tmp18) {
                tmp20 = cResult[17];
              }
              if (cResult[18] !== tmp4) {
                let tmp25 = null;
                if (null != tmp4) {
                  let obj2 = { variant: "text-sm/normal", color: "text-default", children: tmp4 };
                  tmp25 = closure_3(tmp(5088).Text, obj2);
                }
                cResult[18] = tmp4;
                cResult[19] = tmp25;
                tmp24 = tmp25;
              } else {
                tmp24 = cResult[19];
              }
              if (cResult[20] === tmp6.header) {
                if (cResult[21] === tmp13) {
                  if (cResult[22] === tmp20) {
                    let tmp27;
                    if (cResult[23] === tmp24) {
                      tmp27 = cResult[24];
                    }
                    return tmp27;
                  }
                }
              }
              let obj3 = { style: tmp8, children: items };
              items = [tmp13, tmp20, tmp24];
              const tmp30 = closure_4(closure_2, obj3);
              cResult[20] = tmp6.header;
              cResult[21] = tmp13;
              cResult[22] = tmp20;
              cResult[23] = tmp24;
              cResult[24] = tmp30;
              tmp27 = tmp30;
            }
            let obj4 = { style: tmp17, children: tmp18 };
            const tmp23 = closure_3(closure_2, obj4);
            cResult[15] = tmp6.legend;
            cResult[16] = tmp18;
            cResult[17] = tmp23;
            tmp20 = tmp23;
          }
        }
      }
      const PERF_CATEGORIES = tmp(13224).PERF_CATEGORIES;
      const mapped = PERF_CATEGORIES.map((item) => {
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
      });
      cResult[10] = tmp7;
      cResult[11] = stats;
      cResult[12] = tmp6.legendItem;
      cResult[13] = tmp6.swatch;
      cResult[14] = mapped;
      tmp18 = mapped;
    }
    let obj5 = { style: tmp9, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp10 };
    const tmp16 = closure_3(closure_2, obj5);
    cResult[7] = tmp6.bar;
    cResult[8] = tmp10;
    cResult[9] = tmp16;
    tmp13 = tmp16;
  }
  if (cResult[5] !== tmp7) {
    const fn = function b(arg0) {
      let category;
      let items;
      let ms;
      ({ category, ms } = arg0);
      let tmp = null;
      if (0 !== ms) {
        const obj = { style: items };
        items = [closure_2[category], ];
        const obj2 = { flex: ms };
        items[1] = obj2;
        tmp = _false(View, obj, category);
      }
      return tmp;
    };
    cResult[5] = tmp7;
    cResult[6] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[6];
  }
  const categories = stats.categories;
  const mapped1 = categories.map(tmp11);
  cResult[2] = tmp7;
  cResult[3] = stats.categories;
  cResult[4] = mapped1;
  tmp10 = mapped1;
}) : (function ConjurePerfTraceStatsHeader(stats) {
  let PERF_CATEGORIES;
  let categories;
  let closure_1;
  let items;
  stats = stats.stats;
  let tmp = stats;
  let obj = stats(17279);
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
  PERF_CATEGORIES = stats(13224).PERF_CATEGORIES;
  items[1] = closure_3(closure_2, obj4);
  let tmp7Result = null;
  const tmp7 = closure_3;
  if (null != perfModelSummaryResult) {
    let obj5 = { variant: "text-sm/normal", color: "text-default", children: perfModelSummaryResult };
    tmp7Result = tmp7(tmp(5088).Text, obj5);
  }
  items[2] = tmp7Result;
  return tmp5(tmp6, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatsHeader.tsx");

export default tmp7;
export const usePerfCategoryColors = styles;
