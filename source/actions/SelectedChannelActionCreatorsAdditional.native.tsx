// Module ID: 5192
// Function ID: 5193
// Name: selectVoiceChannelAdditional
// Dependencies: [1391, 1910, 5193, 3989, 1979, 1922, 4361, 5194, 4527, 5195, 4061, 5196, 5197, 4310, 5209, 2007, 12982, 514, 709, 2]
// Exports: selectVoiceChannelAdditional

// Module 5192 (selectVoiceChannelAdditional)
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import recomputeGuild from "recomputeGuild";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import { STAGE_BOOSTING_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH";

const require = arg1;
const result = require("recomputeGuild").fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(id, guildId, flag, flag2, arg4) {
  const _require = id;
  const importDefault = guildId;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let flag3 = obj.lockVoiceStateForResume;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = obj.bypassIdleUpdate;
  if (flag4 === undefined) {
    flag4 = false;
  }
  const channel = flag2.getChannel(id);
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (null != channel) {
      const isChannelFullResult = _require(flag[8]).isChannelFull(channel, updateVoiceState, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        let tmp14Result = tmp14(tmp15[9]);
        if (!tmp14Result.canLurkerListen(channel)) {
          tmp14Result = tmp14(tmp15[10]);
          return tmp14Result.unverifiedVoiceGate(check);
        }
      }
      const tmp4 = importDefault(flag[11])(channel, getUncachedChannelPermissions);
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp14Result1.getStageHasMedia(channel.id)) {
            obj = { channel: null };
            obj[0] = channel;
            importDefault(tmp15[13]).openLazy(tmp14(tmp15[15])(tmp15[14], tmp15.paths), STAGE_BOOSTING_SHEET_KEY, obj);
          }
          tmp14Result1 = tmp14(tmp15[12]);
        }
      }
    }
    importDefault(flag[16])(() => {
      let obj = id(flag[17]);
      const v4Result = obj.v4();
      obj = { type: "VOICE_CHANNEL_SELECT", guildId, channelId: id, currentVoiceChannelId: outer1_7.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 };
      guildId(flag[18]).dispatch(obj);
    }, id, flag2, flag);
  }
};
