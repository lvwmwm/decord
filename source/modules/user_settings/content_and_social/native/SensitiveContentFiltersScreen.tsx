// Module ID: 14069
// Function ID: 14070
// Name: UserSettingsSensitiveContentFilters
// Dependencies: [19, 8084, 21, 1236, 10452, 14070, 13895, 2]
// Exports: default

// Module 14069 (UserSettingsSensitiveContentFilters)
import noop from "noop";
import { MobileSetting } from "MobileSetting";
import jsxProd from "jsxProd";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  let obj = { children: null };
  const memo = React.useMemo(() => {
    let obj = callback(10452);
    obj = { sections: null };
    obj = { label: null, settings: null, subLabel: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.GYpoAq);
    const items = [, , ];
    ({ EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1], EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2] } = closure_4);
    obj[1] = items;
    const intl2 = callback(1236).intl;
    obj[2] = intl2.string(callback(1236).t.Wnojv1);
    const items1 = [obj, ];
    const obj1 = { label: null, settings: null, subLabel: null };
    const intl3 = callback(1236).intl;
    obj1[0] = intl3.string(callback(1236).t["16/3Bi"]);
    const items2 = [, , ];
    ({ GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1], GORE_MEDIA_FILTERS_GUILDS: arr3[2] } = closure_4);
    obj1[1] = items2;
    const intl4 = callback(1236).intl;
    obj1[2] = intl4.string(callback(1236).t.XgH9eh);
    items1[1] = obj1;
    obj[0] = items1;
    return obj.createList(obj);
  }, []);
  obj = { screen: null };
  obj[0] = require(14070) /* items */.SettingsScreen.SENSITIVE_CONTENT_FILTERS;
  let items = [callback(importDefault(14070), obj), callback(importDefault(13895), { node: memo })];
  obj[0] = items;
  return callback2(closure_6, obj);
};
