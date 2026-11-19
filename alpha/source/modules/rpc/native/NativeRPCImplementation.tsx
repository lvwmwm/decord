// Module ID: 15598
// Function ID: 15599
// Name: NativeRPCImplementation
// Dependencies: [4793, 4816, 1238, 1192, 1231, 4849, 15599, 15652, 15653, 15654, 15656, 15657, 15658, 15659, 15671, 15672, 15673, 15675, 15677, 15678, 15679, 15680, 6785, 10733, 2]

// Module 15598 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6785 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10733 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15599 */;
import commands_activitiesDefault from "commands/activities" /* 15652 */;
import audioSessionDefault from "audioSession" /* 15653 */;
import authDefault from "auth" /* 15654 */;
import screenCaptureDefault from "screenCapture" /* 15656 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15657 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15658 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15659 */;
import voiceSettingsDefault from "voiceSettings" /* 15671 */;
import userPopoutDefault from "userPopout" /* 15672 */;
import unsupportedDefault from "unsupported" /* 15673 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15675 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15678 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15679 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15680 */;
import AccessibilityStore from "AccessibilityStore" /* 4793 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4816 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StreamerModeStore from "StreamerModeStore" /* 4849 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15677 */;
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
