// Module ID: 13641
// Function ID: 103342
// Name: ProfileToActivityUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 13641 (ProfileToActivityUpsellActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activity_privacy/native/ProfileToActivityUpsellActionSheet.tsx");

export default function ProfileToActivityUpsellActionSheet(direction) {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const arg1 = direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const importDefault = affectedGuildIds;
  const mappedActivityValue = direction.mappedActivityValue;
  const dependencyMap = mappedActivityValue;
  const profileToActivityUpsellStrings = arg1(dependencyMap[2]).getProfileToActivityUpsellStrings(direction === arg1(dependencyMap[2]).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [mappedActivityValue, direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = profileToActivityUpsellStrings);
  const onConfirm = React.useCallback(() => {
    const DefaultGuildsActivityRestrictedV2 = direction(mappedActivityValue[3]).DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV2.updateSetting(mappedActivityValue);
    const result = direction(mappedActivityValue[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  const onCardPress = React.useCallback(() => {
    affectedGuildIds(mappedActivityValue[4]).hideActionSheet();
  }, []);
  return jsx(importDefault(dependencyMap[5]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm, onCardPress });
};
