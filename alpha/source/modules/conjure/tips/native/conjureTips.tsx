// Module ID: 18457
// Function ID: 18458
// Name: conjureTips
// Dependencies: [18458, 18464, 18465, 2]

// Module 18457 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18458 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18464 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18465 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
