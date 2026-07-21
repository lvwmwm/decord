// Module ID: 13335
// Function ID: 101340
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13335 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isPlaybackComplete(duration) {
  if (duration.duration > 0) {
    return duration.duration - duration.time <= closure_18;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ NativeEventEmitter: closure_8, NativeModules: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
const AppStates = arg1(dependencyMap[12]).AppStates;
const ActivityPanelModes = arg1(dependencyMap[13]).ActivityPanelModes;
const tmp2 = arg1(dependencyMap[5]);
({ PLAYBACK_COMPLETION_DETECTION_TOLERANCE: closure_18, PLAYBACK_PROGRESS_UPDATE_INTERVAL: closure_19 } = arg1(dependencyMap[14]));
const Permissions = arg1(dependencyMap[15]).Permissions;
let importDefaultResult = importDefault(dependencyMap[16]);
importDefaultResult = new importDefaultResult("MediaPlayerManager");
let obj = arg1(dependencyMap[17]);
obj = obj.create((arg0) => {
  const arg1 = arg0;
  const obj = {
    SCREENSHARE_STATE_UPDATE: "843d42ee8ccb539c61b4f45fba39870a",
    notificationSoundPackId: "en-GB.messages.843d42ee8ccb539c61b4f45fba39870a.compiled.messages",
    _forceFlush: "jsona",
    mediaEventSubscriptions: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
    _$esjava$bra: "Greek",
    getCustomGuildScore: "el",
    billingAgreementDetails: "simple",
    STREAM_WATCH: true,
    activeMediaPlayerSource: undefined,
    mediaSourceMessage: undefined,
    progress: undefined,
    closePip() {
      arg0(closure_2[18]).batchUpdates(() => callback({ showPip: false }));
    },
    displayedMediaItemIdsPerChannel: {},
    currentlyDisplayedChannelId: undefined
  };
  return obj;
});
let tmp7 = (arg0) => {
  class MediaPlayerManager {
    constructor() {
      self = this;
      tmp = closure_3(this, MediaPlayerManager);
      obj = closure_6(MediaPlayerManager);
      tmp2 = closure_5;
      if (closure_23()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.subscriptions = [];
      tmp2Result.voicePanelStoreUnsubscribe = undefined;
      tmp2Result.showPipUnsubscribe = undefined;
      pauseAndClosePip = tmp2Result.pauseAndClosePip;
      tmp2Result.pauseAndClosePip = pauseAndClosePip.bind(tmp2Result);
      handleVoicePanelStateUpdated = tmp2Result.handleVoicePanelStateUpdated;
      tmp2Result.handleVoicePanelStateUpdated = handleVoicePanelStateUpdated.bind(tmp2Result);
      handleEmbeddedActivitiesUpdated = tmp2Result.handleEmbeddedActivitiesUpdated;
      tmp2Result.handleEmbeddedActivitiesUpdated = handleEmbeddedActivitiesUpdated.bind(tmp2Result);
      handleMediaPlayerPlaybackRateChanged = tmp2Result.handleMediaPlayerPlaybackRateChanged;
      tmp2Result.handleMediaPlayerPlaybackRateChanged = handleMediaPlayerPlaybackRateChanged.bind(tmp2Result);
      handleMediaPlayerPlaybackSourceChanged = tmp2Result.handleMediaPlayerPlaybackSourceChanged;
      tmp2Result.handleMediaPlayerPlaybackSourceChanged = handleMediaPlayerPlaybackSourceChanged.bind(tmp2Result);
      handleMediaPlayerViewWillAppear = tmp2Result.handleMediaPlayerViewWillAppear;
      tmp2Result.handleMediaPlayerViewWillAppear = handleMediaPlayerViewWillAppear.bind(tmp2Result);
      handleMediaPlayerViewDidDisappear = tmp2Result.handleMediaPlayerViewDidDisappear;
      tmp2Result.handleMediaPlayerViewDidDisappear = handleMediaPlayerViewDidDisappear.bind(tmp2Result);
      updateDisplayState = tmp2Result.updateDisplayState;
      tmp2Result.updateDisplayState = updateDisplayState.bind(tmp2Result);
      updateMediaPermissions = tmp2Result.updateMediaPermissions;
      tmp2Result.updateMediaPermissions = updateMediaPermissions.bind(tmp2Result);
      return tmp2Result;
    }
  }
  const arg1 = MediaPlayerManager;
  callback2(MediaPlayerManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const self = this;
      const obj = new closure_8(closure_9.MediaPlayerManager);
      const items = [obj.addListener("MediaPlayerPlaybackSourceChanged", this.handleMediaPlayerPlaybackSourceChanged), obj.addListener("MediaPlayerPlaybackProgressUpdated", this.handleMediaPlayerPlaybackProgressUpdated), obj.addListener("MediaPlayerPlaybackRateChanged", this.handleMediaPlayerPlaybackRateChanged), obj.addListener("MediaPlayerViewWillAppear", this.handleMediaPlayerViewWillAppear), obj.addListener("MediaPlayerViewDidDisappear", this.handleMediaPlayerViewDidDisappear)];
      this.subscriptions = items;
      const MediaPlayerManager = closure_9.MediaPlayerManager;
      const result = MediaPlayerManager.subscribeToPlaybackEvents();
      const rootNavigationRef = MediaPlayerManager(closure_2[19]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", self.updateDisplayState);
      }
      self.voicePanelStoreUnsubscribe = closure_11.subscribe(self.handleVoicePanelStateUpdated);
      closure_10.addChangeListener(self.handleEmbeddedActivitiesUpdated);
      closure_12.addChangeListener(self.updateMediaPermissions);
      closure_14.addChangeListener(self.updateMediaPermissions);
      const obj2 = MediaPlayerManager(closure_2[19]);
      const subscription = callback(closure_2[20]).subscribe("LOGOUT", self.userDidClosePip);
      const obj4 = callback(closure_2[20]);
      if (obj5.isIOS()) {
        self.showPipUnsubscribe = closure_22.subscribe((showPip, showPip2) => {
          if (showPip2.showPip) {
            if (!showPip.showPip) {
              const MediaPlayerManager = closure_9.MediaPlayerManager;
              MediaPlayerManager.clearNowPlayingInfo();
            }
          }
          let tmp3 = 0 !== showPip2.rate && 0 === showPip.rate && !showPip.showPip;
          if (tmp3) {
            tmp3 = state.getState() === constants.ACTIVE;
          }
          if (tmp3) {
            const MediaPlayerManager2 = closure_9.MediaPlayerManager;
            MediaPlayerManager2.clearNowPlayingInfo();
          }
        });
      }
      closure_21.verbose("Initialized and subscribed to playback events");
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "updateMediaPermissions",
    value() {
      const MediaPlayerManager = this;
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        const activeMediaPlayerSource = store.getState().activeMediaPlayerSource;
        let channelId;
        if (null != activeMediaPlayerSource) {
          channelId = activeMediaPlayerSource.channelId;
        }
        let tmp3 = null;
        if (null != channelId) {
          tmp3 = channelId;
        }
        const channel = channel.getChannel(tmp3);
        if (null != channel) {
          if (!channel.isPrivate()) {
            if (!closure_14.can(constants.VIEW_CHANNEL, channel)) {
              const obj = { canAccessMedia: false };
              store.setState(obj);
              self.pauseCurrentPlayer();
            }
          }
        }
        store.setState({ canAccessMedia: true });
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      const subscriptions = this.subscriptions;
      const item = subscriptions.forEach((remove) => remove.remove());
      this.subscriptions = [];
      const rootNavigationRef = MediaPlayerManager(closure_2[19]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.removeListener("state", self.updateDisplayState);
      }
      const voicePanelStoreUnsubscribe = self.voicePanelStoreUnsubscribe;
      if (null != voicePanelStoreUnsubscribe) {
        voicePanelStoreUnsubscribe.call(self);
      }
      const showPipUnsubscribe = self.showPipUnsubscribe;
      if (null != showPipUnsubscribe) {
        showPipUnsubscribe.call(self);
      }
      closure_10.removeChangeListener(self.handleEmbeddedActivitiesUpdated);
      closure_12.removeChangeListener(self.updateMediaPermissions);
      closure_14.removeChangeListener(self.updateMediaPermissions);
      const obj = MediaPlayerManager(closure_2[19]);
      callback(closure_2[20]).unsubscribe("LOGOUT", self.userDidClosePip);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "pauseCurrentPlayer",
    value() {
      const MediaPlayerManager = closure_9.MediaPlayerManager;
      MediaPlayerManager.pauseCurrentPlayer();
    }
  };
  items[4] = {
    key: "playCurrentPlayer",
    value() {
      const MediaPlayerManager = closure_9.MediaPlayerManager;
      MediaPlayerManager.playCurrentPlayer();
    }
  };
  items[5] = {
    key: "userDidClosePip",
    value() {
      MediaPlayerManager(closure_2[18]).batchUpdates(() => state.setState({ aspectRatio: true, alignItems: true }));
    }
  };
  items[6] = {
    key: "pauseAndClosePip",
    value() {
      const MediaPlayerManager = this;
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        self.pauseCurrentPlayer();
        state.setState({ aspectRatio: true, alignItems: true });
      });
    }
  };
  items[7] = {
    key: "handleVoicePanelStateUpdated",
    value() {
      const self = this;
      const state = closure_11.getState();
      let result = state.isVoicePanelFullscreen();
      if (!result) {
        result = state.voicePanelsPIP.size > 0;
      }
      if (result) {
        self.pauseAndClosePip();
      }
    }
  };
  items[8] = {
    key: "handleEmbeddedActivitiesUpdated",
    value() {
      const self = this;
      if (closure_10.getActivityPanelMode() === constants.PIP) {
        self.pauseAndClosePip();
      }
    }
  };
  items[9] = {
    key: "handleMediaPlayerPlaybackRateChanged",
    value(arg0) {
      const MediaPlayerManager = this;
      ({ source: closure_1, rate: closure_2 } = arg0);
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        let activeMediaPlayerSource;
        let isPlaying;
        let wasPipClosedByUser;
        if (null == lib) {
          store.setState({ "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002488040065571517, "Bool(false)": -823154013994709700000000000000000000000000000000000000000000000 });
        }
        let id;
        if (null != lib) {
          id = lib.id;
        }
        closure_21.verbose("Playback rate changed to " + closure_2 + ": " + id);
        const state = store.getState();
        ({ activeMediaPlayerSource, isPlaying, wasPipClosedByUser } = state);
        let tmp10;
        if (null != lib) {
          tmp10 = lib;
        }
        if (tmp9(activeMediaPlayerSource, tmp10)) {
          let obj = { rate: closure_2, isPlaying: 0 !== closure_2 };
          let tmp18 = false === isPlaying;
          if (tmp18) {
            tmp18 = closure_2 > 0;
          }
          let tmp20 = !tmp18;
          if (!tmp18) {
            tmp20 = wasPipClosedByUser;
          }
          obj.wasPipClosedByUser = tmp20;
          store.setState(obj);
          self.updateDisplayState();
        } else {
          obj = { source: lib };
          const result = self.handleMediaPlayerPlaybackSourceChanged(obj);
          obj = { source: lib, rate: closure_2 };
          const result1 = self.handleMediaPlayerPlaybackRateChanged(obj);
        }
        const tmp4 = closure_2;
        const tmp9 = lib(closure_2[22]);
      });
    }
  };
  items[10] = {
    key: "handleMediaPlayerPlaybackProgressUpdated",
    value(arg0) {
      ({ source: closure_0, time: closure_1, duration: closure_2 } = arg0);
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        const state = store.getState();
        let tmp3;
        if (null != channelId) {
          tmp3 = channelId;
        }
        if (tmp2(state.activeMediaPlayerSource, tmp3)) {
          const currentlyDisplayedChannelId = state.currentlyDisplayedChannelId;
          if (state.showPip) {
            let tmp7;
            if (closure_2 > 0) {
              let obj = { time: callback, duration: closure_2 };
              obj = { time: callback, duration: closure_2 };
              const tmp11 = callback2(obj);
              obj.isCompleted = null != tmp11 && tmp11;
              tmp7 = obj;
            }
            const progress = state.progress;
            let tmp12 = null != progress && null != tmp7;
            if (tmp12) {
              const _Math = Math;
              tmp12 = Math.abs(tmp7.time - progress.time) < closure_19;
            }
            if (tmp12) {
              tmp12 = tmp7.time !== tmp7.duration;
            }
            if (!tmp12) {
              obj = { progress: tmp7 };
              store.setState(obj);
            }
          } else if (null != currentlyDisplayedChannelId) {
            let channelId;
            if (null != channelId) {
              channelId = channelId.channelId;
            }
          }
        }
      });
    }
  };
  items[11] = {
    key: "handleMediaPlayerPlaybackSourceChanged",
    value(source) {
      const MediaPlayerManager = this;
      source = source.source;
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        let id;
        const state = store.getState();
        if (null != source) {
          id = source.id;
        }
        closure_21.verbose("Playback source changed: " + id);
        const activeMediaPlayerSource = state.activeMediaPlayerSource;
        let tmp7;
        if (null != activeMediaPlayerSource) {
          tmp7 = activeMediaPlayerSource;
        }
        let tmp8;
        if (null != source) {
          tmp8 = source;
        }
        if (!tmp6(tmp7, tmp8)) {
          const obj = { "Null": "Not Eligible", "Null": "Not Eligible", "Null": "long-animation-frame", "Null": true, "Null": "onunhandledrejection", "Null": "db.vacuum" };
          let tmp11;
          if (null != source) {
            tmp11 = source;
          }
          obj.activeMediaPlayerSource = tmp11;
          let orFetchMediaSourceMessage;
          if (null != source) {
            orFetchMediaSourceMessage = self.getOrFetchMediaSourceMessage(source);
          }
          obj.mediaSourceMessage = orFetchMediaSourceMessage;
          obj.progress = undefined;
          store.setState(obj);
          const result = self.updateMediaPermissions();
          self.updateDisplayState();
        }
      });
    }
  };
  items[12] = {
    key: "getOrFetchMediaSourceMessage",
    value(arg0) {
      let assetUrl;
      let channelId;
      let messageId;
      const MediaPlayerManager = this;
      ({ channelId, messageId, assetUrl } = arg0);
      if (null != messageId) {
        if (null != channelId) {
          const message = store.getMessage(channelId, messageId);
          if (null != message) {
            return message;
          } else {
            if (null != assetUrl) {
              const messages = store.getMessages(channelId);
              const found = messages.toArray().find((getContentMessage) => {
                const contentMessage = getContentMessage.getContentMessage();
                let someResult;
                if (null != contentMessage) {
                  const attachments = contentMessage.attachments;
                  if (null != attachments) {
                    someResult = attachments.some((url) => url.url === closure_1);
                  }
                }
                return someResult;
              });
              if (null != found) {
                return found;
              }
              const toArrayResult = messages.toArray();
            }
            const obj = { channelId, messageId };
            const message1 = assetUrl(closure_2[23]).fetchMessage(obj);
            message1.then((arg0) => {
              if (null != arg0) {
                const result = self.handleMediaSourceMessageUpdated(arg0);
              }
            });
            const obj2 = assetUrl(closure_2[23]);
          }
        }
      }
    }
  };
  items[13] = {
    key: "handleMediaSourceMessageUpdated",
    value(arg0) {
      const MediaPlayerManager = arg0;
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        const activeMediaPlayerSource = store.getState().activeMediaPlayerSource;
        let messageId;
        if (null != activeMediaPlayerSource) {
          messageId = activeMediaPlayerSource.messageId;
        }
        if (messageId === arg0.id) {
          const obj = { mediaSourceMessage: arg0 };
          store.setState(obj);
        }
      });
    }
  };
  items[14] = {
    key: "handleMediaPlayerViewWillAppear",
    value(arg0) {
      const MediaPlayerManager = this;
      ({ mediaItemIds: closure_1, channelId: closure_2 } = arg0);
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        const displayedMediaItemIdsPerChannel = store.getState().displayedMediaItemIdsPerChannel;
        let items = displayedMediaItemIdsPerChannel[closure_2];
        if (null == items) {
          items = [];
        }
        const items1 = [...closure_1];
        displayedMediaItemIdsPerChannel[closure_2] = new Set(items1);
        store.setState({ displayedMediaItemIdsPerChannel });
        self.updateDisplayState();
      });
    }
  };
  items[15] = {
    key: "handleMediaPlayerViewDidDisappear",
    value(arg0) {
      const MediaPlayerManager = this;
      ({ mediaItemIds: closure_1, channelId: closure_2 } = arg0);
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        const displayedMediaItemIdsPerChannel = store.getState().displayedMediaItemIdsPerChannel;
        let set = displayedMediaItemIdsPerChannel[closure_2];
        if (null == set) {
          const _Set = Set;
          set = new Set();
        }
        const items = [...set];
        const set1 = new Set(items.filter((arg0) => !closure_1.includes(arg0)));
        if (0 === set1.size) {
          delete r4[r2];
        } else {
          displayedMediaItemIdsPerChannel[closure_2] = set1;
        }
        store.setState({ displayedMediaItemIdsPerChannel });
        self.updateDisplayState();
      });
    }
  };
  items[16] = {
    key: "updateDisplayState",
    value() {
      MediaPlayerManager(closure_2[18]).batchUpdates(() => {
        let activeMediaPlayerSource;
        let displayedMediaItemIdsPerChannel;
        let isPlaying;
        let progress;
        const state = store.getState();
        ({ displayedMediaItemIdsPerChannel, activeMediaPlayerSource } = state);
        if (undefined === activeMediaPlayerSource) {
          activeMediaPlayerSource = {};
        }
        const id = activeMediaPlayerSource.id;
        ({ progress, isPlaying } = state);
        if (state.wasPipClosedByUser) {
          let obj = { showPip: false };
          store.setState(obj);
        } else if (isPlaying) {
          if (!isPlaying) {
            let tmp4 = null != progress;
            if (tmp4) {
              tmp4 = !callback2(progress);
            }
            isPlaying = tmp4;
          }
          obj = callback(closure_2[24]);
          const focusedChannelId = obj.getFocusedChannelId();
          if (null != focusedChannelId) {
            if (state.currentlyDisplayedChannelId !== focusedChannelId) {
              for (const key10026 in displayedMediaItemIdsPerChannel) {
                let tmp21 = key10026;
                if (key10026 === focusedChannelId) {
                  continue;
                } else {
                  delete r5[r12];
                  // continue
                }
                continue;
              }
            }
          }
          if (null != id) {
            if (null != focusedChannelId) {
              let obj3 = displayedMediaItemIdsPerChannel[focusedChannelId];
              if (null != obj3) {
                obj = {};
                if (isPlaying) {
                  isPlaying = !obj3.has(id);
                }
                obj.showPip = isPlaying;
                obj.currentlyDisplayedChannelId = focusedChannelId;
                obj.displayedMediaItemIdsPerChannel = displayedMediaItemIdsPerChannel;
                store.setState(obj);
              } else {
                const obj1 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
                store.setState(obj1);
              }
            } else {
              const obj2 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
              store.setState(obj2);
            }
          } else {
            obj3 = { showPip: isPlaying, currentlyDisplayedChannelId: focusedChannelId, displayedMediaItemIdsPerChannel };
            store.setState(obj3);
          }
        }
      });
    }
  };
  return callback(MediaPlayerManager, items);
}(importDefault(dependencyMap[25]));
tmp7 = new tmp7();
const tmp3 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/media/native/MediaPlayerManager.tsx");

export default tmp7;
export const useMediaPlayerManagerStore = obj;
export { isPlaybackComplete };
