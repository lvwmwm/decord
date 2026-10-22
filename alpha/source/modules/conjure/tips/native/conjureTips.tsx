// Module ID: 12282
// Function ID: 12283
// Name: conjureTips
// Dependencies: [12283, 12290, 12292, 2]

// Module 12282 (conjureTips)
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12283 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12290 */;
import ConjureIdeasTip from "ConjureIdeasTip" /* 12292 */;
import size from "module_2" /* 2 */;

const items = [ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP, ConjureIdeasTip.CONJURE_IDEAS_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
