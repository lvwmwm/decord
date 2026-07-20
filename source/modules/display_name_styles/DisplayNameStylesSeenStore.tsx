// Module ID: 14096
// Function ID: 107050
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14096 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = { seenFontIds: new Set() };
const set = new Set();
obj.seenEffectIds = new Set();
obj.newFontsBadgeDismissed = false;
obj.newEffectsBadgeDismissed = false;
let tmp4 = (PersistedStore) => {
  class DisplayNameStylesSeenStore {
    constructor() {
      self = this;
      tmp = DisplayNameStylesSeenStore(this, DisplayNameStylesSeenStore);
      obj = closure_3(DisplayNameStylesSeenStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = DisplayNameStylesSeenStore;
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
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return { seenFontIds: Array.from(closure_5.seenFontIds), seenEffectIds: Array.from(closure_5.seenEffectIds), newFontsBadgeDismissed: closure_5.newFontsBadgeDismissed, newEffectsBadgeDismissed: closure_5.newEffectsBadgeDismissed };
    }
  };
  items[1] = obj;
  obj = {
    key: "getSeenFonts",
    value() {
      return closure_5.seenFontIds;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSeenEffects",
    value() {
      return closure_5.seenEffectIds;
    }
  };
  items[4] = {
    key: "getNewFontsBadgeDismissed",
    value() {
      return closure_5.newFontsBadgeDismissed;
    }
  };
  items[5] = {
    key: "getNewEffectsBadgeDismissed",
    value() {
      return closure_5.newEffectsBadgeDismissed;
    }
  };
  return callback(DisplayNameStylesSeenStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp4.displayName = "DisplayNameStylesSeenStore";
tmp4.persistKey = "DisplayNameStylesSeenStore";
const items = [
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
      const obj = {};
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
      const obj = {};
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
      const obj = {};
      const merged = Object.assign(obj);
      obj["newFontsBadgeDismissed"] = true;
    }
  },
  DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function handleMarkNewEffectsBadgeDismissed() {
    if (obj.newEffectsBadgeDismissed) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(obj);
      obj["newEffectsBadgeDismissed"] = true;
    }
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[6]), obj);
const set1 = new Set();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/display_name_styles/DisplayNameStylesSeenStore.tsx");

export default tmp4;
