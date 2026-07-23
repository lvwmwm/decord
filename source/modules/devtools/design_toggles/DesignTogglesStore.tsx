// Module ID: 5090
// Function ID: 44318
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 5090 (_isNativeReflectConstruct)
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
let obj = { enable_recently_active: "Enable recently active channels", theme_setting_in_account_sheet: "Show theme settings in the Account action sheet", nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer", show_icymi_debug_scores: "Show ICYMI debug scores", channel_list_scrim: "Dim the channel list when chat appears", mana_radio_large_variant: "Larger Radio", mana_checkbox_large_variant: "Larger Checkbox", mana_switch_large_variant: "Larger Switch", show_header_debug_info: "Show header component debug overlays" };
let closure_6 = {};
let tmp2 = ((DeviceSettingsStore) => {
  class DesignTogglesStore {
    constructor() {
      self = this;
      tmp = DesignTogglesStore(this, DesignTogglesStore);
      obj = outer1_3(DesignTogglesStore);
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
  callback2(DesignTogglesStore, DeviceSettingsStore);
  let obj = {
    key: "getUserAgnosticState",
    value() {
      return { toggleStates: outer1_6 };
    }
  };
  let items = [obj, , , , , ];
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
            let tmp3 = toggleStates;
          }
        }
        let tmp4 = null != tmp2;
        if (tmp4) {
          tmp4 = tmp2;
        }
        let tmp5 = outer1_6;
        outer1_6[key10006] = tmp4;
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
    key: "set",
    value(arg0, arg1) {
      outer1_6[arg0] = arg1;
      return arg1;
    }
  };
  items[4] = {
    key: "all",
    value() {
      return outer1_6;
    }
  };
  items[5] = {
    key: "allWithDescriptions",
    value() {
      const entries = Object.entries(outer1_6);
      return entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, tmp2, outer2_5[tmp]];
        return items;
      });
    }
  };
  return callback(DesignTogglesStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "DevToolsDesignTogglesStore";
tmp2.persistKey = "DevToolsDesignTogglesStore";
obj = {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function handleSet(toggle) {
    closure_6[toggle.toggle] = toggle.value;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesStore.tsx");

export default tmp2;
export const toggles = obj;
