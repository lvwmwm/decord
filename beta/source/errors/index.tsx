// Module ID: 5312
// Function ID: 5313
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4551, 5313, 4550, 5314, 5315, 5318, 5319, 5320]

// Module 5312 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4550 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4551 */;
import APIErrorDefault from "APIError" /* 5313 */;
import StripeErrorDefault from "StripeError" /* 5314 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5315 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5318 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5319 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5320 */;
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
