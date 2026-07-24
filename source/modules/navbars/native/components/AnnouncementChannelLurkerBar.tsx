// Module ID: 10398
// Function ID: 80196
// Name: AnnouncementChannelLurkerBar
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 4543, 10399, 2]

// Module 10398 (AnnouncementChannelLurkerBar)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
class AnnouncementChannelLurkerBar {
  constructor(arg0) {
    channel = global.channel;
    tmp = c5();
    obj = { style: tmp.wrapper };
    obj = { style: null, variant: "text-sm/medium", color: "mobile-text-heading-primary" };
    obj.style = tmp.text;
    intl = require("getSystemLocale").intl;
    obj.children = intl.string(require("getSystemLocale").t.Hl0Mqh);
    items = [, ];
    items[0] = jsx(require("Text").Text, obj);
    obj1 = { onPress: null, text: null, size: "sm", variant: "secondary", grow: true };
    obj1.onPress = function onPress() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        const result = channel(outer1_1[8]).showChannelFollowingActionSheet(channel.id, guildId);
        const obj = channel(outer1_1[8]);
      }
    };
    intl2 = require("getSystemLocale").intl;
    obj1.text = intl2.string(require("getSystemLocale").t["4z5PU1"]);
    items[1] = jsx(require("Button").Button, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 16, paddingTop: 8 };
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx");

export default AnnouncementChannelLurkerBar;
export { AnnouncementChannelLurkerBar };
