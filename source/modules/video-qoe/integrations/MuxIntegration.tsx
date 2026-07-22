// Module ID: 13922
// Function ID: 105357
// Name: MuxIntegration
// Dependencies: [513, 511, 513]

// Module 13922 (MuxIntegration)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("modules/video-qoe/integrations/MuxIntegration.tsx");

export const MuxIntegration = () => {
  class MuxIntegration {
    constructor() {
      tmp = MuxIntegration(this, MuxIntegration);
      return;
    }
  }
  let closure_0 = MuxIntegration;
  let obj = {
    key: "mapDiscordToMuxMetadata",
    value(contentMetadata, session_id) {
      const self = this;
      const obj = { session_id, video_id: contentMetadata.contentMetadata.contentId, video_title: contentMetadata.contentMetadata.title };
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
      return "6051";
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
}();
