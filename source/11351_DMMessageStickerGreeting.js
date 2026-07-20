// Module ID: 11351
// Function ID: 88287
// Name: DMMessageStickerGreeting
// Dependencies: []
// Exports: default

// Module 11351 (DMMessageStickerGreeting)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_13 = arg1(dependencyMap[8]).createStyles((arg0) => {
  let BACKGROUND_BASE_LOWER = arg0;
  let obj = {};
  obj = { left: -112486972655879500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, body: 0.00000000000000000000000000000000000000000000000000000000000004667253313593581, duration: 0.0000000000000000000000000000000000000000000000000003550785784420934, dampingRatio: "isArray", mass: "key" };
  if (null == arg0) {
    BACKGROUND_BASE_LOWER = importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER;
  }
  obj.backgroundColor = BACKGROUND_BASE_LOWER;
  obj.container = obj;
  obj.stickerContainer = { paddingBottom: 16 };
  obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[9]).radii.xxl };
  obj.toastContainer = obj;
  obj.toastContent = { lineHeight: 20 };
  obj.gradient = {};
  return obj;
});
const END = arg1(dependencyMap[10]).GradientPercentage.END;
let closure_15 = { code: "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}" };
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default function DMMessageStickerGreeting(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const hasInputText = channel.hasInputText;
  const importDefault = hasInputText;
  let closure_4;
  let React;
  let obj = arg1(dependencyMap[10]);
  let str = callback2(obj.useGradientValue(END));
  const dependencyMap = str;
  let obj1 = arg1(dependencyMap[18]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const messages = messages.getMessages(channel.id);
    return messages.filter((type) => type.type !== callback(closure_2[19]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length > 0;
  });
  let closure_3 = stateFromStores;
  let obj2 = arg1(dependencyMap[18]);
  const items1 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => user.getUser(channel.getRecipientId()));
  let obj3 = importDefault(dependencyMap[20]);
  let name = obj3.useName(stateFromStores1);
  let Text = null;
  if (null == name) {
    const intl = arg1(dependencyMap[17]).intl;
    name = intl.string(arg1(dependencyMap[17]).t.y1Wu2f);
  }
  const intl2 = arg1(dependencyMap[17]).intl;
  obj = { username: name };
  const formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[17]).t.m0zYbV, obj);
  let obj5 = arg1(dependencyMap[21]);
  const showConvoStarterInDM = obj5.useShowConvoStarterInDM(channel);
  closure_4 = showConvoStarterInDM;
  let obj6 = arg1(dependencyMap[18]);
  const items2 = [closure_7];
  const items3 = [showConvoStarterInDM];
  const stateFromStores2 = obj6.useStateFromStores(items2, () => {
    let stickerById = null;
    if (showConvoStarterInDM) {
      stickerById = stickerById.getStickerById("749054660769218631");
    }
    return stickerById;
  }, items3);
  const items4 = [showConvoStarterInDM];
  const effect = React.useEffect(() => {
    if (showConvoStarterInDM) {
      const stickerPack = channel(str[22]).fetchStickerPack("847199849233514549", true);
      const obj = channel(str[22]);
    }
  }, items4);
  let items7 = function useHandleWavePress(channel) {
    const tmp2 = showConvoStarterInDM(isRendered.useState(null), 2);
    const first = tmp2[0];
    const hasInputText = first;
    let closure_2 = tmp2[1];
    const tmp4 = showConvoStarterInDM(isRendered.useState(false), 2);
    const first1 = tmp4[0];
    const stateFromStores = first1;
    const showConvoStarterInDM = tmp4[1];
    const items = [channel.id];
    const effect = isRendered.useEffect(() => {
      callback(null);
    }, items);
    // CreateGeneratorClosureLongIndex (0x67)
    const items1 = [first1, first, channel.id];
    return isRendered.useCallback(stateFromStores(tmp), items1);
  }(channel);
  const tmp13 = function useIsRendered() {
    const tmp = showConvoStarterInDM(isRendered.useState(false), 2);
    const channel = tmp2;
    const items = [tmp[1]];
    return {
      isRendered: tmp[0],
      setIsRendered: isRendered.useCallback(() => {
        tmp2(true);
      }, items)
    };
  }();
  const isRendered = tmp13.isRendered;
  React = isRendered;
  let obj7 = arg1(dependencyMap[23]);
  class O {
    constructor() {
      generateAnimationConfig = function generateAnimationConfig(value) {
        let obj = callback(closure_2[23]);
        obj = { easing: callback(closure_2[25]).STANDARD_EASING, duration: 250 };
        return obj.withDelay(300, callback(closure_2[24]).withTiming(value, obj));
      };
      height = closure_2.gradient.height;
      tmp = isRendered;
      if (isRendered) {
        tmp2 = hasInputText;
        tmp = !hasInputText;
      }
      num = 0;
      if (tmp) {
        tmp3 = useStateFromStores;
        num2 = 180;
        if (useStateFromStores) {
          num2 = 72;
        }
        num3 = 1;
        num = num2 - 1 + height;
      }
      obj = {};
      num4 = 0;
      if (tmp) {
        num4 = -height;
      }
      obj.marginTop = generateAnimationConfig(num4);
      obj.height = generateAnimationConfig(num);
      return obj;
    }
  }
  obj = { styles: str, isRendered, hasInputText, hasMessages: stateFromStores, HEIGHT_COMPACT: 72, HEIGHT_FULL: 180, withDelay: arg1(dependencyMap[23]).withDelay, withTiming: arg1(dependencyMap[24]).withTiming, STANDARD_EASING: arg1(dependencyMap[25]).STANDARD_EASING };
  O.__closure = obj;
  O.__workletHash = 6327401707106;
  O.__initData = closure_15;
  const animatedStyle = obj7.useAnimatedStyle(O);
  let obj9 = arg1(dependencyMap[10]);
  let BACKGROUND_BASE_LOWER = obj9.useGradientValue(END);
  let obj10 = arg1(dependencyMap[11]);
  if (Text == BACKGROUND_BASE_LOWER) {
    BACKGROUND_BASE_LOWER = importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER;
  }
  const token = obj10.useToken(BACKGROUND_BASE_LOWER);
  const items5 = [arg1(dependencyMap[12]).hexWithOpacity(token, 0), token];
  const obj12 = arg1(dependencyMap[12]);
  const tmp7 = arg1;
  const tmp8 = dependencyMap;
  const shouldAnimateSticker = arg1(dependencyMap[26]).useShouldAnimateSticker(false);
  if (!showConvoStarterInDM) {
    return null;
  } else {
    obj1 = { style: animatedStyle, onLayout: tmp13.setIsRendered };
    obj2 = { style: str.gradient, colors: items5 };
    const items6 = [callback(importDefault(dependencyMap[27]), obj2), ];
    obj3 = { style: str.container };
    if (stateFromStores) {
      const obj4 = { style: str.toastContainer, accessibilityRole: "button" };
      const intl3 = arg1(dependencyMap[17]).intl;
      obj4.accessibilityLabel = intl3.string(arg1(dependencyMap[17]).t.pJObYI);
      obj4.onPress = items7;
      let tmp37 = null;
      if (Text != stateFromStores2) {
        obj5 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
        tmp37 = callback(importDefault(dependencyMap[29]), obj5);
      }
      items7 = [tmp37, ];
      Text = arg1(dependencyMap[30]).Text;
      obj6 = { style: str.toastContent };
      str = "text-md/bold";
      obj6.variant = "text-md/bold";
      obj6.children = formatToPlainStringResult;
      items7[1] = callback(Text, obj6);
      obj4.children = items7;
      let tmp24Result = tmp24(arg1(dependencyMap[28]).PressableOpacity, obj4);
    } else {
      obj7 = {};
      let tmp26 = null;
      if (Text != stateFromStores2) {
        const obj8 = { style: `text-md/bold`.stickerContainer };
        obj9 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
        obj8.children = callback(importDefault(dependencyMap[29]), obj9);
        tmp26 = callback(View, obj8);
      }
      const items8 = [tmp26, ];
      obj10 = { text: formatToPlainStringResult, onPress: items7, shrink: true };
      items8[1] = callback(arg1(dependencyMap[31]).Button, obj10);
      obj7.children = items8;
      tmp24Result = tmp24(closure_12, obj7);
      const tmp25 = closure_12;
    }
    obj3.children = tmp24Result;
    obj3 = callback(View, obj3);
    items6[1] = obj3;
    obj1.children = items6;
    closure_11(importDefault(dependencyMap[23]).View, obj1);
    const tmp19 = closure_11;
    const tmp22 = callback;
    const tmp23 = View;
  }
};
