// Module ID: 11360
// Function ID: 11361
// Name: GamesActionCreators
// Dependencies: [5, 1087, 2026, 11361, 1107, 7409, 5660, 584, 1297, 11362, 11363, 2]

// Module 11360 (GamesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 2026 */;
import LinkingDefault from "Linking" /* 5660 */;
import getOrFetchApplicationDefault from "getOrFetchApplication" /* 11361 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj = function _joinViaDeeplink() {
  obj = _asyncToGenerator(async (arg0) => {
    let c4;
    let c5;
    let closure_3;
    let deepLinkUri;
    let parentId;
    let closure_0 = arg0;
    let parentApplicationId = tmp;
    let c2 = 0;
    const applicationId = closure_0.applicationId;
    let closure_2 = await getOrFetchApplicationDefault(applicationId);
    if (closure_2 != null) {
      parentId = closure_2.parentId;
    }
    let c1 = parentId;
    if (parentId == null) {
      c1 = null;
    }
    parentApplicationId = c1;
    if (applicationId === closure_131_0(closure_131_2[4]).DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID) {
      deepLinkUri = closure_131_0(closure_131_2[4]).DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
    } else if (closure_2 != null) {
      deepLinkUri = closure_2.deepLinkUri;
    }
    let tmp18 = null == deepLinkUri;
    if (tmp18) {
      tmp18 = !closure_131_1(closure_131_2[5])(closure_0.activity, closure_131_7.SUPPORTS_JOIN_URL);
    }
    let tmp25 = !tmp18;
    if (tmp25) {
      tmp25 = closure_131_10(closure_0, (body) => {
        let flag;
        let flag2;
        let flag3;
        const join_url = body.body.join_url;
        const secret = body.body.secret;
        if (null != join_url) {
          const obj3 = applicationId(c2[6]);
          obj3.openURL(join_url, constants.SAFARI);
          const obj2 = { type: "ACTIVITY_JOIN", applicationId, parentApplicationId, secret, intent: constants2.PLAY, embedded: flag3 };
          flag3 = closure_1_0.embedded;
          const dispatch = applicationId(c2[7]).dispatch;
          applicationId(c2[7]);
          if (flag3 == null) {
            flag3 = false;
          }
          dispatch(obj2);
          flag2 = true;
        } else if (null == closure_1_4) {
          const obj4 = { type: "ACTIVITY_JOIN_FAILED", applicationId };
          obj = applicationId(c2[7]);
          obj.dispatch(obj4);
          flag2 = false;
        } else {
          const _HermesInternal = HermesInternal;
          const combined = "" + closure_1_4.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + secret;
          const obj5 = applicationId(c2[6]);
          obj5.openURL(combined, constants.SAFARI);
          const obj6 = { type: "ACTIVITY_JOIN", applicationId, parentApplicationId, secret, intent: constants2.PLAY, embedded: flag };
          flag = closure_1_0.embedded;
          const dispatch2 = applicationId(c2[7]).dispatch;
          applicationId(c2[7]);
          if (flag == null) {
            flag = false;
          }
          dispatch2(obj6);
          flag2 = true;
        }
        return flag2;
      });
    }
    return tmp25;
  });
  return obj(...arguments);
};
function fetchJoinSecret(applicationId, arg1) {
  let channelId;
  let closure_0;
  let messageId;
  let remotePartyId;
  let sessionId;
  let userId;
  _require = arg1;
  applicationId = applicationId.applicationId;
  ({ channelId, messageId } = applicationId);
  let tmp = null != channelId;
  ({ userId, sessionId, remotePartyId } = applicationId);
  if (tmp) {
    tmp = null != messageId;
  }
  let tmp2;
  if (tmp) {
    obj = { channel_id: channelId, message_id: messageId, headless: true };
    tmp2 = obj;
  }
  let obj2 = applicationId(584);
  obj2.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId, remotePartyId });
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, applicationId), retries: 3, query: tmp2, oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(request);
  return value.then((result) => closure_0(result), () => {
    obj = DispatcherDefault;
    const obj2 = { type: "ACTIVITY_JOIN_FAILED", applicationId };
    obj.dispatch(obj2);
    return false;
  });
}
({ Endpoints: closure_4, DiscordConnectDeeplinks: hasOwnProperty, WebBrowserType: metroRequire, ActivityFlags: metroImportDefault } = Constants);
const ActivityIntent = Constants2.ActivityIntent;
obj = {
  addGame() {

  },
  toggleOverlay() {

  },
  editName() {

  },
  identifyGame() {
    const error = new Error("not supported");
    return reject(error);
  },
  getDetectableGames() {

  },
  deleteEntry() {

  },
  launch(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let value;
      const obj3 = value(c2[9]);
      value = await obj3.tryStartAsEmbeddedApp(closure_0);
      if (arg1 == null) {
        value = false;
      }
      return value;
    })();
  },
  join(arg0) {
    let closure_0 = arg0;
    return (async (arg0, value) => {
      let _false;
      let activityChannelId;
      let obj7;
      function joinViaDeeplink() {
        return closure_1_9(...arguments);
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          let closure_2;
          let closure_7;
          let applicationId;
          let channelId;
          let embedded;
          let source;
          let locationObject;
          let analyticsLocations;
          let remotePartyId;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp4;
              closure_2 = tmp;
              closure_7 = undefined;
              applicationId = _false.applicationId;
              channelId = _false.channelId;
              embedded = _false.embedded;
              source = _false.source;
              locationObject = _false.locationObject ?? {};
              analyticsLocations = _false.analyticsLocations ?? [];
              remotePartyId = _false.remotePartyId;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj7.tryJoinAsFrame(_false), done: false };
              obj7 = _false(closure_2[9]);
              return obj4;
            }
          } else {
            let tmp6;
            if (1 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_7 = value;
                if (null != closure_7) {
                  tmp6 = closure_7;
                } else {
                  const tmp40 = embedded;
                  if (tmp40) {
                    const obj6 = { applicationId, activityChannelId, source, locationObject, analyticsLocations };
                    activityChannelId = channelId;
                    const tmp18 = activityChannelId(closure_2[10]);
                    if (channelId == null) {
                      activityChannelId = undefined;
                    }
                    c4 = 2;
                    c5 = 1;
                    const obj8 = { value: tmp18(obj6), done: false };
                    return obj8;
                  } else {
                    let tmp11;
                    if (null != remotePartyId) {
                      tmp11 = fetchJoinSecret(closure_131_0, () => true);
                    } else {
                      tmp11 = joinViaDeeplink(closure_131_0);
                    }
                    tmp6 = tmp11;
                  }
                }
                c5 = 3;
                const obj9 = { value: tmp6, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              _false = value;
              if (value == null) {
                _false = false;
              }
              tmp6 = _false;
            }
          }
        } catch (tmp32) {
          c5 = 3;
          throw tmp32;
        }
      }
    })();
  },
  joinWithSecret(str, arg1) {
    const combined = "" + str.replace(/\/+$/, "") + hasOwnProperty.GAME_INVITE_FRAGMENT + arg1;
    obj = LinkingDefault;
    obj.openURL(combined, metroRequire.SAFARI);
  }
};
const result = size.fileFinishedImporting("actions/GamesActionCreators.native.tsx");

export default obj;
