// Module ID: 16818
// Function ID: 16819
// Name: DiscordVariantTypes
// Dependencies: [587, 2]

// Module 16818 (DiscordVariantTypes)
import nativeDefault from "native" /* 587 */;
import size from "module_2" /* 2 */;

const obj = { production: { scheme: "discord-prod", label: "Discord", color: nativeDefault.unsafe_rawColors.BRAND_500 }, ci: { scheme: "discord-ci", label: "Discord (CI)", color: nativeDefault.unsafe_rawColors.GREEN_360 }, main: { scheme: "discord-main", label: "Discord Main", color: nativeDefault.unsafe_rawColors.BLUE_345 }, beta: { scheme: "discord-beta", label: "Discord Beta", color: nativeDefault.unsafe_rawColors.ORANGE_345 }, dev: { scheme: "discord-dev", label: "Discord Dev", color: nativeDefault.unsafe_rawColors.PRIMARY_400 } };
({ scheme: "discord-prod", label: "Discord", color: nativeDefault.unsafe_rawColors.BRAND_500 });
({ scheme: "discord-ci", label: "Discord (CI)", color: nativeDefault.unsafe_rawColors.GREEN_360 });
({ scheme: "discord-main", label: "Discord Main", color: nativeDefault.unsafe_rawColors.BLUE_345 });
({ scheme: "discord-beta", label: "Discord Beta", color: nativeDefault.unsafe_rawColors.ORANGE_345 });
({ scheme: "discord-dev", label: "Discord Dev", color: nativeDefault.unsafe_rawColors.PRIMARY_400 });
const keys = Object.keys(obj);
const result = size.fileFinishedImporting("modules/links/native/DiscordVariantTypes.tsx");

export const DISCORD_VARIANTS = obj;
export const DISCORD_VARIANT_LIST = keys;
