// Module ID: 13178
// Function ID: 13179
// Name: GuildDirectoryRow
// Dependencies: [5, 32, 19, 17, 4821, 4843, 1087, 21, 4969, 587, 504, 7218, 7447, 6828, 9061, 1211, 7317, 1417, 1128, 6903, 6881, 4835, 5232, 13156, 5242, 2]

// Module 13178 (GuildDirectoryRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import GuildIconDefault from "GuildIcon" /* 6881 */;
import GuildDirectoryMoreMenuDefault from "GuildDirectoryMoreMenu" /* 13156 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildStore from "GuildStore" /* 4843 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import size_mod from "module_2" /* 2 */;

let c4, c5, dependencyMap, importDefault, ref;

let c10;
let closure_12;
let obj2;
let size;
let size1;
let unpackModuleId;
const View = react_native.View;
const JoinGuildSources = Constants.JoinGuildSources;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", padding: 16, marginVertical: 6, marginHorizontal: 8 }, guildInfoContainer: { flexDirection: "column", flex: 1 }, guildIcon: obj2, guildWrapper: { flex: 1 }, guildDescription: { flexShrink: 1, marginBottom: 8 }, memberInfo: { flexDirection: "row", alignItems: "center", marginBottom: 8 }, dotOnline: size, dotOffline: size1, headerContainer: { flexDirection: "row", marginBottom: 4, justifyContent: "space-between" }, titleContainer: { flexDirection: "row", flex: 1 }, flex: { flex: 1, height: 4 } };
obj2 = { borderRadius: nativeDefault.radii.sm, marginRight: 16 };
createStyles = createStyles.createStyles;
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
size1 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let closure_13 = createStyles(obj);
const memoResult = react.memo(function GuildDirectoryRow(entry) {
  let approximateMemberCount;
  let approximatePresenceCount;
  let closure_1;
  let description;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj15;
  let obj19;
  let obj6;
  let result;
  let str2;
  entry = entry.entry;
  dependencyMap = undefined;
  let obj = function _handleJoinGuild() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_2;
      let obj4;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          let tmp;
          let c0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = tmp4;
              tmp = undefined;
              const sum = ref.current + 1;
              ref.current = sum;
              c0 = sum;
              closure_2_3(true);
              c3 = 2;
              const tmp80 = closure_2_1;
              if (tmp80) {
                const obj7 = closure_0(ref[12]);
                obj7.transitionToGuild(entry.guildId);
                c3 = 0;
                if (sum === ref.current) {
                  closure_2_3(false);
                }
                c5 = 3;
                const obj6 = { value: undefined, done: true };
                return obj6;
              } else {
                const obj8 = { source: constants.DIRECTORY_ENTRY };
                c4 = 3;
                c5 = 1;
                const obj9 = { value: obj4.joinGuild(entry.guildId, obj8), done: false };
                obj4 = tmp(ref[13]);
                return obj9;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            const tmp46 = ref;
            if (c0 === closure_129_2.current) {
              closure_129_3(false);
            }
            throw tmp46;
          } else {
            if (2 === c4) {
              c3 = 1;
              const obj3 = closure_0(ref[16]);
              const result = obj3.ignoreJoinGuildRefused(ref);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              if (c0 === closure_129_2.current) {
                closure_129_3(false);
              }
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              tmp = channel.getChannel(closure_129_0.channelId);
              if (null == tmp) {
                c3 = 0;
                if (c0 === closure_129_2.current) {
                  closure_129_3(false);
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else {
                let guildId;
                const setHubProgressActionComplete = closure_0(ref[14]).setHubProgressActionComplete;
                obj = tmp;
                const tmp9 = closure_0(ref[14]);
                if (tmp != null) {
                  guildId = obj.getGuildId();
                }
                const result1 = setHubProgressActionComplete(guildId, closure_0(ref[15]).HubProgressStep.JOIN_GUILD);
                c3 = 1;
              }
            }
            c3 = 0;
            if (c0 === closure_129_2.current) {
              closure_129_3(false);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp64) {
          ref = tmp64;
          if (0 === c3) {
            c5 = 3;
            throw tmp64;
          } else if (1 === tmp66) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_13();
  ({ description, approximateMemberCount, approximatePresenceCount } = entry);
  const tmp3 = dependencyMap;
  const name = entry.name;
  obj = entry(504);
  const items = [GuildStore];
  const tmp4 = null != obj.useStateFromStores(items, () => GuildStore.getGuild(entry.guildId));
  importDefault = tmp4;
  dependencyMap = react.useRef(0);
  let obj2 = entry(7218);
  const items1 = [entry.guildId];
  const tmp5 = obj(obj2.useRecyclingState(false, items1, () => {
    ref.current = ref.current + 1;
  }), 2);
  let closure_3 = tmp5[1];
  const first = tmp5[0];
  let obj3 = AvatarUtilsDefault;
  let obj4 = { id: entry.guildId, icon: entry.icon, size: 40 };
  const guildIconURL = obj3.getGuildIconURL(obj4);
  const intl = tmp2(1128).intl;
  let stringResult = intl.string(tmp2(1128).t.VJlc0S);
  if (tmp4) {
    const intl2 = tmp2(1128).intl;
    stringResult = intl2.string(tmp2(1128).t.cqWE2Z);
  }
  let obj5 = { style: tmp.container, children: tmp11(tmp12, obj6) };
  obj6 = { style: tmp.guildWrapper, children: items8 };
  let obj7 = { style: tmp.headerContainer, children: items7 };
  let obj8 = { style: tmp.titleContainer, children: items2 };
  const Card = tmp2(6903).Card;
  let obj9 = { style: tmp.guildIcon, icon: guildIconURL, guild: result, selected: false };
  result = undefined;
  const tmp7Result = GuildIconDefault;
  if (null == guildIconURL) {
    const tmp2Result = entry(4835);
    result = tmp2Result.fromGuildDirectoryEntry(entry);
  }
  items2 = [closure_10(tmp7Result, obj9), ];
  let obj10 = { style: tmp.guildInfoContainer, children: items3 };
  items3 = [closure_10(tmp2(5232).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name }), ];
  let tmp11Result = null;
  const obj11 = { style: tmp.memberInfo, children: items5 };
  if (null != approximatePresenceCount) {
    const obj12 = { children: items4 };
    const obj13 = { style: tmp.dotOnline };
    items4 = [closure_10(tmp12, obj13), ];
    const obj14 = { variant: "text-xs/medium", color: "text-default", children: intl3.format(entry(1128).t["LC+S+m"], obj15) };
    const Text = tmp2(5232).Text;
    intl3 = tmp2(1128).intl;
    obj15 = { membersOnline: approximatePresenceCount };
    items4[1] = closure_10(Text, obj14);
    tmp11Result = tmp11(closure_11, obj12);
  }
  items5 = [tmp11Result, ];
  let tmp11Result2 = null;
  if (null != approximateMemberCount) {
    const obj16 = { children: items6 };
    const obj17 = { style: tmp.dotOffline };
    items6 = [closure_10(tmp12, obj17), ];
    const obj18 = { variant: "text-xs/medium", color: "text-default", children: intl4.format(entry(1128).t.zRl6XR, obj19) };
    const Text2 = tmp2(5232).Text;
    intl4 = tmp2(1128).intl;
    obj19 = { count: approximateMemberCount };
    items6[1] = closure_10(Text2, obj18);
    tmp11Result2 = tmp11(closure_11, obj16);
  }
  items5[1] = tmp11Result2;
  items3[1] = closure_12(View, obj11);
  items2[1] = closure_12(View, obj10);
  items7 = [tmp11(tmp12, obj8), ];
  const obj20 = { children: closure_10(GuildDirectoryMoreMenuDefault, { entry }) };
  items7[1] = closure_10(View, obj20);
  items8 = [tmp11(tmp12, obj7), , , ];
  let tmp10Result = null != description;
  if (tmp10Result) {
    tmp10Result = "" !== description;
  }
  if (tmp10Result) {
    const obj21 = { lineClamp: 3, style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: description };
    tmp10Result = tmp10(tmp2(5232).Text, obj21);
  }
  items8[1] = tmp10Result;
  const obj22 = { style: tmp.flex };
  items8[2] = closure_10(View, obj22);
  const obj23 = {
    loading: first,
    onPress: function handleJoinGuild() {
      return obj(...arguments);
    },
    variant: str2,
    text: stringResult
  };
  str2 = "active";
  const Button = tmp2(5242).Button;
  if (tmp4) {
    str2 = "secondary";
  }
  items8[3] = closure_10(Button, obj23);
  return closure_10(Card, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryRow.tsx");

export default memoResult;
