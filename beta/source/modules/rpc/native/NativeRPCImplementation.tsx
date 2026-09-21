// Module ID: 14748
// Function ID: 14749
// Name: NativeRPCImplementation
// Dependencies: [4750, 1186, 1224, 14749, 14797, 14798, 14800, 14801, 14803, 14806, 14807, 14809, 9573, 2]

// Module 14748 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9573 */;
import commands_activitiesDefault from "commands/activities" /* 14797 */;
import authDefault from "auth" /* 14798 */;
import voiceSettingsDefault from "voiceSettings" /* 14800 */;
import unsupportedDefault from "unsupported" /* 14801 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14803 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14809 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import ThemeStore from "ThemeStore" /* 1186 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;

const merged = Object.assign(fn(14749).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14806);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14807).voiceSettingsEventHandlers);
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
