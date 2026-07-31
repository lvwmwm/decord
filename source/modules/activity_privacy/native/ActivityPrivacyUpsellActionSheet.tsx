// Module ID: 14717
// Function ID: 14718
// Name: ActivityPrivacyUpsellActionSheet
// Dependencies: [19, 21, 13901, 13903, 2]
// Exports: default

// Module 14717 (ActivityPrivacyUpsellActionSheet)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("computeAffectedGuilds").fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(13901).getUpsellStrings(direction === direction(13901).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = React.useCallback(() => {
    const result = direction(outer1_2[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(13903), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};
