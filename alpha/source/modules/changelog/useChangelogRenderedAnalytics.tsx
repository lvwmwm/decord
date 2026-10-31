// Module ID: 13995
// Function ID: 13996
// Name: useChangelogRenderedAnalytics
// Dependencies: [19, 2062, 6842, 7486, 1072, 13996, 504, 6893, 8567, 1252, 2]
// Exports: default

// Module 13995 (useChangelogRenderedAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 8567 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import ChangelogStore from "ChangelogStore" /* 7486 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/changelog/useChangelogRenderedAnalytics.tsx");

export default function useChangelogRenderedAnalytics(arg0) {
  let closure_0;
  let closure_1;
  let locale;
  let stateFromStores;
  let stateFromStores2;
  _require = arg0;
  let tmp = stateFromStores;
  const tmp2 = require("useChangelogIdFromChannel")(arg0);
  importDefault = tmp2;
  let obj = require("get initialized");
  const items = [locale];
  stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores2];
  const items2 = [tmp2, stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let str = closure_1;
    const getChangelog = ChangelogStore.getChangelog;
    if (closure_1 == null) {
      str = "";
    }
    return getChangelog(str, stateFromStores);
  }, items2);
  const tmp6 = require("isChangelogChannel")(arg0);
  locale = tmp6;
  let timestamp = null;
  const useRef = stateFromStores1.useRef;
  const tmp3 = _require;
  if (tmp6) {
    const tmp8 = globalThis;
    let _Date = Date;
    timestamp = Date.now();
  }
  const ref = useRef(timestamp);
  const items3 = [ref];
  const items4 = [arg0];
  const tmp3Result = tmp3(tmp[6]);
  stateFromStores2 = tmp3Result.useStateFromStores(items3, () => ReadStateStore.getUnreadCount(closure_0), items4);
  const ref2 = obj3.useRef(stateFromStores2);
  const effect = obj3.useEffect(() => {
    ref2.current = stateFromStores2;
  });
  const items5 = [tmp6];
  const effect1 = obj3.useEffect(() => {
    ref.current = Date.now();
  }, items5);
  const items6 = [tmp2, stateFromStores, tmp6];
  const effect2 = obj3.useEffect(() => {
    const tmp = locale && null != closure_1;
    if (tmp) {
      const obj = ChangeLogActionCreatorsDefault;
      const changelog = obj.fetchChangelog(closure_1, stateFromStores, true);
    }
  }, items6);
  const items7 = [tmp6, stateFromStores1];
  const effect3 = obj3.useEffect(() => {
    const tmp = locale && null != stateFromStores1;
    if (tmp) {
      const _HermesInternal = HermesInternal;
      const obj = { change_log_id: "" + stateFromStores1.date + ":" + stateFromStores1.revision, unread_count: ref2.current };
      const track = AnalyticsUtilsDefault.track;
      const CHANGE_LOG_OPENED = AnalyticEvents.CHANGE_LOG_OPENED;
      AnalyticsUtilsDefault;
      track(CHANGE_LOG_OPENED, obj);
    }
  }, items7);
  const items8 = [tmp6, stateFromStores1];
  const effect4 = obj3.useEffect(() => {
    const current = ref.current;
    return () => {
      const tmp = locale && null != stateFromStores1 && null != current;
      if (tmp) {
        const _Math = Math;
        const _Date = Date;
        const obj = { seconds_open: Math.round((Date.now() - current) / 1000), change_log_id: "" + stateFromStores1.date + ":" + stateFromStores1.revision, unread_count: ref.current };
        const track = AnalyticsUtilsDefault.track;
        const CHANGE_LOG_CLOSED = AnalyticEvents.CHANGE_LOG_CLOSED;
        AnalyticsUtilsDefault;
        const _HermesInternal = HermesInternal;
        track(CHANGE_LOG_CLOSED, obj);
        closure_5.current = 0;
      }
    };
  }, items8);
};
