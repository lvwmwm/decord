// Module ID: 13918
// Function ID: 105781
// Name: logger
// Dependencies: []

// Module 13918 (logger)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const logger = new arg1(dependencyMap[2]).Logger("MobileCustomMuxIntegration");
const tmp3 = () => {
  class MobileCustomMuxIntegration {
    constructor(arg0) {
      MobileCustomMuxIntegration = this;
      tmp = closure_3(this, MobileCustomMuxIntegration);
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
      SessionManager = MobileCustomMuxIntegration(closure_2[3]).SessionManager;
      this.sessionId = SessionManager.generateSessionId();
      this.playerId = "discord-mobile-" + this.sessionId;
      obj = { <string:4156904131>: "Array", <string:4217624902>: "isArray", <string:4132527264>: "body", <string:1396401070>: "header", <string:2898022754>: "accessibilityRole", <string:684246098>: "name" };
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
  const arg1 = MobileCustomMuxIntegration;
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      const muxEnvKey = this.getMuxEnvKey();
      if (null != muxEnvKey) {
        if (0 !== arr.length) {
          let obj = callback(closure_2[4]);
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
          closure_5.info("Mux Data mobile integration initialized", obj);
        }
      }
      closure_5.info("Mux environment key not available, skipping QoE tracking");
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
          callback(closure_2[4]).emit(self.playerId, "playerready");
          self.playerReadyEmitted = true;
          const obj = callback(closure_2[4]);
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
          callback(closure_2[4]).emit(self.playerId, "viewinit");
          self.viewInitEmitted = true;
          const obj = callback(closure_2[4]);
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
        callback(closure_2[4]).emit(self.playerId, "play");
        self.playStarted = true;
        self.playingEmitted = false;
        const obj = callback(closure_2[4]);
      }
    }
  };
  items[11] = {
    key: "emitPause",
    value() {
      const self = this;
      if (this.isInitialized) {
        self.updatePlayerState(true);
        callback(closure_2[4]).emit(self.playerId, "pause");
        const obj = callback(closure_2[4]);
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
            callback(closure_2[4]).emit(self.playerId, "play");
            self.playStarted = true;
            const obj = callback(closure_2[4]);
          }
          callback(closure_2[4]).emit(self.playerId, "playing");
          self.playingEmitted = true;
          const obj2 = callback(closure_2[4]);
        }
      }
    }
  };
  items[13] = {
    key: "emitWaiting",
    value() {
      if (this.isInitialized) {
        callback(closure_2[4]).emit(tmp.playerId, "waiting");
        const obj = callback(closure_2[4]);
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
        callback(closure_2[4]).emit(tmp.playerId, "seeking");
        const obj = callback(closure_2[4]);
      }
    }
  };
  items[16] = {
    key: "emitSeeked",
    value() {
      if (this.isInitialized) {
        callback(closure_2[4]).emit(tmp.playerId, "seeked");
        const obj = callback(closure_2[4]);
      }
    }
  };
  items[17] = {
    key: "emitEnded",
    value() {
      const self = this;
      if (this.isInitialized) {
        callback(closure_2[4]).emit(self.playerId, "ended");
        self.emitViewEnd();
        const obj = callback(closure_2[4]);
      }
    }
  };
  items[18] = {
    key: "emitError",
    value(arg0) {
      if (this.isInitialized) {
        callback(closure_2[4]).emit(tmp.playerId, "error", arg0);
        const obj = callback(closure_2[4]);
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
        let obj = callback(closure_2[4]);
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
        callback(closure_2[4]).emit(self.playerId, "renditionchange", obj);
        const obj2 = callback(closure_2[4]);
      }
    }
  };
  items[21] = {
    key: "destroy",
    value() {
      const self = this;
      if (this.isInitialized) {
        self.emitViewEnd();
        let obj = callback(closure_2[4]);
        obj.emit(self.playerId, "destroy");
        self.isInitialized = false;
        obj = { playerId: self.playerId };
        closure_5.info("Mux Data mobile integration destroyed", obj);
      }
    }
  };
  items[22] = {
    key: "emitViewEnd",
    value() {
      if (this.isInitialized) {
        callback(closure_2[4]).emit(tmp.playerId, "viewend");
        const obj = callback(closure_2[4]);
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
      const obj = { env_key, session_id: this.sessionId, video_id: this.config.contentMetadata.contentId, video_title: this.config.contentMetadata.title, video_duration: this.config.contentMetadata.durationMs, video_content_type: this.config.contentMetadata.contentType, video_series: this.config.contentMetadata.questId, video_producer: this.config.contentMetadata.gameId };
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
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx");

export const MobileCustomMuxIntegration = tmp3;
