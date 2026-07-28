// Module ID: 15454
// Function ID: 117797
// Name: getItemKey
// Dependencies: [31, 27, 9077, 33, 4165, 15455, 15457, 15458, 15468, 15451, 15470, 15472, 15467, 15459, 15473, 15477, 15478, 15481, 15482, 15483, 15484, 15485, 1557, 15443, 1212, 6655, 2]

// Module 15454 (getItemKey)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
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
    return callback(importDefault(15455), obj);
  } else if (constants.GROUP_DM === type) {
    obj = {};
    const merged1 = Object.assign(item.props);
    return callback(importDefault(15457), obj);
  } else if (constants.SEARCH_HISTORY_ITEM === type) {
    const obj1 = {};
    const merged2 = Object.assign(item.props);
    return callback(importDefault(15458), obj1);
  } else if (constants.MEDIA === type) {
    const obj2 = {};
    const merged3 = Object.assign(item.props);
    return callback(importDefault(15468), obj2);
  } else if (constants.MEDIA_PLACEHOLDER === type) {
    const obj3 = {};
    const merged4 = Object.assign(item.props);
    return callback(importDefault(15451), obj3);
  } else if (constants.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(item.props);
    return callback(importDefault(15470), obj4);
  } else if (constants.MEDIA_GRID === type) {
    const obj5 = {};
    const merged6 = Object.assign(item.props);
    return callback(importDefault(15472), obj5);
  } else if (constants.GUILD_TEXT_CHANNEL === type) {
    const obj6 = {};
    const merged7 = Object.assign(item.props);
    return callback(importDefault(15467), obj6);
  } else if (constants.GUILD_VOICE_CHANNEL === type) {
    const obj7 = {};
    const merged8 = Object.assign(item.props);
    return callback(importDefault(15459), obj7);
  } else if (constants.MESSAGE === type) {
    const obj8 = {};
    const merged9 = Object.assign(item.props);
    return callback(importDefault(15473), obj8);
  } else if (constants.MESSAGE_PLACEHOLDER === type) {
    return callback(importDefault(15477), {});
  } else if (constants.LINK === type) {
    const obj9 = {};
    const merged10 = Object.assign(item.props);
    return callback(importDefault(15478), obj9);
  } else if (constants.FILE === type) {
    const obj10 = {};
    const merged11 = Object.assign(item.props);
    return callback(importDefault(15481), obj10);
  } else if (constants.GUILD_CHANNEL_MEMBER === type) {
    const obj11 = {};
    const merged12 = Object.assign(item.props);
    return callback(importDefault(15482), obj11);
  } else if (constants.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return callback(importDefault(15483), {});
  } else if (constants.GENERIC === type) {
    const obj12 = {};
    const merged13 = Object.assign(item.props);
    return callback(importDefault(15484), obj12);
  } else if (constants.SECTION === type) {
    obj = {};
    const merged14 = Object.assign(item.props);
    return callback(importDefault(15485), obj);
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
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t.V6nAfF);
    obj.children = callback(importDefault(15443), obj);
    tmp6 = callback(closure_4, obj);
    const tmp13 = importDefault(15443);
  }
  const items = [tmp6, ];
  const obj1 = { ref };
  let obj2;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj2 = { importantForAccessibility: "no", scrollEnabled: false };
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
  obj1.contentContainerStyle = { paddingBottom: 16 + importDefault(1557)().bottom };
  obj1.keyExtractor = keyExtractor;
  obj1.getItemType = getItemType;
  obj1.ListHeaderComponent = ListHeaderComponent;
  obj1.ListFooterComponent = ListFooterComponent;
  obj1.ItemSeparatorComponent = ItemSeparatorComponent;
  obj1.numColumns = numColumns;
  items[1] = tmp15(require(6655) /* useModalDismissGuardRefreshControl */.AnimatedFlashList, obj1);
  obj.children = items;
  return tmp4(tmp5, obj);
});
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default memoResult;
