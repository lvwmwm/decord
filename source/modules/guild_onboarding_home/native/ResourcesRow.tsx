// Module ID: 15161
// Function ID: 114351
// Name: ResourcesRow
// Dependencies: []
// Exports: default

// Module 15161 (ResourcesRow)
importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
let closure_4 = arg1(dependencyMap[2]).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {} };
obj = { accessible: 141317.775, guild: 0.00000000000000000000000000000000000000000000000000000000000004133483696510626, borderRadius: importDefault(dependencyMap[5]).radii.round, httpServerLocation: "\u{1F469}\u{1F3FF}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", description: true, flexDirection: null, paddingRight: 15.1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.channelItem = obj;
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_onboarding_home/native/ResourcesRow.tsx");

export default function ResourcesRow(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback2();
  const importDefault = tmp;
  const arr = importDefault(dependencyMap[6])(guildId);
  let obj = { horizontal: true, style: tmp.container };
  const substr = arr.slice(0, 2);
  const items = [
    substr.map((children) => {
      const guildId = children;
      let obj = {
        style: tmp.channelItem,
        onPress() {
          const homeResourceChannel = arg0(closure_2[7]).selectHomeResourceChannel(arg0, arg0.channelId);
        }
      };
      obj = { children: children.title };
      obj.children = callback(guildId(closure_2[12]).Text, obj);
      return callback(guildId(closure_2[11]).PressableOpacity, obj, children.channelId);
    }),

  ];
  let tmp5 = null;
  if (tmp2) {
    obj = {
      style: tmp.channelItem,
      onPress() {
          let obj = tmp(paths[8]);
          obj = { guildId };
          obj.openLazy(guildId(paths[10])(paths[9], paths.paths), closure_4, obj);
        }
    };
    obj = {};
    const intl = arg1(dependencyMap[13]).intl;
    const obj1 = { count: arr.length - 2 };
    obj.children = intl.format(arg1(dependencyMap[13]).t.F6iMs4, obj1);
    obj.children = callback(arg1(dependencyMap[12]).Text, obj);
    tmp5 = callback(arg1(dependencyMap[11]).PressableOpacity, obj);
  }
  items[1] = tmp5;
  obj.children = items;
  return closure_6(ScrollView, obj);
};
