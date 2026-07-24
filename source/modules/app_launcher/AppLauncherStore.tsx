// Module ID: 8225
// Function ID: 64794
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8226, 566, 686, 2]

// Module 8225 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleDismiss(closeReason) {
  let DISMISSED = closeReason.closeReason;
  if (DISMISSED === undefined) {
    DISMISSED = require(8226) /* AppLauncherEntrypoint */.AppLauncherCloseReason.DISMISSED;
  }
  obj.show = false;
  obj.entrypoint = require(8226) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.NONE;
  obj.closeReason = DISMISSED;
  obj.initialState = undefined;
  obj.activeChannelId = null;
  return true;
}
function handleDismissWithDismissed() {
  handleDismiss({ closeReason: require(8226) /* AppLauncherEntrypoint */.AppLauncherCloseReason.DISMISSED });
}
function handleSetActiveCommand() {
  handleDismiss({ closeReason: require(8226) /* AppLauncherEntrypoint */.AppLauncherCloseReason.COMMAND });
}
let obj = { show: false, entrypoint: require("AppLauncherEntrypoint").AppLauncherEntrypoint.NONE, lastShownEntrypoint: require("AppLauncherEntrypoint").AppLauncherEntrypoint.NONE, activeViewType: null, activeChannelId: null, closeReason: require("AppLauncherEntrypoint").AppLauncherCloseReason.DISMISSED, initialState: undefined };
let tmp2 = ((Store) => {
  class AppLauncherStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, AppLauncherStore);
      obj = outer1_5(AppLauncherStore);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AppLauncherStore, Store);
  let obj = {
    key: "initialize",
    value() {

    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "shouldShowPopup",
    value() {
      let show = outer1_7.show;
      if (show) {
        show = outer1_7.entrypoint === AppLauncherStore(outer1_1[5]).AppLauncherEntrypoint.TEXT;
      }
      return show;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldShowModal",
    value() {
      let show = outer1_7.show;
      if (show) {
        show = outer1_7.entrypoint === AppLauncherStore(outer1_1[5]).AppLauncherEntrypoint.VOICE;
      }
      return show;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "entrypoint",
    value() {
      return outer1_7.entrypoint;
    }
  };
  items[4] = {
    key: "lastShownEntrypoint",
    value() {
      return outer1_7.lastShownEntrypoint;
    }
  };
  items[5] = {
    key: "activeViewType",
    value() {
      return outer1_7.activeViewType;
    }
  };
  items[6] = {
    key: "activeChannelId",
    value() {
      const activeChannelId = outer1_7.activeChannelId;
      let tmp = null;
      if (null != activeChannelId) {
        tmp = activeChannelId;
      }
      return tmp;
    }
  };
  items[7] = {
    key: "closeReason",
    value() {
      return outer1_7.closeReason;
    }
  };
  items[8] = {
    key: "initialState",
    value() {
      return outer1_7.initialState;
    }
  };
  return callback(AppLauncherStore, items);
})(require("initialize").Store);
tmp2.displayName = "AppLauncherStore";
obj = {
  APP_LAUNCHER_SHOW: function handleShow(entrypoint) {
    let activeChannelId;
    let activeViewType;
    let initialState;
    entrypoint = entrypoint.entrypoint;
    obj.show = true;
    obj.entrypoint = entrypoint;
    obj.lastShownEntrypoint = entrypoint;
    ({ activeViewType, initialState, activeChannelId } = entrypoint);
    obj.closeReason = require(8226) /* AppLauncherEntrypoint */.AppLauncherCloseReason.DISMISSED;
    obj.activeViewType = activeViewType;
    obj.activeChannelId = activeChannelId;
    obj.initialState = initialState;
    return true;
  },
  APP_LAUNCHER_DISMISS: handleDismiss,
  CONNECTION_OPEN: handleDismissWithDismissed,
  LOGOUT: handleDismissWithDismissed,
  CHANNEL_SELECT: handleDismissWithDismissed,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: handleSetActiveCommand
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/app_launcher/AppLauncherStore.tsx");

export default tmp2;
