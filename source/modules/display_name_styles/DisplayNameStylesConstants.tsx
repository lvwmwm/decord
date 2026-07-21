// Module ID: 1861
// Function ID: 20526
// Name: items3
// Dependencies: []
// Exports: getColorPresetsForEffect

// Module 1861 (items3)
const items = [require(dependencyMap[0]).DisplayNameEffect.SOLID, require(dependencyMap[0]).DisplayNameEffect.GRADIENT, require(dependencyMap[0]).DisplayNameEffect.NEON, require(dependencyMap[0]).DisplayNameEffect.TOON, require(dependencyMap[0]).DisplayNameEffect.POP];
const items1 = [require(dependencyMap[1]).DisplayNameFont.PLAYPEN_SANS, require(dependencyMap[1]).DisplayNameFont.ORBITRON, require(dependencyMap[1]).DisplayNameFont.NEW_ROCKER, require(dependencyMap[1]).DisplayNameFont.KALAM];
const items2 = [require(dependencyMap[0]).DisplayNameEffect.GUMMY, require(dependencyMap[0]).DisplayNameEffect.PRISM];
const items3 = ["_handleNotificationAuthorizationStatusUpdate", "FORUM_CHANNEL_LAYOUT_UPDATED", "", "VirtualizedListContextResetter", "", "getUserParticipantCount", "", "eager", 8086015, 2047411829, -937553408, -195422208];
const items4 = [[-1929445252, 1845428351], ["map", "isArray"], ["getIsolationScope", "INVITE_USER_EMBEDDED"], [], [], [], ["useMemo", "addDebugLog"], ["discord_protos.users.v1.User", "discord_protos.users.v1.MediumUser"]];
const mapped = items4.map((colors) => ({ colors, name: "" }));
const items5 = [[], ["<string:3779133441>", "<string:1090519576>", "discord_protos.users.v1.UserCollectibles", "<string:35280705>"], [], ["discord_protos.users.v1.CrossPlatformRestriction", "discord_protos.users.v1.BadgeCommon", "discord_protos.users.v1.AprilFools2026Badge", "discord_protos.users.v1.Badge"], [], [null, null, null, null]];
const items6 = [[], [], ["discord_protos.users.v1.PremiumSubscriptionGroupRole", "discord_protos.users.v1.StoreCountry", "discord_protos.users.v1.PerkConfig", "discord_protos.users.v1.PerkSource", "discord_protos.users.v1.PerkConfigIncreasedFileUploadSize"], ["<string:2067857409>", "<string:1090519389>", "discord_protos.users.v1.Perks", "<string:25249857>", "<string:127090944>"], [null, null, null, null, null], []];
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesConstants.tsx");

export const EFFECT_ORDER = items;
export const FLYWHEEL_FONTS = items1;
export const FLYWHEEL_EFFECTS = items2;
export const DISPLAY_NAME_STYLES_COLOR_PRESETS = items3;
export const DISPLAY_NAME_STYLES_GRADIENT_PRESETS = mapped;
export const DISPLAY_NAME_STYLES_GUMMY_PRESETS = items5;
export const DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION = 0.78;
export const DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS = 0.72;
export const MIN_PRISM_GRADIENT_WIDTH = 38;
export const DISPLAY_NAME_STYLES_PRISM_PRESETS = items6;
export const getColorPresetsForEffect = function getColorPresetsForEffect(arg0) {
  if (require(dependencyMap[0]).DisplayNameEffect.GUMMY === arg0) {
    return items5;
  } else if (require(dependencyMap[0]).DisplayNameEffect.PRISM === arg0) {
    return items6;
  } else {
    if (require(dependencyMap[0]).DisplayNameEffect.GRADIENT !== arg0) {
      if (require(dependencyMap[0]).DisplayNameEffect.GLOW !== arg0) {
        return items3.map((arg0) => {
          const items = [arg0];
          return items;
        });
      }
    }
    return mapped.map((colors) => colors.colors);
  }
};
