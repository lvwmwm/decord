// Module ID: 6685
// Function ID: 6686
// Name: GuildOfficialMessageUtils
// Dependencies: [2067, 4469, 4829, 1074, 1092, 672, 4683, 4685, 6686, 504, 6687, 6688, 2]
// Exports: canManageGuildOfficialMessages, canSendGuildOfficialMessages, getAccessibleGuildOfficialTextColor, isGuildOfficialMessagesEnabled, showGuildOfficialMessageGradient, showGuildOfficialMessageTextColor, useCanToggleGuildOfficialMessages, useIsGuildOfficialMessagesEnabled

// Module 6685 (GuildOfficialMessageUtils)
import _modDef672 from "module_672" /* 672 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import shared from "shared" /* 4685 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import GuildOfficialMessagesExperimentDefault from "GuildOfficialMessagesExperiment" /* 6686 */;
import ThreadHooks from "ThreadHooks" /* 6687 */;
import isSystemMessageDefault from "isSystemMessage" /* 6688 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function useCanManageGuildOfficialMessages(arg0, arg1, location) {
  let closure_0;
  const tmp = arg0;
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    guild = null;
    if (null != closure_0) {
      guild = guild.getGuild(tmp);
    }
    return guild;
  }, items1);
  const useExperiment = GuildOfficialMessagesExperimentDefault.useExperiment;
  GuildOfficialMessagesExperimentDefault;
  let hasItem = null != stateFromStores;
  const obj2 = { guildId: tmp, location };
  const enabled = useExperiment(obj2).enabled;
  const tmp2 = _require;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants2.VERIFIED);
  }
  if (hasItem) {
    hasItem = enabled;
  }
  const items2 = [PermissionStore];
  const items3 = [arg1];
  const tmp2Result = tmp2(504);
  if (hasItem) {
    hasItem = tmp2Result.useStateFromStores(items2, () => PermissionStore.can(constants.MANAGE_OFFICIAL_MESSAGES, closure_0), items3);
  }
  return hasItem;
}
let closure_5 = MessageConstants.GUILD_OFFICIAL_HIGHLIGHT_ALPHA;
({ ChannelTypes: metroRequire, GuildFeatures: metroImportDefault, MessageFlags: metroImportAll, Permissions: c9 } = Constants);
const result = size.fileFinishedImporting("modules/messages/GuildOfficialMessageUtils.tsx");

export const getAccessibleGuildOfficialTextColor = function getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, saturation, arg3) {
  let num = saturation;
  if (saturation === undefined) {
    num = 1;
  }
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = closure_5;
  }
  const obj = utils_ColorUtils;
  const int2hexResult = obj.int2hex(officialMessageColor);
  let tmp5 = _modDef672(semanticColor);
  const tmp6 = _modDef672(int2hexResult);
  const obj2 = _modDef672;
  const mixResult = obj2.mix(tmp5, int2hexResult, tmp, "rgb");
  const obj3 = _modDef672;
  const contrastResult = obj3.contrast(tmp6, mixResult);
  const obj4 = _modDef672;
  if (contrastResult < obj4.contrast(tmp6, tmp5)) {
    tmp5 = mixResult;
  }
  const tmp2Result = ColorUtils;
  const obj5 = { foreground: tmp6, background: tmp5, ratio: shared.WCAGContrastRatios.Text, saturationFactor: num };
  return tmp2Result.getAccessibleForegroundColor(obj5);
};
export function showGuildOfficialMessageGradient(officialMessageStyle) {
  return "no_gradient" !== officialMessageStyle && "hidden" !== officialMessageStyle;
}
export function showGuildOfficialMessageTextColor(officialMessageStyle) {
  return "no_text_color" !== officialMessageStyle && "hidden" !== officialMessageStyle;
}
export const isGuildOfficialMessagesEnabled = function isGuildOfficialMessagesEnabled(guild, GuildSettingsModalLanding) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(metroImportDefault.VERIFIED);
  }
  if (enabled) {
    const obj2 = { guildId: guild.id, location: GuildSettingsModalLanding };
    const obj = GuildOfficialMessagesExperimentDefault;
    enabled = obj.getCurrentConfig(obj2).enabled;
  }
  return enabled;
};
export const useIsGuildOfficialMessagesEnabled = function useIsGuildOfficialMessagesEnabled(id, useGuildActionRows) {
  _require = id;
  const items = [GuildStore];
  const items1 = [id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    guild = null;
    if (null != closure_0) {
      guild = guild.getGuild(tmp);
    }
    return guild;
  }, items1);
  const useExperiment = GuildOfficialMessagesExperimentDefault.useExperiment;
  GuildOfficialMessagesExperimentDefault;
  let hasItem = null != stateFromStores;
  const obj2 = { guildId: id, location: useGuildActionRows };
  const enabled = useExperiment(obj2).enabled;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants2.VERIFIED);
  }
  if (hasItem) {
    hasItem = enabled;
  }
  return hasItem;
};
export const canManageGuildOfficialMessages = function canManageGuildOfficialMessages(features, arg1, location) {
  let enabled = null != features;
  if (enabled) {
    features = features.features;
    enabled = features.has(metroImportDefault.VERIFIED);
  }
  if (enabled) {
    const obj2 = { guildId: features.id, location };
    const obj = GuildOfficialMessagesExperimentDefault;
    enabled = obj.getCurrentConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, arg1);
  }
  return enabled;
};
export { useCanManageGuildOfficialMessages };
export const useCanToggleGuildOfficialMessages = function useCanToggleGuildOfficialMessages(message, channel, LongPressMessageActionSheet) {
  const guild_id = channel.guild_id;
  const tmpResult = useCanManageGuildOfficialMessages(guild_id, channel, LongPressMessageActionSheet);
  let tmp3 = !tmpResult;
  if (tmpResult) {
    tmp3 = isSystemMessageDefault(message);
  }
  let tmp6 = !tmp3;
  if (tmp6) {
    let isActiveChannelOrUnarchivableThread;
    if (message.hasFlag(metroImportAll.IS_GUILD_OFFICIAL)) {
      const obj2 = ThreadHooks;
      isActiveChannelOrUnarchivableThread = obj2.getIsActiveChannelOrUnarchivableThread(channel);
    } else {
      isActiveChannelOrUnarchivableThread = null != channel && !channel.isPrivate();
      if (isActiveChannelOrUnarchivableThread) {
        const obj = ThreadHooks;
        isActiveChannelOrUnarchivableThread = obj.getIsActiveChannelOrUnarchivableThread(channel);
      }
      if (isActiveChannelOrUnarchivableThread) {
        isActiveChannelOrUnarchivableThread = channel.type !== metroRequire.GUILD_VOICE;
      }
      if (isActiveChannelOrUnarchivableThread) {
        isActiveChannelOrUnarchivableThread = channel.type !== metroRequire.GUILD_STAGE_VOICE;
      }
    }
    tmp6 = isActiveChannelOrUnarchivableThread;
  }
  return tmp6;
};
export const canSendGuildOfficialMessages = function canSendGuildOfficialMessages(guild, channel, _sendMessage) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(metroImportDefault.VERIFIED);
  }
  if (enabled) {
    const obj2 = { guildId: guild.id, location: _sendMessage };
    const obj = GuildOfficialMessagesExperimentDefault;
    enabled = obj.getCurrentConfig(obj2).enabled;
  }
  if (enabled) {
    enabled = PermissionStore.can(constants4.MANAGE_OFFICIAL_MESSAGES, channel);
  }
  if (enabled) {
    let isActiveChannelOrUnarchivableThread = null != channel && !channel.isPrivate();
    if (isActiveChannelOrUnarchivableThread) {
      const obj3 = ThreadHooks;
      isActiveChannelOrUnarchivableThread = obj3.getIsActiveChannelOrUnarchivableThread(channel);
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== metroRequire.GUILD_VOICE;
    }
    if (isActiveChannelOrUnarchivableThread) {
      isActiveChannelOrUnarchivableThread = channel.type !== metroRequire.GUILD_STAGE_VOICE;
    }
    enabled = isActiveChannelOrUnarchivableThread;
  }
  return enabled;
};
