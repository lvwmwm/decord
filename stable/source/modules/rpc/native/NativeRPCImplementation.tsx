// Module ID: 15494
// Function ID: 15495
// Name: NativeRPCImplementation
// Dependencies: [5181, 1207, 1246, 15495, 15547, 15548, 15550, 15551, 15553, 15556, 15557, 9164, 11326, 2]

// Module 15494 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9164 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11326 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15495 */;
import commands_activitiesDefault from "commands/activities" /* 15547 */;
import authDefault from "auth" /* 15548 */;
import voiceSettingsDefault from "voiceSettings" /* 15550 */;
import unsupportedDefault from "unsupported" /* 15551 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15553 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15557 */;
import AccessibilityStore from "AccessibilityStore" /* 5181 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15556 */;
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
