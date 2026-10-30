// Module ID: 18870
// Function ID: 18871
// Name: ChannelSettingsIntegrationsOverview
// Dependencies: [19, 4862, 4858, 1072, 21, 1498, 7324, 7054, 1114, 6969, 9030, 5009, 575, 504, 8169, 6022, 18760, 18871, 2]
// Exports: default

// Module 18870 (ChannelSettingsIntegrationsOverview)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1114 */;
import useNavigation from "useNavigation" /* 1498 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9030 */;
import WebhookIcon from "WebhookIcon" /* 18760 */;
import ChannelsFollowedIcon from "ChannelsFollowedIcon" /* 18871 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
function LinkedLobbyFormSection(channel) {
  let TableRow;
  let closure_1;
  let intl;
  let obj3;
  let obj4;
  channel = channel.channel;
  let obj = channel(1498);
  importDefault = obj.useNavigation();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const useGetOrFetchApplication = channel(7324).useGetOrFetchApplication;
  channel(7324);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  let tmp6 = null;
  if (null != getOrFetchApplication) {
    const obj2 = { title: intl.string(channel(1114).t.oAvIAg), hasIcons: true, children: closure_6(TableRow, obj3) };
    const TableRowGroup = tmp(7054).TableRowGroup;
    intl = tmp(1114).intl;
    obj3 = {
      label: getOrFetchApplication.name,
      icon: closure_6(TableRowApplicationIconDefault, obj4),
      arrow: true,
      onPress() {
          const obj = { channel, numScreensToPop: 1 };
          closure_1.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, obj);
        }
    };
    TableRow = tmp(6969).TableRow;
    obj4 = { application: getOrFetchApplication };
    tmp6 = closure_6(TableRowGroup, obj2);
  }
  return tmp6;
}
const set = ChannelRecord.GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
const ChannelSettingsSections = Constants.ChannelSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { screenContainer: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  let Stack;
  let canManageWebhooks;
  let canUnlinkLobby;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let obj4;
  let obj5;
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  const obj = useNavigation;
  importDefault = obj.useNavigation();
  const items = [ChannelStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let tmp6Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: tmp4.screenContainer, children: closure_7(Stack, obj4) };
    const Form = tmp(8169).Form;
    obj4 = { style: obj5, spacing: nativeDefault.space.PX_24, children: items2 };
    obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
    Stack = tmp(6022).Stack;
    if (canManageWebhooks) {
      const TableRowGroup = tmp(7054).TableRowGroup;
      const obj6 = {
        label: intl.string(intl5.t.jp25Id),
        subLabel: intl2.string(intl5.t.mKIOkI),
        icon: closure_6(WebhookIcon.WebhookIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(ChannelSettingsSections.WEBHOOKS);
            }
      };
      const TableRow = tmp(6969).TableRow;
      intl = tmp(1114).intl;
      intl2 = tmp(1114).intl;
      const items1 = [closure_6(TableRow, obj6), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj7 = {
          label: intl3.string(intl5.t.OrV60r),
          subLabel: intl4.string(intl5.t.rQREJl),
          icon: closure_6(ChannelsFollowedIcon.ChannelsFollowedIcon, {}),
          arrow: true,
          onPress() {
                  return closure_1.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
                }
        };
        const TableRow2 = tmp(6969).TableRow;
        intl3 = tmp(1114).intl;
        intl4 = tmp(1114).intl;
        hasItem = tmp6(TableRow2, obj7);
      }
      const obj8 = { hasIcons: true, children: items1 };
      items1[1] = hasItem;
      canManageWebhooks = tmp7(TableRowGroup, obj8);
    }
    items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj9 = { channel: stateFromStores };
      canUnlinkLobby = tmp6(LinkedLobbyFormSection, obj9);
    }
    items2[1] = canUnlinkLobby;
    tmp6Result = tmp6(Form, obj3);
  }
  return tmp6Result;
};
