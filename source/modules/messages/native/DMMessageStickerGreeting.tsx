// Module ID: 11397
// Function ID: 88625
// Name: DMMessageStickerGreeting
// Dependencies: [5, 57, 31, 27, 5035, 4349, 1849, 33, 4130, 689, 3941, 3834, 3974, 3831, 11398, 11399, 6691, 1212, 566, 663, 3969, 11400, 9637, 3991, 4131, 1273, 9636, 4554, 4660, 9651, 4126, 4543, 2]
// Exports: default

// Module 11397 (DMMessageStickerGreeting)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import Button from "Button";
import { View } from "LinearGradient";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWER = arg0;
  let obj = {};
  obj = { backgroundColor: null, alignItems: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8 };
  if (null == arg0) {
    BACKGROUND_BASE_LOWER = importDefault(689).colors.BACKGROUND_BASE_LOWER;
  }
  obj.backgroundColor = BACKGROUND_BASE_LOWER;
  obj.container = obj;
  obj.stickerContainer = { paddingBottom: 16 };
  obj = { flexDirection: "row", backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", gap: 8, height: 48, paddingHorizontal: 16, borderRadius: importDefault(689).radii.xxl };
  obj.toastContainer = obj;
  obj.toastContent = { lineHeight: 20 };
  obj.gradient = { position: "absolute", right: 0, left: 0, top: 0, height: 30 };
  return obj;
});
const END = require("colorToHex").GradientPercentage.END;
let closure_15 = { code: "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}" };
const result = require("result").fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default function DMMessageStickerGreeting(channel) {
  channel = channel.channel;
  const hasInputText = channel.hasInputText;
  let showConvoStarterInDM;
  let isRendered;
  let obj = channel(str[10]);
  str = callback2(obj.useGradientValue(END));
  let obj1 = channel(str[18]);
  let items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const messages = outer1_8.getMessages(channel.id);
    return messages.filter((type) => type.type !== channel(str[19]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length > 0;
  });
  let obj2 = channel(str[18]);
  let items1 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_9.getUser(channel.getRecipientId()));
  let obj3 = hasInputText(str[20]);
  let name = obj3.useName(stateFromStores1);
  let Text = null;
  if (null == name) {
    const intl = channel(str[17]).intl;
    name = intl.string(channel(str[17]).t.y1Wu2f);
  }
  const intl2 = channel(str[17]).intl;
  obj = { username: name };
  const formatToPlainStringResult = intl2.formatToPlainString(channel(str[17]).t.m0zYbV, obj);
  let obj5 = channel(str[21]);
  showConvoStarterInDM = obj5.useShowConvoStarterInDM(channel);
  let obj6 = channel(str[18]);
  const items2 = [closure_7];
  const items3 = [showConvoStarterInDM];
  const stateFromStores2 = obj6.useStateFromStores(items2, () => {
    let stickerById = null;
    if (showConvoStarterInDM) {
      stickerById = outer1_7.getStickerById("749054660769218631");
    }
    return stickerById;
  }, items3);
  const items4 = [showConvoStarterInDM];
  let effect = isRendered.useEffect(() => {
    if (showConvoStarterInDM) {
      const stickerPack = channel(str[22]).fetchStickerPack("847199849233514549", true);
      const obj = channel(str[22]);
    }
  }, items4);
  let items7 = (function useHandleWavePress(channel) {
    let closure_0 = channel;
    const tmp2 = showConvoStarterInDM(isRendered.useState(null), 2);
    const first = tmp2[0];
    let closure_2 = tmp2[1];
    const tmp4 = showConvoStarterInDM(isRendered.useState(false), 2);
    const first1 = tmp4[0];
    let _slicedToArray = tmp4[1];
    const items = [channel.id];
    const effect = isRendered.useEffect(() => {
      callback(null);
    }, items);
    // CreateGeneratorClosureLongIndex (0x67)
    const items1 = [first1, first, channel.id];
    return isRendered.useCallback(stateFromStores(tmp), items1);
  })(channel);
  const tmp13 = (function useIsRendered() {
    const tmp = showConvoStarterInDM(isRendered.useState(false), 2);
    const channel = tmp2;
    const items = [tmp[1]];
    return {
      isRendered: tmp[0],
      setIsRendered: isRendered.useCallback(() => {
        tmp2(true);
      }, items)
    };
  })();
  isRendered = tmp13.isRendered;
  let obj7 = channel(str[23]);
  class O {
    constructor() {
      generateAnimationConfig = function generateAnimationConfig(value) {
        let obj = channel(str[23]);
        obj = { easing: channel(str[25]).STANDARD_EASING, duration: 250 };
        return obj.withDelay(300, channel(str[24]).withTiming(value, obj));
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
      obj = { justifyContent: "flex-end", overflow: "hidden" };
      num4 = 0;
      if (tmp) {
        num4 = -height;
      }
      obj.marginTop = generateAnimationConfig(num4);
      obj.height = generateAnimationConfig(num);
      return obj;
    }
  }
  obj = { styles: str, isRendered, hasInputText, hasMessages: stateFromStores, HEIGHT_COMPACT: 72, HEIGHT_FULL: 180, withDelay: channel(str[23]).withDelay, withTiming: channel(str[24]).withTiming, STANDARD_EASING: channel(str[25]).STANDARD_EASING };
  O.__closure = obj;
  O.__workletHash = 6327401707106;
  O.__initData = closure_15;
  const animatedStyle = obj7.useAnimatedStyle(O);
  let obj9 = channel(str[10]);
  let BACKGROUND_BASE_LOWER = obj9.useGradientValue(END);
  let obj10 = channel(str[11]);
  if (Text == BACKGROUND_BASE_LOWER) {
    BACKGROUND_BASE_LOWER = hasInputText(str[9]).colors.BACKGROUND_BASE_LOWER;
  }
  const token = obj10.useToken(BACKGROUND_BASE_LOWER);
  const items5 = [channel(str[12]).hexWithOpacity(token, 0), token];
  const obj12 = channel(str[12]);
  const tmp7 = channel;
  const tmp8 = str;
  const shouldAnimateSticker = channel(str[26]).useShouldAnimateSticker(false);
  if (!showConvoStarterInDM) {
    return null;
  } else {
    obj1 = { style: animatedStyle, onLayout: tmp13.setIsRendered };
    obj2 = { style: str.gradient, colors: items5 };
    const items6 = [callback(hasInputText(str[27]), obj2), ];
    obj3 = { style: str.container };
    if (stateFromStores) {
      const obj4 = { style: str.toastContainer, accessibilityRole: "button" };
      const intl3 = channel(str[17]).intl;
      obj4.accessibilityLabel = intl3.string(channel(str[17]).t.pJObYI);
      obj4.onPress = items7;
      let tmp37 = null;
      if (Text != stateFromStores2) {
        obj5 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
        tmp37 = callback(hasInputText(str[29]), obj5);
      }
      items7 = [tmp37, ];
      Text = channel(str[30]).Text;
      obj6 = { style: str.toastContent };
      str = "text-md/bold";
      obj6.variant = "text-md/bold";
      obj6.children = formatToPlainStringResult;
      items7[1] = callback(Text, obj6);
      obj4.children = items7;
      let tmp24Result = tmp24(channel(str[28]).PressableOpacity, obj4);
    } else {
      obj7 = {};
      let tmp26 = null;
      if (Text != stateFromStores2) {
        const obj8 = { style: `text-md/bold`.stickerContainer };
        obj9 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
        obj8.children = callback(hasInputText(str[29]), obj9);
        tmp26 = callback(View, obj8);
      }
      const items8 = [tmp26, ];
      obj10 = { text: formatToPlainStringResult, onPress: items7, shrink: true };
      items8[1] = callback(channel(str[31]).Button, obj10);
      obj7.children = items8;
      tmp24Result = tmp24(closure_12, obj7);
      const tmp25 = closure_12;
    }
    obj3.children = tmp24Result;
    obj3 = callback(View, obj3);
    items6[1] = obj3;
    obj1.children = items6;
    closure_11(hasInputText(str[23]).View, obj1);
    const tmp19 = closure_11;
    const tmp22 = callback;
    const tmp23 = View;
  }
};
