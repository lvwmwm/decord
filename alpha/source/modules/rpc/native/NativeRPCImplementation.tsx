// Module ID: 16302
// Function ID: 16303
// Name: NativeRPCImplementation
// Dependencies: [5015, 5038, 1238, 1192, 1231, 16303, 16354, 16355, 16356, 16358, 16359, 16360, 16361, 16362, 16364, 16366, 16367, 16368, 16369, 9328, 11803, 2]

// Module 16302 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9328 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11803 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16303 */;
import commands_activitiesDefault from "commands/activities" /* 16354 */;
import audioSessionDefault from "audioSession" /* 16355 */;
import authDefault from "auth" /* 16356 */;
import screenCaptureDefault from "screenCapture" /* 16358 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16359 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16360 */;
import voiceSettingsDefault from "voiceSettings" /* 16361 */;
import unsupportedDefault from "unsupported" /* 16362 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16364 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16367 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16368 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16369 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5038 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16366 */;
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
