// Module ID: 4945
// Function ID: 42400
// Name: selectVoiceChannelAdditional
// Dependencies: [1348, 1838, 4946, 3758, 1906, 1849, 4146, 4947, 4312, 4948, 3830, 4949, 4950, 4098, 4962, 1934, 12612, 491, 686, 2]
// Exports: selectVoiceChannelAdditional

// Module 4945 (selectVoiceChannelAdditional)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { STAGE_BOOSTING_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(channelId, guildId, flag, flag2, arg4) {
  let obj = arg4;
  const _require = channelId;
  const importDefault = guildId;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (obj === undefined) {
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
  const channel = flag2.getChannel(channelId);
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (null != channel) {
      const isChannelFullResult = _require(flag[8]).isChannelFull(channel, closure_9, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        if (!obj3.canLurkerListen(channel)) {
          return _require(flag[10]).unverifiedVoiceGate(check);
        }
        obj3 = _require(flag[9]);
      }
      const obj8 = _require(flag[8]);
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (obj5.getStageHasMedia(channel.id)) {
            obj = { channel };
            importDefault(flag[13]).openLazy(_require(flag[15])(flag[14], flag.paths), STAGE_BOOSTING_SHEET_KEY, obj);
          }
          obj5 = _require(flag[12]);
        }
      }
    }
    importDefault(flag[16])(() => {
      let obj = channelId(flag[17]);
      const v4Result = obj.v4();
      obj = { type: "VOICE_CHANNEL_SELECT", guildId, channelId, currentVoiceChannelId: outer1_7.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 };
      guildId(flag[18]).dispatch(obj);
    }, channelId, flag2, flag);
  }
};
