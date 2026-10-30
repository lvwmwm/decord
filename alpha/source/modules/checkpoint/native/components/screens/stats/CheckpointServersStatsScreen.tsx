// Module ID: 13605
// Function ID: 13606
// Name: CheckpointServersStatsScreen
// Dependencies: [19, 17, 13386, 6061, 21, 5009, 575, 504, 13585, 13592, 13593, 13594, 13606, 1114, 3059, 13587, 3091, 9738, 13607, 13608, 5619, 6951, 2]
// Exports: default

// Module 13605 (CheckpointServersStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3059 from "module_3059" /* 3059 */;
import _modDef3091 from "module_3091" /* 3091 */;
import Text_Text from "Text/Text" /* 5619 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13585 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 13592 */;
import _modDef13593 from "module_13593" /* 13593 */;
import _modDef13594 from "module_13594" /* 13594 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13606 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 13607 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 13608 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require, stats;

let CHECKPOINT_GUILD_CARD_BACKGROUND;
let CHECKPOINT_WHITE;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
function GuildCard(guild) {
  let children;
  let iconStyle;
  let items;
  let items1;
  let items2;
  let rank;
  guild = guild.guild;
  ({ rank, iconStyle, children } = guild);
  const tmp = closure_8();
  const obj2 = { style: tmp.guildContent, children: items };
  items = [, ];
  const obj = { style: tmp.guildCard, children: items2 };
  const obj3 = { style: tmp.guildRankRow, children: metroRequire(CheckpointRankTagDefault, { rank, chamferCorner: "bottom-right" }) };
  items[0] = metroRequire(View, obj3);
  const obj4 = { style: tmp.guildDetails, children: items1 };
  items1 = [, ];
  const obj5 = { variant: "heading-lg/medium", style: tmp.guildName, lineClamp: 1, ellipsizeMode: "tail", children: guild.name };
  items1[0] = metroRequire(Text_Text.Text, obj5);
  items1[1] = children;
  items[1] = metroImportDefault(View, obj4);
  items2 = [metroImportDefault(View, obj2), ];
  const obj6 = { guild, size: GuildIcon.GuildIconSizes.XXLARGE, style: iconStyle };
  const tmp2 = GuildIconDefault;
  items2[1] = metroRequire(tmp2, obj6);
  return metroImportDefault(View, obj);
}
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, globalContainer: obj3, header: obj4, heading: obj5, globalHeading: obj6, globe: { width: 75, height: 56 }, title: obj7, titleText: { flexShrink: 1 }, guilds: obj8, globalGuilds: obj9, guildCard: obj10, guildContent: obj11, guildRankRow: { flexDirection: "row" }, guildDetails: obj12, guildName: { color: CHECKPOINT_WHITE }, topGuildIcon: size, guildIcon: size1, globalGuildIcon: size2 };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "flex-start", gap: nativeDefault.space.PX_24 };
obj4 = { gap: nativeDefault.space.PX_12 };
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj8 = { gap: nativeDefault.space.PX_24 };
obj9 = { gap: nativeDefault.space.PX_16 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY, backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND };
obj11 = { flex: 1, alignSelf: "stretch", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj12 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
size = { width: 96, height: 96, borderRadius: nativeDefault.radii.none };
size1 = { width: 72, height: 72, borderRadius: nativeDefault.radii.none };
size2 = { width: 64, height: 64, borderRadius: nativeDefault.radii.none };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx");

export default function CheckpointServersStatsScreen() {
  let globalGuildIcon;
  let globalGuilds;
  let guilds;
  let intl2;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let mapped;
  let obj3;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp = closure_8();
  _require = tmp;
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  let obj = require("get initialized");
  const items = [CheckpointStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let guildsByMembers;
    stats = stats.stats;
    let tmp2;
    const tmp = stats;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        tmp2 = guilds.guilds;
      }
    }
    const globalStats = tmp.globalStats;
    const obj = { guilds: tmp2, globalGuilds: guildsByMembers };
    guildsByMembers = undefined;
    if (globalStats != null) {
      const guilds2 = globalStats.guilds;
      if (guilds2 != null) {
        guildsByMembers = guilds2.guildsByMembers;
      }
    }
    return obj;
  });
  ({ guilds, globalGuilds } = stateFromStoresObject);
  if (null != guilds) {
    let tmp5Result;
    if (0 !== guilds.length) {
      let obj2 = { children: closure_7(View, obj3) };
      const obj6 = { style: tmp.title, children: items1 };
      items1 = [, ];
      obj3 = { style: tmp.container, children: items4 };
      const obj4 = { style: tmp.header, children: items3 };
      const obj5 = { style: tmp.heading, children: items2 };
      const obj7 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      const tmp16 = CheckpointScreenDefault;
      items1[0] = closure_6(tmp2(9738).ServerIcon, obj7);
      const obj8 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
      const tmp20 = CheckpointTextDefault;
      const intl3 = tmp2(1114).intl;
      stringResult = intl3.string(_modDef3091.Mb5E6r);
      items1[1] = closure_6(tmp20, obj8);
      items2 = [closure_7(View, obj6), ];
      const obj9 = { children: stringResult1.toLocaleUpperCase() };
      const tmp21 = CheckpointDisplayTextDefault;
      const intl4 = tmp2(1114).intl;
      stringResult1 = intl4.string(_modDef3059.F0fkrh);
      items2[1] = closure_6(tmp21, obj9);
      items3 = [closure_7(View, obj5), ];
      const obj10 = { variant: "heading-lg/medium", children: intl5.string(_modDef3091.IN1DaS) };
      const tmp22 = CheckpointTextDefault;
      intl5 = tmp2(1114).intl;
      items3[1] = closure_6(tmp22, obj10);
      items4 = [closure_7(View, obj4), ];
      const obj11 = {
        style: tmp.guilds,
        children: guilds.map((item, index) => {
              let guild;
              let numMessagesSent;
              let numVoiceMinutes;
              ({ guild, numMessagesSent, numVoiceMinutes } = item);
              let tmp = 0 === index;
              const obj = { guild, rank: index + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, children: tmp };
              const tmp3 = GuildCard;
              if (tmp) {
                const tmp7 = CheckpointGuildStatsDefault;
                if (numMessagesSent == null) {
                  numMessagesSent = 0;
                }
                const obj2 = { numMessagesSent, numVoiceMinutes };
                if (numVoiceMinutes == null) {
                  numVoiceMinutes = 0;
                }
                tmp = tmp2(tmp7, obj2);
              }
              return metroRequire(tmp3, obj, guild.id);
            })
      };
      items4[1] = closure_6(View, obj11);
      tmp5Result = closure_6(tmp16, obj2);
    }
    return tmp5Result;
  }
  const obj12 = { style: items5, children: items8 };
  items5 = [, ];
  ({ container: arr2[0], globalContainer: arr2[1] } = tmp);
  const obj13 = { style: tmp.header, children: items7 };
  const obj14 = { style: tmp.globalHeading, children: items6 };
  let tmp7 = closure_7;
  const tmp6 = CheckpointScreenDefault;
  const obj15 = { animatedUri: _modDef13593, staticUri: _modDef13594, style: tmp.globe };
  const tmp9 = CheckpointApngPlayerDefault;
  items6 = [closure_6(tmp9, obj15), ];
  const obj16 = { isStepHeading: true, children: stringResult2.toLocaleUpperCase() };
  const tmp10 = CheckpointDisplayTextDefault;
  const intl = tmp2(1114).intl;
  stringResult2 = intl.string(_modDef3059.F0fkrh);
  items6[1] = closure_6(tmp10, obj16);
  items7 = [closure_7(View, obj14), ];
  const obj17 = { variant: "heading-lg/medium", children: intl2.string(_modDef3091.bhnqop) };
  const tmp11 = CheckpointTextDefault;
  intl2 = tmp2(1114).intl;
  items7[1] = closure_6(tmp11, obj17);
  items8 = [closure_7(View, obj13), ];
  const obj18 = { style: tmp.globalGuilds, children: mapped };
  mapped = undefined;
  if (globalGuilds != null) {
    mapped = globalGuilds.map((guild, index) => {
      const obj = { guild, rank: index + 1, iconStyle: globalGuildIcon.globalGuildIcon };
      return metroRequire(GuildCard, obj, guild.id);
    });
  }
  const obj19 = { children: tmp7(View, obj12) };
  items8[1] = closure_6(View, obj18);
  tmp5Result = tmp5(tmp6, obj19);
};
