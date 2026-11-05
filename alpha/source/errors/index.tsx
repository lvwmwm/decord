// Module ID: 6584
// Function ID: 6585
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4964, 6585, 4963, 6586, 6587, 6590, 6591, 6592]

// Module 6584 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4963 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4964 */;
import APIErrorDefault from "APIError" /* 6585 */;
import StripeErrorDefault from "StripeError" /* 6586 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6587 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6590 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6591 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6592 */;
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
