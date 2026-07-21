// Module ID: 13939
// Function ID: 105919
// Name: QuestEnrollmentBlockedBottomSheet
// Dependencies: []
// Exports: default

// Module 13939 (QuestEnrollmentBlockedBottomSheet)
function QuestEnrollmentBlockedBottomSheet(questEnrollmentBlockedUntil) {
  let minutes;
  let seconds;
  questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
  const tmp = callback();
  let date = questEnrollmentBlockedUntil;
  if (null == questEnrollmentBlockedUntil) {
    const _Date = Date;
    date = new Date();
  }
  const tmp2Result = importDefault(dependencyMap[9])(date);
  ({ minutes, seconds } = tmp2Result);
  const tmp2 = importDefault(dependencyMap[9]);
  const padStartResult = String(tmp2Result.hours).padStart(2, "0");
  const StringResult = String(tmp2Result.hours);
  const padStartResult1 = String(minutes).padStart(2, "0");
  const StringResult1 = String(minutes);
  const padStartResult2 = String(seconds).padStart(2, "0");
  let tmp11 = null;
  if (null != questEnrollmentBlockedUntil) {
    let obj = {};
    obj = { style: tmp.heading };
    const obj1 = { variant: "heading-xl/bold" };
    const intl = arg1(dependencyMap[12]).intl;
    obj1.children = intl.string(arg1(dependencyMap[12]).t.XEHDT/);
    obj.children = jsx(arg1(dependencyMap[11]).Text, obj1);
    obj.header = <View {...obj} />;
    const obj2 = { style: tmp.container };
    const obj3 = { variant: "text-md/normal" };
    const intl2 = arg1(dependencyMap[12]).intl;
    const obj4 = {};
    const _HermesInternal = HermesInternal;
    obj4.countdownString = "" + padStartResult + ":" + padStartResult1 + ":" + padStartResult2;
    obj3.children = intl2.formatToPlainString(arg1(dependencyMap[12]).t.+5XVH+, obj4);
    obj2.children = jsx(arg1(dependencyMap[11]).Text, obj3);
    obj.children = <View {...obj2} />;
    tmp11 = jsx(arg1(dependencyMap[10]).BottomSheet, obj);
  }
  return tmp11;
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingTop: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_24 };
obj.heading = obj;
const obj1 = { "Bool(false)": 0, "Bool(false)": 0, "Bool(false)": 0, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_32 };
obj.container = obj1;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx");

export default function QuestEnrollmentBlockedBottomSheetConnected(questContentPosition) {
  let sourceQuestContent;
  ({ questId: closure_0, questEnrollmentBlockedUntil: closure_1, sourceQuestContent } = questContentPosition);
  const dependencyMap = sourceQuestContent;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => quest.getQuest(closure_0));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: arg1(dependencyMap[8]).QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET,
      questContentPosition: questContentPosition.questContentPosition,
      sourceQuestContent,
      children() {
          return callback(closure_7, { questId: closure_0, questEnrollmentBlockedUntil: closure_1, sourceQuestContent });
        }
    };
    tmp2 = jsx(arg1(dependencyMap[7]).QuestContentImpressionTrackerNative, obj);
  }
  return tmp2;
};
