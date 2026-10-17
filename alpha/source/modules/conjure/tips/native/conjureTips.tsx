// Module ID: 12139
// Function ID: 12140
// Name: conjureTips
// Dependencies: [12140, 12147, 12150, 2]

// Module 12139 (conjureTips)
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12140 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12147 */;
import ConjureIdeasTip from "ConjureIdeasTip" /* 12150 */;
import size from "module_2" /* 2 */;

const items = [ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP, ConjureIdeasTip.CONJURE_IDEAS_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
