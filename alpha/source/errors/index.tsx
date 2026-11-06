// Module ID: 6604
// Function ID: 6605
// Name: V6OrEarlierAPIError
// Dependencies: [2, 4991, 6605, 4990, 6606, 6607, 6610, 6611, 6612]

// Module 6604 (V6OrEarlierAPIError)
import BillingErrorDefault from "BillingError" /* 4990 */;
import errors_V6OrEarlierAPIErrorDefault from "errors/V6OrEarlierAPIError" /* 4991 */;
import APIErrorDefault from "APIError" /* 6605 */;
import StripeErrorDefault from "StripeError" /* 6606 */;
import NativeDispatchErrorDefault from "NativeDispatchError" /* 6607 */;
import AppliedGuildBoostErrorDefault from "AppliedGuildBoostError" /* 6610 */;
import ClientOutdatedAcceptGiftErrorDefault from "ClientOutdatedAcceptGiftError" /* 6611 */;
import UploadVoiceDebugLogsError from "UploadVoiceDebugLogsError" /* 6612 */;
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
