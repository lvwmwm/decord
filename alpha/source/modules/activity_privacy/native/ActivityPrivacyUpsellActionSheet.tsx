// Module ID: 18203
// Function ID: 18204
// Name: ActivityPrivacyUpsellActionSheet
// Dependencies: [19, 21, 17002, 17004, 2]
// Exports: default

// Module 18203 (ActivityPrivacyUpsellActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 17002 */;
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
  const RESTRICTING = direction(17002).ChangeDirection.RESTRICTING;
  let obj = direction(17002);
  const upsellStrings = obj.getUpsellStrings(direction === RESTRICTING, settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = react.useCallback(() => {
    const obj = ActivityPrivacyUpsellUtils;
    const result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(17004), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};
