// Module ID: 9020
// Function ID: 71009
// Name: PlayStationLinkSuccess
// Dependencies: [31, 27, 33, 4130, 8982, 9021, 4126, 1212, 5121, 4543, 2]
// Exports: PlayStationLinkSuccess

// Module 9020 (PlayStationLinkSuccess)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export const PlayStationLinkSuccess = function PlayStationLinkSuccess(onClose) {
  let obj = require(8982) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  const tmp = callback3();
  const items = [callback(closure_4, { source: React.useMemo(() => ({ uri: outer1_1(outer1_2[5]) }), []), style: callback3().image }), , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.e6SOl0);
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.QjAZAQ);
  items[2] = callback(require(4126) /* Text */.Text, obj3);
  obj.children = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj5 = { style: twoWayLinkStyles.footerButton };
  const obj6 = { size: "md" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl3.string(require(1212) /* getSystemLocale */.t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = callback(require(4543) /* Button */.Button, obj6);
  obj4.children = callback(closure_5, obj5);
  items1[1] = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  obj.children = items1;
  return callback2(closure_5, obj);
};
