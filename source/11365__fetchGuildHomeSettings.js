// Module ID: 11365
// Function ID: 88373
// Name: _fetchGuildHomeSettings
// Dependencies: []
// Exports: clearNewMemberActions, completeNewMemberAction, fetchGuildHomeSettings, fetchNewMemberActions, selectHomeResourceChannel, selectNewMemberActionChannel

// Module 11365 (_fetchGuildHomeSettings)
function _fetchGuildHomeSettings() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _fetchGuildHomeSettings = obj;
  return obj(...arguments);
}
function _fetchNewMemberActions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _fetchNewMemberActions = obj;
  return obj(...arguments);
}
function _clearNewMemberActions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _clearNewMemberActions = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx");

export const fetchGuildHomeSettings = function fetchGuildHomeSettings(guildId) {
  return _fetchGuildHomeSettings(...arguments);
};
export const fetchNewMemberActions = function fetchNewMemberActions(guildId) {
  return _fetchNewMemberActions(...arguments);
};
export const clearNewMemberActions = function clearNewMemberActions() {
  return _clearNewMemberActions(...arguments);
};
export const selectHomeResourceChannel = function selectHomeResourceChannel(guild_id, channelId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (null != channelId) {
    const channel = store.getChannel(channelId);
    let isFullServerPreviewResult = null == guild_id;
    const resourceForChannel = store2.getResourceForChannel(guild_id, channelId);
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = closure_4.isFullServerPreview(guild_id);
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == channel;
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == resourceForChannel;
    }
    if (!isFullServerPreviewResult) {
      let obj = importDefault(dependencyMap[9]);
      obj = { guild_id, channel_id: channel.id, server_guide_channel_type: "resource", channel_action_type: -1 };
      obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
    }
    if (flag) {
      obj = { navigationReplace: false };
      channelId(dependencyMap[10]).transitionToChannel(channelId, obj);
      const obj3 = channelId(dependencyMap[10]);
    }
  }
};
export const selectNewMemberActionChannel = function selectNewMemberActionChannel(guild_id, id) {
  const channel = store.getChannel(id);
  const actionForChannel = store2.getActionForChannel(guild_id, id);
  let isFullServerPreviewResult = null == guild_id;
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = closure_4.isFullServerPreview(guild_id);
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == channel;
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == actionForChannel;
  }
  if (!isFullServerPreviewResult) {
    let obj = importDefault(dependencyMap[9]);
    obj = { guild_id, channel_id: channel.id, server_guide_channel_type: "member action", channel_action_type: actionForChannel.actionType };
    obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
  }
  id(dependencyMap[10]).transitionToChannel(id);
};
export const completeNewMemberAction = function completeNewMemberAction(guildId, channelId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "COMPLETE_NEW_MEMBER_ACTION", guildId, channelId };
  obj.dispatch(obj);
  if (!closure_4.isFullServerPreview(guildId)) {
    const channel = store.getChannel(channelId);
    const actionForChannel = store2.getActionForChannel(guildId, channelId);
    if (null != channel) {
      if (null != actionForChannel) {
        let completedActions = completedActions.getCompletedActions(guildId);
        if (null == completedActions) {
          completedActions = {};
        }
        const callback = importDefault(dependencyMap[11]).keys(completedActions);
        let newMemberActions = store2.getNewMemberActions(guildId);
        if (null == newMemberActions) {
          newMemberActions = [];
        }
        const obj7 = importDefault(dependencyMap[11]);
        obj = {};
        ({ guild_id: obj5.guild_id, id: obj5.channel_id } = channel);
        obj.channel_action_type = actionForChannel.actionType;
        obj.has_completed_all = newMemberActions.reduce((arg0, channelId) => {
          let hasItem = arg0;
          if (arg0) {
            hasItem = closure_0.includes(channelId.channelId);
          }
          return hasItem;
        }, true);
        importDefault(dependencyMap[9]).track(constants.SERVER_GUIDE_ACTION_COMPLETED, obj);
        const obj4 = importDefault(dependencyMap[9]);
      }
    }
    const HTTP = callback(dependencyMap[7]).HTTP;
    const obj1 = { url: closure_9.GUILD_MEMBER_ACTION_UPDATE(guildId, channelId), rejectWithError: true };
    HTTP.post(obj1);
  }
};
