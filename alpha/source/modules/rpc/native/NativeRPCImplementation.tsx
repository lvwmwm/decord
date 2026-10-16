// Module ID: 15413
// Function ID: 15414
// Name: NativeRPCImplementation
// Dependencies: [5143, 1207, 1246, 15414, 15468, 15469, 15471, 15472, 15474, 15477, 15478, 15480, 11246, 2]

// Module 15413 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11246 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15414 */;
import commands_activitiesDefault from "commands/activities" /* 15468 */;
import authDefault from "auth" /* 15469 */;
import voiceSettingsDefault from "voiceSettings" /* 15471 */;
import unsupportedDefault from "unsupported" /* 15472 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15474 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15478 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 15480 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15477 */;
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
