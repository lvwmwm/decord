// Module ID: 12817
// Function ID: 12818
// Name: ConjureHomeCarousel
// Dependencies: [32, 19, 17, 5015, 1993, 1072, 21, 575, 9727, 8678, 12818, 9587, 11281, 12446, 5014, 5095, 12820, 5717, 1409, 5624, 12821, 12964, 12972, 504, 1498, 1113, 3868, 2]

// Module 12817 (ConjureHomeCarousel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AppsIcon from "AppsIcon" /* 8678 */;
import ScreenIcon from "ScreenIcon" /* 9587 */;
import GameControllerIcon from "GameControllerIcon" /* 9727 */;
import ShieldIcon from "ShieldIcon" /* 11281 */;
import RobotIcon from "RobotIcon" /* 12446 */;
import WidgetsIcon from "WidgetsIcon" /* 12818 */;
import conjureHomeCarouselFan from "conjureHomeCarouselFan" /* 12820 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import AppStateStore from "AppStateStore" /* 1993 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let c10;
let c9;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
let size;
let size1;
let react = react_mod;
let View = react_native.View;
const AppStates = Constants.AppStates;
({ jsx: c9, jsxs: c10 } = Fragment);
const STEP = 240 + nativeDefault.space.PX_24;
const sum = 36 + 2 * nativeDefault.space.PX_6 + 2;
const sum1 = sum + nativeDefault.space.PX_12;
const PX_24 = nativeDefault.space.PX_24;
let obj = { games: GameControllerIcon.GameControllerIcon, apps: AppsIcon.AppsIcon, profile_widget: WidgetsIcon.WidgetsIcon, overlay_widget: ScreenIcon.ScreenIcon, automod: ShieldIcon.ShieldIcon, chat_bot: RobotIcon.RobotIcon };
let createStyles = createStyles_mod;
let obj2 = { carousel: obj3, item: rect, promptRow: obj4, avatar: size, bubble: obj5, card: obj6, thumbnail: obj7, footer: obj8, categoryIcon: size1, footerText: { flex: 1 } };
obj3 = { height: sum1 + 135 + 54 + PX_24, overflow: "hidden" };
rect = { position: "absolute", top: 0, left: 0, width: 240, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.round };
obj5 = { flex: 1, height: sum, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj7 = { height: 135, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_10, padding: nativeDefault.space.PX_10 };
size1 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_13 = createStyles(obj2);
const __initData = { code: "function ConjureHomeCarouselTsx1(){const{wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH}=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+\"deg\"}]};}" };
let closure_15 = react.memo(function ConjureHomeCarouselItem(offset) {
  let LocalSvg;
  let index;
  let inspiration;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let makeSource;
  let obj13;
  let obj18;
  let obj6;
  let obj8;
  ({ inspiration, index } = offset);
  offset = offset.offset;
  const viewportWidth = offset.viewportWidth;
  const count = offset.count;
  const tmp = closure_13();
  let result = STEP * count;
  let c3 = result;
  const tmp2 = obj[inspiration.category];
  obj = index(viewportWidth[15]);
  const fn = function u() {
    let items;
    const result = index * STEP;
    obj = conjureHomeCarouselFan;
    const result1 = obj.wrapConjureHomeCarouselDistance(result, offset.get(), c3);
    const obj2 = conjureHomeCarouselFan;
    const result2 = obj2.conjureHomeCarouselFan(result1 / STEP, STEP);
    const obj3 = { transform: items };
    items = [, , ];
    const obj4 = { translateX: viewportWidth / 2 - 120 + result1 };
    items[0] = obj4;
    items[1] = { translateY: result2.dropPx };
    items[2] = { rotate: "" + result2.angleDeg + "deg" };
    ({ rotate: "" + result2.angleDeg + "deg" });
    return obj3;
  };
  let obj2 = { wrapConjureHomeCarouselDistance: index(viewportWidth[16]).wrapConjureHomeCarouselDistance, index, STEP, offset, loop: result, conjureHomeCarouselFan: index(viewportWidth[16]).conjureHomeCarouselFan, viewportWidth, CARD_WIDTH: 240 };
  fn.__closure = obj2;
  fn.__workletHash = 10891519667070;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: items, children: items2 };
  items = [tmp.item, animatedStyle];
  let obj4 = { style: tmp.promptRow, children: items1 };
  View = offset(viewportWidth[15]).View;
  const obj5 = { style: tmp.avatar, source: makeSource(obj6.getDefaultAvatarURL(undefined, inspiration.authorAvatarSeed)) };
  const tmp5 = offset(viewportWidth[17]);
  makeSource = index(viewportWidth[18]).makeSource;
  index(viewportWidth[18]);
  obj6 = index(viewportWidth[18]);
  items1 = [closure_9(tmp5, obj5), ];
  const obj7 = { style: tmp.bubble, children: closure_9(index(viewportWidth[19]).Text, obj8) };
  obj8 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
  items1[1] = closure_9(View, obj7);
  items2 = [closure_10(View, obj4), ];
  const obj9 = { style: tmp.card, children: items3 };
  const obj10 = { style: tmp.thumbnail, children: closure_9(LocalSvg, size) };
  size = { asset: offset(viewportWidth[21])[inspiration.id], width: "100%", height: "100%" };
  LocalSvg = index(viewportWidth[20]).LocalSvg;
  items3 = [closure_9(View, obj10), ];
  const obj11 = { style: tmp.footer, children: items4 };
  const obj12 = { style: tmp.categoryIcon, children: closure_9(tmp2, obj13) };
  obj13 = { size: "sm", color: offset(viewportWidth[7]).colors.ICON_STRONG };
  items4 = [closure_9(View, obj12), ];
  const obj14 = { style: tmp.footerText, children: items5 };
  items5 = [, ];
  const obj15 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
  items5[0] = closure_9(index(viewportWidth[19]).Text, obj15);
  const obj16 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: obj18.conjureHomeCategoryLabel(inspiration.category) };
  const Text = index(viewportWidth[19]).Text;
  obj18 = index(viewportWidth[22]);
  items5[1] = closure_9(Text, obj16);
  items4[1] = closure_10(View, obj14);
  items3[1] = closure_10(View, obj11);
  items2[1] = closure_10(View, obj9);
  return closure_10(View, obj3);
});
const __initData2 = { code: "function ConjureHomeCarouselTsx2(frame){const{offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop}=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);}" };
const memoResult = react.memo(function ConjureHomeCarousel(onScreen) {
  let c4;
  let closure_2;
  let intl;
  let mapped;
  let state;
  let sharedValue;
  react = undefined;
  let frameCallback;
  let useReducedMotion;
  onScreen = onScreen.onScreen;
  obj = react;
  const tmp = closure_13();
  const memo = react.useMemo(() => {
    obj = memo(closure_2[22]);
    return obj.conjureHomeInspirationEntries();
  }, []);
  const items = [useReducedMotion];
  const obj2 = memo(504);
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [AppStateStore];
  const obj3 = memo(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => state.getState() === constants.ACTIVE);
  const obj4 = memo(1498);
  const isFocused = obj4.useIsFocused();
  const tmp7 = sharedValue(react.useState(0), 2);
  const viewportWidth = tmp7[0];
  dependencyMap = tmp7[1];
  const obj5 = memo(5095);
  sharedValue = obj5.useSharedValue(0);
  let result = closure_11 * memo.length;
  react = result;
  const obj6 = memo(5095);
  const tmp2 = memo;
  class C {
    constructor(timeSincePreviousFrame) {
      let num = timeSincePreviousFrame.timeSincePreviousFrame;
      if (num == null) {
        num = 0;
      }
      set = sharedValue.set;
      const value = sharedValue.get();
      const result = set((value + conjureHomeCarouselFan.CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND * num / 1000) % c4);
    }
  }
  C.__closure = { offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: memo(12820).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result };
  C.__workletHash = 7470635772737;
  C.__initData = __initData2;
  ({ offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: memo(12820).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result });
  frameCallback = obj6.useFrameCallback(C, false);
  const tmp12 = !stateFromStores && stateFromStores1 && isFocused && onScreen && viewportWidth > 0;
  useReducedMotion = tmp12;
  const items2 = [frameCallback, tmp12];
  const effect = obj.useEffect(() => {
    frameCallback.setActive(useReducedMotion);
  }, items2);
  const obj8 = {
    style: tmp.carousel,
    accessible: true,
    accessibilityLabel: intl.string(viewportWidth(3868).Qc4S39),
    onLayout(nativeEvent) {
      return closure_2(nativeEvent.nativeEvent.layout.width);
    },
    children: mapped
  };
  intl = tmp2(1113).intl;
  mapped = null;
  const tmp14 = closure_9;
  const tmp15 = frameCallback;
  if (viewportWidth > 0) {
    mapped = memo.map((inspiration, index) => {
      obj = { inspiration, index, count: memo.length, offset: sharedValue, viewportWidth };
      return React4(closure_15, obj, inspiration.id);
    });
  }
  return tmp14(tmp15, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeCarousel.tsx");

export default memoResult;
export const CONJURE_HOME_CAROUSEL_ROOM_BELOW = PX_24;
