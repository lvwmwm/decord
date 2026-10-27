// Module ID: 12153
// Function ID: 12154
// Name: conjureTips
// Dependencies: [12154, 12161, 12163, 2]

// Module 12153 (conjureTips)
import ConjureLiveBehindTip from "ConjureLiveBehindTip" /* 12154 */;
import ConjureIdeasIntroTip from "ConjureIdeasIntroTip" /* 12161 */;
import ConjureIdeasTip from "ConjureIdeasTip" /* 12163 */;
import size from "module_2" /* 2 */;

const items = [ConjureLiveBehindTip.CONJURE_LIVE_BEHIND_TIP, ConjureIdeasIntroTip.CONJURE_IDEAS_INTRO_TIP, ConjureIdeasTip.CONJURE_IDEAS_TIP];
const result = size.fileFinishedImporting("modules/conjure/tips/native/conjureTips.tsx");

export const CONJURE_TIPS = items;
