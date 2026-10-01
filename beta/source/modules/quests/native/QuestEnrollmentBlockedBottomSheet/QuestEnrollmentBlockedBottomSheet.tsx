// Module ID: 14697
// Function ID: 14698
// Name: QuestEnrollmentBlockedBottomSheet
// Dependencies: [19, 17, 7116, 21, 4836, 576, 504, 10753, 5759, 6859, 6571, 4832, 1115, 2]
// Exports: default

// Module 14697 (QuestEnrollmentBlockedBottomSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import useCountdownDefault from "useCountdown" /* 6859 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7116 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let obj2;
let obj3;
function QuestEnrollmentBlockedBottomSheet(questEnrollmentBlockedUntil) {
  let formatToPlainString;
  let intl;
  let minutes;
  let obj6;
  let prop;
  let seconds;
  questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
  const tmp = closure_6();
  let date = questEnrollmentBlockedUntil;
  const tmp3 = useCountdownDefault;
  if (questEnrollmentBlockedUntil == null) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date();
  }
  const tmp3Result = tmp3(date);
  ({ minutes, seconds } = tmp3Result);
  const StringResult = String(tmp3Result.hours);
  const padStartResult = StringResult.padStart(2, "0");
  const StringResult1 = String(minutes);
  const padStartResult1 = StringResult1.padStart(2, "0");
  const StringResult2 = String(seconds);
  let tmp10 = null;
  const padStartResult2 = StringResult2.padStart(2, "0");
  if (null != questEnrollmentBlockedUntil) {
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    ({ variant: "heading-xl/bold", children: intl.string(intl3.t["XEHDT/"]) });
    const Text = Text_Text.Text;
    intl = intl3.intl;
    ({ variant: "text-md/normal", children: formatToPlainString(prop, obj6) });
    const Text2 = Text_Text.Text;
    const intl2 = intl3.intl;
    formatToPlainString = intl2.formatToPlainString;
    const _HermesInternal = HermesInternal;
    obj6 = { countdownString: "" + padStartResult + ":" + padStartResult1 + ":" + padStartResult2 };
    prop = intl3.t["+5XVH+"];
    tmp10 = <BottomSheet header={null} footer={null} startExpanded>{null}</BottomSheet>;
  }
  return tmp10;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { heading: obj2, container: obj3 };
obj2 = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx");

export default function QuestEnrollmentBlockedBottomSheetConnected(questContentPosition) {
  let questEnrollmentBlockedUntil;
  let questId;
  let sourceQuestContent;
  ({ questId: require, questEnrollmentBlockedUntil: importDefault, sourceQuestContent } = questContentPosition);
  questContentPosition = questContentPosition.questContentPosition;
  const items = [QuestStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(require));
  let tmp4 = null;
  if (null != stateFromStores) {
    const QuestContentImpressionTrackerNative = tmp(tmp2[7]).QuestContentImpressionTrackerNative;
    tmp4 = <QuestContentImpressionTrackerNative overrideVisibility questOrQuests={stateFromStores} questContent={require("QuestTypes").QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET} questContentPosition={questContentPosition} sourceQuestContent={sourceQuestContent}>{function children() {
      return <QuestEnrollmentBlockedBottomSheet questId={require} questEnrollmentBlockedUntil={importDefault} sourceQuestContent={sourceQuestContent} />;
    }}</QuestContentImpressionTrackerNative>;
  }
  return tmp4;
};
