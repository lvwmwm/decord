// Module ID: 14323
// Function ID: 14324
// Name: NativeRPCImplementation
// Dependencies: [4885, 1193, 1231, 14324, 14374, 14375, 14377, 14378, 14380, 14383, 14384, 14386, 9055, 2]

// Module 14323 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9055 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14324 */;
import commands_activitiesDefault from "commands/activities" /* 14374 */;
import authDefault from "auth" /* 14375 */;
import voiceSettingsDefault from "voiceSettings" /* 14377 */;
import unsupportedDefault from "unsupported" /* 14378 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14380 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14384 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14386 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14383 */;
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
