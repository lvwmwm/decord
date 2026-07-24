// Module ID: 12715
// Function ID: 98914
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: [6651, 12710, 12713, 668, 4098, 12716, 1934, 480, 2]
// Exports: showVoiceChannelBlockedUserWarning

// Module 12715 (showVoiceChannelBlockedUserWarning)
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
    let obj = importDefault(4098);
    obj = { channelId, blockedUserId, impressionName: require(480) /* isThrottled */.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING };
    obj = { channel_id: channelId };
    const items = [blockedUserId];
    obj.blocked_user_ids = items;
    obj.warning_surface = constants.POST_JOIN_SHEET;
    obj.impressionProperties = obj;
    obj.openLazy(require(1934) /* maybeLoadBundle */(12716, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj);
    const tmp9 = require(1934) /* maybeLoadBundle */(12716, dependencyMap.paths);
  } else {
    callback();
  }
};
