// Module ID: 6372
// Function ID: 6373
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4793, 6373, 4792, 6374, 6375, 6378, 6379, 6380]

// Module 6372 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4792 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4793 */;
import APIErrorDefault from "APIError" /* 6373 */;
import StripeErrorDefault from "StripeError" /* 6374 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6375 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6378 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6379 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6380 */;
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
