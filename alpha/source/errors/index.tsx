// Module ID: 6694
// Function ID: 6695
// Name: V6OrEarlierAPIError
// Dependencies: [2, 5064, 6695, 5063, 6696, 6697, 6700, 6701, 6702]

// Module 6694 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 5063 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 5064 */;
import APIErrorDefault from "APIError" /* 6695 */;
import StripeErrorDefault from "StripeError" /* 6696 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6697 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6700 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6701 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6702 */;
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
