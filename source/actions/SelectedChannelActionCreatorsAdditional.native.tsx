// Module ID: 4942
// Function ID: 42369
// Name: selectVoiceChannelAdditional
// Dependencies: []
// Exports: selectVoiceChannelAdditional

// Module 4942 (selectVoiceChannelAdditional)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const STAGE_BOOSTING_SHEET_KEY = arg1(dependencyMap[7]).STAGE_BOOSTING_SHEET_KEY;
const result = arg1(dependencyMap[19]).fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(channelId, guildId, flag, flag2, arg4) {
  let obj = arg4;
  guildId = channelId;
  const importDefault = guildId;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let channel = flag2;
  if (obj === undefined) {
    obj = {};
  }
  let flag3 = obj.lockVoiceStateForResume;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let closure_4 = flag3;
  let flag4 = obj.bypassIdleUpdate;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let check = flag4;
  channel = channel.getChannel(channelId);
  const currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (null != channel) {
      const isChannelFullResult = guildId(dependencyMap[8]).isChannelFull(channel, closure_9, closure_4);
      check = check.getCheck(channel.guild_id);
      if (!check.canChat) {
        if (!obj3.canLurkerListen(channel)) {
          return guildId(dependencyMap[10]).unverifiedVoiceGate(check);
        }
        const obj3 = guildId(dependencyMap[9]);
      }
      const obj8 = guildId(dependencyMap[8]);
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (obj5.getStageHasMedia(channel.id)) {
            obj = { channel };
            importDefault(dependencyMap[13]).openLazy(guildId(dependencyMap[15])(dependencyMap[14], dependencyMap.paths), STAGE_BOOSTING_SHEET_KEY, obj);
          }
          const obj5 = guildId(dependencyMap[12]);
        }
      }
    }
    importDefault(dependencyMap[16])(() => {
      let obj = arg0(flag[17]);
      const v4Result = obj.v4();
      obj = { type: "VOICE_CHANNEL_SELECT", guildId: arg1, channelId: arg0, currentVoiceChannelId: voiceChannelId.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 };
      arg1(flag[18]).dispatch(obj);
    }, channelId, flag2, flag);
  }
};
