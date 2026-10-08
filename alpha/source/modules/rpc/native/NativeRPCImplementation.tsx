// Module ID: 14549
// Function ID: 14550
// Name: NativeRPCImplementation
// Dependencies: [5079, 1205, 1243, 14550, 14600, 14601, 14603, 14604, 14606, 14609, 14610, 14612, 11130, 2]

// Module 14549 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11130 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14550 */;
import commands_activitiesDefault from "commands/activities" /* 14600 */;
import authDefault from "auth" /* 14601 */;
import voiceSettingsDefault from "voiceSettings" /* 14603 */;
import unsupportedDefault from "unsupported" /* 14604 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14606 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14610 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14612 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14609 */;
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
