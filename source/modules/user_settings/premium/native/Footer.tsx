// Module ID: 12423
// Function ID: 96473
// Name: Footer
// Dependencies: [31, 27, 33, 4130, 12424, 5484, 4126, 1212, 4543, 5085, 12425, 2]
// Exports: default

// Module 12423 (Footer)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "center", width: "100%" }, footerText: { marginBottom: 24 }, button: { marginBottom: 40 }, easterEggSpacing: { position: "absolute", top: 40 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/Footer.tsx");

export default function Footer(showSubscribeButton) {
  showSubscribeButton = showSubscribeButton.showSubscribeButton;
  const tmp = callback3();
  importDefault(12424)(importDefault(5484).PREMIUM_MARKETING_FOOTER);
  let obj = { style: items };
  items = [tmp.container, showSubscribeButton.style];
  let tmp8 = showSubscribeButton;
  if (showSubscribeButton) {
    obj = {};
    obj = { style: tmp.footerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t["2bSPbq"]);
    const items1 = [callback(require(4126) /* Text */.Text, obj), ];
    const obj1 = { style: tmp.button };
    const obj2 = { text: tmp5, variant: "primary", size: "lg", onPress: tmp4, grow: true };
    obj1.children = callback(require(4543) /* Button */.Button, obj2);
    items1[1] = callback(View, obj1);
    obj.children = items1;
    tmp8 = callback2(closure_5, obj);
  }
  const items2 = [tmp8, ];
  const obj3 = {};
  let easterEggSpacing = null;
  const tmp15 = callback;
  const tmp2 = importDefault(12424);
  const tmp6 = callback2;
  const tmp7 = View;
  if (!showSubscribeButton) {
    easterEggSpacing = tmp.easterEggSpacing;
  }
  obj3.style = easterEggSpacing;
  obj3.source = importDefault(12425);
  items2[1] = tmp15(importDefault(5085), obj3);
  obj.children = items2;
  return tmp6(tmp7, obj);
};
