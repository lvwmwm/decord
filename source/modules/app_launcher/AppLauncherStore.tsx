// Module ID: 8174
// Function ID: 64517
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8174 (_isNativeReflectConstruct)
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
    DISMISSED = arg1(dependencyMap[5]).AppLauncherCloseReason.DISMISSED;
  }
  obj.show = false;
  obj.entrypoint = arg1(dependencyMap[5]).AppLauncherEntrypoint.NONE;
  obj.closeReason = DISMISSED;
  obj.initialState = undefined;
  obj.activeChannelId = null;
  return true;
}
function handleDismissWithDismissed() {
  handleDismiss({ closeReason: arg1(dependencyMap[5]).AppLauncherCloseReason.DISMISSED });
}
function handleSetActiveCommand() {
  handleDismiss({ closeReason: arg1(dependencyMap[5]).AppLauncherCloseReason.COMMAND });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { -1437178970: "T", -1701227572: "r", -815960339: "isArray", 1559747154: "paddingHorizontal", -931638285: "color", entrypoint: arg1(dependencyMap[5]).AppLauncherEntrypoint.NONE, lastShownEntrypoint: arg1(dependencyMap[5]).AppLauncherEntrypoint.NONE, closeReason: arg1(dependencyMap[5]).AppLauncherCloseReason.DISMISSED, initialState: undefined };
let tmp2 = (Store) => {
  class AppLauncherStore {
    constructor() {
      self = this;
      tmp = closure_2(this, AppLauncherStore);
      obj = closure_5(AppLauncherStore);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AppLauncherStore;
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
      let show = closure_7.show;
      if (show) {
        show = closure_7.entrypoint === AppLauncherStore(closure_1[5]).AppLauncherEntrypoint.TEXT;
      }
      return show;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldShowModal",
    value() {
      let show = closure_7.show;
      if (show) {
        show = closure_7.entrypoint === AppLauncherStore(closure_1[5]).AppLauncherEntrypoint.VOICE;
      }
      return show;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "entrypoint",
    value() {
      return closure_7.entrypoint;
    }
  };
  items[4] = {
    key: "lastShownEntrypoint",
    value() {
      return closure_7.lastShownEntrypoint;
    }
  };
  items[5] = {
    key: "activeViewType",
    value() {
      return closure_7.activeViewType;
    }
  };
  items[6] = {
    key: "activeChannelId",
    value() {
      const activeChannelId = closure_7.activeChannelId;
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
      return closure_7.closeReason;
    }
  };
  items[8] = {
    key: "initialState",
    value() {
      return closure_7.initialState;
    }
  };
  return callback(AppLauncherStore, items);
}(importDefault(dependencyMap[6]).Store);
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
    obj.closeReason = arg1(dependencyMap[5]).AppLauncherCloseReason.DISMISSED;
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
tmp2 = new tmp2(importDefault(dependencyMap[7]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/app_launcher/AppLauncherStore.tsx");

export default tmp2;
