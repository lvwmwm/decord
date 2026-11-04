// Module ID: 14584
// Function ID: 14585
// Name: ConjureAppChannelMembersSheet
// Dependencies: [19, 4863, 10734, 21, 5014, 504, 14583, 5272, 11621, 2]

// Module 14584 (ConjureAppChannelMembersSheet)
import Fragment from "Fragment" /* 21 */;
import openConjureAppChannelSheet from "openConjureAppChannelSheet" /* 14583 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10734 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

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
    BottomSheet = tmp2(5272).BottomSheet;
    tmp7 = <BottomSheet startExpanded scrollable bodyStyles={tmp.body}>{null}</BottomSheet>;
  }
  return tmp7;
});
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelMembersSheet.tsx");

export default memoResult;
