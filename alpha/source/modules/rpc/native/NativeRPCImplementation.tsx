// Module ID: 15540
// Function ID: 15541
// Name: NativeRPCImplementation
// Dependencies: [4946, 1207, 1246, 15541, 15593, 15594, 15595, 15597, 15598, 15599, 15601, 15604, 15605, 9192, 11354, 2]

// Module 15540 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9192 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11354 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15541 */;
import commands_activitiesDefault from "commands/activities" /* 15593 */;
import audioSessionDefault from "audioSession" /* 15594 */;
import authDefault from "auth" /* 15595 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15597 */;
import voiceSettingsDefault from "voiceSettings" /* 15598 */;
import unsupportedDefault from "unsupported" /* 15599 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15601 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15605 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15604 */;
import size from "module_2" /* 2 */;

let items;
let items1;
const obj = {};
const merged = Object.assign(crossPlatformRPCCommands.crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged8 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged9 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
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
