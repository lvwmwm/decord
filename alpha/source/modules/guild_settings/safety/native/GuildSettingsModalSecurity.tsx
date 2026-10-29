// Module ID: 19643
// Function ID: 19644
// Name: GuildSettingsModalSecurity
// Dependencies: [19, 17, 4875, 4879, 1389, 9043, 1084, 21, 5005, 587, 558, 576, 504, 9042, 1125, 5271, 5281, 5707, 16562, 5629, 2]

// Module 19643 (GuildSettingsModalSecurity)
import nativeDefault from "native" /* 587 */;
import GuildRecord from "GuildRecord" /* 4875 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9042 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 4879 */;
import UserStore from "UserStore" /* 1389 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9043 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let unpackModuleId;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
let closure_6 = GuildRecord.isGuildOwnerWithRequiredMfaLevel;
({ GuildFeatures: c10, MFALevels: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { wrapper: { flexGrow: 1, justifyContent: "space-between", paddingTop: 99 }, center: obj2, label: { textAlign: "center", marginBottom: 8 }, image: { width: 295, height: 142, marginHorizontal: 35 }, infoWrapper: { marginBottom: 40 }, button: { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 } };
obj2 = { alignItems: "center", flexDirection: "column", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_15 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalSecurity(guildId) {
  let closure_2;
  let first;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let items5;
  let props;
  let tmp10;
  let tmp18;
  let tmp7;
  let tmp9;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(51);
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function p() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsStore];
    const fn2 = function w() {
      return props.getProps().mfaLevel;
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[5] === stateFromStores) {
    if (cResult[6] === stateFromStores1) {
      dependencyMap = cResult[7];
      class B {
        constructor() {
          if (null != stateFromStores) {
            const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
            const obj = GuildSettingsActionCreatorsDefault;
            obj.updateMFALevel(obj2);
          }
        }
      }
    }
    if (cResult[9] === stateFromStores) {
      let tmp22;
      if (cResult[10] === tmp13) {
        tmp22 = cResult[11];
      }
      if (cResult[12] === contentContainerStyle) {
        let tmp23;
        let tmp26;
        let tmp28;
        let tmp31;
        if (cResult[13] === tmp4.wrapper) {
          tmp23 = cResult[14];
        }
        const _Symbol = Symbol;
        class B {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
              const obj = GuildSettingsActionCreatorsDefault;
              obj.updateMFALevel(obj2);
            }
          }
        }
        const label = tmp4.label;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const string = tmp(1125).intl.string;
          class B {
            constructor() {
              if (null != stateFromStores) {
                const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                const obj = GuildSettingsActionCreatorsDefault;
                obj.updateMFALevel(obj2);
              }
            }
          }
          cResult[15] = tmp27;
          tmp26 = tmp27;
        } else {
          tmp26 = cResult[15];
        }
        if (cResult[16] !== tmp4.label) {
          let obj2 = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp26 };
          class B {
            constructor() {
              if (null != stateFromStores) {
                const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                const obj = GuildSettingsActionCreatorsDefault;
                obj.updateMFALevel(obj2);
              }
            }
          }
          const tmp30 = closure_12(tmp(5271).Text, obj2);
          cResult[16] = tmp4.label;
          cResult[17] = tmp30;
          tmp28 = tmp30;
        } else {
          tmp28 = cResult[17];
        }
        if (cResult[18] !== tmp13) {
          let string2Result;
          const intl = tmp(1125).intl;
          const string2 = intl.string;
          class B {
            constructor() {
              if (null != stateFromStores) {
                const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                const obj = GuildSettingsActionCreatorsDefault;
                obj.updateMFALevel(obj2);
              }
            }
          }
          if (tmp13) {
            string2Result = string2(tmp32["MP0Ho+"]);
          } else {
            string2Result = string2(tmp32.yZcYGa);
          }
          cResult[18] = tmp13;
          cResult[19] = string2Result;
          tmp31 = string2Result;
        } else {
          tmp31 = cResult[19];
        }
        let str = "primary";
        if (tmp13) {
          str = "destructive";
        }
        if (cResult[20] === tmp22) {
          if (cResult[21] === tmp31) {
            if (cResult[22] === !tmp18) {
              let tmp35;
              if (cResult[23] === str) {
                tmp35 = cResult[24];
              }
              if (cResult[25] === tmp4.button) {
                let tmp38;
                let features2;
                let tmp43;
                if (cResult[26] === tmp35) {
                  tmp38 = cResult[27];
                }
                class B {
                  constructor() {
                    if (null != stateFromStores) {
                      const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                      const obj = GuildSettingsActionCreatorsDefault;
                      obj.updateMFALevel(obj2);
                    }
                  }
                }
                const tmp41 = cResult[28];
                if (stateFromStores != null) {
                  features2 = stateFromStores.features;
                }
                if (tmp41 !== features2) {
                  let tmp46;
                  if (stateFromStores != null) {
                    const features3 = stateFromStores.features;
                    class B {
                      constructor() {
                        if (null != stateFromStores) {
                          const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                          const obj = GuildSettingsActionCreatorsDefault;
                          obj.updateMFALevel(obj2);
                        }
                      }
                    }
                  }
                  class B {
                    constructor() {
                      if (null != stateFromStores) {
                        const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                        const obj = GuildSettingsActionCreatorsDefault;
                        obj.updateMFALevel(obj2);
                      }
                    }
                  }
                  if (undefined) {
                    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl2.string(tmp(1125).t["KG1V/E"]) };
                    class B {
                      constructor() {
                        if (null != stateFromStores) {
                          const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                          const obj = GuildSettingsActionCreatorsDefault;
                          obj.updateMFALevel(obj2);
                        }
                      }
                    }
                    intl2 = tmp(1125).intl;
                    tmp46 = closure_12(tmp48, obj3);
                  }
                  let features1;
                  if (stateFromStores != null) {
                    features1 = stateFromStores.features;
                  }
                  cResult[28] = features1;
                  cResult[29] = tmp46;
                  tmp43 = tmp46;
                } else {
                  tmp43 = cResult[29];
                }
                if (cResult[30] === tmp4.center) {
                  if (cResult[31] === tmp28) {
                    if (cResult[32] === tmp38) {
                      let tmp50;
                      let tmp54;
                      let tmp60;
                      let tmp64;
                      if (cResult[33] === tmp43) {
                        tmp50 = cResult[34];
                      }
                      if (cResult[35] !== tmp4.image) {
                        class B {
                          constructor() {
                            if (null != stateFromStores) {
                              const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                              const obj = GuildSettingsActionCreatorsDefault;
                              obj.updateMFALevel(obj2);
                            }
                          }
                        }
                        const tmp57 = stateFromStores(5707);
                        tmp58[0] = stateFromStores(16562);
                        tmp58[1] = tmp4.image;
                        const tmp59 = closure_12(tmp57, tmp58);
                        cResult[35] = tmp4.image;
                        cResult[36] = tmp59;
                        tmp54 = tmp59;
                      } else {
                        tmp54 = cResult[36];
                      }
                      class B {
                        constructor() {
                          if (null != stateFromStores) {
                            const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                            const obj = GuildSettingsActionCreatorsDefault;
                            obj.updateMFALevel(obj2);
                          }
                        }
                      }
                      if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj4 = { variant: "text-sm/medium", color: "text-muted", children: intl3.format(tmp(1125).t["FK0+iX"], {}) };
                        class B {
                          constructor() {
                            if (null != stateFromStores) {
                              const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                              const obj = GuildSettingsActionCreatorsDefault;
                              obj.updateMFALevel(obj2);
                            }
                          }
                        }
                        intl3 = tmp(1125).intl;
                        const tmp63 = closure_12(tmp62, obj4);
                        cResult[37] = tmp63;
                        tmp60 = tmp63;
                      } else {
                        tmp60 = cResult[37];
                      }
                      if (cResult[38] !== tmp4.infoWrapper) {
                        class B {
                          constructor() {
                            if (null != stateFromStores) {
                              const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                              const obj = GuildSettingsActionCreatorsDefault;
                              obj.updateMFALevel(obj2);
                            }
                          }
                        }
                        tmp67[0] = tmp4.infoWrapper;
                        tmp67[1] = tmp60;
                        const tmp68 = closure_12(closure_4, tmp67);
                        cResult[38] = tmp4.infoWrapper;
                        cResult[39] = tmp68;
                        tmp64 = tmp68;
                      } else {
                        tmp64 = cResult[39];
                      }
                      if (cResult[40] === tmp4.center) {
                        if (cResult[41] === tmp54) {
                          let tmp69;
                          if (cResult[42] === tmp64) {
                            tmp69 = cResult[43];
                          }
                          if (cResult[44] === tmp50) {
                            if (cResult[45] === tmp69) {
                              let tmp73;
                              let tmp77;
                              let tmp80;
                              if (cResult[46] === tmp23) {
                                tmp73 = cResult[47];
                              }
                              const _Symbol2 = Symbol;
                              class B {
                                constructor() {
                                  if (null != stateFromStores) {
                                    const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                                    const obj = GuildSettingsActionCreatorsDefault;
                                    obj.updateMFALevel(obj2);
                                  }
                                }
                              }
                              if (tmp76 === Symbol.for("react.memo_cache_sentinel")) {
                                const tmp79 = closure_12(tmp(5629).NavScrim, {});
                                class B {
                                  constructor() {
                                    if (null != stateFromStores) {
                                      const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                                      const obj = GuildSettingsActionCreatorsDefault;
                                      obj.updateMFALevel(obj2);
                                    }
                                  }
                                }
                                cResult[48] = tmp79;
                                tmp77 = tmp79;
                              } else {
                                tmp77 = cResult[48];
                              }
                              if (cResult[49] !== tmp73) {
                                class B {
                                  constructor() {
                                    if (null != stateFromStores) {
                                      const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                                      const obj = GuildSettingsActionCreatorsDefault;
                                      obj.updateMFALevel(obj2);
                                    }
                                  }
                                }
                                const items2 = [tmp73, tmp77];
                                tmp83[0] = items2;
                                const tmp84 = closure_13(closure_14, tmp83);
                                cResult[49] = tmp73;
                                cResult[50] = tmp84;
                                tmp80 = tmp84;
                              } else {
                                tmp80 = cResult[50];
                              }
                              return tmp80;
                            }
                          }
                          class B {
                            constructor() {
                              if (null != stateFromStores) {
                                const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                                const obj = GuildSettingsActionCreatorsDefault;
                                obj.updateMFALevel(obj2);
                              }
                            }
                          }
                          const obj5 = { contentContainerStyle: tmp23, alwaysBounceVertical: false, children: items3 };
                          items3 = [tmp50, tmp69];
                          const tmp75 = closure_13(closure_5, obj5);
                          cResult[44] = tmp50;
                          cResult[45] = tmp69;
                          cResult[46] = tmp23;
                          cResult[47] = tmp75;
                          tmp73 = tmp75;
                        }
                      }
                      const obj6 = { style: tmp4.center, children: items4 };
                      items4 = [tmp54, tmp64];
                      const tmp72 = closure_13(closure_4, obj6);
                      cResult[40] = tmp4.center;
                      cResult[41] = tmp54;
                      cResult[42] = tmp64;
                      cResult[43] = tmp72;
                      tmp69 = tmp72;
                    }
                  }
                }
                const obj7 = { style: tmp25, children: items5 };
                items5 = [tmp28, tmp38, tmp43];
                const tmp53 = closure_13(closure_4, obj7);
                cResult[30] = tmp4.center;
                cResult[31] = tmp28;
                cResult[32] = tmp38;
                cResult[33] = tmp43;
                cResult[34] = tmp53;
                tmp50 = tmp53;
              }
              class B {
                constructor() {
                  if (null != stateFromStores) {
                    const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                    const obj = GuildSettingsActionCreatorsDefault;
                    obj.updateMFALevel(obj2);
                  }
                }
              }
              const obj8 = { style: tmp4.button, children: tmp35 };
              const tmp40 = closure_12(closure_4, obj8);
              cResult[25] = tmp4.button;
              cResult[26] = tmp35;
              cResult[27] = tmp40;
              tmp38 = tmp40;
            }
          }
        }
        const obj9 = { text: tmp31, disabled: !tmp18, variant: str, onPress: tmp22, shrink: true };
        const tmp37 = closure_12(tmp(5281).Button, obj9);
        cResult[20] = tmp22;
        cResult[21] = tmp31;
        cResult[22] = !tmp18;
        cResult[23] = str;
        cResult[24] = tmp37;
        tmp35 = tmp37;
      }
      class B {
        constructor() {
          if (null != stateFromStores) {
            const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
            const obj = GuildSettingsActionCreatorsDefault;
            obj.updateMFALevel(obj2);
          }
        }
      }
      tmp24[0] = tmp4.wrapper;
      tmp24[1] = contentContainerStyle;
      cResult[12] = contentContainerStyle;
      cResult[13] = tmp4.wrapper;
      cResult[14] = tmp24;
      tmp23 = tmp24;
    }
    class B {
      constructor() {
        if (null != stateFromStores) {
          const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
          const obj = GuildSettingsActionCreatorsDefault;
          obj.updateMFALevel(obj2);
        }
      }
    }
    cResult[9] = stateFromStores;
    cResult[10] = tmp13;
    cResult[11] = B;
    tmp22 = B;
  }
  const currentUser = UserStore.getCurrentUser();
  dependencyMap = tmp16;
  let mfaEnabled;
  if (currentUser != null) {
    mfaEnabled = currentUser.mfaEnabled;
  }
  tmp18 = true === mfaEnabled && null != stateFromStores && closure_6(stateFromStores, currentUser);
  if (tmp18) {
    if (stateFromStores1 === constants2.ELEVATED) {
      const features = stateFromStores.features;
      class B {
        constructor() {
          if (null != stateFromStores) {
            const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
            const obj = GuildSettingsActionCreatorsDefault;
            obj.updateMFALevel(obj2);
          }
        }
      }
    }
    class B {
      constructor() {
        if (null != stateFromStores) {
          const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
          const obj = GuildSettingsActionCreatorsDefault;
          obj.updateMFALevel(obj2);
        }
      }
    }
  }
  cResult[5] = stateFromStores;
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores1 === constants2.ELEVATED;
  cResult[8] = tmp18;
}) : (function GuildSettingsModalSecurity(guildId) {
  let Button;
  let Text3;
  let closure_2;
  let intl;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj13;
  let obj7;
  let props;
  let str;
  let stringResult;
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp = closure_15();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  const items1 = [GuildSettingsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => props.getProps().mfaLevel);
  const currentUser = UserStore.getCurrentUser();
  dependencyMap = tmp7;
  let mfaEnabled;
  if (currentUser != null) {
    mfaEnabled = currentUser.mfaEnabled;
  }
  let tmp9 = true === mfaEnabled && null != stateFromStores && closure_6(stateFromStores, currentUser);
  if (tmp9) {
    let tmp11 = !tmp7;
    if (stateFromStores1 === constants2.ELEVATED) {
      const features = stateFromStores.features;
      tmp11 = !features.has(constants.DISCOVERABLE);
    }
    tmp9 = tmp11;
  }
  const items2 = [stateFromStores, stateFromStores1 === constants2.ELEVATED];
  const obj3 = { contentContainerStyle: items3, alwaysBounceVertical: false, children: items5 };
  items3 = [tmp.wrapper, contentContainerStyle];
  const obj4 = { style: tmp.center, children: items4 };
  const callback = react.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateMFALevel(obj2);
    }
  }, items2);
  const obj5 = { style: tmp.label, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl.string(guildId(1125).t.Wi9LEV) };
  const Text = tmp2(5271).Text;
  intl = tmp2(1125).intl;
  items4 = [closure_12(Text, obj5), , ];
  const obj6 = { style: tmp.button, children: closure_12(Button, obj7) };
  Button = tmp2(5281).Button;
  const intl2 = tmp2(1125).intl;
  const string = intl2.string;
  const t = tmp2(1125).t;
  const tmp15 = closure_14;
  const tmp16 = closure_5;
  if (stateFromStores1 === constants2.ELEVATED) {
    stringResult = string(t["MP0Ho+"]);
  } else {
    stringResult = string(t.yZcYGa);
  }
  obj7 = { text: stringResult, disabled: !tmp9, variant: str, onPress: callback, shrink: true };
  str = "primary";
  if (stateFromStores1 === constants2.ELEVATED) {
    str = "destructive";
  }
  items4[1] = closure_12(closure_4, obj6);
  let hasItem;
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants.DISCOVERABLE);
  }
  let tmp18Result = null;
  if (hasItem) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(guildId(1125).t["KG1V/E"]) };
    const Text2 = tmp2(5271).Text;
    intl3 = tmp2(1125).intl;
    tmp18Result = tmp18(Text2, obj8);
  }
  const obj9 = { children: items7 };
  items4[2] = tmp18Result;
  items5 = [closure_13(closure_4, obj4), ];
  const obj10 = { style: tmp.center, children: items6 };
  const obj11 = { source: stateFromStores(16562), style: tmp.image, resizeMode: "contain" };
  const tmp23 = stateFromStores(5707);
  items6 = [closure_12(tmp23, obj11), ];
  const obj12 = { style: tmp.infoWrapper, children: closure_12(Text3, obj13) };
  obj13 = { variant: "text-sm/medium", color: "text-muted", children: intl4.format(guildId(1125).t["FK0+iX"], {}) };
  Text3 = tmp2(5271).Text;
  intl4 = tmp2(1125).intl;
  items6[1] = closure_12(closure_4, obj12);
  items5[1] = closure_13(closure_4, obj10);
  items7 = [closure_13(tmp16, obj3), closure_12(tmp2(5629).NavScrim, {})];
  return closure_13(tmp15, obj9);
});
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default tmp5;
