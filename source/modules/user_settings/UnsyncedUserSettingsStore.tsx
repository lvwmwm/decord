// Module ID: 1280
// Function ID: 14453
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1281, 662, 653, 1314, 1315, 566, 587, 22, 686, 2]

// Module 1280 (_isNativeReflectConstruct)
import MAX_FAVORITES from "MAX_FAVORITES";
import closure_4 from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { SystemThemeState } from "SystemThemeState";
import { ListDensityMode } from "MAX_FAVORITES";
import ME from "ME";
import { ExpressionPickerWidths } from "ExpressionPickerViewType";

let CHANNEL_SIDEBAR_WIDTH;
let closure_10;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ DEFAULT_CHAT_SIDEBAR_WIDTH: closure_10, CHANNEL_SIDEBAR_WIDTH } = ME);
let closure_12 = ME.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
let obj = { DATA_SAVER: "data_saver", STANDARD: "standard", BEST: "best" };
let closure_14 = (window.innerWidth - CHANNEL_SIDEBAR_WIDTH) / 2;
const STANDARD = obj.STANDARD;
let c16 = null;
let closure_17 = {};
let tmp3 = ((DeviceSettingsStore) => {
  class UnsyncedUserSettingsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, UnsyncedUserSettingsStore);
      obj = outer1_6(UnsyncedUserSettingsStore);
      tmp2 = outer1_5;
      if (outer1_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UnsyncedUserSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
      const outer1_17 = obj;
      const useSystemTheme = obj.useSystemTheme;
      if (null != useSystemTheme) {
        if (null != outer1_1(outer1_2[9])()) {
          let UNSET = useSystemTheme;
        }
        obj.useSystemTheme = UNSET;
        let lowQualityImageMode = outer1_17.dataSavingMode;
        if (null == lowQualityImageMode) {
          lowQualityImageMode = outer1_17.lowQualityImageMode;
        }
        outer1_17.dataSavingMode = lowQualityImageMode;
        const hdrDynamicRange = outer1_17.hdrDynamicRange;
        let str2 = "no-limit";
        if (null != hdrDynamicRange) {
          str2 = hdrDynamicRange;
        }
        outer1_17.hdrDynamicRange = str2;
      }
      UNSET = outer1_8.UNSET;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return outer1_17;
    }
  };
  items[1] = obj;
  obj = {
    key: "displayCompactAvatars",
    get() {
      const displayCompactAvatars = outer1_17.displayCompactAvatars;
      return null != displayCompactAvatars && displayCompactAvatars;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lowQualityImageMode",
    get() {
      const lowQualityImageMode = outer1_17.lowQualityImageMode;
      return null != lowQualityImageMode && lowQualityImageMode;
    }
  };
  items[4] = {
    key: "videoUploadQuality",
    get() {
      let videoUploadQuality = outer1_17.videoUploadQuality;
      if (null == videoUploadQuality) {
        videoUploadQuality = outer1_15;
      }
      return videoUploadQuality;
    }
  };
  items[5] = {
    key: "dataSavingMode",
    get() {
      let lowQualityImageMode = outer1_17.dataSavingMode;
      if (null == lowQualityImageMode) {
        lowQualityImageMode = outer1_17.lowQualityImageMode;
      }
      return null != lowQualityImageMode && lowQualityImageMode;
    }
  };
  items[6] = {
    key: "expressionPickerWidth",
    get() {
      let MIN = outer1_17.expressionPickerWidth;
      if (null == MIN) {
        MIN = outer1_13.MIN;
      }
      return MIN;
    }
  };
  items[7] = {
    key: "messageRequestSidebarWidth",
    get() {
      let messageRequestSidebarWidth = outer1_17.messageRequestSidebarWidth;
      if (null == messageRequestSidebarWidth) {
        messageRequestSidebarWidth = outer1_12;
      }
      return messageRequestSidebarWidth;
    }
  };
  items[8] = {
    key: "threadSidebarWidth",
    get() {
      let threadSidebarWidth = outer1_17.threadSidebarWidth;
      if (null == threadSidebarWidth) {
        threadSidebarWidth = outer1_10;
      }
      return threadSidebarWidth;
    }
  };
  items[9] = {
    key: "postSidebarWidth",
    get() {
      let postSidebarWidth = outer1_17.postSidebarWidth;
      if (null == postSidebarWidth) {
        postSidebarWidth = outer1_14;
      }
      return postSidebarWidth;
    }
  };
  items[10] = {
    key: "callChatSidebarWidth",
    get() {
      let callChatSidebarWidth = outer1_17.callChatSidebarWidth;
      if (null == callChatSidebarWidth) {
        callChatSidebarWidth = outer1_10;
      }
      return callChatSidebarWidth;
    }
  };
  items[11] = {
    key: "homeSidebarWidth",
    get() {
      let homeSidebarWidth = outer1_17.homeSidebarWidth;
      if (null == homeSidebarWidth) {
        if (null == outer1_16) {
          const _Math = Math;
          const _window = window;
          outer1_16 = Math.max(0.4 * (window.innerWidth - outer1_11), outer1_10);
        }
        homeSidebarWidth = outer1_16;
      }
      return homeSidebarWidth;
    }
  };
  items[12] = {
    key: "callHeaderHeight",
    get() {
      return outer1_17.callHeaderHeight;
    }
  };
  items[13] = {
    key: "useSystemTheme",
    get() {
      let UNSET = outer1_17.useSystemTheme;
      if (null == UNSET) {
        UNSET = outer1_8.UNSET;
      }
      return UNSET;
    }
  };
  items[14] = {
    key: "activityPanelHeight",
    get() {
      return outer1_17.activityPanelHeight;
    }
  };
  items[15] = {
    key: "disableVoiceChannelChangeAlert",
    get() {
      const disableVoiceChannelChangeAlert = outer1_17.disableVoiceChannelChangeAlert;
      return null != disableVoiceChannelChangeAlert && disableVoiceChannelChangeAlert;
    }
  };
  items[16] = {
    key: "disableHardwareMuteSilenceAlert",
    get() {
      const disableHardwareMuteSilenceAlert = outer1_17.disableHardwareMuteSilenceAlert;
      return null != disableHardwareMuteSilenceAlert && disableHardwareMuteSilenceAlert;
    }
  };
  items[17] = {
    key: "disableEmbeddedActivityPopOutAlert",
    get() {
      const disableEmbeddedActivityPopOutAlert = outer1_17.disableEmbeddedActivityPopOutAlert;
      return null != disableEmbeddedActivityPopOutAlert && disableEmbeddedActivityPopOutAlert;
    }
  };
  items[18] = {
    key: "disableActivityHardwareAccelerationPrompt",
    get() {
      const disableActivityHardwareAccelerationPrompt = outer1_17.disableActivityHardwareAccelerationPrompt;
      return null != disableActivityHardwareAccelerationPrompt && disableActivityHardwareAccelerationPrompt;
    }
  };
  items[19] = {
    key: "disableInviteWithTextChannelActivityLaunch",
    get() {
      const disableInviteWithTextChannelActivityLaunch = outer1_17.disableInviteWithTextChannelActivityLaunch;
      return null != disableInviteWithTextChannelActivityLaunch && disableInviteWithTextChannelActivityLaunch;
    }
  };
  items[20] = {
    key: "disableHideSelfStreamAndVideoConfirmationAlert",
    get() {
      const disableHideSelfStreamAndVideoConfirmationAlert = outer1_17.disableHideSelfStreamAndVideoConfirmationAlert;
      return null != disableHideSelfStreamAndVideoConfirmationAlert && disableHideSelfStreamAndVideoConfirmationAlert;
    }
  };
  items[21] = {
    key: "pushUpsellUserSettingsDismissed",
    get() {
      const pushUpsellDismissed = outer1_17.pushUpsellDismissed;
      return null != pushUpsellDismissed && pushUpsellDismissed;
    }
  };
  items[22] = {
    key: "disableActivityHostLeftNitroUpsell",
    get() {
      const disableActivityHostLeftNitroUpsell = outer1_17.disableActivityHostLeftNitroUpsell;
      return null != disableActivityHostLeftNitroUpsell && disableActivityHostLeftNitroUpsell;
    }
  };
  items[23] = {
    key: "disableCallUserConfirmationPrompt",
    get() {
      const disableCallUserConfirmationPrompt = outer1_17.disableCallUserConfirmationPrompt;
      return null != disableCallUserConfirmationPrompt && disableCallUserConfirmationPrompt;
    }
  };
  items[24] = {
    key: "disableApplicationSubscriptionCancellationSurvey",
    get() {
      const disableApplicationSubscriptionCancellationSurvey = outer1_17.disableApplicationSubscriptionCancellationSurvey;
      return null != disableApplicationSubscriptionCancellationSurvey && disableApplicationSubscriptionCancellationSurvey;
    }
  };
  items[25] = {
    key: "darkSidebar",
    get() {
      const darkSidebar = outer1_17.darkSidebar;
      return null != darkSidebar && darkSidebar;
    }
  };
  items[26] = {
    key: "saveCameraUploadsToDevice",
    get() {
      const saveCameraUploadsToDevice = outer1_17.saveCameraUploadsToDevice;
      return null == saveCameraUploadsToDevice || saveCameraUploadsToDevice;
    }
  };
  items[27] = {
    key: "isVisualRefreshDisabled",
    value(arg0) {
      let tmp = arg0;
      const disableVisualRefresh = outer1_17.disableVisualRefresh;
      if (null != disableVisualRefresh) {
        tmp = disableVisualRefresh;
      }
      return tmp;
    }
  };
  items[28] = {
    key: "listDensity",
    get() {
      let COZY = outer1_17.listDensity;
      if (null == COZY) {
        COZY = outer1_9.COZY;
      }
      return COZY;
    }
  };
  items[29] = {
    key: "hdrDynamicRange",
    get() {
      const hdrDynamicRange = outer1_17.hdrDynamicRange;
      let str = "no-limit";
      if (null != hdrDynamicRange) {
        str = hdrDynamicRange;
      }
      return str;
    }
  };
  return callback(UnsyncedUserSettingsStore, items);
})(require("initialize").DeviceSettingsStore);
tmp3.displayName = "UnsyncedUserSettingsStore";
tmp3.persistKey = "UnsyncedUserSettingsStore";
let items = [
  () => {
    const Storage = require(587) /* Storage */.Storage;
    const value = Storage.get("UserSettingsStore");
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove("UserSettingsStore");
    return importDefault(22).pick(value, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHardwareMuteSilenceAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations");
  },
  (arg0) => {
    delete tmp.disableVisualRefresh;
  }
];
tmp3.migrations = items;
obj = {
  UNSYNCED_USER_SETTINGS_UPDATE: function handleUnsyncedUserSettingsUpdate(settings) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
  },
  LOGOUT: function handleLogOut() {
    obj = { useSystemTheme: obj.useSystemTheme };
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
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/UnsyncedUserSettingsStore.tsx");

export default tmp3;
export const VideoQualitySettings = obj;
export const VideoCompressionQuality = { VERY_LOW: "very_low", LOW: "low", MEDIUM: "medium", HIGH: "high", VERY_HIGH: "very_high" };
