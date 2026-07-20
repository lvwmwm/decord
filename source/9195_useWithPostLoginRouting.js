// Module ID: 9195
// Function ID: 72009
// Name: useWithPostLoginRouting
// Dependencies: []
// Exports: default

// Module 9195 (useWithPostLoginRouting)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ LoginStates: closure_7, AuthStates: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/auth/native/components/utils/useWithPostLoginRouting.tsx");

export default function useWithPostLoginRouting(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const tmp = callback(React.useState(), 2);
  const first = tmp[0];
  const dependencyMap = first;
  let closure_3 = tmp[1];
  const items = [closure_6];
  const loginStatus = arg1(dependencyMap[5]).useStateFromStoresObject(items, () => ({ loginStatus: authStore.getLoginStatus() })).loginStatus;
  const callback = loginStatus;
  const items1 = [arg0, arg1, loginStatus, first];
  const effect = React.useEffect((self) => {
    if (closure_2 !== constants.LOGGING_IN) {
      if (closure_2 !== constants.FORGOT_PASSWORD) {
        callback(loginStatus);
      }
    }
    if (constants.MFA_STEP === loginStatus) {
      self.push(constants2.MFA);
    } else {
      if (constants.ACCOUNT_SCHEDULED_FOR_DELETION !== tmp6) {
        if (constants.ACCOUNT_DISABLED !== tmp6) {
          if (constants.LOGIN_AGE_GATE === tmp6) {
            let obj = { existingUser: true };
            self.push(constants2.AGE_GATE_UNDERAGE, obj);
          }
        }
      }
      obj = { handleLogin: arg1 };
      self.push(constants2.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED, obj);
    }
    if (constants.PASSWORD_RECOVERY_PHONE_VERIFICATION === loginStatus) {
      obj = {};
      const intl = self(closure_2[6]).intl;
      obj.title = intl.string(self(closure_2[6]).t.+xqy3d);
      const intl2 = self(closure_2[6]).intl;
      obj.description = intl2.string(self(closure_2[6]).t.myKyqh);
      obj.phone = authStore.getCredentials().login;
      obj.onPhoneTokenReceived = function onPhoneTokenReceived(arg0) {
        const replaced = closure_0.replace(constants.EXTERNAL_LINK, { externalURL: callback(closure_2[7])(arg0) });
      };
      obj.onClose = function onClose() {
        callback(closure_2[8]).loginReset();
      };
      const replaced = self.replace(constants2.VERIFY_PHONE, obj);
    } else if (constants.PHONE_IP_AUTHORIZATION === tmp20) {
      const credentials = authStore.getCredentials();
      ({ login: closure_0, password: closure_1 } = credentials);
      const obj1 = {};
      const intl3 = self(closure_2[6]).intl;
      obj1.title = intl3.string(self(closure_2[6]).t.w55Oco);
      const intl4 = self(closure_2[6]).intl;
      obj1.description = intl4.string(self(closure_2[6]).t.0/ALaJ);
      const login = authStore.getCredentials().login;
      obj1.phone = login;
      // CreateGeneratorClosureLongIndex (0x67)
      closure_2 = callback(login);
      obj1.onPhoneTokenReceived = function() {
        return callback2(...arguments);
      };
      obj1.onClose = function onClose(arg0) {
        if (arg0) {
          let tmp6 = null != callback;
          if (tmp6) {
            tmp6 = "" !== callback;
          }
          if (tmp6) {
            callback(closure_0, callback);
          }
        } else {
          callback(closure_2[8]).loginReset();
          const obj = callback(closure_2[8]);
        }
      };
      self.push(constants2.VERIFY_PHONE, obj1);
    }
    callback(loginStatus);
  }, items1);
};
