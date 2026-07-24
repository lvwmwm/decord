// Module ID: 11412
// Function ID: 88712
// Name: _fetchGuildHomeSettings
// Dependencies: [5, 1909, 1348, 4333, 4334, 653, 686, 507, 11413, 675, 4138, 21, 2]
// Exports: clearNewMemberActions, completeNewMemberAction, fetchGuildHomeSettings, fetchNewMemberActions, selectHomeResourceChannel, selectNewMemberActionChannel

// Module 11412 (_fetchGuildHomeSettings)
import closure_3 from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
function _fetchGuildHomeSettings() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchNewMemberActions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _clearNewMemberActions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx");

export const fetchGuildHomeSettings = function fetchGuildHomeSettings(guildId) {
  return _fetchGuildHomeSettings(...arguments);
};
export const fetchNewMemberActions = function fetchNewMemberActions(guildId) {
  return _fetchNewMemberActions(...arguments);
};
export const clearNewMemberActions = function clearNewMemberActions() {
  return _clearNewMemberActions(...arguments);
};
export const selectHomeResourceChannel = function selectHomeResourceChannel(closure_0, channelId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (null != channelId) {
    const channel = store.getChannel(channelId);
    let isFullServerPreviewResult = null == closure_0;
    const resourceForChannel = store2.getResourceForChannel(closure_0, channelId);
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = _isNativeReflectConstruct.isFullServerPreview(closure_0);
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == channel;
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == resourceForChannel;
    }
    if (!isFullServerPreviewResult) {
      let obj = importDefault(675);
      obj = { guild_id: closure_0, channel_id: channel.id, server_guide_channel_type: "resource", channel_action_type: -1 };
      obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
    }
    if (flag) {
      obj = { navigationReplace: false };
      require(4138) /* transitionToChannel */.transitionToChannel(channelId, obj);
      const obj3 = require(4138) /* transitionToChannel */;
    }
  }
};
export const selectNewMemberActionChannel = function selectNewMemberActionChannel(guild_id, id) {
  const channel = store.getChannel(id);
  const actionForChannel = store2.getActionForChannel(guild_id, id);
  let isFullServerPreviewResult = null == guild_id;
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = _isNativeReflectConstruct.isFullServerPreview(guild_id);
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == channel;
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == actionForChannel;
  }
  if (!isFullServerPreviewResult) {
    let obj = importDefault(675);
    obj = { guild_id, channel_id: channel.id, server_guide_channel_type: "member action", channel_action_type: actionForChannel.actionType };
    obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
  }
  require(4138) /* transitionToChannel */.transitionToChannel(id);
};
export const completeNewMemberAction = function completeNewMemberAction(guildId, channelId) {
  let obj = importDefault(686);
  obj = { type: "COMPLETE_NEW_MEMBER_ACTION", guildId, channelId };
  obj.dispatch(obj);
  if (!_isNativeReflectConstruct.isFullServerPreview(guildId)) {
    const channel = store.getChannel(channelId);
    const actionForChannel = store2.getActionForChannel(guildId, channelId);
    if (null != channel) {
      if (null != actionForChannel) {
        completedActions = completedActions.getCompletedActions(guildId);
        if (null == completedActions) {
          completedActions = {};
        }
        const _require = importDefault(21).keys(completedActions);
        let newMemberActions = store2.getNewMemberActions(guildId);
        if (null == newMemberActions) {
          newMemberActions = [];
        }
        const obj7 = importDefault(21);
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
        importDefault(675).track(constants.SERVER_GUIDE_ACTION_COMPLETED, obj);
        const obj4 = importDefault(675);
      }
    }
    const HTTP = _require(507).HTTP;
    const obj1 = { url: closure_9.GUILD_MEMBER_ACTION_UPDATE(guildId, channelId), rejectWithError: true };
    HTTP.post(obj1);
  }
};
