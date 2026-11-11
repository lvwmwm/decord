// Module ID: 16809
// Function ID: 16810
// Name: NativeRPCImplementation
// Dependencies: [5244, 5267, 1238, 1192, 1231, 16810, 16862, 16863, 16864, 16866, 16867, 16868, 16869, 16877, 16878, 16880, 16882, 16883, 16884, 16885, 7234, 12770, 2]

// Module 16809 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7234 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 12770 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16810 */;
import commands_activitiesDefault from "commands/activities" /* 16862 */;
import audioSessionDefault from "audioSession" /* 16863 */;
import authDefault from "auth" /* 16864 */;
import screenCaptureDefault from "screenCapture" /* 16866 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16867 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16868 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16869 */;
import voiceSettingsDefault from "voiceSettings" /* 16877 */;
import unsupportedDefault from "unsupported" /* 16878 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16880 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16883 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16884 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16885 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5267 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16882 */;
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
