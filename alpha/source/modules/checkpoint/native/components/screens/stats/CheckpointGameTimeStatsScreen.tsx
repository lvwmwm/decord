// Module ID: 13479
// Function ID: 13480
// Name: CheckpointGameTimeStatsScreen
// Dependencies: [17, 13236, 6054, 21, 5005, 587, 558, 576, 504, 13249, 1125, 3090, 13438, 13442, 13480, 13481, 9083, 13436, 13449, 13450, 13451, 2]

// Module 13479 (CheckpointGameTimeStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3090 from "module_3090" /* 3090 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import CalendarIcon from "CalendarIcon" /* 9083 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 13249 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13451 */;
import CheckpointStore from "CheckpointStore" /* 13236 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, image: { height: "100%", aspectRatio: 0.6498194945848376 }, copy: { flexShrink: 1 }, number: obj4 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGameTimeStatsScreen() {
  let formatToPlainStringResult;
  let obj7;
  let stringResult;
  let tmp10;
  let tmp33;
  let tmp37;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmpResult6;
  let obj = react;
  const cResult = obj.c(57);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function p() {
      const stats = CheckpointStore.stats;
      let games;
      if (stats != null) {
        games = stats.games;
      }
      return games;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let prop;
        if (globalStats != null) {
          const games = globalStats.games;
          if (games != null) {
            prop = games.numUsersPlayedEveryDay;
          }
        }
        return prop;
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp10 = S;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult4 = get_initialized;
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
  let totalDaysPlayed;
  const tmp13 = cResult[4];
  if (stateFromStores != null) {
    totalDaysPlayed = stateFromStores.totalDaysPlayed;
  }
  if (tmp13 === totalDaysPlayed) {
    if (stateFromStores != null) {
      const totalDaysPlayedPercentile = stateFromStores.totalDaysPlayedPercentile;
    }
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let prop;
        if (globalStats != null) {
          const games = globalStats.games;
          if (games != null) {
            prop = games.numUsersPlayedEveryDay;
          }
        }
        return prop;
      }
    }
  }
  let num5;
  const _Math = Math;
  if (stateFromStores != null) {
    num5 = stateFromStores.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  const roundResult = round(num5);
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp(1125).intl;
  const string = intl.string;
  const tmp32 = _modDef3090;
  if (roundResult <= 0 && null != stateFromStores1) {
    stringResult = string(tmp32["dx4+NI"]);
    tmp33 = tmp31;
  } else {
    stringResult = string(tmp32["4N5p4D"]);
    tmp33 = tmp31;
  }
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp(1125).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj2 = {
        numDays: null,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      class S {
        constructor() {
          const globalStats = CheckpointStore.globalStats;
          let prop;
          if (globalStats != null) {
            const games = globalStats.games;
            if (games != null) {
              prop = games.numUsersPlayedEveryDay;
            }
          }
          return prop;
        }
      }
      formatToPlainStringResult = formatToPlainString(tmp33(3090)["4FXB/m"], obj2);
    }
  }
  const container = tmp4.container;
  const tmp33Result = tmp33(13438);
  if (cResult[26] !== tmp4.image) {
    const obj3 = { animatedUri: null, staticUri: tmp33(13481), style: tmp4.image };
    const tmp33Result2 = tmp33(13442);
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let prop;
        if (globalStats != null) {
          const games = globalStats.games;
          if (games != null) {
            prop = games.numUsersPlayedEveryDay;
          }
        }
        return prop;
      }
    }
    const tmp40 = metroRequire(tmp33Result2, obj3);
    cResult[26] = tmp4.image;
    cResult[27] = tmp40;
    tmp37 = tmp40;
  } else {
    tmp37 = cResult[27];
  }
  if (cResult[28] === tmp4.imageContainer) {
    let tmp41;
    let tmp44;
    if (cResult[29] === tmp37) {
      tmp41 = cResult[30];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let prop;
        if (globalStats != null) {
          const games = globalStats.games;
          if (games != null) {
            prop = games.numUsersPlayedEveryDay;
          }
        }
        return prop;
      }
    }
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { size: "xs", color: null };
      class S {
        constructor() {
          const globalStats = CheckpointStore.globalStats;
          let prop;
          if (globalStats != null) {
            const games = globalStats.games;
            if (games != null) {
              prop = games.numUsersPlayedEveryDay;
            }
          }
          return prop;
        }
      }
      const tmp47 = metroRequire(CalendarIcon.CalendarIcon, obj4);
      cResult[31] = tmp47;
      tmp44 = tmp47;
    } else {
      tmp44 = cResult[31];
    }
    const titleText = tmp4.titleText;
    const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
    if (cResult[32] === tmp4.titleText) {
      let tmp49;
      if (cResult[33] === toLocaleUpperCaseResult) {
        tmp49 = cResult[34];
      }
      if (cResult[35] === tmp4.title) {
        let tmp52;
        let tmp56Result;
        let formatToPlainString2Result;
        if (cResult[36] === tmp49) {
          tmp52 = cResult[37];
        }
        if (roundResult <= 0 && null != stateFromStores1) {
          const obj5 = { value: stateFromStores1 };
          tmp56Result = tmp56(tmp33(13449), obj5);
        } else {
          const _HermesInternal = HermesInternal;
          const obj6 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp4.number, children: metroRequire(tmp33(13450), obj7) };
          class S {
            constructor() {
              const globalStats = CheckpointStore.globalStats;
              let prop;
              if (globalStats != null) {
                const games = globalStats.games;
                if (games != null) {
                  prop = games.numUsersPlayedEveryDay;
                }
              }
              return prop;
            }
          }
          obj7 = { end: roundResult };
          tmp56Result = tmp56(tmp36, obj6);
        }
        class S {
          constructor() {
            const globalStats = CheckpointStore.globalStats;
            let prop;
            if (globalStats != null) {
              const games = globalStats.games;
              if (games != null) {
                prop = games.numUsersPlayedEveryDay;
              }
            }
            return prop;
          }
        }
        if (roundResult <= 0 && null != stateFromStores1) {
          const intl5 = tmp(1125).intl;
          const formatToPlainString2 = intl5.formatToPlainString;
          const obj8 = { numUsers: tmpResult6.formatCheckpointCompactNumber(stateFromStores1) };
          class S {
            constructor() {
              const globalStats = CheckpointStore.globalStats;
              let prop;
              if (globalStats != null) {
                const games = globalStats.games;
                if (games != null) {
                  prop = games.numUsersPlayedEveryDay;
                }
              }
              return prop;
            }
          }
          tmpResult6 = CheckpointStatsUtils;
          formatToPlainString2Result = formatToPlainString2(tmp60, obj8);
        } else if (null != checkpointTopPercent) {
          const intl4 = tmp(1125).intl;
          const format2 = intl4.format;
          const obj9 = {
            numDays: null,
            percent: checkpointTopPercent,
            percentHook(children, arg1) {
                      const obj = { children };
                      return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
                    }
          };
          class S {
            constructor() {
              const globalStats = CheckpointStore.globalStats;
              let prop;
              if (globalStats != null) {
                const games = globalStats.games;
                if (games != null) {
                  prop = games.numUsersPlayedEveryDay;
                }
              }
              return prop;
            }
          }
          formatToPlainString2Result = format2(tmp33(3090)["4FXB/m"], obj9);
        } else {
          const intl3 = tmp(1125).intl;
          const format = intl3.format;
          const obj10 = { numDays: null };
          class S {
            constructor() {
              const globalStats = CheckpointStore.globalStats;
              let prop;
              if (globalStats != null) {
                const games = globalStats.games;
                if (games != null) {
                  prop = games.numUsersPlayedEveryDay;
                }
              }
              return prop;
            }
          }
          formatToPlainString2Result = format(tmp33(3090).iCKjh6, obj10);
        }
        let totalDaysPlayed1;
        if (stateFromStores != null) {
          totalDaysPlayed1 = stateFromStores.totalDaysPlayed;
        }
        cResult[4] = totalDaysPlayed1;
        let prop1;
        if (stateFromStores != null) {
          prop1 = stateFromStores.totalDaysPlayedPercentile;
        }
        cResult[5] = prop1;
        cResult[6] = stateFromStores1;
        cResult[7] = tmp4.container;
        cResult[8] = tmp4.copy;
        cResult[9] = tmp4.image;
        cResult[10] = tmp4.imageContainer;
        cResult[11] = tmp4.number;
        cResult[12] = tmp4.title;
        cResult[13] = tmp4.titleText;
        cResult[14] = tmp58;
        cResult[15] = View;
        cResult[16] = View;
        cResult[17] = tmp33Result;
        cResult[18] = container;
        cResult[19] = tmp41;
        cResult[20] = "heading-lg/medium";
        cResult[21] = formatToPlainStringResult;
        cResult[22] = formatToPlainString2Result;
        cResult[23] = copy;
        cResult[24] = tmp52;
        cResult[25] = tmp56Result;
      }
      class S {
        constructor() {
          const globalStats = CheckpointStore.globalStats;
          let prop;
          if (globalStats != null) {
            const games = globalStats.games;
            if (games != null) {
              prop = games.numUsersPlayedEveryDay;
            }
          }
          return prop;
        }
      }
      tmp54[0] = tmp43;
      const items2 = [tmp44, tmp49];
      tmp54[1] = items2;
      const tmp55 = metroImportDefault(View, tmp54);
      cResult[35] = tmp4.title;
      cResult[36] = tmp49;
      cResult[37] = tmp55;
      tmp52 = tmp55;
    }
    const obj11 = { isStepHeading: true, variant: "heading-md/extrabold", style: titleText, children: toLocaleUpperCaseResult };
    const tmp51 = metroRequire(tmp33(13436), obj11);
    cResult[32] = tmp4.titleText;
    cResult[33] = toLocaleUpperCaseResult;
    cResult[34] = tmp51;
    tmp49 = tmp51;
  }
  const obj12 = { style: tmp4.imageContainer, children: tmp37 };
  const tmp42 = metroRequire(View, obj12);
  cResult[28] = tmp4.imageContainer;
  cResult[29] = tmp37;
  cResult[30] = tmp42;
  tmp41 = tmp42;
}) : (function CheckpointGameTimeStatsScreen() {
  let formatToPlainStringResult1;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj6;
  let stringResult;
  let tmp13;
  let tmp13Result4;
  let tmp15Result;
  let tmp2Result2;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  const items1 = [CheckpointStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let prop;
    if (globalStats != null) {
      const games = globalStats.games;
      if (games != null) {
        prop = games.numUsersPlayedEveryDay;
      }
    }
    return prop;
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.totalDaysPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1125).intl;
  const string = intl.string;
  const tmp12 = _modDef3090;
  if (roundResult <= 0 && null != stateFromStores1) {
    stringResult = string(tmp12["dx4+NI"]);
    tmp13 = tmp11;
  } else {
    stringResult = string(tmp12["4N5p4D"]);
    tmp13 = tmp11;
  }
  let formatToPlainStringResult;
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(1125).intl;
      const obj3 = {
        numDays: roundResult,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp13(3090)["4FXB/m"], obj3);
    }
  }
  const obj4 = { style: tmp.container, children: items2 };
  const obj5 = { style: tmp.imageContainer, children: metroRequire(tmp13Result4, obj6) };
  obj6 = { animatedUri: tmp13(13480), staticUri: tmp13(13481), style: tmp.image };
  const tmp13Result = tmp13(13438);
  tmp13Result4 = tmp13(13442);
  items2 = [metroRequire(View, obj5), ];
  const obj8 = { style: tmp.title, children: items3 };
  items3 = [, ];
  const obj7 = { style: tmp.copy, children: items4 };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items3[0] = metroRequire(CalendarIcon.CalendarIcon, obj9);
  const obj10 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp13Result5 = tmp13(13436);
  items3[1] = metroRequire(tmp13Result5, obj10);
  items4 = [metroImportDefault(View, obj8), , ];
  if (roundResult <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    tmp15Result = tmp15(tmp13(13449), obj11);
  } else {
    const _HermesInternal = HermesInternal;
    const obj12 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp.number, children: metroRequire(tmp13(13450), obj13) };
    obj13 = { end: roundResult };
    tmp15Result = tmp15(tmp18, obj12);
  }
  items4[1] = tmp15Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp13Result6 = tmp13(13436);
  if (roundResult <= 0 && null != stateFromStores1) {
    const intl5 = tmp2(1125).intl;
    const formatToPlainString = intl5.formatToPlainString;
    const obj15 = { numUsers: tmp2Result2.formatCheckpointCompactNumber(stateFromStores1) };
    const prop1 = tmp13(3090)["N32w+2"];
    tmp2Result2 = CheckpointStatsUtils;
    formatToPlainStringResult1 = formatToPlainString(prop1, obj15);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1125).intl;
    const obj16 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp13(3090)["4FXB/m"], obj16);
  } else {
    const intl3 = tmp2(1125).intl;
    const obj17 = { numDays: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp13(3090).iCKjh6, obj17);
  }
  const obj18 = { children: metroImportDefault(View, obj4) };
  items4[2] = metroRequire(tmp13Result6, obj14);
  items2[1] = metroImportDefault(View, obj7);
  return metroRequire(tmp13Result, obj18);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx");

export default tmp4;
