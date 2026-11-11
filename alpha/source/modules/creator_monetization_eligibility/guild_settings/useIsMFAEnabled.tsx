// Module ID: 20511
// Function ID: 20512
// Name: useIsMFAEnabled
// Dependencies: [8339, 1385, 1072, 563, 2]
// Exports: useIsMFAEnabled

// Module 20511 (useIsMFAEnabled)
import useStateFromStores from "useStateFromStores" /* 563 */;
import Constants from "Constants" /* 1072 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8339 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const MFALevels = Constants.MFALevels;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx");

export function useIsMFAEnabled() {
  let currentUser;
  let props;
  const items = [UserStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildSettingsStore];
  let mfaEnabled;
  const obj2 = useStateFromStores;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => props.getProps().mfaLevel);
  if (stateFromStores != null) {
    mfaEnabled = stateFromStores.mfaEnabled;
  }
  return { isUserMFAEnabled: true === mfaEnabled, isModerationMFAEnabled: stateFromStores1 === MFALevels.ELEVATED };
}
