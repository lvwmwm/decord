// Module ID: 7569
// Function ID: 7570
// Name: useSelectedDismissibleContent
// Dependencies: [32, 7570, 7572, 2]
// Exports: useSelectedDismissibleContent, useSelectedSingleUseGuildDismissibleContent, useSelectedSnowflakeBoundDismissibleContent, useSelectedSnowflakeBoundGuildDismissibleContent, useSelectedTimeRecurringDismissibleContent, useSelectedTimeRecurringGuildDismissibleContent, useSelectedTimeRecurringSnowflakeBoundDismissibleContent, useSelectedVersionedDismissibleContent

// Module 7569 (useSelectedDismissibleContent)
import useGetDismissibleContent from "useGetDismissibleContent" /* 7570 */;
import useSelectedDismissibleContentShared from "useSelectedDismissibleContentShared" /* 7572 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export function useSelectedDismissibleContent(items, arg1) {
  let bypassAutoDismiss;
  let groupName;
  let tmp2;
  let tmp3;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ bypassAutoDismiss, groupName } = obj);
  if (bypassAutoDismiss === undefined) {
    bypassAutoDismiss = false;
  }
  const obj2 = useGetDismissibleContent;
  [tmp2, tmp3] = obj2.useGetDismissibleContent(items, groupName);
  _slicedToArray(obj2.useGetDismissibleContent(items, groupName), 2);
  const obj3 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj3.useSelectedDismissibleContentShared(tmp2, tmp3, bypassAutoDismiss);
  items = [tmp2, tmp3];
  return items;
}
export function useSelectedSingleUseGuildDismissibleContent(items4, id, CHANNEL_NOTICES, flag) {
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
}
export function useSelectedVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName, bypassAutoDismiss) {
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
}
export function useSelectedTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName, bypassAutoDismiss) {
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
}
export function useSelectedSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName, bypassAutoDismiss) {
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
}
export function useSelectedSnowflakeBoundGuildDismissibleContent(prop, id, newSnowflakeId, GUILD_HEADER_TOOLTIPS, flag) {
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
}
export function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss) {
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
}
export function useSelectedTimeRecurringGuildDismissibleContent(prop, id, cooldownDurationMs, GUILD_HEADER_TOOLTIPS) {
  let tmp2;
  let tmp3;
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, cooldownDurationMs, GUILD_HEADER_TOOLTIPS);
  _slicedToArray(obj.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, cooldownDurationMs, GUILD_HEADER_TOOLTIPS), 2);
  const obj2 = useSelectedDismissibleContentShared;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, false, id);
  const items = [tmp2, tmp3];
  return items;
}
