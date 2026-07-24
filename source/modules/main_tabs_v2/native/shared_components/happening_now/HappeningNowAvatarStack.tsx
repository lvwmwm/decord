// Module ID: 14992
// Function ID: 114244
// Name: HappeningNowAvatarStack
// Dependencies: [57, 31, 27, 1921, 11978, 33, 4130, 689, 1273, 3991, 624, 4542, 7961, 4126, 1827, 14993, 2]
// Exports: HappeningNowAvatarStack

// Module 14992 (HappeningNowAvatarStack)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CHANNEL_SPRING_CONFIG } from "n";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { damping: 17, stiffness: 320, mass: 0.5 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0, marginLeft) => {
  let obj = { avatarStack: { flexDirection: "row" } };
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: importDefault(689).colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 };
  obj.stageAvatarStack = obj;
  obj.avatarBubbles = { display: "flex", flexDirection: "row" };
  obj.avatars = { display: "flex", flexDirection: "row" };
  obj.shiftedAvatar = { marginLeft: -marginLeft };
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: require(1273) /* Button */.AVATAR_SIZE_MAP[arg0], minWidth: require(1273) /* Button */.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 };
  obj.userCounter = obj;
  const obj1 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", overflow: "hidden", marginLeft: -4 - marginLeft };
  obj.ellipsisWrapper = obj1;
  obj.ellipsisBorder = { borderColor: importDefault(689).colors.CARD_SECONDARY_BG };
  return obj;
});
let closure_12 = { code: "function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}" };
let closure_13 = { code: "function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}" };
let closure_14 = { code: "function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx");

