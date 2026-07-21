// Module ID: 13653
// Function ID: 103424
// Name: FamilyCenterParentalConsentNotice
// Dependencies: []
// Exports: default

// Module 13653 (FamilyCenterParentalConsentNotice)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[3]).space.PX_16 };
obj.container = obj;
obj.link = { textDecorationLine: "underline" };
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalConsentNotice.tsx");

export default function FamilyCenterParentalConsentNotice() {
  function learnMoreHook(children) {
    return callback2(tmp(closure_2[7]).Text, { style: tmp.link, onPress: closure_1, children }, arg1);
  }
  const tmp = callback();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[4]);
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  let obj1 = arg1(dependencyMap[5]);
  const parentalConsentWarning = obj1.useParentalConsentWarning();
  let daysRemaining;
  if (null != parentalConsentWarning) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  let tmp5 = null;
  if (null != daysRemaining) {
    tmp5 = daysRemaining;
  }
  const importDefault = React.useCallback(() => {
    callback(closure_2[6]).openURL("https://support.discord.com/hc/articles/14155060633623");
  }, []);
  if (isParentalConsentBannerActive) {
    if (null != tmp5) {
      if (tmp5 >= 0) {
        obj = { style: tmp.container };
        if (0 === tmp5) {
          const intl2 = arg1(dependencyMap[9]).intl;
          obj = { learnMoreHook };
          let formatResult = intl2.format(importDefault(dependencyMap[10]).S5kmfO, obj);
        } else {
          const intl = arg1(dependencyMap[9]).intl;
          obj1 = { count: tmp5, learnMoreHook };
          formatResult = intl.format(importDefault(dependencyMap[10]).5jm+T3, obj1);
        }
        obj.text = formatResult;
        return jsx(importDefault(dependencyMap[8]), obj);
      }
    }
  }
  return null;
};
