// Module ID: 15656
// Function ID: 15657
// Name: NativeRPCImplementation
// Dependencies: [4970, 1207, 1246, 15657, 15710, 15711, 15712, 15714, 15715, 15716, 15717, 15719, 15722, 15723, 9228, 11415, 2]

// Module 15656 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9228 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11415 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15657 */;
import commands_activitiesDefault from "commands/activities" /* 15710 */;
import audioSessionDefault from "audioSession" /* 15711 */;
import authDefault from "auth" /* 15712 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15714 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15715 */;
import voiceSettingsDefault from "voiceSettings" /* 15716 */;
import unsupportedDefault from "unsupported" /* 15717 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15719 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15723 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15722 */;
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
