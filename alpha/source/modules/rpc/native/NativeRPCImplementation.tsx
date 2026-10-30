// Module ID: 16260
// Function ID: 16261
// Name: NativeRPCImplementation
// Dependencies: [5010, 5033, 1239, 1193, 1232, 16261, 16312, 16313, 16314, 16316, 16317, 16318, 16319, 16320, 16322, 16324, 16325, 16326, 16327, 9308, 11766, 2]

// Module 16260 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9308 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11766 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16261 */;
import commands_activitiesDefault from "commands/activities" /* 16312 */;
import audioSessionDefault from "audioSession" /* 16313 */;
import authDefault from "auth" /* 16314 */;
import screenCaptureDefault from "screenCapture" /* 16316 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16317 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16318 */;
import voiceSettingsDefault from "voiceSettings" /* 16319 */;
import unsupportedDefault from "unsupported" /* 16320 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16322 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16325 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16326 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16327 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1239 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16324 */;
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
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
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
items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore, ClientThemesBackgroundStore, CustomThemeMobileStore];
items1 = [WebViewPostMessageTransportDefault];
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj3;
