// Module ID: 11477
// Function ID: 11478
// Name: ChatInputContentCallbacks
// Dependencies: [32, 19, 6697, 6730, 6704, 8605, 12, 2]
// Exports: tryUpdateSubscriptionForHereMention, useHereMentionCallback

// Module 11477 (ChatInputContentCallbacks)
import _modDef12 from "module_12" /* 12 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 6704 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 6730 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 8605 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6697 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let _slicedToArray = _slicedToArray_mod;
let c6 = "@here";
const result = size.fileFinishedImporting("modules/channel_text_area/ChatInputContentCallbacks.tsx");

export const tryUpdateSubscriptionForHereMention = function tryUpdateSubscriptionForHereMention(arr, maxMessageLength, guild_id, id) {
  const groups = ChannelMemberStore.getProps(guild_id, id).groups;
  let tmp = groups.length > 1;
  if (!tmp) {
    tmp = !(1 === groups.length && "unknown" === groups[0].id);
    const tmp2 = 1 === groups.length && "unknown" === groups[0].id;
  }
  let tmp3 = tmp;
  if (!tmp3) {
    let tmp7 = !(arr.length < 5 || arr.length > maxMessageLength);
    const tmp5 = arr.length < 5 || arr.length > maxMessageLength;
    if (tmp7) {
      let flag = -1 !== arr.indexOf(c6);
      if (flag) {
        const obj = GuildSubscriptionsActionCreators;
        obj.subscribeChannel(guild_id, id, GuildChannelSubscriptions.DEFAULT_RANGES);
        flag = true;
      }
      tmp7 = flag;
    }
    tmp3 = tmp7;
  }
  return tmp3;
};
export const useHereMentionCallback = function useHereMentionCallback(arg0, arg1, arg2) {
  let closure_1;
  let closure_2;
  let closure_3;
  let closure_5;
  let first;
  let closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let tmp = useMessageMaxLengthDefault();
  _slicedToArray = tmp;
  [first, closure_5] = first.useState(false);
  const items = [tmp, arg1, arg2];
  const memo = first.useMemo(() => {
    let props;
    let obj = _modDef12;
    return obj.debounce((arr) => {
      const groups = props.getProps(closure_1_1, closure_1_2).groups;
      let tmp4 = groups.length > 1;
      const tmp2 = closure_1_1;
      const tmp3 = closure_1_2;
      if (!tmp4) {
        tmp4 = !(1 === groups.length && "unknown" === groups[0].id);
        const tmp5 = 1 === groups.length && "unknown" === groups[0].id;
      }
      let tmp6 = tmp4;
      if (!tmp6) {
        let tmp9 = !(arr.length < 5 || arr.length > tmp);
        if (tmp9) {
          let flag = -1 !== arr.indexOf(memo);
          if (flag) {
            const obj = closure_0(closure_2[3]);
            obj.subscribeChannel(tmp2, tmp3, closure_0(closure_2[4]).DEFAULT_RANGES);
            flag = true;
          }
          tmp9 = flag;
        }
        tmp6 = tmp9;
      }
      if (tmp6) {
        props(true);
      }
    }, 200, { maxWait: 500 });
  }, items);
  const items1 = [first, memo, arg0, arg1, arg2];
  const effect = first.useEffect(() => {
    const groups = ChannelMemberStore.getProps(closure_1, closure_2).groups;
    if (null != closure_1) {
      let tmp = groups.length > 1;
      if (!tmp) {
        tmp = !(1 === groups.length && "unknown" === groups[0].id);
        const tmp2 = 1 === groups.length && "unknown" === groups[0].id;
      }
      if (!tmp) {
        const tmp3 = first;
        if (!tmp3) {
          closure_0.addListener("text-changed", memo);
          return () => {
            closure_1_0.removeListener("text-changed", memo);
            memo.cancel();
          };
        }
      }
    }
  }, items1);
};
