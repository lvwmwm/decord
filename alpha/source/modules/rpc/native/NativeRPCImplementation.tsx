// Module ID: 15683
// Function ID: 15684
// Name: NativeRPCImplementation
// Dependencies: [4914, 4937, 1237, 1191, 1230, 4970, 15684, 15737, 15738, 15739, 15741, 15742, 15743, 15744, 15756, 15757, 15758, 15760, 15762, 15763, 15764, 15765, 6904, 10795, 2]

// Module 15683 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6904 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10795 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15684 */;
import commands_activitiesDefault from "commands/activities" /* 15737 */;
import audioSessionDefault from "audioSession" /* 15738 */;
import authDefault from "auth" /* 15739 */;
import screenCaptureDefault from "screenCapture" /* 15741 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15742 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15743 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15744 */;
import voiceSettingsDefault from "voiceSettings" /* 15756 */;
import userPopoutDefault from "userPopout" /* 15757 */;
import unsupportedDefault from "unsupported" /* 15758 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15760 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15763 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15764 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15765 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4937 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 4970 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15762 */;
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
