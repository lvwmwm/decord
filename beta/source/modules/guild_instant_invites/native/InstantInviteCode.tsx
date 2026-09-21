// Module ID: 11246
// Function ID: 11247
// Name: InstantInviteCode
// Dependencies: [19, 17, 2049, 4409, 1376, 21, 4758, 580, 558, 568, 5241, 5300, 4911, 4754, 5186, 4720, 1119, 11235, 2]

// Module 11246 (InstantInviteCode)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import Text_Text from "Text/Text" /* 4754 */;
import useChannelName from "useChannelName" /* 4911 */;
import Stack_Stack from "Stack/Stack" /* 5186 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5241 */;
import CountDownDefault from "CountDown" /* 11235 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(2049).createChannelRecordFromInvite;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { flex: { flex: 1 }, channel: { flex: 0 }, time: { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ channel, expiresAt } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== channel) {
    let TextIcon = tmp(5241).getSimpleChannelIconComponent(channel);
    if (TextIcon == null) {
      TextIcon = tmp(5300).TextIcon;
    }
    cResult[0] = channel;
    cResult[1] = TextIcon;
    let tmp5 = TextIcon;
    const tmpResult = tmp(5241);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const tmp9 = closure_1_8(tmp5, { color: "icon-subtle", size: "xs" });
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== channel) {
    const tmpResult2 = tmp(4911);
    const channelName = tmpResult2.computeChannelName(channel, UserStore, RelationshipStore, false);
    cResult[4] = channel;
    cResult[5] = channelName;
    let tmp10 = channelName;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === tmp4.channel) {
    if (cResult[7] === tmp10) {
      let tmp16 = cResult[8];
    }
    if (cResult[9] === tmp7) {
      if (cResult[10] === tmp16) {
        let tmp18 = cResult[11];
      }
      if (cResult[12] === expiresAt) {
        if (cResult[13] === tmp4.time) {
          let tmp21 = cResult[14];
        }
        if (cResult[15] === tmp18) {
          if (cResult[16] === tmp21) {
            let tmp27 = cResult[17];
          }
          return tmp27;
        }
        const obj2 = { children: null };
        const items = [tmp18, tmp21];
        obj2.children = items;
        const tmp29 = options(tmp(5186).Stack, obj2);
        cResult[15] = tmp18;
        cResult[16] = tmp21;
        cResult[17] = tmp29;
        tmp27 = tmp29;
      }
      let tmp23 = null != expiresAt;
      if (tmp23) {
        const obj3 = { direction: "horizontal", align: "center", children: null };
        const items1 = [closure_1_8(tmp(4720).ClockIcon, { size: "xs", color: "icon-subtle" }), , ];
        const obj4 = { variant: "text-md/semibold", color: "text-subtle", children: null };
        const intl = tmp(1119).intl;
        obj4.children = intl.string(tmp(1119).t.aTABYx);
        items1[1] = closure_1_8(tmp(4754).Text, obj4);
        const obj5 = { style: tmp4.time, deadline: expiresAt };
        items1[2] = closure_1_8(CountDownDefault, obj5);
        obj3.children = items1;
        tmp23 = options(tmp(5186).Stack, obj3);
      }
      cResult[12] = expiresAt;
      cResult[13] = tmp4.time;
      cResult[14] = tmp23;
      tmp21 = tmp23;
    }
    const obj6 = { direction: "horizontal", align: "center", children: null };
    const items2 = [tmp7, tmp16];
    obj6.children = items2;
    const tmp20 = options(tmp(5186).Stack, obj6);
    cResult[9] = tmp7;
    cResult[10] = tmp16;
    cResult[11] = tmp20;
    tmp18 = tmp20;
  }
  const tmp17 = closure_1_8(Text_Text.Text, { variant: "text-md/semibold", color: "text-subtle", style: tmp4.channel, lineClamp: 1, children: tmp10 });
  cResult[6] = tmp4.channel;
  cResult[7] = tmp10;
  cResult[8] = tmp17;
  tmp16 = tmp17;
}) : ((arg0) => {
  ({ channel, expiresAt } = arg0);
  const tmp = closure_10();
  let TextIcon = utils_ChannelUtils.getSimpleChannelIconComponent(channel);
  if (TextIcon == null) {
    TextIcon = tmp2(5300).TextIcon;
  }
  const obj2 = { direction: "horizontal", align: "center", children: null };
  const items = [closure_1_8(TextIcon, { color: "icon-subtle", size: "xs" }), ];
  const obj3 = { variant: "text-md/semibold", color: "text-subtle", style: tmp.channel, lineClamp: 1, children: null };
  obj3.children = useChannelName.computeChannelName(channel, UserStore, RelationshipStore, false);
  items[1] = closure_1_8(Text_Text.Text, obj3);
  obj2.children = items;
  const children = [options(Stack_Stack.Stack, obj2), ];
  let tmp4Result = null != expiresAt;
  if (tmp4Result) {
    const obj4 = { direction: "horizontal", align: "center", children: null };
    const items2 = [tmp5(tmp2(4720).ClockIcon, { size: "xs", color: "icon-subtle" }), , ];
    const obj5 = { variant: "text-md/semibold", color: "text-subtle", children: null };
    const intl = tmp2(1119).intl;
    obj5.children = intl.string(tmp2(1119).t.aTABYx);
    items2[1] = tmp5(tmp2(4754).Text, obj5);
    const obj6 = { style: tmp.time, deadline: expiresAt };
    items2[2] = tmp5(CountDownDefault, obj6);
    obj4.children = items2;
    tmp4Result = tmp4(tmp2(5186).Stack, obj4);
  }
  children[1] = tmp4Result;
  return options(Stack_Stack.Stack, { children });
});
let closure_11 = tmp3;
ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((invite) => {
  const cResult = c.c(15);
  invite = invite.invite;
  const tmp4 = closure_10();
  if (cResult[0] !== invite.channel) {
    const tmp7 = closure_5(invite.channel);
    cResult[0] = invite.channel;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== invite.code) {
    const obj2 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
    const tmp10 = closure_1_8(tmp(4754).Text, obj2);
    cResult[2] = invite.code;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== invite) {
    const expiresAt = invite.getExpiresAt();
    cResult[4] = invite;
    cResult[5] = expiresAt;
    let tmp11 = expiresAt;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp5) {
    if (cResult[7] === tmp11) {
      let tmp13 = cResult[8];
    }
    if (cResult[9] === tmp8) {
      if (cResult[10] === tmp13) {
        let tmp15 = cResult[11];
      }
      if (cResult[12] === tmp4.flex) {
        if (cResult[13] === tmp15) {
          let tmp18 = cResult[14];
        }
        return tmp18;
      }
      const obj3 = { style: tmp4.flex, children: tmp15 };
      const tmp21 = closure_1_8(View, obj3);
      cResult[12] = tmp4.flex;
      cResult[13] = tmp15;
      cResult[14] = tmp21;
      tmp18 = tmp21;
    }
    const obj4 = { children: null };
    const items = [tmp8, tmp13];
    obj4.children = items;
    const tmp17 = options(tmp(5186).Stack, obj4);
    cResult[9] = tmp8;
    cResult[10] = tmp13;
    cResult[11] = tmp17;
    tmp15 = tmp17;
  }
  const tmp14 = closure_1_8(closure_11, { channel: tmp5, expiresAt: tmp11 });
  cResult[6] = tmp5;
  cResult[7] = tmp11;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : ((invite) => {
  invite = invite.invite;
  const items = [invite.channel];
  const obj = { style: closure_10().flex, children: null };
  const memo = noop.useMemo(() => closure_5(invite.channel), items);
  const obj2 = { children: null };
  const items1 = [closure_8(invite(4754).Text, { variant: "text-lg/bold", tabularNumbers: true, children: invite.code }), ];
  const obj3 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const tmp = closure_10();
  items1[1] = closure_8(closure_11, { channel: memo, expiresAt: invite.getExpiresAt() });
  obj2.children = items1;
  obj.children = closure_9(invite(5186).Stack, obj2);
  return closure_8(View, obj);
});
export const InstantInviteDetails = tmp3;
