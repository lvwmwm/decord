// Module ID: 8727
// Function ID: 8728
// Name: AuthorizeScopes
// Dependencies: [19, 17, 21, 4836, 1115, 6034, 576, 4792, 4832, 5910, 8517, 8505, 7787, 2]
// Exports: default

// Module 8727 (AuthorizeScopes)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function Scope(arg0) {
  let error;
  let isFake;
  let items;
  let items1;
  let str;
  let stringResult;
  let text;
  let tmp10Result;
  let tmp6;
  ({ text, error, isFake } = arg0);
  const tmp = closure_6();
  const intl = intl3.intl;
  const string = intl.string;
  const t = intl3.t;
  if (isFake) {
    stringResult = string(t.OX8EMU);
    tmp6 = tmp2;
  } else {
    stringResult = string(t["0lpCFG"]);
    tmp6 = tmp2;
  }
  const obj = { style: tmp.scopeContainer, accessible: true, accessibilityLabel: "" + stringResult + ": " + text + str, children: items };
  str = "";
  if (null != error) {
    const _HermesInternal = HermesInternal;
    str = ". " + error;
  }
  const obj2 = { style: tmp.iconWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: tmp10Result };
  if (isFake) {
    const obj3 = { style: tmp.fakeScopeIcon, color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
    const CircleXIcon = tmp6(6034).CircleXIcon;
    tmp10Result = tmp10(CircleXIcon, obj3);
  } else {
    const obj4 = { color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
    const CircleCheckIcon = tmp6(4792).CircleCheckIcon;
    tmp10Result = tmp10(CircleCheckIcon, obj4);
  }
  items = [React3(View, obj2), ];
  let str3;
  const obj5 = { style: tmp.scope, children: items1 };
  const Text = tmp6(4832).Text;
  if (isFake) {
    str3 = "text-muted";
  }
  items1 = [React3(Text, { variant: "text-md/normal", color: str3, children: text }), ];
  let tmp10Result2 = null;
  if (null != error) {
    const obj6 = { variant: "text-xs/normal", children: error };
    tmp10Result2 = tmp10(tmp6(4832).Text, obj6);
  }
  items1[1] = tmp10Result2;
  items[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ scopesContainer: { flexDirection: "column", gap: 16 }, scopes: { flexDirection: "column", gap: 16 }, scopeContainer: { flexDirection: "row" }, scope: { flex: 1, flexDirection: "column", justifyContent: "center" }, iconWrapper: { marginRight: 12, width: 20, height: 20 }, fakeScopeIcon: { opacity: 0.6 } });
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeScopes.tsx");

export default function AuthorizeScopes(accountScopes) {
  let application;
  let integrationType;
  let intl;
  let intl2;
  let isTrustedName;
  let items;
  let items1;
  let obj3;
  let requestedScopes;
  let tmp3;
  accountScopes = accountScopes.accountScopes;
  ({ requestedScopes, errors: importDefault, isTrustedName } = accountScopes);
  ({ application, integrationType } = accountScopes);
  if (isTrustedName === undefined) {
    isTrustedName = false;
  }
  let tmp = closure_6();
  let tmp2 = dependencyMap;
  if (0 === accountScopes.length) {
    return null;
  } else {
    let PZpY9c;
    let tmp5;
    const tmp3Result = tmp3();
    const t = accountScopes(1115).t;
    if (isTrustedName) {
      PZpY9c = t.PZpY9c;
      tmp5 = tmp15;
    } else {
      PZpY9c = t["1Hz+Sl"];
      tmp5 = tmp15;
    }
    let hasItem = integrationType === tmp5(8505).ApplicationIntegrationType.USER_INSTALL;
    if (hasItem) {
      hasItem = requestedScopes.includes(tmp5(7787).OAuth2Scopes.APPLICATIONS_COMMANDS);
    }
    const tmp8 = closure_5;
    let obj = { style: tmp.scopesContainer, children: items };
    const obj2 = { variant: "heading-sm/normal", color: "text-default", children: intl.format(PZpY9c, obj3) };
    const Text = tmp5(4832).Text;
    intl = tmp5(1115).intl;
    obj3 = { application: application.name };
    items = [closure_4(Text, obj2), ];
    const obj4 = { style: tmp.scopes, children: items1 };
    const mapped = accountScopes.map((item) => {
      let closure_0 = item;
      let obj = accountScopes(dependencyMap[10]);
      const scopeNames = obj.getScopeNames(item, closure_0);
      return scopeNames.map((text, index) => {
        let tmp3;
        const obj = { text, error: tmp3 };
        tmp3 = undefined;
        const tmp = React3;
        const tmp2 = Scope;
        if (0 === index) {
          let first;
          if (importDefault != null) {
            if (tmp4[item] != null) {
              first = tmp8[0];
            }
          }
          tmp3 = first;
        }
        return tmp(tmp2, obj, "" + item + "-" + index);
      });
    });
    items1 = [mapped.flat(), , ];
    if (hasItem) {
      const obj5 = { text: intl2.string(tmp5(1115).t.Ls2XRq) };
      intl2 = tmp5(1115).intl;
      hasItem = tmp10(Scope, obj5);
    }
    items1[1] = hasItem;
    const obj6 = { text: tmp3Result, isFake: true };
    items1[2] = closure_4(Scope, obj6);
    items[1] = tmp8(View, obj4);
    return tmp8(View, obj);
  }
};
