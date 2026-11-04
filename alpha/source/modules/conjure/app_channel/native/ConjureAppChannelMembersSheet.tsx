// Module ID: 14796
// Function ID: 14797
// Name: ConjureAppChannelMembersSheet
// Dependencies: [19, 4990, 10912, 21, 5141, 504, 14795, 5396, 11814, 2]

// Module 14796 (ConjureAppChannelMembersSheet)
import Fragment from "Fragment" /* 21 */;
import openConjureAppChannelSheet from "openConjureAppChannelSheet" /* 14795 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10912 */;
import createStyles from "createStyles" /* 5141 */;
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
    const BottomSheet = tmp2(5396).BottomSheet;
    tmp7 = <BottomSheet startExpanded scrollable bodyStyles={tmp.body}>{null}</BottomSheet>;
  }
  return tmp7;
});
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelMembersSheet.tsx");

export default memoResult;
