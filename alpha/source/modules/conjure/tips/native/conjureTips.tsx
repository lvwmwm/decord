// Module ID: 12312
// Function ID: 12313
// Name: conjureTips
// Dependencies: [12313, 12320, 12322, 2]

// Module 12312 (conjureTips)
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12313 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12320 */;
import ConjureIdeasTip from "ConjureIdeasTip" /* 12322 */;
import size from "module_2" /* 2 */;

const items = [ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP, ConjureIdeasTip.CONJURE_IDEAS_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
