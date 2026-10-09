// Module ID: 14646
// Function ID: 14647
// Name: NativeRPCImplementation
// Dependencies: [5080, 1205, 1244, 14647, 14699, 14700, 14702, 14703, 14705, 14708, 14709, 14711, 10892, 2]

// Module 14646 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10892 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14647 */;
import commands_activitiesDefault from "commands/activities" /* 14699 */;
import authDefault from "auth" /* 14700 */;
import voiceSettingsDefault from "voiceSettings" /* 14702 */;
import unsupportedDefault from "unsupported" /* 14703 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14705 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14709 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14711 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14708 */;
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
