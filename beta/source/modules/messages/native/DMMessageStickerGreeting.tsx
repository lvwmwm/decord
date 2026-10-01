// Module ID: 11745
// Function ID: 11746
// Name: DMMessageStickerGreeting
// Dependencies: [5, 32, 19, 17, 5814, 5056, 1372, 21, 4836, 576, 4652, 4531, 4683, 4528, 11746, 11747, 6876, 1115, 504, 1090, 4678, 11748, 9849, 4566, 4837, 1177, 9848, 5293, 5435, 9636, 4832, 5281, 2]
// Exports: default

// Module 11745 (DMMessageStickerGreeting)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4652 */;
import timing from "timing" /* 4837 */;
import StickersActionCreators from "StickersActionCreators" /* 9849 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import StickersStore from "StickersStore" /* 5814 */;
import MessageStore from "MessageStore" /* 5056 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2, dependencyMap;

let c10;
let closure_12;
let unpackModuleId;
let react = react_mod;
let View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((arg0) => {
  let BACKGROUND_BASE_LOWER = arg0;
  if (arg0 == null) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  const obj = { container: { backgroundColor: BACKGROUND_BASE_LOWER, alignItems: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8 }, stickerContainer: { paddingBottom: 16 }, toastContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", gap: 8, height: 48, paddingHorizontal: 16, borderRadius: nativeDefault.radii.xxl }, toastContent: { lineHeight: 20 }, gradient: { position: "absolute", right: 0, left: 0, top: 0, height: 30 } };
  ({ flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", gap: 8, height: 48, paddingHorizontal: 16, borderRadius: nativeDefault.radii.xxl });
  return obj;
});
let c14 = "749054660769218631";
const END = client_themes_ClientThemesUtils.GradientPercentage.END;
const __initData = { code: "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}" };
const result = size.fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default function DMMessageStickerGreeting(channel) {
  let gradient;
  let intl3;
  let items10;
  let items11;
  let items9;
  let obj13;
  let tmp20;
  let tmp21;
  let tmp28Result;
  channel = channel.channel;
  const hasInputText = channel.hasInputText;
  let showConvoStarterInDM;
  react = undefined;
  let tmp = channel;
  let obj = channel(4652);
  const tmp3 = END;
  const tmp4 = closure_13(obj.useGradientValue(END));
  dependencyMap = tmp4;
  let obj2 = channel(504);
  const items = [MessageStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const messages = MessageStore.getMessages(channel.id);
    return messages.filter((type) => type.type !== channel(gradient[19]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length > 0;
  });
  let obj3 = channel(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => UserStore.getUser(channel.getRecipientId()));
  let obj4 = hasInputText(4678);
  let name = obj4.useName(stateFromStores1);
  if (name == null) {
    let intl = tmp(1115).intl;
    name = intl.string(tmp(1115).t.y1Wu2f);
  }
  const intl2 = tmp(1115).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t.m0zYbV, { username: name });
  const tmpResult = tmp(11748);
  showConvoStarterInDM = tmpResult.useShowConvoStarterInDM(channel);
  const items2 = [StickersStore];
  const items3 = [showConvoStarterInDM];
  const tmpResult7 = tmp(504);
  const stateFromStores2 = tmpResult7.useStateFromStores(items2, () => {
    let stickerById = null;
    if (showConvoStarterInDM) {
      stickerById = StickersStore.getStickerById(c14);
    }
    return stickerById;
  }, items3);
  const items4 = [showConvoStarterInDM];
  const effect = react.useEffect(() => {
    const tmp = showConvoStarterInDM;
    if (tmp) {
      const obj = StickersActionCreators;
      const stickerPack = obj.fetchStickerPack("847199849233514549", true);
    }
  }, items4);
  const tmp13 = showConvoStarterInDM(react.useState(null), 2);
  const first = tmp13[0];
  dependencyMap = tmp13[1];
  const tmp15 = showConvoStarterInDM(react.useState(false), 2);
  const first1 = tmp15[0];
  let closure_4 = tmp15[1];
  const items5 = [channel.id];
  const effect1 = react.useEffect(() => {
    closure_2(null);
  }, items5);
  const items6 = [first1, first, channel.id];
  const callback = react.useCallback(stateFromStores(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let obj7;
    let tmp;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let showErrorToast;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            channel = tmp4;
            showErrorToast = function showErrorToast(intl) {
              if (closure_1_1 !== intl) {
                closure_1_2(intl);
              }
              const obj = first(closure_2[13]);
              const obj2 = { key: "HANDLE_WAVE_PRESS_TOAST", content: intl, icon: first(closure_2[14]) };
              obj.open(obj2);
            };
            const tmp35 = first1;
            if (!tmp35) {
              v1(true);
              if (null !== first) {
                v1(false);
                showErrorToast(tmp24);
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                c3 = 1;
                const obj4 = { channelId: channel.id, source: "In-channel greet" };
                const obj5 = channel(closure_2[15]);
                obj5.trackWaveCtaClicked(obj4);
                c4 = 2;
                c5 = 1;
                const obj6 = { value: obj7.sendGreetMessage(channel.id, closure_1_14), done: false };
                obj7 = tmp(closure_2[16]);
                return obj6;
              }
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            tmp = closure_2;
            const ok = tmp.ok || 429 !== tmp.status;
            if (!ok) {
              const intl = channel(closure_2[17]).intl;
              showErrorToast(intl.string(channel(closure_2[17]).t.Whhv4w));
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          closure_129_4(false);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp28) {
        closure_2 = tmp28;
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else {
          c4 = 1;
        }
      }
    }
  }), items6);
  [tmp20, tmp21] = showConvoStarterInDM(react.useState(false), 2);
  let c0 = tmp21;
  const items7 = [tmp21];
  const tmp19 = showConvoStarterInDM(react.useState(false), 2);
  react = tmp20;
  const callback1 = react.useCallback(() => {
    _undefined(true);
  }, items7);
  const fn = function w() {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let withDelay;
    let withDelay2;
    const height = gradient.gradient.height;
    let num = 0;
    if (c5 && !hasInputText) {
      let num2 = 180;
      if (stateFromStores) {
        num2 = 72;
      }
      num = num2 - 1 + height;
    }
    let num4 = 0;
    if (c5 && !hasInputText) {
      num4 = -height;
    }
    const obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: withDelay(300, obj2.withTiming(num4, obj3)), height: withDelay2(300, obj4.withTiming(num, obj5)) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = timing;
    obj3 = { easing: native.STANDARD_EASING, duration: 250 };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj4 = timing;
    obj5 = { easing: native.STANDARD_EASING, duration: 250 };
    return obj;
  };
  const tmpResult8 = tmp(4566);
  let obj5 = { styles: tmp4, isRendered: tmp20, hasInputText, hasMessages: stateFromStores, HEIGHT_COMPACT: 72, HEIGHT_FULL: 180, withDelay: tmp(4566).withDelay, withTiming: tmp(4837).withTiming, STANDARD_EASING: tmp(1177).STANDARD_EASING };
  fn.__closure = obj5;
  fn.__workletHash = 6327401707106;
  fn.__initData = __initData;
  const animatedStyle = tmpResult8.useAnimatedStyle(fn);
  const tmpResult9 = tmp(4652);
  let BACKGROUND_BASE_LOWER = tmpResult9.useGradientValue(tmp3);
  const useToken = tmp(4531).useToken;
  tmp(4531);
  if (BACKGROUND_BASE_LOWER == null) {
    BACKGROUND_BASE_LOWER = tmp7(576).colors.BACKGROUND_BASE_LOWER;
  }
  const token = useToken(BACKGROUND_BASE_LOWER);
  const items8 = [, ];
  const tmpResult11 = tmp(4683);
  items8[0] = tmpResult11.hexWithOpacity(token, 0);
  items8[1] = token;
  const tmpResult12 = tmp(9848);
  const shouldAnimateSticker = tmpResult12.useShouldAnimateSticker(false);
  let tmp28Result2 = null;
  if (showConvoStarterInDM) {
    const tmp28 = closure_11;
    let obj6 = { style: animatedStyle, onLayout: callback1, children: items9 };
    View = tmp7(4566).View;
    let obj7 = { style: tmp4.gradient, colors: items8 };
    items9 = [closure_10(tmp7(5293), obj7), ];
    const obj8 = { style: tmp4.container, children: tmp28Result };
    if (stateFromStores) {
      const obj9 = { style: tmp4.toastContainer, accessibilityRole: "button", accessibilityLabel: intl3.string(tmp(1115).t.pJObYI), onPress: callback, children: items10 };
      const PressableOpacity = tmp(5435).PressableOpacity;
      intl3 = tmp(1115).intl;
      let tmp29Result = null;
      if (null != stateFromStores2) {
        const obj10 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
        tmp29Result = tmp29(tmp7(9636), obj10);
      }
      items10 = [tmp29Result, ];
      const obj11 = { style: tmp4.toastContent, variant: "text-md/bold", children: formatToPlainStringResult };
      items10[1] = closure_10(tmp(4832).Text, obj11);
      tmp28Result = tmp28(PressableOpacity, obj9);
    } else {
      let tmp29Result2 = null;
      const tmp31 = closure_12;
      if (null != stateFromStores2) {
        const obj12 = { style: tmp4.stickerContainer, children: closure_10(hasInputText(9636), obj13) };
        obj13 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
        tmp29Result2 = tmp29(tmp30, obj12);
      }
      const obj14 = { children: items11 };
      items11 = [tmp29Result2, ];
      const obj15 = { text: formatToPlainStringResult, onPress: callback, shrink: true };
      items11[1] = closure_10(tmp(5281).Button, obj15);
      tmp28Result = tmp28(tmp31, obj14);
    }
    items9[1] = closure_10(View, obj8);
    tmp28Result2 = tmp28(View, obj6);
  }
  return tmp28Result2;
};
