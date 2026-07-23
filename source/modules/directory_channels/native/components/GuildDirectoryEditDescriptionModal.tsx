// Module ID: 10045
// Function ID: 77605
// Name: GuildDirectoryEditDescription
// Dependencies: [5, 31, 27, 33, 4130, 5084, 10046, 10044, 5121, 4126, 1212, 10047, 5087, 5519, 2]
// Exports: default

// Module 10045 (GuildDirectoryEditDescription)
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function GuildDirectoryEditDescription(entry) {
  entry = entry.entry;
  function _onSubmit(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_4(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { top: true, style: tmp.safeArea };
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled" };
  obj = { style: tmp.header };
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = entry(1212).intl;
  obj1.children = intl.format(entry(1212).t.w9tsNk, { guildName: entry.name });
  obj.children = callback(entry(4126).Text, obj1);
  const items = [callback(closure_5, obj), ];
  const obj3 = {
    onSubmit(arg0, arg1) {
      return _onSubmit(...arguments);
    }
  };
  const intl2 = entry(1212).intl;
  obj3.buttonLabel = intl2.string(entry(1212).t["R3BPH+"]);
  obj3.entry = entry;
  obj3.directoryChannelId = entry.channelId;
  items[1] = callback(_onSubmit(10047), obj3);
  obj.children = items;
  obj.children = callback2(closure_6, obj);
  return callback(entry(5121).SafeAreaPaddingView, obj);
}
function getScreens(arg0) {
  const _require = arg0;
  let obj = {};
  obj = {
    fullscreen: true,
    headerLeft: _require(5087).getHeaderCloseButton(importDefault(10044).close),
    headerTitle() {
      return null;
    },
    render() {
      const merged = Object.assign(closure_0);
      return outer1_7(outer1_11, {});
    }
  };
  obj[EDIT_DESCRIPTION] = obj;
  return obj;
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
_createForOfIteratorHelperLoose.safeArea = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { flex: 1 };
_createForOfIteratorHelperLoose.title = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.header = { alignItems: "center", justifyContent: "center", padding: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
const result = require("get ActivityIndicator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx");

export default function GuildDirectoryEditDescriptionModal(arg0) {
  const obj = { screens: getScreens(arg0), initialRouteName: EDIT_DESCRIPTION };
  return callback(require(5519) /* NavigationStack */.Navigator, obj);
};
