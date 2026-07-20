// Module ID: 9849
// Function ID: 76252
// Dependencies: []

// Module 9849
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("actions/ChannelFollowerActionCreators.tsx");

export default {
  createChannelFollower(targetChannelId, closure_1) {
    const HTTP = closure_1(dependencyMap[2]).HTTP;
    let obj = { url: Endpoints.CHANNEL_FOLLOWERS(closure_1), body: obj, oldFormErrors: true };
    obj = { webhook_channel_id: targetChannelId, rejectWithError: closure_1(dependencyMap[2]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  fetchChannelFollowerStats(arg0) {
    const arg1 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  dismissPublishBump(messageId) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", messageId };
    obj.dispatch(obj);
  },
  permanentlyHidePublishBump(channelId) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY", channelId };
    obj.dispatch(obj);
  }
};
