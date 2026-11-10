// Module ID: 16648
// Function ID: 16649
// Name: NativeRPCImplementation
// Dependencies: [5143, 5166, 1238, 1192, 1231, 16649, 16701, 16702, 16703, 16705, 16706, 16707, 16708, 16716, 16717, 16719, 16721, 16722, 16723, 16724, 9415, 11976, 2]

// Module 16648 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9415 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11976 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16649 */;
import commands_activitiesDefault from "commands/activities" /* 16701 */;
import audioSessionDefault from "audioSession" /* 16702 */;
import authDefault from "auth" /* 16703 */;
import screenCaptureDefault from "screenCapture" /* 16705 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16706 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16707 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16708 */;
import voiceSettingsDefault from "voiceSettings" /* 16716 */;
import unsupportedDefault from "unsupported" /* 16717 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16719 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16722 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16723 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16724 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5166 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16721 */;
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
