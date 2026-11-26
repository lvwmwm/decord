// Module ID: 15878
// Function ID: 15879
// Name: NativeRPCImplementation
// Dependencies: [5044, 5067, 1238, 1191, 1231, 5100, 15879, 15937, 15938, 15939, 15941, 15942, 15943, 15945, 15946, 15958, 15959, 15960, 15962, 15964, 15965, 15966, 15967, 7639, 10212, 2]

// Module 15878 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7639 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10212 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15879 */;
import commands_activitiesDefault from "commands/activities" /* 15937 */;
import audioSessionDefault from "audioSession" /* 15938 */;
import authDefault from "auth" /* 15939 */;
import screenCaptureDefault from "screenCapture" /* 15941 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15942 */;
import toastDefault from "toast" /* 15943 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15945 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15946 */;
import voiceSettingsDefault from "voiceSettings" /* 15958 */;
import userPopoutDefault from "userPopout" /* 15959 */;
import unsupportedDefault from "unsupported" /* 15960 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15962 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15965 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15966 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15967 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5067 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StreamerModeStore from "StreamerModeStore" /* 5100 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15964 */;
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
const toast = Object.assign(toastDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const pictureInPictureInteractive = Object.assign(pictureInPictureInteractiveDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const userPopout = Object.assign(userPopoutDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged13 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged14 = Object.assign(screenCaptureEvents.screenCaptureEvents);
const merged15 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
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
