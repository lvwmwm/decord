// Module ID: 14670
// Function ID: 14671
// Name: DMMessageStickerGreeting
// Dependencies: [5, 32, 19, 17, 7010, 6372, 1388, 21, 5306, 575, 5486, 5902, 5303, 6015, 14671, 8660, 1113, 504, 1088, 5372, 14672, 11358, 1655, 5548, 1187, 11357, 5893, 7428, 11093, 5929, 5936, 2]
// Exports: default

// Module 14670 (DMMessageStickerGreeting)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 5486 */;
import StickersActionCreators from "StickersActionCreators" /* 11358 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StickersStore from "StickersStore" /* 7010 */;
import MessageStore from "MessageStore" /* 6372 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let unpackModuleId;
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
let closure_16 = { code: "(function DMMessageStickerGreetingTsx1(){let[styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING]=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;function generateAnimationConfig(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));}return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};})" };
const result = size.fileFinishedImporting("modules/messages/native/DMMessageStickerGreeting.tsx");

export default function DMMessageStickerGreeting(channel) {
  let closure_2;
  let closure_4;
  let first;
  let first1;
  let first2;
  let intl3;
  let items11;
  let items12;
  let items13;
  let obj12;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp39Result;
  channel = channel.channel;
  let showConvoStarterInDM;
  let tmp = channel;
  const hasInputText = channel.hasInputText;
  let obj = channel(5486);
  const tmp3 = END;
  const tmp4 = closure_13(obj.useGradientValue(END));
  let obj2 = channel(504);
  const items = [MessageStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const messages = MessageStore.getMessages(channel.id);
    return messages.filter((type) => type.type !== channel(closure_1_2[18]).MessageTypes.FRIEND_REQUEST_ACCEPTED).length > 0;
  });
  let obj3 = channel(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => UserStore.getUser(channel.getRecipientId()));
  let obj4 = showConvoStarterInDM(5372);
  let name = obj4.useName(stateFromStores1);
  if (name == null) {
    let intl = tmp(1113).intl;
    name = intl.string(tmp(1113).t.y1Wu2f);
  }
  const intl2 = tmp(1113).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t.m0zYbV, { username: name });
  const tmpResult = tmp(14672);
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
  first = undefined;
  closure_2 = undefined;
  first1 = undefined;
  closure_4 = undefined;
  [first, closure_2] = react.useState(null);
  [first1, closure_4] = react.useState(false);
  const items5 = [channel.id];
  const effect1 = react.useEffect(() => {
    closure_2(null);
  }, items5);
  const items6 = [first1, first, channel.id];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
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
              const obj2 = { text: intl, variant: "critical" };
              obj.open("HANDLE_WAVE_PRESS_TOAST", obj2);
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
                const obj5 = channel(closure_2[14]);
                obj5.trackWaveCtaClicked(obj4);
                c4 = 2;
                c5 = 1;
                const obj6 = { value: obj7.sendGreetMessage(channel.id, closure_1_14), done: false };
                obj7 = tmp(closure_2[15]);
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
              const intl = channel(closure_2[16]).intl;
              showErrorToast(intl.string(channel(closure_2[16]).t.Whhv4w));
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
  [first2, tmp21] = react.useState(false);
  const _require = tmp21;
  const items7 = [tmp21];
  const callback1 = react.useCallback(() => {
    closure_0(true);
  }, items7);
  const items8 = [closure_16, tmp4, first2, hasInputText, stateFromStores, 72, 180, , , ];
  const useAnimatedStyle = tmp(1655).useAnimatedStyle;
  tmp(1655);
  items8[7] = tmp(1655).withDelay;
  items8[8] = tmp(5548).withTiming;
  items8[9] = tmp(1187).STANDARD_EASING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items8;
  class DMMessageStickerGreetingTsx1 {
    constructor() {
      const height = _undefined.gradient.height;
      let num = 0;
      if (c1 && !c2) {
        num = (c3 ? c4 : c5) - 1 + height;
      }
      let num3 = 0;
      if (c1 && !c2) {
        num3 = -height;
      }
      const obj = { justifyContent: "flex-end", overflow: "hidden", marginTop: _undefined2(300, _undefined3(num3, obj2)), height: _undefined2(300, _undefined3(num, obj3)) };
      return obj;
    }
  }
  const items9 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  DMMessageStickerGreetingTsx1.__closure = items9;
  DMMessageStickerGreetingTsx1.__workletHash = 8414821769915;
  DMMessageStickerGreetingTsx1.__initData = tmp24;
  const animatedStyle = useAnimatedStyle(DMMessageStickerGreetingTsx1);
  const tmpResult9 = tmp(5486);
  let BACKGROUND_BASE_LOWER = tmpResult9.useGradientValue(tmp3);
  const useToken = tmp(5902).useToken;
  tmp(5902);
  if (BACKGROUND_BASE_LOWER == null) {
    BACKGROUND_BASE_LOWER = tmp7(575).colors.BACKGROUND_BASE_LOWER;
  }
  const token = useToken(BACKGROUND_BASE_LOWER);
  const items10 = [, ];
  const tmpResult11 = tmp(5303);
  items10[0] = tmpResult11.hexWithOpacity(token, 0);
  items10[1] = token;
  const tmpResult12 = tmp(11357);
  const shouldAnimateSticker = tmpResult12.useShouldAnimateSticker(false);
  let tmp39Result2 = null;
  if (showConvoStarterInDM) {
    let obj5 = { style: animatedStyle, onLayout: callback1, children: items11 };
    View = tmp7(1655).View;
    let obj6 = { style: tmp4.gradient, colors: items10 };
    items11 = [closure_10(tmp7(5893), obj6), ];
    let obj7 = { style: tmp4.container, children: tmp39Result };
    if (stateFromStores) {
      const obj8 = { style: tmp4.toastContainer, accessibilityRole: "button", accessibilityLabel: intl3.string(tmp(1113).t.pJObYI), onPress: callback, children: items12 };
      const PressableOpacity = tmp(7428).PressableOpacity;
      intl3 = tmp(1113).intl;
      let tmp40Result = null;
      if (null != stateFromStores2) {
        const obj9 = { sticker: stateFromStores2, size: 24, animated: shouldAnimateSticker };
        tmp40Result = tmp40(tmp7(11093), obj9);
      }
      items12 = [tmp40Result, ];
      const obj10 = { style: tmp4.toastContent, variant: "body-md/semibold", children: formatToPlainStringResult };
      items12[1] = closure_10(tmp(5929).Text, obj10);
      tmp39Result = tmp39(PressableOpacity, obj8);
    } else {
      let tmp40Result2 = null;
      const tmp42 = closure_12;
      if (null != stateFromStores2) {
        const obj11 = { style: tmp4.stickerContainer, children: closure_10(showConvoStarterInDM(11093), obj12) };
        obj12 = { sticker: stateFromStores2, size: 100, animated: shouldAnimateSticker };
        tmp40Result2 = tmp40(tmp41, obj11);
      }
      const obj13 = { children: items13 };
      items13 = [tmp40Result2, ];
      const obj14 = { text: formatToPlainStringResult, onPress: callback, shrink: true };
      items13[1] = closure_10(tmp(5936).Button, obj14);
      tmp39Result = tmp39(tmp42, obj13);
    }
    items11[1] = closure_10(View, obj7);
    tmp39Result2 = tmp39(View, obj5);
  }
  return tmp39Result2;
};
