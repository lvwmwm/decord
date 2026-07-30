// Module ID: 8508
// Function ID: 8509
// Name: GameProfileStoreLinksActionSheet
// Dependencies: [19, 17, 21, 4189, 712, 8480, 3886, 1581, 5551, 5245, 4185, 1236, 4600, 4157, 2]
// Exports: default

// Module 8508 (GameProfileStoreLinksActionSheet)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: null, headerText: null, buttons: null };
createCacheKey = { gap: require("Themes").space.PX_8, paddingTop: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { gap: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { gap: require("Themes").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx");

export default function GameProfileStoreLinksActionSheet(gameName) {
  let require;
  let websiteButtons;
  ({ websiteButtons, trackAction: require } = gameName);
  let importDefault;
  const tmp = createCacheKey();
  importDefault = importDefault(8480)(importDefault(3886).openURL);
  let obj = { children: null };
  obj = { contentContainerStyle: null, children: null };
  obj = { paddingBottom: null };
  obj[0] = importDefault(1581)().bottom + importDefault(712).space.PX_16;
  obj[0] = obj;
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj2[3] = intl.string(require(1236) /* getSystemLocale */.t["/4gj6r"]);
  const items = [callback(require(4185) /* Text */.Text, obj2), ];
  const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj3[3] = intl2.format(require(1236) /* getSystemLocale */.t["0acM2Y"], { gameName: gameName.gameName });
  items[1] = callback(require(4185) /* Text */.Text, obj3);
  obj1[1] = items;
  const items1 = [callback2(View, obj1), ];
  const tmp2 = importDefault(8480);
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
  obj[1] = items1;
  obj[0] = callback2(require(5245) /* BottomSheetModal */.BottomSheetScrollView, obj);
  return callback(require(5551) /* ActionSheet */.ActionSheet, obj);
};
export const ACTION_SHEET_KEY = "game-profile-store-links";
