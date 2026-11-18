// Module ID: 15612
// Function ID: 15613
// Name: NativeRPCImplementation
// Dependencies: [4824, 4847, 1238, 1192, 1231, 4880, 15613, 15665, 15666, 15667, 15669, 15670, 15671, 15672, 15684, 15685, 15687, 15689, 15690, 15691, 15692, 6813, 10755, 2]

// Module 15612 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6813 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10755 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15613 */;
import commands_activitiesDefault from "commands/activities" /* 15665 */;
import audioSessionDefault from "audioSession" /* 15666 */;
import authDefault from "auth" /* 15667 */;
import screenCaptureDefault from "screenCapture" /* 15669 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15670 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15671 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15672 */;
import voiceSettingsDefault from "voiceSettings" /* 15684 */;
import unsupportedDefault from "unsupported" /* 15685 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15687 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15690 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15691 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15692 */;
import AccessibilityStore from "AccessibilityStore" /* 4824 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4847 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StreamerModeStore from "StreamerModeStore" /* 4880 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15689 */;
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
