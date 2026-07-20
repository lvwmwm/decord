// Module ID: 10901
// Function ID: 84706
// Name: fetchJoinSecret
// Dependencies: []

// Module 10901 (fetchJoinSecret)
function fetchJoinSecret(application) {
  let channelId;
  let messageId;
  let remotePartyId;
  let sessionId;
  let userId;
  ({ channelId, messageId } = application);
  const id = application.application.id;
  const importDefault = id;
  let tmp = null != channelId;
  ({ userId, sessionId, remotePartyId } = application);
  if (tmp) {
    tmp = null != messageId;
  }
  let tmp2;
  if (tmp) {
    let obj = { channel_id: channelId, message_id: messageId, headless: true };
    tmp2 = obj;
  }
  importDefault(dependencyMap[6]).dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
  const HTTP = arg1(dependencyMap[7]).HTTP;
  obj = { <string:1901093126>: "<string:1137377282>", <string:1370710327>: "<string:1784217602>", <string:1449395197>: "<string:977403905>", <string:1369504682>: "<string:1204420609>", <string:4150487945>: "<string:3631480834>", url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), query: tmp2 };
  const value = HTTP.get(obj);
  return value.then((arg0) => arg1(arg0), () => {
    let obj = id(closure_2[6]);
    obj = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
    obj.dispatch(obj);
    return false;
  });
}
function joinWithSecret(str) {
  const combined = "" + str.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + arg1;
  importDefault(dependencyMap[5]).openURL(combined, constants2.SAFARI);
}
let closure_3 = importDefault(dependencyMap[0]);
({ Endpoints: closure_4, DiscordConnectDeeplinks: closure_5, WebBrowserType: closure_6, ActivityFlags: closure_7 } = arg1(dependencyMap[1]));
const ActivityIntent = arg1(dependencyMap[2]).ActivityIntent;
const obj = {
  addGame() {

  },
  toggleOverlay() {

  },
  editName() {

  },
  identifyGame() {
    const error = new Error("not supported");
    return Promise.reject(error);
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
    const arg1 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  joinWithSecret
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("actions/GamesActionCreators.native.tsx");

export default obj;
