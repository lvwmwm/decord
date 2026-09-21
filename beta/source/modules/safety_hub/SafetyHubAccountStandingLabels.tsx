// Module ID: 15030
// Function ID: 15031
// Name: SafetyHubAccountStandingLabels
// Dependencies: [8697, 1119, 2]

// Module 15030 (SafetyHubAccountStandingLabels)
import util from "util" /* 1119 */;
import SafetyHubModels from "SafetyHubModels" /* 8697 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[SafetyHubModels.AccountStandingState.ALL_GOOD] = util.t["/Idfao"];
obj[SafetyHubModels.AccountStandingState.LIMITED] = util.t.umleq4;
obj[SafetyHubModels.AccountStandingState.VERY_LIMITED] = util.t.WBtMHf;
obj[SafetyHubModels.AccountStandingState.AT_RISK] = util.t["7f+4Lg"];
obj[SafetyHubModels.AccountStandingState.SUSPENDED] = util.t["0OONGB"];
const result = size.fileFinishedImporting("modules/safety_hub/SafetyHubAccountStandingLabels.tsx");

export const ACCOUNT_STANDING_SHORT_STATUS = obj;
