// Module ID: 12427
// Function ID: 12428
// Name: NUFActionCreators
// Dependencies: [5, 12399, 5761, 1390, 12428, 1085, 6661, 584, 5934, 12429, 2000, 12509, 12512, 12513, 1105, 12402, 12406, 2]
// Exports: closeDiscoverabilityModal, nextOnboardingStep, openDiscoverabilityModal, previousOnboardingStep, startContactSyncForDiscoverability, startOnboarding, toggleDiscoverabilityForUser, transitionToHubEmailConnectionModal, transitionToNUFGuildTemplatesModal

// Module 12427 (NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6661 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12402 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12406 */;
import NUFConstants from "NUFConstants" /* 12428 */;
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 12509 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12512 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12399 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5761 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let localAccount, name;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let modalConfig = function _startContactSyncForDiscoverability() {
  let obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0;
    let obj2;
    let obj5;
    name = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp3;
            currentUser = currentUser.getCurrentUser();
            let phone;
            if (currentUser != null) {
              phone = currentUser.phone;
            }
            localAccount = localAccount.getLocalAccount(constants.CONTACTS);
            ContactSyncUtils;
            if (null == phone) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Cannot start contact sync without a phone number");
              throw error;
            } else {
              metroRequire(name);
              const obj6 = { enabled: tmp14, name };
              c2 = 1;
              c3 = 1;
              const obj7 = { value: obj5.updateContactSyncEnabled(obj6), done: false };
              obj5 = ContactSyncActionCreatorsDefault;
              return obj7;
            }
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c2 = 2;
            c3 = 1;
            const obj9 = { value: obj2.uploadContacts("[]", true), done: false };
            obj2 = closure_129_0(closure_129_2[15]);
            return obj9;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp22) {
        c3 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
({ setAllowEmail: closure_4, setAllowSync: hasOwnProperty, setName: metroRequire, useContactSyncModalStore: metroImportDefault } = ContactSyncModalStore);
let closure_10 = NUFConstants.NUF_DISCOVERABILITY_MODAL_KEY;
const PlatformTypes = Constants.PlatformTypes;
let closure_12 = CreateGuildConstants.IN_APP_GUILD_TEMPLATES_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/NUFActionCreators.tsx");

export const startOnboarding = function startOnboarding() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ONBOARDING_START" });
};
export const nextOnboardingStep = function nextOnboardingStep(skip) {
  let flag = skip.skip;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = skip.skipAttempt;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ONBOARDING_STEP", skip: flag, skipAttempt: flag2 });
};
export const previousOnboardingStep = function previousOnboardingStep() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ONBOARDING_STEP", back: true });
};
export const transitionToNUFGuildTemplatesModal = function transitionToNUFGuildTemplatesModal(SLIDE_IN) {
  let paths;
  let closure_0 = SLIDE_IN;
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(_asyncToGenerator(async () => {
    let c3;
    let closure_1;
    let value = tmp;
    await value(c2[10])(c2[9], c2.paths);
    value = arg1.default;
    modalConfig = { animation: closure_129_0 };
    value.modalConfig = modalConfig;
    return value;
  }), {}, closure_12);
};
export const transitionToHubEmailConnectionModal = function transitionToHubEmailConnectionModal(SLIDE_IN, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = HubEmailConnectionModalActionCreatorsDefault;
  let obj2 = {
    onCloseExtra(invite) {
      const tmp = invite;
      if (tmp) {
        const obj2 = nuf_NUFActionCreators;
        const result = obj2.setNewUserFlowCompleted();
      } else {
        const obj = DispatcherDefault;
        obj.dispatch({ type: "ONBOARDING_STEP" });
      }
    },
    displayStudentPrompt: flag
  };
  obj.open(obj2, SLIDE_IN);
};
export const openDiscoverabilityModal = function openDiscoverabilityModal() {
  let paths;
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(_asyncToGenerator(async () => {
    let c2;
    let c3;
    let closure_1;
    await require("asyncRequire")(paths[13], paths.paths);
    const value = arg1.default;
    modalConfig = { animation: closure_129_0(closure_129_2[14]).ModalAnimation.SLIDE_IN_OUT };
    value.modalConfig = modalConfig;
    return value;
  }), {}, closure_10);
};
export const closeDiscoverabilityModal = function closeDiscoverabilityModal(skip) {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_10);
  const obj2 = DispatcherDefault;
  const obj3 = { type: "ONBOARDING_STEP", skip };
  obj2.dispatch(obj3);
};
export const startContactSyncForDiscoverability = function startContactSyncForDiscoverability() {
  return obj(...arguments);
};
export const toggleDiscoverabilityForUser = function toggleDiscoverabilityForUser() {
  const currentUser = UserStore.getCurrentUser();
  let phone;
  if (currentUser != null) {
    phone = currentUser.phone;
  }
  metroImportDefault = metroImportDefault.getState();
  if (null != phone) {
    hasOwnProperty(!(metroImportDefault.allowPhone || metroImportDefault.allowEmail));
  } else {
    hasOwnProperty(false);
    if (!(metroImportDefault.allowPhone || metroImportDefault.allowEmail)) {
      React3(true);
    }
  }
};
