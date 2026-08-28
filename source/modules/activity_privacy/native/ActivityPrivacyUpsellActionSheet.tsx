// Module ID: 15439
// Function ID: 15440
// Name: ActivityPrivacyUpsellActionSheet
// Dependencies: [19, 21, 14390, 14392, 2]
// Exports: default

// Module 15439 (ActivityPrivacyUpsellActionSheet)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(14390).getUpsellStrings(direction === direction(14390).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = React.useCallback(() => {
    const result = direction(closure_1_2[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(14392), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};
