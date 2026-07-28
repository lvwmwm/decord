// Module ID: 8417
// Function ID: 67125
// Name: useSelectedDismissibleContent
// Dependencies: [57, 8418, 8420, 2]
// Exports: useSelectedDismissibleContent, useSelectedSingleUseGuildDismissibleContent, useSelectedSnowflakeBoundDismissibleContent, useSelectedSnowflakeBoundGuildDismissibleContent, useSelectedTimeRecurringDismissibleContent, useSelectedTimeRecurringGuildDismissibleContent, useSelectedTimeRecurringSnowflakeBoundDismissibleContent, useSelectedVersionedDismissibleContent

// Module 8417 (useSelectedDismissibleContent)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("useSelectedDismissibleContentShared").fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = function useSelectedDismissibleContent(items, APP_LAUNCHER_ONBOARDING, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(8418) /* useGetVisibleContent */;
  [tmp2, tmp3] = callback(require(8418) /* useGetVisibleContent */.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const tmp = callback(require(8418) /* useGetVisibleContent */.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const selectedDismissibleContentShared = require(8420) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
};
export const useSelectedSingleUseGuildDismissibleContent = function useSelectedSingleUseGuildDismissibleContent(items2, guildId, CHANNEL_NOTICES, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = require(8418) /* useGetVisibleContent */;
  [tmp2, tmp3] = callback(require(8418) /* useGetVisibleContent */.useGetSingleUseGuildDismissibleContent_UNSAFE(items2, guildId, CHANNEL_NOTICES), 2);
  const tmp = callback(require(8418) /* useGetVisibleContent */.useGetSingleUseGuildDismissibleContent_UNSAFE(items2, guildId, CHANNEL_NOTICES), 2);
  const selectedDismissibleContentShared = require(8420) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag, guildId);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedVersionedDismissibleContent = function useSelectedVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(8418) /* useGetVisibleContent */;
  [tmp2, tmp3] = callback(require(8418) /* useGetVisibleContent */.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const tmp = callback(require(8418) /* useGetVisibleContent */.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const selectedDismissibleContentShared = require(8420) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringDismissibleContent = function useSelectedTimeRecurringDismissibleContent(prop, closure_11, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(8418) /* useGetVisibleContent */;
  [tmp2, tmp3] = callback(require(8418) /* useGetVisibleContent */.useGetTimeRecurringDismissibleContent(prop, closure_11, groupName), 2);
  const tmp = callback(require(8418) /* useGetVisibleContent */.useGetTimeRecurringDismissibleContent(prop, closure_11, groupName), 2);
  const selectedDismissibleContentShared = require(8420) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundDismissibleContent = function useSelectedSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(8418) /* useGetVisibleContent */;
  [tmp2, tmp3] = callback(require(8418) /* useGetVisibleContent */.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const tmp = callback(require(8418) /* useGetVisibleContent */.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = require(8420) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundGuildDismissibleContent = function useSelectedSnowflakeBoundGuildDismissibleContent(prop, id, newSnowflakeId, GUILD_HEADER_TOOLTIPS, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = require(8418) /* useGetVisibleContent */;
  [tmp2, tmp3] = callback(require(8418) /* useGetVisibleContent */.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, id, GUILD_HEADER_TOOLTIPS), 2);
  const tmp = callback(require(8418) /* useGetVisibleContent */.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, id, GUILD_HEADER_TOOLTIPS), 2);
  const selectedDismissibleContentShared = require(8420) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringSnowflakeBoundDismissibleContent = function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = require(8418) /* useGetVisibleContent */;
  [tmp2, tmp3] = callback(require(8418) /* useGetVisibleContent */.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const tmp = callback(require(8418) /* useGetVisibleContent */.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = require(8420) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringGuildDismissibleContent = function useSelectedTimeRecurringGuildDismissibleContent(prop, id, closure_16, GUILD_HEADER_TOOLTIPS) {
  let tmp2;
  let tmp3;
  const obj = require(8418) /* useGetVisibleContent */;
  [tmp2, tmp3] = callback(require(8418) /* useGetVisibleContent */.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_16, GUILD_HEADER_TOOLTIPS), 2);
  const tmp = callback(require(8418) /* useGetVisibleContent */.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_16, GUILD_HEADER_TOOLTIPS), 2);
  const selectedDismissibleContentShared = require(8420) /* useSelectedDismissibleContentShared */.useSelectedDismissibleContentShared(tmp2, tmp3, false, id);
  const items = [tmp2, tmp3];
  return items;
};
