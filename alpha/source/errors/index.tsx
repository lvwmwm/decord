// Module ID: 6360
// Function ID: 6361
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4793, 6361, 4792, 6362, 6363, 6366, 6367, 6368]

// Module 6360 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4792 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4793 */;
import APIErrorDefault from "APIError" /* 6361 */;
import StripeErrorDefault from "StripeError" /* 6362 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6363 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6366 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6367 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6368 */;
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
