// Module ID: 11219
// Function ID: 11220
// Name: GamesActionCreators
// Dependencies: [5, 1087, 2026, 1107, 7288, 4901, 584, 1297, 11220, 11221, 11223, 2]

// Module 11219 (GamesActionCreators)
import Constants2 from "Constants" /* 2026 */;
import LinkingDefault from "Linking" /* 4901 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function fetchJoinSecret(application, arg1) {
  let channelId;
  let closure_0;
  let messageId;
  let remotePartyId;
  let sessionId;
  let userId;
  _require = arg1;
  ({ channelId, messageId } = application);
  const id = application.application.id;
  let tmp = null != channelId;
  ({ userId, sessionId, remotePartyId } = application);
  if (tmp) {
    tmp = null != messageId;
  }
  let tmp2;
  if (tmp) {
    tmp2 = { channel_id: channelId, message_id: messageId, headless: true };
    const obj = { channel_id: channelId, message_id: messageId, headless: true };
  }
  const obj2 = id(584);
  obj2.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), retries: 3, query: tmp2, oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(request);
  return value.then((result) => f159571(result), () => {
    const obj = deeplink_uri(application[6]);
    const obj2 = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
    obj.dispatch(obj2);
    return false;
  });
}
({ Endpoints: closure_4, DiscordConnectDeeplinks: hasOwnProperty, WebBrowserType: metroRequire, ActivityFlags: metroImportDefault } = Constants);
const ActivityIntent = Constants2.ActivityIntent;
let obj = {
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
  reportUnverifiedGame() {

  },
  uploadIcon() {

  },
  deleteEntry() {

  },
  launch() {
    return Promise.resolve();
  },
  join(arg0) {
    let closure_0 = arg0;
    return (async (arg0, value) => {
      let _false;
      let activityChannelId;
      let application;
      let channelId;
      let embedded;
      let locationObject;
      let source;
      function joinViaDeeplink(application) {
        let channelId;
        let constants3;
        let deeplink_uri;
        let messageId;
        let remotePartyId;
        let sessionId;
        let userId;
        closure_0 = application;
        application = application.application;
        if (application.id === closure_0(application[3]).DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID) {
          deeplink_uri = tmp(tmp2[3]).DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
        } else {
          deeplink_uri = application.deeplink_uri;
        }
        if (null == deeplink_uri) {
          let resolved;
          if (!deeplink_uri(application[4])(application.applicationActivity, constants.SUPPORTS_JOIN_URL)) {
            let flag = false;
            resolved = Promise.resolve(false);
          }
          return resolved;
        }
        const f159571 = (body) => {
          let flag;
          let flag2;
          let flag3;
          const join_url = body.body.join_url;
          const secret = body.body.secret;
          if (null != join_url) {
            const obj3 = deeplink_uri(application[5]);
            obj3.openURL(join_url, constants2.SAFARI);
            const obj2 = { type: "ACTIVITY_JOIN", applicationId: null, parentApplicationId: null, secret, intent: constants3.PLAY, embedded: flag3 };
            ({ id: obj4.applicationId, parent_id: obj4.parentApplicationId } = id);
            flag3 = f159571.embedded;
            const dispatch = deeplink_uri(application[6]).dispatch;
            deeplink_uri(application[6]);
            if (flag3 == null) {
              flag3 = false;
            }
            dispatch(obj2);
            flag2 = true;
          } else {
            const str = id;
            if (null == id) {
              const obj9 = { type: "ACTIVITY_JOIN_FAILED", applicationId: id.id };
              const obj = deeplink_uri(application[6]);
              obj.dispatch(obj9);
              flag2 = false;
            } else {
              const _HermesInternal = HermesInternal;
              const combined = "" + str.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + secret;
              const obj5 = deeplink_uri(application[5]);
              obj5.openURL(combined, constants2.SAFARI);
              const obj10 = { type: "ACTIVITY_JOIN", applicationId: null, parentApplicationId: null, secret, intent: constants3.PLAY, embedded: flag };
              ({ id: obj6.applicationId, parent_id: obj6.parentApplicationId } = id);
              flag = f159571.embedded;
              const dispatch2 = deeplink_uri(application[6]).dispatch;
              deeplink_uri(application[6]);
              if (flag == null) {
                flag = false;
              }
              dispatch2(obj10);
              flag2 = true;
            }
          }
          return flag2;
        };
        ({ channelId, messageId } = application);
        const id = application.application.id;
        let tmp7 = null != channelId;
        ({ userId, sessionId, remotePartyId } = application);
        if (tmp7) {
          tmp7 = null != messageId;
        }
        let tmp8;
        if (tmp7) {
          let obj = { channel_id: channelId, message_id: messageId, headless: true };
          tmp8 = obj;
        }
        let obj2 = deeplink_uri(tmp2[6]);
        obj2.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
        const HTTP = tmp(tmp2[7]).HTTP;
        const request = { url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), retries: 3, query: tmp8, oldFormErrors: true, rejectWithError: true };
        const value = HTTP.get(request);
        resolved = value.then((result) => f159571(result), () => {
          const obj = deeplink_uri(application[6]);
          const obj2 = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
          obj.dispatch(obj2);
          return false;
        });
      }
      if (c2 === 2) {
        c2 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp5;
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp8;
              const tmp20 = closure_0;
              ({ application, channelId, locationObject } = closure_0);
              ({ embedded, source } = closure_0);
              if (undefined === locationObject) {
                locationObject = {};
              }
              const analyticsLocations = tmp20.analyticsLocations ?? [];
              if (embedded) {
                const tmp11 = c2;
                let obj2 = _false(c2[8]);
                const tmp12 = activityChannelId;
                if (obj2.canLaunchContextlessFrame(application)) {
                  const obj6 = { application, userId: null, activity: null, sessionId: null, channelId, messageId: tmp20.messageId };
                  ({ userId: obj5.userId, applicationActivity: obj5.activity, sessionId: obj5.sessionId } = tmp20);
                  tmp5 = tmp12(tmp11[9])(obj6);
                } else {
                  const obj7 = { applicationId: application.id, activityChannelId, source, locationObject, analyticsLocations };
                  activityChannelId = channelId;
                  const tmp12Result = tmp12(tmp11[10]);
                  if (channelId == null) {
                    activityChannelId = undefined;
                  }
                  c3 = 1;
                  c2 = 1;
                  const obj8 = { value: tmp12Result(obj7), done: false };
                  return obj8;
                }
              } else {
                let tmp7 = null;
                if (null != tmp6) {
                  tmp8 = fetchJoinSecret(tmp20, () => true);
                } else {
                  tmp8 = joinViaDeeplink(tmp20);
                }
              }
              c2 = 3;
              const obj14 = { value: tmp8, done: true };
              return obj14;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            _false = value;
            if (value == null) {
              let flag = false;
              _false = false;
            }
            tmp5 = _false;
          }
          tmp8 = tmp5;
        } catch (tmp16) {
          c2 = 3;
          throw tmp16;
        }
      }
    })();
  },
  joinWithSecret(str, arg1) {
    const combined = "" + str.replace(/\/+$/, "") + hasOwnProperty.GAME_INVITE_FRAGMENT + arg1;
    const obj = LinkingDefault;
    obj.openURL(combined, metroRequire.SAFARI);
  }
};
const result = size.fileFinishedImporting("actions/GamesActionCreators.native.tsx");

export default obj;
