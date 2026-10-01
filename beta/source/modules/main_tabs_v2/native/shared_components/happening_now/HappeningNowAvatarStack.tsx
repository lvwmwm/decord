// Module ID: 15715
// Function ID: 15716
// Name: HappeningNowAvatarStack
// Dependencies: [32, 19, 17, 2112, 12603, 21, 4836, 576, 1177, 4566, 563, 5280, 8276, 4832, 1882, 15716, 2]
// Exports: HappeningNowAvatarStack

// Module 15715 (HappeningNowAvatarStack)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import ClipView from "ClipView" /* 8276 */;
import ChannelAnimationConstants from "ChannelAnimationConstants" /* 12603 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ClipViewDefault = ClipView;
let set;

let c9;
let metroImportAll;
let View = react_native.View;
const CHANNEL_SPRING_CONFIG = ChannelAnimationConstants.CHANNEL_SPRING_CONFIG;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let SPRING_CONFIG = { damping: 17, stiffness: 320, mass: 0.5 };
let length = createStyles.createStyles((arg0, marginLeft) => {
  let obj4;
  const obj = { avatarStack: { flexDirection: "row" }, stageAvatarStack: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 }, avatarBubbles: { display: "flex", flexDirection: "row" }, avatars: { display: "flex", flexDirection: "row" }, shiftedAvatar: { marginLeft: -marginLeft }, userCounter: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: native.AVATAR_SIZE_MAP[arg0], minWidth: native.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 }, ellipsisWrapper: obj4, ellipsisBorder: { borderColor: nativeDefault.colors.CARD_SECONDARY_BG } };
  ({ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 });
  obj4 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", overflow: "hidden", marginLeft: -4 - marginLeft };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: native.AVATAR_SIZE_MAP[arg0], minWidth: native.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 });
  ({ borderColor: nativeDefault.colors.CARD_SECONDARY_BG });
  return obj;
});
const __initData = { code: "function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}" };
let closure_13 = { code: "function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}" };
const __initData2 = { code: "function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx");

export const HappeningNowAvatarStack = function HappeningNowAvatarStack(userLimit) {
  let Text;
  let c10;
  let c7;
  let guildId;
  let isStage;
  let isTyping;
  let items10;
  let items3;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj12;
  let require;
  let setRenderComponents;
  let tmp19Result2;
  let tmp21;
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
  SPRING_CONFIG = undefined;
  let mapped;
  const tmp3 = mapped(XSMALL_20, num3);
  let closure_6 = tmp3;
  let obj = num2;
  let tmp4 = XSMALL_20(num2.useState(() => isTyping), 2);
  [tmp5, c7] = tmp4;
  let tmp6 = require;
  let tmp7 = isStage;
  let num4 = 0;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  if (isTyping) {
    num4 = 1;
  }
  sharedValue = useSharedValue(num4);
  let items = [closure_6];
  const tmp6Result = tmp6(tmp7[10]);
  const stateFromStores = tmp6Result.useStateFromStores(items, () => closure_6.locale);
  const tmp6Result5 = tmp6(tmp7[9]);
  class V {
    constructor() {
      let obj2;
      let obj3;
      const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), width: obj3.interpolate(sharedValue.get(), [0, 1], [0, 28]) };
      obj2 = ReanimatedRexport;
      obj3 = ReanimatedRexport;
      return obj;
    }
  }
  let obj2 = { interpolate: tmp6(tmp7[9]).interpolate, typingValue: sharedValue, ELLIPSIS_WIDTH: 28 };
  V.__closure = obj2;
  V.__workletHash = 14140918847743;
  V.__initData = __initData;
  const items1 = [isTyping, sharedValue];
  const animatedStyle = tmp6Result5.useAnimatedStyle(V);
  const effect = obj.useEffect(() => {
    let tmp = sharedValue;
    set = sharedValue.set;
    let num = 0;
    const withSpring = spring.withSpring;
    if (isTyping) {
      num = 1;
    }
    const fn = function t(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = require("ReanimatedRexport");
        obj.runOnJS(setRenderComponents)(isTyping);
      }
    };
    let obj = { runOnJS: ReanimatedRexport.runOnJS, setRenderComponents, isTyping: tmp5 };
    fn.__closure = obj;
    fn.__workletHash = 2498652829757;
    fn.__initData = __initData;
    const result = set(withSpring(num, CHANNEL_SPRING_CONFIG, "respect-motion-settings", fn));
  }, items1);
  substr = users.slice(0, num);
  if (userCount == null) {
    userCount = users.length;
  }
  let diff = userCount - substr.length;
  SPRING_CONFIG = diff;
  mapped = substr.map((user, index) => {
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
  const tmp6Result6 = tmp6(tmp7[9]);
  class H {
    constructor() {
      let num4;
      let obj2;
      let num = 0;
      length = mapped.length;
      if (!isStage) {
        num = 0;
        if (c10 > 0) {
          num = 1;
        }
      }
      const sum = length + num;
      num2 = 0;
      if (sum > 0) {
        num2 = sum * native.AVATAR_SIZE_MAP[XSMALL_20] - (sum - 1) * num3;
      }
      const obj = { width: obj2.withSpring(num2, SPRING_CONFIG), marginRight: num4 };
      num4 = 4;
      obj2 = spring;
      if (0 === sum) {
        num4 = 0;
      }
      return obj;
    }
  }
  let obj3 = { isStage, extraUsers: diff, avatars: mapped, AVATAR_SIZE_MAP: tmp6(tmp7[8]).AVATAR_SIZE_MAP, avatarSize: XSMALL_20, avatarOverlap: num3, withSpring: tmp6(tmp7[11]).withSpring, SPRING_CONFIG };
  H.__closure = obj3;
  H.__workletHash = 5027466437777;
  H.__initData = __initData2;
  const animatedStyle1 = tmp6Result6.useAnimatedStyle(H);
  const obj4 = { style: null, children: null };
  if (isStage) {
    const items2 = [tmp3.stageAvatarStack, style];
    obj4.style = items2;
    const obj5 = { style: items3, children: mapped };
    items3 = [tmp3.avatars, animatedStyle1];
    const items4 = [sharedValue(isTyping(tmp7[9]).View, obj5), ];
    const obj6 = { color: "text-default", variant: "text-xs/semibold", children: tmp6Result7.humanizeValue(userCount, stateFromStores) };
    const Text2 = tmp6(tmp7[13]).Text;
    tmp6Result7 = tmp6(tmp7[14]);
    items4[1] = sharedValue(Text2, obj6);
    obj4.children = items4;
    tmp21 = obj4;
  } else {
    const items5 = [tmp3.avatarStack, style];
    obj4.style = items5;
    const obj7 = { style: items6, children: items7 };
    items6 = [tmp3.avatarBubbles, animatedStyle1];
    const obj8 = { style: tmp3.avatars, children: mapped };
    View = isTyping(tmp7[9]).View;
    items7 = [sharedValue(num3, obj8), ];
    let tmp19Result = null;
    const tmp18 = isTyping;
    if (diff > 0) {
      const obj9 = { style: tmp3.userCounter, children: substr(Text, obj10) };
      obj10 = { color: "text-default", variant: "text-xxs/semibold", allowFontScaling: false, children: items8 };
      Text = tmp6(tmp7[13]).Text;
      items8 = ["+"];
      const tmp6Result8 = tmp6(tmp7[14]);
      items8[1] = tmp6Result8.humanizeValue(diff, stateFromStores);
      tmp19Result = tmp19(tmp17, obj9);
    }
    items7[1] = tmp19Result;
    const items9 = [tmp16(View, obj7), ];
    if (!tmp19Result2) {
      tmp19Result2 = isTyping;
    }
    if (tmp19Result2) {
      const obj11 = { style: items10, children: sharedValue(tmp6(tmp7[15]).TypingIndicator, obj12) };
      items10 = [tmp3.ellipsisWrapper, animatedStyle];
      const View2 = tmp18(tmp7[9]).View;
      obj12 = { style: tmp3.ellipsisBorder };
      tmp19Result2 = tmp19(View2, obj11);
    }
    items9[1] = tmp19Result2;
    obj4.children = items9;
    tmp21 = obj4;
  }
  return substr(num3, tmp21);
};
