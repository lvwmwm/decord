// Module ID: 14499
// Function ID: 14500
// Name: ConjureAppChannelMembersSheet
// Dependencies: [19, 4857, 10691, 21, 5005, 558, 576, 504, 14498, 11381, 5302, 2]

// Module 14499 (ConjureAppChannelMembersSheet)
import Fragment from "Fragment" /* 21 */;
import openConjureAppChannelSheet from "openConjureAppChannelSheet" /* 14498 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10691 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let USERS_LIST_PADDING_BETWEEN_SECTIONS;
let USERS_LIST_SECTION_BOTTOM_PADDING;
({ USERS_LIST_PADDING_BETWEEN_SECTIONS, USERS_LIST_SECTION_BOTTOM_PADDING } = UsersFastListConstants);
const jsx = Fragment.jsx;
const diff = USERS_LIST_PADDING_BETWEEN_SECTIONS - USERS_LIST_SECTION_BOTTOM_PADDING;
let obj = { body: { overflow: "hidden" }, list: { marginTop: -diff } };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppChannelMembersSheet(channelId) {
  let first;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp8;
  let obj = channelId(576);
  const cResult = obj.c(14);
  channelId = channelId.channelId;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[4] !== guild_id) {
    const fn2 = function _() {
      if (null == guild_id) {
        const obj = openConjureAppChannelSheet;
        const result = obj.closeConjureAppChannelMembersSheet();
      }
    };
    const items2 = [guild_id];
    cResult[4] = guild_id;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp12 = items2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const effect = react.useEffect(tmp11, tmp12);
  let tmp14 = null;
  if (null != guild_id) {
    if (cResult[7] === channelId) {
      if (cResult[8] === guild_id) {
        let tmp15;
        if (cResult[9] === tmp4.list) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.body) {
          let tmp19;
          if (cResult[12] === tmp15) {
            tmp19 = cResult[13];
          }
          tmp14 = tmp19;
        }
        const tmp21 = jsx(channelId(5302).BottomSheet, { startExpanded: true, scrollable: true, bodyStyles: tmp4.body, children: tmp15 });
        cResult[11] = tmp4.body;
        cResult[12] = tmp15;
        cResult[13] = tmp21;
        tmp19 = tmp21;
      }
    }
    const tmp18 = jsx(guild_id(11381), { channelId, guildId: guild_id, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true, listStyleOverride: tmp4.list });
    cResult[7] = channelId;
    cResult[8] = guild_id;
    cResult[9] = tmp4.list;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  return tmp14;
}) : (function ConjureAppChannelMembersSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_6();
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let guild_id;
  const tmp2 = channelId;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items2 = [guild_id];
  const effect = react.useEffect(() => {
    if (null == guild_id) {
      const obj = openConjureAppChannelSheet;
      const result = obj.closeConjureAppChannelMembersSheet();
    }
  }, items2);
  let tmp7 = null;
  if (null != guild_id) {
    BottomSheet = tmp2(5302).BottomSheet;
    tmp7 = <BottomSheet startExpanded scrollable bodyStyles={tmp.body}>{null}</BottomSheet>;
  }
  return tmp7;
}));
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelMembersSheet.tsx");

export default memoResult;
