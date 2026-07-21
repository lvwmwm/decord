// Module ID: 13954
// Function ID: 106062
// Name: QuestBarPreview
// Dependencies: []
// Exports: QuestBarPreview

// Module 13954 (QuestBarPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = { overlay: {} };
obj = { left: importDefault(dependencyMap[4]).space.PX_16, right: importDefault(dependencyMap[4]).space.PX_16 };
obj.questDockContainer = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = function QuestBarPreview(quest) {
  quest = quest.quest;
  const tmp = callback();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (quest.isVisible) {
      let obj = { style: tmp.overlay };
      obj = { style: tmp.questDockContainer };
      obj = {};
      const obj1 = {};
      const obj2 = { grow: null, value: null, quest };
      obj1.value = obj2;
      obj1.children = jsx(arg1(dependencyMap[7]).QuestDockWithEntranceAnimation, {});
      obj.children = jsx(importDefault(dependencyMap[6]).Provider, obj1);
      obj.children = jsx(arg1(dependencyMap[5]).QuestDockExternalCoordinationContextProvider, obj);
      obj.children = <View {...obj} />;
      tmp2 = <View {...obj} />;
    }
  }
  return tmp2;
};
