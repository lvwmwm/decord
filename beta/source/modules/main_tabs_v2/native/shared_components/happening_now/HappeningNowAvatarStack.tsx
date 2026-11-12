// Module ID: 18517
// Function ID: 18518
// Name: HappeningNowAvatarStack
// Dependencies: [32, 19, 17, 2186, 15152, 21, 5170, 575, 1187, 1652, 563, 5793, 1705, 9626, 5783, 2024, 18518, 2]
// Exports: HappeningNowAvatarStack

// Module 18517 (HappeningNowAvatarStack)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import spring_spring from "spring/spring" /* 5793 */;
import ClipView from "ClipView" /* 9626 */;
import ChannelAnimationConstants from "ChannelAnimationConstants" /* 15152 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore_mod from "LocaleStore" /* 2186 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ClipViewDefault = ClipView;
let set;

let c9;
let metroImportAll;
let tmp2;
const _mod1705 = tmp2(1705);
let View = react_native.View;
let LocaleStore = LocaleStore_mod;
const CHANNEL_SPRING_CONFIG = ChannelAnimationConstants.CHANNEL_SPRING_CONFIG;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = { damping: 17, stiffness: 320, mass: 0.5 };
let closure_11 = createStyles.createStyles((arg0, marginLeft) => {
  let obj4;
  const obj = { avatarStack: { flexDirection: "row" }, stageAvatarStack: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 }, avatarBubbles: { display: "flex", flexDirection: "row" }, avatars: { display: "flex", flexDirection: "row" }, shiftedAvatar: { marginLeft: -marginLeft }, userCounter: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: native.AVATAR_SIZE_MAP[arg0], minWidth: native.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 }, ellipsisWrapper: obj4, ellipsisBorder: { borderColor: nativeDefault.colors.CARD_SECONDARY_BG } };
  ({ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 });
  obj4 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", overflow: "hidden", marginLeft: -4 - marginLeft };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: native.AVATAR_SIZE_MAP[arg0], minWidth: native.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 });
  ({ borderColor: nativeDefault.colors.CARD_SECONDARY_BG });
  return obj;
});
let closure_12 = { code: "(function HappeningNowAvatarStackTsx1(){let[interpolate,typingValue,ELLIPSIS_WIDTH]=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};})" };
let closure_13 = { code: "(function HappeningNowAvatarStackTsx2(finished){let[scheduleOnRN,setRenderComponents,isTyping]=this.__closure;if(!finished)return;scheduleOnRN(setRenderComponents,isTyping);})" };
let closure_14 = { code: "(function HappeningNowAvatarStackTsx3(){let[isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG]=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx");

export function HappeningNowAvatarStack(userLimit) {
  let Text;
  let c7;
  let closure_6;
  let guildId;
  let isStage;
  let isTyping;
  let items10;
  let items11;
  let items12;
  let items14;
  let items7;
  let obj10;
  let obj8;
  let require;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp34Result2;
  let tmp36;
  let tmp5;
  let tmp6Result7;
  let userCount;
  let users;
  ({ users, guildId: require, isTyping } = userLimit);
  if (isTyping === undefined) {
    isTyping = false;
  }
  let num = userLimit.userLimit;
  if (num === undefined) {
    num = 3;
  }
  ({ userCount, isStage } = userLimit);
  let XSMALL_20 = userLimit.avatarSize;
  if (XSMALL_20 === undefined) {
    let tmp = require;
    let tmp2 = isStage;
    XSMALL_20 = require("native").AvatarSizes.XSMALL_20;
  }
  let num2 = userLimit.avatarBorderWidth;
  if (num2 === undefined) {
    num2 = 2;
  }
  let num3 = userLimit.avatarOverlap;
  if (num3 === undefined) {
    num3 = 4;
  }
  const style = userLimit.style;
  c7 = undefined;
  let sharedValue;
  let substr;
  let c10;
  const tmp3 = closure_11(XSMALL_20, num3);
  LocaleStore = tmp3;
  let obj = num2;
  let tmp4 = XSMALL_20(num2.useState(() => isTyping), 2);
  [tmp5, c7] = tmp4;
  let tmp6 = require;
  let tmp7 = isStage;
  const tmp8 = require("module_1652");
  let num4 = 0;
  const useSharedValue = tmp8.useSharedValue;
  if (isTyping) {
    num4 = 1;
  }
  sharedValue = useSharedValue(num4);
  let items = [LocaleStore];
  const tmp6Result = tmp6(tmp7[10]);
  const stateFromStores = tmp6Result.useStateFromStores(items, () => closure_6.locale);
  let items1 = [closure_12, , , ];
  const useAnimatedStyle = tmp6(tmp7[9]).useAnimatedStyle;
  tmp6(tmp7[9]);
  items1[1] = tmp6(tmp7[9]).interpolate;
  items1[2] = sharedValue;
  items1[3] = 28;
  let c0;
  let c1;
  let c2;
  [tmp12, tmp13, tmp14, tmp15] = items1;
  class HappeningNowAvatarStackTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0, 1]), width: _undefined(_undefined2.get(), [0, 1], items) };
      items = [0, c2];
      return obj;
    }
  }
  const items2 = [tmp13, tmp14, tmp15];
  HappeningNowAvatarStackTsx1.__closure = items2;
  HappeningNowAvatarStackTsx1.__workletHash = 15788813600806;
  HappeningNowAvatarStackTsx1.__initData = tmp12;
  const items3 = [isTyping, sharedValue];
  const animatedStyle = useAnimatedStyle(HappeningNowAvatarStackTsx1);
  const effect = obj.useEffect(() => {
    let tmp10;
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp = sharedValue;
    set = sharedValue.set;
    let num = 0;
    const withSpring = spring_spring.withSpring;
    if (isTyping) {
      num = 1;
    }
    const items = [closure_13, _mod1705.scheduleOnRN, c7, tmp5];
    let c0;
    let c1;
    let c2;
    [tmp7, tmp8, tmp9, tmp10] = items;
    const tmp6 = CHANNEL_SPRING_CONFIG;
    class HappeningNowAvatarStackTsx2 {
      constructor(arg0) {
        tmp = arg0;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_0(closure_1, closure_2);
        }
        return;
      }
    }
    const items1 = [tmp8, tmp9, tmp10];
    HappeningNowAvatarStackTsx2.__closure = items1;
    HappeningNowAvatarStackTsx2.__workletHash = 10871831369161;
    HappeningNowAvatarStackTsx2.__initData = tmp7;
    const result = set(withSpring(num, tmp6, "respect-motion-settings", HappeningNowAvatarStackTsx2));
  }, items3);
  substr = users.slice(0, num);
  if (userCount == null) {
    userCount = users.length;
  }
  let diff = userCount - substr.length;
  c10 = diff;
  const mapped = substr.map((user, index) => {
    let items;
    let tmp2Result;
    const diff = substr.length - 1;
    const obj = { user, guildId: require, size: XSMALL_20 };
    const tmp6 = metroImportAll(native.Avatar, obj);
    let shiftedAvatar;
    const tmp7 = View;
    if (0 !== index) {
      shiftedAvatar = closure_6.shiftedAvatar;
    }
    const obj2 = { style: shiftedAvatar, children: tmp2Result };
    if (index !== diff) {
      const obj3 = { cutouts: items, children: tmp6 };
      const point = { shape: ClipView.CutoutShape.Circle, x: native.AVATAR_SIZE_MAP[XSMALL_20] - num3 - num2, y: -num2, size: native.AVATAR_SIZE_MAP[XSMALL_20] + 2 * num2 };
      items = [point];
      const tmp14 = ClipViewDefault;
      tmp2Result = tmp2(tmp14, obj3);
    } else {
      tmp2Result = tmp6;
      if (!isStage) {
        tmp2Result = tmp6;
      }
    }
    return metroImportAll(tmp7, obj2, user.id);
  });
  const items4 = [closure_14, isStage, diff, mapped, , , , , ];
  const useAnimatedStyle2 = tmp6(tmp7[9]).useAnimatedStyle;
  tmp6(tmp7[9]);
  items4[4] = tmp6(tmp7[8]).AVATAR_SIZE_MAP;
  items4[5] = XSMALL_20;
  items4[6] = num3;
  items4[7] = tmp6(tmp7[11]).withSpring;
  items4[8] = c10;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  c7 = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items4;
  class HappeningNowAvatarStackTsx3 {
    constructor() {
      let num4;
      let num = 0;
      const length = _undefined.length;
      if (!c0) {
        num = 0;
        if (c1 > 0) {
          num = 1;
        }
      }
      const sum = length + num;
      num2 = 0;
      if (sum > 0) {
        num2 = sum * _undefined2[c4] - (sum - 1) * c5;
      }
      const obj = { width: _undefined3(num2, c7), marginRight: num4 };
      num4 = 4;
      if (0 === sum) {
        num4 = 0;
      }
      return obj;
    }
  }
  const items5 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  HappeningNowAvatarStackTsx3.__closure = items5;
  HappeningNowAvatarStackTsx3.__workletHash = 14791568232776;
  HappeningNowAvatarStackTsx3.__initData = tmp21;
  const animatedStyle2 = useAnimatedStyle2(HappeningNowAvatarStackTsx3);
  let obj2 = { style: null, children: null };
  if (isStage) {
    const items6 = [tmp3.stageAvatarStack, style];
    obj2.style = items6;
    let obj3 = { style: items7, children: mapped };
    items7 = [tmp3.avatars, animatedStyle2];
    const items8 = [sharedValue(isTyping(tmp7[9]).View, obj3), ];
    const obj4 = { color: "text-default", variant: "body-xs/semibold", children: tmp6Result7.humanizeValue(userCount, stateFromStores) };
    const Text2 = tmp6(tmp7[14]).Text;
    tmp6Result7 = tmp6(tmp7[15]);
    items8[1] = sharedValue(Text2, obj4);
    obj2.children = items8;
    tmp36 = obj2;
  } else {
    const items9 = [tmp3.avatarStack, style];
    obj2.style = items9;
    const obj5 = { style: items10, children: items11 };
    items10 = [tmp3.avatarBubbles, animatedStyle2];
    const obj6 = { style: tmp3.avatars, children: mapped };
    View = isTyping(tmp7[9]).View;
    items11 = [sharedValue(num3, obj6), ];
    let tmp34Result = null;
    const tmp33 = isTyping;
    if (diff > 0) {
      const obj7 = { style: tmp3.userCounter, children: substr(Text, obj8) };
      obj8 = { color: "text-default", variant: "footnote/semibold", allowFontScaling: false, children: items12 };
      Text = tmp6(tmp7[14]).Text;
      items12 = ["+"];
      const tmp6Result8 = tmp6(tmp7[15]);
      items12[1] = tmp6Result8.humanizeValue(diff, stateFromStores);
      tmp34Result = tmp34(tmp32, obj7);
    }
    items11[1] = tmp34Result;
    const items13 = [substr(View, obj5), ];
    if (!tmp34Result2) {
      tmp34Result2 = isTyping;
    }
    if (tmp34Result2) {
      const obj9 = { style: items14, children: sharedValue(tmp6(tmp7[16]).TypingIndicator, obj10) };
      items14 = [tmp3.ellipsisWrapper, animatedStyle];
      const View2 = tmp33(tmp7[9]).View;
      obj10 = { style: tmp3.ellipsisBorder };
      tmp34Result2 = tmp34(View2, obj9);
    }
    items13[1] = tmp34Result2;
    obj2.children = items13;
    tmp36 = obj2;
  }
  return substr(num3, tmp36);
}
