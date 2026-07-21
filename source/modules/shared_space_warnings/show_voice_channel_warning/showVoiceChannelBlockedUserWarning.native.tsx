// Module ID: 12545
// Function ID: 96409
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: []
// Exports: showVoiceChannelBlockedUserWarning

// Module 12545 (showVoiceChannelBlockedUserWarning)
let closure_3 = importDefault(dependencyMap[0]);
({ queueBlockWarning: closure_4, dequeueBlockWarning: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).VoiceChannelWarningSurfaces;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, blockedUserId) {
  const state = state.getState();
  if (state === blockedUserId(dependencyMap[3]).AppStates.ACTIVE) {
    callback2();
    let obj = importDefault(dependencyMap[4]);
    obj = { channelId, blockedUserId, impressionName: blockedUserId(dependencyMap[7]).ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING };
    obj = { channel_id: channelId };
    const items = [blockedUserId];
    obj.blocked_user_ids = items;
    obj.warning_surface = constants.POST_JOIN_SHEET;
    obj.impressionProperties = obj;
    obj.openLazy(blockedUserId(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), "gdm_blocked_user_action_sheet", obj);
    const tmp9 = blockedUserId(dependencyMap[6])(dependencyMap[5], dependencyMap.paths);
  } else {
    callback();
  }
};
