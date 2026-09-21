// Module ID: 4659
// Function ID: 4660
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4441, 4660, 4440, 4661, 4662, 4664, 4665, 4666]

// Module 4659 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4440 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4441 */;
import APIErrorDefault from "APIError" /* 4660 */;
import StripeErrorDefault from "StripeError" /* 4661 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 4662 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 4664 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 4665 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 4666 */;
import size from "module_2" /* 2 */;

const UploadVoiceDebugLogsErrorDefault = UploadVoiceDebugLogsError;

const result = size.fileFinishedImporting("errors/index.tsx");

export const V6OrEarlierAPIError = errors_V6OrEarlierAPIErrorDefault;
export const APIError = APIErrorDefault;
export const BillingError = BillingErrorDefault;
export const StripeError = StripeErrorDefault;
export const NativeDispatchError = NativeDispatchErrorDefault;
export const AppliedGuildBoostError = AppliedGuildBoostErrorDefault;
export const ClientOutdatedAcceptGiftError = ClientOutdatedAcceptGiftErrorDefault;
export const UploadVoiceDebugLogsError = UploadVoiceDebugLogsErrorDefault;
export const UploadErrorCodes = UploadVoiceDebugLogsError.UploadErrorCodes;
