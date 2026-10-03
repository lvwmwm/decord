// Module ID: 16750
// Function ID: 16751
// Name: VibegrationsDebugWorkerTab
// Dependencies: [19, 17, 21, 4890, 587, 558, 576, 16740, 1126, 3723, 16738, 16737, 16751, 2]

// Module 16750 (VibegrationsDebugWorkerTab)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl16 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 16737 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 16738 */;
import VibegrationsDebugPrimitives from "VibegrationsDebugPrimitives" /* 16740 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { tab: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let intl;
  let preview;
  let renderEnv;
  let stable;
  let title;
  const obj = react2;
  const cResult = obj.c(19);
  ({ title, preview, stable, renderEnv } = arg0);
  if (cResult[0] === preview) {
    if (cResult[1] === renderEnv) {
      let arr;
      let tmp18;
      if (cResult[2] === stable) {
        arr = cResult[3];
      }
      if (cResult[14] !== arr) {
        let tmp19 = arr;
        if (arr.length <= 0) {
          const obj2 = { children: intl.string(_modDef3723.W4hcKL) };
          const DebugNote = tmp(16740).DebugNote;
          intl = tmp(1126).intl;
          tmp19 = hasOwnProperty(DebugNote, obj2);
        }
        cResult[14] = arr;
        cResult[15] = tmp19;
        tmp18 = tmp19;
      } else {
        tmp18 = cResult[15];
      }
      if (cResult[16] === tmp18) {
        let tmp22;
        if (cResult[17] === title) {
          tmp22 = cResult[18];
        }
        return tmp22;
      }
      const obj3 = { title, children: tmp18 };
      const tmp24 = hasOwnProperty(VibegrationsDebugPrimitives.DebugSection, obj3);
      cResult[16] = tmp18;
      cResult[17] = title;
      cResult[18] = tmp24;
      tmp22 = tmp24;
    }
  }
  const items = [];
  if (null != preview) {
    if (cResult[4] === preview) {
      let tmp4;
      let tmp6;
      if (cResult[5] === renderEnv) {
        tmp4 = cResult[6];
      }
      if (cResult[7] !== tmp4) {
        const obj4 = { children: tmp4 };
        const tmp9 = hasOwnProperty(react.Fragment, obj4, "preview");
        cResult[7] = tmp4;
        cResult[8] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[8];
      }
      items.push(tmp6);
    }
    const renderEnvResult = renderEnv("preview", preview);
    cResult[4] = preview;
    cResult[5] = renderEnv;
    cResult[6] = renderEnvResult;
    tmp4 = renderEnvResult;
  }
  if (null != stable) {
    if (cResult[9] === renderEnv) {
      let tmp11;
      let tmp13;
      if (cResult[10] === stable) {
        tmp11 = cResult[11];
      }
      if (cResult[12] !== tmp11) {
        const obj5 = { children: tmp11 };
        const tmp16 = hasOwnProperty(react.Fragment, obj5, "stable");
        cResult[12] = tmp11;
        cResult[13] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[13];
      }
      items.push(tmp13);
    }
    const renderEnvResult1 = renderEnv("stable", stable);
    cResult[9] = renderEnv;
    cResult[10] = stable;
    cResult[11] = renderEnvResult1;
    tmp11 = renderEnvResult1;
  }
  cResult[0] = preview;
  cResult[1] = renderEnv;
  cResult[2] = stable;
  cResult[3] = items;
  arr = items;
}) : ((title) => {
  let intl;
  let preview;
  let renderEnv;
  let stable;
  ({ preview, stable, renderEnv } = title);
  let items = [];
  title = title.title;
  if (null != preview) {
    const push = items.push;
    const Fragment = react.Fragment;
    const obj = { children: renderEnv("preview", preview) };
    push(hasOwnProperty(Fragment, obj, "preview"));
  }
  if (null != stable) {
    const push2 = items.push;
    const Fragment2 = react.Fragment;
    const obj2 = { children: renderEnv("stable", stable) };
    push2(hasOwnProperty(Fragment2, obj2, "stable"));
  }
  const obj3 = { title, children: items };
  const DebugSection = VibegrationsDebugPrimitives.DebugSection;
  if (items.length <= 0) {
    const obj4 = { children: intl.string(_modDef3723.W4hcKL) };
    const DebugNote = tmp8(16740).DebugNote;
    intl = tmp8(1126).intl;
    items = tmp7(DebugNote, obj4);
  }
  return hasOwnProperty(DebugSection, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bot;
  let env;
  let intl7;
  let items;
  let tmpResult;
  let tmpResult13;
  let tmpResult14;
  const obj = react2;
  const cResult = obj.c(45);
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    let tmp13;
    let tmp16;
    if (cResult[5] !== env) {
      const intl2 = tmp(1126).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj2 = { env: tmpResult.debugEnvLabel(env) };
      const f8ix3w = _modDef3723.f8ix3w;
      tmpResult = VibegrationsDebugLabels;
      const formatToPlainStringResult = formatToPlainString(f8ix3w, obj2);
      cResult[5] = env;
      cResult[6] = formatToPlainStringResult;
      tmp13 = formatToPlainStringResult;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== bot.connected) {
      const tmpResult9 = VibegrationsDebugLabels;
      const debugYesNoResult = tmpResult9.debugYesNo(bot.connected);
      cResult[7] = bot.connected;
      cResult[8] = debugYesNoResult;
      tmp16 = debugYesNoResult;
    } else {
      tmp16 = cResult[8];
    }
    let fatal_reason = bot.fatal_reason;
    if (fatal_reason == null) {
      let tmp21;
      if (!bot.connected) {
        const last_start_reason = bot.last_start_reason;
        tmp21 = last_start_reason;
      }
      fatal_reason = tmp21;
    }
    if (cResult[9] === tmp13) {
      if (cResult[10] === tmp16) {
        if (cResult[11] === (!bot.connected && null != bot.fatal_reason)) {
          let tmp22;
          let tmp26;
          let tmp29;
          if (cResult[12] === fatal_reason) {
            tmp22 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult = intl3.string(_modDef3723["0AB7l3"]);
            cResult[14] = stringResult;
            tmp26 = stringResult;
          } else {
            tmp26 = cResult[14];
          }
          if (cResult[15] !== bot.events_received) {
            const tmpResult10 = VibegrationsDebugFormat;
            const formatCountResult = tmpResult10.formatCount(bot.events_received);
            cResult[15] = bot.events_received;
            cResult[16] = formatCountResult;
            tmp29 = formatCountResult;
          } else {
            tmp29 = cResult[16];
          }
          if (cResult[17] === bot.last_event_at) {
            let tmp31;
            if (cResult[18] === bot.last_event_type) {
              tmp31 = cResult[19];
            }
            if (cResult[20] === tmp29) {
              let tmp33;
              let tmp36;
              let tmp39;
              let tmp41;
              let tmp44;
              let tmp47;
              if (cResult[21] === tmp31) {
                tmp33 = cResult[22];
              }
              const _Symbol3 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(1126).intl;
                const stringResult1 = intl4.string(_modDef3723.ElaQ0A);
                cResult[23] = stringResult1;
                tmp36 = stringResult1;
              } else {
                tmp36 = cResult[23];
              }
              if (cResult[24] !== bot.guild_count) {
                const tmpResult11 = VibegrationsDebugFormat;
                const formatCountResult1 = tmpResult11.formatCount(bot.guild_count);
                cResult[24] = bot.guild_count;
                cResult[25] = formatCountResult1;
                tmp39 = formatCountResult1;
              } else {
                tmp39 = cResult[25];
              }
              if (cResult[26] !== tmp39) {
                const obj3 = { label: tmp36, value: tmp39 };
                const tmp43 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3);
                cResult[26] = tmp39;
                cResult[27] = tmp43;
                tmp41 = tmp43;
              } else {
                tmp41 = cResult[27];
              }
              const _Symbol4 = Symbol;
              if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1126).intl;
                const stringResult2 = intl5.string(_modDef3723.SJtBTN);
                cResult[28] = stringResult2;
                tmp44 = stringResult2;
              } else {
                tmp44 = cResult[28];
              }
              if (cResult[29] !== bot.reconnects) {
                const tmpResult12 = VibegrationsDebugFormat;
                const formatCountResult2 = tmpResult12.formatCount(bot.reconnects);
                cResult[29] = bot.reconnects;
                cResult[30] = formatCountResult2;
                tmp47 = formatCountResult2;
              } else {
                tmp47 = cResult[30];
              }
              if (cResult[31] === bot.last_close_at) {
                let tmp49;
                if (cResult[32] === bot.last_close_code) {
                  tmp49 = cResult[33];
                }
                if (cResult[34] === tmp47) {
                  let tmp52;
                  let tmp55;
                  if (cResult[35] === tmp49) {
                    tmp52 = cResult[36];
                  }
                  if (cResult[37] !== bot.dispatch_errors) {
                    let tmp56 = null;
                    if (bot.dispatch_errors > 0) {
                      const obj4 = { label: intl7.string(_modDef3723.N4l504), value: tmpResult13.formatCount(bot.dispatch_errors), critical: true };
                      const DebugStatRow = tmp(16740).DebugStatRow;
                      intl7 = tmp(1126).intl;
                      tmpResult13 = VibegrationsDebugFormat;
                      tmp56 = hasOwnProperty(DebugStatRow, obj4);
                    }
                    cResult[37] = bot.dispatch_errors;
                    cResult[38] = tmp56;
                    tmp55 = tmp56;
                  } else {
                    tmp55 = cResult[38];
                  }
                  if (cResult[39] === tmp41) {
                    if (cResult[40] === tmp52) {
                      if (cResult[41] === tmp55) {
                        if (cResult[42] === tmp22) {
                          let tmp59;
                          if (cResult[43] === tmp33) {
                            tmp59 = cResult[44];
                          }
                          return tmp59;
                        }
                      }
                    }
                  }
                  const obj5 = { children: items };
                  items = [tmp22, tmp33, tmp41, tmp52, tmp55];
                  const tmp62 = metroImportDefault(metroRequire, obj5);
                  cResult[39] = tmp41;
                  cResult[40] = tmp52;
                  cResult[41] = tmp55;
                  cResult[42] = tmp22;
                  cResult[43] = tmp33;
                  cResult[44] = tmp62;
                  tmp59 = tmp62;
                }
                const obj6 = { label: tmp44, value: tmp47, hint: tmp49 };
                const tmp54 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj6);
                cResult[34] = tmp47;
                cResult[35] = tmp49;
                cResult[36] = tmp54;
                tmp52 = tmp54;
              }
              let formatToPlainString2Result;
              if (null != bot.last_close_code) {
                if (null != bot.last_close_at) {
                  const intl6 = tmp(1126).intl;
                  const formatToPlainString2 = intl6.formatToPlainString;
                  const obj7 = { code: bot.last_close_code, time: tmpResult14.formatObservedAt(bot.last_close_at) };
                  const bSzLue = _modDef3723.bSzLue;
                  tmpResult14 = VibegrationsDebugFormat;
                  formatToPlainString2Result = formatToPlainString2(bSzLue, obj7);
                }
              }
              cResult[31] = bot.last_close_at;
              cResult[32] = bot.last_close_code;
              cResult[33] = formatToPlainString2Result;
              tmp49 = formatToPlainString2Result;
            }
            const obj8 = { label: tmp26, value: tmp29, hint: tmp31 };
            const tmp35 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj8);
            cResult[20] = tmp29;
            cResult[21] = tmp31;
            cResult[22] = tmp35;
            tmp33 = tmp35;
          }
          let combined;
          if (null != bot.last_event_type) {
            if (null != bot.last_event_at) {
              const last_event_type = bot.last_event_type;
              const _HermesInternal = HermesInternal;
              const tmpResult15 = VibegrationsDebugFormat;
              combined = "" + last_event_type + " \u00B7 " + tmpResult15.formatObservedAt(bot.last_event_at);
            }
          }
          cResult[17] = bot.last_event_at;
          cResult[18] = bot.last_event_type;
          cResult[19] = combined;
          tmp31 = combined;
        }
      }
    }
    const obj9 = { label: tmp13, value: tmp16, critical: !bot.connected && null != bot.fatal_reason, hint: fatal_reason };
    const tmp24 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj9);
    cResult[9] = tmp13;
    cResult[10] = tmp16;
    cResult[11] = !bot.connected && null != bot.fatal_reason;
    cResult[12] = fatal_reason;
    cResult[13] = tmp24;
    tmp22 = tmp24;
  } else {
    let tmp4;
    let tmp7;
    let tmp10;
    if (cResult[0] !== env) {
      const tmpResult16 = VibegrationsDebugLabels;
      const debugEnvLabelResult = tmpResult16.debugEnvLabel(env);
      cResult[0] = env;
      cResult[1] = debugEnvLabelResult;
      tmp4 = debugEnvLabelResult;
    } else {
      tmp4 = cResult[1];
    }
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult3 = intl.string(_modDef3723.C6xjtD);
      cResult[2] = stringResult3;
      tmp7 = stringResult3;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj10 = { label: tmp4, value: tmp7 };
      const tmp12 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj10);
      cResult[3] = tmp4;
      cResult[4] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[4];
    }
    return tmp10;
  }
}) : ((arg0) => {
  let bot;
  let combined;
  let env;
  let f8ix3w;
  let fatal_reason;
  let formatToPlainString;
  let formatToPlainString2Result;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let obj2;
  let obj4;
  let obj5;
  let obj6;
  let tmp12;
  let tmp6Result;
  let tmp9Result;
  let tmp9Result10;
  let tmp9Result7;
  let tmp9Result8;
  let tmp9Result9;
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    const obj3 = { label: formatToPlainString(f8ix3w, obj4), value: obj6.debugYesNo(bot.connected), critical: tmp12, hint: fatal_reason };
    const DebugStatRow2 = VibegrationsDebugPrimitives.DebugStatRow;
    const intl2 = intl16.intl;
    formatToPlainString = intl2.formatToPlainString;
    obj4 = { env: obj5.debugEnvLabel(env) };
    f8ix3w = _modDef3723.f8ix3w;
    obj5 = VibegrationsDebugLabels;
    tmp12 = !bot.connected;
    obj6 = VibegrationsDebugLabels;
    const tmp6 = metroImportDefault;
    const tmp7 = metroRequire;
    if (tmp12) {
      tmp12 = null != bot.fatal_reason;
    }
    fatal_reason = bot.fatal_reason;
    if (fatal_reason == null) {
      let tmp15;
      if (!bot.connected) {
        const last_start_reason = bot.last_start_reason;
        tmp15 = last_start_reason;
      }
      fatal_reason = tmp15;
    }
    const items = [hasOwnProperty(DebugStatRow2, obj3), , , , ];
    const obj7 = { label: intl3.string(_modDef3723["0AB7l3"]), value: tmp9Result.formatCount(bot.events_received), hint: combined };
    const DebugStatRow3 = tmp9(16740).DebugStatRow;
    intl3 = tmp9(1126).intl;
    combined = undefined;
    tmp9Result = VibegrationsDebugFormat;
    if (null != bot.last_event_type) {
      if (null != bot.last_event_at) {
        const last_event_type = bot.last_event_type;
        const _HermesInternal = HermesInternal;
        const tmp9Result6 = VibegrationsDebugFormat;
        combined = "" + last_event_type + " \u00B7 " + tmp9Result6.formatObservedAt(bot.last_event_at);
      }
    }
    items[1] = hasOwnProperty(DebugStatRow3, obj7);
    const obj8 = { label: intl4.string(_modDef3723.ElaQ0A), value: tmp9Result7.formatCount(bot.guild_count) };
    const DebugStatRow4 = tmp9(16740).DebugStatRow;
    intl4 = tmp9(1126).intl;
    tmp9Result7 = VibegrationsDebugFormat;
    items[2] = hasOwnProperty(DebugStatRow4, obj8);
    const obj9 = { label: intl5.string(_modDef3723.SJtBTN), value: tmp9Result8.formatCount(bot.reconnects), hint: formatToPlainString2Result };
    const DebugStatRow5 = tmp9(16740).DebugStatRow;
    intl5 = tmp9(1126).intl;
    formatToPlainString2Result = undefined;
    tmp9Result8 = VibegrationsDebugFormat;
    if (null != bot.last_close_code) {
      if (null != bot.last_close_at) {
        const intl6 = tmp9(1126).intl;
        const formatToPlainString2 = intl6.formatToPlainString;
        const obj10 = { code: bot.last_close_code, time: tmp9Result9.formatObservedAt(bot.last_close_at) };
        const bSzLue = tmp11(3723).bSzLue;
        tmp9Result9 = VibegrationsDebugFormat;
        formatToPlainString2Result = formatToPlainString2(bSzLue, obj10);
      }
    }
    items[3] = hasOwnProperty(DebugStatRow5, obj9);
    let tmp8Result = null;
    if (bot.dispatch_errors > 0) {
      const obj11 = { label: intl7.string(_modDef3723.N4l504), value: tmp9Result10.formatCount(bot.dispatch_errors), critical: true };
      const DebugStatRow6 = tmp9(16740).DebugStatRow;
      intl7 = tmp9(1126).intl;
      tmp9Result10 = VibegrationsDebugFormat;
      tmp8Result = tmp8(DebugStatRow6, obj11);
    }
    const obj12 = { children: items };
    items[4] = tmp8Result;
    tmp6Result = tmp6(tmp7, obj12);
  } else {
    const obj = { label: obj2.debugEnvLabel(env), value: intl.string(_modDef3723.C6xjtD) };
    const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
    obj2 = VibegrationsDebugLabels;
    intl = intl16.intl;
    tmp6Result = hasOwnProperty(DebugStatRow, obj);
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let env;
  let metrics;
  let str;
  let tmp5;
  let tmpResult5;
  let tmpResult6;
  let tmpResult7;
  let tmpResult8;
  const obj = react2;
  const cResult = obj.c(14);
  ({ env, metrics } = arg0);
  const sum = metrics.status_4xx + metrics.status_5xx;
  if (cResult[0] !== env) {
    const tmpResult = VibegrationsDebugLabels;
    const debugEnvLabelResult = tmpResult.debugEnvLabel(env);
    cResult[0] = env;
    cResult[1] = debugEnvLabelResult;
    tmp5 = debugEnvLabelResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === sum) {
    if (cResult[3] === metrics.errors) {
      let tmp7;
      let formatToPlainString3Result;
      if (cResult[4] === metrics.requests) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === metrics.last_failure) {
        let tmp10;
        if (cResult[7] === metrics.since) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === tmp9 > 0) {
              let tmp18;
              if (cResult[12] === tmp10) {
                tmp18 = cResult[13];
              }
              return tmp18;
            }
          }
        }
        const obj2 = { label: tmp5, value: tmp7, critical: tmp9 > 0, hint: tmp10 };
        const tmp20 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj2);
        cResult[9] = tmp5;
        cResult[10] = tmp7;
        cResult[11] = tmp9 > 0;
        cResult[12] = tmp10;
        cResult[13] = tmp20;
        tmp18 = tmp20;
      }
      if (null != metrics.last_failure) {
        const intl3 = tmp(1126).intl;
        const formatToPlainString3 = intl3.formatToPlainString;
        const obj3 = { host: metrics.last_failure.host, status: str, time: tmpResult5.formatObservedAt(metrics.last_failure.at) };
        str = metrics.last_failure.status;
        const prop = _modDef3723["0ayoy+"];
        if (str == null) {
          str = "network";
        }
        tmpResult5 = VibegrationsDebugFormat;
        formatToPlainString3Result = formatToPlainString3(prop, obj3);
      } else {
        const intl2 = tmp(1126).intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const obj4 = { time: tmpResult6.formatObservedAt(metrics.since) };
        const v1PdrB1 = _modDef3723["1PdrB1"];
        tmpResult6 = VibegrationsDebugFormat;
        formatToPlainString3Result = formatToPlainString2(v1PdrB1, obj4);
      }
      cResult[6] = metrics.last_failure;
      cResult[7] = metrics.since;
      cResult[8] = formatToPlainString3Result;
      tmp10 = formatToPlainString3Result;
    }
  }
  const intl = tmp(1126).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj5 = { requests: tmpResult7.formatCount(metrics.requests), failures: tmpResult8.formatCount(sum + metrics.errors) };
  const Yur5Zm = _modDef3723.Yur5Zm;
  tmpResult7 = VibegrationsDebugFormat;
  tmpResult8 = VibegrationsDebugFormat;
  const formatToPlainStringResult = formatToPlainString(Yur5Zm, obj5);
  cResult[2] = sum;
  cResult[3] = metrics.errors;
  cResult[4] = metrics.requests;
  cResult[5] = formatToPlainStringResult;
  tmp7 = formatToPlainStringResult;
}) : ((metrics) => {
  let Yur5Zm;
  let formatToPlainString;
  let formatToPlainString3Result;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let str;
  let tmp3Result;
  let tmp3Result2;
  metrics = metrics.metrics;
  const env = metrics.env;
  const sum = metrics.status_4xx + metrics.status_5xx;
  const obj = { label: obj2.debugEnvLabel(env), value: formatToPlainString(Yur5Zm, obj3), critical: metrics.errors + metrics.status_5xx > 0, hint: formatToPlainString3Result };
  const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
  obj2 = VibegrationsDebugLabels;
  const intl = intl16.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { requests: obj4.formatCount(metrics.requests), failures: obj5.formatCount(sum + metrics.errors) };
  Yur5Zm = _modDef3723.Yur5Zm;
  obj4 = VibegrationsDebugFormat;
  obj5 = VibegrationsDebugFormat;
  const tmp2 = hasOwnProperty;
  if (null != metrics.last_failure) {
    const intl3 = tmp3(1126).intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const obj6 = { host: metrics.last_failure.host, status: str, time: tmp3Result.formatObservedAt(metrics.last_failure.at) };
    str = metrics.last_failure.status;
    const prop = tmp5(3723)["0ayoy+"];
    if (str == null) {
      str = "network";
    }
    tmp3Result = VibegrationsDebugFormat;
    formatToPlainString3Result = formatToPlainString3(prop, obj6);
  } else {
    const intl2 = tmp3(1126).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj7 = { time: tmp3Result2.formatObservedAt(metrics.since) };
    const v1PdrB1 = tmp5(3723)["1PdrB1"];
    tmp3Result2 = VibegrationsDebugFormat;
    formatToPlainString3Result = formatToPlainString2(v1PdrB1, obj7);
  }
  return tmp2(DebugStatRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((env) => {
  let items;
  let tmp4;
  let tmp7;
  let tmpResult;
  let tmp = env;
  const tmp2 = dependencyMap;
  let obj = env(576);
  const cResult = obj.c(15);
  env = env.env;
  const runtime = env.runtime;
  if (cResult[0] !== env) {
    let intl = tmp(1126).intl;
    let formatToPlainString = intl.formatToPlainString;
    let obj2 = { env: tmpResult.debugEnvLabel(env) };
    const BVORfc = _modDef3723.BVORfc;
    tmpResult = tmp(16738);
    const formatToPlainStringResult = formatToPlainString(BVORfc, obj2);
    cResult[0] = env;
    cResult[1] = formatToPlainStringResult;
    tmp4 = formatToPlainStringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== runtime.connections) {
    const tmpResult2 = tmp(16737);
    const formatCountResult = tmpResult2.formatCount(runtime.connections);
    cResult[2] = runtime.connections;
    cResult[3] = formatCountResult;
    tmp7 = formatCountResult;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp9;
    let tmp12;
    if (cResult[5] === tmp7) {
      tmp9 = cResult[6];
    }
    if (cResult[7] === env) {
      let tmp11;
      if (cResult[8] === runtime.schedules) {
        tmp11 = cResult[9];
      }
      if (cResult[12] === tmp9) {
        let tmp14;
        if (cResult[13] === tmp11) {
          tmp14 = cResult[14];
        }
        return tmp14;
      }
      let obj3 = { children: items };
      items = [tmp9, tmp11];
      const tmp17 = closure_7(closure_6, obj3);
      cResult[12] = tmp9;
      cResult[13] = tmp11;
      cResult[14] = tmp17;
      tmp14 = tmp17;
    }
    if (cResult[10] !== env) {
      const fn = function _(id) {
        let formatToPlainString2Result;
        let intl;
        let obj2;
        let pending_attempt;
        let tmp2Result;
        const obj = { label: intl.formatToPlainString(_modDef3723.NQxkhU, obj2), value: id.trigger, hint: formatToPlainString2Result };
        const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
        intl = intl16.intl;
        obj2 = { id: id.id };
        const tmp = hasOwnProperty;
        if (null != id.pending_state) {
          const intl3 = tmp2(1126).intl;
          const formatToPlainString2 = intl3.formatToPlainString;
          const obj3 = { state: null, attempt: pending_attempt };
          ({ pending_state: obj5.state, pending_attempt } = id);
          const P8lBrO = tmp4(3723).P8lBrO;
          if (pending_attempt == null) {
            pending_attempt = 1;
          }
          formatToPlainString2Result = formatToPlainString2(P8lBrO, obj3);
        } else if (null != id.next_run_at) {
          const intl2 = tmp2(1126).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj4 = { time: tmp2Result.formatObservedAt(id.next_run_at) };
          const v7ecbr3 = tmp4(3723)["7ecbr3"];
          tmp2Result = VibegrationsDebugFormat;
          formatToPlainString2Result = formatToPlainString(v7ecbr3, obj4);
        }
        return tmp(DebugStatRow, obj, "" + env + "-" + id.id);
      };
      cResult[10] = env;
      cResult[11] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[11];
    }
    const schedules = runtime.schedules;
    const mapped = schedules.map(tmp12);
    cResult[7] = env;
    cResult[8] = runtime.schedules;
    cResult[9] = mapped;
    tmp11 = mapped;
  }
  const tmp10 = closure_5(tmp(16740).DebugStatRow, { label: tmp4, value: tmp7 });
  cResult[4] = tmp4;
  cResult[5] = tmp7;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((env) => {
  let BVORfc;
  let formatToPlainString;
  let items;
  let obj3;
  let obj4;
  let obj5;
  env = env.env;
  const runtime = env.runtime;
  let obj = { children: items };
  let obj2 = { label: formatToPlainString(BVORfc, obj3), value: obj5.formatCount(runtime.connections) };
  let DebugStatRow = env(16740).DebugStatRow;
  let intl = env(1126).intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { env: obj4.debugEnvLabel(env) };
  BVORfc = _modDef3723.BVORfc;
  obj4 = env(16738);
  obj5 = env(16737);
  items = [closure_5(DebugStatRow, obj2), ];
  const schedules = runtime.schedules;
  items[1] = schedules.map((id) => {
    let formatToPlainString2Result;
    let intl;
    let obj2;
    let pending_attempt;
    let tmp2Result;
    const obj = { label: intl.formatToPlainString(_modDef3723.NQxkhU, obj2), value: id.trigger, hint: formatToPlainString2Result };
    const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
    intl = intl16.intl;
    obj2 = { id: id.id };
    const tmp = hasOwnProperty;
    if (null != id.pending_state) {
      const intl3 = tmp2(1126).intl;
      const formatToPlainString2 = intl3.formatToPlainString;
      const obj3 = { state: null, attempt: pending_attempt };
      ({ pending_state: obj5.state, pending_attempt } = id);
      const P8lBrO = tmp4(3723).P8lBrO;
      if (pending_attempt == null) {
        pending_attempt = 1;
      }
      formatToPlainString2Result = formatToPlainString2(P8lBrO, obj3);
    } else if (null != id.next_run_at) {
      const intl2 = tmp2(1126).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj4 = { time: tmp2Result.formatObservedAt(id.next_run_at) };
      const v7ecbr3 = tmp4(3723)["7ecbr3"];
      tmp2Result = VibegrationsDebugFormat;
      formatToPlainString2Result = formatToPlainString(v7ecbr3, obj4);
    }
    return tmp(DebugStatRow, obj, "" + env + "-" + id.id);
  });
  return closure_7(closure_6, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let env;
  let metrics;
  let tmp4;
  let tmpResult3;
  let tmpResult4;
  const obj = react2;
  const cResult = obj.c(10);
  ({ env, metrics } = arg0);
  if (cResult[0] !== env) {
    const tmpResult = VibegrationsDebugLabels;
    const debugEnvLabelResult = tmpResult.debugEnvLabel(env);
    cResult[0] = env;
    cResult[1] = debugEnvLabelResult;
    tmp4 = debugEnvLabelResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === metrics.calls) {
    let tmp6;
    if (cResult[3] === metrics.errors) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === metrics.last_model) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp6) {
          let tmp9;
          if (cResult[8] === metrics.errors > 0) {
            tmp9 = cResult[9];
          }
          return tmp9;
        }
      }
    }
    const obj2 = { label: tmp4, value: tmp6, critical: metrics.errors > 0, hint: metrics.last_model };
    const tmp11 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj2);
    cResult[5] = metrics.last_model;
    cResult[6] = tmp4;
    cResult[7] = tmp6;
    cResult[8] = metrics.errors > 0;
    cResult[9] = tmp11;
    tmp9 = tmp11;
  }
  const intl = tmp(1126).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj3 = { calls: tmpResult3.formatCount(metrics.calls), errors: tmpResult4.formatCount(metrics.errors) };
  const voXL2a = _modDef3723.voXL2a;
  tmpResult3 = VibegrationsDebugFormat;
  tmpResult4 = VibegrationsDebugFormat;
  const formatToPlainStringResult = formatToPlainString(voXL2a, obj3);
  cResult[2] = metrics.calls;
  cResult[3] = metrics.errors;
  cResult[4] = formatToPlainStringResult;
  tmp6 = formatToPlainStringResult;
}) : ((metrics) => {
  let formatToPlainString;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let voXL2a;
  metrics = metrics.metrics;
  const env = metrics.env;
  const obj = { label: obj2.debugEnvLabel(env), value: formatToPlainString(voXL2a, obj3), critical: metrics.errors > 0, hint: metrics.last_model };
  const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
  obj2 = VibegrationsDebugLabels;
  const intl = intl16.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { calls: obj4.formatCount(metrics.calls), errors: obj5.formatCount(metrics.errors) };
  voXL2a = _modDef3723.voXL2a;
  obj4 = VibegrationsDebugFormat;
  obj5 = VibegrationsDebugFormat;
  return hasOwnProperty(DebugStatRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let formatToPlainString2;
  let intl10;
  let intl11;
  let intl14;
  let intl15;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items;
  let items1;
  let limits;
  let metrics;
  let obj12;
  let prop;
  let title;
  let tmp66;
  let tmpResult10;
  let tmpResult12;
  let tmpResult14;
  let tmpResult15;
  let tmpResult16;
  let tmpResult17;
  let tmpResult18;
  const obj = react2;
  const cResult = obj.c(49);
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      let tmp4;
      let tmp7;
      let tmp9;
      const _Symbol3 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3723.KOnL3g);
        cResult[3] = stringResult;
        tmp4 = stringResult;
      } else {
        tmp4 = cResult[3];
      }
      if (cResult[4] !== metrics.requests) {
        const tmpResult = VibegrationsDebugFormat;
        const formatCountResult = tmpResult.formatCount(metrics.requests);
        cResult[4] = metrics.requests;
        cResult[5] = formatCountResult;
        tmp7 = formatCountResult;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== metrics.since) {
        const intl2 = tmp(1126).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const obj2 = { time: tmpResult10.formatObservedAt(metrics.since) };
        const v1PdrB1 = _modDef3723["1PdrB1"];
        tmpResult10 = VibegrationsDebugFormat;
        const formatToPlainStringResult = formatToPlainString(v1PdrB1, obj2);
        cResult[6] = metrics.since;
        cResult[7] = formatToPlainStringResult;
        tmp9 = formatToPlainStringResult;
      } else {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        let tmp13;
        let tmp16;
        let tmp19;
        if (cResult[9] === tmp9) {
          tmp13 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(_modDef3723.CjPhyY);
          cResult[11] = stringResult1;
          tmp16 = stringResult1;
        } else {
          tmp16 = cResult[11];
        }
        if (cResult[12] !== metrics.errors) {
          const tmpResult11 = VibegrationsDebugFormat;
          const formatCountResult1 = tmpResult11.formatCount(metrics.errors);
          cResult[12] = metrics.errors;
          cResult[13] = formatCountResult1;
          tmp19 = formatCountResult1;
        } else {
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp19) {
          let tmp22;
          let tmp28;
          if (cResult[15] === metrics.errors > 0) {
            tmp22 = cResult[16];
          }
          if (cResult[17] === metrics.cpu_ms_total > 0) {
            if (cResult[18] === limits.cpu_ms_per_request) {
              if (cResult[19] === metrics.cpu_ms_max) {
                if (cResult[20] === metrics.cpu_ms_total) {
                  if (cResult[21] === metrics.requests) {
                    let tmp25;
                    if (cResult[22] === metrics.wall_ms_total) {
                      tmp25 = cResult[23];
                    }
                    if (cResult[24] === metrics.cpu_ms_total > 0) {
                      let tmp34;
                      let tmp38;
                      let tmp42;
                      let tmp45;
                      let tmp48;
                      if (cResult[25] === metrics.wall_ms_total) {
                        tmp34 = cResult[26];
                      }
                      if (cResult[27] !== metrics.exceeded_cpu) {
                        let tmp39 = null;
                        if (metrics.exceeded_cpu > 0) {
                          const obj3 = { label: intl11.string(_modDef3723.vM2krr), value: tmpResult12.formatCount(metrics.exceeded_cpu), critical: true };
                          const DebugStatRow4 = tmp(16740).DebugStatRow;
                          intl11 = tmp(1126).intl;
                          tmpResult12 = VibegrationsDebugFormat;
                          tmp39 = hasOwnProperty(DebugStatRow4, obj3);
                        }
                        cResult[27] = metrics.exceeded_cpu;
                        cResult[28] = tmp39;
                        tmp38 = tmp39;
                      } else {
                        tmp38 = cResult[28];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl12 = tmp(1126).intl;
                        const stringResult2 = intl12.string(_modDef3723.g1O88C);
                        cResult[29] = stringResult2;
                        tmp42 = stringResult2;
                      } else {
                        tmp42 = cResult[29];
                      }
                      if (cResult[30] !== metrics.exceeded_memory) {
                        const tmpResult13 = VibegrationsDebugFormat;
                        const formatCountResult2 = tmpResult13.formatCount(metrics.exceeded_memory);
                        cResult[30] = metrics.exceeded_memory;
                        cResult[31] = formatCountResult2;
                        tmp45 = formatCountResult2;
                      } else {
                        tmp45 = cResult[31];
                      }
                      if (cResult[32] !== limits.memory_mb) {
                        const intl13 = tmp(1126).intl;
                        const formatToPlainString3 = intl13.formatToPlainString;
                        const _HermesInternal = HermesInternal;
                        const obj4 = { limit: "" + limits.memory_mb + " MB" };
                        const v5iALNP = _modDef3723["5iALNP"];
                        const formatToPlainString3Result = formatToPlainString3(v5iALNP, obj4);
                        cResult[32] = limits.memory_mb;
                        cResult[33] = formatToPlainString3Result;
                        tmp48 = formatToPlainString3Result;
                      } else {
                        tmp48 = cResult[33];
                      }
                      if (cResult[34] === tmp45) {
                        if (cResult[35] === metrics.exceeded_memory > 0) {
                          let tmp52;
                          let tmp55;
                          if (cResult[36] === tmp48) {
                            tmp52 = cResult[37];
                          }
                          if (cResult[38] !== metrics.build) {
                            let tmp56 = null;
                            if (null != metrics.build) {
                              const obj5 = { label: intl14.string(_modDef3723.JUZs7g), value: tmpResult14.shortBuildLabel(metrics.build) };
                              const DebugStatRow5 = tmp(16740).DebugStatRow;
                              intl14 = tmp(1126).intl;
                              tmpResult14 = VibegrationsDebugFormat;
                              tmp56 = hasOwnProperty(DebugStatRow5, obj5);
                            }
                            cResult[38] = metrics.build;
                            cResult[39] = tmp56;
                            tmp55 = tmp56;
                          } else {
                            tmp55 = cResult[39];
                          }
                          if (cResult[40] === tmp34) {
                            if (cResult[41] === tmp38) {
                              if (cResult[42] === tmp52) {
                                if (cResult[43] === tmp55) {
                                  if (cResult[44] === tmp13) {
                                    if (cResult[45] === tmp22) {
                                      if (cResult[46] === tmp25) {
                                        let tmp59;
                                        if (cResult[47] === title) {
                                          tmp59 = cResult[48];
                                        }
                                        return tmp59;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const obj6 = { title, children: items };
                          items = [tmp13, tmp22, tmp25, tmp34, tmp38, tmp52, tmp55];
                          const tmp61 = metroImportDefault(VibegrationsDebugPrimitives.DebugSection, obj6);
                          cResult[40] = tmp34;
                          cResult[41] = tmp38;
                          cResult[42] = tmp52;
                          cResult[43] = tmp55;
                          cResult[44] = tmp13;
                          cResult[45] = tmp22;
                          cResult[46] = tmp25;
                          cResult[47] = title;
                          cResult[48] = tmp61;
                          tmp59 = tmp61;
                        }
                      }
                      const obj7 = { label: tmp42, value: tmp45, critical: metrics.exceeded_memory > 0, hint: tmp48 };
                      const tmp54 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj7);
                      cResult[34] = tmp45;
                      cResult[35] = metrics.exceeded_memory > 0;
                      cResult[36] = tmp48;
                      cResult[37] = tmp54;
                      tmp52 = tmp54;
                    }
                    let tmp35 = null;
                    if (metrics.cpu_ms_total <= 0) {
                      tmp35 = null;
                      if (metrics.wall_ms_total > 0) {
                        const obj8 = { label: intl10.string(_modDef3723.ueEMPa), value: tmpResult15.formatMs(metrics.wall_ms_total) };
                        const DebugStatRow3 = tmp(16740).DebugStatRow;
                        intl10 = tmp(1126).intl;
                        tmpResult15 = VibegrationsDebugFormat;
                        tmp35 = hasOwnProperty(DebugStatRow3, obj8);
                      }
                    }
                    cResult[24] = metrics.cpu_ms_total > 0;
                    cResult[25] = metrics.wall_ms_total;
                    cResult[26] = tmp35;
                    tmp34 = tmp35;
                  }
                }
              }
            }
          }
          if (metrics.cpu_ms_total > 0) {
            const obj9 = { children: items1 };
            const obj10 = { label: intl7.string(_modDef3723["V/nNbs"]), used: metrics.cpu_ms_max, max: limits.cpu_ms_per_request, formatValue: VibegrationsDebugFormat.formatMs };
            const DebugMeter = tmp(16740).DebugMeter;
            intl7 = tmp(1126).intl;
            items1 = [hasOwnProperty(DebugMeter, obj10), ];
            const obj11 = { label: intl8.string(_modDef3723["+rYPHD"]), value: tmpResult16.formatMs(metrics.cpu_ms_total / metrics.requests), hint: formatToPlainString2(prop, obj12) };
            const DebugStatRow2 = tmp(16740).DebugStatRow;
            intl8 = tmp(1126).intl;
            tmpResult16 = VibegrationsDebugFormat;
            const intl9 = tmp(1126).intl;
            formatToPlainString2 = intl9.formatToPlainString;
            obj12 = { total: tmpResult17.formatMs(metrics.cpu_ms_total), wall: tmpResult18.formatMs(metrics.wall_ms_total) };
            prop = _modDef3723["+LxC7W"];
            tmpResult17 = VibegrationsDebugFormat;
            tmpResult18 = VibegrationsDebugFormat;
            items1[1] = hasOwnProperty(DebugStatRow2, obj11);
            tmp28 = metroImportDefault(metroRequire, obj9);
          } else {
            const obj13 = { label: intl4.string(_modDef3723["V/nNbs"]), value: intl5.string(_modDef3723.YKWIxp), hint: intl6.string(_modDef3723["8GAiDk"]) };
            const DebugStatRow = tmp(16740).DebugStatRow;
            intl4 = tmp(1126).intl;
            intl5 = tmp(1126).intl;
            intl6 = tmp(1126).intl;
            tmp28 = hasOwnProperty(DebugStatRow, obj13);
          }
          cResult[17] = metrics.cpu_ms_total > 0;
          cResult[18] = limits.cpu_ms_per_request;
          cResult[19] = metrics.cpu_ms_max;
          cResult[20] = metrics.cpu_ms_total;
          cResult[21] = metrics.requests;
          cResult[22] = metrics.wall_ms_total;
          cResult[23] = tmp28;
          tmp25 = tmp28;
        }
        const obj14 = { label: tmp16, value: tmp19, critical: metrics.errors > 0 };
        const tmp24 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj14);
        cResult[14] = tmp19;
        cResult[15] = metrics.errors > 0;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
      const obj15 = { label: tmp4, value: tmp7, hint: tmp9 };
      const tmp15 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj15);
      cResult[8] = tmp7;
      cResult[9] = tmp9;
      cResult[10] = tmp15;
      tmp13 = tmp15;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj16 = { children: intl15.string(_modDef3723["v/fbnv"]) };
    const DebugNote = tmp(16740).DebugNote;
    intl15 = tmp(1126).intl;
    const tmp65 = hasOwnProperty(DebugNote, obj16);
    cResult[0] = tmp65;
    first = tmp65;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== title) {
    const obj17 = { title, children: first };
    const tmp68 = hasOwnProperty(VibegrationsDebugPrimitives.DebugSection, obj17);
    cResult[1] = title;
    cResult[2] = tmp68;
    tmp66 = tmp68;
  } else {
    tmp66 = cResult[2];
  }
  return tmp66;
}) : ((arg0) => {
  let DebugNote;
  let formatToPlainString;
  let formatToPlainString2;
  let formatToPlainString3;
  let intl;
  let intl11;
  let intl12;
  let intl13;
  let intl15;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let limits;
  let metrics;
  let obj13;
  let obj16;
  let obj22;
  let obj24;
  let obj26;
  let obj4;
  let obj9;
  let prop;
  let title;
  let tmp11Result;
  let tmp11Result10;
  let tmp11Result11;
  let tmp11Result12;
  let tmp11Result7;
  let tmp11Result8;
  let tmp11Result9;
  let v1PdrB1;
  let v5iALNP;
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      let tmp;
      const obj2 = { title, children: items };
      const DebugSection2 = VibegrationsDebugPrimitives.DebugSection;
      const obj3 = { label: intl13.string(_modDef3723.KOnL3g), value: obj22.formatCount(metrics.requests), hint: formatToPlainString3(v1PdrB1, obj4) };
      const DebugStatRow7 = VibegrationsDebugPrimitives.DebugStatRow;
      intl13 = intl16.intl;
      obj22 = VibegrationsDebugFormat;
      const intl14 = intl16.intl;
      formatToPlainString3 = intl14.formatToPlainString;
      obj4 = { time: obj24.formatObservedAt(metrics.since) };
      v1PdrB1 = _modDef3723["1PdrB1"];
      obj24 = VibegrationsDebugFormat;
      items = [hasOwnProperty(DebugStatRow7, obj3), , , , , , ];
      const obj5 = { label: intl15.string(_modDef3723.CjPhyY), value: obj26.formatCount(metrics.errors), critical: metrics.errors > 0 };
      const DebugStatRow8 = VibegrationsDebugPrimitives.DebugStatRow;
      intl15 = intl16.intl;
      obj26 = VibegrationsDebugFormat;
      items[1] = hasOwnProperty(DebugStatRow8, obj5);
      if (metrics.cpu_ms_total > 0) {
        const obj6 = { children: items1 };
        const obj7 = { label: intl4.string(_modDef3723["V/nNbs"]), used: metrics.cpu_ms_max, max: limits.cpu_ms_per_request, formatValue: VibegrationsDebugFormat.formatMs };
        const DebugMeter = tmp11(16740).DebugMeter;
        intl4 = tmp11(1126).intl;
        items1 = [hasOwnProperty(DebugMeter, obj7), ];
        const obj8 = { label: intl5.string(_modDef3723["+rYPHD"]), value: tmp11Result.formatMs(metrics.cpu_ms_total / metrics.requests), hint: formatToPlainString(prop, obj9) };
        const DebugStatRow2 = tmp11(16740).DebugStatRow;
        intl5 = tmp11(1126).intl;
        tmp11Result = VibegrationsDebugFormat;
        const intl6 = tmp11(1126).intl;
        formatToPlainString = intl6.formatToPlainString;
        obj9 = { total: tmp11Result7.formatMs(metrics.cpu_ms_total), wall: tmp11Result8.formatMs(metrics.wall_ms_total) };
        prop = tmp14(3723)["+LxC7W"];
        tmp11Result7 = VibegrationsDebugFormat;
        tmp11Result8 = VibegrationsDebugFormat;
        items1[1] = hasOwnProperty(DebugStatRow2, obj8);
        tmp = tmp10(metroRequire, obj6);
      } else {
        const obj = { label: intl.string(_modDef3723["V/nNbs"]), value: intl2.string(_modDef3723.YKWIxp), hint: intl3.string(_modDef3723["8GAiDk"]) };
        const DebugStatRow = tmp11(16740).DebugStatRow;
        intl = tmp11(1126).intl;
        intl2 = tmp11(1126).intl;
        intl3 = tmp11(1126).intl;
        tmp = tmp13(DebugStatRow, obj);
      }
      items[2] = tmp;
      let tmp13Result = null;
      if (metrics.cpu_ms_total <= 0) {
        tmp13Result = null;
        if (metrics.wall_ms_total > 0) {
          const obj10 = { label: intl7.string(_modDef3723.ueEMPa), value: tmp11Result9.formatMs(metrics.wall_ms_total) };
          const DebugStatRow3 = tmp11(16740).DebugStatRow;
          intl7 = tmp11(1126).intl;
          tmp11Result9 = VibegrationsDebugFormat;
          tmp13Result = tmp13(DebugStatRow3, obj10);
        }
      }
      items[3] = tmp13Result;
      let tmp13Result3 = null;
      if (metrics.exceeded_cpu > 0) {
        const obj11 = { label: intl8.string(_modDef3723.vM2krr), value: tmp11Result10.formatCount(metrics.exceeded_cpu), critical: true };
        const DebugStatRow4 = tmp11(16740).DebugStatRow;
        intl8 = tmp11(1126).intl;
        tmp11Result10 = VibegrationsDebugFormat;
        tmp13Result3 = tmp13(DebugStatRow4, obj11);
      }
      items[4] = tmp13Result3;
      const obj12 = { label: intl9.string(_modDef3723.g1O88C), value: tmp11Result11.formatCount(metrics.exceeded_memory), critical: metrics.exceeded_memory > 0, hint: formatToPlainString2(v5iALNP, obj13) };
      const DebugStatRow5 = tmp11(16740).DebugStatRow;
      intl9 = tmp11(1126).intl;
      tmp11Result11 = VibegrationsDebugFormat;
      const intl10 = tmp11(1126).intl;
      formatToPlainString2 = intl10.formatToPlainString;
      const _HermesInternal = HermesInternal;
      obj13 = { limit: "" + limits.memory_mb + " MB" };
      v5iALNP = tmp14(3723)["5iALNP"];
      items[5] = hasOwnProperty(DebugStatRow5, obj12);
      let tmp13Result4 = null;
      if (null != metrics.build) {
        const obj14 = { label: intl11.string(_modDef3723.JUZs7g), value: tmp11Result12.shortBuildLabel(metrics.build) };
        const DebugStatRow6 = tmp11(16740).DebugStatRow;
        intl11 = tmp11(1126).intl;
        tmp11Result12 = VibegrationsDebugFormat;
        tmp13Result4 = tmp13(DebugStatRow6, obj14);
      }
      items[6] = tmp13Result4;
      return metroImportDefault(DebugSection2, obj2);
    }
  }
  const obj15 = { title, children: hasOwnProperty(DebugNote, obj16) };
  const DebugSection = VibegrationsDebugPrimitives.DebugSection;
  obj16 = { children: intl12.string(_modDef3723["v/fbnv"]) };
  DebugNote = VibegrationsDebugPrimitives.DebugNote;
  intl12 = intl16.intl;
  return hasOwnProperty(DebugSection, obj15);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((status) => {
  let intl;
  let items1;
  let limits;
  let preview;
  let shared_data;
  let stable;
  let tmp6;
  let tmpResult;
  let tmpResult2;
  let tmp = limits;
  let obj = limits(576);
  const cResult = obj.c(6);
  status = status.status;
  ({ stable, preview, shared_data } = status.storage);
  limits = status.worker.limits;
  if (cResult[0] === limits) {
    if (cResult[1] === preview) {
      if (cResult[2] === shared_data) {
        let tmp4;
        if (cResult[3] === stable) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  if (shared_data) {
    let obj2 = { key: "shared", label: intl.string(_modDef3723.Vrh0rD), metrics: stable };
    intl = tmp(1126).intl;
    let items = [obj2];
    items1 = items;
  } else {
    let obj3 = { key: "preview", label: tmpResult.debugEnvLabel("preview"), metrics: preview };
    items1 = [obj3, ];
    tmpResult = tmp(16738);
    let obj4 = { key: "stable", label: tmpResult2.debugEnvLabel("stable"), metrics: stable };
    items1[1] = obj4;
    tmpResult2 = tmp(16738);
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let intl2 = tmp(1126).intl;
    const stringResult = intl2.string(_modDef3723.i91625);
    cResult[5] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[5];
  }
  let obj5 = {
    title: tmp6,
    children: items1.map((item) => {
      let formatToPlainString;
      let intl;
      let intl2;
      let key;
      let label;
      let metrics;
      let obj;
      let obj2;
      let obj5;
      let obj7;
      let obj9;
      let tmp;
      let tmp18Result;
      ({ key, label, metrics } = item);
      if (null == metrics) {
        const obj3 = { label, value: "\u2014" };
        tmp18Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3, key);
      } else {
        const Fragment = react.Fragment;
        const obj4 = { label: intl2.formatToPlainString(_modDef3723["9TpIQg"], obj5), value: obj9.formatBytes(metrics.r2_bytes), hint: formatToPlainString(tmp, obj) };
        const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
        intl2 = intl16.intl;
        obj5 = { env: label };
        obj9 = VibegrationsDebugFormat;
        const intl3 = intl16.intl;
        formatToPlainString = intl3.formatToPlainString;
        const r2_truncated = metrics.r2_truncated;
        const tmp32 = _modDef3723;
        obj = { count: obj2.formatCount(metrics.r2_objects) };
        tmp = r2_truncated ? tmp32.o45MMA : tmp32.S7o3vV;
        obj2 = VibegrationsDebugFormat;
        const items = [hasOwnProperty(DebugStatRow, obj4), ];
        let tmp4 = null;
        const tmp18 = metroImportDefault;
        const tmp25 = importDefault;
        if (null != metrics.db_bytes) {
          const obj6 = { label: intl.formatToPlainString(tmp25(3723)["0OIswI"], obj7), used: metrics.db_bytes, max: limits.db_bytes, formatValue: VibegrationsDebugFormat.formatBytes };
          const DebugMeter = VibegrationsDebugPrimitives.DebugMeter;
          intl = intl16.intl;
          obj7 = { env: label };
          tmp4 = hasOwnProperty(DebugMeter, obj6);
        }
        const obj8 = { children: items };
        items[1] = tmp4;
        tmp18Result = tmp18(Fragment, obj8, key);
      }
      return tmp18Result;
    })
  };
  const DebugSection = tmp(16740).DebugSection;
  const tmp9 = closure_5(DebugSection, obj5);
  cResult[0] = limits;
  cResult[1] = preview;
  cResult[2] = shared_data;
  cResult[3] = stable;
  cResult[4] = tmp9;
  tmp4 = tmp9;
}) : ((status) => {
  let intl;
  let intl2;
  let items1;
  let obj2;
  let obj4;
  let tmp;
  let tmp4;
  status = status.status;
  const storage = status.storage;
  const stable = storage.stable;
  const limits = status.worker.limits;
  if (storage.shared_data) {
    let obj3 = { key: "shared", label: intl.string(_modDef3723.Vrh0rD), metrics: stable };
    intl = limits(1126).intl;
    let items = [obj3];
    tmp4 = limits;
    items1 = items;
  } else {
    let obj = { key: "preview", label: obj2.debugEnvLabel("preview"), metrics: tmp };
    obj2 = limits(16738);
    items1 = [obj, ];
    let obj5 = { key: "stable", label: obj4.debugEnvLabel("stable"), metrics: stable };
    obj4 = limits(16738);
    items1[1] = obj5;
    tmp4 = limits;
  }
  let obj6 = {
    title: intl2.string(_modDef3723.i91625),
    children: items1.map((item) => {
      let formatToPlainString;
      let intl;
      let intl2;
      let key;
      let label;
      let metrics;
      let obj;
      let obj2;
      let obj5;
      let obj7;
      let obj9;
      let tmp;
      let tmp18Result;
      ({ key, label, metrics } = item);
      if (null == metrics) {
        const obj3 = { label, value: "\u2014" };
        tmp18Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3, key);
      } else {
        const Fragment = react.Fragment;
        const obj4 = { label: intl2.formatToPlainString(_modDef3723["9TpIQg"], obj5), value: obj9.formatBytes(metrics.r2_bytes), hint: formatToPlainString(tmp, obj) };
        const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
        intl2 = intl16.intl;
        obj5 = { env: label };
        obj9 = VibegrationsDebugFormat;
        const intl3 = intl16.intl;
        formatToPlainString = intl3.formatToPlainString;
        const r2_truncated = metrics.r2_truncated;
        const tmp32 = _modDef3723;
        obj = { count: obj2.formatCount(metrics.r2_objects) };
        tmp = r2_truncated ? tmp32.o45MMA : tmp32.S7o3vV;
        obj2 = VibegrationsDebugFormat;
        const items = [hasOwnProperty(DebugStatRow, obj4), ];
        let tmp4 = null;
        const tmp18 = metroImportDefault;
        const tmp25 = importDefault;
        if (null != metrics.db_bytes) {
          const obj6 = { label: intl.formatToPlainString(tmp25(3723)["0OIswI"], obj7), used: metrics.db_bytes, max: limits.db_bytes, formatValue: VibegrationsDebugFormat.formatBytes };
          const DebugMeter = VibegrationsDebugPrimitives.DebugMeter;
          intl = intl16.intl;
          obj7 = { env: label };
          tmp4 = hasOwnProperty(DebugMeter, obj6);
        }
        const obj8 = { children: items };
        items[1] = tmp4;
        tmp18Result = tmp18(Fragment, obj8, key);
      }
      return tmp18Result;
    })
  };
  const DebugSection = tmp4(16740).DebugSection;
  intl2 = tmp4(1126).intl;
  return closure_5(DebugSection, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let fetchState;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let onRefresh;
  let status;
  let str3;
  let tmpResult;
  let tmpResult5;
  let obj = react2;
  const cResult = obj.c(10);
  ({ status, fetchState, onRefresh } = arg0);
  const tmp4 = closure_8();
  let generated_at;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  if (cResult[0] === fetchState) {
    if (cResult[1] === onRefresh) {
      let tmp6;
      let tmp8;
      if (cResult[2] === generated_at) {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== status) {
        let tmp10Result = null;
        if (null != status) {
          const obj2 = { title: intl.string(_modDef3723["+dpDma"]), metrics: status.worker.preview, limits: status.worker.limits };
          intl = tmp(1126).intl;
          const items = [hasOwnProperty(closure_14, obj2), , , , , , , , ];
          const obj3 = { title: intl2.string(_modDef3723.NQHyed), metrics: status.worker.stable, limits: status.worker.limits };
          intl2 = tmp(1126).intl;
          items[1] = hasOwnProperty(closure_14, obj3);
          const obj4 = { status };
          items[2] = hasOwnProperty(closure_15, obj4);
          let tmp12Result = null;
          const tmp11 = metroRequire;
          if (null != status.bot) {
            const obj5 = {
              title: intl3.string(_modDef3723.rx1pBg),
              preview: status.bot.preview,
              stable: status.bot.stable,
              renderEnv(env, bot) {
                          const obj = { env, bot };
                          return closure_1_5(closure_1_10, obj);
                        }
            };
            intl3 = tmp(1126).intl;
            tmp12Result = tmp12(closure_9, obj5);
          }
          items[3] = tmp12Result;
          let tmp12Result5 = null;
          if (null != status.outbound) {
            const obj6 = {
              title: intl4.string(_modDef3723["t2+yv/"]),
              preview: status.outbound.preview,
              stable: status.outbound.stable,
              renderEnv(env, metrics) {
                          const obj = { env, metrics };
                          return closure_1_5(closure_1_11, obj);
                        }
            };
            intl4 = tmp(1126).intl;
            tmp12Result5 = tmp12(closure_9, obj6);
          }
          items[4] = tmp12Result5;
          let tmp12Result6 = null;
          if (null != status.runtime) {
            const obj7 = {
              title: intl5.string(_modDef3723.QifItp),
              preview: status.runtime.preview,
              stable: status.runtime.stable,
              renderEnv(env, runtime) {
                          const obj = { env, runtime };
                          return closure_1_5(closure_1_12, obj);
                        }
            };
            intl5 = tmp(1126).intl;
            tmp12Result6 = tmp12(closure_9, obj7);
          }
          items[5] = tmp12Result6;
          let tmp12Result7 = null;
          if (null != status.ai) {
            const obj8 = {
              title: intl6.string(_modDef3723.SWKshl),
              preview: status.ai.preview,
              stable: status.ai.stable,
              renderEnv(env, metrics) {
                          const obj = { env, metrics };
                          return closure_1_5(closure_1_13, obj);
                        }
            };
            intl6 = tmp(1126).intl;
            tmp12Result7 = tmp12(closure_9, obj8);
          }
          items[6] = tmp12Result7;
          let tmp12Result8 = null;
          if (null != status.analytics) {
            const obj9 = { analytics: status.analytics };
            tmp12Result8 = tmp12(tmp(16751).VibegrationsDebugWorkerAnalyticsSection, obj9);
          }
          items[7] = tmp12Result8;
          const obj10 = { title: intl7.string(_modDef3723["HHe+8E"]), children: items1 };
          const DebugSection = tmp(16740).DebugSection;
          intl7 = tmp(1126).intl;
          const obj11 = { label: tmpResult.debugEnvLabel("preview"), value: str3 };
          const DebugStatRow = tmp(16740).DebugStatRow;
          let str2 = "\u2014";
          str3 = "\u2014";
          tmpResult = VibegrationsDebugLabels;
          if (null != status.deployments.preview_build) {
            const tmpResult4 = VibegrationsDebugFormat;
            str3 = tmpResult4.shortBuildLabel(status.deployments.preview_build);
          }
          items1 = [hasOwnProperty(DebugStatRow, obj11), ];
          const obj12 = { label: tmpResult5.debugEnvLabel("stable"), value: str2 };
          const DebugStatRow2 = tmp(16740).DebugStatRow;
          tmpResult5 = VibegrationsDebugLabels;
          if (null != status.deployments.stable_build) {
            const tmpResult6 = VibegrationsDebugFormat;
            str2 = tmpResult6.shortBuildLabel(status.deployments.stable_build);
          }
          const obj13 = { children: items };
          items1[1] = hasOwnProperty(DebugStatRow2, obj12);
          items[8] = metroImportDefault(DebugSection, obj10);
          tmp10Result = tmp10(tmp11, obj13);
        }
        cResult[4] = status;
        cResult[5] = tmp10Result;
        tmp8 = tmp10Result;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.tab) {
        if (cResult[7] === tmp6) {
          let tmp25;
          if (cResult[8] === tmp8) {
            tmp25 = cResult[9];
          }
          return tmp25;
        }
      }
      const obj14 = { style: tmp4.tab, children: items2 };
      items2 = [tmp6, tmp8];
      const tmp28 = metroImportDefault(View, obj14);
      cResult[6] = tmp4.tab;
      cResult[7] = tmp6;
      cResult[8] = tmp8;
      cResult[9] = tmp28;
      tmp25 = tmp28;
    }
  }
  const tmp7 = hasOwnProperty(VibegrationsDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh });
  cResult[0] = fetchState;
  cResult[1] = onRefresh;
  cResult[2] = generated_at;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : ((status) => {
  let fetchState;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items2;
  let onRefresh;
  let str3;
  let tmp4Result;
  let tmp4Result5;
  status = status.status;
  ({ fetchState, onRefresh } = status);
  let obj = { style: closure_8().tab, children: items };
  let generated_at;
  const DebugSnapshotToolbar = VibegrationsDebugPrimitives.DebugSnapshotToolbar;
  const tmp2 = View;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  items = [hasOwnProperty(DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), ];
  let tmpResult = null;
  if (null != status) {
    const obj2 = { title: intl.string(_modDef3723["+dpDma"]), metrics: status.worker.preview, limits: status.worker.limits };
    intl = tmp4(1126).intl;
    const items1 = [hasOwnProperty(closure_14, obj2), , , , , , , , ];
    const obj3 = { title: intl2.string(_modDef3723.NQHyed), metrics: status.worker.stable, limits: status.worker.limits };
    intl2 = tmp4(1126).intl;
    items1[1] = hasOwnProperty(closure_14, obj3);
    const obj4 = { status };
    items1[2] = hasOwnProperty(closure_15, obj4);
    let tmp3Result = null;
    const tmp8 = metroRequire;
    if (null != status.bot) {
      const obj5 = {
        title: intl3.string(_modDef3723.rx1pBg),
        preview: status.bot.preview,
        stable: status.bot.stable,
        renderEnv(env, bot) {
              const obj = { env, bot };
              return closure_1_5(closure_1_10, obj);
            }
      };
      intl3 = tmp4(1126).intl;
      tmp3Result = tmp3(closure_9, obj5);
    }
    items1[3] = tmp3Result;
    let tmp3Result5 = null;
    if (null != status.outbound) {
      const obj6 = {
        title: intl4.string(_modDef3723["t2+yv/"]),
        preview: status.outbound.preview,
        stable: status.outbound.stable,
        renderEnv(env, metrics) {
              const obj = { env, metrics };
              return closure_1_5(closure_1_11, obj);
            }
      };
      intl4 = tmp4(1126).intl;
      tmp3Result5 = tmp3(closure_9, obj6);
    }
    items1[4] = tmp3Result5;
    let tmp3Result6 = null;
    if (null != status.runtime) {
      const obj7 = {
        title: intl5.string(_modDef3723.QifItp),
        preview: status.runtime.preview,
        stable: status.runtime.stable,
        renderEnv(env, runtime) {
              const obj = { env, runtime };
              return closure_1_5(closure_1_12, obj);
            }
      };
      intl5 = tmp4(1126).intl;
      tmp3Result6 = tmp3(closure_9, obj7);
    }
    items1[5] = tmp3Result6;
    let tmp3Result7 = null;
    if (null != status.ai) {
      const obj8 = {
        title: intl6.string(_modDef3723.SWKshl),
        preview: status.ai.preview,
        stable: status.ai.stable,
        renderEnv(env, metrics) {
              const obj = { env, metrics };
              return closure_1_5(closure_1_13, obj);
            }
      };
      intl6 = tmp4(1126).intl;
      tmp3Result7 = tmp3(closure_9, obj8);
    }
    items1[6] = tmp3Result7;
    let tmp3Result8 = null;
    if (null != status.analytics) {
      const obj9 = { analytics: status.analytics };
      tmp3Result8 = tmp3(tmp4(16751).VibegrationsDebugWorkerAnalyticsSection, obj9);
    }
    items1[7] = tmp3Result8;
    const obj10 = { title: intl7.string(_modDef3723["HHe+8E"]), children: items2 };
    const DebugSection = tmp4(16740).DebugSection;
    intl7 = tmp4(1126).intl;
    const obj11 = { label: tmp4Result.debugEnvLabel("preview"), value: str3 };
    const DebugStatRow = tmp4(16740).DebugStatRow;
    let str2 = "\u2014";
    str3 = "\u2014";
    tmp4Result = VibegrationsDebugLabels;
    if (null != status.deployments.preview_build) {
      const tmp4Result4 = VibegrationsDebugFormat;
      str3 = tmp4Result4.shortBuildLabel(status.deployments.preview_build);
    }
    items2 = [hasOwnProperty(DebugStatRow, obj11), ];
    const obj12 = { label: tmp4Result5.debugEnvLabel("stable"), value: str2 };
    const DebugStatRow2 = tmp4(16740).DebugStatRow;
    tmp4Result5 = VibegrationsDebugLabels;
    if (null != status.deployments.stable_build) {
      const tmp4Result6 = VibegrationsDebugFormat;
      str2 = tmp4Result6.shortBuildLabel(status.deployments.stable_build);
    }
    const obj13 = { children: items1 };
    items2[1] = hasOwnProperty(DebugStatRow2, obj12);
    items1[8] = metroImportDefault(DebugSection, obj10);
    tmpResult = tmp(tmp8, obj13);
  }
  items[1] = tmpResult;
  return metroImportDefault(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugWorkerTab.tsx");

export default tmp3;
