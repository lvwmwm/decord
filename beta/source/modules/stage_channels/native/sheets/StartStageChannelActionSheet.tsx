// Module ID: 8705
// Function ID: 8706
// Name: StartStageChannelActionSheet
// Dependencies: [5, 32, 19, 17, 2050, 5665, 1078, 2051, 21, 4790, 580, 558, 568, 504, 5673, 1245, 5235, 1879, 8706, 4757, 4691, 8715, 1119, 4786, 6878, 8718, 5220, 7429, 7403, 2]

// Module 8705 (StartStageChannelActionSheet)
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const StageChannelsConstants = fn(5665);
({ MAX_STAGE_TOPIC_LENGTH: closure_9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c10 } = StageChannelsConstants);
const Constants = fn(1078);
({ AnalyticEvents: closure_11, Fonts } = Constants);
let closure_12 = fn(2051).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { padding: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, startButton: { marginTop: 16 }, buttonSubtitle: { paddingTop: 8, textAlign: "center" }, ageVerificationNotice: { marginBottom: nativeDefault.space.PX_16 }, error: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.error = { paddingTop: 8, fontSize: 12, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingTop: 8, fontSize: 12, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = require("c").c(62);
  channel = channel.channel;
  _require = channel;
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function y() {
      return StageInstanceStore.getStageInstanceByChannel(closure_0.id);
    };
    cResult[1] = channel.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.topic;
  }
  if (str == null) {
    str = "";
  }
  const tmp9 = _slicedToArray(noop.useState(str), 2);
  const first1 = tmp9[0];
  const tmpResult = require("initialize");
  [tmp12, dependencyMap] = noop.useState(false);
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  [obj4, asyncGeneratorStep] = noop.useState(null);
  const tmp13 = _slicedToArray(noop.useState(null), 2);
  const shouldAgeVerifyToSpeakForCurrentUser = require("useStageSpeakingForCurrentUser").useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  if (cResult[3] === channel.guild_id) {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (cResult[4] === id) {
      let tmp16 = cResult[5];
    }
    stateFromStores(5235)(tmp16);
    if (cResult[6] === channel) {
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === first1) {
          let tmp20 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp24 = closure_13(tmp18(8715), {});
          cResult[10] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[10];
        }
        if (cResult[11] !== stateFromStores) {
          if (null == stateFromStores) {
            const intl2 = tmp(1119).intl;
            let stringResult = intl2.string(tmp(1119).t.DDF0cJ);
          } else {
            const intl = tmp(1119).intl;
            stringResult = intl.string(tmp(1119).t["5BKP4y"]);
          }
          cResult[11] = stateFromStores;
          cResult[12] = stringResult;
        } else {
          if (cResult[13] === tmp4.headerTitle) {
            if (cResult[14] === tmp25) {
              let tmp28 = cResult[15];
            }
            if (cResult[16] !== stateFromStores) {
              if (null == stateFromStores) {
                const intl4 = tmp(1119).intl;
                let stringResult1 = intl4.string(tmp(1119).t.bqQIwa);
              } else {
                const intl3 = tmp(1119).intl;
                stringResult1 = intl3.string(tmp(1119).t["I+9bLx"]);
              }
              cResult[16] = stateFromStores;
              cResult[17] = stringResult1;
            } else {
              if (cResult[18] === tmp4.headerSubtitle) {
                if (cResult[19] === tmp31) {
                  let tmp34 = cResult[20];
                }
                if (cResult[21] === tmp4.header) {
                  if (cResult[22] === tmp28) {
                    if (cResult[23] === tmp34) {
                      let tmp37 = cResult[24];
                    }
                    if (cResult[25] !== stateFromStores) {
                      let stringResult2;
                      if (null == stateFromStores) {
                        const intl5 = tmp(1119).intl;
                        stringResult2 = intl5.string(tmp(1119).t.gR66jX);
                      }
                      cResult[25] = stateFromStores;
                      cResult[26] = stringResult2;
                      let tmp41 = stringResult2;
                    } else {
                      tmp41 = cResult[26];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl6 = tmp(1119).intl;
                      const stringResult3 = intl6.string(tmp(1119).t["5FPBOB"]);
                      cResult[27] = stringResult3;
                      let tmp43 = stringResult3;
                    } else {
                      tmp43 = cResult[27];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl7 = tmp(1119).intl;
                      const stringResult4 = intl7.string(tmp(1119).t.ZwWruY);
                      cResult[28] = stringResult4;
                      let tmp45 = stringResult4;
                    } else {
                      tmp45 = cResult[28];
                    }
                    if (cResult[29] === tmp20) {
                      if (cResult[30] === first1) {
                        let tmp47 = cResult[31];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                        const fn2 = function z() {
                          return stateFromStores(4757).hideActionSheet(closure_1_10);
                        };
                        cResult[32] = fn2;
                        let tmp51 = fn2;
                      } else {
                        tmp51 = cResult[32];
                      }
                      if (cResult[33] === channel.id) {
                        if (cResult[34] === tmp4.ageVerificationNotice) {
                          let tmp52 = cResult[35];
                        }
                        if (cResult[36] === obj4) {
                          if (cResult[37] === tmp4.error) {
                            let tmp55 = cResult[38];
                          }
                          if (cResult[39] !== stateFromStores) {
                            if (null == stateFromStores) {
                              const intl9 = tmp(1119).intl;
                              let stringResult5 = intl9.string(tmp(1119).t.s8mM8A);
                            } else {
                              const intl8 = tmp(1119).intl;
                              stringResult5 = intl8.string(tmp(1119).t.K344S7);
                            }
                            cResult[39] = stateFromStores;
                            cResult[40] = stringResult5;
                          } else {
                            if (cResult[41] === tmp20) {
                              if (cResult[42] === tmp41) {
                                if (cResult[43] === tmp12) {
                                  if (cResult[44] === tmp58) {
                                    if (cResult[45] === tmp61) {
                                      let tmp62 = cResult[46];
                                    }
                                    if (cResult[47] === tmp4.startButton) {
                                      if (cResult[48] === tmp62) {
                                        let tmp65 = cResult[49];
                                      }
                                      if (cResult[50] === tmp41) {
                                        if (cResult[51] === shouldAgeVerifyToSpeakForCurrentUser) {
                                          if (cResult[52] === tmp4.buttonSubtitle) {
                                            let tmp69 = cResult[53];
                                          }
                                          if (cResult[54] === tmp37) {
                                            if (cResult[55] === tmp4.container) {
                                              if (cResult[56] === tmp47) {
                                                if (cResult[57] === tmp52) {
                                                  if (cResult[58] === tmp55) {
                                                    if (cResult[59] === tmp65) {
                                                      if (cResult[60] === tmp69) {
                                                        let tmp72 = cResult[61];
                                                      }
                                                      return tmp72;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          let obj2 = { keyboardShouldPersistTaps: "always", children: null };
                                          let obj5 = { bottom: true, style: tmp4.container, children: null };
                                          const items1 = [tmp37, tmp47, tmp52, tmp55, tmp65, tmp69];
                                          obj5.children = items1;
                                          obj2.children = closure_14(tmp(7403).SafeAreaPaddingView, obj5);
                                          const tmp75 = closure_13(tmp(7429).BottomSheet, obj2);
                                          cResult[54] = tmp37;
                                          cResult[55] = tmp4.container;
                                          cResult[56] = tmp47;
                                          cResult[57] = tmp52;
                                          cResult[58] = tmp55;
                                          cResult[59] = tmp65;
                                          cResult[60] = tmp69;
                                          cResult[61] = tmp75;
                                          tmp72 = tmp75;
                                        }
                                      }
                                      let tmp70 = null != tmp41 && !shouldAgeVerifyToSpeakForCurrentUser;
                                      if (tmp70) {
                                        let obj6 = { accessible: false, style: tmp4.buttonSubtitle, variant: "text-xs/medium", color: "text-default", children: null };
                                        const intl10 = tmp(1119).intl;
                                        obj6.children = intl10.string(tmp(1119).t.gR66jX);
                                        tmp70 = closure_13(tmp(4786).Text, obj6);
                                      }
                                      cResult[50] = tmp41;
                                      cResult[51] = shouldAgeVerifyToSpeakForCurrentUser;
                                      cResult[52] = tmp4.buttonSubtitle;
                                      cResult[53] = tmp70;
                                      tmp69 = tmp70;
                                    }
                                    let obj7 = { style: tmp4.startButton, children: tmp62 };
                                    const tmp68 = closure_13(View, obj7);
                                    cResult[47] = tmp4.startButton;
                                    cResult[48] = tmp62;
                                    cResult[49] = tmp68;
                                    tmp65 = tmp68;
                                  }
                                }
                              }
                            }
                            let obj8 = { text: cResult[40], onPress: tmp20, disabled: "" === first1, loading: tmp12, accessibilityHint: tmp41 };
                            const tmp64 = closure_13(tmp(5220).Button, obj8);
                            cResult[41] = tmp20;
                            cResult[42] = tmp41;
                            cResult[43] = tmp12;
                            cResult[44] = cResult[40];
                            cResult[45] = "" === first1;
                            cResult[46] = tmp64;
                            tmp62 = tmp64;
                          }
                        }
                        let tmp56 = null;
                        if (null != obj4) {
                          const obj9 = { style: tmp4.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj4.getAnyErrorMessage() };
                          tmp56 = closure_13(tmp(4786).Text, obj9);
                        }
                        cResult[36] = obj4;
                        cResult[37] = tmp4.error;
                        cResult[38] = tmp56;
                        tmp55 = tmp56;
                      }
                      const obj10 = { onConfirmPress: tmp51, style: tmp4.ageVerificationNotice, channelId: channel.id };
                      const tmp54 = closure_13(tmp18(8718), obj10);
                      cResult[33] = channel.id;
                      cResult[34] = tmp4.ageVerificationNotice;
                      cResult[35] = tmp54;
                      tmp52 = tmp54;
                    }
                    const obj11 = { label: tmp43, maxLength, value: first1, placeholder: tmp45, onChange: tmp9[1], autoFocus: true, returnKeyType: "done", clearable: true, onSubmitEditing: tmp20 };
                    const tmp50 = closure_13(tmp(6878).TextInput, obj11);
                    cResult[29] = tmp20;
                    cResult[30] = first1;
                    cResult[31] = tmp50;
                    tmp47 = tmp50;
                  }
                }
                const obj12 = { style: tmp4.header, children: null };
                const items2 = [tmp22, tmp28, tmp34];
                obj12.children = items2;
                const tmp40 = closure_14(View, obj12);
                cResult[21] = tmp4.header;
                cResult[22] = tmp28;
                cResult[23] = tmp34;
                cResult[24] = tmp40;
                tmp37 = tmp40;
              }
              const obj13 = { style: tmp4.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: cResult[17] };
              const tmp36 = closure_13(tmp(4786).Text, obj13);
              cResult[18] = tmp4.headerSubtitle;
              cResult[19] = cResult[17];
              cResult[20] = tmp36;
              tmp34 = tmp36;
            }
          }
          const obj14 = { style: tmp4.headerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: cResult[12] };
          const tmp30 = closure_13(tmp(4786).Text, obj14);
          cResult[13] = tmp4.headerTitle;
          cResult[14] = cResult[12];
          cResult[15] = tmp30;
          tmp28 = tmp30;
        }
      }
    }
    _require = asyncGeneratorStep(async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if ("" !== tmp45.trim()) {
                v0(true);
                v2(null);
                const result = first1(1879).dismissGlobalKeyboard();
                v0 = 1;
                if (null != closure_1) {
                  v2 = 3;
                  c5 = 1;
                  const obj6 = { value: tmp33(8706).editStage(closure_0, tmp53, constants.GUILD_ONLY), done: false };
                  return obj6;
                } else {
                  const tmp33Result2 = tmp33(8706);
                  v2 = 2;
                  c5 = 1;
                  const obj7 = { value: tmp33Result2.startStage(closure_0, tmp53, constants.GUILD_ONLY, false), done: false };
                  return obj7;
                }
                const obj4 = first1(1879);
              }
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              closure_128_0 = tmp45;
              const aPIError = new closure_0(4691).APIError(closure_128_0);
              closure_128_1 = aPIError;
              v2(closure_128_1);
              v0(false);
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              }
              stateFromStores(4757).hideActionSheet(v65535);
              v0 = 0;
              const obj2 = stateFromStores(4757);
            }
            v0 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
          c5 = 3;
        } catch (tmp45) {
          if (tmp4 === v0) {
            c5 = tmp2;
            throw tmp45;
          } else {
            v2 = tmp;
          }
        }
      }
    });
    function handleSave() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[6] = channel;
    cResult[7] = stateFromStores;
    cResult[8] = first1;
    cResult[9] = handleSave;
    tmp20 = handleSave;
  }
  cResult[3] = channel.guild_id;
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  class A {
    constructor() {
      obj = closure_1(closure_3[15]);
      id = undefined;
      if (closure_1 != null) {
        id = closure_1.id;
      }
      obj1 = { stage_instance_id: id, can_start_public_stage: false, guild_id: closure_0.guild_id };
      trackResult = obj.track(AnalyticEvents.START_STAGE_OPENED, obj1);
      return;
    }
  }
  cResult[4] = id1;
  cResult[5] = A;
  tmp16 = A;
}) : ((channel) => {
  channel = channel.channel;
  value = undefined;
  dependencyMap = undefined;
  c4 = undefined;
  _slicedToArray = async function _handleSave2(noop, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (noop === 1) {
        throw value;
      } else if (noop === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (noop === 1) {
            c5 = 3;
            throw value;
          } else if (noop === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            channel = tmp7;
            closure_128_0 = undefined;
            if ("" !== importAll.trim()) {
              _undefined(true);
              asyncGeneratorStep(null);
              const result = tmp45(1879).dismissGlobalKeyboard();
              dependencyMap = 1;
              if (null != stateFromStores) {
                c4 = 3;
                c5 = 1;
                const obj6 = { value: tmp33(8706).editStage(channel, tmp53, constants.GUILD_ONLY), done: false };
                return obj6;
              } else {
                const tmp33Result2 = tmp33(8706);
                c4 = 2;
                c5 = 1;
                const obj7 = { value: tmp33Result2.startStage(channel, tmp53, constants.GUILD_ONLY, false), done: false };
                return obj7;
              }
              const obj4 = tmp45(1879);
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = tmp45;
            const aPIError = new channel(4691).APIError(closure_128_1);
            closure_128_0 = aPIError;
            closure_129_4(closure_128_0);
            closure_129_3(false);
          } else {
            if (2 === tmp7) {
              if (noop === 1) {
                c5 = 3;
                throw value;
              }
            } else if (noop === 1) {
              c5 = 3;
              throw value;
            } else if (noop === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            tmp3(4757).hideActionSheet(closure_1_10);
            dependencyMap = 0;
            const obj2 = tmp3(4757);
          }
          dependencyMap = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
        c5 = 3;
      } catch (tmp45) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp45;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_15();
  const items = [StageInstanceStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id));
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.topic;
  }
  if (str == null) {
    str = "";
  }
  [value, obj8.onChange] = noop.useState(str);
  let obj = channel(504);
  [tmp8, c3] = _slicedToArray(noop.useState(false), 2);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  [obj3, c4] = _slicedToArray(noop.useState(null), 2);
  const tmp9 = _slicedToArray(noop.useState(null), 2);
  const shouldAgeVerifyToSpeakForCurrentUser = channel(5673).useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  stateFromStores(5235)(() => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    AnalyticsUtilsDefault.track(constants.START_STAGE_OPENED, { stage_instance_id: id, can_start_public_stage: false, guild_id: channel.guild_id });
  });
  let obj4 = { style: tmp.header, children: null };
  const items1 = [closure_13(stateFromStores(8715), {}), , ];
  let obj5 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  if (null == stateFromStores) {
    const intl2 = tmp2(1119).intl;
    let stringResult = intl2.string(tmp2(1119).t.DDF0cJ);
  } else {
    const intl = tmp2(1119).intl;
    stringResult = intl.string(tmp2(1119).t["5BKP4y"]);
  }
  obj5.children = stringResult;
  items1[1] = closure_13(channel(4786).Text, obj5);
  let obj6 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  if (null == stateFromStores) {
    const intl4 = tmp2(1119).intl;
    let stringResult1 = intl4.string(tmp2(1119).t.bqQIwa);
  } else {
    const intl3 = tmp2(1119).intl;
    stringResult1 = intl3.string(tmp2(1119).t["I+9bLx"]);
  }
  obj6.children = stringResult1;
  items1[2] = closure_13(channel(4786).Text, obj6);
  obj4.children = items1;
  let stringResult2;
  const tmp11 = stateFromStores;
  const tmp2Result = channel(5673);
  if (null == stateFromStores) {
    const intl5 = tmp2(1119).intl;
    stringResult2 = intl5.string(tmp2(1119).t.gR66jX);
  }
  function handleSave() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj7 = { bottom: true, style: tmp.container, children: null };
  const items2 = [closure_14(View, obj4), , , , , ];
  let obj8 = { label: null, maxLength: null, value: null, placeholder: null, onChange: null, autoFocus: true, returnKeyType: "done", clearable: true, onSubmitEditing: null };
  const intl6 = tmp2(1119).intl;
  obj8.label = intl6.string(channel(1119).t["5FPBOB"]);
  obj8.maxLength = maxLength;
  obj8.value = value;
  const intl7 = tmp2(1119).intl;
  obj8.placeholder = intl7.string(channel(1119).t.ZwWruY);
  obj8.onSubmitEditing = handleSave;
  items2[1] = closure_13(channel(6878).TextInput, obj8);
  items2[2] = closure_13(tmp11(8718), {
    onConfirmPress() {
      return stateFromStores(_undefined[19]).hideActionSheet(closure_1_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  });
  let tmp15Result = null;
  if (null != obj3) {
    const obj10 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj3.getAnyErrorMessage() };
    tmp15Result = tmp15(tmp2(4786).Text, obj10);
  }
  items2[3] = tmp15Result;
  const obj11 = { style: tmp.startButton, children: null };
  if (null == stateFromStores) {
    const intl9 = tmp2(1119).intl;
    let stringResult3 = intl9.string(tmp2(1119).t.s8mM8A);
  } else {
    const intl8 = tmp2(1119).intl;
    stringResult3 = intl8.string(tmp2(1119).t.K344S7);
  }
  obj11.children = closure_13(channel(5220).Button, { text: stringResult3, onPress: handleSave, disabled: "" === value, loading: tmp8, accessibilityHint: stringResult2 });
  items2[4] = closure_13(View, obj11);
  let tmp15Result2 = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
  if (tmp15Result2) {
    const obj13 = { accessible: false, style: tmp.buttonSubtitle, variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp2(1119).intl;
    obj13.children = intl10.string(tmp2(1119).t.gR66jX);
    tmp15Result2 = tmp15(tmp2(4786).Text, obj13);
  }
  const obj12 = { text: stringResult3, onPress: handleSave, disabled: "" === value, loading: tmp8, accessibilityHint: stringResult2 };
  const obj9 = {
    onConfirmPress() {
      return stateFromStores(_undefined[19]).hideActionSheet(closure_1_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  };
  const tmp13Result = closure_14(View, obj4);
  items2[5] = tmp15Result2;
  obj7.children = items2;
  return closure_13(channel(7429).BottomSheet, { keyboardShouldPersistTaps: "always", children: closure_14(channel(7403).SafeAreaPaddingView, obj7) });
});
