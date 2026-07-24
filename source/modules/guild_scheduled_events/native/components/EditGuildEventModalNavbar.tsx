// Module ID: 8412
// Function ID: 66935
// Name: EditGuildEventModalNavbar
// Dependencies: [57, 31, 27, 33, 4130, 8389, 1327, 5121, 4126, 1212, 5788, 7696, 2]
// Exports: default

// Module 8412 (EditGuildEventModalNavbar)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  let tmp8;
  let tmp9;
  screen = screen.screen;
  const tmp = callback4();
  if (require(8389) /* recurrenceRuleToServer */.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (require(8389) /* recurrenceRuleToServer */.EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (require(8389) /* recurrenceRuleToServer */.EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    let obj = require(1327) /* isDiscordFrontendDevelopment */;
    obj.assertNever(screen);
  }
  [tmp8, tmp9] = callback(items, 2);
  obj = { top: true, style: tmp.header };
  obj = { style: tmp.buttonContainer };
  const items1 = [callback2(View, obj), , ];
  const obj1 = { style: tmp.headerTitle, variant: "text-xs/bold", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t["42HaFY"], { step: tmp8, total: tmp9 });
  items1[1] = callback2(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.buttonContainer };
  const obj3 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj3.onPress = screen.onClose;
  obj3.source = importDefault(7696);
  obj3.style = tmp.rightButton;
  obj2.children = callback2(require(5788) /* HeaderActionButton */.HeaderActionButton, obj3);
  items1[2] = callback2(View, obj2);
  obj.children = items1;
  return callback3(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
