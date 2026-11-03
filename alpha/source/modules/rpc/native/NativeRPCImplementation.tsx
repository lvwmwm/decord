// Module ID: 16449
// Function ID: 16450
// Name: NativeRPCImplementation
// Dependencies: [5142, 5165, 1238, 1192, 1231, 16450, 16501, 16502, 16503, 16505, 16506, 16507, 16508, 16516, 16517, 16519, 16521, 16522, 16523, 16524, 9456, 11941, 2]

// Module 16449 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9456 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11941 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16450 */;
import commands_activitiesDefault from "commands/activities" /* 16501 */;
import audioSessionDefault from "audioSession" /* 16502 */;
import authDefault from "auth" /* 16503 */;
import screenCaptureDefault from "screenCapture" /* 16505 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16506 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16507 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16508 */;
import voiceSettingsDefault from "voiceSettings" /* 16516 */;
import unsupportedDefault from "unsupported" /* 16517 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16519 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16522 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16523 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16524 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5165 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16521 */;
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
