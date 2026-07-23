// Module ID: 10917
// Function ID: 84800
// Name: fetchJoinSecret
// Dependencies: [5, 653, 4155, 668, 5689, 3827, 686, 507, 10482, 10483, 10522, 2]

// Module 10917 (fetchJoinSecret)
import module_3827 from "module_3827";
import ME from "ME";
import { ActivityIntent } from "items3";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function fetchJoinSecret(application) {
  let channelId;
  let messageId;
  let remotePartyId;
  let sessionId;
  let userId;
  const _require = arg1;
  ({ channelId, messageId } = application);
  const id = application.application.id;
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
  id(686).dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
  const HTTP = _require(507).HTTP;
  obj = { url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), retries: 3, query: tmp2, oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((arg0) => callback(arg0), () => {
    let obj = id(outer1_2[6]);
    obj = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
    obj.dispatch(obj);
    return false;
  });
}
function joinWithSecret(str) {
  const combined = "" + str.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + arg1;
  importDefault(3827).openURL(combined, constants2.SAFARI);
}
({ Endpoints: closure_4, DiscordConnectDeeplinks: closure_5, WebBrowserType: closure_6, ActivityFlags: closure_7 } = ME);
const result = require("items3").fileFinishedImporting("actions/GamesActionCreators.native.tsx");

export default {
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
    let closure_0 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  joinWithSecret
};
