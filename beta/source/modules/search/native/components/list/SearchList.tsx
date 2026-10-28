// Module ID: 18128
// Function ID: 18129
// Name: SearchList
// Dependencies: [19, 17, 9746, 21, 5003, 18129, 18130, 18131, 18146, 18125, 18148, 18150, 18145, 18132, 18151, 18155, 18156, 18159, 18160, 18161, 18162, 18163, 18164, 18114, 18181, 558, 576, 1633, 18116, 1128, 7252, 2]

// Module 18128 (SearchList)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7252 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 18114 */;
import MediaGridPlaceholderDefault from "MediaGridPlaceholder" /* 18125 */;
import DMRowDefault from "DMRow" /* 18129 */;
import rows_GroupDMRowDefault from "rows/GroupDMRow" /* 18130 */;
import SearchHistoryRowDefault from "SearchHistoryRow" /* 18131 */;
import GuildVoiceOrStageChannelRowDefault from "GuildVoiceOrStageChannelRow" /* 18132 */;
import GuildTextChannelRowDefault from "GuildTextChannelRow" /* 18145 */;
import MediaGridItemDefault from "MediaGridItem" /* 18146 */;
import FileOrLinkGridPlaceholderDefault from "FileOrLinkGridPlaceholder" /* 18148 */;
import MediaGridDefault from "MediaGrid" /* 18150 */;
import MessageRowDefault from "MessageRow" /* 18151 */;
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 18155 */;
import LinkGridItemDefault from "LinkGridItem" /* 18156 */;
import FileGridItemDefault from "FileGridItem" /* 18159 */;
import GuildChannelMemberRowDefault from "GuildChannelMemberRow" /* 18160 */;
import MemberRowPlaceholderDefault from "MemberRowPlaceholder" /* 18161 */;
import GenericTextRowDefault from "GenericTextRow" /* 18162 */;
import SearchListSectionDefault from "SearchListSection" /* 18163 */;
import SmartSearchRowDefault from "SmartSearchRow" /* 18164 */;
import SuggestedSearchSkeletonDefault from "SuggestedSearchSkeleton" /* 18181 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SearchConstants from "SearchConstants" /* 9746 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp9;
const ErrorScreenDefault = tmp9(18116);
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
                  } else if (metroImportDefault.SMART_SEARCH === type2) {
                    key = type.props.smartSearchQuery.requestKey;
                  } else if (metroImportDefault.SUGGESTED_SEARCH === type2) {
                    key = type.props.suggestedSearch.suggestionId;
                  } else if (metroImportDefault.SUGGESTED_SEARCH_PLACEHOLDER === type2) {
                    key = type.key;
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
    const tmp111 = DMRowDefault;
    const merged = Object.assign(item.props);
    return metroImportAll(tmp111, obj2);
  } else if (metroImportDefault.GROUP_DM === type) {
    const obj3 = {};
    const tmp105 = rows_GroupDMRowDefault;
    const merged1 = Object.assign(item.props);
    return metroImportAll(tmp105, obj3);
  } else if (metroImportDefault.SEARCH_HISTORY_ITEM === type) {
    const obj4 = {};
    const tmp99 = SearchHistoryRowDefault;
    const merged2 = Object.assign(item.props);
    return metroImportAll(tmp99, obj4);
  } else if (metroImportDefault.MEDIA === type) {
    const obj5 = {};
    const tmp93 = MediaGridItemDefault;
    const merged3 = Object.assign(item.props);
    return metroImportAll(tmp93, obj5);
  } else if (metroImportDefault.MEDIA_PLACEHOLDER === type) {
    const obj6 = {};
    const tmp87 = MediaGridPlaceholderDefault;
    const merged4 = Object.assign(item.props);
    return metroImportAll(tmp87, obj6);
  } else if (metroImportDefault.FILE_OR_LINK_PLACEHOLDER === type) {
    const obj7 = {};
    const tmp81 = FileOrLinkGridPlaceholderDefault;
    const merged5 = Object.assign(item.props);
    return metroImportAll(tmp81, obj7);
  } else if (metroImportDefault.MEDIA_GRID === type) {
    const obj8 = {};
    const tmp75 = MediaGridDefault;
    const merged6 = Object.assign(item.props);
    return metroImportAll(tmp75, obj8);
  } else if (metroImportDefault.GUILD_TEXT_CHANNEL === type) {
    const obj9 = {};
    const tmp69 = GuildTextChannelRowDefault;
    const merged7 = Object.assign(item.props);
    return metroImportAll(tmp69, obj9);
  } else if (metroImportDefault.GUILD_VOICE_CHANNEL === type) {
    const obj10 = {};
    const tmp63 = GuildVoiceOrStageChannelRowDefault;
    const merged8 = Object.assign(item.props);
    return metroImportAll(tmp63, obj10);
  } else if (metroImportDefault.MESSAGE === type) {
    const obj11 = {};
    const tmp57 = MessageRowDefault;
    const merged9 = Object.assign(item.props);
    return metroImportAll(tmp57, obj11);
  } else if (metroImportDefault.MESSAGE_PLACEHOLDER === type) {
    return metroImportAll(FormRowPlaceholderDefault, {});
  } else if (metroImportDefault.LINK === type) {
    const obj12 = {};
    const tmp48 = LinkGridItemDefault;
    const merged10 = Object.assign(item.props);
    return metroImportAll(tmp48, obj12);
  } else if (metroImportDefault.FILE === type) {
    const obj13 = {};
    const tmp42 = FileGridItemDefault;
    const merged11 = Object.assign(item.props);
    return metroImportAll(tmp42, obj13);
  } else if (metroImportDefault.GUILD_CHANNEL_MEMBER === type) {
    const obj14 = {};
    const tmp36 = GuildChannelMemberRowDefault;
    const merged12 = Object.assign(item.props);
    return metroImportAll(tmp36, obj14);
  } else if (metroImportDefault.GUILD_CHANNEL_MEMBER_PLACEHOLDER === type) {
    return metroImportAll(MemberRowPlaceholderDefault, {});
  } else if (metroImportDefault.GENERIC === type) {
    const obj15 = {};
    const tmp27 = GenericTextRowDefault;
    const merged13 = Object.assign(item.props);
    return metroImportAll(tmp27, obj15);
  } else if (metroImportDefault.SECTION === type) {
    const obj16 = {};
    const tmp21 = SearchListSectionDefault;
    const merged14 = Object.assign(item.props);
    return metroImportAll(tmp21, obj16);
  } else if (metroImportDefault.SMART_SEARCH === type) {
    const obj17 = {};
    const tmp15 = SmartSearchRowDefault;
    const merged15 = Object.assign(item.props);
    return metroImportAll(tmp15, obj17);
  } else if (metroImportDefault.SUGGESTED_SEARCH === type) {
    const obj = {};
    const tmp9 = SuggestedSearchRowDefault;
    const merged16 = Object.assign(item.props);
    return metroImportAll(tmp9, obj);
  } else if (metroImportDefault.SUGGESTED_SEARCH_PLACEHOLDER === type) {
    return metroImportAll(SuggestedSearchSkeletonDefault, {});
  } else {
    return null;
  }
}
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
({ SearchHistoryItemTypes: metroRequire, SearchListItemTypes: metroImportDefault } = SearchConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchList(arg0) {
  let ItemSeparatorComponent;
  let ListFooterComponent;
  let ListHeaderComponent;
  let contentContainerStyle;
  let data;
  let intl;
  let items1;
  let numColumns;
  let obj4;
  let onEndReached;
  let scrollToTopKey;
  let tmp11;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp9Result;
  let viewabilityConfigCallbackPairs;
  const obj = react2;
  const cResult = obj.c(26);
  ({ contentContainerStyle, data, onEndReached, ItemSeparatorComponent, ListHeaderComponent, ListFooterComponent, numColumns, viewabilityConfigCallbackPairs, scrollToTopKey } = arg0);
  const ref = react.useRef(null);
  let closure_2 = react.useRef(scrollToTopKey);
  const obj2 = react;
  if (cResult[0] !== scrollToTopKey) {
    const fn = function c() {
      if (ref.current !== scrollToTopKey) {
        ref.current = scrollToTopKey;
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }
    };
    const items = [scrollToTopKey];
    cResult[0] = scrollToTopKey;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = obj2.useEffect(tmp5, tmp6);
  const tmp8 = closure_10();
  let num4 = 0.5;
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (null != numColumns) {
    num4 = 0.5;
    if (1 !== numColumns) {
      num4 = 0.8;
      if (2 !== numColumns) {
        if (numColumns >= 3) {
          num4 = 0.99;
        }
      }
    }
  }
  if (cResult[3] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
    let tmp12 = tmp10;
    if (tmp12) {
      const obj3 = { style: hasOwnProperty.absoluteFill, children: metroImportAll(tmp9Result, obj4) };
      obj4 = { text: intl.string(intl2.t.V6nAfF) };
      tmp9Result = ErrorScreenDefault;
      intl = tmp(1128).intl;
      tmp12 = metroImportAll(React3, obj3);
    }
    cResult[3] = 0 === data.length && null == ListFooterComponent && null == ListHeaderComponent;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent)) {
    let obj5;
    if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
      obj5 = { importantForAccessibility: "no", scrollEnabled: false };
    }
    cResult[5] = 0 === data.length && null == ListFooterComponent && null == ListHeaderComponent;
    cResult[6] = obj5;
    tmp17 = obj5;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { disabled: true };
    cResult[7] = obj6;
    tmp18 = obj6;
  } else {
    tmp18 = cResult[7];
  }
  const sum = 16 + bottom;
  if (cResult[8] === contentContainerStyle) {
    let tmp20;
    if (cResult[9] === sum) {
      tmp20 = cResult[10];
    }
    if (cResult[11] === ItemSeparatorComponent) {
      if (cResult[12] === ListFooterComponent) {
        if (cResult[13] === ListHeaderComponent) {
          if (cResult[14] === data) {
            if (cResult[15] === numColumns) {
              if (cResult[16] === onEndReached) {
                if (cResult[17] === tmp17) {
                  if (cResult[18] === tmp20) {
                    if (cResult[19] === num4) {
                      let tmp22;
                      if (cResult[20] === viewabilityConfigCallbackPairs) {
                        tmp22 = cResult[21];
                      }
                      if (cResult[22] === tmp8.container) {
                        if (cResult[23] === tmp11) {
                          let tmp28;
                          if (cResult[24] === tmp22) {
                            tmp28 = cResult[25];
                          }
                          return tmp28;
                        }
                      }
                      const obj7 = { style: tmp8.container, children: items1 };
                      items1 = [tmp11, tmp22];
                      const tmp31 = React4(React3, obj7);
                      cResult[22] = tmp8.container;
                      cResult[23] = tmp11;
                      cResult[24] = tmp22;
                      cResult[25] = tmp31;
                      tmp28 = tmp31;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj8 = { ref, overrideProps: tmp17, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data, renderItem, onEndReachedThreshold: num4, onEndReached, scrollsToTop: true, maintainVisibleContentPosition: tmp18, contentContainerStyle: tmp20, keyExtractor, getItemType, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, numColumns, viewabilityConfigCallbackPairs };
    const tmp27 = metroImportAll(defaultMVCPConfig.AnimatedFlashList, obj8);
    cResult[11] = ItemSeparatorComponent;
    cResult[12] = ListFooterComponent;
    cResult[13] = ListHeaderComponent;
    cResult[14] = data;
    cResult[15] = numColumns;
    cResult[16] = onEndReached;
    cResult[17] = tmp17;
    cResult[18] = tmp20;
    cResult[19] = num4;
    cResult[20] = viewabilityConfigCallbackPairs;
    cResult[21] = tmp27;
    tmp22 = tmp27;
  }
  const obj9 = { paddingBottom: sum };
  const merged = Object.assign(contentContainerStyle);
  cResult[8] = contentContainerStyle;
  cResult[9] = sum;
  cResult[10] = obj9;
  tmp20 = obj9;
}) : (function SearchList(arg0) {
  let ItemSeparatorComponent;
  let ListFooterComponent;
  let ListHeaderComponent;
  let contentContainerStyle;
  let data;
  let intl;
  let items1;
  let numColumns;
  let obj3;
  let obj5;
  let obj6;
  let onEndReached;
  let scrollToTopKey;
  let tmp4Result;
  let viewabilityConfigCallbackPairs;
  ({ contentContainerStyle, data, ListHeaderComponent, ListFooterComponent, numColumns, scrollToTopKey } = arg0);
  ({ onEndReached, ItemSeparatorComponent, viewabilityConfigCallbackPairs } = arg0);
  const ref = react.useRef(null);
  let closure_2 = react.useRef(scrollToTopKey);
  const items = [scrollToTopKey];
  const effect = react.useEffect(() => {
    if (ref.current !== scrollToTopKey) {
      ref.current = scrollToTopKey;
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  }, items);
  let num = 0.5;
  const tmp3 = closure_10();
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
  let tmp9 = tmp6;
  const obj = { style: tmp3.container, children: items1 };
  const tmp7 = React4;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    const obj2 = { style: hasOwnProperty.absoluteFill, children: metroImportAll(tmp4Result, obj3) };
    obj3 = { text: intl.string(intl2.t.V6nAfF) };
    tmp4Result = ErrorScreenDefault;
    intl = intl2.intl;
    tmp9 = metroImportAll(tmp8, obj2);
  }
  items1 = [tmp9, ];
  const obj4 = { ref, overrideProps: obj5, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", data, renderItem, onEndReachedThreshold: num, onEndReached, scrollsToTop: true, maintainVisibleContentPosition: { disabled: true }, contentContainerStyle: obj6, keyExtractor, getItemType, ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, numColumns, viewabilityConfigCallbackPairs };
  obj5 = undefined;
  const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
  const tmp14 = metroImportAll;
  if (0 === data.length && null == ListFooterComponent && null == ListHeaderComponent) {
    obj5 = { importantForAccessibility: "no", scrollEnabled: false };
  }
  obj6 = { paddingBottom: 16 + bottom };
  const merged = Object.assign(contentContainerStyle);
  items1[1] = tmp14(AnimatedFlashList, obj4);
  return tmp7(React3, obj);
}));
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchList.tsx");

export default memoResult;
