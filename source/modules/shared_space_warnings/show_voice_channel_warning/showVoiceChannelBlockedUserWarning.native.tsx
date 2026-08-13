// Module ID: 13067
// Function ID: 13068
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: [6923, 13062, 13065, 691, 4310, 13068, 2007, 503, 2]
// Exports: showVoiceChannelBlockedUserWarning

// Module 13067 (showVoiceChannelBlockedUserWarning)
import getState from "getState";
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore";
import { VoiceChannelWarningSurfaces as closure_6 } from "GdmWarningMedium";

let c4;
let c5;
const require = arg1;
({ queueBlockWarning: c4, dequeueBlockWarning: c5 } = useSharedSpacesWarningStore);
const result = require("GdmWarningMedium").fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, id) {
  state = state.getState();
  if (state === require(691) /* keys */.AppStates.ACTIVE) {
    callback2();
    let obj = importDefault(4310);
    obj = { channelId: null, blockedUserId: null, impressionName: null, impressionProperties: null };
    obj[0] = channelId;
    obj[1] = id;
    obj[2] = tmp2(503).ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
    obj = { channel_id: null, blocked_user_ids: null, warning_surface: null };
    obj[0] = channelId;
    const items = [id];
    obj[1] = items;
    obj[2] = constants.POST_JOIN_SHEET;
    obj[3] = obj;
    obj.openLazy(tmp2(2007)(13068, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj);
    const tmp11 = tmp2(2007)(13068, dependencyMap.paths);
  } else {
    callback();
  }
};
