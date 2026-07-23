// Module ID: 9017
// Function ID: 70938
// Name: Scope
// Dependencies: [31, 27, 33, 4130, 1212, 5776, 689, 4091, 4126, 5450, 8955, 8180, 8310, 2]
// Exports: default

// Module 9017 (Scope)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function Scope(arg0) {
  let error;
  let isFake;
  let text;
  ({ text, error, isFake } = arg0);
  const tmp = callback2();
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (isFake) {
    let stringResult = string(t.OX8EMU);
  } else {
    stringResult = string(t["0lpCFG"]);
  }
  let obj = { style: tmp.scopeContainer, accessible: true };
  let str = "";
  if (null != error) {
    const _HermesInternal = HermesInternal;
    str = ". " + error;
  }
  obj.accessibilityLabel = "" + stringResult + ": " + text + str;
  obj = { style: tmp.iconWrapper, accessible: false, importantForAccessibility: "no-hide-descendants" };
  if (isFake) {
    obj = { style: tmp.fakeScopeIcon, color: importDefault(689).colors.TEXT_MUTED, size: "refresh_sm" };
    let tmp8Result = tmp8(tmp9(5776).CircleXIcon, obj);
  } else {
    const obj1 = { color: importDefault(689).colors.TEXT_MUTED, size: "refresh_sm" };
    tmp8Result = tmp8(tmp9(4091).CircleCheckIcon, obj1);
  }
  obj.children = tmp8Result;
  const items = [callback(View, obj), ];
  const obj2 = { style: tmp.scope };
  const obj3 = { variant: "text-md/normal" };
  let str5;
  if (isFake) {
    str5 = "text-muted";
  }
  obj3.color = str5;
  obj3.children = text;
  const items1 = [callback(require(4126) /* Text */.Text, obj3), ];
  let tmp17 = null;
  if (null != error) {
    const obj4 = { variant: "text-xs/normal", children: error };
    tmp17 = callback(require(4126) /* Text */.Text, obj4);
  }
  items1[1] = tmp17;
  obj2.children = items1;
  items[1] = closure_5(View, obj2);
  obj.children = items;
  return closure_5(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ scopesContainer: { flexDirection: "column", gap: 16 }, scopes: { flexDirection: "column", gap: 16 }, scopeContainer: { flexDirection: "row" }, scope: { flex: 1, flexDirection: "column", justifyContent: "center" }, iconWrapper: { marginRight: 12, width: 20, height: 20 }, fakeScopeIcon: { opacity: 0.6 } });
const result = require("jsxProd").fileFinishedImporting("modules/oauth2/native/AuthorizeScopes.tsx");

export default function AuthorizeScopes(accountScopes) {
  let application;
  let importDefault;
  let integrationType;
  let isTrustedName;
  let requestedScopes;
  accountScopes = accountScopes.accountScopes;
  ({ requestedScopes, errors: importDefault, isTrustedName } = accountScopes);
  ({ application, integrationType } = accountScopes);
  if (isTrustedName === undefined) {
    isTrustedName = false;
  }
  const tmp = callback2();
  if (0 === accountScopes.length) {
    return null;
  } else {
    const t = accountScopes(1212).t;
    let hasItem = integrationType === accountScopes(8180).ApplicationIntegrationType.USER_INSTALL;
    if (hasItem) {
      hasItem = requestedScopes.includes(accountScopes(8310).OAuth2Scopes.APPLICATIONS_COMMANDS);
    }
    let obj = { style: tmp.scopesContainer };
    obj = { variant: "heading-sm/normal", color: "text-default" };
    const intl = accountScopes(1212).intl;
    obj = { application: application.name };
    obj.children = intl.format(isTrustedName ? t.PZpY9c : t["1Hz+Sl"], obj);
    const items = [callback(accountScopes(4126).Text, obj), ];
    const obj1 = { style: tmp.scopes };
    const mapped = accountScopes.map((value) => {
      let closure_0 = value;
      const scopeNames = accountScopes(outer1_2[10]).getScopeNames(value, closure_0);
      return scopeNames.map((text) => {
        const obj = { text };
        let tmp3;
        if (0 === arg1) {
          let first;
          if (null != outer1_1) {
            if (null != outer1_1[closure_0]) {
              first = tmp9[0];
            }
          }
          tmp3 = first;
        }
        obj.error = tmp3;
        return outer2_4(outer2_7, obj, "" + closure_0 + "-" + arg1);
      });
    });
    const items1 = [mapped.flat(), , ];
    if (hasItem) {
      const obj2 = {};
      const intl2 = accountScopes(1212).intl;
      obj2.text = intl2.string(accountScopes(1212).t.Ls2XRq);
      hasItem = callback(Scope, obj2);
    }
    items1[1] = hasItem;
    const obj3 = { text: tmp2(), isFake: true };
    items1[2] = callback(Scope, obj3);
    obj1.children = items1;
    items[1] = closure_5(View, obj1);
    obj.children = items;
    return closure_5(View, obj);
  }
};
