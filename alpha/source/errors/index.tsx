// Module ID: 6409
// Function ID: 6410
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4828, 6410, 4827, 6411, 6412, 6415, 6416, 6417]

// Module 6409 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4827 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4828 */;
import APIErrorDefault from "APIError" /* 6410 */;
import StripeErrorDefault from "StripeError" /* 6411 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6412 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6415 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6416 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6417 */;
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
