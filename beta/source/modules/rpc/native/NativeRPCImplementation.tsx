// Module ID: 14728
// Function ID: 14729
// Name: NativeRPCImplementation
// Dependencies: [5081, 1205, 1244, 14729, 14782, 14783, 14785, 14786, 14788, 14791, 14792, 14794, 10933, 2]

// Module 14728 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10933 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14729 */;
import commands_activitiesDefault from "commands/activities" /* 14782 */;
import authDefault from "auth" /* 14783 */;
import voiceSettingsDefault from "voiceSettings" /* 14785 */;
import unsupportedDefault from "unsupported" /* 14786 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14788 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14792 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14794 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14791 */;
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
