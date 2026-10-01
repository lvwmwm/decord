// Module ID: 14398
// Function ID: 14399
// Name: RequestDataContent
// Dependencies: [32, 19, 17, 1074, 21, 4836, 1485, 1115, 5916, 4832, 2111, 5999, 5281, 5203, 14399, 2]

// Module 14398 (RequestDataContent)
import Constants from "Constants" /* 1074 */;
import intl11 from "intl" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import DataHarvestActionCreators from "DataHarvestActionCreators" /* 14399 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const constants = { USERS: "Account", MESSAGES: "Messages", GUILDS: "Servers", ANALYTICS: "Analytics", ACTIVITIES: "Activities", ADS: "Ads", ZENDESK: "Zendesk" };
let closure_11 = createStyles.createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const memoResult = react.memo(() => {
  let closure_1;
  let closure_3;
  let first;
  let first1;
  let format;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items;
  let items1;
  let obj14;
  let obj15;
  let vtRhDA;
  let tmp = closure_11();
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  [first, importDefault] = react.useState(false);
  let obj2 = {};
  const useState = react.useState;
  const USERS = constants.USERS;
  const obj3 = { value: constants.USERS, label: intl.string(require("intl").t["rfe/x8"]), checked: false };
  intl = require("intl").intl;
  obj2[USERS] = obj3;
  const ANALYTICS = constants.ANALYTICS;
  const obj4 = { value: constants.ANALYTICS, label: intl2.string(require("intl").t["j+d6RN"]), checked: false };
  intl2 = require("intl").intl;
  obj2[ANALYTICS] = obj4;
  const ACTIVITIES = constants.ACTIVITIES;
  const obj5 = { value: constants.ACTIVITIES, label: intl3.string(require("intl").t.KO88BS), checked: false };
  intl3 = require("intl").intl;
  obj2[ACTIVITIES] = obj5;
  const ADS = constants.ADS;
  const obj6 = { value: constants.ADS, label: intl4.string(require("intl").t.wb7QJ3), checked: false };
  intl4 = require("intl").intl;
  obj2[ADS] = obj6;
  const MESSAGES = constants.MESSAGES;
  const obj7 = { value: constants.MESSAGES, label: intl5.string(require("intl").t["0dO1t+"]), checked: false };
  intl5 = require("intl").intl;
  obj2[MESSAGES] = obj7;
  const GUILDS = constants.GUILDS;
  const obj8 = { value: constants.GUILDS, label: intl6.string(require("intl").t.JN9c36), checked: false };
  intl6 = require("intl").intl;
  obj2[GUILDS] = obj8;
  const ZENDESK = constants.ZENDESK;
  const obj9 = { value: constants.ZENDESK, label: intl7.string(require("intl").t.yaLeEB), checked: false };
  intl7 = require("intl").intl;
  obj2[ZENDESK] = obj9;
  [first1, _slicedToArray] = useState(obj2);
  let keys = Object.keys(first1);
  const obj10 = { style: tmp.content, children: items1 };
  const obj11 = { style: tmp.header, children: items };
  let mapped = keys.map((item, index, arg2) => {
    let checked;
    let label;
    ({ label, checked } = first1[item]);
    let obj = {
      label,
      checked,
      onPress: (checked) => {
        closure_1_3((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const obj2 = { checked };
          const merged1 = Object.assign(arg0[checked]);
          obj[checked] = obj2;
          return obj;
        });
      },
      start: 0 === index,
      end: index === arg2.length - 1
    };
    closure_0 = item;
    return closure_1_8(closure_0(first1[8]).TableCheckboxRow, obj, item);
  });
  const obj12 = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl8.string(require("intl").t.jxXMEz) };
  const Text = require("Text/Text").Text;
  intl8 = require("intl").intl;
  items = [closure_8(Text, obj12), ];
  const obj13 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: format(vtRhDA, obj14) };
  const Text2 = require("Text/Text").Text;
  const intl9 = require("intl").intl;
  format = intl9.format;
  obj14 = { helpdeskArticle: obj15.getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
  vtRhDA = require("intl").t.vtRhDA;
  obj15 = require("HelpdeskUtils");
  items[1] = closure_8(Text2, obj13);
  items1 = [closure_9(closure_5, obj11), , ];
  const obj16 = { style: tmp.checkboxContainer, children: closure_8(require("TableRowGroup").TableRowGroup, { title: "", hasIcons: false, children: mapped }) };
  items1[1] = closure_8(closure_5, obj16);
  const obj17 = {
    text: intl10.string(require("intl").t.NYgNg9),
    onPress() {
      let intl;
      let intl2;
      const keys = Object.keys(first1);
      const found = keys.filter((item) => first1[item].checked);
      const mapped = found.map((item) => first1[item].value);
      if (0 !== mapped.length) {
        closure_1(true);
        let obj = DataHarvestActionCreators;
        const dataHarvest = obj.requestDataHarvest(mapped);
        const nextPromise = dataHarvest.then((body) => {
          let intl;
          let intl2;
          let intl3;
          let intl4;
          if (null != body) {
            if (null != body.body) {
              const obj2 = { title: intl3.string(closure_0(first1[7]).t.i2iul5), body: intl4.string(closure_0(first1[7]).t["6Nmv4i"]) };
              const show2 = closure_1(first1[13]).show;
              closure_1(first1[13]);
              intl3 = closure_0(first1[7]).intl;
              intl4 = closure_0(first1[7]).intl;
              show2(obj2);
              closure_1_0.pop();
            }
          }
          const obj = { title: intl.string(closure_0(first1[7]).t.OjbtDm), body: intl2.string(closure_0(first1[7]).t["0F5Jyt"]) };
          const show = closure_1(first1[13]).show;
          closure_1(first1[13]);
          intl = closure_0(first1[7]).intl;
          intl2 = closure_0(first1[7]).intl;
          show(obj);
        }, (message) => {
          let intl2;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          if (!message) {
            let message1;
            if (message != null) {
              const body = message.body;
              if (body != null) {
                message1 = body.message;
              }
            }
            message = message1;
          }
          if (!message) {
            const intl = closure_1_0(first1[7]).intl;
            message = intl.string(closure_1_0(first1[7]).t["0F5Jyt"]);
          }
          const obj = { title: intl2.string(closure_1_0(first1[7]).t.OjbtDm), body: message };
          const show = closure_1_1(first1[13]).show;
          closure_1_1(first1[13]);
          intl2 = closure_1_0(first1[7]).intl;
          show(obj);
        });
        nextPromise.finally(() => closure_1_1(false));
      } else {
        const tmp8 = AlertActionCreatorsDefault;
        let obj2 = { title: intl.string(intl11.t.OjbtDm), body: intl2.string(intl11.t.W1Rw3D) };
        let show = tmp8.show;
        intl = intl11.intl;
        intl2 = intl11.intl;
        show(obj2);
      }
    },
    loading: first
  };
  const Button = require("components/Button/Button").Button;
  intl10 = require("intl").intl;
  items1[2] = closure_8(Button, obj17);
  return closure_9(closure_6, obj10);
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default memoResult;
