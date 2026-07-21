// Module ID: 9060
// Function ID: 71120
// Name: ApplicationStreamActivityStatus
// Dependencies: []
// Exports: default

// Module 9060 (ApplicationStreamActivityStatus)
importAll(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

export default function ApplicationStreamActivityStatus(hideText) {
  let game;
  let hideIcon;
  let iconStyle;
  let maxFontSizeMultiplier;
  let textStyle;
  ({ game, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (hideIcon) {
    if (flag) {
      return null;
    }
  }
  let name;
  if (null != game) {
    name = game.name;
  }
  let tmp2 = null;
  if ("" !== name) {
    let name1;
    if (null != game) {
      name1 = game.name;
    }
    tmp2 = name1;
  }
  if (null != tmp2) {
    const intl2 = arg1(dependencyMap[2]).intl;
    let obj = { name: tmp2 };
    let formatResult = intl2.format(arg1(dependencyMap[2]).t.0wJXSh, obj);
  } else {
    const intl = arg1(dependencyMap[2]).intl;
    formatResult = intl.string(arg1(dependencyMap[2]).t.eXan7B);
  }
  obj = {};
  let tmp11 = !hideIcon;
  if (tmp11) {
    obj = { icon: arg1(dependencyMap[4]).TvIcon, style: iconStyle };
    tmp11 = callback(importDefault(dependencyMap[3]), obj);
    const tmp15 = importDefault(dependencyMap[3]);
  }
  const items = [tmp11, ];
  let tmp17 = !flag;
  if (tmp17) {
    const obj1 = { style: textStyle, maxFontSizeMultiplier, children: formatResult };
    tmp17 = callback(importDefault(dependencyMap[5]), obj1);
  }
  items[1] = tmp17;
  obj.children = items;
  return closure_5(closure_4, obj);
};
