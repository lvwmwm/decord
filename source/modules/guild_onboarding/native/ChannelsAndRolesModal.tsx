// Module ID: 9961
// Function ID: 76947
// Name: ChannelsAndRolesScreen
// Dependencies: []
// Exports: default

// Module 9961 (ChannelsAndRolesScreen)
function ChannelsAndRolesScreen(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const defaultTab = guildId.defaultTab;
  let dependencyMap;
  let callback;
  let React;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const tmp3 = importDefault(dependencyMap[9])(stateFromStores);
  const importDefault = tmp3;
  if (null != defaultTab) {
    const tmp7 = callback(React.useState(defaultTab), 2);
    const first = tmp7[0];
    dependencyMap = first;
    callback = tmp9;
    let obj1 = arg1(dependencyMap[10]);
    obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp7[1] };
    const intl = arg1(dependencyMap[11]).intl;
    const items1 = [intl.string(arg1(dependencyMap[11]).t.F1VixV), ];
    const intl2 = arg1(dependencyMap[11]).intl;
    items1[1] = intl2.string(arg1(dependencyMap[11]).t.MWmtj8);
    obj.items = items1.map((id) => ({ id, label: id, page: null }));
    const segmentedControlState = obj1.useSegmentedControlState(obj);
    React = segmentedControlState;
    const items2 = [tmp3, first, segmentedControlState];
    const effect = React.useEffect(() => {
      let tmp = tmp3;
      if (!tmp3) {
        tmp = first !== constants.CUSTOMIZE;
      }
      if (!tmp) {
        tmp9(constants.BROWSE);
        segmentedControlState.setActiveIndex(constants.BROWSE, false);
      }
    }, items2);
    obj = { style: tmp.screen };
    let tmp17 = null;
    if (tmp3) {
      obj1 = { style: tmp.tabBar };
      const obj2 = { state: segmentedControlState };
      obj1.children = callback2(arg1(dependencyMap[12]).SegmentedControl, obj2);
      tmp17 = callback2(View, obj1);
    }
    const items3 = [tmp17, ];
    if (first === GuildOnboardingTab.CUSTOMIZE) {
      const obj3 = { setTab: tmp9, guildId };
      let tmp27 = callback2(importDefault(dependencyMap[13]), obj3);
    } else {
      const obj4 = { guildId };
      tmp27 = callback2(importDefault(dependencyMap[14]), obj4);
    }
    items3[1] = tmp27;
    obj.children = items3;
    return closure_9(View, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const GuildOnboardingTab = arg1(dependencyMap[4]).GuildOnboardingTab;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.screen = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.tabBar = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, paddingTop: importDefault(dependencyMap[7]).space.PX_16 };
let closure_10 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, paddingTop: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default function ChannelsAndRolesModal(arg0) {
  ({ guildId: closure_0, defaultTab: closure_1 } = arg0);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0));
  obj = { screenKey: "channelAndRolesModal" };
  const tmp2 = importDefault(dependencyMap[9])(stateFromStores);
  const tmp3 = closure_8;
  const intl = arg1(dependencyMap[11]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[11]).t;
  if (tmp2) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj.title = stringResult;
  obj.render = function render() {
    return callback(closure_11, { guildId: closure_0, defaultTab: closure_1 });
  };
  return tmp3(importDefault(dependencyMap[15]), obj);
};
