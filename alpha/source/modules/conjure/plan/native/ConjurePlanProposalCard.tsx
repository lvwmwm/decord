// Module ID: 17281
// Function ID: 17282
// Name: ConjurePlanProposalCard
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 17282, 17283, 6947, 17284, 17287, 17278, 17280, 1126, 3849, 5377, 17289, 5088, 5079, 17212, 17294, 17296, 17297, 17299, 5379, 17276, 6157, 2]

// Module 17281 (ConjurePlanProposalCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3849 from "module_3849" /* 3849 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5079 */;
import FastImageDefault from "FastImage" /* 6157 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 17276 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 17278 */;
import ConjureNativeCollapsibleSectionDefault from "ConjureNativeCollapsibleSection" /* 17280 */;
import ConjurePlanTypeTagsDefault from "ConjurePlanTypeTags" /* 17289 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 17299 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const intl15 = tmp(1126);
const Text_Text = tmp(5088);
const Stack_Stack = tmp(5377);
const components_Button_Button = tmp(5379);
const ConjureProjectTypes = tmp(6947);
const ConjureNativeMarkdown = tmp(17212);
const ConjureNativeCollapsibleSection = tmp(17280);
const conjurePlanFormat = tmp(17282);
const conjurePlanTags = tmp(17283);
const conjurePlanWidget2 = tmp(17284);
const useConjurePlanBotPreviewItems = tmp(17287);
const conjurePlanDesign = tmp(17296);
({ ActivityIndicator: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { planActions: obj2, planReplyHint: { flexShrink: 1 }, designImage: obj3, designPlaceholder: obj4 };
obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(arg0) {
  let expanded;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl3;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let onApprove;
  let onToggleExpanded;
  let projectId;
  let proposal;
  let string;
  let superseded;
  let tmp8;
  let tmpResult7;
  let version;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(64);
  ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
  let tmp4 = undefined !== superseded && superseded;
  let tmp5 = undefined === expanded || expanded;
  const tmp6 = closure_7();
  const str = proposal.summary;
  const trimmed = str.trim();
  if (cResult[0] !== proposal.what_changed) {
    let str3;
    if (proposal.what_changed != null) {
      str3 = str2.trim();
    }
    if (str3 == null) {
      str3 = "";
    }
    cResult[0] = proposal.what_changed;
    cResult[1] = str3;
    tmp8 = str3;
  } else {
    tmp8 = cResult[1];
  }
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  const mapped = bot_permissions.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let automod = null;
  const tmpResult = conjurePlanTags;
  if (tmpResult.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  const tmpResult5 = conjurePlanWidget2;
  const conjurePlanWidget = tmpResult5.useConjurePlanWidget(projectId, proposal);
  if (cResult[2] === proposal) {
    let tmp12;
    let tmp17;
    if (cResult[3] === conjurePlanWidget) {
      tmp12 = cResult[4];
    }
    const tmpResult6 = useConjurePlanBotPreviewItems;
    const botExchanges = tmpResult6.useConjurePlanBotExchanges(proposal).botExchanges;
    const tmp15 = ConjureNativeCardSurfaceDefault;
    const tmp16 = ConjureNativeCollapsibleSectionDefault;
    if (cResult[5] === tmp4) {
      let tmp19;
      let tmp24;
      let tmp23;
      if (cResult[6] === version) {
        tmp17 = cResult[7];
      }
      if (cResult[8] !== tmp4) {
        let tmp20 = null;
        if (tmp4) {
          let obj2 = { children: intl3.string(_modDef3849.hF2c41) };
          const ConjureNativeCollapsibleMeta = ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta;
          intl3 = intl15.intl;
          tmp20 = hasOwnProperty(ConjureNativeCollapsibleMeta, obj2);
        }
        cResult[8] = tmp4;
        cResult[9] = tmp20;
        tmp19 = tmp20;
      } else {
        tmp19 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = intl15.intl;
        const stringResult = intl4.string(_modDef3849.yD8EJS);
        const intl5 = intl15.intl;
        const stringResult1 = intl5.string(_modDef3849.nSPGNb);
        cResult[10] = stringResult;
        cResult[11] = stringResult1;
        tmp24 = stringResult1;
        tmp23 = stringResult;
      } else {
        tmp23 = cResult[10];
        tmp24 = cResult[11];
      }
      const Stack = Stack_Stack.Stack;
      if (cResult[12] === proposal.supported_surfaces) {
        let tmp27;
        let tmp31;
        let stringResult2;
        let tmp34;
        let tmp37;
        if (cResult[13] === tmp4) {
          tmp27 = cResult[14];
        }
        if (cResult[15] !== tmp8) {
          let tmp32 = null;
          if ("" !== tmp8) {
            let obj3 = { direction: "vertical", spacing: 4, children: items };
            const Stack6 = Stack_Stack.Stack;
            const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: intl14.string(_modDef3849.iNS4dl) };
            const Text8 = Text_Text.Text;
            intl14 = intl15.intl;
            items = [hasOwnProperty(Text8, obj4), ];
            const obj5 = { variant: "text-md/normal", color: "text-default", children: tmp8 };
            items[1] = hasOwnProperty(Text_Text.Text, obj5);
            tmp32 = metroRequire(Stack6, obj3);
          }
          cResult[15] = tmp8;
          cResult[16] = tmp32;
          tmp31 = tmp32;
        } else {
          tmp31 = cResult[16];
        }
        if ("" === trimmed) {
          const intl6 = intl15.intl;
          stringResult2 = intl6.string(tmp14(3849)["0+RUWx"]);
        } else {
          const tmp14Result = MarkupUtilsDefault;
          stringResult2 = tmp14Result.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
        }
        if (cResult[17] !== stringResult2) {
          const obj6 = { variant: "text-md/normal", color: "text-default", children: stringResult2 };
          const tmp36 = hasOwnProperty(Text_Text.Text, obj6);
          cResult[17] = stringResult2;
          cResult[18] = tmp36;
          tmp34 = tmp36;
        } else {
          tmp34 = cResult[18];
        }
        if (cResult[19] !== automod) {
          let tmp38 = null;
          if (null != automod) {
            tmp38 = null;
            if (automod.examples.length > 0) {
              const obj7 = { automod };
              tmp38 = hasOwnProperty(tmp14(17294), obj7);
            }
          }
          cResult[19] = automod;
          cResult[20] = tmp38;
          tmp37 = tmp38;
        } else {
          tmp37 = cResult[20];
        }
        if (cResult[21] === projectId) {
          let tmp40;
          if (cResult[22] === proposal) {
            tmp40 = cResult[23];
          }
          if (cResult[24] === botExchanges) {
            let tmp44;
            let tmp47;
            let tmp54;
            let tmp58;
            if (cResult[25] === projectId) {
              tmp44 = cResult[26];
            }
            if (cResult[27] !== tmp12) {
              let tmp48 = null;
              if (null != tmp12) {
                const obj8 = {};
                const tmp14Result3 = ConjurePlanWidgetDefault;
                const merged = Object.assign(tmp12);
                tmp48 = hasOwnProperty(tmp14Result3, obj8);
              }
              cResult[27] = tmp12;
              cResult[28] = tmp48;
              tmp47 = tmp48;
            } else {
              tmp47 = cResult[28];
            }
            if (cResult[29] !== proposal.changes) {
              let tmp55 = null;
              if (proposal.changes.length > 0) {
                const obj9 = { direction: "vertical", spacing: 4, children: items1 };
                const Stack2 = Stack_Stack.Stack;
                const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: intl8.string(_modDef3849["5+mG1z"]) };
                let Text = Text_Text.Text;
                intl8 = intl15.intl;
                items1 = [hasOwnProperty(Text, obj10), ];
                const changes = proposal.changes;
                items1[1] = changes.map((item, index) => {
                  const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
                  const Text = Text_Text.Text;
                  return closure_1_5(Text, obj, index);
                });
                tmp55 = metroRequire(Stack2, obj9);
              }
              cResult[29] = proposal.changes;
              cResult[30] = tmp55;
              tmp54 = tmp55;
            } else {
              tmp54 = cResult[30];
            }
            if (cResult[31] !== proposal.commands) {
              let tmp59 = null;
              if (proposal.commands.length > 0) {
                const obj11 = { direction: "vertical", spacing: 4, children: items2 };
                const Stack3 = Stack_Stack.Stack;
                const obj12 = { variant: "text-sm/semibold", color: "text-muted", children: intl9.string(intl15.t["0hKkS+"]) };
                const Text2 = Text_Text.Text;
                intl9 = intl15.intl;
                items2 = [hasOwnProperty(Text2, obj12), ];
                const commands = proposal.commands;
                items2[1] = commands.map((name, index) => {
                  let obj2;
                  const obj = { variant: "text-sm/medium", color: "text-default", children: "" + obj2.conjurePlanCommandPrefix(name) + name.name };
                  const Text = Text_Text.Text;
                  obj2 = conjurePlanFormat;
                  const children = [closure_1_5(Text, obj), ];
                  let tmp3Result = null;
                  const tmp = closure_1_6;
                  const tmp2 = closure_1_4;
                  const tmp3 = closure_1_5;
                  const tmp4 = require;
                  const tmp5 = dependencyMap;
                  if (null != name.description) {
                    tmp3Result = null;
                    if ("" !== name.description) {
                      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                      tmp3Result = tmp3(tmp4(tmp5[18]).Text, obj3);
                    }
                  }
                  children[1] = tmp3Result;
                  return tmp(tmp2, { children }, index);
                });
                tmp59 = metroRequire(Stack3, obj11);
              }
              cResult[31] = proposal.commands;
              cResult[32] = tmp59;
              tmp58 = tmp59;
            } else {
              tmp58 = cResult[32];
            }
            let tmp62 = null;
            if (mapped.length > 0) {
              const obj13 = { direction: "vertical", spacing: 4, children: items3 };
              const Stack4 = Stack_Stack.Stack;
              const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: intl10.string(_modDef3849["2UbW6r"]) };
              const Text3 = Text_Text.Text;
              intl10 = intl15.intl;
              items3 = [hasOwnProperty(Text3, obj14), ];
              const obj15 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
              const Text4 = Text_Text.Text;
              items3[1] = hasOwnProperty(Text4, obj15);
              tmp62 = metroRequire(Stack4, obj13);
            }
            let tmp65 = null;
            if (mapped1.length > 0) {
              const obj16 = { direction: "vertical", spacing: 4, children: items4 };
              const Stack5 = Stack_Stack.Stack;
              const obj17 = { variant: "text-sm/semibold", color: "text-muted", children: intl11.string(_modDef3849["7TKfpj"]) };
              const Text5 = Text_Text.Text;
              intl11 = intl15.intl;
              items4 = [hasOwnProperty(Text5, obj17), ];
              const obj18 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
              const Text6 = Text_Text.Text;
              items4[1] = hasOwnProperty(Text6, obj18);
              tmp65 = metroRequire(Stack5, obj16);
            }
            if (cResult[33] === onApprove) {
              if (cResult[34] === tmp6) {
                let tmp68;
                if (cResult[35] === tmp4) {
                  tmp68 = cResult[36];
                }
                if (cResult[37] === Stack) {
                  if (cResult[38] === tmp27) {
                    if (cResult[39] === tmp31) {
                      if (cResult[40] === tmp34) {
                        if (cResult[41] === tmp37) {
                          if (cResult[42] === tmp40) {
                            if (cResult[43] === tmp44) {
                              if (cResult[44] === tmp47) {
                                if (cResult[45] === tmp54) {
                                  if (cResult[46] === tmp58) {
                                    if (cResult[47] === tmp62) {
                                      if (cResult[48] === tmp65) {
                                        let tmp73;
                                        if (cResult[49] === tmp68) {
                                          tmp73 = cResult[50];
                                        }
                                        if (cResult[51] === tmp16) {
                                          if (cResult[52] === tmp5) {
                                            if (cResult[53] === onToggleExpanded) {
                                              if (cResult[54] === tmp4) {
                                                if (cResult[55] === tmp73) {
                                                  if (cResult[56] === tmp17) {
                                                    if (cResult[57] === tmp19) {
                                                      if (cResult[58] === tmp23) {
                                                        let tmp76;
                                                        if (cResult[59] === tmp24) {
                                                          tmp76 = cResult[60];
                                                        }
                                                        if (cResult[61] === tmp15) {
                                                          let tmp79;
                                                          if (cResult[62] === tmp76) {
                                                            tmp79 = cResult[63];
                                                          }
                                                          return tmp79;
                                                        }
                                                        const obj19 = { children: tmp76 };
                                                        const tmp81 = hasOwnProperty(tmp15, obj19);
                                                        cResult[61] = tmp15;
                                                        cResult[62] = tmp76;
                                                        cResult[63] = tmp81;
                                                        tmp79 = tmp81;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj20 = { title: tmp17, meta: tmp19, superseded: tmp4, expanded: tmp5, onToggleExpanded, showLabel: tmp23, hideLabel: tmp24, children: tmp73 };
                                        const tmp78 = hasOwnProperty(tmp16, obj20);
                                        cResult[51] = tmp16;
                                        cResult[52] = tmp5;
                                        cResult[53] = onToggleExpanded;
                                        cResult[54] = tmp4;
                                        cResult[55] = tmp73;
                                        cResult[56] = tmp17;
                                        cResult[57] = tmp19;
                                        cResult[58] = tmp23;
                                        cResult[59] = tmp24;
                                        cResult[60] = tmp78;
                                        tmp76 = tmp78;
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
                  }
                }
                const obj21 = { direction: "vertical", spacing: 8, children: items5 };
                items5 = [tmp27, tmp31, tmp34, tmp37, tmp40, tmp44, tmp47, tmp54, tmp58, tmp62, tmp65, tmp68];
                const tmp75 = metroRequire(Stack, obj21);
                cResult[37] = Stack;
                cResult[38] = tmp27;
                cResult[39] = tmp31;
                cResult[40] = tmp34;
                cResult[41] = tmp37;
                cResult[42] = tmp40;
                cResult[43] = tmp44;
                cResult[44] = tmp47;
                cResult[45] = tmp54;
                cResult[46] = tmp58;
                cResult[47] = tmp62;
                cResult[48] = tmp65;
                cResult[49] = tmp68;
                cResult[50] = tmp75;
                tmp73 = tmp75;
              }
            }
            let tmp69 = null;
            if (null != onApprove) {
              tmp69 = null;
              if (!tmp4) {
                const obj22 = { style: tmp6.planActions, children: items6 };
                const obj23 = { text: intl12.string(_modDef3849["6S+wRM"]), variant: "primary", onPress: onApprove };
                const Button = components_Button_Button.Button;
                intl12 = intl15.intl;
                items6 = [hasOwnProperty(Button, obj23), ];
                const obj24 = { variant: "text-sm/normal", color: "text-muted", style: tmp6.planReplyHint, children: intl13.string(_modDef3849.IZoqbR) };
                const Text7 = Text_Text.Text;
                intl13 = intl15.intl;
                items6[1] = hasOwnProperty(Text7, obj24);
                tmp69 = metroRequire(React3, obj22);
              }
            }
            cResult[33] = onApprove;
            cResult[34] = tmp6;
            cResult[35] = tmp4;
            cResult[36] = tmp69;
            tmp68 = tmp69;
          }
          let tmp45 = null;
          if (botExchanges.length > 0) {
            const obj25 = { projectId, exchanges: botExchanges };
            tmp45 = hasOwnProperty(tmp14(17297), obj25);
          }
          cResult[24] = botExchanges;
          cResult[25] = projectId;
          cResult[26] = tmp45;
          tmp44 = tmp45;
        }
        let tmp41 = null;
        if (null != proposal.design_image) {
          const obj26 = { projectId, design: proposal.design_image, alt: string(tmpResult7.conjurePlanDesignAlt(proposal)) };
          const intl7 = intl15.intl;
          string = intl7.string;
          tmpResult7 = conjurePlanDesign;
          tmp41 = hasOwnProperty(closure_8, obj26);
        }
        cResult[21] = projectId;
        cResult[22] = proposal;
        cResult[23] = tmp41;
        tmp40 = tmp41;
      }
      let tmp29Result = null;
      if (!tmp4) {
        let supported_surfaces = proposal.supported_surfaces;
        const tmp14Result4 = ConjurePlanTypeTagsDefault;
        const tmp29 = hasOwnProperty;
        if (supported_surfaces == null) {
          supported_surfaces = [];
        }
        const obj27 = { tags: supported_surfaces };
        tmp29Result = tmp29(tmp14Result4, obj27);
      }
      cResult[12] = proposal.supported_surfaces;
      cResult[13] = tmp4;
      cResult[14] = tmp29Result;
      tmp27 = tmp29Result;
    }
    if (tmp4) {
      let formatToPlainStringResult;
      if (null != version) {
        const intl2 = intl15.intl;
        const obj28 = { version };
        formatToPlainStringResult = intl2.formatToPlainString(tmp14(3849).YZ3qJs, obj28);
      }
      cResult[5] = tmp4;
      cResult[6] = version;
      cResult[7] = formatToPlainStringResult;
      tmp17 = formatToPlainStringResult;
    }
    const intl = intl15.intl;
    formatToPlainStringResult = intl.string(tmp14(3849)["3b6e7o"]);
  }
  let tmp13 = null;
  const tmpResult8 = conjurePlanTags;
  if (tmpResult8.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp13 = conjurePlanWidget;
  }
  cResult[2] = proposal;
  cResult[3] = conjurePlanWidget;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : (function ConjurePlanProposalCard(expanded) {
  let Stack;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl3;
  let intl4;
  let intl5;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj27;
  let projectId;
  let proposal;
  let string;
  let superseded;
  let tmp3Result8;
  let tmp8Result;
  let version;
  ({ projectId, proposal, version, superseded } = expanded);
  if (superseded === undefined) {
    superseded = false;
  }
  let flag = expanded.expanded;
  if (flag === undefined) {
    flag = true;
  }
  const onApprove = expanded.onApprove;
  const onToggleExpanded = expanded.onToggleExpanded;
  let tmp = closure_7();
  const str = proposal.summary;
  const trimmed = str.trim();
  let str3;
  if (proposal.what_changed != null) {
    str3 = str2.trim();
  }
  if (str3 == null) {
    str3 = "";
  }
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  let tmp3 = require;
  let tmp4 = dependencyMap;
  const mapped = bot_permissions.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let tmp3Result = conjurePlanTags;
  let automod = null;
  if (tmp3Result.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  const tmp3Result5 = conjurePlanWidget2;
  const conjurePlanWidget = tmp3Result5.useConjurePlanWidget(projectId, proposal);
  let tmp7 = null;
  const tmp3Result6 = conjurePlanTags;
  if (tmp3Result6.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp7 = conjurePlanWidget;
  }
  const tmp3Result7 = useConjurePlanBotPreviewItems;
  const botExchanges = tmp3Result7.useConjurePlanBotExchanges(proposal).botExchanges;
  const tmp10 = ConjureNativeCardSurfaceDefault;
  if (superseded) {
    let formatToPlainStringResult;
    let stringResult;
    if (null != version) {
      const intl2 = intl15.intl;
      let obj = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp9(3849).YZ3qJs, obj);
    }
    let obj2 = { title: formatToPlainStringResult, meta: tmp8Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl4.string(_modDef3849.yD8EJS), hideLabel: intl5.string(_modDef3849.nSPGNb), children: metroRequire(Stack, obj27) };
    tmp8Result = null;
    if (superseded) {
      let obj3 = { children: intl3.string(_modDef3849.hF2c41) };
      const ConjureNativeCollapsibleMeta = ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta;
      intl3 = intl15.intl;
      tmp8Result = tmp8(ConjureNativeCollapsibleMeta, obj3);
    }
    intl4 = intl15.intl;
    intl5 = intl15.intl;
    let tmp8Result6 = null;
    Stack = Stack_Stack.Stack;
    if (!superseded) {
      let supported_surfaces = proposal.supported_surfaces;
      const tmp9Result = ConjurePlanTypeTagsDefault;
      if (supported_surfaces == null) {
        supported_surfaces = [];
      }
      const obj4 = { tags: supported_surfaces };
      tmp8Result6 = tmp8(tmp9Result, obj4);
    }
    const items = [tmp8Result6, , , , , , , , , , , ];
    let tmp14Result = null;
    if ("" !== str3) {
      const obj5 = { direction: "vertical", spacing: 4, children: items1 };
      const Stack6 = Stack_Stack.Stack;
      const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: intl14.string(_modDef3849.iNS4dl) };
      const Text9 = Text_Text.Text;
      intl14 = intl15.intl;
      items1 = [hasOwnProperty(Text9, obj6), ];
      const obj7 = { variant: "text-md/normal", color: "text-default", children: str3 };
      items1[1] = hasOwnProperty(Text_Text.Text, obj7);
      tmp14Result = tmp14(Stack6, obj5);
    }
    items[1] = tmp14Result;
    let Text = Text_Text.Text;
    if ("" === trimmed) {
      const intl6 = intl15.intl;
      stringResult = intl6.string(tmp9(3849)["0+RUWx"]);
    } else {
      const tmp9Result3 = MarkupUtilsDefault;
      stringResult = tmp9Result3.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
    }
    const obj8 = { variant: "text-md/normal", color: "text-default", children: stringResult };
    items[2] = hasOwnProperty(Text, obj8);
    let tmp8Result7 = null;
    if (null != automod) {
      tmp8Result7 = null;
      if (automod.examples.length > 0) {
        const obj9 = { automod };
        tmp8Result7 = tmp8(tmp9(17294), obj9);
      }
    }
    items[3] = tmp8Result7;
    let tmp8Result8 = null;
    if (null != proposal.design_image) {
      const obj10 = { projectId, design: proposal.design_image, alt: string(tmp3Result8.conjurePlanDesignAlt(proposal)) };
      const intl7 = intl15.intl;
      string = intl7.string;
      tmp3Result8 = conjurePlanDesign;
      tmp8Result8 = tmp8(closure_8, obj10);
    }
    items[4] = tmp8Result8;
    let tmp8Result9 = null;
    if (botExchanges.length > 0) {
      const obj11 = { projectId, exchanges: botExchanges };
      tmp8Result9 = tmp8(tmp9(17297), obj11);
    }
    items[5] = tmp8Result9;
    let tmp8Result10 = null;
    if (null != tmp7) {
      const obj12 = {};
      const tmp9Result4 = ConjurePlanWidgetDefault;
      const merged = Object.assign(tmp7);
      tmp8Result10 = tmp8(tmp9Result4, obj12);
    }
    items[6] = tmp8Result10;
    let tmp14Result6 = null;
    if (proposal.changes.length > 0) {
      const obj13 = { direction: "vertical", spacing: 4, children: items2 };
      const Stack2 = Stack_Stack.Stack;
      const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: intl8.string(_modDef3849["5+mG1z"]) };
      const Text2 = Text_Text.Text;
      intl8 = intl15.intl;
      items2 = [hasOwnProperty(Text2, obj14), ];
      const changes = proposal.changes;
      items2[1] = changes.map((item, index) => {
        const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
        const Text = Text_Text.Text;
        return closure_1_5(Text, obj, index);
      });
      tmp14Result6 = tmp14(Stack2, obj13);
    }
    items[7] = tmp14Result6;
    let tmp14Result7 = null;
    if (proposal.commands.length > 0) {
      const obj15 = { direction: "vertical", spacing: 4, children: items3 };
      const Stack3 = Stack_Stack.Stack;
      const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: intl9.string(intl15.t["0hKkS+"]) };
      const Text3 = Text_Text.Text;
      intl9 = intl15.intl;
      items3 = [hasOwnProperty(Text3, obj16), ];
      const commands = proposal.commands;
      items3[1] = commands.map((name, index) => {
        let obj2;
        const obj = { variant: "text-sm/medium", color: "text-default", children: "" + obj2.conjurePlanCommandPrefix(name) + name.name };
        const Text = Text_Text.Text;
        obj2 = conjurePlanFormat;
        const children = [closure_1_5(Text, obj), ];
        let tmp3Result = null;
        const tmp = closure_1_6;
        const tmp2 = closure_1_4;
        const tmp3 = closure_1_5;
        const tmp4 = require;
        const tmp5 = dependencyMap;
        if (null != name.description) {
          tmp3Result = null;
          if ("" !== name.description) {
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
            tmp3Result = tmp3(tmp4(tmp5[18]).Text, obj3);
          }
        }
        children[1] = tmp3Result;
        return tmp(tmp2, { children }, index);
      });
      tmp14Result7 = tmp14(Stack3, obj15);
    }
    items[8] = tmp14Result7;
    let tmp14Result8 = null;
    if (mapped.length > 0) {
      const obj17 = { direction: "vertical", spacing: 4, children: items4 };
      const Stack4 = Stack_Stack.Stack;
      const obj18 = { variant: "text-sm/semibold", color: "text-muted", children: intl10.string(_modDef3849["2UbW6r"]) };
      const Text4 = Text_Text.Text;
      intl10 = intl15.intl;
      items4 = [hasOwnProperty(Text4, obj18), ];
      const obj19 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
      const Text5 = Text_Text.Text;
      items4[1] = hasOwnProperty(Text5, obj19);
      tmp14Result8 = tmp14(Stack4, obj17);
    }
    items[9] = tmp14Result8;
    let tmp14Result9 = null;
    if (mapped1.length > 0) {
      const obj20 = { direction: "vertical", spacing: 4, children: items5 };
      const Stack5 = Stack_Stack.Stack;
      const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: intl11.string(_modDef3849["7TKfpj"]) };
      const Text6 = Text_Text.Text;
      intl11 = intl15.intl;
      items5 = [hasOwnProperty(Text6, obj21), ];
      const obj22 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
      const Text7 = Text_Text.Text;
      items5[1] = hasOwnProperty(Text7, obj22);
      tmp14Result9 = tmp14(Stack5, obj20);
    }
    items[10] = tmp14Result9;
    let tmp14Result10 = null;
    if (null != onApprove) {
      tmp14Result10 = null;
      if (!superseded) {
        const obj23 = { style: tmp.planActions, children: items6 };
        const obj24 = { text: intl12.string(_modDef3849["6S+wRM"]), variant: "primary", onPress: onApprove };
        const Button = components_Button_Button.Button;
        intl12 = intl15.intl;
        items6 = [hasOwnProperty(Button, obj24), ];
        const obj25 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: intl13.string(_modDef3849.IZoqbR) };
        const Text8 = Text_Text.Text;
        intl13 = intl15.intl;
        items6[1] = hasOwnProperty(Text8, obj25);
        tmp14Result10 = tmp14(React3, obj23);
      }
    }
    obj27 = { direction: "vertical", spacing: 8, children: items };
    items[11] = tmp14Result10;
    const obj26 = { children: hasOwnProperty(tmp11, obj2) };
    return hasOwnProperty(tmp10, obj26);
  }
  const intl = intl15.intl;
  formatToPlainStringResult = intl.string(tmp9(3849)["3b6e7o"]);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(alt) {
  let design;
  let handleError;
  let intl;
  let intl2;
  let items;
  let obj7;
  let obj9;
  let projectId;
  let src;
  const obj = react2;
  const cResult = obj.c(10);
  alt = alt.alt;
  ({ projectId, design } = alt);
  const tmp4 = closure_7();
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  let tmp6 = null;
  if (!conjureAttachmentImage.gone) {
    let first;
    let tmp15;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3849.X15LLY) };
      const Text = tmp(5088).Text;
      intl = tmp(1126).intl;
      const tmp11 = hasOwnProperty(Text, obj3);
      cResult[0] = tmp11;
      first = tmp11;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === alt) {
      if (cResult[2] === handleError) {
        if (cResult[3] === src) {
          if (cResult[4] === tmp4.designImage) {
            let tmp12;
            let tmp19;
            let tmp23;
            if (cResult[5] === tmp4.designPlaceholder) {
              tmp12 = cResult[6];
            }
            const _Symbol2 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(_modDef3849.nR4B8P) };
              const Text2 = tmp(5088).Text;
              intl2 = tmp(1126).intl;
              const tmp22 = hasOwnProperty(Text2, obj4);
              cResult[7] = tmp22;
              tmp19 = tmp22;
            } else {
              tmp19 = cResult[7];
            }
            if (cResult[8] !== tmp12) {
              const obj5 = { direction: "vertical", spacing: 4, children: items };
              items = [first, tmp12, tmp19];
              const tmp25 = metroRequire(Stack_Stack.Stack, obj5);
              cResult[8] = tmp12;
              cResult[9] = tmp25;
              tmp23 = tmp25;
            } else {
              tmp23 = cResult[9];
            }
            tmp6 = tmp23;
          }
        }
      }
    }
    if (null == src) {
      const obj6 = { style: tmp4.designPlaceholder, children: hasOwnProperty(_false, obj7) };
      obj7 = { size: "small", accessibilityLabel: alt };
      tmp15 = hasOwnProperty(React3, obj6);
    } else {
      const obj8 = { source: obj9, style: tmp4.designImage, resizeMode: "cover", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj9 = { uri: src };
      tmp15 = hasOwnProperty(FastImageDefault, obj8);
    }
    cResult[1] = alt;
    cResult[2] = handleError;
    cResult[3] = src;
    cResult[4] = tmp4.designImage;
    cResult[5] = tmp4.designPlaceholder;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  }
  return tmp6;
}) : (function PlanDesign(alt) {
  let design;
  let intl;
  let intl2;
  let obj4;
  let obj6;
  let projectId;
  alt = alt.alt;
  ({ projectId, design } = alt);
  const tmp = closure_7();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  let tmp7Result = null;
  if (!conjureAttachmentImage.gone) {
    let tmp8Result;
    const Stack = tmp2(5377).Stack;
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3849.X15LLY) };
    const Text = tmp2(5088).Text;
    intl = tmp2(1126).intl;
    const items = [hasOwnProperty(Text, obj2), , ];
    const tmp7 = metroRequire;
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: hasOwnProperty(_false, obj4) };
      obj4 = { size: "small", accessibilityLabel: alt };
      tmp8Result = tmp8(React3, obj3);
    } else {
      const obj5 = { source: obj6, style: tmp.designImage, resizeMode: "cover", onError: tmp5, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj6 = { uri: src };
      tmp8Result = tmp8(tmp9(6157), obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: items };
    items[1] = tmp8Result;
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(_modDef3849.nR4B8P) };
    const Text2 = tmp2(5088).Text;
    intl2 = tmp2(1126).intl;
    items[2] = hasOwnProperty(Text2, obj8);
    tmp7Result = tmp7(Stack, obj7);
  }
  return tmp7Result;
});
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default tmp6;
