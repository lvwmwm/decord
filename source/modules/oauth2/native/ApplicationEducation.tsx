// Module ID: 9052
// Function ID: 71144
// Name: ApplicationEducationEntry
// Dependencies: [31, 27, 653, 33, 4130, 689, 8999, 8354, 1212, 3832, 9053, 8979, 5791, 4126, 9055, 2]
// Exports: default

// Module 9052 (ApplicationEducationEntry)
import "result";
import { View } from "get ActivityIndicator";
import { MAX_FRIENDS } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function ApplicationEducationEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.entry };
  let iconComponentResult = null;
  if (null != iconComponent) {
    obj = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj);
  }
  const items = [iconComponentResult, ];
  obj = { variant: "text-md/normal", style: tmp.entryText, children: children.text };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return closure_6(View, obj);
}
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { applicationEducation: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 12 }, entryText: { flex: 1 } };
_createForOfIteratorHelperLoose = { width: 20, height: 20, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.entryIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
  let accountScopes;
  let application;
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp2 = importDefault(8999)(application);
  if (accountScopes.includes(require(8354) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    if (tmp2) {
      let obj = { applicationName: application.name };
      let formatToPlainStringResult = intl5.formatToPlainString(tmp26(1212).t["3Mau0y"], obj);
    } else {
      formatToPlainStringResult = intl5.string(tmp26(1212).t.ex4sMU);
    }
    obj = { iconComponent: require(3832) /* FriendsIcon */.FriendsIcon };
    const intl6 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = require(1212) /* getSystemLocale */.t;
    if (tmp2) {
      const obj1 = { maxFriends: MAX_FRIENDS };
      let formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj1);
    } else {
      const obj2 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj2);
    }
    obj.text = formatToPlainString2Result;
    const obj3 = { iconComponent: require(9053) /* ChatSmileIcon */.ChatSmileIcon };
    const intl7 = require(1212) /* getSystemLocale */.intl;
    const string3 = intl7.string;
    const t5 = require(1212) /* getSystemLocale */.t;
    if (tmp2) {
      let string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    obj3.text = string3Result;
    const obj4 = { iconComponent: require(8979) /* GameControllerIcon */.GameControllerIcon };
    const intl8 = require(1212) /* getSystemLocale */.intl;
    const string4 = intl8.string;
    const t6 = require(1212) /* getSystemLocale */.t;
    if (tmp2) {
      let string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    obj4.text = string4Result;
    let obj5 = { iconComponent: require(5791) /* SettingsIcon */.SettingsIcon };
    const intl9 = require(1212) /* getSystemLocale */.intl;
    const string5 = intl9.string;
    let mSqazC = require(1212) /* getSystemLocale */.t;
    if (tmp2) {
      mSqazC = mSqazC.mSqazC;
      let string5Result = string5(mSqazC);
    } else {
      string5Result = string5(mSqazC.YFFVM1);
    }
    obj5.text = string5Result;
    obj5 = items.push(obj, obj3, obj4, obj5);
  } else {
    if (accountScopes.includes(require(8354) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      const intl = require(1212) /* getSystemLocale */.intl;
      if (tmp2) {
        obj = { applicationName: application.name };
        let formatToPlainStringResult1 = intl.formatToPlainString(tmp5(1212).t["3Mau0y"], obj);
      } else {
        formatToPlainStringResult1 = intl.string(tmp5(1212).t.ex4sMU);
      }
      const obj6 = { iconComponent: require(3832) /* FriendsIcon */.FriendsIcon };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = require(1212) /* getSystemLocale */.t;
      if (tmp2) {
        const obj7 = { maxFriends: MAX_FRIENDS };
        let formatToPlainStringResult2 = formatToPlainString(t.z9peav, obj7);
      } else {
        const obj8 = { maxFriends: MAX_FRIENDS };
        formatToPlainStringResult2 = formatToPlainString(t.WNKzo9, obj8);
      }
      obj6.text = formatToPlainStringResult2;
      const obj9 = { iconComponent: require(8979) /* GameControllerIcon */.GameControllerIcon };
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const string = intl3.string;
      const t2 = require(1212) /* getSystemLocale */.t;
      if (tmp2) {
        let stringResult = string(t2["/bdaNN"]);
      } else {
        stringResult = string(t2["feD3+i"]);
      }
      obj9.text = stringResult;
      const obj10 = { iconComponent: require(5791) /* SettingsIcon */.SettingsIcon };
      const intl4 = require(1212) /* getSystemLocale */.intl;
      const string2 = intl4.string;
      const t3 = require(1212) /* getSystemLocale */.t;
      if (tmp2) {
        let string2Result = string2(t3.mSqazC);
      } else {
        string2Result = string2(t3.YFFVM1);
      }
      obj10.text = string2Result;
      items.push(obj6, obj9, obj10);
    }
    let tmp66Result = null;
    if (0 !== items.length) {
      const obj11 = {};
      const obj12 = { style: tmp.applicationEducation };
      let tmp59 = null;
      if (null != arr2) {
        tmp59 = null;
        if (arr2.length > 0) {
          const obj13 = { variant: "text-sm/normal", color: "text-default", children: arr2 };
          tmp59 = callback(require(4126) /* Text */.Text, obj13);
        }
      }
      const items1 = [tmp59, items.map((iconComponent) => outer1_5(outer1_9, { iconComponent: iconComponent.iconComponent, text: iconComponent.text }, arg1))];
      obj12.children = items1;
      const items2 = [closure_6(View, obj12), callback(require(9055) /* AuthorizeFormSeparator */.AuthorizeFormSeparator, {})];
      obj11.children = items2;
      tmp66Result = tmp66(closure_7, obj11);
      const tmp67 = closure_7;
      const tmp68 = View;
    }
    return tmp66Result;
  }
};
