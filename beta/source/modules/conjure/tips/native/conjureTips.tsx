// Module ID: 18470
// Function ID: 18471
// Name: conjureTips
// Dependencies: [18471, 18477, 18478, 2]

// Module 18470 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18471 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18477 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18478 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
