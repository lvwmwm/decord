// Module ID: 16566
// Function ID: 16567
// Name: NativeRPCImplementation
// Dependencies: [5144, 5167, 1238, 1192, 1231, 16567, 16618, 16619, 16620, 16622, 16623, 16624, 16625, 16633, 16634, 16636, 16638, 16639, 16640, 16641, 9481, 12010, 2]

// Module 16566 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9481 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 12010 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16567 */;
import commands_activitiesDefault from "commands/activities" /* 16618 */;
import audioSessionDefault from "audioSession" /* 16619 */;
import authDefault from "auth" /* 16620 */;
import screenCaptureDefault from "screenCapture" /* 16622 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16623 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16624 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16625 */;
import voiceSettingsDefault from "voiceSettings" /* 16633 */;
import unsupportedDefault from "unsupported" /* 16634 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16636 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16639 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16640 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16641 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5167 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16638 */;
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
