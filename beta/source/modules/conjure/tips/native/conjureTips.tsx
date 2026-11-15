// Module ID: 12854
// Function ID: 12855
// Name: conjureTips
// Dependencies: [12855, 12861, 12862, 2]

// Module 12854 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12855 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12861 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12862 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
