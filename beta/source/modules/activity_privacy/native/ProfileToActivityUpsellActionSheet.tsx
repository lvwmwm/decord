// Module ID: 14388
// Function ID: 14389
// Name: ProfileToActivityUpsellActionSheet
// Dependencies: [19, 21, 14387, 2021, 4800, 14389, 2]
// Exports: default

// Module 14388 (ProfileToActivityUpsellActionSheet)
import Fragment from "Fragment" /* 21 */;
import UserSettings from "UserSettings" /* 2021 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14387 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/activity_privacy/native/ProfileToActivityUpsellActionSheet.tsx");

export default function ProfileToActivityUpsellActionSheet(direction) {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const mappedActivityValue = direction.mappedActivityValue;
  const settingName = direction.settingName;
  const RESTRICTING = direction(mappedActivityValue[2]).ChangeDirection.RESTRICTING;
  let obj = direction(mappedActivityValue[2]);
  const profileToActivityUpsellStrings = obj.getProfileToActivityUpsellStrings(direction === RESTRICTING, settingName);
  const items = [mappedActivityValue, direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = profileToActivityUpsellStrings);
  const onConfirm = react.useCallback(() => {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV2.updateSetting(mappedActivityValue);
    const obj = ActivityPrivacyUpsellUtils;
    const result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  const onCardPress = react.useCallback(() => {
    const obj = affectedGuildIds(mappedActivityValue[4]);
    obj.hideActionSheet();
  }, []);
  return jsx(affectedGuildIds(mappedActivityValue[5]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm, onCardPress });
};
