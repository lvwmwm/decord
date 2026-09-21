// Module ID: 11627
// Function ID: 11628
// Name: AppStoreOverlayStatsCarousel
// Dependencies: [19, 17, 21, 4758, 580, 11628, 1119, 11629, 558, 568, 4754, 1368, 6891, 2]

// Module 11627 (AppStoreOverlayStatsCarousel)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4754 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6891 */;
import AppStoreOverlayStatCardUtils from "AppStoreOverlayStatCardUtils" /* 11628 */;
import AppStoreOverlayStarRatingDefault from "AppStoreOverlayStarRating" /* 11629 */;
import noop from "module_19" /* 19 */;

require = fn;
function getStatCardContent(stat) {
  const type = stat.type;
  if ("rating" === type) {
    let num = stat.maxRating;
    if (num == null) {
      num = 5;
    }
    const result = AppStoreOverlayStatCardUtils.formatAppStoreRatingValue(stat.rating, util.intl.currentLocale);
    let result1;
    if (null != stat.ratingCount) {
      result1 = tmp11(11628).formatAppStoreRatingCount(stat.ratingCount, tmp11(1119).intl.currentLocale);
      const tmp11Result = tmp11(11628);
    }
    const appStoreStarFillAmounts = AppStoreOverlayStatCardUtils.getAppStoreStarFillAmounts(stat.rating, num);
    const intl = tmp11(1119).intl;
    const obj2 = { label: stat.label, rating: result, maxRating: num, ratingCount: null };
    let num2 = stat.ratingCount;
    if (num2 == null) {
      num2 = 0;
    }
    const obj5 = { accessibilityLabel: null, primaryText: null, secondaryContent: null, ratingCount: null };
    obj2.ratingCount = num2;
    obj5.accessibilityLabel = intl.formatToPlainString(util.t["/0p2sz"], obj2);
    obj5.primaryText = result;
    const obj6 = { fillAmounts: appStoreStarFillAmounts };
    obj5.secondaryContent = timestampProducer(AppStoreOverlayStarRatingDefault, obj6);
    obj5.ratingCount = result1;
    return obj5;
  } else if ("age" === type) {
    const obj7 = { accessibilityLabel: null, primaryText: null, secondaryText: null };
    const _HermesInternal3 = HermesInternal;
    obj7.accessibilityLabel = "" + stat.label + ", " + stat.ageRating;
    ({ ageRating: obj3.primaryText, ageRatingLabel: obj3.secondaryText } = stat);
    return obj7;
  } else if ("chart" === type) {
    const result2 = AppStoreOverlayStatCardUtils.formatAppStoreChartRank(stat.rank);
    if (null != stat.category) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + stat.label + ", " + result2 + ", " + stat.category;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stat.label + ", " + result2;
    }
    const obj8 = { accessibilityLabel: combined, primaryText: result2, secondaryText: stat.category };
    return obj8;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { carousel: { marginHorizontal: -nativeDefault.space.PX_16 }, carouselContent: null, statCard: null, statCardExpanded: null, expandedCarouselContent: null, secondaryRow: null };
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.carouselContent = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
let size = { width: 130, height: 92, borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.statCard = size;
obj2.statCardExpanded = { flex: 1, minWidth: 0 };
let obj4 = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
obj2.expandedCarouselContent = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.secondaryRow = { height: nativeDefault.space.PX_16, justifyContent: "center" };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(28);
  ({ stat, expanded, onRatingPress } = arg0);
  let statCardExpanded = undefined !== expanded && expanded;
  const tmp4 = closure_9();
  if (cResult[0] !== stat) {
    const tmp7 = getStatCardContent(stat);
    cResult[0] = stat;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  ({ accessibilityLabel, primaryText, secondaryText, secondaryContent, ratingCount } = tmp5);
  let tmp8 = "rating" === stat.type;
  if (tmp8) {
    tmp8 = null != onRatingPress;
  }
  if (statCardExpanded) {
    statCardExpanded = tmp4.statCardExpanded;
  }
  if (cResult[2] === tmp4.statCard) {
    if (cResult[3] === statCardExpanded) {
      let tmp10 = cResult[4];
    }
    let str = "";
    if (null != ratingCount) {
      const _HermesInternal = HermesInternal;
      str = "(" + ratingCount + ")";
    }
    if (cResult[5] === stat.label) {
      if (cResult[6] === str) {
        let tmp13 = cResult[7];
      }
      if (cResult[8] !== primaryText) {
        const obj2 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: primaryText };
        const tmp18 = timestampProducer(tmp(4754).Text, obj2);
        cResult[8] = primaryText;
        cResult[9] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === secondaryContent) {
        if (cResult[11] === secondaryText) {
          if (cResult[12] === tmp4.secondaryRow) {
            let tmp19 = cResult[13];
          }
          if (cResult[14] === tmp13) {
            if (cResult[15] === tmp16) {
              if (cResult[16] === tmp19) {
                let tmp24 = cResult[17];
              }
              if (tmp8) {
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  let stringResult;
                  if (tmpResult.isIOS()) {
                    const intl = tmp(1119).intl;
                    stringResult = intl.string(tmp(1119).t.quJD0Y);
                  }
                  cResult[18] = stringResult;
                  let tmp33 = stringResult;
                  tmpResult = tmp(1368);
                } else {
                  tmp33 = cResult[18];
                }
                if (cResult[19] === accessibilityLabel) {
                  if (cResult[20] === tmp24) {
                    if (cResult[21] === tmp10) {
                    }
                  }
                }
                const obj3 = { style: tmp10, onPress: onRatingPress, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityHint: tmp33, children: tmp24 };
                const tmp38 = timestampProducer(React3, obj3);
                cResult[19] = accessibilityLabel;
                cResult[20] = tmp24;
                cResult[21] = tmp10;
                cResult[22] = onRatingPress;
                cResult[23] = tmp38;
              } else {
                if (cResult[24] === accessibilityLabel) {
                  if (cResult[25] === tmp24) {
                    if (cResult[26] === tmp10) {
                      let tmp28 = cResult[27];
                    }
                    return tmp28;
                  }
                }
                const obj4 = { style: tmp10, accessible: true, accessibilityRole: "text", accessibilityLabel, children: tmp24 };
                const tmp31 = timestampProducer(hasOwnProperty, obj4);
                cResult[24] = accessibilityLabel;
                cResult[25] = tmp24;
                cResult[26] = tmp10;
                cResult[27] = tmp31;
                tmp28 = tmp31;
              }
            }
          }
          const obj5 = { children: null };
          const items = [tmp13, tmp16, tmp19];
          obj5.children = items;
          const tmp27 = React5(closure_1_8, obj5);
          cResult[14] = tmp13;
          cResult[15] = tmp16;
          cResult[16] = tmp19;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      let tmp21Result2 = null != secondaryContent || null != secondaryText;
      if (tmp21Result2) {
        const obj6 = { style: tmp4.secondaryRow, children: null };
        let tmp21Result = secondaryContent;
        if (null == secondaryContent) {
          const obj7 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
          tmp21Result = tmp21(tmp(4754).Text, obj7);
        }
        obj6.children = tmp21Result;
        tmp21Result2 = tmp21(hasOwnProperty, obj6);
      }
      cResult[10] = secondaryContent;
      cResult[11] = secondaryText;
      cResult[12] = tmp4.secondaryRow;
      cResult[13] = tmp21Result2;
      tmp19 = tmp21Result2;
    }
    const obj8 = { variant: "text-xs/semibold", color: "text-subtle", children: null };
    const items1 = [stat.label, " ", str];
    obj8.children = items1;
    const tmp15 = React5(tmp(4754).Text, obj8);
    cResult[5] = stat.label;
    cResult[6] = str;
    cResult[7] = tmp15;
    tmp13 = tmp15;
  }
  const items2 = [tmp4.statCard, statCardExpanded];
  cResult[2] = tmp4.statCard;
  cResult[3] = statCardExpanded;
  cResult[4] = items2;
  tmp10 = items2;
}) : ((onRatingPress) => {
  ({ stat, expanded } = onRatingPress);
  if (expanded === undefined) {
    expanded = false;
  }
  onRatingPress = onRatingPress.onRatingPress;
  const tmp = closure_9();
  const tmp2 = getStatCardContent(stat);
  ({ accessibilityLabel, secondaryText, secondaryContent, ratingCount } = tmp2);
  let tmp3 = "rating" === stat.type;
  if (tmp3) {
    tmp3 = null != onRatingPress;
  }
  const items = [tmp.statCard, ];
  if (expanded) {
    expanded = tmp.statCardExpanded;
  }
  items[1] = expanded;
  const items1 = [stat.label, " ", ];
  let str = "";
  if (null != ratingCount) {
    const _HermesInternal = HermesInternal;
    str = "(" + ratingCount + ")";
  }
  items1[2] = str;
  const items2 = [React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: items1 }), timestampProducer(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: tmp2.primaryText }), ];
  let tmp10Result = null != secondaryContent || null != secondaryText;
  if (tmp10Result) {
    const obj = { style: tmp.secondaryRow, children: null };
    if (null == secondaryContent) {
      const obj2 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
      secondaryContent = tmp10(tmp7(4754).Text, obj2);
    }
    obj.children = secondaryContent;
    tmp10Result = tmp10(hasOwnProperty, obj);
  }
  items2[2] = tmp10Result;
  const tmp5Result = React5(closure_1_8, { children: items2 });
  if (tmp3) {
    const obj3 = { style: items, onPress: onRatingPress, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityHint: null, children: null };
    let stringResult;
    if (tmp7Result.isIOS()) {
      const intl = tmp7(1119).intl;
      stringResult = intl.string(tmp7(1119).t.quJD0Y);
    }
    obj3.accessibilityHint = stringResult;
    obj3.children = tmp5Result;
    let tmp10Result2 = tmp10(React3, obj3);
    tmp7Result = tmp7(1368);
  } else {
    const obj4 = { style: items, accessible: true, accessibilityRole: "text", accessibilityLabel, children: tmp5Result };
    tmp10Result2 = tmp10(hasOwnProperty, obj4);
  }
  return tmp10Result2;
});
ReactCompilerGating = fn(558);
let obj6 = { height: nativeDefault.space.PX_16, justifyContent: "center" };
size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onRatingPress(568).c(24);
  ({ stats, onRatingPress } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = onRatingPress(568);
  const nativeGesture = onRatingPress(6891).useNativeGesture(first);
  let num2 = 2;
  if (0 === stats.length) {
    return null;
  } else if (tmp7) {
    if (cResult[1] === onRatingPress) {
      if (cResult[2] === stats) {
        if (cResult[6] === tmp4.expandedCarouselContent) {
          if (cResult[7] === tmp13) {
            let tmp17 = cResult[8];
          }
          if (cResult[9] === tmp4.carousel) {
            if (cResult[10] === tmp17) {
              let tmp21 = cResult[11];
            }
            return tmp21;
          }
          const obj3 = { style: tmp4.carousel, children: tmp17 };
          const tmp24 = closure_6(closure_5, obj3);
          cResult[9] = tmp4.carousel;
          cResult[10] = tmp17;
          cResult[11] = tmp24;
          tmp21 = tmp24;
        }
        const obj4 = { style: tmp12, children: cResult[3] };
        const tmp20 = closure_6(closure_5, obj4);
        cResult[6] = tmp4.expandedCarouselContent;
        cResult[7] = cResult[3];
        cResult[8] = tmp20;
        tmp17 = tmp20;
      }
    }
    if (cResult[4] !== onRatingPress) {
      class R {
        constructor(arg0) {
          obj = { stat: arg0, expanded: true, onRatingPress: null };
          tmp3 = undefined;
          tmp = jsx;
          tmp2 = f57470;
          if ("rating" === arg0.type) {
            tmp3 = onRatingPress;
          }
          obj.onRatingPress = tmp3;
          return tmp(tmp2, obj, arg0.type);
        }
      }
      cResult[4] = onRatingPress;
      cResult[5] = R;
      const tmp14 = R;
    } else {
      class R {
        constructor(arg0) {
          obj = { stat: arg0, expanded: true, onRatingPress: null };
          tmp3 = undefined;
          tmp = jsx;
          tmp2 = f57470;
          if ("rating" === arg0.type) {
            tmp3 = onRatingPress;
          }
          obj.onRatingPress = tmp3;
          return tmp(tmp2, obj, arg0.type);
        }
      }
    }
    const mapped = stats.map(tmp14);
    cResult[1] = onRatingPress;
    cResult[num2] = stats;
    num2 = 3;
    cResult[3] = mapped;
  } else {
    class R {
      constructor(arg0) {
        obj = { stat: arg0, expanded: true, onRatingPress: null };
        tmp3 = undefined;
        tmp = jsx;
        tmp2 = f57470;
        if ("rating" === arg0.type) {
          tmp3 = onRatingPress;
        }
        obj.onRatingPress = tmp3;
        return tmp(tmp2, obj, arg0.type);
      }
    }
    if (cResult[15] !== onRatingPress) {
      class R {
        constructor(arg0) {
          obj = { stat: arg0, expanded: true, onRatingPress: null };
          tmp3 = undefined;
          tmp = jsx;
          tmp2 = f57470;
          if ("rating" === arg0.type) {
            tmp3 = onRatingPress;
          }
          obj.onRatingPress = tmp3;
          return tmp(tmp2, obj, arg0.type);
        }
      }
      cResult[15] = onRatingPress;
      cResult[16] = tmp9;
      const tmp8 = tmp9;
    } else {
      class R {
        constructor(arg0) {
          obj = { stat: arg0, expanded: true, onRatingPress: null };
          tmp3 = undefined;
          tmp = jsx;
          tmp2 = f57470;
          if ("rating" === arg0.type) {
            tmp3 = onRatingPress;
          }
          obj.onRatingPress = tmp3;
          return tmp(tmp2, obj, arg0.type);
        }
      }
    }
    const mapped1 = stats.map(tmp8);
    cResult[12] = onRatingPress;
    cResult[13] = stats;
    cResult[14] = mapped1;
  }
}) : ((arg0) => {
  ({ stats, onRatingPress: require } = arg0);
  let map = closure_9();
  LegacyBaseButton;
  if (0 === stats.length) {
    return null;
  } else if (tmp5) {
    const obj3 = { style: map.carousel, children: null };
    const obj4 = { style: map.expandedCarouselContent, children: null };
    map = stats.map;
    obj4.children = map((stat) => {
      const obj = { stat, expanded: true, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = require;
      }
      obj.onRatingPress = tmp3;
      return timestampProducer(closure_11, obj, stat.type);
    });
    obj3.children = tmp10(closure_5, obj4);
    let tmp10Result = tmp10(closure_5, obj3);
  } else {
    let obj = { gesture: tmp4, children: null };
    const obj7 = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj2.style, carouselContent: obj2.contentContainerStyle } = map);
    obj7.children = stats.map((stat) => {
      const obj = { stat, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = require;
      }
      obj.onRatingPress = tmp3;
      return timestampProducer(closure_11, obj, stat.type);
    });
    obj.children = tmp10(closure_4, obj7);
    tmp10Result = tmp10(LegacyBaseButton.GestureDetector, obj);
  }
});
