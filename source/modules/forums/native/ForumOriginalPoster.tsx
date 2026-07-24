// Module ID: 11044
// Function ID: 85896
// Name: ForumOriginalPoster
// Dependencies: [31, 27, 33, 4130, 689, 4973, 4126, 1212, 2]
// Exports: getForumOriginalPoster

// Module 11044 (ForumOriginalPoster)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
class ForumOriginalPoster {
  constructor() {
    tmp = jsx();
    obj = { style: tmp.container };
    obj = { style: items };
    items = [, ];
    ({ opIcon: arr[0], opIconBackground: arr[1] } = tmp);
    obj1 = { variant: "text-xs/semibold", color: "text-brand" };
    intl = require("getSystemLocale").intl;
    obj1.children = intl.string(require("getSystemLocale").t.fyE8sH);
    obj.children = jsx(require("Text").Text, obj1);
    items1 = [, ];
    items1[0] = jsx(View, obj);
    obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    intl2 = require("getSystemLocale").intl;
    obj2.children = intl2.string(require("getSystemLocale").t.uN6Emt);
    items1[1] = jsx(require("Text").Text, obj2);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginEnd: 8, paddingHorizontal: 4 };
_createForOfIteratorHelperLoose.opIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.opIconBackground = { backgroundColor: require("result").DARK_BRAND_260_LIGHT_BRAND_200 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("result").DARK_BRAND_260_LIGHT_BRAND_200 };
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/ForumOriginalPoster.tsx");

export default ForumOriginalPoster;
export const getForumOriginalPoster = function getForumOriginalPoster() {
  return callback(ForumOriginalPoster, {});
};
