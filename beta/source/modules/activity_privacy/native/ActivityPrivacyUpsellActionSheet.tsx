// Module ID: 18318
// Function ID: 18319
// Name: ActivityPrivacyUpsellActionSheet
// Dependencies: [19, 21, 17104, 17106, 2]
// Exports: default

// Module 18318 (ActivityPrivacyUpsellActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 17104 */;
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
  const RESTRICTING = direction(17104).ChangeDirection.RESTRICTING;
  let obj = direction(17104);
  const upsellStrings = obj.getUpsellStrings(direction === RESTRICTING, settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = react.useCallback(() => {
    const obj = ActivityPrivacyUpsellUtils;
    const result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(17106), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};
