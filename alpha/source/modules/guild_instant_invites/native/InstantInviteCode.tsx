// Module ID: 10995
// Function ID: 10996
// Name: InstantInviteCode
// Dependencies: [19, 17, 4994, 5083, 1385, 21, 5141, 575, 8744, 8793, 6162, 5761, 5786, 5874, 1113, 10327, 2]
// Exports: default

// Module 10995 (InstantInviteCode)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import ChannelRecord from "ChannelRecord" /* 4994 */;
import useChannelName from "useChannelName" /* 5786 */;
import ClockIcon from "ClockIcon" /* 5874 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8744 */;
import CountDownDefault from "CountDown" /* 10327 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
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
      TextIcon = tmp2(8793).TextIcon;
    }
    const Stack = tmp2(6162).Stack;
    const obj2 = { direction: "horizontal", align: "center", children: items };
    const Stack2 = tmp2(6162).Stack;
    items = [metroImportAll(TextIcon, { color: "icon-subtle", size: "xs" }), ];
    const obj3 = { variant: "body-md/semibold", color: "text-subtle", style: tmp.channel, lineClamp: 1, children: tmp2Result.computeChannelName(channel, UserStore, RelationshipStore, false) };
    const Text = tmp2(5761).Text;
    tmp2Result = useChannelName;
    items[1] = metroImportAll(Text, obj3);
    const children = [React4(Stack2, obj2), ];
    let tmp4Result = null != expiresAt;
    if (tmp4Result) {
      const obj4 = { direction: "horizontal", align: "center", children: items2 };
      const Stack3 = tmp2(6162).Stack;
      items2 = [metroImportAll(ClockIcon.ClockIcon, { size: "xs", color: "icon-subtle" }), , ];
      const obj5 = { variant: "body-md/semibold", color: "text-subtle", children: intl.string(intl2.t.aTABYx) };
      const Text2 = tmp2(5761).Text;
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
  Stack = invite(6162).Stack;
  items1 = [, ];
  const obj3 = { variant: "body-lg/semibold", tabularNumbers: true, children: invite.code };
  items1[0] = closure_8(invite(5761).Text, obj3);
  const obj4 = { channel: memo, expiresAt: invite.getExpiresAt() };
  items1[1] = closure_8(InstantInviteDetails, obj4);
  return closure_8(View, obj);
};
export { InstantInviteDetails };
