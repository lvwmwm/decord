// Module ID: 11950
// Function ID: 92384
// Name: useUserProfileActivity
// Dependencies: []
// Exports: default

// Module 11950 (useUserProfileActivity)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = [];
let closure_7 = [];
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default function useUserProfileActivity(arg0) {
  const require = arg0;
  let obj = require(dependencyMap[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => activities.getActivities(arg0));
  const importDefault = stateFromStores;
  const tmp = importDefault(dependencyMap[3])(arg0);
  const items1 = [closure_4];
  const stateFromStores1 = require(dependencyMap[4]).useStateFromStores(items1, () => userOutbox.getUserOutbox(arg0));
  const dependencyMap = stateFromStores1;
  const items2 = [stateFromStores, ];
  let entries;
  if (null != stateFromStores1) {
    entries = stateFromStores1.entries;
  }
  items2[1] = entries;
  const tmp4Result = useMemo(() => {
    let found;
    let obj = arg0(stateFromStores1[5]);
    let userProfileLiveActivities = obj.getUserProfileLiveActivities(stateFromStores);
    const arg0 = userProfileLiveActivities;
    if (null != stateFromStores1) {
      const entries = stateFromStores1.entries;
      found = entries.filter((entry) => {
        let tmp = entry;
        const userProfileLiveActivities = entry;
        const tmp2 = !userProfileLiveActivities(closure_2[6]).isEntryLive(entry);
        if (!tmp2) {
          return tmp2;
        } else {
          if (obj2.isListenedSessionEntry(tmp)) {
            tmp = tmp.extra.entries.length > 0;
            if (tmp) {
              tmp = !userProfileLiveActivities.some((party) => {
                let result = null != party;
                if (result) {
                  result = party(closure_2[8]).isMatchingListeningActivity(party, party);
                  const obj = party(closure_2[8]);
                }
                return result;
              });
            }
            let result = tmp;
          } else {
            if (obj3.isWatchedMediaEntry(tmp)) {
              result = !userProfileLiveActivities.some((details) => {
                let result = null != details;
                if (result) {
                  result = details(closure_2[8]).isMatchingWatchActivity(details, details);
                  const obj = details(closure_2[8]);
                }
                return result;
              });
            } else {
              result = userProfileLiveActivities(closure_2[7]).isRecentActivityEntry(tmp);
              const obj4 = userProfileLiveActivities(closure_2[7]);
            }
            const obj3 = userProfileLiveActivities(closure_2[7]);
          }
          const obj2 = userProfileLiveActivities(closure_2[7]);
        }
      });
    }
    obj = {};
    if (0 === userProfileLiveActivities.length) {
      userProfileLiveActivities = closure_6;
    }
    obj.live = userProfileLiveActivities;
    if (null == found) {
      found = closure_7;
    }
    obj.recent = found;
    return obj;
  }, items2);
  obj = { live: tmp4Result.live, recent: tmp4Result.recent, stream: tmp, outbox: stateFromStores1 };
  return obj;
};
