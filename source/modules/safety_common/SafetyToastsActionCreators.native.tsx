// Module ID: 7488
// Function ID: 60100
// Dependencies: [7483, 3830, 7489, 2]

// Module 7488
import { SafetyToastType } from "SafetyToastType";

const result = require("getSafetyToastTypeContent").fileFinishedImporting("modules/safety_common/SafetyToastsActionCreators.native.tsx");

export default {
  showIgnoreSuccessToast(closure_0, closure_1) {
    const obj = require(3830) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.IGNORE_SUCCESS, require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.IGNORE_SUCCESS, closure_0, closure_1));
  },
  showUnignoreSuccessToast(closure_0, closure_1) {
    const obj = require(3830) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNIGNORE_SUCCESS, require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNIGNORE_SUCCESS, closure_0, closure_1));
  },
  showBlockSuccessToast(outer1_0, outer1_1) {
    const obj = require(3830) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.BLOCK_SUCCESS, require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.BLOCK_SUCCESS, outer1_0, outer1_1));
  },
  showUnblockSuccessToast(outer1_3, id) {
    const obj = require(3830) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNBLOCK_SUCCESS, require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNBLOCK_SUCCESS, outer1_3, id));
  },
  showMuteSuccessToast(id, channelId) {
    const obj = require(3830) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.MUTE_SUCCESS, require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.MUTE_SUCCESS, id, channelId));
  },
  showUnmuteSuccessToast(id, channelId) {
    const obj = require(3830) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.UNMUTE_SUCCESS, require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.UNMUTE_SUCCESS, id, channelId));
  },
  showReportSuccessToast(id, channelId) {
    const obj = require(3830) /* presentAddedFriendToast */;
    obj.showSafetySuccess(SafetyToastType.REPORT_SUCCESS, require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(SafetyToastType.REPORT_SUCCESS, id, channelId));
  },
  showSuccessToast(REPORT_TO_MOD_SUCCESS) {
    const obj = require(3830) /* presentAddedFriendToast */;
    obj.showSafetySuccess(REPORT_TO_MOD_SUCCESS, require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(REPORT_TO_MOD_SUCCESS));
  },
  showFailedToast(GENERIC_ERROR) {
    const obj = require(3830) /* presentAddedFriendToast */;
    if (null == GENERIC_ERROR) {
      GENERIC_ERROR = SafetyToastType.GENERIC_ERROR;
    }
    obj.presentFailedToast(require(7489) /* getSafetyToastTypeContent */.getSafetyToastTypeContent(GENERIC_ERROR));
  }
};
