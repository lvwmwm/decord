// Module ID: 16628
// Function ID: 16629
// Name: deleteWebAuthnCredentialWithToast
// Dependencies: [5, 6742, 5707, 1114, 2]
// Exports: deleteWebAuthnCredentialWithToast

// Module 16628 (deleteWebAuthnCredentialWithToast)
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6742 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, closure_3;

let obj = function _deleteWebAuthnCredentialWithToast() {
  obj = _asyncToGenerator(async (arg0) => {
    let message = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let intl;
      let obj5;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: obj5.deleteWebAuthnCredential(message), done: false };
              obj5 = WebAuthnActionCreators;
              return obj6;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              message = closure_3;
              const obj7 = { text: message.message, variant: "critical" };
              const obj3 = closure_130_1(closure_130_2[2]);
              obj3.open("WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", obj7);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              obj = { text: intl.string(closure_130_0(closure_130_2[3]).t.ZnkeXs), variant: "success" };
              const open = closure_130_1(closure_130_2[2]).open;
              closure_130_1(closure_130_2[2]);
              intl = closure_130_0(closure_130_2[3]).intl;
              open("WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", obj);
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          closure_3 = tmp25;
          if (0 === c4) {
            c6 = 3;
            throw tmp25;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/webauthn/native/deleteWebAuthnCredentialWithToast.tsx");

export function deleteWebAuthnCredentialWithToast() {
  return obj(...arguments);
}
