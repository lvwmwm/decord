// Module ID: 11227
// Function ID: 11228
// Name: AppInteractionInfoActionSheet
// Dependencies: [19, 17, 1386, 2067, 1372, 21, 4836, 1613, 11228, 8505, 504, 7626, 5896, 4832, 1115, 5435, 7624, 1177, 6571, 2]
// Exports: default

// Module 11227 (AppInteractionInfoActionSheet)
import react_native from "react-native" /* 17 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import UserActionCreators from "UserActionCreators" /* 7626 */;
import ContextMenuSubmenuActionSheetHeaderDefault from "ContextMenuSubmenuActionSheetHeader" /* 11228 */;
import react_mod from "react" /* 19 */;
import UserRecord from "UserRecord" /* 1386 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c9;
let metroImportAll;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ itemContainer: { flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, alignItems: "center" }, itemLabel: { flexDirection: "column", alignItems: "flex-start", paddingLeft: 12 } });
const result = size.fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default function AppInteractionInfoActionSheet(message) {
  let closure_2;
  let closure_3;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items11;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj12;
  let obj17;
  let obj20;
  let onBack;
  let tmp24;
  message = message.message;
  ({ guildId, onBack } = message);
  dependencyMap = undefined;
  react = undefined;
  let stateFromStores;
  let id;
  let tmp = closure_10();
  let obj = react;
  const items = [onBack];
  const bottom = onBack(1613)().bottom;
  const interactionMetadata = message.interactionMetadata;
  let tmp5;
  const memo = react.useMemo(() => {
    const obj = { onBack };
    return metroImportAll(ContextMenuSubmenuActionSheetHeaderDefault, obj);
  }, items);
  const tmp2 = onBack;
  if (interactionMetadata != null) {
    tmp5 = interactionMetadata.authorizing_integration_owners[message(undefined, 8505).ApplicationIntegrationType.USER_INSTALL];
  }
  dependencyMap = tmp5;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp7;
  if (interactionMetadata2 != null) {
    tmp7 = interactionMetadata2.authorizing_integration_owners[message(undefined, 8505).ApplicationIntegrationType.GUILD_INSTALL];
  }
  react = tmp7;
  const interactionMetadata3 = message.interactionMetadata;
  id = undefined;
  if (interactionMetadata3 != null) {
    id = interactionMetadata3.user.id;
  }
  const items1 = [UserStore];
  const obj2 = message(504);
  stateFromStores = obj2.useStateFromStores(items1, () => UserStore.getUser(closure_2));
  const items2 = [id];
  const obj3 = message(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(closure_3));
  const items3 = [UserStore];
  const obj4 = message(504);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => UserStore.getUser(id));
  id = stateFromStores2;
  const items4 = [stateFromStores, tmp5];
  const effect = obj.useEffect(() => {
    const tmp = null == stateFromStores && null != closure_2;
    if (tmp) {
      const obj = UserActionCreators;
      const user = obj.getUser(closure_2);
    }
  }, items4);
  let tmp15 = stateFromStores2;
  if (null == stateFromStores2) {
    const interactionMetadata4 = message.interactionMetadata;
    let user;
    const tmp16 = stateFromStores;
    if (interactionMetadata4 != null) {
      user = interactionMetadata4.user;
    }
    const self = this;
    const self2 = this;
    const tmp162 = new tmp16(user);
    id = tmp162;
    tmp15 = tmp162;
  }
  if (null != stateFromStores1) {
    const obj5 = { style: tmp.itemContainer, children: items5 };
    const obj6 = { guild: stateFromStores1, size: message(5896).GuildIconSizes.SMALL_32 };
    const tmp2Result = tmp2(5896);
    items5 = [closure_8(tmp2Result, obj6), ];
    const obj7 = { style: tmp.itemLabel, children: items6 };
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    items6 = [closure_8(message(4832).Text, obj8), ];
    const obj9 = { variant: "text-xs/medium", color: "text-subtle", children: intl2.format(message(1115).t.ShLXXB, obj10) };
    const Text2 = tmp10(4832).Text;
    intl2 = tmp10(1115).intl;
    obj10 = { application: message.author.username };
    items6[1] = closure_8(Text2, obj9);
    items5[1] = closure_9(id, obj7);
    tmp24 = closure_9(id, obj5);
  } else {
    tmp24 = null;
    if (null != stateFromStores) {
      const obj11 = {
        onPress() {
              const obj = { userId: stateFromStores.id, channelId: message.channel_id };
              return showUserProfileActionSheetDefault(obj);
            },
        children: closure_9(id, obj12)
      };
      obj12 = { style: tmp.itemContainer, children: items7 };
      const PressableOpacity = tmp10(5435).PressableOpacity;
      const obj13 = { user: stateFromStores, size: message(1177).AvatarSizes.REFRESH_MEDIUM_32, guildId };
      const Avatar = tmp10(1177).Avatar;
      items7 = [closure_8(Avatar, obj13), ];
      const obj14 = { style: tmp.itemLabel, children: items8 };
      const obj15 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.username };
      items8 = [closure_8(message(4832).Text, obj15), ];
      const obj16 = { variant: "text-xs/medium", color: "text-subtle", children: intl.format(message(1115).t.ShLXXB, obj17) };
      const Text = tmp10(4832).Text;
      intl = tmp10(1115).intl;
      obj17 = { application: message.author.username };
      items8[1] = closure_8(Text, obj16);
      items7[1] = closure_9(id, obj14);
      tmp24 = closure_8(PressableOpacity, obj11);
    }
  }
  const obj18 = { header: memo, bodyStyles: { paddingBottom: bottom }, children: items9 };
  items9 = [tmp24, ];
  let tmp30 = null;
  BottomSheet = tmp10(6571).BottomSheet;
  if (null != tmp15) {
    const obj19 = {
      onPress() {
          const obj = { userId: id.id, channelId: message.channel_id };
          return showUserProfileActionSheetDefault(obj);
        },
      children: closure_9(id, obj20)
    };
    obj20 = { style: tmp.itemContainer, children: items10 };
    const PressableOpacity2 = tmp10(5435).PressableOpacity;
    const obj21 = { user: tmp15, size: message(1177).AvatarSizes.REFRESH_MEDIUM_32, guildId };
    const Avatar2 = tmp10(1177).Avatar;
    items10 = [closure_8(Avatar2, obj21), ];
    const obj22 = { style: tmp.itemLabel, children: items11 };
    const obj23 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp15.username };
    items11 = [closure_8(message(4832).Text, obj23), ];
    const obj24 = { variant: "text-xs/medium", color: "text-subtle", children: intl3.string(message(1115).t["04gxNg"]) };
    const Text3 = tmp10(4832).Text;
    intl3 = tmp10(1115).intl;
    items11[1] = closure_8(Text3, obj24);
    items10[1] = closure_9(id, obj22);
    tmp30 = closure_8(PressableOpacity2, obj19);
  }
  items9[1] = tmp30;
  return closure_9(BottomSheet, obj18);
};
