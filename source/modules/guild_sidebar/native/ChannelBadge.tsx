// Module ID: 14925
// Function ID: 112365
// Name: ChannelBadge
// Dependencies: []
// Exports: default

// Module 14925 (ChannelBadge)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default function ChannelBadge(arg0) {
  let isMentionLowImportance;
  let isNewChannel;
  let mentionCount;
  let muted;
  let postsWithUnreadsCount;
  ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
  ({ isMentionLowImportance, isNewChannel } = arg0);
  const tmp = callback();
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (null != mentionCount) {
    if (mentionCount > 0) {
      obj = { style: tmp.channelInfoContainer };
      obj = { mentionsCount: mentionCount, isMentionLowImportance };
      obj.children = jsx(importDefault(dependencyMap[6]), obj);
      let tmp3 = <View {...obj} />;
    }
    return tmp3;
  }
  if (isNewChannel) {
    const obj1 = { style: tmp.channelInfoContainer, children: jsx(importDefault(dependencyMap[7]), {}) };
    tmp3 = <View {...obj1} />;
  } else {
    tmp3 = null;
    if (null != muted) {
      tmp3 = null;
      if (!muted) {
        tmp3 = null;
        if (null != postsWithUnreadsCount) {
          tmp3 = null;
          if (postsWithUnreadsCount > 0) {
            const obj2 = { style: tmp.channelInfoContainer };
            let obj3 = {};
            obj3 = arg1(dependencyMap[9]);
            obj3.children = obj3.humanizeValue(postsWithUnreadsCount, stateFromStores);
            obj2.children = jsx(arg1(dependencyMap[8]).Text, obj3);
            tmp3 = <View {...obj2} />;
          }
        }
      }
    }
  }
};
