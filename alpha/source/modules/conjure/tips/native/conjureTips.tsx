// Module ID: 18511
// Function ID: 18512
// Name: conjureTips
// Dependencies: [18512, 18518, 18519, 2]

// Module 18511 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18512 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18518 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18519 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
