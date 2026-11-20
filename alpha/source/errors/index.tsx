// Module ID: 6230
// Function ID: 6231
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4615, 6231, 6232, 6233, 6234, 6237, 6238, 6239]

// Module 6230 (V6OrEarlierAPIError)
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4615 */;
import APIErrorDefault from "APIError" /* 6231 */;
import BillingErrorDefault from "BillingError" /* 6232 */;
import StripeErrorDefault from "StripeError" /* 6233 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6234 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6237 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6238 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6239 */;
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
