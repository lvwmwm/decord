// Module ID: 15044
// Function ID: 15045
// Name: NativeRPCImplementation
// Dependencies: [5081, 1205, 1244, 15045, 15098, 15099, 15101, 15102, 15104, 15107, 15108, 15110, 10932, 2]

// Module 15044 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10932 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15045 */;
import commands_activitiesDefault from "commands/activities" /* 15098 */;
import authDefault from "auth" /* 15099 */;
import voiceSettingsDefault from "voiceSettings" /* 15101 */;
import unsupportedDefault from "unsupported" /* 15102 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15104 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15108 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 15110 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15107 */;
import size from "module_2" /* 2 */;

let items;
let items1;
const obj = {};
const merged = Object.assign(crossPlatformRPCCommands.crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
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
