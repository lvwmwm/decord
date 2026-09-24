// Module ID: 18251
// Function ID: 18252
// Name: useIsMFAEnabled
// Dependencies: [9940, 1372, 1074, 563, 2]
// Exports: useIsMFAEnabled

// Module 18251 (useIsMFAEnabled)
import useStateFromStores from "useStateFromStores" /* 563 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9940 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const MFALevels = fn(1074).MFALevels;
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export const useIsMFAEnabled = function useIsMFAEnabled() {
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildSettingsStore];
  let mfaEnabled;
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  return { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
};
