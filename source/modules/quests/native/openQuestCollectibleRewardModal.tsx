// Module ID: 10920
// Function ID: 84917
// Name: QuestCollectibleRewardModalMessages
// Dependencies: []
// Exports: openQuestCollectibleRewardModal

// Module 10920 (QuestCollectibleRewardModalMessages)
function QuestCollectibleRewardModalMessages(quest) {
  quest = quest.quest;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = arg1(dependencyMap[6]);
  const defaultRewardNameWithArticle = obj1.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  obj = {};
  const claimedCollectibleRewardMessage = arg1(dependencyMap[7]).useClaimedCollectibleRewardMessage(quest.config);
  obj = { variant: "heading-xl/bold", style: tmp.title };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.format(arg1(dependencyMap[9]).t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj), ];
  obj1 = { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage };
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  obj.children = items1;
  return callback2(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const QuestsExperimentLocations = arg1(dependencyMap[1]).QuestsExperimentLocations;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[4]).space.PX_32 };
obj.title = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export const openQuestCollectibleRewardModal = function openQuestCollectibleRewardModal(onSuccess) {
  let product;
  ({ quest: closure_0, product } = onSuccess);
  let obj = arg1(dependencyMap[10]);
  obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const questLogger = obj.getQuestLogger(obj);
  if (null != product) {
    obj = {
      product,
      renderMessages() {
          return callback(closure_9, { quest: closure_0 });
        },
      onSuccess: onSuccess.onSuccess
    };
    importDefault(dependencyMap[11]).open(obj);
    const obj4 = importDefault(dependencyMap[11]);
  } else {
    questLogger.warn("Product is null");
  }
};
