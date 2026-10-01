// Module ID: 13010
// Function ID: 13011
// Name: PremiumFeaturesCarouselSection
// Dependencies: [32, 19, 17, 1074, 6852, 1374, 21, 576, 4836, 5293, 1094, 4832, 5899, 1115, 13011, 13012, 13013, 13014, 5266, 1610, 10222, 1177, 6583, 1479, 1241, 2]
// Exports: default

// Module 13010 (PremiumFeaturesCarouselSection)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj5;
let unpackModuleId;
class PremiumFeaturesCardBackground {
  constructor(arg0) {
    let children;
    let items;
    let obj2;
    let style;
    let tmp2;
    ({ style, children } = arg0);
    const tmp = closure_15();
    const obj = { style: tmp.cardContainer, children: authStore(tmp2, obj2) };
    obj2 = { style: items, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: Gradients.PREMIUM_TIER_0_PERK_CARD, children };
    items = [tmp.card, style];
    tmp2 = LinearGradientDefault;
    return authStore(metroRequire, obj);
  }
}
function CarouselCard(arg0) {
  let imageSrc;
  let imageStyle;
  let items;
  let items1;
  let style;
  let title;
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp = closure_15();
  const obj = { style, children: items };
  items = [, ];
  const obj2 = { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp.cardTitle, children: title };
  items[0] = authStore(Text_Text.Text, obj2);
  const obj3 = { source: imageSrc, style: items1, resizeMode: "contain" };
  items1 = [tmp.image, imageStyle];
  items[1] = authStore(FastImageDefault, obj3);
  return unpackModuleId(PremiumFeaturesCardBackground, obj);
}
function PremiumFeaturesCarousel(arg0) {
  let c4;
  let closure_2;
  let onEndReached;
  let width;
  ({ width, onEndReached } = arg0);
  let mapped;
  react = undefined;
  const tmp = closure_14();
  let obj = onEndReached(5266);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp5 = mapped(react.useState(0), 2);
  dependencyMap = tmp7;
  const tmp8 = closure_16();
  const currentIndex = tmp8;
  let items = [tmp8];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let items2;
    let items3;
    let items4;
    const obj = { title: intl.string(onEndReached(closure_2[13]).t["3cyhe3"]), imageSrc: first(closure_2[14]), imageStyle: emojiImage.emojiImage, premiumTypes: new Set(items) };
    intl = onEndReached(closure_2[13]).intl;
    items = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
    const items1 = [obj, , , ];
    const obj2 = { title: intl2.string(onEndReached(closure_2[13]).t["8AhJqy"]), imageSrc: first(closure_2[15]), premiumTypes: new Set(items2) };
    new Set(items);
    intl2 = onEndReached(closure_2[13]).intl;
    items2 = [, ];
    ({ TIER_0: arr3[0], TIER_2: arr3[1] } = PremiumTypes);
    items1[1] = obj2;
    const obj3 = { title: intl3.string(onEndReached(closure_2[13]).t["t/Mvdj"]), imageSrc: first(closure_2[16]), premiumTypes: new Set(items3) };
    new Set(items2);
    intl3 = onEndReached(closure_2[13]).intl;
    items3 = [PremiumTypes.TIER_2];
    items1[2] = obj3;
    const obj4 = { title: intl4.string(onEndReached(closure_2[13]).t["n+DGY/"]), imageSrc: first(closure_2[17]), premiumTypes: new Set(items4) };
    new Set(items3);
    intl4 = onEndReached(closure_2[13]).intl;
    items4 = [PremiumTypes.TIER_2];
    items1[3] = obj4;
    new Set(items4);
    return items1;
  }, items);
  mapped = memo.map((item, index) => {
    let obj2;
    const obj = { style: obj2 };
    obj2 = { width: width * closure_2_12 };
    const merged = Object.assign(item);
    return closure_2_10(CarouselCard, obj, index);
  });
  let items1 = [currentIndex, mapped.length, onEndReached];
  const effect = react.useEffect(() => {
    if (first === mapped.length - 1) {
      if (onEndReached != null) {
        tmp();
      }
    }
  }, items1);
  const result = width * c12;
  const sum = result + PX_12;
  react = sum;
  let items2 = [sum, mapped.length];
  const bound = Math.max(0, (width - result) / 2);
  let obj2 = { style: tmp.carouselContainer, children: null };
  const callback = react.useCallback((nativeEvent) => {
    closure_2(Math.max(0, Math.min(mapped.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / c4))));
  }, items2);
  const tmp11 = PX_12;
  const tmp15 = closure_11;
  const tmp16 = closure_6;
  const tmp2 = onEndReached;
  if (!onEndReached(1610).isThumbstickScrollDevice) {
    let tmp17;
    let tmp19;
    if (!isScreenReaderEnabled) {
      tmp17 = closure_10;
      let obj3 = {
        style: tmp.carousel,
        data: mapped,
        renderItem(item) {
              return item.item;
            },
        width,
        loop: false,
        onConfigurePanGesture(activeOffsetX) {
              activeOffsetX.activeOffsetX([-10, 10]);
            },
        scrollAnimationDuration: 200,
        mode: "parallax",
        modeConfig: { parallaxScrollingScale: 1, parallaxScrollingOffset: 45 },
        onSnapToItem: tmp5[1]
      };
      tmp19 = closure_10(currentIndex(10222), obj3);
    }
    let items3 = [tmp19, ];
    let obj4 = { containerStyle: tmp.indicators, numberOfItems: mapped.length, currentIndex };
    items3[1] = tmp17(tmp2(1177).CarouselPagination, obj4);
    obj2.children = items3;
    return tmp15(tmp16, obj2);
  }
  const obj5 = { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: tmp11 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: mapped.map((item, index) => index * c4), scrollEventThrottle: 100, onScroll: callback, children: mapped };
  tmp19 = closure_10(closure_5, obj5);
  tmp17 = closure_10;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const Gradients = ColorConstants.Gradients;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = 0.85;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, headerText: { textAlign: "center" }, carouselContainer: obj2, carousel: { flex: 1, minHeight: 262 }, indicators: obj3 };
