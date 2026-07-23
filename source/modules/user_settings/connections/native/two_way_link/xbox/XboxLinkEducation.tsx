// Module ID: 9037
// Function ID: 71004
// Name: XboxLinkEducation
// Dependencies: [31, 27, 653, 33, 4130, 8943, 1920, 8982, 4126, 1212, 5459, 5121, 4543, 2]
// Exports: default

// Module 9037 (XboxLinkEducation)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default function XboxLinkEducation(onClose) {
  let obj = require(8943) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  let obj1 = importDefault(1920);
  const articleURL = obj1.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  obj1 = { source: React.useMemo(() => ({ uri: outer1_1(outer1_2[7]) }), []), style: callback3().image };
  const items = [callback(closure_4, obj1), , ];
  const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.jHytat);
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  const obj3 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.format(require(1212) /* getSystemLocale */.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj3);
  obj.children = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj5 = { style: twoWayLinkStyles.footerButton };
  const obj6 = { size: "lg", variant: "primary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl3.string(require(1212) /* getSystemLocale */.t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = callback(require(4543) /* Button */.Button, obj6);
  obj4.children = callback(closure_5, obj5);
  items1[1] = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  obj.children = items1;
  return callback2(closure_5, obj);
};
