// Module ID: 8985
// Function ID: 70804
// Name: TwoWayLinkError
// Dependencies: [31, 27, 33, 4130, 8943, 8986, 4126, 5121, 4541, 4543, 1212, 2]
// Exports: TwoWayLinkError

// Module 8985 (TwoWayLinkError)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = function TwoWayLinkError(arg0) {
  let body;
  let onClose;
  let onRetry;
  let title;
  ({ onClose, title, body, onRetry } = arg0);
  let obj = require(8943) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  const tmp = callback3();
  const items = [callback(closure_3, { source: importDefault(8986), style: callback3().image }), , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title };
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items[2] = callback(require(4126) /* Text */.Text, obj3);
  obj.children = items;
  const items1 = [callback2(closure_4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj5 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton };
  const obj6 = { size: "lg", variant: "primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl.string(require(1212) /* getSystemLocale */.t["5911Lb"]);
  obj6.onPress = onRetry;
  const items2 = [callback(require(4543) /* Button */.Button, obj6), ];
  const obj7 = { size: "lg", variant: "secondary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj7.text = intl2.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj7.onPress = onClose;
  items2[1] = callback(require(4543) /* Button */.Button, obj7);
  obj5.children = items2;
  obj4.children = callback2(require(4541) /* Stack */.Stack, obj5);
  items1[1] = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  obj.children = items1;
  return callback2(closure_4, obj);
};
