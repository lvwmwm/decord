// Module ID: 6331
// Function ID: 6332
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4772, 6332, 4771, 6333, 6334, 6337, 6338, 6339]

// Module 6331 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4771 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4772 */;
import APIErrorDefault from "APIError" /* 6332 */;
import StripeErrorDefault from "StripeError" /* 6333 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6334 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6337 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6338 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6339 */;
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
