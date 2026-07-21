// Module ID: 13552
// Function ID: 102805
// Name: SettingsAgeGroupHeader
// Dependencies: []
// Exports: default

// Module 13552 (SettingsAgeGroupHeader)
function SettingsAgeGroupHeader() {
  let obj = { style: callback3().headerContainer };
  const callback = React.useCallback(() => {
    const obj = callback(closure_2[7]);
    obj.openUrl(callback(closure_2[8]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  obj = { hasMaxConnections: "r", isBoostOnlySubscription: "accessibilityRole" };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(importDefault(dependencyMap[11]).PY4MA0);
  const items = [callback(arg1(dependencyMap[9]).Text, obj), ];
  obj = { hasMaxConnections: "editingMessageId", isBoostOnlySubscription: "turquoise" };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj.children = intl2.format(importDefault(dependencyMap[11]).1DN29p, { handleOnHelpUrlHook: callback });
  items[1] = callback(arg1(dependencyMap[9]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const MobileSetting = arg1(dependencyMap[2]).MobileSetting;
const HelpdeskArticles = arg1(dependencyMap[3]).HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { gap: importDefault(dependencyMap[6]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingTop: importDefault(dependencyMap[6]).space.PX_16 };
obj.headerContainer = obj;
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  const node = React.useMemo(() => {
    let obj = callback(closure_2[12]);
    obj = {};
    obj = {};
    const intl = callback(closure_2[10]).intl;
    obj.label = intl.string(callback2(closure_2[11]).5Mi5TE);
    const items = [, ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1] } = closure_5);
    obj.settings = items;
    const items1 = [obj];
    obj.sections = items1;
    obj.ListHeaderComponent = closure_10;
    return obj.createList(obj);
  }, []);
  return callback(importDefault(dependencyMap[13]), { node });
};
