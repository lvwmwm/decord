// Module ID: 10456
// Function ID: 80506
// Name: useUnreadSettingNotice
// Dependencies: [57, 31, 1352, 10315, 566, 10457, 2]
// Exports: default

// Module 10456 (useUnreadSettingNotice)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING as closure_5 } from "_callSuper";

const require = arg1;
const result = require("_callSuper").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

export default function useUnreadSettingNotice(id) {
  const _require = id;
  let obj = _require(first[3]);
  const shouldUseNewNotificationSystem = obj.useShouldUseNewNotificationSystem("useShouldRenderBanner");
  const tmp2 = callback(React.useState(""), 2);
  first = tmp2[0];
  callback = tmp2[1];
  const items = [id.id];
  const effect = React.useEffect(() => {
    callback("");
  }, items);
  const items1 = [shouldUseNewNotificationSystem(first[5])];
  const items2 = [first, shouldUseNewNotificationSystem, _require(first[4]).useStateFromStores(items1, () => shouldUseNewNotificationSystem(first[5]).getLastActionTime(user.id)), id];
  const effect1 = React.useEffect(() => {
    let hasItem = outer1_5.has(user.type);
    if (hasItem) {
      hasItem = first !== user.id;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem(first[5]).maybeAutoUpgradeChannel(user.id);
      const obj = shouldUseNewNotificationSystem(first[5]);
    }
    if (hasItem) {
      callback(user.id);
    }
  }, items2);
  obj = { showUnreadsNotice: first === id.id, clearUnreadsNotice: React.useCallback(() => callback(""), []) };
  return obj;
};
