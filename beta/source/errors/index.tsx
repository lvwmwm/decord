// Module ID: 6611
// Function ID: 6612
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4991, 6612, 4990, 6613, 6614, 6617, 6618, 6619]

// Module 6611 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4990 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4991 */;
import APIErrorDefault from "APIError" /* 6612 */;
import StripeErrorDefault from "StripeError" /* 6613 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6614 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6617 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6618 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6619 */;
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
