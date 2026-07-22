// Module ID: 13648
// Function ID: 103404
// Name: harvestDisabled
// Dependencies: []
// Exports: harvestDisabled, useRequestHarvestStatus

// Module 13648 (harvestDisabled)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const REQUEST_DATA_LIMIT_MS = arg1(dependencyMap[4]).REQUEST_DATA_LIMIT_MS;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/harvester/HarvesterUtils.tsx");

export const harvestDisabled = function harvestDisabled(created_at, stateFromStores) {
  let tmp = !stateFromStores.verified;
  if (!tmp) {
    const tmp2 = !stateFromStores.isStaff();
    let tmp3 = !tmp2;
    if (tmp2) {
      let tmp5 = null != created_at;
      if (tmp5) {
        const _Date = Date;
        const _Date2 = Date;
        const timestamp = Date.now();
        const date = new Date(created_at.created_at);
        tmp5 = REQUEST_DATA_LIMIT_MS > timestamp - date.getTime();
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useRequestHarvestStatus = function useRequestHarvestStatus() {
  let obj = callback(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_5];
  const stateFromStores1 = callback(dependencyMap[5]).useStateFromStores(items1, () => harvestType.harvestType);
  const tmp2 = callback2(React.useState(() => Date.now()), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  let sum = first;
  if (null != stateFromStores1) {
    const _Date = Date;
    const date = new Date(stateFromStores1.created_at);
    sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
  }
  const dependencyMap = sum;
  const callback2 = React.useRef(null);
  const items2 = [sum];
  const effect = React.useEffect(() => {
    const diff = sum - Date.now();
    if (diff > 0) {
      const _setTimeout = setTimeout;
      const _clearTimeout = clearTimeout;
      const timerId = setTimeout(() => callback(Date.now()), diff);
      clearTimeout(ref.current);
      ref.current = timerId;
    }
    return () => clearTimeout(ref.current);
  }, items2);
  if (null != stateFromStores) {
    if (stateFromStores.verified) {
      if (stateFromStores.isStaff()) {
        obj = { GUILD_ROOM_BACKGROUND_CONFIG: true, hideTitle: true };
      } else if (null == stateFromStores1) {
        obj = { allowed: true };
      } else if (sum > first) {
        const obj1 = {};
        const _Date2 = Date;
        const date1 = new Date(sum);
        obj1.nextAllowed = date1;
        obj = obj1;
      } else {
        obj = { allowed: true };
      }
    }
  }
  return {};
};
