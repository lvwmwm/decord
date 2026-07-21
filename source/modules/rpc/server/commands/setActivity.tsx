// Module ID: 13296
// Function ID: 100996
// Name: RPC_LOCAL_SCOPE
// Dependencies: []

// Module 13296 (RPC_LOCAL_SCOPE)
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_3 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const TransportTypes = tmp2.TransportTypes;
({ RPC_SCOPE_CONFIG, RPC_LOCAL_SCOPE } = tmp2);
const tmp3 = arg1(dependencyMap[2]);
({ ActivityGamePlatforms: closure_5, ActivityPartyPrivacy: closure_6, ActivityTypes: closure_7, AnalyticEvents: closure_8, RPCErrors: closure_9 } = tmp3);
let closure_10 = [true];
let obj = {};
obj = {};
obj = {};
const items = [arg1(dependencyMap[3]).OAuth2Scopes.RPC, arg1(dependencyMap[3]).OAuth2Scopes.RPC_ACTIVITIES_WRITE, RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.validation = function validation(number) {
  let obj = importDefault(dependencyMap[4])(number);
  obj = {};
  const requiredResult = obj.required();
  obj.pid = number.number().min(0);
  let obj4 = importDefault(dependencyMap[4])(number);
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
  const obj19 = importDefault(dependencyMap[4])(number);
  obj1.start = number.number().min(1);
  const numberResult1 = number.number();
  obj1.end = number.number().min(1);
  obj.timestamps = obj19.keys(obj1);
  const numberResult2 = number.number();
  const obj2 = {};
  const obj23 = importDefault(dependencyMap[4])(number);
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
  const obj41 = importDefault(dependencyMap[4])(number);
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
  const obj49 = importDefault(dependencyMap[4])(number);
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
  const obj58 = importDefault(dependencyMap[4])(number);
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
  obj.status_display_type = number.number().optional().valid(arg1(dependencyMap[5]).StatusDisplayTypes.NAME, arg1(dependencyMap[5]).StatusDisplayTypes.STATE, arg1(dependencyMap[5]).StatusDisplayTypes.DETAILS);
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
  const arg1 = socket;
  const args = socket.args;
  const pid = args.pid;
  const importDefault = pid;
  const activity = args.activity;
  const dependencyMap = activity;
  let application = socket.isSocketConnected;
  let TransportTypes;
  let assets;
  const items = [, , ];
  ({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = TransportTypes);
  if (items.includes(socket.transport)) {
    if (null == pid) {
      if (TransportTypes.IPC === socket.transport) {
        let tmp81 = importDefault(dependencyMap[6]);
        let obj = { errorCode: constants3.INVALID_COMMAND };
        const prototype6 = tmp81.prototype;
        tmp81 = new tmp81(obj, "nonzero pid required");
        throw tmp81;
      }
    }
    if (null == activity) {
      obj = { type: "LOCAL_ACTIVITY_UPDATE", socketId: socket.id, pid, activity };
      importDefault(dependencyMap[7]).dispatch(obj);
      return Promise.resolve(activity);
    } else {
      let obj1 = {};
      if (!activity.name) {
        activity.name = socket.application.name;
      }
      const id = socket.application.id;
      activity.application_id = id;
      activity.platform = socket.transport === TransportTypes.POST_MESSAGE ? assets.EMBEDDED : assets.DESKTOP;
      let tmp17;
      if (null != id) {
        tmp17 = id;
      }
      application = application.getApplication(tmp17);
      const instance = activity.instance;
      const party = activity.party;
      let privacy;
      if (null != party) {
        privacy = party.privacy;
      }
      TransportTypes = privacy;
      delete r4.instance;
      if (null != activity.party) {
        delete r8.privacy;
      }
      obj1 = arg1(dependencyMap[8]);
      let canLaunchFrameResult = null != application;
      if (canLaunchFrameResult) {
        let obj2 = arg1(dependencyMap[9]);
        canLaunchFrameResult = obj2.canLaunchFrame(application);
      }
      if (canLaunchFrameResult) {
        canLaunchFrameResult = tmp14;
      }
      const activityFlags = obj1.computeActivityFlags(activity, tmp19, tmp14, canLaunchFrameResult, privacy);
      if (activityFlags > 0) {
        activity.flags = activityFlags;
      }
      assets = activity.assets;
      ({ party: party2, secrets, timestamps, buttons } = activity);
      if (null == activity.type) {
        activity.type = constants2.PLAYING;
      }
      if (null != secrets) {
        const values = importDefault(dependencyMap[10]).values(secrets);
        const found = values.filter((arg0) => arg0);
        if (null != party2) {
          const items1 = [party2.id];
          if (obj14.intersection(found, items1).length > 0) {
            if (!closure_10.includes(socket.application.id)) {
              let tmp37 = importDefault(dependencyMap[6]);
              obj2 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
              const prototype2 = tmp37.prototype;
              tmp37 = new tmp37(obj2, "secrets cannot match the party id");
              throw tmp37;
            }
          }
          const obj14 = importDefault(dependencyMap[10]);
        }
        let obj4 = importDefault(dependencyMap[10]);
        if (obj4.uniq(found).length < found.length) {
          let tmp68 = importDefault(dependencyMap[6]);
          const obj3 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
          const prototype5 = tmp68.prototype;
          tmp68 = new tmp68(obj3, "secrets must be unique");
          throw tmp68;
        } else if (null != buttons) {
          let tmp59 = importDefault(dependencyMap[6]);
          obj4 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
          const prototype4 = tmp59.prototype;
          tmp59 = new tmp59(obj4, "secrets cannot currently be sent with buttons");
          throw tmp59;
        }
        const obj13 = importDefault(dependencyMap[10]);
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
          let tmp46 = keys[num6];
          let _Date = Date;
          let str4 = Date.now();
          let str5 = timestamps[tmp46];
          if (str4.toString().length - str5.toString().length > 2) {
            let _Math = Math;
            let tmp47 = importDefault;
            let tmp48 = dependencyMap;
            timestamps[tmp46] = Math.floor(timestamps[tmp46] * importDefault(dependencyMap[11]).Millis.SECOND);
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
            resolved = arg1(dependencyMap[12]).fetchAssetIds(socket.application.id, items2);
            const obj6 = arg1(dependencyMap[12]);
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
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        if (null != assets) {
          if (null != tmp) {
            assets.large_image = tmp;
          } else {
            delete r1.large_image;
          }
          if (null != tmp2) {
            assets.small_image = tmp2;
          } else {
            delete r1.small_image;
          }
          if (null != tmp3) {
            assets.invite_cover_image = tmp3;
          } else {
            delete r1.invite_cover_image;
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
          let tmp19 = null != activity.state_url;
          if (!tmp19) {
            tmp19 = null != activity.details_url;
          }
          if (!tmp19) {
            const assets = activity.assets;
            let large_url;
            if (null != assets) {
              large_url = assets.large_url;
            }
            tmp19 = null != large_url;
          }
          if (!tmp19) {
            const assets2 = activity.assets;
            let small_url;
            if (null != assets2) {
              small_url = assets2.small_url;
            }
            tmp19 = null != small_url;
          }
          obj.has_urls = tmp19;
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
            let tmp29;
            if (null != party.size) {
              if (party.size[1] > 0) {
                tmp29 = party.size[1];
              }
            }
            obj.party_max = tmp29;
            obj.party_id = party.id;
          }
          pid(activity[13]).track(constants.ACTIVITY_UPDATED, obj);
          return activity;
        }
      });
    }
  } else {
    let tmp3 = importDefault(dependencyMap[6]);
    obj = { errorCode: constants3.INVALID_COMMAND };
    const _HermesInternal = HermesInternal;
    const prototype = tmp3.prototype;
    tmp3 = new tmp3(obj, "command not available from \"" + socket.transport + "\" transport");
    throw tmp3;
  }
};
obj[tmp3.RPCCommands.SET_ACTIVITY] = obj;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;
