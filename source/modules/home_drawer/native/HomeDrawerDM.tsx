// Module ID: 14871
// Function ID: 113406
// Name: HomeDrawerDMExpandedChildren
// Dependencies: [31, 27, 1352, 3767, 4325, 1849, 482, 33, 4130, 566, 4320, 14872, 14206, 14845, 10202, 4126, 10255, 3808, 14835, 3987, 3984, 2]
// Exports: default

// Module 14871 (HomeDrawerDMExpandedChildren)
import result from "result";
import { View } from "get ActivityIndicator";
import { isMultiUserDM } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { NOOP } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function HomeDrawerDMExpandedChildren(channel) {
  channel = channel.channel;
  let tmp = callback2();
  const importDefault = tmp;
  let items = [closure_8];
  const dependencyMap = channel(566).useStateFromStores(items, () => outer1_8.getUser(channel.getRecipientId()));
  let obj = channel(566);
  const items1 = [closure_8, memo];
  const stateFromStores = channel(566).useStateFromStores(items1, () => {
    let tmp = null;
    if (null != channel) {
      if (stateFromStores1(channel.type)) {
        let channelName = channel(4320).computeChannelName(channel, outer1_8, memo);
        const obj = channel(4320);
      } else {
        channelName = null;
      }
      tmp = channelName;
    }
    return tmp;
  });
  const obj2 = channel(566);
  const tmp3 = importDefault(14206)(channel, { unread: channel(14872).useBaseChannelUnreadBadgeState(channel, false).unread });
  const View = tmp3;
  const obj3 = channel(14872);
  const items2 = [closure_7];
  const stateFromStores1 = channel(566).useStateFromStores(items2, () => outer1_7.getChannelMuteConfig(channel.guild_id, channel.id));
  const items3 = [stateFromStores1];
  memo = stateFromStores.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = { isMuted: false, isTemporary: false };
    } else {
      obj = {};
      let tmp2 = null == stateFromStores1.end_time;
      if (!tmp2) {
        const _Date = Date;
        const date = new Date(stateFromStores1.end_time);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = date > date1;
      }
      obj.isMuted = tmp2;
      obj.isTemporary = null != stateFromStores1.end_time;
    }
    return obj;
  }, items3);
  const items4 = [stateFromStores, memo, , ];
  ({ title: arr5[2], titleText: arr5[3] } = tmp);
  const items5 = [channel, tmp3, memo];
  const title = stateFromStores.useMemo(() => {
    if (null != memo) {
      if (memo.isMuted) {
        if (null == memo) {
          const BellSlashIcon = channel(10202).BellSlashIcon;
        }
        const BellZIcon = channel(14845).BellZIcon;
      }
    }
    let obj = { style: tmp.title };
    obj = { variant: "text-md/medium", style: tmp.titleText, lineClamp: 1, color: "text-default", children: stateFromStores };
    const items = [outer1_10(channel(4126).Text, obj), outer1_10(outer1_9, { size: "xs" })];
    obj.children = items;
    return outer1_11(closure_4, obj);
  }, items4);
  const subtitle = stateFromStores.useMemo(() => {
    let tmp = null;
    if (null != closure_4) {
      const obj = { channel, message: closure_4, variant: "text-xs/medium", color: "text-strong", layout: channel(3808).ChannelListLayoutTypes.COZY, muted: memo.isMuted };
      tmp = outer1_10(channel(10255).ChannelRowPreview, obj);
    }
    return tmp;
  }, items5);
  return callback(channel(14835).HomeDrawerSharedItem, { title, subtitle });
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
const result = require("_callSuper").fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const MobileHomeDrawerExperiment = require(3987) /* MobileHomeDrawerExperiment */.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      const obj = { channel: channel.channel };
      tmp2 = callback(HomeDrawerDMExpandedChildren, obj);
    }
  }
  return tmp2;
};
