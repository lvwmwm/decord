// Module ID: 9968
// Function ID: 76988
// Name: maybeStartLurking
// Dependencies: [5, 1352, 1391, 1348, 1917, 1910, 1838, 3758, 653, 1355, 5059, 5055, 5736, 8341, 9969, 4337, 9970, 1934, 5628, 4098, 9983, 9991, 1327, 4321, 4341, 4944, 2]
// Exports: handleMessagesTapChannel

// Module 9968 (maybeStartLurking)
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
