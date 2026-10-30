// Module ID: 18359
// Function ID: 18360
// Name: HomeDrawerDM
// Dependencies: [19, 17, 4862, 4951, 6769, 1384, 1083, 21, 5009, 504, 5647, 18360, 17240, 11153, 10973, 5619, 11020, 5687, 18326, 5199, 5196, 2]
// Exports: default

// Module 18359 (HomeDrawerDM)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1083 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5199 */;
import Text_Text from "Text/Text" /* 5619 */;
import useChannelName from "useChannelName" /* 5647 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 5687 */;
import ChannelRowPreview2 from "ChannelRowPreview" /* 11020 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 17240 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  const obj3 = channel(18360);
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
        BellSlashIcon = tmp5(11153).BellZIcon;
      } else {
        BellSlashIcon = tmp5(10973).BellSlashIcon;
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
  return closure_10(channel(18326).HomeDrawerSharedItem, { title, subtitle });
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
