// Module ID: 14036
// Function ID: 107513
// Name: MuxIntegration
// Dependencies: [6, 7, 2]

// Module 14036 (MuxIntegration)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class MuxIntegration {
    constructor() {
      tmp = MuxIntegration(this, MuxIntegration);
      return;
    }
  }
  let obj = {
    key: "mapDiscordToMuxMetadata",
    value(contentMetadata, session_id) {
      const self = this;
      const obj = { env_key: "1qd16mdmdjasipqg3irobln4u", session_id, player_name: "discord", player_version: "1.0.0", video_id: contentMetadata.contentMetadata.contentId, video_title: contentMetadata.contentMetadata.title };
      let durationMs = contentMetadata.contentMetadata.durationMs;
      if (null == durationMs) {
        let result;
        if (null != contentMetadata.contentMetadata.durationSec) {
          result = 1000 * contentMetadata.contentMetadata.durationSec;
        }
        durationMs = result;
      }
      obj.video_duration = durationMs;
      obj.video_content_type = contentMetadata.contentMetadata.contentType;
      obj.video_series = contentMetadata.contentMetadata.questId;
      obj.video_producer = contentMetadata.contentMetadata.gameId;
      const gameName = contentMetadata.contentMetadata.gameName;
      let str = "Discord";
      if (null != gameName) {
        str = gameName;
      }
      obj.video_brand = str;
      obj.video_cdn = "Cloudflare";
      obj.video_stream_type = contentMetadata.contentMetadata.videoStreamType;
      obj.view_client_application_name = self.getBuildChannel();
      obj.view_client_application_version = self.getAppVersion();
      const userContext = contentMetadata.userContext;
      let userId;
      if (null != userContext) {
        userId = userContext.userId;
      }
      obj.viewer_user_id = userId;
      const userContext2 = contentMetadata.userContext;
      let userTier;
      if (null != userContext2) {
        userTier = userContext2.userTier;
      }
      obj.viewer_plan = userTier;
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getAppVersion",
    value() {
      return "6057";
    }
  };
  items[1] = obj;
  obj = {
    key: "getBuildChannel",
    value() {
      let RELEASE_CHANNEL;
      if (null != GLOBAL_ENV) {
        RELEASE_CHANNEL = GLOBAL_ENV.RELEASE_CHANNEL;
      }
      let str = "stable";
      if (null != RELEASE_CHANNEL) {
        str = RELEASE_CHANNEL;
      }
      return str;
    }
  };
  items[2] = obj;
  return callback(MuxIntegration, null, items);
})();
let result = require("set").fileFinishedImporting("modules/video-qoe/integrations/MuxIntegration.tsx");

export const MuxIntegration = tmp2;
