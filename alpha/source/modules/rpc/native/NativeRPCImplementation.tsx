// Module ID: 15827
// Function ID: 15828
// Name: NativeRPCImplementation
// Dependencies: [5013, 5036, 1237, 1191, 1230, 5069, 15828, 15886, 15887, 15888, 15890, 15891, 15892, 15894, 15895, 15907, 15908, 15909, 15911, 15913, 15914, 15915, 15916, 7608, 10170, 2]

// Module 15827 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7608 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10170 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15828 */;
import commands_activitiesDefault from "commands/activities" /* 15886 */;
import audioSessionDefault from "audioSession" /* 15887 */;
import authDefault from "auth" /* 15888 */;
import screenCaptureDefault from "screenCapture" /* 15890 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15891 */;
import toastDefault from "toast" /* 15892 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15894 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15895 */;
import voiceSettingsDefault from "voiceSettings" /* 15907 */;
import userPopoutDefault from "userPopout" /* 15908 */;
import unsupportedDefault from "unsupported" /* 15909 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15911 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15914 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15915 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15916 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5036 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 5069 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15913 */;
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
