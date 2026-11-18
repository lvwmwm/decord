// Module ID: 6257
// Function ID: 6258
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4644, 6258, 4643, 6259, 6260, 6263, 6264, 6265]

// Module 6257 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4643 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4644 */;
import APIErrorDefault from "APIError" /* 6258 */;
import StripeErrorDefault from "StripeError" /* 6259 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6260 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6263 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6264 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6265 */;
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
