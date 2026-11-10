// Module ID: 12837
// Function ID: 12838
// Name: conjureTips
// Dependencies: [12838, 12844, 12845, 2]

// Module 12837 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12838 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12844 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12845 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
