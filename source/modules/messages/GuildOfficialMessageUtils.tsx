// Module ID: 5648
// Function ID: 48282
// Name: isGuildOfficialMessagesEnabled
// Dependencies: [1838, 3758, 4123, 653, 665, 666, 3974, 3976, 5649, 566, 5650, 5651, 2]
// Exports: canSendGuildOfficialMessages, getAccessibleGuildOfficialTextColor, showGuildOfficialMessageGradient, showGuildOfficialMessageTextColor, useCanToggleGuildOfficialMessages

// Module 5648 (isGuildOfficialMessagesEnabled)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GUILD_OFFICIAL_HIGHLIGHT_ALPHA as closure_5 } from "MESSAGE_GROUP_SPACING";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function isGuildOfficialMessagesEnabled(guild, GuildSettingsModalLanding) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    let obj = importDefault(5649);
    obj = { guildId: guild.id, location: GuildSettingsModalLanding };
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  return enabled;
}
function useIsGuildOfficialMessagesEnabled(id, useGuildActionRows) {
  const _require = id;
  let tmp;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = outer1_3.getGuild(closure_0);
    }
    return guild;
  }, items1);
  obj = {};
  if (null != id) {
    tmp = id;
  }
  obj.guildId = tmp;
  obj.location = useGuildActionRows;
  let enabled = null != stateFromStores;
  if (enabled) {
    const features = stateFromStores.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    enabled = obj2.useExperiment(obj).enabled;
  }
  return enabled;
}
function canManageGuildOfficialMessages(guild, channel, _sendMessage) {
  let canResult = isGuildOfficialMessagesEnabled(guild, _sendMessage);
  if (canResult) {
    canResult = _isNativeReflectConstruct.can(constants4.MANAGE_OFFICIAL_MESSAGES, channel);
  }
  return canResult;
}
function useCanManageGuildOfficialMessages(id, arg1, useGuildActionRows) {
  const _require = arg1;
  let stateFromStores = useIsGuildOfficialMessagesEnabled(id, useGuildActionRows);
  const items = [_isNativeReflectConstruct];
  const items1 = [arg1];
  if (stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => outer1_4.can(outer1_9.MANAGE_OFFICIAL_MESSAGES, closure_0), items1);
  }
  return stateFromStores;
}
function isChannelOfficialMessageEligible(isPrivate) {
  let isActiveChannelOrUnarchivableThread = null != isPrivate && !isPrivate.isPrivate();
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = require(5650) /* useCanStartPublicThread */.getIsActiveChannelOrUnarchivableThread(isPrivate);
    const obj = require(5650) /* useCanStartPublicThread */;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isPrivate.type !== constants.GUILD_VOICE;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isPrivate.type !== constants.GUILD_STAGE_VOICE;
  }
  return isActiveChannelOrUnarchivableThread;
}
({ ChannelTypes: closure_6, GuildFeatures: closure_7, MessageFlags: closure_8, Permissions: closure_9 } = ME);
const result = require("MESSAGE_GROUP_SPACING").fileFinishedImporting("modules/messages/GuildOfficialMessageUtils.tsx");

export const getAccessibleGuildOfficialTextColor = function getAccessibleGuildOfficialTextColor(officialMessageColor, merged, arg2, arg3) {
  let num = arg2;
  let tmp = arg3;
  if (arg2 === undefined) {
    num = 1;
  }
  if (tmp === undefined) {
    tmp = closure_5;
  }
  let obj = require(665) /* pad2 */;
  const int2hexResult = obj.int2hex(officialMessageColor);
  let tmp3 = importDefault(666)(merged);
  const tmp4 = importDefault(666)(int2hexResult);
  const mixResult = importDefault(666).mix(tmp3, int2hexResult, tmp, "rgb");
  const obj2 = importDefault(666);
  const obj3 = importDefault(666);
  const contrastResult = importDefault(666).contrast(tmp4, mixResult);
  if (contrastResult < obj4.contrast(tmp4, tmp3)) {
    tmp3 = mixResult;
  }
  obj4 = importDefault(666);
  obj = { foreground: tmp4, background: tmp3, ratio: require(3976) /* AccessibilityAnnouncer */.WCAGContrastRatios.Text, saturationFactor: num };
  return require(3974) /* hexToRgb */.getAccessibleForegroundColor(obj);
};
export function showGuildOfficialMessageGradient(officialMessageStyle) {
  let tmp = "no_gradient" !== officialMessageStyle;
  if (tmp) {
    tmp = "hidden" !== officialMessageStyle;
  }
  return tmp;
}
export function showGuildOfficialMessageTextColor(officialMessageStyle) {
  let tmp = "no_text_color" !== officialMessageStyle;
  if (tmp) {
    tmp = "hidden" !== officialMessageStyle;
  }
  return tmp;
}
export { isGuildOfficialMessagesEnabled };
export { useIsGuildOfficialMessagesEnabled };
export { canManageGuildOfficialMessages };
export { useCanManageGuildOfficialMessages };
export const useCanToggleGuildOfficialMessages = function useCanToggleGuildOfficialMessages(hasFlag, guild_id, LongPressMessageActionSheet) {
  guild_id = guild_id.guild_id;
  let tmp2;
  if (null != guild_id) {
    tmp2 = guild_id;
  }
  let tmp3 = !useCanManageGuildOfficialMessages(tmp2, guild_id, LongPressMessageActionSheet);
  if (!tmp3) {
    tmp3 = importDefault(5651)(hasFlag);
  }
  if (!!tmp3) {
    return tmp6;
  } else if (hasFlag.hasFlag(constants3.IS_GUILD_OFFICIAL)) {
    let isActiveChannelOrUnarchivableThread = require(5650) /* useCanStartPublicThread */.getIsActiveChannelOrUnarchivableThread(guild_id);
    const obj = require(5650) /* useCanStartPublicThread */;
  } else {
    isActiveChannelOrUnarchivableThread = isChannelOfficialMessageEligible(guild_id);
  }
};
export const canSendGuildOfficialMessages = function canSendGuildOfficialMessages(guild, channel, _sendMessage) {
  let tmp = canManageGuildOfficialMessages(guild, channel, _sendMessage);
  if (tmp) {
    tmp = isChannelOfficialMessageEligible(channel);
  }
  return tmp;
};
