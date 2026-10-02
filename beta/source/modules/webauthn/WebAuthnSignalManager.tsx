// Module ID: 17656
// Function ID: 17657
// Name: WebAuthnSignalManager
// Dependencies: [5, 502, 6540, 6010, 2]

// Module 17656 (WebAuthnSignalManager)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let c1;

class WebAuthnSignalManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { AUTHENTICATOR_DELETE: applyArgumentsResult.handleAuthenticatorDelete, MFA_WEBAUTHN_CREDENTIALS_LOADED: applyArgumentsResult.handleWebAuthnCredentialsLoaded, CURRENT_USER_UPDATE: applyArgumentsResult.handleCurrentUserUpdate };
    return applyArgumentsResult;
  }
  handleAuthenticatorDelete(credential) {
    credential = credential.credential;
    return (async (arg0, value) => {
      let v3;
      if (credential === 2) {
        credential = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          credential = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              credential = 3;
              throw value;
            } else if (arg0 === 2) {
              credential = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj2 = credential(c1[3]);
              c1 = 1;
              credential = 1;
              const obj5 = { value: obj2.signalUnknownCredential(credential), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            credential = 3;
            throw value;
          } else if (arg0 === 2) {
            credential = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            credential = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          credential = 3;
          throw tmp7;
        }
      }
    })();
  }
  handleWebAuthnCredentialsLoaded(credentials) {
    credentials = credentials.credentials;
    return (async (arg0, value) => {
      let id;
      let v3;
      if (credentials === 2) {
        credentials = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          credentials = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              credentials = 3;
              throw value;
            } else if (arg0 === 2) {
              credentials = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = id.getId();
              const obj2 = credentials(c1[3]);
              c1 = 1;
              credentials = 1;
              const obj5 = { value: obj2.signalAllAcceptedCredentials(credentials, id), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            credentials = 3;
            throw value;
          } else if (arg0 === 2) {
            credentials = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            credentials = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          credentials = 3;
          throw tmp9;
        }
      }
    })();
  }
  handleCurrentUserUpdate(user) {
    user = user.user;
    return (async (arg0, value) => {
      let v3;
      if (user === 2) {
        user = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          user = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              user = 3;
              throw value;
            } else if (arg0 === 2) {
              user = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj2 = user(c1[3]);
              c1 = 1;
              user = 1;
              const obj5 = { value: obj2.signalCurrentUserDetails(user), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            user = 3;
            throw value;
          } else if (arg0 === 2) {
            user = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            user = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          user = 3;
          throw tmp7;
        }
      }
    })();
  }
}
const prototype = WebAuthnSignalManager.prototype;
const webAuthnSignalManager = new WebAuthnSignalManager();
const result = size.fileFinishedImporting("modules/webauthn/WebAuthnSignalManager.tsx");

export default webAuthnSignalManager;
