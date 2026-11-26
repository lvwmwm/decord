// Module ID: 18672
// Function ID: 18673
// Name: conjureTips
// Dependencies: [18673, 18679, 18680, 2]

// Module 18672 (conjureTips)
import ConjureBotPermissionsTip from "ConjureBotPermissionsTip" /* 18673 */;
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 18679 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 18680 */;
import size from "module_2" /* 2 */;

const items = [ConjureBotPermissionsTip.CONJURE_BOT_PERMISSIONS_TIP, ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
