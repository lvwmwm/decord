// Module ID: 13039
// Function ID: 13040
// Name: ConjureHomeCarousel
// Dependencies: [19, 17, 5142, 2122, 1072, 21, 575, 9877, 8819, 13040, 9737, 11469, 12303, 5141, 1652, 13042, 5851, 1411, 5761, 13043, 13186, 13194, 504, 1500, 9531, 1113, 3995, 2]

// Module 13039 (ConjureHomeCarousel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _mod1652 from "module_1652" /* 1652 */;
import FastImageDefault from "FastImage" /* 5851 */;
import AppsIcon from "AppsIcon" /* 8819 */;
import ScreenIcon from "ScreenIcon" /* 9737 */;
import GameControllerIcon from "GameControllerIcon" /* 9877 */;
import ShieldIcon from "ShieldIcon" /* 11469 */;
import RobotIcon from "RobotIcon" /* 12303 */;
import WidgetsIcon from "WidgetsIcon" /* 13040 */;
import conjureHomeCarouselFan from "conjureHomeCarouselFan" /* 13042 */;
import conjureHomeInspirationArtDefault from "conjureHomeInspirationArt" /* 13186 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import AppStateStore from "AppStateStore" /* 2122 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let obj1;

let c9;
let metroImportAll;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
let size;
let size1;
let tmp3;
const AvatarUtils = tmp3(1411);
const Text_Text = tmp3(5761);
const SvgCss = tmp3(13043);
const conjureHomeInspirationEntries = tmp3(13194);
let View = react_native.View;
const AppStates = Constants.AppStates;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = 240 + nativeDefault.space.PX_24;
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
let closure_12 = createStyles(obj2);
let closure_13 = { code: "(function ConjureHomeCarouselTsx1(){let[wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH]=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+\"deg\"}]};})" };
let closure_14 = react.memo(function ConjureHomeCarouselItem(inspiration) {
  let LocalSvg;
  let count;
  let index;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let makeSource;
  let obj10;
  let obj5;
  let offset;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp3Result3;
  let tmp3Result4;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let viewportWidth;
  inspiration = inspiration.inspiration;
  ({ index, count, offset, viewportWidth } = inspiration);
  const tmp = closure_12();
  let tmp3 = require;
  let tmp2 = obj[inspiration.category];
  let items = [closure_13, , , , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = conjureHomeCarouselFan.wrapConjureHomeCarouselDistance;
  items[2] = index;
  items[3] = closure_10;
  items[4] = offset;
  items[5] = closure_10 * count;
  items[6] = conjureHomeCarouselFan.conjureHomeCarouselFan;
  items[7] = viewportWidth;
  items[8] = 240;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class ConjureHomeCarouselTsx1 {
    constructor() {
      result = closure_1 * closure_2;
      tmp2 = closure_0(result, closure_3.get(), closure_4);
      tmp3 = closure_5(tmp2 / closure_2, closure_2);
      obj = { transform: null };
      obj1 = { translateX: closure_6 / 2 - closure_7 / 2 + tmp2 };
      items = [, , ];
      items[0] = obj1;
      items[1] = { translateY: tmp3.dropPx };
      obj4 = { rotate: "" + tmp3.angleDeg + "deg" };
      items[2] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  ConjureHomeCarouselTsx1.__closure = items1;
  ConjureHomeCarouselTsx1.__workletHash = 12886890817383;
  ConjureHomeCarouselTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(ConjureHomeCarouselTsx1);
  obj = { style: items2, children: items4 };
  items2 = [tmp.item, animatedStyle];
  let obj2 = { style: tmp.promptRow, children: items3 };
  View = _modDef1652.View;
  const obj3 = { style: tmp.avatar, source: makeSource(tmp3Result3.getDefaultAvatarURL(undefined, inspiration.authorAvatarSeed)) };
  const tmp16 = FastImageDefault;
  makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  tmp3Result3 = AvatarUtils;
  items3 = [metroImportAll(tmp16, obj3), ];
  const obj4 = { style: tmp.bubble, children: metroImportAll(Text_Text.Text, obj5) };
  obj5 = { variant: "body-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
  items3[1] = metroImportAll(View, obj4);
  items4 = [React4(View, obj2), ];
  const obj6 = { style: tmp.card, children: items5 };
  const obj7 = { style: tmp.thumbnail, children: metroImportAll(LocalSvg, size) };
  size = { asset: conjureHomeInspirationArtDefault[inspiration.id], width: "100%", height: "100%" };
  LocalSvg = SvgCss.LocalSvg;
  items5 = [metroImportAll(View, obj7), ];
  const obj8 = { style: tmp.footer, children: items6 };
  const obj9 = { style: tmp.categoryIcon, children: metroImportAll(tmp2, obj10) };
  obj10 = { size: "sm", color: nativeDefault.colors.ICON_STRONG };
  items6 = [metroImportAll(View, obj9), ];
  const obj11 = { style: tmp.footerText, children: items7 };
  items7 = [, ];
  const obj12 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
  items7[0] = metroImportAll(Text_Text.Text, obj12);
  const obj13 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 1, children: tmp3Result4.conjureHomeCategoryLabel(inspiration.category) };
  const Text = Text_Text.Text;
  tmp3Result4 = conjureHomeInspirationEntries;
  items7[1] = metroImportAll(Text, obj13);
  items6[1] = React4(View, obj11);
  items5[1] = React4(View, obj8);
  items4[1] = React4(View, obj6);
  return React4(View, obj);
});
let closure_15 = { code: "(function ConjureHomeCarouselTsx2(frame){let[offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop]=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);})" };
const memoResult = react.memo(function ConjureHomeCarousel(onScreen) {
  let intl;
  let mapped;
  let onLayout;
  let ref;
  let state;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let useReducedMotion;
  let num;
  let sharedValue;
  let frameCallback;
  let closure_4;
  onScreen = onScreen.onScreen;
  obj = frameCallback;
  const tmp = closure_12();
  const memo = frameCallback.useMemo(() => {
    obj = memo(sharedValue[21]);
    return obj.conjureHomeInspirationEntries();
  }, []);
  const items = [AccessibilityStore];
  const obj2 = memo(sharedValue[22]);
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [AppStateStore];
  const obj3 = memo(sharedValue[22]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => state.getState() === constants.ACTIVE);
  const obj4 = memo(sharedValue[23]);
  const isFocused = obj4.useIsFocused();
  const tmp8 = num(sharedValue[24])();
  const width = tmp8.width;
  const tmp7 = num;
  num = 0;
  ({ ref, onLayout } = tmp8);
  if (undefined !== width) {
    num = width;
  }
  const tmp2Result = memo(sharedValue[14]);
  sharedValue = tmp2Result.useSharedValue(0);
  let result = closure_10 * memo.length;
  const items2 = [closure_15, sharedValue, , ];
  const useFrameCallback = memo(sharedValue[14]).useFrameCallback;
  items2[2] = memo(sharedValue[15]).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND;
  items2[3] = result;
  let c0;
  let c1;
  let c2;
  [tmp12, tmp13, tmp14, tmp15] = items2;
  class ConjureHomeCarouselTsx2 {
    constructor(timeSincePreviousFrame) {
      num = timeSincePreviousFrame.timeSincePreviousFrame;
      if (num == null) {
        num = 0;
      }
      const result = _undefined.set((_undefined.get() + c1 * num / 1000) % c2);
    }
  }
  const items3 = [tmp13, tmp14, tmp15];
  ConjureHomeCarouselTsx2.__closure = items3;
  ConjureHomeCarouselTsx2.__workletHash = 453717571992;
  ConjureHomeCarouselTsx2.__initData = tmp12;
  frameCallback = useFrameCallback(ConjureHomeCarouselTsx2, false);
  const tmp17 = !stateFromStores && stateFromStores1 && isFocused && onScreen && num > 0;
  closure_4 = tmp17;
  const items4 = [frameCallback, tmp17];
  const effect = obj.useEffect(() => {
    frameCallback.setActive(closure_4);
  }, items4);
  const obj5 = { style: tmp.carousel, accessible: true, accessibilityLabel: intl.string(tmp7(sharedValue[26]).Qc4S39), ref, onLayout, children: mapped };
  intl = tmp2(tmp3[25]).intl;
  mapped = null;
  const tmp19 = closure_8;
  const tmp20 = closure_4;
  if (num > 0) {
    mapped = memo.map((inspiration, index) => {
      obj = { inspiration, index, count: memo.length, offset: sharedValue, viewportWidth: num };
      return metroImportAll(closure_14, obj, inspiration.id);
    });
  }
  return tmp19(tmp20, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeCarousel.tsx");

export default memoResult;
export const CONJURE_HOME_CAROUSEL_ROOM_BELOW = PX_24;
