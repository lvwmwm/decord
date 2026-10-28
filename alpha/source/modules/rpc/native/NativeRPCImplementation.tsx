// Module ID: 15978
// Function ID: 15979
// Name: NativeRPCImplementation
// Dependencies: [5005, 1204, 1243, 15979, 16035, 16036, 16037, 16039, 16040, 16041, 16042, 16043, 16045, 16048, 16049, 16050, 9291, 11511, 2]

// Module 15978 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9291 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11511 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15979 */;
import commands_activitiesDefault from "commands/activities" /* 16035 */;
import audioSessionDefault from "audioSession" /* 16036 */;
import authDefault from "auth" /* 16037 */;
import screenCaptureDefault from "screenCapture" /* 16039 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16040 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16041 */;
import voiceSettingsDefault from "voiceSettings" /* 16042 */;
import unsupportedDefault from "unsupported" /* 16043 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16045 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16049 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16050 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16048 */;
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
