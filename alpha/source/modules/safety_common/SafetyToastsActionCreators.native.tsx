// Module ID: 7496
// Function ID: 7497
// Name: SafetyToastsActionCreators
// Dependencies: [7490, 5711, 7495, 2]

// Module 7496 (SafetyToastsActionCreators)
import ToastUtils from "ToastUtils" /* 5711 */;
import Constants from "Constants" /* 7490 */;
import SafetyToastsUtils from "SafetyToastsUtils" /* 7495 */;
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
  showFailedToast(TIGGER_PAWTECT_ERROR) {
    let GENERIC_ERROR = TIGGER_PAWTECT_ERROR;
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const getSafetyToastTypeContent = SafetyToastsUtils.getSafetyToastTypeContent;
    SafetyToastsUtils;
    if (TIGGER_PAWTECT_ERROR == null) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    presentFailedToast(getSafetyToastTypeContent(GENERIC_ERROR));
  }
};
const result = size.fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default obj;
