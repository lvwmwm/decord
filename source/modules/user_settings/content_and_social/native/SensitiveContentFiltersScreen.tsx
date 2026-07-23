// Module ID: 13717
// Function ID: 105227
// Name: UserSettingsSensitiveContentFilters
// Dependencies: [31, 7662, 33, 1212, 10095, 13718, 13550, 2]
// Exports: default

// Module 13717 (UserSettingsSensitiveContentFilters)
import result from "result";
import { MobileSetting } from "MobileSetting";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  let obj = {};
  const memo = React.useMemo(() => {
    let obj = outer1_0(outer1_2[4]);
    obj = {};
    obj = {};
    const intl = outer1_0(outer1_2[3]).intl;
    obj.label = intl.string(outer1_0(outer1_2[3]).t.GYpoAq);
    const items = [, , ];
    ({ EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1], EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2] } = outer1_4);
    obj.settings = items;
    const intl2 = outer1_0(outer1_2[3]).intl;
    obj.subLabel = intl2.string(outer1_0(outer1_2[3]).t.Wnojv1);
    const items1 = [obj, ];
    const obj1 = {};
    const intl3 = outer1_0(outer1_2[3]).intl;
    obj1.label = intl3.string(outer1_0(outer1_2[3]).t["16/3Bi"]);
    const items2 = [, , ];
    ({ GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1], GORE_MEDIA_FILTERS_GUILDS: arr3[2] } = outer1_4);
    obj1.settings = items2;
    const intl4 = outer1_0(outer1_2[3]).intl;
    obj1.subLabel = intl4.string(outer1_0(outer1_2[3]).t.XgH9eh);
    items1[1] = obj1;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  obj = { screen: require(13718) /* items */.SettingsScreen.SENSITIVE_CONTENT_FILTERS };
  let items = [callback(importDefault(13718), obj), callback(importDefault(13550), { node: memo })];
  obj.children = items;
  return callback2(closure_6, obj);
};
