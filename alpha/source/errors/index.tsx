// Module ID: 5632
// Function ID: 5633
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4751, 5633, 4750, 5634, 5635, 5638, 5639, 5640]

// Module 5632 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4750 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4751 */;
import APIErrorDefault from "APIError" /* 5633 */;
import StripeErrorDefault from "StripeError" /* 5634 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5635 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5638 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5639 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5640 */;
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
