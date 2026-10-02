// Module ID: 4737
// Function ID: 4738
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4514, 4738, 4513, 4739, 4740, 4742, 4743, 4744]

// Module 4737 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4513 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4514 */;
import APIErrorDefault from "APIError" /* 4738 */;
import StripeErrorDefault from "StripeError" /* 4739 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 4740 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 4742 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 4743 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 4744 */;
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
