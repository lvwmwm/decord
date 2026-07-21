// Module ID: 7483
// Function ID: 60055
// Dependencies: []

// Module 7483
const SafetyToastType = require(dependencyMap[0]).SafetyToastType;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default {
  showIgnoreSuccessToast(id, channelId) {
    const obj = require(dependencyMap[1]);
    obj.showSafetySuccess(SafetyToastType.IGNORE_SUCCESS, require(dependencyMap[2]).getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, id, channelId));
  },
  showUnignoreSuccessToast(id, channelId) {
    const obj = require(dependencyMap[1]);
    obj.showSafetySuccess(SafetyToastType.UNIGNORE_SUCCESS, require(dependencyMap[2]).getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, id, channelId));
  },
  showBlockSuccessToast(closure_0, closure_1) {
    const obj = require(dependencyMap[1]);
    obj.showSafetySuccess(SafetyToastType.BLOCK_SUCCESS, require(dependencyMap[2]).getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, closure_0, closure_1));
  },
  showUnblockSuccessToast(closure_3, id) {
    const obj = require(dependencyMap[1]);
    obj.showSafetySuccess(SafetyToastType.UNBLOCK_SUCCESS, require(dependencyMap[2]).getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, closure_3, id));
  },
  showMuteSuccessToast(id, channelId) {
    const obj = require(dependencyMap[1]);
    obj.showSafetySuccess(SafetyToastType.MUTE_SUCCESS, require(dependencyMap[2]).getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId));
  },
  showUnmuteSuccessToast(id, channelId) {
    const obj = require(dependencyMap[1]);
    obj.showSafetySuccess(SafetyToastType.UNMUTE_SUCCESS, require(dependencyMap[2]).getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, id, channelId));
  },
  showReportSuccessToast(id, channelId) {
    const obj = require(dependencyMap[1]);
    obj.showSafetySuccess(SafetyToastType.REPORT_SUCCESS, require(dependencyMap[2]).getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, id, channelId));
  },
  showSuccessToast(REPORT_TO_MOD_SUCCESS) {
    const obj = require(dependencyMap[1]);
    obj.showSafetySuccess(REPORT_TO_MOD_SUCCESS, require(dependencyMap[2]).getSafetyToastTypeContent(REPORT_TO_MOD_SUCCESS));
  },
  showFailedToast(GENERIC_ERROR) {
    const obj = require(dependencyMap[1]);
    if (null == GENERIC_ERROR) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    obj.presentFailedToast(require(dependencyMap[2]).getSafetyToastTypeContent(GENERIC_ERROR));
  }
};
