// Module ID: 14552
// Function ID: 111006
// Name: UserSettingsSensitiveContentFilters
// Dependencies: [31, 7662, 33, 1212, 10095, 13550, 2]
// Exports: default

// Module 14552 (UserSettingsSensitiveContentFilters)
import result from "result";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  const node = React.useMemo(() => {
    let obj = outer1_0(outer1_2[4]);
    obj = {};
    obj = {};
    const intl = outer1_0(outer1_2[3]).intl;
    obj.label = intl.string(outer1_0(outer1_2[3]).t.GYpoAq);
    const items = [, ];
    ({ PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], PARENTAL_CONTROLS_EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1] } = outer1_4);
    obj.settings = items;
    const intl2 = outer1_0(outer1_2[3]).intl;
    obj.subLabel = intl2.string(outer1_0(outer1_2[3]).t.Wnojv1);
    const items1 = [obj, ];
    const obj1 = {};
    const intl3 = outer1_0(outer1_2[3]).intl;
    obj1.label = intl3.string(outer1_0(outer1_2[3]).t["16/3Bi"]);
    const items2 = [, ];
    ({ PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], PARENTAL_CONTROLS_GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1] } = outer1_4);
    obj1.settings = items2;
    const intl4 = outer1_0(outer1_2[3]).intl;
    obj1.subLabel = intl4.string(outer1_0(outer1_2[3]).t.XgH9eh);
    items1[1] = obj1;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(importDefault(13550), { node });
};
