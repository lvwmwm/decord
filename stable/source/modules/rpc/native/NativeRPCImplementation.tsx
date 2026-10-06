// Module ID: 14028
// Function ID: 14029
// Name: NativeRPCImplementation
// Dependencies: [4826, 1194, 1232, 14029, 14077, 14078, 14080, 14081, 14083, 14086, 14087, 14089, 8761, 2]

// Module 14028 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 8761 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14029 */;
import commands_activitiesDefault from "commands/activities" /* 14077 */;
import authDefault from "auth" /* 14078 */;
import voiceSettingsDefault from "voiceSettings" /* 14080 */;
import unsupportedDefault from "unsupported" /* 14081 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14083 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14087 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14089 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14086 */;
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
