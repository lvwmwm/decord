// Module ID: 6757
// Function ID: 6758
// Name: V6OrEarlierAPIError
// Dependencies: [2, 5127, 6758, 5126, 6759, 6760, 6763, 6764, 6765]

// Module 6757 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 5126 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 5127 */;
import APIErrorDefault from "APIError" /* 6758 */;
import StripeErrorDefault from "StripeError" /* 6759 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6760 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6763 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6764 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6765 */;
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
