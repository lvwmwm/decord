// Module ID: 16886
// Function ID: 16887
// Name: SafetyHubAccountStandingLabels
// Dependencies: [8111, 1113, 2]

// Module 16886 (SafetyHubAccountStandingLabels)
import intl from "intl" /* 1113 */;
import SafetyHubModels from "SafetyHubModels" /* 8111 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[SafetyHubModels.AccountStandingState.ALL_GOOD] = intl.t["/Idfao"];
obj[SafetyHubModels.AccountStandingState.LIMITED] = intl.t.umleq4;
obj[SafetyHubModels.AccountStandingState.VERY_LIMITED] = intl.t.WBtMHf;
obj[SafetyHubModels.AccountStandingState.AT_RISK] = intl.t["7f+4Lg"];
obj[SafetyHubModels.AccountStandingState.SUSPENDED] = intl.t["0OONGB"];
const result = size.fileFinishedImporting("modules/safety_hub/SafetyHubAccountStandingLabels.tsx");

export const ACCOUNT_STANDING_SHORT_STATUS = obj;
