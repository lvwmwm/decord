// Module ID: 15082
// Function ID: 15083
// Name: NativeRPCImplementation
// Dependencies: [5085, 1205, 1244, 15083, 15136, 15137, 15139, 15140, 15142, 15145, 15146, 15148, 11006, 2]

// Module 15082 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11006 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15083 */;
import commands_activitiesDefault from "commands/activities" /* 15136 */;
import authDefault from "auth" /* 15137 */;
import voiceSettingsDefault from "voiceSettings" /* 15139 */;
import unsupportedDefault from "unsupported" /* 15140 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15142 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15146 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 15148 */;
import AccessibilityStore from "AccessibilityStore" /* 5085 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15145 */;
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
