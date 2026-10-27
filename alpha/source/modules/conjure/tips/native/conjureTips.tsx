// Module ID: 12324
// Function ID: 12325
// Name: conjureTips
// Dependencies: [12325, 12331, 12332, 2]

// Module 12324 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 12325 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12331 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12332 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
