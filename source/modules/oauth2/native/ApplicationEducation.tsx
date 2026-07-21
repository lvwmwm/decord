// Module ID: 9005
// Function ID: 70875
// Name: ApplicationEducationEntry
// Dependencies: []
// Exports: default

// Module 9005 (ApplicationEducationEntry)
function ApplicationEducationEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = callback2();
  let obj = { style: tmp.entry };
  let iconComponentResult = null;
  if (null != iconComponent) {
    obj = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj);
  }
  const items = [iconComponentResult, ];
  obj = { variant: "text-md/normal", style: tmp.entryText, children: children.text };
  items[1] = callback(arg1(dependencyMap[13]).Text, obj);
  obj.children = items;
  return closure_6(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const MAX_FRIENDS = arg1(dependencyMap[2]).MAX_FRIENDS;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { applicationEducation: {}, entry: { "Null": "<string:1107297123>", "Null": "n\u00E4stan ett \u00E5r", "Bool(false)": "n\u00E4stan {{count}} \u00E5r" }, entryText: { flex: 1 } };
obj = { "Null": 0, "Null": -1048576, tintColor: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
obj.entryIcon = obj;
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
  let accountScopes;
  let application;
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp2 = importDefault(dependencyMap[6])(application);
  if (accountScopes.includes(arg1(dependencyMap[7]).OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    const intl5 = arg1(dependencyMap[8]).intl;
    if (tmp2) {
      let obj = { applicationName: application.name };
      let formatToPlainStringResult = intl5.formatToPlainString(tmp26(tmp27[8]).t.3Mau0y, obj);
    } else {
      formatToPlainStringResult = intl5.string(tmp26(tmp27[8]).t.ex4sMU);
    }
    obj = { iconComponent: arg1(dependencyMap[9]).FriendsIcon };
    const intl6 = arg1(dependencyMap[8]).intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = arg1(dependencyMap[8]).t;
    if (tmp2) {
      const obj1 = { maxFriends: MAX_FRIENDS };
      let formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj1);
    } else {
      const obj2 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj2);
    }
    obj.text = formatToPlainString2Result;
    const obj3 = { iconComponent: arg1(dependencyMap[10]).ChatSmileIcon };
    const intl7 = arg1(dependencyMap[8]).intl;
    const string3 = intl7.string;
    const t5 = arg1(dependencyMap[8]).t;
    if (tmp2) {
      let string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    obj3.text = string3Result;
    const obj4 = { iconComponent: arg1(dependencyMap[11]).GameControllerIcon };
    const intl8 = arg1(dependencyMap[8]).intl;
    const string4 = intl8.string;
    const t6 = arg1(dependencyMap[8]).t;
    if (tmp2) {
      let string4Result = string4(t6./bdaNN);
    } else {
      string4Result = string4(t6.feD3+i);
    }
    obj4.text = string4Result;
    let obj5 = { iconComponent: arg1(dependencyMap[12]).SettingsIcon };
    const intl9 = arg1(dependencyMap[8]).intl;
    const string5 = intl9.string;
    let mSqazC = arg1(dependencyMap[8]).t;
    if (tmp2) {
      mSqazC = mSqazC.mSqazC;
      let string5Result = string5(mSqazC);
    } else {
      string5Result = string5(mSqazC.YFFVM1);
    }
    obj5.text = string5Result;
    obj5 = items.push(obj, obj3, obj4, obj5);
  } else {
    if (accountScopes.includes(arg1(dependencyMap[7]).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      const intl = arg1(dependencyMap[8]).intl;
      if (tmp2) {
        obj = { applicationName: application.name };
        let formatToPlainStringResult1 = intl.formatToPlainString(tmp5(tmp6[8]).t.3Mau0y, obj);
      } else {
        formatToPlainStringResult1 = intl.string(tmp5(tmp6[8]).t.ex4sMU);
      }
      const obj6 = { iconComponent: arg1(dependencyMap[9]).FriendsIcon };
      const intl2 = arg1(dependencyMap[8]).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = arg1(dependencyMap[8]).t;
      if (tmp2) {
        const obj7 = { maxFriends: MAX_FRIENDS };
        let formatToPlainStringResult2 = formatToPlainString(t.z9peav, obj7);
      } else {
        const obj8 = { maxFriends: MAX_FRIENDS };
        formatToPlainStringResult2 = formatToPlainString(t.WNKzo9, obj8);
      }
      obj6.text = formatToPlainStringResult2;
      const obj9 = { iconComponent: arg1(dependencyMap[11]).GameControllerIcon };
      const intl3 = arg1(dependencyMap[8]).intl;
      const string = intl3.string;
      const t2 = arg1(dependencyMap[8]).t;
      if (tmp2) {
        let stringResult = string(t2./bdaNN);
      } else {
        stringResult = string(t2.feD3+i);
      }
      obj9.text = stringResult;
      const obj10 = { iconComponent: arg1(dependencyMap[12]).SettingsIcon };
      const intl4 = arg1(dependencyMap[8]).intl;
      const string2 = intl4.string;
      const t3 = arg1(dependencyMap[8]).t;
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
          const obj13 = { hasMaxConnections: "editingMessageId", isBoostOnlySubscription: "turquoise", children: arr2 };
          tmp59 = callback(arg1(dependencyMap[13]).Text, obj13);
        }
      }
      const items1 = [tmp59, items.map((iconComponent) => callback(closure_9, { iconComponent: iconComponent.iconComponent, text: iconComponent.text }, arg1))];
      obj12.children = items1;
      const items2 = [closure_6(View, obj12), callback(arg1(dependencyMap[14]).AuthorizeFormSeparator, {})];
      obj11.children = items2;
      tmp66Result = tmp66(closure_7, obj11);
      const tmp67 = closure_7;
      const tmp68 = View;
    }
    return tmp66Result;
  }
};
