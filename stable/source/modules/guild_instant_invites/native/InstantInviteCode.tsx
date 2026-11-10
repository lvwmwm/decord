// Module ID: 10817
// Function ID: 10818
// Name: InstantInviteCode
// Dependencies: [19, 17, 4867, 4956, 1383, 21, 5014, 575, 8603, 8652, 6027, 5624, 5652, 5740, 1113, 10149, 2]
// Exports: default

// Module 10817 (InstantInviteCode)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import useChannelName from "useChannelName" /* 5652 */;
import ClockIcon from "ClockIcon" /* 5740 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8603 */;
import CountDownDefault from "CountDown" /* 10149 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
class InstantInviteDetails {
  constructor(arg0) {
    let channel;
    let expiresAt;
    let intl;
    let items;
    let items2;
    let tmp2Result;
    ({ channel, expiresAt } = arg0);
    const tmp = closure_10();
    const obj = utils_ChannelUtils;
    let TextIcon = obj.getSimpleChannelIconComponent(channel);
    if (TextIcon == null) {
      TextIcon = tmp2(8652).TextIcon;
    }
    const Stack = tmp2(6027).Stack;
    const obj2 = { direction: "horizontal", align: "center", children: items };
    const Stack2 = tmp2(6027).Stack;
    items = [metroImportAll(TextIcon, { color: "icon-subtle", size: "xs" }), ];
    const obj3 = { variant: "text-md/semibold", color: "text-subtle", style: tmp.channel, lineClamp: 1, children: tmp2Result.computeChannelName(channel, UserStore, RelationshipStore, false) };
    const Text = tmp2(5624).Text;
    tmp2Result = useChannelName;
    items[1] = metroImportAll(Text, obj3);
    const children = [React4(Stack2, obj2), ];
    let tmp4Result = null != expiresAt;
    if (tmp4Result) {
      const obj4 = { direction: "horizontal", align: "center", children: items2 };
      const Stack3 = tmp2(6027).Stack;
      items2 = [metroImportAll(ClockIcon.ClockIcon, { size: "xs", color: "icon-subtle" }), , ];
      const obj5 = { variant: "text-md/semibold", color: "text-subtle", children: intl.string(intl2.t.aTABYx) };
      const Text2 = tmp2(5624).Text;
      intl = tmp2(1113).intl;
      items2[1] = metroImportAll(Text2, obj5);
      const obj6 = { style: tmp.time, deadline: expiresAt };
      items2[2] = metroImportAll(CountDownDefault, obj6);
      tmp4Result = tmp4(Stack3, obj4);
    }
    children[1] = tmp4Result;
    return React4(Stack, { children });
  }
}
const View = react_native.View;
let closure_5 = ChannelRecord.createChannelRecordFromInvite;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { flex: { flex: 1 }, channel: { flex: 0 }, time: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const authStore = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default function InstantInviteCode(invite) {
  let Stack;
  let items1;
  let obj2;
  invite = invite.invite;
  const items = [invite.channel];
  const obj = { style: closure_10().flex, children: closure_9(Stack, obj2) };
  const memo = react.useMemo(() => closure_5(invite.channel), items);
  obj2 = { children: items1 };
  Stack = invite(6027).Stack;
  items1 = [, ];
  const obj3 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  items1[0] = closure_8(invite(5624).Text, obj3);
  const obj4 = { channel: memo, expiresAt: invite.getExpiresAt() };
  items1[1] = closure_8(InstantInviteDetails, obj4);
  return closure_8(View, obj);
};
export { InstantInviteDetails };
