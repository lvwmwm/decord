// Module ID: 12478
// Function ID: 12479
// Name: AcceptInvite
// Dependencies: [109, 32, 19, 17, 1085, 21, 5092, 587, 1388, 558, 576, 4818, 6666, 12479, 12483, 1415, 1450, 12488, 1497, 6156, 6181, 2]

// Module 12478 (AcceptInvite)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1450 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useToken from "useToken" /* 4818 */;
import FastImageDefault from "FastImage" /* 6156 */;
import Card_Card from "Card/Card" /* 6181 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6666 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c10;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function getInviteState(invite) {
  let state1;
  if (invite != null) {
    state1 = invite.state;
  }
  let tmp2 = null == state1;
  if (tmp2) {
    let channel;
    if (invite != null) {
      channel = invite.channel;
    }
    tmp2 = null == channel;
  }
  if (null != invite) {
    if (null != invite.state) {
      if (!tmp2) {
        const state = invite.state;
        if (InviteStates.RESOLVED !== state) {
          if (InviteStates.ACCEPTED !== state) {
            if (InviteStates.EXPIRED !== state) {
              if (InviteStates.BANNED !== state) {
                if (InviteStates.ERROR !== state) {
                  if (InviteStates.RESOLVING !== state) {
                    if (InviteStates.APP_NOT_OPENED !== state) {
                      if (InviteStates.APP_OPENED !== state) {
                        if (InviteStates.APP_OPENING !== state) {
                          if (InviteStates.ACCEPTING !== state) {
                            const obj = GlobalUtils;
                            obj.assertNever(state);
                          }
                        }
                      }
                    }
                  }
                  return constants.LOADING;
                }
              }
            }
            return constants.ERROR;
          }
        }
        return constants.DETAILS;
      }
    }
  }
  return constants.LOADING;
}
let closure_3 = ["invite"];
({ ActivityIndicator: metroImportDefault, View: metroImportAll, StyleSheet } = react_native);
const InviteStates = Constants.InviteStates;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { parentContainer: obj2, imageStyle: obj3, cardContainer: obj4, cardContent: { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }, resolvingContainer: { padding: 64 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: 0, resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = createStyles(obj);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteResolving() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = closure_12();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  if (cResult[0] !== token) {
    const obj3 = { color: token, size: "large" };
    const tmp7 = authStore(metroImportDefault, obj3);
    cResult[0] = token;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp2.resolvingContainer) {
    let tmp8;
    if (cResult[3] === tmp4) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj4 = { style: tmp2.resolvingContainer, children: tmp4 };
  const tmp9 = authStore(metroImportAll, obj4);
  cResult[2] = tmp2.resolvingContainer;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function InviteResolving() {
  let obj3;
  const tmp = closure_12();
  const obj2 = { style: tmp.resolvingContainer, children: authStore(metroImportDefault, obj3) };
  const obj = useToken;
  obj3 = { color: obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  return authStore(metroImportAll, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function AcceptInviteCardComponent(invite) {
  let closure_2;
  let first;
  let tmp3;
  let tmp = dependencyMap;
  let obj = invite(576);
  const cResult = obj.c(14);
  invite = invite.invite;
  if (cResult[0] !== invite) {
    const tmp5 = getInviteState(invite);
    cResult[0] = invite;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  [first, dependencyMap] = react.useState(tmp3);
  const obj2 = react;
  if (cResult[2] === first) {
    let tmp8;
    let tmp9;
    if (cResult[3] === invite) {
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    const effect = obj2.useEffect(tmp8, tmp9);
    if (null == invite) {
      let tmp34;
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp37 = closure_10(closure_15, {});
        cResult[6] = tmp37;
        tmp34 = tmp37;
      } else {
        tmp34 = cResult[6];
      }
      return tmp34;
    } else if (constants.DETAILS === first) {
      if (cResult[7] === invite) {
        let tmp25;
        if (cResult[8] === invite) {
          tmp25 = cResult[9];
        }
        return tmp25;
      }
      const obj3 = { invite };
      const tmp28 = first(12479);
      const merged = Object.assign(invite);
      const tmp32 = closure_10(tmp28, obj3);
      cResult[7] = invite;
      cResult[8] = invite;
      cResult[9] = tmp32;
      tmp25 = tmp32;
    } else if (tmp38.ERROR === first) {
      if (cResult[10] === invite) {
        let tmp17;
        if (cResult[11] === invite) {
          tmp17 = cResult[12];
        }
        return tmp17;
      }
      const obj4 = { invite };
      const tmp20 = first(12483);
      const merged1 = Object.assign(invite);
      const tmp24 = closure_10(tmp20, obj4);
      cResult[10] = invite;
      cResult[11] = invite;
      cResult[12] = tmp24;
      tmp17 = tmp24;
    } else {
      let tmp13;
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = closure_10(closure_15, {});
        cResult[13] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[13];
      }
      return tmp13;
    }
  }
  const fn = function u() {
    const tmp = getInviteState(invite);
    if (tmp !== first) {
      const obj = DeprecatedLayoutAnimation;
      const result = obj.DeprecatedLayoutAnimation();
      closure_2(tmp);
    }
  };
  const items = [invite, first];
  cResult[2] = first;
  cResult[3] = invite;
  cResult[4] = fn;
  cResult[5] = items;
  tmp9 = items;
  tmp8 = fn;
}) : (function AcceptInviteCardComponent(invite) {
  let closure_2;
  let first;
  invite = invite.invite;
  [first, dependencyMap] = react.useState(getInviteState(invite));
  const items = [invite, first];
  const effect = react.useEffect(() => {
    const tmp = getInviteState(invite);
    if (tmp !== first) {
      const obj = DeprecatedLayoutAnimation;
      const result = obj.DeprecatedLayoutAnimation();
      closure_2(tmp);
    }
  }, items);
  if (null == invite) {
    return closure_10(closure_15, {});
  } else if (constants.DETAILS === first) {
    const obj2 = { invite };
    const tmp16 = first(12479);
    const merged = Object.assign(invite);
    return closure_10(tmp16, obj2);
  } else if (tmp22.ERROR === first) {
    let obj = { invite };
    const tmp9 = first(12483);
    const merged1 = Object.assign(invite);
    return closure_10(tmp9, obj);
  } else {
    return closure_10(closure_15, {});
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function AcceptInvite(invite) {
  let guildSplashSource;
  let height;
  let items;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmpResult;
  let width;
  const obj = react2;
  const cResult = obj.c(42);
  if (cResult[0] !== invite) {
    invite = invite.invite;
    const tmp8 = _objectWithoutProperties(invite, closure_3);
    cResult[0] = invite;
    cResult[1] = invite;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = invite;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_12();
  ({ height, width } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  if (cResult[3] !== tmp4) {
    let obj2 = tmp4;
    if (tmp4 == null) {
      obj2 = {};
    }
    cResult[3] = tmp4;
    cResult[4] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[4];
  }
  const guild = tmp12.guild;
  if (cResult[5] === guild) {
    let tmp14;
    if (cResult[6] === width) {
      tmp14 = cResult[7];
    }
    if (cResult[8] === height) {
      let tmp18;
      if (cResult[9] === width) {
        tmp18 = cResult[10];
      }
      if (cResult[11] === tmp9.parentContainer) {
        let tmp19;
        if (cResult[12] === tmp18) {
          tmp19 = cResult[13];
        }
        if (cResult[14] === height) {
          let tmp20;
          if (cResult[15] === width) {
            tmp20 = cResult[16];
          }
          if (cResult[17] === height) {
            let tmp21;
            if (cResult[18] === width) {
              tmp21 = cResult[19];
            }
            if (cResult[20] === tmp9.imageStyle) {
              let tmp22;
              if (cResult[21] === tmp21) {
                tmp22 = cResult[22];
              }
              if (cResult[23] === tmp14) {
                let tmp23;
                if (cResult[24] === tmp22) {
                  tmp23 = cResult[25];
                }
                if (cResult[26] === tmp20) {
                  let tmp26;
                  if (cResult[27] === tmp23) {
                    tmp26 = cResult[28];
                  }
                  if (cResult[29] === tmp4) {
                    let tmp30;
                    if (cResult[30] === tmp5) {
                      tmp30 = cResult[31];
                    }
                    if (cResult[32] === tmp9.cardContent) {
                      let tmp37;
                      if (cResult[33] === tmp30) {
                        tmp37 = cResult[34];
                      }
                      if (cResult[35] === tmp9.cardContainer) {
                        let tmp41;
                        if (cResult[36] === tmp37) {
                          tmp41 = cResult[37];
                        }
                        if (cResult[38] === tmp41) {
                          if (cResult[39] === tmp19) {
                            let tmp44;
                            if (cResult[40] === tmp26) {
                              tmp44 = cResult[41];
                            }
                            return tmp44;
                          }
                        }
                        const obj4 = { style: tmp19, children: items };
                        items = [tmp26, tmp41];
                        const tmp47 = unpackModuleId(metroImportAll, obj4);
                        cResult[38] = tmp41;
                        cResult[39] = tmp19;
                        cResult[40] = tmp26;
                        cResult[41] = tmp47;
                        tmp44 = tmp47;
                      }
                      const obj5 = { style: tmp9.cardContainer, children: tmp37 };
                      const tmp43 = authStore(Card_Card.Card, obj5);
                      cResult[35] = tmp9.cardContainer;
                      cResult[36] = tmp37;
                      cResult[37] = tmp43;
                      tmp41 = tmp43;
                    }
                    const obj6 = { style: tmp9.cardContent, children: tmp30 };
                    const tmp40 = authStore(metroImportAll, obj6);
                    cResult[32] = tmp9.cardContent;
                    cResult[33] = tmp30;
                    cResult[34] = tmp40;
                    tmp37 = tmp40;
                  }
                  const obj7 = { invite: tmp4 };
                  const merged = Object.assign(tmp5);
                  const tmp36 = authStore(closure_16, obj7);
                  cResult[29] = tmp4;
                  cResult[30] = tmp5;
                  cResult[31] = tmp36;
                  tmp30 = tmp36;
                }
                const obj8 = { style: tmp20, children: tmp23 };
                const tmp29 = authStore(metroImportAll, obj8);
                cResult[26] = tmp20;
                cResult[27] = tmp23;
                cResult[28] = tmp29;
                tmp26 = tmp29;
              }
              const obj9 = { source: tmp14, style: tmp22 };
              const tmp25 = authStore(FastImageDefault, obj9);
              cResult[23] = tmp14;
              cResult[24] = tmp22;
              cResult[25] = tmp25;
              tmp23 = tmp25;
            }
            const items1 = [tmp9.imageStyle, tmp21];
            cResult[20] = tmp9.imageStyle;
            cResult[21] = tmp21;
            cResult[22] = items1;
            tmp22 = items1;
          }
          size = { height, width };
          cResult[17] = height;
          cResult[18] = width;
          cResult[19] = size;
          tmp21 = size;
        }
        const size1 = { height, width };
        cResult[14] = height;
        cResult[15] = width;
        cResult[16] = size1;
        tmp20 = size1;
      }
      const items2 = [tmp9.parentContainer, tmp18];
      cResult[11] = tmp9.parentContainer;
      cResult[12] = tmp18;
      cResult[13] = items2;
      tmp19 = items2;
    }
    const size2 = { height, width };
    cResult[8] = height;
    cResult[9] = width;
    cResult[10] = size2;
    tmp18 = size2;
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null == splash) {
    guildSplashSource = tmp10(12488);
  } else {
    ({ id: obj3.id, splash: obj3.splash } = guild);
    const obj10 = { id: null, splash: null, size: width * tmpResult.getDevicePixelRatio() };
    const getGuildSplashSource = AvatarUtilsDefault.getGuildSplashSource;
    AvatarUtilsDefault;
    tmpResult = ImageLoaderUtils;
    guildSplashSource = getGuildSplashSource(obj10);
  }
  cResult[5] = guild;
  cResult[6] = width;
  cResult[7] = guildSplashSource;
  tmp14 = guildSplashSource;
}) : (function AcceptInvite(invite) {
  let guildSplashSource;
  let height;
  let items;
  let items1;
  let items2;
  let obj16;
  let obj3;
  let obj7;
  let obj9;
  let width;
  invite = invite.invite;
  const merged = Object.assign(invite, Object.assign({ invite: 0 }));
  const tmp2 = closure_12();
  ({ height, width } = useWindowDimensionsDefault());
  let obj = invite;
  useWindowDimensionsDefault();
  if (invite == null) {
    obj = {};
  }
  const guild = obj.guild;
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null == splash) {
    guildSplashSource = tmp3(12488);
  } else {
    ({ id: obj2.id, splash: obj2.splash } = guild);
    const obj4 = { id: null, splash: null, size: width * obj3.getDevicePixelRatio() };
    const getGuildSplashSource = AvatarUtilsDefault.getGuildSplashSource;
    AvatarUtilsDefault;
    obj3 = ImageLoaderUtils;
    guildSplashSource = getGuildSplashSource(obj4);
  }
  const obj5 = { style: items, children: items2 };
  items = [tmp2.parentContainer, { height, width }];
  const obj6 = { style: { height, width }, children: authStore(FastImageDefault, obj7) };
  obj7 = { source: guildSplashSource, style: items1 };
  items1 = [tmp2.imageStyle, { height, width }];
  items2 = [authStore(metroImportAll, obj6), ];
  const obj8 = { style: tmp2.cardContainer, children: authStore(metroImportAll, obj9) };
  obj9 = { style: tmp2.cardContent, children: authStore(closure_16, obj16) };
  obj16 = { invite };
  const Card = Card_Card.Card;
  const merged1 = Object.assign(merged);
  items2[1] = authStore(Card, obj8);
  return unpackModuleId(metroImportAll, obj5);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default tmp6;
