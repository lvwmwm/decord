// Module ID: 6406
// Function ID: 6407
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4827, 6407, 4826, 6408, 6409, 6412, 6413, 6414]

// Module 6406 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4826 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4827 */;
import APIErrorDefault from "APIError" /* 6407 */;
import StripeErrorDefault from "StripeError" /* 6408 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6409 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6412 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6413 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6414 */;
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
