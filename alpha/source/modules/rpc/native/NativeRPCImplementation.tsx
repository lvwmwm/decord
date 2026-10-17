// Module ID: 15490
// Function ID: 15491
// Name: NativeRPCImplementation
// Dependencies: [5181, 1207, 1246, 15491, 15543, 15544, 15546, 15547, 15549, 15552, 15553, 9164, 11308, 2]

// Module 15490 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9164 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11308 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15491 */;
import commands_activitiesDefault from "commands/activities" /* 15543 */;
import authDefault from "auth" /* 15544 */;
import voiceSettingsDefault from "voiceSettings" /* 15546 */;
import unsupportedDefault from "unsupported" /* 15547 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15549 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15553 */;
import AccessibilityStore from "AccessibilityStore" /* 5181 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15552 */;
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
