// Module ID: 6579
// Function ID: 6580
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4961, 6580, 4960, 6581, 6582, 6585, 6586, 6587]

// Module 6579 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4960 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4961 */;
import APIErrorDefault from "APIError" /* 6580 */;
import StripeErrorDefault from "StripeError" /* 6581 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6582 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6585 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6586 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6587 */;
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
