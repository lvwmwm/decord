// Module ID: 14063
// Function ID: 108147
// Name: QuestEnrollmentBlockedBottomSheet
// Dependencies: [31, 27, 6942, 33, 4130, 689, 566, 10929, 4979, 6678, 5187, 4126, 1212, 2]
// Exports: default

// Module 14063 (QuestEnrollmentBlockedBottomSheet)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function QuestEnrollmentBlockedBottomSheet(questEnrollmentBlockedUntil) {
  let minutes;
  let seconds;
  questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
  const tmp = _createForOfIteratorHelperLoose();
  let date = questEnrollmentBlockedUntil;
  if (null == questEnrollmentBlockedUntil) {
    const _Date = Date;
    date = new Date();
  }
  const tmp2Result = importDefault(6678)(date);
  ({ minutes, seconds } = tmp2Result);
  const tmp2 = importDefault(6678);
  const padStartResult = String(tmp2Result.hours).padStart(2, "0");
  const StringResult = String(tmp2Result.hours);
  const padStartResult1 = String(minutes).padStart(2, "0");
  const StringResult1 = String(minutes);
  const padStartResult2 = String(seconds).padStart(2, "0");
  let tmp11 = null;
  if (null != questEnrollmentBlockedUntil) {
    let obj = { header: null, footer: null, startExpanded: true };
    obj = { style: tmp.heading };
    const obj1 = { variant: "heading-xl/bold" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t["XEHDT/"]);
    obj.children = jsx(require(4126) /* Text */.Text, { variant: "heading-xl/bold" });
    obj.header = <View style={tmp.heading} />;
    const obj2 = { style: tmp.container };
    const obj3 = { variant: "text-md/normal" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj4 = {};
    const _HermesInternal = HermesInternal;
    obj4.countdownString = "" + padStartResult + ":" + padStartResult1 + ":" + padStartResult2;
    obj3.children = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["+5XVH+"], obj4);
    obj2.children = jsx(require(4126) /* Text */.Text, { variant: "text-md/normal" });
    obj.children = <View style={tmp.container} />;
    tmp11 = jsx(require(5187) /* Background */.BottomSheet, { style: tmp.heading });
  }
  return tmp11;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.heading = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.container = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx");

export default function QuestEnrollmentBlockedBottomSheetConnected(questContentPosition) {
  let importDefault;
  let require;
  let sourceQuestContent;
  ({ questId: require, questEnrollmentBlockedUntil: importDefault, sourceQuestContent } = questContentPosition);
  let obj = require(sourceQuestContent[6]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getQuest(closure_0));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: require(sourceQuestContent[8]).QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET,
      questContentPosition: questContentPosition.questContentPosition,
      sourceQuestContent,
      children() {
          return outer1_5(outer1_7, { questId: closure_0, questEnrollmentBlockedUntil: closure_1, sourceQuestContent });
        }
    };
    tmp2 = jsx(require(sourceQuestContent[7]).QuestContentImpressionTrackerNative, {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: require(sourceQuestContent[8]).QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET,
      questContentPosition: questContentPosition.questContentPosition,
      sourceQuestContent,
      children() {
          return outer1_5(outer1_7, { questId: closure_0, questEnrollmentBlockedUntil: closure_1, sourceQuestContent });
        }
    });
  }
  return tmp2;
};
