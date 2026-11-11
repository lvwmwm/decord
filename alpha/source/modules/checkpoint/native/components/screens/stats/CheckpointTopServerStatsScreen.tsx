// Module ID: 14397
// Function ID: 14398
// Name: CheckpointTopServerStatsScreen
// Dependencies: [17, 14150, 6314, 21, 5243, 575, 504, 6684, 1113, 3269, 14163, 14395, 7654, 5866, 14394, 10876, 14164, 14387, 14386, 14388, 2]
// Exports: default

// Module 14397 (CheckpointTopServerStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef3269 from "module_3269" /* 3269 */;
import Text_Text from "Text/Text" /* 5866 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6684 */;
import GuildIcon from "GuildIcon" /* 7654 */;
import ServerIcon from "ServerIcon" /* 10876 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14163 */;
import CheckpointTextDefault from "CheckpointText" /* 14164 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14386 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14387 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14388 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 14394 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 14395 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
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
let size;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, spotlightContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center" }, spotlight: { alignItems: "flex-start" }, card: obj3, guildIcon: size, guildDetails: obj4, guildName: { color: CHECKPOINT_WHITE }, copy: { flexShrink: 1 }, title: obj5, titleText: { flexShrink: 1 }, number: obj6 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
size = { width: 192, height: 192, borderRadius: nativeDefault.radii.none };
obj4 = { width: 192, gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj6 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
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
  let tmp13Result;
  let tmp2Result2;
  const tmp = closure_8();
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
  const intl = tmp2(1113).intl;
  let formatToPlainStringResult;
  const stringResult = intl.string(_modDef3269["M+a+t1"]);
  if (null != checkpointTopPercent) {
    const intl2 = tmp2(1113).intl;
    const obj2 = { numDays: roundResult, percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(tmp9(3269).BRQODX, obj2);
  }
  const obj4 = { style: tmp.spotlightContainer, children: tmp13Result };
  tmp13Result = null != stateFromStores;
  const obj3 = { style: tmp.container, children: items4 };
  const tmp9Result = CheckpointScreenDefault;
  if (tmp13Result) {
    const obj5 = { style: tmp.spotlight, children: items1 };
    items1 = [metroRequire(CheckpointRankTagDefault, { rank: 1 }), ];
    const obj6 = { style: tmp.card, children: items2 };
    const obj7 = { guild: stateFromStores.guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: tmp.guildIcon };
    const tmp9Result5 = GuildIconDefault;
    items2 = [metroRequire(tmp9Result5, obj7), ];
    const obj8 = { style: tmp.guildDetails, children: items3 };
    const obj9 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores.guild.name };
    items3 = [metroRequire(Text_Text.Text, obj9), ];
    let num2 = stateFromStores.numVoiceMinutes;
    const tmp9Result6 = CheckpointGuildStatsDefault;
    if (num2 == null) {
      num2 = 0;
    }
    const obj10 = { numVoiceMinutes: num2, numMessagesSent: num3 };
    num3 = stateFromStores.numMessagesSent;
    if (num3 == null) {
      num3 = 0;
    }
    items3[1] = metroRequire(tmp9Result6, obj10);
    items2[1] = metroImportDefault(View, obj8);
    items1[1] = metroImportDefault(View, obj6);
    tmp13Result = tmp13(tmp14, obj5);
  }
  items4 = [metroRequire(View, obj4), ];
  const obj12 = { style: tmp.title, children: items5 };
  items5 = [, ];
  const obj11 = { style: tmp.copy, children: items6 };
  const obj13 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items5[0] = metroRequire(ServerIcon.ServerIcon, obj13);
  const obj14 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp9Result7 = CheckpointTextDefault;
  items5[1] = metroRequire(tmp9Result7, obj14);
  items6 = [metroImportDefault(View, obj12), , ];
  const obj15 = { accessible: true, accessibilityLabel: tmp2Result2.formatCheckpointStatAccessibilityLabel("topServerDays", roundResult), style: tmp.number, children: metroRequire(CheckpointCountUpStatNumberDefault, { end: roundResult }) };
  tmp2Result2 = CheckpointNumberUtils;
  items6[1] = metroRequire(View, obj15);
  const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult };
  const tmp9Result8 = CheckpointTextDefault;
  if (null != checkpointTopPercent) {
    const intl4 = tmp2(1113).intl;
    const obj17 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult = intl4.format(tmp9(3269).sIDTV1, obj17);
  } else {
    const intl3 = tmp2(1113).intl;
    const obj18 = { numDays: roundResult };
    formatResult = intl3.format(tmp9(3269).nLCUQ4, obj18);
  }
  const obj19 = { children: metroImportDefault(View, obj3) };
  items6[2] = metroRequire(tmp9Result8, obj16);
  items4[1] = metroImportDefault(View, obj11);
  return metroRequire(tmp9Result, obj19);
};
