// Module ID: 13503
// Function ID: 103826
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 1348, 1907, 1838, 4177, 3758, 4202, 3767, 4952, 1849, 4146, 10739, 653, 13504, 13505, 13506, 13507, 7696, 12767, 13508, 13509, 7683, 1212, 13510, 10750, 3994, 6998, 4320, 4974, 675, 4324, 63, 4530, 2]

// Module 13503 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "registerAsset";
import closure_5 from "registerAsset";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import importDefaultResult from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import importDefaultResult1 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import importDefaultResult2 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import ME from "ME";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import { intl } from "getSystemLocale";
import { intl as intl2 } from "getSystemLocale";
import { intl as intl3 } from "getSystemLocale";
import { intl as intl4 } from "getSystemLocale";
import { intl as intl5 } from "getSystemLocale";
import { intl as intl6 } from "getSystemLocale";
import { intl as intl7 } from "getSystemLocale";
import { intl as intl8 } from "getSystemLocale";
import { intl as intl9 } from "getSystemLocale";
import { intl as intl10 } from "getSystemLocale";
import { intl as intl11 } from "getSystemLocale";
import tmp17 from "LifecycleManager";

let closure_19;
let closure_20;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
({ AnalyticEvents: closure_19, Permissions: closure_20 } = ME);
let items = [importDefaultResult2, importDefaultResult1, importDefaultResult];
let closure_22 = { DISABLED: 0, [0]: "DISABLED", NOT_SHOWING: 1, [1]: "NOT_SHOWING", WAITING_FOR_SERVICE: 2, [2]: "WAITING_FOR_SERVICE", SHOWING: 3, [3]: "SHOWING" };
let obj = {};
obj.useSpeaker = intl.string(require("getSystemLocale").t.CVxXDM);
obj.mute = intl2.string(require("getSystemLocale").t.w4m945);
obj.disconnectFromVoice = intl3.string(require("getSystemLocale").t["/lEZpt"]);
obj.getInvite = intl4.string(require("getSystemLocale").t.JYzIWe);
obj.switchChannels = intl5.string(require("getSystemLocale").t.zJvWqU);
obj.openDiscord = intl6.string(require("getSystemLocale").t["G/Ez6p"]);
obj.inviteLinkCopied = intl7.string(require("getSystemLocale").t.OhctG7);
obj.channelSelect = intl8.string(require("getSystemLocale").t.r2ptsz);
obj.closeWindow = intl9.string(require("getSystemLocale").t.gaifwY);
obj.searchChannels = intl10.string(require("getSystemLocale").t.wM7uRI);
obj.noResults = intl11.string(require("getSystemLocale").t.wk3qsA);
let tmp15 = (() => {
  class MobileVoiceOverlayManager {
    constructor() {
      self = this;
      tmp = outer1_6(this, self);
      this.currentVoiceChannelId = null;
      this.trashedVoiceChannelId = null;
      this.overlayState = outer1_22.DISABLED;
      this.channelSelectorResults = [];
      this.layoutTrashedSubscription = null;
      this.channelQueryUpdateSubscription = null;
      this.isBatchedBridgeInitialized = false;
      this.handleMobileVoiceOverlayStoreUpdate = () => {
        if (outer2_18.getEnabled()) {
          obj.handleOverlayEnable();
        } else {
          const result = obj.unsubscribeFromVoiceStateStoreUpdates();
          const result1 = obj.unsubscribeFromNativeEvents();
          obj.overlayState = outer2_22.DISABLED;
          if (obj.isOverlayShowing()) {
            if (null != outer2_1(outer2_2[27])) {
              outer2_1(outer2_2[27]).hideOverlay();
              const obj2 = outer2_1(outer2_2[27]);
            }
          }
        }
      };
      this.handleOverlayEnable = () => {
        function handleEnableFail() {
          outer3_1(outer3_2[28]).setEnabled(false);
          handleEnableFail.overlayState = outer3_22.DISABLED;
        }
        if (null != outer2_1(outer2_2[27])) {
          const obj = outer2_1(outer2_2[27]);
          const enableOverlayResult = outer2_1(outer2_2[27]).enableOverlay();
          outer2_1(outer2_2[27]).enableOverlay().then((arg0) => {
            if (arg0) {
              const result = handleEnableFail.subscribeToVoiceStateStoreUpdates();
              const result1 = handleEnableFail.subscribeToNativeEvents();
              handleEnableFail.overlayState = outer3_22.NOT_SHOWING;
            } else {
              handleEnableFail();
            }
          }).catch(() => {
            handleEnableFail();
          });
          const nextPromise = outer2_1(outer2_2[27]).enableOverlay().then((arg0) => {
            if (arg0) {
              const result = handleEnableFail.subscribeToVoiceStateStoreUpdates();
              const result1 = handleEnableFail.subscribeToNativeEvents();
              handleEnableFail.overlayState = outer3_22.NOT_SHOWING;
            } else {
              handleEnableFail();
            }
          });
        }
      };
      this.subscribeToVoiceStateStoreUpdates = () => {
        if (!self.isSubscribedToVoiceStateStoreUpdates()) {
          const item = outer2_21.forEach((addChangeListener) => {
            addChangeListener.addChangeListener(outer1_0.handleOverlayUIStoreUpdate);
          });
        }
      };
      this.unsubscribeFromVoiceStateStoreUpdates = () => {
        if (self.isSubscribedToVoiceStateStoreUpdates()) {
          const item = outer2_21.forEach((removeChangeListener) => {
            removeChangeListener.removeChangeListener(outer1_0.handleOverlayUIStoreUpdate);
          });
        }
      };
      this.isSubscribedToVoiceStateStoreUpdates = () => null != outer2_21.find((_changeCallbacks) => _changeCallbacks._changeCallbacks.has(outer1_0.handleOverlayUIStoreUpdate));
      this.subscribeToNativeEvents = () => {
        if (obj.isFabric()) {
          self.layoutTrashedSubscription = outer2_1(outer2_2[27]).onLayoutTrashed(self.handleLayoutTrashed);
          const obj2 = outer2_1(outer2_2[27]);
          self.channelQueryUpdateSubscription = outer2_1(outer2_2[27]).onChannelQueryUpdate(self.handleChannelQueryUpdate);
          const obj3 = outer2_1(outer2_2[27]);
        }
      };
      this.unsubscribeFromNativeEvents = () => {
        if (obj.isFabric()) {
          const layoutTrashedSubscription = self.layoutTrashedSubscription;
          if (null != layoutTrashedSubscription) {
            layoutTrashedSubscription.remove();
          }
          const channelQueryUpdateSubscription = self.channelQueryUpdateSubscription;
          if (null != channelQueryUpdateSubscription) {
            channelQueryUpdateSubscription.remove();
          }
        }
      };
      this.handleOverlayUIStoreUpdate = () => {
        if (self.overlayState !== outer2_22.DISABLED) {
          const currentVoiceChannelId = self.getVoiceConnectedGuildAndChannel().currentVoiceChannelId;
          if (currentVoiceChannelId !== self.currentVoiceChannelId) {
            self.currentVoiceChannelId = currentVoiceChannelId;
            self.trashedVoiceChannelId = null;
          }
          if (null != currentVoiceChannelId) {
            if (currentVoiceChannelId !== self.trashedVoiceChannelId) {
              const overlayState = self.overlayState;
              if (outer2_22.WAITING_FOR_SERVICE !== overlayState) {
                if (outer2_22.NOT_SHOWING === overlayState) {
                  const result = outer2_1(outer2_2[30]).isForegroundServiceRunning((arg0) => {
                    if (arg0) {
                      obj.showOverlay();
                    } else {
                      obj.overlayState = outer3_22.NOT_SHOWING;
                    }
                  });
                  self.overlayState = outer2_22.WAITING_FOR_SERVICE;
                } else if (outer2_22.SHOWING === overlayState) {
                  self.updateOverlayUI();
                } else {
                  const overlayState2 = self.overlayState;
                }
              }
            }
          }
          if (self.isOverlayShowing()) {
            self.hideOverlay();
          }
        }
      };
      this.updateOverlayUI = () => {
        let currentGuildId;
        let currentVoiceChannelId;
        const currentUser = outer2_16.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        if (null != id) {
          const voiceConnectedGuildAndChannel = self.getVoiceConnectedGuildAndChannel();
          ({ currentGuildId, currentVoiceChannelId } = voiceConnectedGuildAndChannel);
          const channel = outer2_8.getChannel(currentVoiceChannelId);
          if (null != currentVoiceChannelId) {
            if (null != channel) {
              const overlayUser = self.getOverlayUser(id);
              if (null != overlayUser) {
                const _Object = Object;
                const keys = Object.keys(outer2_17.getVoiceStatesForChannel(currentVoiceChannelId));
                let tmp5 = overlayUser;
                if (!overlayUser.speaking) {
                  const tmp4 = outer2_27(keys);
                  let iter = tmp4();
                  tmp5 = null;
                  if (!iter.done) {
                    while (true) {
                      let tmp6 = self;
                      let overlayUser1 = self.getOverlayUser(iter.value);
                      if (null == overlayUser1) {
                        let iter2 = tmp4();
                        iter = iter2;
                        tmp5 = null;
                        if (iter2.done) {
                          break;
                        }
                      } else {
                        tmp5 = overlayUser1;
                        if (overlayUser1.speaking) {
                          break;
                        }
                      }
                      break;
                    }
                  }
                }
                if (null == tmp5) {
                  tmp5 = overlayUser;
                }
                const items = [tmp5];
                if (tmp5.userId !== overlayUser.userId) {
                  items.push(overlayUser);
                }
                let num = 0;
                if (0 < keys.length) {
                  while (true) {
                    let tmp10 = keys[num];
                    let tmp11 = tmp9;
                    if (tmp10 !== id) {
                      let userId;
                      if (null != tmp5) {
                        userId = tmp5.userId;
                      }
                      let tmp13 = tmp5;
                      tmp11 = tmp9;
                      if (tmp10 !== userId) {
                        let tmp14 = self;
                        let overlayUser2 = self.getOverlayUser(tmp10);
                        let tmp16 = tmp5;
                        tmp11 = overlayUser2;
                        if (null != overlayUser2) {
                          let arr = items.push(overlayUser2);
                          let tmp18 = tmp5;
                          tmp11 = overlayUser2;
                          if (items.length >= 3) {
                            break;
                          }
                        }
                        break;
                      }
                    }
                    num = num + 1;
                    tmp9 = tmp11;
                    if (num >= keys.length) {
                      break;
                    }
                  }
                }
                if (self.overlayState !== outer2_22.SHOWING) {
                  const result = self.refreshChannelSelectorResults("");
                }
                self.currentVoiceChannelId = currentVoiceChannelId;
                if (null != outer2_1(outer2_2[27])) {
                  let obj = outer2_1(outer2_2[27]);
                  obj = { users: items, channelName: MobileVoiceOverlayManager(outer2_2[31]).computeChannelName(channel, outer2_16, outer2_14) };
                  const guild = outer2_10.getGuild(currentGuildId);
                  let name;
                  if (null != guild) {
                    name = guild.name;
                  }
                  let str2 = "";
                  if (null != name) {
                    str2 = name;
                  }
                  obj.guildName = str2;
                  obj.guildId = currentGuildId;
                  obj.channelId = currentVoiceChannelId;
                  obj.extraUsers = keys.length - items.length;
                  obj.deafened = outer2_11.isSelfDeaf();
                  obj.muted = outer2_11.isSelfMute();
                  obj.connectionQuality = outer2_13.getQuality();
                  obj.canGenerateInvite = outer2_12.can(outer2_20.CREATE_INSTANT_INVITE, channel);
                  obj.channelSelectorResults = self.channelSelectorResults;
                  obj.setData(obj);
                  const obj3 = MobileVoiceOverlayManager(outer2_2[31]);
                }
              }
            }
          }
        }
      };
      this.getVoiceConnectedGuildAndChannel = () => {
        const obj = {};
        const guildId = outer2_13.getGuildId();
        let tmp2 = null;
        if (null != guildId) {
          tmp2 = guildId;
        }
        obj.currentGuildId = tmp2;
        const channelId = outer2_13.getChannelId();
        let tmp4 = null;
        if (null != channelId) {
          tmp4 = channelId;
        }
        obj.currentVoiceChannelId = tmp4;
        return obj;
      };
      this.refreshChannelSelectorResults = (query) => {
        let currentGuildId = null;
        if (0 === query.length) {
          currentGuildId = self.getVoiceConnectedGuildAndChannel().currentGuildId;
        }
        let obj = outer2_1(outer2_2[32]);
        obj = {
          query,
          guildId: currentGuildId,
          limit: 15,
          fuzzy: true,
          filter(id) {
            return id.id !== outer1_0.currentVoiceChannelId && !id.isGuildStageVoice();
          },
          type: outer2_9,
          allowEmptyQueries: true
        };
        self.channelSelectorResults = obj.queryChannels(obj).map((record) => {
          record = record.record;
          const obj = { channelId: record.id, guildId: record.guild_id, channelName: MobileVoiceOverlayManager(outer3_2[31]).computeChannelName(record, outer3_16, outer3_14) };
          const guild = outer3_10.getGuild(record.guild_id);
          let name;
          if (null != guild) {
            name = guild.name;
          }
          let str = "";
          let str2 = "";
          if (null != name) {
            str2 = name;
          }
          obj.guildName = str2;
          const channel = outer3_8.getChannel(record.parent_id);
          if (null != channel) {
            str = MobileVoiceOverlayManager(outer3_2[31]).computeChannelName(channel, outer3_16, outer3_14);
            const obj3 = MobileVoiceOverlayManager(outer3_2[31]);
          }
          obj.categoryName = str;
          return obj;
        });
      };
      this.showOverlay = () => {
        const voiceConnectedGuildAndChannel = self.getVoiceConnectedGuildAndChannel();
        const channel = outer2_8.getChannel(voiceConnectedGuildAndChannel.currentVoiceChannelId);
        const rTCConnectionId = outer2_13.getRTCConnectionId();
        let obj = outer2_1(outer2_2[33]);
        obj = { type: "voice", rtc_connection_id: rTCConnectionId };
        const merged = Object.assign(MobileVoiceOverlayManager(outer2_2[34]).collectChannelAnalyticsMetadata(channel));
        const obj3 = MobileVoiceOverlayManager(outer2_2[34]);
        const merged1 = Object.assign(MobileVoiceOverlayManager(outer2_2[34]).collectGuildAnalyticsMetadata(voiceConnectedGuildAndChannel.currentGuildId));
        obj.track(outer2_19.MOBILE_OVERLAY_OPENED, obj);
        if (null != outer2_1(outer2_2[27])) {
          outer2_1(outer2_2[27]).showOverlay(outer2_23);
          const obj5 = outer2_1(outer2_2[27]);
        }
        self.updateOverlayUI();
        self.overlayState = outer2_22.SHOWING;
      };
      this.hideOverlay = () => {
        const rTCConnectionId = outer2_13.getRTCConnectionId();
        outer2_1(outer2_2[33]).track(outer2_19.MOBILE_OVERLAY_CLOSED, { type: "voice", rtc_connection_id: rTCConnectionId });
        const obj = outer2_1(outer2_2[33]);
        outer2_1(outer2_2[33]).track(outer2_19.MOBILE_OVERLAY_CLOSED, {});
        if (null != outer2_1(outer2_2[27])) {
          outer2_1(outer2_2[27]).hideOverlay();
          const obj3 = outer2_1(outer2_2[27]);
        }
        self.overlayState = outer2_22.NOT_SHOWING;
      };
      this.isOverlayShowing = () => {
        let tmp = self.overlayState === outer2_22.SHOWING;
        if (!tmp) {
          tmp = self.overlayState === outer2_22.WAITING_FOR_SERVICE;
        }
        return tmp;
      };
      this.getOverlayUser = (userId) => {
        const user = outer2_16.getUser(userId);
        if (null == user) {
          return null;
        } else {
          const obj = { userId, avatar: user.avatar, speaking: outer2_15.isSpeaking(userId), discriminator: user.discriminator };
          return obj;
        }
      };
      this.handleLayoutTrashed = () => {
        self.trashedVoiceChannelId = self.currentVoiceChannelId;
        const result = self.handleOverlayUIStoreUpdate();
      };
      this.handleChannelQueryUpdate = (arg0) => {
        const result = self.refreshChannelSelectorResults(arg0);
        const result1 = self.handleOverlayUIStoreUpdate();
      };
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      const obj = MobileVoiceOverlayManager(outer1_2[29]);
      if (!tmp) {
        const prototype = outer1_25.prototype;
        const tmp8 = new outer1_25(self);
        const result = outer1_1(outer1_2[35]).registerCallableModule("MobileVoiceOverlayManager", tmp8);
        self.isBatchedBridgeInitialized = true;
        const obj2 = outer1_1(outer1_2[35]);
      }
      if (outer1_18.getEnabled()) {
        self.handleOverlayEnable();
      }
      outer1_18.addChangeListener(self.handleMobileVoiceOverlayStoreUpdate);
    }
  };
  let items = [obj, ];
  obj = {
    key: "terminate",
    value() {
      outer1_18.removeChangeListener(this.handleMobileVoiceOverlayStoreUpdate);
      const result = this.unsubscribeFromVoiceStateStoreUpdates();
      const result1 = this.unsubscribeFromNativeEvents();
    }
  };
  items[1] = obj;
  return callback2(MobileVoiceOverlayManager, items);
})();
tmp15 = new tmp15();
let closure_24 = tmp15;
let closure_25 = (() => {
  class NativeCallableInterface {
    constructor(arg0) {
      tmp = outer1_6(this, NativeCallableInterface);
      this.manager = arg0;
      return;
    }
  }
  let obj = {
    key: "onLayoutTrashed",
    value() {
      const manager = this.manager;
      manager.handleLayoutTrashed();
    }
  };
  const items = [obj, ];
  obj = {
    key: "onChannelQueryUpdate",
    value(arg0) {
      const manager = this.manager;
      const result = manager.handleChannelQueryUpdate(arg0);
    }
  };
  items[1] = obj;
  return callback2(NativeCallableInterface, items);
})();
tmp17 = new tmp17();
let result = require("_inherits").fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx");

export default tmp17;
