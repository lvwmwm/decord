// Module ID: 13945
// Function ID: 105960
// Name: QuestEmbedPreview
// Dependencies: []
// Exports: QuestEmbedPreview

// Module 13945 (QuestEmbedPreview)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const MessageTypes = arg1(dependencyMap[3]).MessageTypes;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = function QuestEmbedPreview(questId) {
  questId = questId.questId;
  const arg1 = questId;
  const memo = React.useMemo(() => {
    let tmp = stateFromStores(closure_2[5]);
    tmp = new tmp();
    tmp.setOptions({});
    return tmp;
  }, []);
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const importDefault = stateFromStores;
  const items1 = [questId, stateFromStores];
  const memo1 = React.useMemo(() => {
    let tmp = null;
    if (null != questId) {
      tmp = null;
      if (null != stateFromStores) {
        let obj = { type: constants.DEFAULT, author: stateFromStores };
        const _Date = Date;
        const date = new Date();
        obj.timestamp = date;
        obj.mentions = [];
        obj.mention_roles = [];
        obj.attachments = [];
        obj.embeds = [];
        obj.reactions = [];
        obj.pinned = false;
        obj.webhook_id = null;
        obj = { type: questId(closure_2[7]).CodedLinkType.QUESTS_EMBED, code: questId, url: questId(closure_2[8]).getQuestUrl(questId) };
        const items = [obj];
        obj.codedLinks = items;
        const prototype2 = ctor.prototype;
        tmp = new ctor(obj);
        const obj3 = questId(closure_2[8]);
      }
    }
    return tmp;
  }, items1);
  let tmp4 = null;
  if (null != memo1) {
    obj = {};
    const intl = arg1(dependencyMap[10]).intl;
    obj.title = intl.string(arg1(dependencyMap[10]).t.habP/M);
    obj = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    obj.children = jsx(importDefault(dependencyMap[11]), obj);
    tmp4 = jsx(importDefault(dependencyMap[9]), obj);
    const tmp8 = importDefault(dependencyMap[9]);
  }
  return tmp4;
};
