// Module ID: 7591
// Function ID: 7592
// Name: SafetyToastsActionCreators
// Dependencies: [7577, 5866, 7590, 2]

// Module 7591 (SafetyToastsActionCreators)
import ToastUtils from "ToastUtils" /* 5866 */;
import Constants from "Constants" /* 7577 */;
import SafetyToastsUtils from "SafetyToastsUtils" /* 7590 */;
import size from "module_2" /* 2 */;

const SafetyToastType = Constants.SafetyToastType;
let obj = {
  showIgnoreSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const IGNORE_SUCCESS = SafetyToastType.IGNORE_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(IGNORE_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, id, channelId));
  },
  showUnignoreSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const UNIGNORE_SUCCESS = SafetyToastType.UNIGNORE_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(UNIGNORE_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, id, channelId));
  },
  showBlockSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const BLOCK_SUCCESS = SafetyToastType.BLOCK_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(BLOCK_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, id, channelId));
  },
  showUnblockSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const UNBLOCK_SUCCESS = SafetyToastType.UNBLOCK_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(UNBLOCK_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, id, channelId));
  },
  showMuteSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const MUTE_SUCCESS = SafetyToastType.MUTE_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(MUTE_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId));
  },
  showUnmuteSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const UNMUTE_SUCCESS = SafetyToastType.UNMUTE_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(UNMUTE_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, id, channelId));
  },
  showReportSuccessToast(id, channelId) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    const REPORT_SUCCESS = SafetyToastType.REPORT_SUCCESS;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(REPORT_SUCCESS, obj.getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, id, channelId));
  },
  showSuccessToast(REPORT_TO_MOD_SUCCESS) {
    const showSafetySuccess = ToastUtils.showSafetySuccess;
    ToastUtils;
    const obj = SafetyToastsUtils;
    showSafetySuccess(REPORT_TO_MOD_SUCCESS, obj.getSafetyToastTypeContent(REPORT_TO_MOD_SUCCESS));
  },
  showFailedToast(AGE_VERIFICATION_ERROR) {
    let GENERIC_ERROR = AGE_VERIFICATION_ERROR;
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const getSafetyToastTypeContent = SafetyToastsUtils.getSafetyToastTypeContent;
    SafetyToastsUtils;
    if (AGE_VERIFICATION_ERROR == null) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    presentFailedToast(getSafetyToastTypeContent(GENERIC_ERROR));
  }
};
const result = size.fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default obj;
