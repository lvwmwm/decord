// Module ID: 14811
// Function ID: 111654
// Name: HappeningNowAvatarStack
// Dependencies: []
// Exports: HappeningNowAvatarStack

// Module 14811 (HappeningNowAvatarStack)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const CHANNEL_SPRING_CONFIG = arg1(dependencyMap[4]).CHANNEL_SPRING_CONFIG;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = { overflow: "<string:738197504>", position: "<string:16777216>", top: "<string:1368613201>" };
const tmp2 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles((arg0, marginLeft) => {
  let obj = { avatarStack: { flexDirection: "row" } };
  obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
  obj.stageAvatarStack = obj;
  obj.avatarBubbles = {};
  obj.avatars = {};
  obj.shiftedAvatar = { marginLeft: -marginLeft };
  obj = { stroke: 671678465, strokeWidth: 812843010, style: 805306368, gemWidth: 33554432, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG, marginLeft: -marginLeft, height: marginLeft(dependencyMap[8]).AVATAR_SIZE_MAP[arg0], minWidth: marginLeft(dependencyMap[8]).AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 };
  obj.userCounter = obj;
  obj.ellipsisWrapper = { marginLeft: -4 - marginLeft };
  obj.ellipsisBorder = { borderColor: importDefault(dependencyMap[7]).colors.CARD_SECONDARY_BG };
  return obj;
});
let closure_12 = { code: "function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}" };
let closure_13 = { code: "function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}" };
let closure_14 = { code: "function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}" };
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx");

