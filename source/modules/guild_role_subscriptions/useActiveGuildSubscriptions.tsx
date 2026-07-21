// Module ID: 13979
// Function ID: 106222
// Name: useActiveGuildSubscriptions
// Dependencies: []
// Exports: default

// Module 13979 (useActiveGuildSubscriptions)
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[2]).UserGuildRoleSubscriptionRelationship;
let closure_7 = [];
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default function useActiveGuildSubscriptions() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.ensureFresh;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let importDefault;
  let closure_2;
  const tmp = importDefault(dependencyMap[3])() === constants.SUBSCRIBED;
  importDefault = tmp;
  const items = [closure_5];
  let stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => store.getActiveGuildSubscriptions());
  closure_2 = React.useRef(false);
  const items1 = [flag, tmp];
  const effect = React.useEffect(() => {
    let ensureFresh;
    let hasRoleSubscriptions;
    const obj = { ensureFresh: flag, hasRoleSubscriptions: tmp, hasFetched: ref.current };
    const hasFetched = obj.hasFetched;
    ({ ensureFresh, hasRoleSubscriptions } = obj);
    const activeGuildSubscriptions = store.getActiveGuildSubscriptions();
    let length;
    if (null != activeGuildSubscriptions) {
      length = activeGuildSubscriptions.length;
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    let tmp3 = !tmp2;
    if (0 !== num || !hasRoleSubscriptions) {
      tmp3 = !(!ensureFresh || hasFetched);
      const tmp4 = !ensureFresh || hasFetched;
    }
    if (!tmp3) {
      let tmp5 = !hasFetched;
      if (tmp5) {
        tmp5 = !store.hasFetchedSubscriptions();
      }
      tmp3 = tmp5;
    }
    if (tmp3) {
      ref.current = true;
      const subscriptions = ref(closure_3[5]).fetchSubscriptions();
      const obj2 = ref(closure_3[5]);
    }
  }, items1);
  if (null == stateFromStores) {
    stateFromStores = closure_7;
  }
  return stateFromStores;
};
