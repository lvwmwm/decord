// Module ID: 13608
// Function ID: 13609
// Name: conjureTips
// Dependencies: [13609, 13615, 13616, 2]

// Module 13608 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 13609 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 13615 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 13616 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
