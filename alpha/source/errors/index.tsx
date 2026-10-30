// Module ID: 6440
// Function ID: 6441
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4830, 6441, 4829, 6442, 6443, 6446, 6447, 6448]

// Module 6440 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4829 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4830 */;
import APIErrorDefault from "APIError" /* 6441 */;
import StripeErrorDefault from "StripeError" /* 6442 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6443 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6446 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6447 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6448 */;
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
