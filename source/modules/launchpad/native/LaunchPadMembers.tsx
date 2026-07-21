// Module ID: 15549
// Function ID: 118644
// Dependencies: []

// Module 15549
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_7 = arg1(dependencyMap[5]).createStyles({ wrapper: { minHeight: 16 }, listStyle: { flex: 0 }, emptyWrapper: { padding: 20 }, emptyText: { textAlign: "center" } });
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function LaunchPadMembers() {
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5, closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    let tmp2;
    if (null != currentlySelectedChannelId) {
      tmp2 = currentlySelectedChannelId;
    }
    const channel = channel.getChannel(tmp2);
    if (null != tmp2) {
      if (null != channel) {
        if (channel.isPrivate()) {
          let obj = { channelId: tmp2, type: "private" };
          return obj;
        } else {
          obj = { channelId: tmp2, guildId: channel.guild_id };
          if (channel.isThread()) {
            obj.type = "thread";
            let tmp3 = obj;
          } else {
            obj.type = "guild";
            tmp3 = obj;
          }
          return tmp3;
        }
      }
    }
    return { channelId: undefined, type: "none" };
  });
  if ("private" === stateFromStoresObject.type) {
    obj = { style: tmp.wrapper };
    obj = { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 };
    obj.children = jsx(importDefault(dependencyMap[7]), obj, stateFromStoresObject.channelId);
    let tmp7 = <View {...obj} />;
  } else if ("thread" === stateFromStoresObject.type) {
    const obj1 = { style: tmp.wrapper };
    const obj2 = {};
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
    obj2.listStyleOverride = tmp.listStyle;
    obj2.disableBottomSafeZone = true;
    obj2.insetEnd = 20;
    obj1.children = jsx(importDefault(dependencyMap[8]), obj2, stateFromStoresObject.channelId);
    tmp7 = <View {...obj1} />;
  } else if ("guild" === stateFromStoresObject.type) {
    const obj3 = { style: tmp.wrapper };
    const obj4 = {};
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = stateFromStoresObject);
    obj4.listStyleOverride = tmp.listStyle;
    obj4.disableBottomSafeZone = true;
    obj4.insetEnd = 20;
    obj3.children = jsx(importDefault(dependencyMap[9]), obj4, stateFromStoresObject.channelId);
    tmp7 = <View {...obj3} />;
  } else {
    const obj5 = { style: tmp.emptyWrapper };
    const obj6 = { style: tmp.emptyText, variant: "text-md/semibold" };
    const intl = arg1(dependencyMap[11]).intl;
    obj6.children = intl.string(arg1(dependencyMap[11]).t.+7wtJq);
    obj5.children = jsx(arg1(dependencyMap[10]).Text, obj6);
    tmp7 = <View {...obj5} />;
  }
  return tmp7;
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default memoResult;
