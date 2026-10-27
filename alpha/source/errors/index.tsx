// Module ID: 6375
// Function ID: 6376
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4796, 6376, 4795, 6377, 6378, 6381, 6382, 6383]

// Module 6375 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4795 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4796 */;
import APIErrorDefault from "APIError" /* 6376 */;
import StripeErrorDefault from "StripeError" /* 6377 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6378 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6381 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6382 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6383 */;
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
