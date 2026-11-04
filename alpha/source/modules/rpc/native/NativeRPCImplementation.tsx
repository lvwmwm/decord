// Module ID: 16553
// Function ID: 16554
// Name: NativeRPCImplementation
// Dependencies: [5142, 5165, 1238, 1192, 1231, 16554, 16605, 16606, 16607, 16609, 16610, 16611, 16612, 16620, 16621, 16623, 16625, 16626, 16627, 16628, 9474, 12001, 2]

// Module 16553 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9474 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 12001 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16554 */;
import commands_activitiesDefault from "commands/activities" /* 16605 */;
import audioSessionDefault from "audioSession" /* 16606 */;
import authDefault from "auth" /* 16607 */;
import screenCaptureDefault from "screenCapture" /* 16609 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16610 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16611 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16612 */;
import voiceSettingsDefault from "voiceSettings" /* 16620 */;
import unsupportedDefault from "unsupported" /* 16621 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16623 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16626 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16627 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16628 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5165 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16625 */;
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
