// Module ID: 14714
// Function ID: 111006
// Dependencies: []

// Module 14714
let closure_3 = importDefault(dependencyMap[1]);
const ME = arg1(dependencyMap[2]).ME;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = {
  onPress() {
    importDefault(dependencyMap[4])(ME);
  }
};
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  let obj = arg1(dependencyMap[6]);
  const tmp = importDefault(dependencyMap[5])("GuildsBarMessages");
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => {
    const guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === closure_4;
    }
    return tmp2;
  });
  const obj2 = arg1(dependencyMap[7]);
  ({ badge, cutouts } = importDefault(dependencyMap[8])({ mentionCount: 0 }));
  const colors = importDefault(dependencyMap[9]).colors;
  obj = { selected: stateFromStores };
  let tmp8 = !tmp;
  const tmp4 = importDefault(dependencyMap[8])({ mentionCount: 0 });
  const tmp5 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const tmp6 = jsx;
  if (tmp8) {
    tmp8 = !stateFromStores;
  }
  obj.circle = tmp8;
  obj.unread = false;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.cutouts = cutouts;
  obj.config = closure_6;
  obj.overState = undefined;
  const intl = arg1(dependencyMap[10]).intl;
  obj.label = intl.string(arg1(dependencyMap[10]).t.YUU0RF);
  obj.externalChildren = badge;
  obj.expandedChildren = jsx(importDefault(dependencyMap[11]), {});
  obj.children = jsx(arg1(dependencyMap[12]).ChatIcon, { color: tmp5 });
  return tmp6(importDefault(dependencyMap[6]), obj);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
