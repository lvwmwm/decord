// Module ID: 13876
// Function ID: 104983
// Name: QuestDockDismissalNotification
// Dependencies: []
// Exports: displayQuestDismissalToast

// Module 13876 (QuestDockDismissalNotification)
function QuestDockDismissalNotification() {
  const callback = callback2();
  let obj = { "Bool(false)": "header", "Bool(false)": null };
  const intl = callback(dependencyMap[6]).intl;
  obj = {
    arrowHook() {
      let obj = { style: closure_0.toastArrowForwardIconContainer };
      obj = { resizeMode: "contain", source: callback(closure_2[7]), style: closure_0.toastArrowForwardIcon };
      obj.children = callback2(closure_3, obj);
      return callback2(closure_4, obj);
    }
  };
  obj.children = intl.format(callback(dependencyMap[6]).t.dYE1px, obj);
  return jsx(callback(dependencyMap[5]).Text, obj);
}
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[3]).createStyles(() => {
  let obj = { toastArrowForwardIconContainer: { <string:1140607356>: null, <string:1751293292>: "\u{1F61E}" } };
  obj = { eb: "isArray", ec: "construct", ed: "Array", en: "isArray", eg: "isArray", em: "isArray", tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_ACTIVE };
  const items = [{ translateY: -10 }];
  obj.transform = items;
  obj.toastArrowForwardIcon = obj;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  let obj = importDefault(dependencyMap[8]);
  obj = { key: "QUEST_BAR_DISMISS_TOAST", content: QuestDockDismissalNotification, icon: importDefault(dependencyMap[9]), position: "bottom" };
  obj.open(obj);
};
