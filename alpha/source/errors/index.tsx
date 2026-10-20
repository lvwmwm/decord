// Module ID: 6328
// Function ID: 6329
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4772, 6329, 4771, 6330, 6331, 6334, 6335, 6336]

// Module 6328 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4771 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4772 */;
import APIErrorDefault from "APIError" /* 6329 */;
import StripeErrorDefault from "StripeError" /* 6330 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6331 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6334 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6335 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6336 */;
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
