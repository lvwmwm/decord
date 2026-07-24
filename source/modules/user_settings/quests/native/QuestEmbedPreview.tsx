// Module ID: 14119
// Function ID: 108511
// Name: QuestEmbedPreview
// Dependencies: [31, 3768, 1849, 653, 33, 7710, 566, 4119, 9504, 14118, 1212, 9329, 2]
// Exports: QuestEmbedPreview

// Module 14119 (QuestEmbedPreview)
import result from "result";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MessageTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = function QuestEmbedPreview(questId) {
  questId = questId.questId;
  const memo = React.useMemo(() => {
    let tmp = stateFromStores(outer1_2[5]);
    tmp = new tmp();
    tmp.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    return tmp;
  }, []);
  let obj = questId(566);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = React.useMemo(() => {
    let tmp = null;
    if (null != questId) {
      tmp = null;
      if (null != stateFromStores) {
        let obj = { id: "1000000000000000000", type: outer1_6.DEFAULT, channel_id: "1000000000000000001", author: stateFromStores, content: "", timestamp: null, edited_timestamp: null, tts: false, mention_everyone: false };
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
        obj = { type: questId(outer1_2[7]).CodedLinkType.QUESTS_EMBED, code: questId, url: questId(outer1_2[8]).getQuestUrl(questId) };
        const items = [obj];
        obj.codedLinks = items;
        const prototype2 = outer1_4.prototype;
        tmp = new outer1_4(obj);
        const obj3 = questId(outer1_2[8]);
      }
    }
    return tmp;
  }, items1);
  let tmp4 = null;
  if (null != memo1) {
    obj = {};
    const intl = questId(1212).intl;
    obj.title = intl.string(questId(1212).t["habP/M"]);
    obj = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    obj.children = jsx(stateFromStores(9329), { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" });
    tmp4 = jsx(stateFromStores(14118), { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" });
    const tmp8 = stateFromStores(14118);
  }
  return tmp4;
};
