// Module ID: 6349
// Function ID: 6350
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4734, 6350, 6351, 6352, 6353, 6356, 6357, 6358]

// Module 6349 (V6OrEarlierAPIError)
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4734 */;
import APIErrorDefault from "APIError" /* 6350 */;
import BillingErrorDefault from "BillingError" /* 6351 */;
import StripeErrorDefault from "StripeError" /* 6352 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6353 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6356 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6357 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6358 */;
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
