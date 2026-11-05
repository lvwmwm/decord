// Module ID: 7711
// Function ID: 7712
// Name: useSelectedDismissibleContent
// Dependencies: [32, 7712, 7717, 7714, 2]
// Exports: useSelectedDismissibleContent, useSelectedScopedDismissibleContent, useSelectedSingleUseGuildDismissibleContent, useSelectedSnowflakeBoundDismissibleContent, useSelectedSnowflakeBoundGuildDismissibleContent, useSelectedTimeRecurringDismissibleContent, useSelectedTimeRecurringGuildDismissibleContent, useSelectedTimeRecurringSnowflakeBoundDismissibleContent, useSelectedVersionedDismissibleContent

// Module 7711 (useSelectedDismissibleContent)
import useGetDismissibleContent from "useGetDismissibleContent" /* 7712 */;
import DismissibleContentScope from "DismissibleContentScope" /* 7714 */;
import useSelectedDismissibleContentShared2 from "useSelectedDismissibleContentShared" /* 7717 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export function useSelectedScopedDismissibleContent(items1) {
  let bypassAutoDismiss;
  let groupName;
  let markAsDismissed;
  let visibleContent;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ bypassAutoDismiss, groupName } = obj);
  if (bypassAutoDismiss === undefined) {
    bypassAutoDismiss = false;
  }
  const obj2 = useGetDismissibleContent;
  const scopedDismissibleContentSelection = obj2.useScopedDismissibleContentSelection(items1, groupName);
  ({ visibleContent, markAsDismissed } = scopedDismissibleContentSelection);
  let candidate = null;
  if (null != visibleContent) {
    candidate = scopedDismissibleContentSelection.candidate;
  }
  let guildId;
  const useSelectedDismissibleContentShared = useSelectedDismissibleContentShared2.useSelectedDismissibleContentShared;
  useSelectedDismissibleContentShared2;
  if (null != candidate) {
    const tmpResult2 = DismissibleContentScope;
    guildId = tmpResult2.getDismissibleContentShowing(candidate).guildId;
  }
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared(visibleContent, markAsDismissed, bypassAutoDismiss, guildId);
  const items = [visibleContent, markAsDismissed];
  return items;
}
export function useSelectedDismissibleContent(items, arg1) {
  let bypassAutoDismiss;
  let groupName;
  let markAsDismissed;
  let visibleContent;
  let obj = arg1;
  const flatMapResult = items.flatMap((item) => {
    const obj = DismissibleContentScope;
    let result = obj.scopeDismissibleContentEntry(item);
    if (result == null) {
      result = [];
    }
    return result;
  });
  if (arg1 === undefined) {
    obj = {};
  }
  ({ bypassAutoDismiss, groupName } = obj);
  if (bypassAutoDismiss === undefined) {
    bypassAutoDismiss = false;
  }
  const obj2 = useGetDismissibleContent;
  const scopedDismissibleContentSelection = obj2.useScopedDismissibleContentSelection(flatMapResult, groupName);
  ({ visibleContent, markAsDismissed } = scopedDismissibleContentSelection);
  let candidate = null;
  if (null != visibleContent) {
    candidate = scopedDismissibleContentSelection.candidate;
  }
  let guildId;
  const useSelectedDismissibleContentShared = useSelectedDismissibleContentShared2.useSelectedDismissibleContentShared;
  useSelectedDismissibleContentShared2;
  if (null != candidate) {
    const tmp2Result2 = DismissibleContentScope;
    guildId = tmp2Result2.getDismissibleContentShowing(candidate).guildId;
  }
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared(visibleContent, markAsDismissed, bypassAutoDismiss, guildId);
  items = [visibleContent, markAsDismissed];
  const items1 = [, ];
  [arr2[0], arr2[1]] = items;
  _slicedToArray(items, 2);
  return items1;
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
  const obj2 = useSelectedDismissibleContentShared2;
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
  const obj2 = useSelectedDismissibleContentShared2;
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
  const obj2 = useSelectedDismissibleContentShared2;
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
  const obj2 = useSelectedDismissibleContentShared2;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
}
export function useSelectedSnowflakeBoundGuildDismissibleContent(content, guildId, snowflakeId, groupName, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(content, snowflakeId, guildId, groupName);
  _slicedToArray(obj.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(content, snowflakeId, guildId, groupName), 2);
  const obj2 = useSelectedDismissibleContentShared2;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag, guildId);
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
  const obj2 = useSelectedDismissibleContentShared2;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
}
export function useSelectedTimeRecurringGuildDismissibleContent(prop, id, timeRecurringConfig, GUILD_HEADER_TOOLTIPS) {
  let tmp2;
  let tmp3;
  const obj = useGetDismissibleContent;
  [tmp2, tmp3] = obj.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, timeRecurringConfig, GUILD_HEADER_TOOLTIPS);
  _slicedToArray(obj.useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, timeRecurringConfig, GUILD_HEADER_TOOLTIPS), 2);
  const obj2 = useSelectedDismissibleContentShared2;
  const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, false, id);
  const items = [tmp2, tmp3];
  return items;
}
