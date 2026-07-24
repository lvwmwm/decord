// Module ID: 13470
// Function ID: 103512
// Name: RPC_LOCAL_SCOPE
// Dependencies: [4167, 4033, 653, 8354, 10528, 9117, 10525, 686, 10478, 10511, 22, 664, 7909, 675, 2]

// Module 13470 (RPC_LOCAL_SCOPE)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";

let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
const TransportTypes = RPC_SCOPE_CONFIG.TransportTypes;
({ RPC_SCOPE_CONFIG, RPC_LOCAL_SCOPE } = RPC_SCOPE_CONFIG);
({ ActivityGamePlatforms: closure_5, ActivityPartyPrivacy: closure_6, ActivityTypes: closure_7, AnalyticEvents: closure_8, RPCErrors: closure_9 } = ME);
let closure_10 = ["1402418171662569542"];
let obj = {};
obj = {};
obj = {};
let items = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_ACTIVITIES_WRITE, RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.validation = function validation(number) {
  let obj = importDefault(10528)(number);
  obj = {};
  const requiredResult = obj.required();
  obj.pid = number.number().min(0);
  let obj4 = importDefault(10528)(number);
  obj = {};
  const numberResult = number.number();
  const stringResult = number.string();
  obj.name = number.string().min(1).max(128);
  const minResult = number.string().min(1);
  const stringResult1 = number.string();
  obj.state = number.string().min(2).max(128);
  const minResult1 = number.string().min(2);
  const stringResult2 = number.string();
  const uriResult = number.string().uri();
  obj.state_url = number.string().uri().min(1).max(256);
  const minResult2 = number.string().uri().min(1);
  const stringResult3 = number.string();
  obj.details = number.string().min(2).max(128);
  const minResult3 = number.string().min(2);
  const stringResult4 = number.string();
  const uriResult1 = number.string().uri();
  obj.details_url = number.string().uri().min(1).max(256);
  const minResult4 = number.string().uri().min(1);
  const obj1 = {};
  const obj19 = importDefault(10528)(number);
  obj1.start = number.number().min(1);
  const numberResult1 = number.number();
  obj1.end = number.number().min(1);
  obj.timestamps = obj19.keys(obj1);
  const numberResult2 = number.number();
  const obj2 = {};
  const obj23 = importDefault(10528)(number);
  const stringResult5 = number.string();
  obj2.large_image = number.string().min(1).max(300);
  const minResult5 = number.string().min(1);
  const stringResult6 = number.string();
  obj2.large_text = number.string().min(2).max(128);
  const minResult6 = number.string().min(2);
  const stringResult7 = number.string();
  const uriResult2 = number.string().uri();
  obj2.large_url = number.string().uri().min(1).max(256);
  const minResult7 = number.string().uri().min(1);
  const stringResult8 = number.string();
  obj2.small_image = number.string().min(1).max(300);
  const minResult8 = number.string().min(1);
  const stringResult9 = number.string();
  obj2.small_text = number.string().min(2).max(128);
  const minResult9 = number.string().min(2);
  const stringResult10 = number.string();
  const uriResult3 = number.string().uri();
  obj2.small_url = number.string().uri().min(1).max(256);
  const minResult10 = number.string().uri().min(1);
  const stringResult11 = number.string();
  obj2.invite_cover_image = number.string().min(1).max(300);
  obj.assets = obj23.keys(obj2);
  const minResult11 = number.string().min(1);
  const obj3 = {};
  const obj41 = importDefault(10528)(number);
  const stringResult12 = number.string();
  obj3.id = number.string().min(2).max(128);
  let arrayResult = number.array();
  const minResult12 = number.string().min(2);
  const numberResult3 = number.number();
  obj3.size = arrayResult.items(number.number().min(0)).length(2);
  const itemsResult = arrayResult.items(number.number().min(0));
  const numberResult4 = number.number();
  const items = [, ];
  ({ PRIVATE: arr2[0], PUBLIC: arr2[1] } = constants);
  obj3.privacy = number.number().default(constants.PRIVATE).valid(items);
  obj.party = obj41.keys(obj3);
  const defaultResult = number.number().default(constants.PRIVATE);
  obj4 = {};
  const obj49 = importDefault(10528)(number);
  const stringResult13 = number.string();
  obj4.match = number.string().min(2).max(128);
  const minResult13 = number.string().min(2);
  const stringResult14 = number.string();
  obj4.join = number.string().min(2).max(128);
  const minResult14 = number.string().min(2);
  const stringResult15 = number.string();
  obj4.spectate = number.string().min(2).max(128);
  obj.secrets = obj49.keys(obj4);
  arrayResult = number.array();
  const minResult15 = number.string().min(2);
  const obj5 = {};
  const obj58 = importDefault(10528)(number);
  const stringResult16 = number.string();
  const minResult16 = number.string().min(1);
  obj5.label = number.string().min(1).max(32).required();
  const maxResult = number.string().min(1).max(32);
  const stringResult17 = number.string();
  const uriResult4 = number.string().uri();
  const minResult17 = number.string().uri().min(1);
  obj5.url = number.string().uri().min(1).max(512).required();
  const maxResult1 = number.string().uri().min(1).max(512);
  const itemsResult1 = arrayResult.items(obj58.keys(obj5));
  obj.buttons = arrayResult.items(obj58.keys(obj5)).min(1).max(2);
  obj.instance = number.boolean();
  const minResult18 = arrayResult.items(obj58.keys(obj5)).min(1);
  const arrayResult1 = number.array();
  const stringResult18 = number.string();
  const minResult19 = number.string().min(1);
  const itemsResult2 = arrayResult1.items(number.string().min(1).max(32));
  obj.supported_platforms = arrayResult1.items(number.string().min(1).max(32)).min(1).max(10);
  const minResult20 = arrayResult1.items(number.string().min(1).max(32)).min(1);
  const numberResult5 = number.number();
  obj.type = number.number().default(constants2.PLAYING).valid(constants2.PLAYING, constants2.LISTENING, constants2.WATCHING, constants2.COMPETING);
  const defaultResult1 = number.number().default(constants2.PLAYING);
  const numberResult6 = number.number();
  obj.status_display_type = number.number().optional().valid(require(9117) /* StatusDisplayTypes */.StatusDisplayTypes.NAME, require(9117) /* StatusDisplayTypes */.StatusDisplayTypes.STATE, require(9117) /* StatusDisplayTypes */.StatusDisplayTypes.DETAILS);
  const keys = obj4.keys(obj);
  obj.activity = keys.allow(null);
  return requiredResult.keys(obj);
};
obj.handler = function handler(socket) {
  let buttons;
  let party2;
  let secrets;
  let timestamps;
  socket = socket.socket;
  const args = socket.args;
  const pid = args.pid;
  const activity = args.activity;
  const isSocketConnected = socket.isSocketConnected;
  let privacy;
  let assets;
  const items = [, , ];
  ({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = privacy);
  if (items.includes(socket.transport)) {
    if (null == pid) {
      if (privacy.IPC === socket.transport) {
        let tmp83 = pid(activity[6]);
        let obj = { errorCode: constants3.INVALID_COMMAND };
        const prototype6 = tmp83.prototype;
        tmp83 = new tmp83(obj, "nonzero pid required");
        throw tmp83;
      }
    }
    if (null == activity) {
      obj = { type: "LOCAL_ACTIVITY_UPDATE", socketId: socket.id, pid, activity };
      pid(activity[7]).dispatch(obj);
      return Promise.resolve(activity);
    } else {
      let obj1 = {};
      if (!activity.name) {
        activity.name = socket.application.name;
      }
      const id = socket.application.id;
      activity.application_id = id;
      activity.platform = socket.transport === privacy.POST_MESSAGE ? assets.EMBEDDED : assets.DESKTOP;
      let tmp19;
      if (null != id) {
        tmp19 = id;
      }
      const application = isSocketConnected.getApplication(tmp19);
      const instance = activity.instance;
      const party = activity.party;
      privacy = undefined;
      if (null != party) {
        privacy = party.privacy;
      }
      delete tmp.instance;
      if (null != activity.party) {
        delete tmp2.privacy;
      }
      obj1 = socket(activity[8]);
      let canLaunchFrameResult = null != application;
      if (canLaunchFrameResult) {
        let obj2 = socket(activity[9]);
        canLaunchFrameResult = obj2.canLaunchFrame(application);
      }
      if (canLaunchFrameResult) {
        canLaunchFrameResult = tmp16;
      }
      const activityFlags = obj1.computeActivityFlags(activity, tmp21, tmp16, canLaunchFrameResult, privacy);
      if (activityFlags > 0) {
        activity.flags = activityFlags;
      }
      assets = activity.assets;
      ({ party: party2, secrets, timestamps, buttons } = activity);
      if (null == activity.type) {
        activity.type = constants2.PLAYING;
      }
      if (null != secrets) {
        const values = pid(activity[10]).values(secrets);
        const found = values.filter((arg0) => arg0);
        if (null != party2) {
          const items1 = [party2.id];
          if (obj14.intersection(found, items1).length > 0) {
            if (!closure_10.includes(socket.application.id)) {
              let tmp39 = pid(activity[6]);
              obj2 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
              const prototype2 = tmp39.prototype;
              tmp39 = new tmp39(obj2, "secrets cannot match the party id");
              throw tmp39;
            }
          }
          obj14 = pid(activity[10]);
        }
        let obj4 = pid(activity[10]);
        if (obj4.uniq(found).length < found.length) {
          let tmp70 = pid(activity[6]);
          const obj3 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
          const prototype5 = tmp70.prototype;
          tmp70 = new tmp70(obj3, "secrets must be unique");
          throw tmp70;
        } else if (null != buttons) {
          let tmp61 = pid(activity[6]);
          obj4 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
          const prototype4 = tmp61.prototype;
          tmp61 = new tmp61(obj4, "secrets cannot currently be sent with buttons");
          throw tmp61;
        }
        const obj13 = pid(activity[10]);
      }
      if (null != buttons) {
        obj1.button_urls = buttons.map((url) => url.url);
        activity.buttons = buttons.map((label) => label.label);
      }
      activity.metadata = obj1;
      if (null != timestamps) {
        const _Object = Object;
        const keys = Object.keys(timestamps);
        for (let num6 = 0; num6 < keys.length; num6 = num6 + 1) {
          let tmp48 = keys[num6];
          let _Date = Date;
          let str4 = Date.now();
          let str5 = timestamps[tmp48];
          if (str4.toString().length - str5.toString().length > 2) {
            let _Math = Math;
            let tmp49 = pid;
            let tmp50 = activity;
            timestamps[tmp48] = Math.floor(timestamps[tmp48] * pid(activity[11]).Millis.SECOND);
          }
        }
      }
      if (null == assets) {
        let resolved = Promise.resolve([]);
      } else {
        if (null != socket.application) {
          if (null != socket.application.id) {
            const items2 = [, , ];
            ({ large_image: arr2[0], small_image: arr2[1], invite_cover_image: arr2[2] } = assets);
            resolved = socket(activity[12]).fetchAssetIds(socket.application.id, items2);
            const obj6 = socket(activity[12]);
          }
        }
        const _Error = Error;
        const error = new Error();
        throw error;
      }
      return resolved.then((arg0) => {
        let details;
        let party;
        let secrets;
        let tmp2;
        let tmp3;
        let tmp4;
        [tmp2, tmp3, tmp4] = arg0;
        if (null != assets) {
          if (null != tmp2) {
            assets.large_image = tmp2;
          } else {
            delete tmp.large_image;
          }
          if (null != tmp3) {
            assets.small_image = tmp3;
          } else {
            delete tmp.small_image;
          }
          if (null != tmp4) {
            assets.invite_cover_image = tmp4;
          } else {
            delete tmp.invite_cover_image;
          }
        }
        if (isSocketConnected()) {
          let obj = pid(activity[7]);
          obj = { type: "LOCAL_ACTIVITY_UPDATE", socketId: socket.id, pid, activity, partyPrivacy: privacy };
          obj.dispatch(obj);
          ({ secrets, party } = activity);
          obj = { application_id: socket.application.id };
          ({ type: obj3.type, name: obj3.name, status_display_type: obj3.status_display_type, details } = activity);
          let str2 = "";
          let str3 = "";
          if (null != details) {
            str3 = details;
          }
          obj.details = str3;
          const state = activity.state;
          if (null != state) {
            str2 = state;
          }
          obj.state = str2;
          let tmp20 = null != activity.state_url;
          if (!tmp20) {
            tmp20 = null != activity.details_url;
          }
          if (!tmp20) {
            assets = activity.assets;
            let large_url;
            if (null != assets) {
              large_url = assets.large_url;
            }
            tmp20 = null != large_url;
          }
          if (!tmp20) {
            const assets2 = activity.assets;
            let small_url;
            if (null != assets2) {
              small_url = assets2.small_url;
            }
            tmp20 = null != small_url;
          }
          obj.has_urls = tmp20;
          if (null != secrets) {
            obj.has_match_secret = secrets.match;
            obj.has_join_secret = secrets.join;
          }
          if (null != assets) {
            let invite_cover_image = assets.large_image;
            if (!invite_cover_image) {
              invite_cover_image = assets.small_image;
            }
            if (!invite_cover_image) {
              invite_cover_image = assets.invite_cover_image;
            }
            obj.has_images = invite_cover_image;
          }
          if (null != party) {
            let tmp30;
            if (null != party.size) {
              if (party.size[1] > 0) {
                tmp30 = party.size[1];
              }
            }
            obj.party_max = tmp30;
            obj.party_id = party.id;
          }
          pid(activity[13]).track(outer1_8.ACTIVITY_UPDATED, obj);
          return activity;
        }
      });
    }
  } else {
    let tmp5 = pid(activity[6]);
    obj = { errorCode: constants3.INVALID_COMMAND };
    const _HermesInternal = HermesInternal;
    const prototype = tmp5.prototype;
    tmp5 = new tmp5(obj, "command not available from \"" + socket.transport + "\" transport");
    throw tmp5;
  }
};
obj[ME.RPCCommands.SET_ACTIVITY] = obj;
const result = require("ME").fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;
