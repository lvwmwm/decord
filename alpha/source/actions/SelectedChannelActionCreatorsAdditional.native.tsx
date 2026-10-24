// Module ID: 6635
// Function ID: 6636
// Name: SelectedChannelActionCreatorsAdditional
// Dependencies: [4823, 4845, 6636, 4903, 4874, 5002, 1392, 5630, 6637, 5994, 6638, 5662, 6639, 6640, 5210, 6693, 2002, 5861, 14941, 1281, 584, 2]
// Exports: getChannelSelectionOrigin, selectVoiceChannelAdditional

// Module 6635 (SelectedChannelActionCreatorsAdditional)
import DispatcherDefault from "Dispatcher" /* 584 */;
import v1 from "v1" /* 1281 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6637 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildStore from "GuildStore" /* 4845 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6636 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import UserStore from "UserStore" /* 1392 */;
import VoiceStateStore from "VoiceStateStore" /* 5630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const STAGE_BOOSTING_SHEET_KEY = StageChannelsConstants.STAGE_BOOSTING_SHEET_KEY;
let result = size.fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

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
      const obj9 = require("ChannelUtils");
      const isChannelFullResult = obj9.isChannelFull(channel, VoiceStateStore, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        const tmp17Result = require("StageChannelPermissionUtils");
        if (!tmp17Result.canLurkerListen(channel)) {
          const tmp17Result3 = require("ToastUtils");
          return tmp17Result3.unverifiedVoiceGate(check);
        }
      }
      require("canJoinVoiceChannel")(channel, PermissionStore);
      const tmp2 = importDefault;
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          const tmp17Result4 = require("StageMediaHooks");
          if (tmp17Result4.getStageHasMedia(channel.id)) {
            let obj2 = { channel };
            const tmp2Result = tmp2(flag[14]);
            tmp2Result.openLazy(require("asyncRequire")(flag[15], flag.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
          }
        }
      }
    }
    if (flag) {
      const obj6 = require("applyBackgroundOption");
      const result = obj6.applyInitialVideoBackgroundOption();
    }
    require("collectCallFeedback")(function dispatchAction() {
      const obj = v1;
      const v4Result = obj.v4();
      const obj2 = DispatcherDefault;
      const obj3 = { type: "VOICE_CHANNEL_SELECT", guildId, channelId, currentVoiceChannelId: SelectedChannelStore.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 };
      obj2.dispatch(obj3);
    }, id, flag2, flag);
  }
};
