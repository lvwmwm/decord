// Module ID: 16160
// Function ID: 125246
// Name: _isNativeReflectConstruct
// Dependencies: [5, 7, 6, 15, 17, 18, 9232, 4812, 1849, 7542, 11761, 653, 11780, 16161, 11732, 11760, 668, 8526, 686, 11739, 11808, 5078, 2]

// Module 16160 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _startContactSyncForDiscoverability from "_startContactSyncForDiscoverability";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import dispatcher from "dispatcher";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { NewUserTypes } from "NewUserTypes";
import { PlatformTypes } from "ME";
import { HUBS_IN_ONBOARDING_COUNTRIES as closure_15 } from "HubEmailConnectionSteps";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
  transitionToStep: require("closeAddAvatarModal").openAddAvatarModal
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
  transitionToStep: require("handleNameInputScreenOrSuggestions").openContactSyncModalOnboarding
};
let items = [
  obj,
  {
    key: obj.DISCOVERABILITY,
    shouldShowStep() {
      return null == store.getLocalAccount(PlatformTypes.CONTACTS);
    },
    transitionToStep: require("_startContactSyncForDiscoverability").openDiscoverabilityModal
  },
  obj,
  {
    key: obj.STUDENT_HUB,
    shouldShowStep() {
      if (store2.getType() !== NewUserTypes.ORGANIC_REGISTERED) {
        return false;
      } else {
        countryCode = countryCode.getCountryCode();
        let alpha2;
        if (null != countryCode) {
          alpha2 = countryCode.alpha2;
        }
        return closure_15.includes(alpha2);
      }
    },
    transitionToStep() {
      const result = require(11760) /* _startContactSyncForDiscoverability */.transitionToHubEmailConnectionModal(require(668) /* keys */.ModalAnimation.SLIDE_IN, true);
    }
  },
  {
    key: obj.GUILD_TEMPLATE,
    shouldShowStep() {
      return store2.getType() === NewUserTypes.ORGANIC_REGISTERED;
    },
    transitionToStep() {
      return require(11760) /* _startContactSyncForDiscoverability */.transitionToNUFGuildTemplatesModal(require(668) /* keys */.ModalAnimation.SLIDE_IN);
    }
  },

];
const obj1 = {
  key: obj.DISCOVERABILITY,
  shouldShowStep() {
    return null == store.getLocalAccount(PlatformTypes.CONTACTS);
  },
  transitionToStep: require("_startContactSyncForDiscoverability").openDiscoverabilityModal
};
items[5] = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: require("showInstantInviteActionSheet").hasDeferredInvite,
  transitionToStep() {
    importDefault(686).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
tmp2 = new tmp2();
const obj2 = {
  key: obj.ACCEPT_INVITE,
  shouldShowStep: require("showInstantInviteActionSheet").hasDeferredInvite,
  transitionToStep() {
    importDefault(686).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
let result = require("_classCallCheck").fileFinishedImporting("modules/nuf/native/NewUserManager.tsx");

export default tmp2;
