// Module ID: 5722
// Function ID: 5723
// Name: Linking
// Dependencies: [17, 5719, 2]

// Module 5722 (Linking)
import react_native from "react-native" /* 17 */;
import handleURL from "handleURL" /* 5719 */;
import size from "module_2" /* 2 */;

const Linking = react_native.Linking;
let obj = {
  openURL(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    const obj = { allowExternal: flag };
    const _default = handleURL.default;
    const merged = Object.assign(arg3);
    _default(arg0, arg1, obj);
  },
  openURLExternally(href, SAFARI) {
    handleURL.default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    const openURLResult = Linking.openURL(href);
    openURLResult.catch(() => {

    });
  }
};
const result = size.fileFinishedImporting("lib/native/Linking.tsx");

export default obj;
