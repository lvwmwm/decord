// Module ID: 6433
// Function ID: 6434
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4829, 6434, 4828, 6435, 6436, 6439, 6440, 6441]

// Module 6433 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4828 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4829 */;
import APIErrorDefault from "APIError" /* 6434 */;
import StripeErrorDefault from "StripeError" /* 6435 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6436 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6439 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6440 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6441 */;
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
