// Module ID: 8336
// Function ID: 66063
// Dependencies: []

// Module 8336
let closure_0 = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i;
let closure_1 = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/;
let closure_2 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
let closure_3 = /^(.*)#[0-9]{1,5}$/;
let closure_4 = /^(https:\/\/)?(discord\.com\/discovery\/game\/)([0-9-]+)\/?/;
let closure_5 = ["accessibilityValue", "maxFontSizeMultiplier", "1. Have rebuilt your app (with for instance 'npx expo run:ios')", "2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ", "https://github.com/henninghall/react-native-date-picker", "1. Installed pods (by for instance running 'cd ios && pod install')", "2. Rebuilt the app (by for instance 'npx react-native run-ios')", "1. Have rebuilt your app (with for instance 'npx expo run:android')", "2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ", "https://github.com/henninghall/react-native-date-picker"];
let closure_6 = [339804162, 1627390536, 1981367039, 1341980674, -10420222];
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/ValidationUtils.tsx");

export default {
  isEmail(first) {
    return regex.test(first);
  },
  isInvite(arr) {
    return regex2.test(arr);
  },
  isPhoneNumber(query) {
    return regex3.test(query);
  },
  isUserTagLike(query) {
    const match = regex4.exec(query);
    if (null != match) {
      if (match.length > 1) {
        let closure_0 = tmp;
        const someResult = closure_5.some((arg0) => tmp.includes(arg0));
        return !closure_5.some((arg0) => tmp.includes(arg0)) && !closure_6.includes(match[1]);
      }
    }
    return false;
  },
  isDiscoveryLink(arg0) {
    return regex5.test(arg0);
  }
};
