// Module ID: 9862
// Function ID: 76333
// Dependencies: [5, 653, 507, 686, 2]

// Module 9862
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/ChannelFollowerActionCreators.tsx");

export default {
  createChannelFollower(targetChannelId, closure_1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.CHANNEL_FOLLOWERS(closure_1), body: obj, oldFormErrors: true };
    obj = { webhook_channel_id: targetChannelId, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  fetchChannelFollowerStats(closure_0) {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  dismissPublishBump(messageId) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", messageId };
    obj.dispatch(obj);
  },
  permanentlyHidePublishBump(channelId) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY", channelId };
    obj.dispatch(obj);
  }
};
