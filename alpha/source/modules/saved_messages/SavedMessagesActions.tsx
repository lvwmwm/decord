// Module ID: 12649
// Function ID: 12650
// Name: SavedMessagesActions
// Dependencies: [5, 9680, 1085, 1295, 9681, 584, 2]
// Exports: deleteSavedMessage, fetchAndUpdateSavedMessages, fetchBookmarks, upsertSavedMessage

// Module 12649 (SavedMessagesActions)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9680 */;
import size from "module_2" /* 2 */;

let bookmarksFetchState, c3, c4, c8;

let obj = function _upsertSavedMessage() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
    let obj9;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.PUT_SAVED_MESSAGE(closure_0.channelId, closure_0.messageId), body: obj4, rejectWithError: obj9.rejectWithMigratedError() };
            const put = HTTP.put;
            obj4 = { due_at: null, source: null };
            ({ dueAt: obj8.due_at, source: obj8.source } = closure_0);
            obj9 = HTTPUtils;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: put(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          c4 = 3;
          const obj7 = { value: obj.savedMessageCreateObjectToClient(closure_0.body), done: true };
          obj = closure_130_0(closure_130_2[4]);
          return obj7;
        }
      } catch (tmp10) {
        c4 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
obj = function _deleteSavedMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let obj6;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.DELETE_SAVED_MESSAGE(closure_0.channelId, closure_0.messageId), rejectWithError: obj6.rejectWithMigratedError() };
    const del = HTTP.del;
    obj6 = HTTPUtils;
    await del(obj4);
    return true;
  });
  return obj(...arguments);
};
obj = function _fetchSavedMessages() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj14;
    let obj6;
    let reminders;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c2;
      try {
        let body;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            body = undefined;
            c2 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.GET_SAVED_MESSAGES, query: { bookmark_ids: true }, rejectWithError: obj14.rejectWithMigratedError() };
            const get = HTTP.get;
            obj14 = HTTPUtils;
            c3 = 4;
            c4 = 1;
            const obj4 = { value: get(request), done: false };
            return obj4;
          }
        } else if (1 === c3) {
          c2 = 0;
          const obj5 = { type: "SAVED_MESSAGES_UPDATE", reminders: [], bookmarkIds: [] };
          c3 = 2;
          c4 = 1;
          const obj7 = { value: obj6.dispatch(obj5), done: false };
          obj6 = closure_129_1(closure_129_2[5]);
          return obj7;
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c4 = 3;
            const obj9 = { value: undefined, done: true };
            return obj9;
          }
        } else if (3 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c4 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          body = value;
          c2 = 0;
          body = body.body;
          const obj12 = { type: "SAVED_MESSAGES_UPDATE", reminders: reminders.map(closure_129_0(closure_129_2[4]).savedMessageCreateObjectToClient), bookmarkIds: body.bookmark_ids };
          reminders = body.reminders;
          const dispatch = closure_129_1(closure_129_2[5]).dispatch;
          const tmp18 = closure_129_1(closure_129_2[5]);
          c3 = 3;
          c4 = 1;
          obj = { value: dispatch(obj12), done: false };
          return obj;
        }
      } catch (tmp8) {
        if (0 === c2) {
          c4 = 3;
          throw tmp8;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchBookmarks() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let bookmarksCursor2;
    let closure_4;
    let flag;
    let obj12;
    let obj9;
    let requestId;
    let results1;
    let sum;
    let tmp4;
    function shouldFetchBookmarks(flag) {
      obj = bookmarksFetchState;
      bookmarksFetchState = bookmarksFetchState.getBookmarksFetchState();
      if (closure_1_0(before[4]).BookmarksFetchState.FAILED === bookmarksFetchState) {
        return true;
      } else {
        if (closure_1_0(before[4]).BookmarksFetchState.LOADING !== bookmarksFetchState) {
          if (closure_1_0(before[4]).BookmarksFetchState.LOADED_FINISHED !== bookmarksFetchState) {
            if (closure_1_0(before[4]).BookmarksFetchState.LOADED_HAS_MORE === bookmarksFetchState) {
              const tmp4 = flag || !obj.hasFetchedBookmarks();
              return tmp4;
            }
          }
        }
        return false;
      }
    }
    let closure_0 = arg0;
    await value;
    if (2 === tmp4) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else if (shouldFetchBookmarks(flag)) {
        bookmarksCursor2 = bookmarksCursor.getBookmarksCursor();
        sum = sum + 1;
        requestId = sum;
        const obj11 = { type: "BOOKMARKS_FETCH", requestId };
        const obj5 = closure_132_1(closure_132_2[5]);
        obj5.dispatch(obj11);
        let c5 = 1;
        const HTTP = closure_132_0(closure_132_2[3]).HTTP;
        const request = { url: constants.GET_BOOKMARKS, query: obj12, retries: 2, rejectWithError: obj9.rejectWithMigratedError() };
        let before = bookmarksCursor2;
        const get = HTTP.get;
        if (bookmarksCursor2 == null) {
          before = undefined;
        }
        obj12 = { before, limit: 25 };
        obj9 = closure_132_0(closure_132_2[3]);
        let c6 = 4;
        c7 = 1;
        const obj13 = { value: get(request), done: false };
        return obj13;
      }
    } else if (3 === tmp4) {
      c5 = 0;
      const obj14 = { type: "BOOKMARKS_FETCH_FAILURE", requestId };
      const obj2 = closure_132_1(closure_132_2[5]);
      obj2.dispatch(obj14);
      c7 = 3;
      const obj15 = { value: undefined, done: true };
      return obj15;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 0;
      c7 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      let nextBefore = value;
      c5 = 0;
      const body = nextBefore.body;
      const obj16 = { type: "BOOKMARKS_FETCH_SUCCESS", requestId, nextBefore, bookmarks: results1.map(closure_132_0(closure_132_2[4]).savedMessageCreateObjectToClient), hasMore: body.has_more };
      const results = body.results;
      const dispatch = closure_132_1(closure_132_2[5]).dispatch;
      const tmp53 = closure_132_1(closure_132_2[5]);
      const atResult = results.at(-1);
      let saved_at;
      if (atResult != null) {
        saved_at = atResult.save_data.saved_at;
      }
      nextBefore = saved_at;
      if (saved_at == null) {
        nextBefore = bookmarksCursor2;
      }
      results1 = body.results;
      dispatch(obj16);
    }
    await "IconComponent";
    let obj6 = closure_0;
    if (closure_0 === undefined) {
      obj6 = {};
    }
    flag = obj6.loadMore ?? false;
    return "Set";
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_8 = null;
let c9 = 0;
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesActions.tsx");

export const upsertSavedMessage = function upsertSavedMessage() {
  return obj(...arguments);
};
export const deleteSavedMessage = function deleteSavedMessage() {
  return obj(...arguments);
};
export const fetchAndUpdateSavedMessages = function fetchAndUpdateSavedMessages() {
  let resolved;
  function fetchSavedMessages() {
    return obj(...arguments);
  }
  if (SavedMessagesStore.getIsStale()) {
    if (closure_8 == null) {
      const promise = fetchSavedMessages();
      closure_8 = promise.finally(() => {
        c8 = null;
      });
    }
    resolved = closure_8;
  } else {
    resolved = Promise.resolve();
  }
  return resolved;
};
export const fetchBookmarks = function fetchBookmarks() {
  return obj(...arguments);
};
