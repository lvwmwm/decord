// Module ID: 11468
// Function ID: 89328
// Name: useChangelogRenderedAnalytics
// Dependencies: [31, 1921, 4142, 4141, 653, 11469, 566, 8340, 7768, 675, 2]
// Exports: default

// Module 11468 (useChangelogRenderedAnalytics)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/changelog/useChangelogRenderedAnalytics.tsx");

export default function useChangelogRenderedAnalytics(arg0) {
  const _require = arg0;
  let tmp = importDefault(stateFromStores[5])(arg0);
  importDefault = tmp;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => tmp4.locale);
  let obj = _require(stateFromStores[6]);
  const items1 = [stateFromStores2];
  const items2 = [tmp, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items1, () => {
    let str = "";
    if (null != closure_1) {
      str = closure_1;
    }
    return stateFromStores2.getChangelog(str, stateFromStores);
  }, items2);
  const tmp4 = importDefault(stateFromStores[7])(arg0);
  _isNativeReflectConstruct = tmp4;
  let timestamp = null;
  if (tmp4) {
    let _Date = Date;
    timestamp = Date.now();
  }
  let closure_5 = stateFromStores1.useRef(timestamp);
  const obj2 = _require(stateFromStores[6]);
  const items3 = [closure_5];
  const items4 = [arg0];
  stateFromStores2 = _require(stateFromStores[6]).useStateFromStores(items3, () => ref.getUnreadCount(closure_0), items4);
  let closure_7 = stateFromStores1.useRef(stateFromStores2);
  const effect = stateFromStores1.useEffect(() => {
    closure_7.current = stateFromStores2;
  });
  const items5 = [tmp4];
  const effect1 = stateFromStores1.useEffect(() => {
    closure_5.current = Date.now();
  }, items5);
  const items6 = [tmp, stateFromStores, tmp4];
  const effect2 = stateFromStores1.useEffect(() => {
    let tmp = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct) {
      tmp = null != tmp;
    }
    if (tmp) {
      const changelog = tmp(stateFromStores[8]).fetchChangelog(tmp, stateFromStores, true);
      const obj = tmp(stateFromStores[8]);
    }
  }, items6);
  const items7 = [tmp4, stateFromStores1];
  const effect3 = stateFromStores1.useEffect(() => {
    let tmp = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct) {
      tmp = null != stateFromStores1;
    }
    if (tmp) {
      let obj = tmp(stateFromStores[9]);
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.change_log_id = "" + stateFromStores1.date + ":" + stateFromStores1.revision;
      obj.unread_count = ref2.current;
      obj.track(ref2.CHANGE_LOG_OPENED, obj);
    }
  }, items7);
  const items8 = [tmp4, stateFromStores1];
  const effect4 = stateFromStores1.useEffect(() => {
    const current = ref.current;
    return () => {
      let tmp = outer1_4;
      if (outer1_4) {
        tmp = null != outer1_3;
      }
      if (tmp) {
        tmp = null != current;
      }
      if (tmp) {
        let obj = callback(stateFromStores[9]);
        obj = {};
        const _Math = Math;
        const _Date = Date;
        obj.seconds_open = Math.round((Date.now() - current) / 1000);
        const _HermesInternal = HermesInternal;
        obj.change_log_id = "" + outer1_3.date + ":" + outer1_3.revision;
        obj.unread_count = outer1_7.current;
        obj.track(constants.CHANGE_LOG_CLOSED, obj);
        outer1_5.current = 0;
      }
    };
  }, items8);
};