export const HappeningNowAvatarStack = function HappeningNowAvatarStack(userLimit) {
  let isStage;
  let isTyping;
  let require;
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
    XSMALL_20 = require(isStage[8]).AvatarSizes.XSMALL_20;
  }
  let num3 = userLimit.avatarBorderWidth;
  if (num3 === undefined) {
    num3 = 2;
  }
  let num4 = userLimit.avatarOverlap;
  if (num4 === undefined) {
    num4 = 4;
  }
  const style = userLimit.style;
  let c6;
  let closure_7;
  let sharedValue;
  let substr;
  let c10;
  let mapped;
  let tmp3 = mapped(XSMALL_20, num4);
  c6 = tmp3;
  const tmp4 = XSMALL_20(num3.useState(() => isTyping), 2);
  let first = tmp4[0];
  closure_7 = tmp4[1];
  let obj = require(isStage[9]);
  let num5 = 0;
  if (isTyping) {
    num5 = 1;
  }
  sharedValue = obj.useSharedValue(num5);
  let obj1 = require(isStage[10]);
  let items = [c6];
  const stateFromStores = obj1.useStateFromStores(items, () => _undefined.locale);
  let obj2 = require(isStage[9]);
  class V {
    constructor() {
      obj = {};
      obj2 = guildId(isStage[9]);
      obj.opacity = obj2.interpolate(c8.get(), [0, 1], [0, 1]);
      obj3 = guildId(isStage[9]);
      obj.width = obj3.interpolate(c8.get(), [0, 1], [0, 28]);
      return obj;
    }
  }
  obj = { interpolate: require(isStage[9]).interpolate, typingValue: sharedValue, ELLIPSIS_WIDTH: 28 };
  V.__closure = obj;
  V.__workletHash = 14140918847743;
  V.__initData = closure_12;
  const items1 = [isTyping, sharedValue];
  const animatedStyle = obj2.useAnimatedStyle(V);
  const effect = num3.useEffect(() => {
    let obj = outer1_0(isStage[11]);
    let num = 0;
    if (isTyping) {
      num = 1;
    }
    const fn = function t(arg0) {
      if (arg0) {
        outer2_0(isStage[9]).runOnJS(outer1_7)(outer1_1);
        const obj = outer2_0(isStage[9]);
      }
    };
    obj = { runOnJS: outer1_0(isStage[9]).runOnJS, setRenderComponents: closure_7, isTyping };
    fn.__closure = obj;
    fn.__workletHash = 2498652829757;
    fn.__initData = outer1_13;
    const result = sharedValue.set(obj.withSpring(num, closure_7, "respect-motion-settings", fn));
  }, items1);
  substr = users.slice(0, num);
  if (null == userCount) {
    userCount = users.length;
  }
  let diff = userCount - substr.length;
  c10 = diff;
  mapped = substr.map((id) => {
    const diff = substr.length - 1;
    let obj = { user: id, guildId: closure_0, size: XSMALL_20 };
    const tmp3 = sharedValue(outer1_0(isStage[8]).Avatar, obj);
    obj = {};
    let shiftedAvatar;
    if (0 !== arg1) {
      shiftedAvatar = _undefined.shiftedAvatar;
    }
    obj.style = shiftedAvatar;
    if (arg1 !== diff) {
      obj = {};
      const obj1 = { shape: outer1_0(isStage[12]).CutoutShape.Circle, x: outer1_0(isStage[8]).AVATAR_SIZE_MAP[XSMALL_20] - num4 - num3, y: -num3, size: outer1_0(isStage[8]).AVATAR_SIZE_MAP[XSMALL_20] + 2 * num3 };
      const items = [obj1];
      obj.cutouts = items;
      obj.children = tmp3;
      let tmp8 = sharedValue(isTyping(isStage[12]), obj);
      const tmp13 = isTyping(isStage[12]);
    } else {
      tmp8 = tmp3;
      if (!isStage) {
        tmp8 = tmp3;
      }
    }
    obj.children = tmp8;
    return sharedValue(num4, obj, id.id);
  });
  let obj4 = require(isStage[9]);
  class H {
    constructor() {
      num = 0;
      if (!isStage) {
        tmp = c10;
        num = 0;
        if (c10 > 0) {
          num = 1;
        }
      }
      sum = c11.length + num;
      num2 = 0;
      if (sum > 0) {
        tmp3 = guildId;
        tmp4 = isStage;
        num3 = 8;
        tmp5 = XSMALL_20;
        tmp6 = c5;
        num4 = 1;
        num2 = sum * guildId(isStage[8]).AVATAR_SIZE_MAP[XSMALL_20] - (sum - 1) * c5;
      }
      obj = {};
      obj2 = guildId(isStage[11]);
      obj.width = obj2.withSpring(num2, c10);
      num5 = 4;
      if (0 === sum) {
        num5 = 0;
      }
      obj.marginRight = num5;
      return obj;
    }
  }
  obj = { isStage, extraUsers: diff, avatars: mapped, AVATAR_SIZE_MAP: require(isStage[8]).AVATAR_SIZE_MAP, avatarSize: XSMALL_20, avatarOverlap: num4, withSpring: require(isStage[11]).withSpring, SPRING_CONFIG: c10 };
  H.__closure = obj;
  H.__workletHash = 5027466437777;
  H.__initData = closure_14;
  const animatedStyle1 = obj4.useAnimatedStyle(H);
  obj1 = {};
  if (isStage) {
    const items2 = [tmp3.stageAvatarStack, style];
    obj1.style = items2;
    obj2 = {};
    const items3 = [tmp3.avatars, animatedStyle1];
    obj2.style = items3;
    obj2.children = mapped;
    const items4 = [sharedValue(isTyping(isStage[9]).View, obj2), ];
    const obj3 = { color: "text-default", variant: "text-xs/semibold", children: require(isStage[14]).humanizeValue(userCount, stateFromStores) };
    items4[1] = sharedValue(require(isStage[13]).Text, obj3);
    obj1.children = items4;
    let tmp25 = obj1;
    const obj14 = require(isStage[14]);
  } else {
    const items5 = [tmp3.avatarStack, style];
    obj1.style = items5;
    obj4 = {};
    const items6 = [tmp3.avatarBubbles, animatedStyle1];
    obj4.style = items6;
    const obj5 = { style: tmp3.avatars, children: mapped };
    const items7 = [sharedValue(num4, obj5), ];
    let tmp20 = null;
    if (diff > 0) {
      const obj6 = { style: tmp3.userCounter };
      const obj7 = { color: "text-default", variant: "text-xxs/semibold", allowFontScaling: false };
      const items8 = ["+", require(isStage[14]).humanizeValue(diff, stateFromStores)];
      obj7.children = items8;
      obj6.children = substr(require(isStage[13]).Text, obj7);
      tmp20 = sharedValue(num4, obj6);
      const obj17 = require(isStage[14]);
    }
    items7[1] = tmp20;
    obj4.children = items7;
    const items9 = [substr(isTyping(isStage[9]).View, obj4), ];
    if (!first) {
      first = isTyping;
    }
    if (first) {
      const obj8 = {};
      const items10 = [tmp3.ellipsisWrapper, animatedStyle];
      obj8.style = items10;
      const obj9 = { style: tmp3.ellipsisBorder };
      obj8.children = sharedValue(require(isStage[15]).TypingIndicator, obj9);
      first = sharedValue(isTyping(isStage[9]).View, obj8);
    }
    items9[1] = first;
    obj1.children = items9;
    tmp25 = obj1;
    const tmp15 = substr;
  }
  return substr(num4, tmp25);
};
