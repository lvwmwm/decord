// Module ID: 14524
// Function ID: 14525
// Name: CheckpointGameTimeStatsScreen
// Dependencies: [17, 14253, 6377, 21, 5306, 575, 14485, 504, 6747, 1113, 3317, 14270, 14273, 14525, 14526, 8457, 14271, 14504, 14506, 14505, 14507, 2]
// Exports: default

// Module 14524 (CheckpointGameTimeStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef3317 from "module_3317" /* 3317 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import CalendarIcon from "CalendarIcon" /* 8457 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 14273 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 14485 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14505 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14506 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14507 */;
import _modDef14525 from "module_14525" /* 14525 */;
import _modDef14526 from "module_14526" /* 14526 */;
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
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx");

export default function CheckpointGameTimeStatsScreen() {
  let items2;
  let items3;
  let items4;
  let items5;
  let obj14;
  let obj5;
  let obj7;
  let stringResult;
  let stringResult1;
  let tmp15Result;
  let tmp2Result6;
  let tmp5Result2;
  const tmp = closure_8();
  const tmp4 = useIsCheckpointWideDefault();
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
  const intl = tmp5(1113).intl;
  const string = intl.string;
  const tmp2Result = _modDef3317;
  if (roundResult <= 0 && null != stateFromStores1) {
    stringResult = string(tmp2Result["dx4+NI"]);
  } else {
    stringResult = string(tmp2Result["4N5p4D"]);
  }
  let formatToPlainStringResult;
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp5(1113).intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(3317).uKOgr9, obj3);
    }
  }
  const obj4 = { centered: tmp4, children: metroImportDefault(View, obj5) };
  obj5 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: items3 };
  const obj6 = { style: tmp4 ? tmp.wideImageContainer : tmp.imageContainer, children: metroRequire(tmp2Result6, obj7) };
  obj7 = { animatedUri: _modDef14525, staticUri: _modDef14526, style: items2 };
  const tmp2Result5 = CheckpointScreenDefault;
  items2 = [tmp.image, tmp4 && tmp.wideImage];
  tmp2Result6 = CheckpointApngPlayerDefault;
  items3 = [metroRequire(View, obj6), ];
  const obj9 = { style: tmp.title, children: items4 };
  items4 = [, ];
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const obj8 = { style: tmp4 ? tmp.wideCopy : tmp.copy, children: items5 };
  items4[0] = metroRequire(CalendarIcon.CalendarIcon, obj10);
  const obj11 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2Result7 = CheckpointTextDefault;
  items4[1] = metroRequire(tmp2Result7, obj11);
  items5 = [metroImportDefault(View, obj9), , ];
  if (roundResult <= 0 && null != stateFromStores1) {
    const obj12 = { value: stateFromStores1 };
    tmp15Result = tmp15(tmp2(14504), obj12);
  } else {
    const obj13 = { accessible: true, accessibilityLabel: tmp5Result2.formatCheckpointStatAccessibilityLabel("gameDays", roundResult), style: tmp.number, children: metroRequire(CheckpointCountUpStatNumberDefault, obj14) };
    obj14 = { end: roundResult };
    tmp5Result2 = CheckpointNumberUtils;
    tmp15Result = tmp15(tmp18, obj13);
  }
  items5[1] = tmp15Result;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: stringResult1 };
  const tmp2Result8 = CheckpointTextDefault;
  if (roundResult <= 0 && null != stateFromStores1) {
    const intl5 = tmp5(1113).intl;
    stringResult1 = intl5.string(tmp2(3317)["7nfXWu"]);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp5(1113).intl;
    const obj16 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    stringResult1 = intl4.format(tmp2(3317)["4FXB/m"], obj16);
  } else {
    const intl3 = tmp5(1113).intl;
    const obj17 = { numDays: roundResult };
    stringResult1 = intl3.format(tmp2(3317).iCKjh6, obj17);
  }
  items5[2] = metroRequire(tmp2Result8, obj15);
  items3[1] = metroImportDefault(View, obj8);
  return metroRequire(tmp2Result5, obj4);
};
