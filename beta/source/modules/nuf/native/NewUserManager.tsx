// Module ID: 17567
// Function ID: 17568
// Name: NewUserManager
// Dependencies: [5, 6430, 5440, 1377, 5949, 12354, 1085, 12385, 17568, 12325, 12353, 1105, 9481, 584, 6613, 12332, 12415, 2]

// Module 17567 (NewUserManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12325 */;
import NUFActionCreators from "NUFActionCreators" /* 12353 */;
import NUFConstants from "NUFConstants" /* 12354 */;
import HubConstants from "HubConstants" /* 12385 */;
import AddAvatarModalActionCreators from "AddAvatarModalActionCreators" /* 17568 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PhoneStore from "PhoneStore" /* 6430 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import UserStore from "UserStore" /* 1377 */;
import NewUserStore from "NewUserStore" /* 5949 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c5, c6;

const NewUserTypes = NUFConstants.NewUserTypes;
const PlatformTypes = Constants.PlatformTypes;
let includes = HubConstants.HUBS_IN_ONBOARDING_COUNTRIES;
let obj = { REGISTRATION: "Registration", ADD_AVATAR: "Add Avatar", CONTACT_SYNC: "Contact Sync", GUILD_TEMPLATE: "Guild Template", STUDENT_HUB: "Student Hub", NEW_USER_INTENT: "New User Intent", ACCEPT_INVITE: "Accept Invite", DISCOVERABILITY: "Discoverability" };
let obj2 = {
  key: obj.ADD_AVATAR,
  shouldShowStep() {
    const currentUser = UserStore.getCurrentUser();
    let avatar;
    if (currentUser != null) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  },
  transitionToStep: AddAvatarModalActionCreators.openAddAvatarModal
};
let obj3 = {
  key: obj.CONTACT_SYNC,
  shouldShowStep() {
    const localAccount = ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
    let friendSync;
    if (localAccount != null) {
      friendSync = localAccount.friendSync;
    }
    let tmp3 = !friendSync;
    if (tmp3) {
      const currentUser = UserStore.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      tmp3 = null != phone;
    }
    return tmp3;
  },
  transitionToStep: ContactSyncModalActionCreators.openContactSyncModalOnboarding
};
const items = [obj2, , , , , ];
let obj4 = {
  key: obj.DISCOVERABILITY,
  shouldShowStep() {
    return null == ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
  },
  transitionToStep: NUFActionCreators.openDiscoverabilityModal
};
items[1] = obj4;
items[2] = obj3;
items[3] = {
  key: obj.STUDENT_HUB,
  shouldShowStep() {
    if (NewUserStore.getType() !== NewUserTypes.ORGANIC_REGISTERED) {
      return false;
    } else {
      const countryCode = PhoneStore.getCountryCode();
      let alpha2;
      includes = includes.includes;
      if (countryCode != null) {
        alpha2 = countryCode.alpha2;
      }
      return includes(alpha2);
    }
  },
  transitionToStep() {
    const obj = NUFActionCreators;
    const result = obj.transitionToHubEmailConnectionModal(ConstantsIOS.ModalAnimation.SLIDE_IN, true);
  }
};
items[4] = {
  key: obj.GUILD_TEMPLATE,
  shouldShowStep() {
    return NewUserStore.getType() === NewUserTypes.ORGANIC_REGISTERED;
  },
  transitionToStep() {
    const obj = NUFActionCreators;
    return obj.transitionToNUFGuildTemplatesModal(ConstantsIOS.ModalAnimation.SLIDE_IN);
  }
};
let obj5 = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: instant_invite_InstantInviteUtils.hasDeferredInvite,
  transitionToStep() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
items[5] = obj5;
class NewUserManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._onboardingStepIndex = -1;
    applyArgumentsResult._lastStep = null;
    applyArgumentsResult.actions = {
      ONBOARDING_STEP(guildId) {
        require.handleOnboardingStep(guildId);
      }
    };
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let _lastStep2;
      closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let flag;
          let flag2;
          let flag3;
          let _onboardingStepIndex;
          let closure_4;
          let closure_7;
          let key2;
          let shouldShowStep;
          let transitionToStep;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let c4 = 0;
              let closure_3 = tmp;
              flag = closure_0.skip ?? false;
              flag2 = tmp80.skipAttempt ?? false;
              flag3 = tmp80.back ?? false;
              _onboardingStepIndex = undefined;
              closure_4 = undefined;
              closure_7 = undefined;
              key2 = undefined;
              shouldShowStep = undefined;
              transitionToStep = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              _onboardingStepIndex = closure_132_1._onboardingStepIndex;
              const tmp79 = flag3;
              if (tmp79) {
                let key;
                const tmp49 = closure_132_1;
                if (length[_onboardingStepIndex] != null) {
                  key = tmp52.key;
                }
                let _lastStep = key;
                if (key == null) {
                  _lastStep = null;
                }
                tmp49._lastStep = _lastStep;
                closure_132_1._onboardingStepIndex = closure_132_1._onboardingStepIndex - 1;
                closure_4 = length[closure_132_1._onboardingStepIndex];
                key2 = closure_4.key;
                transitionToStep = closure_4.transitionToStep;
                const obj10 = closure_0(_lastStep2[15]);
                obj10.trackNUFStep(closure_132_1._lastStep, key2, { back: true });
                transitionToStep();
                c6 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              } else {
                closure_132_1._onboardingStepIndex = closure_132_1._onboardingStepIndex + 1;
                if (closure_132_1._onboardingStepIndex >= length.length) {
                  const obj9 = { skip_attempt: flag2 };
                  const obj6 = closure_0(_lastStep2[15]);
                  obj6.trackNUFStep(closure_132_1._lastStep, "NUF Complete", obj9);
                  const obj8 = closure_0(_lastStep2[16]);
                  const result = obj8.setNewUserFlowCompleted();
                  c6 = 3;
                  const obj11 = { value: undefined, done: true };
                  return obj11;
                } else {
                  closure_7 = length[closure_132_1._onboardingStepIndex];
                  key2 = closure_7.key;
                  shouldShowStep = closure_7.shouldShowStep;
                  transitionToStep = closure_7.transitionToStep;
                  c5 = 2;
                  c6 = 1;
                  const obj12 = { value: shouldShowStep(), done: false };
                  return obj12;
                }
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            if (value) {
              const obj14 = { skip: flag, skip_attempt: flag2 };
              const obj2 = closure_0(_lastStep2[15]);
              obj2.trackNUFStep(closure_132_1._lastStep, key2, obj14);
              let key1;
              const tmp15 = closure_132_1;
              if (length[_onboardingStepIndex] != null) {
                key1 = tmp18.key;
              }
              _lastStep2 = key1;
              if (key1 == null) {
                _lastStep2 = null;
              }
              tmp15._lastStep = _lastStep2;
              transitionToStep();
            } else {
              const obj = { skip: flag };
              closure_132_1.handleOnboardingStep(obj);
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp70) {
          c6 = 3;
          throw tmp70;
        }
      }
    });
    applyArgumentsResult.handleOnboardingStep = function() {
      return closure_0(...arguments);
    };
    return applyArgumentsResult;
  }
}
const newUserManager = new NewUserManager();
let result = size.fileFinishedImporting("modules/nuf/native/NewUserManager.tsx");

export default newUserManager;
