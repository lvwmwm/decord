// Module ID: 12823
// Function ID: 12824
// Name: conjureTips
// Dependencies: [12824, 12830, 12831, 2]

// Module 12823 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12824 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12830 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12831 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
