// Module ID: 5666
// Function ID: 5667
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4738, 5667, 5668, 5669, 5670, 5673, 5674, 5675]

// Module 5666 (V6OrEarlierAPIError)
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4738 */;
import APIErrorDefault from "APIError" /* 5667 */;
import BillingErrorDefault from "BillingError" /* 5668 */;
import StripeErrorDefault from "StripeError" /* 5669 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 5670 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 5673 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 5674 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 5675 */;
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