export const HappeningNowAvatarStack = function HappeningNowAvatarStack(userLimit) {
  let isStage;
  let isTyping;
  let userCount;
  let users;
  ({ users, guildId: closure_0, isTyping } = userLimit);
  if (isTyping === undefined) {
    isTyping = false;
  }
  const importDefault = isTyping;
  let num = userLimit.userLimit;
  if (num === undefined) {
    num = 3;
  }
  ({ userCount, isStage } = userLimit);
  const dependencyMap = isStage;
  let XSMALL_20 = userLimit.avatarSize;
  if (XSMALL_20 === undefined) {
    XSMALL_20 = arg1(dependencyMap[8]).AvatarSizes.XSMALL_20;
  }
  const callback = XSMALL_20;
  let num3 = userLimit.avatarBorderWidth;
  if (num3 === undefined) {
    num3 = 2;
  }
  const React = num3;
  let num4 = userLimit.avatarOverlap;
  if (num4 === undefined) {
    num4 = 4;
  }
  const View = num4;
  const style = userLimit.style;
  let closure_6;
  let closure_7;
  let sharedValue;
  let substr;
  let closure_10;
  let callback2;
  const tmp3 = callback2(XSMALL_20, num4);
  closure_6 = tmp3;
  const tmp4 = callback(React.useState(() => isTyping), 2);
  let first = tmp4[0];
  closure_7 = tmp4[1];
  let obj = arg1(dependencyMap[9]);
  let num5 = 0;
  if (isTyping) {
    num5 = 1;
  }
  sharedValue = obj.useSharedValue(num5);
  let obj1 = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => tmp3.locale);
  let obj2 = arg1(dependencyMap[9]);
  class V {
    constructor() {
      obj = {};
      obj2 = guildId(isStage[9]);
      obj.opacity = obj2.interpolate(closure_8.get(), [null, null], [null, null]);
      obj3 = guildId(isStage[9]);
      obj.width = obj3.interpolate(closure_8.get(), [null, null], [null, null]);
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[9]).interpolate, typingValue: sharedValue, ELLIPSIS_WIDTH: 28 };
  V.__closure = obj;
  V.__workletHash = 14140918847743;
  V.__initData = closure_12;
  const items1 = [isTyping, sharedValue];
  const animatedStyle = obj2.useAnimatedStyle(V);
  const effect = React.useEffect(() => {
    let obj = callback(isStage[11]);
    let num = 0;
    if (isTyping) {
      num = 1;
    }
    const fn = function t(arg0) {
      if (arg0) {
        callback(closure_2[9]).runOnJS(closure_7)(closure_1);
        const obj = callback(closure_2[9]);
      }
    };
    obj = { runOnJS: callback(isStage[9]).runOnJS, setRenderComponents: closure_7, isTyping };
    fn.__closure = obj;
    fn.__workletHash = 2498652829757;
    fn.__initData = closure_13;
    const result = sharedValue.set(obj.withSpring(num, closure_7, "respect-motion-settings", fn));
  }, items1);
  substr = users.slice(0, num);
  if (null == userCount) {
    userCount = users.length;
  }
  const diff = userCount - substr.length;
  closure_10 = diff;
  const mapped = substr.map((id) => {
    const diff = substr.length - 1;
    let obj = { user: id, guildId: callback, size: XSMALL_20 };
    const tmp3 = sharedValue(callback(isStage[8]).Avatar, obj);
    obj = {};
    let shiftedAvatar;
    if (0 !== arg1) {
      shiftedAvatar = tmp3.shiftedAvatar;
    }
    obj.style = shiftedAvatar;
    if (arg1 !== diff) {
      obj = {};
      const obj1 = { shape: callback(isStage[12]).CutoutShape.Circle, x: callback(isStage[8]).AVATAR_SIZE_MAP[closure_3] - num4 - num3, y: -num3, size: callback(isStage[8]).AVATAR_SIZE_MAP[closure_3] + 2 * num3 };
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
  callback2 = mapped;
  let obj4 = arg1(dependencyMap[9]);
  class H {
    constructor() {
      num = 0;
      if (!isStage) {
        tmp = closure_10;
        num = 0;
        if (closure_10 > 0) {
          num = 1;
        }
      }
      sum = closure_11.length + num;
      num2 = 0;
      if (sum > 0) {
        tmp3 = guildId;
        tmp4 = isStage;
        num3 = 8;
        tmp5 = XSMALL_20;
        tmp6 = closure_5;
        num4 = 1;
        num2 = sum * guildId(isStage[8]).AVATAR_SIZE_MAP[closure_3] - (sum - 1) * closure_5;
      }
      obj = {};
      obj2 = guildId(isStage[11]);
      obj.width = obj2.withSpring(num2, closure_10);
      num5 = 4;
      if (0 === sum) {
        num5 = 0;
      }
      obj.marginRight = num5;
      return obj;
    }
  }
  obj = { isStage, extraUsers: diff, avatars: mapped, AVATAR_SIZE_MAP: arg1(dependencyMap[8]).AVATAR_SIZE_MAP, avatarSize: XSMALL_20, avatarOverlap: num4, withSpring: arg1(dependencyMap[11]).withSpring, SPRING_CONFIG: closure_10 };
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
    const items4 = [sharedValue(importDefault(dependencyMap[9]).View, obj2), ];
    const obj3 = { "Bool(false)": "Array", "Bool(false)": "isArray", children: arg1(dependencyMap[14]).humanizeValue(userCount, stateFromStores) };
    items4[1] = sharedValue(arg1(dependencyMap[13]).Text, obj3);
    obj1.children = items4;
    let tmp25 = obj1;
    const obj14 = arg1(dependencyMap[14]);
  } else {
    const items5 = [tmp3.avatarStack, style];
    obj1.style = items5;
    obj4 = {};
    const items6 = [tmp3.avatarBubbles, animatedStyle1];
    obj4.style = items6;
    const obj5 = { style: tmp3.avatars, children: mapped };
    const items7 = [sharedValue(View, obj5), ];
    let tmp20 = null;
    if (diff > 0) {
      const obj6 = { style: tmp3.userCounter };
      const obj7 = {};
      const items8 = [true, arg1(dependencyMap[14]).humanizeValue(diff, stateFromStores)];
      obj7.children = items8;
      obj6.children = substr(arg1(dependencyMap[13]).Text, obj7);
      tmp20 = sharedValue(View, obj6);
      const obj17 = arg1(dependencyMap[14]);
    }
    items7[1] = tmp20;
    obj4.children = items7;
    const items9 = [substr(importDefault(dependencyMap[9]).View, obj4), ];
    if (!first) {
      first = isTyping;
    }
    if (first) {
      const obj8 = {};
      const items10 = [tmp3.ellipsisWrapper, animatedStyle];
      obj8.style = items10;
      const obj9 = { style: tmp3.ellipsisBorder };
      obj8.children = sharedValue(arg1(dependencyMap[15]).TypingIndicator, obj9);
      first = sharedValue(importDefault(dependencyMap[9]).View, obj8);
    }
    items9[1] = first;
    obj1.children = items9;
    tmp25 = obj1;
    const tmp15 = substr;
  }
  return substr(View, tmp25);
};
