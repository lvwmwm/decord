// Module ID: 15697
// Function ID: 15698
// Name: NativeRPCImplementation
// Dependencies: [4914, 4937, 1237, 1191, 1230, 4970, 15698, 15751, 15752, 15753, 15755, 15756, 15757, 15758, 15770, 15771, 15772, 15774, 15776, 15777, 15778, 15779, 6904, 10800, 2]

// Module 15697 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6904 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10800 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15698 */;
import commands_activitiesDefault from "commands/activities" /* 15751 */;
import audioSessionDefault from "audioSession" /* 15752 */;
import authDefault from "auth" /* 15753 */;
import screenCaptureDefault from "screenCapture" /* 15755 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15756 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15757 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15758 */;
import voiceSettingsDefault from "voiceSettings" /* 15770 */;
import userPopoutDefault from "userPopout" /* 15771 */;
import unsupportedDefault from "unsupported" /* 15772 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15774 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15777 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15778 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15779 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4937 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 4970 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15776 */;
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
const userPopout = Object.assign(userPopoutDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged12 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged13 = Object.assign(screenCaptureEvents.screenCaptureEvents);
const merged14 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
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
