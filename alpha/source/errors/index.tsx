// Module ID: 6446
// Function ID: 6447
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4835, 6447, 4834, 6448, 6449, 6452, 6453, 6454]

// Module 6446 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4834 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4835 */;
import APIErrorDefault from "APIError" /* 6447 */;
import StripeErrorDefault from "StripeError" /* 6448 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6449 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6452 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6453 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6454 */;
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
