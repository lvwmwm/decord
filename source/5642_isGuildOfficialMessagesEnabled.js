// Module ID: 5642
// Function ID: 48197
// Name: isGuildOfficialMessagesEnabled
// Dependencies: []
// Exports: canSendGuildOfficialMessages, getAccessibleGuildOfficialTextColor, showGuildOfficialMessageGradient, showGuildOfficialMessageTextColor, useCanToggleGuildOfficialMessages

// Module 5642 (isGuildOfficialMessagesEnabled)
function isGuildOfficialMessagesEnabled(guild, GuildSettingsModalLanding) {
  let enabled = null != guild;
  if (enabled) {
    const features = guild.features;
    enabled = features.has(constants2.VERIFIED);
  }
  if (enabled) {
    let obj = importDefault(dependencyMap[8]);
    obj = { guildId: guild.id, location: GuildSettingsModalLanding };
    enabled = obj.getCurrentConfig(obj).enabled;
  }
  return enabled;
}
function useIsGuildOfficialMessagesEnabled(id, useGuildActionRows) {
  useGuildActionRows = id;
  let tmp;
  let obj = useGuildActionRows(dependencyMap[9]);
  const items = [closure_3];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != arg0) {
      guild = guild.getGuild(arg0);
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
    canResult = closure_4.can(constants4.MANAGE_OFFICIAL_MESSAGES, channel);
  }
  return canResult;
}
function useCanManageGuildOfficialMessages(id, arg1, useGuildActionRows) {
  let stateFromStores = useIsGuildOfficialMessagesEnabled(id, useGuildActionRows);
  const items = [closure_4];
  const items1 = [arg1];
  if (stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => closure_4.can(constants.MANAGE_OFFICIAL_MESSAGES, arg1), items1);
  }
  return stateFromStores;
}
function isChannelOfficialMessageEligible(isPrivate) {
  let isActiveChannelOrUnarchivableThread = null != isPrivate && !isPrivate.isPrivate();
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = arg1(dependencyMap[10]).getIsActiveChannelOrUnarchivableThread(isPrivate);
    const obj = arg1(dependencyMap[10]);
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isPrivate.type !== constants.GUILD_VOICE;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isPrivate.type !== constants.GUILD_STAGE_VOICE;
  }
  return isActiveChannelOrUnarchivableThread;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).GUILD_OFFICIAL_HIGHLIGHT_ALPHA;
({ ChannelTypes: closure_6, GuildFeatures: closure_7, MessageFlags: closure_8, Permissions: closure_9 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/messages/GuildOfficialMessageUtils.tsx");

export const getAccessibleGuildOfficialTextColor = function getAccessibleGuildOfficialTextColor(officialMessageColor, merged, arg2, arg3) {
  let num = arg2;
  let tmp = arg3;
  if (arg2 === undefined) {
    num = 1;
  }
  if (tmp === undefined) {
    tmp = closure_5;
  }
  let obj = merged(dependencyMap[4]);
  const int2hexResult = obj.int2hex(officialMessageColor);
  let tmp3 = importDefault(dependencyMap[5])(merged);
  const tmp4 = importDefault(dependencyMap[5])(int2hexResult);
  const mixResult = importDefault(dependencyMap[5]).mix(tmp3, int2hexResult, tmp, "rgb");
  const obj2 = importDefault(dependencyMap[5]);
  const obj3 = importDefault(dependencyMap[5]);
  const contrastResult = importDefault(dependencyMap[5]).contrast(tmp4, mixResult);
  if (contrastResult < obj4.contrast(tmp4, tmp3)) {
    tmp3 = mixResult;
  }
  const obj4 = importDefault(dependencyMap[5]);
  obj = { foreground: tmp4, background: tmp3, ratio: merged(dependencyMap[7]).WCAGContrastRatios.Text, saturationFactor: num };
  return merged(dependencyMap[6]).getAccessibleForegroundColor(obj);
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
    tmp3 = importDefault(dependencyMap[11])(hasFlag);
  }
  if (!!tmp3) {
    return tmp6;
  } else if (hasFlag.hasFlag(constants3.IS_GUILD_OFFICIAL)) {
    let isActiveChannelOrUnarchivableThread = guild_id(dependencyMap[10]).getIsActiveChannelOrUnarchivableThread(guild_id);
    const obj = guild_id(dependencyMap[10]);
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
