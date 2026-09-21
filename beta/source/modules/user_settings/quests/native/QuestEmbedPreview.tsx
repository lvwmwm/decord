// Module ID: 15430
// Function ID: 15431
// Name: QuestEmbedPreview
// Dependencies: [19, 4410, 1376, 1078, 21, 558, 568, 8195, 504, 4746, 10580, 1119, 15429, 8928, 2]

// Module 15430 (QuestEmbedPreview)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import CodedLink from "CodedLink" /* 4746 */;
import RowGeneratorDefault from "RowGenerator" /* 8195 */;
import ChatItemDefault from "ChatItem" /* 8928 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10580 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15429 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 4410 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const MessageTypes = fn(1078).MessageTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  let tmp2 = dependencyMap;
  const cResult = c.c(9);
  questId = questId.questId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = new RowGeneratorDefault();
    obj2.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp11 = fn;
    let tmp10 = items;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const stateFromStores = initialize.useStateFromStores(tmp10, tmp11);
  let tmp14 = null;
  if (null != questId) {
    tmp14 = null;
    if (null != stateFromStores) {
      if (cResult[3] === stateFromStores) {
      }
      const obj3 = { id: "1000000000000000000", type: MessageTypes.DEFAULT, channel_id: "1000000000000000001", author: stateFromStores, content: "", timestamp: null, edited_timestamp: null, tts: false, mention_everyone: false, mentions: null, mention_roles: null, attachments: null, embeds: null, reactions: null, pinned: false, webhook_id: null, codedLinks: null };
      const _Date = Date;
      const date = new Date();
      obj3.timestamp = date;
      obj3.mentions = [];
      obj3.mention_roles = [];
      obj3.attachments = [];
      obj3.embeds = [];
      obj3.reactions = [];
      const obj4 = { type: tmp(4746).CodedLinkType.QUESTS_EMBED, code: questId, url: tmp(10580).getQuestUrl(questId) };
      const items1 = [obj4];
      obj3.codedLinks = items1;
      const tmp25 = new MessageRecord(obj3);
      cResult[3] = stateFromStores;
      cResult[4] = questId;
      cResult[5] = tmp25;
      const tmpResult2 = tmp(10580);
    }
  }
  if (null == tmp14) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t["habP/M"]);
      cResult[6] = stringResult;
      let tmp28 = stringResult;
    } else {
      tmp28 = cResult[6];
    }
    if (cResult[7] !== tmp14) {
      const obj5 = { title: tmp28, children: null };
      const obj6 = { rowGenerator: first, message: tmp14, horizontalOffset: 0, pointerEvents: "none" };
      tmp2 = jsx(ChatItemDefault, { rowGenerator: first, message: tmp14, horizontalOffset: 0, pointerEvents: "none" });
      obj5.children = tmp2;
      const tmp34 = jsx(MobileQuestPreviewContainerDefault, { title: tmp28, children: null });
      cResult[7] = tmp14;
      cResult[8] = tmp34;
    }
  }
}) : ((questId) => {
  questId = questId.questId;
  const memo = noop.useMemo(() => {
    const obj = new stateFromStores(dependencyMap[7])();
    obj.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, []);
  let items = [UserStore];
  const stateFromStores = questId(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = noop.useMemo(() => {
    let tmp2 = null;
    if (null != questId) {
      tmp2 = null;
      if (null != stateFromStores) {
        const obj = { id: "1000000000000000000", type: MessageTypes.DEFAULT, channel_id: "1000000000000000001", author: tmp3, content: "", timestamp: null, edited_timestamp: null, tts: false, mention_everyone: false, mentions: null, mention_roles: null, attachments: null, embeds: null, reactions: null, pinned: false, webhook_id: null, codedLinks: null };
        const _Date = Date;
        const date = new Date();
        obj.timestamp = date;
        obj.mentions = [];
        obj.mention_roles = [];
        obj.attachments = [];
        obj.embeds = [];
        obj.reactions = [];
        const obj2 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: tmp, url: QuestCopyUtils.getQuestUrl(tmp) };
        const items = [obj2];
        obj.codedLinks = items;
        tmp2 = new MessageRecord(obj);
      }
    }
    return tmp2;
  }, items1);
  let tmp6 = null;
  if (null != memo1) {
    let obj2 = { title: null, children: null };
    const intl = tmp2(1119).intl;
    obj2.title = intl.string(tmp2(1119).t["habP/M"]);
    let obj3 = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    obj2.children = jsx(stateFromStores(8928), { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" });
    tmp6 = jsx(stateFromStores(15429), { title: null, children: null });
    const tmp9 = stateFromStores(15429);
  }
  return tmp6;
});
