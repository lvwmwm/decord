// Module ID: 13765
// Function ID: 105572
// Dependencies: [57, 31, 27, 653, 33, 4130, 1456, 1212, 9094, 4126, 1920, 5503, 4543, 4470, 13766, 2]

// Module 13765
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { USERS: "Account", MESSAGES: "Messages", GUILDS: "Servers", ANALYTICS: "Analytics", ACTIVITIES: "Activities", ADS: "Ads", ZENDESK: "Zendesk" };
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const memoResult = importAllResult.memo(() => {
  const tmp = callback4();
  let obj = _require(first[6]);
  _require = obj.useNavigation();
  const tmp2 = callback(importAllResult.useState(false), 2);
  const importDefault = tmp2[1];
  obj = {};
  obj = { value: constants.USERS };
  let intl = _require(first[7]).intl;
  obj.label = intl.string(_require(first[7]).t["rfe/x8"]);
  obj.checked = false;
  obj[constants.USERS] = obj;
  const obj1 = { value: constants.ANALYTICS };
  let intl2 = _require(first[7]).intl;
  obj1.label = intl2.string(_require(first[7]).t["j+d6RN"]);
  obj1.checked = false;
  obj[constants.ANALYTICS] = obj1;
  let obj2 = { value: constants.ACTIVITIES };
  let intl3 = _require(first[7]).intl;
  obj2.label = intl3.string(_require(first[7]).t.KO88BS);
  obj2.checked = false;
  obj[constants.ACTIVITIES] = obj2;
  let obj3 = { value: constants.ADS };
  let intl4 = _require(first[7]).intl;
  obj3.label = intl4.string(_require(first[7]).t.wb7QJ3);
  obj3.checked = false;
  obj[constants.ADS] = obj3;
  const obj4 = { value: constants.MESSAGES };
  const intl5 = _require(first[7]).intl;
  obj4.label = intl5.string(_require(first[7]).t["0dO1t+"]);
  obj4.checked = false;
  obj[constants.MESSAGES] = obj4;
  const obj5 = { value: constants.GUILDS };
  const intl6 = _require(first[7]).intl;
  obj5.label = intl6.string(_require(first[7]).t.JN9c36);
  obj5.checked = false;
  obj[constants.GUILDS] = obj5;
  const obj6 = { value: constants.ZENDESK };
  const intl7 = _require(first[7]).intl;
  obj6.label = intl7.string(_require(first[7]).t.yaLeEB);
  obj6.checked = false;
  obj[constants.ZENDESK] = obj6;
  const tmp3 = callback(importAllResult.useState(obj), 2);
  first = tmp3[0];
  callback = tmp3[1];
  let keys = Object.keys(first);
  const obj7 = { style: tmp.content };
  const obj8 = { style: tmp.header };
  let mapped = keys.map((arg0, arg1, arg2) => {
    let checked;
    let label;
    ({ label, checked } = first[arg0]);
    const callback = arg0;
    return outer1_8(callback(first[8]).TableCheckboxRow, {
      label,
      checked,
      onPress: (arg0) => {
        let closure_0 = arg0;
        outer1_3((arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[closure_0]);
          obj["checked"] = closure_0;
          obj[closure_0] = obj;
          return obj;
        });
      },
      start: 0 === arg1,
      end: arg1 === arg2.length - 1
    }, arg0);
  });
  const obj9 = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl8 = _require(first[7]).intl;
  obj9.children = intl8.string(_require(first[7]).t.jxXMEz);
  const items = [callback2(_require(first[9]).Text, obj9), ];
  const obj10 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl9 = _require(first[7]).intl;
  const obj11 = {};
  let obj14 = importDefault(first[10]);
  obj11.helpdeskArticle = obj14.getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS);
  obj10.children = intl9.format(_require(first[7]).t.vtRhDA, obj11);
  items[1] = callback2(_require(first[9]).Text, obj10);
  obj8.children = items;
  const items1 = [callback3(closure_5, obj8), , ];
  const obj13 = { title: "", hasIcons: false, children: mapped };
  items1[1] = callback2(closure_5, { style: tmp.checkboxContainer, children: callback2(_require(first[11]).TableRowGroup, obj13) });
  obj14 = {};
  const intl10 = _require(first[7]).intl;
  obj14.text = intl10.string(_require(first[7]).t.NYgNg9);
  obj14.onPress = function onPress() {
    const keys = Object.keys(first);
    const found = keys.filter((arg0) => outer1_2[arg0].checked);
    const mapped = found.map((arg0) => outer1_2[arg0].value);
    if (0 !== mapped.length) {
      callback2(true);
      let obj = callback(first[14]);
      const dataHarvest = obj.requestDataHarvest(mapped);
      dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            let obj = {};
            const intl3 = callback(first[7]).intl;
            obj.title = intl3.string(callback(first[7]).t.i2iul5);
            const intl4 = callback(first[7]).intl;
            obj.body = intl4.string(callback(first[7]).t["6Nmv4i"]);
            callback2(first[13]).show(obj);
            outer1_0.pop();
            const obj3 = callback2(first[13]);
          }
        }
        obj = callback2(first[13]);
        obj = {};
        const intl = callback(first[7]).intl;
        obj.title = intl.string(callback(first[7]).t.OjbtDm);
        const intl2 = callback(first[7]).intl;
        obj.body = intl2.string(callback(first[7]).t["0F5Jyt"]);
        obj.show(obj);
      }, (message) => {
        message = undefined;
        if (null != message) {
          message = message.message;
        }
        if (!message) {
          let message1;
          if (null != message) {
            const body = message.body;
            if (null != body) {
              message1 = body.message;
            }
          }
          message = message1;
        }
        if (!message) {
          const intl = callback(first[7]).intl;
          message = intl.string(callback(first[7]).t["0F5Jyt"]);
        }
        let obj = callback2(first[13]);
        obj = {};
        const intl2 = callback(first[7]).intl;
        obj.title = intl2.string(callback(first[7]).t.OjbtDm);
        obj.body = message;
        obj.show(obj);
      }).finally(() => outer1_1(false));
      const nextPromise = dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            let obj = {};
            const intl3 = callback(first[7]).intl;
            obj.title = intl3.string(callback(first[7]).t.i2iul5);
            const intl4 = callback(first[7]).intl;
            obj.body = intl4.string(callback(first[7]).t["6Nmv4i"]);
            callback2(first[13]).show(obj);
            outer1_0.pop();
            const obj3 = callback2(first[13]);
          }
        }
        obj = callback2(first[13]);
        obj = {};
        const intl = callback(first[7]).intl;
        obj.title = intl.string(callback(first[7]).t.OjbtDm);
        const intl2 = callback(first[7]).intl;
        obj.body = intl2.string(callback(first[7]).t["0F5Jyt"]);
        obj.show(obj);
      }, (message) => {
        message = undefined;
        if (null != message) {
          message = message.message;
        }
        if (!message) {
          let message1;
          if (null != message) {
            const body = message.body;
            if (null != body) {
              message1 = body.message;
            }
          }
          message = message1;
        }
        if (!message) {
          const intl = callback(first[7]).intl;
          message = intl.string(callback(first[7]).t["0F5Jyt"]);
        }
        let obj = callback2(first[13]);
        obj = {};
        const intl2 = callback(first[7]).intl;
        obj.title = intl2.string(callback(first[7]).t.OjbtDm);
        obj.body = message;
        obj.show(obj);
      });
    } else {
      obj = {};
      let intl = callback(first[7]).intl;
      obj.title = intl.string(callback(first[7]).t.OjbtDm);
      let intl2 = callback(first[7]).intl;
      obj.body = intl2.string(callback(first[7]).t.W1Rw3D);
      callback2(first[13]).show(obj);
      const obj2 = callback2(first[13]);
    }
  };
  obj14.loading = tmp2[0];
  items1[2] = callback2(_require(first[12]).Button, obj14);
  obj7.children = items1;
  return callback3(closure_6, obj7);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default memoResult;
