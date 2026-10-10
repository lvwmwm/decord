// Module ID: 14700
// Function ID: 14701
// Name: NativeRPCImplementation
// Dependencies: [5081, 1205, 1244, 14701, 14753, 14754, 14756, 14757, 14759, 14762, 14763, 14765, 10932, 2]

// Module 14700 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10932 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14701 */;
import commands_activitiesDefault from "commands/activities" /* 14753 */;
import authDefault from "auth" /* 14754 */;
import voiceSettingsDefault from "voiceSettings" /* 14756 */;
import unsupportedDefault from "unsupported" /* 14757 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14759 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14763 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14765 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14762 */;
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
