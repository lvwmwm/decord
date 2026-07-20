// Module ID: 14437
// Function ID: 108834
// Name: ActivityPrivacyUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 14437 (ActivityPrivacyUpsellActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const arg1 = direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const importDefault = affectedGuildIds;
  const upsellStrings = arg1(dependencyMap[2]).getUpsellStrings(direction === arg1(dependencyMap[2]).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = React.useCallback(() => {
    const result = direction(closure_2[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(importDefault(dependencyMap[3]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};
