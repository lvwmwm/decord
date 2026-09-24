// Module ID: 14786
// Function ID: 14787
// Name: NativeRPCImplementation
// Dependencies: [4782, 1186, 1224, 14787, 14835, 14836, 14838, 14839, 14841, 14844, 14845, 14847, 9605, 2]

// Module 14786 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9605 */;
import commands_activitiesDefault from "commands/activities" /* 14835 */;
import authDefault from "auth" /* 14836 */;
import voiceSettingsDefault from "voiceSettings" /* 14838 */;
import unsupportedDefault from "unsupported" /* 14839 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14841 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14847 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import ThemeStore from "ThemeStore" /* 1186 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;

const merged = Object.assign(fn(14787).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14844);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14845).voiceSettingsEventHandlers);
const obj4 = { server: NativeRPCServerDefault, commands: {}, events: {}, stores: null, transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
obj4.stores = items;
const items1 = [WebViewPostMessageTransportDefault];
obj4.transports = items1;
obj4.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj4;
