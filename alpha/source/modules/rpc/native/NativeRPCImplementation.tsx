// Module ID: 15711
// Function ID: 15712
// Name: NativeRPCImplementation
// Dependencies: [4972, 1207, 1246, 15712, 15766, 15767, 15768, 15770, 15771, 15772, 15773, 15774, 15776, 15779, 15780, 15781, 9259, 11466, 2]

// Module 15711 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9259 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11466 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15712 */;
import commands_activitiesDefault from "commands/activities" /* 15766 */;
import audioSessionDefault from "audioSession" /* 15767 */;
import authDefault from "auth" /* 15768 */;
import screenCaptureDefault from "screenCapture" /* 15770 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15771 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15772 */;
import voiceSettingsDefault from "voiceSettings" /* 15773 */;
import unsupportedDefault from "unsupported" /* 15774 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15776 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15780 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15781 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15779 */;
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
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged11 = Object.assign(screenCaptureEvents.screenCaptureEvents);
const merged12 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
const obj3 = {
  server: NativeRPCServerDefault,
  commands: obj,
  events: obj2,
  stores: items,
  transports: items1,
  registerTransportsForEmbeddedPlatform() {

  }
};
items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
items1 = [WebViewPostMessageTransportDefault];
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj3;
