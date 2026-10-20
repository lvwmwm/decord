// Module ID: 15522
// Function ID: 15523
// Name: NativeRPCImplementation
// Dependencies: [4946, 1207, 1246, 15523, 15575, 15576, 15577, 15579, 15580, 15582, 15585, 15586, 9180, 11343, 2]

// Module 15522 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9180 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11343 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15523 */;
import commands_activitiesDefault from "commands/activities" /* 15575 */;
import audioSessionDefault from "audioSession" /* 15576 */;
import authDefault from "auth" /* 15577 */;
import voiceSettingsDefault from "voiceSettings" /* 15579 */;
import unsupportedDefault from "unsupported" /* 15580 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15582 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15586 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15585 */;
import size from "module_2" /* 2 */;

let items;
let items1;
const obj = {};
const merged = Object.assign(crossPlatformRPCCommands.crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged7 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged8 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
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
