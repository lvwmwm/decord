// Module ID: 11548
// Function ID: 11549
// Name: useUnreadSettingNotice
// Dependencies: [32, 19, 1961, 10275, 504, 11549, 2]
// Exports: default

// Module 11548 (useUnreadSettingNotice)
import UnreadSettingNoticeStore2Default from "UnreadSettingNoticeStore2" /* 11549 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_5 = fn(1961).CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

export default function useUnreadSettingNotice(id) {
  _require = id;
  const shouldUseNewNotificationSystem = require("notifications/NotificationUtils").useShouldUseNewNotificationSystem("useShouldRenderBanner");
  [first, _slicedToArray] = noop.useState("");
  const items = [id.id];
  const effect = noop.useEffect(() => {
    closure_3("");
  }, items);
  let obj = require("notifications/NotificationUtils");
  const items1 = [shouldUseNewNotificationSystem(first[5])];
  const items2 = [first, shouldUseNewNotificationSystem, require("initialize").useStateFromStores(items1, () => UnreadSettingNoticeStore2Default.getLastActionTime(id.id)), id];
  const effect1 = noop.useEffect(() => {
    let hasItem = set.has(id.type);
    if (hasItem) {
      hasItem = first !== tmp.id;
    }
    if (hasItem) {
      hasItem = shouldUseNewNotificationSystem;
    }
    if (hasItem) {
      hasItem = UnreadSettingNoticeStore2Default.maybeAutoUpgradeChannel(tmp.id);
    }
    if (hasItem) {
      closure_3(tmp.id);
    }
  }, items2);
  const obj2 = require("initialize");
  return { showUnreadsNotice: first === id.id, clearUnreadsNotice: noop.useCallback(() => closure_3(""), []) };
};
