// Module ID: 14561
// Function ID: 14562
// Name: ApplicationEducation
// Dependencies: [19, 17, 1072, 21, 5009, 575, 9728, 8901, 1114, 5710, 14562, 9707, 7555, 5619, 14564, 2]
// Exports: default

// Module 14561 (ApplicationEducation)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5619 */;
import FriendsIcon from "FriendsIcon" /* 5710 */;
import SettingsIcon from "SettingsIcon" /* 7555 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8901 */;
import GameControllerIcon from "GameControllerIcon" /* 9707 */;
import useIsSocialLayerParentApplicationDefault from "useIsSocialLayerParentApplication" /* 9728 */;
import ChatSmileIcon from "ChatSmileIcon" /* 14562 */;
import AuthorizeFormSeparator from "AuthorizeFormSeparator" /* 14564 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
function ApplicationEducationEntry(iconComponent) {
  let items;
  iconComponent = iconComponent.iconComponent;
  const text = iconComponent.text;
  const tmp = closure_8();
  let iconComponentResult = null;
  const obj = { style: tmp.entry, children: items };
  const tmp2 = metroRequire;
  const tmp3 = View;
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  items = [iconComponentResult, ];
  const obj3 = { variant: "text-md/normal", style: tmp.entryText, children: text };
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  return tmp2(tmp3, obj);
}
const View = react_native.View;
const MAX_FRIENDS = Constants.MAX_FRIENDS;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let obj = { applicationEducation: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 12 }, entryText: { flex: 1 }, entryIcon: size };
size = { width: 20, height: 20, tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_8 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
  let accountScopes;
  let application;
  let arr2;
  let formatToPlainString2Result;
  let formatToPlainStringResult2;
  let items1;
  let items2;
  let string2Result;
  let string3Result;
  let string4Result;
  let string5Result;
  let stringResult;
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp = closure_8();
  const tmp3 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    let formatToPlainStringResult;
    const intl5 = tmp4(1114).intl;
    if (tmp3) {
      const obj2 = { applicationName: application.name };
      formatToPlainStringResult = intl5.formatToPlainString(tmp4(1114).t["3Mau0y"], obj2);
    } else {
      formatToPlainStringResult = intl5.string(tmp4(1114).t.ex4sMU);
    }
    const push2 = items.push;
    const obj3 = { iconComponent: FriendsIcon.FriendsIcon, text: formatToPlainString2Result };
    const intl6 = tmp4(1114).intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = tmp4(1114).t;
    if (tmp3) {
      const obj4 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj4);
    } else {
      const obj5 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj5);
    }
    const obj6 = { iconComponent: ChatSmileIcon.ChatSmileIcon, text: string3Result };
    const intl7 = tmp4(1114).intl;
    const string3 = intl7.string;
    const t5 = tmp4(1114).t;
    if (tmp3) {
      string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    const obj7 = { iconComponent: GameControllerIcon.GameControllerIcon, text: string4Result };
    const intl8 = tmp4(1114).intl;
    const string4 = intl8.string;
    const t6 = tmp4(1114).t;
    if (tmp3) {
      string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    const obj8 = { iconComponent: SettingsIcon.SettingsIcon, text: string5Result };
    const intl9 = tmp4(1114).intl;
    const string5 = intl9.string;
    const t7 = tmp4(1114).t;
    if (tmp3) {
      string5Result = string5(t7.mSqazC);
    } else {
      string5Result = string5(t7.YFFVM1);
    }
    push2(obj3, obj6, obj7, obj8);
    arr2 = formatToPlainStringResult;
  } else if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
    let formatToPlainStringResult1;
    const intl = tmp4(1114).intl;
    if (tmp3) {
      let obj = { applicationName: application.name };
      formatToPlainStringResult1 = intl.formatToPlainString(tmp4(1114).t["3Mau0y"], obj);
    } else {
      formatToPlainStringResult1 = intl.string(tmp4(1114).t.ex4sMU);
    }
    const push = items.push;
    const obj9 = { iconComponent: FriendsIcon.FriendsIcon, text: formatToPlainStringResult2 };
    const intl2 = tmp4(1114).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = tmp4(1114).t;
    if (tmp3) {
      const obj10 = { maxFriends: MAX_FRIENDS };
      formatToPlainStringResult2 = formatToPlainString(t.z9peav, obj10);
    } else {
      const obj11 = { maxFriends: MAX_FRIENDS };
      formatToPlainStringResult2 = formatToPlainString(t.WNKzo9, obj11);
    }
    const obj12 = { iconComponent: GameControllerIcon.GameControllerIcon, text: stringResult };
    const intl3 = tmp4(1114).intl;
    const string = intl3.string;
    const t2 = tmp4(1114).t;
    if (tmp3) {
      stringResult = string(t2["/bdaNN"]);
    } else {
      stringResult = string(t2["feD3+i"]);
    }
    const obj13 = { iconComponent: SettingsIcon.SettingsIcon, text: string2Result };
    const intl4 = tmp4(1114).intl;
    const string2 = intl4.string;
    const t3 = tmp4(1114).t;
    if (tmp3) {
      string2Result = string2(t3.mSqazC);
    } else {
      string2Result = string2(t3.YFFVM1);
    }
    push(obj9, obj12, obj13);
    arr2 = formatToPlainStringResult1;
  }
  let tmp29Result = null;
  if (0 !== items.length) {
    let tmp26 = null;
    const obj14 = { style: tmp.applicationEducation, children: items1 };
    const tmp30 = metroImportDefault;
    const tmp31 = View;
    if (null != arr2) {
      tmp26 = null;
      if (arr2.length > 0) {
        const obj15 = { variant: "text-sm/normal", color: "text-default", children: arr2 };
        tmp26 = hasOwnProperty(tmp4(5619).Text, obj15);
      }
    }
    const obj16 = { children: items2 };
    items1 = [
      tmp26,
      items.map((iconComponent, index) => {
          const obj = { iconComponent: iconComponent.iconComponent, text: iconComponent.text };
          return closure_1_5(ApplicationEducationEntry, obj, index);
        })
    ];
    items2 = [metroRequire(tmp31, obj14), hasOwnProperty(AuthorizeFormSeparator.AuthorizeFormSeparator, {})];
    tmp29Result = tmp29(tmp30, obj16);
  }
  return tmp29Result;
};
