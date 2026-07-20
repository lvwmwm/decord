// Module ID: 11102
// Function ID: 86422
// Name: areMemberGroupsHydrated
// Dependencies: []
// Exports: useHereMentionCallback

// Module 11102 (areMemberGroupsHydrated)
function areMemberGroupsHydrated(groups) {
  let tmp = groups.length > 1;
  if (!tmp) {
    let tmp2 = 1 === groups.length;
    if (tmp2) {
      tmp2 = "unknown" === groups[0].id;
    }
    tmp = !tmp2;
  }
  return tmp;
}
function tryUpdateSubscriptionForHereMention(arr, maxMessageLength, guild_id, id) {
  const tmp = areMemberGroupsHydrated(props.getProps(guild_id, id).groups);
  let tmp2 = tmp;
  if (!tmp) {
    let tmp3 = arr.length < 5;
    if (!tmp3) {
      tmp3 = arr.length > maxMessageLength;
    }
    let tmp5 = !tmp3;
    if (!tmp3) {
      let flag = -1 !== arr.indexOf(closure_6);
      if (flag) {
        maxMessageLength(dependencyMap[3]).subscribeChannel(guild_id, id, maxMessageLength(dependencyMap[4]).DEFAULT_RANGES);
        flag = true;
        const obj = maxMessageLength(dependencyMap[3]);
      }
      tmp5 = flag;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = "@here";
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/channel_text_area/ChatInputContentCallbacks.tsx");

export { tryUpdateSubscriptionForHereMention };
export const useHereMentionCallback = function useHereMentionCallback(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const tmp = importDefault(dependencyMap[5])();
  const callback = tmp;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const React = first;
  let closure_5 = tmp2[1];
  const items = [tmp, arg1, arg2];
  const memo = React.useMemo(() => arg1(arg2[6]).debounce((arg0) => {
    if (callback2(arg0, closure_3, closure_1, closure_2)) {
      callback(true);
    }
  }, 200, { maxWait: 500 }), items);
  let closure_6 = memo;
  const items1 = [first, memo, arg0, arg1, arg2];
  const effect = React.useEffect(() => {
    if (null != arg1) {
      if (!callback(tmp)) {
        if (!first) {
          arg0.addListener("text-changed", memo);
          return () => {
            closure_0.removeListener("text-changed", closure_6);
            closure_6.cancel();
          };
        }
      }
    }
  }, items1);
};
