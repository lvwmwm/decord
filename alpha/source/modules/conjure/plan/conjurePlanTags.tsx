// Module ID: 17085
// Function ID: 17086
// Name: conjurePlanTags
// Dependencies: [3827, 1126, 17086, 2]
// Exports: getConjurePlanTags

// Module 17085 (conjurePlanTags)
import intl from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import conjurePlanOverlay from "conjurePlanOverlay" /* 17086 */;
import size from "module_2" /* 2 */;

let obj = { automod: _modDef3827.DnWMLj, overlay: _modDef3827.liTNf3, widget: _modDef3827["EswAi+"], activity: intl.t.IC5Ann, commands: _modDef3827.w7JaEP, chat_bot: _modDef3827["5QSvrP"], bot: _modDef3827.VFWfz1 };
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export const CONJURE_PLAN_TAG_LABELS = obj;
export const getConjurePlanTags = function getConjurePlanTags(proposal, botInteraction) {
  if (null != proposal.automod) {
    return ["automod"];
  } else {
    let tmp8;
    const items = [];
    const obj = conjurePlanOverlay;
    if (obj.planSupportsOverlay(proposal)) {
      items.push("overlay");
    }
    if (null != proposal.widget_config) {
      items.push("widget");
    }
    if (true === proposal.is_activity) {
      const items1 = [];
      items1[HermesBuiltin.arraySpread(items1, items, 0)] = "activity";
      tmp8 = items1;
    } else if (null == botInteraction) {
      const items2 = [];
      items2[HermesBuiltin.arraySpread(items2, items, 0)] = "bot";
      tmp8 = items2;
    } else {
      const tmp6 = tmp5 && "both" !== botInteraction;
      if (!tmp6) {
        items.push("commands");
      }
      tmp8 = items;
      if ("commands" !== botInteraction) {
        items.push("chat_bot");
        tmp8 = items;
      }
    }
    return tmp8;
  }
};
