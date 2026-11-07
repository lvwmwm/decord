// Module ID: 16611
// Function ID: 16612
// Name: NativeRPCImplementation
// Dependencies: [5141, 5164, 1238, 1192, 1231, 16612, 16663, 16664, 16665, 16667, 16668, 16669, 16670, 16678, 16679, 16681, 16683, 16684, 16685, 16686, 9409, 11967, 2]

// Module 16611 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9409 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11967 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16612 */;
import commands_activitiesDefault from "commands/activities" /* 16663 */;
import audioSessionDefault from "audioSession" /* 16664 */;
import authDefault from "auth" /* 16665 */;
import screenCaptureDefault from "screenCapture" /* 16667 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16668 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16669 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16670 */;
import voiceSettingsDefault from "voiceSettings" /* 16678 */;
import unsupportedDefault from "unsupported" /* 16679 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16681 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16684 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16685 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16686 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5164 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16683 */;
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
