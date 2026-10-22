// Module ID: 15669
// Function ID: 15670
// Name: NativeRPCImplementation
// Dependencies: [4970, 1207, 1246, 15670, 15723, 15724, 15725, 15727, 15728, 15729, 15730, 15731, 15733, 15736, 15737, 9235, 11426, 2]

// Module 15669 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9235 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11426 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 15670 */;
import commands_activitiesDefault from "commands/activities" /* 15723 */;
import audioSessionDefault from "audioSession" /* 15724 */;
import authDefault from "auth" /* 15725 */;
import screenCaptureDefault from "screenCapture" /* 15727 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15728 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15729 */;
import voiceSettingsDefault from "voiceSettings" /* 15730 */;
import unsupportedDefault from "unsupported" /* 15731 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15733 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 15737 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 15736 */;
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
