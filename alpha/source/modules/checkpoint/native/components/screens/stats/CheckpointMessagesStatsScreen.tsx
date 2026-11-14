// Module ID: 14508
// Function ID: 14509
// Name: CheckpointMessagesStatsScreen
// Dependencies: [17, 14253, 6377, 21, 5306, 575, 14485, 504, 6747, 1113, 3317, 3285, 14270, 14273, 14509, 14510, 8069, 14271, 14504, 14506, 14505, 14507, 2]
// Exports: default

// Module 14508 (CheckpointMessagesStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import ChatIcon from "ChatIcon" /* 8069 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 14273 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 14485 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14505 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14506 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14507 */;
import _modDef14509 from "module_14509" /* 14509 */;
import _modDef14510 from "module_14510" /* 14510 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const useIsCheckpointWideDefault = useIsCheckpointWide;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, image: { height: "100%", aspectRatio: 0.6498194945848376 }, copy: { flexShrink: 1 }, number: obj4, wideContainer: obj5, wideImageContainer: obj6, wideImage: { maxHeight: 480 }, wideCopy: obj7 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj5 = { flexGrow: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
obj6 = { width: "50%", alignSelf: "stretch", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingRight: nativeDefault.space.PX_32 };
obj7 = { width: "50%", paddingLeft: nativeDefault.space.PX_32 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx");

export default function CheckpointMessagesStatsScreen() {
  let formatCheckpointCompactNumber;
  let formatToPlainStringResult1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj14;
  let obj5;
  let obj7;
  let tmp14Result;
  let tmp2Result4;
  let tmp5Result5;
  let tmp5Result6;
  let tmp5Result8;
  let wWKySP;
  const tmp = closure_8();
  const tmp4 = useIsCheckpointWideDefault();
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
  const intl = tmp5(1113).intl;
  const string = intl.string;
  if (roundResult <= 0 && null != stateFromStores1) {
    wWKySP = tmp2(3317)["2BuyVC"];
  } else {
    wWKySP = tmp2(3285).wWKySP;
  }
  let formatToPlainStringResult;
  const stringResult = string(wWKySP);
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp5(1113).intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(3317).wHn2YM, obj3);
    }
  }
  const obj4 = { centered: tmp4, children: metroImportDefault(View, obj5) };
  obj5 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: items3 };
  const obj6 = { style: tmp4 ? tmp.wideImageContainer : tmp.imageContainer, children: metroRequire(tmp2Result4, obj7) };
  obj7 = { animatedUri: _modDef14509, staticUri: _modDef14510, style: items2 };
  const tmp2Result = CheckpointScreenDefault;
  items2 = [tmp.image, tmp4 && tmp.wideImage];
  tmp2Result4 = CheckpointApngPlayerDefault;
  items3 = [metroRequire(View, obj6), ];
  const obj9 = { style: tmp.title, children: items4 };
  items4 = [, ];
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const obj8 = { style: tmp4 ? tmp.wideCopy : tmp.copy, children: items5 };
  items4[0] = metroRequire(ChatIcon.ChatIcon, obj10);
  const obj11 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2Result5 = CheckpointTextDefault;
  items4[1] = metroRequire(tmp2Result5, obj11);
  items5 = [metroImportDefault(View, obj9), , ];
  if (roundResult <= 0 && null != stateFromStores1) {
    const obj12 = { value: stateFromStores1 };
    tmp14Result = tmp14(tmp2(14504), obj12);
  } else {
    const obj13 = { accessible: true, accessibilityLabel: tmp5Result5.formatCheckpointStatAccessibilityLabel("messages", roundResult), style: tmp.number, children: metroRequire(CheckpointCountUpStatNumberDefault, obj14) };
    obj14 = { end: roundResult };
    tmp5Result5 = CheckpointNumberUtils;
    tmp14Result = tmp14(tmp17, obj13);
  }
  items5[1] = tmp14Result;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp2Result6 = CheckpointTextDefault;
  if (roundResult <= 0 && null != stateFromStores1) {
    const intl5 = tmp5(1113).intl;
    const formatToPlainString = intl5.formatToPlainString;
    const obj16 = { numWords: tmp5Result6.formatCheckpointCompactNumber(stateFromStores1), numCopies: formatCheckpointCompactNumber(tmp5Result8.getCheckpointOdysseyCopies(stateFromStores1)) };
    const bAxEs2 = tmp2(3317).bAxEs2;
    tmp5Result6 = CheckpointStatsUtils;
    formatCheckpointCompactNumber = CheckpointStatsUtils.formatCheckpointCompactNumber;
    CheckpointStatsUtils;
    tmp5Result8 = CheckpointStatsUtils;
    formatToPlainStringResult1 = formatToPlainString(bAxEs2, obj16);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp5(1113).intl;
    const obj17 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp2(3317).TOMBAW, obj17);
  } else {
    const intl3 = tmp5(1113).intl;
    const obj18 = { numMessages: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp2(3317).cYCqz8, obj18);
  }
  items5[2] = metroRequire(tmp2Result6, obj15);
  items3[1] = metroImportDefault(View, obj8);
  return metroRequire(tmp2Result, obj4);
};
