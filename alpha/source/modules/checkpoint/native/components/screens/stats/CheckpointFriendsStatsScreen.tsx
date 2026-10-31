// Module ID: 13667
// Function ID: 13668
// Name: CheckpointFriendsStatsScreen
// Dependencies: [5, 32, 19, 17, 5015, 1383, 13421, 6066, 21, 1376, 5014, 575, 1409, 504, 13668, 13669, 1491, 5068, 6435, 13622, 5159, 13624, 1113, 3092, 3060, 5715, 13643, 8643, 13627, 11971, 13670, 13435, 5711, 1187, 10558, 7351, 13350, 5729, 2]
// Exports: default

// Module 13667 (CheckpointFriendsStatsScreen)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import _modDef3060 from "module_3060" /* 3060 */;
import FriendsIcon from "FriendsIcon" /* 5715 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import ChatIcon from "ChatIcon" /* 8643 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10558 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11971 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13627 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13643 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import UserStore from "UserStore" /* 1383 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, closure_2, dependencyMap;

let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj2;
let obj4;
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
  const tmp = closure_17();
  const obj3 = { style: tmp.title, children: items };
  items = [, ];
  const obj = { style: tmp.header, children: items2 };
  const obj2 = { style: tmp.heading, children: items1 };
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items[0] = map1(FriendsIcon.FriendsIcon, obj4);
  const obj5 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2 = CheckpointTextDefault;
  const intl = intl6.intl;
  stringResult = intl.string(_modDef3060.ZQakPR);
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
  const tmp = closure_17();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const intl = intl6.intl;
  const stringResult = intl.string(_modDef3060.wWKySP);
  const intl2 = intl6.intl;
  const obj = { style: tmp.stats, children: items1 };
  const formatToPlainStringResult = intl2.formatToPlainString(_modDef3060.UZbUtl, { numMinutes: rounded1 });
  const obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.stat, children: items };
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
  let _undefined;
  let c3;
  let c4;
  let closure_5;
  let disabled;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj6;
  let obj8;
  let obj9;
  let stringResult;
  let tmp16;
  let tmp3;
  let tmp5;
  let tmp7;
  let value;
  user = user.user;
  value = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let obj = function _handleSend() {
    let id;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj2;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const tmp30 = closure_2_5;
              if (tmp30) {
                _undefined(true);
                c3 = 2;
                c1 = 3;
                c4 = 1;
                const obj5 = { value: obj2.sendSidekickMessage(importDefault, id.id), done: false };
                obj2 = tmp(closure_2[31]);
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
              const presentError = tmp(closure_2[32]).presentError;
              const tmp16 = tmp(closure_2[32]);
              const intl = tmp(closure_2[22]).intl;
              presentError(intl.string(tmp(closure_2[22]).t.fEptJP));
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
  const tmp = closure_17();
  [value, tmp3] = react.useState(undefined);
  dependencyMap = tmp3;
  [tmp5, c3] = _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp7, c4] = _slicedToArray(react.useState(false), 2);
  let tmp10 = null != value;
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const tmp9 = value(13670)(user.id);
  if (tmp10) {
    tmp10 = value.length > 0;
  }
  if (tmp10) {
    tmp10 = value.length <= 250;
  }
  if (tmp10) {
    tmp10 = !tmp5;
  }
  if (tmp10) {
    tmp10 = !tmp7;
  }
  react = tmp10;
  let tmp12Result = null;
  if (tmp9) {
    obj = { style: tmp.messageInputContainer, children: items };
    let obj2 = { multiline: true, onChangeText: tmp3, style: tmp.messageInput, value, editable: tmp16, placeholderTextColor: CHECKPOINT_WHITE, placeholder: stringResult, returnKeyType: "done", submitBehavior: "blurAndSubmit" };
    tmp16 = !tmp5;
    const TextInput = user(1187).TextInput;
    if (!tmp5) {
      tmp16 = !tmp7;
    }
    let intl = tmp15(1113).intl;
    if (tmp5) {
      stringResult = intl.string(tmp15(1113).t.fjcCk5);
    } else {
      let obj3 = { name: username };
      stringResult = intl.formatToPlainString(tmp15(1113).t["0ZQw/X"], obj3);
    }
    items = [tmp14(TextInput, obj2), ];
    let obj4 = { style: tmp.messageInputActions, children: items1 };
    let obj5 = {
      onPress: function handleGift() {
          let items;
          obj = { recipientUserId: user.id, analyticsLocations: items };
          const openGiftModal = utils_openGiftModal.openGiftModal;
          items = [];
          utils_openGiftModal;
          items[0] = AnalyticsLocationDefault.CHECKPOINT;
          openGiftModal(obj);
        },
      accessibilityRole: "button",
      accessibilityLabel: intl2.string(tmp15(1113).t.Ve9Ge6),
      children: tmp14(tmp15(13350).GiftIcon, obj6)
    };
    intl2 = tmp15(1113).intl;
    obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    items1 = [tmp14(obj, obj5), ];
    const obj7 = {
      onPress: function handleSend() {
          return obj(...arguments);
        },
      disabled: !tmp10,
      style: disabled,
      accessibilityRole: "button",
      accessibilityLabel: intl3.string(user(1113).t.oeb1vg),
      accessibilityState: obj8,
      children: closure_13(user(5729).SendMessageIcon, obj9)
    };
    disabled = undefined;
    const tmp19 = obj;
    const tmp20 = CHECKPOINT_PRIMARY;
    if (!tmp10) {
      disabled = tmp.disabled;
    }
    intl3 = tmp15(1113).intl;
    obj8 = { disabled: !tmp10 };
    obj9 = { size: "refresh_sm", color: tmp20 };
    items1[1] = closure_13(tmp19, obj7);
    items[1] = closure_14(closure_7, obj4);
    tmp12Result = tmp12(tmp13, obj);
  }
  return tmp12Result;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Pressable: metroRequire, View: metroImportDefault } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
let tmp5;
if (PlatformUtils.isIOS()) {
  let referencedAssets = { "unifont-17.0.03": obj2 };
  obj2 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  tmp5 = referencedAssets;
}
referencedAssets = tmp5;
let createStyles = createStyles_mod;
let obj3 = { container: obj4, animation: rect, transition: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" }, header: obj5, heading: obj6, title: obj7, titleText: { flexShrink: 1 }, sidekick: obj8, sidekickDetails: obj9, stats: obj10, stat: obj11, messageInputContainer: obj12, messageInput: { flexGrow: 1, alignSelf: "stretch", maxHeight: 200, padding: 0, color: CHECKPOINT_PRIMARY, textAlignVertical: "top" }, messageInputActions: obj13, disabled: { opacity: 0.5 } };
obj4 = { width: "100%", flexGrow: 1, justifyContent: "flex-end", paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: -nativeDefault.space.PX_24, right: -nativeDefault.space.PX_24 };
obj5 = { gap: nativeDefault.space.PX_12 };
obj6 = { gap: nativeDefault.space.PX_8 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj8 = { gap: nativeDefault.space.PX_32 };
obj9 = { gap: nativeDefault.space.PX_24 };
obj10 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 };
obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj12 = { minHeight: 96, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
obj13 = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_12 };
let closure_17 = createStyles(obj3);
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
  let tmp11Result12;
  let tmp14;
  let tmp15;
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
  let tmp = closure_17();
  referencedAssets = require("get initialized");
  const items = [CheckpointStore];
  let stateFromStores = referencedAssets.useStateFromStores(items, () => {
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
  const tmp2Result8 = require("get initialized");
  const stateFromStores2 = tmp2Result8.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [AccessibilityStore];
  const tmp2Result9 = require("get initialized");
  const stateFromStores3 = tmp2Result9.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const tmp2Result10 = require("useFriendsAnimationState");
  const friendsAnimationState = tmp2Result10.useFriendsAnimationState(route, stateFromStores3);
  const tmp2Result11 = require("useSidekickLeave");
  const sidekickLeave = tmp2Result11.useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep);
  const tmp10 = friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.BEST || friendsAnimationState === require("useFriendsAnimationState").FriendsAnimationState.LEAVE;
  _require = tmp10;
  size = width(tmp3[16])({ ignoreKeyboard: true });
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
  [tmp14, tmp15] = stateFromStores;
  _slicedToArray(stateFromStores, 2);
  const tmp2Result12 = require("UserUtils");
  let str = tmp2Result12.useName(tmp14);
  if (str == null) {
    str = "";
  }
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  const tmp2Result13 = require("UserUtils");
  let str2 = tmp2Result13.useName(tmp15);
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
  let tmp24Result = route === tmp2(tmp3[18]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[18]).CheckpointRoute.SIDEKICK_LEAVE;
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
  const obj2 = { style: tmp.container, children: items6 };
  const obj3 = { style: items5, pointerEvents: "none", children: closure_13(CheckpointFriendsRive, obj4) };
  items5 = [tmp.animation, memo];
  obj4 = { referencedAssets, defaultViewModelInstance: str4, dataBinding: obj5 };
  obj5 = { AnimationState: friendsAnimationState, "Avatar01/img": userAvatarURL, "Avatar02/img": userAvatarURL1, "Avatar03/img": userAvatarURL2, "Avatar04/img": userAvatarURL3, "Avatar05/img": userAvatarURL4, "Avatar01/Username": str3.toLocaleUpperCase(), "Avatar02/Username": toLocaleUpperCaseResult1, "Avatar03/Username": toLocaleUpperCaseResult, "Avatar04/Username": str3.toLocaleUpperCase(), twoFriends: stateFromStores.length < 2 };
  const tmp11Result = width(height[19]);
  CheckpointFriendsRive = tmp2(tmp3[20]).CheckpointFriendsRive;
  const merged = Object.assign(closure_15);
  let user1;
  if (stateFromStores1 != null) {
    user1 = stateFromStores1.user;
  }
  userAvatarURL = undefined;
  if (null != user1) {
    let num = 64;
    const tmp11Result7 = width(height[12]);
    userAvatarURL = tmp11Result7.getUserAvatarURL(user1, false, 64, "png");
  }
  userAvatarURL1 = undefined;
  if (null != tmp15) {
    const tmp11Result8 = width(height[12]);
    userAvatarURL1 = tmp11Result8.getUserAvatarURL(tmp15, false, 64, "png");
  }
  userAvatarURL2 = undefined;
  if (null != tmp14) {
    const tmp11Result9 = width(height[12]);
    userAvatarURL2 = tmp11Result9.getUserAvatarURL(tmp14, false, 64, "png");
  }
  let user2;
  if (stateFromStores1 != null) {
    user2 = stateFromStores1.user;
  }
  userAvatarURL3 = undefined;
  if (null != user2) {
    const tmp11Result10 = width(height[12]);
    userAvatarURL3 = tmp11Result10.getUserAvatarURL(user2, false, 64, "png");
  }
  userAvatarURL4 = undefined;
  if (null != stateFromStores2) {
    const tmp11Result11 = width(height[12]);
    userAvatarURL4 = tmp11Result11.getUserAvatarURL(stateFromStores2, false, 64, "png");
  }
  items6 = [closure_13(closure_7, obj3), , , ];
  let tmp22Result = route === tmp2(tmp3[18]).CheckpointRoute.SQUAD_TRANSITION;
  if (tmp22Result) {
    const obj6 = { style: tmp.transition, children: closure_13(tmp11Result12, obj7) };
    obj7 = { isStepHeading: true, variant: "heading-lg/medium", children: intl.string(width(height[23])["6RSp5q"]) };
    tmp11Result12 = width(height[21]);
    intl = tmp2(tmp3[22]).intl;
    tmp22Result = tmp22(tmp25, obj6);
  }
  items6[1] = tmp22Result;
  let tmp22Result2 = route === tmp2(tmp3[18]).CheckpointRoute.SQUAD;
  if (tmp22Result2) {
    const obj8 = { title: intl2.string(width(height[24]).OzY5Ns), description: intl3.string(width(height[23]).EqdLDd) };
    intl2 = tmp2(tmp3[22]).intl;
    intl3 = tmp2(tmp3[22]).intl;
    tmp22Result2 = tmp22(FriendsHeader, obj8);
  }
  items6[2] = tmp22Result2;
  if (tmp24Result) {
    tmp24Result = null != stateFromStores1;
  }
  if (tmp24Result) {
    const obj10 = { style: tmp.sidekickDetails, children: items7 };
    const obj9 = { style: tmp.sidekick, children: items8 };
    const obj11 = { title: intl4.string(width(height[24])["+uwOHt"]), description: intl5.string(width(height[23])["/ctmGw"]) };
    intl4 = tmp2(tmp3[22]).intl;
    intl5 = tmp2(tmp3[22]).intl;
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
  return closure_13(tmp11Result, obj14);
};
