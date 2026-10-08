// Module ID: 14780
// Function ID: 14781
// Name: SettingTreeManager
// Dependencies: [11263, 14651, 14649, 2]

// Module 14780 (SettingTreeManager)
import SettingRendererConstants from "SettingRendererConstants" /* 11263 */;
import SettingHookHarness from "SettingHookHarness" /* 14649 */;
import SettingsRendererConfig from "SettingsRendererConfig" /* 14651 */;
import size from "module_2" /* 2 */;

let set;

const NodeType = SettingRendererConstants.NodeType;
class SettingTreeManagerCache {
  constructor() {
    const merged = Object.assign({ cache: null });
    merged[0] = {};
    return merged;
  }
  get(arg0) {
    return this.cache[arg0];
  }
  set(arg0, arg1) {
    this.cache[arg0] = arg1;
  }
  clear() {
    this.cache = {};
  }
}
const prototype = SettingTreeManagerCache.prototype;
class SettingTreeManager {
  constructor() {
    if (typeof SettingTreeManagerCache === "function") {
      const merged = Object.assign({ highestAncestorCache: null });
      const merged1 = Object.assign({ cache: null });
      merged1[0] = {};
      merged[0] = merged1;
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  transformParent(parent) {
    let tmp = null;
    if (null != parent) {
      let tmp2 = parent;
      if (typeof parent !== "string") {
        tmp2 = parent();
      }
      tmp = tmp2;
    }
    return tmp;
  }
  validate() {

  }
  getAncestors(field) {
    const self = this;
    const items = [];
    let transformParentResult = this.transformParent(SettingsRendererConfig.SETTING_RENDERER_CONFIG[field].parent);
    if (null != transformParentResult) {
      do {
        let arr = items.push(transformParentResult);
        transformParentResult = self.transformParent(SettingsRendererConfig.SETTING_RENDERER_CONFIG[transformParentResult].parent);
      } while (null != transformParentResult);
    }
    return items;
  }
  isBlocked(field, arg1) {
    set = arg1;
    const ancestors = this.getAncestors(field);
    ancestors.push(field);
    return ancestors.some((item) => set.has(item));
  }
  getHighestLevelAncestor(setting) {
    const self = this;
    const highestAncestorCache = this.highestAncestorCache;
    const value = highestAncestorCache.get(setting);
    if (null != value) {
      return value;
    } else {
      const ancestors = self.getAncestors(setting);
      let tmp2 = ancestors[ancestors.length - 1];
      if (tmp2 == null) {
        tmp2 = setting;
      }
      const highestAncestorCache2 = self.highestAncestorCache;
      const result = highestAncestorCache2.set(setting, tmp2);
      return tmp2;
    }
  }
  getNearestRouteAncestorDataOrSelf(setting) {
    const tmp = SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting];
    if (tmp.type === NodeType.ROUTE) {
      return tmp;
    } else {
      const self3 = this;
      const ancestors = this.getAncestors(setting);
      for (const item10013 of ancestors) {
        let tmp5 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[item10013];
        if (tmp5.type === NodeType.ROUTE) {
          obj.return();
          return tmp5;
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("[SettingTree] No route ancestor found for setting: " + setting);
      throw error;
    }
  }
  getBreadcrumbs(setting) {
    const items = [];
    const ancestors = this.getAncestors(setting);
    const tmp2 = ancestors[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let obj = SettingHookHarness;
      let cachedSettingTitle = obj.getCachedSettingTitle(tmp3);
      if (null != cachedSettingTitle) {
        let arr = items.push(tmp7);
      }
      continue;
    }
    return items.reverse();
  }
  clearCaches() {
    const highestAncestorCache = this.highestAncestorCache;
    highestAncestorCache.clear();
  }
}
const prototype2 = SettingTreeManager.prototype;
let merged = Object.assign({ highestAncestorCache: null });
let merged1 = Object.assign({ cache: null });
merged1[0] = {};
merged[0] = merged1;
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingTreeManager.tsx");

export default merged;
