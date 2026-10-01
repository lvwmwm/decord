// Module ID: 10726
// Function ID: 10727
// Name: AppStoreOverlayStatsCarousel
// Dependencies: [19, 17, 21, 576, 4836, 10727, 1115, 10728, 4832, 1364, 6073, 7131, 7141, 2]
// Exports: default

// Module 10726 (AppStoreOverlayStatsCarousel)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Text_Text from "Text/Text" /* 4832 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AppStoreOverlayStatCardUtils from "AppStoreOverlayStatCardUtils" /* 10727 */;
import AppStoreOverlayStarRatingDefault from "AppStoreOverlayStarRating" /* 10728 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function AppStoreOverlayStatCardItem(onRatingPress) {
  let accessibilityLabel;
  let expanded;
  let num2;
  let obj6;
  let ratingCount;
  let secondaryContent;
  let secondaryText;
  let stat;
  let stringResult;
  let tmp24Result2;
  let tmp6;
  ({ stat, expanded } = onRatingPress);
  if (expanded === undefined) {
    expanded = false;
  }
  onRatingPress = onRatingPress.onRatingPress;
  const tmp = closure_11();
  const type = stat.type;
  if ("rating" === type) {
    let num = stat.maxRating;
    if (num == null) {
      num = 5;
    }
    const obj3 = AppStoreOverlayStatCardUtils;
    const result = obj3.formatAppStoreRatingValue(stat.rating, intl3.intl.currentLocale);
    let result1;
    if (null != stat.ratingCount) {
      const tmp9Result = AppStoreOverlayStatCardUtils;
      result1 = tmp9Result.formatAppStoreRatingCount(stat.ratingCount, tmp9(1115).intl.currentLocale);
    }
    const tmp9Result2 = AppStoreOverlayStatCardUtils;
    const appStoreStarFillAmounts = tmp9Result2.getAppStoreStarFillAmounts(stat.rating, num);
    const intl = tmp9(1115).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj4 = { label: stat.label, rating: result, maxRating: num, ratingCount: num2 };
    num2 = stat.ratingCount;
    const prop = tmp9(1115).t["/0p2sz"];
    if (num2 == null) {
      num2 = 0;
    }
    const obj5 = { accessibilityLabel: formatToPlainString(prop, obj4), primaryText: result, secondaryContent: metroImportDefault(AppStoreOverlayStarRatingDefault, obj6), ratingCount: result1 };
    tmp6 = obj5;
    obj6 = { fillAmounts: appStoreStarFillAmounts };
  } else if ("age" === type) {
    const _HermesInternal3 = HermesInternal;
    ({ ageRating: obj2.primaryText, ageRatingLabel: obj2.secondaryText } = stat);
    tmp6 = { accessibilityLabel: "" + stat.label + ", " + stat.ageRating, primaryText: null, secondaryText: null };
    const obj7 = { accessibilityLabel: "" + stat.label + ", " + stat.ageRating, primaryText: null, secondaryText: null };
  } else if ("chart" === type) {
    let combined;
    const obj14 = AppStoreOverlayStatCardUtils;
    const result2 = obj14.formatAppStoreChartRank(stat.rank);
    if (null != stat.category) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + stat.label + ", " + result2 + ", " + stat.category;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stat.label + ", " + result2;
    }
    tmp6 = { accessibilityLabel: combined, primaryText: result2, secondaryText: stat.category };
    const obj = { accessibilityLabel: combined, primaryText: result2, secondaryText: stat.category };
  }
  ({ accessibilityLabel, secondaryText, secondaryContent, ratingCount } = tmp6);
  let tmp17 = "rating" === stat.type;
  const primaryText = tmp6.primaryText;
  if (tmp17) {
    tmp17 = null != onRatingPress;
  }
  const items = [tmp.statCard, ];
  if (expanded) {
    expanded = tmp.statCardExpanded;
  }
  items[1] = expanded;
  const items1 = [stat.label, " ", ];
  let str9 = "";
  const Text = Text_Text.Text;
  const tmp20 = React4;
  if (null != ratingCount) {
    const _HermesInternal4 = HermesInternal;
    str9 = "(" + ratingCount + ")";
  }
  items1[2] = str9;
  const items2 = [metroImportAll(Text, { variant: "text-xs/semibold", color: "text-subtle", children: items1 }), metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: primaryText }), ];
  let tmp24Result = null != secondaryContent || null != secondaryText;
  if (tmp24Result) {
    const obj8 = { style: tmp.secondaryRow, children: secondaryContent };
    const tmp26 = metroRequire;
    if (null == secondaryContent) {
      const obj9 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
      secondaryContent = tmp24(tmp21(4832).Text, obj9);
    }
    tmp24Result = tmp24(tmp26, obj8);
  }
  items2[2] = tmp24Result;
  const tmp19Result = metroImportAll(tmp20, { children: items2 });
  if (tmp17) {
    const obj10 = { style: items, onPress: onRatingPress, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityHint: stringResult, children: tmp19Result };
    stringResult = undefined;
    const tmp21Result = PlatformUtils;
    const tmp30 = React3;
    if (tmp21Result.isIOS()) {
      const intl2 = tmp21(1115).intl;
      stringResult = intl2.string(tmp21(1115).t.quJD0Y);
    }
    tmp24Result2 = tmp24(tmp30, obj10);
  } else {
    const obj11 = { style: items, accessible: true, accessibilityRole: "text", accessibilityLabel, children: tmp19Result };
    tmp24Result2 = tmp24(metroRequire, obj11);
  }
  return tmp24Result2;
}
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = 130 + nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { carousel: obj2, carouselContent: obj3, statCard: size, statCardExpanded: { flex: 1, minWidth: 0 }, expandedCarouselContent: obj4, secondaryRow: obj5 };
obj2 = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
size = { width: 130, height: 92, borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { height: nativeDefault.space.PX_16, justifyContent: "center" };
let closure_11 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

export default function AppStoreOverlayStatsCarousel(arg0) {
  let obj4;
  let obj9;
  let onCarouselScroll;
  let ref;
  let stats;
  ({ stats, onRatingPress: require, onCarouselScroll } = arg0);
  dependencyMap = undefined;
  let length;
  let tmp = closure_11();
  let tmp2 = require;
  let tmp3 = dependencyMap;
  let obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const tmp5 = stats.length <= 2;
  dependencyMap = length.useRef(0);
  length = stats.length;
  const items = [length];
  const effect = length.useEffect(() => {
    ref.current = 0;
  }, items);
  const items1 = [length, onCarouselScroll];
  const onMomentumScrollEnd = length.useCallback((nativeEvent) => {
    let LEFT;
    if (null != onCarouselScroll) {
      if (length > 1) {
        const _Math = Math;
        const diff = tmp5 - 1;
        const _Math2 = Math;
        const _Math3 = Math;
        const bound = Math.min(diff, Math.max(0, Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_10)));
        const current = ref.current;
        if (bound !== current) {
          const obj = { carouselType: AnalyticsActions.AppStoreOverlayCarouselTypes.STATS, scrollingDirection: LEFT, carouselPosition: bound, carouselSize: length };
          if (bound > current) {
            LEFT = tmp2(7141).HorizontalScrollingDirection.RIGHT;
          } else {
            LEFT = tmp2(7141).HorizontalScrollingDirection.LEFT;
          }
          tmp(obj);
          tmp11.current = bound;
        }
      }
    }
  }, items1);
  [][0] = onMomentumScrollEnd;
  let tmp9 = null;
  if (0 !== stats.length) {
    let tmp13Result;
    if (tmp5) {
      const obj2 = { style: tmp.carousel, children: closure_7(closure_6, obj4) };
      obj4 = {
        style: tmp.expandedCarouselContent,
        children: stats.map((stat) => {
              let tmp3;
              const obj = { stat, expanded: true, onRatingPress: tmp3 };
              tmp3 = undefined;
              const tmp = metroImportDefault;
              const tmp2 = AppStoreOverlayStatCardItem;
              if ("rating" === stat.type) {
                tmp3 = require;
              }
              return tmp(tmp2, obj, stat.type);
            })
      };
      tmp13Result = tmp13(closure_6, obj2);
    } else {
      const obj5 = { gesture: nativeGesture, children: closure_7(closure_5, obj9) };
      ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = tmp);
      obj9 = {
        horizontal: true,
        nestedScrollEnabled: true,
        showsHorizontalScrollIndicator: false,
        style: null,
        contentContainerStyle: null,
        onScrollEndDrag: tmp8,
        onMomentumScrollEnd,
        children: stats.map((stat) => {
              let tmp3;
              const obj = { stat, onRatingPress: tmp3 };
              tmp3 = undefined;
              const tmp = metroImportDefault;
              const tmp2 = AppStoreOverlayStatCardItem;
              if ("rating" === stat.type) {
                tmp3 = require;
              }
              return tmp(tmp2, obj, stat.type);
            })
      };
      const GestureDetector = LegacyBaseButton.GestureDetector;
      tmp13Result = tmp13(GestureDetector, obj5);
    }
    tmp9 = tmp13Result;
  }
  return tmp9;
};
