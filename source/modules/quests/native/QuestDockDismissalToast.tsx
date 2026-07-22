// Module ID: 13893
// Function ID: 105078
// Name: QuestDockDismissalNotification
// Dependencies: []
// Exports: displayQuestDismissalToast

// Module 13893 (QuestDockDismissalNotification)
function QuestDockDismissalNotification() {
  const callback = callback2();
  let obj = { "Null": "header", "Null": 40 };
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
  let obj = { toastArrowForwardIconContainer: { hideWhenScrolling: null, autoCapitalize: "\u{1F61E}" } };
  obj = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_ACTIVE, transform: items };
  const items = [{ translateY: -10 }];
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
