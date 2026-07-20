// Module ID: 1280
// Function ID: 14447
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1280 (_isNativeReflectConstruct)
let CHANNEL_SIDEBAR_WIDTH;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const SystemThemeState = arg1(dependencyMap[5]).SystemThemeState;
const ListDensityMode = arg1(dependencyMap[6]).ListDensityMode;
const tmp2 = arg1(dependencyMap[7]);
({ DEFAULT_CHAT_SIDEBAR_WIDTH: closure_10, CHANNEL_SIDEBAR_WIDTH } = tmp2);
let closure_12 = tmp2.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
const ExpressionPickerWidths = arg1(dependencyMap[8]).ExpressionPickerWidths;
let obj = { DATA_SAVER: "data_saver", STANDARD: "standard", BEST: "best" };
let closure_14 = (window.innerWidth - CHANNEL_SIDEBAR_WIDTH) / 2;
const STANDARD = obj.STANDARD;
let closure_16 = null;
let closure_17 = {};
let tmp3 = (DeviceSettingsStore) => {
  class UnsyncedUserSettingsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, UnsyncedUserSettingsStore);
      obj = closure_6(UnsyncedUserSettingsStore);
      tmp2 = closure_5;
      if (closure_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = UnsyncedUserSettingsStore;
  callback2(UnsyncedUserSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
      const useSystemTheme = obj.useSystemTheme;
      if (null != useSystemTheme) {
        if (null != callback(closure_2[9])()) {
          let UNSET = useSystemTheme;
        }
        obj.useSystemTheme = UNSET;
        let lowQualityImageMode = obj.dataSavingMode;
        if (null == lowQualityImageMode) {
          lowQualityImageMode = obj.lowQualityImageMode;
        }
        obj.dataSavingMode = lowQualityImageMode;
        const hdrDynamicRange = obj.hdrDynamicRange;
        let str2 = "no-limit";
        if (null != hdrDynamicRange) {
          str2 = hdrDynamicRange;
        }
        obj.hdrDynamicRange = str2;
      }
      UNSET = constants.UNSET;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return closure_17;
    }
  };
  items[1] = obj;
  obj = {
    key: "displayCompactAvatars",
    get() {
      const displayCompactAvatars = closure_17.displayCompactAvatars;
      return null != displayCompactAvatars && displayCompactAvatars;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lowQualityImageMode",
    get() {
      const lowQualityImageMode = closure_17.lowQualityImageMode;
      return null != lowQualityImageMode && lowQualityImageMode;
    }
  };
  items[4] = {
    key: "videoUploadQuality",
    get() {
      let videoUploadQuality = closure_17.videoUploadQuality;
      if (null == videoUploadQuality) {
        videoUploadQuality = closure_15;
      }
      return videoUploadQuality;
    }
  };
  items[5] = {
    key: "dataSavingMode",
    get() {
      let lowQualityImageMode = closure_17.dataSavingMode;
      if (null == lowQualityImageMode) {
        lowQualityImageMode = closure_17.lowQualityImageMode;
      }
      return null != lowQualityImageMode && lowQualityImageMode;
    }
  };
  items[6] = {
    key: "expressionPickerWidth",
    get() {
      let MIN = closure_17.expressionPickerWidth;
      if (null == MIN) {
        MIN = constants3.MIN;
      }
      return MIN;
    }
  };
  items[7] = {
    key: "messageRequestSidebarWidth",
    get() {
      let messageRequestSidebarWidth = closure_17.messageRequestSidebarWidth;
      if (null == messageRequestSidebarWidth) {
        messageRequestSidebarWidth = closure_12;
      }
      return messageRequestSidebarWidth;
    }
  };
  items[8] = {
    key: "threadSidebarWidth",
    get() {
      let threadSidebarWidth = closure_17.threadSidebarWidth;
      if (null == threadSidebarWidth) {
        threadSidebarWidth = closure_10;
      }
      return threadSidebarWidth;
    }
  };
  items[9] = {
    key: "postSidebarWidth",
    get() {
      let postSidebarWidth = closure_17.postSidebarWidth;
      if (null == postSidebarWidth) {
        postSidebarWidth = closure_14;
      }
      return postSidebarWidth;
    }
  };
  items[10] = {
    key: "callChatSidebarWidth",
    get() {
      let callChatSidebarWidth = closure_17.callChatSidebarWidth;
      if (null == callChatSidebarWidth) {
        callChatSidebarWidth = closure_10;
      }
      return callChatSidebarWidth;
    }
  };
  items[11] = {
    key: "homeSidebarWidth",
    get() {
      let homeSidebarWidth = closure_17.homeSidebarWidth;
      if (null == homeSidebarWidth) {
        if (null == closure_16) {
          const _Math = Math;
          const _window = window;
          closure_16 = Math.max(0.4 * (window.innerWidth - closure_11), closure_10);
        }
        homeSidebarWidth = closure_16;
      }
      return homeSidebarWidth;
    }
  };
  items[12] = {
    key: "callHeaderHeight",
    get() {
      return closure_17.callHeaderHeight;
    }
  };
  items[13] = {
    key: "useSystemTheme",
    get() {
      let UNSET = closure_17.useSystemTheme;
      if (null == UNSET) {
        UNSET = constants.UNSET;
      }
      return UNSET;
    }
  };
  items[14] = {
    key: "activityPanelHeight",
    get() {
      return closure_17.activityPanelHeight;
    }
  };
  items[15] = {
    key: "disableVoiceChannelChangeAlert",
    get() {
      const disableVoiceChannelChangeAlert = closure_17.disableVoiceChannelChangeAlert;
      return null != disableVoiceChannelChangeAlert && disableVoiceChannelChangeAlert;
    }
  };
  items[16] = {
    key: "disableHardwareMuteSilenceAlert",
    get() {
      const disableHardwareMuteSilenceAlert = closure_17.disableHardwareMuteSilenceAlert;
      return null != disableHardwareMuteSilenceAlert && disableHardwareMuteSilenceAlert;
    }
  };
  items[17] = {
    key: "disableEmbeddedActivityPopOutAlert",
    get() {
      const disableEmbeddedActivityPopOutAlert = closure_17.disableEmbeddedActivityPopOutAlert;
      return null != disableEmbeddedActivityPopOutAlert && disableEmbeddedActivityPopOutAlert;
    }
  };
  items[18] = {
    key: "disableActivityHardwareAccelerationPrompt",
    get() {
      const disableActivityHardwareAccelerationPrompt = closure_17.disableActivityHardwareAccelerationPrompt;
      return null != disableActivityHardwareAccelerationPrompt && disableActivityHardwareAccelerationPrompt;
    }
  };
  items[19] = {
    key: "disableInviteWithTextChannelActivityLaunch",
    get() {
      const disableInviteWithTextChannelActivityLaunch = closure_17.disableInviteWithTextChannelActivityLaunch;
      return null != disableInviteWithTextChannelActivityLaunch && disableInviteWithTextChannelActivityLaunch;
    }
  };
  items[20] = {
    key: "disableHideSelfStreamAndVideoConfirmationAlert",
    get() {
      const disableHideSelfStreamAndVideoConfirmationAlert = closure_17.disableHideSelfStreamAndVideoConfirmationAlert;
      return null != disableHideSelfStreamAndVideoConfirmationAlert && disableHideSelfStreamAndVideoConfirmationAlert;
    }
  };
  items[21] = {
    key: "pushUpsellUserSettingsDismissed",
    get() {
      const pushUpsellDismissed = closure_17.pushUpsellDismissed;
      return null != pushUpsellDismissed && pushUpsellDismissed;
    }
  };
  items[22] = {
    key: "disableActivityHostLeftNitroUpsell",
    get() {
      const disableActivityHostLeftNitroUpsell = closure_17.disableActivityHostLeftNitroUpsell;
      return null != disableActivityHostLeftNitroUpsell && disableActivityHostLeftNitroUpsell;
    }
  };
  items[23] = {
    key: "disableCallUserConfirmationPrompt",
    get() {
      const disableCallUserConfirmationPrompt = closure_17.disableCallUserConfirmationPrompt;
      return null != disableCallUserConfirmationPrompt && disableCallUserConfirmationPrompt;
    }
  };
  items[24] = {
    key: "disableApplicationSubscriptionCancellationSurvey",
    get() {
      const disableApplicationSubscriptionCancellationSurvey = closure_17.disableApplicationSubscriptionCancellationSurvey;
      return null != disableApplicationSubscriptionCancellationSurvey && disableApplicationSubscriptionCancellationSurvey;
    }
  };
  items[25] = {
    key: "darkSidebar",
    get() {
      const darkSidebar = closure_17.darkSidebar;
      return null != darkSidebar && darkSidebar;
    }
  };
  items[26] = {
    key: "saveCameraUploadsToDevice",
    get() {
      const saveCameraUploadsToDevice = closure_17.saveCameraUploadsToDevice;
      return null == saveCameraUploadsToDevice || saveCameraUploadsToDevice;
    }
  };
  items[27] = {
    key: "isVisualRefreshDisabled",
    value(arg0) {
      let tmp = arg0;
      const disableVisualRefresh = closure_17.disableVisualRefresh;
      if (null != disableVisualRefresh) {
        tmp = disableVisualRefresh;
      }
      return tmp;
    }
  };
  items[28] = {
    key: "listDensity",
    get() {
      let COZY = closure_17.listDensity;
      if (null == COZY) {
        COZY = constants2.COZY;
      }
      return COZY;
    }
  };
  items[29] = {
    key: "hdrDynamicRange",
    get() {
      const hdrDynamicRange = closure_17.hdrDynamicRange;
      let str = "no-limit";
      if (null != hdrDynamicRange) {
        str = hdrDynamicRange;
      }
      return str;
    }
  };
  return callback(UnsyncedUserSettingsStore, items);
}(importDefault(dependencyMap[10]).DeviceSettingsStore);
tmp3.displayName = "UnsyncedUserSettingsStore";
tmp3.persistKey = "UnsyncedUserSettingsStore";
const items = [
  () => {
    const Storage = arg1(dependencyMap[11]).Storage;
    const value = Storage.get("UserSettingsStore");
    const Storage2 = arg1(dependencyMap[11]).Storage;
    Storage2.remove("UserSettingsStore");
    return importDefault(dependencyMap[12]).pick(value, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHardwareMuteSilenceAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations");
  },
  (arg0) => {
    delete r0.disableVisualRefresh;
  }
];
tmp3.migrations = items;
obj = {
  UNSYNCED_USER_SETTINGS_UPDATE: function handleUnsyncedUserSettingsUpdate(settings) {
    const merged = Object.assign(closure_17);
    const merged1 = Object.assign(settings.settings);
    closure_17 = {};
  },
  LOGOUT: function handleLogOut() {
    const useSystemTheme = { useSystemTheme: useSystemTheme.useSystemTheme };
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    if (null == closure_17) {
      closure_17 = {};
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess() {
    closure_17.useSystemTheme = SystemThemeState.ON;
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[13]), obj);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/UnsyncedUserSettingsStore.tsx");

export default tmp3;
export const VideoQualitySettings = obj;
export const VideoCompressionQuality = { VERY_LOW: "very_low", LOW: "low", MEDIUM: "medium", HIGH: "high", VERY_HIGH: "very_high" };
