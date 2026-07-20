// Module ID: 13320
// Function ID: 101265
// Name: _isNativeReflectConstruct
// Dependencies: [5, 7, 6, 15, 17, 18, 4169, 1906, 4573, 3, 13331, 13332, 10227, 5726, 13333, 2, 4169, 4575, 3801, 2, 6, 7, 15, 17, 18, 1194, 4169, 686, 4522, 2, 6, 7, 15, 17, 18, 27, 4120, 1906]

// Module 13320 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_4 from "_defineProperties";
import closure_5 from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import closure_7 from "_getPrototypeOf";
import closure_8 from "_inherits";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import timestamp from "timestamp";
import importDefaultResult1 from "getVolumeForSound";
import getSoundboardSoundURL from "getSoundboardSoundURL";
import createSound from "createSound";
import _fetchDefaultSoundsFromApi2 from "_fetchDefaultSoundsFromApi2";
import importDefaultResult2 from "_isNativeReflectConstruct";
import closure_18 from "keys";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import perceptualToAmplitude from "perceptualToAmplitude";
import explicitContentFromProto from "explicitContentFromProto";
import keys from "keys";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { intl } from "_isNativeReflectConstruct";
import { intl as intl2 } from "_isNativeReflectConstruct";
import { intl as intl3 } from "_isNativeReflectConstruct";
import { intl as intl4 } from "_isNativeReflectConstruct";
import { intl as intl5 } from "_isNativeReflectConstruct";
import { intl as intl6 } from "_isNativeReflectConstruct";
import { intl as intl7 } from "_isNativeReflectConstruct";
import { intl as intl8 } from "_isNativeReflectConstruct";
import { intl as intl9 } from "_isNativeReflectConstruct";
import { intl as intl10 } from "_isNativeReflectConstruct";
import { intl as intl11 } from "_isNativeReflectConstruct";
import tmp17 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
({ AnalyticEvents: closure_19, Permissions: closure_20 } = _isNativeReflectConstruct);
const items = [importDefaultResult2, importDefaultResult1, importDefaultResult];
let closure_22 = { DISABLED: 0, [0]: "DISABLED", NOT_SHOWING: 1, [1]: "NOT_SHOWING", WAITING_FOR_SERVICE: 2, [2]: "WAITING_FOR_SERVICE", SHOWING: 3, [3]: "SHOWING" };
const obj = {};
obj.useSpeaker = intl.string(require("_isNativeReflectConstruct").t.CVxXDM);
obj.mute = intl2.string(require("_isNativeReflectConstruct").t.w4m945);
obj.disconnectFromVoice = intl3.string(require("_isNativeReflectConstruct").t./lEZpt);
obj.getInvite = intl4.string(require("_isNativeReflectConstruct").t.JYzIWe);
obj.switchChannels = intl5.string(require("_isNativeReflectConstruct").t.zJvWqU);
obj.openDiscord = intl6.string(require("_isNativeReflectConstruct").t.G/Ez6p);
obj.inviteLinkCopied = intl7.string(require("_isNativeReflectConstruct").t.OhctG7);
obj.channelSelect = intl8.string(require("_isNativeReflectConstruct").t.r2ptsz);
obj.closeWindow = intl9.string(require("_isNativeReflectConstruct").t.gaifwY);
obj.searchChannels = intl10.string(require("_isNativeReflectConstruct").t.wM7uRI);
obj.noResults = intl11.string(require("_isNativeReflectConstruct").t.wk3qsA);
let tmp15 = () => {
  class MobileVoiceOverlayManager {
    constructor() {
      MobileVoiceOverlayManager = this;
      tmp = _possibleConstructorReturn(this, MobileVoiceOverlayManager);
      this.currentVoiceChannelId = null;
      this.trashedVoiceChannelId = null;
      this.overlayState = closure_22.DISABLED;
      this.channelSelectorResults = [];
      this.layoutTrashedSubscription = null;
      this.channelQueryUpdateSubscription = null;
      this.isBatchedBridgeInitialized = false;
      this.handleMobileVoiceOverlayStoreUpdate = () => {
        if (enabled.getEnabled()) {
          obj.handleOverlayEnable();
        } else {
          const result = obj.unsubscribeFromVoiceStateStoreUpdates();
          const result1 = obj.unsubscribeFromNativeEvents();
          obj.overlayState = constants3.DISABLED;
          if (obj.isOverlayShowing()) {
            if (null != callback(closure_2[27])) {
              callback(closure_2[27]).hideOverlay();
              const obj2 = callback(closure_2[27]);
            }
          }
        }
      };
      this.handleOverlayEnable = () => {
        function handleEnableFail() {
          callback(closure_2[28]).setEnabled(false);
          handleEnableFail.overlayState = constants.DISABLED;
        }
        if (null != callback(closure_2[27])) {
          const obj = callback(closure_2[27]);
          const enableOverlayResult = callback(closure_2[27]).enableOverlay();
          callback(closure_2[27]).enableOverlay().then((arg0) => {
            if (arg0) {
              const result = handleEnableFail.subscribeToVoiceStateStoreUpdates();
              const result1 = handleEnableFail.subscribeToNativeEvents();
              handleEnableFail.overlayState = constants.NOT_SHOWING;
            } else {
              handleEnableFail();
            }
          }).catch(() => {
            handleEnableFail();
          });
          const nextPromise = callback(closure_2[27]).enableOverlay().then((arg0) => {
            if (arg0) {
              const result = handleEnableFail.subscribeToVoiceStateStoreUpdates();
              const result1 = handleEnableFail.subscribeToNativeEvents();
              handleEnableFail.overlayState = constants.NOT_SHOWING;
            } else {
              handleEnableFail();
            }
          });
        }
      };
      this.subscribeToVoiceStateStoreUpdates = () => {
        if (!self.isSubscribedToVoiceStateStoreUpdates()) {
          const item = closure_21.forEach((addChangeListener) => {
            addChangeListener.addChangeListener(obj.handleOverlayUIStoreUpdate);
          });
        }
      };
      this.unsubscribeFromVoiceStateStoreUpdates = () => {
        if (self.isSubscribedToVoiceStateStoreUpdates()) {
          const item = closure_21.forEach((removeChangeListener) => {
            removeChangeListener.removeChangeListener(obj.handleOverlayUIStoreUpdate);
          });
        }
      };
      this.isSubscribedToVoiceStateStoreUpdates = () => null != closure_21.find((_changeCallbacks) => _changeCallbacks._changeCallbacks.has(obj.handleOverlayUIStoreUpdate));
      this.subscribeToNativeEvents = () => {
        if (obj.isFabric()) {
          self.layoutTrashedSubscription = callback(closure_2[27]).onLayoutTrashed(self.handleLayoutTrashed);
          const obj2 = callback(closure_2[27]);
          self.channelQueryUpdateSubscription = callback(closure_2[27]).onChannelQueryUpdate(self.handleChannelQueryUpdate);
          const obj3 = callback(closure_2[27]);
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
        if (self.overlayState !== constants3.DISABLED) {
          const currentVoiceChannelId = self.getVoiceConnectedGuildAndChannel().currentVoiceChannelId;
          if (currentVoiceChannelId !== self.currentVoiceChannelId) {
            self.currentVoiceChannelId = currentVoiceChannelId;
            self.trashedVoiceChannelId = null;
          }
          if (null != currentVoiceChannelId) {
            if (currentVoiceChannelId !== self.trashedVoiceChannelId) {
              const overlayState = self.overlayState;
              if (constants3.WAITING_FOR_SERVICE !== overlayState) {
                if (constants3.NOT_SHOWING === overlayState) {
                  const result = callback(closure_2[30]).isForegroundServiceRunning((arg0) => {
                    if (arg0) {
                      obj.showOverlay();
                    } else {
                      obj.overlayState = constants.NOT_SHOWING;
                    }
                  });
                  self.overlayState = constants3.WAITING_FOR_SERVICE;
                } else if (constants3.SHOWING === overlayState) {
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
        const currentUser = authStore.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        if (null != id) {
          const voiceConnectedGuildAndChannel = self.getVoiceConnectedGuildAndChannel();
          ({ currentGuildId, currentVoiceChannelId } = voiceConnectedGuildAndChannel);
          const channel = store.getChannel(currentVoiceChannelId);
          if (null != currentVoiceChannelId) {
            if (null != channel) {
              const overlayUser = self.getOverlayUser(id);
              if (null != overlayUser) {
                const _Object = Object;
                const keys = Object.keys(voiceStatesForChannel.getVoiceStatesForChannel(currentVoiceChannelId));
                let tmp5 = overlayUser;
                if (!overlayUser.speaking) {
                  const tmp4 = callback2(keys);
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
                    let tmp9 = tmp11;
                    if (num >= keys.length) {
                      break;
                    }
                  }
                }
                if (self.overlayState !== constants3.SHOWING) {
                  const result = self.refreshChannelSelectorResults("");
                }
                self.currentVoiceChannelId = currentVoiceChannelId;
                if (null != callback(closure_2[27])) {
                  let obj = callback(closure_2[27]);
                  obj = { users: items, channelName: self(closure_2[31]).computeChannelName(channel, authStore, getSoundboardSoundURL) };
                  const guild = guild.getGuild(currentGuildId);
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
                  obj.deafened = closure_11.isSelfDeaf();
                  obj.muted = closure_11.isSelfMute();
                  obj.connectionQuality = store2.getQuality();
                  obj.canGenerateInvite = timestamp.can(constants2.CREATE_INSTANT_INVITE, channel);
                  obj.channelSelectorResults = self.channelSelectorResults;
                  obj.setData(obj);
                  const obj3 = self(closure_2[31]);
                }
              }
            }
          }
        }
      };
      this.getVoiceConnectedGuildAndChannel = () => {
        const obj = {};
        const guildId = store2.getGuildId();
        let tmp2 = null;
        if (null != guildId) {
          tmp2 = guildId;
        }
        obj.currentGuildId = tmp2;
        const channelId = store2.getChannelId();
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
        let obj = callback(closure_2[32]);
        obj = {
          query,
          guildId: currentGuildId,
          limit: 15,
          fuzzy: true,
          filter(id) {
            return id.id !== lib.currentVoiceChannelId && !id.isGuildStageVoice();
          },
          type: closure_9,
          allowEmptyQueries: true
        };
        self.channelSelectorResults = obj.queryChannels(obj).map((record) => {
          record = record.record;
          const obj = { channelId: record.id, guildId: record.guild_id, channelName: lib(closure_2[31]).computeChannelName(record, _fetchDefaultSoundsFromApi2, getSoundboardSoundURL) };
          const guild = guild.getGuild(record.guild_id);
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
          const channel = channel.getChannel(record.parent_id);
          if (null != channel) {
            str = lib(closure_2[31]).computeChannelName(channel, _fetchDefaultSoundsFromApi2, getSoundboardSoundURL);
            const obj3 = lib(closure_2[31]);
          }
          obj.categoryName = str;
          return obj;
        });
      };
      this.showOverlay = () => {
        const voiceConnectedGuildAndChannel = self.getVoiceConnectedGuildAndChannel();
        const channel = store.getChannel(voiceConnectedGuildAndChannel.currentVoiceChannelId);
        const rTCConnectionId = store2.getRTCConnectionId();
        let obj = callback(closure_2[33]);
        obj = { type: "voice", rtc_connection_id: rTCConnectionId };
        const merged = Object.assign(self(closure_2[34]).collectChannelAnalyticsMetadata(channel));
        const obj3 = self(closure_2[34]);
        const merged1 = Object.assign(self(closure_2[34]).collectGuildAnalyticsMetadata(voiceConnectedGuildAndChannel.currentGuildId));
        obj.track(constants.MOBILE_OVERLAY_OPENED, obj);
        if (null != callback(closure_2[27])) {
          callback(closure_2[27]).showOverlay(closure_23);
          const obj5 = callback(closure_2[27]);
        }
        self.updateOverlayUI();
        self.overlayState = constants3.SHOWING;
      };
      this.hideOverlay = () => {
        const rTCConnectionId = store2.getRTCConnectionId();
        callback(closure_2[33]).track(constants.MOBILE_OVERLAY_CLOSED, { type: "voice", rtc_connection_id: rTCConnectionId });
        const obj = callback(closure_2[33]);
        callback(closure_2[33]).track(constants.MOBILE_OVERLAY_CLOSED, {});
        if (null != callback(closure_2[27])) {
          callback(closure_2[27]).hideOverlay();
          const obj3 = callback(closure_2[27]);
        }
        self.overlayState = constants3.NOT_SHOWING;
      };
      this.isOverlayShowing = () => {
        let tmp = self.overlayState === constants3.SHOWING;
        if (!tmp) {
          tmp = self.overlayState === constants3.WAITING_FOR_SERVICE;
        }
        return tmp;
      };
      this.getOverlayUser = (userId) => {
        const user = authStore.getUser(userId);
        if (null == user) {
          return null;
        } else {
          const obj = { userId, avatar: user.avatar, speaking: speaking.isSpeaking(userId), discriminator: user.discriminator };
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
  const arg1 = MobileVoiceOverlayManager;
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      const obj = MobileVoiceOverlayManager(closure_2[29]);
      if (!tmp) {
        const prototype = ctor.prototype;
        const tmp8 = new ctor(self);
        const result = callback(closure_2[35]).registerCallableModule("MobileVoiceOverlayManager", tmp8);
        self.isBatchedBridgeInitialized = true;
        const obj2 = callback(closure_2[35]);
      }
      if (closure_18.getEnabled()) {
        self.handleOverlayEnable();
      }
      closure_18.addChangeListener(self.handleMobileVoiceOverlayStoreUpdate);
    }
  };
  const items = [obj, ];
  obj = {
    key: "terminate",
    value() {
      closure_18.removeChangeListener(this.handleMobileVoiceOverlayStoreUpdate);
      const result = this.unsubscribeFromVoiceStateStoreUpdates();
      const result1 = this.unsubscribeFromNativeEvents();
    }
  };
  items[1] = obj;
  return callback2(MobileVoiceOverlayManager, items);
}();
tmp15 = new tmp15();
let closure_25 = () => {
  class NativeCallableInterface {
    constructor(arg0) {
      tmp = _possibleConstructorReturn(this, NativeCallableInterface);
      this.manager = arg0;
      return;
    }
  }
  const arg1 = NativeCallableInterface;
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
}();
tmp17 = new tmp17();
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx");

export default tmp17;
