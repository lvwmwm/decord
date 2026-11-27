// Module ID: 12885
// Function ID: 12886
// Name: CheckpointVoiceStatsScreen
// Dependencies: [19, 17, 12628, 6396, 21, 5043, 575, 12868, 1495, 504, 6768, 1112, 3495, 12862, 12886, 12887, 12858, 10505, 12860, 12888, 12889, 12891, 2]
// Exports: default

// Module 12885 (CheckpointVoiceStatsScreen)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import _modDef3495 from "module_3495" /* 3495 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6768 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12858 */;
import CheckpointTextDefault from "CheckpointText" /* 12860 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12862 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 12868 */;
import _modDef12886 from "module_12886" /* 12886 */;
import _modDef12887 from "module_12887" /* 12887 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 12889 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12891 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 12628 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: closure_4, StyleSheet } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" }, image: obj4, copy: { flexShrink: 1 }, number: obj5, wideBackdrop: obj6, wideImage: { marginBottom: 0 }, wideContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center" }, wideCopy: { maxWidth: 327, alignItems: "center" }, wideTitle: { justifyContent: "center" }, wideText: { textAlign: "center" } };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj5 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj6 = { justifyContent: "center", alignItems: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default function CheckpointVoiceStatsScreen() {
  let formatToPlainString;
  let intl4;
  let items3;
  let items6;
  let items8;
  let items9;
  let lw35aH;
  let obj17;
  let obj18;
  let obj19;
  let obj8;
  let stateFromStores1;
  let stringResult;
  let stringResult1;
  const tmp = closure_10();
  let wideText = useIsCheckpointWideDefault();
  const width = useWindowDimensionsDefault({ ignoreKeyboard: true }).width;
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
  const getCheckpointTopPercent = stateFromStores1(6768).getCheckpointTopPercent;
  stateFromStores1(6768);
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp4(1112).intl;
  const string = intl.string;
  const tmp2Result = _modDef3495;
  if (roundResult <= 0) {
    stringResult = string(tmp2Result.ZCwB8J);
  } else {
    stringResult = string(tmp2Result["3/T12E"]);
  }
  let formatToPlainStringResult;
  if (roundResult > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp4(1112).intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(3495)["5vpcvA"], obj3);
    }
  }
  const obj4 = { animatedUri: _modDef12886, staticUri: _modDef12887, style: items3 };
  items3 = [tmp.image, ];
  let tmp17 = wideText;
  const tmp2Result5 = CheckpointApngPlayerDefault;
  if (tmp17) {
    const items4 = [tmp.wideImage, ];
    const obj5 = { width: 0.8 * width / 0.6444444444444445 };
    items4[1] = obj5;
    tmp17 = items4;
  }
  items3[1] = tmp17;
  const tmp15Result = closure_7(tmp2Result5, obj4);
  let tmp15Result5 = wideText;
  const tmp20 = closure_9;
  if (wideText) {
    const obj6 = { pointerEvents: "none", style: tmp.wideBackdrop, children: tmp15Result };
    tmp15Result5 = tmp15(closure_4, obj6);
  }
  const items5 = [tmp15Result5, ];
  const obj7 = { centered: wideText, children: closure_8(closure_4, obj8) };
  let tmp15Result6 = !wideText;
  obj8 = { style: wideText ? tmp.wideContainer : tmp.container, children: items6 };
  const tmp2Result6 = CheckpointScreenDefault;
  if (!wideText) {
    const obj9 = { style: tmp.imageContainer, children: tmp15Result };
    tmp15Result6 = tmp15(tmp24, obj9);
  }
  items6 = [tmp15Result6, ];
  const items7 = [tmp.title, ];
  const obj10 = { style: wideText ? tmp.wideCopy : tmp.copy, children: items9 };
  const obj11 = { style: items7, children: items8 };
  const tmp26 = wideText && tmp.wideTitle;
  items7[1] = tmp26;
  items8 = [, ];
  const obj12 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items8[0] = closure_7(stateFromStores1(10505).MicrophoneIcon, obj12);
  const obj13 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2Result7 = CheckpointTextDefault;
  items8[1] = closure_7(tmp2Result7, obj13);
  items9 = [closure_8(closure_4, obj11), , , ];
  let tmp15Result7 = tmp8 && null != memo;
  if (tmp15Result7) {
    const obj14 = { value: null, accessibilityLabel: null };
    ({ value: obj15.value, label: obj15.accessibilityLabel } = memo);
    tmp15Result7 = tmp15(tmp2(12888), obj14);
  }
  items9[1] = tmp15Result7;
  let tmp15Result8 = !tmp8;
  if (tmp15Result8) {
    const obj16 = { accessible: true, accessibilityLabel: formatToPlainString(lw35aH, obj17), style: tmp.number, children: closure_7(CheckpointCountUpStatNumberDefault, obj19) };
    const intl3 = tmp4(1112).intl;
    formatToPlainString = intl3.formatToPlainString;
    obj17 = { duration: intl4.formatToPlainString(_modDef3495.x7PkHm, obj18) };
    lw35aH = tmp2(3495).lw35aH;
    intl4 = tmp4(1112).intl;
    obj18 = { minutes: roundResult };
    obj19 = { end: roundResult };
    tmp15Result8 = tmp15(tmp24, obj16);
  }
  items9[2] = tmp15Result8;
  const obj20 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, style: wideText, children: stringResult1 };
  const tmp2Result8 = CheckpointTextDefault;
  if (wideText) {
    wideText = tmp.wideText;
  }
  if (roundResult <= 0) {
    const intl7 = tmp4(1112).intl;
    stringResult1 = intl7.string(tmp2(3495).huiTne);
  } else if (null != checkpointTopPercent) {
    const intl6 = tmp4(1112).intl;
    const obj21 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_7(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    stringResult1 = intl6.format(tmp2(3495).RqXsIs, obj21);
  } else {
    const intl5 = tmp4(1112).intl;
    const obj22 = { numMinutes: roundResult };
    stringResult1 = intl5.format(tmp2(3495).Y3poDW, obj22);
  }
  const obj23 = { children: items5 };
  items9[3] = closure_7(tmp2Result8, obj20);
  items6[1] = closure_8(closure_4, obj10);
  items5[1] = closure_7(tmp2Result6, obj7);
  return closure_8(tmp20, obj23);
};
