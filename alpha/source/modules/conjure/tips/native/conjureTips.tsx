// Module ID: 18328
// Function ID: 18329
// Name: conjureTips
// Dependencies: [18329, 18335, 18336, 2]

// Module 18328 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18329 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18335 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18336 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
