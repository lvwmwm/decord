// Module ID: 14723
// Function ID: 14724
// Name: NativeRPCImplementation
// Dependencies: [5081, 1205, 1244, 14724, 14777, 14778, 14780, 14781, 14783, 14786, 14787, 14789, 10932, 2]

// Module 14723 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10932 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14724 */;
import commands_activitiesDefault from "commands/activities" /* 14777 */;
import authDefault from "auth" /* 14778 */;
import voiceSettingsDefault from "voiceSettings" /* 14780 */;
import unsupportedDefault from "unsupported" /* 14781 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14783 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14787 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14789 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14786 */;
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
