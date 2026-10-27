// Module ID: 15716
// Function ID: 15717
// Name: NativeRPCImplementation
// Dependencies: [4972, 1207, 1246, 15717, 15771, 15772, 15773, 15775, 15776, 15777, 15778, 15779, 15781, 15784, 15785, 15786, 9259, 11470, 2]

// Module 15716 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9259 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11470 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15717 */;
import commands_activitiesDefault from "commands/activities" /* 15771 */;
import audioSessionDefault from "audioSession" /* 15772 */;
import authDefault from "auth" /* 15773 */;
import screenCaptureDefault from "screenCapture" /* 15775 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15776 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15777 */;
import voiceSettingsDefault from "voiceSettings" /* 15778 */;
import unsupportedDefault from "unsupported" /* 15779 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15781 */;
import screenCaptureEvents from "screenCaptureEvents" /* 15785 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15786 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15784 */;
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
