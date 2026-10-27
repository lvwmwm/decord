// Module ID: 15752
// Function ID: 15753
// Name: NativeRPCImplementation
// Dependencies: [4973, 1204, 1243, 15753, 15809, 15810, 15811, 15813, 15814, 15815, 15816, 15817, 15819, 15822, 15823, 15824, 9259, 11473, 2]

// Module 15752 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9259 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11473 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15753 */;
import commands_activitiesDefault from "commands/activities" /* 15809 */;
import audioSessionDefault from "audioSession" /* 15810 */;
import authDefault from "auth" /* 15811 */;
import screenCaptureDefault from "screenCapture" /* 15813 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15814 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15815 */;
import voiceSettingsDefault from "voiceSettings" /* 15816 */;
import unsupportedDefault from "unsupported" /* 15817 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15819 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15823 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15824 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15822 */;
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
