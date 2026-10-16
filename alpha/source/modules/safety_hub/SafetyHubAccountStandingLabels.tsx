// Module ID: 15703
// Function ID: 15704
// Name: SafetyHubAccountStandingLabels
// Dependencies: [7733, 1128, 2]

// Module 15703 (SafetyHubAccountStandingLabels)
import intl from "intl" /* 1128 */;
import SafetyHubModels from "SafetyHubModels" /* 7733 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[SafetyHubModels.AccountStandingState.ALL_GOOD] = intl.t["/Idfao"];
obj[SafetyHubModels.AccountStandingState.LIMITED] = intl.t.umleq4;
obj[SafetyHubModels.AccountStandingState.VERY_LIMITED] = intl.t.WBtMHf;
obj[SafetyHubModels.AccountStandingState.AT_RISK] = intl.t["7f+4Lg"];
obj[SafetyHubModels.AccountStandingState.SUSPENDED] = intl.t["0OONGB"];
const result = size.fileFinishedImporting("modules/safety_hub/SafetyHubAccountStandingLabels.tsx");

export const ACCOUNT_STANDING_SHORT_STATUS = obj;
