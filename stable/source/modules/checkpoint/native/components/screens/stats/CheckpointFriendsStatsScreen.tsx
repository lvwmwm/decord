// Module ID: 13944
// Function ID: 13945
// Name: CheckpointFriendsStatsScreen
// Dependencies: [5, 32, 19, 17, 5171, 1385, 13700, 6231, 21, 575, 5405, 1652, 1357, 5170, 1411, 504, 13945, 13946, 13908, 5226, 6599, 5307, 13910, 1113, 3248, 3216, 5872, 13929, 8747, 13913, 12170, 12270, 1493, 5350, 1641, 5402, 13947, 13702, 5868, 1187, 13698, 10709, 7445, 13629, 5885, 2]
// Exports: default

// Module 13944 (CheckpointFriendsStatsScreen)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import _modDef3216 from "module_3216" /* 3216 */;
import timingPresets from "timingPresets" /* 5405 */;
import FriendsIcon from "FriendsIcon" /* 5872 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7445 */;
import ChatIcon from "ChatIcon" /* 8747 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10709 */;
import MicrophoneIcon from "MicrophoneIcon" /* 12170 */;
import Tracking from "Tracking" /* 13698 */;
import CheckpointTextDefault from "CheckpointText" /* 13910 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13913 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13929 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import UserStore from "UserStore" /* 1385 */;
import CheckpointStore from "CheckpointStore" /* 13700 */;
import CheckpointConstants from "CheckpointConstants" /* 6231 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, dependencyMap;

let Easing;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj3;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
function FriendsHeader(title) {
  let items;
  let items1;
  let items2;
  let stringResult;
  title = title.title;
  const description = title.description;
  const tmp = closure_19();
  const obj3 = { style: tmp.title, children: items };
  items = [, ];
  obj = { style: tmp.header, children: items2 };
  obj2 = { style: tmp.heading, children: items1 };
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items[0] = map1(FriendsIcon.FriendsIcon, obj4);
  const obj5 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2 = CheckpointTextDefault;
  const intl = intl6.intl;
  stringResult = intl.string(_modDef3216.ZQakPR);
  items[1] = map1(tmp2, obj5);
  items1 = [authStore3(metroImportDefault, obj3), ];
  const obj6 = { children: title.toLocaleUpperCase() };
  const tmp3 = CheckpointDisplayTextDefault;
  items1[1] = map1(tmp3, obj6);
  items2 = [authStore3(metroImportDefault, obj2), map1(CheckpointTextDefault, { variant: "heading-lg/medium", children: description })];
  return authStore3(metroImportDefault, obj);
}
function SidekickStats(sidekick) {
  let items;
  let items1;
  let items2;
  sidekick = sidekick.sidekick;
  const tmp = closure_19();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const intl = intl6.intl;
  const stringResult = intl.string(_modDef3216.wWKySP);
  const intl2 = intl6.intl;
  obj = { style: tmp.stats, children: items1 };
  const formatToPlainStringResult = intl2.formatToPlainString(_modDef3216.UZbUtl, { numMinutes: rounded1 });
  obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.stat, children: items };
  items = [, ];
  const obj3 = { size: "md", color: CHECKPOINT_PRIMARY };
  items[0] = map1(ChatIcon.ChatIcon, obj3);
  items[1] = map1(CheckpointStatNumberDefault, { value: rounded });
  items1 = [authStore3(metroImportDefault, obj2), ];
  const obj4 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + formatToPlainStringResult.toLocaleLowerCase(), style: tmp.stat, children: items2 };
  items2 = [, ];
  const obj5 = { size: "md", color: CHECKPOINT_PRIMARY };
  items2[0] = map1(MicrophoneIcon.MicrophoneIcon, obj5);
  items2[1] = map1(CheckpointStatNumberDefault, { value: rounded1 });
  items1[1] = authStore3(metroImportDefault, obj4);
  return authStore3(metroImportDefault, obj);
}
function SidekickMessageInput(user) {
  let View;
  let _undefined;
  let c3;
  let c4;
  let disabled;
  let intl2;
  let intl3;
  let items6;
  let items7;
  let obj12;
  let obj14;
  let obj15;
  let obj7;
  let stringResult;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp3;
  let tmp37;
  let tmp38;
  let tmp5;
  let tmp7;
  let value;
  user = user.user;
  value = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  let ref;
  let closure_7;
  obj = function _handleSend() {
    let id;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp30 = closure_2_7;
              if (tmp30) {
                _undefined(true);
                c3 = 2;
                c1 = 3;
                c4 = 1;
                const obj5 = { value: obj2.sendSidekickMessage(importDefault, id.id), done: false };
                obj2 = tmp(closure_2[37]);
                return obj5;
              }
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_4(false);
            throw closure_2;
          } else {
            if (2 === c1) {
              c3 = 1;
              const presentError = tmp(closure_2[38]).presentError;
              const tmp16 = tmp(closure_2[38]);
              const intl = tmp(closure_2[23]).intl;
              presentError(intl.string(tmp(closure_2[23]).t.fEptJP));
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_4(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_2(undefined);
              closure_128_3(true);
              c3 = 1;
            }
            c3 = 0;
            closure_128_4(false);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp37) {
          closure_2 = tmp37;
          if (0 === c3) {
            c4 = 3;
            throw tmp37;
          } else if (1 === tmp39) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const username = user.username;
  let tmp = closure_19();
  obj = ref;
  [value, tmp3] = ref.useState(undefined);
  dependencyMap = tmp3;
  [tmp5, c3] = _slicedToArray(ref.useState(false), 2);
  const tmp4 = _slicedToArray(ref.useState(false), 2);
  [tmp7, c4] = _slicedToArray(ref.useState(false), 2);
  const tmp6 = _slicedToArray(ref.useState(false), 2);
  ref = ref.useRef(null);
  obj2 = user(1652);
  const sharedValue = obj2.useSharedValue(0);
  const tmp13 = value(12270)();
  let obj3 = user(1357);
  const isIOSResult = obj3.isIOS();
  size = value(1493)({ ignoreKeyboard: true });
  const height = size.height;
  const bound = Math.min(size.width, height);
  let messageInputContainerLarge = bound > user(5350).WINDOW_SIZE_THRESHOLD_LARGE;
  let obj4 = user(1652);
  const sharedValue1 = obj4.useSharedValue(0);
  let items = [closure_22, sharedValue1, , ];
  const useKeyboardHandler = user(1641).useKeyboardHandler;
  items[2] = user(5402).withTiming;
  items[3] = obj;
  let c0;
  let c1;
  let c2;
  [tmp18, tmp19, tmp20, tmp21] = items;
  let obj5 = { onStart: CheckpointFriendsStatsScreenTsx1 };
  class CheckpointFriendsStatsScreenTsx1 {
    constructor(height) {
      const result = _undefined.set(_undefined2(height.height, c2));
    }
  }
  const items1 = [tmp19, tmp20, tmp21];
  CheckpointFriendsStatsScreenTsx1.__closure = items1;
  CheckpointFriendsStatsScreenTsx1.__workletHash = 16087244587333;
  CheckpointFriendsStatsScreenTsx1.__initData = tmp18;
  useKeyboardHandler(obj5, []);
  const items2 = [closure_23, isIOSResult, tmp13, sharedValue1, PX_16, height, sharedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  let c5;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items2;
  const tmp9Result = user(1652);
  class CheckpointFriendsStatsScreenTsx2 {
    constructor() {
      let items;
      const tmp = c0;
      if (tmp) {
        value = _undefined.get();
      } else {
        value = _undefined2.get();
      }
      const sum = value + c3;
      obj = { transform: items };
      items = [{ translateY: -Math.max(0, sum - (c4 - _undefined3.get())) }];
      ({ translateY: -Math.max(0, sum - (c4 - _undefined3.get())) });
      return obj;
    }
  }
  const items3 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  CheckpointFriendsStatsScreenTsx2.__closure = items3;
  CheckpointFriendsStatsScreenTsx2.__workletHash = 4013262097384;
  CheckpointFriendsStatsScreenTsx2.__initData = tmp23;
  const items4 = [sharedValue];
  const animatedStyle = tmp9Result.useAnimatedStyle(CheckpointFriendsStatsScreenTsx2);
  const callback = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1, arg2, arg3) => sharedValue.set(arg1 + arg3));
    }
  }, items4);
  let tmp33 = null != value;
  const tmp32 = value(13947)(user.id);
  if (tmp33) {
    tmp33 = value.length > 0;
  }
  if (tmp33) {
    tmp33 = value.length <= 250;
  }
  if (tmp33) {
    tmp33 = !tmp5;
  }
  if (tmp33) {
    tmp33 = !tmp7;
  }
  closure_7 = tmp33;
  let tmp35Result = null;
  if (tmp32) {
    const obj6 = { ref, onLayout: callback, children: tmp37(View, obj7) };
    tmp37 = closure_14;
    const items5 = [tmp.messageInputContainer, , ];
    View = tmp12(1652).View;
    if (messageInputContainerLarge) {
      messageInputContainerLarge = tmp.messageInputContainerLarge;
    }
    obj7 = { style: items5, children: items6 };
    items5[1] = messageInputContainerLarge;
    items5[2] = animatedStyle;
    const obj8 = { multiline: true, onFocus: callback, onChangeText: tmp3, style: tmp.messageInput, value, maxLength: 250, editable: tmp38, placeholderTextColor: CHECKPOINT_WHITE, placeholder: stringResult, returnKeyType: "done", submitBehavior: "blurAndSubmit" };
    tmp38 = !tmp5;
    const TextInput = tmp9(1187).TextInput;
    if (!tmp5) {
      tmp38 = !tmp7;
    }
    const tmp39 = CHECKPOINT_WHITE;
    let intl = tmp9(1113).intl;
    if (tmp5) {
      stringResult = intl.string(tmp9(1113).t.fjcCk5);
    } else {
      const obj9 = { name: username };
      stringResult = intl.formatToPlainString(tmp9(1113).t["0ZQw/X"], obj9);
    }
    items6 = [tmp35(TextInput, obj8), ];
    const obj10 = { style: tmp.messageInputActions, children: items7 };
    const obj11 = {
      onPress: function handleGift() {
          let items;
          obj = Tracking;
          const result = obj.trackCheckpoint2026GiftCtaClicked(user.id);
          obj2 = { recipientUserId: user.id, analyticsLocations: items };
          const openGiftModal = utils_openGiftModal.openGiftModal;
          items = [, ];
          utils_openGiftModal;
          items[0] = AnalyticsLocationDefault.CHECKPOINT;
          items[1] = AnalyticsLocationDefault.CHECKPOINT_SIDEKICK;
          openGiftModal(obj2);
        },
      accessibilityRole: "button",
      accessibilityLabel: intl2.string(user(1113).t.Ve9Ge6),
      children: closure_13(user(13629).GiftIcon, obj12)
    };
    intl2 = tmp9(1113).intl;
    obj12 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    items7 = [tmp35(sharedValue, obj11), ];
    const obj13 = {
      onPress: function handleSend() {
          return obj(...arguments);
        },
      disabled: !tmp33,
      style: disabled,
      accessibilityRole: "button",
      accessibilityLabel: intl3.string(user(1113).t.oeb1vg),
      accessibilityState: obj14,
      children: closure_13(user(5885).SendMessageIcon, obj15)
    };
    disabled = undefined;
    const tmp41 = sharedValue;
    const tmp42 = CHECKPOINT_PRIMARY;
    if (!tmp33) {
      disabled = tmp.disabled;
    }
    intl3 = tmp9(1113).intl;
    obj14 = { disabled: !tmp33 };
    obj15 = { size: "refresh_sm", color: tmp42 };
    items7[1] = closure_13(tmp41, obj13);
    items6[1] = tmp37(closure_7, obj10);
    tmp35Result = tmp35(tmp36, obj6);
  }
  return tmp35Result;
}
let _slicedToArray = _slicedToArray_mod;
({ Pressable: metroRequire, View: metroImportDefault } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
({ jsx: map1, jsxs: closure_14 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let obj = { duration: timingPresets.timingStandardDuration, easing: Easing.bezier(0.2, 0, 0, 1) };
Easing = _mod1652.Easing;
let closure_17 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
let tmp5;
if (PlatformUtils.isIOS()) {
  let obj2 = { "unifont-17.0.03": obj3 };
  obj3 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  tmp5 = obj2;
}
obj2 = tmp5;
let createStyles = createStyles_mod;
let obj4 = { container: obj5, animation: rect, transition: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" }, header: obj6, heading: obj7, title: obj8, titleText: { flexShrink: 1 }, sidekick: obj9, sidekickDetails: obj10, stats: obj11, stat: obj12, messageInputContainer: obj13, messageInputContainerLarge: { height: 128 }, messageInput: { flex: 1, alignSelf: "stretch", padding: 0, color: CHECKPOINT_PRIMARY, textAlignVertical: "top" }, messageInputActions: obj14, disabled: { opacity: 0.5 } };
obj5 = { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: -nativeDefault.space.PX_24, right: -nativeDefault.space.PX_24 };
obj6 = { gap: nativeDefault.space.PX_12 };
obj7 = { gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj9 = { gap: nativeDefault.space.PX_32 };
obj10 = { gap: nativeDefault.space.PX_24 };
obj11 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 };
obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj13 = { height: 96, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
obj14 = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_12 };
let closure_19 = createStyles(obj4);
let closure_22 = { code: "(function CheckpointFriendsStatsScreenTsx1(e){let[androidKeyboardHeight,withTiming,ANDROID_KEYBOARD_TIMING]=this.__closure;androidKeyboardHeight.set(withTiming(e.height,ANDROID_KEYBOARD_TIMING));})" };
let closure_23 = { code: "(function CheckpointFriendsStatsScreenTsx2(){let[isIOSKeyboard,keyboardHeight,androidKeyboardHeight,MESSAGE_INPUT_KEYBOARD_GAP,windowHeight,containerBottom]=this.__closure;const height=isIOSKeyboard?keyboardHeight.get():androidKeyboardHeight.get();const overlap=height+MESSAGE_INPUT_KEYBOARD_GAP-(windowHeight-containerBottom.get());return{transform:[{translateY:-Math.max(0,overlap)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default function CheckpointFriendsStatsScreen(arg0) {
  let CheckpointFriendsRive;
  let closure_0;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj4;
  let obj5;
  let obj7;
  let onNextStep;
  let onPreviousStep;
  let route;
  let str4;
  let tmp13;
  let tmp14;
  let tmp22Result10;
  let useReducedMotion;
  let userAvatarURL;
  let userAvatarURL1;
  let userAvatarURL2;
  let userAvatarURL3;
  let userAvatarURL4;
  ({ route, onNextStep, onPreviousStep } = arg0);
  _require = undefined;
  let width;
  let height;
  let tmp = closure_19();
  const items = [CheckpointStore];
  obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let users;
    if (stats != null) {
      users = stats.users;
    }
    return users;
  });
  const tmp4 = CheckpointStore;
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  const items1 = [tmp4];
  const tmp2Result = require("get initialized");
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let sidekick;
    if (stats != null) {
      sidekick = stats.sidekick;
    }
    return sidekick;
  });
  const items2 = [UserStore];
  const tmp2Result9 = require("get initialized");
  const stateFromStores2 = tmp2Result9.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [AccessibilityStore];
  const tmp2Result10 = require("get initialized");
  const stateFromStores3 = tmp2Result10.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result11 = require("useFriendsAnimationState");
  const friendsAnimationState = tmp2Result11.useFriendsAnimationState(route, stateFromStores3);
  const tmp2Result12 = require("useSidekickLeave");
  const sidekickLeave = tmp2Result12.useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep);
  const tmp10 = friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.BEST || friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.LEAVE;
  _require = tmp10;
  const tmp2Result13 = require("CheckpointScreen");
  size = tmp2Result13.useCheckpointScreenFrame();
  width = size.width;
  height = size.height;
  const items4 = [tmp10, height, width];
  const memo = react.useMemo(() => {
    let num = 0;
    const result = -height / 2;
    const tmp = height;
    if (closure_0) {
      num = nativeDefault.space.PX_48;
    }
    return { top: result - num, height: width + tmp };
  }, items4);
  [tmp13, tmp14] = stateFromStores;
  _slicedToArray(stateFromStores, 2);
  const tmp2Result14 = require("UserUtils");
  let str = tmp2Result14.useName(tmp13);
  if (str == null) {
    str = "";
  }
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  const tmp2Result15 = require("UserUtils");
  let str2 = tmp2Result15.useName(tmp14);
  if (str2 == null) {
    str2 = "";
  }
  let user;
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  const useName = require("UserUtils").useName;
  require("UserUtils");
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str3 = useName(user);
  if (str3 == null) {
    str3 = "";
  }
  let tmp24Result = route === tmp2(tmp3[20]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[20]).CheckpointRoute.SIDEKICK_LEAVE;
  if (stateFromStores.length < 2) {
    let str5 = "twoFriends";
    if (stateFromStores3) {
      str5 = "twoFriends-reducedMotion";
    }
    str4 = str5;
  } else {
    str4 = "threeFriends";
    if (stateFromStores3) {
      str4 = "threeFriends-reducedMotion";
    }
  }
  obj2 = { style: tmp.container, children: items6 };
  const obj3 = { style: items5, pointerEvents: "none", children: closure_13(CheckpointFriendsRive, obj4) };
  items5 = [tmp.animation, memo];
  obj4 = { referencedAssets: obj2, defaultViewModelInstance: str4, dataBinding: obj5 };
  obj5 = { AnimationState: friendsAnimationState, "Avatar01/img": userAvatarURL, "Avatar02/img": userAvatarURL1, "Avatar03/img": userAvatarURL2, "Avatar04/img": userAvatarURL3, "Avatar05/img": userAvatarURL4, "Avatar01/Username": str3.toLocaleUpperCase(), "Avatar02/Username": toLocaleUpperCaseResult1, "Avatar03/Username": toLocaleUpperCaseResult, "Avatar04/Username": str3.toLocaleUpperCase(), twoFriends: stateFromStores.length < 2 };
  const tmp23 = width(height[18]);
  CheckpointFriendsRive = tmp2(tmp3[21]).CheckpointFriendsRive;
  const merged = Object.assign(closure_17);
  let user1;
  if (stateFromStores1 != null) {
    user1 = stateFromStores1.user;
  }
  userAvatarURL = undefined;
  if (null != user1) {
    let num = 64;
    const tmp22Result = width(height[14]);
    userAvatarURL = tmp22Result.getUserAvatarURL(user1, false, 64, "png");
  }
  userAvatarURL1 = undefined;
  if (null != tmp14) {
    const tmp22Result6 = width(height[14]);
    userAvatarURL1 = tmp22Result6.getUserAvatarURL(tmp14, false, 64, "png");
  }
  userAvatarURL2 = undefined;
  if (null != tmp13) {
    const tmp22Result7 = width(height[14]);
    userAvatarURL2 = tmp22Result7.getUserAvatarURL(tmp13, false, 64, "png");
  }
  let user2;
  if (stateFromStores1 != null) {
    user2 = stateFromStores1.user;
  }
  userAvatarURL3 = undefined;
  if (null != user2) {
    const tmp22Result8 = width(height[14]);
    userAvatarURL3 = tmp22Result8.getUserAvatarURL(user2, false, 64, "png");
  }
  userAvatarURL4 = undefined;
  if (null != stateFromStores2) {
    const tmp22Result9 = width(height[14]);
    userAvatarURL4 = tmp22Result9.getUserAvatarURL(stateFromStores2, false, 64, "png");
  }
  items6 = [closure_13(closure_7, obj3), , , ];
  let tmp21Result = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD_TRANSITION;
  if (tmp21Result) {
    const obj6 = { style: tmp.transition, children: closure_13(tmp22Result10, obj7) };
    obj7 = { isStepHeading: true, variant: "heading-lg/medium", children: intl.string(width(height[24])["6RSp5q"]) };
    tmp22Result10 = width(height[22]);
    intl = tmp2(tmp3[23]).intl;
    tmp21Result = tmp21(tmp25, obj6);
  }
  items6[1] = tmp21Result;
  let tmp21Result2 = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD;
  if (tmp21Result2) {
    const obj8 = { title: intl2.string(width(height[25]).OzY5Ns), description: intl3.string(width(height[24]).EqdLDd) };
    intl2 = tmp2(tmp3[23]).intl;
    intl3 = tmp2(tmp3[23]).intl;
    tmp21Result2 = tmp21(FriendsHeader, obj8);
  }
  items6[2] = tmp21Result2;
  if (tmp24Result) {
    tmp24Result = null != stateFromStores1;
  }
  if (tmp24Result) {
    const obj10 = { style: tmp.sidekickDetails, children: items7 };
    const obj9 = { style: tmp.sidekick, children: items8 };
    const obj11 = { title: intl4.string(width(height[25])["+uwOHt"]), description: intl5.string(width(height[24])["/ctmGw"]) };
    intl4 = tmp2(tmp3[23]).intl;
    intl5 = tmp2(tmp3[23]).intl;
    items7 = [closure_13(FriendsHeader, obj11), ];
    const obj12 = { sidekick: stateFromStores1 };
    items7[1] = closure_13(SidekickStats, obj12);
    items8 = [closure_14(closure_7, obj10), ];
    const obj13 = { user: stateFromStores1.user, username: str3 };
    items8[1] = closure_13(SidekickMessageInput, obj13);
    tmp24Result = tmp24(tmp25, obj9);
  }
  items6[3] = tmp24Result;
  const obj14 = { children: closure_14(closure_7, obj2) };
  return closure_13(tmp23, obj14);
};
