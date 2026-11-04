// Module ID: 16306
// Function ID: 16307
// Name: NativeRPCImplementation
// Dependencies: [5015, 5038, 1238, 1192, 1231, 16307, 16358, 16359, 16360, 16362, 16363, 16364, 16365, 16373, 16374, 16376, 16378, 16379, 16380, 16381, 9328, 11804, 2]

// Module 16306 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9328 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11804 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16307 */;
import commands_activitiesDefault from "commands/activities" /* 16358 */;
import audioSessionDefault from "audioSession" /* 16359 */;
import authDefault from "auth" /* 16360 */;
import screenCaptureDefault from "screenCapture" /* 16362 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16363 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16364 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16365 */;
import voiceSettingsDefault from "voiceSettings" /* 16373 */;
import unsupportedDefault from "unsupported" /* 16374 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16376 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16379 */;
import screenCaptureEvents from "screenCaptureEvents" /* 16380 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 16381 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5038 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 16378 */;
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
