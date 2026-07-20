// Module ID: 4329
// Function ID: 38194
// Dependencies: []

// Module 4329
const AppContext = require(dependencyMap[0]).AppContext;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("actions/ModalActionCreators.tsx");

export default {
  push(modal, props) {
    let tmp = arg2;
    let APP = arg4;
    if (arg2 === undefined) {
      tmp = importDefault(dependencyMap[1])("modal");
    }
    if (APP === undefined) {
      APP = AppContext.APP;
    }
    let obj = require(dependencyMap[2]);
    obj = { key: tmp, modal: importDefault(dependencyMap[3])(modal, {}, props, tmp) };
    const merged = Object.assign(arg3);
    obj.pushModal(obj);
    obj = { type: "MODAL_PUSH", modal, props, key: tmp, appContext: APP };
    importDefault(dependencyMap[4]).dispatch(obj);
    return tmp;
  },
  pushLazy(closure_1, closure_2, closure_4, navigationParams) {
    let tmp = closure_4;
    const require = this;
    const importDefault = closure_1;
    const dependencyMap = closure_2;
    if (closure_4 === undefined) {
      tmp = importDefault(dependencyMap[1])("modal");
    }
    const AppContext = tmp;
    const rootNavigationRef = require(dependencyMap[5]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        if (closure_1 instanceof Promise) {
          let nextPromise = closure_1.then((arg0) => arg0.default);
        } else {
          nextPromise = closure_1();
        }
        nextPromise.then((arg0) => self.push(arg0, arg1, tmp, arg3));
      }
    }
    const obj = require(dependencyMap[5]);
    return new Promise((arg0) => {
      const self = arg0;
      return arg0(arg1[6]).enqueue(() => arg0(arg0.pushLazy(closure_1, closure_2, closure_3, closure_4)));
    });
  },
  updateAnimation(key, SLIDE_IN_OUT) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "MODAL_UPDATE", key, props: {}, partial: true, animation: SLIDE_IN_OUT };
    obj.dispatch(obj);
  },
  pop() {
    require(dependencyMap[2]).popModal();
    const obj = require(dependencyMap[2]);
    importDefault(dependencyMap[4]).dispatch({ type: "MODAL_POP" });
  },
  popWithKey(closure_5, onExited) {
    let obj = require(dependencyMap[2]);
    obj.popModal(closure_5, onExited);
    obj = { type: "MODAL_POP", key: closure_5, onExited };
    importDefault(dependencyMap[4]).dispatch(obj);
  },
  popAboveKey(voiceChannelKey) {
    return require(dependencyMap[2]).popModalsAboveKey(voiceChannelKey);
  },
  popAll() {
    require(dependencyMap[2]).popAllModals();
    const obj = require(dependencyMap[2]);
    importDefault(dependencyMap[4]).dispatch({ type: "MODAL_POP_ALL" });
    const obj2 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" });
    const obj3 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "GUILD_SETTINGS_CLOSE" });
    const obj4 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "HIDE_ACTION_SHEET" });
    const obj5 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
    const obj6 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    const obj7 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "QUICKSWITCHER_HIDE" });
    const obj8 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    const obj9 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" });
    const obj10 = importDefault(dependencyMap[4]);
    importDefault(dependencyMap[4]).dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
  }
};
