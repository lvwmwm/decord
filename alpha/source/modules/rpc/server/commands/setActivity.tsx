// Module ID: 16248
// Function ID: 16249
// Name: setActivity
// Dependencies: [32, 109, 5, 2043, 6437, 1084, 16215, 8867, 16208, 9300, 584, 16243, 11296, 11451, 12, 1101, 8679, 1264, 2]

// Module 16248 (setActivity)
import OAuth2Scopes from "OAuth2Scopes" /* 8867 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import Constants_mod from "Constants" /* 6437 */;
import Constants_mod2 from "Constants" /* 1084 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16215 */;
import size from "module_2" /* 2 */;

let c14, c15, constants;

let RPCCommands;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c10;
let closure_12;
let map1;
let obj3;
let unpackModuleId;
let closure_3 = ["buttons"];
let Constants = Constants_mod2;
const RPC_LOCAL_SCOPE = Constants.RPC_LOCAL_SCOPE;
const TransportTypes = Constants.TransportTypes;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ ActivityGamePlatforms: c10, ActivityTypes: unpackModuleId, AnalyticEvents: closure_12, RPCCommands, RPCErrors: map1 } = Constants);
let closure_14 = ["1402418171662569542"];
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
      let _false;
      let constants3;
      let constants4;
      let name2;
      let obj15;
      let result1;
      let tmp120;
      if (c15 === 2) {
        c15 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
          let items1;
          let _var;
          let invite_cover_image;
          let obj22;
          let _undefined;
          c15 = 2;
          if (0 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const constants2 = tmp;
              applicationId = undefined;
              obj11 = undefined;
              privacy = undefined;
              assets = undefined;
              party3 = undefined;
              secrets = undefined;
              closure_6 = undefined;
              items1 = undefined;
              _var = undefined;
              constants = undefined;
              invite_cover_image = undefined;
              obj22 = undefined;
              const scopes3 = require.authorization.scopes;
              const hasItem = scopes3.has(applicationId(name2[7]).OAuth2Scopes.RPC);
              let tmp26 = !hasItem;
              if (tmp26) {
                const scopes = require.authorization.scopes;
                tmp26 = !scopes.has(tmp225(name2[7]).OAuth2Scopes.RPC_ACTIVITIES_WRITE);
              }
              if (tmp26) {
                const scopes2 = require.authorization.scopes;
                tmp26 = !scopes2.has(_var);
              }
              let result = null;
              if (tmp26) {
                const tmp225Result = applicationId(name2[8]);
                result = tmp225Result.validateEmbeddedAppFrameOnAnySurface(require);
              }
              if (c15.includes(require.transport)) {
                if (null == importDefault) {
                  if (constants.IPC === require.transport) {
                    const obj4 = { errorCode: constants.INVALID_COMMAND };
                    const self11 = this;
                    const self12 = this;
                    const tmp201 = new result1(name2[9])(obj4, "nonzero pid required");
                    throw tmp201;
                  }
                }
                const id = require.application.id;
                applicationId = id;
                if (id == null) {
                  applicationId = undefined;
                }
                if (null == dependencyMap) {
                  const obj5 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: require.id, pid: importDefault, applicationId, activity: dependencyMap };
                  const obj21 = result1(name2[10]);
                  obj21.dispatch(obj5);
                  c15 = 3;
                  return { value: null, done: true };
                } else {
                  result1 = result;
                  if (result == null) {
                    result1 = null;
                    if (require.transport === constants.POST_MESSAGE) {
                      const tmp225Result4 = applicationId(name2[8]);
                      result1 = tmp225Result4.tryValidateEmbeddedAppFrame(require);
                    }
                  }
                  const obj7 = {};
                  const tmp56 = result1(name2[11])(result1);
                  if (null != tmp56) {
                    obj7.channel_id = tmp56;
                  }
                  const buttons = tmp47.buttons;
                  const tmp59 = _false(dependencyMap, PLAYING);
                  obj11 = { name: name2, type: PLAYING, application_id: applicationId, platform: DESKTOP, metadata: obj7 };
                  const merged = Object.assign(tmp59);
                  const name = tmp59.name;
                  name2 = name;
                  if (name == null) {
                    name2 = require.application.name;
                  }
                  const type = tmp59.type;
                  PLAYING = type;
                  if (type == null) {
                    PLAYING = constants2.PLAYING;
                  }
                  if (require.transport === constants.POST_MESSAGE) {
                    DESKTOP = tmp70.EMBEDDED;
                  } else {
                    DESKTOP = tmp70.DESKTOP;
                  }
                  _undefined = tmp46;
                  const getApplication = items1.getApplication;
                  if (applicationId == null) {
                    _undefined = undefined;
                  }
                  const application = getApplication(_undefined);
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
                  delete obj6[tmp212];
                  const party2 = obj11.party;
                  if (party2 != null) {
                    delete party2[tmp211];
                  }
                  const tmp225Result5 = applicationId(name2[12]);
                  let isFrameAppResult = null != application;
                  const computeActivityFlags = tmp225Result5.computeActivityFlags;
                  if (isFrameAppResult) {
                    const tmp225Result6 = applicationId(name2[13]);
                    isFrameAppResult = tmp225Result6.isFrameApp(application);
                  }
                  if (isFrameAppResult) {
                    isFrameAppResult = tmp69;
                  }
                  const activityFlags = computeActivityFlags(obj11, tmp74, tmp69, isFrameAppResult, privacy);
                  if (activityFlags > 0) {
                    obj11.flags = activityFlags;
                  }
                  assets = obj11.assets;
                  party3 = obj11.party;
                  secrets = obj11.secrets;
                  const timestamps = obj11.timestamps;
                  if (null != secrets) {
                    const obj26 = result1(name2[14]);
                    const values = obj26.values(secrets);
                    const found = values.filter((item) => null != item && "" !== item);
                    if (null != party3) {
                      items = [party3.id];
                      const obj8 = result1(name2[14]);
                      if (obj8.intersection(found, items).length > 0) {
                        const obj12 = { errorCode: constants.INVALID_ACTIVITY_SECRET };
                        const self9 = this;
                        const self10 = this;
                        const tmp190 = new result1(name2[9])(obj12, "secrets cannot match the party id");
                        throw tmp190;
                      }
                    }
                    const obj9 = result1(name2[14]);
                    if (obj9.uniq(found).length < found.length) {
                      const obj14 = { errorCode: constants.INVALID_ACTIVITY_SECRET };
                      const self7 = this;
                      const self8 = this;
                      const tmp184 = new result1(name2[9])(obj14, "secrets must be unique");
                      throw tmp184;
                    } else if (null != buttons) {
                      const obj16 = { errorCode: constants.INVALID_ACTIVITY_SECRET };
                      const self5 = this;
                      const self6 = this;
                      const tmp178 = new result1(name2[9])(obj16, "secrets cannot currently be sent with buttons");
                      throw tmp178;
                    }
                  }
                  if (null != buttons) {
                    obj7.button_urls = buttons.map((url) => url.url);
                    obj11.buttons = buttons.map((label) => label.label);
                  }
                  if (null != timestamps) {
                    items1 = ["start", "end"];
                    closure_6 = items1[Symbol.iterator]();
                    const nextResult = closure_6.next();
                    while (closure_6 !== undefined) {
                      constants = 1;
                      let str16 = timestamps[nextResult];
                      let tmp94 = null != str16;
                      if (tmp94) {
                        let _Date = Date;
                        let str = Date.now();
                        tmp94 = str.toString().length - str16.toString().length > 2;
                      }
                      if (tmp94) {
                        let _Math = Math;
                        timestamps[nextResult] = Math.floor(str16 * result1(name2[15]).Millis.SECOND);
                      }
                      constants = 0;
                      continue;
                    }
                  }
                  if (null != assets) {
                    if (null == applicationId) {
                      const obj17 = { errorCode: constants.INVALID_COMMAND };
                      const self3 = this;
                      const self4 = this;
                      const tmp172 = new result1(name2[9])(obj17, "No application.");
                      throw tmp172;
                    } else {
                      const items2 = [, , ];
                      ({ large_image: arr3[0], small_image: arr3[1], invite_cover_image: arr3[2] } = assets);
                      c14 = 2;
                      c15 = 1;
                      const obj18 = { value: obj15.fetchAssetIds(applicationId, items2), done: false };
                      obj15 = applicationId(name2[16]);
                      return obj18;
                    }
                  }
                }
              } else {
                const obj19 = { errorCode: constants.INVALID_COMMAND };
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const tmp36 = result1(name2[9]);
                const tmp362 = new tmp36(obj19, "command not available from \"" + require.transport + "\" transport");
                throw tmp362;
              }
            }
          } else if (1 === c14) {
            constants = 0;
            closure_6.return();
            throw constants3;
          } else if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_6 = value;
            items1 = _undefined(closure_6, 3);
            _var = items1[0];
            constants = items1[1];
            invite_cover_image = items1[2];
            if (null != _var) {
              assets.large_image = _var;
            } else {
              delete assets[tmp215];
            }
            if (null != constants) {
              assets.small_image = constants;
            } else {
              delete assets[tmp214];
            }
            if (null != invite_cover_image) {
              assets.invite_cover_image = invite_cover_image;
            } else {
              delete assets[tmp213];
            }
          }
          if (closure_139_3()) {
            const obj20 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: closure_139_0.id, pid: closure_139_1, applicationId, activity: obj11, partyPrivacy: privacy };
            const obj10 = result1(name2[10]);
            obj10.dispatch(obj20);
            obj22 = { application_id: closure_139_0.application.id, type: obj11.type, name: obj11.name, status_display_type: obj11.status_display_type, details: _var, state: constants, has_urls: tmp120 };
            const details = obj11.details;
            _var = details;
            if (details == null) {
              _var = "";
            }
            const state = obj11.state;
            constants = state;
            if (state == null) {
              constants = "";
            }
            tmp120 = null != obj11.state_url || null != obj11.details_url;
            if (!tmp120) {
              const assets2 = obj11.assets;
              let large_url;
              if (assets2 != null) {
                large_url = assets2.large_url;
              }
              tmp120 = null != large_url;
            }
            if (!tmp120) {
              const assets3 = obj11.assets;
              let small_url;
              if (assets3 != null) {
                small_url = assets3.small_url;
              }
              tmp120 = null != small_url;
            }
            if (null != secrets) {
              obj22.has_match_secret = null != secrets.match;
              obj22.has_join_secret = null != secrets.join;
            }
            if (null != assets) {
              let tmp141 = null != assets.large_image;
              const tmp139 = obj22;
              if (!tmp141) {
                tmp141 = null != assets.small_image;
              }
              if (!tmp141) {
                tmp141 = null != assets.invite_cover_image;
              }
              tmp139.has_images = tmp141;
            }
            if (null != party3) {
              let tmp151;
              const tmp149 = obj22;
              if (null != party3.size) {
                if (party3.size[1] > 0) {
                  tmp151 = party3.size[1];
                }
              }
              tmp149.party_max = tmp151;
              obj22.party_id = party3.id;
            }
            const obj13 = result1(name2[17]);
            obj13.track(constants3.ACTIVITY_UPDATED, obj22);
            c15 = 3;
            const obj23 = { value: obj11, done: true };
            return obj23;
          } else {
            c15 = 3;
            return { value: null, done: true };
          }
        } catch (tmp203) {
          constants3 = tmp203;
          if (0 === constants) {
            c15 = 3;
            throw tmp203;
          } else {
            c14 = 1;
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
