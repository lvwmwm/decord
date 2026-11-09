// Module ID: 12550
// Function ID: 12551
// Name: WidgetStore
// Dependencies: [32, 1385, 7848, 504, 1380, 12, 572, 2]

// Module 12550 (WidgetStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1385 */;
import UserProfileStore from "UserProfileStore" /* 7848 */;
import size from "module_2" /* 2 */;

let map, map1, uniqueKey;

const metroRequire = null;
const metroImportDefault = null;
let c8 = false;
let closure_9 = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] };
let c10 = false;
let c11 = false;
let c12 = false;
const Store = get_initializedDefault.Store;
class WidgetStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getPendingWidgets() {
    return c6;
  }
  getSaveablePendingWidgets() {
    let found1 = null;
    if (null != _null) {
      const mapped = _null.map((isUpdatable) => {
        let tmp = isUpdatable;
        let closure_0 = isUpdatable;
        if (!isUpdatable.isUpdatable()) {
          let found;
          const arr = _null2;
          if (_null2 != null) {
            found = arr.find((getUniqueKey) => {
              uniqueKey = getUniqueKey.getUniqueKey();
              return uniqueKey === uniqueKey.getUniqueKey();
            });
          }
          tmp = found;
        }
        return tmp;
      });
      let found = mapped.filter(GlobalUtils.isNotNullish);
      found1 = found.filter((isDiscardable) => !isDiscardable.isDiscardable());
    }
    return found1;
  }
  hasPendingChanges() {
    let tmp = null !== c6;
    if (tmp) {
      let tmp3 = null === c7;
      if (!tmp3) {
        const obj = _modDef12;
        tmp3 = !obj.isEqual(c6, c7);
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getWidgetUpdates() {
    let changedWidgets = this.getSaveablePendingWidgets();
    if (null != changedWidgets) {
      if (null != _null2) {
        function widgetKey(id) {
          id = id.id;
          if (id == null) {
            id = id.getUniqueKey();
          }
          return id;
        }
        const _Map = Map;
        const self = this;
        const self2 = this;
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map = new Map(_null2.map((id) => {
          if (typeof widgetKey === "function") {
            id = id.id;
            if (id == null) {
              id = id.getUniqueKey();
            }
            const items = [id, id];
            return items;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }));
        map1 = new Map(changedWidgets.map((id) => {
          if (typeof widgetKey === "function") {
            id = id.id;
            if (id == null) {
              id = id.getUniqueKey();
            }
            const items = [id, id];
            return items;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }));
        let items = [];
        const items1 = [];
        const tmp41 = map1[Symbol.iterator]();
        while (tmp41 !== undefined) {
          let tmp5 = _slicedToArray(tmp2, 2);
          let obj = tmp5[1];
          let value = map.get(tmp5[0]);
          let isEqualResult = null != value;
          if (isEqualResult) {
            isEqualResult = obj.isEqual(tmp7);
          }
          if (!isEqualResult) {
            let arr = items.push(obj);
          }
          continue;
        }
        for (const item10032 of tmp38) {
          let tmp16 = _slicedToArray(item10032, 2);
          let tmp17 = tmp16[1];
          if (!map1.has(tmp16[0])) {
            let arr2 = items1.push(tmp17);
          }
          continue;
        }
        let flag = false;
        const entries = changedWidgets.entries();
        const obj2 = entries[Symbol.iterator]();
        while (obj2 !== undefined) {
          let tmp26 = _slicedToArray(tmp23, 2);
          let tmp27 = tmp26[1];
          let tmp29 = _null2[tmp26[0]];
          if (null != tmp29) {
            let widgetKeyResult = widgetKey(tmp27);
            let obj3 = { changedWidgets: items, removedWidgets: items1, hasOrderChanges: flag };
            return obj3;
          }
          flag = true;
          obj2.return();
          break;
        }
      }
    }
    if (changedWidgets == null) {
      changedWidgets = [];
    }
    return { changedWidgets, removedWidgets: [], hasOrderChanges: false };
  }
  getChangedWidgets() {
    return this.getWidgetUpdates().changedWidgets;
  }
  getRemovedWidgets() {
    return this.getWidgetUpdates().removedWidgets;
  }
  hasUnsavedChanges() {
    const widgetUpdates = this.getWidgetUpdates();
    let tmp2 = widgetUpdates.changedWidgets.length > 0;
    const hasOrderChanges = widgetUpdates.hasOrderChanges;
    if (!tmp2) {
      tmp2 = widgetUpdates.removedWidgets.length > 0;
    }
    if (!tmp2) {
      tmp2 = hasOrderChanges;
    }
    return tmp2;
  }
  canSaveChanges() {
    const saveablePendingWidgets = this.getSaveablePendingWidgets();
    const everyResult = null != saveablePendingWidgets && saveablePendingWidgets.every((isValid) => isValid.isValid());
    return everyResult;
  }
}
const prototype = WidgetStore.prototype;
Object.defineProperty(prototype, "isSubmitting", {
  get: function isSubmitting() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchError", {
  get: function suggestedFetchError() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchIsLoading", {
  get: function suggestedFetchIsLoading() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedFetchAttempted", {
  get: function suggestedFetchAttempted() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "suggestedGameIds", {
  get: function suggestedGameIds() {
    return closure_9;
  },
  set: undefined
});
let obj = {
  WIDGET_PENDING_SET: function handleSetPendingWidgets(widgets) {
    const widgets2 = widgets.widgets;
    if (null === c7) {
      const currentUser = UserStore.getCurrentUser();
      if (null != currentUser) {
        const userProfile = UserProfileStore.getUserProfile(currentUser.id);
        widgets = undefined;
        if (userProfile != null) {
          widgets = userProfile.widgets;
        }
        if (widgets == null) {
          widgets = [];
        }
        c7 = widgets;
      }
    }
  },
  WIDGET_PENDING_SAVE_START: function handleSavePendingWidgetsStart() {
    c8 = true;
  },
  WIDGET_PENDING_SAVE_SUCCESS: function handleSavePendingWidgetsSuccess() {
    c8 = false;
    if (null !== c6) {
      let c7 = null;
      c6 = null;
    }
  },
  WIDGET_PENDING_SAVE_FAILURE: function handleSavePendingWidgetsFailure() {
    c8 = false;
  },
  WIDGET_SUGGESTED_FETCH_SUCCESS: function handleSetSuggestedGameIds(arg0) {
    ({ suggestedGamesIds: closure_9.suggestedGamesIds, suggestedWishlistGamesIds: closure_9.suggestedWishlistGamesIds } = arg0);
    c11 = false;
    c10 = false;
  },
  WIDGET_SUGGESTED_FETCH_FAILURE: function handleSetSuggestedFetchFailure() {
    c10 = true;
    c11 = false;
  },
  WIDGET_SUGGESTED_FETCH_START: function handleSetSuggestedFetchStart() {
    c11 = true;
    c10 = false;
    c12 = true;
  },
  WIDGET_PENDING_CLEAR: function handleClearPendingWidgets() {
    let c6 = null;
    let c7 = null;
  },
  WIDGET_SUGGESTED_REMOVE_GAME: function handleRemoveApplicationIdFromSuggestedGames(applicationId) {
    applicationId = applicationId.applicationId;
    const suggestedGamesIds = closure_9.suggestedGamesIds;
    closure_9.suggestedGamesIds = suggestedGamesIds.filter((item) => item !== applicationId);
    const prop = closure_9.suggestedWishlistGamesIds;
    closure_9.suggestedWishlistGamesIds = prop.filter((item) => item !== applicationId);
  }
};
const widgetStore = new WidgetStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/user_profile/WidgetStore.tsx");

export default widgetStore;
