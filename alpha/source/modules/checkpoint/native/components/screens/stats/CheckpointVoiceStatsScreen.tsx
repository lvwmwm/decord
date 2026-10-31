// Module ID: 13633
// Function ID: 13634
// Name: CheckpointVoiceStatsScreen
// Dependencies: [19, 17, 13421, 6066, 21, 5014, 575, 504, 6437, 1113, 3092, 13622, 13629, 13634, 13635, 11971, 13624, 13636, 13637, 13638, 2]
// Exports: default

// Module 13633 (CheckpointVoiceStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3092 from "module_3092" /* 3092 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6437 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13638 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" }, image: obj4, copy: { flexShrink: 1 }, number: obj5 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj5 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default function CheckpointVoiceStatsScreen() {
  let items3;
  let items4;
  let items5;
  let obj14;
  let obj6;
  let stateFromStores1;
  let stringResult;
  let stringResult1;
  let tmp14;
  let tmp14Result4;
  const tmp = closure_9();
  let obj = stateFromStores1(504);
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let voice;
    if (stats != null) {
      voice = stats.voice;
    }
    return voice;
  });
  const items1 = [CheckpointStore];
  const obj2 = stateFromStores1(504);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let peakHourUtc;
    if (globalStats != null) {
      const voice = globalStats.voice;
      if (voice != null) {
        peakHourUtc = voice.peakHourUtc;
      }
    }
    return peakHourUtc;
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  const items2 = [stateFromStores1];
  const memo = react.useMemo(() => {
    const obj = CheckpointStatsUtils;
    return obj.formatCheckpointPeakHour(stateFromStores1);
  }, items2);
  let prop;
  const getCheckpointTopPercent = stateFromStores1(6437).getCheckpointTopPercent;
  stateFromStores1(6437);
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1113).intl;
  const string = intl.string;
  const tmp13 = _modDef3092;
  if (roundResult <= 0) {
    stringResult = string(tmp13.ZCwB8J);
    tmp14 = tmp12;
  } else {
    stringResult = string(tmp13["3/T12E"]);
    tmp14 = tmp12;
  }
  let formatToPlainStringResult;
  if (roundResult > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(1113).intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp14(3092)["5vpcvA"], obj3);
    }
  }
  const obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.imageContainer, children: closure_7(tmp14Result4, obj6) };
  obj6 = { animatedUri: tmp14(13634), staticUri: tmp14(13635), style: tmp.image };
  const tmp14Result = tmp14(13622);
  tmp14Result4 = tmp14(13629);
  items3 = [closure_7(View, obj5), ];
  const obj8 = { style: tmp.title, children: items4 };
  items4 = [, ];
  const obj7 = { style: tmp.copy, children: items5 };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items4[0] = closure_7(stateFromStores1(11971).MicrophoneIcon, obj9);
  const obj10 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp14Result5 = tmp14(13624);
  items4[1] = closure_7(tmp14Result5, obj10);
  items5 = [closure_8(View, obj8), , , ];
  let tmp16Result = tmp7 && null != memo;
  if (tmp16Result) {
    const obj11 = { value: null, accessibilityLabel: null };
    ({ value: obj12.value, label: obj12.accessibilityLabel } = memo);
    tmp16Result = tmp16(tmp14(13636), obj11);
  }
  items5[1] = tmp16Result;
  let tmp16Result2 = !tmp7;
  if (tmp16Result2) {
    const _HermesInternal = HermesInternal;
    const obj13 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_7(tmp14(13637), obj14) };
    obj14 = { end: roundResult };
    tmp16Result2 = tmp16(tmp19, obj13);
  }
  items5[2] = tmp16Result2;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: stringResult1 };
  const tmp14Result6 = tmp14(13624);
  if (roundResult <= 0) {
    const intl5 = tmp2(1113).intl;
    stringResult1 = intl5.string(tmp14(3092).huiTne);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1113).intl;
    const obj16 = {
      numMinutes: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_7(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    stringResult1 = intl4.format(tmp14(3092).RqXsIs, obj16);
  } else {
    const intl3 = tmp2(1113).intl;
    const obj17 = { numMinutes: roundResult };
    stringResult1 = intl3.format(tmp14(3092).Y3poDW, obj17);
  }
  const obj18 = { children: closure_8(View, obj4) };
  items5[3] = closure_7(tmp14Result6, obj15);
  items3[1] = closure_8(View, obj7);
  return closure_7(tmp14Result, obj18);
};
