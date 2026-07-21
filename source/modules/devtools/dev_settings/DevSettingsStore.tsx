// Module ID: 4662
// Function ID: 40444
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4662 (_isNativeReflectConstruct)
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
let obj = { MESSAGING: 0, [0]: "MESSAGING", OVERLAYS: 1, [1]: "OVERLAYS", PREMIUM: 2, [2]: "PREMIUM", REPORTING: 3, [3]: "REPORTING", APP_COLLECTIONS: 4, [4]: "APP_COLLECTIONS", SHOP: 5, [5]: "SHOP", LIBDISCORE: 6, [6]: "LIBDISCORE" };
obj = { visual_effect_view_overrides: obj, obscure_blur_effect_explicit_content_enabled: obj1, obscure_blur_effect_gore_content_enabled: obj2, obscure_blur_effect_self_harm_content_enabled: obj3, explicit_media_redaction_ignore_pending_scan: obj4, analytics_debugger: obj5, idle_status_indicator: obj6, upload_fail_50: obj7, send_fail_100: obj8, premium_roadblocks: obj9, force_mock_iap: obj10, iar_testing: obj11, iar_skip_api_report_submit: obj12, iar_show_report_sub_type_labels: obj13, only_show_preview_app_collections: obj14, disable_app_collections_cache: obj15, shop_disable_cache: obj16, shop_include_unpublished: obj17, shop_show_debug_overlay: obj18, bypass_google_sku_sync: obj19, libdiscore_verbose_telemetry_logging: obj20 };
obj = { label: "Blur view overrides for designers to test with", category: obj.OVERLAYS };
let closure_6 = {};
let tmp2 = (DeviceSettingsStore) => {
  class DevSettingsStore {
    constructor() {
      self = this;
      tmp = DevSettingsStore(this, DevSettingsStore);
      obj = closure_3(DevSettingsStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = DevSettingsStore;
  callback2(DevSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "getUserAgnosticState",
    value() {
      return { toggleStates: closure_6 };
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "initialize",
    value(toggleStates) {
      for (const key10006 in closure_5) {
        let tmp6 = key10006;
        let tmp2;
        if (null != arg0) {
          toggleStates = arg0.toggleStates;
          let tmp = toggleStates;
          if (null != toggleStates) {
            tmp2 = toggleStates[key10006];
            tmp = toggleStates;
          }
        }
        let tmp3 = null != tmp2;
        let tmp4 = tmp;
        if (tmp3) {
          tmp3 = tmp2;
        }
        if (!tmp3) {
          continue;
        } else {
          let tmp5 = closure_6;
          closure_6[key10006] = tmp3;
          tmp = tmp4;
          // continue
        }
        continue;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0) {
      return null != closure_6[arg0] && closure_6[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "enabled",
    value() {
      return closure_6;
    }
  };
  items[4] = {
    key: "allByCategory",
    value(arg0) {
      const DevSettingsStore = arg0;
      const entries = Object.entries(closure_5);
      const found = entries.filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp.category === arg0;
      });
      return found.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, null != closure_6[tmp] && closure_6[tmp], tmp2];
        return items;
      });
    }
  };
  return callback(DevSettingsStore, items);
}(importDefault(dependencyMap[5]).DeviceSettingsStore);
tmp2.displayName = "DevToolsDevSettingsStore";
tmp2.persistKey = "DevToolsDevSettingsStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  DEV_TOOLS_DEV_SETTING_SET: function handleSet(value) {
    if (false !== value.value) {
      closure_6[value.toggle] = value.value;
    } else {
      const toggle = value.toggle;
      delete r2[r1];
    }
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/devtools/dev_settings/DevSettingsStore.tsx");

export default tmp2;
export const DevSettingsCategory = obj;
export const CATEGORY_LABELS = { [obj.REPORTING]: "Reporting Toggles", [obj.OVERLAYS]: "Dev Overlays", [obj.MESSAGING]: "Messaging Toggles", [obj.APP_COLLECTIONS]: "App Collections Toggles", [obj.PREMIUM]: "Premium Toggles", [obj.SHOP]: "Shop Toggles", [obj.LIBDISCORE]: "Libdiscore Toggles" };
export const toggles = obj;
