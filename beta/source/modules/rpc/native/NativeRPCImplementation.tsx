// Module ID: 14026
// Function ID: 14027
// Name: NativeRPCImplementation
// Dependencies: [4825, 1182, 1220, 14027, 14075, 14076, 14078, 14079, 14081, 14084, 14085, 14087, 8766, 2]

// Module 14026 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 8766 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14027 */;
import commands_activitiesDefault from "commands/activities" /* 14075 */;
import authDefault from "auth" /* 14076 */;
import voiceSettingsDefault from "voiceSettings" /* 14078 */;
import unsupportedDefault from "unsupported" /* 14079 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14081 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14085 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14087 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14084 */;
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
