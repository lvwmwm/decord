// Module ID: 20211
// Function ID: 20212
// Name: useIsMFAEnabled
// Dependencies: [8575, 1387, 1071, 563, 2]
// Exports: useIsMFAEnabled

// Module 20211 (useIsMFAEnabled)
import useStateFromStores from "useStateFromStores" /* 563 */;
import Constants from "Constants" /* 1071 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8575 */;
import UserStore from "UserStore" /* 1387 */;
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
