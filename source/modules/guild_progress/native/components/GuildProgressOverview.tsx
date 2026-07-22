// Module ID: 12868
// Function ID: 98333
// Name: GuildProgressOverviewView
// Dependencies: []
// Exports: default

// Module 12868 (GuildProgressOverviewView)
class GuildProgressOverviewView {
  constructor(arg0) {
    ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = global);
    tmp = closure_7();
    obj = { shineStyles: false, getExpoSdkVersion: false };
    obj.style = tmp.container;
    obj.onPress = onPress;
    obj.onLongPress = onLongPress;
    obj = { style: tmp.horizontal };
    obj1 = {};
    items = [, ];
    items[0] = tmp.title;
    items[1] = titleStyle;
    items1 = [, ];
    items1[0] = jsx(arg1(dependencyMap[11]).LegacyText, { style: items, children: title });
    obj2 = { "Null": "useCallback", "Null": "marginBottom", alignItems: "createStyles" };
    obj2.style = tmp.step;
    obj2.children = subtitle;
    items1[1] = jsx(arg1(dependencyMap[12]).Text, obj2);
    obj1.children = items1;
    items2 = [, ];
    items2[0] = jsxs(View, obj1);
    obj3 = {};
    obj3.source = importDefault(dependencyMap[13]);
    items2[1] = jsx(arg1(dependencyMap[11]).Icon, obj3);
    obj.children = items2;
    items3 = [, ];
    items3[0] = jsxs(View, obj);
    obj4 = { style: tmp.progressBar, percent: percentComplete };
    items3[1] = jsx(importDefault(dependencyMap[14]), obj4);
    obj.children = items3;
    return jsxs(arg1(dependencyMap[10]).PressableOpacity, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { padding: 16 }, horizontal: { "Null": "<string:3435973836>", "Null": "<string:1903247380>", "Null": "r" } };
obj = { 9223372036854775807: -769, 0: 255, 0: 1262555392, 0: 1912602980, -9223372036854775808: 24, fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.title = obj;
obj.step = { lineHeight: 16 };
obj.progressBar = { marginTop: 8 };
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_progress/native/components/GuildProgressOverview.tsx");

export default function GuildProgressOverview(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  const arg1 = guild;
  let flag = guild.longPressDisabled;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let flag2 = guild.resume;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let dependencyMap;
  let obj = arg1(dependencyMap[6]);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  dependencyMap = completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = React.useEffect(() => {
    if (completed) {
      const result = flag(completed[7]).markCompletedProgressSeen(guild.id);
      const obj = flag(completed[7]);
    }
  }, items);
  obj = {
    titleStyle: guild.titleStyle,
    onPress() {
      if (!completed) {
        const progress = flag(completed[7]).createProgress(guild.id);
        const obj = flag(completed[7]);
      }
      guild(completed[6]).openActionSheet(guild);
    },
    onLongPress() {
      if (!flag) {
        let obj = guild(completed[8]);
        obj = {};
        obj = {};
        const intl = guild(completed[9]).intl;
        obj.label = intl.string(guild(completed[9]).t.PbNxaW);
        obj.onPress = function onPress() {
          callback(closure_2[7]).dismissProgress(id.id);
        };
        const items = [obj];
        obj.options = items;
        const result = obj.showSimpleActionSheet(obj);
      }
    }
  };
  const intl = arg1(dependencyMap[9]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[9]).t;
  if (flag2) {
    let stringResult = string(t.NzxWjb);
  } else {
    stringResult = string(t.o3HK3d);
  }
  obj.title = stringResult;
  obj.subtitle = subtitle;
  obj.percentComplete = percentComplete;
  return closure_5(GuildProgressOverviewView, obj);
};
export { GuildProgressOverviewView };
