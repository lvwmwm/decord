// Module ID: 11899
// Function ID: 11900
// Name: ConjurePlanProposalCard
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 11900, 11901, 6947, 11902, 11905, 1126, 3849, 11907, 11909, 11910, 11914, 11915, 11896, 11898, 5377, 5088, 5079, 11830, 11916, 5379, 11894, 6157, 2]

// Module 11899 (ConjurePlanProposalCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3849 from "module_3849" /* 3849 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5079 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6157 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 11894 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 11896 */;
import ConjureNativeCollapsibleSectionDefault from "ConjureNativeCollapsibleSection" /* 11898 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 11907 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 11910 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 11914 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const Stack_Stack = tmp(5377);
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
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl8;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj28;
  let obj30;
  let obj32;
  let obj34;
  let obj36;
  let onApprove;
  let onToggleExpanded;
  let projectId;
  let proposal;
  let superseded;
  let tmp41;
  let tmp71;
  let tmp8;
  let version;
  let tmp = obj28;
  let tmp2 = dependencyMap;
  let obj = obj28(576);
  const cResult = obj.c(83);
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
  const mapped = bot_permissions.map(tmp(11900).formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(tmp(11900).formatConjurePlanRequirementName);
  let automod = null;
  const tmpResult = tmp(11901);
  if (tmpResult.planDeclaresSurface(proposal, tmp(6947).ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  const tmpResult6 = tmp(11902);
  const conjurePlanWidget = tmpResult6.useConjurePlanWidget(projectId, proposal);
  if (cResult[2] === proposal) {
    let tmp12;
    if (cResult[3] === conjurePlanWidget) {
      tmp12 = cResult[4];
    }
    const tmpResult7 = tmp(11905);
    const botExchanges = tmpResult7.useConjurePlanBotExchanges(proposal).botExchanges;
    if (cResult[5] === automod) {
      if (cResult[6] === botExchanges) {
        if (cResult[7] === projectId) {
          if (cResult[8] === proposal) {
            if (cResult[9] === tmp12) {
              obj28 = cResult[10];
            }
            if (cResult[28] === tmp14) {
              let arr7;
              let tmp51;
              if (cResult[29] === proposal) {
                importDefault = cResult[30];
                arr7 = cResult[31];
              }
              const tmp49 = ConjureNativeCardSurfaceDefault;
              const tmp50 = ConjureNativeCollapsibleSectionDefault;
              if (cResult[32] === tmp4) {
                let tmp53;
                let tmp58;
                let tmp57;
                let tmp61;
                let stringResult2;
                let tmp64;
                if (cResult[33] === version) {
                  tmp51 = cResult[34];
                }
                if (cResult[35] !== tmp4) {
                  let tmp54 = null;
                  if (tmp4) {
                    let obj2 = { children: intl8.string(_modDef3849.hF2c41) };
                    const ConjureNativeCollapsibleMeta = tmp(11898).ConjureNativeCollapsibleMeta;
                    intl8 = tmp(1126).intl;
                    tmp54 = closure_5(ConjureNativeCollapsibleMeta, obj2);
                  }
                  cResult[35] = tmp4;
                  cResult[36] = tmp54;
                  tmp53 = tmp54;
                } else {
                  tmp53 = cResult[36];
                }
                const _Symbol = Symbol;
                if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl9 = tmp(1126).intl;
                  const stringResult = intl9.string(_modDef3849.yD8EJS);
                  const intl10 = tmp(1126).intl;
                  const stringResult1 = intl10.string(_modDef3849.nSPGNb);
                  cResult[37] = stringResult;
                  cResult[38] = stringResult1;
                  tmp58 = stringResult1;
                  tmp57 = stringResult;
                } else {
                  tmp57 = cResult[37];
                  tmp58 = cResult[38];
                }
                let Stack = tmp(5377).Stack;
                if (cResult[39] !== tmp8) {
                  let tmp62 = null;
                  if ("" !== tmp8) {
                    let obj3 = { direction: "vertical", spacing: 4, children: items };
                    const Stack7 = tmp(5377).Stack;
                    const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: intl19.string(_modDef3849.iNS4dl) };
                    const Text9 = tmp(5088).Text;
                    intl19 = tmp(1126).intl;
                    items = [closure_5(Text9, obj4), ];
                    const obj5 = { variant: "text-md/normal", color: "text-default", children: tmp8 };
                    items[1] = closure_5(tmp(5088).Text, obj5);
                    tmp62 = closure_6(Stack7, obj3);
                  }
                  cResult[39] = tmp8;
                  cResult[40] = tmp62;
                  tmp61 = tmp62;
                } else {
                  tmp61 = cResult[40];
                }
                if ("" === trimmed) {
                  const intl11 = tmp(1126).intl;
                  stringResult2 = intl11.string(tmp48(3849)["0+RUWx"]);
                } else {
                  const tmp48Result = MarkupUtilsDefault;
                  stringResult2 = tmp48Result.parse(trimmed, true, tmp(11830).CONJURE_MARKUP_OPTIONS);
                }
                if (cResult[41] !== stringResult2) {
                  const obj6 = { variant: "text-md/normal", color: "text-default", children: stringResult2 };
                  const tmp66 = closure_5(tmp(5088).Text, obj6);
                  cResult[41] = stringResult2;
                  cResult[42] = tmp66;
                  tmp64 = tmp66;
                } else {
                  tmp64 = cResult[42];
                }
                if (cResult[43] === tmp5) {
                  if (cResult[44] === tmp14) {
                    if (cResult[45] === arr6) {
                      let tmp67;
                      if (cResult[46] === tmp4) {
                        tmp67 = cResult[47];
                      }
                      if (cResult[48] === tmp14) {
                        let tmp73;
                        let tmp75;
                        let tmp79;
                        if (cResult[49] === arr7) {
                          tmp73 = cResult[50];
                        }
                        if (cResult[51] !== proposal.changes) {
                          let tmp76 = null;
                          if (proposal.changes.length > 0) {
                            const obj7 = { direction: "vertical", spacing: 4, children: items1 };
                            const Stack3 = tmp(5377).Stack;
                            const obj8 = { variant: "text-sm/semibold", color: "text-muted", children: intl13.string(_modDef3849["5+mG1z"]) };
                            const Text2 = tmp(5088).Text;
                            intl13 = tmp(1126).intl;
                            items1 = [closure_5(Text2, obj8), ];
                            const changes = proposal.changes;
                            items1[1] = changes.map((item, index) => {
                              const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
                              const Text = obj28(dependencyMap[22]).Text;
                              return closure_1_5(Text, obj, index);
                            });
                            tmp76 = closure_6(Stack3, obj7);
                          }
                          cResult[51] = proposal.changes;
                          cResult[52] = tmp76;
                          tmp75 = tmp76;
                        } else {
                          tmp75 = cResult[52];
                        }
                        if (cResult[53] !== proposal.commands) {
                          let tmp80 = null;
                          if (proposal.commands.length > 0) {
                            const obj9 = { direction: "vertical", spacing: 4, children: items2 };
                            const Stack4 = tmp(5377).Stack;
                            const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: intl14.string(tmp(1126).t["0hKkS+"]) };
                            const Text3 = tmp(5088).Text;
                            intl14 = tmp(1126).intl;
                            items2 = [closure_5(Text3, obj10), ];
                            const commands = proposal.commands;
                            items2[1] = commands.map((name, index) => {
                              let obj2;
                              const obj = { variant: "text-sm/medium", color: "text-default", children: "" + obj2.conjurePlanCommandPrefix(name) + name.name };
                              const Text = obj28(dependencyMap[22]).Text;
                              obj2 = obj28(dependencyMap[7]);
                              const children = [closure_1_5(Text, obj), ];
                              let tmp3Result = null;
                              const tmp = closure_1_6;
                              const tmp2 = closure_1_4;
                              const tmp3 = closure_1_5;
                              const tmp4 = obj28;
                              const tmp5 = dependencyMap;
                              if (null != name.description) {
                                tmp3Result = null;
                                if ("" !== name.description) {
                                  const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                                  tmp3Result = tmp3(tmp4(tmp5[22]).Text, obj3);
                                }
                              }
                              children[1] = tmp3Result;
                              return tmp(tmp2, { children }, index);
                            });
                            tmp80 = closure_6(Stack4, obj9);
                          }
                          cResult[53] = proposal.commands;
                          cResult[54] = tmp80;
                          tmp79 = tmp80;
                        } else {
                          tmp79 = cResult[54];
                        }
                        let tmp83 = null;
                        if (mapped.length > 0) {
                          const obj11 = { direction: "vertical", spacing: 4, children: items3 };
                          const Stack5 = tmp(5377).Stack;
                          const obj12 = { variant: "text-sm/semibold", color: "text-muted", children: intl15.string(_modDef3849["2UbW6r"]) };
                          const Text4 = tmp(5088).Text;
                          intl15 = tmp(1126).intl;
                          items3 = [closure_5(Text4, obj12), ];
                          const obj13 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
                          const Text5 = tmp(5088).Text;
                          items3[1] = closure_5(Text5, obj13);
                          tmp83 = closure_6(Stack5, obj11);
                        }
                        let tmp86 = null;
                        if (mapped1.length > 0) {
                          const obj14 = { direction: "vertical", spacing: 4, children: items4 };
                          const Stack6 = tmp(5377).Stack;
                          const obj15 = { variant: "text-sm/semibold", color: "text-muted", children: intl16.string(_modDef3849["7TKfpj"]) };
                          const Text6 = tmp(5088).Text;
                          intl16 = tmp(1126).intl;
                          items4 = [closure_5(Text6, obj15), ];
                          const obj16 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
                          const Text7 = tmp(5088).Text;
                          items4[1] = closure_5(Text7, obj16);
                          tmp86 = closure_6(Stack6, obj14);
                        }
                        if (cResult[55] === onApprove) {
                          if (cResult[56] === tmp6) {
                            let tmp89;
                            if (cResult[57] === tmp4) {
                              tmp89 = cResult[58];
                            }
                            if (cResult[59] === Stack) {
                              if (cResult[60] === tmp61) {
                                if (cResult[61] === tmp64) {
                                  if (cResult[62] === tmp67) {
                                    if (cResult[63] === tmp73) {
                                      if (cResult[64] === tmp75) {
                                        if (cResult[65] === tmp79) {
                                          if (cResult[66] === tmp83) {
                                            if (cResult[67] === tmp86) {
                                              let tmp94;
                                              if (cResult[68] === tmp89) {
                                                tmp94 = cResult[69];
                                              }
                                              if (cResult[70] === tmp50) {
                                                if (cResult[71] === tmp5) {
                                                  if (cResult[72] === onToggleExpanded) {
                                                    if (cResult[73] === tmp4) {
                                                      if (cResult[74] === tmp94) {
                                                        if (cResult[75] === tmp51) {
                                                          if (cResult[76] === tmp53) {
                                                            if (cResult[77] === tmp57) {
                                                              let tmp97;
                                                              if (cResult[78] === tmp58) {
                                                                tmp97 = cResult[79];
                                                              }
                                                              if (cResult[80] === tmp49) {
                                                                let tmp100;
                                                                if (cResult[81] === tmp97) {
                                                                  tmp100 = cResult[82];
                                                                }
                                                                return tmp100;
                                                              }
                                                              const obj17 = { children: tmp97 };
                                                              const tmp102 = closure_5(tmp49, obj17);
                                                              cResult[80] = tmp49;
                                                              cResult[81] = tmp97;
                                                              cResult[82] = tmp102;
                                                              tmp100 = tmp102;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj18 = { title: tmp51, meta: tmp53, superseded: tmp4, expanded: tmp5, onToggleExpanded, showLabel: tmp57, hideLabel: tmp58, children: tmp94 };
                                              const tmp99 = closure_5(tmp50, obj18);
                                              cResult[70] = tmp50;
                                              cResult[71] = tmp5;
                                              cResult[72] = onToggleExpanded;
                                              cResult[73] = tmp4;
                                              cResult[74] = tmp94;
                                              cResult[75] = tmp51;
                                              cResult[76] = tmp53;
                                              cResult[77] = tmp57;
                                              cResult[78] = tmp58;
                                              cResult[79] = tmp99;
                                              tmp97 = tmp99;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj19 = { direction: "vertical", spacing: 8, children: items5 };
                            items5 = [tmp61, tmp64, tmp67, tmp73, tmp75, tmp79, tmp83, tmp86, tmp89];
                            const tmp96 = closure_6(Stack, obj19);
                            cResult[59] = Stack;
                            cResult[60] = tmp61;
                            cResult[61] = tmp64;
                            cResult[62] = tmp67;
                            cResult[63] = tmp73;
                            cResult[64] = tmp75;
                            cResult[65] = tmp79;
                            cResult[66] = tmp83;
                            cResult[67] = tmp86;
                            cResult[68] = tmp89;
                            cResult[69] = tmp96;
                            tmp94 = tmp96;
                          }
                        }
                        let tmp90 = null;
                        if (null != onApprove) {
                          tmp90 = null;
                          if (!tmp4) {
                            const obj20 = { style: tmp6.planActions, children: items6 };
                            const obj21 = { text: intl17.string(_modDef3849["6S+wRM"]), variant: "primary", onPress: onApprove };
                            const Button = tmp(5379).Button;
                            intl17 = tmp(1126).intl;
                            items6 = [closure_5(Button, obj21), ];
                            const obj22 = { variant: "text-sm/normal", color: "text-muted", style: tmp6.planReplyHint, children: intl18.string(_modDef3849.IZoqbR) };
                            const Text8 = tmp(5088).Text;
                            intl18 = tmp(1126).intl;
                            items6[1] = closure_5(Text8, obj22);
                            tmp90 = closure_6(closure_4, obj20);
                          }
                        }
                        cResult[55] = onApprove;
                        cResult[56] = tmp6;
                        cResult[57] = tmp4;
                        cResult[58] = tmp90;
                        tmp89 = tmp90;
                      }
                      const mapped2 = arr7.map((item) => {
                        let items;
                        let tmp2 = null;
                        if (null != obj28[item]) {
                          const obj = { direction: "vertical", spacing: 4, children: items };
                          const Stack = Stack_Stack.Stack;
                          const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: obj28[item].label };
                          items = [hasOwnProperty(Text_Text.Text, obj2), obj28[item].content];
                          tmp2 = metroRequire(Stack, obj, item);
                        }
                        return tmp2;
                      });
                      cResult[48] = tmp14;
                      cResult[49] = arr7;
                      cResult[50] = mapped2;
                      tmp73 = mapped2;
                    }
                  }
                }
                let tmp69Result = null;
                if (arr6.length > 0) {
                  let tmp70Result;
                  const Stack2 = tmp(5377).Stack;
                  const obj23 = { variant: "text-sm/semibold", color: "text-muted", children: intl12.string(_modDef3849.mrMYrN) };
                  let Text = tmp(5088).Text;
                  intl12 = tmp(1126).intl;
                  const items7 = [closure_5(Text, obj23), ];
                  const tmp69 = closure_6;
                  if (1 === arr6.length) {
                    const obj24 = { row: arr6[0], previews: tmp14 };
                    tmp70Result = tmp70(tmp(11916).ConjurePlanSingleSurface, obj24);
                  } else {
                    const obj25 = { rows: arr6, previews: tmp14, cycling: tmp71 };
                    tmp71 = !tmp4;
                    const ConjurePlanSurfaceNav = tmp(11916).ConjurePlanSurfaceNav;
                    if (!tmp4) {
                      tmp71 = tmp5;
                    }
                    tmp70Result = tmp70(ConjurePlanSurfaceNav, obj25);
                  }
                  const obj26 = { direction: "vertical", spacing: 12, children: items7 };
                  items7[1] = tmp70Result;
                  tmp69Result = tmp69(Stack2, obj26);
                }
                cResult[43] = tmp5;
                cResult[44] = tmp14;
                cResult[45] = arr6;
                cResult[46] = tmp4;
                cResult[47] = tmp69Result;
                tmp67 = tmp69Result;
              }
              if (tmp4) {
                let formatToPlainStringResult;
                if (null != version) {
                  const intl7 = tmp(1126).intl;
                  const obj27 = { version };
                  formatToPlainStringResult = intl7.formatToPlainString(tmp48(3849).YZ3qJs, obj27);
                }
                cResult[32] = tmp4;
                cResult[33] = version;
                cResult[34] = formatToPlainStringResult;
                tmp51 = formatToPlainStringResult;
              }
              const intl6 = tmp(1126).intl;
              formatToPlainStringResult = intl6.string(tmp48(3849)["3b6e7o"]);
            }
            const _Object = Object;
            const keys = Object.keys(tmp14);
            const tmpResult8 = tmp(11915);
            const result = tmpResult8.conjurePlanSurfaceRows(proposal, keys);
            importDefault = result;
            const found = keys.filter((item) => {
              let closure_0 = item;
              return !importDefault.some((preview) => preview.preview === closure_0);
            });
            cResult[28] = tmp14;
            cResult[29] = proposal;
            cResult[30] = result;
            cResult[31] = found;
            arr7 = found;
          }
        }
      }
    }
    obj28 = {};
    if (null != automod) {
      if (automod.examples.length > 0) {
        let tmp15;
        let tmp18;
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult3 = intl.string(_modDef3849.z4ZKYG);
          cResult[11] = stringResult3;
          tmp15 = stringResult3;
        } else {
          tmp15 = cResult[11];
        }
        if (cResult[12] !== automod) {
          const obj29 = { label: tmp15, content: closure_5(ConjurePlanAutomodExamplesDefault, obj30) };
          obj30 = { automod };
          cResult[12] = automod;
          cResult[13] = obj29;
          tmp18 = obj29;
        } else {
          tmp18 = cResult[13];
        }
        obj28.automod = tmp18;
      }
    }
    if (null != proposal.design_image) {
      let tmp21;
      let tmp24;
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult4 = intl2.string(_modDef3849.X15LLY);
        cResult[14] = stringResult4;
        tmp21 = stringResult4;
      } else {
        tmp21 = cResult[14];
      }
      const design_image = proposal.design_image;
      if (cResult[15] !== proposal) {
        const intl3 = tmp(1126).intl;
        const string = intl3.string;
        const tmpResult9 = tmp(11909);
        const stringResult5 = string(tmpResult9.conjurePlanDesignAlt(proposal));
        cResult[15] = proposal;
        cResult[16] = stringResult5;
        tmp24 = stringResult5;
      } else {
        tmp24 = cResult[16];
      }
      if (cResult[17] === projectId) {
        if (cResult[18] === proposal.design_image) {
          let tmp26;
          if (cResult[19] === tmp24) {
            tmp26 = cResult[20];
          }
          obj28.design = tmp26;
        }
      }
      const obj31 = { label: tmp21, content: closure_5(closure_8, obj32) };
      obj32 = { projectId, design: design_image, alt: tmp24 };
      cResult[17] = projectId;
      cResult[18] = proposal.design_image;
      cResult[19] = tmp24;
      cResult[20] = obj31;
      tmp26 = obj31;
    }
    if (botExchanges.length > 0) {
      let tmp29;
      const _Symbol4 = Symbol;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult6 = intl4.string(_modDef3849.sA1lTv);
        cResult[21] = stringResult6;
        tmp29 = stringResult6;
      } else {
        tmp29 = cResult[21];
      }
      if (cResult[22] === botExchanges) {
        let tmp32;
        if (cResult[23] === projectId) {
          tmp32 = cResult[24];
        }
        obj28.bot = tmp32;
      }
      const obj33 = { label: tmp29, content: closure_5(ConjurePlanBotPreviewDefault, obj34) };
      obj34 = { projectId, exchanges: botExchanges };
      cResult[22] = botExchanges;
      cResult[23] = projectId;
      cResult[24] = obj33;
      tmp32 = obj33;
    }
    if (null != tmp12) {
      let tmp35;
      let tmp38;
      const _Symbol5 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1126).intl;
        const stringResult7 = intl5.string(_modDef3849.ove4zH);
        cResult[25] = stringResult7;
        tmp35 = stringResult7;
      } else {
        tmp35 = cResult[25];
      }
      if (cResult[26] !== tmp12) {
        const obj35 = { label: tmp35, content: closure_5(tmp41, obj36) };
        obj36 = {};
        tmp41 = ConjurePlanWidgetDefault;
        const merged = Object.assign(tmp12);
        cResult[26] = tmp12;
        cResult[27] = obj35;
        tmp38 = obj35;
      } else {
        tmp38 = cResult[27];
      }
      obj28.widget = tmp38;
    }
    cResult[5] = automod;
    cResult[6] = botExchanges;
    cResult[7] = projectId;
    cResult[8] = proposal;
    cResult[9] = tmp12;
    cResult[10] = obj28;
  }
  let tmp13 = null;
  const tmpResult10 = tmp(11901);
  if (tmpResult10.planDeclaresSurface(proposal, tmp(6947).ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp13 = conjurePlanWidget;
  }
  cResult[2] = proposal;
  cResult[3] = conjurePlanWidget;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : (function ConjurePlanProposalCard(expanded) {
  let Stack;
  let _undefined;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl19;
  let intl2;
  let intl3;
  let intl6;
  let intl7;
  let intl8;
  let items;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj3;
  let obj35;
  let obj5;
  let obj7;
  let obj9;
  let projectId;
  let proposal;
  let string;
  let superseded;
  let tmp15;
  let tmp19Result;
  let tmp29;
  let tmp3Result9;
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
  let previews;
  importDefault = undefined;
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
  let tmp3 = previews;
  let tmp4 = dependencyMap;
  const mapped = bot_permissions.map(previews(11900).formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(tmp3(11900).formatConjurePlanRequirementName);
  let tmp3Result = tmp3(11901);
  let automod = null;
  if (tmp3Result.planDeclaresSurface(proposal, tmp3(6947).ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  const tmp3Result6 = tmp3(11902);
  const conjurePlanWidget = tmp3Result6.useConjurePlanWidget(projectId, proposal);
  let tmp7 = null;
  const tmp3Result7 = tmp3(11901);
  if (tmp3Result7.planDeclaresSurface(proposal, tmp3(6947).ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp7 = conjurePlanWidget;
  }
  const tmp3Result8 = tmp3(11905);
  const botExchanges = tmp3Result8.useConjurePlanBotExchanges(proposal).botExchanges;
  previews = {};
  const tmp8 = null != automod && automod.examples.length > 0;
  if (tmp8) {
    let obj2 = { label: intl.string(_modDef3849.z4ZKYG), content: closure_5(ConjurePlanAutomodExamplesDefault, obj3) };
    intl = tmp3(1126).intl;
    obj3 = { automod };
    previews.automod = obj2;
  }
  if (null != proposal.design_image) {
    const obj4 = { label: intl17.string(_modDef3849.X15LLY), content: closure_5(closure_8, obj5) };
    intl17 = tmp3(1126).intl;
    obj5 = { projectId, design: proposal.design_image, alt: string(tmp3Result9.conjurePlanDesignAlt(proposal)) };
    const intl18 = tmp3(1126).intl;
    string = intl18.string;
    previews.design = obj4;
    tmp3Result9 = tmp3(11909);
  }
  if (botExchanges.length > 0) {
    const obj6 = { label: intl2.string(_modDef3849.sA1lTv), content: closure_5(ConjurePlanBotPreviewDefault, obj7) };
    intl2 = tmp3(1126).intl;
    obj7 = { projectId, exchanges: botExchanges };
    previews.bot = obj6;
  }
  if (null != tmp7) {
    const obj8 = { label: intl3.string(_modDef3849.ove4zH), content: closure_5(tmp15, obj9) };
    intl3 = tmp3(1126).intl;
    obj9 = {};
    tmp15 = ConjurePlanWidgetDefault;
    const merged = Object.assign(tmp7);
    previews.widget = obj8;
  }
  const keys = Object.keys(previews);
  const tmp3Result10 = tmp3(11915);
  const result = tmp3Result10.conjurePlanSurfaceRows(proposal, keys);
  importDefault = result;
  const found = keys.filter((item) => {
    let closure_0 = item;
    return !_undefined.some((preview) => preview.preview === closure_0);
  });
  const tmp21 = ConjureNativeCardSurfaceDefault;
  if (superseded) {
    let formatToPlainStringResult;
    let stringResult;
    if (null != version) {
      const intl5 = tmp3(1126).intl;
      const obj10 = { version };
      formatToPlainStringResult = intl5.formatToPlainString(tmp20(3849).YZ3qJs, obj10);
    }
    const obj11 = { title: formatToPlainStringResult, meta: tmp19Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl7.string(_modDef3849.yD8EJS), hideLabel: intl8.string(_modDef3849.nSPGNb), children: closure_6(Stack, obj35) };
    tmp19Result = null;
    if (superseded) {
      const obj12 = { children: intl6.string(_modDef3849.hF2c41) };
      const ConjureNativeCollapsibleMeta = tmp3(11898).ConjureNativeCollapsibleMeta;
      intl6 = tmp3(1126).intl;
      tmp19Result = tmp19(ConjureNativeCollapsibleMeta, obj12);
    }
    intl7 = tmp3(1126).intl;
    intl8 = tmp3(1126).intl;
    let tmp25Result = null;
    Stack = tmp3(5377).Stack;
    if ("" !== str3) {
      const obj13 = { direction: "vertical", spacing: 4, children: items };
      const Stack7 = tmp3(5377).Stack;
      const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: intl19.string(_modDef3849.iNS4dl) };
      const Text10 = tmp3(5088).Text;
      intl19 = tmp3(1126).intl;
      items = [closure_5(Text10, obj14), ];
      const obj15 = { variant: "text-md/normal", color: "text-default", children: str3 };
      items[1] = closure_5(tmp3(5088).Text, obj15);
      tmp25Result = tmp25(Stack7, obj13);
    }
    const items1 = [tmp25Result, , , , , , , , ];
    let Text = tmp3(5088).Text;
    if ("" === trimmed) {
      const intl9 = tmp3(1126).intl;
      stringResult = intl9.string(tmp20(3849)["0+RUWx"]);
    } else {
      const tmp20Result = MarkupUtilsDefault;
      stringResult = tmp20Result.parse(trimmed, true, tmp3(11830).CONJURE_MARKUP_OPTIONS);
    }
    const obj16 = { variant: "text-md/normal", color: "text-default", children: stringResult };
    items1[1] = closure_5(Text, obj16);
    let tmp25Result7 = null;
    if (result.length > 0) {
      let tmp19Result2;
      const Stack2 = tmp3(5377).Stack;
      const obj17 = { variant: "text-sm/semibold", color: "text-muted", children: intl10.string(_modDef3849.mrMYrN) };
      const Text2 = tmp3(5088).Text;
      intl10 = tmp3(1126).intl;
      const items2 = [closure_5(Text2, obj17), ];
      if (1 === result.length) {
        const obj18 = { row: result[0], previews };
        tmp19Result2 = tmp19(tmp3(11916).ConjurePlanSingleSurface, obj18);
      } else {
        const obj19 = { rows: result, previews, cycling: tmp29 };
        tmp29 = !superseded;
        const ConjurePlanSurfaceNav = tmp3(11916).ConjurePlanSurfaceNav;
        if (!superseded) {
          tmp29 = flag;
        }
        tmp19Result2 = tmp19(ConjurePlanSurfaceNav, obj19);
      }
      const obj20 = { direction: "vertical", spacing: 12, children: items2 };
      items2[1] = tmp19Result2;
      tmp25Result7 = tmp25(Stack2, obj20);
    }
    items1[2] = tmp25Result7;
    items1[3] = found.map((item) => {
      let items;
      let obj;
      let tmp2 = null;
      if (null != obj[item]) {
        obj = { direction: "vertical", spacing: 4, children: items };
        const Stack = Stack_Stack.Stack;
        const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: obj[item].label };
        items = [hasOwnProperty(Text_Text.Text, obj2), obj[item].content];
        tmp2 = metroRequire(Stack, obj, item);
      }
      return tmp2;
    });
    let tmp25Result8 = null;
    if (proposal.changes.length > 0) {
      const obj21 = { direction: "vertical", spacing: 4, children: items3 };
      const Stack3 = tmp3(5377).Stack;
      const obj22 = { variant: "text-sm/semibold", color: "text-muted", children: intl11.string(_modDef3849["5+mG1z"]) };
      const Text3 = tmp3(5088).Text;
      intl11 = tmp3(1126).intl;
      items3 = [closure_5(Text3, obj22), ];
      const changes = proposal.changes;
      items3[1] = changes.map((item, index) => {
        const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
        const Text = obj(dependencyMap[22]).Text;
        return closure_1_5(Text, obj, index);
      });
      tmp25Result8 = tmp25(Stack3, obj21);
    }
    items1[4] = tmp25Result8;
    let tmp25Result9 = null;
    if (proposal.commands.length > 0) {
      const obj23 = { direction: "vertical", spacing: 4, children: items4 };
      const Stack4 = tmp3(5377).Stack;
      const obj24 = { variant: "text-sm/semibold", color: "text-muted", children: intl12.string(tmp3(1126).t["0hKkS+"]) };
      const Text4 = tmp3(5088).Text;
      intl12 = tmp3(1126).intl;
      items4 = [closure_5(Text4, obj24), ];
      const commands = proposal.commands;
      items4[1] = commands.map((name, index) => {
        let obj;
        let obj2;
        const tmp4 = obj;
        obj = { variant: "text-sm/medium", color: "text-default", children: "" + obj2.conjurePlanCommandPrefix(name) + name.name };
        const Text = obj(dependencyMap[22]).Text;
        obj2 = obj(dependencyMap[7]);
        const children = [closure_1_5(Text, obj), ];
        let tmp3Result = null;
        const tmp = closure_1_6;
        const tmp2 = closure_1_4;
        const tmp3 = closure_1_5;
        const tmp5 = dependencyMap;
        if (null != name.description) {
          tmp3Result = null;
          if ("" !== name.description) {
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
            tmp3Result = tmp3(tmp4(tmp5[22]).Text, obj3);
          }
        }
        children[1] = tmp3Result;
        return tmp(tmp2, { children }, index);
      });
      tmp25Result9 = tmp25(Stack4, obj23);
    }
    items1[5] = tmp25Result9;
    let tmp25Result10 = null;
    if (mapped.length > 0) {
      const obj25 = { direction: "vertical", spacing: 4, children: items5 };
      const Stack5 = tmp3(5377).Stack;
      const obj26 = { variant: "text-sm/semibold", color: "text-muted", children: intl13.string(_modDef3849["2UbW6r"]) };
      const Text5 = tmp3(5088).Text;
      intl13 = tmp3(1126).intl;
      items5 = [closure_5(Text5, obj26), ];
      const obj27 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
      const Text6 = tmp3(5088).Text;
      items5[1] = closure_5(Text6, obj27);
      tmp25Result10 = tmp25(Stack5, obj25);
    }
    items1[6] = tmp25Result10;
    let tmp25Result11 = null;
    if (mapped1.length > 0) {
      const obj28 = { direction: "vertical", spacing: 4, children: items6 };
      const Stack6 = tmp3(5377).Stack;
      const obj29 = { variant: "text-sm/semibold", color: "text-muted", children: intl14.string(_modDef3849["7TKfpj"]) };
      const Text7 = tmp3(5088).Text;
      intl14 = tmp3(1126).intl;
      items6 = [closure_5(Text7, obj29), ];
      const obj30 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
      const Text8 = tmp3(5088).Text;
      items6[1] = closure_5(Text8, obj30);
      tmp25Result11 = tmp25(Stack6, obj28);
    }
    items1[7] = tmp25Result11;
    let tmp25Result12 = null;
    if (null != onApprove) {
      tmp25Result12 = null;
      if (!superseded) {
        const obj31 = { style: tmp.planActions, children: items7 };
        const obj32 = { text: intl15.string(_modDef3849["6S+wRM"]), variant: "primary", onPress: onApprove };
        const Button = tmp3(5379).Button;
        intl15 = tmp3(1126).intl;
        items7 = [closure_5(Button, obj32), ];
        const obj33 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: intl16.string(_modDef3849.IZoqbR) };
        const Text9 = tmp3(5088).Text;
        intl16 = tmp3(1126).intl;
        items7[1] = closure_5(Text9, obj33);
        tmp25Result12 = tmp25(closure_4, obj31);
      }
    }
    obj35 = { direction: "vertical", spacing: 8, children: items1 };
    items1[8] = tmp25Result12;
    const obj34 = { children: closure_5(tmp22, obj11) };
    return closure_5(tmp21, obj34);
  }
  const intl4 = tmp3(1126).intl;
  formatToPlainStringResult = intl4.string(tmp20(3849)["3b6e7o"]);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(alt) {
  let design;
  let handleError;
  let obj4;
  let obj6;
  let projectId;
  let src;
  const obj = react2;
  const cResult = obj.c(6);
  alt = alt.alt;
  ({ projectId, design } = alt);
  const tmp4 = closure_7();
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  let tmp6 = null;
  if (!conjureAttachmentImage.gone) {
    let tmp8Result;
    if (cResult[0] === alt) {
      if (cResult[1] === handleError) {
        if (cResult[2] === src) {
          if (cResult[3] === tmp4.designImage) {
            let tmp7;
            if (cResult[4] === tmp4.designPlaceholder) {
              tmp7 = cResult[5];
            }
            tmp6 = tmp7;
          }
        }
      }
    }
    const Stack = Stack_Stack.Stack;
    if (null == src) {
      const obj3 = { style: tmp4.designPlaceholder, children: hasOwnProperty(_false, obj4) };
      obj4 = { size: "small", accessibilityLabel: alt };
      tmp8Result = tmp8(React3, obj3);
    } else {
      const obj5 = { source: obj6, style: tmp4.designImage, resizeMode: "cover", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj6 = { uri: src };
      tmp8Result = tmp8(FastImageDefault, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: tmp8Result };
    const tmp8Result2 = hasOwnProperty(Stack, obj7);
    cResult[0] = alt;
    cResult[1] = handleError;
    cResult[2] = src;
    cResult[3] = tmp4.designImage;
    cResult[4] = tmp4.designPlaceholder;
    cResult[5] = tmp8Result2;
    tmp7 = tmp8Result2;
  }
  return tmp6;
}) : (function PlanDesign(alt) {
  let design;
  let obj3;
  let obj5;
  let projectId;
  alt = alt.alt;
  ({ projectId, design } = alt);
  const tmp = closure_7();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  let tmp7Result2 = null;
  if (!conjureAttachmentImage.gone) {
    let tmp7Result;
    const Stack = Stack_Stack.Stack;
    if (null == src) {
      const obj2 = { style: tmp.designPlaceholder, children: hasOwnProperty(_false, obj3) };
      obj3 = { size: "small", accessibilityLabel: alt };
      tmp7Result = tmp7(React3, obj2);
    } else {
      const obj4 = { source: obj5, style: tmp.designImage, resizeMode: "cover", onError: tmp5, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj5 = { uri: src };
      tmp7Result = tmp7(FastImageDefault, obj4);
    }
    const obj6 = { direction: "vertical", spacing: 4, children: tmp7Result };
    tmp7Result2 = tmp7(Stack, obj6);
  }
  return tmp7Result2;
});
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default tmp6;
