// Module ID: 5658
// Function ID: 5659
// Name: Linking
// Dependencies: [17, 5655, 2]

// Module 5658 (Linking)
import react_native from "react-native" /* 17 */;
import handleURL from "handleURL" /* 5655 */;
import size from "module_2" /* 2 */;

const Linking = react_native.Linking;
const obj = {
  openURL(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    handleURL.default(arg0, arg1, { allowExternal: flag });
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
