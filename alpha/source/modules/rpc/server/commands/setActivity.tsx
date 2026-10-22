// Module ID: 15701
// Function ID: 15702
// Name: setActivity
// Dependencies: [32, 109, 5, 2045, 4821, 6363, 1087, 15678, 8802, 15663, 9240, 584, 6763, 7330, 11175, 11318, 12, 1104, 8606, 1267, 2]

// Module 15701 (setActivity)
import OAuth2Scopes from "OAuth2Scopes" /* 8802 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import Constants_mod from "Constants" /* 6363 */;
import Constants_mod2 from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15678 */;
import size from "module_2" /* 2 */;

let c3, closure_11, closure_5, constants, constants2, constants3;

let RPCCommands;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_12;
let closure_14;
let map1;
let obj3;
let unpackModuleId;
let closure_3 = ["buttons"];
let Constants = Constants_mod2;
const RPC_LOCAL_SCOPE = Constants.RPC_LOCAL_SCOPE;
const TransportTypes = Constants.TransportTypes;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ ActivityGamePlatforms: unpackModuleId, ActivityTypes: closure_12, AnalyticEvents: map1, RPCCommands, RPCErrors: closure_14 } = Constants);
let closure_15 = ["1402418171662569542"];
let items = [, , ];
({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = TransportTypes);
let obj = {};
const SET_ACTIVITY = RPCCommands.SET_ACTIVITY;
let obj2 = {
  scope: obj3,
  handler(isSocketConnected) {
    let args;
    let pid;
    ({ socket: require, args } = isSocketConnected);
    ({ pid: importDefault, activity: dependencyMap } = args);
    isSocketConnected = isSocketConnected.isSocketConnected;
    return (async function(arg0, value) {
      let DESKTOP;
      let PLAYING;
      let name2;
      let obj14;
      let tmp117;
      if (constants3 === 2) {
        constants3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let applicationId;
          let obj11;
          let privacy;
          let assets;
          let party3;
          let secrets;
          let closure_6;
          let details;
          let channel;
          let small_image;
          let invite_cover_image;
          let obj22;
          let _false;
          constants3 = 2;
          if (0 === constants2) {
            if (arg0 === 1) {
              constants3 = 3;
              throw value;
            } else if (arg0 === 2) {
              constants3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              applicationId = undefined;
              obj11 = undefined;
              privacy = undefined;
              assets = undefined;
              party3 = undefined;
              secrets = undefined;
              closure_6 = undefined;
              details = undefined;
              channel = undefined;
              small_image = undefined;
              invite_cover_image = undefined;
              obj22 = undefined;
              const scopes3 = require.authorization.scopes;
              const hasItem = scopes3.has(applicationId(PLAYING[8]).OAuth2Scopes.RPC);
              let tmp26 = !hasItem;
              if (tmp26) {
                const scopes = require.authorization.scopes;
                tmp26 = !scopes.has(tmp222(PLAYING[8]).OAuth2Scopes.RPC_ACTIVITIES_WRITE);
              }
              if (tmp26) {
                const scopes2 = require.authorization.scopes;
                tmp26 = !scopes2.has(small_image);
              }
              let tmp29 = null;
              if (tmp26) {
                tmp29 = name2(PLAYING[9])(require);
              }
              if (closure_1_16.includes(require.transport)) {
                if (null == importDefault) {
                  if (invite_cover_image.IPC === require.transport) {
                    const obj4 = { errorCode: constants3.INVALID_COMMAND };
                    const self11 = this;
                    const self12 = this;
                    const tmp198 = new name2(PLAYING[10])(obj4, "nonzero pid required");
                    throw tmp198;
                  }
                }
                const id = require.application.id;
                applicationId = id;
                if (id == null) {
                  applicationId = undefined;
                }
                if (null == dependencyMap) {
                  const obj6 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: require.id, pid: importDefault, applicationId, activity: dependencyMap };
                  const obj20 = name2(PLAYING[11]);
                  obj20.dispatch(obj6);
                  constants3 = 3;
                  return { value: null, done: true };
                } else {
                  let surface;
                  const tmp227 = name2(PLAYING[12]);
                  if (tmp29 != null) {
                    surface = tmp29.frame.surface;
                  }
                  const tmp227Result = tmp227(surface);
                  let result = null != tmp227Result;
                  if (result) {
                    const tmp222Result = applicationId(PLAYING[13]);
                    result = tmp222Result.isConjureChannelCandidate(channel.getChannel(tmp227Result), "setActivity");
                  }
                  const obj10 = {};
                  if (result) {
                    obj10.channel_id = tmp227Result;
                  }
                  const buttons = tmp48.buttons;
                  const tmp56 = closure_5(dependencyMap, c3);
                  obj11 = { name: name2, type: PLAYING, application_id: applicationId, platform: DESKTOP, metadata: obj10 };
                  const merged = Object.assign(tmp56);
                  const name = tmp56.name;
                  name2 = name;
                  if (name == null) {
                    name2 = require.application.name;
                  }
                  const type = tmp56.type;
                  PLAYING = type;
                  if (type == null) {
                    PLAYING = constants.PLAYING;
                  }
                  if (require.transport === invite_cover_image.POST_MESSAGE) {
                    DESKTOP = tmp67.EMBEDDED;
                  } else {
                    DESKTOP = tmp67.DESKTOP;
                  }
                  c3 = tmp47;
                  const getApplication = details.getApplication;
                  if (applicationId == null) {
                    c3 = undefined;
                  }
                  const application = getApplication(c3);
                  const instance = obj11.instance;
                  _false = instance;
                  if (instance == null) {
                    _false = false;
                  }
                  const party = obj11.party;
                  privacy = undefined;
                  if (party != null) {
                    privacy = party.privacy;
                  }
                  delete obj5[tmp209];
                  const party2 = obj11.party;
                  if (party2 != null) {
                    delete party2[tmp208];
                  }
                  const tmp222Result3 = applicationId(PLAYING[14]);
                  let result1 = null != application;
                  const computeActivityFlags = tmp222Result3.computeActivityFlags;
                  if (result1) {
                    const tmp222Result4 = applicationId(PLAYING[15]);
                    result1 = tmp222Result4.canLaunchContextlessFrame(application);
                  }
                  if (result1) {
                    result1 = tmp66;
                  }
                  const activityFlags = computeActivityFlags(obj11, tmp71, tmp66, result1, privacy);
                  if (activityFlags > 0) {
                    obj11.flags = activityFlags;
                  }
                  assets = obj11.assets;
                  party3 = obj11.party;
                  secrets = obj11.secrets;
                  const timestamps = obj11.timestamps;
                  if (null != secrets) {
                    const obj25 = name2(PLAYING[16]);
                    const values = obj25.values(secrets);
                    const found = values.filter((item) => null != item && "" !== item);
                    if (null != party3) {
                      items = [party3.id];
                      const obj7 = name2(PLAYING[16]);
                      if (obj7.intersection(found, items).length > 0) {
                        const obj13 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
                        const self9 = this;
                        const self10 = this;
                        const tmp187 = new name2(PLAYING[10])(obj13, "secrets cannot match the party id");
                        throw tmp187;
                      }
                    }
                    const obj8 = name2(PLAYING[16]);
                    if (obj8.uniq(found).length < found.length) {
                      const obj15 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
                      const self7 = this;
                      const self8 = this;
                      const tmp181 = new name2(PLAYING[10])(obj15, "secrets must be unique");
                      throw tmp181;
                    } else if (null != buttons) {
                      const obj16 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
                      const self5 = this;
                      const self6 = this;
                      const tmp175 = new name2(PLAYING[10])(obj16, "secrets cannot currently be sent with buttons");
                      throw tmp175;
                    }
                  }
                  if (null != buttons) {
                    obj10.button_urls = buttons.map((url) => url.url);
                    obj11.buttons = buttons.map((label) => label.label);
                  }
                  if (null != timestamps) {
                    const items1 = ["start", "end"];
                    closure_5 = items1[Symbol.iterator]();
                    const nextResult = closure_5.next();
                    while (closure_5 !== undefined) {
                      constants = 1;
                      let str17 = timestamps[nextResult];
                      let tmp91 = null != str17;
                      if (tmp91) {
                        let _Date = Date;
                        let str = Date.now();
                        tmp91 = str.toString().length - str17.toString().length > 2;
                      }
                      if (tmp91) {
                        let _Math = Math;
                        timestamps[nextResult] = Math.floor(str17 * name2(PLAYING[17]).Millis.SECOND);
                      }
                      constants = 0;
                      continue;
                    }
                  }
                  if (null != assets) {
                    if (null == applicationId) {
                      const obj17 = { errorCode: constants3.INVALID_COMMAND };
                      const self3 = this;
                      const self4 = this;
                      const tmp169 = new name2(PLAYING[10])(obj17, "No application.");
                      throw tmp169;
                    } else {
                      const items2 = [, , ];
                      ({ large_image: arr3[0], small_image: arr3[1], invite_cover_image: arr3[2] } = assets);
                      constants2 = 2;
                      constants3 = 1;
                      const obj18 = { value: obj14.fetchAssetIds(applicationId, items2), done: false };
                      obj14 = applicationId(PLAYING[18]);
                      return obj18;
                    }
                  }
                }
              } else {
                const obj19 = { errorCode: constants3.INVALID_COMMAND };
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const tmp37 = name2(PLAYING[10]);
                const tmp372 = new tmp37(obj19, "command not available from \"" + require.transport + "\" transport");
                throw tmp372;
              }
            }
          } else if (1 === constants2) {
            constants = 0;
            closure_5.return();
            throw closure_11;
          } else if (arg0 === 1) {
            constants3 = 3;
            throw value;
          } else if (arg0 === 2) {
            constants3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_6 = value;
            details = _false(closure_6, 3);
            channel = details[0];
            small_image = details[1];
            invite_cover_image = details[2];
            if (null != channel) {
              assets.large_image = channel;
            } else {
              delete assets[tmp212];
            }
            if (null != small_image) {
              assets.small_image = small_image;
            } else {
              delete assets[tmp211];
            }
            if (null != invite_cover_image) {
              assets.invite_cover_image = invite_cover_image;
            } else {
              delete assets[tmp210];
            }
          }
          if (closure_138_3()) {
            const obj21 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: closure_138_0.id, pid: closure_138_1, applicationId, activity: obj11, partyPrivacy: privacy };
            const obj9 = name2(PLAYING[11]);
            obj9.dispatch(obj21);
            obj22 = { application_id: closure_138_0.application.id, type: obj11.type, name: obj11.name, status_display_type: obj11.status_display_type, details, state: channel, has_urls: tmp117 };
            details = obj11.details ?? "";
            const state = obj11.state;
            channel = state;
            if (state == null) {
              channel = "";
            }
            tmp117 = null != obj11.state_url || null != obj11.details_url;
            if (!tmp117) {
              const assets2 = obj11.assets;
              let large_url;
              if (assets2 != null) {
                large_url = assets2.large_url;
              }
              tmp117 = null != large_url;
            }
            if (!tmp117) {
              const assets3 = obj11.assets;
              let small_url;
              if (assets3 != null) {
                small_url = assets3.small_url;
              }
              tmp117 = null != small_url;
            }
            if (null != secrets) {
              obj22.has_match_secret = null != secrets.match;
              obj22.has_join_secret = null != secrets.join;
            }
            if (null != assets) {
              let tmp138 = null != assets.large_image;
              const tmp136 = obj22;
              if (!tmp138) {
                tmp138 = null != assets.small_image;
              }
              if (!tmp138) {
                tmp138 = null != assets.invite_cover_image;
              }
              tmp136.has_images = tmp138;
            }
            if (null != party3) {
              let tmp148;
              const tmp146 = obj22;
              if (null != party3.size) {
                if (party3.size[1] > 0) {
                  tmp148 = party3.size[1];
                }
              }
              tmp146.party_max = tmp148;
              obj22.party_id = party3.id;
            }
            const obj12 = name2(PLAYING[19]);
            obj12.track(constants2.ACTIVITY_UPDATED, obj22);
            constants3 = 3;
            const obj23 = { value: obj11, done: true };
            return obj23;
          } else {
            constants3 = 3;
            return { value: null, done: true };
          }
        } catch (tmp200) {
          closure_11 = tmp200;
          if (0 === constants) {
            constants3 = 3;
            throw tmp200;
          } else {
            constants2 = 1;
          }
        }
      }
    })();
  }
};
obj3 = {};
const createRPCCommand = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const SET_ACTIVITY2 = RPCCommands.SET_ACTIVITY;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items1 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_ACTIVITIES_WRITE, RPC_LOCAL_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj3[ANY] = items1;
obj[SET_ACTIVITY] = createRPCCommand(SET_ACTIVITY2, obj2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;
