// Module ID: 4372
// Function ID: 38417
// Dependencies: [653, 4373, 4016, 4374, 686, 4017, 4375, 2]

// Module 4372
import { AppContext } from "ME";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("actions/ModalActionCreators.tsx");

export default {
  push(modal, props) {
    let tmp = arg2;
    let APP = arg4;
    if (arg2 === undefined) {
      tmp = importDefault(4373)("modal");
    }
    if (APP === undefined) {
      APP = AppContext.APP;
    }
    let obj = require(4016) /* _createForOfIteratorHelperLoose */;
    obj = { key: tmp, modal: importDefault(4374)(modal, {}, props, tmp) };
    const merged = Object.assign(arg3);
    obj.pushModal(obj);
    obj = { type: "MODAL_PUSH", modal, props, key: tmp, appContext: APP };
    importDefault(686).dispatch(obj);
    return tmp;
  },
  pushLazy(outer1_1, merged, closure_4, navigationParams) {
    let tmp = closure_4;
    const self = this;
    const importDefault = outer1_1;
    const dependencyMap = merged;
    if (closure_4 === undefined) {
      tmp = importDefault(4373)("modal");
    }
    const AppContext = tmp;
    closure_4 = navigationParams;
    const rootNavigationRef = self(4017).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        if (outer1_1 instanceof Promise) {
          let nextPromise = outer1_1.then((arg0) => arg0.default);
        } else {
          nextPromise = outer1_1();
        }
        nextPromise.then((arg0) => self.push(arg0, closure_2, closure_3, closure_4));
      }
    }
    const obj = self(4017);
    return new Promise((arg0) => {
      let closure_0 = arg0;
      return outer1_1(merged[6]).enqueue(() => lib(lib.pushLazy(outer1_1, outer1_2, outer1_3, outer1_4)));
    });
  },
  updateAnimation(key, SLIDE_IN_OUT) {
    let obj = importDefault(686);
    obj = { type: "MODAL_UPDATE", key, props: {}, partial: true, animation: SLIDE_IN_OUT };
    obj.dispatch(obj);
  },
  pop() {
    require(4016) /* _createForOfIteratorHelperLoose */.popModal();
    const obj = require(4016) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "MODAL_POP" });
  },
  popWithKey(PREMIUM_KEY, onExited) {
    let obj = require(4016) /* _createForOfIteratorHelperLoose */;
    obj.popModal(PREMIUM_KEY, onExited);
    obj = { type: "MODAL_POP", key: PREMIUM_KEY, onExited };
    importDefault(686).dispatch(obj);
  },
  popAboveKey(voiceChannelKey) {
    return require(4016) /* _createForOfIteratorHelperLoose */.popModalsAboveKey(voiceChannelKey);
  },
  popAll() {
    require(4016) /* _createForOfIteratorHelperLoose */.popAllModals();
    const obj = require(4016) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "MODAL_POP_ALL" });
    const obj2 = importDefault(686);
    importDefault(686).dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" });
    const obj3 = importDefault(686);
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_CLOSE" });
    const obj4 = importDefault(686);
    importDefault(686).dispatch({ type: "HIDE_ACTION_SHEET" });
    const obj5 = importDefault(686);
    importDefault(686).dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
    const obj6 = importDefault(686);
    importDefault(686).dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
    const obj7 = importDefault(686);
    importDefault(686).dispatch({ type: "QUICKSWITCHER_HIDE" });
    const obj8 = importDefault(686);
    importDefault(686).dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    const obj9 = importDefault(686);
    importDefault(686).dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" });
    const obj10 = importDefault(686);
    importDefault(686).dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
  }
};
