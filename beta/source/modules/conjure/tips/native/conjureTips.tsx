// Module ID: 13606
// Function ID: 13607
// Name: conjureTips
// Dependencies: [13607, 13613, 13614, 2]

// Module 13606 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 13607 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 13613 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 13614 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
