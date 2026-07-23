// Module ID: 4337
// Function ID: 38290
// Dependencies: [653, 4338, 3981, 4339, 686, 3982, 4340, 2]

// Module 4337
import { AppContext } from "ME";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("actions/ModalActionCreators.tsx");

export default {
  push(modal, props) {
    let tmp = arg2;
    let APP = arg4;
    if (arg2 === undefined) {
      tmp = importDefault(4338)("modal");
    }
    if (APP === undefined) {
      APP = AppContext.APP;
    }
    let obj = require(3981) /* _createForOfIteratorHelperLoose */;
    obj = { key: tmp, modal: importDefault(4339)(modal, {}, props, tmp) };
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
      tmp = importDefault(4338)("modal");
    }
    const AppContext = tmp;
    closure_4 = navigationParams;
    const rootNavigationRef = self(3982).getRootNavigationRef();
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
    const obj = self(3982);
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
    require(3981) /* _createForOfIteratorHelperLoose */.popModal();
    const obj = require(3981) /* _createForOfIteratorHelperLoose */;
    importDefault(686).dispatch({ type: "MODAL_POP" });
  },
  popWithKey(PREMIUM_KEY, onExited) {
    let obj = require(3981) /* _createForOfIteratorHelperLoose */;
    obj.popModal(PREMIUM_KEY, onExited);
    obj = { type: "MODAL_POP", key: PREMIUM_KEY, onExited };
    importDefault(686).dispatch(obj);
  },
  popAboveKey(voiceChannelKey) {
    return require(3981) /* _createForOfIteratorHelperLoose */.popModalsAboveKey(voiceChannelKey);
  },
  popAll() {
    require(3981) /* _createForOfIteratorHelperLoose */.popAllModals();
    const obj = require(3981) /* _createForOfIteratorHelperLoose */;
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
