// Module ID: 5851
// Function ID: 5852
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4848, 5852, 4847, 5853, 5854, 5857, 5858, 5859]

// Module 5851 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4847 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4848 */;
import APIErrorDefault from "APIError" /* 5852 */;
import StripeErrorDefault from "StripeError" /* 5853 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5854 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5857 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5858 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5859 */;
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
