// Module ID: 18678
// Function ID: 18679
// Name: conjureLiveBehindTip
// Dependencies: [18647, 18679, 2]
// Exports: resolveLiveBehindTip

// Module 18678 (conjureLiveBehindTip)
import conjurePublishCard from "conjurePublishCard" /* 18647 */;
import conjureTipImpressions from "conjureTipImpressions" /* 18679 */;
import size from "module_2" /* 2 */;

function resolveLiveBehindTip(draftHasText) {
  let publish;
  let turn;
  ({ turn, publish } = draftHasText);
  if (null != turn) {
    if (!draftHasText.draftHasText) {
      let state;
      if (publish != null) {
        state = publish.state;
      }
      if ("action_needed" === state) {
        if (publish.isUpdate) {
          if (null == publish.disabledReason) {
            let tmp9;
            if (tmp >= c3) {
              if (null == turn.publishCta) {
                tmp9 = "hint";
                conjureTipImpressions;
              } else {
                conjurePublishCard;
              }
            }
            return tmp9;
          }
        }
      }
    }
  }
  tmp9 = null;
}
const live_behind = "live_behind";
let c3 = 120000;
const result = size.fileFinishedImporting("modules/conjure/tips/conjureLiveBehindTip.tsx");

export const CONJURE_TIP_LIVE_BEHIND_IDLE_MS = 120000;
export const CONJURE_TIP_LIVE_BEHIND_COOLDOWN_MESSAGES = 10;
export { resolveLiveBehindTip };
export const CONJURE_LIVE_BEHIND_TIP_BASE = { id: "live_behind", priority: 2, resolve: resolveLiveBehindTip, dismissal: "session" };
