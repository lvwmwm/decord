// Module ID: 15685
// Function ID: 15686
// Name: NativeRPCImplementation
// Dependencies: [4914, 4937, 1237, 1191, 1230, 4970, 15686, 15739, 15740, 15741, 15743, 15744, 15745, 15746, 15758, 15759, 15760, 15762, 15764, 15765, 15766, 15767, 6904, 10795, 2]

// Module 15685 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6904 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10795 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15686 */;
import commands_activitiesDefault from "commands/activities" /* 15739 */;
import audioSessionDefault from "audioSession" /* 15740 */;
import authDefault from "auth" /* 15741 */;
import screenCaptureDefault from "screenCapture" /* 15743 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15744 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15745 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15746 */;
import voiceSettingsDefault from "voiceSettings" /* 15758 */;
import userPopoutDefault from "userPopout" /* 15759 */;
import unsupportedDefault from "unsupported" /* 15760 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15762 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15765 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15766 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15767 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4937 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 4970 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15764 */;
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
