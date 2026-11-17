// Module ID: 16962
// Function ID: 16963
// Name: NativeRPCImplementation
// Dependencies: [5311, 5334, 1238, 1192, 1231, 5367, 16963, 17015, 17016, 17017, 17019, 17020, 17021, 17022, 17030, 17031, 17033, 17035, 17036, 17037, 17038, 7308, 11473, 2]

// Module 16962 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7308 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11473 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16963 */;
import commands_activitiesDefault from "commands/activities" /* 17015 */;
import audioSessionDefault from "audioSession" /* 17016 */;
import authDefault from "auth" /* 17017 */;
import screenCaptureDefault from "screenCapture" /* 17019 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 17020 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 17021 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 17022 */;
import voiceSettingsDefault from "voiceSettings" /* 17030 */;
import unsupportedDefault from "unsupported" /* 17031 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 17033 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 17036 */;
import screenCaptureEvents from "screenCaptureEvents" /* 17037 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 17038 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5334 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StreamerModeStore from "StreamerModeStore" /* 5367 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 17035 */;
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
items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore, ClientThemesBackgroundStore, CustomThemeMobileStore, StreamerModeStore];
items1 = [WebViewPostMessageTransportDefault];
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj3;
