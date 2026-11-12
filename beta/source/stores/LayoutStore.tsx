// Module ID: 15908
// Function ID: 15909
// Name: LayoutStore
// Dependencies: [15909, 15910, 1072, 15911, 15912, 1266, 15913, 12, 504, 510, 572, 2]

// Module 15908 (LayoutStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import v1 from "v1" /* 1266 */;
import LayoutStoreTypes from "LayoutStoreTypes" /* 15912 */;
import LayoutUtils from "LayoutUtils" /* 15913 */;
import LayoutRecord from "LayoutRecord" /* 15909 */;
import WidgetRecord from "WidgetRecord" /* 15910 */;
import OverlayLayoutConstants from "OverlayLayoutConstants" /* 15911 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, importDefault, set;

let CONJURE_OVERLAY_WIDGET_CHROME;
let OVERLAY_V3_LAYOUT_VERSION;
let obj17;
let size;
let size1;
const OverlayWidgets = Constants.OverlayWidgets;
const OVERLAY_LEGACY_LAYOUT_VERSION = OverlayLayoutConstants.OVERLAY_LEGACY_LAYOUT_VERSION;
({ OVERLAY_V3_LAYOUT_VERSION, CONJURE_OVERLAY_WIDGET_CHROME } = OverlayLayoutConstants);
const migrated = "migrated";
let obj = {};
let obj2 = { resizeX: false, resizeY: true, dragAnywhere: false, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.OPTIONAL, defaultSettings: { anchor: { left: 0.175, top: 0.05, bottom: "match", right: "items" }, size: { width: "auto", height: 0.65 }, pinned: false, minSize: { width: 312, height: 300 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
obj[OverlayWidgets.GUILDS] = obj2;
let obj3 = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.OPTIONAL, defaultSettings: { anchor: { left: 0.26, top: 0.05, bottom: "match", right: "c" }, size: { width: 0.565, height: 0.65 }, pinned: true, minSize: { width: 430, height: 300 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
obj[OverlayWidgets.TEXT] = obj3;
let obj4 = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.011, top: 0.011, bottom: "disabled", right: "T" }, size: { width: "auto", height: "auto" }, pinned: true, minSize: { width: 272, height: 100 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
obj[OverlayWidgets.VOICE] = obj4;
let obj5 = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: "WireType", top: true, bottom: true, right: true }, size: { width: 0.6, height: 0.45 }, pinned: false, minSize: { height: 300, width: 610 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
obj[OverlayWidgets.GUILDS_TEXT] = obj5;
obj[OverlayWidgets.VOICE_V3] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.01, top: 0.35, bottom: "disabled", right: "T" }, size: { width: "auto", height: "auto" }, pinned: true, minSize: { width: 272, height: 24 } }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.01, top: 0.35, bottom: "disabled", right: "T" }, size: { width: "auto", height: "auto" }, pinned: true, minSize: { width: 272, height: 24 } }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.VIDEO] = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: 0.01, top: "WireType", bottom: -515396076, right: 1631556730 }, size: { fixed: true, width: 408, height: 128 }, pinned: true, minSize: { width: 128, height: 128 } }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: 0.01, top: "WireType", bottom: -515396076, right: 1631556730 }, size: { fixed: true, width: 408, height: 128 }, pinned: true, minSize: { width: 128, height: 128 } }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.GO_LIVE] = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: "match", top: "end", bottom: true, right: true }, size: { fixed: true, width: 256, height: 144 }, pinned: false, minSize: { width: 276, height: 164 } }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: "match", top: "end", bottom: true, right: true }, size: { fixed: true, width: 256, height: 144 }, pinned: false, minSize: { width: 276, height: 164 } }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.QUICK_ACTIONS] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.34, top: 0.02, bottom: "disabled", right: "slice" }, size: { width: "auto", height: "auto" }, pinned: false, minSize: { width: 216, height: 56 } }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.34, top: 0.02, bottom: "disabled", right: "slice" }, size: { width: "auto", height: "auto" }, pinned: false, minSize: { width: 216, height: 56 } }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.NOTIFICATIONS] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.01, top: 0.02, bottom: "HermesInternal", right: "disabled" }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 320, height: 100 } }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.01, top: 0.02, bottom: "HermesInternal", right: "disabled" }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 320, height: 100 } }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.ACTIVITY] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "WireType", top: "createStyles", bottom: "createStyles", right: "createStyles" }, size: { height: "auto", width: "auto" }, pinned: false, minSize: { width: 320, height: 100 } }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "WireType", top: "createStyles", bottom: "createStyles", right: "createStyles" }, size: { height: "auto", width: "auto" }, pinned: false, minSize: { width: 320, height: 100 } }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.TEXT_CHAT_V3] = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "WireType", top: "name", bottom: "Object", right: "flags" }, size: { fixed: true, height: 372, width: 500 }, minSize: { width: 350, height: 100 }, pinned: false }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "WireType", top: "name", bottom: "Object", right: "flags" }, size: { fixed: true, height: 372, width: 500 }, minSize: { width: 350, height: 100 }, pinned: false }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.FRIENDS] = { resizeX: false, resizeY: true, dragAnywhere: true, constrainAutoSizeToExplicitResizeEvents: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "__closure", top: "name", bottom: "Object", right: "flags" }, size: { fixed: true, height: "auto", width: 350 }, minSize: { width: 350, height: 350 }, pinned: false }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: false, resizeY: true, dragAnywhere: true, constrainAutoSizeToExplicitResizeEvents: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "__closure", top: "name", bottom: "Object", right: "flags" }, size: { fixed: true, height: "auto", width: 350 }, minSize: { width: 350, height: 350 }, pinned: false }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.CLICK_ZONE_DEBUG] = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.DEBUG, defaultSettings: { anchor: { left: "WireType", top: "createStyles", bottom: "createStyles", right: "createStyles" }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 50, height: 50 } }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.DEBUG, defaultSettings: { anchor: { left: "WireType", top: "createStyles", bottom: "createStyles", right: "createStyles" }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 50, height: 50 } }, version: OVERLAY_V3_LAYOUT_VERSION });
obj[OverlayWidgets.PERFORMANCE_DEBUG] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.DEBUG, defaultSettings: { anchor: { left: "WireType", top: true, bottom: true, right: true }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 120, height: 300 } }, version: OVERLAY_V3_LAYOUT_VERSION };
({ resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.DEBUG, defaultSettings: { anchor: { left: "WireType", top: true, bottom: true, right: true }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 120, height: 300 } }, version: OVERLAY_V3_LAYOUT_VERSION });
const obj16 = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: LayoutStoreTypes.OverlayWidgetLayoutPolicy.OPTIONAL, defaultSettings: obj17, version: OVERLAY_V3_LAYOUT_VERSION };
obj17 = { anchor: { left: 0.35, top: 0.2, bottom: "disabled", right: "c" }, size, pinned: false, minSize: size1 };
size = { fixed: true, width: 400 + CONJURE_OVERLAY_WIDGET_CHROME.width, height: 300 + CONJURE_OVERLAY_WIDGET_CHROME.height };
size1 = { width: 160 + CONJURE_OVERLAY_WIDGET_CHROME.width, height: 120 + CONJURE_OVERLAY_WIDGET_CHROME.height };
obj[OverlayWidgets.CONJURE] = obj16;
const PersistedStore = get_initializedDefault.PersistedStore;
class LayoutStore extends PersistedStore {
  initialize(layouts) {
    let self = this;
    if (null != layouts) {
      if (null != layouts.layouts) {
        let closure_4;
        if (null != layouts.widgets) {
          obj = {};
          let tmp = importDefault;
          const tmp2 = self;
          layouts = layouts.layouts;
          const arr = require("module_12");
          const item = arr.forEach(layouts, (arg0, arg1) => {
            obj[arg1] = new LayoutRecord(arg0);
            new LayoutRecord(arg0);
          });
          obj2 = {};
          let widgets = layouts.widgets;
          const arr2 = require("module_12");
          const item1 = arr2.forEach(widgets, (arg0, arg1) => {
            obj2[arg1] = new WidgetRecord(arg0);
            new WidgetRecord(arg0);
          });
          closure_4 = obj2;
        }
        importDefault = false;
        let closure_0 = [];
        let tmp5 = importDefault;
        let tmp6 = self;
        const arr3 = require("module_12");
        const item2 = arr3.forEach(obj, (layoutPolicy, arg1) => {
          if (layoutPolicy.layoutPolicy === LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED) {
            closure_0.push(arg1);
          }
        });
        const arr4 = require("module_12");
        const item3 = arr4.forEach(obj, (set, layoutId) => {
          let widgetsForLayout;
          widgetsForLayout = widgetsForLayout.getWidgetsForLayout(layoutId);
          let c3 = false;
          function _loop(iter) {
            if (null == widgetsForLayout.find((type) => type.type === closure_0)) {
              if (obj[iter].version === iter.version) {
                c1 = true;
                c3 = true;
                const obj3 = v1;
                const v4Result = obj3.v4();
                let defaultSettings;
                if (null != tmp14[iter]) {
                  defaultSettings = tmp19.defaultSettings;
                }
                if (null == defaultSettings) {
                  return { v: "r" };
                } else {
                  obj = { type: iter, id: v4Result, layoutId, zIndex: widgetsForLayout.length };
                  const merged = Object.assign(defaultSettings);
                  self = this;
                  const self2 = this;
                  const tmp8 = new WidgetRecord(obj);
                  widgetsForLayout.push(tmp8);
                  obj2 = {};
                  const merged1 = Object.assign(obj2);
                  obj2[v4Result] = tmp8;
                }
              }
            }
            return 0;
          }
          const iter = set[Symbol.iterator]();
          while (iter !== undefined) {
            let _loopResult = _loop(iter.next());
            if (0 !== _loopResult) {
              if (tmp3) {
                let v = _loopResult.v;
                iter.return();
                return v;
              }
            }
            continue;
          }
          const tmp6 = c3;
          if (tmp6) {
            const result = set.set("widgets", widgetsForLayout.map((id) => id.id));
            set = result;
            obj = {};
            let tmp8 = obj;
            let merged = Object.assign(obj);
            obj[layoutId] = result;
          }
        });
        const arr5 = require("module_12");
        const item4 = arr5.forEach(closure_4, (arg0, arg1) => {
          let tmp3 = null == tmp2;
          const tmp = arg1;
          if (!tmp3) {
            const widgets = tmp2.widgets;
            tmp3 = widgets.indexOf(arg1) < 0;
          }
          if (tmp3) {
            obj = {};
            const merged = Object.assign(obj2);
            delete obj[tmp];
            c1 = true;
          }
        });
        const tmp13 = importDefault;
        if (tmp13) {
          self.persist();
          self.emitChange();
        }
      }
    }
    obj = {};
    closure_4 = {};
  }
  getState() {
    return { layouts: obj4, widgets: obj2 };
  }
  getLayouts() {
    return obj4;
  }
  getLayout(arg0) {
    return obj4[arg0];
  }
  getAllWidgets() {
    return obj2;
  }
  getWidget(arg0) {
    return obj2[arg0];
  }
  getWidgetsForLayout(arg0) {
    let items;
    const self = this;
    const layout = this.getLayout(arg0);
    if (null == layout) {
      items = [];
    } else {
      const widgets = layout.widgets;
      items = widgets.reduce((arr, item) => {
        const widget = self.getWidget(item);
        if (null != widget) {
          arr.push(widget);
        }
        return arr;
      }, []);
    }
    return items;
  }
  getAllUnpinnedPinnedWidgets(arg0) {
    const self = this;
    const widgetsForLayout = this.getWidgetsForLayout(arg0);
    const items = [];
    const item = widgetsForLayout.forEach((type) => {
      const widgetConfig = self.getWidgetConfig(type.type);
      if (null != widgetConfig) {
        const tmp6 = widgetConfig.layoutPolicy === LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED || type.pinned;
        if (!tmp6) {
          items.push(type.type);
        }
      } else if (!type.pinned) {
        items.push(type.type);
      }
    });
    return items;
  }
  getWidgetConfig(type) {
    return obj[type];
  }
  getWidgetDefaultSettings(arg0) {
    let defaultSettings;
    if (null != obj[arg0]) {
      defaultSettings = tmp.defaultSettings;
    }
    return defaultSettings;
  }
  getWidgetType(arg0) {
    let str = "";
    if (null != obj2[arg0]) {
      str = tmp.type;
    }
    return str;
  }
  getWidgetsByType(arg0) {
    let closure_0 = arg0;
    const values = Object.values(obj2);
    return values.filter((type) => type.type === closure_0);
  }
  getWidgetsByTypeAndLayout(CONJURE, arg1) {
    let closure_0 = CONJURE;
    let closure_1 = arg1;
    const values = Object.values(obj2);
    return values.filter((type) => type.type === closure_0 && type.layoutId === closure_1);
  }
  getRegisteredWidgets() {
    return obj;
  }
  getDefaultLayout(layoutId) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    const items = [];
    const arr2 = num(items[7]);
    const item = arr2.forEach(this.getRegisteredWidgets(), (layoutPolicy, type) => {
      let tmpResult;
      layoutPolicy = layoutPolicy.layoutPolicy;
      if (LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED === layoutPolicy) {
        num = layoutPolicy.version;
        if (num == null) {
          num = 0;
        }
        if (num === num) {
          let defaultSettings;
          if (null != obj[type]) {
            defaultSettings = tmp7.defaultSettings;
          }
          if (null != defaultSettings) {
            obj = { type, id: tmpResult.v4(), layoutId };
            const push = items.push;
            const merged = Object.assign(defaultSettings);
            tmpResult = v1;
            push(obj);
          }
        }
      }
    });
    return items;
  }
}
const prototype = LayoutStore.prototype;
LayoutStore.displayName = "LayoutStore";
LayoutStore.persistKey = "LayoutStore";
let items = [
  () => {
    let closure_129_0;
    let closure_129_1;
    let items2;
    let pinnedWidgets;
    const f132377 = (id) => {
      let rect = null;
      if (null != closure_1_0) {
        rect = closure_1_0[id];
      }
      size = null;
      if (null != closure_1_1) {
        size = closure_1_1[id];
      }
      obj = { id, layoutId, type: id, anchor: rect, size, pinned: true, zIndex: 0 };
      if (!rect) {
        rect = { top: -1, left: -1, bottom: null, right: null };
      }
      if (!size) {
        size = { width: -1, height: -1 };
      }
      items = [obj.id, obj];
      items.push(items);
      return obj.id;
    };
    obj = {};
    const Storage = Storage2.Storage;
    const merged = Object.assign(Storage.get("OverlayStore"));
    ({ pinnedWidgets, positions: closure_129_0, sizes: closure_129_1 } = obj);
    if (5 === obj.v) {
      if (pinnedWidgets) {
        let closure_2 = migrated;
        let items = [];
        const items1 = [migrated, ];
        obj2 = { layouts: items2, widgets: items };
        items1[1] = { id: migrated, widgets: pinnedWidgets.map(f132377) };
        items2 = [items1];
        const obj3 = { id: migrated, widgets: pinnedWidgets.map(f132377) };
        return obj2;
      }
    }
    return { layouts: [], widgets: [] };
  },
  (arg0) => {
    let layouts;
    let widgets;
    ({ layouts, widgets } = arg0);
    set = new Set(Object.keys(OverlayWidgets));
    const arr = Array.from(widgets);
    let widgets1 = arr.filter((item) => {
      let tmp;
      [tmp] = item;
      return !set.has(tmp);
    });
    const arr2 = Array.from(layouts);
    const layouts1 = arr2.filter((item) => {
      let tmp;
      [tmp] = item;
      return tmp !== migrated;
    });
    const item = layouts1.forEach((item) => {
      let _null;
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      widgets1 = null;
      let c2 = null;
      const widgets = tmp2.widgets;
      let found = widgets.find((item) => {
        let pinned;
        let closure_0 = item;
        const found = _null.find((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          return tmp === item && tmp2.layoutId === set;
        });
        let tmp2 = null != found;
        if (tmp2) {
          const tmp4 = null == closure_2 && found[1].type === constants.VOICE;
          if (tmp4) {
            closure_2 = found[0];
          }
          const tmp7 = null == pinned && found[1].type === constants.TEXT;
          if (tmp7) {
            pinned = found[1].pinned;
          }
          tmp2 = null != pinned && null != closure_2;
          const tmp10 = null != pinned && null != closure_2;
        }
        return tmp2;
      });
      let tmp4 = widgets1;
      if (!tmp4) {
        if (null != c2) {
          obj2 = set(dependencyMap[5]);
          const v4Result = obj2.v4();
          const items = [c2, v4Result];
          tmp2.widgets = items;
          let defaultSettings;
          const tmp16 = constants;
          if (null != closure_1_10[constants.GUILDS_TEXT]) {
            defaultSettings = tmp18.defaultSettings;
          }
          if (null != defaultSettings) {
            let tmp7 = widgets1;
            const items1 = [v4Result, ];
            obj = { type: tmp16.GUILDS_TEXT, id: v4Result, layoutId: tmp, zIndex: 2 };
            const push = widgets1.push;
            const merged = Object.assign(defaultSettings);
            items1[1] = obj;
            push(items1);
          }
        }
      }
    });
    return { widgets: widgets1, layouts: layouts1 };
  },
  (arg0) => {
    let layouts;
    let widgets;
    ({ layouts, widgets } = arg0);
    obj = {
      layouts: layouts.reduce((acc, item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        acc[tmp] = tmp2;
        return acc;
      }, {}),
      widgets: widgets.reduce((acc, item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        acc[tmp] = tmp2;
        return acc;
      }, {})
    };
    return obj;
  },
  (layouts) => {
    layouts = layouts.layouts;
    const layouts2 = {};
    const widgets = layouts.widgets;
    for (const key10006 in layouts) {
      obj = { version: OVERLAY_LEGACY_LAYOUT_VERSION };
      let merged = Object.assign(layouts[key10006]);
      layouts2[key10006] = obj;
      continue;
    }
    return { layouts: layouts2, widgets };
  }
];
LayoutStore.migrations = items;
const obj18 = {
  LAYOUT_CREATE: function handleCreateDefault(arg0) {
    let layoutId;
    let version;
    let widgets;
    ({ layoutId, widgets, version, defaultResolution: require } = arg0);
    let items;
    if (null != obj[layoutId]) {
      let tmp = obj;
      if (obj[layoutId].version === version) {
        return false;
      }
    }
    items = [];
    const item = widgets.forEach((type, zIndex) => {
      function getMigratedWidget(type) {
        if (null != closure_1_3[closure_1_9]) {
          const widgets = tmp.widgets;
          for (const item10011 of widgets) {
            let tmp5 = closure_1_4[item10011];
            if (null != tmp5) {
              if (tmp6.type === type) {
                obj.return();
                return tmp5;
              }
            }
            continue;
          }
        }
        return null;
      }
      const tmp = getMigratedWidget(type.type);
      obj = { zIndex };
      const merged = Object.assign(type);
      if ("" === obj.id) {
        let tmp4 = dependencyMap;
        obj2 = v1;
        obj.id = obj2.v4();
      }
      if (null != tmp) {
        obj.pinned = tmp.pinned;
        if (-1 !== tmp.anchor.left) {
          let tmp5 = require;
          const tmp6 = dependencyMap;
          let tmp7 = require;
          const obj3 = LayoutUtils;
          obj.anchor = obj3.getAnchorPercentageFromLayoutSize(tmp.anchor, require);
        }
        if (-1 !== tmp.size.width) {
          let tmp8 = require;
          obj4 = LayoutUtils;
          obj.size = obj4.getSizePercentageFromSize(tmp.size, require);
        }
      }
      const obj5 = {};
      const merged1 = Object.assign(obj2);
      const id = obj.id;
      obj5[id] = new WidgetRecord(obj);
      obj2 = obj5;
      new WidgetRecord(obj);
      items.push(obj.id);
    });
    obj = {};
    let merged = Object.assign(obj);
    obj2 = { id: layoutId, widgets: items, version };
    let tmp4 = new LayoutRecord(obj2);
    obj[layoutId] = tmp4;
  },
  LAYOUT_SET_PINNED: function handleTogglePinned(pinned) {
    let id;
    pinned = pinned.pinned;
    let flag = false;
    if (null != obj2[pinned.widgetId]) {
      const tmp3 = null != obj4[obj2[pinned.widgetId].layoutId];
      if (tmp3) {
        obj = {};
        const merged = Object.assign(obj2);
        ({ id, set } = obj2[pinned.widgetId]);
        if (pinned == null) {
          pinned = !tmp.pinned;
        }
        obj[id] = set("pinned", pinned);
      }
      flag = tmp3;
    }
    return flag;
  },
  LAYOUT_SET_WIDGETS_HIDDEN: function handleSetWidgetsHidden(arg0) {
    let hidden;
    let widgetIds;
    ({ widgetIds, hidden } = arg0);
    let flag = false;
    const iter = widgetIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = obj2[nextResult];
      obj = tmp4;
      let tmp5 = null != tmp4;
      let tmp2 = nextResult;
      if (tmp5) {
        tmp5 = obj.hidden !== hidden;
      }
      if (tmp5) {
        obj2 = {};
        let merged = Object.assign(obj2);
        obj2[tmp2] = obj.set("hidden", hidden);
        flag = true;
      }
      continue;
    }
    return flag;
  },
  LAYOUT_UPDATE_WIDGET: function handleSetWidgetLayout(arg0) {
    let anchor;
    let defaultSize;
    let id;
    let merge;
    let minSize;
    let opacity;
    ({ anchor, size, opacity, minSize, defaultSize } = arg0);
    let flag = false;
    if (null != obj2[arg0.widgetId]) {
      const tmp3 = null != obj4[obj2[arg0.widgetId].layoutId];
      if (tmp3) {
        obj = {};
        const merged = Object.assign(obj2);
        ({ id, merge } = obj2[arg0.widgetId]);
        if (anchor == null) {
          anchor = tmp.anchor;
        }
        obj2 = { anchor, size, opacity, minSize };
        if (size == null) {
          size = tmp.size;
        }
        if (opacity == null) {
          opacity = tmp.opacity;
        }
        if (minSize == null) {
          minSize = tmp.minSize;
        }
        obj[id] = merge(obj2);
        obj2 = obj;
        if (null != defaultSize) {
          if (null != obj[obj2[arg0.widgetId].type]) {
            const defaultSettings = tmp8.defaultSettings;
            const obj3 = { fixed: obj[obj2[arg0.widgetId].type].defaultSettings.size.fixed };
            const merged1 = Object.assign(defaultSize);
            defaultSettings.size = obj3;
          }
        }
      }
      flag = tmp3;
    }
    return flag;
  },
  LAYOUT_SET_TOP_WIDGET: function handleSetTopWidget(arg0) {
    let tmp13;
    let flag = false;
    if (null != obj2[arg0.widgetId]) {
      let tmp4 = null != tmp3;
      if (tmp4) {
        const id = tmp.id;
        const items = [];
        const widgets = tmp3.widgets;
        const item = widgets.forEach((item) => {
          if (null != obj2[item]) {
            items.push(obj2[item]);
          }
        });
        const sorted = items.sort((zIndex, zIndex2) => zIndex.zIndex - zIndex2.zIndex);
        const findIndexResult = items.findIndex((id) => id.id === id);
        let flag2 = false;
        if (findIndexResult !== items.length - 1) {
          items.push(items.splice(findIndexResult, 1)[0]);
          let num2 = 0;
          flag2 = true;
          if (0 < items.length) {
            do {
              obj = items[num2];
              obj2 = {};
              let merged = Object.assign(obj2);
              obj2[obj.id] = obj.set("zIndex", num2);
              let sum = num2 + 1;
              num2 = sum;
              flag2 = true;
              tmp13 = sum < items.length;
            } while (tmp13);
          }
        }
        tmp4 = flag2;
      }
      flag = tmp4;
    }
    return flag;
  },
  LAYOUT_DELETE_WIDGET: function handleDeleteWidget(widgetId) {
    widgetId = widgetId.widgetId;
    obj = {};
    let merged = Object.assign(obj);
    delete obj[widgetId];
    const arr = _modDef12;
    const item = arr.forEach(obj4, (widgets, arg1) => {
      if (arg1 !== migrated) {
        widgets = widgets.widgets;
        const index = widgets.indexOf(widgetId);
        if (index >= 0) {
          const items = [];
          HermesBuiltin.arraySpread(items, widgets.widgets, 0);
          items.splice(index, 1);
          obj = {};
          const merged = Object.assign(obj4);
          obj[arg1] = widgets.set("widgets", items);
        }
      }
    });
  },
  LAYOUT_DELETE_ALL_WIDGETS: function handleDeleteAllWidget(arg0) {
    obj = obj4[arg0.layoutId];
    if (null == obj) {
      return false;
    } else {
      const widgets = obj.widgets;
      const item = widgets.forEach((item) => {
        obj = {};
        const merged = Object.assign(obj);
        delete obj[item];
      });
      obj2 = {};
      let merged = Object.assign(obj4);
      obj2[obj.id] = obj.set("widgets", []);
    }
  },
  LAYOUT_CREATE_WIDGETS: function handleAddWidgets(widgetConfigs) {
    widgetConfigs = widgetConfigs.widgetConfigs;
    let c0 = false;
    const item = widgetConfigs.forEach((item) => {
      obj = new WidgetRecord(item);
      obj2 = obj4[obj.layoutId];
      if (null != obj2) {
        c0 = true;
        const result = obj.set("zIndex", obj2.widgets.length);
        const obj3 = {};
        const merged = Object.assign(obj2);
        obj3[result.id] = result;
        obj2 = obj3;
        const items = [];
        items[HermesBuiltin.arraySpread(items, obj2.widgets, 0)] = result.id;
        obj4 = {};
        const merged1 = Object.assign(obj4);
        obj4[obj2.id] = obj2.set("widgets", items);
      }
    });
    return c0;
  },
  LAYOUT_SET_WIDGET_META: function handleSetWidgetMeta(meta) {
    let id;
    let merge;
    let meta2;
    let obj3;
    meta = meta.meta;
    let flag = false;
    if (null != obj2[meta.widgetId]) {
      const tmp3 = null != obj4[obj2[meta.widgetId].layoutId];
      if (tmp3) {
        obj = {};
        const merged = Object.assign(obj2);
        ({ meta: meta2, id, merge } = obj2[meta.widgetId]);
        if (meta2 == null) {
          meta2 = {};
        }
        obj2 = { meta: obj3 };
        obj3 = {};
        const merged1 = Object.assign(meta2);
        const merged2 = Object.assign(meta);
        obj[id] = merge(obj2);
        obj2 = obj;
      }
      flag = tmp3;
    }
    return flag;
  },
  LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: function handleShowOverlayExtrasHint(arg0) {
    let id;
    let merge;
    let flag = false;
    if (null != obj2[arg0.widgetId]) {
      const tmp3 = null != obj4[obj2[arg0.widgetId].layoutId];
      if (tmp3) {
        obj = {};
        const merged = Object.assign(obj2);
        obj2 = { showExtrasHintTimestamp: Date.now() };
        const _Date = Date;
        ({ id, merge } = obj2[arg0.widgetId]);
        obj[id] = merge(obj2);
        obj2 = obj;
      }
      flag = tmp3;
    }
    return flag;
  },
  LAYOUT_SET_DEFAULT_CONFIG: function handleSetDefaultConfig(arg0) {
    let defaultConfig;
    let widgetType;
    ({ widgetType, defaultConfig } = arg0);
    obj = {};
    const merged = Object.assign(obj[widgetType]);
    const merged1 = Object.assign(defaultConfig);
    obj[widgetType] = obj;
  }
};
const layoutStore = new LayoutStore(DispatcherDefault, obj18);
size = size_mod;
let result = size.fileFinishedImporting("stores/LayoutStore.tsx");

export default layoutStore;
