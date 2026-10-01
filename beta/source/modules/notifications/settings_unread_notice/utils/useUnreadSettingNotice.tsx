// Module ID: 10955
// Function ID: 10956
// Name: useUnreadSettingNotice
// Dependencies: [32, 19, 2049, 9605, 504, 10956, 2]
// Exports: default

// Module 10955 (useUnreadSettingNotice)
import ChannelRecord from "ChannelRecord" /* 2049 */;
import UnreadSettingNoticeStore2Default from "UnreadSettingNoticeStore2" /* 10956 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_5 = ChannelRecord.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx");

export default function useUnreadSettingNotice(id) {
  let closure_3;
  let first;
  _require = id;
  let obj = require("notifications/NotificationUtils");
  const shouldUseNewNotificationSystem = obj.useShouldUseNewNotificationSystem("useShouldRenderBanner");
  [first, _slicedToArray] = react.useState("");
  const items = [id.id];
  const effect = react.useEffect(() => {
    closure_3("");
  }, items);
  const useStateFromStores = require("get initialized").useStateFromStores;
  const tmp5 = require("get initialized");
  const items1 = [shouldUseNewNotificationSystem(first[5])];
  const items2 = [
    first,
    shouldUseNewNotificationSystem,
    useStateFromStores(items1, () => {
      const obj = UnreadSettingNoticeStore2Default;
      return obj.getLastActionTime(id.id);
    }),
    id
  ];
  const effect1 = react.useEffect(() => {
    let hasItem = set.has(id.type) && first !== tmp.id && shouldUseNewNotificationSystem;
    if (hasItem) {
      const obj = UnreadSettingNoticeStore2Default;
      hasItem = obj.maybeAutoUpgradeChannel(tmp.id);
    }
    if (hasItem) {
      closure_3(id.id);
    }
  }, items2);
  const obj2 = { showUnreadsNotice: first === id.id, clearUnreadsNotice: react.useCallback(() => closure_3(""), []) };
  return obj2;
};
