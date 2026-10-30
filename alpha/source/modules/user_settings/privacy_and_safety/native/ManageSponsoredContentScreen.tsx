// Module ID: 17848
// Function ID: 17849
// Name: ManageSponsoredContentScreen
// Dependencies: [19, 17, 1072, 21, 1197, 2108, 4834, 7363, 1114, 5009, 575, 7054, 2062, 2]
// Exports: default

// Module 17848 (ManageSponsoredContentScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef2108 from "module_2108" /* 2108 */;
import UserSettings from "UserSettings" /* 4834 */;
import TableRowGroup3 from "TableRowGroup" /* 7054 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
let obj3;
function AdTopicRow(adTopic) {
  let intl;
  let string;
  let tmp4;
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(4834).AdTopicOptOuts;
  const setting = AdTopicOptOuts.useSetting();
  const hasItem = setting.includes(adTopic);
  const tmp2 = obj[adTopic];
  obj = {
    label: intl.string(tmp2),
    subLabel: string(hasItem ? tmp4.B9PPxE : tmp4.Y9ZOp8),
    value: !hasItem,
    onValueChange(arg0) {
      const AdTopicOptOuts = UserSettings.AdTopicOptOuts;
      set = new Set(AdTopicOptOuts.getSetting());
      if (arg0) {
        set.delete(adTopic);
      } else {
        set.add(adTopic);
      }
      const AdTopicOptOuts2 = UserSettings.AdTopicOptOuts;
      const items = [...set];
      AdTopicOptOuts2.updateSetting(items);
    }
  };
  const TableSwitchRow = adTopic(7363).TableSwitchRow;
  intl = adTopic(1114).intl;
  const intl2 = adTopic(1114).intl;
  string = intl2.string;
  tmp4 = _modDef2108;
  return closure_5(TableSwitchRow, obj);
}
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {};
obj[preloaded_user_settings.AdTopic.REAL_MONEY_GAMING] = _modDef2108.pmIitA;
const keys = Object.keys(obj);
let closure_8 = keys.map(Number);
let obj2 = { content: obj3 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx");

export default function ManageSponsoredContentScreen() {
  let format;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let prop;
  obj = { style: closure_10().content, children: items };
  const obj2 = { hasIcons: false, description: format(prop, obj3) };
  const TableRowGroup = TableRowGroup3.TableRowGroup;
  const intl = intl3.intl;
  format = intl.format;
  obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.MANAGE_SPONSORED_CONTENT) };
  prop = _modDef2108["z/MfaY"];
  obj4 = HelpdeskUtilsDefault;
  items = [hasOwnProperty(TableRowGroup, obj2), ];
  const obj5 = {
    hasIcons: false,
    title: intl2.string(_modDef2108.OkmBx0),
    children: closure_8.map((adTopic) => {
      obj = { adTopic };
      return closure_1_5(AdTopicRow, obj, adTopic);
    })
  };
  const TableRowGroup2 = TableRowGroup3.TableRowGroup;
  intl2 = intl3.intl;
  items[1] = hasOwnProperty(TableRowGroup2, obj5);
  return metroRequire(View, obj);
};
