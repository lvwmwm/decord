// Module ID: 12664
// Function ID: 12665
// Name: CheckpointServersStatsScreen
// Dependencies: [32, 19, 17, 12400, 5848, 21, 4792, 575, 12637, 12421, 504, 12420, 12633, 12634, 12665, 1113, 3307, 12418, 3339, 12372, 12666, 12417, 12667, 12669, 7203, 2]
// Exports: default

// Module 12664 (CheckpointServersStatsScreen)
import nativeDefault from "native" /* 575 */;
import _modDef3307 from "module_3307" /* 3307 */;
import _modDef3339 from "module_3339" /* 3339 */;
import GuildIconDefault from "GuildIcon" /* 7203 */;
import CheckpointScreen from "CheckpointScreen" /* 12417 */;
import CheckpointTextDefault from "CheckpointText" /* 12418 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12420 */;
import CheckpointHeaderButton from "CheckpointHeaderButton" /* 12421 */;
import _modDef12633 from "module_12633" /* 12633 */;
import _modDef12634 from "module_12634" /* 12634 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 12637 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 12665 */;
import CheckpointGuildStatsDefault from "CheckpointGuildStats" /* 12666 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 12667 */;
import CheckpointTruncatedTextDefault from "CheckpointTruncatedText" /* 12669 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 12400 */;
import CheckpointConstants from "CheckpointConstants" /* 5848 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const CheckpointScreenDefault = CheckpointScreen;
const useIsCheckpointWideDefault = useIsCheckpointWide;
let _require, stats;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_GUILD_CARD_BACKGROUND;
let CHECKPOINT_NAV_HEIGHT;
let CHECKPOINT_WHITE;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
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
let sum;
function ServersLayout(containerStyle) {
  let children;
  let guildsStyle;
  let header;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj3;
  let obj7;
  let obj8;
  ({ header, children, guildsStyle } = containerStyle);
  containerStyle = containerStyle.containerStyle;
  const tmp = closure_11();
  const tmp2 = useIsCheckpointWideDefault();
  const obj = CheckpointScreen;
  const checkpointScreenContentHeight = obj.useCheckpointScreenContentHeight(true);
  const tmp5 = CheckpointScreenDefault;
  if (tmp2) {
    const obj2 = { centered: true, children: authStore(metroRequire, obj3) };
    obj3 = { style: items, children: items1 };
    items = [tmp.wideContainer, ];
    const obj4 = { height: checkpointScreenContentHeight };
    items[1] = obj4;
    const obj5 = { style: tmp.wideHeader, children: header };
    items1 = [React4(metroRequire, obj5), ];
    ({ wideGuildsScroll: obj9.style, wideGuildsContent: obj9.contentContainerStyle } = tmp);
    const obj6 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, nestedScrollEnabled: true, children: React4(metroRequire, obj7) };
    obj7 = { style: guildsStyle, children };
    items1[1] = React4(hasOwnProperty, obj6);
    obj8 = obj2;
  } else {
    obj8 = { children: authStore(metroRequire, obj10) };
    obj10 = { style: containerStyle, children: items2 };
    items2 = [header, ];
    const obj19 = { style: guildsStyle, children };
    items2[1] = React4(metroRequire, obj19);
  }
  return React4(tmp5, obj8);
}
function GuildCard(children) {
  let _undefined;
  let c0;
  let guild;
  let iconFillsHeight;
  let iconStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let rank;
  let tmp11;
  let tmp3;
  ({ guild, iconFillsHeight } = children);
  ({ rank, iconStyle } = children);
  if (iconFillsHeight === undefined) {
    iconFillsHeight = false;
  }
  _require = undefined;
  children = children.children;
  const tmp = closure_11();
  [tmp3, c0] = _slicedToArray(react.useState(0), 2);
  const tmp2 = _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const sum = layout.y + layout.height;
    _undefined(sum + nativeDefault.space.PX_12);
  }, []);
  const bound = Math.max(96, tmp3);
  const obj2 = { style: tmp.guildContent, children: items };
  items = [, ];
  const obj = { style: tmp.guildCard, children: items2 };
  const obj3 = { style: tmp.guildRankRow, children: closure_9(CheckpointRankTagDefault, { rank, chamferCorner: "bottom-right" }) };
  items[0] = closure_9(closure_6, obj3);
  const obj4 = { style: tmp.guildDetails, onLayout: tmp11, children: items1 };
  tmp11 = undefined;
  if (iconFillsHeight) {
    tmp11 = callback;
  }
  items1 = [, ];
  const obj5 = { text: guild.name, guildId: guild.id, variant: "heading-lg/medium", style: tmp.guildName };
  items1[0] = closure_9(CheckpointTruncatedTextDefault, obj5);
  items1[1] = children;
  items[1] = closure_10(closure_6, obj4);
  items2 = [closure_10(closure_6, obj2), ];
  const obj6 = { guild, size: require("GuildIcon").GuildIconSizes.XXLARGE, style: items3 };
  items3 = [iconStyle, ];
  const tmp9Result = GuildIconDefault;
  if (iconFillsHeight) {
    size = { width: bound, height: bound };
    iconFillsHeight = size;
  }
  items3[1] = iconFillsHeight;
  items2[1] = closure_9(tmp9Result, obj6);
  return closure_10(closure_6, obj);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_WHITE } = CheckpointConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, globalContainer: obj3, header: obj4, heading: obj5, globalHeading: obj6, globe: { width: 75, height: 56 }, title: obj7, titleText: { flexShrink: 1 }, guilds: obj8, globalGuilds: obj9, guildCard: obj10, guildContent: obj11, guildRankRow: { flexDirection: "row" }, guildDetails: obj12, guildName: { color: CHECKPOINT_WHITE }, topGuildIcon: size, guildIcon: size1, globalGuildIcon: size2, wideContainer: obj13, wideHeader: obj14, wideGuildsScroll: { flexGrow: 0, width: "50%", alignSelf: "stretch" }, wideGuildsContent: obj15 };
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
obj13 = { flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
obj14 = { width: "50%", paddingRight: nativeDefault.space.PX_32 };
obj15 = { flexGrow: 1, justifyContent: "center", paddingTop: CHECKPOINT_NAV_HEIGHT, paddingBottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_32, paddingRight: sum + nativeDefault.space.PX_8 };
const result = 2 * CheckpointHeaderButton.CHECKPOINT_HEADER_BUTTON_SIZE;
sum = result + nativeDefault.space.PX_12;
let closure_11 = createStyles(obj);
size = size_mod;
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx");

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
  let mapped;
  let obj11;
  let obj3;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp = closure_11();
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
      let obj2 = {
        containerStyle: tmp.container,
        header: closure_10(closure_6, obj3),
        guildsStyle: tmp.guilds,
        children: guilds.map((item, index) => {
              let guild;
              let numMessagesSent;
              let numVoiceMinutes;
              ({ guild, numMessagesSent, numVoiceMinutes } = item);
              let tmp = 0 === index;
              const obj = { guild, rank: index + 1, iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon, iconFillsHeight: tmp, children: tmp };
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
              return React4(tmp3, obj, guild.id);
            })
      };
      obj3 = { style: tmp.header, children: items3 };
      const obj4 = { style: tmp.heading, children: items2 };
      const obj5 = { style: tmp.title, children: items1 };
      const obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      items1 = [closure_9(tmp2(12372).ServerIcon, obj6), ];
      const obj7 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
      const tmp18 = CheckpointTextDefault;
      const intl3 = tmp2(1113).intl;
      stringResult = intl3.string(_modDef3339.Mb5E6r);
      items1[1] = closure_9(tmp18, obj7);
      items2 = [closure_10(closure_6, obj5), ];
      const obj8 = { children: stringResult1.toLocaleUpperCase() };
      const tmp19 = CheckpointDisplayTextDefault;
      const intl4 = tmp2(1113).intl;
      stringResult1 = intl4.string(_modDef3307.F0fkrh);
      items2[1] = closure_9(tmp19, obj8);
      items3 = [closure_10(closure_6, obj4), ];
      const obj9 = { variant: "heading-lg/medium", children: intl5.string(_modDef3339.IN1DaS) };
      const tmp20 = CheckpointTextDefault;
      intl5 = tmp2(1113).intl;
      items3[1] = closure_9(tmp20, obj9);
      tmp5Result = closure_9(ServersLayout, obj2);
    }
    return tmp5Result;
  }
  const obj10 = { containerStyle: items4, header: closure_10(closure_6, obj11), guildsStyle: tmp.globalGuilds, children: mapped };
  items4 = [, ];
  ({ container: arr2[0], globalContainer: arr2[1] } = tmp);
  obj11 = { style: tmp.header, children: items6 };
  const obj12 = { style: tmp.globalHeading, children: items5 };
  const obj13 = { animatedUri: _modDef12633, staticUri: _modDef12634, style: tmp.globe };
  let tmp7 = CheckpointApngPlayerDefault;
  items5 = [closure_9(tmp7, obj13), ];
  const obj14 = { isStepHeading: true, children: stringResult2.toLocaleUpperCase() };
  const tmp8 = CheckpointDisplayTextDefault;
  const intl = tmp2(1113).intl;
  stringResult2 = intl.string(_modDef3307.F0fkrh);
  items5[1] = closure_9(tmp8, obj14);
  items6 = [closure_10(closure_6, obj12), ];
  const obj15 = { variant: "heading-lg/medium", children: intl2.string(_modDef3339.bhnqop) };
  const tmp9 = CheckpointTextDefault;
  intl2 = tmp2(1113).intl;
  items6[1] = closure_9(tmp9, obj15);
  mapped = undefined;
  const tmp5 = closure_9;
  const tmp6 = ServersLayout;
  if (globalGuilds != null) {
    mapped = globalGuilds.map((guild, index) => {
      const obj = { guild, rank: index + 1, iconStyle: globalGuildIcon.globalGuildIcon };
      return React4(GuildCard, obj, guild.id);
    });
  }
  tmp5Result = tmp5(tmp6, obj10);
};
