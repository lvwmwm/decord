// Module ID: 15562
// Function ID: 15563
// Name: NativeRPCImplementation
// Dependencies: [4795, 4818, 1237, 1191, 1230, 4851, 15563, 15616, 15617, 15618, 15620, 15621, 15622, 15623, 15635, 15636, 15637, 15639, 15641, 15642, 15643, 15644, 6785, 10675, 2]

// Module 15562 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6785 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10675 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15563 */;
import commands_activitiesDefault from "commands/activities" /* 15616 */;
import audioSessionDefault from "audioSession" /* 15617 */;
import authDefault from "auth" /* 15618 */;
import screenCaptureDefault from "screenCapture" /* 15620 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15621 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15622 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15623 */;
import voiceSettingsDefault from "voiceSettings" /* 15635 */;
import userPopoutDefault from "userPopout" /* 15636 */;
import unsupportedDefault from "unsupported" /* 15637 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15639 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15642 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15643 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15644 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4818 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 4851 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15641 */;
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