obj2 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: -nativeDefault.space.PX_48 };
let closure_14 = createStyles(obj);
createStyles = createStyles_mod;
let obj4 = { cardContainer: { flex: 1 }, card: obj5, image: { alignSelf: "center" }, cardTitle: { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 } };
obj5 = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
const createStyles2 = createStyles.createStyles;
({ marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 });
let closure_15 = createStyles2(obj4);
createStyles = createStyles_mod;
let closure_16 = createStyles.createStyles({ emojiImage: { alignSelf: "flex-end" } });
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCarouselSection.tsx");

export default function PremiumFeaturesCarouselSection(style) {
  let closure_2;
  let closure_3;
  let first;
  let first1;
  let intl;
  let items1;
  let items2;
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  style = style.style;
  let tmp = closure_14();
  const analyticsLocations = first(6583)().analyticsLocations;
  [first, dependencyMap] = react.useState(false);
  const useState = react.useState;
  let obj = analyticsLocations(1479);
  [first1, _slicedToArray] = useState(obj.getWindowDimensions().width);
  const items = [analyticsLocations, first];
  let obj2 = {
    style: items1,
    onLayout(nativeEvent) {
      return closure_3(nativeEvent.nativeEvent.layout.width);
    },
    children: items2
  };
  items1 = [tmp.container, style];
  const callback = react.useCallback(() => {
    const tmp = first;
    if (!tmp) {
      const obj2 = { location_stack: analyticsLocations };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj2);
      closure_2(true);
    }
  }, items);
  const obj3 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(analyticsLocations(1115).t.RGadQR) };
  const Text = analyticsLocations(4832).Text;
  intl = analyticsLocations(1115).intl;
  items2 = [closure_10(Text, obj3), closure_10(PremiumFeaturesCarousel, { width: first1, onEndReached: callback })];
  return closure_11(closure_6, obj2);
};
export const PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = 0.85;
export { PremiumFeaturesCardBackground };
