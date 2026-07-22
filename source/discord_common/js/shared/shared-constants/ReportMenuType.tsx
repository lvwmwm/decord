// Module ID: 7597
// Function ID: 60853
// Name: set
// Dependencies: []

// Module 7597 (set)
const obj = { IN_APP: new Set(["discord_protos.discord_experimentation.v1.ClientLocation.Place", "discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", "discord_protos.discord_experimentation.v1.ClientLocation.Location", "discord_protos.discord_experimentation.v1.UserLocation", "discord_protos.discord_experimentation.v1.ClientIP", "discord_protos.discord_experimentation.v1.UserIP", "discord_protos.discord_experimentation.v1.ClientOperatingSystem", "discord_protos.discord_experimentation.v1.SDKVersion", "discord_protos.discord_experimentation.v1.SDKVersionRange", "discord_protos.discord_experimentation.v1.SDKVersionRangeBound", "discord_protos.discord_experimentation.v1.SDKVersionSpecifier"]) };
const set = new Set(["discord_protos.discord_experimentation.v1.ClientLocation.Place", "discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", "discord_protos.discord_experimentation.v1.ClientLocation.Location", "discord_protos.discord_experimentation.v1.UserLocation", "discord_protos.discord_experimentation.v1.ClientIP", "discord_protos.discord_experimentation.v1.UserIP", "discord_protos.discord_experimentation.v1.ClientOperatingSystem", "discord_protos.discord_experimentation.v1.SDKVersion", "discord_protos.discord_experimentation.v1.SDKVersionRange", "discord_protos.discord_experimentation.v1.SDKVersionRangeBound", "discord_protos.discord_experimentation.v1.SDKVersionSpecifier"]);
obj.REPORT_TO_MOD = new Set([false]);
const set1 = new Set([false]);
obj.UNAUTHENTICATED = new Set([false, false, false, false]);
const set2 = new Set([false, false, false, false]);
obj.CONSOLE = new Set([]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/ReportMenuType.tsx");

export const ReportMenuType = { message: "message", first_dm: "first_dm", guild: "guild", guild_directory_entry: "guild_directory_entry", guild_discovery: "guild_discovery", user: "user", stage_channel: "stage_channel", guild_scheduled_event: "guild_scheduled_event", application: "application", widget: "widget", user_urf: "user_urf", message_urf: "message_urf", guild_urf: "guild_urf", media_takedown: "media_takedown", xbox_console_voice: "xbox_console_voice", playstation_console_voice: "playstation_console_voice", report_to_mod_message: "report_to_mod_message" };
export const ReportMenuTypeSets = obj;
