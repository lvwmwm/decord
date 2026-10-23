// Module ID: 15690
// Function ID: 15691
// Name: NativeRPCImplementation
// Dependencies: [4970, 1207, 1246, 15691, 15744, 15745, 15746, 15748, 15749, 15750, 15751, 15752, 15754, 15757, 15758, 9258, 11446, 2]

// Module 15690 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9258 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11446 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15691 */;
import commands_activitiesDefault from "commands/activities" /* 15744 */;
import audioSessionDefault from "audioSession" /* 15745 */;
import authDefault from "auth" /* 15746 */;
import screenCaptureDefault from "screenCapture" /* 15748 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15749 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15750 */;
import voiceSettingsDefault from "voiceSettings" /* 15751 */;
import unsupportedDefault from "unsupported" /* 15752 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15754 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15758 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15757 */;
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
const merged11 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
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
