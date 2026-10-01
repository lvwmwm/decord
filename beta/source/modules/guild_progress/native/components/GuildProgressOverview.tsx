// Module ID: 13520
// Function ID: 13521
// Name: GuildProgressOverview
// Dependencies: [19, 17, 1074, 21, 4836, 576, 11967, 11970, 6615, 1115, 5435, 1177, 4832, 9396, 13521, 2]
// Exports: default

// Module 13520 (GuildProgressOverview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 6615 */;
import AssetRegistryDefault from "AssetRegistry" /* 9396 */;
import GuildProgressUtils from "GuildProgressUtils" /* 11967 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 11970 */;
import GuildProgressBarDefault from "GuildProgressBar" /* 13521 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
class GuildProgressOverviewView {
  constructor(arg0) {
    let items;
    let items1;
    let items2;
    let items3;
    let onLongPress;
    let onPress;
    let percentComplete;
    let subtitle;
    let title;
    let titleStyle;
    ({ titleStyle, onPress, onLongPress, title, subtitle, percentComplete } = arg0);
    const tmp = closure_7();
    const obj = { accessibilityRole: "button", activeOpacity: 0.4, style: tmp.container, onPress, onLongPress, children: items3 };
    const obj2 = { style: tmp.horizontal, children: items2 };
    const obj3 = { children: items1 };
    const PressableOpacity = Pressables.PressableOpacity;
    const obj4 = { style: items, children: title };
    items = [tmp.title, titleStyle];
    items1 = [hasOwnProperty(native.LegacyText, obj4), ];
    const obj5 = { style: tmp.step, variant: "text-xs/medium", color: "text-default", children: subtitle };
    items1[1] = hasOwnProperty(Text_Text.Text, obj5);
    items2 = [metroRequire(View, obj3), ];
    const obj6 = { source: AssetRegistryDefault };
    const Icon = native.Icon;
    items2[1] = hasOwnProperty(Icon, obj6);
    items3 = [metroRequire(View, obj2), ];
    const obj7 = { style: tmp.progressBar, percent: percentComplete };
    items3[1] = hasOwnProperty(GuildProgressBarDefault, obj7);
    return metroRequire(PressableOpacity, obj);
  }
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { padding: 16 }, horizontal: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, title: obj2, step: { lineHeight: 16 }, progressBar: { marginTop: 8 } };
obj2 = { fontSize: 16, lineHeight: 20, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginBottom: 2 };
const metroImportDefault = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressOverview.tsx");

export default function GuildProgressOverview(guild) {
  let percentComplete;
  let stringResult;
  let subtitle;
  guild = guild.guild;
  let flag = guild.longPressDisabled;
  const titleStyle = guild.titleStyle;
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
  const effect = react.useEffect(() => {
    const tmp = completed;
    if (tmp) {
      const obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(guild.id);
    }
  }, items);
  let obj2 = {
    titleStyle,
    onPress() {
      const tmp = completed;
      if (!tmp) {
        const obj = GuildProgressActionCreatorsDefault;
        const progress = obj.createProgress(guild.id);
      }
      const obj2 = GuildProgressUtils;
      obj2.openActionSheet(guild);
    },
    onLongPress() {
      let id;
      let intl;
      let items;
      const tmp = flag;
      if (!tmp) {
        let obj = { key: "GuildProgressOverviewLongPress", options: items, hasIcons: false };
        const obj2 = {
          label: intl.string(intl2.t.PbNxaW),
          onPress() {
              const obj = flag(completed[7]);
              obj.dismissProgress(id.id);
            }
        };
        const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
        showSimpleActionSheet2;
        intl = intl2.intl;
        items = [obj2];
        const result = showSimpleActionSheet(obj);
      }
    },
    title: stringResult,
    subtitle,
    percentComplete
  };
  const tmp4 = GuildProgressOverviewView;
  let intl = guild(completed[9]).intl;
  const string = intl.string;
  const t = guild(completed[9]).t;
  const tmp3 = closure_5;
  if (flag2) {
    stringResult = string(t.NzxWjb);
  } else {
    stringResult = string(t.o3HK3d);
  }
  return tmp3(tmp4, obj2);
};
export { GuildProgressOverviewView };
