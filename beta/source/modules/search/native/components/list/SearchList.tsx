// Module ID: 16466
// Function ID: 16467
// Name: SearchList
// Dependencies: [19, 17, 7303, 21, 4836, 16467, 16469, 16470, 16485, 16463, 16487, 16489, 16484, 16471, 16490, 16494, 16495, 16498, 16499, 16500, 16501, 16502, 16503, 1613, 16454, 1115, 8179, 2]

// Module 16466 (SearchList)
import intl2 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8179 */;
import MediaGridPlaceholderDefault from "MediaGridPlaceholder" /* 16463 */;
import DMRowDefault from "DMRow" /* 16467 */;
import GroupDMRowDefault from "GroupDMRow" /* 16469 */;
import SearchHistoryRowDefault from "SearchHistoryRow" /* 16470 */;
import GuildVoiceOrStageChannelRowDefault from "GuildVoiceOrStageChannelRow" /* 16471 */;
import GuildTextChannelRowDefault from "GuildTextChannelRow" /* 16484 */;
import MediaGridItemDefault from "MediaGridItem" /* 16485 */;
import FileOrLinkGridPlaceholderDefault from "FileOrLinkGridPlaceholder" /* 16487 */;
import MediaGridDefault from "MediaGrid" /* 16489 */;
import MessageRowDefault from "MessageRow" /* 16490 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16494 */;
import LinkGridItemDefault from "LinkGridItem" /* 16495 */;
import FileGridItemDefault from "FileGridItem" /* 16498 */;
import GuildChannelMemberRowDefault from "GuildChannelMemberRow" /* 16499 */;
import MemberRowPlaceholderDefault from "MemberRowPlaceholder" /* 16500 */;
import GenericTextRowDefault from "GenericTextRow" /* 16501 */;
import SearchListSectionDefault from "SearchListSection" /* 16502 */;
import SmartSearchRowDefault from "SmartSearchRow" /* 16503 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp3;
const ErrorScreenDefault = tmp3(16454);
function keyExtractor(type) {
  let key;
  const type2 = type.type;
  type = type.type;
  if (metroImportDefault.DM === type2) {
    const _HermesInternal12 = HermesInternal;
    key = "" + type.section + "-" + type.props.user.id + "-" + type.props.guildId;
  } else if (metroImportDefault.GUILD_CHANNEL_MEMBER === type2) {
    const _HermesInternal11 = HermesInternal;
    key = "" + type.props.user.id + "-" + type.props.guildId;
  } else if (metroImportDefault.SEARCH_HISTORY_ITEM === type2) {
    let combined;
    const searchHistoryItem = type.props.searchHistoryItem;
    const type3 = searchHistoryItem.type;
    if (metroRequire.TEXT === type3) {
      const tags = searchHistoryItem.tags;
      let joined;
      const text = searchHistoryItem.text;
      if (tags != null) {
        const mapped = tags.map((text) => text.text);
        joined = mapped.join(" ");
      }
      const _HermesInternal10 = HermesInternal;
      combined = "" + text + " " + joined;
    } else {
      if (metroRequire.GROUP_DM !== type3) {
        if (metroRequire.GUILD_TEXT_CHANNEL !== type3) {
          if (metroRequire.GUILD_VOICE_CHANNEL !== type3) {
            if (metroRequire.DM === type3) {
              const _HermesInternal13 = HermesInternal;
              combined = "" + searchHistoryItem.userId;
            }
          }
        }
      }
      const _HermesInternal9 = HermesInternal;
      combined = "" + searchHistoryItem.channelId;
    }
    key = combined;
  } else if (metroImportDefault.MEDIA_GRID === type2) {
    const media = type.props.media;
    const mapped1 = media.map((messageId) => "" + messageId.messageId + "-" + messageId.mediaIndex);
    key = mapped1.join("-");
  } else if (metroImportDefault.MEDIA === type2) {
    const _HermesInternal8 = HermesInternal;
    key = "" + type.props.media.messageId + "-" + type.props.media.mediaIndex;
  } else {
    if (metroImportDefault.MEDIA_PLACEHOLDER !== type2) {
      if (metroImportDefault.FILE_OR_LINK_PLACEHOLDER !== type2) {
        if (metroImportDefault.MESSAGE_PLACEHOLDER !== type2) {
          if (metroImportDefault.GUILD_CHANNEL_MEMBER_PLACEHOLDER !== type2) {
            if (metroImportDefault.GROUP_DM === type2) {
              const _HermesInternal7 = HermesInternal;
              key = "" + type.section + "-" + type.props.channel.id;
            } else {
              if (metroImportDefault.GUILD_TEXT_CHANNEL !== type2) {
                if (metroImportDefault.GUILD_VOICE_CHANNEL !== type2) {
                  if (metroImportDefault.MESSAGE === type2) {
                    const _HermesInternal5 = HermesInternal;
                    key = "" + type.props.message.id;
                  } else if (metroImportDefault.LINK === type2) {
                    const _HermesInternal4 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.linkIndex;
                  } else if (metroImportDefault.FILE === type2) {
                    const _HermesInternal3 = HermesInternal;
                    key = "" + type.props.data.messageId + "-" + type.props.data.fileIndex;
                  } else if (metroImportDefault.GENERIC === type2) {
                    const _HermesInternal2 = HermesInternal;
                    key = "" + type.props.text;
                  } else if (metroImportDefault.SECTION === type2) {
                    const _HermesInternal = HermesInternal;
                    key = "" + type.props.title;
                  } else if (metroImportDefault.INTELLIGENCE_SMART_SEARCH === type2) {
                    key = type.props.requestKey;
                  }
                }
              }
              const _HermesInternal6 = HermesInternal;
              key = "" + type.props.channel.id;
            }
          }
        }
      }
    }
    key = type.key;
  }
  return "" + type + "-" + key;
}
function getItemType(type) {
  return type.type;
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (metroImportDefault.DM === type) {
    const obj2 = {};
    const tmp102 = DMRowDefault;
    const merged = Object.assign(item.props);
    return metroImportAll(tmp102, obj2);
  } else if (metroImportDefault.GROUP_DM === type) {
    const obj3 = {};
    const tmp96 = GroupDMRowDefault;
    const merged1 = Object.assign(item.props);
    return metroImportAll(tmp96, obj3);
  } else if (metroImportDefault.SEARCH_HISTORY_ITEM === type) {
    const obj4 = {};
    const tmp90 = SearchHistoryRowDefault;
    const merged2 = Object.assign(item.props);
    return metroImportAll(tmp90, obj4);
  } else if (metroImportDefault.MEDIA === type) {
    const obj5 = {};
    const tmp84 = MediaGridItemDefault;
    const merged3 = Object.assign(item.props);
    return metroImportAll(tmp84, obj5);
  } else if (metroImportDefault.MEDIA_PLACEHOLDER === type) {
    const obj6 = {};
    const tmp78 = MediaGridPlaceholderDefault;
    const merged4 = Object.assign(item.props);
    return metroImportAll(tmp78, obj6);
  } else if (metroImportDefault.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj7 = {};
    const tmp72 = FileOrLinkGridPlaceholderDefault;
    const merged5 = Object.assign(item.props);
    return metroImportAll(tmp72, obj7);
  } else if (metroImportDefault.MEDIA_GRID === type) {
    const obj8 = {};
    const tmp66 = MediaGridDefault;
    const merged6 = Object.assign(item.props);
    return metroImportAll(tmp66, obj8);
  } else if (metroImportDefault.GUILD_TEXT_CHANNEL === type) {
    const obj9 = {};
    const tmp60 = GuildTextChannelRowDefault;
    const merged7 = Object.assign(item.props);
    return metroImportAll(tmp60, obj9);
  } else if (metroImportDefault.GUILD_VOICE_CHANNEL === type) {
    const obj10 = {};
    const tmp54 = GuildVoiceOrStageChannelRowDefault;
    const merged8 = Object.assign(item.props);
    return metroImportAll(tmp54, obj10);
  } else if (metroImportDefault.MESSAGE === type) {
    const obj11 = {};
    const tmp48 = MessageRowDefault;
    const merged9 = Object.assign(item.props);
    return metroImportAll(tmp48, obj11);
  } else if (metroImportDefault.MESSAGE_PLACEHOLDER === type) {
    return metroImportAll(FormRowPlaceholderDefault, {});
  } else if (metroImportDefault.LINK === type) {
    const obj12 = {};
    const tmp39 = LinkGridItemDefault;
    const merged10 = Object.assign(item.props);
    return metroImportAll(tmp39, obj12);
  } else if (metroImportDefault.FILE === type) {
    const obj13 = {};
    const tmp33 = FileGridItemDefault;
    const merged11 = Object.assign(item.props);
    return metroImportAll(tmp33, obj13);
  } else if (metroImportDefault.GUILD_CHANNEL_MEMBER === type) {
    const obj14 = {};
    const tmp27 = GuildChannelMemberRowDefault;
    const merged12 = Object.assign(item.props);
    return metroImportAll(tmp27, obj14);
  } else if (metroImportDefault.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return metroImportAll(MemberRowPlaceholderDefault, {});
  } else if (metroImportDefault.GENERIC === type) {
    const obj15 = {};
    const tmp18 = GenericTextRowDefault;
    const merged13 = Object.assign(item.props);
    return metroImportAll(tmp18, obj15);
  } else if (metroImportDefault.SECTION === type) {
    const obj16 = {};
    const tmp12 = SearchListSectionDefault;
    const merged14 = Object.assign(item.props);
    return metroImportAll(tmp12, obj16);
  } else if (metroImportDefault.INTELLIGENCE_SMART_SEARCH === type) {
    const obj = {};
    const tmp6 = SmartSearchRowDefault;
    const merged15 = Object.assign(item.props);
    return metroImportAll(tmp6, obj);
  } else {
    return null;
  }
}
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
({ SearchHistoryItemTypes: metroRequire, SearchListItemTypes: metroImportDefault } = SearchConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const memoResult = react.memo(function SearchList(arg0) {
  let ItemSeparatorComponent;
  let ListFooterComponent;
  let ListHeaderComponent;
  let contentContainerStyle;
  let data;
  let intl;
  let items;
  let numColumns;
  let obj3;
  let obj5;
  let obj6;
  let onEndReached;
  let tmp3Result;
  ({ contentContainerStyle, data, ListHeaderComponent, ListFooterComponent, numColumns } = arg0);
  ({ onEndReached, ItemSeparatorComponent } = arg0);
  let num = 0.5;
  const ref = react.useRef(null);
  const tmp2 = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
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
  let tmp8 = tmp5;
  const obj = { style: tmp2.container, children: items };
  const tmp6 = React4;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    const obj2 = { style: hasOwnProperty.absoluteFill, children: metroImportAll(tmp3Result, obj3) };
    obj3 = { text: intl.string(intl2.t.V6nAfF) };
    tmp3Result = ErrorScreenDefault;
    intl = intl2.intl;
    tmp8 = metroImportAll(tmp7, obj2);
  }
  items = [tmp8, ];
  const obj4 = { ref, overrideProps: obj5, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data, renderItem, onEndReachedThreshold: num, onEndReached, scrollsToTop: true, contentContainerStyle: obj6, keyExtractor, getItemType, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, numColumns };
  obj5 = undefined;
  const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
  const tmp13 = metroImportAll;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj5 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj6 = { paddingBottom: 16 + bottom };
  const merged = Object.assign(contentContainerStyle);
  items[1] = tmp13(AnimatedFlashList, obj4);
  return tmp6(React3, obj);
});
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default memoResult;
