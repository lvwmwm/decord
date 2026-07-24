// Module ID: 13995
// Function ID: 107053
// Name: BountiesScrollPromptFooter
// Dependencies: [27, 33, 4130, 4126, 1212, 2]
// Exports: default

// Module 13995 (BountiesScrollPromptFooter)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles(() => ({ root: { alignItems: "center", gap: 2 }, titleText: { textAlign: "center" }, swipeText: { textAlign: "center", textTransform: "uppercase" } }));
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx");

export default function BountiesScrollPromptFooter() {
  const tmp = callback3();
  let obj = { style: tmp.root };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.titleText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.H57f41);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { variant: "text-xxs/semibold", color: "text-muted", style: tmp.swipeText };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.tG0zsk);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
