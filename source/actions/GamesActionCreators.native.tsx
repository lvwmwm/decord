// Module ID: 10906
// Function ID: 84738
// Name: fetchJoinSecret
// Dependencies: []

// Module 10906 (fetchJoinSecret)
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
  obj = { -72722844: "<string:1141964802>", 1809338784: "<string:1770717186>", 1707013987: "<string:958005249>", -526639532: "<string:1208483841>", -321895459: "<string:3625975810>", url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), query: tmp2 };
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
