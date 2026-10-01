// Module ID: 6806
// Function ID: 6807
// Name: useSelectedDismissibleContent
// Dependencies: [32, 6807, 6809, 2]
// Exports: useSelectedDismissibleContent, useSelectedSingleUseGuildDismissibleContent, useSelectedSnowflakeBoundDismissibleContent, useSelectedSnowflakeBoundGuildDismissibleContent, useSelectedTimeRecurringDismissibleContent, useSelectedTimeRecurringGuildDismissibleContent, useSelectedTimeRecurringSnowflakeBoundDismissibleContent, useSelectedVersionedDismissibleContent

// Module 6806 (useSelectedDismissibleContent)
import useGetDismissibleContent from "useGetDismissibleContent" /* 6807 */;
import useSelectedDismissibleContentShared from "useSelectedDismissibleContentShared" /* 6809 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = function useSelectedDismissibleContent(items, APP_LAUNCHER_ONBOARDING, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING);
  _slicedToArray(obj.useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
};
export const useSelectedSingleUseGuildDismissibleContent = function useSelectedSingleUseGuildDismissibleContent(items4, id, CHANNEL_NOTICES, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES);
  _slicedToArray(obj.useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
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
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName);
  _slicedToArray(obj.useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringDismissibleContent = function useSelectedTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName);
  _slicedToArray(obj.useGetTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
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
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName);
  _slicedToArray(obj.useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundGuildDismissibleContent = function useSelectedSnowflakeBoundGuildDismissibleContent(prop, id, newSnowflakeId, GUILD_HEADER_TOOLTIPS, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, id, GUILD_HEADER_TOOLTIPS);
  _slicedToArray(obj.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, id, GUILD_HEADER_TOOLTIPS), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
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
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName);
  _slicedToArray(obj.useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringGuildDismissibleContent = function useSelectedTimeRecurringGuildDismissibleContent(prop, id, cooldownDurationMs, GUILD_HEADER_TOOLTIPS) {
  let tmp2;
  let tmp3;
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, cooldownDurationMs, GUILD_HEADER_TOOLTIPS);
  _slicedToArray(obj.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, cooldownDurationMs, GUILD_HEADER_TOOLTIPS), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, false, id);
  const items = [tmp2, tmp3];
  return items;
};
