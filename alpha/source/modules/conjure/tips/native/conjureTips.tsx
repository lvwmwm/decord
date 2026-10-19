// Module ID: 12158
// Function ID: 12159
// Name: conjureTips
// Dependencies: [12159, 12166, 12168, 2]

// Module 12158 (conjureTips)
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12159 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12166 */;
import ConjureIdeasTip from "ConjureIdeasTip" /* 12168 */;
import size from "module_2" /* 2 */;

const items = [ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP, ConjureIdeasTip.CONJURE_IDEAS_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
