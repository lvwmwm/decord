// Module ID: 16621
// Function ID: 16622
// Name: NativeRPCImplementation
// Dependencies: [5141, 5164, 1238, 1192, 1231, 16622, 16674, 16675, 16676, 16678, 16679, 16680, 16681, 16689, 16690, 16692, 16694, 16695, 16696, 16697, 9409, 11967, 2]

// Module 16621 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9409 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11967 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16622 */;
import commands_activitiesDefault from "commands/activities" /* 16674 */;
import audioSessionDefault from "audioSession" /* 16675 */;
import authDefault from "auth" /* 16676 */;
import screenCaptureDefault from "screenCapture" /* 16678 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16679 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16680 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16681 */;
import voiceSettingsDefault from "voiceSettings" /* 16689 */;
import unsupportedDefault from "unsupported" /* 16690 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16692 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16695 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16696 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16697 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5164 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16694 */;
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
