// Module ID: 17403
// Function ID: 17404
// Name: ActivityPrivacyUpsellActionSheet
// Dependencies: [19, 21, 16153, 16155, 2]
// Exports: default

// Module 17403 (ActivityPrivacyUpsellActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 16153 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const settingName = direction.settingName;
  const RESTRICTING = direction(16153).ChangeDirection.RESTRICTING;
  let obj = direction(16153);
  const upsellStrings = obj.getUpsellStrings(direction === RESTRICTING, settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = react.useCallback(() => {
    const obj = ActivityPrivacyUpsellUtils;
    const result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(16155), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};
