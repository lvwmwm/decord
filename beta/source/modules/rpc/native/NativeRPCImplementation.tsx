// Module ID: 14776
// Function ID: 14777
// Name: NativeRPCImplementation
// Dependencies: [4780, 1182, 1220, 14777, 14825, 14826, 14828, 14829, 14831, 14834, 14835, 14837, 9609, 2]

// Module 14776 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9609 */;
import commands_activitiesDefault from "commands/activities" /* 14825 */;
import authDefault from "auth" /* 14826 */;
import voiceSettingsDefault from "voiceSettings" /* 14828 */;
import unsupportedDefault from "unsupported" /* 14829 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14831 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14837 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;

const merged = Object.assign(fn(14777).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14834);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14835).voiceSettingsEventHandlers);
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
