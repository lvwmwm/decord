// Module ID: 14228
// Function ID: 109304
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 14228 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import closure_1 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let obj = {};
let set = new Set();
obj.seenFontIds = set;
obj.seenEffectIds = new Set();
obj.newFontsBadgeDismissed = false;
obj.newEffectsBadgeDismissed = false;
let tmp4 = ((PersistedStore) => {
  class DisplayNameStylesSeenStore {
    constructor() {
      self = this;
      tmp = DisplayNameStylesSeenStore(this, DisplayNameStylesSeenStore);
      obj = outer1_3(DisplayNameStylesSeenStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(DisplayNameStylesSeenStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(seenFontIds) {
      const obj = {};
      seenFontIds = undefined;
      if (null != seenFontIds) {
        seenFontIds = seenFontIds.seenFontIds;
      }
      if (null == seenFontIds) {
        seenFontIds = [];
      }
      obj.seenFontIds = new Set(seenFontIds);
      let seenEffectIds;
      if (null != seenFontIds) {
        seenEffectIds = seenFontIds.seenEffectIds;
      }
      if (null == seenEffectIds) {
        seenEffectIds = [];
      }
      const set = new Set(seenFontIds);
      obj.seenEffectIds = new Set(seenEffectIds);
      let prop;
      if (null != seenFontIds) {
        prop = seenFontIds.newFontsBadgeDismissed;
      }
      obj.newFontsBadgeDismissed = null != prop && prop;
      let prop1;
      if (null != seenFontIds) {
        prop1 = seenFontIds.newEffectsBadgeDismissed;
      }
      obj.newEffectsBadgeDismissed = null != prop1 && prop1;
      const outer1_5 = obj;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return { seenFontIds: Array.from(outer1_5.seenFontIds), seenEffectIds: Array.from(outer1_5.seenEffectIds), newFontsBadgeDismissed: outer1_5.newFontsBadgeDismissed, newEffectsBadgeDismissed: outer1_5.newEffectsBadgeDismissed };
    }
  };
  items[1] = obj;
  obj = {
    key: "getSeenFonts",
    value() {
      return outer1_5.seenFontIds;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSeenEffects",
    value() {
      return outer1_5.seenEffectIds;
    }
  };
  items[4] = {
    key: "getNewFontsBadgeDismissed",
    value() {
      return outer1_5.newFontsBadgeDismissed;
    }
  };
  items[5] = {
    key: "getNewEffectsBadgeDismissed",
    value() {
      return outer1_5.newEffectsBadgeDismissed;
    }
  };
  return callback(DisplayNameStylesSeenStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "DisplayNameStylesSeenStore";
tmp4.persistKey = "DisplayNameStylesSeenStore";
let items = [
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["newFontsBadgeDismissed"] = false;
    obj["newEffectsBadgeDismissed"] = false;
    return obj;
  }
];
tmp4.migrations = items;
obj = {
  DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function handleMarkFontSeen(fontId) {
    fontId = fontId.fontId;
    const seenFontIds = obj.seenFontIds;
    if (seenFontIds.has(fontId)) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const _Set = Set;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(obj.seenFontIds, 0);
      items[arraySpreadResult] = fontId;
      const sum = arraySpreadResult + 1;
      const set = new Set(items);
      obj["seenFontIds"] = set;
    }
  },
  DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function handleMarkEffectSeen(effectId) {
    effectId = effectId.effectId;
    const seenEffectIds = obj.seenEffectIds;
    if (seenEffectIds.has(effectId)) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const _Set = Set;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(obj.seenEffectIds, 0);
      items[arraySpreadResult] = effectId;
      const sum = arraySpreadResult + 1;
      const set = new Set(items);
      obj["seenEffectIds"] = set;
    }
  },
  DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function handleMarkNewFontsBadgeDismissed() {
    if (obj.newFontsBadgeDismissed) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj["newFontsBadgeDismissed"] = true;
    }
  },
  DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function handleMarkNewEffectsBadgeDismissed() {
    if (obj.newEffectsBadgeDismissed) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj["newEffectsBadgeDismissed"] = true;
    }
  }
};
tmp4 = new tmp4(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesSeenStore.tsx");

export default tmp4;
