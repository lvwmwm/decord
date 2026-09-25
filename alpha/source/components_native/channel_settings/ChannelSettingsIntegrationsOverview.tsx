// Module ID: 16627
// Function ID: 16628
// Name: ChannelSettingsIntegrationsOverview
// Dependencies: [19, 2048, 2044, 1074, 21, 1484, 6584, 5994, 1115, 5912, 1177, 1397, 4829, 576, 504, 8045, 5272, 16520, 16628, 2]
// Exports: default

// Module 16627 (ChannelSettingsIntegrationsOverview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import useNavigation from "useNavigation" /* 1484 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;

require = fn;
function LinkedLobbyFormSection(channel) {
  channel = channel.channel;
  importDefault = channel(1484).useNavigation();
  const obj = channel(1484);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(6584).useGetOrFetchApplication(application_id);
  let tmp5 = null;
  if (null != getOrFetchApplication) {
    const obj3 = { title: null, hasIcons: true, children: null };
    const intl = tmp(1115).intl;
    obj3.title = intl.string(tmp(1115).t.oAvIAg);
    const obj4 = { label: getOrFetchApplication.name, icon: null, arrow: true, onPress: null };
    const obj5 = { source: null, size: null };
    ({ id: obj7.id, icon: obj7.icon } = getOrFetchApplication);
    obj5.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null });
    obj5.size = tmp(1177).AvatarSizes.REFRESH_MEDIUM_32;
    obj4.icon = closure_6(tmp(1177).Avatar, obj5);
    obj4.onPress = function onPress() {
      closure_1.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, { channel, numScreensToPop: 1 });
    };
    obj3.children = closure_6(tmp(5912).TableRow, obj4);
    tmp5 = closure_6(tmp(5994).TableRowGroup, obj3);
    const obj11 = { id: null, icon: null };
  }
  return tmp5;
}
fn(2048).GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
const obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  importDefault = useNavigation.useNavigation();
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let tmp6Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: tmp4.screenContainer, children: null };
    const obj4 = { style: null, spacing: null, children: null };
    const obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
    obj4.style = obj5;
    obj4.spacing = nativeDefault.space.PX_24;
    if (canManageWebhooks) {
      const obj6 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
      const intl = tmp(1115).intl;
      obj6.label = intl.string(tmp(1115).t.jp25Id);
      const intl2 = tmp(1115).intl;
      obj6.subLabel = intl2.string(tmp(1115).t.mKIOkI);
      obj6.icon = tmp6(tmp(16520).WebhookIcon, {});
      obj6.onPress = function onPress() {
        return closure_1.push(ChannelSettingsSections.WEBHOOKS);
      };
      const items1 = [tmp6(tmp(5912).TableRow, obj6), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
        const intl3 = tmp(1115).intl;
        obj7.label = intl3.string(tmp(1115).t.OrV60r);
        const intl4 = tmp(1115).intl;
        obj7.subLabel = intl4.string(tmp(1115).t.rQREJl);
        obj7.icon = tmp6(tmp(16628).ChannelsFollowedIcon, {});
        obj7.onPress = function onPress() {
          return closure_1.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
        };
        hasItem = tmp6(tmp(5912).TableRow, obj7);
      }
      const obj8 = { hasIcons: true, children: null };
      items1[1] = hasItem;
      obj8.children = items1;
      canManageWebhooks = tmp7(tmp(5994).TableRowGroup, obj8);
    }
    const items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj9 = { channel: stateFromStores };
      canUnlinkLobby = tmp6(LinkedLobbyFormSection, obj9);
    }
    items2[1] = canUnlinkLobby;
    obj4.children = items2;
    obj3.children = closure_7(tmp(5272).Stack, obj4);
    tmp6Result = tmp6(tmp(8045).Form, obj3);
  }
  return tmp6Result;
};
