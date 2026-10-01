// Module ID: 5724
// Function ID: 5725
// Name: SelectedChannelActionCreatorsAdditional
// Dependencies: [2045, 2067, 5725, 4469, 2099, 4655, 1372, 4855, 5726, 4981, 5727, 4527, 5728, 5729, 4800, 5742, 1981, 13170, 1255, 573, 2]
// Exports: getChannelSelectionOrigin, selectVoiceChannelAdditional

// Module 5724 (SelectedChannelActionCreatorsAdditional)
import DispatcherDefault from "Dispatcher" /* 573 */;
import v1 from "v1" /* 1255 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5725 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const STAGE_BOOSTING_SHEET_KEY = StageChannelsConstants.STAGE_BOOSTING_SHEET_KEY;
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const getChannelSelectionOrigin = function getChannelSelectionOrigin() {
  let channelId;
  let guildId = SelectedGuildStore.getGuildId();
  if (guildId == null) {
    guildId = null;
  }
  const obj = { fromGuildId: guildId, fromChannelId: channelId };
  channelId = SelectedChannelStore.getChannelId(guildId, false);
  if (channelId == null) {
    channelId = null;
  }
  return obj;
};
export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(id, guildId, flag, flag2, arg4) {
  let channelId;
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
      const obj8 = require("ChannelUtils");
      const isChannelFullResult = obj8.isChannelFull(channel, VoiceStateStore, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        const tmp14Result = require("StageChannelPermissionUtils");
        if (!tmp14Result.canLurkerListen(channel)) {
          const tmp14Result3 = require("ToastUtils");
          return tmp14Result3.unverifiedVoiceGate(check);
        }
      }
      require("canJoinVoiceChannel")(channel, PermissionStore);
      const tmp2 = importDefault;
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          const tmp14Result4 = require("StageMediaHooks");
          if (tmp14Result4.getStageHasMedia(channel.id)) {
            let obj2 = { channel };
            const tmp2Result = tmp2(flag[14]);
            tmp2Result.openLazy(require("asyncRequire")(flag[15], flag.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
          }
        }
      }
    }
    require("collectCallFeedback")(() => {
      const obj = v1;
      const v4Result = obj.v4();
      const obj2 = DispatcherDefault;
      const obj3 = { type: "VOICE_CHANNEL_SELECT", guildId, channelId, currentVoiceChannelId: SelectedChannelStore.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 };
      obj2.dispatch(obj3);
    }, id, flag2, flag);
  }
};
