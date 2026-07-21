// Module ID: 8303
// Function ID: 65738
// Name: set
// Dependencies: []

// Module 8303 (set)
let obj = { PUBLIC: new Set(["bot", "managed_platform.application_identities.write", "webhook.incoming", "activities.invites.write", "activities.read", "activities.write", "application_identities.write", "dm_channels.messages.read", "dm_channels.messages.write", "dm_channels.read", "gateway.connect", "guilds", "guilds.channels.read", "identify", "lobbies.write", "relationships.read", "relationships.write", "account.global_name.update", "openid", "sdk.social_layer", "sdk.social_layer", "sdk.social_layer_presence", "activities.invites.write", "activities.read", "activities.write", "application_identities.write", "gateway.connect"]) };
const set = new Set(["bot", "managed_platform.application_identities.write", "webhook.incoming", "activities.invites.write", "activities.read", "activities.write", "application_identities.write", "dm_channels.messages.read", "dm_channels.messages.write", "dm_channels.read", "gateway.connect", "guilds", "guilds.channels.read", "identify", "lobbies.write", "relationships.read", "relationships.write", "account.global_name.update", "openid", "sdk.social_layer", "sdk.social_layer", "sdk.social_layer_presence", "activities.invites.write", "activities.read", "activities.write", "application_identities.write", "gateway.connect"]);
obj.PRIVATE = new Set([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
const set1 = new Set([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
obj.TEAM_USER = new Set([]);
const set2 = new Set([]);
obj.EMBEDDED_APPS = new Set([]);
const set3 = new Set([]);
obj.CLIENT_CREDENTIALS = new Set([]);
const set4 = new Set([]);
obj.CONFIDENTIAL_REQUEST_SCOPES = new Set(["%Object%"]);
const set5 = new Set(["%Object%"]);
obj.BYPASS = new Set(["Array", "EXPERIMENT_USER_EXPOSURE_SUPPRESSED"]);
const set6 = new Set(["Array", "EXPERIMENT_USER_EXPOSURE_SUPPRESSED"]);
obj.BASE_INTEGRATION = new Set(["Array"]);
const set7 = new Set(["Array"]);
obj.GUILD_INTEGRATION = new Set(["Array", "EXPERIMENT_USER_EXPOSURE_SUPPRESSED", null]);
const set8 = new Set(["Array", "EXPERIMENT_USER_EXPOSURE_SUPPRESSED", null]);
obj.USER_INTEGRATION = new Set([null, null]);
const set9 = new Set([null, null]);
obj.GUILD_INTEGRATION_EXCLUSIVE = new Set([]);
const set10 = new Set([]);
obj.ALL_INTEGRATION_SCOPES = new Set(["<string:122093569>", "<string:88145921>", "<string:542179330>", "<string:569000626>"]);
const set11 = new Set(["<string:122093569>", "<string:88145921>", "<string:542179330>", "<string:569000626>"]);
obj.PRIVATE_CHANNEL_INTEGRATION = new Set(["Array"]);
const set12 = new Set(["Array"]);
obj.SLAYER_UMBRELLA_DEFAULT_SCOPES_MASK = new Set([]);
const set13 = new Set([]);
obj.SLAYER_INTEGRATION_PROVISIONAL_ACCOUNT = new Set([]);
const set14 = new Set([]);
obj.UMBRELLA = new Set([]);
obj = {};
const set15 = new Set([]);
obj.sdk.social_layer_presence = new Set([]);
const set16 = new Set([]);
obj.sdk.social_layer = new Set(["ACK_INCOMING_MESSAGE", "Buffer", "SOLID", "getHeaders", "Array", "LFRm9Y", "r", "useGrouping", "screenshareFinishedCount", "CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID", "mobileAccountLinkingDisabled", "Array", "mixedContentMode", "r", "clearState"]);
obj.UMBRELLA_PERMISSIBLE_SCOPES = obj;
const set17 = new Set(["ACK_INCOMING_MESSAGE", "Buffer", "SOLID", "getHeaders", "Array", "LFRm9Y", "r", "useGrouping", "screenshareFinishedCount", "CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID", "mobileAccountLinkingDisabled", "Array", "mixedContentMode", "r", "clearState"]);
obj.SDK_SOCIAL_LAYER_UMBRELLA_SCOPES = new Set([]);
const set18 = new Set([]);
obj.SDK_SOCIAL_LAYER_UMBRELLA_DEFAULT_SCOPES = new Set([]);
const set19 = new Set([]);
obj.CONNECTED_ACCOUNT_SDK_SCOPES = new Set([]);
const set20 = new Set([]);
obj.APPLICATION_IDENTITIES_SCOPES = new Set(["discordtag", "everyone"]);
const set21 = new Set(["discordtag", "everyone"]);
obj.ALL = new Set(["Array", "isArray", "w", "source", "Array", "isArray", "sa", "sa", "Array", "isArray", "constructor", "isArray", "isArray", "isArray", "isArray", "apply", "isArray", "isArray", "isArray", "count", "apply", "isArray", "isArray", "isArray", "isArray", "isArray", "isArray", "isArray", "Array", "isArray", "isArray", "isArray", "r", "isArray", "isArray", "isArray", "a", "isArray", "isArray", "isArray", "y", "isArray", "isArray", "isArray", "call", "isArray", "isArray", "isArray"]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx");

export const OAuth2Scopes = { IDENTIFY: "identify", IDENTIFY_PREMIUM: "identify.premium", EMAIL: "email", CONNECTIONS: "connections", GUILDS: "guilds", GUILDS_JOIN: "guilds.join", GUILDS_MEMBERS_READ: "guilds.members.read", GUILDS_CHANNELS_READ: "guilds.channels.read", GDM_JOIN: "gdm.join", BOT: "bot", RPC: "rpc", RPC_NOTIFICATIONS_READ: "rpc.notifications.read", RPC_VOICE_READ: "rpc.voice.read", RPC_VOICE_WRITE: "rpc.voice.write", RPC_VIDEO_READ: "rpc.video.read", RPC_VIDEO_WRITE: "rpc.video.write", RPC_SCREENSHARE_READ: "rpc.screenshare.read", RPC_SCREENSHARE_WRITE: "rpc.screenshare.write", RPC_ACTIVITIES_WRITE: "rpc.activities.write", WEBHOOK_INCOMING: "webhook.incoming", MESSAGES_READ: "messages.read", APPLICATIONS_BUILDS_UPLOAD: "applications.builds.upload", APPLICATIONS_BUILDS_READ: "applications.builds.read", APPLICATIONS_COMMANDS: "applications.commands", APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE: "applications.commands.permissions.update", APPLICATIONS_COMMANDS_UPDATE: "applications.commands.update", APPLICATIONS_STORE_UPDATE: "applications.store.update", APPLICATIONS_ENTITLEMENTS: "applications.entitlements", ACTIVITIES_READ: "activities.read", ACTIVITIES_WRITE: "activities.write", ACTIVITIES_INVITES_WRITE: "activities.invites.write", RELATIONSHIPS_READ: "relationships.read", RELATIONSHIPS_WRITE: "relationships.write", VOICE: "voice", DM_CHANNELS_READ: "dm_channels.read", ROLE_CONNECTIONS_WRITE: "role_connections.write", PRESENCES_READ: "presences.read", PRESENCES_WRITE: "presences.write", OPENID: "openid", DM_CHANNELS_MESSAGES_READ: "dm_channels.messages.read", DM_CHANNELS_MESSAGES_WRITE: "dm_channels.messages.write", GATEWAY_CONNECT: "gateway.connect", ACCOUNT_GLOBAL_NAME_UPDATE: "account.global_name.update", PAYMENT_SOURCES_COUNTRY_CODE: "payment_sources.country_code", SDK_SOCIAL_LAYER_PRESENCE: "sdk.social_layer_presence", SDK_SOCIAL_LAYER: "sdk.social_layer", LOBBIES_WRITE: "lobbies.write", APPLICATION_IDENTITIES_WRITE: "application_identities.write", MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE: "managed_platform.application_identities.write" };
export const OAuth2ScopesSets = obj;
