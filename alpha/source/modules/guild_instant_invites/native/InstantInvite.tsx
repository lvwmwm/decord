// Module ID: 10927
// Function ID: 10928
// Name: InstantInvite
// Dependencies: [19, 17, 4993, 1385, 1072, 21, 5140, 575, 504, 7391, 10928, 10929, 6091, 1113, 10930, 1099, 10932, 7040, 6159, 7395, 5751, 9996, 8098, 10936, 10937, 10939, 10942, 10944, 2]
// Exports: LinkedChannelInvite

// Module 10927 (InstantInvite)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import ChannelRecord from "ChannelRecord" /* 4993 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6091 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 10930 */;
import InstantInviteIconsDefault from "InstantInviteIcons" /* 10932 */;
import InstantInviteCreatorDefault from "InstantInviteCreator" /* 10937 */;
import InviteRolesDisplayDefault from "InviteRolesDisplay" /* 10942 */;
import InstantInviteUsesLabelDefault from "InstantInviteUsesLabel" /* 10944 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
let closure_5 = ChannelRecord.createChannelRecordFromInvite;
const Routes = Constants.Routes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { creatorWrapper: obj2, gameWrapper: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }, gameText: { flex: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_8, flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(function InstantInvite(invite) {
  let items2;
  let items4;
  let maxUses;
  let obj10;
  let uses;
  invite = invite.invite;
  const onInviteRevoked = invite.onInviteRevoked;
  const guild = invite.guild;
  let id;
  ({ uses, maxUses } = invite);
  const tmp = closure_10();
  if (guild != null) {
    id = guild.id;
  }
  const items = [invite];
  const memo = react.useMemo(() => closure_5(invite.channel), items);
  let obj = invite(10939);
  const items1 = [invite.roles];
  const inviteActions = obj.useInviteActions({ invite, onInviteRevoked });
  const memo1 = react.useMemo(() => {
    const roles = invite.roles;
    return roles.map((id) => id.id);
  }, items1);
  let tmp9Result = memo1.length > 0 && null != id;
  const Card = tmp4(7040).Card;
  const obj2 = { direction: "horizontal", justify: "space-between", children: items2 };
  const Stack = tmp4(6159).Stack;
  items2 = [, ];
  const obj3 = { variant: "body-lg/semibold", tabularNumbers: true, children: invite.code };
  items2[0] = closure_8(invite(5751).Text, obj3);
  const obj4 = {
    items: inviteActions,
    children(ref) {
      let intl;
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { size: "sm", variant: "secondary", icon: InstantInviteIconsDefault.more, accessibilityLabel: intl.string(invite(dependencyMap[13]).t.DEoVWZ), ref };
      const IconButton = invite(dependencyMap[22]).IconButton;
      intl = invite(dependencyMap[13]).intl;
      const merged1 = Object.assign(merged);
      return closure_1_8(IconButton, obj);
    }
  };
  items2[1] = closure_8(invite(9996).ContextMenu, obj4);
  const items3 = [closure_9(Stack, obj2), , , ];
  const obj5 = { channel: memo, expiresAt: invite.getExpiresAt() };
  const InstantInviteDetails = tmp4(10936).InstantInviteDetails;
  items3[1] = closure_8(InstantInviteDetails, obj5);
  if (tmp9Result) {
    const obj6 = { roleIds: memo1, guildId: id };
    tmp9Result = tmp9(InviteRolesDisplayDefault, obj6);
  }
  const obj7 = { children: items3 };
  items3[2] = tmp9Result;
  const obj8 = { direction: "horizontal", align: "flex-end", children: items4 };
  const obj9 = { style: tmp.creatorWrapper, children: closure_8(InstantInviteCreatorDefault, obj10) };
  const Stack2 = tmp4(6159).Stack;
  obj10 = { user: invite.inviter, guildId: id };
  items4 = [closure_8(View, obj9), closure_8(InstantInviteUsesLabelDefault, { uses, maxUses })];
  items3[3] = closure_9(Stack2, obj8);
  return closure_9(Card, obj7);
});
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInvite.tsx");

export default memoResult;
export function LinkedChannelInvite(channel) {
  let closure_2;
  let items3;
  let items4;
  let items5;
  let name;
  let obj10;
  let obj9;
  channel = channel.channel;
  let canUnlinkLobbyChannel;
  dependencyMap = undefined;
  let action;
  let tmp = closure_10();
  let obj = channel(504);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const linkedLobby = channel.linkedLobby;
    let linked_by;
    const getUser = UserStore.getUser;
    if (linkedLobby != null) {
      linked_by = linkedLobby.linked_by;
    }
    return getUser(linked_by);
  });
  let linkedLobby = channel.linkedLobby;
  let application_id;
  const useGetOrFetchApplication = channel(7391).useGetOrFetchApplication;
  const tmp5 = channel(7391);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  const tmp2Result = channel(10928);
  canUnlinkLobbyChannel = tmp2Result.useCanUnlinkLobbyChannel(channel);
  let str;
  const id = channel.id;
  const tmp10 = canUnlinkLobbyChannel(10929);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp10Result = tmp10(id, str);
  dependencyMap = tmp10Result;
  const items1 = [canUnlinkLobbyChannel, tmp10Result];
  action = action.useCallback(() => {
    let intl;
    let intl2;
    const tmp = canUnlinkLobbyChannel;
    if (tmp) {
      closure_2();
    } else {
      const obj = { title: intl.string(intl3.t.JmUENg), body: intl2.string(intl3.t.SrvsML) };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      show(obj);
    }
  }, items1);
  const items2 = [, , ];
  ({ guild_id: arr3[0], id: arr3[1] } = channel);
  items2[2] = action;
  const memo = action.useMemo(() => {
    let intl;
    let intl2;
    let obj = {
      label: intl.string(intl3.t.aW2YlJ),
      IconComponent: ArrowSmallRightIcon.ArrowSmallRightIcon,
      action() {
        const obj = channel(closure_2[15]);
        obj.transitionTo(Routes.CHANNEL(closure_1_0.guild_id, closure_1_0.id));
      }
    };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { label: intl2.string(intl3.t.JmUENg), iconSource: InstantInviteIconsDefault.revoke, variant: "destructive", action };
    intl2 = intl3.intl;
    items[1] = obj2;
    return items;
  }, items2);
  const Card = tmp2(7040).Card;
  let obj2 = { style: tmp.gameWrapper, children: items3 };
  const Stack = tmp2(6159).Stack;
  const obj3 = { game: getOrFetchApplication, size: channel(7395).GameIconSizes.SIZE_24 };
  const tmp9Result = canUnlinkLobbyChannel(7395);
  items3 = [closure_8(tmp9Result, obj3), ];
  const obj4 = { ellipsizeMode: "tail", lineClamp: 1, variant: "body-lg/semibold", style: tmp.gameText, children: name };
  name = undefined;
  const Text = tmp2(5751).Text;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  const obj5 = { children: items5 };
  const obj6 = { direction: "horizontal", justify: "space-between", children: items4 };
  items3[1] = closure_8(Text, obj4);
  items4 = [closure_9(View, obj2), ];
  const obj7 = {
    items: memo,
    children(ref) {
      let intl;
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { size: "sm", variant: "secondary", icon: canUnlinkLobbyChannel(closure_2[16]).more, accessibilityLabel: intl.string(channel(closure_2[13]).t.DEoVWZ), ref };
      const IconButton = channel(closure_2[22]).IconButton;
      intl = channel(closure_2[13]).intl;
      const merged1 = Object.assign(merged);
      return closure_1_8(IconButton, obj);
    }
  };
  items4[1] = closure_8(channel(9996).ContextMenu, obj7);
  items5 = [closure_9(Stack, obj6), closure_8(tmp2(10936).InstantInviteDetails, { channel }), ];
  const obj8 = { direction: "horizontal", align: "flex-end", children: closure_8(View, obj9) };
  obj9 = { style: tmp.creatorWrapper, children: closure_8(canUnlinkLobbyChannel(10937), obj10) };
  const Stack2 = tmp2(6159).Stack;
  obj10 = { user: stateFromStores, guildId: channel.guild_id };
  items5[2] = closure_8(Stack2, obj8);
  return closure_9(Card, obj5);
}
