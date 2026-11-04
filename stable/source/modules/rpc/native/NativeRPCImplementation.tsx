// Module ID: 15750
// Function ID: 15751
// Name: NativeRPCImplementation
// Dependencies: [5004, 1207, 1246, 15751, 15805, 15806, 15807, 15809, 15810, 15811, 15812, 15813, 15815, 15818, 15819, 15820, 9291, 11501, 2]

// Module 15750 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9291 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11501 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15751 */;
import commands_activitiesDefault from "commands/activities" /* 15805 */;
import audioSessionDefault from "audioSession" /* 15806 */;
import authDefault from "auth" /* 15807 */;
import screenCaptureDefault from "screenCapture" /* 15809 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15810 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15811 */;
import voiceSettingsDefault from "voiceSettings" /* 15812 */;
import unsupportedDefault from "unsupported" /* 15813 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15815 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15819 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15820 */;
import AccessibilityStore from "AccessibilityStore" /* 5004 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15818 */;
import size from "module_2" /* 2 */;

let items;
let items1;
const obj = {};
const merged = Object.assign(crossPlatformRPCCommands.crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged11 = Object.assign(screenCaptureEvents.screenCaptureEvents);
const merged12 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
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
