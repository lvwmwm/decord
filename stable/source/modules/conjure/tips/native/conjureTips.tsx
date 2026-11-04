// Module ID: 12372
// Function ID: 12373
// Name: conjureTips
// Dependencies: [12373, 12381, 12382, 2]

// Module 12372 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12373 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12381 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12382 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
