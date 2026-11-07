// Module ID: 14819
// Function ID: 14820
// Name: ConjureAppChannelMembersSheet
// Dependencies: [19, 4989, 10853, 21, 5140, 504, 14818, 5388, 11779, 2]

// Module 14819 (ConjureAppChannelMembersSheet)
import Fragment from "Fragment" /* 21 */;
import openConjureAppChannelSheet from "openConjureAppChannelSheet" /* 14818 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10853 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let USERS_LIST_PADDING_BETWEEN_SECTIONS;
let USERS_LIST_SECTION_BOTTOM_PADDING;
({ USERS_LIST_PADDING_BETWEEN_SECTIONS, USERS_LIST_SECTION_BOTTOM_PADDING } = UsersFastListConstants);
const jsx = Fragment.jsx;
const diff = USERS_LIST_PADDING_BETWEEN_SECTIONS - USERS_LIST_SECTION_BOTTOM_PADDING;
let obj = { body: { overflow: "hidden" }, list: { marginTop: -diff } };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function ConjureAppChannelMembersSheet(channelId) {
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
    const BottomSheet = tmp2(5388).BottomSheet;
    tmp7 = <BottomSheet startExpanded scrollable bodyStyles={tmp.body}>{null}</BottomSheet>;
  }
  return tmp7;
});
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelMembersSheet.tsx");

export default memoResult;
