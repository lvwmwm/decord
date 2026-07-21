// Module ID: 15217
// Function ID: 114892
// Name: getItemKey
// Dependencies: []

// Module 15217 (getItemKey)
function getItemKey(type) {
  type = type.type;
  if (constants.DM === type) {
    const _HermesInternal10 = HermesInternal;
    return "" + type.section + "-" + type.props.user.id + "-" + type.props.guildId;
  } else if (constants.GUILD_CHANNEL_MEMBER === type) {
    const _HermesInternal9 = HermesInternal;
    return "" + type.props.user.id + "-" + type.props.guildId;
  } else if (constants.SEARCH_HISTORY_ITEM === type) {
    return function searchHistoryKeyExtractor(searchHistoryItem) {
      const type = searchHistoryItem.type;
      if (constants.TEXT === type) {
        const tags = searchHistoryItem.tags;
        let joined;
        if (null != tags) {
          const mapped = tags.map((text) => text.text);
          joined = mapped.join(" ");
        }
        const _HermesInternal3 = HermesInternal;
        return "" + searchHistoryItem.text + " " + joined;
      } else {
        if (constants.GROUP_DM !== type) {
          if (constants.GUILD_TEXT_CHANNEL !== type) {
            if (constants.GUILD_VOICE_CHANNEL !== type) {
              if (constants.DM === type) {
                const _HermesInternal = HermesInternal;
                return "" + searchHistoryItem.userId;
              }
            }
          }
        }
        const _HermesInternal2 = HermesInternal;
        return "" + searchHistoryItem.channelId;
      }
    }(type.props.searchHistoryItem);
  } else if (constants.MEDIA_GRID === type) {
    const media = type.props.media;
    const mapped = media.map((messageId) => "" + messageId.messageId + "-" + messageId.mediaIndex);
    return mapped.join("-");
  } else if (constants.MEDIA === type) {
    const _HermesInternal8 = HermesInternal;
    return "" + type.props.media.messageId + "-" + type.props.media.mediaIndex;
  } else {
    if (constants.MEDIA_PLACEHOLDER !== type) {
      if (constants.FILE_OR_LINK_PLACEHOLDER !== type) {
        if (constants.MESSAGE_PLACEHOLDER !== type) {
          if (constants.GUILD_CHANNEL_MEMBER_PLACEHOLDER !== type) {
            if (constants.GROUP_DM === type) {
              const _HermesInternal7 = HermesInternal;
              return "" + type.section + "-" + type.props.channel.id;
            } else {
              if (constants.GUILD_TEXT_CHANNEL !== type) {
                if (constants.GUILD_VOICE_CHANNEL !== type) {
                  if (constants.MESSAGE === type) {
                    const _HermesInternal5 = HermesInternal;
                    return "" + type.props.message.id;
                  } else if (constants.LINK === type) {
                    const _HermesInternal4 = HermesInternal;
                    return "" + type.props.data.messageId + "-" + type.props.data.linkIndex;
                  } else if (constants.FILE === type) {
                    const _HermesInternal3 = HermesInternal;
                    return "" + type.props.data.messageId + "-" + type.props.data.fileIndex;
                  } else if (constants.GENERIC === type) {
                    const _HermesInternal2 = HermesInternal;
                    return "" + type.props.text;
                  } else if (constants.SECTION === type) {
                    const _HermesInternal = HermesInternal;
                    return "" + type.props.title;
                  }
                }
              }
              const _HermesInternal6 = HermesInternal;
              return "" + type.props.channel.id;
            }
          }
        }
      }
    }
    return type.key;
  }
}
function keyExtractor(type) {
  return "" + type.type + "-" + getItemKey(type);
}
function getItemType(type) {
  return type.type;
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (constants.DM === type) {
    let obj = {};
    const merged = Object.assign(item.props);
    return callback(importDefault(dependencyMap[5]), obj);
  } else if (constants.GROUP_DM === type) {
    obj = {};
    const merged1 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[6]), obj);
  } else if (constants.SEARCH_HISTORY_ITEM === type) {
    const obj1 = {};
    const merged2 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[7]), obj1);
  } else if (constants.MEDIA === type) {
    const obj2 = {};
    const merged3 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[8]), obj2);
  } else if (constants.MEDIA_PLACEHOLDER === type) {
    const obj3 = {};
    const merged4 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[9]), obj3);
  } else if (constants.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[10]), obj4);
  } else if (constants.MEDIA_GRID === type) {
    const obj5 = {};
    const merged6 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[11]), obj5);
  } else if (constants.GUILD_TEXT_CHANNEL === type) {
    const obj6 = {};
    const merged7 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[12]), obj6);
  } else if (constants.GUILD_VOICE_CHANNEL === type) {
    const obj7 = {};
    const merged8 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[13]), obj7);
  } else if (constants.MESSAGE === type) {
    const obj8 = {};
    const merged9 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[14]), obj8);
  } else if (constants.MESSAGE_PLACEHOLDER === type) {
    return callback(importDefault(dependencyMap[15]), {});
  } else if (constants.LINK === type) {
    const obj9 = {};
    const merged10 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[16]), obj9);
  } else if (constants.FILE === type) {
    const obj10 = {};
    const merged11 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[17]), obj10);
  } else if (constants.GUILD_CHANNEL_MEMBER === type) {
    const obj11 = {};
    const merged12 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[18]), obj11);
  } else if (constants.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return callback(importDefault(dependencyMap[19]), {});
  } else if (constants.GENERIC === type) {
    const obj12 = {};
    const merged13 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[20]), obj12);
  } else if (constants.SECTION === type) {
    obj = {};
    const merged14 = Object.assign(item.props);
    return callback(importDefault(dependencyMap[21]), obj);
  } else {
    return null;
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ SearchHistoryItemTypes: closure_6, SearchListItemTypes: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).createStyles({ container: { flex: 1 } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function SearchList(arg0) {
  let ItemSeparatorComponent;
  let ListFooterComponent;
  let ListHeaderComponent;
  let contentContainerStyle;
  let data;
  let numColumns;
  let onEndReached;
  ({ contentContainerStyle, data, ListHeaderComponent, ListFooterComponent, numColumns } = arg0);
  ({ onEndReached, ItemSeparatorComponent } = arg0);
  const ref = importAllResult.useRef(null);
  let num = 0.5;
  if (null != numColumns) {
    num = 0.5;
    if (1 !== numColumns) {
      num = 0.8;
      if (2 !== numColumns) {
        if (numColumns >= 3) {
          num = 0.99;
        }
      }
    }
  }
  let obj = { style: callback2().container };
  let tmp6 = tmp3;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj = { style: absoluteFill.absoluteFill };
    obj = {};
    const intl = arg1(dependencyMap[24]).intl;
    obj.text = intl.string(arg1(dependencyMap[24]).t.V6nAfF);
    obj.children = callback(importDefault(dependencyMap[23]), obj);
    tmp6 = callback(closure_4, obj);
    const tmp13 = importDefault(dependencyMap[23]);
  }
  const items = [tmp6, ];
  const obj1 = { ref };
  let obj2;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj2 = {};
  }
  obj1.overrideProps = obj2;
  obj1.keyboardDismissMode = "on-drag";
  obj1.keyboardShouldPersistTaps = "handled";
  obj1.data = data;
  obj1.renderItem = renderItem;
  obj1.onEndReachedThreshold = num;
  obj1.onEndReached = onEndReached;
  obj1.scrollsToTop = true;
  const tmp15 = callback;
  const tmp2 = callback2();
  const tmp4 = closure_9;
  const tmp5 = closure_4;
  const merged = Object.assign(contentContainerStyle);
  obj1.contentContainerStyle = { paddingBottom: 16 + importDefault(dependencyMap[22])().bottom };
  obj1.keyExtractor = keyExtractor;
  obj1.getItemType = getItemType;
  obj1.ListHeaderComponent = ListHeaderComponent;
  obj1.ListFooterComponent = ListFooterComponent;
  obj1.ItemSeparatorComponent = ItemSeparatorComponent;
  obj1.numColumns = numColumns;
  items[1] = tmp15(arg1(dependencyMap[25]).AnimatedFlashList, obj1);
  obj.children = items;
  return tmp4(tmp5, obj);
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default memoResult;
