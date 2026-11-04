// Module ID: 16541
// Function ID: 16542
// Name: NativeRPCImplementation
// Dependencies: [5142, 5165, 1238, 1192, 1231, 16542, 16593, 16594, 16595, 16597, 16598, 16599, 16600, 16608, 16609, 16611, 16613, 16614, 16615, 16616, 9474, 12000, 2]

// Module 16541 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9474 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 12000 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16542 */;
import commands_activitiesDefault from "commands/activities" /* 16593 */;
import audioSessionDefault from "audioSession" /* 16594 */;
import authDefault from "auth" /* 16595 */;
import screenCaptureDefault from "screenCapture" /* 16597 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16598 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16599 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16600 */;
import voiceSettingsDefault from "voiceSettings" /* 16608 */;
import unsupportedDefault from "unsupported" /* 16609 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16611 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16614 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16615 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16616 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5165 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16613 */;
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
const pictureInPictureInteractive = Object.assign(pictureInPictureInteractiveDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged11 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged12 = Object.assign(screenCaptureEvents.screenCaptureEvents);
const merged13 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
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
