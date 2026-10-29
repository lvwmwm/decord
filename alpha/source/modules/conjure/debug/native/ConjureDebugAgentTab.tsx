// Module ID: 12832
// Function ID: 12833
// Name: ConjureDebugAgentTab
// Dependencies: [32, 19, 17, 21, 5005, 587, 12829, 1125, 3864, 12827, 10816, 558, 576, 12833, 5281, 12826, 5271, 12834, 12831, 2]

// Module 12832 (ConjureDebugAgentTab)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3864 from "module_3864" /* 3864 */;
import useConjureDebugAgentStateDefault from "useConjureDebugAgentState" /* 12833 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const intl45 = tmp(1125);
const Text_Text = tmp(5271);
const components_Button_Button = tmp(5281);
const ConjureUsageTypes = tmp(10816);
const ConjureDebugLabels = tmp(12826);
const ConjureDebugFormat = tmp(12827);
const ConjureDebugPrimitives = tmp(12829);
const ConjureDebugAnalytics = tmp(12831);
const ConjureDebugGitSection = tmp(12834);
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { tab: obj2, forceCompaction: obj3 };
obj2 = { gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugAgentTab(arg0) {
  let NCdUIh;
  let Vq3skS;
  let cache_hit_rate;
  let contextCeiling;
  let fetchState;
  let forceState;
  let formatCount;
  let formatCount2;
  let formatCount3;
  let formatCount4;
  let formatCount5;
  let formatCountResult;
  let formatCountResult1;
  let formatCountResult2;
  let formatCountResult3;
  let formatCountResult4;
  let formatCountResult5;
  let formatCountResult6;
  let formatCountResult7;
  let formatCountResult8;
  let formatCountResult9;
  let formatToPlainString10;
  let formatToPlainString2;
  let formatToPlainString3;
  let formatToPlainString4;
  let formatToPlainString5;
  let formatToPlainString6;
  let formatToPlainString7;
  let formatToPlainString8;
  let formatToPlainString9;
  let handleForceCompaction;
  let handleForceCompactionOverride;
  let handleRestartWorkspace;
  let intl10;
  let intl12;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl27;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl42;
  let intl43;
  let intl44;
  let intl5;
  let intl9;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let lastCompaction;
  let lastDecline;
  let lastTurn;
  let lifetime;
  let limits;
  let mapped;
  let obj15;
  let obj17;
  let obj42;
  let obj48;
  let obj5;
  let obj50;
  let obj52;
  let obj54;
  let obj9;
  let onRefresh;
  let projectId;
  let restartState;
  let round;
  let session;
  let status;
  let string;
  let tmp107Result;
  let tmp126Result;
  let tmp5Result;
  let tmpResult44;
  let tmpResult47;
  let tmpResult50;
  let tmpResult51;
  let tmpResult54;
  let tmpResult55;
  let tmpResult56;
  let tmpResult57;
  let tmpResult58;
  let tmpResult59;
  let tmpResult60;
  let tmpResult61;
  let tmpResult62;
  let tmpResult64;
  let tmpResult65;
  let tmpResult66;
  let tmpResult67;
  let tmpResult69;
  let tmpResult70;
  let tmpResult72;
  let tmpResult75;
  let tmpResult77;
  let tmpResult80;
  let tmpResult83;
  let tmpResult86;
  let turn_inflight;
  let v6ngCax;
  let yHJxuP;
  let yHJxuP2;
  let yHJxuP3;
  let yHJxuP4;
  let yHJxuP5;
  let yHJxuP6;
  const tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(72);
  ({ projectId, status, fetchState, onRefresh } = arg0);
  const tmp4 = closure_8();
  const tmp6 = useConjureDebugAgentStateDefault(projectId, status);
  ({ lastTurn, lastCompaction, lastDecline, forceState, restartState, handleForceCompaction, handleForceCompactionOverride, handleRestartWorkspace, lifetime, limits, session, contextCeiling } = tmp6);
  let tmp7 = null;
  const turnRunning = tmp6.turnRunning;
  if (typeof forceState === "object") {
    tmp7 = forceState;
  }
  let generated_at;
  const tab = tmp4.tab;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  if (cResult[0] === fetchState) {
    if (cResult[1] === onRefresh) {
      let tmp9;
      let tmp12;
      if (cResult[2] === generated_at) {
        tmp9 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl45.intl;
        const stringResult = intl.string(_modDef3864.JghNal);
        cResult[4] = stringResult;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === lifetime) {
        let tmp14;
        let tmp20;
        let tmp22;
        let tmp26;
        let tmp28;
        let formatToPlainStringResult;
        if (cResult[6] === status) {
          tmp14 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = intl45.intl;
          const stringResult1 = intl4.string(_modDef3864.dZHPE5);
          cResult[8] = stringResult1;
          tmp20 = stringResult1;
        } else {
          tmp20 = cResult[8];
        }
        if (cResult[9] !== lastTurn) {
          const obj2 = { title: tmp20, children: tmp126Result };
          const DebugSection2 = ConjureDebugPrimitives.DebugSection;
          if (null == lastTurn) {
            const obj3 = { children: intl5.string(_modDef3864.DfVjal) };
            const DebugNote2 = ConjureDebugPrimitives.DebugNote;
            intl5 = intl45.intl;
            tmp126Result = tmp23(DebugNote2, obj3);
          } else {
            const intl40 = intl45.intl;
            const total = lastTurn.total;
            const obj4 = { label: intl40.string(_modDef3864["7X3i9d"]), value: formatToPlainString10(yHJxuP6, obj5), hint: "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + tmpResult47.formatCount(total.cache_read_input_tokens) + " cache read" };
            intl40.string(_modDef3864["7X3i9d"]);
            const DebugStatRow18 = ConjureDebugPrimitives.DebugStatRow;
            const intl41 = intl45.intl;
            formatToPlainString10 = intl41.formatToPlainString;
            obj5 = { count: formatCount5(tmpResult44.runeCount(total)) };
            yHJxuP6 = tmp5(3864).yHJxuP;
            formatCount5 = ConjureDebugFormat.formatCount;
            ConjureDebugFormat;
            tmpResult44 = ConjureUsageTypes;
            const tmpResult45 = ConjureDebugFormat;
            formatCountResult = tmpResult45.formatCount(total.input_tokens);
            const tmpResult46 = ConjureDebugFormat;
            const _HermesInternal7 = HermesInternal;
            formatCountResult1 = tmpResult46.formatCount(total.output_tokens);
            tmpResult47 = ConjureDebugFormat;
            const items = [hasOwnProperty(DebugStatRow18, obj4), ];
            const obj6 = { label: intl42.string(_modDef3864["8OUg09"]), value: "" + round(100 * cache_hit_rate) + "%" };
            const DebugStatRow19 = ConjureDebugPrimitives.DebugStatRow;
            intl42 = intl45.intl;
            cache_hit_rate = lastTurn.cache_hit_rate;
            const _Math = Math;
            round = Math.round;
            const tmp126 = metroImportDefault;
            const tmp127 = metroRequire;
            if (cache_hit_rate == null) {
              const tmpResult48 = ConjureUsageTypes;
              cache_hit_rate = tmpResult48.cacheHitRate(lastTurn.total);
            }
            const _HermesInternal = HermesInternal;
            const obj7 = { children: items };
            items[1] = hasOwnProperty(DebugStatRow19, obj6);
            tmp126Result = tmp126(tmp127, obj7);
          }
          const tmp23Result2 = hasOwnProperty(DebugSection2, obj2);
          cResult[9] = lastTurn;
          cResult[10] = tmp23Result2;
          tmp22 = tmp23Result2;
        } else {
          tmp22 = cResult[10];
        }
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = intl45.intl;
          const stringResult3 = intl6.string(_modDef3864.NbRk9a);
          cResult[11] = stringResult3;
          tmp26 = stringResult3;
        } else {
          tmp26 = cResult[11];
        }
        if (cResult[12] === contextCeiling) {
          let tmp36;
          let tmp41;
          if (cResult[13] === lastCompaction) {
            tmp28 = cResult[14];
          }
          if (cResult[15] !== lastDecline) {
            let tmp37 = null;
            if (null != lastDecline) {
              const obj8 = { label: intl12.string(_modDef3864["4BX5KK"]), value: "" + formatCountResult2 + " / " + tmpResult50.formatCount(lastDecline.threshold), critical: true, hint: formatToPlainString3(v6ngCax, obj9) };
              const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
              intl12 = intl45.intl;
              const tmpResult49 = ConjureDebugFormat;
              const _HermesInternal3 = HermesInternal;
              formatCountResult2 = tmpResult49.formatCount(lastDecline.projected);
              tmpResult50 = ConjureDebugFormat;
              const intl13 = intl45.intl;
              formatToPlainString3 = intl13.formatToPlainString;
              obj9 = { time: tmpResult51.formatObservedAt(lastDecline.observedAt) };
              v6ngCax = tmp5(3864)["6ngCax"];
              tmpResult51 = ConjureDebugFormat;
              tmp37 = hasOwnProperty(DebugStatRow3, obj8);
            }
            cResult[15] = lastDecline;
            cResult[16] = tmp37;
            tmp36 = tmp37;
          } else {
            tmp36 = cResult[16];
          }
          const _Symbol4 = Symbol;
          const forceCompaction = tmp4.forceCompaction;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl14 = intl45.intl;
            const stringResult4 = intl14.string(_modDef3864["1EiJeb"]);
            cResult[17] = stringResult4;
            tmp41 = stringResult4;
          } else {
            tmp41 = cResult[17];
          }
          if (cResult[18] === handleForceCompaction) {
            let tmp44;
            let tmp47;
            if (cResult[19] === "pending" === forceState) {
              tmp44 = cResult[20];
            }
            let str10 = "text-muted";
            if (null != tmp7) {
              str10 = "text-muted";
              if ("compacted" !== tmp7.outcome) {
                str10 = "text-feedback-critical";
              }
            }
            if (cResult[21] !== forceState) {
              const tmpResult52 = ConjureDebugLabels;
              const result = tmpResult52.forceCompactionStatus(forceState);
              cResult[21] = forceState;
              cResult[22] = result;
              tmp47 = result;
            } else {
              tmp47 = cResult[22];
            }
            if (cResult[23] === str10) {
              let tmp49;
              if (cResult[24] === tmp47) {
                tmp49 = cResult[25];
              }
              let pendingTurn;
              const tmp52 = cResult[26];
              if (tmp7 != null) {
                pendingTurn = tmp7.pendingTurn;
              }
              if (tmp52 === pendingTurn) {
                let tmp54;
                if (cResult[27] === handleForceCompactionOverride) {
                  tmp54 = cResult[28];
                }
                if (cResult[29] === tmp4.forceCompaction) {
                  if (cResult[30] === tmp44) {
                    if (cResult[31] === tmp49) {
                      let tmp58;
                      let tmp62;
                      if (cResult[32] === tmp54) {
                        tmp58 = cResult[33];
                      }
                      const _Symbol5 = Symbol;
                      const forceCompaction2 = tmp4.forceCompaction;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl15 = intl45.intl;
                        const stringResult5 = intl15.string(_modDef3864["5qCjBu"]);
                        cResult[34] = stringResult5;
                        tmp62 = stringResult5;
                      } else {
                        tmp62 = cResult[34];
                      }
                      if (cResult[35] === handleRestartWorkspace) {
                        if (cResult[36] === "pending" === restartState) {
                          let tmp66;
                          let tmp69;
                          if (cResult[37] === ("pending" === restartState || turnRunning)) {
                            tmp66 = cResult[38];
                          }
                          let str12 = "text-muted";
                          if (typeof restartState === "object") {
                            str12 = "text-muted";
                            if ("restarted" !== restartState.outcome) {
                              str12 = "text-feedback-critical";
                            }
                          }
                          if (cResult[39] !== restartState) {
                            const tmpResult53 = ConjureDebugLabels;
                            const sandboxRestartStatusResult = tmpResult53.sandboxRestartStatus(restartState);
                            cResult[39] = restartState;
                            cResult[40] = sandboxRestartStatusResult;
                            tmp69 = sandboxRestartStatusResult;
                          } else {
                            tmp69 = cResult[40];
                          }
                          if (cResult[41] === str12) {
                            let tmp71;
                            if (cResult[42] === tmp69) {
                              tmp71 = cResult[43];
                            }
                            if (cResult[44] === tmp4.forceCompaction) {
                              if (cResult[45] === tmp66) {
                                let tmp74;
                                let tmp78;
                                if (cResult[46] === tmp71) {
                                  tmp74 = cResult[47];
                                }
                                if (cResult[48] !== projectId) {
                                  const obj10 = { projectId };
                                  const tmp80 = hasOwnProperty(ConjureDebugGitSection.ConjureDebugRestartAgent, obj10);
                                  cResult[48] = projectId;
                                  cResult[49] = tmp80;
                                  tmp78 = tmp80;
                                } else {
                                  tmp78 = cResult[49];
                                }
                                if (cResult[50] === tmp36) {
                                  if (cResult[51] === tmp58) {
                                    if (cResult[52] === tmp74) {
                                      if (cResult[53] === tmp78) {
                                        let tmp81;
                                        let tmp84;
                                        let tmp90Result2;
                                        if (cResult[54] === tmp28) {
                                          tmp81 = cResult[55];
                                        }
                                        if (cResult[56] !== projectId) {
                                          const obj11 = { projectId };
                                          const tmp86 = hasOwnProperty(ConjureDebugGitSection.ConjureDebugGitSection, obj11);
                                          cResult[56] = projectId;
                                          cResult[57] = tmp86;
                                          tmp84 = tmp86;
                                        } else {
                                          tmp84 = cResult[57];
                                        }
                                        if (cResult[58] === session) {
                                          let tmp87;
                                          let tmp99;
                                          if (cResult[59] === status) {
                                            tmp87 = cResult[60];
                                          }
                                          if (cResult[61] !== limits) {
                                            let tmp100 = null;
                                            if (null != limits) {
                                              const obj12 = { title: intl23.string(_modDef3864["LEIhp/"]), children: items1 };
                                              const DebugSection4 = ConjureDebugPrimitives.DebugSection;
                                              intl23 = intl45.intl;
                                              const obj13 = { label: intl24.string(_modDef3864.IlDBN3), value: tmpResult54.formatCount(limits.max_subagent_iterations) };
                                              const DebugStatRow8 = ConjureDebugPrimitives.DebugStatRow;
                                              intl24 = intl45.intl;
                                              tmpResult54 = ConjureDebugFormat;
                                              items1 = [hasOwnProperty(DebugStatRow8, obj13), , , , , ];
                                              const obj14 = { label: intl25.string(_modDef3864["ZdzKR+"]), value: formatToPlainString4(yHJxuP, obj15) };
                                              const DebugStatRow9 = ConjureDebugPrimitives.DebugStatRow;
                                              intl25 = intl45.intl;
                                              const intl26 = intl45.intl;
                                              formatToPlainString4 = intl26.formatToPlainString;
                                              obj15 = { count: tmpResult55.formatCount(limits.context_window_tokens) };
                                              yHJxuP = tmp5(3864).yHJxuP;
                                              tmpResult55 = ConjureDebugFormat;
                                              items1[1] = hasOwnProperty(DebugStatRow9, obj14);
                                              const obj16 = { label: intl27.string(_modDef3864.cIhN2W), value: formatToPlainString5(yHJxuP2, obj17) };
                                              const DebugStatRow10 = ConjureDebugPrimitives.DebugStatRow;
                                              intl27 = intl45.intl;
                                              const intl28 = intl45.intl;
                                              formatToPlainString5 = intl28.formatToPlainString;
                                              obj17 = { count: tmpResult56.formatCount(limits.per_turn_max_output_tokens) };
                                              yHJxuP2 = tmp5(3864).yHJxuP;
                                              tmpResult56 = ConjureDebugFormat;
                                              items1[2] = hasOwnProperty(DebugStatRow10, obj16);
                                              const obj18 = { label: intl29.string(_modDef3864["+fOn/q"]), value: tmpResult57.formatCount(limits.max_user_message_chars) };
                                              const DebugStatRow11 = ConjureDebugPrimitives.DebugStatRow;
                                              intl29 = intl45.intl;
                                              tmpResult57 = ConjureDebugFormat;
                                              items1[3] = hasOwnProperty(DebugStatRow11, obj18);
                                              const obj19 = { label: intl30.string(_modDef3864.kIHga0), value: tmpResult58.formatCount(limits.max_build_attempts) };
                                              const DebugStatRow12 = ConjureDebugPrimitives.DebugStatRow;
                                              intl30 = intl45.intl;
                                              tmpResult58 = ConjureDebugFormat;
                                              items1[4] = hasOwnProperty(DebugStatRow12, obj19);
                                              const obj20 = { label: intl31.string(_modDef3864.Iw03yW), value: tmpResult59.formatCount(limits.max_session_attempts) };
                                              const DebugStatRow13 = ConjureDebugPrimitives.DebugStatRow;
                                              intl31 = intl45.intl;
                                              tmpResult59 = ConjureDebugFormat;
                                              items1[5] = hasOwnProperty(DebugStatRow13, obj20);
                                              tmp100 = metroImportDefault(DebugSection4, obj12);
                                            }
                                            cResult[61] = limits;
                                            cResult[62] = tmp100;
                                            tmp99 = tmp100;
                                          } else {
                                            tmp99 = cResult[62];
                                          }
                                          if (cResult[63] === tmp4.tab) {
                                            if (cResult[64] === tmp9) {
                                              if (cResult[65] === tmp81) {
                                                if (cResult[66] === tmp84) {
                                                  if (cResult[67] === tmp87) {
                                                    if (cResult[68] === tmp99) {
                                                      if (cResult[69] === tmp14) {
                                                        let tmp103;
                                                        if (cResult[70] === tmp22) {
                                                          tmp103 = cResult[71];
                                                        }
                                                        return tmp103;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj21 = { style: tab, children: items2 };
                                          items2 = [tmp9, tmp14, tmp22, tmp81, tmp84, tmp87, tmp99];
                                          const tmp106 = metroImportDefault(View, obj21);
                                          cResult[63] = tmp4.tab;
                                          cResult[64] = tmp9;
                                          cResult[65] = tmp81;
                                          cResult[66] = tmp84;
                                          cResult[67] = tmp87;
                                          cResult[68] = tmp99;
                                          cResult[69] = tmp14;
                                          cResult[70] = tmp22;
                                          cResult[71] = tmp106;
                                          tmp103 = tmp106;
                                        }
                                        if (null != session) {
                                          const obj22 = { title: intl16.string(_modDef3864.EsSzCS), children: items4 };
                                          const DebugSection3 = ConjureDebugPrimitives.DebugSection;
                                          intl16 = intl45.intl;
                                          let tmp90Result = null;
                                          if (null != session) {
                                            const obj23 = { label: intl17.string(_modDef3864.CLXHAs), value: tmpResult60.formatObservedAt(session.instance_since), hint: intl18.string(_modDef3864.UCwUEX) };
                                            const DebugStatRow4 = ConjureDebugPrimitives.DebugStatRow;
                                            intl17 = intl45.intl;
                                            tmpResult60 = ConjureDebugFormat;
                                            intl18 = intl45.intl;
                                            const items3 = [hasOwnProperty(DebugStatRow4, obj23), , , ];
                                            const obj24 = { label: intl19.string(_modDef3864["8V8e1Z"]), value: tmpResult61.formatCount(session.sockets) };
                                            const DebugStatRow5 = ConjureDebugPrimitives.DebugStatRow;
                                            intl19 = intl45.intl;
                                            tmpResult61 = ConjureDebugFormat;
                                            items3[1] = hasOwnProperty(DebugStatRow5, obj24);
                                            const obj25 = { label: intl20.string(_modDef3864["4pBzYW"]), value: string(turn_inflight ? tmp5Result.Wv025I : tmp5Result["7/lsFY"]) };
                                            const DebugStatRow6 = ConjureDebugPrimitives.DebugStatRow;
                                            intl20 = intl45.intl;
                                            const intl21 = intl45.intl;
                                            string = intl21.string;
                                            turn_inflight = session.turn_inflight;
                                            tmp5Result = _modDef3864;
                                            items3[2] = hasOwnProperty(DebugStatRow6, obj25);
                                            let tmp93Result = null;
                                            const tmp92 = metroRequire;
                                            if (session.queued_messages > 0) {
                                              const obj26 = { label: intl22.string(_modDef3864["3oUYnv"]), value: tmpResult62.formatCount(session.queued_messages) };
                                              const DebugStatRow7 = ConjureDebugPrimitives.DebugStatRow;
                                              intl22 = intl45.intl;
                                              tmpResult62 = ConjureDebugFormat;
                                              tmp93Result = tmp93(DebugStatRow7, obj26);
                                            }
                                            const obj27 = { children: items3 };
                                            items3[3] = tmp93Result;
                                            tmp90Result = tmp90(tmp92, obj27);
                                          }
                                          items4 = [tmp90Result, ];
                                          let analytics;
                                          if (status != null) {
                                            analytics = status.analytics;
                                          }
                                          let tmp97 = null;
                                          if (null != analytics) {
                                            const obj28 = { analytics: status.analytics };
                                            tmp97 = hasOwnProperty(ConjureDebugAnalytics.ConjureDebugAgentAnalyticsRows, obj28);
                                          }
                                          items4[1] = tmp97;
                                          tmp90Result2 = tmp90(DebugSection3, obj22);
                                        } else {
                                          let analytics1;
                                          if (status != null) {
                                            analytics1 = status.analytics;
                                          }
                                          tmp90Result2 = null;
                                        }
                                        cResult[58] = session;
                                        cResult[59] = status;
                                        cResult[60] = tmp90Result2;
                                        tmp87 = tmp90Result2;
                                      }
                                    }
                                  }
                                }
                                const obj29 = { title: tmp26, children: items5 };
                                items5 = [tmp28, tmp36, tmp58, tmp74, tmp78];
                                const tmp83 = metroImportDefault(ConjureDebugPrimitives.DebugSection, obj29);
                                cResult[50] = tmp36;
                                cResult[51] = tmp58;
                                cResult[52] = tmp74;
                                cResult[53] = tmp78;
                                cResult[54] = tmp28;
                                cResult[55] = tmp83;
                                tmp81 = tmp83;
                              }
                            }
                            const obj30 = { style: forceCompaction2, children: items6 };
                            items6 = [tmp66, tmp71];
                            const tmp77 = metroImportDefault(View, obj30);
                            cResult[44] = tmp4.forceCompaction;
                            cResult[45] = tmp66;
                            cResult[46] = tmp71;
                            cResult[47] = tmp77;
                            tmp74 = tmp77;
                          }
                          const obj31 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str12, children: tmp69 };
                          const tmp73 = hasOwnProperty(Text_Text.Text, obj31);
                          cResult[41] = str12;
                          cResult[42] = tmp69;
                          cResult[43] = tmp73;
                          tmp71 = tmp73;
                        }
                      }
                      const obj32 = { variant: "secondary", size: "sm", text: tmp62, loading: "pending" === restartState, disabled: "pending" === restartState || turnRunning, onPress: handleRestartWorkspace };
                      const tmp68 = hasOwnProperty(components_Button_Button.Button, obj32);
                      cResult[35] = handleRestartWorkspace;
                      cResult[36] = "pending" === restartState;
                      cResult[37] = "pending" === restartState || turnRunning;
                      cResult[38] = tmp68;
                      tmp66 = tmp68;
                    }
                  }
                }
                const obj33 = { style: forceCompaction, children: items7 };
                items7 = [tmp44, tmp49, tmp54];
                const tmp61 = metroImportDefault(View, obj33);
                cResult[29] = tmp4.forceCompaction;
                cResult[30] = tmp44;
                cResult[31] = tmp49;
                cResult[32] = tmp54;
                cResult[33] = tmp61;
                tmp58 = tmp61;
              }
              let pendingTurn1;
              if (tmp7 != null) {
                pendingTurn1 = tmp7.pendingTurn;
              }
              let tmp56 = null;
              if (true === pendingTurn1) {
                const obj34 = { children: items8 };
                const obj35 = { variant: "critical-primary", size: "sm", text: intl43.string(_modDef3864.ZxG2AI), onPress: handleForceCompactionOverride };
                const Button = components_Button_Button.Button;
                intl43 = intl45.intl;
                items8 = [hasOwnProperty(Button, obj35), ];
                const obj36 = { variant: "text-xs/normal", color: "text-muted", children: intl44.string(_modDef3864.V73vdN) };
                const Text = Text_Text.Text;
                intl44 = intl45.intl;
                items8[1] = hasOwnProperty(Text, obj36);
                tmp56 = metroImportDefault(metroRequire, obj34);
              }
              let pendingTurn2;
              if (tmp7 != null) {
                pendingTurn2 = tmp7.pendingTurn;
              }
              cResult[26] = pendingTurn2;
              cResult[27] = handleForceCompactionOverride;
              cResult[28] = tmp56;
              tmp54 = tmp56;
            }
            const obj37 = { variant: "text-xs/normal", color: str10, children: tmp47 };
            const tmp51 = hasOwnProperty(Text_Text.Text, obj37);
            cResult[23] = str10;
            cResult[24] = tmp47;
            cResult[25] = tmp51;
            tmp49 = tmp51;
          }
          const obj38 = { variant: "secondary", size: "sm", text: tmp41, disabled: "pending" === forceState, onPress: handleForceCompaction };
          const tmp46 = hasOwnProperty(components_Button_Button.Button, obj38);
          cResult[18] = handleForceCompaction;
          cResult[19] = "pending" === forceState;
          cResult[20] = tmp46;
          tmp44 = tmp46;
        }
        if (null != lastCompaction) {
          let tmp29Result;
          if (null != contextCeiling) {
            const obj39 = { children: items9 };
            const obj40 = { label: intl9.string(_modDef3864.Kw5wiQ), used: lastCompaction.tokensAfter, max: contextCeiling, formatValue: ConjureDebugFormat.formatCount };
            const DebugMeter = ConjureDebugPrimitives.DebugMeter;
            intl9 = intl45.intl;
            items9 = [hasOwnProperty(DebugMeter, obj40), ];
            const obj41 = { label: intl10.string(_modDef3864.mRbSns), value: "" + formatCountResult3 + " \u2192 " + tmpResult64.formatCount(lastCompaction.tokensAfter), hint: formatToPlainString2(Vq3skS, obj42) };
            const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
            intl10 = intl45.intl;
            const tmpResult63 = ConjureDebugFormat;
            const _HermesInternal2 = HermesInternal;
            formatCountResult3 = tmpResult63.formatCount(lastCompaction.tokensBefore);
            tmpResult64 = ConjureDebugFormat;
            const intl11 = intl45.intl;
            formatToPlainString2 = intl11.formatToPlainString;
            obj42 = { count: tmpResult65.formatCount(lastCompaction.retainedMessages), time: tmpResult66.formatObservedAt(lastCompaction.observedAt) };
            Vq3skS = tmp5(3864).Vq3skS;
            tmpResult65 = ConjureDebugFormat;
            tmpResult66 = ConjureDebugFormat;
            items9[1] = hasOwnProperty(DebugStatRow2, obj41);
            tmp29Result = metroImportDefault(metroRequire, obj39);
          }
          cResult[12] = contextCeiling;
          cResult[13] = lastCompaction;
          cResult[14] = tmp29Result;
          tmp28 = tmp29Result;
        }
        const DebugNote3 = ConjureDebugPrimitives.DebugNote;
        const tmp29 = hasOwnProperty;
        if (null != contextCeiling) {
          const intl8 = intl45.intl;
          const formatToPlainString = intl8.formatToPlainString;
          const obj43 = { ceiling: tmpResult67.formatCount(contextCeiling) };
          const GMLCNv = tmp5(3864).GMLCNv;
          tmpResult67 = ConjureDebugFormat;
          formatToPlainStringResult = formatToPlainString(GMLCNv, obj43);
        } else {
          const intl7 = intl45.intl;
          formatToPlainStringResult = intl7.string(tmp5(3864).s0U5Fv);
        }
        const obj44 = { children: formatToPlainStringResult };
        tmp29Result = tmp29(DebugNote3, obj44);
      }
      const obj45 = { title: tmp12, children: tmp107Result };
      const DebugSection = ConjureDebugPrimitives.DebugSection;
      if (null == lifetime) {
        const obj46 = { children: intl3.string(_modDef3864.s0U5Fv) };
        const DebugNote = ConjureDebugPrimitives.DebugNote;
        intl3 = intl45.intl;
        tmp107Result = tmp15(DebugNote, obj46);
      } else {
        const obj47 = { label: intl32.string(_modDef3864["9nqym2"]), value: formatCount(tmpResult69.runesFromUsd(lifetime.cost_usd)), hint: formatToPlainString6(NCdUIh, obj48) };
        const DebugStatRow14 = ConjureDebugPrimitives.DebugStatRow;
        intl32 = intl45.intl;
        formatCount = ConjureDebugFormat.formatCount;
        ConjureDebugFormat;
        tmpResult69 = ConjureUsageTypes;
        const intl33 = intl45.intl;
        formatToPlainString6 = intl33.formatToPlainString;
        obj48 = { count: tmpResult70.formatCount(lifetime.turns) };
        NCdUIh = tmp5(3864).NCdUIh;
        tmpResult70 = ConjureDebugFormat;
        const items10 = [hasOwnProperty(DebugStatRow14, obj47), , , , ];
        const intl34 = intl45.intl;
        const orchestrator = lifetime.orchestrator;
        const obj49 = { label: intl34.string(_modDef3864.xtxP0e), value: formatToPlainString7(yHJxuP3, obj50), hint: "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + tmpResult75.formatCount(orchestrator.cache_read_input_tokens) + " cache read" };
        intl34.string(_modDef3864.xtxP0e);
        const DebugStatRow15 = ConjureDebugPrimitives.DebugStatRow;
        const intl35 = intl45.intl;
        formatToPlainString7 = intl35.formatToPlainString;
        obj50 = { count: formatCount2(tmpResult72.runeCount(orchestrator)) };
        yHJxuP3 = tmp5(3864).yHJxuP;
        formatCount2 = ConjureDebugFormat.formatCount;
        ConjureDebugFormat;
        tmpResult72 = ConjureUsageTypes;
        const tmpResult73 = ConjureDebugFormat;
        formatCountResult4 = tmpResult73.formatCount(orchestrator.input_tokens);
        const tmpResult74 = ConjureDebugFormat;
        const _HermesInternal4 = HermesInternal;
        formatCountResult5 = tmpResult74.formatCount(orchestrator.output_tokens);
        tmpResult75 = ConjureDebugFormat;
        items10[1] = hasOwnProperty(DebugStatRow15, obj49);
        const intl36 = intl45.intl;
        const codegen = lifetime.codegen;
        const obj51 = { label: intl36.string(_modDef3864["9Sj3SX"]), value: formatToPlainString8(yHJxuP4, obj52), hint: "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + tmpResult80.formatCount(codegen.cache_read_input_tokens) + " cache read" };
        intl36.string(_modDef3864["9Sj3SX"]);
        const DebugStatRow16 = ConjureDebugPrimitives.DebugStatRow;
        const intl37 = intl45.intl;
        formatToPlainString8 = intl37.formatToPlainString;
        obj52 = { count: formatCount3(tmpResult77.runeCount(codegen)) };
        yHJxuP4 = tmp5(3864).yHJxuP;
        formatCount3 = ConjureDebugFormat.formatCount;
        ConjureDebugFormat;
        tmpResult77 = ConjureUsageTypes;
        const tmpResult78 = ConjureDebugFormat;
        formatCountResult6 = tmpResult78.formatCount(codegen.input_tokens);
        const tmpResult79 = ConjureDebugFormat;
        const _HermesInternal5 = HermesInternal;
        formatCountResult7 = tmpResult79.formatCount(codegen.output_tokens);
        tmpResult80 = ConjureDebugFormat;
        items10[2] = hasOwnProperty(DebugStatRow16, obj51);
        const intl38 = intl45.intl;
        const stringResult8 = intl38.string(_modDef3864.ANCEo3);
        const tmpResult81 = ConjureUsageTypes;
        const usageOrEmptyResult = tmpResult81.usageOrEmpty(lifetime.compaction);
        const obj53 = { label: stringResult8, value: formatToPlainString9(yHJxuP5, obj54), hint: "" + formatCountResult8 + " in \u00B7 " + formatCountResult9 + " out \u00B7 " + tmpResult86.formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read" };
        const DebugStatRow17 = ConjureDebugPrimitives.DebugStatRow;
        const intl39 = intl45.intl;
        formatToPlainString9 = intl39.formatToPlainString;
        obj54 = { count: formatCount4(tmpResult83.runeCount(usageOrEmptyResult)) };
        yHJxuP5 = tmp5(3864).yHJxuP;
        formatCount4 = ConjureDebugFormat.formatCount;
        ConjureDebugFormat;
        tmpResult83 = ConjureUsageTypes;
        const tmpResult84 = ConjureDebugFormat;
        formatCountResult8 = tmpResult84.formatCount(usageOrEmptyResult.input_tokens);
        const tmpResult85 = ConjureDebugFormat;
        const _HermesInternal6 = HermesInternal;
        formatCountResult9 = tmpResult85.formatCount(usageOrEmptyResult.output_tokens);
        tmpResult86 = ConjureDebugFormat;
        items10[3] = hasOwnProperty(DebugStatRow17, obj53);
        let outcomes;
        const tmp107 = metroImportDefault;
        const tmp108 = metroRequire;
        if (status != null) {
          const agent = status.agent;
          if (agent != null) {
            outcomes = agent.outcomes;
          }
        }
        let tmp15Result3 = null;
        if (null != outcomes) {
          const _Object = Object;
          tmp15Result3 = null;
          if (Object.keys(status.agent.outcomes).length > 0) {
            const obj55 = { label: intl2.string(_modDef3864.SQHm7C), value: mapped.join(" \u00B7 ") };
            const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
            intl2 = intl45.intl;
            const _Object2 = Object;
            const entries = Object.entries(status.agent.outcomes);
            const sorted = entries.sort((arg0, arg1) => _slicedToArray(arg1, 2)[1] - _slicedToArray(arg0, 2)[1]);
            mapped = sorted.map((item) => {
              let tmp2;
              let tmp3;
              [tmp2, tmp3] = item;
              _slicedToArray(item, 2);
              const obj = ConjureDebugFormat;
              return "" + obj.formatCount(tmp3) + " " + tmp2;
            });
            tmp15Result3 = tmp15(DebugStatRow, obj55);
          }
        }
        const obj56 = { children: items10 };
        items10[4] = tmp15Result3;
        tmp107Result = tmp107(tmp108, obj56);
      }
      const tmp15Result4 = hasOwnProperty(DebugSection, obj45);
      cResult[5] = lifetime;
      cResult[6] = status;
      cResult[7] = tmp15Result4;
      tmp14 = tmp15Result4;
    }
  }
  const tmp10 = hasOwnProperty(ConjureDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh });
  cResult[0] = fetchState;
  cResult[1] = onRefresh;
  cResult[2] = generated_at;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : (function ConjureDebugAgentTab(arg0) {
  let NCdUIh;
  let Vq3skS;
  let cache_hit_rate;
  let contextCeiling;
  let fetchState;
  let forceState;
  let formatCount;
  let formatCount2;
  let formatCount3;
  let formatCount4;
  let formatCount5;
  let formatCountResult;
  let formatCountResult1;
  let formatCountResult2;
  let formatCountResult3;
  let formatCountResult4;
  let formatCountResult5;
  let formatCountResult6;
  let formatCountResult7;
  let formatCountResult8;
  let formatCountResult9;
  let formatToPlainString10;
  let formatToPlainString2;
  let formatToPlainString3;
  let formatToPlainString4;
  let formatToPlainString5;
  let formatToPlainString6;
  let formatToPlainString7;
  let formatToPlainString8;
  let formatToPlainString9;
  let formatToPlainStringResult;
  let handleForceCompaction;
  let handleForceCompactionOverride;
  let handleRestartWorkspace;
  let intl;
  let intl10;
  let intl12;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl27;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl4;
  let intl42;
  let intl43;
  let intl44;
  let intl5;
  let intl6;
  let intl9;
  let items10;
  let items3;
  let items5;
  let items6;
  let items7;
  let items9;
  let lastCompaction;
  let lastDecline;
  let lastTurn;
  let lifetime;
  let limits;
  let mapped;
  let obj11;
  let obj17;
  let obj24;
  let obj26;
  let obj48;
  let obj5;
  let obj50;
  let obj7;
  let obj9;
  let onRefresh;
  let projectId;
  let restartState;
  let round;
  let session;
  let status;
  let string;
  let tmp2Result;
  let tmp6Result5;
  let tmp8Result7;
  let tmp9Result44;
  let tmp9Result45;
  let tmp9Result47;
  let tmp9Result50;
  let tmp9Result52;
  let tmp9Result55;
  let tmp9Result58;
  let tmp9Result61;
  let tmp9Result63;
  let tmp9Result66;
  let tmp9Result69;
  let tmp9Result70;
  let tmp9Result71;
  let tmp9Result73;
  let tmp9Result74;
  let tmp9Result75;
  let tmp9Result76;
  let tmp9Result77;
  let tmp9Result78;
  let tmp9Result79;
  let tmp9Result80;
  let tmp9Result81;
  let tmp9Result82;
  let tmp9Result83;
  let tmp9Result84;
  let tmp9Result85;
  let tmp9Result86;
  let turnRunning;
  let turn_inflight;
  let v6ngCax;
  let yHJxuP;
  let yHJxuP2;
  let yHJxuP3;
  let yHJxuP4;
  let yHJxuP5;
  let yHJxuP6;
  ({ projectId, status } = arg0);
  ({ fetchState, onRefresh } = arg0);
  const tmp = closure_8();
  const tmp2 = importDefault;
  const tmp4 = useConjureDebugAgentStateDefault(projectId, status);
  ({ lastTurn, lastCompaction, lastDecline, forceState, restartState, lifetime, limits, session, contextCeiling } = tmp4);
  let tmp5 = null;
  ({ turnRunning, handleForceCompaction, handleForceCompactionOverride, handleRestartWorkspace } = tmp4);
  if (typeof forceState === "object") {
    tmp5 = forceState;
  }
  let obj = { style: tmp.tab, children: null };
  let generated_at;
  const DebugSnapshotToolbar = ConjureDebugPrimitives.DebugSnapshotToolbar;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items = [hasOwnProperty(DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , , ];
  const obj2 = { title: intl.string(_modDef3864.JghNal), children: tmp6Result5 };
  const DebugSection = ConjureDebugPrimitives.DebugSection;
  intl = intl45.intl;
  if (null == lifetime) {
    const obj3 = { children: intl3.string(_modDef3864.s0U5Fv) };
    const DebugNote = ConjureDebugPrimitives.DebugNote;
    intl3 = intl45.intl;
    tmp6Result5 = tmp8(DebugNote, obj3);
  } else {
    const obj4 = { label: intl32.string(_modDef3864["9nqym2"]), value: formatCount(tmp9Result44.runesFromUsd(lifetime.cost_usd)), hint: formatToPlainString6(NCdUIh, obj5) };
    const DebugStatRow14 = ConjureDebugPrimitives.DebugStatRow;
    intl32 = intl45.intl;
    formatCount = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result44 = ConjureUsageTypes;
    const intl33 = intl45.intl;
    formatToPlainString6 = intl33.formatToPlainString;
    obj5 = { count: tmp9Result45.formatCount(lifetime.turns) };
    NCdUIh = _modDef3864.NCdUIh;
    tmp9Result45 = ConjureDebugFormat;
    const items1 = [hasOwnProperty(DebugStatRow14, obj4), , , , ];
    const intl34 = intl45.intl;
    const orchestrator = lifetime.orchestrator;
    const obj6 = { label: intl34.string(_modDef3864.xtxP0e), value: formatToPlainString7(yHJxuP3, obj7), hint: "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + tmp9Result50.formatCount(orchestrator.cache_read_input_tokens) + " cache read" };
    intl34.string(_modDef3864.xtxP0e);
    const DebugStatRow15 = ConjureDebugPrimitives.DebugStatRow;
    const intl35 = intl45.intl;
    formatToPlainString7 = intl35.formatToPlainString;
    obj7 = { count: formatCount2(tmp9Result47.runeCount(orchestrator)) };
    yHJxuP3 = _modDef3864.yHJxuP;
    formatCount2 = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result47 = ConjureUsageTypes;
    const tmp9Result48 = ConjureDebugFormat;
    formatCountResult = tmp9Result48.formatCount(orchestrator.input_tokens);
    const tmp9Result49 = ConjureDebugFormat;
    const _HermesInternal4 = HermesInternal;
    formatCountResult1 = tmp9Result49.formatCount(orchestrator.output_tokens);
    tmp9Result50 = ConjureDebugFormat;
    items1[1] = hasOwnProperty(DebugStatRow15, obj6);
    const intl36 = intl45.intl;
    const codegen = lifetime.codegen;
    const obj8 = { label: intl36.string(_modDef3864["9Sj3SX"]), value: formatToPlainString8(yHJxuP4, obj9), hint: "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + tmp9Result55.formatCount(codegen.cache_read_input_tokens) + " cache read" };
    intl36.string(_modDef3864["9Sj3SX"]);
    const DebugStatRow16 = ConjureDebugPrimitives.DebugStatRow;
    const intl37 = intl45.intl;
    formatToPlainString8 = intl37.formatToPlainString;
    obj9 = { count: formatCount3(tmp9Result52.runeCount(codegen)) };
    yHJxuP4 = _modDef3864.yHJxuP;
    formatCount3 = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result52 = ConjureUsageTypes;
    const tmp9Result53 = ConjureDebugFormat;
    formatCountResult2 = tmp9Result53.formatCount(codegen.input_tokens);
    const tmp9Result54 = ConjureDebugFormat;
    const _HermesInternal5 = HermesInternal;
    formatCountResult3 = tmp9Result54.formatCount(codegen.output_tokens);
    tmp9Result55 = ConjureDebugFormat;
    items1[2] = hasOwnProperty(DebugStatRow16, obj8);
    const intl38 = intl45.intl;
    const stringResult2 = intl38.string(_modDef3864.ANCEo3);
    const tmp9Result56 = ConjureUsageTypes;
    const usageOrEmptyResult = tmp9Result56.usageOrEmpty(lifetime.compaction);
    const obj10 = { label: stringResult2, value: formatToPlainString9(yHJxuP5, obj11), hint: "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + tmp9Result61.formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read" };
    const DebugStatRow17 = ConjureDebugPrimitives.DebugStatRow;
    const intl39 = intl45.intl;
    formatToPlainString9 = intl39.formatToPlainString;
    obj11 = { count: formatCount4(tmp9Result58.runeCount(usageOrEmptyResult)) };
    yHJxuP5 = _modDef3864.yHJxuP;
    formatCount4 = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result58 = ConjureUsageTypes;
    const tmp9Result59 = ConjureDebugFormat;
    formatCountResult4 = tmp9Result59.formatCount(usageOrEmptyResult.input_tokens);
    const tmp9Result60 = ConjureDebugFormat;
    const _HermesInternal6 = HermesInternal;
    formatCountResult5 = tmp9Result60.formatCount(usageOrEmptyResult.output_tokens);
    tmp9Result61 = ConjureDebugFormat;
    items1[3] = hasOwnProperty(DebugStatRow17, obj10);
    let outcomes;
    const tmp36 = metroRequire;
    if (status != null) {
      const agent = status.agent;
      if (agent != null) {
        outcomes = agent.outcomes;
      }
    }
    let tmp8Result6 = null;
    if (null != outcomes) {
      const _Object = Object;
      tmp8Result6 = null;
      if (Object.keys(status.agent.outcomes).length > 0) {
        const obj12 = { label: intl2.string(_modDef3864.SQHm7C), value: mapped.join(" \u00B7 ") };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        intl2 = intl45.intl;
        const _Object2 = Object;
        const entries = Object.entries(status.agent.outcomes);
        const sorted = entries.sort((arg0, arg1) => {
          let tmp;
          let tmp2;
          [, tmp] = arg0;
          [, tmp2] = arg1;
          return tmp2 - tmp;
        });
        mapped = sorted.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const obj = ConjureDebugFormat;
          return "" + obj.formatCount(tmp2) + " " + tmp;
        });
        tmp8Result6 = tmp8(DebugStatRow, obj12);
      }
    }
    const obj13 = { children: items1 };
    items1[4] = tmp8Result6;
    tmp6Result5 = tmp6(tmp36, obj13);
  }
  items[1] = hasOwnProperty(DebugSection, obj2);
  const obj14 = { title: intl4.string(_modDef3864.dZHPE5), children: tmp8Result7 };
  const DebugSection2 = ConjureDebugPrimitives.DebugSection;
  intl4 = intl45.intl;
  if (null == lastTurn) {
    const obj15 = { children: intl5.string(_modDef3864.DfVjal) };
    const DebugNote2 = ConjureDebugPrimitives.DebugNote;
    intl5 = intl45.intl;
    tmp8Result7 = tmp8(DebugNote2, obj15);
  } else {
    const intl40 = intl45.intl;
    const total = lastTurn.total;
    const obj16 = { label: intl40.string(_modDef3864["7X3i9d"]), value: formatToPlainString10(yHJxuP6, obj17), hint: "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + tmp9Result66.formatCount(total.cache_read_input_tokens) + " cache read" };
    intl40.string(_modDef3864["7X3i9d"]);
    const DebugStatRow18 = ConjureDebugPrimitives.DebugStatRow;
    const intl41 = intl45.intl;
    formatToPlainString10 = intl41.formatToPlainString;
    obj17 = { count: formatCount5(tmp9Result63.runeCount(total)) };
    yHJxuP6 = _modDef3864.yHJxuP;
    formatCount5 = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result63 = ConjureUsageTypes;
    const tmp9Result64 = ConjureDebugFormat;
    formatCountResult6 = tmp9Result64.formatCount(total.input_tokens);
    const tmp9Result65 = ConjureDebugFormat;
    const _HermesInternal7 = HermesInternal;
    formatCountResult7 = tmp9Result65.formatCount(total.output_tokens);
    tmp9Result66 = ConjureDebugFormat;
    const items2 = [hasOwnProperty(DebugStatRow18, obj16), ];
    const obj18 = { label: intl42.string(_modDef3864["8OUg09"]), value: "" + round(100 * cache_hit_rate) + "%" };
    const DebugStatRow19 = ConjureDebugPrimitives.DebugStatRow;
    intl42 = intl45.intl;
    cache_hit_rate = lastTurn.cache_hit_rate;
    const _Math = Math;
    round = Math.round;
    const tmp55 = metroRequire;
    if (cache_hit_rate == null) {
      const tmp9Result67 = ConjureUsageTypes;
      cache_hit_rate = tmp9Result67.cacheHitRate(lastTurn.total);
    }
    const _HermesInternal = HermesInternal;
    const obj19 = { children: items2 };
    items2[1] = hasOwnProperty(DebugStatRow19, obj18);
    tmp8Result7 = tmp6(tmp55, obj19);
  }
  items[2] = hasOwnProperty(DebugSection2, obj14);
  const obj20 = { title: intl6.string(_modDef3864.NbRk9a), children: null };
  const DebugSection3 = ConjureDebugPrimitives.DebugSection;
  intl6 = intl45.intl;
  if (null != lastCompaction) {
    let tmp8Result11;
    let tmp6Result8;
    if (null != contextCeiling) {
      const obj21 = { children: items3 };
      const obj22 = { label: intl9.string(_modDef3864.Kw5wiQ), used: lastCompaction.tokensAfter, max: contextCeiling, formatValue: ConjureDebugFormat.formatCount };
      const DebugMeter = ConjureDebugPrimitives.DebugMeter;
      intl9 = intl45.intl;
      items3 = [hasOwnProperty(DebugMeter, obj22), ];
      const obj23 = { label: intl10.string(_modDef3864.mRbSns), value: "" + formatCountResult8 + " \u2192 " + tmp9Result69.formatCount(lastCompaction.tokensAfter), hint: formatToPlainString2(Vq3skS, obj24) };
      const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
      intl10 = intl45.intl;
      const tmp9Result68 = ConjureDebugFormat;
      const _HermesInternal2 = HermesInternal;
      formatCountResult8 = tmp9Result68.formatCount(lastCompaction.tokensBefore);
      tmp9Result69 = ConjureDebugFormat;
      const intl11 = intl45.intl;
      formatToPlainString2 = intl11.formatToPlainString;
      obj24 = { count: tmp9Result70.formatCount(lastCompaction.retainedMessages), time: tmp9Result71.formatObservedAt(lastCompaction.observedAt) };
      Vq3skS = _modDef3864.Vq3skS;
      tmp9Result70 = ConjureDebugFormat;
      tmp9Result71 = ConjureDebugFormat;
      items3[1] = hasOwnProperty(DebugStatRow2, obj23);
      tmp8Result11 = tmp6(metroRequire, obj21);
    }
    const items4 = [tmp8Result11, , , , ];
    let tmp8Result8 = null;
    if (null != lastDecline) {
      const obj25 = { label: intl12.string(_modDef3864["4BX5KK"]), value: "" + formatCountResult9 + " / " + tmp9Result73.formatCount(lastDecline.threshold), critical: true, hint: formatToPlainString3(v6ngCax, obj26) };
      const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
      intl12 = intl45.intl;
      const tmp9Result72 = ConjureDebugFormat;
      const _HermesInternal3 = HermesInternal;
      formatCountResult9 = tmp9Result72.formatCount(lastDecline.projected);
      tmp9Result73 = ConjureDebugFormat;
      const intl13 = intl45.intl;
      formatToPlainString3 = intl13.formatToPlainString;
      obj26 = { time: tmp9Result74.formatObservedAt(lastDecline.observedAt) };
      v6ngCax = _modDef3864["6ngCax"];
      tmp9Result74 = ConjureDebugFormat;
      tmp8Result8 = tmp8(DebugStatRow3, obj25);
    }
    items4[1] = tmp8Result8;
    const obj27 = { style: tmp.forceCompaction, children: items5 };
    const obj28 = { variant: "secondary", size: "sm", text: intl14.string(_modDef3864["1EiJeb"]), disabled: "pending" === forceState, onPress: handleForceCompaction };
    const Button = components_Button_Button.Button;
    intl14 = intl45.intl;
    items5 = [hasOwnProperty(Button, obj28), , ];
    let str9 = "text-muted";
    const Text = Text_Text.Text;
    if (null != tmp5) {
      str9 = "text-muted";
      if ("compacted" !== tmp5.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj29 = { variant: "text-xs/normal", color: str9, children: tmp9Result75.forceCompactionStatus(forceState) };
    tmp9Result75 = ConjureDebugLabels;
    items5[1] = hasOwnProperty(Text, obj29);
    let pendingTurn;
    if (tmp5 != null) {
      pendingTurn = tmp5.pendingTurn;
    }
    let tmp6Result6 = null;
    if (true === pendingTurn) {
      const obj30 = { children: items6 };
      const obj31 = { variant: "critical-primary", size: "sm", text: intl43.string(_modDef3864.ZxG2AI), onPress: handleForceCompactionOverride };
      const Button3 = components_Button_Button.Button;
      intl43 = intl45.intl;
      items6 = [hasOwnProperty(Button3, obj31), ];
      const obj32 = { variant: "text-xs/normal", color: "text-muted", children: intl44.string(_modDef3864.V73vdN) };
      const Text3 = Text_Text.Text;
      intl44 = intl45.intl;
      items6[1] = hasOwnProperty(Text3, obj32);
      tmp6Result6 = tmp6(metroRequire, obj30);
    }
    items5[2] = tmp6Result6;
    items4[2] = metroImportDefault(View, obj27);
    const obj33 = { style: tmp.forceCompaction, children: items7 };
    const obj34 = { variant: "secondary", size: "sm", text: intl15.string(_modDef3864["5qCjBu"]), loading: tmp26, disabled: tmp26, onPress: handleRestartWorkspace };
    const Button2 = components_Button_Button.Button;
    intl15 = intl45.intl;
    items7 = [hasOwnProperty(Button2, obj34), ];
    let str11 = "text-muted";
    const Text2 = Text_Text.Text;
    if (typeof restartState === "object") {
      str11 = "text-muted";
      if ("restarted" !== restartState.outcome) {
        str11 = "text-feedback-critical";
      }
    }
    const obj35 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str11, children: tmp9Result76.sandboxRestartStatus(restartState) };
    tmp9Result76 = ConjureDebugLabels;
    items7[1] = hasOwnProperty(Text2, obj35);
    items4[3] = metroImportDefault(View, obj33);
    const obj36 = { projectId };
    items4[4] = hasOwnProperty(ConjureDebugGitSection.ConjureDebugRestartAgent, obj36);
    obj20.children = items4;
    items[3] = metroImportDefault(DebugSection3, obj20);
    const obj37 = { projectId };
    items[4] = hasOwnProperty(ConjureDebugGitSection.ConjureDebugGitSection, obj37);
    if (null != session) {
      const obj38 = { title: intl16.string(_modDef3864.EsSzCS), children: items9 };
      const DebugSection4 = ConjureDebugPrimitives.DebugSection;
      intl16 = intl45.intl;
      let tmp6Result7 = null;
      if (null != session) {
        const obj39 = { label: intl17.string(_modDef3864.CLXHAs), value: tmp9Result77.formatObservedAt(session.instance_since), hint: intl18.string(_modDef3864.UCwUEX) };
        const DebugStatRow4 = ConjureDebugPrimitives.DebugStatRow;
        intl17 = intl45.intl;
        tmp9Result77 = ConjureDebugFormat;
        intl18 = intl45.intl;
        const items8 = [hasOwnProperty(DebugStatRow4, obj39), , , ];
        const obj40 = { label: intl19.string(_modDef3864["8V8e1Z"]), value: tmp9Result78.formatCount(session.sockets) };
        const DebugStatRow5 = ConjureDebugPrimitives.DebugStatRow;
        intl19 = intl45.intl;
        tmp9Result78 = ConjureDebugFormat;
        items8[1] = hasOwnProperty(DebugStatRow5, obj40);
        const obj41 = { label: intl20.string(_modDef3864["4pBzYW"]), value: string(turn_inflight ? tmp2Result.Wv025I : tmp2Result["7/lsFY"]) };
        const DebugStatRow6 = ConjureDebugPrimitives.DebugStatRow;
        intl20 = intl45.intl;
        const intl21 = intl45.intl;
        string = intl21.string;
        turn_inflight = session.turn_inflight;
        tmp2Result = _modDef3864;
        items8[2] = hasOwnProperty(DebugStatRow6, obj41);
        let tmp8Result9 = null;
        const tmp30 = metroRequire;
        if (session.queued_messages > 0) {
          const obj42 = { label: intl22.string(_modDef3864["3oUYnv"]), value: tmp9Result79.formatCount(session.queued_messages) };
          const DebugStatRow7 = ConjureDebugPrimitives.DebugStatRow;
          intl22 = intl45.intl;
          tmp9Result79 = ConjureDebugFormat;
          tmp8Result9 = tmp8(DebugStatRow7, obj42);
        }
        const obj43 = { children: items8 };
        items8[3] = tmp8Result9;
        tmp6Result7 = tmp6(tmp30, obj43);
      }
      items9 = [tmp6Result7, ];
      let analytics;
      if (status != null) {
        analytics = status.analytics;
      }
      let tmp8Result10 = null;
      if (null != analytics) {
        const obj44 = { analytics: status.analytics };
        tmp8Result10 = tmp8(ConjureDebugAnalytics.ConjureDebugAgentAnalyticsRows, obj44);
      }
      items9[1] = tmp8Result10;
      tmp6Result8 = tmp6(DebugSection4, obj38);
    } else {
      let analytics1;
      if (status != null) {
        analytics1 = status.analytics;
      }
      tmp6Result8 = null;
    }
    items[5] = tmp6Result8;
    let tmp6Result9 = null;
    if (null != limits) {
      const obj45 = { title: intl23.string(_modDef3864["LEIhp/"]), children: items10 };
      const DebugSection5 = ConjureDebugPrimitives.DebugSection;
      intl23 = intl45.intl;
      const obj46 = { label: intl24.string(_modDef3864.IlDBN3), value: tmp9Result80.formatCount(limits.max_subagent_iterations) };
      const DebugStatRow8 = ConjureDebugPrimitives.DebugStatRow;
      intl24 = intl45.intl;
      tmp9Result80 = ConjureDebugFormat;
      items10 = [hasOwnProperty(DebugStatRow8, obj46), , , , , ];
      const obj47 = { label: intl25.string(_modDef3864["ZdzKR+"]), value: formatToPlainString4(yHJxuP, obj48) };
      const DebugStatRow9 = ConjureDebugPrimitives.DebugStatRow;
      intl25 = intl45.intl;
      const intl26 = intl45.intl;
      formatToPlainString4 = intl26.formatToPlainString;
      obj48 = { count: tmp9Result81.formatCount(limits.context_window_tokens) };
      yHJxuP = _modDef3864.yHJxuP;
      tmp9Result81 = ConjureDebugFormat;
      items10[1] = hasOwnProperty(DebugStatRow9, obj47);
      const obj49 = { label: intl27.string(_modDef3864.cIhN2W), value: formatToPlainString5(yHJxuP2, obj50) };
      const DebugStatRow10 = ConjureDebugPrimitives.DebugStatRow;
      intl27 = intl45.intl;
      const intl28 = intl45.intl;
      formatToPlainString5 = intl28.formatToPlainString;
      obj50 = { count: tmp9Result82.formatCount(limits.per_turn_max_output_tokens) };
      yHJxuP2 = _modDef3864.yHJxuP;
      tmp9Result82 = ConjureDebugFormat;
      items10[2] = hasOwnProperty(DebugStatRow10, obj49);
      const obj51 = { label: intl29.string(_modDef3864["+fOn/q"]), value: tmp9Result83.formatCount(limits.max_user_message_chars) };
      const DebugStatRow11 = ConjureDebugPrimitives.DebugStatRow;
      intl29 = intl45.intl;
      tmp9Result83 = ConjureDebugFormat;
      items10[3] = hasOwnProperty(DebugStatRow11, obj51);
      const obj52 = { label: intl30.string(_modDef3864.kIHga0), value: tmp9Result84.formatCount(limits.max_build_attempts) };
      const DebugStatRow12 = ConjureDebugPrimitives.DebugStatRow;
      intl30 = intl45.intl;
      tmp9Result84 = ConjureDebugFormat;
      items10[4] = hasOwnProperty(DebugStatRow12, obj52);
      const obj53 = { label: intl31.string(_modDef3864.Iw03yW), value: tmp9Result85.formatCount(limits.max_session_attempts) };
      const DebugStatRow13 = ConjureDebugPrimitives.DebugStatRow;
      intl31 = intl45.intl;
      tmp9Result85 = ConjureDebugFormat;
      items10[5] = hasOwnProperty(DebugStatRow13, obj53);
      tmp6Result9 = tmp6(DebugSection5, obj45);
    }
    items[6] = tmp6Result9;
    obj.children = items;
    return metroImportDefault(View, obj);
  }
  const DebugNote3 = ConjureDebugPrimitives.DebugNote;
  if (null != contextCeiling) {
    const intl8 = intl45.intl;
    const formatToPlainString = intl8.formatToPlainString;
    const obj54 = { ceiling: tmp9Result86.formatCount(contextCeiling) };
    const GMLCNv = _modDef3864.GMLCNv;
    tmp9Result86 = ConjureDebugFormat;
    formatToPlainStringResult = formatToPlainString(GMLCNv, obj54);
  } else {
    const intl7 = intl45.intl;
    formatToPlainStringResult = intl7.string(_modDef3864.s0U5Fv);
  }
  tmp8Result11 = tmp8(DebugNote3, { children: formatToPlainStringResult });
});
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default tmp5;
