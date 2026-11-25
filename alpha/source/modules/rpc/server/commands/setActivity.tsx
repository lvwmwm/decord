// Module ID: 15861
// Function ID: 15862
// Name: setActivity
// Dependencies: [32, 109, 5, 2164, 5766, 1071, 15822, 5750, 15815, 7613, 572, 15856, 5984, 7734, 12236, 10044, 12, 1088, 7620, 1255, 2]

// Module 15861 (setActivity)
import OAuth2Scopes from "OAuth2Scopes" /* 5750 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import Constants_mod from "Constants" /* 5766 */;
import Constants_mod2 from "Constants" /* 1071 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15822 */;
import size from "module_2" /* 2 */;

let c17, c18;

let RPCCommands;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c10;
let closure_12;
let obj3;
let unpackModuleId;
let closure_3 = ["buttons"];
let Constants = Constants_mod2;
const RPC_LOCAL_SCOPE = Constants.RPC_LOCAL_SCOPE;
const TransportTypes = Constants.TransportTypes;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ ActivityPartyPrivacy: c10, AnalyticEvents: unpackModuleId, RPCCommands, RPCErrors: closure_12 } = Constants);
let closure_13 = ["1402418171662569542"];
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
      let ActivityGamePlatforms;
      let PLAYING;
      let _false;
      let closure_14;
      let details;
      let items1;
      let items3;
      let label;
      let label1;
      let large_text;
      let name2;
      let result1;
      let small_text;
      let state;
      let tmp134;
      let tmp142;
      let tmp73;
      if (c18 === 2) {
        c18 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          let applicationId;
          let buttons;
          let obj11;
          let instance;
          let privacy;
          let assets;
          let party3;
          let secrets;
          let timestamps;
          let closure_9;
          let PRIVATE;
          let large_image;
          let small_image;
          let invite_cover_image;
          let obj22;
          let c15;
          let closure_16;
          let date;
          let _undefined;
          let closure_6;
          c18 = 2;
          let tmp5 = c17;
          if (0 === c17) {
            if (arg0 === 1) {
              c18 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              applicationId = undefined;
              buttons = undefined;
              obj11 = undefined;
              instance = undefined;
              privacy = undefined;
              assets = undefined;
              party3 = undefined;
              secrets = undefined;
              timestamps = undefined;
              closure_9 = undefined;
              PRIVATE = undefined;
              large_image = undefined;
              small_image = undefined;
              invite_cover_image = undefined;
              obj22 = undefined;
              c15 = undefined;
              closure_16 = undefined;
              date = undefined;
              let scopes3 = require.authorization.scopes;
              let tmp263 = applicationId;
              let hasItem = scopes3.has(applicationId(name2[7]).OAuth2Scopes.RPC);
              let tmp30 = !hasItem;
              if (tmp30) {
                let scopes = require.authorization.scopes;
                tmp30 = !scopes.has(tmp263(name2[7]).OAuth2Scopes.RPC_ACTIVITIES_WRITE);
              }
              if (tmp30) {
                let scopes2 = require.authorization.scopes;
                tmp30 = !scopes2.has(details);
              }
              let result = null;
              if (tmp30) {
                let tmp263Result = tmp263(name2[8]);
                result = tmp263Result.validateEmbeddedAppFrameOnAnySurface(require);
              }
              if (tmp.includes(require.transport)) {
                if (null == importDefault) {
                  if (state.IPC === require.transport) {
                    let obj4 = { errorCode: items3.INVALID_COMMAND };
                    let self13 = this;
                    let self14 = this;
                    let str6 = "nonzero pid required";
                    let tmp242 = new result1(name2[9])(obj4, "nonzero pid required");
                    throw tmp242;
                  }
                }
                let id = require.application.id;
                applicationId = id;
                if (id == null) {
                  applicationId = undefined;
                }
                let tmp50 = applicationId;
                let tmp51 = dependencyMap;
                if (null == dependencyMap) {
                  let obj21 = result1(name2[10]);
                  let obj5 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: require.id, pid: importDefault, applicationId: tmp50, activity: tmp51 };
                  let dispatchResult = obj21.dispatch(obj5);
                  c18 = 3;
                  return { value: null, done: true };
                } else {
                  result1 = result;
                  if (result == null) {
                    result1 = null;
                    if (require.transport === state.POST_MESSAGE) {
                      let tmp263Result4 = tmp263(name2[8]);
                      result1 = tmp263Result4.tryValidateEmbeddedAppFrame(require);
                    }
                  }
                  let obj7 = {};
                  let tmp60 = result1(name2[11])(result1);
                  if (null != tmp60) {
                    obj7.channel_id = tmp60;
                  }
                  buttons = tmp51.buttons;
                  let tmp63 = _false(tmp51, PLAYING);
                  obj11 = { name: name2, type: PLAYING, application_id: tmp50, platform: tmp73 ? ActivityGamePlatforms.EMBEDDED : ActivityGamePlatforms.DESKTOP, metadata: obj7 };
                  let merged = Object.assign(tmp63);
                  let name = tmp63.name;
                  name2 = name;
                  if (name == null) {
                    name2 = require.application.name;
                  }
                  let type = tmp63.type;
                  PLAYING = type;
                  if (type == null) {
                    PLAYING = tmp263(name2[12]).ActivityTypes.PLAYING;
                  }
                  tmp73 = require.transport === state.POST_MESSAGE;
                  ActivityGamePlatforms = tmp263(name2[13]).ActivityGamePlatforms;
                  _undefined = tmp50;
                  let getApplication = items1.getApplication;
                  if (tmp50 == null) {
                    _undefined = undefined;
                  }
                  let application = getApplication(_undefined);
                  instance = obj11.instance;
                  _false = instance;
                  if (instance == null) {
                    _false = false;
                  }
                  let tmp78 = _false;
                  instance = _false;
                  let party = obj11.party;
                  privacy = undefined;
                  if (party != null) {
                    privacy = party.privacy;
                  }
                  delete obj6[tmp250];
                  let party2 = obj11.party;
                  if (party2 != null) {
                    delete party2[tmp249];
                  }
                  let tmp263Result5 = tmp263(name2[14]);
                  let isFrameAppResult = null != application;
                  let computeActivityFlags = tmp263Result5.computeActivityFlags;
                  if (isFrameAppResult) {
                    let tmp263Result6 = tmp263(name2[15]);
                    isFrameAppResult = tmp263Result6.isFrameApp(application);
                  }
                  if (isFrameAppResult) {
                    isFrameAppResult = tmp73;
                  }
                  let activityFlags = computeActivityFlags(obj11, tmp78, tmp73, isFrameAppResult, privacy);
                  if (activityFlags > 0) {
                    obj11.flags = activityFlags;
                  }
                  assets = obj11.assets;
                  party3 = obj11.party;
                  secrets = obj11.secrets;
                  timestamps = obj11.timestamps;
                  if (null != secrets) {
                    let obj26 = result1(name2[16]);
                    let values = obj26.values(secrets);
                    let found = values.filter((item) => null != item && "" !== item);
                    if (null != party3) {
                      let obj8 = result1(name2[16]);
                      items = [party3.id];
                      if (obj8.intersection(found, items).length > 0) {
                        let obj12 = { errorCode: items3.INVALID_ACTIVITY_SECRET };
                        let self11 = this;
                        let self12 = this;
                        let str5 = "secrets cannot match the party id";
                        let tmp231 = new result1(name2[9])(obj12, "secrets cannot match the party id");
                        throw tmp231;
                      }
                    }
                    let obj9 = result1(name2[16]);
                    if (obj9.uniq(found).length < found.length) {
                      let obj14 = { errorCode: items3.INVALID_ACTIVITY_SECRET };
                      let self9 = this;
                      let self10 = this;
                      let str4 = "secrets must be unique";
                      let tmp225 = new result1(name2[9])(obj14, "secrets must be unique");
                      throw tmp225;
                    } else if (null != buttons) {
                      let obj16 = { errorCode: items3.INVALID_ACTIVITY_SECRET };
                      let self7 = this;
                      let self8 = this;
                      let str3 = "secrets cannot currently be sent with buttons";
                      let tmp219 = new result1(name2[9])(obj16, "secrets cannot currently be sent with buttons");
                      throw tmp219;
                    }
                  }
                  if (null != buttons) {
                    obj7.button_urls = buttons.map((url) => url.url);
                    obj11.buttons = buttons.map((label) => label.label);
                  }
                  if (null != timestamps) {
                    items1 = ["start", "end"];
                    closure_6 = items1[Symbol.iterator]();
                    let nextResult = closure_6.next();
                    while (closure_6 !== undefined) {
                      let c16 = 1;
                      let str16 = timestamps[nextResult];
                      let tmp98 = null != str16;
                      if (tmp98) {
                        let _Date = Date;
                        let str = Date.now();
                        tmp98 = str.toString().length - str16.toString().length > 2;
                      }
                      if (tmp98) {
                        let _Math = Math;
                        timestamps[nextResult] = Math.floor(str16 * result1(name2[17]).Millis.SECOND);
                      }
                      c16 = 0;
                      continue;
                    }
                  }
                  if (null != assets) {
                    if (null == tmp50) {
                      let obj17 = { errorCode: items3.INVALID_COMMAND };
                      let self5 = this;
                      let self6 = this;
                      let str2 = "No application.";
                      let tmp213 = new result1(name2[9])(obj17, "No application.");
                      throw tmp213;
                    } else {
                      let obj15 = applicationId(name2[18]);
                      let items2 = [, , ];
                      ({ large_image: arr4[0], small_image: arr4[1], invite_cover_image: arr4[2] } = assets);
                      c17 = 2;
                      c18 = 1;
                      let obj18 = { value: obj15.fetchAssetIds(tmp50, items2), done: false };
                      return obj18;
                    }
                  }
                }
              } else {
                let obj19 = { errorCode: items3.INVALID_COMMAND };
                let _HermesInternal = HermesInternal;
                let tmp40 = result1(name2[9]);
                let self = this;
                let self2 = this;
                let tmp402 = new tmp40(obj19, "command not available from \"" + require.transport + "\" transport");
                throw tmp402;
              }
            }
          } else if (1 === tmp5) {
            c16 = 0;
            closure_6.return();
            throw closure_1_15;
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c18 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              closure_9 = value;
              PRIVATE = _undefined(closure_9, 3);
              large_image = PRIVATE[0];
              small_image = PRIVATE[1];
              invite_cover_image = PRIVATE[2];
              if (null != large_image) {
                assets.large_image = large_image;
              } else {
                delete assets[tmp253];
              }
              if (null != small_image) {
                assets.small_image = small_image;
              } else {
                delete assets[tmp252];
              }
              if (null != invite_cover_image) {
                assets.invite_cover_image = invite_cover_image;
              } else {
                delete assets[tmp251];
              }
            }
          } else {
            c16 = 0;
            large_image.return();
            throw closure_1_15;
          }
          if (closure_142_3()) {
            let obj10 = result1(name2[10]);
            let obj20 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: closure_142_0.id, pid: closure_142_1, applicationId, activity: obj11, partyPrivacy: privacy };
            let dispatchResult1 = obj10.dispatch(obj20);
            obj22 = { application_id: closure_142_0.application.id, type: obj11.type, name: obj11.name, status_display_type: obj11.status_display_type, details, state, large_text, small_text, button_1_label: label, button_2_label: label1, party_privacy: tmp134, instance, has_urls: tmp142 };
            details = obj11.details;
            if (details == null) {
              details = "";
            }
            state = obj11.state;
            if (state == null) {
              state = "";
            }
            large_text = undefined;
            if (assets != null) {
              large_text = assets.large_text;
            }
            small_text = undefined;
            if (assets != null) {
              small_text = assets.small_text;
            }
            label = undefined;
            if (buttons != null) {
              let first = buttons[0];
              if (first != null) {
                label = first.label;
              }
            }
            label1 = undefined;
            if (buttons != null) {
              let tmp131 = buttons[1];
              if (tmp131 != null) {
                label1 = tmp131.label;
              }
            }
            tmp134 = undefined;
            if (null != party3) {
              PRIVATE = privacy;
              if (privacy == null) {
                PRIVATE = PRIVATE.PRIVATE;
              }
              tmp134 = PRIVATE;
            }
            tmp142 = null != obj11.state_url;
            if (!tmp142) {
              tmp142 = null != obj11.details_url;
            }
            if (!tmp142) {
              let assets2 = obj11.assets;
              let large_url;
              if (assets2 != null) {
                large_url = assets2.large_url;
              }
              tmp142 = null != large_url;
            }
            if (!tmp142) {
              let assets3 = obj11.assets;
              let small_url;
              if (assets3 != null) {
                small_url = assets3.small_url;
              }
              tmp142 = null != small_url;
            }
            items3 = ["start", "end"];
            large_image = items3[Symbol.iterator]();
            while (large_image !== undefined) {
              c16 = 2;
              c15 = tmp155;
              let tmp158;
              if (timestamps != null) {
                tmp158 = tmp271[c15];
              }
              closure_16 = tmp158;
              if (null != closure_16) {
                let _Date2 = Date;
                let self3 = this;
                let self4 = this;
                date = new Date(closure_16);
                let _Number = Number;
                if (!Number.isNaN(date.getTime())) {
                  obj22[c15] = date.toISOString();
                }
              }
              c16 = 0;
              continue;
            }
            if (null != secrets) {
              obj22.has_match_secret = null != secrets.match;
              obj22.has_join_secret = null != secrets.join;
            }
            if (null != assets) {
              let tmp182 = null != assets.large_image;
              let tmp180 = obj22;
              if (!tmp182) {
                tmp182 = null != assets.small_image;
              }
              if (!tmp182) {
                tmp182 = null != assets.invite_cover_image;
              }
              tmp180.has_images = tmp182;
            }
            if (null != party3) {
              let tmp192;
              let tmp190 = obj22;
              if (null != party3.size) {
                if (party3.size[1] > 0) {
                  tmp192 = party3.size[1];
                }
              }
              tmp190.party_max = tmp192;
              obj22.party_id = party3.id;
            }
            let obj13 = result1(name2[19]);
            let trackResult = obj13.track(large_image.ACTIVITY_UPDATED, obj22);
            c18 = 3;
            let obj23 = { value: obj11, done: true };
            return obj23;
          } else {
            c18 = 3;
            return { value: null, done: true };
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
