// Module ID: 1195
// Function ID: 1196
// Name: UnsyncedUserSettingsStore
// Dependencies: [109, 1196, 1082, 1072, 1229, 1230, 1231, 504, 510, 12, 572, 2]

// Module 1195 (UnsyncedUserSettingsStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import StageAudienceSidebarConstants from "StageAudienceSidebarConstants" /* 1230 */;
import getSystemThemeDefault from "getSystemTheme" /* 1231 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let CHANNEL_SIDEBAR_WIDTH;
let metroImportDefault;
let closure_3 = ["allowConjurePictureInPictureOnNavigateAway", "allowVibegrationsPictureInPictureOnNavigateAway"];
const SystemThemeState = ThemeConstants.SystemThemeState;
const ListDensityMode = UserSettingsConstants.ListDensityMode;
({ DEFAULT_CHAT_SIDEBAR_WIDTH: metroImportDefault, CHANNEL_SIDEBAR_WIDTH } = Constants);
const DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH = Constants.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
const ExpressionPickerWidths = ExpressionPickerConstants.ExpressionPickerWidths;
let closure_11 = StageAudienceSidebarConstants.STAGE_AUDIENCE_SIDEBAR_DEFAULT_WIDTH;
let obj = { DATA_SAVER: "data_saver", STANDARD: "standard", BEST: "best" };
let closure_12 = (window.innerWidth - CHANNEL_SIDEBAR_WIDTH) / 2;
const STANDARD = obj.STANDARD;
let closure_14 = null;
let closure_15 = {};
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class UnsyncedUserSettingsStore extends DeviceSettingsStore {
  initialize(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    closure_15 = obj;
    const useSystemTheme = obj.useSystemTheme;
    if (null != useSystemTheme) {
      let UNSET;
      if (null != getSystemThemeDefault()) {
        UNSET = useSystemTheme;
        if (typeof useSystemTheme === "boolean") {
          UNSET = useSystemTheme ? tmp6.ON : tmp6.OFF;
        }
      }
      obj.useSystemTheme = UNSET;
      let lowQualityImageMode = closure_15.dataSavingMode;
      const tmp3 = closure_15;
      if (lowQualityImageMode == null) {
        lowQualityImageMode = closure_15.lowQualityImageMode;
      }
      tmp3.dataSavingMode = lowQualityImageMode;
      let str = closure_15.hdrDynamicRange;
      const tmp5 = closure_15;
      if (str == null) {
        str = "no-limit";
      }
      tmp5.hdrDynamicRange = str;
    }
    UNSET = SystemThemeState.UNSET;
  }
  getUserAgnosticState() {
    return closure_15;
  }
  isVisualRefreshDisabled(arg0) {
    let disableVisualRefresh = closure_15.disableVisualRefresh;
    if (disableVisualRefresh == null) {
      disableVisualRefresh = arg0;
    }
    return disableVisualRefresh;
  }
}
const prototype = UnsyncedUserSettingsStore.prototype;
Object.defineProperty(prototype, "lowQualityImageMode", {
  get: function lowQualityImageMode() {
    let flag = closure_15.lowQualityImageMode;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoUploadQuality", {
  get: function videoUploadQuality() {
    let videoUploadQuality = closure_15.videoUploadQuality;
    if (videoUploadQuality == null) {
      videoUploadQuality = STANDARD;
    }
    return videoUploadQuality;
  },
  set: undefined
});
Object.defineProperty(prototype, "dataSavingMode", {
  get: function dataSavingMode() {
    let flag = closure_15.dataSavingMode;
    if (flag == null) {
      flag = closure_15.lowQualityImageMode;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "expressionPickerWidth", {
  get: function expressionPickerWidth() {
    let MIN = closure_15.expressionPickerWidth;
    if (MIN == null) {
      MIN = ExpressionPickerWidths.MIN;
    }
    return MIN;
  },
  set: undefined
});
Object.defineProperty(prototype, "messageRequestSidebarWidth", {
  get: function messageRequestSidebarWidth() {
    let messageRequestSidebarWidth = closure_15.messageRequestSidebarWidth;
    if (messageRequestSidebarWidth == null) {
      messageRequestSidebarWidth = DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
    }
    return messageRequestSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "threadSidebarWidth", {
  get: function threadSidebarWidth() {
    let threadSidebarWidth = closure_15.threadSidebarWidth;
    if (threadSidebarWidth == null) {
      threadSidebarWidth = metroImportDefault;
    }
    return threadSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "postSidebarWidth", {
  get: function postSidebarWidth() {
    let postSidebarWidth = closure_15.postSidebarWidth;
    if (postSidebarWidth == null) {
      postSidebarWidth = closure_12;
    }
    return postSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "callChatSidebarWidth", {
  get: function callChatSidebarWidth() {
    let callChatSidebarWidth = closure_15.callChatSidebarWidth;
    if (callChatSidebarWidth == null) {
      callChatSidebarWidth = metroImportDefault;
    }
    return callChatSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "stageAudienceSidebarWidth", {
  get: function stageAudienceSidebarWidth() {
    let stageAudienceSidebarWidth = closure_15.stageAudienceSidebarWidth;
    if (stageAudienceSidebarWidth == null) {
      stageAudienceSidebarWidth = closure_11;
    }
    return stageAudienceSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "homeSidebarWidth", {
  get: function homeSidebarWidth() {
    let homeSidebarWidth = closure_15.homeSidebarWidth;
    if (homeSidebarWidth == null) {
      if (null == closure_14) {
        const _Math = Math;
        const _window = window;
        closure_14 = Math.max(0.4 * (window.innerWidth - CHANNEL_SIDEBAR_WIDTH), metroImportDefault);
      }
      homeSidebarWidth = closure_14;
    }
    return homeSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "callHeaderHeight", {
  get: function callHeaderHeight() {
    return closure_15.callHeaderHeight;
  },
  set: undefined
});
Object.defineProperty(prototype, "useSystemTheme", {
  get: function useSystemTheme() {
    let UNSET = closure_15.useSystemTheme;
    if (UNSET == null) {
      UNSET = SystemThemeState.UNSET;
    }
    return UNSET;
  },
  set: undefined
});
Object.defineProperty(prototype, "activityPanelHeight", {
  get: function activityPanelHeight() {
    return closure_15.activityPanelHeight;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableVoiceChannelChangeAlert", {
  get: function disableVoiceChannelChangeAlert() {
    let flag = closure_15.disableVoiceChannelChangeAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableEmbeddedActivityPopOutAlert", {
  get: function disableEmbeddedActivityPopOutAlert() {
    let flag = closure_15.disableEmbeddedActivityPopOutAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableActivityHardwareAccelerationPrompt", {
  get: function disableActivityHardwareAccelerationPrompt() {
    let flag = closure_15.disableActivityHardwareAccelerationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableInviteWithTextChannelActivityLaunch", {
  get: function disableInviteWithTextChannelActivityLaunch() {
    let flag = closure_15.disableInviteWithTextChannelActivityLaunch;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableHideSelfStreamAndVideoConfirmationAlert", {
  get: function disableHideSelfStreamAndVideoConfirmationAlert() {
    let flag = closure_15.disableHideSelfStreamAndVideoConfirmationAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "pushUpsellUserSettingsDismissed", {
  get: function pushUpsellUserSettingsDismissed() {
    let flag = closure_15.pushUpsellDismissed;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableActivityHostLeftNitroUpsell", {
  get: function disableActivityHostLeftNitroUpsell() {
    let flag = closure_15.disableActivityHostLeftNitroUpsell;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableCallUserConfirmationPrompt", {
  get: function disableCallUserConfirmationPrompt() {
    let flag = closure_15.disableCallUserConfirmationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableApplicationSubscriptionCancellationSurvey", {
  get: function disableApplicationSubscriptionCancellationSurvey() {
    let flag = closure_15.disableApplicationSubscriptionCancellationSurvey;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "allowConjureRunInBackground", {
  get: function allowConjureRunInBackground() {
    let flag = closure_15.allowConjureRunInBackground;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "darkSidebar", {
  get: function darkSidebar() {
    let flag = closure_15.darkSidebar;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "saveCameraUploadsToDevice", {
  get: function saveCameraUploadsToDevice() {
    let flag = closure_15.saveCameraUploadsToDevice;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "listDensity", {
  get: function listDensity() {
    let COZY = closure_15.listDensity;
    if (COZY == null) {
      COZY = ListDensityMode.COZY;
    }
    return COZY;
  },
  set: undefined
});
Object.defineProperty(prototype, "hdrDynamicRange", {
  get: function hdrDynamicRange() {
    let str = closure_15.hdrDynamicRange;
    if (str == null) {
      str = "no-limit";
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(prototype, "pauseSelfStreamPreviewWhenUnfocused", {
  get: function pauseSelfStreamPreviewWhenUnfocused() {
    let flag = closure_15.pauseSelfStreamPreviewWhenUnfocused;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoBackground", {
  get: function videoBackground() {
    let videoBackground = closure_15.videoBackground;
    if (videoBackground == null) {
      videoBackground = null;
    }
    return videoBackground;
  },
  set: undefined
});
UnsyncedUserSettingsStore.displayName = "UnsyncedUserSettingsStore";
UnsyncedUserSettingsStore.persistKey = "UnsyncedUserSettingsStore";
const items = [
  () => {
    const Storage = Storage3.Storage;
    const value = Storage.get("UserSettingsStore");
    const Storage2 = Storage3.Storage;
    Storage2.remove("UserSettingsStore");
    const obj = _modDef12;
    return obj.pick(value, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations");
  },
  (arg0) => {
    delete arg0["disableVisualRefresh"];
  },
  (allowConjurePictureInPictureOnNavigateAway) => {
    if (null == allowConjurePictureInPictureOnNavigateAway) {
      return allowConjurePictureInPictureOnNavigateAway;
    } else {
      allowConjurePictureInPictureOnNavigateAway = allowConjurePictureInPictureOnNavigateAway.allowConjurePictureInPictureOnNavigateAway;
      const allowVibegrationsPictureInPictureOnNavigateAway = allowConjurePictureInPictureOnNavigateAway.allowVibegrationsPictureInPictureOnNavigateAway;
      const tmp3 = _objectWithoutProperties(allowConjurePictureInPictureOnNavigateAway, closure_3);
      if (allowConjurePictureInPictureOnNavigateAway == null) {
        allowConjurePictureInPictureOnNavigateAway = allowVibegrationsPictureInPictureOnNavigateAway;
      }
      const tmp4 = null != allowConjurePictureInPictureOnNavigateAway && null == tmp3.allowConjureRunInBackground;
      if (tmp4) {
        tmp3.allowConjureRunInBackground = allowConjurePictureInPictureOnNavigateAway;
      }
      return tmp3;
    }
  }
];
UnsyncedUserSettingsStore.migrations = items;
const obj2 = {
  UNSYNCED_USER_SETTINGS_UPDATE: function handleUnsyncedUserSettingsUpdate(settings) {
    const obj = {};
    const merged = Object.assign(closure_15);
    const merged1 = Object.assign(settings.settings);
    closure_15 = obj;
  },
  LOGOUT: function handleLogOut() {
    const obj = { useSystemTheme: closure_15.useSystemTheme };
    closure_15 = obj;
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    if (null == closure_15) {
      closure_15 = {};
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess() {
    closure_15.useSystemTheme = SystemThemeState.ON;
  }
};
const unsyncedUserSettingsStore = new UnsyncedUserSettingsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/user_settings/UnsyncedUserSettingsStore.tsx");

export default unsyncedUserSettingsStore;
export const VideoQualitySettings = obj;
export const VideoCompressionQuality = { VERY_LOW: "very_low", LOW: "low", MEDIUM: "medium", HIGH: "high", VERY_HIGH: "very_high" };
