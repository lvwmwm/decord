// Module ID: 16192
// Function ID: 16193
// Name: isExperimentEnabled
// Dependencies: [5, 1218, 1372, 16193, 5134, 16194, 16195, 2]

// Module 16192 (isExperimentEnabled)
import experiment from "experiment";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleSelectedChannelStoreChange from "handleSelectedChannelStoreChange";
import "initialize";

let require = arg1;
let c7 = null;
let c8 = null;
class GuildRoomManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      VOICE_STATE_UPDATES(arg0) {
            return applyArgumentsResult.handleVoiceStateUpdates(arg0);
          },
      EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(arg0) {
            return applyArgumentsResult.handleEmbeddedActivityLaunchSuccess(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildRoomManager.prototype;
prototype["isExperimentEnabled"] = function isExperimentEnabled(guild_id, VOICE_STATE_UPDATE) {
  let obj = importDefault(16194);
  obj = { guildId: guild_id, location: VOICE_STATE_UPDATE };
  return obj.getCurrentConfig(obj).enabled;
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const self = this;
  return callback(function*() {
    if (c7 === 2) {
      c7 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let num = 2;
        c7 = 2;
        let tmp4 = pendingPosition;
        if (0 === pendingPosition) {
          if (arg0 === 1) {
            let num6 = 3;
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            let num5 = 3;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let channelId = tmp;
            let guildId = tmp4;
            let closure_0;
            let userId;
            guildId = undefined;
            channelId = undefined;
            let sessionId;
            let oldChannelId;
            pendingPosition = undefined;
            let tmp64 = outer1_0;
            userId = outer1_0;
            let tmp65 = outer1_0;
            userId = outer1_0;
            closure_0 = outer1_0[Symbol.iterator]();
            let tmp8 = userId;
            let tmp9 = closure_0;
            if (closure_0 === undefined) {
              let num4 = 3;
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              let tmp66 = guildId;
              let tmp67 = channelId;
              oldChannelId = 1;
              closure_0 = tmp10;
              let tmp68 = closure_0;
              userId = closure_0.userId;
              let tmp69 = closure_0;
              guildId = closure_0.guildId;
              let tmp70 = closure_0;
              channelId = closure_0.channelId;
              let tmp71 = closure_0;
              sessionId = closure_0.sessionId;
              let tmp72 = closure_0;
              oldChannelId = closure_0.oldChannelId;
              let tmp73 = userId;
              let tmp74 = outer1_4;
              if (userId === outer1_4.getId()) {
                let tmp24 = guildId;
                let tmp25 = channelId;
                let tmp26 = outer1_4;
                let tmp27 = outer1_4;
                if (outer1_4 === outer1_4.getSessionId()) {
                  let tmp75 = guildId;
                  let tmp76 = channelId;
                  let tmp77 = outer1_3;
                  let tmp78 = c7;
                  if (outer1_3 !== c7) {
                    let tmp79 = c7;
                    let isExperimentEnabledResult = null != c7;
                    if (isExperimentEnabledResult) {
                      let tmp28 = channelId;
                      let tmp29 = outer1_8;
                      isExperimentEnabledResult = null != outer1_8;
                    }
                    if (isExperimentEnabledResult) {
                      let tmp31 = channelId;
                      let tmp32 = outer1_1;
                      let tmp33 = outer1_8;
                      isExperimentEnabledResult = outer1_1.isExperimentEnabled(outer1_8, "VOICE_STATE_UPDATE");
                    }
                    if (isExperimentEnabledResult) {
                      let tmp53 = channelId;
                      let tmp54 = outer1_0;
                      let tmp55 = outer1_2;
                      let obj4 = outer1_0(outer1_2[6]);
                      let tmp56 = outer1_8;
                      let tmp57 = c7;
                      pendingPosition = 2;
                      let num3 = 1;
                      c7 = 1;
                      let obj1 = { value: null, done: false };
                      obj1[0] = obj4.guildRoomDisconnect(outer1_8, c7);
                      return obj1;
                    }
                  }
                }
              } else {
                let tmp11 = guildId;
                let tmp12 = oldChannelId;
                let tmp13 = null != oldChannelId;
                if (tmp13) {
                  let tmp14 = guildId;
                  let tmp15 = oldChannelId;
                  let tmp16 = channelId;
                  tmp13 = oldChannelId !== channelId;
                }
                if (tmp13) {
                  let tmp17 = guildId;
                  let tmp18 = channelId;
                  let tmp19 = outer1_0;
                  let tmp20 = outer1_2;
                  obj1 = outer1_0(outer1_2[6]);
                  let tmp21 = outer1_1;
                  let tmp22 = oldChannelId;
                  let result = obj1.guildRoomLocalDisconnect(outer1_1, oldChannelId);
                }
              }
              oldChannelId = 0;
            }
          }
        } else if (1 === tmp4) {
          let tmp5 = sessionId;
          let tmp6 = sessionId;
          oldChannelId = 0;
          let tmp7 = closure_0;
          closure_0.return();
          throw sessionId;
        } else if (arg0 === 1) {
          let num2 = 3;
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          oldChannelId = 0;
          let tmp63 = closure_0;
          closure_0.return();
          let num12 = 3;
          c7 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        let tmp34 = guildId;
        let tmp35 = outer1_3;
        if (null != outer1_3) {
          let tmp80 = guildId;
          let tmp81 = outer1_2;
          if (null != outer1_2) {
            let tmp36 = guildId;
            let tmp37 = channelId;
            let tmp38 = pendingPosition;
            pendingPosition = pendingPosition.getPendingPosition();
            let tmp39 = outer1_1;
            let tmp40 = outer1_2;
            if (outer1_1.isExperimentEnabled(outer1_2, "VOICE_STATE_UPDATE")) {
              let tmp41 = guildId;
              let tmp42 = channelId;
              let tmp43 = outer1_0;
              let tmp44 = outer1_2;
              let obj3 = outer1_0(outer1_2[6]);
              let tmp45 = outer1_2;
              let tmp46 = outer1_3;
              let tmp47 = pendingPosition;
              let guildRoomConnectResult = obj3.guildRoomConnect(outer1_2, outer1_3, pendingPosition);
            }
          }
        }
        let tmp49 = guildId;
        let tmp50 = channelId;
        let tmp51 = outer1_3;
        c7 = outer1_3;
        let tmp52 = outer1_2;
        outer1_8 = outer1_2;
      }
    }
  })();
};
prototype["handleEmbeddedActivityLaunchSuccess"] = function handleEmbeddedActivityLaunchSuccess(channelId) {
  if (null != channelId.channelId) {
    channel = channel.getChannel(channelId.channelId);
    let isExperimentEnabledResult = null != channel;
    if (isExperimentEnabledResult) {
      const self = this;
      isExperimentEnabledResult = this.isExperimentEnabled(channel.guild_id, "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS");
    }
    if (isExperimentEnabledResult) {
      isExperimentEnabledResult = visible.isVisible(channelId.channelId);
    }
    if (isExperimentEnabledResult) {
      const result = require(16195) /* _guildRoomConnect */.guildRoomToggleLayout(channelId.channelId, true);
      const obj = require(16195) /* _guildRoomConnect */;
    }
  }
};
const guildRoomManager = new GuildRoomManager();
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_rooms/GuildRoomManager.tsx");

export default guildRoomManager;
