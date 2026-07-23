// Module ID: 12401
// Function ID: 96326
// Name: PremiumFeaturesCardBackground
// Dependencies: [57, 31, 27, 653, 6671, 1851, 33, 689, 4130, 4554, 668, 4126, 5085, 1212, 12402, 12403, 12404, 12405, 4528, 1553, 9694, 1273, 5464, 1450, 675, 2]
// Exports: default

// Module 12401 (PremiumFeaturesCardBackground)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { Gradients } from "items";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
const require = arg1;
class PremiumFeaturesCardBackground {
  constructor(arg0) {
    ({ style, children } = global);
    tmp = Object();
    obj = { style: tmp.cardContainer };
    obj = { style: items };
    items = [, ];
    items[0] = tmp.card;
    items[1] = style;
    tmp2 = require("LinearGradient");
    obj.start = require("keys").VerticalGradient.START;
    obj.end = require("keys").VerticalGradient.END;
    obj.colors = Gradients.PREMIUM_TIER_0_PERK_CARD;
    obj.children = children;
    obj.children = jsx(tmp2, obj);
    return jsx(View, obj);
  }
}
function CarouselCard(arg0) {
  let imageSrc;
  let imageStyle;
  let style;
  let title;
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp = callback4();
  let obj = { style };
  obj = { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp.cardTitle, children: title };
  const items = [callback2(require(4126) /* Text */.Text, obj), ];
  const items1 = [tmp.image, imageStyle];
  items[1] = callback2(importDefault(5085), { source: imageSrc, style: items1, resizeMode: "contain" });
  obj.children = items;
  return callback3(PremiumFeaturesCardBackground, obj);
}
function PremiumFeaturesCarousel(arg0) {
  let onEndReached;
  let width;
  ({ width, onEndReached } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = onEndReached(4528);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp3 = arr(sum.useState(0), 2);
  let first = tmp3[0];
  const dependencyMap = tmp5;
  arr = (function usePremiumFeatureCardData(width) {
    let closure_0 = width;
    const tmp = outer1_16();
    const first = tmp;
    let items = [tmp];
    const memo = sum.useMemo(() => {
      let obj = {};
      const intl = onEndReached(1212).intl;
      obj.title = intl.string(onEndReached(1212).t["3cyhe3"]);
      obj.imageSrc = first(12402);
      obj.imageStyle = tmp.emojiImage;
      const items = [outer2_9.TIER_0, outer2_9.TIER_2];
      obj.premiumTypes = new Set(items);
      const items1 = [obj, , , ];
      obj = {};
      const intl2 = onEndReached(1212).intl;
      obj.title = intl2.string(onEndReached(1212).t["8AhJqy"]);
      obj.imageSrc = first(12403);
      const items2 = [outer2_9.TIER_0, outer2_9.TIER_2];
      const set = new Set(items);
      obj.premiumTypes = new Set(items2);
      items1[1] = obj;
      obj = {};
      const intl3 = onEndReached(1212).intl;
      obj.title = intl3.string(onEndReached(1212).t["t/Mvdj"]);
      obj.imageSrc = first(12404);
      const items3 = [outer2_9.TIER_2];
      const set1 = new Set(items2);
      obj.premiumTypes = new Set(items3);
      items1[2] = obj;
      const obj1 = {};
      const intl4 = onEndReached(1212).intl;
      obj1.title = intl4.string(onEndReached(1212).t["n+DGY/"]);
      obj1.imageSrc = first(12405);
      const items4 = [outer2_9.TIER_2];
      const set2 = new Set(items3);
      obj1.premiumTypes = new Set(items4);
      items1[3] = obj1;
      return items1;
    }, items);
    return memo.map((arg0, arg1) => {
      obj = { style: obj };
      obj = { width: closure_0 * outer2_12 };
      const merged = Object.assign(arg0);
      return outer2_10(outer2_18, obj, arg1);
    });
  })(width);
  let items = [first, arr.length, onEndReached];
  const effect = sum.useEffect(() => {
    if (first === arr.length - 1) {
      if (null != onEndReached) {
        onEndReached();
      }
    }
  }, items);
  const result = width * c12;
  sum = result + PX_12;
  let items1 = [sum, arr.length];
  const bound = Math.max(0, (width - result) / 2);
  obj = { style: tmp.carouselContainer };
  const callback = sum.useCallback((nativeEvent) => {
    tmp5(Math.max(0, Math.min(arr.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / result))));
  }, items1);
  if (!onEndReached(1553).isThumbstickScrollDevice) {
    if (!isScreenReaderEnabled) {
      obj = {
        style: tmp.carousel,
        data: arr,
        renderItem(item) {
              return item.item;
            },
        width,
        loop: false,
        onConfigurePanGesture(activeOffsetX) {
              const items = [-10, 10];
              activeOffsetX.activeOffsetX(items);
            },
        scrollAnimationDuration: 200,
        mode: "parallax",
        modeConfig: { parallaxScrollingScale: 1, parallaxScrollingOffset: 45 },
        onSnapToItem: tmp5
      };
      let tmp16 = callback2(first(9694), obj);
    }
    let items2 = [tmp16, ];
    let obj1 = { containerStyle: tmp.indicators, numberOfItems: arr.length, currentIndex: first };
    items2[1] = callback2(onEndReached(1273).CarouselPagination, obj1);
    obj.children = items2;
    return closure_11(closure_6, obj);
  }
  const obj2 = { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: arr.map((arg0, arg1) => arg1 * result), scrollEventThrottle: 100, onScroll: callback, children: arr };
  tmp16 = callback2(closure_5, obj2);
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let c12 = 0.85;
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
_createForOfIteratorHelperLoose = { container: { flex: 1 }, headerText: { textAlign: "center" } };
_createForOfIteratorHelperLoose = { flex: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.carouselContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.carousel = { flex: 1, minHeight: 262 };
_createForOfIteratorHelperLoose.indicators = { marginBottom: -require("_createForOfIteratorHelperLoose").space.PX_48 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { cardContainer: { flex: 1 } };
const obj3 = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
obj2.card = obj3;
obj2.image = { alignSelf: "center" };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj2.cardTitle = _createForOfIteratorHelperLoose;
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj2);
let closure_16 = _createForOfIteratorHelperLoose.createStyles({ emojiImage: { alignSelf: "flex-end" } });
let obj1 = { marginBottom: -require("_createForOfIteratorHelperLoose").space.PX_48 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCarouselSection.tsx");

export default function PremiumFeaturesCarouselSection(style) {
  const tmp = _createForOfIteratorHelperLoose();
  const analyticsLocations = first(5464)().analyticsLocations;
  const tmp2 = callback(React.useState(false), 2);
  first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj = analyticsLocations(1450);
  const tmp4 = callback(React.useState(obj.getWindowDimensions().width), 2);
  callback = tmp4[1];
  const items = [analyticsLocations, first];
  obj = {
    style: items1,
    onLayout(nativeEvent) {
      return callback(nativeEvent.nativeEvent.layout.width);
    }
  };
  items1 = [tmp.container, style.style];
  callback = React.useCallback(() => {
    if (!first) {
      let obj = first(675);
      obj = { location_stack: analyticsLocations };
      obj.track(outer1_7.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj);
      dependencyMap(true);
    }
  }, items);
  obj = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
  const intl = analyticsLocations(1212).intl;
  obj.children = intl.string(analyticsLocations(1212).t.RGadQR);
  const items2 = [callback2(analyticsLocations(4126).Text, obj), callback2(PremiumFeaturesCarousel, { width: tmp4[0], onEndReached: callback })];
  obj.children = items2;
  return callback3(closure_6, obj);
};
export const PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = 0.85;
export { PremiumFeaturesCardBackground };
