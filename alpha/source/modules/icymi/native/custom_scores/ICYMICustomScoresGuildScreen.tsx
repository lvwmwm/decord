// Module ID: 16827
// Function ID: 16828
// Name: ICYMICustomScoresGuildScreen
// Dependencies: [32, 19, 17, 7242, 2064, 2086, 5973, 8437, 21, 5091, 587, 504, 5418, 8454, 1126, 5055, 16828, 2000, 8142, 6186, 1200, 10430, 5087, 558, 576, 7244, 1631, 16829, 10498, 8608, 2]

// Module 16827 (ICYMICustomScoresGuildScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import ChannelListState from "ChannelListState" /* 7244 */;
import ICYMIUtils from "ICYMIUtils" /* 8454 */;
import ChevronSmallDownIcon2 from "ChevronSmallDownIcon" /* 10498 */;
import ICYMIContentSettingControl from "ICYMIContentSettingControl" /* 16829 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelListStore from "ChannelListStore" /* 7242 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
import ICYMIStore from "ICYMIStore" /* 8437 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMICustomScoresGuildScreen(navigation) {
  let closure_2;
  let first;
  let tmp9;
  let obj = navigation(576);
  const cResult = obj.c(33);
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  const tmp6 = closure_14();
  dependencyMap = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function h() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmp2Result = navigation(504);
  const stateFromStores = tmp2Result.useStateFromStores(first, tmp9);
  let name;
  const tmp11 = cResult[3];
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (tmp11 === name) {
    let tmp13;
    if (cResult[4] === navigation) {
      tmp13 = cResult[5];
    }
    let name1;
    if (stateFromStores != null) {
      name1 = stateFromStores.name;
    }
    if (cResult[6] === navigation) {
      let tmp15;
      let tmp18;
      let tmp20;
      let tmp27;
      let tmp28;
      if (cResult[7] === name1) {
        tmp15 = cResult[8];
      }
      let tmp16 = react;
      const effect = react.useEffect(tmp13, tmp15);
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [ICYMIStore];
        cResult[9] = items1;
        tmp18 = items1;
      } else {
        tmp18 = cResult[9];
      }
      if (cResult[10] !== guildId) {
        class N {
          constructor() {
            return ICYMIStore.getCustomGuildScore(guildId);
          }
        }
        cResult[10] = guildId;
        cResult[11] = N;
        tmp20 = N;
      } else {
        class N {
          constructor() {
            return ICYMIStore.getCustomGuildScore(guildId);
          }
        }
      }
      const tmp2Result4 = navigation(504);
      const stateFromStores1 = tmp2Result4.useStateFromStores(tmp18, tmp20);
      if (cResult[12] !== stateFromStores1) {
        class N {
          constructor() {
            return ICYMIStore.getCustomGuildScore(guildId);
          }
        }
        const tmp2Result5 = navigation(8454);
        const numberToCustomScoreResult = tmp2Result5.numberToCustomScore(stateFromStores1);
        cResult[12] = stateFromStores1;
        cResult[13] = numberToCustomScoreResult;
      } else {
        class N {
          constructor() {
            return ICYMIStore.getCustomGuildScore(guildId);
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return ICYMIStore.getCustomGuildScore(guildId);
          }
        }
        const items2 = [ChannelListStore];
        cResult[14] = items2;
        tmp27 = items2;
      } else {
        class N {
          constructor() {
            return ICYMIStore.getCustomGuildScore(guildId);
          }
        }
      }
      if (cResult[15] !== guildId) {
        class R {
          constructor() {
            return ChannelListStore.getGuild(guildId);
          }
        }
        cResult[15] = guildId;
        cResult[16] = R;
        tmp28 = R;
      } else {
        class R {
          constructor() {
            return ChannelListStore.getGuild(guildId);
          }
        }
      }
      const tmp2Result6 = navigation(504);
      const guildChannels = tmp2Result6.useStateFromStoresObject(tmp27, tmp28).guildChannels;
      if (cResult[17] === tmp24) {
        class R {
          constructor() {
            return ChannelListStore.getGuild(guildId);
          }
        }
        const bottom = guildId(1631)().bottom;
        if (cResult[20] === stateFromStores) {
          class R {
            constructor() {
              return ChannelListStore.getGuild(guildId);
            }
          }
        }
        class W {
          constructor(item) {
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
                tmp16 = authStore2(map1, obj2);
              }
              return tmp16;
            } else if ("categoryHeader" === kind) {
              const obj8 = { style: closure_2.categoryHeader, children: items1 };
              const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
              const ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
              items1 = [unpackModuleId(ChevronSmallDownIcon, obj9), ];
              const obj10 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
              items1[1] = unpackModuleId(Text_Text.Text, obj10);
              return authStore2(View, obj8);
            } else if ("channel" === kind) {
              const obj = { disabled: null, channelId: null, start: null, end: null };
              ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
              return unpackModuleId(ICYMICustomScoreChannelRow, obj);
            } else {
              return null;
            }
          }
        }
        cResult[20] = stateFromStores;
        cResult[21] = tmp6.categoryHeader;
        cResult[22] = tmp6.guildHeader;
        cResult[23] = W;
      }
      const items3 = [];
      items3.push({ kind: "header" });
      const sections = guildChannels.getSections(false);
      const entries = sections.entries();
      const tmp35 = entries[Symbol.iterator]();
      let str = "";
      while (tmp35 !== undefined) {
        class R {
          constructor() {
            return ChannelListStore.getGuild(guildId);
          }
        }
        let tmp39 = stateFromStores(tmp37, 2);
        let first1 = tmp39[0];
        if (0 !== tmp39[1]) {
          class R {
            constructor() {
              return ChannelListStore.getGuild(guildId);
            }
          }
          let tmp63 = navigation;
          if (first1 !== navigation(7244).SECTION_INDEX_GUILD_ACTIONS) {
            class R {
              constructor() {
                return ChannelListStore.getGuild(guildId);
              }
            }
            if (first1 !== guildChannels.voiceChannelsSectionNumber) {
              class R {
                constructor() {
                  return ChannelListStore.getGuild(guildId);
                }
              }
              let categoryFromSection = guildChannels.getCategoryFromSection(first1);
              let found;
              if (categoryFromSection != null) {
                class R {
                  constructor() {
                    return ChannelListStore.getGuild(guildId);
                  }
                }
                found = arr6.filter((item) => {
                  const obj = navigation(closure_2[13]);
                  return obj.isChannelCustomScoreEligible(item);
                });
              }
              let arr7 = found;
              if (null != found) {
                class R {
                  constructor() {
                    return ChannelListStore.getGuild(guildId);
                  }
                }
                if (0 !== arr7.length) {
                  class R {
                    constructor() {
                      return ChannelListStore.getGuild(guildId);
                    }
                  }
                  let intl = tmp63(1126).intl;
                  let stringResult = intl.string(tmp63(1126).t.GSfOoo);
                  class W {
                    constructor(item) {
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
                          tmp16 = authStore2(map1, obj2);
                        }
                        return tmp16;
                      } else if ("categoryHeader" === kind) {
                        const obj8 = { style: closure_2.categoryHeader, children: items1 };
                        const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
                        const ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
                        items1 = [unpackModuleId(ChevronSmallDownIcon, obj9), ];
                        const obj10 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
                        items1[1] = unpackModuleId(Text_Text.Text, obj10);
                        return authStore2(View, obj8);
                      } else if ("channel" === kind) {
                        const obj = { disabled: null, channelId: null, start: null, end: null };
                        ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
                        return unpackModuleId(ICYMICustomScoreChannelRow, obj);
                      } else {
                        return null;
                      }
                    }
                  }
                  let obj2 = { kind: "categoryHeader", index: first1, title: stringResult };
                  let arr2 = items3.push(obj2);
                  let entries1 = arr7.entries();
                  for (const item10185 of entries1) {
                    class R {
                      constructor() {
                        return ChannelListStore.getGuild(guildId);
                      }
                    }
                    let tmp50 = stateFromStores(item10185, 2);
                    let first2 = tmp50[0];
                    let obj3 = { kind: "channel", channelId: tmp50[1].id, start: 0 === first2, end: first2 === arr7.length - 1, disabled: tmp24 === navigation(8454).ICYMICustomScore.MUTED };
                    class W {
                      constructor(item) {
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
                            tmp16 = authStore2(map1, obj2);
                          }
                          return tmp16;
                        } else if ("categoryHeader" === kind) {
                          const obj8 = { style: closure_2.categoryHeader, children: items1 };
                          const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
                          const ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
                          items1 = [unpackModuleId(ChevronSmallDownIcon, obj9), ];
                          const obj10 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
                          items1[1] = unpackModuleId(Text_Text.Text, obj10);
                          return authStore2(View, obj8);
                        } else if ("channel" === kind) {
                          const obj = { disabled: null, channelId: null, start: null, end: null };
                          ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
                          return unpackModuleId(ICYMICustomScoreChannelRow, obj);
                        } else {
                          return null;
                        }
                      }
                    }
                    let push = items3.push;
                    let arr3 = push(obj3);
                    continue;
                  }
                }
              }
            }
          }
        }
        continue;
      }
      if ("channel" === items3[items3.length - 1].kind) {
        class R {
          constructor() {
            return ChannelListStore.getGuild(guildId);
          }
        }
        items3[items3.length - 1].end = true;
      }
      cResult[17] = tmp24;
      cResult[18] = guildChannels;
      cResult[19] = items3;
    }
    const items4 = [navigation, ];
    cResult[6] = navigation;
    cResult[7] = name1;
    cResult[8] = items4;
    tmp15 = items4;
  }
  if (stateFromStores != null) {
    class R {
      constructor() {
        return ChannelListStore.getGuild(guildId);
      }
    }
  }
  const fn2 = function y() {
    let str;
    const setOptions = navigation.setOptions;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    setOptions({ title: str });
  };
  cResult[3] = undefined;
  cResult[4] = navigation;
  cResult[5] = fn2;
  tmp13 = fn2;
}) : (function ICYMICustomScoresGuildScreen(navigation) {
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
  const tmp2Result3 = navigation(8454);
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
                let intl3 = tmp37(1126).intl;
                let stringResult = intl3.string(tmp37(1126).t.GSfOoo);
                if (first === tmp37(7244).SECTION_INDEX_FAVORITES) {
                  let intl2 = tmp37(1126).intl;
                  stringResult = intl2.string(tmp37(1126).t.mlPMCy);
                } else if (first === tmp37(7244).SECTION_INDEX_RECENTS) {
                  let intl = tmp37(1126).intl;
                  stringResult = intl.string(tmp37(1126).t.gKcrqM);
                } else if (first >= tmp37(7244).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
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
  const bottom = guildId(1631)().bottom;
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
        tmp16 = authStore2(map1, obj2);
      }
      return tmp16;
    } else if ("categoryHeader" === kind) {
      const obj8 = { style: closure_2.categoryHeader, children: items1 };
      const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
      const ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
      items1 = [unpackModuleId(ChevronSmallDownIcon, obj9), ];
      const obj10 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
      items1[1] = unpackModuleId(Text_Text.Text, obj10);
      return authStore2(View, obj8);
    } else if ("channel" === kind) {
      const obj = { disabled: null, channelId: null, start: null, end: null };
      ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
      return unpackModuleId(ICYMICustomScoreChannelRow, obj);
    } else {
      return null;
    }
  }, items5);
  obj4 = { contentInset: rect, showsVerticalScrollIndicator: false, renderItem: callback, data: memo, keyExtractor };
  rect = { bottom, top: guildId(587).space.PX_12 };
  AnimatedFlashList = tmp2(8608).AnimatedFlashList;
  return closure_11(guildChannels, obj3);
});
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx");

export default tmp4;
