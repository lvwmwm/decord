// Module ID: 6856
// Function ID: 54227
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6856 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = null;
let closure_11 = null;
let closure_12 = false;
let closure_13 = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] };
let closure_14 = false;
let closure_15 = false;
let closure_16 = false;
let tmp2 = (Store) => {
  class WidgetStore {
    constructor() {
      self = this;
      tmp = closure_3(this, WidgetStore);
      obj = closure_6(WidgetStore);
      tmp2 = closure_5;
      if (closure_19()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = WidgetStore;
  callback2(WidgetStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "getPendingWidgets",
    value() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSaveablePendingWidgets",
    value() {
      let found = null;
      if (null != closure_10) {
        found = closure_10.filter((isDiscardable) => !isDiscardable.isDiscardable());
      }
      return found;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasPendingChanges",
    value() {
      let tmp = null !== closure_10;
      if (tmp) {
        let tmp3 = null === closure_11;
        if (!tmp3) {
          tmp3 = !WidgetStore(closure_1[8]).isEqual(closure_10, closure_11);
          const obj = WidgetStore(closure_1[8]);
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getWidgetUpdates",
    value() {
      let iter;
      let iter4;
      let saveablePendingWidgets = this.getSaveablePendingWidgets();
      if (null != saveablePendingWidgets) {
        if (null != closure_11) {
          const _Map = Map;
          const map = new Map(closure_11.map((id) => {
            const items = [id.id, id];
            return items;
          }));
          const _Map2 = Map;
          const map1 = new Map(saveablePendingWidgets.map((id) => {
            const items = [id.id, id];
            return items;
          }));
          const items = [];
          const items1 = [];
          const tmp26 = callback3(map1);
          let iter2 = tmp26();
          if (!iter2.done) {
            do {
              let tmp = closure_2;
              let tmp2 = closure_2(iter2.value, 2);
              let obj = tmp2[1];
              let value = map.get(tmp2[0]);
              let tmp4 = null != value && obj.isEqual(value);
              if (!tmp4) {
                let arr = items.push(obj);
              }
              iter = tmp26();
              iter2 = iter;
            } while (!iter.done);
          }
          const tmp7 = callback3(map);
          let iter3 = tmp7();
          if (!iter3.done) {
            do {
              let tmp8 = closure_2;
              let tmp9 = closure_2(iter3.value, 2);
              if (!map1.has(tmp9[0])) {
                arr = items1.push(tmp9[1]);
              }
              iter4 = tmp7();
              iter3 = iter4;
            } while (!iter4.done);
          }
          let num = 0;
          let flag = false;
          if (0 < saveablePendingWidgets.length) {
            while (true) {
              let tmp11 = saveablePendingWidgets[num];
              let id;
              if (null != tmp11) {
                id = tmp11.id;
              }
              let tmp13 = closure_11;
              let tmp14 = closure_11[num];
              let id1;
              if (null != tmp14) {
                id1 = tmp14.id;
              }
              flag = true;
              if (id !== id1) {
                break;
              } else {
                num = num + 1;
                flag = false;
                if (num >= saveablePendingWidgets.length) {
                  break;
                }
              }
            }
          }
          obj = { changedWidgets: items, removedWidgets: items1, hasOrderChanges: flag };
          return obj;
        }
      }
      obj = {};
      if (null == saveablePendingWidgets) {
        saveablePendingWidgets = [];
      }
      obj.changedWidgets = saveablePendingWidgets;
      obj.removedWidgets = [];
      obj.hasOrderChanges = false;
      return obj;
    }
  };
  items[5] = {
    key: "getChangedWidgets",
    value() {
      return this.getWidgetUpdates().changedWidgets;
    }
  };
  items[6] = {
    key: "getRemovedWidgets",
    value() {
      return this.getWidgetUpdates().removedWidgets;
    }
  };
  items[7] = {
    key: "hasUnsavedChanges",
    value() {
      const widgetUpdates = this.getWidgetUpdates();
      let hasOrderChanges = widgetUpdates.changedWidgets.length > 0;
      if (!hasOrderChanges) {
        hasOrderChanges = widgetUpdates.removedWidgets.length > 0;
      }
      if (!hasOrderChanges) {
        hasOrderChanges = widgetUpdates.hasOrderChanges;
      }
      return hasOrderChanges;
    }
  };
  items[8] = {
    key: "canSaveChanges",
    value() {
      const saveablePendingWidgets = this.getSaveablePendingWidgets();
      return null != saveablePendingWidgets && saveablePendingWidgets.every((isValid) => isValid.isValid());
    }
  };
  items[9] = {
    key: "isSubmitting",
    get() {
      return closure_12;
    }
  };
  items[10] = {
    key: "suggestedFetchError",
    get() {
      return closure_14;
    }
  };
  items[11] = {
    key: "suggestedFetchIsLoading",
    get() {
      return closure_15;
    }
  };
  items[12] = {
    key: "suggestedFetchAttempted",
    get() {
      return closure_16;
    }
  };
  items[13] = {
    key: "suggestedGameIds",
    get() {
      return closure_13;
    }
  };
  return callback(WidgetStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  WIDGET_PENDING_SET: function handleSetPendingWidgets(widgets) {
    const widgets2 = widgets.widgets;
    if (null === closure_11) {
      const currentUser = currentUser.getCurrentUser();
      if (null != currentUser) {
        const userProfile = userProfile.getUserProfile(currentUser.id);
        widgets = undefined;
        if (null != userProfile) {
          widgets = userProfile.widgets;
        }
        if (null == widgets) {
          widgets = [];
        }
        closure_11 = widgets;
      }
    }
  },
  WIDGET_PENDING_SAVE_START: function handleSavePendingWidgetsStart() {
    let closure_12 = true;
  },
  WIDGET_PENDING_SAVE_SUCCESS: function handleSavePendingWidgetsSuccess() {
    let closure_12 = false;
    if (null !== closure_10) {
      let closure_11 = null;
      closure_10 = null;
    }
  },
  WIDGET_PENDING_SAVE_FAILURE: function handleSavePendingWidgetsFailure() {
    let closure_12 = false;
  },
  WIDGET_SUGGESTED_FETCH_SUCCESS: function handleSetSuggestedGameIds(arg0) {
    ({ suggestedGamesIds: closure_13.suggestedGamesIds, suggestedWishlistGamesIds: closure_13.suggestedWishlistGamesIds } = arg0);
    let closure_15 = false;
    let closure_14 = false;
  },
  WIDGET_SUGGESTED_FETCH_FAILURE: function handleSetSuggestedFetchFailure() {
    let closure_14 = true;
    let closure_15 = false;
  },
  WIDGET_SUGGESTED_FETCH_START: function handleSetSuggestedFetchStart() {
    let closure_15 = true;
    let closure_14 = false;
    let closure_16 = true;
  },
  WIDGET_PENDING_CLEAR: function handleClearPendingWidgets() {
    let closure_10 = null;
    let closure_11 = null;
  },
  WIDGET_SUGGESTED_REMOVE_GAME: function handleRemoveApplicationIdFromSuggestedGames(applicationId) {
    const importDefault = applicationId.applicationId;
    const suggestedGamesIds = closure_13.suggestedGamesIds;
    closure_13.suggestedGamesIds = suggestedGamesIds.filter((arg0) => arg0 !== applicationId);
    const prop = closure_13.suggestedWishlistGamesIds;
    closure_13.suggestedWishlistGamesIds = prop.filter((arg0) => arg0 !== applicationId);
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_profile/WidgetStore.tsx");

export default tmp2;
