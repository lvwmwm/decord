// Module ID: 8625
// Function ID: 68355
// Name: GameProfileStoreLinksActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 8597, 3827, 1557, 5500, 5189, 4126, 1212, 4543, 4098, 2]
// Exports: default

// Module 8625 (GameProfileStoreLinksActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { textAlign: "center" };
_createForOfIteratorHelperLoose.buttons = { gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx");

export default function GameProfileStoreLinksActionSheet(gameName) {
  let require;
  let websiteButtons;
  ({ websiteButtons, trackAction: require } = gameName);
  const tmp = _createForOfIteratorHelperLoose();
  importDefault = importDefault(8597)(importDefault(3827).openURL);
  let obj = {};
  obj = {};
  obj = { paddingBottom: importDefault(1557)().bottom + importDefault(689).space.PX_16 };
  obj.contentContainerStyle = obj;
  const obj1 = { style: tmp.header };
  const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.headerText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t["/4gj6r"]);
  const items = [callback(require(4126) /* Text */.Text, obj2), ];
  const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.format(require(1212) /* getSystemLocale */.t["0acM2Y"], { gameName: gameName.gameName });
  items[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items;
  const items1 = [callback2(View, obj1), ];
  const tmp2 = importDefault(8597);
  items1[1] = callback(View, {
    style: tmp.buttons,
    children: websiteButtons.map((url) => {
      let icon;
      let title;
      url = url.url;
      const action = url.action;
      ({ icon, title } = url);
      return outer1_4(outer1_0(outer1_2[12]).Button, {
        icon,
        text: title,
        variant: "secondary",
        size: "md",
        onPress() {
          action(outer2_2[13]).hideActionSheet();
          url(action);
          action(url);
        }
      }, url);
    })
  });
  obj.children = items1;
  obj.children = callback2(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj);
  return callback(require(5500) /* ActionSheet */.ActionSheet, obj);
};
export const ACTION_SHEET_KEY = "game-profile-store-links";
