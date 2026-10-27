// Module ID: 13031
// Function ID: 13032
// Name: CheckpointFriendsStatsScreen
// Dependencies: [5, 32, 19, 17, 4973, 1389, 12968, 6016, 21, 1382, 4972, 587, 1414, 558, 576, 504, 13032, 13033, 1496, 5026, 6365, 5112, 12986, 1125, 3089, 3057, 12988, 5667, 13005, 8542, 12996, 11648, 13034, 12969, 5663, 1199, 10448, 7280, 12897, 5681, 2]

// Module 13031 (CheckpointFriendsStatsScreen)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1125 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _modDef3057 from "module_3057" /* 3057 */;
import _modDef3089 from "module_3089" /* 3089 */;
import UserUtils from "UserUtils" /* 5026 */;
import CheckpointFriendsRive2 from "CheckpointFriendsRive" /* 5112 */;
import FriendsIcon from "FriendsIcon" /* 5667 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6365 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7280 */;
import ChatIcon from "ChatIcon" /* 8542 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10448 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11648 */;
import CheckpointTextDefault from "CheckpointText" /* 12986 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12988 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12996 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13005 */;
import useFriendsAnimationState from "useFriendsAnimationState" /* 13032 */;
import useSidekickLeave from "useSidekickLeave" /* 13033 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import UserStore from "UserStore" /* 1389 */;
import CheckpointStore from "CheckpointStore" /* 12968 */;
import CheckpointConstants from "CheckpointConstants" /* 6016 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
                obj2 = tmp(closure_2[33]);
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
              const presentError = tmp(closure_2[34]).presentError;
              const tmp16 = tmp(closure_2[34]);
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
  const tmp = closure_17();
  [value, tmp3] = react.useState(undefined);
  dependencyMap = tmp3;
  [tmp5, c3] = _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp7, c4] = _slicedToArray(react.useState(false), 2);
  let tmp10 = null != value;
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const tmp9 = value(13034)(user.id);
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
    const TextInput = user(1199).TextInput;
    if (!tmp5) {
      tmp16 = !tmp7;
    }
    let intl = tmp15(1125).intl;
    if (tmp5) {
      stringResult = intl.string(tmp15(1125).t.fjcCk5);
    } else {
      let obj3 = { name: username };
      stringResult = intl.formatToPlainString(tmp15(1125).t["0ZQw/X"], obj3);
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
      accessibilityLabel: intl2.string(tmp15(1125).t.Ve9Ge6),
      children: tmp14(tmp15(12897).GiftIcon, obj6)
    };
    intl2 = tmp15(1125).intl;
    obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    items1 = [tmp14(obj, obj5), ];
    const obj7 = {
      onPress: function handleSend() {
          return obj(...arguments);
        },
      disabled: !tmp10,
      style: disabled,
      accessibilityRole: "button",
      accessibilityLabel: intl3.string(user(1125).t.oeb1vg),
      accessibilityState: obj8,
      children: closure_13(user(5681).SendMessageIcon, obj9)
    };
    disabled = undefined;
    const tmp19 = obj;
    const tmp20 = CHECKPOINT_PRIMARY;
    if (!tmp10) {
      disabled = tmp.disabled;
    }
    intl3 = tmp15(1125).intl;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointFriendsStatsScreen(arg0) {
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let items6;
  let onNextStep;
  let onPreviousStep;
  let route;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp21;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp6;
  let tmp7;
  let tmp83;
  let tmp9;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(66);
  ({ route, onNextStep, onPreviousStep } = arg0);
  const tmp4 = closure_17();
  const items = [CheckpointStore];
  const obj2 = get_initialized;
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
    const fn = function o() {
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
  const tmpResult = get_initialized;
  const stateFromStores1 = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class R {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = items2;
    cResult[3] = R;
    tmp10 = R;
    tmp9 = items2;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult9 = get_initialized;
  const stateFromStores2 = tmpResult9.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    class R {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[4] = items3;
    cResult[5] = tmp16;
    tmp14 = tmp16;
    tmp13 = items3;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult10 = get_initialized;
  const stateFromStores3 = tmpResult10.useStateFromStores(tmp13, tmp14);
  const tmpResult11 = useFriendsAnimationState;
  const friendsAnimationState = tmpResult11.useFriendsAnimationState(route, stateFromStores3);
  const tmpResult12 = useSidekickLeave;
  const sidekickLeave = tmpResult12.useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep);
  const tmp20 = friendsAnimationState === useFriendsAnimationState.FriendsAnimationState.BEST || friendsAnimationState === useFriendsAnimationState.FriendsAnimationState.LEAVE;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { ignoreKeyboard: true };
    cResult[6] = obj3;
    class R {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
  } else {
    tmp21 = cResult[6];
  }
  size = useWindowDimensionsDefault(tmp21);
  const height = size.height;
  let num8 = 0;
  const width = size.width;
  const result = -height / 2;
  if (tmp20) {
    num8 = tmp22(587).space.PX_48;
  }
  const diff = result - num8;
  const sum = width + height;
  if (cResult[7] === diff) {
    let tmp26;
    let tmp32;
    let tmp34;
    let tmp36;
    let str5;
    if (cResult[8] === sum) {
      tmp26 = cResult[9];
    }
    class R {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    [tmp29, tmp30, tmp31] = tmp28;
    const tmpResult13 = UserUtils;
    let str = tmpResult13.useName(tmp29);
    if (str == null) {
      str = "";
    }
    if (cResult[10] !== str) {
      const toLocaleUpperCaseResult = str.toLocaleUpperCase();
      cResult[10] = str;
      class R {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[11] = toLocaleUpperCaseResult;
      tmp32 = toLocaleUpperCaseResult;
    } else {
      tmp32 = cResult[11];
    }
    const tmpResult14 = UserUtils;
    let str2 = tmpResult14.useName(tmp30);
    if (str2 == null) {
      str2 = "";
    }
    if (cResult[12] !== str2) {
      const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
      cResult[12] = str2;
      class R {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[13] = toLocaleUpperCaseResult1;
      tmp34 = toLocaleUpperCaseResult1;
    } else {
      tmp34 = cResult[13];
    }
    const tmpResult15 = UserUtils;
    let str3 = tmpResult15.useName(tmp31);
    if (str3 == null) {
      str3 = "";
    }
    if (cResult[14] !== str3) {
      const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
      cResult[14] = str3;
      class R {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[15] = toLocaleUpperCaseResult2;
      tmp36 = toLocaleUpperCaseResult2;
    } else {
      tmp36 = cResult[15];
    }
    let user;
    const useName = UserUtils.useName;
    UserUtils;
    if (stateFromStores1 != null) {
      user = stateFromStores1.user;
    }
    let str4 = useName(user);
    if (str4 == null) {
      str4 = "";
    }
    const tmp41 = route === CheckpointNavigation.CheckpointRoute.SIDEKICK || route === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE;
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
    if (cResult[16] === tmp26) {
      let tmp43;
      let tmp44;
      let tmp48;
      let tmp54;
      let tmp58;
      let tmp62;
      if (cResult[17] === tmp4.animation) {
        tmp43 = cResult[18];
      }
      if (cResult[19] !== tmp29) {
        let userAvatarURL;
        if (null != tmp29) {
          const tmp22Result = AvatarUtilsDefault;
          class R {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          userAvatarURL = tmp22Result.getUserAvatarURL(tmp29, false, 64, "png");
        }
        class R {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[20] = userAvatarURL;
        tmp44 = userAvatarURL;
      } else {
        tmp44 = cResult[20];
      }
      if (cResult[21] !== tmp31) {
        let userAvatarURL1;
        if (null != tmp31) {
          const tmp22Result5 = AvatarUtilsDefault;
          class R {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          userAvatarURL1 = tmp22Result5.getUserAvatarURL(tmp31, false, 64, "png");
        }
        class R {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[22] = userAvatarURL1;
        tmp48 = userAvatarURL1;
      } else {
        tmp48 = cResult[22];
      }
      class R {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      let user1;
      if (stateFromStores1 != null) {
        user1 = stateFromStores1.user;
      }
      if (cResult[25] !== user1) {
        let userAvatarURL2;
        if (null != user1) {
          const tmp22Result6 = AvatarUtilsDefault;
          class R {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          userAvatarURL2 = tmp22Result6.getUserAvatarURL(user1, false, 64, "png");
        }
        class R {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[26] = userAvatarURL2;
        tmp54 = userAvatarURL2;
      } else {
        tmp54 = cResult[26];
      }
      if (cResult[27] !== stateFromStores2) {
        let userAvatarURL3;
        if (null != stateFromStores2) {
          const tmp22Result7 = AvatarUtilsDefault;
          class R {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          userAvatarURL3 = tmp22Result7.getUserAvatarURL(stateFromStores2, false, 64, "png");
        }
        class R {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[28] = userAvatarURL3;
        tmp58 = userAvatarURL3;
      } else {
        tmp58 = cResult[28];
      }
      if (cResult[29] !== str4) {
        const toLocaleUpperCaseResult3 = str4.toLocaleUpperCase();
        cResult[29] = str4;
        class R {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[30] = toLocaleUpperCaseResult3;
        tmp62 = toLocaleUpperCaseResult3;
      } else {
        tmp62 = cResult[30];
      }
      if (cResult[31] === friendsAnimationState) {
        if (cResult[32] === tmp32) {
          if (cResult[33] === tmp34) {
            if (cResult[34] === tmp44) {
              if (cResult[35] === tmp48) {
                if (cResult[36] === tmp52) {
                  if (cResult[37] === tmp54) {
                    if (cResult[38] === tmp58) {
                      if (cResult[39] === tmp62) {
                        if (cResult[40] === tmp36) {
                          let tmp64;
                          if (cResult[41] === stateFromStores.length < 3) {
                            tmp64 = cResult[42];
                          }
                          if (cResult[43] === str5) {
                            let tmp68;
                            if (cResult[44] === tmp64) {
                              tmp68 = cResult[45];
                            }
                            if (cResult[46] === tmp43) {
                              let tmp73;
                              if (cResult[47] === tmp68) {
                                tmp73 = cResult[48];
                              }
                              if (cResult[49] === route) {
                                let tmp76;
                                let tmp78;
                                if (cResult[50] === tmp4.transition) {
                                  tmp76 = cResult[51];
                                }
                                if (cResult[52] !== route) {
                                  let tmp79 = route === tmp(6365).CheckpointRoute.SQUAD;
                                  if (tmp79) {
                                    const obj4 = { title: obj20.string(_modDef3057.OzY5Ns), description: intl.string(_modDef3089.EqdLDd) };
                                    class R {
                                      constructor() {
                                        return currentUser.getCurrentUser();
                                      }
                                    }
                                    intl = tmp(1125).intl;
                                    tmp79 = map1(closure_18, obj4);
                                  }
                                  class R {
                                    constructor() {
                                      return currentUser.getCurrentUser();
                                    }
                                  }
                                  cResult[53] = tmp79;
                                  tmp78 = tmp79;
                                } else {
                                  tmp78 = cResult[53];
                                }
                                if (cResult[54] === tmp41) {
                                  if (cResult[55] === stateFromStores1) {
                                    if (cResult[56] === str4) {
                                      if (cResult[57] === tmp4.sidekick) {
                                        let tmp82;
                                        if (cResult[58] === tmp4.sidekickDetails) {
                                          tmp82 = cResult[59];
                                        }
                                        if (cResult[60] === tmp4.container) {
                                          if (cResult[61] === tmp73) {
                                            if (cResult[62] === tmp76) {
                                              if (cResult[63] === tmp78) {
                                                let tmp90;
                                                if (cResult[64] === tmp82) {
                                                  tmp90 = cResult[65];
                                                }
                                                return tmp90;
                                              }
                                            }
                                          }
                                        }
                                        class R {
                                          constructor() {
                                            return currentUser.getCurrentUser();
                                          }
                                        }
                                        const obj5 = { style: tmp42, children: items4 };
                                        items4 = [tmp73, tmp76, tmp78, tmp82];
                                        const tmp22Result8 = CheckpointScreenDefault;
                                        tmp93[0] = syncedClientThemes(metroImportDefault, obj5);
                                        const tmp96 = map1(tmp22Result8, tmp93);
                                        cResult[60] = tmp4.container;
                                        cResult[61] = tmp73;
                                        cResult[62] = tmp76;
                                        cResult[63] = tmp78;
                                        cResult[64] = tmp82;
                                        cResult[65] = tmp96;
                                        tmp90 = tmp96;
                                      }
                                    }
                                  }
                                }
                                class R {
                                  constructor() {
                                    return currentUser.getCurrentUser();
                                  }
                                }
                                if (tmp83) {
                                  const obj6 = { style: null, children: items6 };
                                  class R {
                                    constructor() {
                                      return currentUser.getCurrentUser();
                                    }
                                  }
                                  const obj7 = { style: tmp4.sidekickDetails, children: items5 };
                                  const obj8 = { title: intl2.string(_modDef3057["+uwOHt"]), description: intl3.string(_modDef3089["/ctmGw"]) };
                                  intl2 = tmp(1125).intl;
                                  intl3 = tmp(1125).intl;
                                  items5 = [map1(closure_18, obj8), ];
                                  const obj9 = { sidekick: stateFromStores1 };
                                  items5[1] = map1(closure_19, obj9);
                                  items6 = [syncedClientThemes(metroImportDefault, obj7), ];
                                  const obj10 = { user: stateFromStores1.user, username: str4 };
                                  items6[1] = map1(SidekickMessageInput, obj10);
                                  tmp83 = syncedClientThemes(metroImportDefault, obj6);
                                }
                                cResult[54] = tmp41;
                                cResult[55] = stateFromStores1;
                                cResult[56] = str4;
                                cResult[57] = tmp4.sidekick;
                                cResult[58] = tmp4.sidekickDetails;
                                cResult[59] = tmp83;
                                tmp82 = tmp83;
                              }
                              const tmp77 = route === CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION;
                              class R {
                                constructor() {
                                  return currentUser.getCurrentUser();
                                }
                              }
                              cResult[49] = route;
                              cResult[50] = tmp4.transition;
                              cResult[51] = tmp77;
                              tmp76 = tmp77;
                            }
                            class R {
                              constructor() {
                                return currentUser.getCurrentUser();
                              }
                            }
                            const obj11 = { style: tmp43, pointerEvents: "none", children: tmp68 };
                            const tmp75 = map1(metroImportDefault, obj11);
                            cResult[46] = tmp43;
                            cResult[47] = tmp68;
                            cResult[48] = tmp75;
                            tmp73 = tmp75;
                          }
                          class R {
                            constructor() {
                              return currentUser.getCurrentUser();
                            }
                          }
                          tmp70[0] = obj;
                          tmp70[1] = str5;
                          tmp70[2] = tmp64;
                          const tmp72 = map1(CheckpointFriendsRive2.CheckpointFriendsRive, tmp70);
                          cResult[43] = str5;
                          cResult[44] = tmp64;
                          cResult[45] = tmp72;
                          tmp68 = tmp72;
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
      const obj12 = { AnimationState: friendsAnimationState, "Avatar01/img": tmp44, "Avatar02/img": tmp48, "Avatar03/img": tmp52, "Avatar04/img": tmp54, "Avatar05/img": tmp58, "Avatar01/Username": tmp32, "Avatar02/Username": tmp36, "Avatar03/Username": tmp34, "Avatar04/Username": tmp62, twoFriends: stateFromStores.length < 3 };
      const merged = Object.assign(closure_15);
      cResult[31] = friendsAnimationState;
      cResult[32] = tmp32;
      cResult[33] = tmp34;
      cResult[34] = tmp44;
      cResult[35] = tmp48;
      cResult[36] = tmp52;
      cResult[37] = tmp54;
      cResult[38] = tmp58;
      cResult[39] = tmp62;
      cResult[40] = tmp36;
      cResult[41] = stateFromStores.length < 3;
      cResult[42] = obj12;
      tmp64 = obj12;
    }
    const items7 = [tmp4.animation, tmp26];
    cResult[16] = tmp26;
    cResult[17] = tmp4.animation;
    cResult[18] = items7;
    tmp43 = items7;
  }
  const obj13 = { top: diff, height: sum };
  cResult[7] = diff;
  cResult[8] = sum;
  cResult[9] = obj13;
  tmp26 = obj13;
}) : (function CheckpointFriendsStatsScreen(arg0) {
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
  let str5;
  let tmp11Result12;
  let tmp14;
  let tmp15;
  let tmp16;
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
  size = width(tmp3[18])({ ignoreKeyboard: true });
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
  [tmp14, tmp15, tmp16] = stateFromStores;
  _slicedToArray(stateFromStores, 3);
  const tmp2Result13 = require("UserUtils");
  let str = tmp2Result13.useName(tmp14);
  if (str == null) {
    str = "";
  }
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  const tmp2Result14 = require("UserUtils");
  let str2 = tmp2Result14.useName(tmp15);
  if (str2 == null) {
    str2 = "";
  }
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  const tmp2Result15 = require("UserUtils");
  let str3 = tmp2Result15.useName(tmp16);
  if (str3 == null) {
    str3 = "";
  }
  let user;
  const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
  const useName = require("UserUtils").useName;
  require("UserUtils");
  if (stateFromStores1 != null) {
    user = stateFromStores1.user;
  }
  let str4 = useName(user);
  if (str4 == null) {
    str4 = "";
  }
  let tmp26Result = route === tmp2(tmp3[20]).CheckpointRoute.SIDEKICK || route === tmp2(tmp3[20]).CheckpointRoute.SIDEKICK_LEAVE;
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
  const obj2 = { style: tmp.container, children: items6 };
  const obj3 = { style: items5, pointerEvents: "none", children: closure_13(CheckpointFriendsRive, obj4) };
  items5 = [tmp.animation, memo];
  obj4 = { referencedAssets, defaultViewModelInstance: str5, dataBinding: obj5 };
  obj5 = { AnimationState: friendsAnimationState, "Avatar01/img": userAvatarURL, "Avatar02/img": userAvatarURL1, "Avatar03/img": userAvatarURL2, "Avatar04/img": userAvatarURL3, "Avatar05/img": userAvatarURL4, "Avatar01/Username": toLocaleUpperCaseResult, "Avatar02/Username": toLocaleUpperCaseResult2, "Avatar03/Username": toLocaleUpperCaseResult1, "Avatar04/Username": str4.toLocaleUpperCase(), twoFriends: stateFromStores.length < 3 };
  const tmp11Result = width(height[26]);
  CheckpointFriendsRive = tmp2(tmp3[21]).CheckpointFriendsRive;
  const merged = Object.assign(closure_15);
  userAvatarURL = undefined;
  if (null != tmp14) {
    let num = 64;
    const tmp11Result7 = width(height[12]);
    userAvatarURL = tmp11Result7.getUserAvatarURL(tmp14, false, 64, "png");
  }
  userAvatarURL1 = undefined;
  if (null != tmp16) {
    const tmp11Result8 = width(height[12]);
    userAvatarURL1 = tmp11Result8.getUserAvatarURL(tmp16, false, 64, "png");
  }
  userAvatarURL2 = undefined;
  if (null != tmp15) {
    const tmp11Result9 = width(height[12]);
    userAvatarURL2 = tmp11Result9.getUserAvatarURL(tmp15, false, 64, "png");
  }
  let user1;
  if (stateFromStores1 != null) {
    user1 = stateFromStores1.user;
  }
  userAvatarURL3 = undefined;
  if (null != user1) {
    const tmp11Result10 = width(height[12]);
    userAvatarURL3 = tmp11Result10.getUserAvatarURL(user1, false, 64, "png");
  }
  userAvatarURL4 = undefined;
  if (null != stateFromStores2) {
    const tmp11Result11 = width(height[12]);
    userAvatarURL4 = tmp11Result11.getUserAvatarURL(stateFromStores2, false, 64, "png");
  }
  items6 = [closure_13(closure_7, obj3), , , ];
  let tmp24Result = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD_TRANSITION;
  if (tmp24Result) {
    const obj6 = { style: tmp.transition, children: closure_13(tmp11Result12, obj7) };
    obj7 = { variant: "heading-lg/medium", children: intl.string(width(height[24])["6RSp5q"]) };
    tmp11Result12 = width(height[22]);
    intl = tmp2(tmp3[23]).intl;
    tmp24Result = tmp24(tmp27, obj6);
  }
  items6[1] = tmp24Result;
  let tmp24Result2 = route === tmp2(tmp3[20]).CheckpointRoute.SQUAD;
  if (tmp24Result2) {
    const obj8 = { title: intl2.string(width(height[25]).OzY5Ns), description: intl3.string(width(height[24]).EqdLDd) };
    intl2 = tmp2(tmp3[23]).intl;
    intl3 = tmp2(tmp3[23]).intl;
    tmp24Result2 = tmp24(closure_18, obj8);
  }
  items6[2] = tmp24Result2;
  if (tmp26Result) {
    tmp26Result = null != stateFromStores1;
  }
  if (tmp26Result) {
    const obj10 = { style: tmp.sidekickDetails, children: items7 };
    const obj9 = { style: tmp.sidekick, children: items8 };
    const obj11 = { title: intl4.string(width(height[25])["+uwOHt"]), description: intl5.string(width(height[24])["/ctmGw"]) };
    intl4 = tmp2(tmp3[23]).intl;
    intl5 = tmp2(tmp3[23]).intl;
    items7 = [closure_13(closure_18, obj11), ];
    const obj12 = { sidekick: stateFromStores1 };
    items7[1] = closure_13(closure_19, obj12);
    items8 = [closure_14(closure_7, obj10), ];
    const obj13 = { user: stateFromStores1.user, username: str4 };
    items8[1] = closure_13(SidekickMessageInput, obj13);
    tmp26Result = tmp26(tmp27, obj9);
  }
  items6[3] = tmp26Result;
  const obj14 = { children: closure_14(closure_7, obj2) };
  return closure_13(tmp11Result, obj14);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function FriendsHeader(arg0) {
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
  const tmp4 = closure_17();
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
    const intl = tmp(1125).intl;
    const stringResult = intl.string(_modDef3057.ZQakPR);
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
      const obj4 = { children: tmp18 };
      const tmp23 = map1(CheckpointDisplayTextDefault, obj4);
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
  const tmp = closure_17();
  const obj3 = { style: tmp.title, children: items };
  items = [, ];
  const obj = { style: tmp.header, children: items2 };
  const obj2 = { style: tmp.heading, children: items1 };
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items[0] = map1(FriendsIcon.FriendsIcon, obj4);
  const obj5 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2 = CheckpointTextDefault;
  const intl = intl6.intl;
  stringResult = intl.string(_modDef3057.ZQakPR);
  items[1] = map1(tmp2, obj5);
  items1 = [syncedClientThemes(metroImportDefault, obj3), ];
  const obj6 = { children: title.toLocaleUpperCase() };
  const tmp3 = CheckpointDisplayTextDefault;
  items1[1] = map1(tmp3, obj6);
  items2 = [syncedClientThemes(metroImportDefault, obj2), map1(CheckpointTextDefault, { variant: "heading-lg/medium", children: description })];
  return syncedClientThemes(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function SidekickStats(sidekick) {
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
  const tmp4 = closure_17();
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
  const intl = tmp(1125).intl;
  const stringResult = intl.string(_modDef3057.wWKySP);
  const intl2 = tmp(1125).intl;
  const stats = tmp4.stats;
  const formatToPlainStringResult = intl2.formatToPlainString(_modDef3057.UZbUtl, { numMinutes: rounded1 });
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
  const tmp = closure_17();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const intl = intl6.intl;
  const stringResult = intl.string(_modDef3057.wWKySP);
  const intl2 = intl6.intl;
  const obj = { style: tmp.stats, children: items1 };
  const formatToPlainStringResult = intl2.formatToPlainString(_modDef3057.UZbUtl, { numMinutes: rounded1 });
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
