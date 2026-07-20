// Module ID: 14737
// Function ID: 111137
// Name: HomeDrawerDMExpandedChildren
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14737 (HomeDrawerDMExpandedChildren)
import closure_3 from "result";
import { View } from "result";
import { isMultiUserDM } from "result";
import closure_6 from "result";
import closure_7 from "result";
import closure_8 from "result";
import { NOOP } from "result";
import result from "result";
import result from "result";

function HomeDrawerDMExpandedChildren(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const items = [closure_8];
  const importDefault = arg1(dependencyMap[8]).useStateFromStores(items, () => user.getUser(channel.getRecipientId()));
  const obj = arg1(dependencyMap[8]);
  const items1 = [closure_8, closure_6];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items1, () => {
    let tmp = null;
    if (null != channel) {
      if (memo(channel.type)) {
        let channelName = channel(stateFromStores[9]).computeChannelName(channel, closure_8, closure_6);
        const obj = channel(stateFromStores[9]);
      } else {
        channelName = null;
      }
      tmp = channelName;
    }
    return tmp;
  });
  const dependencyMap = stateFromStores;
  const obj2 = arg1(dependencyMap[8]);
  const tmp2 = importDefault(dependencyMap[11])(channel, { unread: arg1(dependencyMap[10]).useBaseChannelUnreadBadgeState(channel, false).unread });
  const React = tmp2;
  const obj3 = arg1(dependencyMap[10]);
  const items2 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items2, () => channelMuteConfig.getChannelMuteConfig(channel.guild_id, channel.id));
  const View = stateFromStores1;
  const items3 = [stateFromStores1];
  const memo = React.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = {};
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
  const isMultiUserDM = memo;
  const items4 = [stateFromStores, memo];
  const items5 = [channel, tmp2, memo];
  const title = React.useMemo(() => {
    if (null != memo) {
      if (memo.isMuted) {
        if (null == memo) {
          const BellSlashIcon = channel(stateFromStores[13]).BellSlashIcon;
        }
        const BellZIcon = channel(stateFromStores[12]).BellZIcon;
      }
    }
    let obj = { style: {} };
    obj = { children: stateFromStores };
    const items = [callback(channel(stateFromStores[14]).Text, obj), callback(closure_9, { size: "xs" })];
    obj.children = items;
    return callback2(stateFromStores1, obj);
  }, items4);
  const subtitle = React.useMemo(() => {
    let tmp = null;
    if (null != tmp2) {
      const obj = { channel, message: callback, variant: "text-xs/medium", color: "text-strong", layout: channel(stateFromStores[16]).ChannelListLayoutTypes.COZY, muted: memo.isMuted };
      tmp = callback(channel(stateFromStores[15]).ChannelRowPreview, obj);
    }
    return tmp;
  }, items5);
  return callback(arg1(dependencyMap[17]).HomeDrawerSharedItem, { title, subtitle });
}
({ jsx: closure_10, jsxs: closure_11 } = result);
result = result.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const MobileHomeDrawerExperiment = arg1(dependencyMap[18]).MobileHomeDrawerExperiment;
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
