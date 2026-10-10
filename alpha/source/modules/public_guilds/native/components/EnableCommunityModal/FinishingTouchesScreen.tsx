// Module ID: 18420
// Function ID: 18421
// Name: FinishingTouchesScreen
// Dependencies: [32, 19, 17, 8638, 2119, 8064, 1085, 21, 558, 576, 4818, 587, 504, 4755, 8637, 1097, 18362, 18409, 18408, 1126, 5088, 6156, 6895, 18418, 6264, 5377, 2128, 18406, 2]

// Module 18420 (FinishingTouchesScreen)
import react_native from "react-native" /* 17 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8638 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8064 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let everyoneRole, set;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let unpackModuleId;
const View = react_native.View;
({ CREATE_NEW_CHANNEL_VALUE: c9, MODERATOR_PERMISSIONS: c10, MODERATOR_PERMISSIONS_FLAG: unpackModuleId } = PublicGuildsConstants);
({ GuildFeatures: closure_12, HelpdeskArticles: map1, UserNotificationSettings: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function FinishingTouchesScreen() {
  let defaultMessageNotifications;
  let guild;
  let intl2;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj12;
  let props;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp21;
  let tmp22;
  let tmp5Result;
  let tmp5Result2;
  let tmp7;
  let tmp8;
  let tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(59);
  let obj2 = react;
  const ref = react.useRef(null);
  let obj3 = guild(4818);
  const token = obj3.useToken(defaultMessageNotifications(587).modules.mobile.TABLE_ROW_PADDING);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildSettingsStore];
    const fn = function b() {
      return props.getProps();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(504);
  guild = tmpResult.useStateFromStoresObject(tmp7, tmp8).guild;
  let prop;
  const useState = obj2.useState;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  let tmp11 = _slicedToArray;
  defaultMessageNotifications = _slicedToArray(useState(prop), 1)[0];
  const ONLY_MENTIONS = constants2.ONLY_MENTIONS;
  [tmp15, tmp16] = _slicedToArray(obj2.useState(false), 2);
  const tmp14 = _slicedToArray(obj2.useState(false), 2);
  if (cResult[2] !== guild) {
    const someResult = closure_10.some((item) => {
      const obj = PermissionUtilsAll;
      return obj.canEveryone(item, guild);
    });
    cResult[2] = guild;
    cResult[3] = someResult;
    tmp17 = someResult;
  } else {
    tmp17 = cResult[3];
  }
  [tmp21, tmp22] = tmp11(obj2.useState(!tmp17), 2);
  tmp11(obj2.useState(!tmp17), 2);
  const first1 = tmp11(obj2.useState(tmp21), 1)[0];
  let prop1;
  const tmp24 = cResult[4];
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  if (tmp24 === prop1) {
    let tmp26;
    let tmp28;
    let tmp32;
    let tmp34;
    let tmp37;
    let tmp40;
    let tmp42;
    let tmp45;
    let tmp47;
    if (cResult[5] === defaultMessageNotifications) {
      tmp26 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function k(features) {
        let publicUpdatesChannelId;
        let rulesChannelId;
        everyoneRole = undefined;
        if (null != features) {
          everyoneRole = everyoneRole.getEveryoneRole(features);
        }
        if (null != everyoneRole) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(features.features);
          set.add(constants.COMMUNITY);
          const obj3 = BigFlagUtilsAll;
          const removeResult = obj3.remove(everyoneRole.permissions, closure_1_11);
          const obj2 = { permissions: removeResult };
          const merged = Object.assign(everyoneRole);
          const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
          rulesChannelId = features.rulesChannelId;
          const saveGuild = first(dependencyMap[14]).saveGuild;
          const id = features.id;
          first(dependencyMap[14]);
          const tmp11 = dependencyMap;
          if (rulesChannelId == null) {
            rulesChannelId = closure_1_9;
          }
          ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
          if (publicUpdatesChannelId == null) {
            publicUpdatesChannelId = closure_1_9;
          }
          saveGuild(id, obj4);
          if (removeResult !== everyoneRole.permissions) {
            const items = [obj2];
            const obj = guild(tmp11[16]);
            obj.saveRoleSettings(features.id, items);
          }
        }
      };
      cResult[7] = fn2;
      tmp28 = fn2;
    } else {
      tmp28 = cResult[7];
    }
    const tmp29 = defaultMessageNotifications(18409)();
    const tmpResult2 = tmp(18408);
    const enableCommunitySharedStyles = tmpResult2.useEnableCommunitySharedStyles();
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.XGl4ba);
      cResult[8] = stringResult;
      tmp32 = stringResult;
    } else {
      tmp32 = cResult[8];
    }
    const _Symbol3 = Symbol;
    const content = enableCommunitySharedStyles.content;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl2.formatToPlainString(tmp(1126).t.tInpJj, { number: 3, total: 3 }) };
      const Text = tmp(5088).Text;
      intl2 = tmp(1126).intl;
      const tmp36 = closure_15(Text, obj4);
      cResult[9] = tmp36;
      tmp34 = tmp36;
    } else {
      tmp34 = cResult[9];
    }
    if (cResult[10] !== tmp29.finishingTouches) {
      const obj5 = { resizeMode: "contain", source: tmp29.finishingTouches };
      const tmp39 = closure_15(defaultMessageNotifications(6156), obj5);
      cResult[10] = tmp29.finishingTouches;
      cResult[11] = tmp39;
      tmp37 = tmp39;
    } else {
      tmp37 = cResult[11];
    }
    const _Symbol4 = Symbol;
    const header = enableCommunitySharedStyles.header;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t["Pj/s/a"]);
      cResult[12] = stringResult1;
      tmp40 = stringResult1;
    } else {
      tmp40 = cResult[12];
    }
    if (cResult[13] !== enableCommunitySharedStyles.header) {
      const obj6 = { style: header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp40 };
      const tmp44 = closure_15(tmp(5088).Heading, obj6);
      cResult[13] = enableCommunitySharedStyles.header;
      cResult[14] = tmp44;
      tmp42 = tmp44;
    } else {
      tmp42 = cResult[14];
    }
    const _Symbol5 = Symbol;
    const description = enableCommunitySharedStyles.description;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult2 = intl4.string(tmp(1126).t["IL7/no"]);
      cResult[15] = stringResult2;
      tmp45 = stringResult2;
    } else {
      tmp45 = cResult[15];
    }
    if (cResult[16] !== enableCommunitySharedStyles.description) {
      const obj7 = { style: description, variant: "text-md/medium", color: "text-subtle", children: tmp45 };
      const tmp49 = closure_15(tmp(5088).Text, obj7);
      cResult[16] = enableCommunitySharedStyles.description;
      cResult[17] = tmp49;
      tmp47 = tmp49;
    } else {
      tmp47 = cResult[17];
    }
    if (cResult[18] === enableCommunitySharedStyles.content) {
      if (cResult[19] === tmp42) {
        if (cResult[20] === tmp47) {
          let tmp50;
          let tmp54;
          let tmp55;
          if (cResult[21] === tmp37) {
            tmp50 = cResult[22];
          }
          if (cResult[23] !== token) {
            const obj8 = { paddingHorizontal: token };
            cResult[23] = token;
            cResult[24] = obj8;
            tmp54 = obj8;
          } else {
            tmp54 = cResult[24];
          }
          const _Symbol6 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = tmp(1126).intl;
            const obj9 = {
              infoHook() {
                          return null;
                        }
            };
            const formatResult = intl5.format(tmp(1126).t.K8Eg4P, obj9);
            cResult[25] = formatResult;
            tmp55 = formatResult;
          } else {
            tmp55 = cResult[25];
          }
          let prop2;
          if (guild != null) {
            prop2 = guild.defaultMessageNotifications;
          }
          if (cResult[26] === defaultMessageNotifications === ONLY_MENTIONS) {
            if (cResult[27] === tmp26) {
              let tmp60;
              if (cResult[28] === prop2 === constants2.ONLY_MENTIONS) {
                tmp60 = cResult[29];
              }
              if (cResult[30] === defaultMessageNotifications === ONLY_MENTIONS) {
                let tmp63;
                let tmp66;
                if (cResult[31] === tmp60) {
                  tmp63 = cResult[32];
                }
                const _Symbol7 = Symbol;
                if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl6 = tmp(1126).intl;
                  const obj10 = {
                    infoHook() {
                                      return null;
                                    }
                  };
                  const formatResult1 = intl6.format(tmp(1126).t.v8qCoG, obj10);
                  cResult[33] = formatResult1;
                  tmp66 = formatResult1;
                } else {
                  tmp66 = cResult[33];
                }
                if (cResult[34] === first1) {
                  let tmp68;
                  if (cResult[35] === tmp21) {
                    tmp68 = cResult[36];
                  }
                  if (cResult[37] === first1) {
                    let tmp71;
                    if (cResult[38] === tmp68) {
                      tmp71 = cResult[39];
                    }
                    if (cResult[40] === tmp63) {
                      let tmp74;
                      let tmp77;
                      let tmp79;
                      let tmp81;
                      if (cResult[41] === tmp71) {
                        tmp74 = cResult[42];
                      }
                      const _Symbol8 = Symbol;
                      if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl7 = tmp(1126).intl;
                        const stringResult3 = intl7.string(tmp(1126).t["k+b2Cf"]);
                        cResult[43] = stringResult3;
                        tmp77 = stringResult3;
                      } else {
                        tmp77 = cResult[43];
                      }
                      const _Symbol9 = Symbol;
                      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl8 = tmp(1126).intl;
                        const stringResult4 = intl8.string(tmp(1126).t["9AG3wI"]);
                        cResult[44] = stringResult4;
                        tmp79 = stringResult4;
                      } else {
                        tmp79 = cResult[44];
                      }
                      if (cResult[45] !== tmp15) {
                        const obj11 = { title: tmp77, hasIcons: false, children: closure_15(tmp(6895).TableSwitchRow, obj12) };
                        const TableRowGroup = tmp(6264).TableRowGroup;
                        obj12 = { label: tmp79, value: tmp15, onValueChange: tmp16 };
                        const tmp83 = closure_15(TableRowGroup, obj11);
                        cResult[45] = tmp15;
                        cResult[46] = tmp83;
                        tmp81 = tmp83;
                      } else {
                        tmp81 = cResult[46];
                      }
                      if (cResult[47] === tmp54) {
                        if (cResult[48] === tmp74) {
                          let tmp84;
                          let tmp87;
                          let tmp91;
                          if (cResult[49] === tmp81) {
                            tmp84 = cResult[50];
                          }
                          const _Symbol10 = Symbol;
                          const formHint = enableCommunitySharedStyles.formHint;
                          if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl9 = tmp(1126).intl;
                            const format = intl9.format;
                            const obj13 = { communityGuidelines: tmp5Result.getArticleURL(constants.PUBLIC_GUILD_GUILDLINES), typesOfGuilds: tmp5Result2.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) };
                            const prop3 = tmp(1126).t["BwbW/Q"];
                            tmp5Result = defaultMessageNotifications(2128);
                            tmp5Result2 = defaultMessageNotifications(2128);
                            const formatResult2 = format(prop3, obj13);
                            cResult[51] = formatResult2;
                            tmp87 = formatResult2;
                          } else {
                            tmp87 = cResult[51];
                          }
                          if (cResult[52] !== enableCommunitySharedStyles.formHint) {
                            const obj14 = { style: formHint, variant: "text-xs/medium", color: "text-subtle", children: tmp87 };
                            const tmp93 = closure_15(tmp(5088).Text, obj14);
                            cResult[52] = enableCommunitySharedStyles.formHint;
                            cResult[53] = tmp93;
                            tmp91 = tmp93;
                          } else {
                            tmp91 = cResult[53];
                          }
                          if (cResult[54] === tmp50) {
                            if (cResult[55] === tmp84) {
                              if (cResult[56] === tmp91) {
                                let tmp94;
                                if (cResult[57] === !tmp15) {
                                  tmp94 = cResult[58];
                                }
                                return tmp94;
                              }
                            }
                          }
                          const obj15 = { headerRef: ref, currentStep: tmp(18406).EnableCommunityModalSteps.STEP_3, onSuccess: tmp28, disableNextStep: !tmp15, buttonText: tmp32, children: items1 };
                          const EnableCommunityModalScreen = tmp(18406).EnableCommunityModalScreen;
                          items1 = [tmp50, tmp84, tmp91];
                          const tmp96 = closure_16(EnableCommunityModalScreen, obj15);
                          cResult[54] = tmp50;
                          cResult[55] = tmp84;
                          cResult[56] = tmp91;
                          cResult[57] = !tmp15;
                          cResult[58] = tmp96;
                          tmp94 = tmp96;
                        }
                      }
                      const obj16 = { spacing: 24, style: tmp54, children: items2 };
                      items2 = [tmp74, tmp81];
                      const tmp86 = closure_16(tmp(5377).Stack, obj16);
                      cResult[47] = tmp54;
                      cResult[48] = tmp74;
                      cResult[49] = tmp81;
                      cResult[50] = tmp86;
                      tmp84 = tmp86;
                    }
                    const obj17 = { hasIcons: false, children: items3 };
                    items3 = [tmp63, tmp71];
                    const tmp76 = closure_16(tmp(6264).TableRowGroup, obj17);
                    cResult[40] = tmp63;
                    cResult[41] = tmp71;
                    cResult[42] = tmp76;
                    tmp74 = tmp76;
                  }
                  const obj18 = { formSwitchDisabled: first1, children: tmp68 };
                  const tmp73 = closure_15(defaultMessageNotifications(18418), obj18);
                  cResult[37] = first1;
                  cResult[38] = tmp68;
                  cResult[39] = tmp73;
                  tmp71 = tmp73;
                }
                const obj19 = { label: tmp66, value: tmp21, disabled: first1, onValueChange: tmp22 };
                const tmp70 = closure_15(tmp(6895).TableSwitchRow, obj19);
                cResult[34] = first1;
                cResult[35] = tmp21;
                cResult[36] = tmp70;
                tmp68 = tmp70;
              }
              const obj20 = { formSwitchDisabled: defaultMessageNotifications === ONLY_MENTIONS, children: tmp60 };
              const tmp65 = closure_15(defaultMessageNotifications(18418), obj20);
              cResult[30] = defaultMessageNotifications === ONLY_MENTIONS;
              cResult[31] = tmp60;
              cResult[32] = tmp65;
              tmp63 = tmp65;
            }
          }
          const obj21 = { label: tmp55, value: prop2 === constants2.ONLY_MENTIONS, disabled: defaultMessageNotifications === ONLY_MENTIONS, onValueChange: tmp26 };
          const tmp62 = closure_15(tmp(6895).TableSwitchRow, obj21);
          cResult[26] = defaultMessageNotifications === ONLY_MENTIONS;
          cResult[27] = tmp26;
          cResult[28] = prop2 === constants2.ONLY_MENTIONS;
          cResult[29] = tmp62;
          tmp60 = tmp62;
        }
      }
    }
    const obj22 = { style: content, children: items4 };
    items4 = [tmp34, tmp37, tmp42, tmp47];
    const tmp53 = closure_16(View, obj22);
    cResult[18] = enableCommunitySharedStyles.content;
    cResult[19] = tmp42;
    cResult[20] = tmp47;
    cResult[21] = tmp37;
    class A {
      constructor(arg0) {
        let tmp = arg0;
        if (tmp) {
          let prop;
          if (guild != null) {
            prop = guild.defaultMessageNotifications;
          }
          if (prop !== constants.ONLY_MENTIONS) {
            const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
            const obj3 = GuildSettingsActionCreatorsDefault;
            obj3.updateGuild(obj2);
          }
        }
        if (!tmp) {
          tmp = null == defaultMessageNotifications;
        }
        if (!tmp) {
          const obj4 = { defaultMessageNotifications };
          const obj = GuildSettingsActionCreatorsDefault;
          obj.updateGuild(obj4);
        }
      }
    }
    cResult[22] = tmp53;
    tmp50 = tmp53;
  }
  let prop4;
  if (guild != null) {
    prop4 = guild.defaultMessageNotifications;
  }
  class A {
    constructor(arg0) {
      let tmp = arg0;
      if (tmp) {
        let prop;
        if (guild != null) {
          prop = guild.defaultMessageNotifications;
        }
        if (prop !== constants.ONLY_MENTIONS) {
          const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
          const obj3 = GuildSettingsActionCreatorsDefault;
          obj3.updateGuild(obj2);
        }
      }
      if (!tmp) {
        tmp = null == defaultMessageNotifications;
      }
      if (!tmp) {
        const obj4 = { defaultMessageNotifications };
        const obj = GuildSettingsActionCreatorsDefault;
        obj.updateGuild(obj4);
      }
    }
  }
  cResult[4] = prop4;
  cResult[5] = defaultMessageNotifications;
  cResult[6] = A;
  tmp26 = A;
}) : (function FinishingTouchesScreen() {
  let TableSwitchRow;
  let TableSwitchRow2;
  let TableSwitchRow3;
  let defaultMessageNotifications;
  let first1;
  let format;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj13;
  let obj16;
  let obj17;
  let obj19;
  let obj21;
  let prop2;
  let prop3;
  let props;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp4Result5;
  let tmp4Result6;
  const f134824 = (item) => {
    const obj = PermissionUtilsAll;
    return obj.canEveryone(item, guild);
  };
  let obj = react;
  const ref = react.useRef(null);
  let obj2 = guild(4818);
  const tmp4 = defaultMessageNotifications;
  const token = obj2.useToken(defaultMessageNotifications(587).modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guild(504);
  let items = [GuildSettingsStore];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  let prop;
  const useState = react.useState;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(useState(prop), 1)[0];
  const ONLY_MENTIONS = constants2.ONLY_MENTIONS;
  [first1, tmp11] = obj.useState(false);
  [tmp13, tmp14] = _slicedToArray(obj.useState(!closure_10.some(f134824)), 2);
  const tmp12 = _slicedToArray(obj.useState(!closure_10.some(f134824)), 2);
  const first2 = _slicedToArray(obj.useState(tmp13), 1)[0];
  let prop1;
  const tmp8 = constants2;
  const useCallback = obj.useCallback;
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, defaultMessageNotifications];
  const callback = useCallback((arg0) => {
    let tmp = arg0;
    if (tmp) {
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== constants.ONLY_MENTIONS) {
        const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
        const obj3 = GuildSettingsActionCreatorsDefault;
        obj3.updateGuild(obj2);
      }
    }
    if (!tmp) {
      tmp = null == defaultMessageNotifications;
    }
    if (!tmp) {
      const obj4 = { defaultMessageNotifications };
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateGuild(obj4);
    }
  }, items1);
  const callback1 = obj.useCallback(function(features) {
    let publicUpdatesChannelId;
    let rulesChannelId;
    everyoneRole = undefined;
    if (null != features) {
      everyoneRole = everyoneRole.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(features.features);
      set.add(constants.COMMUNITY);
      const obj3 = BigFlagUtilsAll;
      const removeResult = obj3.remove(everyoneRole.permissions, closure_1_11);
      const obj2 = { permissions: removeResult };
      const merged = Object.assign(everyoneRole);
      const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
      rulesChannelId = features.rulesChannelId;
      const saveGuild = first(dependencyMap[14]).saveGuild;
      const id = features.id;
      first(dependencyMap[14]);
      const tmp11 = dependencyMap;
      if (rulesChannelId == null) {
        rulesChannelId = closure_1_9;
      }
      ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
      if (publicUpdatesChannelId == null) {
        publicUpdatesChannelId = closure_1_9;
      }
      saveGuild(id, obj4);
      if (removeResult !== everyoneRole.permissions) {
        const items = [obj2];
        const obj = guild(tmp11[16]);
        obj.saveRoleSettings(features.id, items);
      }
    }
  }, []);
  const tmp20 = tmp4(18409)();
  const tmp2Result = guild(18408);
  const enableCommunitySharedStyles = tmp2Result.useEnableCommunitySharedStyles();
  let obj4 = { headerRef: ref, currentStep: tmp2(18406).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1, buttonText: intl.string(tmp2(1126).t.XGl4ba), children: items3 };
  const EnableCommunityModalScreen = tmp2(18406).EnableCommunityModalScreen;
  intl = tmp2(1126).intl;
  const obj5 = { style: enableCommunitySharedStyles.content, children: items2 };
  const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl2.formatToPlainString(guild(1126).t.tInpJj, { number: 3, total: 3 }) };
  const Text = tmp2(5088).Text;
  intl2 = tmp2(1126).intl;
  items2 = [closure_15(Text, obj6), , , ];
  const obj7 = { resizeMode: "contain", source: tmp20.finishingTouches };
  items2[1] = closure_15(tmp4(6156), obj7);
  const obj8 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl3.string(guild(1126).t["Pj/s/a"]) };
  const Heading = tmp2(5088).Heading;
  intl3 = tmp2(1126).intl;
  items2[2] = closure_15(Heading, obj8);
  const obj9 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: intl4.string(guild(1126).t["IL7/no"]) };
  const Text2 = tmp2(5088).Text;
  intl4 = tmp2(1126).intl;
  items2[3] = closure_15(Text2, obj9);
  items3 = [closure_16(View, obj5), , ];
  const obj10 = { spacing: 24, style: { paddingHorizontal: token }, children: items5 };
  const Stack = tmp2(5377).Stack;
  const TableRowGroup = tmp2(6264).TableRowGroup;
  const obj11 = { formSwitchDisabled: defaultMessageNotifications === ONLY_MENTIONS, children: closure_15(TableSwitchRow, obj12) };
  obj12 = { label: intl5.format(guild(1126).t.K8Eg4P, obj13), value: prop2 === tmp8.ONLY_MENTIONS, disabled: defaultMessageNotifications === ONLY_MENTIONS, onValueChange: callback };
  const tmp4Result = tmp4(18418);
  TableSwitchRow = tmp2(6895).TableSwitchRow;
  intl5 = tmp2(1126).intl;
  prop2 = undefined;
  obj13 = {
    infoHook() {
      return null;
    }
  };
  if (guild != null) {
    prop2 = guild.defaultMessageNotifications;
  }
  const obj14 = { hasIcons: false, children: items4 };
  items4 = [closure_15(tmp4Result, obj11), ];
  const obj15 = { formSwitchDisabled: first2, children: closure_15(TableSwitchRow2, obj16) };
  obj16 = { label: intl6.format(guild(1126).t.v8qCoG, obj17), value: tmp13, disabled: first2, onValueChange: tmp14 };
  const tmp4Result4 = tmp4(18418);
  TableSwitchRow2 = tmp2(6895).TableSwitchRow;
  intl6 = tmp2(1126).intl;
  obj17 = {
    infoHook() {
      return null;
    }
  };
  items4[1] = closure_15(tmp4Result4, obj15);
  items5 = [closure_16(TableRowGroup, obj14), ];
  const obj18 = { title: intl7.string(guild(1126).t["k+b2Cf"]), hasIcons: false, children: closure_15(TableSwitchRow3, obj19) };
  const TableRowGroup2 = tmp2(6264).TableRowGroup;
  intl7 = tmp2(1126).intl;
  obj19 = { label: intl8.string(guild(1126).t["9AG3wI"]), value: first1, onValueChange: tmp11 };
  TableSwitchRow3 = tmp2(6895).TableSwitchRow;
  intl8 = tmp2(1126).intl;
  items5[1] = closure_15(TableRowGroup2, obj18);
  items3[1] = closure_16(Stack, obj10);
  const obj20 = { style: enableCommunitySharedStyles.formHint, variant: "text-xs/medium", color: "text-subtle", children: format(prop3, obj21) };
  const Text3 = tmp2(5088).Text;
  const intl9 = tmp2(1126).intl;
  format = intl9.format;
  obj21 = { communityGuidelines: tmp4Result5.getArticleURL(constants.PUBLIC_GUILD_GUILDLINES), typesOfGuilds: tmp4Result6.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) };
  prop3 = tmp2(1126).t["BwbW/Q"];
  tmp4Result5 = tmp4(2128);
  tmp4Result6 = tmp4(2128);
  items3[2] = closure_15(Text3, obj20);
  return closure_16(EnableCommunityModalScreen, obj4);
});
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx");

export default tmp5;
