// Module ID: 16220
// Function ID: 16221
// Name: NativeRPCImplementation
// Dependencies: [5006, 1204, 1243, 16221, 16272, 16273, 16274, 16276, 16277, 16278, 16279, 16280, 16282, 16284, 16285, 16286, 9295, 11565, 2]

// Module 16220 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9295 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11565 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16221 */;
import commands_activitiesDefault from "commands/activities" /* 16272 */;
import audioSessionDefault from "audioSession" /* 16273 */;
import authDefault from "auth" /* 16274 */;
import screenCaptureDefault from "screenCapture" /* 16276 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16277 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16278 */;
import voiceSettingsDefault from "voiceSettings" /* 16279 */;
import unsupportedDefault from "unsupported" /* 16280 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16282 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16285 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16286 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16284 */;
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
