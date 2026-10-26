// Module ID: 6374
// Function ID: 6375
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4795, 6375, 4794, 6376, 6377, 6380, 6381, 6382]

// Module 6374 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4794 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4795 */;
import APIErrorDefault from "APIError" /* 6375 */;
import StripeErrorDefault from "StripeError" /* 6376 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6377 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6380 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6381 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6382 */;
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
