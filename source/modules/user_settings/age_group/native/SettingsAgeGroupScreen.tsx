// Module ID: 14645
// Function ID: 14646
// Name: SettingsAgeGroupHeader
// Dependencies: [19, 17, 7906, 673, 21, 4481, 709, 8341, 1994, 4477, 1233, 2918, 14607, 11400, 14646, 14614, 2]
// Exports: default

// Module 14645 (SettingsAgeGroupHeader)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2918 */;
import Text from "Text" /* 4477 */;
import _modDef14614 from "module_14614" /* 14614 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7906 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
function SettingsAgeGroupHeader() {
  let obj = { style: callback3().headerContainer, children: null };
  const callback = React.useCallback(() => {
    const obj = callback(8341);
    obj.openUrl(callback(1994).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault.PY4MA0);
  const items = [callback(Text.Text, obj), ];
  obj = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.format(messagesProxyDefault["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { headerContainer: null };
createCacheKey = { gap: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  isTinyBroncoSettingsEnabled = isTinyBroncoSettingsEnabled(14607).useIsTinyBroncoSettingsEnabled();
  let items = [isTinyBroncoSettingsEnabled];
  const node = React.useMemo(() => {
    let obj = isTinyBroncoSettingsEnabled(closure_1_2[13]);
    obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = isTinyBroncoSettingsEnabled(closure_1_2[10]).intl;
    obj[0] = intl.string(closure_1_1(closure_1_2[11])["5Mi5TE"]);
    const items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = closure_1_5);
    obj[1] = items;
    const items1 = [obj];
    obj[0] = items1;
    if (isTinyBroncoSettingsEnabled) {
      let TinyBroncoAgeGroupHeader = isTinyBroncoSettingsEnabled(closure_1_2[14]).TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = closure_1_10;
    }
    obj[1] = TinyBroncoAgeGroupHeader;
    return obj.createList(obj);
  }, items);
  return callback(_modDef14614, { node });
};
