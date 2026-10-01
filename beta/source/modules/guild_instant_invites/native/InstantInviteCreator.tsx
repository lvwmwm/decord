// Module ID: 10403
// Function ID: 10404
// Name: InstantInviteCreator
// Dependencies: [19, 17, 21, 4836, 5279, 576, 1177, 10404, 2]

// Module 10403 (InstantInviteCreator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import DetailedGuildIdentityUserRow from "DetailedGuildIdentityUserRow" /* 10404 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ identity: { flex: 1 } });
const memoResult = react.memo((arg0) => {
  let guildId;
  let items;
  let obj4;
  let user;
  ({ guildId, user } = arg0);
  let tmp2 = null;
  if (null != user) {
    const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: items };
    const Stack = Stack_Stack.Stack;
    const obj2 = { source: user.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
    const Avatar = native.Avatar;
    items = [React3(Avatar, obj2), ];
    const obj3 = { style: tmp.identity, children: React3(DetailedGuildIdentityUserRow.DetailedGuildIdentityUser, obj4) };
    obj4 = { user, guildId };
    items[1] = React3(View, obj3);
    tmp2 = hasOwnProperty(Stack, obj);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCreator.tsx");

export default memoResult;
