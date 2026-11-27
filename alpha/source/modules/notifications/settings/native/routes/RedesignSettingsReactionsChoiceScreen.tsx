// Module ID: 17646
// Function ID: 17647
// Name: RedesignSettingsReactionsChoiceScreen
// Dependencies: [19, 21, 1501, 1112, 3207, 11970, 17633, 17639, 2]

// Module 17646 (RedesignSettingsReactionsChoiceScreen)
import Fragment from "Fragment" /* 21 */;
import _modDef3207 from "module_3207" /* 3207 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 17639 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsReactionsChoiceScreen() {
  let stackNavigation;
  let obj = stackNavigation(1501);
  stackNavigation = obj.useStackNavigation();
  const intl = stackNavigation(1112).intl;
  const stringResult = intl.string(_modDef3207.XIPvOz);
  importDefault = stringResult;
  let items = [stackNavigation, stringResult];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = { title: importDefault };
    stackNavigation.setOptions(obj);
  }, items);
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = stackNavigation(dependencyMap[5]).createList;
    stackNavigation(dependencyMap[5]);
    items = [];
    const obj2 = stackNavigation(dependencyMap[6]);
    items[0] = obj2.buildReactionsChoiceSettingsSection();
    return createList(obj);
  }, []);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsReactionsChoiceScreen.tsx");

export default memoResult;
