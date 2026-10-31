// Module ID: 16271
// Function ID: 16272
// Name: NotificationTokenManager
// Dependencies: [17, 1246, 13962, 15522, 502, 16272, 1072, 1996, 572, 10914, 16275, 1242, 1113, 2868, 1375, 16276, 1252, 13961, 2]

// Module 16271 (NotificationTokenManager)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import intl32 from "intl" /* 1113 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import _modDef2868 from "module_2868" /* 2868 */;
import PushNotificationDefault from "PushNotification" /* 10914 */;
import PushNotificationActionCreatorsDefault from "PushNotificationActionCreators" /* 13961 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16272 */;
import NotifSettingsUtilsDefault from "NotifSettingsUtils" /* 16275 */;
import react_nativeDefault from "react-native" /* 16276 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import MultiAccountStore from "MultiAccountStore" /* 13962 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 15522 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import LifecycleManager from "LifecycleManager" /* 1996 */;
import size from "module_2" /* 2 */;

let set;

const NativeModules = react_native.NativeModules;
const NOTIF_SETTINGS = NotificationSettingsConstants.NOTIF_SETTINGS;
const AnalyticEvents = Constants.AnalyticEvents;
class NotificationTokenManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._experimentUnsubscribe = null;
    applyArgumentsResult.token = null;
    applyArgumentsResult.hasRegisterEventListener = false;
    applyArgumentsResult.hasTrackedDisabledAndroidNotifChannels = false;
    applyArgumentsResult.postConnectionOpenTimeoutID = null;
    applyArgumentsResult._handleExperimentsUpdated = function _handleExperimentsUpdated() {
      return require.registerNotificationCategories();
    };
    applyArgumentsResult.handleToken = function handleToken(token) {
      require.token = token;
      const obj = require;
      if (require.canSync) {
        obj.registerToken();
      }
    };
    applyArgumentsResult.registerToken = function registerToken() {
      if (null != require.token) {
        const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
        const registerNotificationReplyCategories = DCDNotificationCategoryUtils.registerNotificationReplyCategories;
        const intl = intl32.intl;
        const stringResult = intl.string(intl32.t.TBA5Xg);
        const intl2 = intl32.intl;
        const stringResult1 = intl2.string(intl32.t.TXNS7S);
        const intl3 = intl32.intl;
        const result = registerNotificationReplyCategories(stringResult, stringResult1, intl3.string(intl32.t.TBA5Xg), () => {

        });
        const tmp5 = NativeModules;
        if (NativeModules.PushNotificationAndroid) {
          const PushNotificationAndroid = tmp5.PushNotificationAndroid;
          const result1 = PushNotificationAndroid.onRegisterNotificationToken();
        }
        const obj = PushNotificationActionCreatorsDefault;
        obj.registerDevice(tmp.token);
      }
    };
    applyArgumentsResult.handleSyncNoMultiAccountOnLoginSuccess = function handleSyncNoMultiAccountOnLoginSuccess() {
      const result = require.handleSyncNoMultiAccount();
    };
    applyArgumentsResult.handleSyncNoMultiAccountOnRegisterSuccess = function handleSyncNoMultiAccountOnRegisterSuccess() {
      require.postConnectionOpenTimeoutID = setTimeout(require.handleSyncNoMultiAccountOnPostConnectionOpen, 5000);
    };
    applyArgumentsResult.handleSyncNoMultiAccountOnPostConnectionOpen = function handleSyncNoMultiAccountOnPostConnectionOpen() {
      if (null != require.postConnectionOpenTimeoutID) {
        const _clearTimeout = clearTimeout;
        clearTimeout(require.postConnectionOpenTimeoutID);
        require.postConnectionOpenTimeoutID = null;
        const result = obj.handleSyncNoMultiAccount();
      }
    };
    applyArgumentsResult.handleSyncNoMultiAccount = function handleSyncNoMultiAccount() {
      let canSync = require.canSync;
      const obj = require;
      if (canSync) {
        canSync = !MultiAccountStore.canUseMultiAccountNotifications;
      }
      if (canSync) {
        obj.registerToken();
      }
    };
    applyArgumentsResult.handleSyncWithMultiAccount = function handleSyncWithMultiAccount() {
      let canUseMultiAccountNotifications = require.canSync;
      const obj = require;
      if (canUseMultiAccountNotifications) {
        canUseMultiAccountNotifications = MultiAccountStore.canUseMultiAccountNotifications;
      }
      if (canUseMultiAccountNotifications) {
        obj.registerToken();
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const self = this;
    if (null != this.token) {
      self.handleToken(self.token);
    }
    ApexExperimentStore.addChangeListener(self._handleExperimentsUpdated);
    self._experimentUnsubscribe = () => {
      ApexExperimentStore.removeChangeListener(self._handleExperimentsUpdated);
    };
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("LOGIN_SUCCESS", self.handleSyncNoMultiAccountOnLoginSuccess);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("REGISTER_SUCCESS", self.handleSyncNoMultiAccountOnRegisterSuccess);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("POST_CONNECTION_OPEN", self.handleSyncNoMultiAccountOnPostConnectionOpen);
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("POST_CONNECTION_OPEN", self.handleSyncWithMultiAccount);
    const obj5 = DispatcherDefault;
    const subscription4 = obj5.subscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", self.handleSyncWithMultiAccount);
  }
  _terminate() {
    const self = this;
    const obj = DispatcherDefault;
    obj.unsubscribe("LOGIN_SUCCESS", this.handleSyncNoMultiAccountOnLoginSuccess);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("REGISTER_SUCCESS", this.handleSyncNoMultiAccountOnRegisterSuccess);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("POST_CONNECTION_OPEN", this.handleSyncNoMultiAccountOnPostConnectionOpen);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("POST_CONNECTION_OPEN", this.handleSyncWithMultiAccount);
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", this.handleSyncWithMultiAccount);
    if (null != this._experimentUnsubscribe) {
      const result = self._experimentUnsubscribe();
      self._experimentUnsubscribe = null;
    }
  }
  registerListener() {
    const self = this;
    if (this.hasRegisterEventListener) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Device token listener already registered.");
      throw error;
    } else {
      self.hasRegisterEventListener = true;
      const obj = PushNotificationDefault;
      const result = obj.addRegisterEventListener(self.handleToken);
    }
  }
  registerNotificationCategories() {
    let flag = false;
    try {
      const obj = NotifSettingsUtilsDefault;
      flag = obj.registerDeclarativeNotificationCategories();
    } catch (tmp3) {
      const obj2 = SentryUtilsDefault;
      obj2.captureException(tmp3);
    }
    const self = this;
    if (!flag) {
      const result = self.registerLegacyNotificationCategories();
    }
    const result1 = self.trackDisabledAndroidNotifChannels();
  }
  registerLegacyNotificationCategories() {
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl15;
    let intl16;
    let intl17;
    let intl18;
    let intl19;
    let intl2;
    let intl20;
    let intl21;
    let intl22;
    let intl23;
    let intl24;
    let intl25;
    let intl26;
    let intl27;
    let intl28;
    let intl29;
    let intl3;
    let intl30;
    let intl31;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    const registerNotificationCategories = NativeModules.DCDNotificationCategoryUtils.registerNotificationCategories;
    const registerNotificationCategoriesAndGroups = NativeModules.DCDNotificationCategoryUtils.registerNotificationCategoriesAndGroups;
    if (null != registerNotificationCategoriesAndGroups) {
      const obj = { calls: intl.string(_modDef2868["IUH/Oe"]), mediaConnections: intl2.string(_modDef2868.VeBD1N), messages: intl3.string(_modDef2868["4qWUAO"]), directMessages: intl4.string(_modDef2868.NGdNZb), friendRequests: intl5.string(_modDef2868.NxgGZA), polls: intl6.string(_modDef2868.MOjygY), social: intl7.string(_modDef2868["UzRF+8"]), stageLive: intl8.string(_modDef2868["4n388K"]), guildEventLive: intl9.string(_modDef2868["40TIqW"]), guildHighlights: intl10.string(intl32.t.p5jg9S), forumThreadCreated: intl11.string(_modDef2868.HibKoy), systemMessages: intl12.string(_modDef2868.zJlwvV), other: intl13.string(_modDef2868.kIrLfg), default: intl14.string(_modDef2868["T+79Eo"]), reactions: intl15.string(intl32.t.gHp0C4) };
      intl = intl32.intl;
      intl2 = intl32.intl;
      intl3 = intl32.intl;
      intl4 = intl32.intl;
      intl5 = intl32.intl;
      intl6 = intl32.intl;
      intl7 = intl32.intl;
      intl8 = intl32.intl;
      intl9 = intl32.intl;
      intl10 = intl32.intl;
      intl11 = intl32.intl;
      intl12 = intl32.intl;
      intl13 = intl32.intl;
      intl14 = intl32.intl;
      intl15 = intl32.intl;
      const obj2 = { realtime: intl16.string(_modDef2868.S5cB9e), social: intl17.string(_modDef2868["UzRF+8"]), server: intl18.string(_modDef2868.zRKbpz), other: intl19.string(_modDef2868.q5M7HV) };
      intl16 = intl32.intl;
      intl17 = intl32.intl;
      intl18 = intl32.intl;
      intl19 = intl32.intl;
      const result = registerNotificationCategoriesAndGroups(obj, obj2);
    } else if (null != registerNotificationCategories) {
      const obj3 = { calls: intl20.string(intl32.t.JJogjm), mediaConnections: intl21.string(intl32.t.K3lovD), messages: intl22.string(intl32.t.OIgYlQ), directMessages: intl23.string(intl32.t.YUU0RF), social: intl24.string(intl32.t.TdEu5X), gameDetection: intl25.string(intl32.t["A/4saf"]), stageLive: intl26.string(intl32.t.qGRagm), guildEventLive: intl27.string(intl32.t.MfGr0a), guildHighlights: intl28.string(intl32.t.p5jg9S), forumThreadCreated: intl29.string(intl32.t.dl57ho), other: intl30.string(intl32.t.BcZTKu), otherHighPriority: intl31.string(intl32.t.bcv3rp) };
      intl20 = intl32.intl;
      intl21 = intl32.intl;
      intl22 = intl32.intl;
      intl23 = intl32.intl;
      intl24 = intl32.intl;
      intl25 = intl32.intl;
      intl26 = intl32.intl;
      intl27 = intl32.intl;
      intl28 = intl32.intl;
      intl29 = intl32.intl;
      intl30 = intl32.intl;
      intl31 = intl32.intl;
      const result1 = registerNotificationCategories(obj3);
    }
  }
  trackDisabledAndroidNotifChannels() {
    if (!this.hasTrackedDisabledAndroidNotifChannels) {
      tmp.hasTrackedDisabledAndroidNotifChannels = true;
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const tmp5 = react_nativeDefault;
        let prop;
        if (tmp5 != null) {
          prop = tmp5.getAndroidNotifChannelStates;
        }
        if (null != prop) {
          const _Set = Set;
          const self = this;
          const self2 = this;
          const propResult = prop();
          set = new Set(NOTIF_SETTINGS.map((string_id) => string_id.string_id));
          const found = propResult.filter((importance) => {
            const hasItem = 0 === importance.importance && set.has(importance.channelId);
            return hasItem;
          });
          const obj2 = { disabled_channels: found.map((channelId) => channelId.channelId) };
          const track = tmp4(1252).track;
          const ANDROID_NOTIFICATION_CHANNELS_SYNCED = AnalyticEvents.ANDROID_NOTIFICATION_CHANNELS_SYNCED;
          AnalyticsUtilsDefault;
          track(ANDROID_NOTIFICATION_CHANNELS_SYNCED, obj2);
        }
      }
    }
  }
  getToken() {
    return this.token;
  }
}
Object.defineProperty(NotificationTokenManager.prototype, "canSync", {
  get: function canSync() {
    const isInitialized = this.isInitialized && AuthenticationStore.isAuthenticated() && !MultiAccountSwitchStore.getIsSwitchingAccount();
    return isInitialized;
  },
  set: undefined
});
const notificationTokenManager = new NotificationTokenManager();
let result = size.fileFinishedImporting("modules/notifications/native/NotificationTokenManager.tsx");

export default notificationTokenManager;
