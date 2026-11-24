// Module ID: 15706
// Function ID: 15707
// Name: NativeRPCImplementation
// Dependencies: [4918, 4941, 1237, 1191, 1230, 4974, 15707, 15765, 15766, 15767, 15769, 15770, 15771, 15773, 15774, 15786, 15787, 15788, 15790, 15792, 15793, 15794, 15795, 7513, 10071, 2]

// Module 15706 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7513 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10071 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15707 */;
import commands_activitiesDefault from "commands/activities" /* 15765 */;
import audioSessionDefault from "audioSession" /* 15766 */;
import authDefault from "auth" /* 15767 */;
import screenCaptureDefault from "screenCapture" /* 15769 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15770 */;
import toastDefault from "toast" /* 15771 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15773 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15774 */;
import voiceSettingsDefault from "voiceSettings" /* 15786 */;
import userPopoutDefault from "userPopout" /* 15787 */;
import unsupportedDefault from "unsupported" /* 15788 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15790 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15793 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15794 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15795 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4941 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 4974 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15792 */;
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
