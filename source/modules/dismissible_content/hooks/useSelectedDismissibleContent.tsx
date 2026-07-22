// Module ID: 5797
// Function ID: 49569
// Name: useSelectedDismissibleContent
// Dependencies: []
// Exports: useSelectedDismissibleContent, useSelectedSingleUseGuildDismissibleContent, useSelectedSnowflakeBoundDismissibleContent, useSelectedSnowflakeBoundGuildDismissibleContent, useSelectedTimeRecurringDismissibleContent, useSelectedTimeRecurringGuildDismissibleContent, useSelectedTimeRecurringSnowflakeBoundDismissibleContent, useSelectedVersionedDismissibleContent

// Module 5797 (useSelectedDismissibleContent)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = function useSelectedDismissibleContent(items, APP_LAUNCHER_ONBOARDING, bypassAutoDismiss) {
  let tmp2;
  let tmp3;
  let flag = bypassAutoDismiss;
  if (bypassAutoDismiss === undefined) {
    flag = false;
  }
  const obj = APP_LAUNCHER_ONBOARDING(dependencyMap[1]);
  [tmp2, tmp3] = callback(APP_LAUNCHER_ONBOARDING(dependencyMap[1]).useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const tmp = callback(APP_LAUNCHER_ONBOARDING(dependencyMap[1]).useGetDismissibleContent(items, APP_LAUNCHER_ONBOARDING), 2);
  const selectedDismissibleContentShared = APP_LAUNCHER_ONBOARDING(dependencyMap[2]).useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  items = [tmp2, tmp3];
  return items;
};
export const useSelectedSingleUseGuildDismissibleContent = function useSelectedSingleUseGuildDismissibleContent(items2, guildId, CHANNEL_NOTICES, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = guildId(dependencyMap[1]);
  [tmp2, tmp3] = callback(guildId(dependencyMap[1]).useGetSingleUseGuildDismissibleContent_UNSAFE(items2, guildId, CHANNEL_NOTICES), 2);
  const tmp = callback(guildId(dependencyMap[1]).useGetSingleUseGuildDismissibleContent_UNSAFE(items2, guildId, CHANNEL_NOTICES), 2);
  const selectedDismissibleContentShared = guildId(dependencyMap[2]).useSelectedDismissibleContentShared(tmp2, tmp3, flag, guildId);
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
  const obj = latestVersion(dependencyMap[1]);
  [tmp2, tmp3] = callback(latestVersion(dependencyMap[1]).useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const tmp = callback(latestVersion(dependencyMap[1]).useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName), 2);
  const selectedDismissibleContentShared = latestVersion(dependencyMap[2]).useSelectedDismissibleContentShared(tmp2, tmp3, flag);
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
  const obj = closure_11(dependencyMap[1]);
  [tmp2, tmp3] = callback(closure_11(dependencyMap[1]).useGetTimeRecurringDismissibleContent(prop, closure_11, groupName), 2);
  const tmp = callback(closure_11(dependencyMap[1]).useGetTimeRecurringDismissibleContent(prop, closure_11, groupName), 2);
  const selectedDismissibleContentShared = closure_11(dependencyMap[2]).useSelectedDismissibleContentShared(tmp2, tmp3, flag);
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
  const obj = newSnowflakeId(dependencyMap[1]);
  [tmp2, tmp3] = callback(newSnowflakeId(dependencyMap[1]).useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const tmp = callback(newSnowflakeId(dependencyMap[1]).useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = newSnowflakeId(dependencyMap[2]).useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedSnowflakeBoundGuildDismissibleContent = function useSelectedSnowflakeBoundGuildDismissibleContent(prop, id, newSnowflakeId, GUILD_HEADER_TOOLTIPS, flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = false;
  }
  const obj = id(dependencyMap[1]);
  [tmp2, tmp3] = callback(id(dependencyMap[1]).useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, id, GUILD_HEADER_TOOLTIPS), 2);
  const tmp = callback(id(dependencyMap[1]).useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, id, GUILD_HEADER_TOOLTIPS), 2);
  const selectedDismissibleContentShared = id(dependencyMap[2]).useSelectedDismissibleContentShared(tmp2, tmp3, flag, id);
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
  const obj = newSnowflakeId(dependencyMap[1]);
  [tmp2, tmp3] = callback(newSnowflakeId(dependencyMap[1]).useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const tmp = callback(newSnowflakeId(dependencyMap[1]).useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName), 2);
  const selectedDismissibleContentShared = newSnowflakeId(dependencyMap[2]).useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
};
export const useSelectedTimeRecurringGuildDismissibleContent = function useSelectedTimeRecurringGuildDismissibleContent(prop, id, closure_16, GUILD_HEADER_TOOLTIPS) {
  let tmp2;
  let tmp3;
  const obj = id(dependencyMap[1]);
  [tmp2, tmp3] = callback(id(dependencyMap[1]).useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_16, GUILD_HEADER_TOOLTIPS), 2);
  const tmp = callback(id(dependencyMap[1]).useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_16, GUILD_HEADER_TOOLTIPS), 2);
  const selectedDismissibleContentShared = id(dependencyMap[2]).useSelectedDismissibleContentShared(tmp2, tmp3, false, id);
  const items = [tmp2, tmp3];
  return items;
};
