// Module ID: 5631
// Function ID: 5632
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4749, 5632, 4748, 5633, 5634, 5637, 5638, 5639]

// Module 5631 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4748 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4749 */;
import APIErrorDefault from "APIError" /* 5632 */;
import StripeErrorDefault from "StripeError" /* 5633 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5634 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5637 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5638 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5639 */;
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
