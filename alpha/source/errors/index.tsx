// Module ID: 5891
// Function ID: 5892
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4887, 5892, 4886, 5893, 5894, 5897, 5898, 5899]

// Module 5891 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4886 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4887 */;
import APIErrorDefault from "APIError" /* 5892 */;
import StripeErrorDefault from "StripeError" /* 5893 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5894 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5897 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5898 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5899 */;
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
