// Module ID: 12171
// Function ID: 12172
// Name: FeedbackUtils
// Dependencies: [12168, 1071, 12, 1256, 4868, 1112, 3143, 2]
// Exports: getAudioFeedbackOptions, getConnectionFeedbackOptions, getPeopleFeedbackOptions, getStreamFeedbackOptions, getVideoBackgroundFeedbackOptions, getVideoFeedbackOptions, processOptOut, shuffleProblems

// Module 12171 (FeedbackUtils)
import _modDef12 from "module_12" /* 12 */;
import Constants2 from "Constants" /* 1071 */;
import intl20 from "intl" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import _modDef3143 from "module_3143" /* 3143 */;
import Constants from "Constants" /* 12168 */;
import size from "module_2" /* 2 */;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const f101872 = (disabled) => !disabled.disabled;
const f101873 = (item) => Object.assign(item, Object.assign({ disabled: 0 }));
({ ConnectionFeedbackOption: c3, AudioFeedbackOption: closure_4, VideoFeedbackOption: hasOwnProperty, VideoBackgroundFeedbackOption: metroRequire, StreamFeedbackOption: metroImportDefault, FeedbackOptionVariant: metroImportAll, FeedbackType: c9, MAX_REPRESENTABLE_DATE: c10, PeopleFeedbackOption: unpackModuleId } = Constants);
const AnalyticEvents = Constants2.AnalyticEvents;
const result = size.fileFinishedImporting("modules/feedback/FeedbackUtils.tsx");

