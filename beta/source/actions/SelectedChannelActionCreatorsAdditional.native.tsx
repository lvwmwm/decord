// Module ID: 5663
// Function ID: 5664
// Name: SelectedChannelActionCreatorsAdditional
// Dependencies: [2045, 2067, 5664, 4431, 2099, 4612, 1376, 4809, 5665, 4935, 5666, 4489, 5667, 5668, 4757, 5681, 1984, 13930, 1259, 577, 2]
// Exports: getChannelSelectionOrigin, selectVoiceChannelAdditional

// Module 5663 (SelectedChannelActionCreatorsAdditional)
import DispatcherDefault from "Dispatcher" /* 577 */;
import v1 from "v1" /* 1259 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5664 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4612 */;
import UserStore from "UserStore" /* 1376 */;
import VoiceStateStore from "VoiceStateStore" /* 4809 */;

const require = globalThis.__r;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5665).STAGE_BOOSTING_SHEET_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const getChannelSelectionOrigin = function getChannelSelectionOrigin() {
  let guildId = SelectedGuildStore.getGuildId();
  if (guildId == null) {
    guildId = null;
  }
  const obj = { fromGuildId: guildId, fromChannelId: null };
  let channelId = SelectedChannelStore.getChannelId(guildId, false);
  if (channelId == null) {
    channelId = null;
  }
  obj.fromChannelId = channelId;
  return obj;
};
export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(id, guildId, flag, flag2, arg4) {
  _require = id;
  importDefault = guildId;
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
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (null != channel) {
      const isChannelFullResult = require("ChannelUtils").isChannelFull(channel, VoiceStateStore, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        if (!tmp14Result.canLurkerListen(channel)) {
          return tmp14(tmp15[11]).unverifiedVoiceGate(check);
        }
        tmp14Result = tmp14(tmp15[10]);
      }
      const tmp4 = require("canJoinVoiceChannel")(channel, PermissionStore);
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp14Result4.getStageHasMedia(channel.id)) {
            let obj2 = { channel };
            require("ActionSheetActionCreators").openLazy(tmp14(tmp15[16])(tmp15[15], tmp15.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
          }
          tmp14Result4 = tmp14(tmp15[13]);
        }
      }
    }
    require("collectCallFeedback")(() => {
      const v4Result = v1.v4();
      const obj2 = DispatcherDefault;
      obj2.dispatch({ type: "VOICE_CHANNEL_SELECT", guildId, channelId, currentVoiceChannelId: SelectedChannelStore.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 });
    }, id, flag2, flag);
  }
};
