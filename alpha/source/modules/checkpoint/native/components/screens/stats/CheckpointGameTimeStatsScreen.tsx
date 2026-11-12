// Module ID: 14403
// Function ID: 14404
// Name: CheckpointGameTimeStatsScreen
// Dependencies: [17, 14146, 6314, 21, 5243, 575, 504, 6684, 1113, 3269, 14160, 14163, 14404, 14405, 8391, 14161, 14381, 14383, 14382, 14384, 2]
// Exports: default

// Module 14403 (CheckpointGameTimeStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef3269 from "module_3269" /* 3269 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6684 */;
import CalendarIcon from "CalendarIcon" /* 8391 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14383 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14384 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx");

export default function CheckpointGameTimeStatsScreen() {
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
  let tmp2Result3;
  let tmp2Result4;
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
  const intl = tmp2(1113).intl;
  const string = intl.string;
  const tmp12 = _modDef3269;
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
      const intl2 = tmp2(1113).intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp13(3269).uKOgr9, obj3);
    }
  }
  const obj4 = { style: tmp.container, children: items2 };
  const obj5 = { style: tmp.imageContainer, children: metroRequire(tmp13Result4, obj6) };
  obj6 = { animatedUri: tmp13(14404), staticUri: tmp13(14405), style: tmp.image };
  const tmp13Result = tmp13(14160);
  tmp13Result4 = tmp13(14163);
  items2 = [metroRequire(View, obj5), ];
  const obj8 = { style: tmp.title, children: items3 };
  items3 = [, ];
  const obj7 = { style: tmp.copy, children: items4 };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items3[0] = metroRequire(CalendarIcon.CalendarIcon, obj9);
  const obj10 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp13Result5 = tmp13(14161);
  items3[1] = metroRequire(tmp13Result5, obj10);
  items4 = [metroImportDefault(View, obj8), , ];
  if (roundResult <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    tmp15Result = tmp15(tmp13(14381), obj11);
  } else {
    const obj12 = { accessible: true, accessibilityLabel: tmp2Result3.formatCheckpointStatAccessibilityLabel("gameDays", roundResult), style: tmp.number, children: metroRequire(tmp13(14382), obj13) };
    obj13 = { end: roundResult };
    tmp2Result3 = CheckpointNumberUtils;
    tmp15Result = tmp15(tmp18, obj12);
  }
  items4[1] = tmp15Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp13Result6 = tmp13(14161);
  if (roundResult <= 0 && null != stateFromStores1) {
    const intl5 = tmp2(1113).intl;
    const formatToPlainString = intl5.formatToPlainString;
    const obj15 = { numUsers: tmp2Result4.formatCheckpointCompactNumber(stateFromStores1) };
    const prop1 = tmp13(3269)["N32w+2"];
    tmp2Result4 = CheckpointStatsUtils;
    formatToPlainStringResult1 = formatToPlainString(prop1, obj15);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1113).intl;
    const obj16 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp13(3269)["4FXB/m"], obj16);
  } else {
    const intl3 = tmp2(1113).intl;
    const obj17 = { numDays: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp13(3269).iCKjh6, obj17);
  }
  const obj18 = { children: metroImportDefault(View, obj4) };
  items4[2] = metroRequire(tmp13Result6, obj14);
  items2[1] = metroImportDefault(View, obj7);
  return metroRequire(tmp13Result, obj18);
};
