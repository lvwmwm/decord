// Module ID: 16468
// Function ID: 16469
// Name: SearchList
// Dependencies: [19, 17, 7307, 21, 4837, 16469, 16471, 16472, 16487, 16465, 16489, 16491, 16486, 16473, 16492, 16496, 16497, 16500, 16501, 16502, 16503, 16504, 16505, 558, 576, 1619, 16456, 1127, 8176, 2]

// Module 16468 (SearchList)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8176 */;
import MediaGridPlaceholderDefault from "MediaGridPlaceholder" /* 16465 */;
import DMRowDefault from "DMRow" /* 16469 */;
import rows_GroupDMRowDefault from "rows/GroupDMRow" /* 16471 */;
import SearchHistoryRowDefault from "SearchHistoryRow" /* 16472 */;
import GuildVoiceOrStageChannelRowDefault from "GuildVoiceOrStageChannelRow" /* 16473 */;
import GuildTextChannelRowDefault from "GuildTextChannelRow" /* 16486 */;
import MediaGridItemDefault from "MediaGridItem" /* 16487 */;
import FileOrLinkGridPlaceholderDefault from "FileOrLinkGridPlaceholder" /* 16489 */;
import MediaGridDefault from "MediaGrid" /* 16491 */;
import MessageRowDefault from "MessageRow" /* 16492 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16496 */;
import LinkGridItemDefault from "LinkGridItem" /* 16497 */;
import FileGridItemDefault from "FileGridItem" /* 16500 */;
import GuildChannelMemberRowDefault from "GuildChannelMemberRow" /* 16501 */;
import MemberRowPlaceholderDefault from "MemberRowPlaceholder" /* 16502 */;
import GenericTextRowDefault from "GenericTextRow" /* 16503 */;
import SearchListSectionDefault from "SearchListSection" /* 16504 */;
import SmartSearchRowDefault from "SmartSearchRow" /* 16505 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SearchConstants from "SearchConstants" /* 7307 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp6;
const ErrorScreenDefault = tmp6(16456);
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
    const tmp96 = rows_GroupDMRowDefault;
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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ItemSeparatorComponent;
  let ListFooterComponent;
  let ListHeaderComponent;
  let contentContainerStyle;
  let data;
  let intl;
  let items;
  let numColumns;
  let obj3;
  let onEndReached;
  let tmp14;
  let tmp6Result;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(21);
  ({ contentContainerStyle, data, onEndReached, ItemSeparatorComponent, ListHeaderComponent, ListFooterComponent, numColumns } = arg0);
  const ref = react.useRef(null);
  const tmp5 = closure_10();
  let num = 0.5;
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
  if (cResult[0] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
    let tmp9 = tmp7;
    if (tmp9) {
      const obj2 = { style: hasOwnProperty.absoluteFill, children: metroImportAll(tmp6Result, obj3) };
      obj3 = { text: intl.string(intl2.t.V6nAfF) };
      tmp6Result = ErrorScreenDefault;
      intl = tmp(1127).intl;
      tmp9 = metroImportAll(React3, obj2);
    }
    cResult[0] = 0 === data.length && null == ListFooterComponent && null == ListHeaderComponent;
    cResult[1] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
    let obj4;
    if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
      obj4 = { importantForAccessibility: "no", scrollEnabled: false };
    }
    cResult[2] = 0 === data.length && null == ListFooterComponent && null == ListHeaderComponent;
    cResult[3] = obj4;
    tmp14 = obj4;
  } else {
    tmp14 = cResult[3];
  }
  const sum = 16 + bottom;
  if (cResult[4] === contentContainerStyle) {
    let tmp16;
    if (cResult[5] === sum) {
      tmp16 = cResult[6];
    }
    if (cResult[7] === ItemSeparatorComponent) {
      if (cResult[8] === ListFooterComponent) {
        if (cResult[9] === ListHeaderComponent) {
          if (cResult[10] === data) {
            if (cResult[11] === numColumns) {
              if (cResult[12] === onEndReached) {
                if (cResult[13] === tmp14) {
                  if (cResult[14] === tmp16) {
                    let tmp18;
                    if (cResult[15] === num) {
                      tmp18 = cResult[16];
                    }
                    if (cResult[17] === tmp5.container) {
                      if (cResult[18] === tmp8) {
                        let tmp24;
                        if (cResult[19] === tmp18) {
                          tmp24 = cResult[20];
                        }
                        return tmp24;
                      }
                    }
                    const obj5 = { style: tmp5.container, children: items };
                    items = [tmp8, tmp18];
                    const tmp27 = React4(React3, obj5);
                    cResult[17] = tmp5.container;
                    cResult[18] = tmp8;
                    cResult[19] = tmp18;
                    cResult[20] = tmp27;
                    tmp24 = tmp27;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj6 = { ref, overrideProps: tmp14, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data, renderItem, onEndReachedThreshold: num, onEndReached, scrollsToTop: true, contentContainerStyle: tmp16, keyExtractor, getItemType, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, numColumns };
    const tmp23 = metroImportAll(defaultMVCPConfig.AnimatedFlashList, obj6);
    cResult[7] = ItemSeparatorComponent;
    cResult[8] = ListFooterComponent;
    cResult[9] = ListHeaderComponent;
    cResult[10] = data;
    cResult[11] = numColumns;
    cResult[12] = onEndReached;
    cResult[13] = tmp14;
    cResult[14] = tmp16;
    cResult[15] = num;
    cResult[16] = tmp23;
    tmp18 = tmp23;
  }
  const obj7 = { paddingBottom: sum };
  const merged = Object.assign(contentContainerStyle);
  cResult[4] = contentContainerStyle;
  cResult[5] = sum;
  cResult[6] = obj7;
  tmp16 = obj7;
}) : ((arg0) => {
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
}));
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default memoResult;
