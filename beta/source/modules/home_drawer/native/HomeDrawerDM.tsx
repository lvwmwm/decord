// Module ID: 15979
// Function ID: 15980
// Name: HomeDrawerDM
// Dependencies: [19, 17, 2049, 4479, 5017, 1372, 1085, 21, 4836, 504, 4989, 15980, 14864, 12865, 9613, 4832, 9568, 7304, 15942, 4698, 4695, 2]
// Exports: default

// Module 15979 (HomeDrawerDM)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4698 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelName from "useChannelName" /* 4989 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7304 */;
import ChannelRowPreview2 from "ChannelRowPreview" /* 9568 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 14864 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c10;
let unpackModuleId;
function HomeDrawerDMExpandedChildren(channel) {
  let closure_1;
  let closure_2;
  channel = channel.channel;
  let memo;
  const tmp = closure_12();
  importDefault = tmp;
  let obj = channel(504);
  let items = [UserStore];
  dependencyMap = obj.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj2 = channel(504);
  const items1 = [UserStore, memo];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != channel) {
      let channelName;
      if (isMultiUserDM(channel.type)) {
        const obj = useChannelName;
        channelName = obj.computeChannelName(tmp, UserStore, RelationshipStore);
      } else {
        channelName = null;
      }
      tmp2 = channelName;
    }
    return tmp2;
  });
  const obj3 = channel(15980);
  let tmp3 = useMessagePreviewsDefault(channel, { unread: obj3.useBaseChannelUnreadBadgeState(channel, false).unread });
  let closure_4 = tmp3;
  const items2 = [UserGuildSettingsStore];
  const obj4 = channel(504);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id));
  const items3 = [stateFromStores1];
  memo = stateFromStores.useMemo(function() {
    let obj;
    if (null == stateFromStores1) {
      obj = { isMuted: false, isTemporary: false };
    } else {
      let tmp2 = null == tmp.end_time;
      if (!tmp2) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date = new Date(stateFromStores1.end_time);
        tmp2 = date > new Date();
        const date1 = new Date();
      }
      obj = { isMuted: tmp2, isTemporary: null != stateFromStores1.end_time };
    }
    return obj;
  }, items3);
  const items4 = [stateFromStores, memo, , ];
  ({ title: arr5[2], titleText: arr5[3] } = tmp);
  const items5 = [channel, tmp3, memo];
  const title = stateFromStores.useMemo(() => {
    let items;
    let tmp3;
    let isMuted;
    if (memo != null) {
      isMuted = tmp.isMuted;
    }
    if (isMuted) {
      let BellSlashIcon;
      let isTemporary;
      if (memo != null) {
        isTemporary = tmp.isTemporary;
      }
      if (isTemporary) {
        BellSlashIcon = tmp5(12865).BellZIcon;
      } else {
        BellSlashIcon = tmp5(9613).BellSlashIcon;
      }
      tmp3 = BellSlashIcon;
    } else {
      tmp3 = NOOP;
    }
    const obj = { style: closure_1.title, children: items };
    items = [, ];
    const obj2 = { variant: "text-md/medium", style: closure_1.titleText, lineClamp: 1, color: "text-default", children: stateFromStores };
    items[0] = authStore(Text_Text.Text, obj2);
    items[1] = authStore(tmp3, { size: "xs" });
    return unpackModuleId(View, obj);
  }, items4);
  const subtitle = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != closure_4) {
      const obj = { channel, message: tmp, variant: "text-xs/medium", color: "text-strong", layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: memo.isMuted };
      const ChannelRowPreview = ChannelRowPreview2.ChannelRowPreview;
      tmp2 = authStore(ChannelRowPreview, obj);
    }
    return tmp2;
  }, items5);
  return closure_10(channel(15942).HomeDrawerSharedItem, { title, subtitle });
}
const View = react_native.View;
const isMultiUserDM = ChannelRecord.isMultiUserDM;
const NOOP = Constants.NOOP;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default function HomeDrawerDMExpandedChildrenWrapper(channel) {
  channel = channel.channel;
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      const obj = { channel };
      tmp2 = authStore(HomeDrawerDMExpandedChildren, obj);
    }
  }
  return tmp2;
};
