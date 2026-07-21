// Module ID: 15061
// Function ID: 113390
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15061 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = channelId.channelId;
  ({ start, end, disabled } = channelId);
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const importDefault = stateFromStores;
  const tmp3 = importDefault(dependencyMap[12])(stateFromStores);
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_10, closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return channelId(stateFromStores1[13]).ICYMICustomScore.DEFAULT;
    } else {
      const customChannelScore = customChannelScore.getCustomChannelScore(stateFromStores.guild_id, stateFromStores.id);
      if (customChannelScore !== channelId(stateFromStores1[13]).ICYMICustomScore.UNKNOWN) {
        return customChannelScore;
      } else {
        const ICYMICustomScore = channelId(stateFromStores1[13]).ICYMICustomScore;
        const isChannelMutedResult = channelMuted.isChannelMuted(stateFromStores.guild_id, stateFromStores.id);
      }
    }
  });
  const dependencyMap = stateFromStores1;
  const tmp5 = stateFromStores1 === arg1(dependencyMap[13]).ICYMICustomScore.MUTED;
  let closure_3 = tmp5;
  const items2 = [tmp5, stateFromStores1];
  [][0] = stateFromStores;
  const memo = React.useMemo(() => {
    if (tmp5) {
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
      const tmp5 = stateFromStores1;
    }
    return stringResult;
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    const channelIcon = arg1(dependencyMap[18]).getChannelIcon(stateFromStores);
    obj = { arrow: true, disabled };
    obj = { size: arg1(dependencyMap[20]).IconSizes.SMALL, source: channelIcon };
    obj.icon = callback(arg1(dependencyMap[20]).Icon, obj);
    obj.start = start;
    obj.end = end;
    obj.labelLineClamp = 1;
    let tmp15 = tmp3;
    if (tmp5) {
      obj1 = { style: tmp.channelNameContainer };
      const obj2 = { source: importDefault(dependencyMap[21]), size: arg1(dependencyMap[20]).Icon.Sizes.SMALL, style: tmp.channelMutedIcon };
      const items3 = [callback(arg1(dependencyMap[20]).Icon, obj2), ];
      const obj3 = { children: tmp3 };
      items3[1] = callback(arg1(dependencyMap[22]).Text, obj3);
      obj1.children = items3;
      tmp15 = callback2(View, obj1);
    }
    obj.label = tmp15;
    const obj4 = { text: memo };
    obj.trailing = callback(arg1(dependencyMap[19]).TableRow.TrailingText, obj4);
    obj.onPress = tmp7;
    return callback(arg1(dependencyMap[19]).TableRow, obj);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_12 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[8]);
obj.guildHeader = { marginBottom: importDefault(dependencyMap[10]).space.PX_32 };
const obj2 = { "Null": null, "Null": 8, "Null": null, "Null": "\u270A\u{1F3FF}", "Null": true, paddingTop: importDefault(dependencyMap[10]).space.PX_8, paddingBottom: importDefault(dependencyMap[10]).space.PX_8, gap: importDefault(dependencyMap[10]).space.PX_4 };
obj.categoryHeader = obj2;
const obj1 = { marginBottom: importDefault(dependencyMap[10]).space.PX_32 };
obj.channelNameContainer = { flexDirection: "row", gap: importDefault(dependencyMap[10]).space.PX_4 };
const obj3 = { flexDirection: "row", gap: importDefault(dependencyMap[10]).space.PX_4 };
obj.channelMutedIcon = { alignSelf: "center", tintColor: importDefault(dependencyMap[10]).colors.ICON_MUTED };
let closure_14 = obj.createStyles(obj);
const obj4 = { alignSelf: "center", tintColor: importDefault(dependencyMap[10]).colors.ICON_MUTED };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx");

export default function ICYMICustomScoresGuildScreen(navigation) {
  navigation = navigation.navigation;
  const arg1 = navigation;
  const importDefault = navigation.route.params.guildId;
  let React;
  let View;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild2.getGuild(guildId));
  let closure_3 = stateFromStores;
  const items1 = [navigation, ];
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
  let obj1 = arg1(dependencyMap[11]);
  const items2 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => customGuildScore.getCustomGuildScore(guildId));
  const numberToCustomScoreResult = arg1(dependencyMap[13]).numberToCustomScore(stateFromStores1);
  React = numberToCustomScoreResult;
  const obj3 = arg1(dependencyMap[13]);
  const items3 = [closure_6];
  const guildChannels = arg1(dependencyMap[11]).useStateFromStoresObject(items3, () => guild.getGuild(guildId)).guildChannels;
  View = guildChannels;
  const items4 = [numberToCustomScoreResult, guildChannels];
  const memo = React.useMemo(() => {
    let iter6;
    const items = [];
    items.push({ kind: "header" });
    const sections = guildChannels.getSections(false);
    const tmp2 = callback3(sections.entries());
    const iter = tmp2();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp10 = closure_3;
        let tmp11 = closure_3(iter2.value, 2);
        let first = tmp11[0];
        let tmp13 = tmp3;
        let tmp14 = tmp4;
        let tmp15 = tmp5;
        let tmp16 = tmp6;
        let tmp17 = tmp7;
        let tmp18 = tmp8;
        let tmp19 = tmp9;
        if (0 !== tmp11[1]) {
          let tmp42 = closure_0;
          let tmp43 = closure_2;
          tmp13 = tmp3;
          tmp14 = tmp4;
          tmp15 = tmp5;
          tmp16 = tmp6;
          tmp17 = tmp7;
          tmp18 = tmp8;
          tmp19 = tmp9;
          if (first !== closure_0(closure_2[23]).SECTION_INDEX_GUILD_ACTIONS) {
            let tmp44 = closure_5;
            tmp13 = tmp3;
            tmp14 = tmp4;
            tmp15 = tmp5;
            tmp16 = tmp6;
            tmp17 = tmp7;
            tmp18 = tmp8;
            tmp19 = tmp9;
            if (first !== closure_5.voiceChannelsSectionNumber) {
              let tmp45 = closure_5;
              let categoryFromSection = closure_5.getCategoryFromSection(first);
              let found;
              if (null != categoryFromSection) {
                let channelRecords = categoryFromSection.getChannelRecords();
                found = channelRecords.filter((stateFromStores) => callback(closure_2[13]).isChannelCustomScoreEligible(stateFromStores));
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
                  let tmp46 = closure_0;
                  let tmp47 = closure_2;
                  let intl3 = closure_0(closure_2[14]).intl;
                  let stringResult = intl3.string(closure_0(closure_2[14]).t.GSfOoo);
                  if (first === closure_0(closure_2[23]).SECTION_INDEX_FAVORITES) {
                    let tmp29 = closure_0;
                    let tmp30 = closure_2;
                    let intl2 = closure_0(closure_2[14]).intl;
                    let stringResult1 = intl2.string(closure_0(closure_2[14]).t.mlPMCy);
                    let tmp24 = tmp6;
                    let tmp25 = tmp7;
                  } else {
                    let tmp49 = closure_0;
                    let tmp50 = closure_2;
                    if (first === closure_0(closure_2[23]).SECTION_INDEX_RECENTS) {
                      let tmp27 = closure_0;
                      let tmp28 = closure_2;
                      let intl = closure_0(closure_2[14]).intl;
                      stringResult1 = intl.string(closure_0(closure_2[14]).t.gKcrqM);
                      tmp24 = tmp6;
                      tmp25 = tmp7;
                    } else {
                      let tmp21 = closure_0;
                      let tmp22 = closure_2;
                      stringResult1 = stringResult;
                      tmp24 = tmp6;
                      tmp25 = tmp7;
                      if (first >= closure_0(closure_2[23]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
                        let tmp51 = closure_5;
                        let namedCategoryFromSection = closure_5.getNamedCategoryFromSection(first);
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
                  let tmp32 = closure_15;
                  let tmp33 = closure_15(found.entries());
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
                      let tmp34 = closure_3;
                      let tmp35 = closure_3(iter4.value, 2);
                      let first1 = tmp35[0];
                      obj = { kind: "channel", channelId: tmp35[1].id, start: 0 === first1, end: first1 === found.length - 1 };
                      let tmp37 = closure_4;
                      let tmp38 = closure_0;
                      let tmp39 = closure_2;
                      obj.disabled = closure_4 === closure_0(closure_2[13]).ICYMICustomScore.MUTED;
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
                      let done = iter5.done;
                    } while (!done);
                  }
                }
              }
            }
          }
        }
        iter6 = tmp2();
        let tmp3 = tmp13;
        let tmp4 = tmp14;
        let tmp5 = tmp15;
        let tmp6 = tmp16;
        let tmp7 = tmp17;
        let tmp8 = tmp18;
        let tmp9 = tmp19;
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
        obj.children = callback(navigation(tmp[25]).GuildScoreSettings, obj1);
        const items = [callback(guildChannels, obj), , ];
        const obj2 = { hasMaxConnections: "explicit_content_friend_dm", isBoostOnlySubscription: "enum" };
        const intl = navigation(tmp[14]).intl;
        obj2.children = intl.string(navigation(tmp[14]).t.0jRosn);
        items[1] = callback(navigation(tmp[22]).Text, obj2);
        const obj3 = { hasMaxConnections: true, isBoostOnlySubscription: true };
        const obj4 = { marginBottom: guildId(tmp[10]).space.PX_16 };
        obj3.style = obj4;
        const intl2 = navigation(tmp[14]).intl;
        obj3.children = intl2.string(navigation(tmp[14]).t.l52PX4);
        items[2] = callback(navigation(tmp[22]).Text, obj3);
        obj.children = items;
        tmp13 = callback2(closure_13, obj);
      }
      return tmp13;
    } else if ("categoryHeader" === kind) {
      const obj5 = { style: tmp.categoryHeader };
      const obj6 = { size: "xs", color: guildId(tmp[10]).colors.TEXT_SUBTLE };
      const items1 = [callback(navigation(tmp[26]).ChevronSmallDownIcon, obj6), ];
      const obj7 = { hasMaxConnections: "explicit_content_friend_dm", isBoostOnlySubscription: "enum", children: item.title };
      items1[1] = callback(navigation(tmp[22]).Text, obj7);
      obj5.children = items1;
      return callback2(guildChannels, obj5);
    } else if ("channel" === kind) {
      obj = {};
      ({ disabled: obj.disabled, channelId: obj.channelId, start: obj.start, end: obj.end } = item);
      return callback(closure_17, obj);
    } else {
      return null;
    }
  }, items5);
  obj = {};
  obj1 = { bottom: importDefault(dependencyMap[24])().bottom, top: importDefault(dependencyMap[10]).space.PX_12 };
  obj.contentInset = obj1;
  obj.showsVerticalScrollIndicator = false;
  obj.renderItem = callback;
  obj.data = memo;
  obj.keyExtractor = keyExtractor;
  obj.children = callback(arg1(dependencyMap[27]).AnimatedFlashList, obj);
  return callback(View, obj);
};
