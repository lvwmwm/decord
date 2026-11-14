// Module ID: 14516
// Function ID: 14517
// Name: CheckpointTopServerStatsScreen
// Dependencies: [17, 14253, 6377, 21, 5306, 575, 14485, 504, 6747, 1113, 3317, 14270, 14514, 7720, 5929, 14513, 10939, 14271, 14506, 14505, 14507, 2]
// Exports: default

// Module 14516 (CheckpointTopServerStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef3317 from "module_3317" /* 3317 */;
import Text_Text from "Text/Text" /* 5929 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import GuildIcon from "GuildIcon" /* 7720 */;
import ServerIcon from "ServerIcon" /* 10939 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 14485 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14505 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14506 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14507 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 14513 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 14514 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const useIsCheckpointWideDefault = useIsCheckpointWide;
let stats;

let CHECKPOINT_GUILD_CARD_BACKGROUND;
let CHECKPOINT_WHITE;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, spotlightContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center" }, spotlight: { alignItems: "flex-start" }, card: obj3, guildIcon: size, guildDetails: obj4, guildName: { color: CHECKPOINT_WHITE }, copy: { flexShrink: 1 }, title: obj5, titleText: { flexShrink: 1 }, number: obj6, wideContainer: obj7, wideSpotlightContainer: obj8, wideCopy: obj9 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
size = { width: 192, height: 192, borderRadius: nativeDefault.radii.none };
obj4 = { width: 192, gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj7 = { flexGrow: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
obj8 = { width: "50%", alignItems: "center", paddingRight: nativeDefault.space.PX_32 };
obj9 = { width: "50%", paddingLeft: nativeDefault.space.PX_32 };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointTopServerStatsScreen.tsx");

export default function CheckpointTopServerStatsScreen() {
  let formatResult;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let num3;
  let obj4;
  let tmp14Result;
  let tmp5Result2;
  const tmp = closure_8();
  const tmp4 = useIsCheckpointWideDefault();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    stats = stats.stats;
    let first;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        first = guilds.guilds[0];
      }
    }
    return first;
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.numDaysInteracted;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.numDaysInteractedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp5(1113).intl;
  let formatToPlainStringResult;
  const stringResult = intl.string(_modDef3317["M+a+t1"]);
  if (null != checkpointTopPercent) {
    const intl2 = tmp5(1113).intl;
    const obj2 = { numDays: roundResult, percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(3317).BRQODX, obj2);
  }
  const obj3 = { centered: tmp4, children: metroImportDefault(View, obj4) };
  const obj5 = { style: tmp4 ? tmp.wideSpotlightContainer : tmp.spotlightContainer, children: tmp14Result };
  tmp14Result = null != stateFromStores;
  obj4 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: items4 };
  const tmp2Result = CheckpointScreenDefault;
  if (tmp14Result) {
    const obj6 = { style: tmp.spotlight, children: items1 };
    items1 = [metroRequire(CheckpointRankTagDefault, { rank: 1 }), ];
    const obj7 = { style: tmp.card, children: items2 };
    const obj8 = { guild: stateFromStores.guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: tmp.guildIcon };
    const tmp2Result5 = GuildIconDefault;
    items2 = [metroRequire(tmp2Result5, obj8), ];
    const obj10 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores.guild.name };
    const obj9 = { style: tmp.guildDetails, children: items3 };
    items3 = [metroRequire(Text_Text.Text, obj10), ];
    let num2 = stateFromStores.numVoiceMinutes;
    const tmp2Result6 = CheckpointGuildStatsDefault;
    if (num2 == null) {
      num2 = 0;
    }
    const obj11 = { numVoiceMinutes: num2, numMessagesSent: num3 };
    num3 = stateFromStores.numMessagesSent;
    if (num3 == null) {
      num3 = 0;
    }
    items3[1] = metroRequire(tmp2Result6, obj11);
    items2[1] = metroImportDefault(View, obj9);
    items1[1] = metroImportDefault(View, obj7);
    tmp14Result = tmp14(tmp15, obj6);
  }
  items4 = [metroRequire(View, obj5), ];
  const obj13 = { style: tmp.title, children: items5 };
  items5 = [, ];
  const obj12 = { style: tmp4 ? tmp.wideCopy : tmp.copy, children: items6 };
  const obj14 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items5[0] = metroRequire(ServerIcon.ServerIcon, obj14);
  const obj15 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2Result7 = CheckpointTextDefault;
  items5[1] = metroRequire(tmp2Result7, obj15);
  items6 = [metroImportDefault(View, obj13), , ];
  const obj16 = { accessible: true, accessibilityLabel: tmp5Result2.formatCheckpointStatAccessibilityLabel("topServerDays", roundResult), style: tmp.number, children: metroRequire(CheckpointCountUpStatNumberDefault, { end: roundResult }) };
  tmp5Result2 = CheckpointNumberUtils;
  items6[1] = metroRequire(View, obj16);
  const obj17 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult };
  const tmp2Result8 = CheckpointTextDefault;
  if (null != checkpointTopPercent) {
    const intl4 = tmp5(1113).intl;
    const obj18 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult = intl4.format(tmp2(3317).sIDTV1, obj18);
  } else {
    const intl3 = tmp5(1113).intl;
    const obj19 = { numDays: roundResult };
    formatResult = intl3.format(tmp2(3317).nLCUQ4, obj19);
  }
  items6[2] = metroRequire(tmp2Result8, obj17);
  items4[1] = metroImportDefault(View, obj12);
  return metroRequire(tmp2Result, obj3);
};
