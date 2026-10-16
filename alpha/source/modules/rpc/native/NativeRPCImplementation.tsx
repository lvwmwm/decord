// Module ID: 15423
// Function ID: 15424
// Name: NativeRPCImplementation
// Dependencies: [5144, 1207, 1246, 15424, 15478, 15479, 15481, 15482, 15484, 15487, 15488, 15490, 11243, 2]

// Module 15423 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11243 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15424 */;
import commands_activitiesDefault from "commands/activities" /* 15478 */;
import authDefault from "auth" /* 15479 */;
import voiceSettingsDefault from "voiceSettings" /* 15481 */;
import unsupportedDefault from "unsupported" /* 15482 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15484 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15488 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 15490 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15487 */;
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
