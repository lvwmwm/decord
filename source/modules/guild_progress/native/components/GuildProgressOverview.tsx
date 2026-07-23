// Module ID: 12982
// Function ID: 100489
// Name: GuildProgressOverviewView
// Dependencies: [31, 27, 653, 33, 4130, 689, 11507, 11510, 5497, 1212, 4660, 1273, 4126, 10681, 12983, 2]
// Exports: default

// Module 12982 (GuildProgressOverviewView)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
class GuildProgressOverviewView {
  constructor(arg0) {
    ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = global);
    tmp = c7();
    obj = { accessibilityRole: "button", activeOpacity: 0.4 };
    obj.style = tmp.container;
    obj.onPress = onPress;
    obj.onLongPress = onLongPress;
    obj = { style: tmp.horizontal };
    obj1 = {};
    items = [, ];
    items[0] = tmp.title;
    items[1] = titleStyle;
    items1 = [, ];
    items1[0] = jsx(require("Button").LegacyText, { style: items, children: title });
    obj2 = { style: null, variant: "text-xs/medium", color: "text-default" };
    obj2.style = tmp.step;
    obj2.children = subtitle;
    items1[1] = jsx(require("Text").Text, obj2);
    obj1.children = items1;
    items2 = [, ];
    items2[0] = jsxs(View, obj1);
    obj3 = {};
    obj3.source = require("registerAsset");
    items2[1] = jsx(require("Button").Icon, obj3);
    obj.children = items2;
    items3 = [, ];
    items3[0] = jsxs(View, obj);
    obj4 = { style: tmp.progressBar, percent: percentComplete };
    items3[1] = jsx(require("GuildProgressBar"), obj4);
    obj.children = items3;
    return jsxs(require("PressableBase").PressableOpacity, obj);
  }
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 }, horizontal: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } };
_createForOfIteratorHelperLoose = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, marginBottom: 2 };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.step = { lineHeight: 16 };
_createForOfIteratorHelperLoose.progressBar = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("ME").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressOverview.tsx");

export default function GuildProgressOverview(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  let flag = guild.longPressDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.resume;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let completed;
  let obj = guild(completed[6]);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  completed = guildProgressStep.completed;
  let items = [completed, guild.id];
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
        obj = { key: "GuildProgressOverviewLongPress", options: null, hasIcons: false };
        obj = {};
        const intl = guild(completed[9]).intl;
        obj.label = intl.string(guild(completed[9]).t.PbNxaW);
        obj.onPress = function onPress() {
          flag(completed[7]).dismissProgress(outer1_0.id);
        };
        const items = [obj];
        obj.options = items;
        const result = obj.showSimpleActionSheet(obj);
      }
    }
  };
  let intl = guild(completed[9]).intl;
  const string = intl.string;
  const t = guild(completed[9]).t;
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
