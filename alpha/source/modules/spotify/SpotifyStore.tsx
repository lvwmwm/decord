// Module ID: 7226
// Function ID: 7227
// Name: SpotifyStore
// Dependencies: [5, 2137, 502, 7022, 6978, 6005, 6878, 5918, 7227, 1072, 7024, 1089, 3, 5087, 572, 559, 7228, 12, 7246, 1252, 558, 7248, 6963, 1380, 504, 7249, 2]

// Module 7226 (SpotifyStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1089 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Timers from "Timers" /* 5087 */;
import useIsSpeaking from "useIsSpeaking" /* 6963 */;
import SpotifyActionCreators from "SpotifyActionCreators" /* 7228 */;
import stopSyncingUserActivityDefault from "stopSyncingUserActivity" /* 7248 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 7249 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import RunningGameStore from "RunningGameStore" /* 2137 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 7022 */;
import IdleStore from "IdleStore" /* 6978 */;
import PresenceStore from "PresenceStore" /* 6005 */;
import SpeakingStore from "SpeakingStore" /* 6878 */;
import VoiceStateStore from "VoiceStateStore" /* 5918 */;
import SpotifyConstants from "SpotifyConstants" /* 7227 */;
import Constants from "Constants" /* 1072 */;
import Platforms from "Platforms" /* 7024 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _null2, _require, body, c7, closure_3, closure_4, importDefault;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
const f92545 = (is_active) => is_active.is_active;
const f92546 = (party) => {
  const tmp = null != party.party && null != party.party.id && closure_1_15(party.party.id);
  return tmp;
};
const f92550 = () => closure_1_36.stop();
const f92557 = () => {
  let accessToken;
  let accountId;
  let obj2;
  obj = SpotifyActionCreators;
  const devices = obj.getDevices(obj.accountId, obj.accessToken);
  ({ accountId, accessToken } = obj);
  const SpotifyAPI = SpotifyActionCreators.SpotifyAPI;
  const request = { url: constants.PLAYER, query: obj2, onlyRetryOnAuthorizationErrors: true };
  obj2 = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
  const value = SpotifyAPI.get(accountId, accessToken, request);
  const nextPromise = value.then((body) => {
    let closure_0 = body;
    body = body.body;
    if (null != body) {
      const promise = closure_2_55(accountId, accessToken, body);
      promise.then(() => closure_0);
    } else {
      const obj2 = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
      obj = closure_2_1(closure_2_2[14]);
      obj.dispatch(obj2);
    }
  });
  nextPromise.catch(() => {
    obj = closure_2_1(closure_2_2[14]);
    const obj2 = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
    obj.dispatch(obj2);
  });
};
function upsertAccount(accountId, accessToken) {
  if (accountId in closure_41) {
    closure_41[accountId].accessToken = accessToken;
    const _HermesInternal2 = HermesInternal;
    logger.info("Updated account access token: " + accountId);
  } else {
    const self = this;
    if (typeof SpotifySocket === "function") {
      obj = Object.create(SpotifySocket.prototype);
      obj._requestedDisconnect = false;
      obj._requestedConnect = false;
      const obj2 = _modDef12;
      obj.handleDeviceStateChange = obj2.throttle(f92557, closure_30);
      obj.accountId = accountId;
      obj.accessToken = accessToken;
      const self2 = this;
      const self3 = this;
      const interval = new obj(5087).Interval();
      obj.pingInterval = interval;
      const self4 = this;
      const self5 = this;
      obj.backoff = new BackoffDefault(undefined, MINUTE);
      const tmp9 = new BackoffDefault(undefined, MINUTE);
      obj.connect();
      closure_41[accountId] = obj;
      const _HermesInternal = HermesInternal;
      logger.info("Added account: " + accountId);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function removeAccount(arg0) {
  if (arg0 in closure_41) {
    obj = closure_41[arg0];
    obj.disconnect();
    delete closure_41[arg0];
    let tmp7 = null != tmp5;
    const tmp4 = closure_43;
    if (tmp7) {
      tmp7 = null != _null;
    }
    if (tmp7) {
      tmp7 = tmp5.track.id === _null.track.id;
    }
    if (tmp7) {
      _null = null;
    }
    delete tmp4[arg0];
    const _HermesInternal = HermesInternal;
    logger.info("Removed account: " + arg0);
  }
}
function setActiveDevice(arg0, arg1) {
  const tmp = closure_42[arg0];
  for (const item10008 of tmp) {
    item10008.is_active = item10008.id === arg1;
    continue;
  }
}
function activitySync(userId, activity, arg2) {
  let c6;
  let party;
  let timestamps;
  function startPlayback() {
    return closure_0(...arguments);
  }
  let closure_0 = userId;
  importDefault = activity;
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp27 = closure_41[tmp4];
      if (!tmp27.connected) {
        continue;
      } else {
        if (null == closure_42[tmp4]) {
          continue;
        } else {
          let arr = tmp5[tmp4];
          let found = arr.find(f92545);
          if (null == found) {
            continue;
          } else {
            obj = { socket: tmp27, device: found };
            tmp2 = obj;
            break;
          }
          break;
        }
        continue;
      }
      continue;
    }
  }
  if (null == tmp2) {
    return false;
  } else {
    const socket = tmp2.socket;
    const device = tmp2.device;
    const sync_id = activity.sync_id;
    let obj3 = sync_id;
    ({ party, timestamps } = activity);
    if (null != sync_id) {
      if (null != party) {
        if (null != party.id) {
          if (closure_15(party.id)) {
            if (null != timestamps) {
              let start;
              if (null != timestamps.start) {
                start = timestamps.start;
              }
              _asyncToGenerator = false;
              const tmp10 = null != closure_43[socket.accountId] && false === closure_43[socket.accountId].repeat;
              if (tmp10) {
                _asyncToGenerator = null;
              }
              const metadata = activity.metadata;
              let type;
              const tmp11 = closure_14;
              if (metadata != null) {
                type = metadata.type;
              }
              if (type == null) {
                type = constants2.TRACK;
              }
              const tmp11Result = tmp11(type);
              let closure_7 = tmp11Result;
              if (null != tmp11Result) {
                obj3 = { userId, partyId: party.id, trackId: sync_id, startTime: start };
                closure_0 = _asyncToGenerator(async function(arg0, value) {
                  let accessToken;
                  let accountId;
                  if (c7 === 2) {
                    c7 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    let c5;
                    try {
                      let closure_2;
                      let album_id;
                      let combined;
                      c7 = 2;
                      if (0 === repeat) {
                        if (arg0 === 1) {
                          c7 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c7 = 3;
                          obj3 = { value, done: true };
                          return obj3;
                        } else {
                          id = tmp;
                          closure_2 = undefined;
                          album_id = undefined;
                          combined = undefined;
                          closure_0 = null;
                          const self = this;
                          const self2 = this;
                          timeout = new closure_0(socket[13]).Timeout();
                          c5 = 2;
                          const items = [, ];
                          const obj8 = closure_0(socket[18]);
                          items[0] = obj8.getMetadata(closure_1, closure_0);
                          const self3 = this;
                          const self4 = this;
                          const promise = new Promise((arg0) => {
                            closure_0 = arg0;
                            return closure_1_1.start(250, () => closure_0(null));
                          });
                          items[1] = promise;
                          repeat = 3;
                          c7 = 1;
                          const obj4 = { value: race(items), done: false };
                          return obj4;
                        }
                      } else if (1 === repeat) {
                        c5 = 0;
                        timeout.stop();
                        throw closure_4;
                      } else {
                        if (2 === repeat) {
                          c5 = 0;
                          timeout.stop();
                          if (closure_2_4 === closure_1_8) {
                            accessToken = closure_0 == null;
                            let type;
                            const tmp23 = closure_2_14;
                            if (!accessToken) {
                              type = closure_0.type;
                            }
                            closure_0 = type;
                            if (type == null) {
                              closure_0 = c7;
                            }
                            closure_2 = tmp23(closure_0);
                            album_id = undefined;
                            if (closure_0 != null) {
                              album_id = closure_0.album_id;
                            }
                            combined = undefined;
                            if (closure_2 === constants.TRACK) {
                              if (typeof album_id === "string") {
                                if (album_id.trim().length > 0) {
                                  const _HermesInternal = HermesInternal;
                                  combined = "spotify:album:" + album_id;
                                }
                              }
                            }
                            closure_1_8.albumContextUri = combined;
                            c5 = 3;
                            const tmp47 = closure_0(socket[16]);
                            ({ accountId, accessToken } = accessToken);
                            closure_1 = closure_2;
                            const play = tmp47.play;
                            if (closure_2 == null) {
                              closure_1 = c7;
                            }
                            const obj5 = { contextUri: combined, position: Math.max(0, Date.now() - c5), deviceId: id.id, repeat };
                            const _Math = Math;
                            const _Date = Date;
                            repeat = 5;
                            c7 = 1;
                            const obj6 = { value: play(accountId, accessToken, closure_4, closure_1, obj5), done: false };
                            return obj6;
                          }
                        } else if (3 === repeat) {
                          if (arg0 === 1) {
                            c7 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 0;
                            timeout.stop();
                            c7 = 3;
                            const obj7 = { value, done: true };
                            return obj7;
                          } else {
                            closure_0 = value;
                            c5 = 1;
                          }
                        } else if (4 === repeat) {
                          c5 = 0;
                          let closure_5 = closure_4;
                          logger.warn("Listen along play command failed", closure_5);
                        } else if (arg0 === 1) {
                          c7 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 0;
                          c7 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          c5 = 0;
                        }
                        c7 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp70) {
                      closure_4 = tmp70;
                      if (0 === c5) {
                        c7 = 3;
                        throw tmp70;
                      } else if (1 === c5) {
                        repeat = 1;
                      } else if (2 === c5) {
                        repeat = 2;
                      } else {
                        repeat = 4;
                      }
                    }
                  }
                });
                startPlayback();
                let str = "presence change";
                if (arg2) {
                  let obj2 = require("AnalyticsUtils");
                  let obj4 = { party_id: party.id, other_user_id: userId };
                  obj2.track(constants4.SPOTIFY_LISTEN_ALONG_STARTED, obj4);
                  str = "started";
                }
                let _HermesInternal = HermesInternal;
                let tmp23 = sync_id;
                logger.info("Listen along " + str + ": " + socket.accountId + " to " + userId + " playing " + sync_id + " on " + device.name);
              }
            }
            let _Date = Date;
            start = Date.now();
          }
        }
      }
    }
    return false;
  }
}
function handleUserActivitySyncStop() {
  let userId;
  let partyId = null;
  const track = AnalyticsUtilsDefault.track;
  const SPOTIFY_LISTEN_ALONG_ENDED = constants4.SPOTIFY_LISTEN_ALONG_ENDED;
  AnalyticsUtilsDefault;
  if (null != _null2) {
    partyId = _null2.partyId;
  }
  obj = { party_id: partyId, other_user_id: userId };
  userId = null;
  if (null != _null2) {
    userId = _null2.userId;
  }
  track(SPOTIFY_LISTEN_ALONG_ENDED, obj);
  let trackId = null;
  if (null != _null2) {
    trackId = _null2.trackId;
  }
  _null2 = null;
  logger.info("Listen along stopped");
  let tmp12;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp24 = closure_41[tmp14];
      if (!tmp24.connected) {
        continue;
      } else {
        if (null == closure_42[tmp14]) {
          continue;
        } else {
          let arr = tmp15[tmp14];
          let found = arr.find(f92545);
          if (null == found) {
            continue;
          } else {
            let obj2 = { socket: tmp24, device: found };
            tmp12 = obj2;
            break;
          }
          break;
        }
        continue;
      }
      continue;
    }
  }
  if (null != tmp12) {
    const socket = tmp12.socket;
    const tmp19 = null != closure_43[socket.accountId] && closure_43[socket.accountId].track.id === trackId;
    if (tmp19) {
      const obj3 = SpotifyActionCreators;
      obj3.pause(socket.accountId, socket.accessToken);
    }
  }
}
function handleUserConnectionsUpdate() {
  const keys = Object.keys(closure_41);
  const accounts = ConnectedAccountsStore.getAccounts();
  const found = accounts.filter((type) => type.type === constants.SPOTIFY);
  if (null == found) {
    return false;
  } else {
    const mapped = found.map((id) => id.id);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (!mapped.includes(nextResult)) {
        let tmp7 = removeAccount(tmp4);
      }
      continue;
    }
    let flag = false;
    for (const item10030 of found) {
      let tmp10 = item10030;
      let tmp12 = null != _null;
      if (tmp12) {
        tmp12 = _null.account.id === tmp10.id;
      }
      if (tmp12) {
        _null.account = tmp10;
        flag = true;
      }
      if (!keys.includes(tmp10.id)) {
        if (null == tmp10.accessToken) {
          let obj2 = SpotifyActionCreators;
          let accessToken = obj2.getAccessToken(tmp10.id);
        } else {
          let tmp21 = upsertAccount(tmp10.id, tmp10.accessToken);
        }
      }
      continue;
    }
    return flag;
  }
}
let obj = function _pauseAfterAlbumAdvance() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            if (null != closure_2_41[closure_0]) {
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj2.pause(tmp12, closure_2_41[closure_0].accessToken), done: false };
              obj2 = require("SpotifyActionCreators");
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          closure_130_35.warn("Unable to pause Spotify after album advance", closure_0);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp17) {
        closure_3 = tmp17;
        if (0 === c4) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function autoPause() {
  if (null != c3) {
    let tmp2;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp18 = closure_41[tmp3];
        if (!tmp18.connected) {
          continue;
        } else {
          if (null == closure_42[tmp3]) {
            continue;
          } else {
            let arr = tmp4[tmp3];
            let found = arr.find(f92545);
            if (null == found) {
              continue;
            } else {
              obj = { socket: tmp18, device: found };
              tmp2 = obj;
              break;
            }
            break;
          }
          continue;
        }
        continue;
      }
    }
    if (null != tmp2) {
      const socket = tmp2.socket;
      c44 = true;
      const obj2 = SpotifyActionCreators;
      obj2.pause(socket.accountId, socket.accessToken);
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(constants4.SPOTIFY_AUTO_PAUSED);
      logger.info("Playback auto paused");
    }
  }
}
function updatePlayerState(accountId, arg1, device) {
  let album;
  let c3;
  let c4;
  let context;
  let first;
  let first1;
  let found;
  let isPlaying;
  let item;
  let obj4;
  let position;
  let str2;
  let str4;
  let type;
  _require = accountId;
  device = device.device;
  ({ progress_ms: dependencyMap, is_playing: c3, repeat_state: c4, item, context } = device);
  let obj12;
  if (null != item) {
    let tmp = constants2;
    if (item.type === constants2.TRACK) {
      id = item.id;
      const tmp4 = null != item.linked_from && null != item.linked_from.id;
      if (tmp4) {
        id = item.linked_from.id;
      }
      const obj3 = { id, name: null, duration: null, type: tmp.TRACK, album: obj4, artists: found, isLocal: item.is_local || false };
      ({ name: obj2.name, duration_ms: obj2.duration } = item);
      const album2 = item.album;
      let str3;
      if (album2 != null) {
        str3 = album2.id;
      }
      if (str3 == null) {
        str3 = "";
      }
      const album3 = item.album;
      obj4 = { id: str3, name: str4, image: first, type };
      str4 = undefined;
      if (album3 != null) {
        str4 = album3.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      const album4 = item.album;
      first = undefined;
      if (album4 != null) {
        first = album4.images[0];
      }
      const album5 = item.album;
      type = undefined;
      if (album5 != null) {
        type = album5.type;
      }
      if (type == null) {
        type = tmp.ALBUM;
      }
      const _Array = Array;
      if (Array.isArray(item.artists)) {
        const artists = item.artists;
        found = artists.filter((id) => {
          obj = accountId(dependencyMap[23]);
          let isNotNullishResult = obj.isNotNullish(id.id);
          const tmp = accountId;
          const tmp2 = dependencyMap;
          if (isNotNullishResult) {
            const tmpResult = tmp(tmp2[23]);
            isNotNullishResult = tmpResult.isNotNullish(id.name);
          }
          return isNotNullishResult;
        });
      } else {
        found = [];
      }
      obj12 = obj3;
    }
    const tmp8 = null != device && true !== device.is_active;
    if (tmp8) {
      const obj5 = { is_active: true };
      const merged = Object.assign(device);
      device = obj5;
    }
    if (null != context) {
      let resolved1;
      const items = [, ];
      ({ PLAYLIST: arr3[0], ALBUM: arr3[1] } = constants2);
      const tmp12 = constants2;
      if (items.includes(context.type)) {
        let resolved;
        const playerState = spotifyStore.getPlayerState(accountId);
        if (null != playerState) {
          if (null != playerState.context) {
            if (playerState.context.uri === context.uri) {
              resolved = Promise.resolve(playerState.context);
            }
            resolved1 = resolved;
          }
        }
        if (context.type === tmp12.ALBUM) {
          resolved = Promise.resolve(context);
        } else {
          const SpotifyAPI = require("SpotifyActionCreators").SpotifyAPI;
          const obj11 = { url: context.href };
          const value = SpotifyAPI.get(accountId, arg1, obj11);
          const nextPromise = value.then((body) => body.body);
          resolved = nextPromise.catch((error) => {
            const tmp = error;
            if (tmp) {
              if (404 === error.status) {
                return null;
              }
            }
            throw error;
          });
        }
      }
      return resolved1.then((result) => {
        let num;
        let tmp = result;
        const _public = null == result || tmp.type !== constants.PLAYLIST || tmp.public;
        if (!_public) {
          tmp = null;
        }
        obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: obj12, volumePercent: num, isPlaying, repeat: "off" !== _null2, position: dependencyMap, context: tmp, device };
        num = 0;
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (null != device) {
          num = tmp4.volume_percent;
        }
        dispatch(obj);
      });
    }
    resolved1 = Promise.resolve(undefined);
  }
  if (null != item) {
    if (item.type === constants2.EPISODE) {
      obj12 = { id: null, name: null, duration: null, type: constants2.EPISODE, album, artists: [], isLocal: false };
      ({ id: obj6.id, name: obj6.name, duration_ms: obj6.duration } = item);
      const show3 = item.show;
      let str;
      if (show3 != null) {
        str = show3.id;
      }
      if (str == null) {
        str = "";
      }
      album = { id: str, name: str2, image: first1, type: null };
      const show = item.show;
      str2 = undefined;
      if (show != null) {
        str2 = show.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      const show2 = item.show;
      first1 = undefined;
      if (show2 != null) {
        first1 = show2.images[0];
      }
      album = item.album;
      let type1;
      if (album != null) {
        type1 = album.type;
      }
      if (type1 == null) {
        type1 = tmp22.SHOW;
      }
      album.type = type1;
    }
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
({ getSpotifyResourceType: closure_14, isSpotifyParty: closure_15, SPOTIFY_PARTY_PREFIX: closure_16, SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = SpotifyConstants);
const PlatformTypes = Constants.PlatformTypes;
({ ActivityFlags: closure_20, AnalyticEvents: closure_21 } = Constants);
const authStore5 = Platforms.get(PlatformTypes.SPOTIFY);
let c23 = "hm://pusher/v1/connections/";
let closure_24 = 30 * DurationsDefault.Millis.SECOND;
let closure_25 = 30 * DurationsDefault.Millis.SECOND;
let closure_26 = 5 * DurationsDefault.Millis.MINUTE;
let closure_27 = 5 * DurationsDefault.Millis.SECOND;
let closure_28 = 1.5 * DurationsDefault.Millis.SECOND;
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_30 = 3 * DurationsDefault.Millis.SECOND;
const dehydratedItems = { PLAYER_STATE_CHANGED: "PLAYER_STATE_CHANGED", DEVICE_STATE_CHANGED: "DEVICE_STATE_CHANGED" };
const message = "message";
const ping_str = "ping";
const single = "single";
let tmp4 = new LoggerDefault("Spotify");
const keyExtractor = tmp4;
let timeout = new Timers.Timeout();
const timeout1 = new Timers.Timeout();
const timeout2 = new Timers.Timeout();
const timeout3 = new Timers.Timeout();
const timeout4 = new Timers.Timeout();
const customChannelScoresByGuild = {};
let closure_42 = {};
let closure_43 = {};
let c44 = false;
let c45 = null;
let items = [WebSocket.CONNECTING, WebSocket.OPEN];
const set = new Set(items);
class SpotifySocket {
  constructor(accountId, accessToken) {
    obj = Object.create(new.target.prototype);
    obj._requestedDisconnect = false;
    obj._requestedConnect = false;
    let obj2 = _modDef12;
    obj.handleDeviceStateChange = obj2.throttle(f92557, closure_30);
    obj.accountId = accountId;
    obj.accessToken = accessToken;
    const interval = new obj(5087).Interval();
    obj.pingInterval = interval;
    obj.backoff = new BackoffDefault(undefined, MINUTE);
    const tmp2 = new BackoffDefault(undefined, MINUTE);
    obj.connect();
    return obj;
  }
  connect() {
    let accessToken;
    let accountId;
    let query;
    const self = this;
    const tmp = this.connected || self._requestedConnect;
    if (!tmp) {
      logger.info("WS Connecting");
      self._requestedDisconnect = false;
      self._requestedConnect = true;
      ({ accountId, accessToken } = self);
      const SpotifyAPI = self(7228).SpotifyAPI;
      const request = { url: constants.PLAYER, query, onlyRetryOnAuthorizationErrors: true };
      query = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
      const _HermesInternal = HermesInternal;
      const get = SpotifyAPI.get;
      const value = get(accountId, accessToken, request);
      const nextPromise = value.then((body) => {
        let closure_0 = body;
        body = body.body;
        if (null != body) {
          const promise = closure_2_55(accountId, accessToken, body);
          promise.then(() => closure_0);
        } else {
          const obj2 = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
          obj = closure_2_1(closure_2_2[14]);
          obj.dispatch(obj2);
        }
      });
      const catchPromise = nextPromise.catch(() => {
        obj = closure_2_1(closure_2_2[14]);
        const obj2 = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj2);
      });
      const nextPromise1 = catchPromise.then(() => {
        let handleClose;
        let handleMessage;
        let handleOpen;
        let socket;
        let socket2;
        let socket3;
        let socket4;
        self._requestedConnect = false;
        const webSocket = new WebSocket("wss://dealer.spotify.com/?access_token=" + self.accessToken);
        self.socket = webSocket;
        ({ handleOpen, socket } = self);
        socket.onopen = handleOpen.bind(self);
        ({ handleMessage, socket: socket2 } = self);
        socket2.onmessage = handleMessage.bind(self);
        ({ handleClose, socket: socket3, socket: socket4 } = self);
        const bindResult = handleClose.bind(self);
        socket4.onerror = bindResult;
        socket3.onclose = bindResult;
      });
      nextPromise1.catch((error) => {
        logger.error(error);
        self._requestedConnect = false;
        self.handleClose();
      });
    }
  }
  disconnect() {
    this._requestedDisconnect = true;
    const backoff = this.backoff;
    backoff.cancel();
    try {
      const socket = this.socket;
      if (socket != null) {
        socket.close();
      }
    } catch (err) {
    }
  }
  ping() {
    if (this.connected) {
      const socket = this.socket;
      if (socket != null) {
        const _JSON = JSON;
        obj = { type: ping_str };
        socket.send(JSON.stringify(obj));
      }
    }
  }
  handleOpen() {
    const self = this;
    logger.info("WS Connected");
    const backoff = this.backoff;
    backoff.succeed();
    const pingInterval = this.pingInterval;
    pingInterval.start(closure_24, () => self.ping());
    obj = SpotifyActionCreators;
    const profile = obj.getProfile(this.accountId, this.accessToken);
    const obj2 = SpotifyActionCreators;
    const devices = obj2.getDevices(this.accountId, this.accessToken);
  }
  handleMessage(data) {
    let payloads;
    let uri;
    data = data.data;
    if (typeof data === "string") {
      const _JSON = JSON;
      const parsed = JSON.parse(data);
      ({ uri, payloads } = parsed);
      if (parsed.type === message) {
        const self = this;
        if (typeof uri === "string") {
          const tmp15 = c23;
          if (uri.startsWith(c23)) {
            const _decodeURIComponent = decodeURIComponent;
            self.connectionId = decodeURIComponent(uri.split(tmp15)[1]);
            obj = SpotifyActionCreators;
            const result = obj.subscribePlayerStateNotifications(self.accountId, self.accessToken, self.connectionId);
          }
        }
        const _Array = Array;
        if (Array.isArray(payloads)) {
          const iter = payloads[Symbol.iterator]();
          while (iter !== undefined) {
            let events = iter.next().events;
            if (null != events) {
              for (const item10019 of events) {
                let handleEventResult = self.handleEvent(item10019);
                continue;
              }
            }
            continue;
          }
        }
      }
    }
  }
  handleClose() {
    const self = this;
    const pingInterval = this.pingInterval;
    pingInterval.stop();
    if (!this._requestedDisconnect) {
      try {
        const backoff = this.backoff;
        const _Math = Math;
        const _HermesInternal = HermesInternal;
        logger.info("WS Disconnected. Next retry in " + Math.round(backoff.fail(() => {
          obj = self;
          if (!self._requestedDisconnect) {
            obj.connect();
          }
        })) + "ms");
      } catch (err) {
      }
    }
  }
  handleEvent(arg0) {
    let event;
    let type;
    const self = this;
    ({ type, event } = arg0);
    if (constants5.PLAYER_STATE_CHANGED === type) {
      const tmp4 = null != event && null != event.state;
      if (tmp4) {
        updatePlayerState(self.accountId, self.accessToken, event.state);
      }
    } else if (tmp.DEVICE_STATE_CHANGED === type) {
      const result = self.handleDeviceStateChange();
    }
  }
}
Object.defineProperty(SpotifySocket.prototype, "connected", {
  get: function connected() {
    const hasItem = null != this.socket && set.has(tmp.socket.readyState);
    return hasItem;
  },
  set: undefined
});
const Store = get_initializedDefault.Store;
class SpotifyStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ConnectedAccountsStore, IdleStore, PresenceStore, RunningGameStore, SpeakingStore, VoiceStateStore);
    const items = [PresenceStore];
    this.syncWith(items, () => {
      let party;
      let sync_id;
      let timestamps;
      let tmp;
      let flag = false;
      if (null != closure_4) {
        let tmp3;
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let tmp23 = closure_41[tmp5];
            if (!tmp23.connected) {
              continue;
            } else {
              if (null == closure_42[tmp5]) {
                continue;
              } else {
                let arr = tmp6[tmp5];
                let found = arr.find(f92545);
                if (null == found) {
                  continue;
                } else {
                  obj = { socket: tmp23, device: found };
                  tmp3 = obj;
                  break;
                }
                break;
              }
              continue;
            }
            continue;
          }
        }
        flag = false;
        if (null != tmp3) {
          const userId = closure_4.userId;
          const findActivityResult = closure_11.findActivity(userId, f92546);
          if (null == findActivityResult) {
            closure_38.start(closure_26, () => {
              const tmp = null != _null2 && _null2.userId === userId;
              if (tmp) {
                stopSyncingUserActivityDefault();
              }
            });
            flag = false;
          } else {
            closure_38.stop();
            ({ sync_id, timestamps, party } = findActivityResult);
            const tmp12 = null != sync_id && closure_4.trackId !== sync_id;
            const tmp13 = null != timestamps && closure_4.startTime !== timestamps.start;
            if (!tmp12) {
              let flag2;
              if (!tmp13) {
                flag2 = null != party && party.id !== closure_4.partyId;
                if (flag2) {
                  closure_4.partyId = party.id;
                  flag2 = true;
                }
              }
              flag = flag2;
            }
            flag2 = closure_51(userId, findActivityResult, false);
          }
        }
      }
      return flag;
    });
    obj = SpotifyActionCreators;
    const isSpotifyProtocolRegistered = obj.fetchIsSpotifyProtocolRegistered();
  }
  hasConnectedAccount() {
    return Object.keys(closure_41).length > 0;
  }
  getActiveSocketAndDevice() {
    let tmp2;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp9 = closure_41[tmp4];
        if (!tmp9.connected) {
          continue;
        } else {
          if (null == closure_42[tmp4]) {
            continue;
          } else {
            let arr = tmp5[tmp4];
            let found = arr.find(f92545);
            if (null == found) {
              continue;
            } else {
              obj = { socket: tmp9, device: found };
              tmp2 = obj;
              break;
            }
            break;
          }
          continue;
        }
        continue;
      }
    }
    return tmp2;
  }
  getPlayableComputerDevices() {
    const items = [];
    for (const key10005 in closure_41) {
      let tmp6 = closure_41[key10005];
      if (!tmp6.connected) {
        continue;
      } else {
        if (null == closure_42[key10005]) {
          continue;
        } else {
          let arr2 = tmp[key10005];
          let found = arr2.find((is_restricted) => !is_restricted.is_restricted && "Computer" === is_restricted.type);
          if (null == found) {
            continue;
          } else {
            obj = { socket: tmp6, device: found };
            let arr = items.push(obj);
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    return items;
  }
  canPlay(party) {
    party = party.party;
    let tmp2;
    const sync_id = party.sync_id;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp11 = closure_41[tmp4];
        if (!tmp11.connected) {
          continue;
        } else {
          if (null == closure_42[tmp4]) {
            continue;
          } else {
            let arr = tmp5[tmp4];
            let found = arr.find(f92545);
            if (null == found) {
              continue;
            } else {
              obj = { socket: tmp11, device: found };
              tmp2 = obj;
              break;
            }
            break;
          }
          continue;
        }
        continue;
      }
    }
    const tmp7 = null != tmp2 && null != sync_id && null != party && null != party.id && closure_15(party.id);
    return tmp7;
  }
  getSyncingWith() {
    return c4;
  }
  wasAutoPaused() {
    return c44;
  }
  getLastPlayedTrackId() {
    return id;
  }
  getTrack() {
    let track = null;
    if (null != _null) {
      track = _null.track;
    }
    return track;
  }
  getPlayerState(arg0) {
    return closure_43[arg0];
  }
  shouldShowActivity() {
    const showActivity = null != _null && _null.account.showActivity && !IdleStore.isIdle();
    return showActivity;
  }
  getActivity() {
    let album;
    let artists;
    let context;
    let duration;
    let isLocal;
    let name;
    let obj5;
    let obj6;
    let startTime;
    let type;
    if (null == _null) {
      let findActivityResult = null;
      if (null != _null2) {
        findActivityResult = PresenceStore.findActivity(_null2.userId, f92546);
      }
      return findActivityResult;
    } else {
      let joined;
      let uri;
      const track = _null.track;
      ({ artists, album, name } = track);
      ({ startTime, context } = _null);
      ({ id, duration, isLocal, type } = track);
      const substr = artists.slice(0, 5);
      if (artists.length > 0) {
        const mapped = substr.map((name) => {
          const str = name.name;
          return str.replace(/;/g, "");
        });
        let str = "; ";
        joined = mapped.join("; ");
      }
      let assetFromImageURL = null;
      if (null != album.image) {
        const obj2 = ApplicationAssetUtils;
        assetFromImageURL = obj2.getAssetFromImageURL(PlatformTypes.SPOTIFY, album.image.url);
      }
      const assets = {};
      const tmp6 = null != album.image && null != assetFromImageURL;
      if (tmp6) {
        assets.large_image = assetFromImageURL;
      }
      if (album.type !== single) {
        assets.large_text = album.name;
      }
      if (null != context) {
        uri = context.uri;
      }
      if (null != _null2) {
        let partyId;
        if (null != _null2.partyId) {
          partyId = _null2.partyId;
        }
        let text = name;
        if (name.length > 128) {
          text = `${name.substring(0, 125)}...`;
        }
        const obj4 = { name: user.name, assets, details: text, state: joined, timestamps: obj5, party: obj6 };
        const obj3 = { context_uri: uri, album_id: album.id, artist_ids: substr.map((id) => id.id), type, button_urls: [] };
        obj5 = { start: startTime, end: startTime + duration };
        obj6 = { id: partyId };
        if (!isLocal) {
          obj4.sync_id = id;
          obj4.flags = constants3.PLAY | constants3.SYNC;
          obj4.metadata = obj3;
        }
        return obj4;
      }
      const _HermesInternal = HermesInternal;
      partyId = "" + authStore3 + AuthenticationStore.getId();
    }
  }
}
const prototype = SpotifyStore.prototype;
SpotifyStore.displayName = "SpotifyStore";
obj = {
  USER_CONNECTIONS_UPDATE: handleUserConnectionsUpdate,
  CONNECTION_OPEN: handleUserConnectionsUpdate,
  SPOTIFY_ACCOUNT_ACCESS_TOKEN: function handleSpotifyAccountAccessToken(accountId) {
    upsertAccount(accountId.accountId, accountId.accessToken);
    return false;
  },
  SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function handleSpotifyAccountAccessTokenRevoked(accountId) {
    accountId = accountId.accountId;
    if (accountId in closure_41) {
      obj = closure_41[accountId];
      obj.disconnect();
      delete closure_41[accountId];
      let tmp6 = null != tmp4;
      const tmp3 = closure_43;
      if (tmp6) {
        tmp6 = null != _null;
      }
      if (tmp6) {
        tmp6 = tmp4.track.id === _null.track.id;
      }
      if (tmp6) {
        _null = null;
      }
      delete tmp3[accountId];
      const _HermesInternal = HermesInternal;
      logger.info("Removed account: " + accountId);
    }
  },
  SPOTIFY_PROFILE_UPDATE: function handleSpotifyProfileUpdate(arg0) {
    let accountId;
    let isPremium;
    ({ accountId, isPremium } = arg0);
    if (null == closure_41[accountId]) {
      return false;
    } else {
      closure_41[accountId].isPremium = isPremium;
      const _HermesInternal = HermesInternal;
      logger.info("Profile updated for " + accountId + ": isPremium = " + isPremium);
    }
  },
  SPOTIFY_PLAYER_STATE: function handleSpotifyPlayerState(context) {
    let accountId;
    let artists;
    let artists1;
    let device;
    let isPlaying;
    let num2;
    let position;
    let tmp10;
    let track;
    function pauseAfterAlbumAdvance() {
      return obj(...arguments);
    }
    ({ accountId, isPlaying, track, position, device } = context);
    context = context.context;
    let account;
    let flag = false;
    const repeat = context.repeat;
    if (null != device) {
      if (null != closure_42[accountId]) {
        let flag2;
        const arr2 = closure_42[accountId];
        const found = arr2.find((id) => id.id === device.id);
        if (null == found) {
          const arr3 = closure_42[accountId];
          arr3.push(device);
          flag2 = true;
        } else {
          flag2 = false;
          if (!account(558)(found, device)) {
            const _Object = Object;
            const merged = Object.assign(found, device);
            flag2 = true;
          }
        }
        setActiveDevice(accountId, device.id);
        flag = flag2;
      } else {
        const items = [device];
        closure_42[accountId] = items;
        flag = true;
      }
    }
    obj = c45;
    if (isPlaying) {
      tmp10 = track;
      if (obj != null) {
        obj.start(closure_25, autoPause);
        tmp10 = track;
      }
    } else {
      tmp10 = null;
      if (obj != null) {
        obj.stop();
        tmp10 = null;
      }
    }
    account = ConnectedAccountsStore.getAccount(accountId, PlatformTypes.SPOTIFY);
    const tmp15 = PlatformTypes;
    if (null == account) {
      return flag;
    } else {
      let tmp21 = null;
      if (null != tmp10) {
        const _Date = Date;
        const obj2 = { account, track: tmp10, startTime: num2, position, positionUpdatedAt: Date.now(), context, repeat };
        num2 = 0;
        const timestamp = Date.now();
        if (null != closure_43[accountId]) {
          num2 = tmp86.startTime;
        }
        const diff = timestamp - position;
        const _Math = Math;
        if (Math.abs(diff - num2) > closure_28) {
          num2 = diff;
        }
        const _Date2 = Date;
        tmp21 = obj2;
      }
      let waitingForHost;
      if (_null2 != null) {
        waitingForHost = _null2.waitingForHost;
      }
      let tmp23 = true === waitingForHost;
      if (tmp23) {
        let uri;
        if (context != null) {
          uri = context.uri;
        }
        tmp23 = uri !== _null2.albumContextUri;
      }
      if (tmp23) {
        _null2.waitingForHost = undefined;
      }
      let num4 = 0;
      if (null != closure_43[accountId]) {
        const _Math2 = Math;
        const _Date3 = Date;
        num4 = tmp86.position + Math.max(0, Date.now() - tmp86.positionUpdatedAt);
      }
      let tmp28 = null != device && null != _null2 && !_null2.waitingForHost && null != _null2.albumContextUri;
      if (tmp28) {
        let uri1;
        if (context != null) {
          uri1 = context.uri;
        }
        tmp28 = uri1 === _null2.albumContextUri;
      }
      if (tmp28) {
        tmp28 = isPlaying;
      }
      if (tmp28) {
        tmp28 = null != tmp10;
      }
      if (tmp28) {
        tmp28 = tmp10.id !== _null2.trackId;
      }
      if (tmp28) {
        tmp28 = null != tmp86;
      }
      if (tmp28) {
        tmp28 = tmp86.track.id === _null2.trackId;
      }
      if (tmp28) {
        tmp28 = tmp86.track.duration > 0;
      }
      if (tmp28) {
        const _Math3 = Math;
        tmp28 = Math.abs(tmp86.track.duration - num4) <= closure_27;
      }
      const tmp38 = tmp28 && null != _null2;
      if (tmp38) {
        _null2.waitingForHost = true;
        pauseAfterAlbumAdvance(accountId);
      }
      let waitingForHost1;
      if (_null2 != null) {
        waitingForHost1 = _null2.waitingForHost;
      }
      let tmp43 = true === waitingForHost1;
      if (tmp43) {
        let uri2;
        if (context != null) {
          uri2 = context.uri;
        }
        tmp43 = uri2 === _null2.albumContextUri;
      }
      if (!tmp43) {
        let tmp46 = null != device && null != _null2;
        if (tmp46) {
          tmp46 = 0 === position && !isPlaying || tmp28;
        }
        tmp43 = tmp46;
      }
      if (!tmp43) {
        closure_43[accountId] = tmp21;
      }
      const obj3 = account(12);
      const values = obj3.values(tmp85);
      const tmp49 = closure_3;
      closure_3 = values.find((item) => null != item);
      id = AuthenticationStore.getId();
      if (id === AuthenticationStore.getId()) {
        const result = VoiceStateStore.isCurrentClientInVoiceChannel();
        const obj5 = { userId: id, checkSoundSharing: true };
        const obj8 = device(6963);
        if (result) {
          if (obj8.getIsSpeaking(obj5)) {
            if (null != closure_3) {
              timeout.start(closure_25, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, f92550, false);
      }
      if (null != tmp10) {
        if (!tmp43) {
          timeout3.start(tmp10.duration - position + closure_27, () => {
            id = account.id;
            obj = DispatcherDefault;
            obj.dispatch({ type: "SPOTIFY_PLAYER_STATE", accountId: id, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null });
          });
        }
        if (null != _null2) {
          if (!tmp43) {
            const _HermesInternal = HermesInternal;
            logger.info("Listen along active but playback stopped or track changed. Stopping listen along in " + closure_27 + "ms");
            timeout4.start(closure_27, () => {
              logger.info("Stopping listening along");
              stopSyncingUserActivityDefault();
              id = account.id;
              obj = DispatcherDefault;
              obj.dispatch({ type: "SPOTIFY_PLAYER_STATE", accountId: id, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null });
            });
          }
          let tmp80 = flag;
          if (tmp49 !== closure_3) {
            if (null != closure_43[accountId]) {
              if (null != closure_43[accountId]) {
                if (null != tmp21) {
                  if (closure_43[accountId].track.id === tmp21.track.id) {
                    tmp80 = flag;
                  }
                }
              }
              if (null != tmp10) {
                const obj6 = { type: "SPOTIFY_NEW_TRACK", track: tmp10, connectionId: accountId };
                const tmp50Result = account(572);
                tmp50Result.dispatch(obj6);
                const obj7 = { party_platform: tmp15.SPOTIFY, track_id: tmp10.id, has_images: true, details: tmp10.album.name, state: tmp10.name, album_id: tmp10.album.id, author_ids: artists.map((id) => id.id), author_names: artists1.map((name) => name.name) };
                artists = tmp10.artists;
                const track2 = account(1252).track;
                const ACTIVITY_UPDATED = constants4.ACTIVITY_UPDATED;
                account(1252);
                artists1 = tmp10.artists;
                track2(ACTIVITY_UPDATED, obj7);
              }
            } else {
              tmp80 = flag;
            }
          }
          return tmp80;
        }
        const obj4 = timeout4;
        if (timeout4.isStarted()) {
          logger.info("Listen along stop cancelled as playback of track resumed");
          obj4.stop();
        }
      }
      timeout3.stop();
    }
  },
  SPOTIFY_PLAYER_PLAY: function handleSpotifyPlayerPlay(id) {
    id = id.id;
  },
  ACTIVITY_PLAY: function handleUserActivityPlay(arg0) {
    let accessToken;
    let accountId;
    let activity;
    let device;
    let metadata;
    let party;
    let socket;
    let sync_id;
    ({ activity, metadata } = arg0);
    let tmp2;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp31 = closure_41[tmp4];
        if (!tmp31.connected) {
          continue;
        } else {
          if (null == closure_42[tmp4]) {
            continue;
          } else {
            let arr = tmp5[tmp4];
            let found = arr.find(f92545);
            if (null == found) {
              continue;
            } else {
              obj = { socket: tmp31, device: found };
              tmp2 = obj;
              break;
            }
            break;
          }
          continue;
        }
        continue;
      }
    }
    if (null == tmp2) {
      return false;
    } else {
      ({ socket, device } = tmp2);
      ({ sync_id, party } = activity);
      let tmp9 = !(null == sync_id || null == party || null == party.id || !closure_15(party.id));
      const tmp7 = null == sync_id || null == party || null == party.id || !closure_15(party.id);
      if (tmp9) {
        let context_uri;
        if (null != metadata) {
          context_uri = metadata.context_uri;
        }
        if (null != c4) {
          handleUserActivitySyncStop();
        }
        if (null != metadata) {
          ({ accountId, accessToken } = socket);
          let TRACK = metadata.type;
          const play = SpotifyActionCreators.play;
          if (TRACK == null) {
            TRACK = constants2.TRACK;
          }
          const obj2 = { contextUri: context_uri, deviceId: device.id };
          play(accountId, accessToken, sync_id, TRACK, obj2);
          const _HermesInternal = HermesInternal;
          logger.info("Play started: " + socket.accountId + " playing " + sync_id + " on " + device.name);
        }
        tmp9 = tmp13;
      }
      return tmp9;
    }
  },
  ACTIVITY_SYNC: function handleUserActivitySync(userId) {
    return activitySync(userId.userId, userId.activity, true);
  },
  ACTIVITY_SYNC_STOP: handleUserActivitySyncStop,
  SPOTIFY_SET_DEVICES: function handleSpotifySetDevices(arg0) {
    let accountId;
    let devices;
    ({ accountId, devices } = arg0);
    closure_42[accountId] = devices;
    logger.info("Devices updated for " + accountId + ":", devices);
  },
  SPOTIFY_SET_ACTIVE_DEVICE: function handleSetActiveDevice(accountId) {
    setActiveDevice(accountId.accountId, accountId.deviceId);
  },
  SPEAKING: function handleSpeaking(userId) {
    userId = userId.userId;
    if (userId === AuthenticationStore.getId()) {
      const result = VoiceStateStore.isCurrentClientInVoiceChannel();
      const obj2 = { userId, checkSoundSharing: true };
      obj = useIsSpeaking;
      if (result) {
        if (obj.getIsSpeaking(obj2)) {
          if (null != c3) {
            timeout.start(closure_25, autoPause, false);
            timeout1.stop();
          }
        }
      }
      timeout1.start(100, f92550, false);
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let currentClientInVoiceChannel;
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, userId) => {
      userId = userId.userId;
      if (userId === id.getId()) {
        const result = currentClientInVoiceChannel.isCurrentClientInVoiceChannel();
        const obj2 = { userId, checkSoundSharing: true };
        obj = require("useIsSpeaking");
        if (result) {
          if (obj.getIsSpeaking(obj2)) {
            if (null != _null) {
              timeout.start(closure_1_25, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, f92550, false);
      }
      return acc;
    }, false);
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(settings) {
    settings = settings.settings;
    let desktopSettings;
    if (settings != null) {
      desktopSettings = settings.desktopSettings;
    }
    if (null != desktopSettings) {
      obj = c45;
      if (c45 != null) {
        obj.stop();
      }
      let desktopSettings1;
      if (settings != null) {
        desktopSettings1 = settings.desktopSettings;
      }
      const sourceId = desktopSettings1.sourceId;
      if (null != sourceId) {
        if (RunningGameStore.getObservedAppNameForWindow(sourceId) === user.name) {
          if (tmp5) {
            const self = this;
            const self2 = this;
            const interval = new Timers.Interval();
            c45 = interval;
            interval.start(closure_25, autoPause);
          }
        }
      }
      const obj2 = c45;
      if (c45 != null) {
        obj2.stop();
      }
      c45 = null;
    } else if (null == settings) {
      const obj4 = c45;
      if (c45 != null) {
        obj4.stop();
      }
      c45 = null;
    }
  }
};
const spotifyStore = new SpotifyStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/spotify/SpotifyStore.tsx");

export default spotifyStore;
export { SpotifySocket };
