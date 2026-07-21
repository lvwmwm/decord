// Module ID: 12282
// Function ID: 94147
// Name: PremiumFeaturesCardBackground
// Dependencies: []
// Exports: default

// Module 12282 (PremiumFeaturesCardBackground)
class PremiumFeaturesCardBackground {
  constructor(arg0) {
    ({ style, children } = global);
    tmp = Object();
    obj = { style: tmp.cardContainer };
    obj = { style: items };
    items = [, ];
    items[0] = tmp.card;
    items[1] = style;
    tmp2 = importDefault(dependencyMap[9]);
    obj.start = arg1(dependencyMap[10]).VerticalGradient.START;
    obj.end = arg1(dependencyMap[10]).VerticalGradient.END;
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
  const tmp = callback5();
  let obj = { style };
  obj = { hasMaxConnections: null, isBoostOnlySubscription: null, style: tmp.cardTitle, children: title };
  const items = [callback2(arg1(dependencyMap[11]).Text, obj), ];
  const items1 = [tmp.image, imageStyle];
  items[1] = callback2(importDefault(dependencyMap[12]), { source: imageSrc, style: items1, resizeMode: "contain" });
  obj.children = items;
  return callback3(PremiumFeaturesCardBackground, obj);
}
function PremiumFeaturesCarousel(arg0) {
  let onEndReached;
  let width;
  ({ width, onEndReached } = arg0);
  const arg1 = onEndReached;
  const tmp = callback4();
  let obj = arg1(dependencyMap[18]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp3 = callback(React.useState(0), 2);
  const first = tmp3[0];
  const importDefault = first;
  const dependencyMap = tmp5;
  const arr = function usePremiumFeatureCardData(width) {
    const onEndReached = width;
    const tmp = callback();
    const first = tmp;
    const items = [tmp];
    const memo = sum.useMemo(() => {
      let obj = {};
      const intl = arg0(closure_2[13]).intl;
      obj.title = intl.string(arg0(closure_2[13]).t.3cyhe3);
      obj.imageSrc = tmp(closure_2[14]);
      obj.imageStyle = tmp.emojiImage;
      const items = [closure_9.TIER_0, closure_9.TIER_2];
      obj.premiumTypes = new Set(items);
      const items1 = [obj, , , ];
      obj = {};
      const intl2 = arg0(closure_2[13]).intl;
      obj.title = intl2.string(arg0(closure_2[13]).t.8AhJqy);
      obj.imageSrc = tmp(closure_2[15]);
      const items2 = [closure_9.TIER_0, closure_9.TIER_2];
      const set = new Set(items);
      obj.premiumTypes = new Set(items2);
      items1[1] = obj;
      obj = {};
      const intl3 = arg0(closure_2[13]).intl;
      obj.title = intl3.string(arg0(closure_2[13]).t.t/Mvdj);
      obj.imageSrc = tmp(closure_2[16]);
      const items3 = [closure_9.TIER_2];
      const set1 = new Set(items2);
      obj.premiumTypes = new Set(items3);
      items1[2] = obj;
      const obj1 = {};
      const intl4 = arg0(closure_2[13]).intl;
      obj1.title = intl4.string(arg0(closure_2[13]).t.n+DGY/);
      obj1.imageSrc = tmp(closure_2[17]);
      const items4 = [closure_9.TIER_2];
      const set2 = new Set(items3);
      obj1.premiumTypes = new Set(items4);
      items1[3] = obj1;
      return items1;
    }, items);
    return memo.map((arg0, arg1) => {
      let obj = { style: obj };
      obj = { width: arg0 * closure_12 };
      const merged = Object.assign(arg0);
      return callback(closure_18, obj, arg1);
    });
  }(width);
  let callback = arr;
  const items = [first, arr.length, onEndReached];
  const effect = React.useEffect(() => {
    if (first === arr.length - 1) {
      if (null != onEndReached) {
        onEndReached();
      }
    }
  }, items);
  const result = width * closure_12;
  const sum = result + PX_12;
  const React = sum;
  const items1 = [sum, arr.length];
  const bound = Math.max(0, (width - result) / 2);
  obj = { style: tmp.carouselContainer };
  callback = React.useCallback((nativeEvent) => {
    tmp5(Math.max(0, Math.min(arr.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / sum))));
  }, items1);
  if (!arg1(dependencyMap[19]).isThumbstickScrollDevice) {
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
        modeConfig: {},
        onSnapToItem: tmp5
      };
      let tmp16 = callback2(importDefault(dependencyMap[20]), obj);
    }
    const items2 = [tmp16, ];
    const obj1 = { containerStyle: tmp.indicators, numberOfItems: arr.length, currentIndex: first };
    items2[1] = callback2(arg1(dependencyMap[21]).CarouselPagination, obj1);
    obj.children = items2;
    return closure_11(closure_6, obj);
  }
  const obj2 = { 9223372036854775807: "<string:1497759745>", 0: "<string:1124073754>", 0: "<string:570426015>", 0: "<string:3405775312>", -9223372036854775808: "<string:3774873862>", 9223372036854775807: "<string:822084035>", 0: "<string:3221225850>", style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, snapToOffsets: arr.map((arg0, arg1) => arg1 * sum), onScroll: callback, children: arr };
  tmp16 = callback2(closure_5, obj2);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const Gradients = arg1(dependencyMap[4]).Gradients;
