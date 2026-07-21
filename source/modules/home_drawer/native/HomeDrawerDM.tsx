// Module ID: 14744
// Function ID: 111161
// Name: HomeDrawerDMExpandedChildren
// Dependencies: []
// Exports: default

// Module 14744 (HomeDrawerDMExpandedChildren)
function HomeDrawerDMExpandedChildren(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback2();
  const importDefault = tmp;
  const items = [closure_8];
  closure_2 = arg1(closure_2[9]).useStateFromStores(items, () => user.getUser(channel.getRecipientId()));
  const obj = arg1(closure_2[9]);
  const items1 = [closure_8, closure_6];
  const stateFromStores = arg1(closure_2[9]).useStateFromStores(items1, () => {
    let tmp = null;
    if (null != channel) {
      if (stateFromStores1(channel.type)) {
        let channelName = channel(closure_2[10]).computeChannelName(channel, closure_8, memo);
        const obj = channel(closure_2[10]);
      } else {
        channelName = null;
      }
      tmp = channelName;
    }
    return tmp;
  });
  const React = stateFromStores;
  const obj2 = arg1(closure_2[9]);
  const tmp3 = importDefault(closure_2[12])(channel, { unread: arg1(closure_2[11]).useBaseChannelUnreadBadgeState(channel, false).unread });
  const View = tmp3;
  const obj3 = arg1(closure_2[11]);
  const items2 = [closure_7];
  const stateFromStores1 = arg1(closure_2[9]).useStateFromStores(items2, () => channelMuteConfig.getChannelMuteConfig(channel.guild_id, channel.id));
  const isMultiUserDM = stateFromStores1;
  const items3 = [stateFromStores1];
  const memo = React.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = { overflow: null, flexDirection: null };
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
  closure_6 = memo;
  const items4 = [stateFromStores, memo, , ];
  ({ title: arr5[2], titleText: arr5[3] } = tmp);
  const items5 = [channel, tmp3, memo];
  const title = React.useMemo(() => {
    if (null != memo) {
      if (memo.isMuted) {
        if (null == memo) {
          const BellSlashIcon = channel(closure_2[14]).BellSlashIcon;
        }
        const BellZIcon = channel(closure_2[13]).BellZIcon;
        const tmp3 = memo;
      }
    }
    let obj = { style: tmp.title };
    obj = { keFvXM: false, address-line1: false, guildId: false, justifyContent: false, style: tmp.titleText, children: stateFromStores };
    const items = [callback(channel(closure_2[15]).Text, obj), callback(closure_9, { size: "xs" })];
    obj.children = items;
    return callback2(tmp3, obj);
  }, items4);
  const subtitle = React.useMemo(() => {
    let tmp = null;
    if (null != tmp3) {
      const obj = { channel, message: channel, variant: "text-xs/medium", color: "text-strong", layout: channel(closure_2[17]).ChannelListLayoutTypes.COZY, muted: memo.isMuted };
      tmp = callback(channel(closure_2[16]).ChannelRowPreview, obj);
    }
    return tmp;
  }, items5);
  return callback(arg1(closure_2[18]).HomeDrawerSharedItem, { title, subtitle });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isMultiUserDM = arg1(dependencyMap[2]).isMultiUserDM;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const NOOP = arg1(dependencyMap[6]).NOOP;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).createStyles({ title: { <string:3461472865>: "safety_user_sentiment_notice_dismissed_at", <string:1447977218>: "message", <string:1640807382>: null }, titleText: { flexShrink: 1 } });
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const MobileHomeDrawerExperiment = arg1(dependencyMap[19]).MobileHomeDrawerExperiment;
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
