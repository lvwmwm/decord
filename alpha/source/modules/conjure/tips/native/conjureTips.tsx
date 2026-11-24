// Module ID: 18498
// Function ID: 18499
// Name: conjureTips
// Dependencies: [18499, 18505, 18506, 2]

// Module 18498 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18499 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18505 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18506 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