export function shuffleProblems(reasons, otherKey) {
  let closure_0 = otherKey;
  const obj = _modDef12;
  const shuffleResult = obj.shuffle(reasons);
  const findIndexResult = shuffleResult.findIndex((value) => value.value === closure_0);
  if (findIndexResult > -1) {
    let tmp2 = shuffleResult[findIndexResult];
    shuffleResult.splice(findIndexResult, 1);
    shuffleResult.push(tmp2);
  }
  return shuffleResult;
}
export function processOptOut(feedbackType) {
  feedbackType = feedbackType.feedbackType;
  let obj = AnalyticsUtilsDefault;
  let obj2 = { feedback_type: closure_9[feedbackType], opted_out_until };
  obj.track(AnalyticEvents.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, obj2);
  const InAppFeedbackStates = feedbackType(4868).InAppFeedbackStates;
  InAppFeedbackStates.updateSetting((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    const obj2 = { optOutExpiryTime };
    const merged1 = Object.assign(arg0[feedbackType]);
    obj[feedbackType] = obj2;
    return obj;
  });
}
export function getConnectionFeedbackOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = { variant: metroImportAll.SELF, value: constants.COULD_NOT_CONNECT, label: intl.string(_modDef3143.gMHKDJ) };
  intl = intl20.intl;
  const items = [obj, , , , , ];
  const obj2 = { value: constants.HIGH_TTC, variant: metroImportAll.SELF, label: intl2.string(_modDef3143.y06Ayn) };
  intl2 = intl20.intl;
  items[1] = obj2;
  const obj3 = { value: constants.HIGH_LATENCY, variant: metroImportAll.SELF, label: intl3.string(_modDef3143.y5k8Jq) };
  intl3 = intl20.intl;
  items[2] = obj3;
  const obj4 = { value: constants.ROBOT_VOICE, variant: metroImportAll.SOMEONE, label: intl4.string(_modDef3143.f2914v) };
  intl4 = intl20.intl;
  items[3] = obj4;
  const obj5 = { value: constants.DESYNC, variant: metroImportAll.UNSPECIFIED, label: intl5.string(_modDef3143["zk+QL1"]) };
  intl5 = intl20.intl;
  items[4] = obj5;
  const obj6 = { value: constants.CUTTING, variant: metroImportAll.SOMEONE, label: intl6.string(_modDef3143.K5vYQA) };
  intl6 = intl20.intl;
  items[5] = obj6;
  const found = items.filter(f101872);
  return found.map(f101873);
}
export function getAudioFeedbackOptions(isMobile) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  isMobile = isMobile.isMobile;
  const obj = { value: constants2.NO_AUDIO, variant: metroImportAll.SELF, label: intl.string(_modDef3143["GWypH+"]) };
  intl = intl20.intl;
  const items = [obj, , , , , , , , , , , , ];
  const obj2 = { value: constants2.NO_AUDIO, variant: metroImportAll.OTHERS, label: intl2.string(_modDef3143.ftSvQ0) };
  intl2 = intl20.intl;
  items[1] = obj2;
  const obj3 = { value: constants2.LOW_QUALITY_AUDIO, variant: metroImportAll.OTHERS, label: intl3.string(_modDef3143["1DnNRO"]) };
  intl3 = intl20.intl;
  items[2] = obj3;
  const obj4 = { value: constants2.ROBOT_VOICE, variant: metroImportAll.SOMEONE, label: intl4.string(_modDef3143.yGe0BL) };
  intl4 = intl20.intl;
  items[3] = obj4;
  const obj5 = { value: constants2.ECHO, variant: metroImportAll.OTHERS, label: intl5.string(_modDef3143.Q5Dsaz) };
  intl5 = intl20.intl;
  items[4] = obj5;
  const obj6 = { value: constants2.TOO_QUIET_OR_LOUD, variant: metroImportAll.SOMEONE, label: intl6.string(_modDef3143["1o77I3"]) };
  intl6 = intl20.intl;
  items[5] = obj6;
  const obj7 = { value: constants2.CUTTING, variant: metroImportAll.SOMEONE, label: intl7.string(_modDef3143.RK9DUi) };
  intl7 = intl20.intl;
  items[6] = obj7;
  const obj8 = { value: constants2.DELAYED, variant: metroImportAll.UNSPECIFIED, label: intl8.string(_modDef3143.RGRgmM) };
  intl8 = intl20.intl;
  items[7] = obj8;
  const obj9 = { value: constants2.BACKGROUND_NOISE, variant: metroImportAll.SOMEONE, label: intl9.string(_modDef3143["anHk1/"]) };
  intl9 = intl20.intl;
  items[8] = obj9;
  const obj10 = { value: constants2.UNABLE_TO_FIND_DEVICE, variant: metroImportAll.SELF, label: intl10.string(_modDef3143["05VSjm"]) };
  intl10 = intl20.intl;
  items[9] = obj10;
  const obj11 = { value: constants2.COMPLAINTS, variant: metroImportAll.OTHERS, label: intl11.string(_modDef3143.kbbtwi) };
  intl11 = intl20.intl;
  items[10] = obj11;
  const obj12 = { value: constants2.TROUBLE_WITH_SPEAKERPHONE, variant: metroImportAll.SELF, label: intl12.string(_modDef3143["4qlGrO"]), disabled: !isMobile };
  intl12 = intl20.intl;
  items[11] = obj12;
  const obj13 = { value: constants2.NO_GAME_AUDIO, variant: metroImportAll.SELF, label: intl13.string(_modDef3143["2IG95D"]) };
  intl13 = intl20.intl;
  items[12] = obj13;
  const found = items.filter(f101872);
  return found.map(f101873);
}
export function getVideoFeedbackOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = { value: hasOwnProperty.NO_VIDEO, variant: metroImportAll.SELF, label: intl.string(_modDef3143["Bh+02d"]) };
  intl = intl20.intl;
  const items = [obj, , , , , ];
  const obj2 = { value: hasOwnProperty.NO_VIDEO, variant: metroImportAll.SOMEONE, label: intl2.string(_modDef3143["R+wqwU"]) };
  intl2 = intl20.intl;
  items[1] = obj2;
  const obj3 = { value: hasOwnProperty.FREEZING_OR_HITCHING, variant: metroImportAll.SOMEONE, label: intl3.string(_modDef3143["8I/GUL"]) };
  intl3 = intl20.intl;
  items[2] = obj3;
  const obj4 = { value: hasOwnProperty.BLURRY_OR_PIXELATED, variant: metroImportAll.SOMEONE, label: intl4.string(_modDef3143.k7Idoz) };
  intl4 = intl20.intl;
  items[3] = obj4;
  const obj5 = { value: hasOwnProperty.UNABLE_TO_ENABLE_DEVICE, variant: metroImportAll.SELF, label: intl5.string(_modDef3143.QbC6La) };
  intl5 = intl20.intl;
  items[4] = obj5;
  const obj6 = { value: hasOwnProperty.DESYNC, variant: metroImportAll.UNSPECIFIED, label: intl6.string(_modDef3143.vRDE5O) };
  intl6 = intl20.intl;
  items[5] = obj6;
  const found = items.filter(f101872);
  return found.map(f101873);
}
export function getVideoBackgroundFeedbackOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  const obj = { value: metroRequire.OUTLINE_FUZZY_OR_HALO, variant: metroImportAll.SELF, label: intl.string(_modDef3143.calUNv) };
  intl = intl20.intl;
  const items = [obj, , , ];
  const obj2 = { value: metroRequire.INACCURATE_BACKGROUND_DETECTION, variant: metroImportAll.SELF, label: intl2.string(_modDef3143.zYumoj) };
  intl2 = intl20.intl;
  items[1] = obj2;
  const obj3 = { value: metroRequire.FLICKERING_ARTIFACTS, variant: metroImportAll.SELF, label: intl3.string(_modDef3143.ie5nCG) };
  intl3 = intl20.intl;
  items[2] = obj3;
  const obj4 = { value: metroRequire.LAG_ON_MOVEMENT, variant: metroImportAll.SELF, label: intl4.string(_modDef3143["Gg/Y1X"]) };
  intl4 = intl20.intl;
  items[3] = obj4;
  const found = items.filter(f101872);
  return found.map(f101873);
}
export function getStreamFeedbackOptions(isStreamer) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  isStreamer = isStreamer.isStreamer;
  const obj = { value: metroImportDefault.COULD_NOT_LOAD, variant: metroImportAll.SELF, label: intl.string(_modDef3143["w+kiDF"]), disabled: !isStreamer };
  intl = intl20.intl;
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  const obj2 = { value: metroImportDefault.BLACK_SCREEN, variant: metroImportAll.SELF, label: intl2.string(_modDef3143.RRZZZb), disabled: !isStreamer };
  intl2 = intl20.intl;
  items[1] = obj2;
  const obj3 = { value: metroImportDefault.FREEZING_OR_HITCHING, variant: metroImportAll.SELF, label: intl3.string(_modDef3143["3PKSkd"]), disabled: !isStreamer };
  intl3 = intl20.intl;
  items[2] = obj3;
  const obj4 = { value: metroImportDefault.LAG, variant: metroImportAll.SELF, label: intl4.string(_modDef3143.iMxexK), disabled: !isStreamer };
  intl4 = intl20.intl;
  items[3] = obj4;
  const obj5 = { value: metroImportDefault.BLURRY_OR_PIXELATED, variant: metroImportAll.SELF, label: intl5.string(_modDef3143["8ceyQy"]), disabled: !isStreamer };
  intl5 = intl20.intl;
  items[4] = obj5;
  const obj6 = { value: metroImportDefault.NO_AUDIO, variant: metroImportAll.SELF, label: intl6.string(_modDef3143.HaZSC3), disabled: !isStreamer };
  intl6 = intl20.intl;
  items[5] = obj6;
  const obj7 = { value: metroImportDefault.BAD_AUDIO, variant: metroImportAll.SELF, label: intl7.string(_modDef3143["zIC+8Y"]), disabled: !isStreamer };
  intl7 = intl20.intl;
  items[6] = obj7;
  const obj8 = { value: metroImportDefault.STOPPED_UNEXPECTEDLY, variant: metroImportAll.SELF, label: intl8.string(_modDef3143["/nlKuG"]), disabled: !isStreamer };
  intl8 = intl20.intl;
  items[7] = obj8;
  const obj9 = { value: metroImportDefault.DESYNC, variant: metroImportAll.SELF, label: intl9.string(_modDef3143.JS6akP), disabled: !isStreamer };
  intl9 = intl20.intl;
  items[8] = obj9;
  const obj10 = { value: metroImportDefault.NO_GAME_AUDIO, variant: metroImportAll.SELF, label: intl10.string(_modDef3143.TaIrh5), disabled: !isStreamer };
  intl10 = intl20.intl;
  items[9] = obj10;
  const obj11 = { value: metroImportDefault.COULD_NOT_LOAD, variant: metroImportAll.SOMEONE, label: intl11.string(_modDef3143.jU9Zs8), disabled: isStreamer };
  intl11 = intl20.intl;
  items[10] = obj11;
  const obj12 = { value: metroImportDefault.BLACK_SCREEN, variant: metroImportAll.SOMEONE, label: intl12.string(_modDef3143.aml28x), disabled: isStreamer };
  intl12 = intl20.intl;
  items[11] = obj12;
  const obj13 = { value: metroImportDefault.FREEZING_OR_HITCHING, variant: metroImportAll.SOMEONE, label: intl13.string(_modDef3143.V3EeCH), disabled: isStreamer };
  intl13 = intl20.intl;
  items[12] = obj13;
  const obj14 = { value: metroImportDefault.LAG, variant: metroImportAll.SOMEONE, label: intl14.string(_modDef3143.hi1Y39), disabled: isStreamer };
  intl14 = intl20.intl;
  items[13] = obj14;
  const obj15 = { value: metroImportDefault.BLURRY_OR_PIXELATED, variant: metroImportAll.SOMEONE, label: intl15.string(_modDef3143.qdBn3L), disabled: isStreamer };
  intl15 = intl20.intl;
  items[14] = obj15;
  const obj16 = { value: metroImportDefault.NO_AUDIO, variant: metroImportAll.SOMEONE, label: intl16.string(_modDef3143.DOOlop), disabled: isStreamer };
  intl16 = intl20.intl;
  items[15] = obj16;
  const obj17 = { value: metroImportDefault.BAD_AUDIO, variant: metroImportAll.SOMEONE, label: intl17.string(_modDef3143.k7bdGE), disabled: isStreamer };
  intl17 = intl20.intl;
  items[16] = obj17;
  const obj18 = { value: metroImportDefault.STOPPED_UNEXPECTEDLY, variant: metroImportAll.SOMEONE, label: intl18.string(_modDef3143.jPD998), disabled: isStreamer };
  intl18 = intl20.intl;
  items[17] = obj18;
  const obj19 = { value: metroImportDefault.DESYNC, variant: metroImportAll.SOMEONE, label: intl19.string(_modDef3143.JfAvQp), disabled: isStreamer };
  intl19 = intl20.intl;
  items[18] = obj19;
  const found = items.filter(f101872);
  return found.map(f101873);
}
export function getPeopleFeedbackOptions() {
  let intl;
  const obj = { value: unpackModuleId.TOXIC_OR_INAPPROPRIATE, variant: metroImportAll.OTHERS, label: intl.string(_modDef3143.PLBRzF) };
  intl = intl20.intl;
  const items = [obj];
  const found = items.filter(f101872);
  return found.map(f101873);
}
