// Module ID: 2141
// Function ID: 2142
// Name: GameStore
// Dependencies: [2142, 504, 1381, 572, 2]

// Module 2141 (GameStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import URLUtilsDefault from "URLUtils" /* 1381 */;
import GameRecord from "GameRecord" /* 2142 */;
import size from "module_2" /* 2 */;

let game, message_preview;

const f86497 = function(id) {
  if (!set.has(id.id)) {
    const self = this;
    const self2 = this;
    id = id.id;
    const tmp4 = new closure_2_2(id);
    const result = set(id, tmp4);
    c0 = true;
    set3.delete(id.id);
    set2.delete(id.id);
  }
};
const f86498 = (message) => {
  message = message.message;
  closure_0 = false;
  const mention_games = message.mention_games;
  if (mention_games != null) {
    const item = mention_games.forEach(f86497);
  }
  if (null != message.referenced_message) {
    const referenced_message = message.referenced_message;
    closure_0 = false;
    const mention_games1 = referenced_message.mention_games;
    if (mention_games1 != null) {
      const item1 = mention_games1.forEach(f86497);
    }
    if (null != referenced_message.referenced_message) {
      const tmp4 = closure_2_7(referenced_message.referenced_message) || closure_0;
      closure_0 = tmp4;
    }
    const message_snapshots = referenced_message.message_snapshots;
    if (message_snapshots != null) {
      const item2 = message_snapshots.forEach(f86498);
    }
    closure_0 = closure_0 || closure_0;
  }
  const message_snapshots1 = message.message_snapshots;
  if (message_snapshots1 != null) {
    const item3 = message_snapshots1.forEach(f86498);
  }
  closure_0 = closure_0 || closure_0;
};
function createGamesFromMessage(referenced_message) {
  let closure_0 = false;
  const mention_games = referenced_message.mention_games;
  if (mention_games != null) {
    const item = mention_games.forEach(f86497);
  }
  if (null != referenced_message.referenced_message) {
    const tmp3 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
    closure_0 = tmp3;
  }
  const message_snapshots = referenced_message.message_snapshots;
  if (message_snapshots != null) {
    const item1 = message_snapshots.forEach(f86498);
  }
  return closure_0;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  return messages.reduce((acc, mention_games) => {
    let closure_0 = false;
    mention_games = mention_games.mention_games;
    if (mention_games != null) {
      const item = mention_games.forEach(f86497);
    }
    if (null != mention_games.referenced_message) {
      const referenced_message = mention_games.referenced_message;
      closure_0 = false;
      const mention_games1 = referenced_message.mention_games;
      if (mention_games1 != null) {
        const item1 = mention_games1.forEach(f86497);
      }
      if (null != referenced_message.referenced_message) {
        const tmp4 = closure_7(referenced_message.referenced_message) || closure_0;
        closure_0 = tmp4;
      }
      const message_snapshots = referenced_message.message_snapshots;
      if (message_snapshots != null) {
        const item2 = message_snapshots.forEach(f86498);
      }
      closure_0 = closure_0 || closure_0;
    }
    const message_snapshots1 = mention_games.message_snapshots;
    if (message_snapshots1 != null) {
      const item3 = message_snapshots1.forEach(f86498);
    }
    return closure_0 || acc;
  }, false);
}
function handleLoadSearchResults(data) {
  data = data.data;
  let c0 = false;
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      let item = arr.forEach((mention_games) => {
        closure_0 = false;
        mention_games = mention_games.mention_games;
        if (mention_games != null) {
          let item = mention_games.forEach(f86497);
        }
        if (null != mention_games.referenced_message) {
          let referenced_message = mention_games.referenced_message;
          c0 = false;
          let mention_games1 = referenced_message.mention_games;
          if (mention_games1 != null) {
            let item1 = mention_games1.forEach(f86497);
          }
          if (null != referenced_message.referenced_message) {
            let tmp4 = closure_2_7(referenced_message.referenced_message) || c0;
            c0 = tmp4;
          }
          let message_snapshots = referenced_message.message_snapshots;
          if (message_snapshots != null) {
            let item2 = message_snapshots.forEach(f86498);
          }
          closure_0 = c0 || closure_0;
        }
        let message_snapshots1 = mention_games.message_snapshots;
        if (message_snapshots1 != null) {
          let item3 = message_snapshots1.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      });
    });
  });
  return c0;
}
function handleIncomingMessage(message) {
  message = message.message;
  let closure_0 = false;
  const mention_games = message.mention_games;
  if (mention_games != null) {
    const item = mention_games.forEach(f86497);
  }
  if (null != message.referenced_message) {
    const referenced_message = message.referenced_message;
    closure_0 = false;
    const mention_games1 = referenced_message.mention_games;
    if (mention_games1 != null) {
      const item1 = mention_games1.forEach(f86497);
    }
    if (null != referenced_message.referenced_message) {
      const tmp4 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
      closure_0 = tmp4;
    }
    const message_snapshots = referenced_message.message_snapshots;
    if (message_snapshots != null) {
      const item2 = message_snapshots.forEach(f86498);
    }
    closure_0 = closure_0 || closure_0;
  }
  const message_snapshots1 = message.message_snapshots;
  if (message_snapshots1 != null) {
    const item3 = message_snapshots1.forEach(f86498);
  }
  return closure_0;
}
let map = new Map();
let set = new Set();
let set1 = new Set();
let set2 = new Set();
const Store = get_initializedDefault.Store;
class GameStore extends Store {
  isFetching(arg0) {
    const hasItem = null != arg0 && set.has(arg0);
    return hasItem;
  }
  didFetchingFail(nextResult) {
    const hasItem = null != nextResult && set1.has(nextResult);
    return hasItem;
  }
  getGame(arg0) {
    let value;
    if (null != arg0) {
      value = map.get(arg0);
    }
    return value;
  }
  hasNoData(nextResult) {
    const hasItem = null != nextResult && set2.has(nextResult);
    return hasItem;
  }
  getCoverImageUrl(id, size) {
    let tmp = null;
    if (null != id) {
      const value = map.get(id);
      let coverURL;
      if (value != null) {
        coverURL = value.getCoverURL();
      }
      tmp = coverURL;
    }
    if (null == tmp) {
      return null;
    } else if (null == size) {
      return tmp;
    } else {
      const obj2 = URLUtilsDefault;
      const str = obj2.toURLSafe(tmp);
      let str1 = tmp;
      if (null != str) {
        const searchParams = str.searchParams;
        const str2 = size.size;
        const result = searchParams.set("size", str2.toString());
        str1 = str.toString();
      }
      return str1;
    }
  }
}
const prototype = GameStore.prototype;
GameStore.displayName = "NewGameStore";
const obj = {
  LOGOUT: function handleLogout() {
    map = new Map();
    set = new Set();
    set1 = new Set();
    set2 = new Set();
  },
  GAME_FETCH: function handleFetch(arg0) {
    let force;
    let gameIds;
    ({ gameIds, force } = arg0);
    if (force === undefined) {
      force = false;
    }
    const item = gameIds.forEach((item) => {
      set.add(item);
      set1.delete(item);
      const tmp3 = force;
      if (tmp3) {
        set2.delete(item);
      }
    });
  },
  GAME_FETCH_CANCELLED: function handleFetchCancelled(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((item) => set.delete(item));
  },
  GAME_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let gameIds;
    let games;
    let set4;
    ({ gameIds, games } = arg0);
    set = new Set(gameIds);
    const item = gameIds.forEach((item) => {
      set2.delete(item);
      set3.delete(item);
    });
    const item1 = games.forEach((id) => {
      set.delete(id.id);
      id = id.id;
      const tmp2 = new GameRecord(id);
      const result = set(id, tmp2);
    });
    const item2 = set.forEach((item) => {
      if (!set.has(item)) {
        set4.add(item);
      }
    });
  },
  GLOBAL_DISCOVERY_GAMES_TRENDING_FETCH_SUCCESS: function handleTrendingFetchSuccess(data) {
    data = data.data;
    if (0 === data.games.length) {
      return false;
    } else {
      const games = data.games;
      const item = games.forEach((game) => {
        game = game.game;
        const id = game.id;
        const tmp = new GameRecord(game);
        const result = set(id, tmp);
        set3.delete(game.id);
        set2.delete(game.id);
      });
    }
  },
  GAME_FETCH_FAILURE: function handleFetchFailure(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((item) => {
      set.delete(item);
      set2.add(item);
    });
  },
  GAME_SEARCH_FETCH_SUCCESS: function handleSearchFetchSuccess(games) {
    games = games.games;
    if (0 === games.length) {
      return false;
    } else {
      const item = games.forEach((id) => {
        id = id.id;
        const tmp = new GameRecord(id);
        const result = set(id, tmp);
        set3.delete(id.id);
        set2.delete(id.id);
      });
    }
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  SMART_SEARCH_FETCH_SUCCESS: function handleSmartSearchFetchSuccess(messages) {
    messages = messages.messages;
    return messages.reduce((acc, mention_games) => {
      let closure_0 = false;
      mention_games = mention_games.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach(f86497);
      }
      if (null != mention_games.referenced_message) {
        const referenced_message = mention_games.referenced_message;
        closure_0 = false;
        const mention_games1 = referenced_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach(f86497);
        }
        if (null != referenced_message.referenced_message) {
          const tmp4 = closure_7(referenced_message.referenced_message) || closure_0;
          closure_0 = tmp4;
        }
        const message_snapshots = referenced_message.message_snapshots;
        if (message_snapshots != null) {
          const item2 = message_snapshots.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      }
      const message_snapshots1 = mention_games.message_snapshots;
      if (message_snapshots1 != null) {
        const item3 = message_snapshots1.forEach(f86498);
      }
      return closure_0 || acc;
    }, false);
  },
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  CONVERSATION_MESSAGES_FETCH_SUCCESS: function handleConversationMessagesFetchSuccess(messages) {
    messages = messages.messages;
    const combined = messages.concat(messages.messageReferences);
    return combined.reduce((acc, mention_games) => {
      let closure_0 = false;
      mention_games = mention_games.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach(f86497);
      }
      if (null != mention_games.referenced_message) {
        const referenced_message = mention_games.referenced_message;
        closure_0 = false;
        const mention_games1 = referenced_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach(f86497);
        }
        if (null != referenced_message.referenced_message) {
          const tmp4 = closure_7(referenced_message.referenced_message) || closure_0;
          closure_0 = tmp4;
        }
        const message_snapshots = referenced_message.message_snapshots;
        if (message_snapshots != null) {
          const item2 = message_snapshots.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      }
      const message_snapshots1 = mention_games.message_snapshots;
      if (message_snapshots1 != null) {
        const item3 = message_snapshots1.forEach(f86498);
      }
      return closure_0 || acc;
    }, false);
  },
  CHANNEL_CONVERSATIONS_FETCH_SUCCESS: function handleChannelConversationsFetchSuccess(rawConversations) {
    rawConversations = rawConversations.rawConversations;
    let c0 = false;
    let item = rawConversations.forEach((messages) => {
      messages = messages.messages;
      if (messages != null) {
        let item = messages.forEach((mention_games) => {
          closure_0 = false;
          mention_games = mention_games.mention_games;
          if (mention_games != null) {
            const item = mention_games.forEach(f86497);
          }
          if (null != mention_games.referenced_message) {
            const referenced_message = mention_games.referenced_message;
            closure_0 = false;
            const mention_games1 = referenced_message.mention_games;
            if (mention_games1 != null) {
              const item1 = mention_games1.forEach(f86497);
            }
            if (null != referenced_message.referenced_message) {
              const tmp4 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
              closure_0 = tmp4;
            }
            const message_snapshots = referenced_message.message_snapshots;
            if (message_snapshots != null) {
              const item2 = message_snapshots.forEach(f86498);
            }
            closure_0 = closure_0 || closure_0;
          }
          const message_snapshots1 = mention_games.message_snapshots;
          if (message_snapshots1 != null) {
            const item3 = message_snapshots1.forEach(f86498);
          }
          closure_0 = closure_0 || closure_0;
        });
      }
    });
    return c0;
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    return pins.reduce((acc, message) => {
      message = message.message;
      let closure_0 = false;
      const mention_games = message.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach(f86497);
      }
      if (null != message.referenced_message) {
        const referenced_message = message.referenced_message;
        closure_0 = false;
        const mention_games1 = referenced_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach(f86497);
        }
        if (null != referenced_message.referenced_message) {
          const tmp4 = closure_7(referenced_message.referenced_message) || closure_0;
          closure_0 = tmp4;
        }
        const message_snapshots = referenced_message.message_snapshots;
        if (message_snapshots != null) {
          const item2 = message_snapshots.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      }
      const message_snapshots1 = message.message_snapshots;
      if (message_snapshots1 != null) {
        const item3 = message_snapshots1.forEach(f86498);
      }
      return closure_0 || acc;
    }, false);
  },
  THREAD_LIST_SYNC: function handleThreadListSync(mostRecentMessages) {
    mostRecentMessages = mostRecentMessages.mostRecentMessages;
    if (mostRecentMessages == null) {
      mostRecentMessages = [];
    }
    return mostRecentMessages.reduce((acc, mention_games) => {
      let closure_0 = false;
      mention_games = mention_games.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach(f86497);
      }
      if (null != mention_games.referenced_message) {
        const referenced_message = mention_games.referenced_message;
        closure_0 = false;
        const mention_games1 = referenced_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach(f86497);
        }
        if (null != referenced_message.referenced_message) {
          const tmp4 = closure_7(referenced_message.referenced_message) || closure_0;
          closure_0 = tmp4;
        }
        const message_snapshots = referenced_message.message_snapshots;
        if (message_snapshots != null) {
          const item2 = message_snapshots.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      }
      const message_snapshots1 = mention_games.message_snapshots;
      if (message_snapshots1 != null) {
        const item3 = message_snapshots1.forEach(f86498);
      }
      return closure_0 || acc;
    }, false);
  },
  MESSAGE_CREATE: handleIncomingMessage,
  MESSAGE_UPDATE: handleIncomingMessage,
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    let closure_0 = false;
    const values = Object.values(threads.threads);
    let item = values.forEach((item) => {
      let first_message;
      let most_recent_message;
      ({ first_message, most_recent_message } = item);
      if (null != first_message) {
        closure_0 = false;
        const mention_games = first_message.mention_games;
        if (mention_games != null) {
          item = mention_games.forEach(f86497);
        }
        if (null != first_message.referenced_message) {
          const referenced_message = first_message.referenced_message;
          closure_0 = false;
          const mention_games1 = referenced_message.mention_games;
          if (mention_games1 != null) {
            const item1 = mention_games1.forEach(f86497);
          }
          if (null != referenced_message.referenced_message) {
            const tmp4 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
            closure_0 = tmp4;
          }
          const message_snapshots = referenced_message.message_snapshots;
          if (message_snapshots != null) {
            const item2 = message_snapshots.forEach(f86498);
          }
          closure_0 = closure_0 || closure_0;
        }
        const message_snapshots1 = first_message.message_snapshots;
        if (message_snapshots1 != null) {
          const item3 = message_snapshots1.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      }
      if (null != most_recent_message) {
        closure_0 = false;
        const mention_games2 = most_recent_message.mention_games;
        if (mention_games2 != null) {
          const item4 = mention_games2.forEach(f86497);
        }
        if (null != most_recent_message.referenced_message) {
          const referenced_message2 = most_recent_message.referenced_message;
          closure_0 = false;
          const mention_games3 = referenced_message2.mention_games;
          if (mention_games3 != null) {
            const item5 = mention_games3.forEach(f86497);
          }
          if (null != referenced_message2.referenced_message) {
            const tmp10 = createGamesFromMessage(referenced_message2.referenced_message) || closure_0;
            closure_0 = tmp10;
          }
          const message_snapshots2 = referenced_message2.message_snapshots;
          if (message_snapshots2 != null) {
            const item6 = message_snapshots2.forEach(f86498);
          }
          closure_0 = closure_0 || closure_0;
        }
        const message_snapshots3 = most_recent_message.message_snapshots;
        if (message_snapshots3 != null) {
          const item7 = message_snapshots3.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      }
    });
    return closure_0;
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
    supplementalData = supplementalData.supplementalData;
    let closure_0 = false;
    let item = supplementalData.forEach((message_preview) => {
      message_preview = message_preview.message_preview;
      if (null != message_preview) {
        closure_0 = false;
        const mention_games = message_preview.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach(f86497);
        }
        if (null != message_preview.referenced_message) {
          const referenced_message = message_preview.referenced_message;
          closure_0 = false;
          const mention_games1 = referenced_message.mention_games;
          if (mention_games1 != null) {
            const item1 = mention_games1.forEach(f86497);
          }
          if (null != referenced_message.referenced_message) {
            const tmp4 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
            closure_0 = tmp4;
          }
          const message_snapshots = referenced_message.message_snapshots;
          if (message_snapshots != null) {
            const item2 = message_snapshots.forEach(f86498);
          }
          closure_0 = closure_0 || closure_0;
        }
        const message_snapshots1 = message_preview.message_snapshots;
        if (message_snapshots1 != null) {
          const item3 = message_snapshots1.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      }
    });
    return closure_0;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadICYMIHydratedItems(messageItems) {
    messageItems = messageItems.messageItems;
    let closure_0 = false;
    let item = messageItems.forEach((message) => {
      if (null != message.message) {
        message = message.message;
        closure_0 = false;
        const mention_games = message.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach(f86497);
        }
        if (null != message.referenced_message) {
          const referenced_message = message.referenced_message;
          closure_0 = false;
          const mention_games1 = referenced_message.mention_games;
          if (mention_games1 != null) {
            const item1 = mention_games1.forEach(f86497);
          }
          if (null != referenced_message.referenced_message) {
            const tmp4 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
            closure_0 = tmp4;
          }
          const message_snapshots = referenced_message.message_snapshots;
          if (message_snapshots != null) {
            const item2 = message_snapshots.forEach(f86498);
          }
          closure_0 = closure_0 || closure_0;
        }
        const message_snapshots1 = message.message_snapshots;
        if (message_snapshots1 != null) {
          const item3 = message_snapshots1.forEach(f86498);
        }
        closure_0 = closure_0 || closure_0;
      }
    });
    return closure_0;
  }
};
const gameStore = new GameStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/games/GameStore.tsx");

export default gameStore;
