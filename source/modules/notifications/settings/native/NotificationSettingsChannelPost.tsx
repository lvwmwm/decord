// Module ID: 10288
// Function ID: 79428
// Name: NotificationSettingsChannelPost
// Dependencies: []
// Exports: NotificationSettingsChannelPost

// Module 10288 (NotificationSettingsChannelPost)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannelPost.tsx");

export const NotificationSettingsChannelPost = function NotificationSettingsChannelPost(channel) {
  let muted;
  let newForumThreadsCreated;
  const arg1 = channel;
  ({ guild_id: closure_1, id: closure_2 } = channel.channel);
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ muted: closure_4.isChannelMuted(closure_1, closure_2), guildMuted: closure_4.isMuted(closure_1), newForumThreadsCreated: closure_4.getNewForumThreadsCreated(arg0.channel) }));
  ({ muted, newForumThreadsCreated } = stateFromStoresObject);
  const View = newForumThreadsCreated;
  obj = { style: channel.style };
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.bK11jO);
  obj.hasIcons = false;
  const obj1 = {};
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[6]).t.Rkgjph);
  obj1.checked = newForumThreadsCreated;
  if (!muted) {
    muted = stateFromStoresObject.guildMuted;
  }
  obj1.disabled = muted;
  obj1.onPress = function onPress() {
    const result = callback(closure_2[8]).setForumThreadsCreated(arg0.channel, !newForumThreadsCreated);
  };
  obj.children = jsx(arg1(dependencyMap[7]).TableCheckboxRow, obj1);
  obj.children = jsx(arg1(dependencyMap[5]).TableRowGroup, obj);
  return <View {...obj} />;
};
