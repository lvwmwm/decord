// Module ID: 18610
// Function ID: 18611
// Name: conjureTips
// Dependencies: [18611, 18617, 18618, 2]

// Module 18610 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18611 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18617 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18618 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
