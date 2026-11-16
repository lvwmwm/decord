// Module ID: 12855
// Function ID: 12856
// Name: conjureTips
// Dependencies: [12856, 12862, 12863, 2]

// Module 12855 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12856 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12862 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12863 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
