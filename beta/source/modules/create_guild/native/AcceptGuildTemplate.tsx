// Module ID: 11925
// Function ID: 11926
// Name: AcceptGuildTemplate
// Dependencies: [19, 17, 2049, 2104, 1078, 7570, 21, 4758, 580, 5743, 558, 568, 5796, 1181, 11926, 1119, 7222, 38, 1616, 2105, 4754, 11928, 6845, 5188, 8882, 12, 9775, 11933, 11934, 11253, 1096, 2]

// Module 11925 (AcceptGuildTemplate)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2105 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5796 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6845 */;
import RolePillDefault from "RolePill" /* 11253 */;
import InvalidLink from "InvalidLink" /* 11926 */;
import GuildIconUploaderDefault from "GuildIconUploader" /* 11928 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5743 */;

const FormDividerDefault = tmp5(8882);
require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const isGuildVocalChannelType = fn(2049).isGuildVocalChannelType;
const isEveryoneRole = fn(2104).isEveryoneRole;
const Constants = fn(1078);
({ MarketingURLs: closure_8, Fonts, ChannelTypes: closure_9 } = Constants);
const GuildTemplateStates = fn(7570).GuildTemplateStates;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4758);
let obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 }, header: null, description: null, iconUploader: null, createButtonWrapper: null, resolvingContainer: null, divider: null, sectionHeader: null, rolesChannelsWrapper: null, channelsWrapper: null, rolesWrapper: null, channelRow: null, channelIcon: null, channelCategoryIcon: null, channelName: null, channelCategoryName: null, sectionTip: null, protip: null };
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.header = { textAlign: "center" };
obj.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj.iconUploader = { alignSelf: "center", marginBottom: 12 };
obj.createButtonWrapper = { marginTop: 8 };
obj.resolvingContainer = { alignItems: "center", flex: 1, justifyContent: "center" };
obj.divider = { marginTop: 8 };
let obj5 = {};
let TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj5.marginTop = 24;
obj.sectionHeader = obj5;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
let obj4 = { textAlign: "center" };
obj.rolesChannelsWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelsWrapper = { flexDirection: "column", paddingVertical: 0 };
obj.rolesWrapper = { flexDirection: "row", flexWrap: "wrap" };
obj.channelRow = { alignItems: "center", flexDirection: "row", height: 40 };
obj.channelIcon = { marginLeft: 12, marginRight: 8, height: 20, width: 20 };
obj.channelCategoryIcon = { marginLeft: 0, marginRight: 2, height: 12, width: 12 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelName = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj.channelCategoryName = {};
obj.sectionTip = { marginTop: 8 };
let obj7 = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let obj8 = {};
obj.protip = { color: nativeDefault.unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_1_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.resolvingContainer) {
    const obj2 = { style: tmp4.resolvingContainer, children: first };
    const tmp11 = closure_1_11(React4, obj2);
    cResult[1] = tmp4.resolvingContainer;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => closure_1_11(React4, { style: closure_14().resolvingContainer, children: closure_1_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) }));
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { Illustration: tmp(11926).InvalidLink, title: null, body: null };
    const intl = tmp(1119).intl;
    obj2.title = intl.string(tmp(1119).t.C7ZRNw);
    const intl2 = tmp(1119).intl;
    obj2.body = intl2.string(tmp(1119).t.A6MwXE);
    const tmp6 = closure_1_11(tmp(1181).EmptyState, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { Illustration: InvalidLink.InvalidLink, title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.C7ZRNw);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.A6MwXE);
  return closure_1_11(native.EmptyState, obj);
}));
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildTemplate) => {
  const cResult = guildTemplate(568).c(69);
  guildTemplate = guildTemplate.guildTemplate;
  ({ createServer, name, setName, icon, chooseIcon, errors } = guildTemplate);
  const tmp4 = closure_14();
  const obj = guildTemplate(568);
  const typeConsolidationTextTransform = guildTemplate(7222).useTypeConsolidationTextTransform("AcceptGuildTemplate");
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === guildTemplate.serializedSourceGuild.id) {
    if (cResult[1] === guildTemplate.serializedSourceGuild.roles) {
      if (cResult[6] !== bottom) {
        const obj3 = { marginBottom: bottom };
        cResult[6] = bottom;
        cResult[7] = obj3;
        let tmp14 = obj3;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp4.wrapper) {
        if (cResult[9] === tmp14) {
          let tmp15 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1119).intl;
          const stringResult = intl.string(tmp(1119).t.QzUORX);
          cResult[11] = stringResult;
          let tmp17 = stringResult;
        } else {
          tmp17 = cResult[11];
        }
        if (cResult[12] !== tmp4.header) {
          const obj4 = { style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp17 };
          const tmp21 = closure_11(tmp(4754).Text, obj4);
          cResult[12] = tmp4.header;
          cResult[13] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[13];
        }
        if (cResult[14] === guildTemplate.name) {
          if (cResult[15] === tmp4.description) {
            let tmp22 = cResult[16];
          }
          if (cResult[17] === chooseIcon) {
            if (cResult[18] === icon) {
              if (cResult[19] === tmp4.iconUploader) {
                if (cResult[20] === tmp4.wrapper.backgroundColor) {
                  let tmp25 = cResult[21];
                }
                const _Symbol2 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(1119).intl;
                  const stringResult1 = intl2.string(tmp(1119).t.dBih7e);
                  cResult[22] = stringResult1;
                  let tmp28 = stringResult1;
                } else {
                  tmp28 = cResult[22];
                }
                let name1;
                if (errors != null) {
                  name1 = errors.name;
                }
                const _Symbol3 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(1119).intl;
                  const obj5 = { guidelinesURL: constants.GUIDELINES };
                  const formatResult = intl3.format(tmp(1119).t["2bprXx"], obj5);
                  cResult[23] = formatResult;
                  let tmp31 = formatResult;
                } else {
                  tmp31 = cResult[23];
                }
                if (cResult[24] === name) {
                  if (cResult[25] === setName) {
                    if (cResult[26] === name1) {
                      let tmp34 = cResult[27];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl4 = tmp(1119).intl;
                      const stringResult2 = intl4.string(tmp(1119).t["O0p/lS"]);
                      cResult[28] = stringResult2;
                      let tmp37 = stringResult2;
                    } else {
                      tmp37 = cResult[28];
                    }
                    if (cResult[29] === createServer) {
                      if (cResult[30] === tmp39) {
                        if (cResult[31] === tmp40) {
                          let tmp41 = cResult[32];
                        }
                        if (cResult[33] === tmp4.createButtonWrapper) {
                          if (cResult[34] === tmp41) {
                            let tmp44 = cResult[35];
                          }
                          if (cResult[36] !== tmp4.divider) {
                            const obj6 = { style: tmp4.divider, outer: true };
                            const tmp50 = closure_11(tmp6(8882), obj6);
                            cResult[36] = tmp4.divider;
                            cResult[37] = tmp50;
                            let tmp48 = tmp50;
                          } else {
                            tmp48 = cResult[37];
                          }
                          const _Symbol5 = Symbol;
                          if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl5 = tmp(1119).intl;
                            const stringResult3 = intl5.string(tmp(1119).t.OGiMXJ);
                            cResult[38] = stringResult3;
                            let tmp51 = stringResult3;
                          } else {
                            tmp51 = cResult[38];
                          }
                          if (cResult[39] !== tmp4.sectionHeader) {
                            const obj7 = { style: tmp4.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: tmp51 };
                            const tmp55 = closure_11(tmp(4754).Text, obj7);
                            cResult[39] = tmp4.sectionHeader;
                            cResult[40] = tmp55;
                            let tmp53 = tmp55;
                          } else {
                            tmp53 = cResult[40];
                          }
                          const _Symbol6 = Symbol;
                          if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                            const obj8 = { variant: "text-xs/medium", color: "text-default", children: null };
                            const intl6 = tmp(1119).intl;
                            obj8.children = intl6.string(tmp(1119).t.Ztwyoz);
                            const tmp58 = closure_11(tmp(4754).Text, obj8);
                            cResult[41] = tmp58;
                            let tmp56 = tmp58;
                          } else {
                            tmp56 = cResult[41];
                          }
                          if (cResult[42] !== guildTemplate.serializedSourceGuild.channels) {
                            const obj9 = { channels: guildTemplate.serializedSourceGuild.channels };
                            const tmp62 = closure_11(closure_18, obj9);
                            cResult[42] = guildTemplate.serializedSourceGuild.channels;
                            cResult[43] = tmp62;
                            let tmp59 = tmp62;
                          } else {
                            tmp59 = cResult[43];
                          }
                          if (cResult[44] === tmp4.protip) {
                            if (cResult[45] === typeConsolidationTextTransform) {
                              let tmp64 = cResult[46];
                            }
                            const _Symbol7 = Symbol;
                            if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl7 = tmp(1119).intl;
                              const stringResult4 = intl7.string(tmp(1119).t["8tvIiN"]);
                              cResult[47] = stringResult4;
                              let tmp65 = stringResult4;
                            } else {
                              tmp65 = cResult[47];
                            }
                            if (cResult[48] !== tmp64) {
                              const obj10 = { style: tmp64, children: null };
                              const items = [tmp65, ": "];
                              obj10.children = items;
                              const tmp69 = closure_12(tmp(1181).LegacyText, obj10);
                              cResult[48] = tmp64;
                              cResult[49] = tmp69;
                              let tmp67 = tmp69;
                            } else {
                              tmp67 = cResult[49];
                            }
                            const _Symbol8 = Symbol;
                            if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl8 = tmp(1119).intl;
                              const stringResult5 = intl8.string(tmp(1119).t.de7DpI);
                              cResult[50] = stringResult5;
                              let tmp70 = stringResult5;
                            } else {
                              tmp70 = cResult[50];
                            }
                            if (cResult[51] === tmp4.sectionTip) {
                              if (cResult[52] === tmp67) {
                                let tmp72 = cResult[53];
                              }
                              if (cResult[54] === arr) {
                                if (cResult[55] === tmp4.sectionHeader) {
                                  let tmp75 = cResult[56];
                                }
                                if (cResult[57] === tmp34) {
                                  if (cResult[58] === tmp44) {
                                    if (cResult[59] === tmp48) {
                                      if (cResult[60] === tmp53) {
                                        if (cResult[61] === tmp59) {
                                          if (cResult[62] === tmp15) {
                                            if (cResult[63] === tmp72) {
                                              if (cResult[64] === tmp75) {
                                                if (cResult[65] === tmp19) {
                                                  if (cResult[66] === tmp22) {
                                                    if (cResult[67] === tmp25) {
                                                      let tmp81 = cResult[68];
                                                    }
                                                    return tmp81;
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
                                const obj11 = { contentContainerStyle: tmp15, keyboardShouldPersistTaps: "handled", children: null };
                                const items1 = [tmp19, tmp22, tmp25, tmp34, tmp44, tmp48, tmp53, tmp56, tmp59, tmp72, tmp75];
                                obj11.children = items1;
                                const tmp84 = closure_12(closure_5, obj11);
                                cResult[57] = tmp34;
                                cResult[58] = tmp44;
                                cResult[59] = tmp48;
                                cResult[60] = tmp53;
                                cResult[61] = tmp59;
                                cResult[62] = tmp15;
                                cResult[63] = tmp72;
                                cResult[64] = tmp75;
                                cResult[65] = tmp19;
                                cResult[66] = tmp22;
                                cResult[67] = tmp25;
                                cResult[68] = tmp84;
                                tmp81 = tmp84;
                              }
                              let tmp76 = null;
                              if (arr.length > 0) {
                                const obj12 = { children: null };
                                const obj13 = { style: tmp4.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
                                const intl9 = tmp(1119).intl;
                                obj13.children = intl9.string(tmp(1119).t.mQ0H1p);
                                const items2 = [closure_11(tmp(4754).Text, obj13), , ];
                                const obj14 = { variant: "text-xs/medium", color: "text-default", children: null };
                                const intl10 = tmp(1119).intl;
                                obj14.children = intl10.string(tmp(1119).t.jOPEYC);
                                items2[1] = closure_11(tmp(4754).Text, obj14);
                                const obj15 = { roles: arr };
                                items2[2] = closure_11(closure_19, obj15);
                                obj12.children = items2;
                                tmp76 = closure_12(closure_13, obj12);
                              }
                              cResult[54] = arr;
                              cResult[55] = tmp4.sectionHeader;
                              cResult[56] = tmp76;
                              tmp75 = tmp76;
                            }
                            const obj16 = { style: tmp63, variant: "text-xs/medium", color: "interactive-text-default", children: null };
                            const items3 = [tmp67, tmp70];
                            obj16.children = items3;
                            const tmp74 = closure_12(tmp(4754).Text, obj16);
                            cResult[51] = tmp4.sectionTip;
                            cResult[52] = tmp67;
                            cResult[53] = tmp74;
                            tmp72 = tmp74;
                          }
                          const items4 = [tmp4.protip, typeConsolidationTextTransform];
                          cResult[44] = tmp4.protip;
                          cResult[45] = typeConsolidationTextTransform;
                          cResult[46] = items4;
                          tmp64 = items4;
                        }
                        const obj17 = { style: tmp4.createButtonWrapper, children: tmp41 };
                        const tmp47 = closure_11(closure_4, obj17);
                        cResult[33] = tmp4.createButtonWrapper;
                        cResult[34] = tmp41;
                        cResult[35] = tmp47;
                        tmp44 = tmp47;
                      }
                    }
                    const obj18 = { size: "md", text: tmp37, onPress: createServer, loading: guildTemplate.state === tmp8.ACCEPTING, disabled: guildTemplate.state === tmp8.ACCEPTING, grow: true };
                    const tmp43 = closure_11(tmp(5188).Button, obj18);
                    cResult[29] = createServer;
                    cResult[30] = guildTemplate.state === tmp8.ACCEPTING;
                    cResult[31] = guildTemplate.state === tmp8.ACCEPTING;
                    cResult[32] = tmp43;
                    tmp41 = tmp43;
                  }
                }
                const obj19 = { label: tmp28, error: name1, hint: tmp31, value: name, onChangeText: setName, autoFocus: true, autoCorrect: false, returnKeyType: "done" };
                const tmp36 = closure_11(tmp6(6845), obj19);
                cResult[24] = name;
                cResult[25] = setName;
                cResult[26] = name1;
                cResult[27] = tmp36;
                tmp34 = tmp36;
              }
            }
          }
          const obj20 = { iconBackgroundColor: tmp4.wrapper.backgroundColor, style: tmp4.iconUploader, onPress: chooseIcon, icon };
          const tmp27 = closure_11(tmp6(11928), obj20);
          cResult[17] = chooseIcon;
          cResult[18] = icon;
          cResult[19] = tmp4.iconUploader;
          cResult[20] = tmp4.wrapper.backgroundColor;
          cResult[21] = tmp27;
          tmp25 = tmp27;
        }
        const obj21 = { style: tmp4.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name };
        const tmp24 = closure_11(tmp(4754).Text, obj21);
        cResult[14] = guildTemplate.name;
        cResult[15] = tmp4.description;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
      const items5 = [tmp4.wrapper, tmp14];
      cResult[8] = tmp4.wrapper;
      cResult[9] = tmp14;
      cResult[10] = items5;
      tmp15 = items5;
    }
  }
  if (cResult[3] !== guildTemplate.serializedSourceGuild.id) {
    class A {
      constructor(arg0) {
        obj = closure_2(closure_3[19]);
        return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
      }
    }
    cResult[3] = guildTemplate.serializedSourceGuild.id;
    cResult[4] = A;
    const tmp10 = A;
  } else {
    class A {
      constructor(arg0) {
        obj = closure_2(closure_3[19]);
        return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        obj = closure_2(closure_3[19]);
        return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
      }
    }
    cResult[5] = tmp12;
    const tmp11 = tmp12;
  } else {
    class A {
      constructor(arg0) {
        obj = closure_2(closure_3[19]);
        return obj.fromServer(guildTemplate.serializedSourceGuild.id, guildTemplate);
      }
    }
  }
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map(tmp10);
  const found = mapped.filter(tmp11);
  cResult[0] = guildTemplate.serializedSourceGuild.id;
  cResult[1] = guildTemplate.serializedSourceGuild.roles;
  cResult[2] = found;
}) : ((guildTemplate) => {
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = closure_14();
  const typeConsolidationTextTransform = guildTemplate(7222).useTypeConsolidationTextTransform("AcceptGuildTemplate");
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((item) => GuildRoleRecordUtilsAll.fromServer(guildTemplate.serializedSourceGuild.id, item));
  const found = mapped.filter((item) => !isEveryoneRole(item));
  const obj2 = { contentContainerStyle: null, keyboardShouldPersistTaps: "handled", children: null };
  const items = [tmp.wrapper, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.contentContainerStyle = items;
  const obj3 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guildTemplate(1119).intl;
  obj3.children = intl.string(guildTemplate(1119).t.QzUORX);
  const items1 = [closure_11(guildTemplate(4754).Text, obj3), closure_11(guildTemplate(4754).Text, { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name }), closure_11(GuildIconUploaderDefault, { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon }), , , , , , , , ];
  const obj6 = { label: null, error: null, hint: null, value: null, onChangeText: null, autoFocus: true, autoCorrect: false, returnKeyType: "done" };
  const obj = guildTemplate(7222);
  const obj4 = { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name };
  const obj5 = { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon };
  const tmp10 = closure_5;
  const intl2 = guildTemplate(1119).intl;
  obj6.label = intl2.string(guildTemplate(1119).t.dBih7e);
  let name1;
  if (errors != null) {
    name1 = errors.name;
  }
  obj6.error = name1;
  const intl3 = tmp2(1119).intl;
  obj6.hint = intl3.format(guildTemplate(1119).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
  obj6.value = name;
  obj6.onChangeText = setName;
  items1[3] = closure_11(FreeFormInputGroupDefault, obj6);
  const obj8 = { style: tmp.createButtonWrapper, children: null };
  const obj9 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = tmp2(1119).intl;
  obj9.text = intl4.string(guildTemplate(1119).t["O0p/lS"]);
  obj9.onPress = createServer;
  obj9.loading = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj9.disabled = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj8.children = closure_11(guildTemplate(5188).Button, obj9);
  items1[4] = closure_11(closure_4, obj8);
  items1[5] = closure_11(FormDividerDefault, { style: tmp.divider, outer: true });
  const obj11 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp2(1119).intl;
  obj11.children = intl5.string(guildTemplate(1119).t.OGiMXJ);
  items1[6] = closure_11(guildTemplate(4754).Text, obj11);
  const obj12 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl6 = tmp2(1119).intl;
  obj12.children = intl6.string(guildTemplate(1119).t.Ztwyoz);
  items1[7] = closure_11(guildTemplate(4754).Text, obj12);
  items1[8] = closure_11(closure_18, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj14 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default", children: null };
  const obj15 = { style: null, children: null };
  const items2 = [tmp.protip, typeConsolidationTextTransform];
  obj15.style = items2;
  const intl7 = tmp2(1119).intl;
  const items3 = [intl7.string(guildTemplate(1119).t["8tvIiN"]), ": "];
  obj15.children = items3;
  const items4 = [closure_12(guildTemplate(1181).LegacyText, obj15), ];
  const intl8 = tmp2(1119).intl;
  items4[1] = intl8.string(guildTemplate(1119).t.de7DpI);
  obj14.children = items4;
  items1[9] = closure_12(guildTemplate(4754).Text, obj14);
  let tmp9Result = null;
  if (found.length > 0) {
    const obj16 = { children: null };
    const obj17 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl9 = tmp2(1119).intl;
    obj17.children = intl9.string(tmp2(1119).t.mQ0H1p);
    const items5 = [tmp11(tmp2(4754).Text, obj17), , ];
    const obj18 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp2(1119).intl;
    obj18.children = intl10.string(tmp2(1119).t.jOPEYC);
    items5[1] = tmp11(tmp2(4754).Text, obj18);
    const obj19 = { roles: found };
    items5[2] = tmp11(closure_19, obj19);
    obj16.children = items5;
    tmp9Result = tmp9(closure_13, obj16);
  }
  items1[10] = tmp9Result;
  obj2.children = items1;
  return closure_12(tmp10, obj2);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((channels) => {
  let valueResult = dependencyMap;
  const cResult = require("c").c(20);
  channelRow = channels.channels;
  const tmp3 = closure_14();
  _require = tmp3;
  if (cResult[0] === channelRow) {
    if (cResult[1] === tmp3.channelCategoryIcon) {
      if (cResult[2] === tmp3.channelCategoryName) {
        if (cResult[3] === tmp3.channelIcon) {
          if (cResult[4] === tmp3.channelName) {
            if (cResult[5] === tmp3.channelRow) {
              if (cResult[14] === tmp3.channelsWrapper) {
                if (cResult[15] === tmp3.rolesChannelsWrapper) {
                  let tmp9 = cResult[16];
                }
                if (cResult[17] === tmp4) {
                  if (cResult[18] === tmp9) {
                    let tmp10 = cResult[19];
                  }
                  return tmp10;
                }
                const obj3 = { style: tmp9, children: tmp4 };
                const tmp13 = closure_11(closure_4, obj3);
                cResult[17] = tmp4;
                cResult[18] = tmp9;
                cResult[19] = tmp13;
                tmp10 = tmp13;
              }
              let items = [, ];
              ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp3);
              cResult[14] = tmp3.channelsWrapper;
              cResult[15] = tmp3.rolesChannelsWrapper;
              cResult[16] = items;
              tmp9 = items;
            }
          }
        }
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(parent_id) {
      if (null == parent_id.parent_id) {
        const _Number2 = Number;
        let result = 10000 * Number(parent_id.id);
      } else {
        const _Number = Number;
        result = 10000 * Number(parent_id.parent_id) + parent_id.id;
      }
      return result;
    };
    cResult[7] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[7];
  }
  if (cResult[8] === tmp3.channelCategoryIcon) {
    if (cResult[9] === tmp3.channelCategoryName) {
      if (cResult[10] === tmp3.channelIcon) {
        if (cResult[11] === tmp3.channelName) {
          if (cResult[12] === tmp3.channelRow) {
            let tmp6 = cResult[13];
          }
          let obj2 = _modDef12(channelRow);
          const sortByResult = _modDef12(channelRow).sortBy(tmp5);
          valueResult = _modDef12(channelRow).sortBy(tmp5).map(tmp6).value();
          cResult[0] = channelRow;
          cResult[1] = tmp3.channelCategoryIcon;
          cResult[2] = tmp3.channelCategoryName;
          cResult[3] = tmp3.channelIcon;
          ({ channelName: tmp2[4], channelRow } = tmp3);
          cResult[5] = channelRow;
          cResult[6] = valueResult;
          const iter = _modDef12(channelRow).sortBy(tmp5).map(tmp6);
        }
      }
    }
  }
  const fn2 = function c(children) {
    const obj = { style: closure_0.channelRow, children: null };
    const items = [closure_0.channelIcon, ];
    let channelCategoryIcon = null;
    if (children.type === constants2.GUILD_CATEGORY) {
      channelCategoryIcon = tmp5.channelCategoryIcon;
    }
    const obj2 = { style: items, color: nativeDefault.unsafe_rawColors.PRIMARY_400, size: native.Icon.Sizes.CUSTOM, source: null };
    items[1] = channelCategoryIcon;
    const type = children.type;
    if (isGuildVocalChannelType(type)) {
      let tmp10Result = tmp10(9775);
    } else if (type === constants2.GUILD_CATEGORY) {
      tmp10Result = tmp10(11933);
    } else {
      tmp10Result = tmp10(11934);
    }
    obj2.source = tmp10Result;
    const items1 = [closure_2_11(native.Icon, obj2), ];
    const items2 = [closure_0.channelName, ];
    let channelCategoryName = null;
    if (children.type === constants2.GUILD_CATEGORY) {
      channelCategoryName = tmp5.channelCategoryName;
    }
    items2[1] = channelCategoryName;
    items1[1] = closure_2_11(native.LegacyText, { numberOfLines: 1, style: items2, children: children.name });
    obj.children = items1;
    return __initData(React4, obj, children.id);
  };
  cResult[8] = tmp3.channelCategoryIcon;
  cResult[9] = tmp3.channelCategoryName;
  cResult[10] = tmp3.channelIcon;
  cResult[11] = tmp3.channelName;
  cResult[12] = tmp3.channelRow;
  cResult[13] = fn2;
  tmp6 = fn2;
}) : ((channels) => {
  const tmp = closure_14();
  closure_0 = tmp;
  let obj = _modDef12(channels.channels);
  const sortByResult = _modDef12(channels.channels).sortBy((parent_id) => {
    if (null == parent_id.parent_id) {
      const _Number2 = Number;
      let result = 10000 * Number(parent_id.id);
    } else {
      const _Number = Number;
      result = 10000 * Number(parent_id.parent_id) + parent_id.id;
    }
    return result;
  });
  let obj2 = {
    style: null,
    children: _modDef12(channels.channels).sortBy((parent_id) => {
      if (null == parent_id.parent_id) {
        const _Number2 = Number;
        let result = 10000 * Number(parent_id.id);
      } else {
        const _Number = Number;
        result = 10000 * Number(parent_id.parent_id) + parent_id.id;
      }
      return result;
    }).map((children) => {
      const obj = { style: closure_0.channelRow, children: null };
      const items = [closure_0.channelIcon, ];
      let channelCategoryIcon = null;
      if (children.type === constants2.GUILD_CATEGORY) {
        channelCategoryIcon = tmp5.channelCategoryIcon;
      }
      const obj2 = { style: items, color: nativeDefault.unsafe_rawColors.PRIMARY_400, size: native.Icon.Sizes.CUSTOM, source: null };
      items[1] = channelCategoryIcon;
      const type = children.type;
      if (isGuildVocalChannelType(type)) {
        let tmp10Result = tmp10(9775);
      } else if (type === constants2.GUILD_CATEGORY) {
        tmp10Result = tmp10(11933);
      } else {
        tmp10Result = tmp10(11934);
      }
      obj2.source = tmp10Result;
      const items1 = [closure_2_11(native.Icon, obj2), ];
      const items2 = [closure_0.channelName, ];
      let channelCategoryName = null;
      if (children.type === constants2.GUILD_CATEGORY) {
        channelCategoryName = tmp5.channelCategoryName;
      }
      items2[1] = channelCategoryName;
      items1[1] = closure_2_11(native.LegacyText, { numberOfLines: 1, style: items2, children: children.name });
      obj.children = items1;
      return __initData(React4, obj, children.id);
    }).value()
  };
  let items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  obj2.style = items;
  return closure_11(closure_4, obj2);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((roles) => {
  const cResult = c.c(9);
  roles = roles.roles;
  const tmp2 = closure_14();
  if (cResult[0] !== roles) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(role) {
        const obj = { disableInteraction: true, role, color: null };
        let int2hexResult;
        if (0 !== role.color) {
          int2hexResult = require("utils/ColorUtils").int2hex(role.color);
          const obj2 = require("utils/ColorUtils");
        }
        obj.color = int2hexResult;
        return closure_1_11(RolePillDefault, obj, role.id);
      };
      cResult[2] = fn;
      let tmp5 = fn;
    } else {
      tmp5 = cResult[2];
    }
    const substr = roles.slice();
    const reversed = substr.reverse();
    const mapped = reversed.map(tmp5);
    cResult[0] = roles;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === tmp2.rolesChannelsWrapper) {
      if (cResult[4] === tmp2.rolesWrapper) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === tmp3) {
        if (cResult[7] === tmp8) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
      let obj2 = { style: tmp8, children: tmp3 };
      const tmp12 = closure_1_11(React4, obj2);
      cResult[6] = tmp3;
      cResult[7] = tmp8;
      cResult[8] = tmp12;
      tmp9 = tmp12;
    }
    const items = [, ];
    ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = tmp2);
    cResult[3] = tmp2.rolesChannelsWrapper;
    cResult[4] = tmp2.rolesWrapper;
    cResult[5] = items;
    tmp8 = items;
  }
}) : ((roles) => {
  roles = roles.roles;
  const substr = roles.slice();
  const reversed = substr.reverse();
  let obj = {
    style: null,
    children: reversed.map((role) => {
      const obj = { disableInteraction: true, role, color: null };
      let int2hexResult;
      if (0 !== role.color) {
        int2hexResult = require("utils/ColorUtils").int2hex(role.color);
        const obj2 = require("utils/ColorUtils");
      }
      obj.color = int2hexResult;
      return closure_1_11(RolePillDefault, obj, role.id);
    })
  };
  const items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = closure_14());
  obj.style = items;
  return closure_1_11(React4, obj);
});
ReactCompilerGating = fn(558);
let obj9 = { color: nativeDefault.unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildTemplate) => {
  const cResult = c.c(7);
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (tmp2.ACCEPTING !== state) {
        if (tmp2.ACCEPTED !== state) {
          if (tmp2.RESOLVING === state) {
            if (cResult[2] !== guildTemplate) {
              const obj2 = {};
              const merged = Object.assign(guildTemplate);
              const tmp21 = closure_1_11(closure_15, obj2);
              cResult[2] = guildTemplate;
              cResult[3] = tmp21;
              let tmp15 = tmp21;
            } else {
              tmp15 = cResult[3];
            }
            return tmp15;
          } else if (tmp2.EXPIRED === state) {
            const _Symbol = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp14 = closure_1_11(closure_16, {});
              cResult[4] = tmp14;
              let tmp11 = tmp14;
            } else {
              tmp11 = cResult[4];
            }
            return tmp11;
          }
        }
      }
    }
    if (cResult[0] !== guildTemplate) {
      const obj3 = {};
      const merged1 = Object.assign(guildTemplate);
      const tmp28 = closure_1_11(closure_17, obj3);
      cResult[0] = guildTemplate;
      cResult[1] = tmp28;
      let tmp22 = tmp28;
    } else {
      tmp22 = cResult[1];
    }
    return tmp22;
  }
  if (cResult[5] !== guildTemplate) {
    const obj4 = {};
    const merged2 = Object.assign(guildTemplate);
    const tmp9 = closure_1_11(closure_15, obj4);
    cResult[5] = guildTemplate;
    cResult[6] = tmp9;
    let tmp3 = tmp9;
  } else {
    tmp3 = cResult[6];
  }
  return tmp3;
}) : ((guildTemplate) => {
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (tmp.ACCEPTING !== state) {
        if (tmp.ACCEPTED !== state) {
          if (tmp.RESOLVING === state) {
            const obj2 = {};
            const merged = Object.assign(guildTemplate);
            return closure_1_11(closure_15, obj2);
          } else if (tmp.EXPIRED === state) {
            return closure_1_11(closure_16, {});
          }
        }
      }
    }
    const obj3 = {};
    const merged1 = Object.assign(guildTemplate);
    return closure_1_11(closure_17, obj3);
  }
  const merged2 = Object.assign(guildTemplate);
  return closure_1_11(closure_15, {});
});
