// Module ID: 4129
// Function ID: 34336
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 4129 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { MESSAGING: 0, [0]: "MESSAGING", OVERLAYS: 1, [1]: "OVERLAYS", PREMIUM: 2, [2]: "PREMIUM", REPORTING: 3, [3]: "REPORTING", APP_COLLECTIONS: 4, [4]: "APP_COLLECTIONS", SHOP: 5, [5]: "SHOP", LIBDISCORE: 6, [6]: "LIBDISCORE" };
obj = { visual_effect_view_overrides: obj, obscure_blur_effect_explicit_content_enabled: obj1, obscure_blur_effect_gore_content_enabled: obj2, obscure_blur_effect_self_harm_content_enabled: obj3, explicit_media_redaction_ignore_pending_scan: obj4, analytics_debugger: obj5, idle_status_indicator: obj6, highlight_mana_text: obj7, upload_fail_50: obj8, send_fail_100: obj9, premium_roadblocks: obj10, force_mock_iap: obj11, iar_testing: obj12, iar_skip_api_report_submit: obj13, iar_show_report_sub_type_labels: obj14, only_show_preview_app_collections: obj15, disable_app_collections_cache: obj16, shop_disable_cache: obj17, shop_include_unpublished: obj18, shop_show_debug_overlay: obj19, bypass_google_sku_sync: obj20, libdiscore_verbose_telemetry_logging: obj21 };
obj = { label: "Blur view overrides for designers to test with", category: obj.OVERLAYS };
let closure_6 = {};
let tmp2 = ((DeviceSettingsStore) => {
  class DevSettingsStore {
    constructor() {
      self = this;
      tmp = DevSettingsStore(this, DevSettingsStore);
      obj = outer1_3(DevSettingsStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(DevSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "getUserAgnosticState",
    value() {
      return { toggleStates: outer1_6 };
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "initialize",
    value(toggleStates) {
      for (const key10006 in outer1_5) {
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
          let tmp5 = outer1_6;
          outer1_6[key10006] = tmp3;
          tmp = tmp4;
          continue;
        }
        continue;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0) {
      return null != outer1_6[arg0] && outer1_6[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "enabled",
    value() {
      return outer1_6;
    }
  };
  items[4] = {
    key: "allByCategory",
    value(arg0) {
      let dispatcher = arg0;
      const entries = Object.entries(outer1_5);
      const found = entries.filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp.category === dispatcher;
      });
      return found.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, null != outer2_6[tmp] && outer2_6[tmp], tmp2];
        return items;
      });
    }
  };
  return callback(DevSettingsStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "DevToolsDevSettingsStore";
tmp2.persistKey = "DevToolsDevSettingsStore";
tmp2 = new tmp2(require("dispatcher"), {
  DEV_TOOLS_DEV_SETTING_SET: function handleSet(value) {
    if (false !== value.value) {
      closure_6[value.toggle] = value.value;
    } else {
      const toggle = value.toggle;
      delete tmp2[tmp];
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/devtools/dev_settings/DevSettingsStore.tsx");

export default tmp2;
export const DevSettingsCategory = obj;
export const CATEGORY_LABELS = { [obj.REPORTING]: "Reporting Toggles", [obj.OVERLAYS]: "Dev Overlays", [obj.MESSAGING]: "Messaging Toggles", [obj.APP_COLLECTIONS]: "App Collections Toggles", [obj.PREMIUM]: "Premium Toggles", [obj.SHOP]: "Shop Toggles", [obj.LIBDISCORE]: "Libdiscore Toggles" };
export const toggles = obj;
