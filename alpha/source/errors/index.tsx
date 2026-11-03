// Module ID: 6566
// Function ID: 6567
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4962, 6567, 4961, 6568, 6569, 6572, 6573, 6574]

// Module 6566 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4961 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4962 */;
import APIErrorDefault from "APIError" /* 6567 */;
import StripeErrorDefault from "StripeError" /* 6568 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6569 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6572 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6573 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6574 */;
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
