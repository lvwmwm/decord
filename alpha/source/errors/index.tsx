// Module ID: 5635
// Function ID: 5636
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4792, 5636, 4791, 5637, 5638, 5641, 5642, 5643]

// Module 5635 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4791 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4792 */;
import APIErrorDefault from "APIError" /* 5636 */;
import StripeErrorDefault from "StripeError" /* 5637 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5638 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5641 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5642 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5643 */;
import size from "module_2" /* 2 */;

const UploadVoiceDebugLogsErrorDefault = UploadVoiceDebugLogsError;

const result = size.fileFinishedImporting("errors/index.tsx");
const UploadVoiceDebugLogsError_export = UploadVoiceDebugLogsErrorDefault;

export const V6OrEarlierAPIError = errors_V6OrEarlierAPIErrorDefault;
export const APIError = APIErrorDefault;
export const BillingError = BillingErrorDefault;
export const StripeError = StripeErrorDefault;
export const NativeDispatchError = NativeDispatchErrorDefault;
export const AppliedGuildBoostError = AppliedGuildBoostErrorDefault;
export const ClientOutdatedAcceptGiftError = ClientOutdatedAcceptGiftErrorDefault;
export { UploadVoiceDebugLogsError_export as UploadVoiceDebugLogsError };
export const UploadErrorCodes = UploadVoiceDebugLogsError.UploadErrorCodes;
