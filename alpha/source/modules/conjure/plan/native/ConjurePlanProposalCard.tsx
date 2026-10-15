// Module ID: 12154
// Function ID: 12155
// Name: ConjurePlanProposalCard
// Dependencies: [19, 17, 21, 5151, 587, 558, 576, 5138, 12095, 12155, 12156, 12157, 7166, 12158, 12161, 1126, 3862, 12163, 12165, 12166, 12170, 12171, 12063, 12153, 5437, 5147, 12172, 12173, 5439, 12150, 5088, 2]

// Module 12154 (ConjurePlanProposalCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5088 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5138 */;
import Text_Text from "Text/Text" /* 5147 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12095 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12150 */;
import ConjurePlanCommandText from "ConjurePlanCommandText" /* 12172 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5151 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const Stack_Stack = tmp(5437);
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { planActions: obj2, planReplyHint: { flexShrink: 1 }, designImage: obj3, designPlaceholder: obj4 };
obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(arg0) {
  let conjurePlanSlashCommandNames;
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
  let items7;
  let obj29;
  let obj31;
  let obj33;
  let obj35;
  let obj37;
  let obj39;
  let onApprove;
  let onToggleExpanded;
  let projectId;
  let proposal;
  let superseded;
  let tmp11;
  let tmp46;
  let tmp7;
  let tmp78;
  let tmp9;
  let version;
  let tmp = conjurePlanSlashCommandNames;
  let tmp2 = dependencyMap;
  let obj = conjurePlanSlashCommandNames(576);
  const cResult = obj.c(94);
  ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
  const tmp4 = undefined !== superseded && superseded;
  const tmp5 = undefined === expanded || expanded;
  const tmp6 = closure_8();
  if (cResult[0] !== proposal.summary) {
    const str = proposal.summary;
    const trimmed = str.trim();
    cResult[0] = proposal.summary;
    cResult[1] = trimmed;
    tmp7 = trimmed;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== proposal.what_changed) {
    let str3;
    if (proposal.what_changed != null) {
      str3 = str2.trim();
    }
    if (str3 == null) {
      str3 = "";
    }
    cResult[2] = proposal.what_changed;
    cResult[3] = str3;
    tmp9 = str3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp7) {
    let obj2 = obj31(5138);
    const parsed = obj2.parse(tmp7, true, tmp(12095).CONJURE_MARKUP_OPTIONS);
    cResult[4] = tmp7;
    cResult[5] = parsed;
    tmp11 = parsed;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult = tmp(12155);
  conjurePlanSlashCommandNames = tmpResult.useConjurePlanSlashCommandNames(proposal.commands);
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  const mapped = bot_permissions.map(tmp(12156).formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(tmp(12156).formatConjurePlanRequirementName);
  let automod = null;
  const tmpResult7 = tmp(12157);
  if (tmpResult7.planDeclaresSurface(proposal, tmp(7166).ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  const tmpResult8 = tmp(12158);
  const conjurePlanWidget = tmpResult8.useConjurePlanWidget(projectId, proposal);
  if (cResult[6] === proposal) {
    let tmp17;
    if (cResult[7] === conjurePlanWidget) {
      tmp17 = cResult[8];
    }
    const tmpResult9 = tmp(12161);
    const botExchanges = tmpResult9.useConjurePlanBotExchanges(proposal).botExchanges;
    if (cResult[9] === automod) {
      if (cResult[10] === botExchanges) {
        if (cResult[11] === projectId) {
          if (cResult[12] === proposal) {
            if (cResult[13] === tmp17) {
              obj31 = cResult[14];
            }
            if (cResult[32] === tmp19) {
              let arr7;
              let tmp56;
              if (cResult[33] === proposal) {
                dependencyMap = cResult[34];
                arr7 = cResult[35];
              }
              const tmp54 = obj31(12063);
              const tmp55 = obj31(12153);
              if (cResult[36] === tmp4) {
                let tmp58;
                let tmp63;
                let tmp62;
                if (cResult[37] === version) {
                  tmp56 = cResult[38];
                }
                if (cResult[39] !== tmp4) {
                  let tmp59 = null;
                  if (tmp4) {
                    let obj3 = { children: intl8.string(obj31(3862).hF2c41) };
                    const ConjureNativeCollapsibleMeta = tmp(12153).ConjureNativeCollapsibleMeta;
                    intl8 = tmp(1126).intl;
                    tmp59 = closure_6(ConjureNativeCollapsibleMeta, obj3);
                  }
                  cResult[39] = tmp4;
                  cResult[40] = tmp59;
                  tmp58 = tmp59;
                } else {
                  tmp58 = cResult[40];
                }
                const _Symbol = Symbol;
                if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl9 = tmp(1126).intl;
                  const stringResult = intl9.string(obj31(3862).yD8EJS);
                  const intl10 = tmp(1126).intl;
                  const stringResult1 = intl10.string(obj31(3862).nSPGNb);
                  cResult[41] = stringResult;
                  cResult[42] = stringResult1;
                  tmp63 = stringResult1;
                  tmp62 = stringResult;
                } else {
                  tmp62 = cResult[41];
                  tmp63 = cResult[42];
                }
                let Stack = tmp(5437).Stack;
                if (cResult[43] === conjurePlanSlashCommandNames) {
                  let tmp66;
                  let stringResult2;
                  if (cResult[44] === tmp9) {
                    tmp66 = cResult[45];
                  }
                  if (cResult[46] === conjurePlanSlashCommandNames) {
                    if (cResult[47] === tmp7) {
                      let tmp68;
                      let tmp71;
                      if (cResult[48] === tmp11) {
                        tmp68 = cResult[49];
                      }
                      if (cResult[50] !== tmp68) {
                        const obj4 = { variant: "text-md/normal", color: "text-default", children: tmp68 };
                        const tmp73 = closure_6(tmp(5147).Text, obj4);
                        cResult[50] = tmp68;
                        cResult[51] = tmp73;
                        tmp71 = tmp73;
                      } else {
                        tmp71 = cResult[51];
                      }
                      if (cResult[52] === tmp5) {
                        if (cResult[53] === tmp19) {
                          if (cResult[54] === arr6) {
                            if (cResult[55] === conjurePlanSlashCommandNames) {
                              let tmp74;
                              if (cResult[56] === tmp4) {
                                tmp74 = cResult[57];
                              }
                              if (cResult[58] === tmp19) {
                                let tmp80;
                                if (cResult[59] === arr7) {
                                  tmp80 = cResult[60];
                                }
                                if (cResult[61] === proposal.changes) {
                                  let tmp82;
                                  let tmp86;
                                  if (cResult[62] === conjurePlanSlashCommandNames) {
                                    tmp82 = cResult[63];
                                  }
                                  if (cResult[64] !== proposal.commands) {
                                    let tmp87 = null;
                                    if (proposal.commands.length > 0) {
                                      const obj5 = { direction: "vertical", spacing: 4, children: items };
                                      const Stack4 = tmp(5437).Stack;
                                      const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: intl14.string(tmp(1126).t["0hKkS+"]) };
                                      const Text3 = tmp(5147).Text;
                                      intl14 = tmp(1126).intl;
                                      items = [closure_6(Text3, obj6), ];
                                      const commands = proposal.commands;
                                      items[1] = commands.map((name, index) => {
                                        let combined;
                                        const Text = conjurePlanSlashCommandNames(dependencyMap[25]).Text;
                                        const obj = conjurePlanSlashCommandNames(dependencyMap[10]);
                                        const tmp = closure_1_7;
                                        const tmp2 = closure_1_5;
                                        if ("/" === obj.conjurePlanCommandPrefix(name)) {
                                          const obj2 = { name: name.name, size: "text-sm" };
                                          combined = tmp3(tmp4(tmp5[26]).ConjurePlanCommandMention, obj2);
                                        } else {
                                          const _HermesInternal = HermesInternal;
                                          const tmp4Result = conjurePlanSlashCommandNames(dependencyMap[10]);
                                          combined = "" + tmp4Result.conjurePlanCommandPrefix(name) + name.name;
                                        }
                                        const children = [closure_1_6(Text, { variant: "text-sm/medium", color: "text-default", children: combined }), ];
                                        let tmp3Result2 = null;
                                        if (null != name.description) {
                                          tmp3Result2 = null;
                                          if ("" !== name.description) {
                                            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                                            tmp3Result2 = tmp3(tmp4(tmp5[25]).Text, obj3);
                                          }
                                        }
                                        children[1] = tmp3Result2;
                                        return tmp(tmp2, { children }, index);
                                      });
                                      tmp87 = closure_7(Stack4, obj5);
                                    }
                                    cResult[64] = proposal.commands;
                                    cResult[65] = tmp87;
                                    tmp86 = tmp87;
                                  } else {
                                    tmp86 = cResult[65];
                                  }
                                  let tmp90 = null;
                                  if (mapped.length > 0) {
                                    const obj7 = { direction: "vertical", spacing: 4, children: items1 };
                                    const Stack5 = tmp(5437).Stack;
                                    const obj8 = { variant: "text-sm/semibold", color: "text-muted", children: intl15.string(obj31(3862)["2UbW6r"]) };
                                    const Text4 = tmp(5147).Text;
                                    intl15 = tmp(1126).intl;
                                    items1 = [closure_6(Text4, obj8), ];
                                    const obj9 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
                                    const Text5 = tmp(5147).Text;
                                    items1[1] = closure_6(Text5, obj9);
                                    tmp90 = closure_7(Stack5, obj7);
                                  }
                                  let tmp93 = null;
                                  if (mapped1.length > 0) {
                                    const obj10 = { direction: "vertical", spacing: 4, children: items2 };
                                    const Stack6 = tmp(5437).Stack;
                                    const obj11 = { variant: "text-sm/semibold", color: "text-muted", children: intl16.string(obj31(3862)["7TKfpj"]) };
                                    const Text6 = tmp(5147).Text;
                                    intl16 = tmp(1126).intl;
                                    items2 = [closure_6(Text6, obj11), ];
                                    const obj12 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
                                    const Text7 = tmp(5147).Text;
                                    items2[1] = closure_6(Text7, obj12);
                                    tmp93 = closure_7(Stack6, obj10);
                                  }
                                  if (cResult[66] === onApprove) {
                                    if (cResult[67] === tmp6) {
                                      let tmp96;
                                      if (cResult[68] === tmp4) {
                                        tmp96 = cResult[69];
                                      }
                                      if (cResult[70] === Stack) {
                                        if (cResult[71] === tmp66) {
                                          if (cResult[72] === tmp71) {
                                            if (cResult[73] === tmp74) {
                                              if (cResult[74] === tmp80) {
                                                if (cResult[75] === tmp82) {
                                                  if (cResult[76] === tmp86) {
                                                    if (cResult[77] === tmp90) {
                                                      if (cResult[78] === tmp93) {
                                                        let tmp101;
                                                        if (cResult[79] === tmp96) {
                                                          tmp101 = cResult[80];
                                                        }
                                                        if (cResult[81] === tmp55) {
                                                          if (cResult[82] === tmp5) {
                                                            if (cResult[83] === onToggleExpanded) {
                                                              if (cResult[84] === tmp4) {
                                                                if (cResult[85] === tmp62) {
                                                                  if (cResult[86] === tmp63) {
                                                                    if (cResult[87] === tmp101) {
                                                                      if (cResult[88] === tmp56) {
                                                                        let tmp104;
                                                                        if (cResult[89] === tmp58) {
                                                                          tmp104 = cResult[90];
                                                                        }
                                                                        if (cResult[91] === tmp54) {
                                                                          let tmp107;
                                                                          if (cResult[92] === tmp104) {
                                                                            tmp107 = cResult[93];
                                                                          }
                                                                          return tmp107;
                                                                        }
                                                                        const obj13 = { children: tmp104 };
                                                                        const tmp109 = closure_6(tmp54, obj13);
                                                                        cResult[91] = tmp54;
                                                                        cResult[92] = tmp104;
                                                                        cResult[93] = tmp109;
                                                                        tmp107 = tmp109;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj14 = { title: tmp56, meta: tmp58, superseded: tmp4, expanded: tmp5, onToggleExpanded, showLabel: tmp62, hideLabel: tmp63, children: tmp101 };
                                                        const tmp106 = closure_6(tmp55, obj14);
                                                        cResult[81] = tmp55;
                                                        cResult[82] = tmp5;
                                                        cResult[83] = onToggleExpanded;
                                                        cResult[84] = tmp4;
                                                        cResult[85] = tmp62;
                                                        cResult[86] = tmp63;
                                                        cResult[87] = tmp101;
                                                        cResult[88] = tmp56;
                                                        cResult[89] = tmp58;
                                                        cResult[90] = tmp106;
                                                        tmp104 = tmp106;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj15 = { direction: "vertical", spacing: 8, children: items3 };
                                      items3 = [tmp66, tmp71, tmp74, tmp80, tmp82, tmp86, tmp90, tmp93, tmp96];
                                      const tmp103 = closure_7(Stack, obj15);
                                      cResult[70] = Stack;
                                      cResult[71] = tmp66;
                                      cResult[72] = tmp71;
                                      cResult[73] = tmp74;
                                      cResult[74] = tmp80;
                                      cResult[75] = tmp82;
                                      cResult[76] = tmp86;
                                      cResult[77] = tmp90;
                                      cResult[78] = tmp93;
                                      cResult[79] = tmp96;
                                      cResult[80] = tmp103;
                                      tmp101 = tmp103;
                                    }
                                  }
                                  let tmp97 = null;
                                  if (null != onApprove) {
                                    tmp97 = null;
                                    if (!tmp4) {
                                      const obj16 = { style: tmp6.planActions, children: items4 };
                                      const obj17 = { text: intl17.string(obj31(3862)["6S+wRM"]), variant: "primary", onPress: onApprove };
                                      const Button = tmp(5439).Button;
                                      intl17 = tmp(1126).intl;
                                      items4 = [closure_6(Button, obj17), ];
                                      const obj18 = { variant: "text-sm/normal", color: "text-muted", style: tmp6.planReplyHint, children: intl18.string(obj31(3862).IZoqbR) };
                                      const Text8 = tmp(5147).Text;
                                      intl18 = tmp(1126).intl;
                                      items4[1] = closure_6(Text8, obj18);
                                      tmp97 = closure_7(closure_5, obj16);
                                    }
                                  }
                                  cResult[66] = onApprove;
                                  cResult[67] = tmp6;
                                  cResult[68] = tmp4;
                                  cResult[69] = tmp97;
                                  tmp96 = tmp97;
                                }
                                let tmp83 = null;
                                if (proposal.changes.length > 0) {
                                  const obj19 = { direction: "vertical", spacing: 4, children: items5 };
                                  const Stack3 = tmp(5437).Stack;
                                  const obj20 = { variant: "text-sm/semibold", color: "text-muted", children: intl13.string(obj31(3862)["5+mG1z"]) };
                                  const Text2 = tmp(5147).Text;
                                  intl13 = tmp(1126).intl;
                                  items5 = [closure_6(Text2, obj20), ];
                                  const changes = proposal.changes;
                                  items5[1] = changes.map((text, index) => {
                                    let items;
                                    const obj = { variant: "text-sm/normal", color: "text-default", children: items };
                                    const Text = Text_Text.Text;
                                    items = ["\u2022 "];
                                    const obj2 = { text, commandNames: conjurePlanSlashCommandNames, size: "text-sm" };
                                    items[1] = metroRequire(ConjurePlanCommandText.ConjurePlanCommandText, obj2);
                                    return metroImportDefault(Text, obj, index);
                                  });
                                  tmp83 = closure_7(Stack3, obj19);
                                }
                                cResult[61] = proposal.changes;
                                cResult[62] = conjurePlanSlashCommandNames;
                                cResult[63] = tmp83;
                                tmp82 = tmp83;
                              }
                              const mapped2 = arr7.map((item) => {
                                let items;
                                let tmp2 = null;
                                if (null != obj31[item]) {
                                  const obj = { direction: "vertical", spacing: 4, children: items };
                                  const Stack = Stack_Stack.Stack;
                                  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: obj31[item].label };
                                  items = [metroRequire(Text_Text.Text, obj2), obj31[item].content];
                                  tmp2 = metroImportDefault(Stack, obj, item);
                                }
                                return tmp2;
                              });
                              cResult[58] = tmp19;
                              cResult[59] = arr7;
                              cResult[60] = mapped2;
                              tmp80 = mapped2;
                            }
                          }
                        }
                      }
                      let tmp76Result = null;
                      if (arr6.length > 0) {
                        let tmp77Result;
                        const Stack2 = tmp(5437).Stack;
                        const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: intl12.string(obj31(3862).mrMYrN) };
                        let Text = tmp(5147).Text;
                        intl12 = tmp(1126).intl;
                        const items6 = [closure_6(Text, obj21), ];
                        const tmp76 = closure_7;
                        if (1 === arr6.length) {
                          const obj22 = { row: arr6[0], previews: tmp19, commandNames: conjurePlanSlashCommandNames };
                          tmp77Result = tmp77(tmp(12173).ConjurePlanSingleSurface, obj22);
                        } else {
                          const obj23 = { rows: arr6, previews: tmp19, cycling: tmp78, commandNames: conjurePlanSlashCommandNames };
                          tmp78 = !tmp4;
                          const ConjurePlanSurfaceNav = tmp(12173).ConjurePlanSurfaceNav;
                          if (!tmp4) {
                            tmp78 = tmp5;
                          }
                          tmp77Result = tmp77(ConjurePlanSurfaceNav, obj23);
                        }
                        const obj24 = { direction: "vertical", spacing: 12, children: items6 };
                        items6[1] = tmp77Result;
                        tmp76Result = tmp76(Stack2, obj24);
                      }
                      cResult[52] = tmp5;
                      cResult[53] = tmp19;
                      cResult[54] = arr6;
                      cResult[55] = conjurePlanSlashCommandNames;
                      cResult[56] = tmp4;
                      cResult[57] = tmp76Result;
                      tmp74 = tmp76Result;
                    }
                  }
                  if ("" === tmp7) {
                    const intl11 = tmp(1126).intl;
                    stringResult2 = intl11.string(tmp53(3862)["0+RUWx"]);
                  } else {
                    const obj25 = { markup: tmp11, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
                    stringResult2 = closure_6(tmp(12172).ConjurePlanCommandMarkup, obj25);
                  }
                  cResult[46] = conjurePlanSlashCommandNames;
                  cResult[47] = tmp7;
                  cResult[48] = tmp11;
                  cResult[49] = stringResult2;
                  tmp68 = stringResult2;
                }
                let tmp67 = null;
                if ("" !== tmp9) {
                  const obj26 = { direction: "vertical", spacing: 4, children: items7 };
                  const Stack7 = tmp(5437).Stack;
                  const obj27 = { variant: "text-sm/semibold", color: "text-muted", children: intl19.string(obj31(3862).iNS4dl) };
                  const Text9 = tmp(5147).Text;
                  intl19 = tmp(1126).intl;
                  items7 = [closure_6(Text9, obj27), ];
                  const obj28 = { variant: "text-md/normal", color: "text-default", children: closure_6(tmp(12172).ConjurePlanCommandText, obj29) };
                  const Text10 = tmp(5147).Text;
                  obj29 = { text: tmp9, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
                  items7[1] = closure_6(Text10, obj28);
                  tmp67 = closure_7(Stack7, obj26);
                }
                cResult[43] = conjurePlanSlashCommandNames;
                cResult[44] = tmp9;
                cResult[45] = tmp67;
                tmp66 = tmp67;
              }
              if (tmp4) {
                let formatToPlainStringResult;
                if (null != version) {
                  const intl7 = tmp(1126).intl;
                  const obj30 = { version };
                  formatToPlainStringResult = intl7.formatToPlainString(tmp53(3862).YZ3qJs, obj30);
                }
                cResult[36] = tmp4;
                cResult[37] = version;
                cResult[38] = formatToPlainStringResult;
                tmp56 = formatToPlainStringResult;
              }
              const intl6 = tmp(1126).intl;
              formatToPlainStringResult = intl6.string(tmp53(3862)["3b6e7o"]);
            }
            const _Object = Object;
            const keys = Object.keys(tmp19);
            const tmpResult10 = tmp(12171);
            const result = tmpResult10.conjurePlanSurfaceRows(proposal, keys);
            dependencyMap = result;
            const found = keys.filter((item) => {
              let closure_0 = item;
              return !dependencyMap.some((preview) => preview.preview === closure_0);
            });
            cResult[32] = tmp19;
            cResult[33] = proposal;
            cResult[34] = result;
            cResult[35] = found;
            arr7 = found;
          }
        }
      }
    }
    obj31 = {};
    if (null != automod) {
      if (automod.examples.length > 0) {
        let tmp20;
        let tmp23;
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult3 = intl.string(obj31(3862).z4ZKYG);
          cResult[15] = stringResult3;
          tmp20 = stringResult3;
        } else {
          tmp20 = cResult[15];
        }
        if (cResult[16] !== automod) {
          const obj32 = { label: tmp20, content: closure_6(obj31(12163), obj33) };
          obj33 = { automod };
          cResult[16] = automod;
          cResult[17] = obj32;
          tmp23 = obj32;
        } else {
          tmp23 = cResult[17];
        }
        obj31.automod = tmp23;
      }
    }
    if (null != proposal.design_image) {
      let tmp26;
      let tmp29;
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult4 = intl2.string(obj31(3862).X15LLY);
        cResult[18] = stringResult4;
        tmp26 = stringResult4;
      } else {
        tmp26 = cResult[18];
      }
      const design_image = proposal.design_image;
      if (cResult[19] !== proposal) {
        const intl3 = tmp(1126).intl;
        const string = intl3.string;
        const tmpResult11 = tmp(12165);
        const stringResult5 = string(tmpResult11.conjurePlanDesignAlt(proposal));
        cResult[19] = proposal;
        cResult[20] = stringResult5;
        tmp29 = stringResult5;
      } else {
        tmp29 = cResult[20];
      }
      if (cResult[21] === projectId) {
        if (cResult[22] === proposal.design_image) {
          let tmp31;
          if (cResult[23] === tmp29) {
            tmp31 = cResult[24];
          }
          obj31.design = tmp31;
        }
      }
      const obj34 = { label: tmp26, content: closure_6(closure_9, obj35) };
      obj35 = { projectId, design: design_image, alt: tmp29 };
      cResult[21] = projectId;
      cResult[22] = proposal.design_image;
      cResult[23] = tmp29;
      cResult[24] = obj34;
      tmp31 = obj34;
    }
    if (botExchanges.length > 0) {
      let tmp34;
      const _Symbol4 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult6 = intl4.string(obj31(3862).sA1lTv);
        cResult[25] = stringResult6;
        tmp34 = stringResult6;
      } else {
        tmp34 = cResult[25];
      }
      if (cResult[26] === botExchanges) {
        let tmp37;
        if (cResult[27] === projectId) {
          tmp37 = cResult[28];
        }
        obj31.bot = tmp37;
      }
      const obj36 = { label: tmp34, content: closure_6(obj31(12166), obj37) };
      obj37 = { projectId, exchanges: botExchanges };
      cResult[26] = botExchanges;
      cResult[27] = projectId;
      cResult[28] = obj36;
      tmp37 = obj36;
    }
    if (null != tmp17) {
      let tmp40;
      let tmp43;
      const _Symbol5 = Symbol;
      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1126).intl;
        const stringResult7 = intl5.string(obj31(3862).ove4zH);
        cResult[29] = stringResult7;
        tmp40 = stringResult7;
      } else {
        tmp40 = cResult[29];
      }
      if (cResult[30] !== tmp17) {
        const obj38 = { label: tmp40, content: closure_6(tmp46, obj39) };
        obj39 = {};
        tmp46 = obj31(12170);
        const merged = Object.assign(tmp17);
        cResult[30] = tmp17;
        cResult[31] = obj38;
        tmp43 = obj38;
      } else {
        tmp43 = cResult[31];
      }
      obj31.widget = tmp43;
    }
    cResult[9] = automod;
    cResult[10] = botExchanges;
    cResult[11] = projectId;
    cResult[12] = proposal;
    cResult[13] = tmp17;
    cResult[14] = obj31;
  }
  let tmp18 = null;
  const tmpResult12 = tmp(12157);
  if (tmpResult12.planDeclaresSurface(proposal, tmp(7166).ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp18 = conjurePlanWidget;
  }
  cResult[6] = proposal;
  cResult[7] = conjurePlanWidget;
  cResult[8] = tmp18;
  tmp17 = tmp18;
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
  let items1;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj17;
  let obj38;
  let obj4;
  let obj6;
  let obj8;
  let projectId;
  let proposal;
  let string;
  let superseded;
  let tmp17;
  let tmp21Result;
  let tmp31;
  let tmp4Result9;
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
  let conjurePlanSlashCommandNames;
  let obj2;
  react = undefined;
  const onToggleExpanded = expanded.onToggleExpanded;
  let tmp = closure_8();
  const str = proposal.summary;
  const trimmed = str.trim();
  let str3;
  if (proposal.what_changed != null) {
    str3 = str2.trim();
  }
  if (str3 == null) {
    str3 = "";
  }
  let items = [trimmed];
  const tmp4 = trimmed;
  const tmp5 = obj2;
  const memo = react.useMemo(() => {
    const obj = MarkupUtilsDefault;
    return obj.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
  }, items);
  let obj = trimmed(obj2[9]);
  conjurePlanSlashCommandNames = obj.useConjurePlanSlashCommandNames(proposal.commands);
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  const mapped = bot_permissions.map(tmp4(tmp5[10]).formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(tmp4(tmp5[10]).formatConjurePlanRequirementName);
  let tmp4Result = tmp4(tmp5[11]);
  let automod = null;
  if (tmp4Result.planDeclaresSurface(proposal, tmp4(tmp5[12]).ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  const tmp4Result6 = tmp4(tmp5[13]);
  const conjurePlanWidget = tmp4Result6.useConjurePlanWidget(projectId, proposal);
  let tmp9 = null;
  const tmp4Result7 = tmp4(tmp5[11]);
  if (tmp4Result7.planDeclaresSurface(proposal, tmp4(tmp5[12]).ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp9 = conjurePlanWidget;
  }
  const tmp4Result8 = tmp4(tmp5[14]);
  const botExchanges = tmp4Result8.useConjurePlanBotExchanges(proposal).botExchanges;
  obj2 = {};
  const tmp10 = null != automod && automod.examples.length > 0;
  if (tmp10) {
    let obj3 = { label: intl.string(conjurePlanSlashCommandNames(tmp5[16]).z4ZKYG), content: closure_6(conjurePlanSlashCommandNames(tmp5[17]), obj4) };
    intl = tmp4(tmp5[15]).intl;
    obj4 = { automod };
    obj2.automod = obj3;
  }
  if (null != proposal.design_image) {
    const obj5 = { label: intl17.string(conjurePlanSlashCommandNames(tmp5[16]).X15LLY), content: closure_6(closure_9, obj6) };
    intl17 = tmp4(tmp5[15]).intl;
    obj6 = { projectId, design: proposal.design_image, alt: string(tmp4Result9.conjurePlanDesignAlt(proposal)) };
    const intl18 = tmp4(tmp5[15]).intl;
    string = intl18.string;
    obj2.design = obj5;
    tmp4Result9 = tmp4(tmp5[18]);
  }
  if (botExchanges.length > 0) {
    const obj7 = { label: intl2.string(conjurePlanSlashCommandNames(tmp5[16]).sA1lTv), content: closure_6(conjurePlanSlashCommandNames(tmp5[19]), obj8) };
    intl2 = tmp4(tmp5[15]).intl;
    obj8 = { projectId, exchanges: botExchanges };
    obj2.bot = obj7;
  }
  if (null != tmp9) {
    const obj9 = { label: intl3.string(conjurePlanSlashCommandNames(tmp5[16]).ove4zH), content: closure_6(tmp17, obj10) };
    intl3 = tmp4(tmp5[15]).intl;
    obj10 = {};
    tmp17 = conjurePlanSlashCommandNames(tmp5[20]);
    const merged = Object.assign(tmp9);
    obj2.widget = obj9;
  }
  const keys = Object.keys(obj2);
  const tmp4Result10 = tmp4(tmp5[21]);
  const result = tmp4Result10.conjurePlanSurfaceRows(proposal, keys);
  react = result;
  const found = keys.filter((item) => {
    let closure_0 = item;
    return !_undefined.some((preview) => preview.preview === closure_0);
  });
  const tmp23 = conjurePlanSlashCommandNames(tmp5[22]);
  if (superseded) {
    let formatToPlainStringResult;
    let stringResult;
    if (null != version) {
      const intl5 = tmp4(tmp5[15]).intl;
      const obj11 = { version };
      formatToPlainStringResult = intl5.formatToPlainString(tmp22(tmp5[16]).YZ3qJs, obj11);
    }
    const obj12 = { title: formatToPlainStringResult, meta: tmp21Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl7.string(conjurePlanSlashCommandNames(tmp5[16]).yD8EJS), hideLabel: intl8.string(conjurePlanSlashCommandNames(tmp5[16]).nSPGNb), children: closure_7(Stack, obj38) };
    tmp21Result = null;
    if (superseded) {
      const obj13 = { children: intl6.string(conjurePlanSlashCommandNames(tmp5[16]).hF2c41) };
      const ConjureNativeCollapsibleMeta = tmp4(tmp5[23]).ConjureNativeCollapsibleMeta;
      intl6 = tmp4(tmp5[15]).intl;
      tmp21Result = tmp21(ConjureNativeCollapsibleMeta, obj13);
    }
    intl7 = tmp4(tmp5[15]).intl;
    intl8 = tmp4(tmp5[15]).intl;
    let tmp27Result = null;
    Stack = tmp4(tmp5[24]).Stack;
    if ("" !== str3) {
      const obj14 = { direction: "vertical", spacing: 4, children: items1 };
      const Stack7 = tmp4(tmp5[24]).Stack;
      const obj15 = { variant: "text-sm/semibold", color: "text-muted", children: intl19.string(conjurePlanSlashCommandNames(tmp5[16]).iNS4dl) };
      const Text10 = tmp4(tmp5[25]).Text;
      intl19 = tmp4(tmp5[15]).intl;
      items1 = [closure_6(Text10, obj15), ];
      const obj16 = { variant: "text-md/normal", color: "text-default", children: closure_6(tmp4(tmp5[26]).ConjurePlanCommandText, obj17) };
      const Text11 = tmp4(tmp5[25]).Text;
      obj17 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      items1[1] = closure_6(Text11, obj16);
      tmp27Result = tmp27(Stack7, obj14);
    }
    const items2 = [tmp27Result, , , , , , , , ];
    let Text = tmp4(tmp5[25]).Text;
    if ("" === trimmed) {
      const intl9 = tmp4(tmp5[15]).intl;
      stringResult = intl9.string(tmp22(tmp5[16])["0+RUWx"]);
    } else {
      const obj18 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      stringResult = tmp21(tmp4(tmp5[26]).ConjurePlanCommandMarkup, obj18);
    }
    const obj19 = { variant: "text-md/normal", color: "text-default", children: stringResult };
    items2[1] = closure_6(Text, obj19);
    let tmp27Result7 = null;
    if (result.length > 0) {
      let tmp21Result2;
      const Stack2 = tmp4(tmp5[24]).Stack;
      const obj20 = { variant: "text-sm/semibold", color: "text-muted", children: intl10.string(conjurePlanSlashCommandNames(tmp5[16]).mrMYrN) };
      const Text2 = tmp4(tmp5[25]).Text;
      intl10 = tmp4(tmp5[15]).intl;
      const items3 = [closure_6(Text2, obj20), ];
      if (1 === result.length) {
        const obj21 = { row: result[0], previews: obj2, commandNames: conjurePlanSlashCommandNames };
        tmp21Result2 = tmp21(tmp4(tmp5[27]).ConjurePlanSingleSurface, obj21);
      } else {
        const obj22 = { rows: result, previews: obj2, cycling: tmp31, commandNames: conjurePlanSlashCommandNames };
        tmp31 = !superseded;
        const ConjurePlanSurfaceNav = tmp4(tmp5[27]).ConjurePlanSurfaceNav;
        if (!superseded) {
          tmp31 = flag;
        }
        tmp21Result2 = tmp21(ConjurePlanSurfaceNav, obj22);
      }
      const obj23 = { direction: "vertical", spacing: 12, children: items3 };
      items3[1] = tmp21Result2;
      tmp27Result7 = tmp27(Stack2, obj23);
    }
    items2[2] = tmp27Result7;
    items2[3] = found.map((item) => {
      let items;
      let tmp2 = null;
      if (null != obj2[item]) {
        const obj = { direction: "vertical", spacing: 4, children: items };
        const Stack = Stack_Stack.Stack;
        obj2 = { variant: "text-sm/semibold", color: "text-muted", children: obj2[item].label };
        items = [metroRequire(Text_Text.Text, obj2), obj2[item].content];
        tmp2 = metroImportDefault(Stack, obj, item);
      }
      return tmp2;
    });
    let tmp27Result8 = null;
    if (proposal.changes.length > 0) {
      const obj24 = { direction: "vertical", spacing: 4, children: items4 };
      const Stack3 = tmp4(tmp5[24]).Stack;
      const obj25 = { variant: "text-sm/semibold", color: "text-muted", children: intl11.string(conjurePlanSlashCommandNames(tmp5[16])["5+mG1z"]) };
      const Text3 = tmp4(tmp5[25]).Text;
      intl11 = tmp4(tmp5[15]).intl;
      items4 = [closure_6(Text3, obj25), ];
      const changes = proposal.changes;
      items4[1] = changes.map((text, index) => {
        let items;
        const obj = { variant: "text-sm/normal", color: "text-default", children: items };
        const Text = Text_Text.Text;
        items = ["\u2022 "];
        obj2 = { text, commandNames: conjurePlanSlashCommandNames, size: "text-sm" };
        items[1] = metroRequire(ConjurePlanCommandText.ConjurePlanCommandText, obj2);
        return metroImportDefault(Text, obj, index);
      });
      tmp27Result8 = tmp27(Stack3, obj24);
    }
    items2[4] = tmp27Result8;
    let tmp27Result9 = null;
    if (proposal.commands.length > 0) {
      const obj26 = { direction: "vertical", spacing: 4, children: items5 };
      const Stack4 = tmp4(tmp5[24]).Stack;
      const obj27 = { variant: "text-sm/semibold", color: "text-muted", children: intl12.string(tmp4(tmp5[15]).t["0hKkS+"]) };
      const Text4 = tmp4(tmp5[25]).Text;
      intl12 = tmp4(tmp5[15]).intl;
      items5 = [closure_6(Text4, obj27), ];
      const commands = proposal.commands;
      items5[1] = commands.map((name, index) => {
        let combined;
        const Text = trimmed(obj2[25]).Text;
        const obj = trimmed(obj2[10]);
        const tmp = closure_1_7;
        const tmp2 = closure_1_5;
        if ("/" === obj.conjurePlanCommandPrefix(name)) {
          obj2 = { name: name.name, size: "text-sm" };
          combined = tmp3(tmp4(tmp5[26]).ConjurePlanCommandMention, obj2);
        } else {
          const _HermesInternal = HermesInternal;
          const tmp4Result = trimmed(obj2[10]);
          combined = "" + tmp4Result.conjurePlanCommandPrefix(name) + name.name;
        }
        const children = [closure_1_6(Text, { variant: "text-sm/medium", color: "text-default", children: combined }), ];
        let tmp3Result2 = null;
        if (null != name.description) {
          tmp3Result2 = null;
          if ("" !== name.description) {
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
            tmp3Result2 = tmp3(tmp4(tmp5[25]).Text, obj3);
          }
        }
        children[1] = tmp3Result2;
        return tmp(tmp2, { children }, index);
      });
      tmp27Result9 = tmp27(Stack4, obj26);
    }
    items2[5] = tmp27Result9;
    let tmp27Result10 = null;
    if (mapped.length > 0) {
      const obj28 = { direction: "vertical", spacing: 4, children: items6 };
      const Stack5 = tmp4(tmp5[24]).Stack;
      const obj29 = { variant: "text-sm/semibold", color: "text-muted", children: intl13.string(conjurePlanSlashCommandNames(tmp5[16])["2UbW6r"]) };
      const Text5 = tmp4(tmp5[25]).Text;
      intl13 = tmp4(tmp5[15]).intl;
      items6 = [closure_6(Text5, obj29), ];
      const obj30 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
      const Text6 = tmp4(tmp5[25]).Text;
      items6[1] = closure_6(Text6, obj30);
      tmp27Result10 = tmp27(Stack5, obj28);
    }
    items2[6] = tmp27Result10;
    let tmp27Result11 = null;
    if (mapped1.length > 0) {
      const obj31 = { direction: "vertical", spacing: 4, children: items7 };
      const Stack6 = tmp4(tmp5[24]).Stack;
      const obj32 = { variant: "text-sm/semibold", color: "text-muted", children: intl14.string(conjurePlanSlashCommandNames(tmp5[16])["7TKfpj"]) };
      const Text7 = tmp4(tmp5[25]).Text;
      intl14 = tmp4(tmp5[15]).intl;
      items7 = [closure_6(Text7, obj32), ];
      const obj33 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
      const Text8 = tmp4(tmp5[25]).Text;
      items7[1] = closure_6(Text8, obj33);
      tmp27Result11 = tmp27(Stack6, obj31);
    }
    items2[7] = tmp27Result11;
    let tmp27Result12 = null;
    if (null != onApprove) {
      tmp27Result12 = null;
      if (!superseded) {
        const obj34 = { style: tmp.planActions, children: items8 };
        const obj35 = { text: intl15.string(conjurePlanSlashCommandNames(tmp5[16])["6S+wRM"]), variant: "primary", onPress: onApprove };
        const Button = tmp4(tmp5[28]).Button;
        intl15 = tmp4(tmp5[15]).intl;
        items8 = [closure_6(Button, obj35), ];
        const obj36 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: intl16.string(conjurePlanSlashCommandNames(tmp5[16]).IZoqbR) };
        const Text9 = tmp4(tmp5[25]).Text;
        intl16 = tmp4(tmp5[15]).intl;
        items8[1] = closure_6(Text9, obj36);
        tmp27Result12 = tmp27(closure_5, obj34);
      }
    }
    obj38 = { direction: "vertical", spacing: 8, children: items2 };
    items2[8] = tmp27Result12;
    const obj37 = { children: closure_6(tmp24, obj12) };
    return closure_6(tmp23, obj37);
  }
  const intl4 = tmp4(tmp5[15]).intl;
  formatToPlainStringResult = intl4.string(tmp22(tmp5[16])["3b6e7o"]);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(alt) {
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
  const tmp4 = closure_8();
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
      const obj3 = { style: tmp4.designPlaceholder, children: metroRequire(React3, obj4) };
      obj4 = { size: "small", accessibilityLabel: alt };
      tmp8Result = tmp8(hasOwnProperty, obj3);
    } else {
      const obj5 = { source: obj6, style: tmp4.designImage, resizeMode: "cover", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj6 = { uri: src };
      tmp8Result = tmp8(FastImageDefault, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: tmp8Result };
    const tmp8Result2 = metroRequire(Stack, obj7);
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
  const tmp = closure_8();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  let tmp7Result2 = null;
  if (!conjureAttachmentImage.gone) {
    let tmp7Result;
    const Stack = Stack_Stack.Stack;
    if (null == src) {
      const obj2 = { style: tmp.designPlaceholder, children: metroRequire(React3, obj3) };
      obj3 = { size: "small", accessibilityLabel: alt };
      tmp7Result = tmp7(hasOwnProperty, obj2);
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

export default tmp5;
