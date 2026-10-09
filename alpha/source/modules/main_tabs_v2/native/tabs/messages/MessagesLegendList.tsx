// Module ID: 16398
// Function ID: 16399
// Name: MessagesLegendList
// Dependencies: [19, 21, 558, 576, 16399, 16375, 16438, 16439, 16387, 16385, 16390, 16400, 16437, 16440, 16442, 2]

// Module 16398 (MessagesLegendList)
import Fragment from "Fragment" /* 21 */;
import MessagesItemChannel from "MessagesItemChannel" /* 16375 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16385 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 16387 */;
import useMessagesData from "useMessagesData" /* 16390 */;
import MessagesItemHappeningNowDefault from "MessagesItemHappeningNow" /* 16400 */;
import MessagesItemEmptyStateDefault from "MessagesItemEmptyState" /* 16437 */;
import MessagesItemSeparator from "MessagesItemSeparator" /* 16438 */;
import MessagesItemSuggestedFriendsHeader from "MessagesItemSuggestedFriendsHeader" /* 16439 */;
import MessagesItemAddFriendsWidgetDefault from "MessagesItemAddFriendsWidget" /* 16440 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MessagesItemSeparatorDefault = MessagesItemSeparator;
const MessagesItemSuggestedFriendsHeaderDefault = MessagesItemSuggestedFriendsHeader;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesLegendList(listItemSuggestedFriendHeight) {
  let accessibilityLabel;
  let data;
  let friendsHeaderIndex;
  let friendsHeaderOffset;
  let handleScrollAnimated;
  let insetEnd;
  let listData;
  let listItemHeight;
  let listLeft;
  let listRefHappeningNow;
  let listTop;
  let recycleItems;
  let renderFooter;
  let renderHeader;
  let scrollIndicatorInsetBottom;
  let scrollPosition;
  let setAddedFriendSuggestions;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = listItemHeight;
  let obj = listItemHeight(listLeft[3]);
  const cResult = obj.c(46);
  ({ accessibilityLabel, data, handleScrollAnimated, insetEnd, listItemHeight } = listItemSuggestedFriendHeight);
  listItemSuggestedFriendHeight = listItemSuggestedFriendHeight.listItemSuggestedFriendHeight;
  listLeft = listItemSuggestedFriendHeight.listLeft;
  ({ listRefHappeningNow, listTop } = listItemSuggestedFriendHeight);
  ({ recycleItems, scrollIndicatorInsetBottom, scrollPosition } = listItemSuggestedFriendHeight);
  const friendSuggestions = data.friendSuggestions;
  ({ renderHeader, renderFooter, setAddedFriendSuggestions } = data);
  const ref = listItemSuggestedFriendHeight.ref;
  const obj2 = listTop;
  const ref1 = listTop.useRef(null);
  if (cResult[0] !== listItemHeight) {
    const obj3 = { listItemHeight };
    cResult[0] = listItemHeight;
    cResult[1] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = listItemSuggestedFriendHeight(listLeft[4])(data, tmp5);
  ({ listData, friendsHeaderIndex, friendsHeaderOffset } = tmp7);
  const listHeaderHeight = tmp7.listHeaderHeight;
  if (cResult[2] !== listHeaderHeight) {
    const fn = function b() {
      let offset;
      let ref;
      let obj = {
        scrollToTop(arg0) {
          const current = ref.current;
          const tmp = undefined !== arg0 && arg0;
          if (current != null) {
            const obj = { offset, animated: tmp };
            current.scrollToOffset(obj);
          }
        }
      };
      return obj;
    };
    const items = [listHeaderHeight];
    cResult[2] = listHeaderHeight;
    cResult[3] = fn;
    cResult[4] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const imperativeHandle = obj2.useImperativeHandle(ref, tmp8, tmp9);
  if (cResult[5] === friendSuggestions) {
    if (cResult[6] === friendsHeaderOffset) {
      if (cResult[7] === listItemHeight) {
        if (cResult[8] === listItemSuggestedFriendHeight) {
          if (cResult[9] === listLeft) {
            if (cResult[10] === listTop) {
              if (cResult[11] === scrollPosition) {
                let tmp11;
                let tmp13;
                if (cResult[12] === setAddedFriendSuggestions) {
                  tmp11 = cResult[13];
                }
                const _Symbol = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  class O {
                    constructor(kind) {
                      return kind.kind;
                    }
                  }
                  cResult[14] = O;
                  tmp13 = O;
                } else {
                  class O {
                    constructor(kind) {
                      return kind.kind;
                    }
                  }
                }
                if (cResult[15] === listItemHeight) {
                  let tmp16;
                  class O {
                    constructor(kind) {
                      return kind.kind;
                    }
                  }
                  if (cResult[18] !== friendSuggestions) {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                    cResult[18] = friendSuggestions;
                    cResult[19] = B;
                  } else {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                  }
                  if (tmp(listLeft[10]).MessagesDataHeader.HappeningNow === renderHeader) {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                    tmp16 = tmp19;
                  } else {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                    if (tmp(listLeft[10]).MessagesDataHeader.EmptyState === renderHeader) {
                      let tmp17;
                      class B {
                        constructor(kind) {
                          kind = kind.kind;
                          if ("favorite" === kind) {
                            const _HermesInternal4 = HermesInternal;
                            return "fav:" + kind.channelId;
                          } else if ("channel" === kind) {
                            const _HermesInternal3 = HermesInternal;
                            return "ch:" + kind.channelId;
                          } else if ("separator" === kind) {
                            return "separator";
                          } else if ("friendsHeader" === kind) {
                            return "friendsHeader";
                          } else if ("suggestedFriend" === kind) {
                            let id;
                            if (friendSuggestions[kind.row] != null) {
                              id = tmp3.user.id;
                            }
                            if (id == null) {
                              id = kind.row;
                            }
                            const _HermesInternal2 = HermesInternal;
                            return "sf:" + id;
                          } else if ("placeholder" === kind) {
                            const _HermesInternal = HermesInternal;
                            return "placeholder:" + kind.row;
                          }
                        }
                      }
                      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                        class B {
                          constructor(kind) {
                            kind = kind.kind;
                            if ("favorite" === kind) {
                              const _HermesInternal4 = HermesInternal;
                              return "fav:" + kind.channelId;
                            } else if ("channel" === kind) {
                              const _HermesInternal3 = HermesInternal;
                              return "ch:" + kind.channelId;
                            } else if ("separator" === kind) {
                              return "separator";
                            } else if ("friendsHeader" === kind) {
                              return "friendsHeader";
                            } else if ("suggestedFriend" === kind) {
                              let id;
                              if (friendSuggestions[kind.row] != null) {
                                id = tmp3.user.id;
                              }
                              if (id == null) {
                                id = kind.row;
                              }
                              const _HermesInternal2 = HermesInternal;
                              return "sf:" + id;
                            } else if ("placeholder" === kind) {
                              const _HermesInternal = HermesInternal;
                              return "placeholder:" + kind.row;
                            }
                          }
                        }
                        const tmp18 = scrollPosition(listItemSuggestedFriendHeight(listLeft[12]), {});
                        cResult[22] = tmp18;
                        tmp17 = tmp18;
                      } else {
                        class B {
                          constructor(kind) {
                            kind = kind.kind;
                            if ("favorite" === kind) {
                              const _HermesInternal4 = HermesInternal;
                              return "fav:" + kind.channelId;
                            } else if ("channel" === kind) {
                              const _HermesInternal3 = HermesInternal;
                              return "ch:" + kind.channelId;
                            } else if ("separator" === kind) {
                              return "separator";
                            } else if ("friendsHeader" === kind) {
                              return "friendsHeader";
                            } else if ("suggestedFriend" === kind) {
                              let id;
                              if (friendSuggestions[kind.row] != null) {
                                id = tmp3.user.id;
                              }
                              if (id == null) {
                                id = kind.row;
                              }
                              const _HermesInternal2 = HermesInternal;
                              return "sf:" + id;
                            } else if ("placeholder" === kind) {
                              const _HermesInternal = HermesInternal;
                              return "placeholder:" + kind.row;
                            }
                          }
                        }
                      }
                      tmp16 = tmp17;
                    }
                  }
                  if (cResult[23] !== renderFooter) {
                    let tmp21;
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                    if (renderFooter) {
                      class B {
                        constructor(kind) {
                          kind = kind.kind;
                          if ("favorite" === kind) {
                            const _HermesInternal4 = HermesInternal;
                            return "fav:" + kind.channelId;
                          } else if ("channel" === kind) {
                            const _HermesInternal3 = HermesInternal;
                            return "ch:" + kind.channelId;
                          } else if ("separator" === kind) {
                            return "separator";
                          } else if ("friendsHeader" === kind) {
                            return "friendsHeader";
                          } else if ("suggestedFriend" === kind) {
                            let id;
                            if (friendSuggestions[kind.row] != null) {
                              id = tmp3.user.id;
                            }
                            if (id == null) {
                              id = kind.row;
                            }
                            const _HermesInternal2 = HermesInternal;
                            return "sf:" + id;
                          } else if ("placeholder" === kind) {
                            const _HermesInternal = HermesInternal;
                            return "placeholder:" + kind.row;
                          }
                        }
                      }
                      tmp21 = scrollPosition(listItemSuggestedFriendHeight(listLeft[13]), {});
                    }
                    cResult[23] = renderFooter;
                    cResult[24] = tmp21;
                  } else {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                  }
                  if (cResult[25] !== friendsHeaderIndex) {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                    if (null != friendsHeaderIndex) {
                      class B {
                        constructor(kind) {
                          kind = kind.kind;
                          if ("favorite" === kind) {
                            const _HermesInternal4 = HermesInternal;
                            return "fav:" + kind.channelId;
                          } else if ("channel" === kind) {
                            const _HermesInternal3 = HermesInternal;
                            return "ch:" + kind.channelId;
                          } else if ("separator" === kind) {
                            return "separator";
                          } else if ("friendsHeader" === kind) {
                            return "friendsHeader";
                          } else if ("suggestedFriend" === kind) {
                            let id;
                            if (friendSuggestions[kind.row] != null) {
                              id = tmp3.user.id;
                            }
                            if (id == null) {
                              id = kind.row;
                            }
                            const _HermesInternal2 = HermesInternal;
                            return "sf:" + id;
                          } else if ("placeholder" === kind) {
                            const _HermesInternal = HermesInternal;
                            return "placeholder:" + kind.row;
                          }
                        }
                      }
                      tmp24[0] = friendsHeaderIndex;
                    }
                    cResult[25] = friendsHeaderIndex;
                    cResult[26] = tmp23;
                  } else {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                  }
                  if (cResult[27] !== insetEnd) {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                    tmp26[0] = insetEnd;
                    cResult[27] = insetEnd;
                    cResult[28] = tmp26;
                  } else {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                  }
                  if (cResult[29] !== scrollIndicatorInsetBottom) {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                    tmp28[0] = scrollIndicatorInsetBottom;
                    cResult[29] = scrollIndicatorInsetBottom;
                    cResult[30] = tmp28;
                  } else {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                  }
                  if (cResult[31] === accessibilityLabel) {
                    class B {
                      constructor(kind) {
                        kind = kind.kind;
                        if ("favorite" === kind) {
                          const _HermesInternal4 = HermesInternal;
                          return "fav:" + kind.channelId;
                        } else if ("channel" === kind) {
                          const _HermesInternal3 = HermesInternal;
                          return "ch:" + kind.channelId;
                        } else if ("separator" === kind) {
                          return "separator";
                        } else if ("friendsHeader" === kind) {
                          return "friendsHeader";
                        } else if ("suggestedFriend" === kind) {
                          let id;
                          if (friendSuggestions[kind.row] != null) {
                            id = tmp3.user.id;
                          }
                          if (id == null) {
                            id = kind.row;
                          }
                          const _HermesInternal2 = HermesInternal;
                          return "sf:" + id;
                        } else if ("placeholder" === kind) {
                          const _HermesInternal = HermesInternal;
                          return "placeholder:" + kind.row;
                        }
                      }
                    }
                  }
                  const obj4 = { ref: ref1, accessibilityLabel, contentContainerStyle: tmp25, data: listData, estimatedHeaderSize: listHeaderHeight, estimatedItemSize: listItemHeight, getFixedItemSize: tmp14, getItemType: tmp13, keyExtractor: tmp15, ListFooterComponent: tmp20, ListHeaderComponent: tmp16, onScroll: handleScrollAnimated, recycleItems, renderItem: tmp11, scrollIndicatorInsets: tmp27, stickyHeaderIndices: tmp22 };
                  cResult[31] = accessibilityLabel;
                  cResult[32] = tmp25;
                  cResult[33] = tmp14;
                  cResult[34] = handleScrollAnimated;
                  cResult[35] = tmp15;
                  cResult[36] = listData;
                  cResult[37] = tmp20;
                  cResult[38] = tmp16;
                  cResult[39] = listHeaderHeight;
                  cResult[40] = listItemHeight;
                  const tmp31 = scrollPosition(tmp(listLeft[14]).AnimatedLegendList, obj4);
                  class R {
                    constructor(item) {
                      item = item.item;
                      const kind = item.kind;
                      if ("favorite" !== kind) {
                        if ("channel" !== kind) {
                          if ("separator" === kind) {
                            return jsx(MessagesItemSeparatorDefault, {});
                          } else if ("friendsHeader" === kind) {
                            return jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt: friendsHeaderOffset, stickyTop: listTop, stickyLeft: listLeft });
                          } else if ("suggestedFriend" === kind) {
                            return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendLegend, { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions });
                          } else if ("placeholder" === kind) {
                            return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: listItemHeight });
                          }
                        }
                      }
                      return jsx(MessagesItemChannel.MessagesItemChannelLegend, { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row });
                    }
                  }
                  cResult[41] = recycleItems;
                  cResult[42] = tmp11;
                  cResult[43] = tmp27;
                  cResult[44] = tmp22;
                  cResult[45] = tmp31;
                }
                const fn2 = function z(kind) {
                  kind = kind.kind;
                  if ("favorite" !== kind) {
                    if ("channel" !== kind) {
                      if ("placeholder" !== kind) {
                        if ("separator" === kind) {
                          return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                        } else if ("friendsHeader" === kind) {
                          return MessagesItemSuggestedFriendsHeader.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                        } else if ("suggestedFriend" === kind) {
                          return listItemSuggestedFriendHeight;
                        }
                      }
                    }
                  }
                  return listItemHeight;
                };
                cResult[15] = listItemHeight;
                cResult[16] = listItemSuggestedFriendHeight;
                cResult[17] = fn2;
              }
            }
          }
        }
      }
    }
  }
  class R {
    constructor(item) {
      item = item.item;
      const kind = item.kind;
      if ("favorite" !== kind) {
        if ("channel" !== kind) {
          if ("separator" === kind) {
            return jsx(MessagesItemSeparatorDefault, {});
          } else if ("friendsHeader" === kind) {
            return jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt: friendsHeaderOffset, stickyTop: listTop, stickyLeft: listLeft });
          } else if ("suggestedFriend" === kind) {
            return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendLegend, { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions });
          } else if ("placeholder" === kind) {
            return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: listItemHeight });
          }
        }
      }
      return jsx(MessagesItemChannel.MessagesItemChannelLegend, { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row });
    }
  }
  cResult[5] = friendSuggestions;
  cResult[6] = friendsHeaderOffset;
  cResult[7] = listItemHeight;
  cResult[8] = listItemSuggestedFriendHeight;
  cResult[9] = listLeft;
  cResult[10] = listTop;
  cResult[11] = scrollPosition;
  cResult[12] = setAddedFriendSuggestions;
  cResult[13] = R;
  tmp11 = R;
}) : (function MessagesLegendList(listItemHeight) {
  let accessibilityLabel;
  let data;
  let handleScrollAnimated;
  let insetEnd;
  let recycleItems;
  let ref;
  ({ data, insetEnd } = listItemHeight);
  const estimatedItemSize = listItemHeight.listItemHeight;
  const listItemSuggestedFriendHeight = listItemHeight.listItemSuggestedFriendHeight;
  const listLeft = listItemHeight.listLeft;
  const listRefHappeningNow = listItemHeight.listRefHappeningNow;
  const listTop = listItemHeight.listTop;
  const scrollIndicatorInsetBottom = listItemHeight.scrollIndicatorInsetBottom;
  const scrollPosition = listItemHeight.scrollPosition;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  ({ accessibilityLabel, handleScrollAnimated, recycleItems, ref } = listItemHeight);
  const ref2 = listLeft.useRef(null);
  let tmp2 = estimatedItemSize(listItemSuggestedFriendHeight[4])(data, { listItemHeight: estimatedItemSize });
  const friendsHeaderIndex = tmp2.friendsHeaderIndex;
  const friendsHeaderOffset = tmp2.friendsHeaderOffset;
  const estimatedHeaderSize = tmp2.listHeaderHeight;
  let items = [estimatedHeaderSize];
  const data2 = tmp2.listData;
  const imperativeHandle = listLeft.useImperativeHandle(ref, () => {
    let offset;
    let ref;
    let obj = {
      scrollToTop() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        const current = ref.current;
        if (current != null) {
          const obj = { offset, animated: flag };
          current.scrollToOffset(obj);
        }
      }
    };
    return obj;
  }, items);
  const items1 = [estimatedItemSize, scrollPosition, friendsHeaderOffset, listTop, listLeft, listItemSuggestedFriendHeight, friendSuggestions, setAddedFriendSuggestions];
  const renderItem = listLeft.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("favorite" !== kind) {
      if ("channel" !== kind) {
        if ("separator" === kind) {
          return jsx(MessagesItemSeparatorDefault, {});
        } else if ("friendsHeader" === kind) {
          return jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt: friendsHeaderOffset, stickyTop: listTop, stickyLeft: listLeft });
        } else if ("suggestedFriend" === kind) {
          return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendLegend, { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions });
        } else if ("placeholder" === kind) {
          return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: estimatedItemSize });
        }
      }
    }
    return jsx(MessagesItemChannel.MessagesItemChannelLegend, { channelId: item.channelId, placeholderHeight: estimatedItemSize, row: item.row });
  }, items1);
  const items2 = [estimatedItemSize, listItemSuggestedFriendHeight];
  const getItemType = listLeft.useCallback((kind) => kind.kind, []);
  const items3 = [friendSuggestions];
  const getFixedItemSize = listLeft.useCallback((kind) => {
    kind = kind.kind;
    if ("favorite" !== kind) {
      if ("channel" !== kind) {
        if ("placeholder" !== kind) {
          if ("separator" === kind) {
            return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
          } else if ("friendsHeader" === kind) {
            return MessagesItemSuggestedFriendsHeader.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
          } else if ("suggestedFriend" === kind) {
            return listItemSuggestedFriendHeight;
          }
        }
      }
    }
    return estimatedItemSize;
  }, items2);
  const items4 = [renderHeader, listRefHappeningNow];
  const keyExtractor = listLeft.useCallback((kind) => {
    kind = kind.kind;
    if ("favorite" === kind) {
      const _HermesInternal4 = HermesInternal;
      return "fav:" + kind.channelId;
    } else if ("channel" === kind) {
      const _HermesInternal3 = HermesInternal;
      return "ch:" + kind.channelId;
    } else if ("separator" === kind) {
      return "separator";
    } else if ("friendsHeader" === kind) {
      return "friendsHeader";
    } else if ("suggestedFriend" === kind) {
      let id;
      if (friendSuggestions[kind.row] != null) {
        id = tmp3.user.id;
      }
      if (id == null) {
        id = kind.row;
      }
      const _HermesInternal2 = HermesInternal;
      return "sf:" + id;
    } else if ("placeholder" === kind) {
      const _HermesInternal = HermesInternal;
      return "placeholder:" + kind.row;
    }
  }, items3);
  const items5 = [renderFooter];
  const ListHeaderComponent = listLeft.useMemo(() => {
    const tmp = renderHeader;
    if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
      return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
    } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
      return jsx(MessagesItemEmptyStateDefault, {});
    } else {
      return null;
    }
  }, items4);
  const items6 = [friendsHeaderIndex];
  const ListFooterComponent = listLeft.useMemo(() => {
    let tmp = null;
    if (renderFooter) {
      tmp = jsx(MessagesItemAddFriendsWidgetDefault, {});
    }
    return tmp;
  }, items5);
  const items7 = [insetEnd];
  const stickyHeaderIndices = listLeft.useMemo(() => {
    let tmp2;
    if (null != friendsHeaderIndex) {
      const items = [tmp];
      tmp2 = items;
    }
    return tmp2;
  }, items6);
  const items8 = [scrollIndicatorInsetBottom];
  const contentContainerStyle = listLeft.useMemo(() => ({ paddingBottom: insetEnd }), items7);
  const scrollIndicatorInsets = listLeft.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items8);
  return listRefHappeningNow(insetEnd(listItemSuggestedFriendHeight[14]).AnimatedLegendList, { ref: ref2, accessibilityLabel, contentContainerStyle, data: data2, estimatedHeaderSize, estimatedItemSize, getFixedItemSize, getItemType, keyExtractor, ListFooterComponent, ListHeaderComponent, onScroll, recycleItems, renderItem, scrollIndicatorInsets, stickyHeaderIndices });
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesLegendList.tsx");

export default memoResult;
