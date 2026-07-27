// Module ID: 15414
// Function ID: 117638
// Name: getItemKey
// Dependencies: [31, 27, 9033, 33, 4131, 15415, 15417, 15418, 15428, 15411, 15430, 15432, 15427, 15419, 15433, 15437, 15438, 15441, 15442, 15443, 15444, 15445, 1557, 15446, 15403, 1212, 6619, 2]

// Module 15414 (getItemKey)
import importAllResult from "result";
import get_ActivityIndicator from "set";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getItemKey(type) {
  type = type.type;
  if (constants.DM === type) {
    const _HermesInternal10 = HermesInternal;
    return "" + type.section + "-" + type.props.user.id + "-" + type.props.guildId;
  } else if (constants.GUILD_CHANNEL_MEMBER === type) {
    const _HermesInternal9 = HermesInternal;
    return "" + type.props.user.id + "-" + type.props.guildId;
  } else if (constants.SEARCH_HISTORY_ITEM === type) {
    return (function searchHistoryKeyExtractor(searchHistoryItem) {
      const type = searchHistoryItem.type;
      if (outer1_6.TEXT === type) {
        const tags = searchHistoryItem.tags;
        let joined;
        if (null != tags) {
          const mapped = tags.map((text) => text.text);
          joined = mapped.join(" ");
        }
        const _HermesInternal3 = HermesInternal;
        return "" + searchHistoryItem.text + " " + joined;
      } else {
        if (outer1_6.GROUP_DM !== type) {
          if (outer1_6.GUILD_TEXT_CHANNEL !== type) {
            if (outer1_6.GUILD_VOICE_CHANNEL !== type) {
              if (outer1_6.DM === type) {
                const _HermesInternal = HermesInternal;
                return "" + searchHistoryItem.userId;
              }
            }
          }
        }
        const _HermesInternal2 = HermesInternal;
        return "" + searchHistoryItem.channelId;
      }
    })(type.props.searchHistoryItem);
  } else if (constants.MEDIA_GRID === type) {
    const media = type.props.media;
    let mapped = media.map((messageId) => "" + messageId.messageId + "-" + messageId.mediaIndex);
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
                    let _HermesInternal3 = HermesInternal;
                    return "" + type.props.data.messageId + "-" + type.props.data.fileIndex;
                  } else if (constants.GENERIC === type) {
                    let _HermesInternal2 = HermesInternal;
                    return "" + type.props.text;
                  } else if (constants.SECTION === type) {
                    let _HermesInternal = HermesInternal;
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
    return callback(importDefault(15415), obj);
  } else if (constants.GROUP_DM === type) {
    obj = {};
    const merged1 = Object.assign(item.props);
    return callback(importDefault(15417), obj);
  } else if (constants.SEARCH_HISTORY_ITEM === type) {
    const obj1 = {};
    const merged2 = Object.assign(item.props);
    return callback(importDefault(15418), obj1);
  } else if (constants.MEDIA === type) {
    const obj2 = {};
    const merged3 = Object.assign(item.props);
    return callback(importDefault(15428), obj2);
  } else if (constants.MEDIA_PLACEHOLDER === type) {
    const obj3 = {};
    const merged4 = Object.assign(item.props);
    return callback(importDefault(15411), obj3);
  } else if (constants.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(item.props);
    return callback(importDefault(15430), obj4);
  } else if (constants.MEDIA_GRID === type) {
    const obj5 = {};
    const merged6 = Object.assign(item.props);
    return callback(importDefault(15432), obj5);
  } else if (constants.GUILD_TEXT_CHANNEL === type) {
    const obj6 = {};
    const merged7 = Object.assign(item.props);
    return callback(importDefault(15427), obj6);
  } else if (constants.GUILD_VOICE_CHANNEL === type) {
    const obj7 = {};
    const merged8 = Object.assign(item.props);
    return callback(importDefault(15419), obj7);
  } else if (constants.MESSAGE === type) {
    const obj8 = {};
    const merged9 = Object.assign(item.props);
    return callback(importDefault(15433), obj8);
  } else if (constants.MESSAGE_PLACEHOLDER === type) {
    return callback(importDefault(15437), {});
  } else if (constants.LINK === type) {
    const obj9 = {};
    const merged10 = Object.assign(item.props);
    return callback(importDefault(15438), obj9);
  } else if (constants.FILE === type) {
    const obj10 = {};
    const merged11 = Object.assign(item.props);
    return callback(importDefault(15441), obj10);
  } else if (constants.GUILD_CHANNEL_MEMBER === type) {
    const obj11 = {};
    const merged12 = Object.assign(item.props);
    return callback(importDefault(15442), obj11);
  } else if (constants.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return callback(importDefault(15443), {});
  } else if (constants.GENERIC === type) {
    const obj12 = {};
    const merged13 = Object.assign(item.props);
    return callback(importDefault(15444), obj12);
  } else if (constants.SECTION === type) {
    obj = {};
    const merged14 = Object.assign(item.props);
    return callback(importDefault(15445), obj);
  } else {
    return null;
  }
}
({ View: closure_4, StyleSheet: closure_5 } = get_ActivityIndicator);
({ SearchHistoryItemTypes: closure_6, SearchListItemTypes: closure_7 } = SearchAutocompleteSelectAnalyticsActions);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 } });
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
  let obj = require(15446) /* useRenderScrollComponent */;
  let num = 0.5;
  const renderScrollComponent = obj.useRenderScrollComponent();
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
  obj = { style: callback2().container };
  let tmp7 = tmp4;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj = { style: absoluteFill.absoluteFill };
    const obj1 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.text = intl.string(require(1212) /* getSystemLocale */.t.V6nAfF);
    obj.children = callback(importDefault(15403), obj1);
    tmp7 = callback(closure_4, obj);
    const tmp14 = importDefault(15403);
  }
  const items = [tmp7, ];
  const obj2 = { ref, renderScrollComponent };
  let obj3;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj3 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj2.overrideProps = obj3;
  obj2.keyboardDismissMode = "on-drag";
  obj2.keyboardShouldPersistTaps = "handled";
  obj2.data = data;
  obj2.renderItem = renderItem;
  obj2.onEndReachedThreshold = num;
  obj2.onEndReached = onEndReached;
  obj2.scrollsToTop = true;
  const tmp16 = callback;
  const tmp2 = callback2();
  const tmp5 = closure_9;
  const tmp6 = closure_4;
  const merged = Object.assign(contentContainerStyle);
  obj2.contentContainerStyle = { paddingBottom: 16 + importDefault(1557)().bottom };
  obj2.keyExtractor = keyExtractor;
  obj2.getItemType = getItemType;
  obj2.ListHeaderComponent = ListHeaderComponent;
  obj2.ListFooterComponent = ListFooterComponent;
  obj2.ItemSeparatorComponent = ItemSeparatorComponent;
  obj2.numColumns = numColumns;
  items[1] = tmp16(require(6619) /* useModalDismissGuardRefreshControl */.AnimatedFlashList, obj2);
  obj.children = items;
  return tmp5(tmp6, obj);
});
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default memoResult;
