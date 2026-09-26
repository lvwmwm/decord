// Module ID: 4688
// Function ID: 4689
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4469, 4689, 4468, 4690, 4691, 4693, 4694, 4695]

// Module 4688 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4468 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4469 */;
import APIErrorDefault from "APIError" /* 4689 */;
import StripeErrorDefault from "StripeError" /* 4690 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 4691 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 4693 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 4694 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 4695 */;
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
