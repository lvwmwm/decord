// Module ID: 11149
// Function ID: 86789
// Name: areMemberGroupsHydrated
// Dependencies: [57, 31, 5658, 5688, 5664, 8021, 22, 2]
// Exports: useHereMentionCallback

// Module 11149 (areMemberGroupsHydrated)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
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
      let flag = -1 !== arr.indexOf(c6);
      if (flag) {
        require(5688) /* subscribeChannel */.subscribeChannel(guild_id, id, require(5664) /* serializeChannelRanges */.DEFAULT_RANGES);
        flag = true;
        const obj = require(5688) /* subscribeChannel */;
      }
      tmp5 = flag;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
let c6 = "@here";
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_text_area/ChatInputContentCallbacks.tsx");

export { tryUpdateSubscriptionForHereMention };
export const useHereMentionCallback = function useHereMentionCallback(arg0, arg1, arg2) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const tmp = importDefault(8021)();
  const callback = tmp;
  const tmp2 = callback(first.useState(false), 2);
  first = tmp2[0];
  let _isNativeReflectConstruct = tmp2[1];
  const items = [tmp, arg1, arg2];
  const memo = first.useMemo(() => callback(table[6]).debounce((arg0) => {
    if (outer2_8(arg0, outer1_3, outer1_1, outer1_2)) {
      outer1_5(true);
    }
  }, 200, { maxWait: 500 }), items);
  const items1 = [first, memo, arg0, arg1, arg2];
  const effect = first.useEffect(() => {
    if (null != closure_1) {
      if (!outer1_7(tmp)) {
        if (!first) {
          closure_0.addListener("text-changed", memo);
          return () => {
            outer1_0.removeListener("text-changed", outer1_6);
            outer1_6.cancel();
          };
        }
      }
    }
  }, items1);
};
