// Module ID: 3970
// Function ID: 32862
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 653, 675, 3971, 566, 686, 2]

// Module 3970 (_isNativeReflectConstruct)
import ME from "ME";
import expandLocation from "expandLocation";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function trackToggle(value, automatic) {
  let obj = importDefault(675);
  obj = { enabled: value, automatic };
  obj.track(AnalyticEvents.STREAMER_MODE_TOGGLE, obj);
}
let obj = { enabled: false, autoToggle: true, hideInstantInvites: true, hidePersonalInformation: true, disableSounds: true, disableNotifications: true, disabledOverlayWidgets: [], enableContentProtection: false };
let closure_11 = {};
obj = {};
let merged = Object.assign(obj);
let tmp3 = ((PersistedStore) => {
  class StreamerModeStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, StreamerModeStore);
      obj = outer1_6(StreamerModeStore);
      tmp2 = outer1_5;
      if (outer1_13()) {
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
  callback2(StreamerModeStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let merged = Object.assign(outer1_11, arg0);
      const items = [outer1_8];
      this.syncWith(items, () => {
        const id = outer2_8.getId();
        if (null != id) {
          let tmp6 = outer2_11[id];
          if (null == tmp6) {
            let obj = {};
            const merged = Object.assign(outer2_10);
            outer2_11[id] = obj;
            tmp6 = obj;
          }
          obj = tmp6;
        } else {
          obj = {};
          const merged1 = Object.assign(outer2_10);
        }
        const outer2_12 = obj;
      });
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSettings",
    value() {
      return outer1_12;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "enabled",
    get() {
      return outer1_12.enabled;
    }
  };
  items[4] = {
    key: "autoToggle",
    get() {
      return outer1_12.autoToggle;
    }
  };
  items[5] = {
    key: "hideInstantInvites",
    get() {
      let hideInstantInvites = this.enabled;
      if (hideInstantInvites) {
        hideInstantInvites = outer1_12.hideInstantInvites;
      }
      return hideInstantInvites;
    }
  };
  items[6] = {
    key: "hidePersonalInformation",
    get() {
      let hidePersonalInformation = this.enabled;
      if (hidePersonalInformation) {
        hidePersonalInformation = outer1_12.hidePersonalInformation;
      }
      return hidePersonalInformation;
    }
  };
  items[7] = {
    key: "disableSounds",
    get() {
      let disableSounds = this.enabled;
      if (disableSounds) {
        disableSounds = outer1_12.disableSounds;
      }
      return disableSounds;
    }
  };
  items[8] = {
    key: "disableNotifications",
    get() {
      let disableNotifications = this.enabled;
      if (disableNotifications) {
        disableNotifications = outer1_12.disableNotifications;
      }
      return disableNotifications;
    }
  };
  items[9] = {
    key: "enableContentProtection",
    get() {
      let enableContentProtection = this.enabled;
      if (enableContentProtection) {
        enableContentProtection = outer1_12.enableContentProtection;
      }
      return enableContentProtection;
    }
  };
  items[10] = {
    key: "isOverlayWidgetDisabled",
    value(arg0) {
      const tmp = !StreamerModeStore(outer1_2[8]).getOverlayStreamerModeConfig("StreamerModeStore").enabled;
      let tmp2 = !tmp;
      if (!tmp) {
        const self = this;
        let enabled = this.enabled;
        if (enabled) {
          const disabledOverlayWidgets = outer1_12.disabledOverlayWidgets;
          let hasItem;
          if (null != disabledOverlayWidgets) {
            hasItem = disabledOverlayWidgets.includes(arg0);
          }
          enabled = true === hasItem;
        }
        tmp2 = enabled;
      }
      return tmp2;
    }
  };
  return callback(StreamerModeStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "StreamerModeStore";
tmp3.persistKey = "StreamerModeStore";
let items = [
  (arg0) => {
    id = id.getId();
    if (null != arg0) {
      if (null != id) {
        let obj = {};
        obj = {};
        const merged = Object.assign(arg0);
        obj[id] = obj;
      }
      return obj;
    }
    obj = {};
  }
];
tmp3.migrations = items;
obj = {
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      let closure_11 = {};
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemove(userId) {
    if (userId.userId in closure_11) {
      userId = userId.userId;
      delete tmp2[tmp];
    }
  },
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate(value) {
    let disabledOverlayWidgets2;
    let obj = {};
    const merged = Object.assign(obj);
    obj = { [value.key]: value.value };
    const merged1 = Object.assign(obj, obj);
    if ("enabled" === value.key) {
      if ("boolean" === typeof value.value) {
        trackToggle(value.value, false);
      }
      return true;
    }
    obj = { enabled: obj.enabled, automatic: obj.autoToggle, disable_notifications: obj.disableNotifications, disable_sounds: obj.disableSounds, hide_instant_invites: obj.hideInstantInvites, hide_personal_info: obj.hidePersonalInformation, enable_content_protection: obj.enableContentProtection };
    const disabledOverlayWidgets = obj.disabledOverlayWidgets;
    let joined;
    if (null != disabledOverlayWidgets) {
      joined = disabledOverlayWidgets.join(",");
    }
    let str3 = "";
    let str4 = "";
    if (null != joined) {
      str4 = joined;
    }
    obj.disabled_overlay_widgets = str4;
    ({ enabled: obj4.old_enabled, autoToggle: obj4.old_automatic, disableNotifications: obj4.old_disable_notifications, disableSounds: obj4.old_disable_sounds, hideInstantInvites: obj4.old_hide_instant_invites, hidePersonalInformation: obj4.old_hide_personal_info, enableContentProtection: obj4.old_enable_content_protection, disabledOverlayWidgets: disabledOverlayWidgets2 } = obj);
    let joined1;
    if (null != disabledOverlayWidgets2) {
      joined1 = disabledOverlayWidgets2.join(",");
    }
    if (null != joined1) {
      str3 = joined1;
    }
    obj.old_disabled_overlay_widgets = str3;
    importDefault(675).track(AnalyticEvents.UPDATE_STREAMER_MODE_SETTINGS, obj);
  },
  RUNNING_STREAMER_TOOLS_CHANGE: function handleRunningStreamerToolsChange(count) {
    if (obj.autoToggle) {
      obj.enabled = count.count > 0;
      trackToggle(count.count > 0, true);
      return true;
    } else {
      return false;
    }
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/StreamerModeStore.tsx");

export default tmp3;
