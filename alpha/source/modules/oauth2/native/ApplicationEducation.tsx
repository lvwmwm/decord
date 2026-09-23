// Module ID: 9613
// Function ID: 9614
// Name: ApplicationEducation
// Dependencies: [19, 17, 1074, 21, 4827, 576, 9412, 8685, 1115, 4522, 9614, 9425, 7708, 4823, 9616, 2]
// Exports: default

// Module 9613 (ApplicationEducation)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4823 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8685 */;
import useIsSocialLayerParentApplicationDefault from "useIsSocialLayerParentApplication" /* 9412 */;
import noop from "module_19" /* 19 */;

require = fn;
function ApplicationEducationEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = closure_8();
  const obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  const items = [iconComponentResult, hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", style: tmp.entryText, children: children.text })];
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const MAX_FRIENDS = fn(1074).MAX_FRIENDS;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { applicationEducation: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 12 }, entryText: { flex: 1 }, entryIcon: null };
let size = { width: 20, height: 20, tintColor: nativeDefault.colors.TEXT_MUTED };
obj2.entryIcon = size;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp3 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    const intl5 = tmp4(1115).intl;
    if (tmp3) {
      const obj2 = { applicationName: application.name };
      let formatToPlainStringResult = intl5.formatToPlainString(tmp4(1115).t["3Mau0y"], obj2);
    } else {
      formatToPlainStringResult = intl5.string(tmp4(1115).t.ex4sMU);
    }
    const obj3 = { iconComponent: tmp4(4522).FriendsIcon, text: null };
    const intl6 = tmp4(1115).intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = tmp4(1115).t;
    if (tmp3) {
      const obj4 = { maxFriends: MAX_FRIENDS };
      let formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj4);
    } else {
      const obj5 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj5);
    }
    obj3.text = formatToPlainString2Result;
    const obj6 = { iconComponent: tmp4(9614).ChatSmileIcon, text: null };
    const intl7 = tmp4(1115).intl;
    const string3 = intl7.string;
    const t5 = tmp4(1115).t;
    if (tmp3) {
      let string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    obj6.text = string3Result;
    const obj7 = { iconComponent: tmp4(9425).GameControllerIcon, text: null };
    const intl8 = tmp4(1115).intl;
    const string4 = intl8.string;
    const t6 = tmp4(1115).t;
    if (tmp3) {
      let string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    obj7.text = string4Result;
    let obj8 = { iconComponent: tmp4(7708).SettingsIcon, text: null };
    const intl9 = tmp4(1115).intl;
    const string5 = intl9.string;
    let mSqazC = tmp4(1115).t;
    if (tmp3) {
      mSqazC = mSqazC.mSqazC;
      let string5Result = string5(mSqazC);
    } else {
      string5Result = string5(mSqazC.YFFVM1);
    }
    obj8.text = string5Result;
    obj8 = items.push(obj3, obj6, obj7, obj8);
  } else {
    if (accountScopes.includes(tmp4(8685).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      const intl = tmp4(1115).intl;
      if (tmp3) {
        const obj = { applicationName: application.name };
        let formatToPlainStringResult1 = intl.formatToPlainString(tmp4(1115).t["3Mau0y"], obj);
      } else {
        formatToPlainStringResult1 = intl.string(tmp4(1115).t.ex4sMU);
      }
      const obj9 = { iconComponent: tmp4(4522).FriendsIcon, text: null };
      const intl2 = tmp4(1115).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = tmp4(1115).t;
      if (tmp3) {
        const obj10 = { maxFriends: MAX_FRIENDS };
        let formatToPlainStringResult2 = formatToPlainString(t.z9peav, obj10);
      } else {
        const obj11 = { maxFriends: MAX_FRIENDS };
        formatToPlainStringResult2 = formatToPlainString(t.WNKzo9, obj11);
      }
      obj9.text = formatToPlainStringResult2;
      const obj12 = { iconComponent: tmp4(9425).GameControllerIcon, text: null };
      const intl3 = tmp4(1115).intl;
      const string = intl3.string;
      const t2 = tmp4(1115).t;
      if (tmp3) {
        let stringResult = string(t2["/bdaNN"]);
      } else {
        stringResult = string(t2["feD3+i"]);
      }
      obj12.text = stringResult;
      const obj13 = { iconComponent: tmp4(7708).SettingsIcon, text: null };
      const intl4 = tmp4(1115).intl;
      const string2 = intl4.string;
      const t3 = tmp4(1115).t;
      if (tmp3) {
        let string2Result = string2(t3.mSqazC);
      } else {
        string2Result = string2(t3.YFFVM1);
      }
      obj13.text = string2Result;
      items.push(obj9, obj12, obj13);
    }
    let tmp30Result = null;
    if (0 !== items.length) {
      const obj14 = { style: tmp.applicationEducation, children: null };
      let tmp27 = null;
      if (null != arr2) {
        tmp27 = null;
        if (arr2.length > 0) {
          const obj15 = { variant: "text-sm/normal", color: "text-default", children: arr2 };
          tmp27 = hasOwnProperty(tmp4(4823).Text, obj15);
        }
      }
      const obj16 = { children: null };
      const items1 = [tmp27, items.map((iconComponent, index) => closure_1_5(ApplicationEducationEntry, { iconComponent: iconComponent.iconComponent, text: iconComponent.text }, index))];
      obj14.children = items1;
      const items2 = [timestampProducer(View, obj14), hasOwnProperty(tmp4(9616).AuthorizeFormSeparator, {})];
      obj16.children = items2;
      tmp30Result = tmp30(React5, obj16);
    }
    return tmp30Result;
  }
};
