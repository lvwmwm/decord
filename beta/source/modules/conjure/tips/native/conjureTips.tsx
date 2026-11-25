// Module ID: 18466
// Function ID: 18467
// Name: conjureTips
// Dependencies: [18467, 18473, 18474, 2]

// Module 18466 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18467 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18473 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18474 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
