// Module ID: 6755
// Function ID: 6756
// Name: V6OrEarlierAPIError
// Dependencies: [2, 5131, 6756, 5130, 6757, 6758, 6761, 6762, 6763]

// Module 6755 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 5130 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 5131 */;
import APIErrorDefault from "APIError" /* 6756 */;
import StripeErrorDefault from "StripeError" /* 6757 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6758 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6761 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6762 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6763 */;
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
