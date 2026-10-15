// Module ID: 15378
// Function ID: 15379
// Name: NativeRPCImplementation
// Dependencies: [5140, 1205, 1244, 15379, 15432, 15433, 15435, 15436, 15438, 15441, 15442, 15444, 11230, 2]

// Module 15378 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11230 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15379 */;
import commands_activitiesDefault from "commands/activities" /* 15432 */;
import authDefault from "auth" /* 15433 */;
import voiceSettingsDefault from "voiceSettings" /* 15435 */;
import unsupportedDefault from "unsupported" /* 15436 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15438 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15442 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 15444 */;
import AccessibilityStore from "AccessibilityStore" /* 5140 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15441 */;
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
