// Module ID: 9928
// Function ID: 76798
// Name: maybeStartLurking
// Dependencies: [5, 1352, 1391, 1348, 1918, 1911, 1838, 3759, 653, 1355, 5060, 5056, 6632, 8143, 9929, 4338, 9930, 1935, 5626, 4099, 9944, 9952, 1327, 4322, 4342, 4945, 2]
// Exports: handleMessagesTapChannel

// Module 9928 (maybeStartLurking)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { isGuildVocalChannelType } from "_callSuper";
import { isGuildLurker } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { GuildOnboardingTab } from "_createForOfIteratorHelperLoose";
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_18 } from "GUILD_ONBOARDING_MODAL_KEY";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function maybeStartLurking() {
  return _maybeStartLurking(...arguments);
}
function _maybeStartLurking() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleMessagesTapChannel() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ ChannelTypes: closure_12, GuildFeatures: closure_13, Permissions: closure_14, Routes: closure_15 } = ME);
const result = require("isGuildOwner").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

export const handleMessagesTapChannel = function handleMessagesTapChannel(arg0) {
  return _handleMessagesTapChannel(...arguments);
};
