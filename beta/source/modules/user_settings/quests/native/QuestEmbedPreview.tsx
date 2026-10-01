// Module ID: 14703
// Function ID: 14704
// Name: QuestEmbedPreview
// Dependencies: [19, 4480, 1372, 1074, 21, 7374, 504, 4821, 10699, 14702, 1115, 8112, 2]
// Exports: QuestEmbedPreview

// Module 14703 (QuestEmbedPreview)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import CodedLink from "CodedLink" /* 4821 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10699 */;
import react from "react" /* 19 */;
import MessageRecord from "MessageRecord" /* 4480 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = function QuestEmbedPreview(questId) {
  let currentUser;
  questId = questId.questId;
  let tmp2 = questId;
  const tmp3 = dependencyMap;
  const memo = react.useMemo(() => {
    const obj = new stateFromStores(dependencyMap[5])();
    obj.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, []);
  let obj = questId(504);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = react.useMemo(function() {
    let date;
    let items;
    let obj3;
    let tmp2 = null;
    if (null != questId) {
      tmp2 = null;
      if (null != stateFromStores) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const obj = { id: "1000000000000000000", type: MessageTypes.DEFAULT, channel_id: "1000000000000000001", author: tmp3, content: "", timestamp: date, edited_timestamp: null, tts: false, mention_everyone: false, mentions: [], mention_roles: [], attachments: [], embeds: [], reactions: [], pinned: false, webhook_id: null, codedLinks: items };
        date = new Date();
        const obj2 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: questId, url: obj3.getQuestUrl(questId) };
        items = [obj2];
        const self3 = this;
        const self4 = this;
        obj3 = QuestCopyUtils;
        tmp2 = new MessageRecord(obj);
      }
    }
    return tmp2;
  }, items1);
  let tmp6 = null;
  if (null != memo1) {
    stateFromStores(14702);
    const intl = tmp2(1115).intl;
    let obj3 = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    tmp6 = <tmp9 title={intl.string(tmp2(1115).t["habP/M"])}>{null}</tmp9>;
  }
  return tmp6;
};
