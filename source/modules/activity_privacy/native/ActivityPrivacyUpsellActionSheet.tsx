// Module ID: 14619
// Function ID: 111408
// Name: ActivityPrivacyUpsellActionSheet
// Dependencies: [31, 33, 13805, 13807, 2]
// Exports: default

// Module 14619 (ActivityPrivacyUpsellActionSheet)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("getPermissiveness").fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default function ActivityPrivacyUpsellActionSheet(direction) {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const upsellStrings = direction(13805).getUpsellStrings(direction === direction(13805).ChangeDirection.RESTRICTING, direction.settingName);
  const items = [direction, affectedGuildIds];
  ({ title, subtitle, confirmText, toastContent } = upsellStrings);
  const onConfirm = React.useCallback(() => {
    const result = direction(outer1_2[2]).applyBulkGuildRestrictionChange(direction, affectedGuildIds);
  }, items);
  return jsx(affectedGuildIds(13807), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm });
};
