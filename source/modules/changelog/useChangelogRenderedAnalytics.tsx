// Module ID: 11457
// Function ID: 89265
// Name: useChangelogRenderedAnalytics
// Dependencies: []
// Exports: default

// Module 11457 (useChangelogRenderedAnalytics)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/changelog/useChangelogRenderedAnalytics.tsx");

export default function useChangelogRenderedAnalytics(arg0) {
  const arg1 = arg0;
  const tmp = importDefault(dependencyMap[5])(arg0);
  const importDefault = tmp;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => tmp4.locale);
  const dependencyMap = stateFromStores;
  const obj = arg1(dependencyMap[6]);
  const items1 = [closure_6];
  const items2 = [tmp, stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => {
    let str = "";
    if (null != stateFromStores2) {
      str = tmp;
    }
    return stateFromStores2.getChangelog(str, stateFromStores);
  }, items2);
  const React = stateFromStores1;
  const tmp4 = importDefault(dependencyMap[7])(arg0);
  closure_4 = tmp4;
  let timestamp = null;
  if (tmp4) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let closure_5 = React.useRef(timestamp);
  const obj2 = arg1(dependencyMap[6]);
  const items3 = [closure_5];
  const items4 = [arg0];
  const stateFromStores2 = arg1(dependencyMap[6]).useStateFromStores(items3, () => ref.getUnreadCount(arg0), items4);
  closure_6 = stateFromStores2;
  let closure_7 = React.useRef(stateFromStores2);
  const effect = React.useEffect(() => {
    closure_7.current = stateFromStores2;
  });
  const items5 = [tmp4];
  const effect1 = React.useEffect(() => {
    closure_5.current = Date.now();
  }, items5);
  const items6 = [tmp, stateFromStores, tmp4];
  const effect2 = React.useEffect(() => {
    let tmp = tmp4;
    if (tmp4) {
      tmp = null != tmp;
    }
    if (tmp) {
      const changelog = tmp(stateFromStores[8]).fetchChangelog(tmp, stateFromStores, true);
      const obj = tmp(stateFromStores[8]);
    }
  }, items6);
  const items7 = [tmp4, stateFromStores1];
  const effect3 = React.useEffect(() => {
    let tmp = tmp4;
    if (tmp4) {
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
  const effect4 = React.useEffect(() => {
    const arg0 = ref.current;
    return () => {
      let tmp = closure_4;
      if (closure_4) {
        tmp = null != closure_3;
      }
      if (tmp) {
        tmp = null != current;
      }
      if (tmp) {
        let obj = callback(closure_2[9]);
        obj = {};
        const _Math = Math;
        const _Date = Date;
        obj.seconds_open = Math.round((Date.now() - current) / 1000);
        const _HermesInternal = HermesInternal;
        obj.change_log_id = "" + closure_3.date + ":" + closure_3.revision;
        obj.unread_count = ref.current;
        obj.track(ref.CHANGE_LOG_CLOSED, obj);
        closure_5.current = 0;
      }
    };
  }, items8);
};
