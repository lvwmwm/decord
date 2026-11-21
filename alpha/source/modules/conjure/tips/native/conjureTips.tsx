// Module ID: 18455
// Function ID: 18456
// Name: conjureTips
// Dependencies: [18456, 18462, 18463, 2]

// Module 18455 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18456 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18462 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18463 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
