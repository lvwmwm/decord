// Module ID: 16650
// Function ID: 16651
// Name: NativeRPCImplementation
// Dependencies: [5171, 5194, 1238, 1192, 1231, 16651, 16703, 16704, 16705, 16707, 16708, 16709, 16710, 16718, 16719, 16721, 16723, 16724, 16725, 16726, 9442, 11999, 2]

// Module 16650 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9442 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11999 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16651 */;
import commands_activitiesDefault from "commands/activities" /* 16703 */;
import audioSessionDefault from "audioSession" /* 16704 */;
import authDefault from "auth" /* 16705 */;
import screenCaptureDefault from "screenCapture" /* 16707 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16708 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16709 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16710 */;
import voiceSettingsDefault from "voiceSettings" /* 16718 */;
import unsupportedDefault from "unsupported" /* 16719 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16721 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16724 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16725 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16726 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5194 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16723 */;
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
