// Module ID: 7849
// Function ID: 7850
// Name: StartStageChannelActionSheet
// Dependencies: [5, 32, 19, 17, 2056, 5727, 1086, 2057, 21, 4837, 588, 558, 576, 504, 5735, 1253, 5297, 1882, 7850, 4801, 4737, 7859, 1127, 4833, 6021, 7862, 5282, 6572, 6546, 2]

// Module 7849 (StartStageChannelActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5727 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, c5, channel, dependencyMap;

let Fonts;
let c10;
let c9;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ MAX_STAGE_TOPIC_LENGTH: c9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c10 } = StageChannelsConstants);
({ AnalyticEvents: unpackModuleId, Fonts } = Constants);
let closure_12 = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, startButton: { marginTop: 16 }, buttonSubtitle: { paddingTop: 8, textAlign: "center" }, ageVerificationNotice: obj2, error: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: 8, fontSize: 12, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_15 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let first1;
  let intl10;
  let items1;
  let items2;
  let obj4;
  let obj5;
  let tmp11;
  let tmp13;
  let tmp7;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(62);
  channel = channel.channel;
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function y() {
      return StageInstanceStore.getStageInstanceByChannel(channel.id);
    };
    cResult[1] = channel.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  let obj3 = react;
  let str;
  const useState = react.useState;
  if (stateFromStores != null) {
    str = stateFromStores.topic;
  }
  if (str == null) {
    str = "";
  }
  [first1, tmp11] = useState(str);
  [tmp13, dependencyMap] = _slicedToArray(obj3.useState(false), 2);
  const tmp12 = _slicedToArray(obj3.useState(false), 2);
  [obj4, _asyncToGenerator] = _slicedToArray(obj3.useState(null), 2);
  const tmp14 = _slicedToArray(obj3.useState(null), 2);
  const tmpResult2 = tmp(5735);
  const shouldAgeVerifyToSpeakForCurrentUser = tmpResult2.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  if (cResult[3] === channel.guild_id) {
    let tmp18;
    let id;
    const tmp16 = cResult[4];
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (tmp16 === id) {
      tmp18 = cResult[5];
    }
    stateFromStores(5297)(tmp18);
    if (cResult[6] === channel) {
      if (cResult[7] === stateFromStores) {
        let tmp22;
        let tmp24;
        let tmp27;
        if (cResult[8] === first1) {
          tmp22 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = closure_13(stateFromStores(7859), {});
          cResult[10] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[10];
        }
        if (cResult[11] !== stateFromStores) {
          let stringResult;
          if (null == stateFromStores) {
            const intl2 = tmp(1127).intl;
            stringResult = intl2.string(tmp(1127).t.DDF0cJ);
          } else {
            const intl = tmp(1127).intl;
            stringResult = intl.string(tmp(1127).t["5BKP4y"]);
          }
          cResult[11] = stateFromStores;
          cResult[12] = stringResult;
          tmp27 = stringResult;
        } else {
          tmp27 = cResult[12];
        }
        if (cResult[13] === tmp4.headerTitle) {
          let tmp29;
          let tmp32;
          if (cResult[14] === tmp27) {
            tmp29 = cResult[15];
          }
          if (cResult[16] !== stateFromStores) {
            let stringResult1;
            if (null == stateFromStores) {
              const intl4 = tmp(1127).intl;
              stringResult1 = intl4.string(tmp(1127).t.bqQIwa);
            } else {
              const intl3 = tmp(1127).intl;
              stringResult1 = intl3.string(tmp(1127).t["I+9bLx"]);
            }
            cResult[16] = stateFromStores;
            cResult[17] = stringResult1;
            tmp32 = stringResult1;
          } else {
            tmp32 = cResult[17];
          }
          if (cResult[18] === tmp4.headerSubtitle) {
            let tmp34;
            if (cResult[19] === tmp32) {
              tmp34 = cResult[20];
            }
            if (cResult[21] === tmp4.header) {
              if (cResult[22] === tmp29) {
                let tmp37;
                let tmp41;
                let tmp43;
                let tmp45;
                if (cResult[23] === tmp34) {
                  tmp37 = cResult[24];
                }
                if (cResult[25] !== stateFromStores) {
                  let stringResult2;
                  if (null == stateFromStores) {
                    const intl5 = tmp(1127).intl;
                    stringResult2 = intl5.string(tmp(1127).t.gR66jX);
                  }
                  cResult[25] = stateFromStores;
                  cResult[26] = stringResult2;
                  tmp41 = stringResult2;
                } else {
                  tmp41 = cResult[26];
                }
                const _Symbol2 = Symbol;
                const container = tmp4.container;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl6 = tmp(1127).intl;
                  const stringResult3 = intl6.string(tmp(1127).t["5FPBOB"]);
                  cResult[27] = stringResult3;
                  tmp43 = stringResult3;
                } else {
                  tmp43 = cResult[27];
                }
                const _Symbol3 = Symbol;
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl7 = tmp(1127).intl;
                  const stringResult4 = intl7.string(tmp(1127).t.ZwWruY);
                  cResult[28] = stringResult4;
                  tmp45 = stringResult4;
                } else {
                  tmp45 = cResult[28];
                }
                if (cResult[29] === tmp22) {
                  let tmp47;
                  let tmp51;
                  if (cResult[30] === first1) {
                    tmp47 = cResult[31];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    const fn2 = function z() {
                      const obj = stateFromStores(dependencyMap[19]);
                      return obj.hideActionSheet(closure_1_10);
                    };
                    cResult[32] = fn2;
                    tmp51 = fn2;
                  } else {
                    tmp51 = cResult[32];
                  }
                  if (cResult[33] === channel.id) {
                    let tmp52;
                    if (cResult[34] === tmp4.ageVerificationNotice) {
                      tmp52 = cResult[35];
                    }
                    if (cResult[36] === obj4) {
                      let tmp55;
                      let tmp58;
                      if (cResult[37] === tmp4.error) {
                        tmp55 = cResult[38];
                      }
                      if (cResult[39] !== stateFromStores) {
                        let stringResult5;
                        if (null == stateFromStores) {
                          const intl9 = tmp(1127).intl;
                          stringResult5 = intl9.string(tmp(1127).t.s8mM8A);
                        } else {
                          const intl8 = tmp(1127).intl;
                          stringResult5 = intl8.string(tmp(1127).t.K344S7);
                        }
                        cResult[39] = stateFromStores;
                        cResult[40] = stringResult5;
                        tmp58 = stringResult5;
                      } else {
                        tmp58 = cResult[40];
                      }
                      if (cResult[41] === tmp22) {
                        if (cResult[42] === tmp41) {
                          if (cResult[43] === tmp13) {
                            if (cResult[44] === tmp58) {
                              let tmp61;
                              if (cResult[45] === "" === first1) {
                                tmp61 = cResult[46];
                              }
                              if (cResult[47] === tmp4.startButton) {
                                let tmp64;
                                if (cResult[48] === tmp61) {
                                  tmp64 = cResult[49];
                                }
                                if (cResult[50] === tmp41) {
                                  if (cResult[51] === shouldAgeVerifyToSpeakForCurrentUser) {
                                    let tmp68;
                                    if (cResult[52] === tmp4.buttonSubtitle) {
                                      tmp68 = cResult[53];
                                    }
                                    if (cResult[54] === tmp37) {
                                      if (cResult[55] === tmp4.container) {
                                        if (cResult[56] === tmp47) {
                                          if (cResult[57] === tmp52) {
                                            if (cResult[58] === tmp55) {
                                              if (cResult[59] === tmp64) {
                                                let tmp71;
                                                if (cResult[60] === tmp68) {
                                                  tmp71 = cResult[61];
                                                }
                                                return tmp71;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    let obj2 = { keyboardShouldPersistTaps: "always", children: closure_14(tmp(6546).SafeAreaPaddingView, obj5) };
                                    BottomSheet = tmp(6572).BottomSheet;
                                    obj5 = { bottom: true, style: container, children: items1 };
                                    items1 = [tmp37, tmp47, tmp52, tmp55, tmp64, tmp68];
                                    const tmp74 = closure_13(BottomSheet, obj2);
                                    cResult[54] = tmp37;
                                    cResult[55] = tmp4.container;
                                    cResult[56] = tmp47;
                                    cResult[57] = tmp52;
                                    cResult[58] = tmp55;
                                    cResult[59] = tmp64;
                                    cResult[60] = tmp68;
                                    cResult[61] = tmp74;
                                    tmp71 = tmp74;
                                  }
                                }
                                let tmp69 = null != tmp41 && !shouldAgeVerifyToSpeakForCurrentUser;
                                if (tmp69) {
                                  let obj6 = { accessible: false, style: tmp4.buttonSubtitle, variant: "text-xs/medium", color: "text-default", children: intl10.string(tmp(1127).t.gR66jX) };
                                  const Text2 = tmp(4833).Text;
                                  intl10 = tmp(1127).intl;
                                  tmp69 = closure_13(Text2, obj6);
                                }
                                cResult[50] = tmp41;
                                cResult[51] = shouldAgeVerifyToSpeakForCurrentUser;
                                cResult[52] = tmp4.buttonSubtitle;
                                cResult[53] = tmp69;
                                tmp68 = tmp69;
                              }
                              let obj7 = { style: tmp4.startButton, children: tmp61 };
                              const tmp67 = closure_13(View, obj7);
                              cResult[47] = tmp4.startButton;
                              cResult[48] = tmp61;
                              cResult[49] = tmp67;
                              tmp64 = tmp67;
                            }
                          }
                        }
                      }
                      let obj8 = { text: tmp58, onPress: tmp22, disabled: "" === first1, loading: tmp13, accessibilityHint: tmp41 };
                      const tmp63 = closure_13(tmp(5282).Button, obj8);
                      cResult[41] = tmp22;
                      cResult[42] = tmp41;
                      cResult[43] = tmp13;
                      cResult[44] = tmp58;
                      cResult[45] = "" === first1;
                      cResult[46] = tmp63;
                      tmp61 = tmp63;
                    }
                    let tmp56 = null;
                    if (null != obj4) {
                      const obj9 = { style: tmp4.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj4.getAnyErrorMessage() };
                      const Text = tmp(4833).Text;
                      tmp56 = closure_13(Text, obj9);
                    }
                    cResult[36] = obj4;
                    cResult[37] = tmp4.error;
                    cResult[38] = tmp56;
                    tmp55 = tmp56;
                  }
                  const obj10 = { onConfirmPress: tmp51, style: tmp4.ageVerificationNotice, channelId: channel.id };
                  const tmp54 = closure_13(stateFromStores(7862), obj10);
                  cResult[33] = channel.id;
                  cResult[34] = tmp4.ageVerificationNotice;
                  cResult[35] = tmp54;
                  tmp52 = tmp54;
                }
                const obj11 = { label: tmp43, maxLength, value: first1, placeholder: tmp45, onChange: tmp11, autoFocus: true, returnKeyType: "done", clearable: true, onSubmitEditing: tmp22 };
                const tmp50 = closure_13(tmp(6021).TextInput, obj11);
                cResult[29] = tmp22;
                cResult[30] = first1;
                cResult[31] = tmp50;
                tmp47 = tmp50;
              }
            }
            const obj12 = { style: tmp4.header, children: items2 };
            items2 = [tmp24, tmp29, tmp34];
            const tmp40 = closure_14(View, obj12);
            cResult[21] = tmp4.header;
            cResult[22] = tmp29;
            cResult[23] = tmp34;
            cResult[24] = tmp40;
            tmp37 = tmp40;
          }
          const obj13 = { style: tmp4.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: tmp32 };
          const tmp36 = closure_13(tmp(4833).Text, obj13);
          cResult[18] = tmp4.headerSubtitle;
          cResult[19] = tmp32;
          cResult[20] = tmp36;
          tmp34 = tmp36;
        }
        const obj14 = { style: tmp4.headerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp27 };
        const tmp31 = closure_13(tmp(4833).Text, obj14);
        cResult[13] = tmp4.headerTitle;
        cResult[14] = tmp27;
        cResult[15] = tmp31;
        tmp29 = tmp31;
      }
    }
    let closure_0 = _asyncToGenerator(async function(arg0, value) {
      let closure_2;
      let tmp28Result;
      let v0;
      let v1;
      if (c5 === 2) {
        c5 = 3;
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
          let aPIError;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_1 = tmp;
              closure_0 = undefined;
              aPIError = undefined;
              if ("" !== tmp40.trim()) {
                c3(true);
                c4(null);
                const obj4 = first1(dependencyMap[17]);
                const result = obj4.dismissGlobalKeyboard();
                c3 = 1;
                if (null != closure_1) {
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: tmp28Result.editStage(closure_0, tmp40, constants.GUILD_ONLY), done: false };
                  tmp28Result = first1(dependencyMap[18]);
                  return obj6;
                } else {
                  const tmp28Result2 = first1(dependencyMap[18]);
                  c4 = 2;
                  c5 = 1;
                  const obj7 = { value: tmp28Result2.startStage(closure_0, tmp40, constants.GUILD_ONLY, false), done: false };
                  return obj7;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_0 = tmp40;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(dependencyMap[20]).APIError(closure_0);
            c4(aPIError);
            c3(false);
          } else {
            if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            const obj2 = stateFromStores(dependencyMap[19]);
            obj2.hideActionSheet(closure_2_10);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp40) {
          if (0 === c3) {
            c5 = 3;
            throw tmp40;
          } else {
            c4 = 1;
          }
        }
      }
    });
    function handleSave() {
      return closure_0(...arguments);
    }
    cResult[6] = channel;
    cResult[7] = stateFromStores;
    cResult[8] = first1;
    cResult[9] = handleSave;
    tmp22 = handleSave;
  }
  cResult[3] = channel.guild_id;
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  class A {
    constructor() {
      let id;
      const track = AnalyticsUtilsDefault.track;
      const START_STAGE_OPENED = unpackModuleId.START_STAGE_OPENED;
      AnalyticsUtilsDefault;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const obj = { stage_instance_id: id, can_start_public_stage: false, guild_id: channel.guild_id };
      track(START_STAGE_OPENED, obj);
    }
  }
  cResult[4] = id1;
  cResult[5] = A;
  tmp18 = A;
}) : ((channel) => {
  let Button;
  let _undefined;
  let c3;
  let c4;
  let intl10;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let obj12;
  let obj3;
  let stringResult;
  let stringResult1;
  let stringResult3;
  let tmp9;
  channel = channel.channel;
  let value;
  dependencyMap = undefined;
  c4 = undefined;
  let obj = function _handleSave2() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      let closure_2;
      let tmp28Result;
      if (c5 === 2) {
        c5 = 3;
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
          let closure_0;
          let aPIError;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = tmp4;
              aPIError = undefined;
              if ("" !== value.trim()) {
                _undefined(true);
                _undefined(null);
                const obj4 = tmp40(c3[17]);
                const result = obj4.dismissGlobalKeyboard();
                c3 = 1;
                if (null != stateFromStores) {
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: tmp28Result.editStage(channel, value, constants.GUILD_ONLY), done: false };
                  tmp28Result = tmp40(c3[18]);
                  return obj6;
                } else {
                  const tmp28Result2 = tmp40(c3[18]);
                  c4 = 2;
                  c5 = 1;
                  const obj7 = { value: tmp28Result2.startStage(channel, value, constants.GUILD_ONLY, false), done: false };
                  return obj7;
                }
              }
            }
          } else {
            let tmp;
            if (1 === c4) {
              c3 = 0;
              tmp = tmp40;
              const self = this;
              const self2 = this;
              aPIError = new closure_0(c3[20]).APIError(tmp);
              closure_129_4(aPIError);
              closure_129_3(false);
            } else {
              if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              }
              const obj2 = tmp(c3[19]);
              obj2.hideActionSheet(closure_1_10);
              c3 = 0;
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp40) {
          if (0 === c3) {
            c5 = 3;
            throw tmp40;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_15();
  const tmp3 = dependencyMap;
  obj = channel(504);
  const items = [StageInstanceStore];
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id));
  let obj2 = react;
  let str;
  const useState = react.useState;
  if (stateFromStores != null) {
    str = stateFromStores.topic;
  }
  if (str == null) {
    str = "";
  }
  const tmp5 = obj(useState(str), 2);
  value = tmp5[0];
  const tmp7 = tmp5[1];
  [tmp9, c3] = obj(obj2.useState(false), 2);
  const tmp8 = obj(obj2.useState(false), 2);
  [obj3, c4] = obj(obj2.useState(null), 2);
  const tmp10 = obj(obj2.useState(null), 2);
  const tmp2Result = channel(5735);
  const shouldAgeVerifyToSpeakForCurrentUser = tmp2Result.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  stateFromStores(5297)(() => {
    let id;
    const track = AnalyticsUtilsDefault.track;
    const START_STAGE_OPENED = unpackModuleId.START_STAGE_OPENED;
    AnalyticsUtilsDefault;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj = { stage_instance_id: id, can_start_public_stage: false, guild_id: channel.guild_id };
    track(START_STAGE_OPENED, obj);
  });
  let obj4 = { style: tmp.header, children: items1 };
  items1 = [closure_13(stateFromStores(7859), {}), , ];
  let obj5 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult };
  const Text = tmp2(4833).Text;
  const tmp12 = stateFromStores;
  if (null == stateFromStores) {
    const intl2 = tmp2(1127).intl;
    stringResult = intl2.string(tmp2(1127).t.DDF0cJ);
  } else {
    const intl = tmp2(1127).intl;
    stringResult = intl.string(tmp2(1127).t["5BKP4y"]);
  }
  items1[1] = closure_13(Text, obj5);
  let obj6 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: stringResult1 };
  const Text2 = tmp2(4833).Text;
  if (null == stateFromStores) {
    const intl4 = tmp2(1127).intl;
    stringResult1 = intl4.string(tmp2(1127).t.bqQIwa);
  } else {
    const intl3 = tmp2(1127).intl;
    stringResult1 = intl3.string(tmp2(1127).t["I+9bLx"]);
  }
  items1[2] = closure_13(Text2, obj6);
  let stringResult2;
  const tmp14Result = closure_14(View, obj4);
  if (null == stateFromStores) {
    const intl5 = tmp2(1127).intl;
    stringResult2 = intl5.string(tmp2(1127).t.gR66jX);
  }
  function handleSave() {
    return obj(...arguments);
  }
  BottomSheet = tmp2(6572).BottomSheet;
  let obj7 = { bottom: true, style: tmp.container, children: items2 };
  items2 = [tmp14Result, , , , , ];
  const SafeAreaPaddingView = tmp2(6546).SafeAreaPaddingView;
  let obj8 = { label: intl6.string(tmp2(1127).t["5FPBOB"]), maxLength, value, placeholder: intl7.string(tmp2(1127).t.ZwWruY), onChange: tmp7, autoFocus: true, returnKeyType: "done", clearable: true, onSubmitEditing: handleSave };
  const TextInput = tmp2(6021).TextInput;
  intl6 = tmp2(1127).intl;
  intl7 = tmp2(1127).intl;
  items2[1] = closure_13(TextInput, obj8);
  const obj9 = {
    onConfirmPress() {
      obj = stateFromStores(c3[19]);
      return obj.hideActionSheet(closure_1_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  };
  items2[2] = closure_13(tmp12(7862), obj9);
  let tmp16Result = null;
  if (null != obj3) {
    const obj10 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj3.getAnyErrorMessage() };
    const Text3 = tmp2(4833).Text;
    tmp16Result = tmp16(Text3, obj10);
  }
  items2[3] = tmp16Result;
  const obj11 = { style: tmp.startButton, children: closure_13(Button, obj12) };
  Button = tmp2(5282).Button;
  if (null == stateFromStores) {
    const intl9 = tmp2(1127).intl;
    stringResult3 = intl9.string(tmp2(1127).t.s8mM8A);
  } else {
    const intl8 = tmp2(1127).intl;
    stringResult3 = intl8.string(tmp2(1127).t.K344S7);
  }
  obj12 = { text: stringResult3, onPress: handleSave, disabled: "" === value, loading: tmp9, accessibilityHint: stringResult2 };
  items2[4] = closure_13(View, obj11);
  let tmp16Result2 = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
  if (tmp16Result2) {
    const obj13 = { accessible: false, style: tmp.buttonSubtitle, variant: "text-xs/medium", color: "text-default", children: intl10.string(channel(1127).t.gR66jX) };
    const Text4 = tmp2(4833).Text;
    intl10 = tmp2(1127).intl;
    tmp16Result2 = tmp16(Text4, obj13);
  }
  items2[5] = tmp16Result2;
  const obj14 = { keyboardShouldPersistTaps: "always", children: closure_14(SafeAreaPaddingView, obj7) };
  return closure_13(BottomSheet, obj14);
});
let result = size.fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default tmp6;
