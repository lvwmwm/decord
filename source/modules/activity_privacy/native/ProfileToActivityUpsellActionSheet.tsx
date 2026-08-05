// Module ID: 13976
// Function ID: 13977
// Name: ProfileToActivityUpsellActionSheet
// Dependencies: [19, 21, 13975, 3928, 4223, 13977, 2]
// Exports: default

// Module 13976 (ProfileToActivityUpsellActionSheet)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("computeAffectedGuilds").fileFinishedImporting("modules/activity_privacy/native/ProfileToActivityUpsellActionSheet.tsx");

export default function ProfileToActivityUpsellActionSheet(direction) {
  let confirmText;
  let subtitle;
  let title;
  let toastContent;
  direction = direction.direction;
  const affectedGuildIds = direction.affectedGuildIds;
  const mappedActivityValue = direction.mappedActivityValue;
  const profileToActivityUpsellStrings = direction(mappedActivityValue[2]).getProfileToActivityUpsellStrings(direction === direction(mappedActivityValue[2]).ChangeDirection.RESTRICTING, direction.settingName);
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
  return jsx(affectedGuildIds(mappedActivityValue[5]), { direction, affectedGuildIds, title, subtitle, confirmText, toastContent, onConfirm, onCardPress });
};
