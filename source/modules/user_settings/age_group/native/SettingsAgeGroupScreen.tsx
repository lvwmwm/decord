// Module ID: 13673
// Function ID: 104994
// Name: SettingsAgeGroupHeader
// Dependencies: [31, 27, 7662, 653, 33, 4130, 689, 7536, 1920, 4126, 1212, 2716, 10095, 13550, 2]
// Exports: default

// Module 13673 (SettingsAgeGroupHeader)
import result from "result";
import { View } from "get ActivityIndicator";
import { MobileSetting } from "MobileSetting";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function SettingsAgeGroupHeader() {
  let obj = { style: _createForOfIteratorHelperLoose().headerContainer };
  const callback = React.useCallback(() => {
    const obj = outer1_1(outer1_2[7]);
    obj.openUrl(outer1_1(outer1_2[8]).getArticleURL(outer1_6.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(importDefault(2716).PY4MA0);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { variant: "text-sm/normal", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.format(importDefault(2716)["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.headerContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  const node = React.useMemo(() => {
    let obj = outer1_0(outer1_2[12]);
    obj = {};
    obj = {};
    const intl = outer1_0(outer1_2[10]).intl;
    obj.label = intl.string(outer1_1(outer1_2[11])["5Mi5TE"]);
    const items = [, ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1] } = outer1_5);
    obj.settings = items;
    const items1 = [obj];
    obj.sections = items1;
    obj.ListHeaderComponent = outer1_10;
    return obj.createList(obj);
  }, []);
  return callback(importDefault(13550), { node });
};
