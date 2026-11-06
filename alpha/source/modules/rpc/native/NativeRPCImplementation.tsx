// Module ID: 16563
// Function ID: 16564
// Name: NativeRPCImplementation
// Dependencies: [5171, 5194, 1238, 1192, 1231, 16564, 16615, 16616, 16617, 16619, 16620, 16621, 16622, 16630, 16631, 16633, 16635, 16636, 16637, 16638, 9427, 11976, 2]

// Module 16563 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9427 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11976 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16564 */;
import commands_activitiesDefault from "commands/activities" /* 16615 */;
import audioSessionDefault from "audioSession" /* 16616 */;
import authDefault from "auth" /* 16617 */;
import screenCaptureDefault from "screenCapture" /* 16619 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16620 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16621 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16622 */;
import voiceSettingsDefault from "voiceSettings" /* 16630 */;
import unsupportedDefault from "unsupported" /* 16631 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16633 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16636 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16637 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16638 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5194 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16635 */;
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
