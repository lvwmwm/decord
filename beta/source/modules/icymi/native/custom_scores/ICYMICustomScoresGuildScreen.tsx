// Module ID: 16096
// Function ID: 16097
// Name: ICYMICustomScoresGuildScreen
// Dependencies: [32, 19, 17, 6945, 2045, 2067, 5017, 7783, 21, 4836, 576, 504, 4989, 7798, 1115, 4800, 16097, 1981, 5335, 5917, 1177, 9603, 4832, 6948, 1613, 16098, 10615, 8179, 2]
// Exports: default

// Module 16096 (ICYMICustomScoresGuildScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import ChannelListState from "ChannelListState" /* 6948 */;
import ICYMIUtils from "ICYMIUtils" /* 7798 */;
import ChevronSmallDownIcon2 from "ChevronSmallDownIcon" /* 10615 */;
import ICYMIContentSettingControl from "ICYMIContentSettingControl" /* 16098 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelListStore from "ChannelListStore" /* 6945 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, item;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function ICYMICustomScoreChannelRow(channelId) {
  let Icon2;
  let disabled;
  let end;
  let items3;
  let obj4;
  let obj8;
  let start;
  let tmp13;
  channelId = channelId.channelId;
  let stateFromStores1;
  ({ start, end, disabled } = channelId);
  let tmp = closure_14();
  let tmp2 = channelId;
  let obj = channelId(stateFromStores1[11]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp6 = stateFromStores(stateFromStores1[12])(stateFromStores);
  const obj2 = channelId(stateFromStores1[11]);
  const items1 = [ICYMIStore, UserGuildSettingsStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return ICYMIUtils.ICYMICustomScore.DEFAULT;
    } else {
      let customChannelScore = ICYMIStore.getCustomChannelScore(tmp.guild_id, tmp.id);
      if (customChannelScore === ICYMIUtils.ICYMICustomScore.UNKNOWN) {
        const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(stateFromStores.guild_id, stateFromStores.id);
        const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
        customChannelScore = isChannelMutedResult ? ICYMICustomScore.MUTED : ICYMICustomScore.DEFAULT;
      }
      return customChannelScore;
    }
  });
  const tmp8 = stateFromStores1 === channelId(stateFromStores1[13]).ICYMICustomScore.MUTED;
  let closure_3 = tmp8;
  const items2 = [tmp8, stateFromStores1];
  [][0] = stateFromStores;
  const memo = react.useMemo(() => {
    let stringResult;
    const tmp = closure_3;
    if (tmp) {
      const intl4 = intl5.intl;
      stringResult = intl4.string(intl5.t.lhPHmz);
    } else {
      const tmp2 = stateFromStores1;
      if (stateFromStores1 === ICYMIUtils.ICYMICustomScore.MORE) {
        const intl3 = intl5.intl;
        stringResult = intl3.string(intl5.t.Rxe3jF);
      } else if (tmp2 === ICYMIUtils.ICYMICustomScore.LESS) {
        const intl2 = intl5.intl;
        stringResult = intl2.string(intl5.t.rdt65I);
      } else {
        const intl = intl5.intl;
        stringResult = intl.string(intl5.t.SnrG00);
      }
    }
    return stringResult;
  }, items2);
  const tmp5 = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp2Result = tmp2(stateFromStores1[18]);
    const channelIcon = tmp2Result.getChannelIcon(stateFromStores);
    let obj3 = { arrow: true, disabled, icon: closure_11(Icon2, obj4), start, end, labelLineClamp: 1, label: tmp13, trailing: tmp15(tmp2(tmp3[19]).TableRow.TrailingText, obj8), onPress: tmp10 };
    const TableRow = tmp2(tmp3[19]).TableRow;
    obj4 = { size: tmp2(stateFromStores1[20]).IconSizes.SMALL, source: channelIcon };
    Icon2 = tmp2(tmp3[20]).Icon;
    tmp13 = tmp6;
    if (tmp8) {
      const obj5 = { style: tmp.channelNameContainer, children: items3 };
      const obj6 = { source: tmp5(stateFromStores1[21]), size: tmp2(stateFromStores1[20]).Icon.Sizes.SMALL, style: tmp.channelMutedIcon };
      const Icon = tmp2(tmp3[20]).Icon;
      items3 = [tmp15(Icon, obj6), ];
      const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp6 };
      items3[1] = closure_11(tmp2(stateFromStores1[22]).Text, obj7);
      tmp13 = closure_12(View, obj5);
    }
    obj8 = { text: memo };
    return closure_11(TableRow, obj3);
  }
}
function keyExtractor(kind, arg1) {
  kind = kind.kind;
  if ("header" === kind) {
    return "header";
  } else if ("categoryHeader" === kind) {
    const _HermesInternal3 = HermesInternal;
    return "categoryHeader-" + kind.index;
  } else if ("channel" === kind) {
    const _HermesInternal2 = HermesInternal;
    return "channel-" + kind.channelId;
  } else {
    const _HermesInternal = HermesInternal;
    return "" + arg1;
  }
}
let react = react_mod;
const View = react_native.View;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildHeader: obj3, categoryHeader: obj4, channelNameContainer: obj5, channelMutedIcon: obj6 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_32 };
obj4 = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj6 = { alignSelf: "center", tintColor: nativeDefault.colors.ICON_MUTED };
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx");

export default function ICYMICustomScoresGuildScreen(navigation) {
  let AnimatedFlashList;
  let c4;
  let closure_2;
  let obj4;
  let rect;
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  react = undefined;
  let guildChannels;
  const tmp = closure_14();
  dependencyMap = tmp;
  let tmp3 = dependencyMap;
  let obj = navigation(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = react;
  let items1 = [navigation, ];
  let name;
  const useEffect = react.useEffect;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items1[1] = name;
  const effect = useEffect(() => {
    let str;
    const setOptions = navigation.setOptions;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    setOptions({ title: str });
  }, items1);
  const items2 = [ICYMIStore];
  const tmp2Result = navigation(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => ICYMIStore.getCustomGuildScore(guildId));
  const tmp2Result3 = navigation(7798);
  const numberToCustomScoreResult = tmp2Result3.numberToCustomScore(stateFromStores1);
  react = numberToCustomScoreResult;
  const items3 = [ChannelListStore];
  const tmp2Result4 = navigation(504);
  guildChannels = tmp2Result4.useStateFromStoresObject(items3, () => ChannelListStore.getGuild(guildId)).guildChannels;
  const items4 = [numberToCustomScoreResult, guildChannels];
  const memo = obj2.useMemo(() => {
    const items = [];
    items.push({ kind: "header" });
    const sections = guildChannels.getSections(false);
    const entries = sections.entries();
    const tmp3 = entries[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      let first = tmp6[0];
      if (0 !== tmp6[1]) {
        let tmp37 = require;
        if (first !== ChannelListState.SECTION_INDEX_GUILD_ACTIONS) {
          let obj4 = guildChannels;
          if (first !== guildChannels.voiceChannelsSectionNumber) {
            let categoryFromSection = obj4.getCategoryFromSection(first);
            let found;
            if (categoryFromSection != null) {
              let channelRecords = categoryFromSection.getChannelRecords();
              found = channelRecords.filter((item) => {
                const obj = navigation(closure_1_2[13]);
                return obj.isChannelCustomScoreEligible(item);
              });
            }
            let arr3 = found;
            if (null != found) {
              if (0 !== arr3.length) {
                let intl3 = tmp37(1115).intl;
                let stringResult = intl3.string(tmp37(1115).t.GSfOoo);
                if (first === tmp37(6948).SECTION_INDEX_FAVORITES) {
                  let intl2 = tmp37(1115).intl;
                  stringResult = intl2.string(tmp37(1115).t.mlPMCy);
                } else if (first === tmp37(6948).SECTION_INDEX_RECENTS) {
                  let intl = tmp37(1115).intl;
                  stringResult = intl.string(tmp37(1115).t.gKcrqM);
                } else if (first >= tmp37(6948).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
                  let namedCategoryFromSection = obj4.getNamedCategoryFromSection(first);
                  let str;
                  if (namedCategoryFromSection != null) {
                    str = namedCategoryFromSection.record.name;
                  }
                  if (str == null) {
                    str = "";
                  }
                  stringResult = str;
                }
                let obj = { kind: "categoryHeader", index: first, title: stringResult };
                let arr2 = items.push(obj);
                let entries1 = arr3.entries();
                for (const item10075 of entries1) {
                  let tmp25 = _slicedToArray(item10075, 2);
                  let first1 = tmp25[0];
                  let obj2 = { kind: "channel", channelId: tmp25[1].id, start: 0 === first1, end: first1 === arr3.length - 1, disabled: c4 === ICYMIUtils.ICYMICustomScore.MUTED };
                  let push = items.push;
                  let arr6 = push(obj2);
                  continue;
                }
              }
            }
          }
        }
      }
      continue;
    }
    if ("channel" === items[items.length - 1].kind) {
      items[items.length - 1].end = true;
    }
    return items;
  }, items4);
  const items5 = [stateFromStores, , ];
  ({ categoryHeader: arr6[1], guildHeader: arr6[2] } = tmp);
  const bottom = guildId(1613)().bottom;
  let obj3 = { style: tmp.container, children: closure_11(AnimatedFlashList, obj4) };
  const callback = obj2.useCallback((item) => {
    let intl;
    let intl2;
    let items;
    let items1;
    let obj4;
    let obj7;
    item = item.item;
    const kind = item.kind;
    if ("header" === kind) {
      let tmp16 = null;
      if (null != stateFromStores) {
        const obj2 = { children: items };
        const obj3 = { style: closure_2.guildHeader, children: unpackModuleId(ICYMIContentSettingControl.GuildScoreSettings, obj4) };
        obj4 = { guild: tmp15 };
        items = [unpackModuleId(View, obj3), , ];
        const obj5 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl5.t["0jRosn"]) };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items[1] = unpackModuleId(Text, obj5);
        const obj6 = { variant: "text-xs/normal", color: "text-default", style: obj7, children: intl2.string(intl5.t.l52PX4) };
        obj7 = { marginBottom: nativeDefault.space.PX_16 };
        const Text2 = Text_Text.Text;
        intl2 = intl5.intl;
        items[2] = unpackModuleId(Text2, obj6);
        tmp16 = closure_12(map1, obj2);
      }
      return tmp16;
    } else if ("categoryHeader" === kind) {
      const obj8 = { style: closure_2.categoryHeader, children: items1 };
      const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
      const ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
      items1 = [unpackModuleId(ChevronSmallDownIcon, obj9), ];
      const obj10 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
      items1[1] = unpackModuleId(Text_Text.Text, obj10);
      return closure_12(View, obj8);
    } else if ("channel" === kind) {
      const obj = { disabled: null, channelId: null, start: null, end: null };
      ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
      return unpackModuleId(ICYMICustomScoreChannelRow, obj);
    } else {
      return null;
    }
  }, items5);
  obj4 = { contentInset: rect, showsVerticalScrollIndicator: false, renderItem: callback, data: memo, keyExtractor };
  rect = { bottom, top: guildId(576).space.PX_12 };
  AnimatedFlashList = tmp2(8179).AnimatedFlashList;
  return closure_11(guildChannels, obj3);
};
