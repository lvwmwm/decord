// Module ID: 13602
// Function ID: 13603
// Name: CheckpointMessagesStatsScreen
// Dependencies: [17, 13386, 6061, 21, 5009, 575, 504, 13399, 1114, 3091, 3059, 13585, 13592, 13603, 13604, 8635, 13587, 13599, 13600, 13601, 2]
// Exports: default

// Module 13602 (CheckpointMessagesStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import ChatIcon from "ChatIcon" /* 8635 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 13399 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13601 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx");

export default function CheckpointMessagesStatsScreen() {
  let formatCheckpointCompactNumber;
  let formatToPlainStringResult1;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj6;
  let tmp12;
  let tmp12Result4;
  let tmp14Result;
  let tmp2Result4;
  let tmp2Result6;
  let wWKySP;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let messages;
    if (stats != null) {
      messages = stats.messages;
    }
    return messages;
  });
  const items1 = [CheckpointStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let numWordsSent;
    if (globalStats != null) {
      const messages = globalStats.messages;
      if (messages != null) {
        numWordsSent = messages.numWordsSent;
      }
    }
    return numWordsSent;
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.numMessagesSent;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.numMessagesSentPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1114).intl;
  const string = intl.string;
  if (roundResult <= 0 && null != stateFromStores1) {
    wWKySP = tmp11(3091)["2BuyVC"];
    tmp12 = tmp11;
  } else {
    wWKySP = tmp11(3059).wWKySP;
    tmp12 = tmp11;
  }
  const stringResult = string(wWKySP);
  let formatToPlainStringResult;
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(1114).intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp12(3091).wHn2YM, obj3);
    }
  }
  const obj4 = { style: tmp.container, children: items2 };
  const obj5 = { style: tmp.imageContainer, children: metroRequire(tmp12Result4, obj6) };
  obj6 = { animatedUri: tmp12(13603), staticUri: tmp12(13604), style: tmp.image };
  const tmp12Result = tmp12(13585);
  tmp12Result4 = tmp12(13592);
  items2 = [metroRequire(View, obj5), ];
  const obj8 = { style: tmp.title, children: items3 };
  items3 = [, ];
  const obj7 = { style: tmp.copy, children: items4 };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items3[0] = metroRequire(ChatIcon.ChatIcon, obj9);
  const obj10 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp12Result5 = tmp12(13587);
  items3[1] = metroRequire(tmp12Result5, obj10);
  items4 = [metroImportDefault(View, obj8), , ];
  if (roundResult <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    tmp14Result = tmp14(tmp12(13599), obj11);
  } else {
    const _HermesInternal = HermesInternal;
    const obj12 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp.number, children: metroRequire(tmp12(13600), obj13) };
    obj13 = { end: roundResult };
    tmp14Result = tmp14(tmp17, obj12);
  }
  items4[1] = tmp14Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp12Result6 = tmp12(13587);
  if (roundResult <= 0 && null != stateFromStores1) {
    const intl5 = tmp2(1114).intl;
    const formatToPlainString = intl5.formatToPlainString;
    const obj15 = { numWords: tmp2Result4.formatCheckpointCompactNumber(stateFromStores1), numCopies: formatCheckpointCompactNumber(tmp2Result6.getCheckpointOdysseyCopies(stateFromStores1)) };
    const bAxEs2 = tmp12(3091).bAxEs2;
    tmp2Result4 = CheckpointStatsUtils;
    formatCheckpointCompactNumber = CheckpointStatsUtils.formatCheckpointCompactNumber;
    CheckpointStatsUtils;
    tmp2Result6 = CheckpointStatsUtils;
    formatToPlainStringResult1 = formatToPlainString(bAxEs2, obj15);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1114).intl;
    const obj16 = {
      numMessages: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp12(3091).TOMBAW, obj16);
  } else {
    const intl3 = tmp2(1114).intl;
    const obj17 = { numMessages: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp12(3091).cYCqz8, obj17);
  }
  const obj18 = { children: metroImportDefault(View, obj4) };
  items4[2] = metroRequire(tmp12Result6, obj14);
  items2[1] = metroImportDefault(View, obj7);
  return metroRequire(tmp12Result, obj18);
};
