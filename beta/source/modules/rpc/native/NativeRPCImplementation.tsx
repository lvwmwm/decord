// Module ID: 16653
// Function ID: 16654
// Name: NativeRPCImplementation
// Dependencies: [5171, 5194, 1238, 1192, 1231, 16654, 16706, 16707, 16708, 16710, 16711, 16712, 16713, 16721, 16722, 16724, 16726, 16727, 16728, 16729, 9442, 11999, 2]

// Module 16653 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9442 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11999 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16654 */;
import commands_activitiesDefault from "commands/activities" /* 16706 */;
import audioSessionDefault from "audioSession" /* 16707 */;
import authDefault from "auth" /* 16708 */;
import screenCaptureDefault from "screenCapture" /* 16710 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16711 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16712 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16713 */;
import voiceSettingsDefault from "voiceSettings" /* 16721 */;
import unsupportedDefault from "unsupported" /* 16722 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16724 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16727 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16728 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16729 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5194 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16726 */;
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
