// Module ID: 13246
// Function ID: 100555
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13246 (_isNativeReflectConstruct)
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
const NativeModules = arg1(dependencyMap[5]).NativeModules;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const NOTIF_SETTINGS = arg1(dependencyMap[10]).NOTIF_SETTINGS;
const AnalyticEvents = arg1(dependencyMap[11]).AnalyticEvents;
let tmp2 = (arg0) => {
  class NotificationTokenManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, NotificationTokenManager);
      items1 = [...items];
      obj = closure_6(NotificationTokenManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      NotificationTokenManager = tmp2Result;
      tmp2Result._experimentUnsubscribe = null;
      tmp2Result.token = null;
      tmp2Result.hasRegisterEventListener = false;
      tmp2Result.hasTrackedDisabledAndroidNotifChannels = false;
      tmp2Result.postConnectionOpenTimeoutID = null;
      tmp2Result._handleExperimentsUpdated = () => tmp2Result.registerNotificationCategories();
      tmp2Result.handleToken = (token) => {
        tmp2Result.token = token;
        if (tmp2Result.canSync) {
          tmp2Result.registerToken();
        }
      };
      tmp2Result.registerToken = () => {
        if (null != tmp2Result.token) {
          const DCDNotificationCategoryUtils = closure_8.DCDNotificationCategoryUtils;
          const intl = tmp2Result(closure_2[12]).intl;
          const stringResult = intl.string(tmp2Result(closure_2[12]).t.TBA5Xg);
          const intl2 = tmp2Result(closure_2[12]).intl;
          const intl3 = tmp2Result(closure_2[12]).intl;
          const result = DCDNotificationCategoryUtils.registerNotificationReplyCategories(stringResult, intl2.string(tmp2Result(closure_2[12]).t.TXNS7S), intl3.string(tmp2Result(closure_2[12]).t.TBA5Xg), () => {

          });
          if (closure_8.PushNotificationAndroid) {
            const PushNotificationAndroid = closure_8.PushNotificationAndroid;
            const result1 = PushNotificationAndroid.onRegisterNotificationToken();
          }
          const stringResult1 = intl2.string(tmp2Result(closure_2[12]).t.TXNS7S);
          callback(closure_2[13]).registerDevice(tmp2Result.token);
          const obj = callback(closure_2[13]);
        }
      };
      tmp2Result.handleSyncNoMultiAccountOnLoginSuccess = () => {
        const result = tmp2Result.handleSyncNoMultiAccount();
      };
      tmp2Result.handleSyncNoMultiAccountOnRegisterSuccess = () => {
        tmp2Result.postConnectionOpenTimeoutID = setTimeout(tmp2Result.handleSyncNoMultiAccountOnPostConnectionOpen, 5000);
      };
      tmp2Result.handleSyncNoMultiAccountOnPostConnectionOpen = () => {
        if (null != tmp2Result.postConnectionOpenTimeoutID) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp2Result.postConnectionOpenTimeoutID);
          tmp2Result.postConnectionOpenTimeoutID = null;
          const result = tmp2Result.handleSyncNoMultiAccount();
        }
      };
      tmp2Result.handleSyncNoMultiAccount = () => {
        let canSync = tmp2Result.canSync;
        if (canSync) {
          canSync = !closure_10.canUseMultiAccountNotifications;
        }
        if (canSync) {
          tmp2Result.registerToken();
        }
      };
      tmp2Result.handleSyncWithMultiAccount = () => {
        let canUseMultiAccountNotifications = tmp2Result.canSync;
        if (canUseMultiAccountNotifications) {
          canUseMultiAccountNotifications = closure_10.canUseMultiAccountNotifications;
        }
        if (canUseMultiAccountNotifications) {
          tmp2Result.registerToken();
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = NotificationTokenManager;
  callback2(NotificationTokenManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const self = this;
      const NotificationTokenManager = this;
      if (null != this.token) {
        self.handleToken(self.token);
      }
      closure_9.addChangeListener(self._handleExperimentsUpdated);
      self._experimentUnsubscribe = () => {
        closure_9.removeChangeListener(self._handleExperimentsUpdated);
      };
      const subscription = callback(closure_2[14]).subscribe("LOGIN_SUCCESS", self.handleSyncNoMultiAccountOnLoginSuccess);
      const obj = callback(closure_2[14]);
      const subscription1 = callback(closure_2[14]).subscribe("REGISTER_SUCCESS", self.handleSyncNoMultiAccountOnRegisterSuccess);
      const obj2 = callback(closure_2[14]);
      const subscription2 = callback(closure_2[14]).subscribe("POST_CONNECTION_OPEN", self.handleSyncNoMultiAccountOnPostConnectionOpen);
      const obj3 = callback(closure_2[14]);
      const subscription3 = callback(closure_2[14]).subscribe("POST_CONNECTION_OPEN", self.handleSyncWithMultiAccount);
      const obj4 = callback(closure_2[14]);
      const subscription4 = callback(closure_2[14]).subscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", self.handleSyncWithMultiAccount);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      callback(closure_2[14]).unsubscribe("LOGIN_SUCCESS", this.handleSyncNoMultiAccountOnLoginSuccess);
      const obj = callback(closure_2[14]);
      callback(closure_2[14]).unsubscribe("REGISTER_SUCCESS", this.handleSyncNoMultiAccountOnRegisterSuccess);
      const obj2 = callback(closure_2[14]);
      callback(closure_2[14]).unsubscribe("POST_CONNECTION_OPEN", this.handleSyncNoMultiAccountOnPostConnectionOpen);
      const obj3 = callback(closure_2[14]);
      callback(closure_2[14]).unsubscribe("POST_CONNECTION_OPEN", this.handleSyncWithMultiAccount);
      const obj4 = callback(closure_2[14]);
      callback(closure_2[14]).unsubscribe("MULTI_ACCOUNT_REMOVE_ACCOUNT", this.handleSyncWithMultiAccount);
      if (null != this._experimentUnsubscribe) {
        const result = self._experimentUnsubscribe();
        self._experimentUnsubscribe = null;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "registerListener",
    value() {
      const self = this;
      if (this.hasRegisterEventListener) {
        const _Error = Error;
        const error = new Error("Device token listener already registered.");
        throw error;
      } else {
        self.hasRegisterEventListener = true;
        const result = callback(closure_2[15]).addRegisterEventListener(self.handleToken);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "registerNotificationCategories",
    value() {
      const self = this;
      const declarativeNotifSettingsExperiment = NotificationTokenManager(closure_2[16]).declarativeNotifSettingsExperiment;
      const config = declarativeNotifSettingsExperiment.getConfig({ location: "registerNotificationCategories" });
      let flag = false;
      if (config.enabled) {
        let obj = callback(closure_2[17]);
        flag = obj.registerDeclarativeNotificationCategories();
      }
      while (true) {
        if (flag) {
          let result = self.trackDisabledAndroidNotifChannels();
        } else {
          if (config.clearDeclarative) {
            let tmp4 = callback;
            let tmp5 = closure_2;
            let num2 = 18;
            let obj2 = callback(closure_2[18]);
            obj = {};
            let str = "Clearing declarative notification categories";
            obj.message = "Clearing declarative notification categories";
            let addBreadcrumbResult = obj2.addBreadcrumb(obj);
            let num3 = 17;
            let obj4 = callback(closure_2[17]);
            let clearResult = obj4.clear();
          }
          let result1 = self.registerLegacyNotificationCategories();
          while (true) {
            let tmp9 = callback;
            let tmp10 = closure_2;
            let num4 = 18;
            let tmp8 = __exception;
            let obj5 = callback(closure_2[18]);
            let captureExceptionResult = obj5.captureException(tmp8);
            // continue
          }
        }
      }
    }
  };
  items[4] = {
    key: "registerLegacyNotificationCategories",
    value() {
      const registerNotificationCategories = closure_8.DCDNotificationCategoryUtils.registerNotificationCategories;
      const registerNotificationCategoriesAndGroups = closure_8.DCDNotificationCategoryUtils.registerNotificationCategoriesAndGroups;
      if (null != registerNotificationCategoriesAndGroups) {
        let obj = {};
        const intl = NotificationTokenManager(closure_2[12]).intl;
        obj.calls = intl.string(callback(closure_2[19]).IUH/Oe);
        const intl2 = NotificationTokenManager(closure_2[12]).intl;
        obj.mediaConnections = intl2.string(callback(closure_2[19]).VeBD1N);
        const intl3 = NotificationTokenManager(closure_2[12]).intl;
        obj.messages = intl3.string(callback(closure_2[19]).4qWUAO);
        const intl4 = NotificationTokenManager(closure_2[12]).intl;
        obj.directMessages = intl4.string(callback(closure_2[19]).NGdNZb);
        const intl5 = NotificationTokenManager(closure_2[12]).intl;
        obj.friendRequests = intl5.string(callback(closure_2[19]).NxgGZA);
        const intl6 = NotificationTokenManager(closure_2[12]).intl;
        obj.polls = intl6.string(callback(closure_2[19]).MOjygY);
        const intl7 = NotificationTokenManager(closure_2[12]).intl;
        obj.social = intl7.string(callback(closure_2[19]).UzRF+8);
        const intl8 = NotificationTokenManager(closure_2[12]).intl;
        obj.stageLive = intl8.string(callback(closure_2[19]).4n388K);
        const intl9 = NotificationTokenManager(closure_2[12]).intl;
        obj.guildEventLive = intl9.string(callback(closure_2[19]).40TIqW);
        const intl10 = NotificationTokenManager(closure_2[12]).intl;
        obj.guildHighlights = intl10.string(NotificationTokenManager(closure_2[12]).t.p5jg9S);
        const intl11 = NotificationTokenManager(closure_2[12]).intl;
        obj.forumThreadCreated = intl11.string(callback(closure_2[19]).HibKoy);
        const intl12 = NotificationTokenManager(closure_2[12]).intl;
        obj.systemMessages = intl12.string(callback(closure_2[19]).zJlwvV);
        const intl13 = NotificationTokenManager(closure_2[12]).intl;
        obj.other = intl13.string(callback(closure_2[19]).kIrLfg);
        const intl14 = NotificationTokenManager(closure_2[12]).intl;
        obj.default = intl14.string(callback(closure_2[19]).T+79Eo);
        const intl15 = NotificationTokenManager(closure_2[12]).intl;
        obj.reactions = intl15.string(NotificationTokenManager(closure_2[12]).t.gHp0C4);
        obj = {};
        const intl16 = NotificationTokenManager(closure_2[12]).intl;
        obj.realtime = intl16.string(callback(closure_2[19]).S5cB9e);
        const intl17 = NotificationTokenManager(closure_2[12]).intl;
        obj.social = intl17.string(callback(closure_2[19]).UzRF+8);
        const intl18 = NotificationTokenManager(closure_2[12]).intl;
        obj.server = intl18.string(callback(closure_2[19]).zRKbpz);
        const intl19 = NotificationTokenManager(closure_2[12]).intl;
        obj.other = intl19.string(callback(closure_2[19]).q5M7HV);
        const result = registerNotificationCategoriesAndGroups(obj, obj);
      } else if (null != registerNotificationCategories) {
        obj = {};
        const intl20 = NotificationTokenManager(closure_2[12]).intl;
        obj.calls = intl20.string(NotificationTokenManager(closure_2[12]).t.JJogjm);
        const intl21 = NotificationTokenManager(closure_2[12]).intl;
        obj.mediaConnections = intl21.string(NotificationTokenManager(closure_2[12]).t.K3lovD);
        const intl22 = NotificationTokenManager(closure_2[12]).intl;
        obj.messages = intl22.string(NotificationTokenManager(closure_2[12]).t.OIgYlQ);
        const intl23 = NotificationTokenManager(closure_2[12]).intl;
        obj.directMessages = intl23.string(NotificationTokenManager(closure_2[12]).t.YUU0RF);
        const intl24 = NotificationTokenManager(closure_2[12]).intl;
        obj.social = intl24.string(NotificationTokenManager(closure_2[12]).t.TdEu5X);
        const intl25 = NotificationTokenManager(closure_2[12]).intl;
        obj.gameDetection = intl25.string(NotificationTokenManager(closure_2[12]).t.A/4saf);
        const intl26 = NotificationTokenManager(closure_2[12]).intl;
        obj.stageLive = intl26.string(NotificationTokenManager(closure_2[12]).t.qGRagm);
        const intl27 = NotificationTokenManager(closure_2[12]).intl;
        obj.guildEventLive = intl27.string(NotificationTokenManager(closure_2[12]).t.MfGr0a);
        const intl28 = NotificationTokenManager(closure_2[12]).intl;
        obj.guildHighlights = intl28.string(NotificationTokenManager(closure_2[12]).t.p5jg9S);
        const intl29 = NotificationTokenManager(closure_2[12]).intl;
        obj.forumThreadCreated = intl29.string(NotificationTokenManager(closure_2[12]).t.dl57ho);
        const intl30 = NotificationTokenManager(closure_2[12]).intl;
        obj.other = intl30.string(NotificationTokenManager(closure_2[12]).t.BcZTKu);
        const intl31 = NotificationTokenManager(closure_2[12]).intl;
        obj.otherHighPriority = intl31.string(NotificationTokenManager(closure_2[12]).t.bcv3rp);
        const result1 = registerNotificationCategories(obj);
      }
    }
  };
  items[5] = {
    key: "trackDisabledAndroidNotifChannels",
    value() {
      if (!this.hasTrackedDisabledAndroidNotifChannels) {
        tmp.hasTrackedDisabledAndroidNotifChannels = true;
        let obj = NotificationTokenManager(closure_2[20]);
        if (obj.isAndroid()) {
          let prop;
          if (null != callback(closure_2[21])) {
            prop = callback(closure_2[21]).getAndroidNotifChannelStates;
          }
          if (null != prop) {
            const _Set = Set;
            const set = new Set(closure_13.map((string_id) => string_id.string_id));
            const NotificationTokenManager = set;
            const found = prop().filter((importance) => {
              let hasItem = 0 === importance.importance;
              if (hasItem) {
                hasItem = set.has(importance.channelId);
              }
              return hasItem;
            });
            const propResult = prop();
            obj = { disabled_channels: found.map((channelId) => channelId.channelId) };
            callback(closure_2[22]).track(constants.ANDROID_NOTIFICATION_CHANNELS_SYNCED, obj);
            const obj2 = callback(closure_2[22]);
          }
        }
      }
    }
  };
  items[6] = {
    key: "getToken",
    value() {
      return this.token;
    }
  };
  items[7] = {
    key: "canSync",
    get() {
      let isInitialized = this.isInitialized;
      if (isInitialized) {
        isInitialized = authenticated.isAuthenticated();
      }
      if (isInitialized) {
        isInitialized = !isSwitchingAccount.getIsSwitchingAccount();
      }
      return isInitialized;
    }
  };
  return callback(NotificationTokenManager, items);
}(importDefault(dependencyMap[23]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/notifications/native/NotificationTokenManager.tsx");

export default tmp2;
