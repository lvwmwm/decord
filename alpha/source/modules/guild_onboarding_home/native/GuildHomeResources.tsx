// Module ID: 18591
// Function ID: 18592
// Name: GuildHomeResources
// Dependencies: [19, 17, 4858, 4939, 6056, 4941, 1072, 21, 5009, 575, 504, 8919, 13722, 18592, 7629, 13783, 1410, 6974, 5619, 5749, 5712, 18585, 1100, 1114, 18593, 5629, 2]
// Exports: default

// Module 18591 (GuildHomeResources)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1100 */;
import FastImageDefault from "FastImage" /* 5712 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7629 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 13783 */;
import useResourceChannelsDefault from "useResourceChannels" /* 18585 */;
import AssetRegistryDefault from "AssetRegistry" /* 18593 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import MessageStore from "MessageStore" /* 6056 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let obj2;
let unpackModuleId;
function ResourceChannelRow(channelId) {
  let closure_2;
  let description;
  let getEmbedColor;
  let icon;
  let id;
  let items4;
  let items5;
  let obj11;
  let obj13;
  let obj16;
  let tmp10Result3;
  let tmp10Result4;
  channelId = channelId.channelId;
  ({ icon, description } = channelId);
  dependencyMap = undefined;
  const title = channelId.title;
  let tmp = closure_13();
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores));
  const items2 = [MessageStore];
  const obj3 = channelId(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => MessageStore.getMessages(channelId));
  const firstResult = stateFromStores2.first();
  const obj5 = channelId(8919);
  const forumPostMediaProperties = obj5.useForumPostMediaProperties(firstResult, false);
  let length;
  const obj6 = channelId(8919);
  const firstMediaIsEmbed = obj6.useFirstMediaIsEmbed(firstResult, false);
  if (forumPostMediaProperties != null) {
    length = forumPostMediaProperties.length;
  }
  let first = null;
  if (length > 0) {
    first = forumPostMediaProperties[0];
  }
  const tmp2Result = channelId(13722);
  let flag = tmp2Result.useSharedMediaProps({ channel: stateFromStores, media: first }).shouldObscure;
  const tmp11 = stateFromStores(18592)(firstResult);
  const tmp12 = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
  dependencyMap = tmp12;
  const items3 = [channelId, tmp12];
  const effect = react.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      const obj2 = { channelId, after: channelId, limit: 5 };
      const obj = MessageActionCreatorsDefault;
      const messages = obj.fetchMessages(obj2);
    }
  }, items3);
  [][0] = stateFromStores;
  if (null != stateFromStores) {
    if (stateFromStores1) {
      const obj4 = { channelId: stateFromStores.id, icon };
      const tmp10Result = stateFromStores(1410);
      const resourceChannelIconURL = tmp10Result.getResourceChannelIconURL(obj4);
      const obj7 = { onPress: tmp14, style: tmp.channelContainer, children: items5 };
      const obj8 = { style: tmp.textContent, children: items4 };
      const PressableOpacity = tmp2(6974).PressableOpacity;
      const obj9 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: title };
      items4 = [closure_11(tmp2(5619).Text, obj9), , ];
      let tmp19Result = tmp16 && null != tmp11;
      const tmp18 = View;
      if (tmp19Result) {
        const obj10 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail", children: tmp10Result3.parse(tmp11, true, obj11) };
        const Text = tmp2(5619).Text;
        obj11 = { guildId: null, channelId: null };
        ({ guild_id: obj15.guildId, id: obj15.channelId } = stateFromStores);
        tmp10Result3 = stateFromStores(5749);
        tmp19Result = tmp19(Text, obj10);
      }
      items4[1] = tmp19Result;
      let tmp19Result4 = !tmp16;
      if (tmp19Result4) {
        const obj12 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail", children: tmp10Result4.parse(description, true, obj13) };
        const Text2 = tmp2(5619).Text;
        obj13 = { guildId: null, channelId: null };
        ({ guild_id: obj18.guildId, id: obj18.channelId } = stateFromStores);
        tmp10Result4 = stateFromStores(5749);
        tmp19Result4 = tmp19(Text2, obj12);
      }
      items4[2] = tmp19Result4;
      items5 = [closure_12(tmp18, obj8), , ];
      let tmp19Result5 = null;
      if (null != icon) {
        tmp19Result5 = null;
        if (null != resourceChannelIconURL) {
          const obj14 = { source: obj16, style: tmp.icon };
          obj16 = { uri: resourceChannelIconURL };
          tmp19Result5 = tmp19(tmp10(5712), obj14);
        }
      }
      items5[1] = tmp19Result5;
      let tmp19Result6 = null;
      if (null == resourceChannelIconURL) {
        tmp19Result6 = null;
        if (null != firstResult) {
          let blocked;
          if (firstResult != null) {
            blocked = firstResult.blocked;
          }
          tmp19Result6 = null;
          if (!blocked) {
            tmp19Result6 = null;
            if (null != first) {
              const obj17 = { channel: stateFromStores, media: first, isEmbed: firstMediaIsEmbed, embedLeftBorderColor: getEmbedColor(firstResult, flag), firstMessageId: id, containerStyle: tmp.thumbnail };
              const ForumPostMediaThumbnail = tmp2(13722).ForumPostMediaThumbnail;
              getEmbedColor = tmp2(8919).getEmbedColor;
              channelId(8919);
              if (flag == null) {
                flag = false;
              }
              id = undefined;
              if (firstResult != null) {
                id = firstResult.id;
              }
              tmp19Result6 = tmp19(ForumPostMediaThumbnail, obj17);
            }
          }
        }
      }
      items5[2] = tmp19Result6;
      return closure_12(PressableOpacity, obj7);
    }
  }
  return null;
}
const View = react_native.View;
({ Permissions: c9, Routes: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { container: { paddingHorizontal: 12, display: "flex", flexDirection: "column", alignItems: "center" }, emptyStateContainer: { padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }, channelContainer: obj2, messageContent: { marginTop: 8 }, textContent: { flex: 1 }, thumbnail: { marginLeft: 8 }, emptyStateImage: { marginTop: 12, marginBottom: 20 }, icon: { width: 72, height: 72 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "flex-start" };
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildHomeResources.tsx");

export default function GuildHomeResources(guildId) {
  let intl;
  let intl2;
  let items;
  let tmp6;
  guildId = guildId.guildId;
  let tmp = closure_13();
  const arr = useResourceChannelsDefault(guildId);
  if (0 === arr.length) {
    const obj2 = { style: tmp.emptyStateContainer, children: items };
    const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(guildId(1114).t.owvC9U) };
    const Text = guildId(5619).Text;
    intl = guildId(1114).intl;
    items = [closure_11(Text, obj3), , ];
    const obj4 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
    const tmp2Result = FastImageDefault;
    items[1] = closure_11(tmp2Result, obj4);
    const obj5 = {
      onPress() {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
          const tmp = guildId;
          if (null != defaultChannel) {
            const obj = router_utils;
            obj.transitionTo(authStore.CHANNEL(tmp, defaultChannel.id));
          }
        },
      text: intl2.string(guildId(1114).t["3iCBUn"])
    };
    const Button = guildId(5629).Button;
    intl2 = guildId(1114).intl;
    items[2] = closure_11(Button, obj5);
    tmp6 = closure_12(View, obj2);
  } else {
    let obj = {
      style: tmp.container,
      children: arr.map((channelId) => {
          const obj = { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description };
          return closure_1_11(ResourceChannelRow, obj, "resource-" + channelId.channelId);
        })
    };
    tmp6 = closure_11(View, obj);
  }
  return tmp6;
};
