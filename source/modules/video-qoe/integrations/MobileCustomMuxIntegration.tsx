// Module ID: 14089
// Function ID: 108300
// Name: logger
// Dependencies: [6, 7, 4, 14085, 14087, 2]

// Module 14089 (logger)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const logger = new require("U").Logger("MobileCustomMuxIntegration");
const tmp3 = (() => {
  class MobileCustomMuxIntegration {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, self);
      this.isInitialized = false;
      this.viewInitEmitted = false;
      this.playerReadyEmitted = false;
      this.playStarted = false;
      this.playingEmitted = false;
      this.currentPlayheadTime = 0;
      this.currentRendition = null;
      this.getPlayheadTime = () => self.currentPlayheadTime * 1000;
      this.getStateData = () => self.videoState;
      this.config = arg0;
      SessionManager = MobileCustomMuxIntegration(outer1_2[3]).SessionManager;
      this.sessionId = SessionManager.generateSessionId();
      this.playerId = "discord-mobile-" + this.sessionId;
      obj = { player_is_paused: true, player_width: 0, player_height: 0, player_autoplay_on: false, player_preload_on: true, video_cdn: "Cloudflare" };
      obj.video_series = arg0.contentMetadata.questId;
      obj.video_producer = arg0.contentMetadata.gameId;
      obj.video_brand = arg0.contentMetadata.gameName;
      obj.video_title = arg0.contentMetadata.title;
      obj.video_stream_type = arg0.contentMetadata.videoStreamType;
      obj.video_source_url = arg0.contentMetadata.contentId;
      str = "video/mp4";
      if ("hls" === arg0.contentMetadata.videoStreamType) {
        str = "application/x-mpegURL";
      }
      obj.video_source_mime_type = str;
      obj.video_source_duration = arg0.contentMetadata.durationMs;
      this.videoState = obj;
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      const muxEnvKey = this.getMuxEnvKey();
      if (null != muxEnvKey) {
        if (0 !== arr.length) {
          let obj = outer1_1(outer1_2[4]);
          obj = {};
          const debug = self.config.debug;
          let tmp8 = tmp7;
          if (null != debug) {
            tmp8 = debug;
          }
          obj.debug = tmp8;
          ({ getPlayheadTime: obj2.getPlayheadTime, getStateData: obj2.getStateData } = self);
          obj.data = self.mapConfigToMuxData(muxEnvKey);
          obj.init(self.playerId, obj);
          self.isInitialized = true;
          obj = { playerId: self.playerId };
          outer1_5.info("Mux Data mobile integration initialized", obj);
        }
      }
      outer1_5.info("Mux environment key not available, skipping QoE tracking");
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "updatePlayheadTime",
    value(currentPlayheadTime) {
      this.currentPlayheadTime = currentPlayheadTime;
    }
  };
  items[1] = obj;
  obj = {
    key: "updateVideoDimensions",
    value(player_width, player_height) {
      this.videoState.player_width = player_width;
      this.videoState.player_height = player_height;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateVideoSourceDimensions",
    value(video_source_width, video_source_height) {
      this.videoState.video_source_width = video_source_width;
      this.videoState.video_source_height = video_source_height;
    }
  };
  items[4] = {
    key: "updateVideoSource",
    value(video_source_url, video_source_mime_type) {
      this.videoState.video_source_url = video_source_url;
      this.videoState.video_source_mime_type = video_source_mime_type;
      let result;
      if (null != arg2) {
        result = arg2 * 1000;
      }
      this.videoState.video_source_duration = result;
    }
  };
  items[5] = {
    key: "updatePlayerState",
    value(player_is_paused, player_is_fullscreen) {
      this.videoState.player_is_paused = player_is_paused;
      if (null != player_is_fullscreen) {
        this.videoState.player_is_fullscreen = player_is_fullscreen;
      }
    }
  };
  items[6] = {
    key: "emitPlayerReady",
    value() {
      const self = this;
      if (this.isInitialized) {
        if (!self.playerReadyEmitted) {
          outer1_1(outer1_2[4]).emit(self.playerId, "playerready");
          self.playerReadyEmitted = true;
          const obj = outer1_1(outer1_2[4]);
        }
      }
    }
  };
  items[7] = {
    key: "emitViewInit",
    value() {
      const self = this;
      if (this.isInitialized) {
        if (!self.viewInitEmitted) {
          outer1_1(outer1_2[4]).emit(self.playerId, "viewinit");
          self.viewInitEmitted = true;
          const obj = outer1_1(outer1_2[4]);
        }
      }
    }
  };
  items[8] = {
    key: "emitLoadStart",
    value() {
      const self = this;
      if (this.isInitialized) {
        self.emitViewInit();
      }
    }
  };
  items[9] = {
    key: "emitLoad",
    value(arg0) {
      const self = this;
      if (this.isInitialized) {
        self.updateVideoSource(undefined, undefined, arg0);
      }
    }
  };
  items[10] = {
    key: "emitPlay",
    value() {
      const self = this;
      if (this.isInitialized) {
        if (!self.viewInitEmitted) {
          self.emitViewInit();
        }
        self.updatePlayerState(false);
        outer1_1(outer1_2[4]).emit(self.playerId, "play");
        self.playStarted = true;
        self.playingEmitted = false;
        const obj = outer1_1(outer1_2[4]);
      }
    }
  };
  items[11] = {
    key: "emitPause",
    value() {
      const self = this;
      if (this.isInitialized) {
        self.updatePlayerState(true);
        outer1_1(outer1_2[4]).emit(self.playerId, "pause");
        const obj = outer1_1(outer1_2[4]);
      }
    }
  };
  items[12] = {
    key: "emitPlaying",
    value() {
      const self = this;
      if (this.isInitialized) {
        if (!self.playingEmitted) {
          if (!self.viewInitEmitted) {
            self.emitViewInit();
          }
          if (!self.playStarted) {
            outer1_1(outer1_2[4]).emit(self.playerId, "play");
            self.playStarted = true;
            const obj = outer1_1(outer1_2[4]);
          }
          outer1_1(outer1_2[4]).emit(self.playerId, "playing");
          self.playingEmitted = true;
          const obj2 = outer1_1(outer1_2[4]);
        }
      }
    }
  };
  items[13] = {
    key: "emitWaiting",
    value() {
      if (this.isInitialized) {
        outer1_1(outer1_2[4]).emit(tmp.playerId, "waiting");
        const obj = outer1_1(outer1_2[4]);
      }
    }
  };
  items[14] = {
    key: "emitCanPlay",
    value() {
      this.emitPlayerReady();
    }
  };
  items[15] = {
    key: "emitSeeking",
    value() {
      if (this.isInitialized) {
        outer1_1(outer1_2[4]).emit(tmp.playerId, "seeking");
        const obj = outer1_1(outer1_2[4]);
      }
    }
  };
  items[16] = {
    key: "emitSeeked",
    value() {
      if (this.isInitialized) {
        outer1_1(outer1_2[4]).emit(tmp.playerId, "seeked");
        const obj = outer1_1(outer1_2[4]);
      }
    }
  };
  items[17] = {
    key: "emitEnded",
    value() {
      const self = this;
      if (this.isInitialized) {
        outer1_1(outer1_2[4]).emit(self.playerId, "ended");
        self.emitViewEnd();
        const obj = outer1_1(outer1_2[4]);
      }
    }
  };
  items[18] = {
    key: "emitError",
    value(arg0) {
      if (this.isInitialized) {
        outer1_1(outer1_2[4]).emit(tmp.playerId, "error", arg0);
        const obj = outer1_1(outer1_2[4]);
      }
    }
  };
  items[19] = {
    key: "emitTimeUpdate",
    value() {
      const self = this;
      if (this.isInitialized) {
        const playStarted = self.playStarted;
        let tmp = playStarted;
        if (playStarted) {
          tmp = !self.playingEmitted;
        }
        if (tmp) {
          self.emitPlaying();
        }
        let obj = outer1_1(outer1_2[4]);
        obj = { player_playhead_time: self.currentPlayheadTime * 1000 };
        obj.emit(self.playerId, "timeupdate", obj);
      }
    }
  };
  items[20] = {
    key: "emitRenditionChange",
    value(width, height, bitrate) {
      const self = this;
      if (this.isInitialized) {
        let obj = { width, height, bitrate };
        self.currentRendition = obj;
        const result = self.updateVideoSourceDimensions(width, height);
        obj = { video_source_width: width, video_source_height: height, video_source_bitrate: bitrate };
        outer1_1(outer1_2[4]).emit(self.playerId, "renditionchange", obj);
        const obj2 = outer1_1(outer1_2[4]);
      }
    }
  };
  items[21] = {
    key: "destroy",
    value() {
      const self = this;
      if (this.isInitialized) {
        self.emitViewEnd();
        let obj = outer1_1(outer1_2[4]);
        obj.emit(self.playerId, "destroy");
        self.isInitialized = false;
        obj = { playerId: self.playerId };
        outer1_5.info("Mux Data mobile integration destroyed", obj);
      }
    }
  };
  items[22] = {
    key: "emitViewEnd",
    value() {
      if (this.isInitialized) {
        outer1_1(outer1_2[4]).emit(tmp.playerId, "viewend");
        const obj = outer1_1(outer1_2[4]);
      }
    }
  };
  items[23] = {
    key: "getSessionId",
    value() {
      return this.sessionId;
    }
  };
  items[24] = {
    key: "hasPlayStarted",
    value() {
      return this.playStarted;
    }
  };
  items[25] = {
    key: "mapConfigToMuxData",
    value(env_key) {
      const self = this;
      const obj = { env_key, session_id: this.sessionId, player_name: "discord-mobile", player_version: "1.0.0", player_software_name: "react-native-video", player_software_version: "5.2.1-discord", player_mux_plugin_name: "discord-mobile-custom-integration", player_mux_plugin_version: "1.0.0", video_id: this.config.contentMetadata.contentId, video_title: this.config.contentMetadata.title, video_duration: this.config.contentMetadata.durationMs, video_content_type: this.config.contentMetadata.contentType, video_series: this.config.contentMetadata.questId, video_producer: this.config.contentMetadata.gameId };
      const gameName = this.config.contentMetadata.gameName;
      let str = "Discord";
      if (null != gameName) {
        str = gameName;
      }
      obj.video_brand = str;
      obj.video_cdn = "Cloudflare";
      obj.video_stream_type = self.config.contentMetadata.videoStreamType;
      obj.view_client_application_name = self.getBuildChannel();
      obj.view_client_application_version = self.getAppVersion();
      obj.experiment_name = self.config.contentMetadata.experimentName;
      return obj;
    }
  };
  items[26] = {
    key: "getAppVersion",
    value() {
      const appVersion = this.config.appVersion;
      let str = "unknown";
      if (null != appVersion) {
        str = appVersion;
      }
      return str;
    }
  };
  items[27] = {
    key: "getMuxEnvKey",
    value() {
      return "1qd16mdmdjasipqg3irobln4u";
    }
  };
  items[28] = {
    key: "getBuildChannel",
    value() {
      const releaseChannel = this.config.releaseChannel;
      let str = "stable";
      if (null != releaseChannel) {
        str = releaseChannel;
      }
      return str;
    }
  };
  return callback(MobileCustomMuxIntegration, items);
})();
let result = require("log").fileFinishedImporting("modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx");

export const MobileCustomMuxIntegration = tmp3;
