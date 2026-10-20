// Module ID: 12830
// Function ID: 12831
// Name: CheckpointFriendsStatsScreen
// Dependencies: [5, 32, 19, 17, 4946, 1392, 12779, 5973, 21, 1385, 4945, 587, 558, 576, 6320, 1417, 504, 1499, 4994, 1128, 3046, 12831, 5072, 12797, 3078, 12799, 5628, 8491, 12832, 11524, 12833, 12780, 5624, 1202, 10375, 7227, 12710, 5642, 2]

// Module 12830 (CheckpointFriendsStatsScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1128 */;
import _modDef3046 from "module_3046" /* 3046 */;
import FriendsIcon from "FriendsIcon" /* 5628 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6320 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7227 */;
import ChatIcon from "ChatIcon" /* 8491 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10375 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11524 */;
import CheckpointTextDefault from "CheckpointText" /* 12797 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12832 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;
import UserStore from "UserStore" /* 1392 */;
import CheckpointStore from "CheckpointStore" /* 12779 */;
import CheckpointConstants from "CheckpointConstants" /* 5973 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c1, closure_2, dependencyMap;

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
          return { value: "IconComponent", done: null };
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
              const intl = tmp(closure_2[19]).intl;
              presentError(intl.string(tmp(closure_2[19]).t.fEptJP));
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
          return { value: "IconComponent", done: null };
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
  const tmp = closure_18();
  [value, tmp3] = react.useState(undefined);
  dependencyMap = tmp3;
  [tmp5, c3] = _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp7, c4] = _slicedToArray(react.useState(false), 2);
  let tmp10 = null != value;
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const tmp9 = value(12833)(user.id);
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
    const TextInput = user(1202).TextInput;
    if (!tmp5) {
      tmp16 = !tmp7;
    }
    let intl = tmp15(1128).intl;
    if (tmp5) {
      stringResult = intl.string(tmp15(1128).t.fjcCk5);
    } else {
      let obj3 = { name: username };
      stringResult = intl.formatToPlainString(tmp15(1128).t["0ZQw/X"], obj3);
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
      accessibilityLabel: intl2.string(tmp15(1128).t.Ve9Ge6),
      children: tmp14(tmp15(12710).GiftIcon, obj6)
    };
    intl2 = tmp15(1128).intl;
    obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    items1 = [tmp14(obj, obj5), ];
    const obj7 = {
      onPress: function handleSend() {
          return obj(...arguments);
        },
      disabled: !tmp10,
      style: disabled,
      accessibilityRole: "button",
      accessibilityLabel: intl3.string(user(1128).t.oeb1vg),
      accessibilityState: obj8,
      children: closure_13(user(5642).SendMessageIcon, obj9)
    };
    disabled = undefined;
    const tmp19 = obj;
    const tmp20 = CHECKPOINT_PRIMARY;
    if (!tmp10) {
      disabled = tmp.disabled;
    }
    intl3 = tmp15(1128).intl;
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
const constants = { START: 0, [0]: "START", INTRO: 1, [1]: "INTRO", TRANSITION: 2, [2]: "TRANSITION", BEST: 3, [3]: "BEST", LEAVE: 4, [4]: "LEAVE", END: 5, [5]: "END" };
let closure_16 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
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
let closure_18 = createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendsAnimationState(route, arg1) {
  let tmp12;
  let obj = react2;
  const cResult = obj.c(6);
  const tmp4 = route === CheckpointNavigation.CheckpointRoute.SQUAD;
  if (cResult[0] === route) {
    let tmp5;
    let tmp15;
    let tmp14;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    const tmp8 = _slicedToArray(react.useState(tmp5), 2);
    let first = tmp8[0];
    let closure_1 = tmp10;
    const obj3 = react;
    if (first.route !== route) {
      const obj2 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: tmp12 };
      tmp12 = !arg1;
      first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
      if (tmp12) {
        tmp12 = first.route === tmp(6320).CheckpointRoute.SQUAD;
      }
      if (tmp12) {
        tmp12 = route === tmp(6320).CheckpointRoute.SIDEKICK;
      }
      tmp8[1](obj2);
    }
    if (cResult[3] !== first.isTransitioning) {
      const fn = function h() {
        let closure_0;
        if (first.isTransitioning) {
          const _setTimeout = setTimeout;
          first = setTimeout(() => closure_1_1((arg0) => {
            const obj = { isTransitioning: false };
            const merged = Object.assign(arg0);
            return obj;
          }), 1500);
          return () => clearTimeout(closure_0);
        }
      };
      const items = [first.isTransitioning];
      cResult[3] = first.isTransitioning;
      cResult[4] = fn;
      cResult[5] = items;
      tmp15 = items;
      tmp14 = fn;
    } else {
      tmp14 = cResult[4];
      tmp15 = cResult[5];
    }
    const effect = obj3.useEffect(tmp14, tmp15);
    if (CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION === route) {
      return first.hasShownSquad ? constants.END : constants.START;
    } else if (CheckpointNavigation.CheckpointRoute.SQUAD === route) {
      return constants.INTRO;
    } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK === route) {
      return first.isTransitioning ? constants.TRANSITION : constants.BEST;
    } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE === route) {
      return arg1 ? constants.BEST : constants.LEAVE;
    } else {
      return constants.START;
    }
  }
  const obj4 = { route, hasShownSquad: tmp4, isTransitioning: false };
  cResult[0] = route;
  cResult[1] = tmp4;
  cResult[2] = obj4;
  tmp5 = obj4;
}) : (function useFriendsAnimationState(route, arg1) {
  let tmp7;
  let obj = react;
  const obj2 = { route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false };
  const tmp3 = _slicedToArray(react.useState(obj2), 2);
  let first = tmp3[0];
  let closure_1 = tmp5;
  if (first.route !== route) {
    const obj3 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: tmp7 };
    tmp7 = !arg1;
    first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
    if (tmp7) {
      tmp7 = first.route === tmp(6320).CheckpointRoute.SQUAD;
    }
    if (tmp7) {
      tmp7 = route === tmp(6320).CheckpointRoute.SIDEKICK;
    }
    tmp3[1](obj3);
  }
  const items = [first.isTransitioning];
  const effect = obj.useEffect(() => {
    let closure_0;
    if (first.isTransitioning) {
      const _setTimeout = setTimeout;
      first = setTimeout(() => closure_1_1((arg0) => {
        const obj = { isTransitioning: false };
        const merged = Object.assign(arg0);
        return obj;
      }), 1500);
      return () => clearTimeout(closure_0);
    }
  }, items);
  if (CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION === route) {
    return first.hasShownSquad ? constants.END : constants.START;
  } else if (CheckpointNavigation.CheckpointRoute.SQUAD === route) {
    return constants.INTRO;
  } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK === route) {
    return first.isTransitioning ? constants.TRANSITION : constants.BEST;
  } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE === route) {
    return arg1 ? constants.BEST : constants.LEAVE;
  } else {
    return constants.START;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointFriendsStatsScreen(route) {
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let items6;
  let onPreviousStep;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp19;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp6;
  let tmp7;
  let tmp85;
  let tmp9;
  let useReducedMotion;
  const obj = route(onPreviousStep[13]);
  const cResult = obj.c(76);
  route = route.route;
  const onNextStep = route.onNextStep;
  onPreviousStep = route.onPreviousStep;
  const tmp4 = closure_18();
  const items = [CheckpointStore];
  const obj2 = route(onPreviousStep[16]);
  let stateFromStores = obj2.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let users;
    if (stats != null) {
      users = stats.users;
    }
    return users;
  });
  const tmp5 = CheckpointStore;
  if (stateFromStores == null) {
    stateFromStores = [];
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [tmp5];
    const fn = function l() {
      const stats = CheckpointStore.stats;
      let sidekick;
      if (stats != null) {
        sidekick = stats.sidekick;
      }
      return sidekick;
    };
    cResult[0] = items1;
    cResult[1] = fn;
    tmp6 = items1;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = route(onPreviousStep[16]);
  const stateFromStores1 = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class N {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = items2;
    cResult[3] = N;
    tmp10 = N;
    tmp9 = items2;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult7 = route(onPreviousStep[16]);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    class P {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[4] = items3;
    cResult[5] = P;
    tmp14 = P;
    tmp13 = items3;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult8 = route(onPreviousStep[16]);
  const stateFromStores3 = tmpResult8.useStateFromStores(tmp13, tmp14);
  const ref = react.useRef(true);
  const tmp17 = closure_19(route, stateFromStores3);
  const obj6 = react;
  const tmp18 = tmp17 === constants.BEST || tmp17 === constants.LEAVE;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { ignoreKeyboard: true };
    cResult[6] = obj3;
    class P {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
  } else {
    tmp19 = cResult[6];
  }
  size = onNextStep(tmp2[17])(tmp19);
  const height = size.height;
  let num8 = 0;
  const width = size.width;
  const result = -height / 2;
  if (tmp18) {
    num8 = tmp20(tmp2[11]).space.PX_48;
  }
  const diff = result - num8;
  const sum = width + height;
  if (cResult[7] === diff) {
    let tmp24;
    let tmp30;
    let tmp32;
    let tmp34;
    let tmp40;
    let str5;
    if (cResult[8] === sum) {
      tmp24 = cResult[9];
    }
    class P {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    [tmp27, tmp28, tmp29] = tmp26;
    const tmpResult9 = route(onPreviousStep[18]);
    let str = tmpResult9.useName(tmp27);
    if (str == null) {
      str = "";
    }
    if (cResult[10] !== str) {
      const toLocaleUpperCaseResult = str.toLocaleUpperCase();
      cResult[10] = str;
      class P {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[11] = toLocaleUpperCaseResult;
      tmp30 = toLocaleUpperCaseResult;
    } else {
      tmp30 = cResult[11];
    }
    const tmpResult10 = route(onPreviousStep[18]);
    let str2 = tmpResult10.useName(tmp28);
    if (str2 == null) {
      str2 = "";
    }
    if (cResult[12] !== str2) {
      const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
      cResult[12] = str2;
      class P {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[13] = toLocaleUpperCaseResult1;
      tmp32 = toLocaleUpperCaseResult1;
    } else {
      tmp32 = cResult[13];
    }
    const tmpResult11 = route(onPreviousStep[18]);
    let str3 = tmpResult11.useName(tmp29);
    if (str3 == null) {
      str3 = "";
    }
    if (cResult[14] !== str3) {
      const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
      cResult[14] = str3;
      class P {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[15] = toLocaleUpperCaseResult2;
      tmp34 = toLocaleUpperCaseResult2;
    } else {
      tmp34 = cResult[15];
    }
    let user;
    const useName = tmp(tmp2[18]).useName;
    route(onPreviousStep[18]);
    if (stateFromStores1 != null) {
      user = stateFromStores1.user;
    }
    let str4 = useName(user);
    if (str4 == null) {
      str4 = "";
    }
    const tmp39 = route === route(onPreviousStep[14]).CheckpointRoute.SIDEKICK || route === route(onPreviousStep[14]).CheckpointRoute.SIDEKICK_LEAVE;
    if (tmp39) {
      tmp40 = null == stateFromStores1;
    } else {
      tmp40 = 0 === stateFromStores.length;
    }
    if (stateFromStores.length < 3) {
      let str6 = "twoFriends";
      if (stateFromStores3) {
        str6 = "twoFriends-reducedMotion";
      }
      str5 = str6;
    } else {
      str5 = "threeFriends";
      if (stateFromStores3) {
        str5 = "threeFriends-reducedMotion";
      }
    }
    if (cResult[16] === onNextStep) {
      if (cResult[17] === onPreviousStep) {
        if (cResult[18] === stateFromStores3) {
          let tmp41;
          let tmp42;
          if (cResult[19] === route) {
            tmp41 = cResult[20];
            tmp42 = cResult[21];
          }
          const effect = obj6.useEffect(tmp41, tmp42);
          if (tmp40) {
            let tmp99;
            let tmp102;
            if (cResult[22] !== tmp39) {
              const string = tmp(tmp2[19]).intl.string;
              onNextStep(onPreviousStep[20]);
              class P {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              cResult[22] = tmp39;
              cResult[23] = tmp101;
              tmp99 = tmp101;
            } else {
              tmp99 = cResult[23];
            }
            if (cResult[24] !== tmp99) {
              class P {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              cResult[24] = tmp99;
              cResult[25] = tmp104;
              tmp102 = tmp104;
            } else {
              tmp102 = cResult[25];
            }
            return tmp102;
          } else {
            if (cResult[26] === tmp24) {
              let tmp45;
              let tmp46;
              let tmp50;
              let tmp56;
              let tmp60;
              let tmp64;
              if (cResult[27] === tmp4.animation) {
                tmp45 = cResult[28];
              }
              if (cResult[29] !== tmp27) {
                let userAvatarURL;
                if (null != tmp27) {
                  const tmp20Result6 = onNextStep(onPreviousStep[15]);
                  class P {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  userAvatarURL = tmp20Result6.getUserAvatarURL(tmp27, false, 64, "png");
                }
                class P {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                cResult[30] = userAvatarURL;
                tmp46 = userAvatarURL;
              } else {
                tmp46 = cResult[30];
              }
              if (cResult[31] !== tmp29) {
                let userAvatarURL1;
                if (null != tmp29) {
                  const tmp20Result7 = onNextStep(onPreviousStep[15]);
                  class P {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  userAvatarURL1 = tmp20Result7.getUserAvatarURL(tmp29, false, 64, "png");
                }
                class P {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                cResult[32] = userAvatarURL1;
                tmp50 = userAvatarURL1;
              } else {
                tmp50 = cResult[32];
              }
              class P {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              let user1;
              if (stateFromStores1 != null) {
                user1 = stateFromStores1.user;
              }
              if (cResult[35] !== user1) {
                let userAvatarURL2;
                if (null != user1) {
                  const tmp20Result8 = onNextStep(onPreviousStep[15]);
                  class P {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  userAvatarURL2 = tmp20Result8.getUserAvatarURL(user1, false, 64, "png");
                }
                class P {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                cResult[36] = userAvatarURL2;
                tmp56 = userAvatarURL2;
              } else {
                tmp56 = cResult[36];
              }
              if (cResult[37] !== stateFromStores2) {
                let userAvatarURL3;
                if (null != stateFromStores2) {
                  const tmp20Result9 = onNextStep(onPreviousStep[15]);
                  class P {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  userAvatarURL3 = tmp20Result9.getUserAvatarURL(stateFromStores2, false, 64, "png");
                }
                class P {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                cResult[38] = userAvatarURL3;
                tmp60 = userAvatarURL3;
              } else {
                tmp60 = cResult[38];
              }
              if (cResult[39] !== str4) {
                const toLocaleUpperCaseResult3 = str4.toLocaleUpperCase();
                cResult[39] = str4;
                class P {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                cResult[40] = toLocaleUpperCaseResult3;
                tmp64 = toLocaleUpperCaseResult3;
              } else {
                tmp64 = cResult[40];
              }
              if (cResult[41] === tmp17) {
                if (cResult[42] === tmp30) {
                  if (cResult[43] === tmp32) {
                    if (cResult[44] === tmp46) {
                      if (cResult[45] === tmp50) {
                        if (cResult[46] === tmp54) {
                          if (cResult[47] === tmp56) {
                            if (cResult[48] === tmp60) {
                              if (cResult[49] === tmp64) {
                                if (cResult[50] === tmp34) {
                                  let tmp66;
                                  if (cResult[51] === stateFromStores.length < 3) {
                                    tmp66 = cResult[52];
                                  }
                                  if (cResult[53] === str5) {
                                    let tmp70;
                                    if (cResult[54] === tmp66) {
                                      tmp70 = cResult[55];
                                    }
                                    if (cResult[56] === tmp45) {
                                      let tmp75;
                                      if (cResult[57] === tmp70) {
                                        tmp75 = cResult[58];
                                      }
                                      if (cResult[59] === route) {
                                        let tmp78;
                                        let tmp80;
                                        if (cResult[60] === tmp4.transition) {
                                          tmp78 = cResult[61];
                                        }
                                        if (cResult[62] !== route) {
                                          let tmp81 = route === tmp(tmp2[14]).CheckpointRoute.SQUAD;
                                          if (tmp81) {
                                            const obj5 = { title: obj19.string(onNextStep(onPreviousStep[20]).OzY5Ns), description: intl.string(onNextStep(onPreviousStep[24]).EqdLDd) };
                                            class P {
                                              constructor() {
                                                return useReducedMotion.useReducedMotion;
                                              }
                                            }
                                            intl = tmp(tmp2[19]).intl;
                                            tmp81 = closure_13(closure_20, obj5);
                                          }
                                          class P {
                                            constructor() {
                                              return useReducedMotion.useReducedMotion;
                                            }
                                          }
                                          cResult[63] = tmp81;
                                          tmp80 = tmp81;
                                        } else {
                                          tmp80 = cResult[63];
                                        }
                                        if (cResult[64] === tmp39) {
                                          if (cResult[65] === stateFromStores1) {
                                            if (cResult[66] === str4) {
                                              if (cResult[67] === tmp4.sidekick) {
                                                let tmp84;
                                                if (cResult[68] === tmp4.sidekickDetails) {
                                                  tmp84 = cResult[69];
                                                }
                                                if (cResult[70] === tmp4.container) {
                                                  if (cResult[71] === tmp75) {
                                                    if (cResult[72] === tmp78) {
                                                      if (cResult[73] === tmp80) {
                                                        let tmp92;
                                                        if (cResult[74] === tmp84) {
                                                          tmp92 = cResult[75];
                                                        }
                                                        return tmp92;
                                                      }
                                                    }
                                                  }
                                                }
                                                class P {
                                                  constructor() {
                                                    return useReducedMotion.useReducedMotion;
                                                  }
                                                }
                                                const obj7 = { style: tmp44, children: items4 };
                                                items4 = [tmp75, tmp78, tmp80, tmp84];
                                                const tmp20Result10 = onNextStep(onPreviousStep[25]);
                                                tmp95[0] = closure_14(closure_7, obj7);
                                                const tmp98 = closure_13(tmp20Result10, tmp95);
                                                cResult[70] = tmp4.container;
                                                cResult[71] = tmp75;
                                                cResult[72] = tmp78;
                                                cResult[73] = tmp80;
                                                cResult[74] = tmp84;
                                                cResult[75] = tmp98;
                                                tmp92 = tmp98;
                                              }
                                            }
                                          }
                                        }
                                        class P {
                                          constructor() {
                                            return useReducedMotion.useReducedMotion;
                                          }
                                        }
                                        if (tmp85) {
                                          const obj8 = { style: null, children: items6 };
                                          class P {
                                            constructor() {
                                              return useReducedMotion.useReducedMotion;
                                            }
                                          }
                                          const obj9 = { style: tmp4.sidekickDetails, children: items5 };
                                          const obj10 = { title: intl2.string(onNextStep(onPreviousStep[20])["+uwOHt"]), description: intl3.string(onNextStep(onPreviousStep[24])["/ctmGw"]) };
                                          intl2 = tmp(tmp2[19]).intl;
                                          intl3 = tmp(tmp2[19]).intl;
                                          items5 = [closure_13(closure_20, obj10), ];
                                          const obj11 = { sidekick: stateFromStores1 };
                                          items5[1] = closure_13(closure_21, obj11);
                                          items6 = [closure_14(closure_7, obj9), ];
                                          const obj12 = { user: stateFromStores1.user, username: str4 };
                                          items6[1] = closure_13(SidekickMessageInput, obj12);
                                          tmp85 = closure_14(closure_7, obj8);
                                        }
                                        cResult[64] = tmp39;
                                        cResult[65] = stateFromStores1;
                                        cResult[66] = str4;
                                        cResult[67] = tmp4.sidekick;
                                        cResult[68] = tmp4.sidekickDetails;
                                        cResult[69] = tmp85;
                                        tmp84 = tmp85;
                                      }
                                      const tmp79 = route === route(onPreviousStep[14]).CheckpointRoute.SQUAD_TRANSITION;
                                      class P {
                                        constructor() {
                                          return useReducedMotion.useReducedMotion;
                                        }
                                      }
                                      cResult[59] = route;
                                      cResult[60] = tmp4.transition;
                                      cResult[61] = tmp79;
                                      tmp78 = tmp79;
                                    }
                                    class P {
                                      constructor() {
                                        return useReducedMotion.useReducedMotion;
                                      }
                                    }
                                    const obj13 = { style: tmp45, pointerEvents: "none", children: tmp70 };
                                    const tmp77 = closure_13(closure_7, obj13);
                                    cResult[56] = tmp45;
                                    cResult[57] = tmp70;
                                    cResult[58] = tmp77;
                                    tmp75 = tmp77;
                                  }
                                  class P {
                                    constructor() {
                                      return useReducedMotion.useReducedMotion;
                                    }
                                  }
                                  tmp72[0] = obj;
                                  tmp72[1] = str5;
                                  tmp72[2] = tmp66;
                                  const tmp74 = closure_13(route(onPreviousStep[22]).CheckpointFriendsRive, tmp72);
                                  cResult[53] = str5;
                                  cResult[54] = tmp66;
                                  cResult[55] = tmp74;
                                  tmp70 = tmp74;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj14 = { AnimationState: tmp17, "Avatar01/img": tmp46, "Avatar02/img": tmp50, "Avatar03/img": tmp54, "Avatar04/img": tmp56, "Avatar05/img": tmp60, "Avatar01/Username": tmp30, "Avatar02/Username": tmp34, "Avatar03/Username": tmp32, "Avatar04/Username": tmp64, twoFriends: stateFromStores.length < 3 };
              const merged = Object.assign(closure_16);
              cResult[41] = tmp17;
              cResult[42] = tmp30;
              cResult[43] = tmp32;
              cResult[44] = tmp46;
              cResult[45] = tmp50;
              cResult[46] = tmp54;
              cResult[47] = tmp56;
              cResult[48] = tmp60;
              cResult[49] = tmp64;
              cResult[50] = tmp34;
              cResult[51] = stateFromStores.length < 3;
              cResult[52] = obj14;
              tmp66 = obj14;
            }
            const items7 = [tmp4.animation, ];
            class P {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            cResult[26] = tmp24;
            cResult[27] = tmp4.animation;
            cResult[28] = items7;
            tmp45 = items7;
          }
        }
      }
    }
    function oe() {
      if (route === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
        if (ref.current) {
          onPreviousStep();
        } else {
          const tmp3 = stateFromStores3;
          if (tmp3) {
            onNextStep();
          } else {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(onNextStep, 1000);
            return () => clearTimeout(closure_0);
          }
        }
      } else {
        ref.current = false;
      }
    }
    const items8 = [onNextStep, onPreviousStep, stateFromStores3, route];
    cResult[16] = onNextStep;
    cResult[17] = onPreviousStep;
    cResult[18] = stateFromStores3;
    cResult[19] = route;
    cResult[20] = oe;
    cResult[21] = items8;
    tmp42 = items8;
    tmp41 = oe;
  }
  const obj15 = { top: diff, height: sum };
  cResult[7] = diff;
  cResult[8] = sum;
  cResult[9] = obj15;
  tmp24 = obj15;
}) : (function CheckpointFriendsStatsScreen(route) {
  let CheckpointFriendsRive;
  let closure_5;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj6;
  let obj7;
  let obj9;
  let ref;
  let str5;
  let tmp10Result16;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp23;
  let tmp25Result;
  let useReducedMotion;
  let userAvatarURL;
  let userAvatarURL1;
  let userAvatarURL2;
  let userAvatarURL3;
  let userAvatarURL4;
  route = route.route;
  const onNextStep = route.onNextStep;
  const onPreviousStep = route.onPreviousStep;
  let stateFromStores3;
  _slicedToArray = undefined;
  react = undefined;
  let width;
  let height;
  let tmp = closure_18();
  let tmp3 = onPreviousStep;
  referencedAssets = route(onPreviousStep[16]);
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
  const tmp2Result = route(tmp3[16]);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let sidekick;
    if (stats != null) {
      sidekick = stats.sidekick;
    }
    return sidekick;
  });
  const items2 = [UserStore];
  const tmp2Result7 = route(tmp3[16]);
  const stateFromStores2 = tmp2Result7.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [AccessibilityStore];
  const tmp2Result8 = route(tmp3[16]);
  stateFromStores3 = tmp2Result8.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  _slicedToArray = react.useRef(true);
  const tmp8 = closure_19(route, stateFromStores3);
  react = tmp9;
  size = onNextStep(tmp3[17])({ ignoreKeyboard: true });
  width = size.width;
  height = size.height;
  const items4 = [tmp9, height, width];
  const memo = obj5.useMemo(() => {
    let num = 0;
    const result = -height / 2;
    const tmp = height;
    if (closure_5) {
      num = nativeDefault.space.PX_48;
    }
    return { top: result - num, height: width + tmp };
  }, items4);
  [tmp13, tmp14, tmp15] = stateFromStores;
  _slicedToArray(stateFromStores, 3);
  const tmp2Result9 = route(tmp3[18]);
  let str = tmp2Result9.useName(tmp13);
  if (str == null) {
    str = "";
  }
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  const tmp2Result10 = route(tmp3[18]);
  let str2 = tmp2Result10.useName(tmp14);
  if (str2 == null) {
    str2 = "";
  }
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  const tmp2Result11 = route(tmp3[18]);
  let str3 = tmp2Result11.useName(tmp15);
  if (str3 == null) {
    str3 = "";
  }
  let user;
  const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
  const useName = tmp2(tmp3[18]).useName;
  route(tmp3[18]);
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str4 = useName(user);
  if (str4 == null) {
    str4 = "";
  }
  const tmp22 = route === route(tmp3[14]).CheckpointRoute.SIDEKICK || route === route(tmp3[14]).CheckpointRoute.SIDEKICK_LEAVE;
  if (tmp22) {
    tmp23 = null == stateFromStores1;
  } else {
    let num = 0;
    tmp23 = 0 === stateFromStores.length;
  }
  if (stateFromStores.length < 3) {
    let str6 = "twoFriends";
    if (stateFromStores3) {
      str6 = "twoFriends-reducedMotion";
    }
    str5 = str6;
  } else {
    str5 = "threeFriends";
    if (stateFromStores3) {
      str5 = "threeFriends-reducedMotion";
    }
  }
  const items5 = [onNextStep, onPreviousStep, stateFromStores3, route];
  const effect = obj5.useEffect(() => {
    if (route === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        onPreviousStep();
      } else {
        const tmp3 = stateFromStores3;
        if (tmp3) {
          onNextStep();
        } else {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(onNextStep, 1000);
          return () => clearTimeout(closure_0);
        }
      }
    } else {
      ref.current = false;
    }
  }, items5);
  if (tmp23) {
    const tmp10Result = onNextStep(tmp3[21]);
    const intl6 = tmp2(tmp3[19]).intl;
    const string = intl6.string;
    const tmp10Result9 = onNextStep(tmp3[20]);
    const obj2 = { name: string(tmp22 ? tmp10Result9["+uwOHt"] : tmp10Result9.OzY5Ns) };
    tmp25Result = tmp25(tmp10Result, obj2);
  } else {
    const obj3 = { style: tmp.container, children: items7 };
    const obj4 = { style: items6, pointerEvents: "none", children: closure_13(CheckpointFriendsRive, obj6) };
    items6 = [tmp.animation, memo];
    obj6 = { referencedAssets, defaultViewModelInstance: str5, dataBinding: obj7 };
    obj7 = { AnimationState: tmp8, "Avatar01/img": userAvatarURL, "Avatar02/img": userAvatarURL1, "Avatar03/img": userAvatarURL2, "Avatar04/img": userAvatarURL3, "Avatar05/img": userAvatarURL4, "Avatar01/Username": toLocaleUpperCaseResult, "Avatar02/Username": toLocaleUpperCaseResult2, "Avatar03/Username": toLocaleUpperCaseResult1, "Avatar04/Username": str4.toLocaleUpperCase(), twoFriends: stateFromStores.length < 3 };
    const tmp10Result10 = onNextStep(tmp3[25]);
    CheckpointFriendsRive = tmp2(tmp3[22]).CheckpointFriendsRive;
    const merged = Object.assign(closure_16);
    userAvatarURL = undefined;
    if (null != tmp13) {
      const tmp10Result11 = onNextStep(tmp3[15]);
      userAvatarURL = tmp10Result11.getUserAvatarURL(tmp13, false, 64, "png");
    }
    userAvatarURL1 = undefined;
    if (null != tmp15) {
      const tmp10Result12 = onNextStep(tmp3[15]);
      userAvatarURL1 = tmp10Result12.getUserAvatarURL(tmp15, false, 64, "png");
    }
    userAvatarURL2 = undefined;
    if (null != tmp14) {
      const tmp10Result13 = onNextStep(tmp3[15]);
      userAvatarURL2 = tmp10Result13.getUserAvatarURL(tmp14, false, 64, "png");
    }
    let user1;
    if (stateFromStores1 != null) {
      user1 = stateFromStores1.user;
    }
    userAvatarURL3 = undefined;
    if (null != user1) {
      const tmp10Result14 = onNextStep(tmp3[15]);
      userAvatarURL3 = tmp10Result14.getUserAvatarURL(user1, false, 64, "png");
    }
    userAvatarURL4 = undefined;
    if (null != stateFromStores2) {
      const tmp10Result15 = onNextStep(tmp3[15]);
      userAvatarURL4 = tmp10Result15.getUserAvatarURL(stateFromStores2, false, 64, "png");
    }
    items7 = [closure_13(height, obj4), , , ];
    let tmp25Result3 = route === tmp2(tmp3[14]).CheckpointRoute.SQUAD_TRANSITION;
    if (tmp25Result3) {
      const obj8 = { style: tmp.transition, children: closure_13(tmp10Result16, obj9) };
      obj9 = { variant: "heading-lg/medium", children: intl.string(onNextStep(tmp3[24])["6RSp5q"]) };
      tmp10Result16 = onNextStep(tmp3[23]);
      intl = tmp2(tmp3[19]).intl;
      tmp25Result3 = tmp25(tmp28, obj8);
    }
    items7[1] = tmp25Result3;
    let tmp25Result4 = route === tmp2(tmp3[14]).CheckpointRoute.SQUAD;
    if (tmp25Result4) {
      const obj10 = { title: intl2.string(onNextStep(tmp3[20]).OzY5Ns), description: intl3.string(onNextStep(tmp3[24]).EqdLDd) };
      intl2 = tmp2(tmp3[19]).intl;
      intl3 = tmp2(tmp3[19]).intl;
      tmp25Result4 = tmp25(closure_20, obj10);
    }
    items7[2] = tmp25Result4;
    let tmp27Result = tmp22 && null != stateFromStores1;
    if (tmp27Result) {
      const obj11 = { style: tmp.sidekick, children: items9 };
      const obj12 = { style: tmp.sidekickDetails, children: items8 };
      const obj13 = { title: intl4.string(onNextStep(tmp3[20])["+uwOHt"]), description: intl5.string(onNextStep(tmp3[24])["/ctmGw"]) };
      intl4 = tmp2(tmp3[19]).intl;
      intl5 = tmp2(tmp3[19]).intl;
      items8 = [closure_13(closure_20, obj13), ];
      const obj14 = { sidekick: stateFromStores1 };
      items8[1] = closure_13(closure_21, obj14);
      items9 = [closure_14(height, obj12), ];
      const obj15 = { user: stateFromStores1.user, username: str4 };
      items9[1] = closure_13(SidekickMessageInput, obj15);
      tmp27Result = tmp27(tmp28, obj11);
    }
    items7[3] = tmp27Result;
    const obj16 = { children: closure_14(height, obj3) };
    tmp25Result = tmp25(tmp10Result10, obj16);
  }
  return tmp25Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function FriendsHeader(arg0) {
  let description;
  let first;
  let header;
  let heading;
  let items;
  let items1;
  let items2;
  let title;
  let title2;
  let tmp12;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(21);
  ({ title, description } = arg0);
  const tmp4 = closure_18();
  ({ header, heading, title: title2 } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    const tmp8 = map1(FriendsIcon.FriendsIcon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  const titleText = tmp4.titleText;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(_modDef3046.ZQakPR);
    const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
    cResult[1] = toLocaleUpperCaseResult;
    tmp9 = toLocaleUpperCaseResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.titleText) {
    const obj3 = { variant: "heading-md/extrabold", style: titleText, children: tmp9 };
    const tmp15 = map1(CheckpointTextDefault, obj3);
    cResult[2] = tmp4.titleText;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.title) {
    let tmp16;
    let tmp18;
    let tmp20;
    if (cResult[5] === tmp12) {
      tmp16 = cResult[6];
    }
    if (cResult[7] !== title) {
      const toLocaleUpperCaseResult1 = title.toLocaleUpperCase();
      cResult[7] = title;
      cResult[8] = toLocaleUpperCaseResult1;
      tmp18 = toLocaleUpperCaseResult1;
    } else {
      tmp18 = cResult[8];
    }
    if (cResult[9] !== tmp18) {
      const obj4 = { variant: "display-lg", children: tmp18 };
      const tmp23 = map1(CheckpointTextDefault, obj4);
      cResult[9] = tmp18;
      cResult[10] = tmp23;
      tmp20 = tmp23;
    } else {
      tmp20 = cResult[10];
    }
    if (cResult[11] === tmp4.heading) {
      if (cResult[12] === tmp20) {
        let tmp24;
        let tmp28;
        if (cResult[13] === tmp16) {
          tmp24 = cResult[14];
        }
        if (cResult[15] !== description) {
          const obj5 = { variant: "heading-lg/medium", children: description };
          const tmp31 = map1(CheckpointTextDefault, obj5);
          cResult[15] = description;
          cResult[16] = tmp31;
          tmp28 = tmp31;
        } else {
          tmp28 = cResult[16];
        }
        if (cResult[17] === tmp4.header) {
          if (cResult[18] === tmp24) {
            let tmp32;
            if (cResult[19] === tmp28) {
              tmp32 = cResult[20];
            }
            return tmp32;
          }
        }
        const obj6 = { style: header, children: items };
        items = [tmp24, tmp28];
        const tmp35 = syncedClientThemes(metroImportDefault, obj6);
        cResult[17] = tmp4.header;
        cResult[18] = tmp24;
        cResult[19] = tmp28;
        cResult[20] = tmp35;
        tmp32 = tmp35;
      }
    }
    const obj7 = { style: heading, children: items1 };
    items1 = [tmp16, tmp20];
    const tmp27 = syncedClientThemes(metroImportDefault, obj7);
    cResult[11] = tmp4.heading;
    cResult[12] = tmp20;
    cResult[13] = tmp16;
    cResult[14] = tmp27;
    tmp24 = tmp27;
  }
  const obj8 = { style: title2, children: items2 };
  items2 = [first, tmp12];
  const tmp17 = syncedClientThemes(metroImportDefault, obj8);
  cResult[4] = tmp4.title;
  cResult[5] = tmp12;
  cResult[6] = tmp17;
  tmp16 = tmp17;
}) : (function FriendsHeader(title) {
  let items;
  let items1;
  let items2;
  let stringResult;
  title = title.title;
  const description = title.description;
  const tmp = closure_18();
  const obj3 = { style: tmp.title, children: items };
  items = [, ];
  const obj = { style: tmp.header, children: items2 };
  const obj2 = { style: tmp.heading, children: items1 };
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items[0] = map1(FriendsIcon.FriendsIcon, obj4);
  const obj5 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2 = CheckpointTextDefault;
  const intl = intl7.intl;
  stringResult = intl.string(_modDef3046.ZQakPR);
  items[1] = map1(tmp2, obj5);
  items1 = [syncedClientThemes(metroImportDefault, obj3), ];
  const obj6 = { variant: "display-lg", children: title.toLocaleUpperCase() };
  const tmp3 = CheckpointTextDefault;
  items1[1] = map1(tmp3, obj6);
  items2 = [syncedClientThemes(metroImportDefault, obj2), map1(CheckpointTextDefault, { variant: "heading-lg/medium", children: description })];
  return syncedClientThemes(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function SidekickStats(sidekick) {
  let flag;
  let items;
  let items1;
  let items2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp19;
  let tmp23;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(35);
  sidekick = sidekick.sidekick;
  const tmp4 = closure_18();
  if (cResult[0] !== sidekick.numMessagesSent) {
    const _Math = Math;
    const rounded = Math.round(sidekick.numMessagesSent);
    cResult[0] = sidekick.numMessagesSent;
    cResult[1] = rounded;
    tmp5 = rounded;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === sidekick.numVoiceMinutes) {
      if (cResult[4] === tmp4.stat) {
        let tmp31;
        let tmp35;
        if (cResult[5] === tmp4.stats) {
          tmp8 = cResult[6];
          tmp9 = cResult[7];
          tmp10 = cResult[8];
          tmp11 = cResult[9];
          flag = cResult[10];
          tmp12 = cResult[11];
          tmp13 = cResult[12];
          tmp14 = cResult[13];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp10 + " " + tmp11;
        const _Symbol = Symbol;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "md", color: CHECKPOINT_PRIMARY };
          const tmp34 = map1(MicrophoneIcon.MicrophoneIcon, obj2);
          cResult[21] = tmp34;
          tmp31 = tmp34;
        } else {
          tmp31 = cResult[21];
        }
        if (cResult[22] !== tmp14) {
          const obj3 = { value: tmp14 };
          const tmp38 = map1(CheckpointStatNumberDefault, obj3);
          cResult[22] = tmp14;
          cResult[23] = tmp38;
          tmp35 = tmp38;
        } else {
          tmp35 = cResult[23];
        }
        if (cResult[24] === tmp8) {
          if (cResult[25] === tmp4.stat) {
            if (cResult[26] === flag) {
              if (cResult[27] === combined) {
                let tmp39;
                if (cResult[28] === tmp35) {
                  tmp39 = cResult[29];
                }
                if (cResult[30] === tmp9) {
                  if (cResult[31] === tmp39) {
                    if (cResult[32] === tmp12) {
                      let tmp42;
                      if (cResult[33] === tmp13) {
                        tmp42 = cResult[34];
                      }
                      return tmp42;
                    }
                  }
                }
                const obj4 = { style: tmp12, children: items };
                items = [tmp13, tmp39];
                const tmp44 = syncedClientThemes(tmp9, obj4);
                cResult[30] = tmp9;
                cResult[31] = tmp39;
                cResult[32] = tmp12;
                cResult[33] = tmp13;
                cResult[34] = tmp44;
                tmp42 = tmp44;
              }
            }
          }
        }
        const obj5 = { accessible: flag, accessibilityLabel: combined, style: tmp4.stat, children: items1 };
        items1 = [tmp31, tmp35];
        const tmp41 = syncedClientThemes(tmp8, obj5);
        cResult[24] = tmp8;
        cResult[25] = tmp4.stat;
        cResult[26] = flag;
        cResult[27] = combined;
        cResult[28] = tmp35;
        cResult[29] = tmp41;
        tmp39 = tmp41;
      }
    }
  }
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const intl = tmp(1128).intl;
  const stringResult = intl.string(_modDef3046.wWKySP);
  const intl2 = tmp(1128).intl;
  const stats = tmp4.stats;
  const formatToPlainStringResult = intl2.formatToPlainString(_modDef3046.UZbUtl, { numMinutes: rounded1 });
  const combined1 = "" + tmp5 + " " + stringResult.toLocaleLowerCase();
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { size: "md", color: CHECKPOINT_PRIMARY };
    const tmp22 = map1(ChatIcon.ChatIcon, obj6);
    cResult[14] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[14];
  }
  if (cResult[15] !== tmp5) {
    const obj7 = { value: tmp5 };
    const tmp25 = map1(CheckpointStatNumberDefault, obj7);
    cResult[15] = tmp5;
    cResult[16] = tmp25;
    tmp23 = tmp25;
  } else {
    tmp23 = cResult[16];
  }
  if (cResult[17] === tmp4.stat) {
    if (cResult[18] === combined1) {
      let tmp26;
      if (cResult[19] === tmp23) {
        tmp26 = cResult[20];
      }
      const toLocaleLowerCaseResult = formatToPlainStringResult.toLocaleLowerCase();
      cResult[2] = tmp5;
      cResult[3] = sidekick.numVoiceMinutes;
      cResult[4] = tmp4.stat;
      cResult[5] = tmp4.stats;
      cResult[6] = metroImportDefault;
      cResult[7] = metroImportDefault;
      cResult[8] = rounded1;
      cResult[9] = toLocaleLowerCaseResult;
      cResult[10] = true;
      cResult[11] = stats;
      cResult[12] = tmp26;
      cResult[13] = rounded1;
      tmp13 = tmp26;
      tmp14 = rounded1;
      tmp12 = stats;
      flag = true;
      tmp11 = toLocaleLowerCaseResult;
      tmp10 = rounded1;
      tmp9 = tmp17;
      tmp8 = tmp17;
    }
  }
  const obj8 = { accessible: true, accessibilityLabel: combined1, style: tmp4.stat, children: items2 };
  items2 = [tmp19, tmp23];
  const tmp27 = syncedClientThemes(metroImportDefault, obj8);
  cResult[17] = tmp4.stat;
  cResult[18] = combined1;
  cResult[19] = tmp23;
  cResult[20] = tmp27;
  tmp26 = tmp27;
}) : (function SidekickStats(sidekick) {
  let items;
  let items1;
  let items2;
  sidekick = sidekick.sidekick;
  const tmp = closure_18();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const intl = intl7.intl;
  const stringResult = intl.string(_modDef3046.wWKySP);
  const intl2 = intl7.intl;
  const obj = { style: tmp.stats, children: items1 };
  const formatToPlainStringResult = intl2.formatToPlainString(_modDef3046.UZbUtl, { numMinutes: rounded1 });
  const obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + stringResult.toLocaleLowerCase(), style: tmp.stat, children: items };
  items = [, ];
  const obj3 = { size: "md", color: CHECKPOINT_PRIMARY };
  items[0] = map1(ChatIcon.ChatIcon, obj3);
  items[1] = map1(CheckpointStatNumberDefault, { value: rounded });
  items1 = [syncedClientThemes(metroImportDefault, obj2), ];
  const obj4 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + formatToPlainStringResult.toLocaleLowerCase(), style: tmp.stat, children: items2 };
  items2 = [, ];
  const obj5 = { size: "md", color: CHECKPOINT_PRIMARY };
  items2[0] = map1(MicrophoneIcon.MicrophoneIcon, obj5);
  items2[1] = map1(CheckpointStatNumberDefault, { value: rounded1 });
  items1[1] = syncedClientThemes(metroImportDefault, obj4);
  return syncedClientThemes(metroImportDefault, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointFriendsStatsScreen.tsx");

export default tmp7;
