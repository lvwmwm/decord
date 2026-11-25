// Module ID: 5761
// Function ID: 5762
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4833, 5762, 5763, 5764, 5765, 5768, 5769, 5770]

// Module 5761 (V6OrEarlierAPIError)
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4833 */;
import APIErrorDefault from "APIError" /* 5762 */;
import BillingErrorDefault from "BillingError" /* 5763 */;
import StripeErrorDefault from "StripeError" /* 5764 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5765 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5768 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5769 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5770 */;
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
