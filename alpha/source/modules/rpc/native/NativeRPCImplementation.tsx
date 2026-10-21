// Module ID: 15612
// Function ID: 15613
// Name: NativeRPCImplementation
// Dependencies: [4967, 1207, 1246, 15613, 15668, 15669, 15670, 15672, 15673, 15674, 15675, 15677, 15680, 15681, 9219, 11398, 2]

// Module 15612 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9219 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11398 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15613 */;
import commands_activitiesDefault from "commands/activities" /* 15668 */;
import audioSessionDefault from "audioSession" /* 15669 */;
import authDefault from "auth" /* 15670 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15672 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15673 */;
import voiceSettingsDefault from "voiceSettings" /* 15674 */;
import unsupportedDefault from "unsupported" /* 15675 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15677 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15681 */;
import AccessibilityStore from "AccessibilityStore" /* 4967 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15680 */;
import size from "module_2" /* 2 */;

let items;
let items1;
const obj = {};
const merged = Object.assign(crossPlatformRPCCommands.crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged9 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged10 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
const obj3 = {
  server: NativeRPCServerDefault,
  commands: obj,
  events: obj2,
  stores: items,
  transports: items1,
  registerTransportsForEmbeddedPlatform() {

  }
};
items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
items1 = [WebViewPostMessageTransportDefault];
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj3;
