// Module ID: 16929
// Function ID: 16930
// Name: NativeRPCImplementation
// Dependencies: [5307, 5330, 1238, 1192, 1231, 5363, 16930, 16982, 16983, 16984, 16986, 16987, 16988, 16989, 16997, 16998, 17000, 17002, 17003, 17004, 17005, 7298, 12862, 2]

// Module 16929 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7298 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 12862 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 16930 */;
import commands_activitiesDefault from "commands/activities" /* 16982 */;
import audioSessionDefault from "audioSession" /* 16983 */;
import authDefault from "auth" /* 16984 */;
import screenCaptureDefault from "screenCapture" /* 16986 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16987 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16988 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16989 */;
import voiceSettingsDefault from "voiceSettings" /* 16997 */;
import unsupportedDefault from "unsupported" /* 16998 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 17000 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 17003 */;
import screenCaptureEvents from "screenCaptureEvents" /* 17004 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 17005 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5330 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StreamerModeStore from "StreamerModeStore" /* 5363 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 17002 */;
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
