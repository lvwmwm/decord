// Module ID: 9010
// Function ID: 70897
// Name: Scope
// Dependencies: []
// Exports: default

// Module 9010 (Scope)
function Scope(arg0) {
  let error;
  let isFake;
  let text;
  ({ text, error, isFake } = arg0);
  const tmp = callback2();
  const intl = arg1(dependencyMap[4]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[4]).t;
  if (isFake) {
    let stringResult = string(t.OX8EMU);
  } else {
    stringResult = string(t.0lpCFG);
  }
  let obj = { style: tmp.scopeContainer, accessible: true };
  let str = "";
  if (null != error) {
    const _HermesInternal = HermesInternal;
    str = ". " + error;
  }
  obj.accessibilityLabel = "" + stringResult + ": " + text + str;
  obj = { <string:3798542332>: 48, <string:2195412909>: 12, <string:1614302748>: 4, style: tmp.iconWrapper };
  if (isFake) {
    obj = { style: tmp.fakeScopeIcon, color: importDefault(tmp10[6]).colors.TEXT_MUTED, size: "refresh_sm" };
    let tmp8Result = tmp8(tmp9(tmp10[5]).CircleXIcon, obj);
  } else {
    const obj1 = { color: importDefault(tmp10[6]).colors.TEXT_MUTED, size: "refresh_sm" };
    tmp8Result = tmp8(tmp9(tmp10[7]).CircleCheckIcon, obj1);
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
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj3), ];
  let tmp17 = null;
  if (null != error) {
    const obj4 = { variant: "text-xs/normal", children: error };
    tmp17 = callback(arg1(dependencyMap[8]).Text, obj4);
  }
  items1[1] = tmp17;
  obj2.children = items1;
  items[1] = closure_5(View, obj2);
  obj.children = items;
  return closure_5(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ scopesContainer: { 9223372036854775807: "safety_state", 9223372036854775807: "message" }, scopes: { 9223372036854775807: "safety_state", 9223372036854775807: "message" }, scopeContainer: { flexDirection: "row" }, scope: {}, iconWrapper: { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true }, fakeScopeIcon: { opacity: 0.6 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/oauth2/native/AuthorizeScopes.tsx");

export default function AuthorizeScopes(accountScopes) {
  let application;
  let integrationType;
  let isTrustedName;
  let requestedScopes;
  accountScopes = accountScopes.accountScopes;
  const arg1 = accountScopes;
  ({ requestedScopes, errors: closure_1, isTrustedName } = accountScopes);
  ({ application, integrationType } = accountScopes);
  if (isTrustedName === undefined) {
    isTrustedName = false;
  }
  const tmp = callback2();
  if (0 === accountScopes.length) {
    return null;
  } else {
    const t = arg1(dependencyMap[4]).t;
    let hasItem = integrationType === arg1(dependencyMap[11]).ApplicationIntegrationType.USER_INSTALL;
    if (hasItem) {
      hasItem = requestedScopes.includes(arg1(dependencyMap[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
    }
    let obj = { style: tmp.scopesContainer };
    obj = { cachedAt: "<string:3992342784>", edpbxy: "<string:410073697>" };
    const intl = arg1(dependencyMap[4]).intl;
    obj = { application: application.name };
    obj.children = intl.format(isTrustedName ? t.PZpY9c : t.1Hz+Sl, obj);
    const items = [callback(arg1(dependencyMap[8]).Text, obj), ];
    const obj1 = { style: tmp.scopes };
    const mapped = accountScopes.map((value) => {
      const accountScopes = value;
      const scopeNames = accountScopes(closure_2[10]).getScopeNames(value, accountScopes);
      return scopeNames.map((text) => {
        const obj = { text };
        let tmp3;
        if (0 === arg1) {
          let first;
          if (null != closure_1) {
            if (null != closure_1[closure_0]) {
              first = tmp9[0];
            }
          }
          tmp3 = first;
        }
        obj.error = tmp3;
        return closure_4(closure_7, obj, "" + text + "-" + arg1);
      });
    });
    const items1 = [mapped.flat(), , ];
    if (hasItem) {
      const obj2 = {};
      const intl2 = arg1(dependencyMap[4]).intl;
      obj2.text = intl2.string(arg1(dependencyMap[4]).t.Ls2XRq);
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
