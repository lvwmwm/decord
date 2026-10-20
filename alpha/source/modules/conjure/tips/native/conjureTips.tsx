// Module ID: 12178
// Function ID: 12179
// Name: conjureTips
// Dependencies: [12179, 12186, 12188, 2]

// Module 12178 (conjureTips)
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12179 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12186 */;
import ConjureIdeasTip from "ConjureIdeasTip" /* 12188 */;
import size from "module_2" /* 2 */;

const items = [ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP, ConjureIdeasTip.CONJURE_IDEAS_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
