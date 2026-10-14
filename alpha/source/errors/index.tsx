// Module ID: 5640
// Function ID: 5641
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4794, 5641, 4793, 5642, 5643, 5646, 5647, 5648]

// Module 5640 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4793 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4794 */;
import APIErrorDefault from "APIError" /* 5641 */;
import StripeErrorDefault from "StripeError" /* 5642 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5643 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5646 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5647 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5648 */;
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
