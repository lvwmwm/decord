// Module ID: 1207
// Function ID: 1208
// Name: UnsyncedUserSettingsStore
// Dependencies: [1208, 1095, 1085, 1241, 1242, 1243, 504, 510, 12, 584, 2]

// Module 1207 (UnsyncedUserSettingsStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import ThemeConstants from "ThemeConstants" /* 1208 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1241 */;
import StageAudienceSidebarConstants from "StageAudienceSidebarConstants" /* 1242 */;
import getSystemThemeDefault from "getSystemTheme" /* 1243 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_13;

let CHANNEL_SIDEBAR_WIDTH;
let hasOwnProperty;
const SystemThemeState = ThemeConstants.SystemThemeState;
const ListDensityMode = UserSettingsConstants.ListDensityMode;
({ DEFAULT_CHAT_SIDEBAR_WIDTH: hasOwnProperty, CHANNEL_SIDEBAR_WIDTH } = Constants);
const DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH = Constants.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
const ExpressionPickerWidths = ExpressionPickerConstants.ExpressionPickerWidths;
let closure_9 = StageAudienceSidebarConstants.STAGE_AUDIENCE_SIDEBAR_DEFAULT_WIDTH;
let obj = { DATA_SAVER: "data_saver", STANDARD: "standard", BEST: "best" };
let closure_10 = (window.innerWidth - CHANNEL_SIDEBAR_WIDTH) / 2;
const STANDARD = obj.STANDARD;
let closure_12 = null;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class UnsyncedUserSettingsStore extends DeviceSettingsStore {
  initialize(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    closure_13 = obj;
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
      let lowQualityImageMode = closure_13.dataSavingMode;
      const tmp3 = closure_13;
      if (lowQualityImageMode == null) {
        lowQualityImageMode = closure_13.lowQualityImageMode;
      }
      tmp3.dataSavingMode = lowQualityImageMode;
      let str = closure_13.hdrDynamicRange;
      const tmp5 = closure_13;
      if (str == null) {
        str = "no-limit";
      }
      tmp5.hdrDynamicRange = str;
    }
    UNSET = SystemThemeState.UNSET;
  }
  getUserAgnosticState() {
    return closure_13;
  }
  isVisualRefreshDisabled(arg0) {
    let disableVisualRefresh = closure_13.disableVisualRefresh;
    if (disableVisualRefresh == null) {
      disableVisualRefresh = arg0;
    }
    return disableVisualRefresh;
  }
}
const prototype = UnsyncedUserSettingsStore.prototype;
Object.defineProperty(prototype, "lowQualityImageMode", {
  get: function lowQualityImageMode() {
    let flag = closure_13.lowQualityImageMode;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoUploadQuality", {
  get: function videoUploadQuality() {
    let videoUploadQuality = closure_13.videoUploadQuality;
    if (videoUploadQuality == null) {
      videoUploadQuality = STANDARD;
    }
    return videoUploadQuality;
  },
  set: undefined
});
Object.defineProperty(prototype, "dataSavingMode", {
  get: function dataSavingMode() {
    let flag = closure_13.dataSavingMode;
    if (flag == null) {
      flag = closure_13.lowQualityImageMode;
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
    let MIN = closure_13.expressionPickerWidth;
    if (MIN == null) {
      MIN = ExpressionPickerWidths.MIN;
    }
    return MIN;
  },
  set: undefined
});
Object.defineProperty(prototype, "messageRequestSidebarWidth", {
  get: function messageRequestSidebarWidth() {
    let messageRequestSidebarWidth = closure_13.messageRequestSidebarWidth;
    if (messageRequestSidebarWidth == null) {
      messageRequestSidebarWidth = DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
    }
    return messageRequestSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "threadSidebarWidth", {
  get: function threadSidebarWidth() {
    let threadSidebarWidth = closure_13.threadSidebarWidth;
    if (threadSidebarWidth == null) {
      threadSidebarWidth = hasOwnProperty;
    }
    return threadSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "postSidebarWidth", {
  get: function postSidebarWidth() {
    let postSidebarWidth = closure_13.postSidebarWidth;
    if (postSidebarWidth == null) {
      postSidebarWidth = closure_10;
    }
    return postSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "callChatSidebarWidth", {
  get: function callChatSidebarWidth() {
    let callChatSidebarWidth = closure_13.callChatSidebarWidth;
    if (callChatSidebarWidth == null) {
      callChatSidebarWidth = hasOwnProperty;
    }
    return callChatSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "stageAudienceSidebarWidth", {
  get: function stageAudienceSidebarWidth() {
    let stageAudienceSidebarWidth = closure_13.stageAudienceSidebarWidth;
    if (stageAudienceSidebarWidth == null) {
      stageAudienceSidebarWidth = closure_9;
    }
    return stageAudienceSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "homeSidebarWidth", {
  get: function homeSidebarWidth() {
    let homeSidebarWidth = closure_13.homeSidebarWidth;
    if (homeSidebarWidth == null) {
      if (null == closure_12) {
        const _Math = Math;
        const _window = window;
        closure_12 = Math.max(0.4 * (window.innerWidth - CHANNEL_SIDEBAR_WIDTH), hasOwnProperty);
      }
      homeSidebarWidth = closure_12;
    }
    return homeSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "callHeaderHeight", {
  get: function callHeaderHeight() {
    return closure_13.callHeaderHeight;
  },
  set: undefined
});
Object.defineProperty(prototype, "useSystemTheme", {
  get: function useSystemTheme() {
    let UNSET = closure_13.useSystemTheme;
    if (UNSET == null) {
      UNSET = SystemThemeState.UNSET;
    }
    return UNSET;
  },
  set: undefined
});
Object.defineProperty(prototype, "activityPanelHeight", {
  get: function activityPanelHeight() {
    return closure_13.activityPanelHeight;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableVoiceChannelChangeAlert", {
  get: function disableVoiceChannelChangeAlert() {
    let flag = closure_13.disableVoiceChannelChangeAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableEmbeddedActivityPopOutAlert", {
  get: function disableEmbeddedActivityPopOutAlert() {
    let flag = closure_13.disableEmbeddedActivityPopOutAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableActivityHardwareAccelerationPrompt", {
  get: function disableActivityHardwareAccelerationPrompt() {
    let flag = closure_13.disableActivityHardwareAccelerationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableInviteWithTextChannelActivityLaunch", {
  get: function disableInviteWithTextChannelActivityLaunch() {
    let flag = closure_13.disableInviteWithTextChannelActivityLaunch;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableHideSelfStreamAndVideoConfirmationAlert", {
  get: function disableHideSelfStreamAndVideoConfirmationAlert() {
    let flag = closure_13.disableHideSelfStreamAndVideoConfirmationAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "pushUpsellUserSettingsDismissed", {
  get: function pushUpsellUserSettingsDismissed() {
    let flag = closure_13.pushUpsellDismissed;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableActivityHostLeftNitroUpsell", {
  get: function disableActivityHostLeftNitroUpsell() {
    let flag = closure_13.disableActivityHostLeftNitroUpsell;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableCallUserConfirmationPrompt", {
  get: function disableCallUserConfirmationPrompt() {
    let flag = closure_13.disableCallUserConfirmationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableApplicationSubscriptionCancellationSurvey", {
  get: function disableApplicationSubscriptionCancellationSurvey() {
    let flag = closure_13.disableApplicationSubscriptionCancellationSurvey;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "allowVibegrationsPictureInPictureOnNavigateAway", {
  get: function allowVibegrationsPictureInPictureOnNavigateAway() {
    let flag = closure_13.allowVibegrationsPictureInPictureOnNavigateAway;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "darkSidebar", {
  get: function darkSidebar() {
    let flag = closure_13.darkSidebar;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "saveCameraUploadsToDevice", {
  get: function saveCameraUploadsToDevice() {
    let flag = closure_13.saveCameraUploadsToDevice;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "listDensity", {
  get: function listDensity() {
    let COZY = closure_13.listDensity;
    if (COZY == null) {
      COZY = ListDensityMode.COZY;
    }
    return COZY;
  },
  set: undefined
});
Object.defineProperty(prototype, "hdrDynamicRange", {
  get: function hdrDynamicRange() {
    let str = closure_13.hdrDynamicRange;
    if (str == null) {
      str = "no-limit";
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(prototype, "pauseSelfStreamPreviewWhenUnfocused", {
  get: function pauseSelfStreamPreviewWhenUnfocused() {
    let flag = closure_13.pauseSelfStreamPreviewWhenUnfocused;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoBackground", {
  get: function videoBackground() {
    let videoBackground = closure_13.videoBackground;
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
  }
];
UnsyncedUserSettingsStore.migrations = items;
const obj2 = {
  UNSYNCED_USER_SETTINGS_UPDATE: function handleUnsyncedUserSettingsUpdate(settings) {
    const obj = {};
    const merged = Object.assign(closure_13);
    const merged1 = Object.assign(settings.settings);
    closure_13 = obj;
  },
  LOGOUT: function handleLogOut() {
    const obj = { useSystemTheme: closure_13.useSystemTheme };
    closure_13 = obj;
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    if (null == closure_13) {
      closure_13 = {};
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess() {
    closure_13.useSystemTheme = SystemThemeState.ON;
  }
};
const unsyncedUserSettingsStore = new UnsyncedUserSettingsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/user_settings/UnsyncedUserSettingsStore.tsx");

export default unsyncedUserSettingsStore;
export const VideoQualitySettings = obj;
export const VideoCompressionQuality = { VERY_LOW: "very_low", LOW: "low", MEDIUM: "medium", HIGH: "high", VERY_HIGH: "very_high" };
