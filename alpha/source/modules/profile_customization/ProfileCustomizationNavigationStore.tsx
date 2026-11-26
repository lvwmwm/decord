// Module ID: 9437
// Function ID: 9438
// Name: ProfileCustomizationNavigationStore
// Dependencies: [5232, 6137, 1081, 2]

// Module 9437 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import ZustandStore from "ZustandStore" /* 5232 */;
import Constants from "Constants" /* 6137 */;
import size from "module_2" /* 2 */;

const createZustandStore = ZustandStore.createZustandStore;
const UserProfileSections = Constants.UserProfileSections;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false, editingTab: UserProfileSections.MAIN }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
