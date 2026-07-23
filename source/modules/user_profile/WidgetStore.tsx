// Module ID: 6861
// Function ID: 54270
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 18, 1849, 6856, 22, 566, 686, 2]

// Module 6861 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
let c10 = null;
let c11 = null;
let c12 = false;
let closure_13 = { suggestedGamesIds: [], suggestedWishlistGamesIds: [] };
let c14 = false;
let c15 = false;
let c16 = false;
let tmp2 = ((Store) => {
  class WidgetStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, WidgetStore);
      obj = outer1_6(WidgetStore);
      tmp2 = outer1_5;
      if (outer1_19()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(WidgetStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  let items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "getPendingWidgets",
    value() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSaveablePendingWidgets",
    value() {
      let found = null;
      if (null != outer1_10) {
        found = outer1_10.filter((isDiscardable) => !isDiscardable.isDiscardable());
      }
      return found;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasPendingChanges",
    value() {
      let tmp = null !== outer1_10;
      if (tmp) {
        let tmp3 = null === outer1_11;
        if (!tmp3) {
          tmp3 = !WidgetStore(outer1_1[8]).isEqual(outer1_10, outer1_11);
          const obj = WidgetStore(outer1_1[8]);
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
        if (null != outer1_11) {
          const _Map = Map;
          const map = new Map(outer1_11.map((id) => {
            const items = [id.id, id];
            return items;
          }));
          const _Map2 = Map;
          const map1 = new Map(saveablePendingWidgets.map((id) => {
            const items = [id.id, id];
            return items;
          }));
          let items = [];
          const items1 = [];
          const tmp26 = outer1_17(map1);
          let iter2 = tmp26();
          if (!iter2.done) {
            do {
              let tmp = outer1_2;
              let tmp2 = outer1_2(iter2.value, 2);
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
          const tmp7 = outer1_17(map);
          let iter3 = tmp7();
          if (!iter3.done) {
            do {
              let tmp8 = outer1_2;
              let tmp9 = outer1_2(iter3.value, 2);
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
              let tmp13 = outer1_11;
              let tmp14 = outer1_11[num];
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
      return outer1_12;
    }
  };
  items[10] = {
    key: "suggestedFetchError",
    get() {
      return outer1_14;
    }
  };
  items[11] = {
    key: "suggestedFetchIsLoading",
    get() {
      return outer1_15;
    }
  };
  items[12] = {
    key: "suggestedFetchAttempted",
    get() {
      return outer1_16;
    }
  };
  items[13] = {
    key: "suggestedGameIds",
    get() {
      return outer1_13;
    }
  };
  return callback(WidgetStore, items);
})(require("initialize").Store);
tmp2 = new tmp2(require("dispatcher"), {
  WIDGET_PENDING_SET: function handleSetPendingWidgets(widgets) {
    widgets = widgets.widgets;
    if (null === widgets) {
      currentUser = currentUser.getCurrentUser();
      if (null != currentUser) {
        userProfile = userProfile.getUserProfile(currentUser.id);
        widgets = undefined;
        if (null != userProfile) {
          widgets = userProfile.widgets;
        }
        if (null == widgets) {
          widgets = [];
        }
      }
    }
  },
  WIDGET_PENDING_SAVE_START: function handleSavePendingWidgetsStart() {
    let c12 = true;
  },
  WIDGET_PENDING_SAVE_SUCCESS: function handleSavePendingWidgetsSuccess() {
    let c12 = false;
    if (null !== c10) {
      let c11 = null;
      c10 = null;
    }
  },
  WIDGET_PENDING_SAVE_FAILURE: function handleSavePendingWidgetsFailure() {
    let c12 = false;
  },
  WIDGET_SUGGESTED_FETCH_SUCCESS: function handleSetSuggestedGameIds(arg0) {
    ({ suggestedGamesIds: closure_13.suggestedGamesIds, suggestedWishlistGamesIds: closure_13.suggestedWishlistGamesIds } = arg0);
    let c15 = false;
    let c14 = false;
  },
  WIDGET_SUGGESTED_FETCH_FAILURE: function handleSetSuggestedFetchFailure() {
    let c14 = true;
    let c15 = false;
  },
  WIDGET_SUGGESTED_FETCH_START: function handleSetSuggestedFetchStart() {
    let c15 = true;
    let c14 = false;
    let c16 = true;
  },
  WIDGET_PENDING_CLEAR: function handleClearPendingWidgets() {
    let c10 = null;
    let c11 = null;
  },
  WIDGET_SUGGESTED_REMOVE_GAME: function handleRemoveApplicationIdFromSuggestedGames(applicationId) {
    applicationId = applicationId.applicationId;
    const suggestedGamesIds = closure_13.suggestedGamesIds;
    closure_13.suggestedGamesIds = suggestedGamesIds.filter((arg0) => arg0 !== applicationId);
    const prop = closure_13.suggestedWishlistGamesIds;
    closure_13.suggestedWishlistGamesIds = prop.filter((arg0) => arg0 !== applicationId);
  }
});
let result = require("_defineProperties").fileFinishedImporting("modules/user_profile/WidgetStore.tsx");

export default tmp2;
