// Module ID: 12727
// Function ID: 99046
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: [6271, 12722, 12725, 668, 4099, 12728, 1935, 480, 2]
// Exports: showVoiceChannelBlockedUserWarning

// Module 12727 (showVoiceChannelBlockedUserWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore";
import { VoiceChannelWarningSurfaces as closure_6 } from "GdmWarningMedium";

let closure_4;
let closure_5;
const require = arg1;
({ queueBlockWarning: closure_4, dequeueBlockWarning: closure_5 } = useSharedSpacesWarningStore);
const result = require("GdmWarningMedium").fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, blockedUserId) {
  state = state.getState();
  if (state === require(668) /* keys */.AppStates.ACTIVE) {
    callback2();
    let obj = importDefault(4099);
    obj = { channelId, blockedUserId, impressionName: require(480) /* isThrottled */.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING };
    obj = { channel_id: channelId };
    const items = [blockedUserId];
    obj.blocked_user_ids = items;
    obj.warning_surface = constants.POST_JOIN_SHEET;
    obj.impressionProperties = obj;
    obj.openLazy(require(1935) /* maybeLoadBundle */(12728, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj);
    const tmp9 = require(1935) /* maybeLoadBundle */(12728, dependencyMap.paths);
  } else {
    callback();
  }
};
