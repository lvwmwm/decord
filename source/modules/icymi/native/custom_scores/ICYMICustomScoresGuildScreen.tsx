// Module ID: 15184
// Function ID: 115602
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 6757, 1348, 1838, 4325, 8306, 33, 4130, 689, 566, 4320, 8320, 1212, 4098, 15185, 1934, 4593, 5165, 1273, 10284, 4126, 6760, 1557, 15186, 8525, 7879, 2]
// Exports: default

// Module 15184 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "defaultMVCPConfig";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function ICYMICustomScoreChannelRow(channelId) {
  let disabled;
  let end;
  let start;
  channelId = channelId.channelId;
  ({ start, end, disabled } = channelId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(stateFromStores1[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(channelId));
  const tmp3 = stateFromStores(stateFromStores1[12])(stateFromStores);
  let obj1 = channelId(stateFromStores1[11]);
  const items1 = [closure_10, closure_9];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return channelId(stateFromStores1[13]).ICYMICustomScore.DEFAULT;
    } else {
      const customChannelScore = outer1_10.getCustomChannelScore(stateFromStores.guild_id, stateFromStores.id);
      if (customChannelScore !== channelId(stateFromStores1[13]).ICYMICustomScore.UNKNOWN) {
        return customChannelScore;
      } else {
        const ICYMICustomScore = channelId(stateFromStores1[13]).ICYMICustomScore;
        const isChannelMutedResult = outer1_9.isChannelMuted(stateFromStores.guild_id, stateFromStores.id);
      }
    }
  });
  const tmp5 = stateFromStores1 === channelId(stateFromStores1[13]).ICYMICustomScore.MUTED;
  let _slicedToArray = tmp5;
  const items2 = [tmp5, stateFromStores1];
  [][0] = stateFromStores;
  const memo = React.useMemo(() => {
    if (_slicedToArray) {
      const intl4 = channelId(stateFromStores1[14]).intl;
      let stringResult = intl4.string(channelId(stateFromStores1[14]).t.lhPHmz);
    } else if (stateFromStores1 === channelId(stateFromStores1[13]).ICYMICustomScore.MORE) {
      const intl3 = channelId(stateFromStores1[14]).intl;
      stringResult = intl3.string(channelId(stateFromStores1[14]).t.Rxe3jF);
    } else if (stateFromStores1 === channelId(stateFromStores1[13]).ICYMICustomScore.LESS) {
      const intl2 = channelId(stateFromStores1[14]).intl;
      stringResult = intl2.string(channelId(stateFromStores1[14]).t.rdt65I);
    } else {
      const intl = channelId(stateFromStores1[14]).intl;
      stringResult = intl.string(channelId(stateFromStores1[14]).t.SnrG00);
    }
    return stringResult;
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    const channelIcon = channelId(stateFromStores1[18]).getChannelIcon(stateFromStores);
    obj = { arrow: true, disabled };
    obj = { size: channelId(stateFromStores1[20]).IconSizes.SMALL, source: channelIcon };
    obj.icon = callback(channelId(stateFromStores1[20]).Icon, obj);
    obj.start = start;
    obj.end = end;
    obj.labelLineClamp = 1;
    let tmp15 = tmp3;
    if (tmp5) {
      obj1 = { style: tmp.channelNameContainer };
      const obj2 = { source: stateFromStores(stateFromStores1[21]), size: channelId(stateFromStores1[20]).Icon.Sizes.SMALL, style: tmp.channelMutedIcon };
      const items3 = [callback(channelId(stateFromStores1[20]).Icon, obj2), ];
      const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp3 };
      items3[1] = callback(channelId(stateFromStores1[22]).Text, obj3);
      obj1.children = items3;
      tmp15 = callback2(View, obj1);
    }
    obj.label = tmp15;
    const obj4 = { text: memo };
    obj.trailing = callback(channelId(stateFromStores1[19]).TableRow.TrailingText, obj4);
    obj.onPress = tmp7;
    return callback(channelId(stateFromStores1[19]).TableRow, obj);
  }
}
function keyExtractor(kind) {
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
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildHeader = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
let obj2 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, display: "flex", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.categoryHeader = obj2;
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.channelNameContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj3 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.channelMutedIcon = { alignSelf: "center", tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { alignSelf: "center", tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx");

export default function ICYMICustomScoresGuildScreen(navigation) {
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  let React;
  let guildChannels;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = navigation(566);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(guildId));
  let items1 = [navigation, ];
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  items1[1] = name;
  const effect = React.useEffect(() => {
    const obj = {};
    let name;
    if (null != stateFromStores) {
      name = stateFromStores.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    obj.title = str;
    navigation.setOptions(obj);
  }, items1);
  let obj1 = navigation(566);
  const items2 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_10.getCustomGuildScore(guildId));
  const numberToCustomScoreResult = navigation(8320).numberToCustomScore(stateFromStores1);
  React = numberToCustomScoreResult;
  let obj3 = navigation(8320);
  const items3 = [_isNativeReflectConstruct];
  guildChannels = navigation(566).useStateFromStoresObject(items3, () => outer1_6.getGuild(guildId)).guildChannels;
  const items4 = [numberToCustomScoreResult, guildChannels];
  const memo = React.useMemo(() => {
    let iter6;
    const items = [];
    items.push({ kind: "header" });
    const sections = guildChannels.getSections(false);
    const tmp2 = outer1_15(sections.entries());
    const iter = tmp2();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp10 = stateFromStores;
        let tmp11 = stateFromStores(iter2.value, 2);
        let first = tmp11[0];
        let tmp13 = tmp3;
        let tmp14 = tmp4;
        let tmp15 = tmp5;
        let tmp16 = tmp6;
        let tmp17 = tmp7;
        let tmp18 = tmp8;
        let tmp19 = tmp9;
        if (0 !== tmp11[1]) {
          let tmp42 = navigation;
          let tmp43 = tmp;
          tmp13 = tmp3;
          tmp14 = tmp4;
          tmp15 = tmp5;
          tmp16 = tmp6;
          tmp17 = tmp7;
          tmp18 = tmp8;
          tmp19 = tmp9;
          if (first !== navigation(tmp[23]).SECTION_INDEX_GUILD_ACTIONS) {
            let tmp44 = guildChannels;
            tmp13 = tmp3;
            tmp14 = tmp4;
            tmp15 = tmp5;
            tmp16 = tmp6;
            tmp17 = tmp7;
            tmp18 = tmp8;
            tmp19 = tmp9;
            if (first !== guildChannels.voiceChannelsSectionNumber) {
              let tmp45 = guildChannels;
              let categoryFromSection = guildChannels.getCategoryFromSection(first);
              let found;
              if (null != categoryFromSection) {
                let channelRecords = categoryFromSection.getChannelRecords();
                found = channelRecords.filter((stateFromStores) => navigation(table[13]).isChannelCustomScoreEligible(stateFromStores));
              }
              tmp13 = categoryFromSection;
              tmp14 = found;
              tmp15 = tmp5;
              tmp16 = tmp6;
              tmp17 = tmp7;
              tmp18 = tmp8;
              tmp19 = tmp9;
              if (null != found) {
                tmp13 = categoryFromSection;
                tmp14 = found;
                tmp15 = tmp5;
                tmp16 = tmp6;
                tmp17 = tmp7;
                tmp18 = tmp8;
                tmp19 = tmp9;
                if (0 !== found.length) {
                  let tmp46 = navigation;
                  let tmp47 = tmp;
                  let intl3 = navigation(tmp[14]).intl;
                  let stringResult = intl3.string(navigation(tmp[14]).t.GSfOoo);
                  if (first === navigation(tmp[23]).SECTION_INDEX_FAVORITES) {
                    let tmp29 = navigation;
                    let tmp30 = tmp;
                    let intl2 = navigation(tmp[14]).intl;
                    let stringResult1 = intl2.string(navigation(tmp[14]).t.mlPMCy);
                    let tmp24 = tmp6;
                    let tmp25 = tmp7;
                  } else {
                    let tmp49 = navigation;
                    let tmp50 = tmp;
                    if (first === navigation(tmp[23]).SECTION_INDEX_RECENTS) {
                      let tmp27 = navigation;
                      let tmp28 = tmp;
                      let intl = navigation(tmp[14]).intl;
                      stringResult1 = intl.string(navigation(tmp[14]).t.gKcrqM);
                      tmp24 = tmp6;
                      tmp25 = tmp7;
                    } else {
                      let tmp21 = navigation;
                      let tmp22 = tmp;
                      stringResult1 = stringResult;
                      tmp24 = tmp6;
                      tmp25 = tmp7;
                      if (first >= navigation(tmp[23]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
                        let tmp51 = guildChannels;
                        let namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(first);
                        let name;
                        if (null != namedCategoryFromSection) {
                          name = namedCategoryFromSection.record.name;
                        }
                        let str = "";
                        if (null != name) {
                          str = name;
                        }
                        stringResult1 = str;
                        tmp24 = name;
                        tmp25 = namedCategoryFromSection;
                      }
                    }
                  }
                  let obj = { kind: "categoryHeader", index: first, title: stringResult1 };
                  let arr = items.push(obj);
                  let tmp32 = outer1_15;
                  let tmp33 = outer1_15(found.entries());
                  let iter3 = tmp33();
                  let iter4 = iter3;
                  tmp13 = categoryFromSection;
                  tmp14 = found;
                  tmp15 = stringResult1;
                  tmp16 = tmp24;
                  tmp17 = tmp25;
                  tmp18 = iter3;
                  tmp19 = tmp33;
                  if (!iter3.done) {
                    do {
                      let tmp34 = stateFromStores;
                      let tmp35 = stateFromStores(iter4.value, 2);
                      let first1 = tmp35[0];
                      obj = { kind: "channel", channelId: tmp35[1].id, start: 0 === first1, end: first1 === found.length - 1 };
                      let tmp37 = c4;
                      let tmp38 = navigation;
                      let tmp39 = tmp;
                      obj.disabled = c4 === navigation(tmp[13]).ICYMICustomScore.MUTED;
                      let arr1 = items.push(obj);
                      let iter5 = tmp33();
                      iter4 = iter5;
                      tmp13 = categoryFromSection;
                      tmp14 = found;
                      tmp15 = stringResult1;
                      tmp16 = tmp24;
                      tmp17 = tmp25;
                      tmp18 = iter5;
                      tmp19 = tmp33;
                      done = iter5.done;
                    } while (!done);
                  }
                }
              }
            }
          }
        }
        iter6 = tmp2();
        tmp3 = tmp13;
        tmp4 = tmp14;
        tmp5 = tmp15;
        tmp6 = tmp16;
        tmp7 = tmp17;
        tmp8 = tmp18;
        tmp9 = tmp19;
        iter2 = iter6;
      } while (!iter6.done);
    }
    if ("channel" === items[items.length - 1].kind) {
      tmp41.end = true;
    }
    return items;
  }, items4);
  const items5 = [stateFromStores, , ];
  ({ categoryHeader: arr6[1], guildHeader: arr6[2] } = tmp);
  obj = { style: tmp.container };
  const callback = React.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("header" === kind) {
      let tmp13 = null;
      if (null != stateFromStores) {
        let obj = {};
        obj = { style: tmp.guildHeader };
        const obj1 = { guild: stateFromStores };
        obj.children = outer1_11(navigation(tmp[25]).GuildScoreSettings, obj1);
        const items = [outer1_11(guildChannels, obj), , ];
        const obj2 = { variant: "text-sm/semibold", color: "text-default" };
        const intl = navigation(tmp[14]).intl;
        obj2.children = intl.string(navigation(tmp[14]).t["0jRosn"]);
        items[1] = outer1_11(navigation(tmp[22]).Text, obj2);
        const obj3 = { variant: "text-xs/normal", color: "text-default" };
        const obj4 = { marginBottom: guildId(tmp[10]).space.PX_16 };
        obj3.style = obj4;
        const intl2 = navigation(tmp[14]).intl;
        obj3.children = intl2.string(navigation(tmp[14]).t.l52PX4);
        items[2] = outer1_11(navigation(tmp[22]).Text, obj3);
        obj.children = items;
        tmp13 = outer1_12(outer1_13, obj);
      }
      return tmp13;
    } else if ("categoryHeader" === kind) {
      const obj5 = { style: tmp.categoryHeader };
      const obj6 = { size: "xs", color: guildId(tmp[10]).colors.TEXT_SUBTLE };
      const items1 = [outer1_11(navigation(tmp[26]).ChevronSmallDownIcon, obj6), ];
      const obj7 = { variant: "text-sm/semibold", color: "text-default", children: item.title };
      items1[1] = outer1_11(navigation(tmp[22]).Text, obj7);
      obj5.children = items1;
      return outer1_12(guildChannels, obj5);
    } else if ("channel" === kind) {
      obj = {};
      ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
      return outer1_11(outer1_17, obj);
    } else {
      return null;
    }
  }, items5);
  obj = {};
  obj1 = { bottom: guildId(1557)().bottom, top: guildId(689).space.PX_12 };
  obj.contentInset = obj1;
  obj.showsVerticalScrollIndicator = false;
  obj.renderItem = callback;
  obj.data = memo;
  obj.keyExtractor = keyExtractor;
  obj.children = callback(navigation(7879).AnimatedFlashList, obj);
  return callback(guildChannels, obj);
};
