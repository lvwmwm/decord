// Module ID: 15004
// Function ID: 15005
// Name: AdTopicRow
// Dependencies: [19, 17, 676, 21, 1306, 2041, 4066, 7178, 1236, 4661, 712, 6286, 1993, 2]
// Exports: default

// Module 15004 (AdTopicRow)
import "noop";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function AdTopicRow(adTopic) {
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(4066).AdTopicOptOuts;
  const setting = AdTopicOptOuts.useSetting();
  const hasItem = setting.includes(adTopic);
  const obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = adTopic(1236).intl;
  obj[0] = intl.string(obj[adTopic]);
  const intl2 = adTopic(1236).intl;
  const tmp3 = importDefault(2041);
  obj[1] = intl2.string(hasItem ? tmp3.B9PPxE : tmp3.Y9ZOp8);
  obj[2] = !hasItem;
  obj[3] = function onValueChange(arg0) {
    const AdTopicOptOuts = adTopic(outer1_2[6]).AdTopicOptOuts;
    const set = new Set(AdTopicOptOuts.getSetting());
    if (arg0) {
      set.delete(adTopic);
    } else {
      set.add(adTopic);
    }
    const AdTopicOptOuts2 = adTopic(outer1_2[6]).AdTopicOptOuts;
    const items = [...set];
    AdTopicOptOuts2.updateSetting(items);
  };
  return closure_5(adTopic(7178).TableSwitchRow, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj[require("create").AdTopic.REAL_MONEY_GAMING] = require("messagesProxy").pmIitA;
const keys = Object.keys(obj);
let closure_8 = keys.map(Number);
obj = { content: null };
obj = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const result = require("ME").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx");

export default function ManageSponsoredContentScreen() {
  let obj = { style: callback3().content, children: null };
  obj = { hasIcons: false, description: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { helpdeskArticle: null };
  obj[0] = importDefault(1993).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj[1] = intl.format(importDefault(2041)["z/MfaY"], obj);
  const items = [callback(require(6286) /* TableRowGroupTitle */.TableRowGroup, obj), ];
  const obj1 = { hasIcons: false, title: null, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl2.string(importDefault(2041).OkmBx0);
  obj1[2] = closure_8.map((adTopic) => callback(closure_9, { adTopic }, adTopic));
  items[1] = callback(require(6286) /* TableRowGroupTitle */.TableRowGroup, obj1);
  obj[1] = items;
  return callback2(View, obj);
};
