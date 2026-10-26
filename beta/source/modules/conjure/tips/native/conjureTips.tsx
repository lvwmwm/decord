// Module ID: 12340
// Function ID: 12341
// Name: conjureTips
// Dependencies: [12341, 12349, 12350, 2]

// Module 12340 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12341 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12349 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12350 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
