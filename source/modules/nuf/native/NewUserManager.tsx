// Module ID: 15996
// Function ID: 122749
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15996 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const NewUserTypes = arg1(dependencyMap[10]).NewUserTypes;
const PlatformTypes = arg1(dependencyMap[11]).PlatformTypes;
let closure_15 = arg1(dependencyMap[12]).HUBS_IN_ONBOARDING_COUNTRIES;
let obj = { REGISTRATION: "Registration", ADD_AVATAR: "Add Avatar", CONTACT_SYNC: "Contact Sync", GUILD_TEMPLATE: "Guild Template", STUDENT_HUB: "Student Hub", NEW_USER_INTENT: "New User Intent", ACCEPT_INVITE: "Accept Invite", DISCOVERABILITY: "Discoverability" };
obj = {
  key: obj.ADD_AVATAR,
  shouldShowStep() {
    const currentUser = authStore.getCurrentUser();
    let avatar;
    if (null != currentUser) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  },
  transitionToStep: arg1(dependencyMap[13]).openAddAvatarModal
};
obj = {
  key: obj.CONTACT_SYNC,
  shouldShowStep() {
    const localAccount = store.getLocalAccount(PlatformTypes.CONTACTS);
    let tmp2 = null == localAccount || !localAccount.friendSync;
    if (tmp2) {
      const currentUser = authStore.getCurrentUser();
      let phone;
      if (null != currentUser) {
        phone = currentUser.phone;
      }
      tmp2 = null != phone;
    }
    return tmp2;
  },
  transitionToStep: arg1(dependencyMap[14]).openContactSyncModalOnboarding
};
const items = [
  obj,
  {
    key: obj.DISCOVERABILITY,
    shouldShowStep() {
      return null == store.getLocalAccount(PlatformTypes.CONTACTS);
    },
    transitionToStep: arg1(dependencyMap[15]).openDiscoverabilityModal
  },
  obj,
  {
    key: obj.STUDENT_HUB,
    shouldShowStep() {
      if (store2.getType() !== NewUserTypes.ORGANIC_REGISTERED) {
        return false;
      } else {
        const countryCode = countryCode.getCountryCode();
        let alpha2;
        if (null != countryCode) {
          alpha2 = countryCode.alpha2;
        }
        return closure_15.includes(alpha2);
      }
    },
    transitionToStep() {
      const result = arg1(dependencyMap[15]).transitionToHubEmailConnectionModal(arg1(dependencyMap[16]).ModalAnimation.SLIDE_IN, true);
    }
  },
  {
    key: obj.GUILD_TEMPLATE,
    shouldShowStep() {
      return store2.getType() === NewUserTypes.ORGANIC_REGISTERED;
    },
    transitionToStep() {
      return arg1(dependencyMap[15]).transitionToNUFGuildTemplatesModal(arg1(dependencyMap[16]).ModalAnimation.SLIDE_IN);
    }
  },

];
const obj1 = {
  key: obj.DISCOVERABILITY,
  shouldShowStep() {
    return null == store.getLocalAccount(PlatformTypes.CONTACTS);
  },
  transitionToStep: arg1(dependencyMap[15]).openDiscoverabilityModal
};
items[5] = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: arg1(dependencyMap[17]).hasDeferredInvite,
  transitionToStep() {
    importDefault(dependencyMap[18]).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
let tmp2 = (arg0) => {
  class NewUserManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, NewUserManager);
      items1 = [...items];
      obj = closure_7(NewUserManager);
      tmp2 = closure_6;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      NewUserManager = tmp2Result;
      tmp2Result._onboardingStepIndex = -1;
      tmp2Result._lastStep = null;
      tmp2Result.actions = {
        ONBOARDING_STEP(guildId) {
              tmp2Result.handleOnboardingStep(guildId);
            }
      };
      tmp2Result.handleOnboardingStep = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      return tmp2Result;
    }
  }
  const arg1 = NewUserManager;
  callback2(NewUserManager, arg0);
  return callback(NewUserManager);
}(importDefault(dependencyMap[21]));
tmp2 = new tmp2();
const obj2 = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: arg1(dependencyMap[17]).hasDeferredInvite,
  transitionToStep() {
    importDefault(dependencyMap[18]).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/nuf/native/NewUserManager.tsx");

export default tmp2;