const PremiumTypes = arg1(dependencyMap[5]).PremiumTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let closure_12 = 0.85;
const PX_12 = importDefault(dependencyMap[7]).space.PX_12;
let obj = arg1(dependencyMap[8]);
obj = { container: { flex: 1 }, headerText: { textAlign: "center" } };
obj = { flex: 1, marginTop: importDefault(dependencyMap[7]).space.PX_16 };
obj.carouselContainer = obj;
obj.carousel = { frameId: "<string:863109121>", syncRow: "<string:218103808>" };
const tmp3 = arg1(dependencyMap[6]);
obj.indicators = { marginBottom: -importDefault(dependencyMap[7]).space.PX_48 };
let closure_14 = obj.createStyles(obj);
let obj4 = arg1(dependencyMap[8]);
const obj2 = { cardContainer: { flex: 1 } };
const obj1 = { marginBottom: -importDefault(dependencyMap[7]).space.PX_48 };
obj2.card = { borderRadius: importDefault(dependencyMap[7]).radii.lg };
obj2.image = { alignSelf: "center" };
obj4 = { marginTop: importDefault(dependencyMap[7]).space.PX_24, marginHorizontal: importDefault(dependencyMap[7]).space.PX_24 };
obj2.cardTitle = obj4;
let closure_15 = obj4.createStyles(obj2);
const obj3 = { borderRadius: importDefault(dependencyMap[7]).radii.lg };
let closure_16 = arg1(dependencyMap[8]).createStyles({ emojiImage: { alignSelf: "flex-end" } });
const obj9 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCarouselSection.tsx");

export default function PremiumFeaturesCarouselSection(style) {
  const tmp = callback4();
  const analyticsLocations = importDefault(closure_2[22])().analyticsLocations;
  const arg1 = analyticsLocations;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const importDefault = first;
  closure_2 = tmp2[1];
  let obj = arg1(closure_2[23]);
  const tmp4 = callback(React.useState(obj.getWindowDimensions().width), 2);
  let callback = tmp4[1];
  const items = [analyticsLocations, first];
  obj = {
    style: items1,
    onLayout(nativeEvent) {
      return callback2(nativeEvent.nativeEvent.layout.width);
    }
  };
  const items1 = [tmp.container, style.style];
  callback = React.useCallback(() => {
    if (!first) {
      let obj = first(callback[24]);
      obj = { location_stack: analyticsLocations };
      obj.track(constants.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj);
      callback(true);
    }
  }, items);
  obj = { style: tmp.headerText };
  const intl = arg1(closure_2[13]).intl;
  obj.children = intl.string(arg1(closure_2[13]).t.RGadQR);
  const items2 = [callback2(arg1(closure_2[11]).Text, obj), callback2(PremiumFeaturesCarousel, { width: tmp4[0], onEndReached: callback })];
  obj.children = items2;
  return callback3(closure_6, obj);
};
export const PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = 0.85;
export { PremiumFeaturesCardBackground };
