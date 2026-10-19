// Module ID: 12149
// Function ID: 12150
// Name: conjureLiveBehindTip
// Dependencies: [12128, 12150, 2]
// Exports: resolveLiveBehindTip

// Module 12149 (conjureLiveBehindTip)
import conjurePublishCard from "conjurePublishCard" /* 12128 */;
import conjureTipImpressions from "conjureTipImpressions" /* 12150 */;
import size from "module_2" /* 2 */;

function resolveLiveBehindTip(draftHasText) {
  let publish;
  let turn;
  ({ turn, publish } = draftHasText);
  if (null != turn) {
    if (!draftHasText.draftHasText) {
      if (null != publish) {
        if (!publish.publishing) {
          if (publish.isUpdate) {
            if (null == publish.disabledReason) {
              let tmp8;
              if (tmp >= c3) {
                if (null == turn.publishCta) {
                  tmp8 = "hint";
                  conjureTipImpressions;
                } else {
                  conjurePublishCard;
                }
              }
              return tmp8;
            }
          }
        }
      }
    }
  }
  tmp8 = null;
}
const live_behind = "live_behind";
let c3 = 120000;
const result = size.fileFinishedImporting("modules/conjure/tips/conjureLiveBehindTip.tsx");

export const CONJURE_TIP_LIVE_BEHIND_IDLE_MS = 120000;
export const CONJURE_TIP_LIVE_BEHIND_COOLDOWN_MESSAGES = 10;
export { resolveLiveBehindTip };
export const CONJURE_LIVE_BEHIND_TIP_BASE = { id: "live_behind", priority: 2, resolve: resolveLiveBehindTip, dismissal: "session" };
