// Module ID: 13651
// Function ID: 103416
// Dependencies: []

// Module 13651
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const HelpdeskArticles = arg1(dependencyMap[3]).HelpdeskArticles;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = { USERS: "Account", MESSAGES: "Messages", GUILDS: "Servers", ANALYTICS: "Analytics", ACTIVITIES: "Activities", ADS: "Ads", ZENDESK: "Zendesk" };
const tmp3 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(() => {
  const tmp = callback5();
  let obj = callback(dependencyMap[6]);
  const callback = obj.useNavigation();
  const tmp2 = callback2(importAllResult.useState(false), 2);
  const importDefault = tmp2[1];
  obj = {};
  obj = { value: constants.USERS };
  const intl = callback(dependencyMap[7]).intl;
  obj.label = intl.string(callback(dependencyMap[7]).t.rfe/x8);
  obj.checked = false;
  obj[constants.USERS] = obj;
  const obj1 = { value: constants.ANALYTICS };
  const intl2 = callback(dependencyMap[7]).intl;
  obj1.label = intl2.string(callback(dependencyMap[7]).t.j+d6RN);
  obj1.checked = false;
  obj[constants.ANALYTICS] = obj1;
  const obj2 = { value: constants.ACTIVITIES };
  const intl3 = callback(dependencyMap[7]).intl;
  obj2.label = intl3.string(callback(dependencyMap[7]).t.KO88BS);
  obj2.checked = false;
  obj[constants.ACTIVITIES] = obj2;
  const obj3 = { value: constants.ADS };
  const intl4 = callback(dependencyMap[7]).intl;
  obj3.label = intl4.string(callback(dependencyMap[7]).t.wb7QJ3);
  obj3.checked = false;
  obj[constants.ADS] = obj3;
  const obj4 = { value: constants.MESSAGES };
  const intl5 = callback(dependencyMap[7]).intl;
  obj4.label = intl5.string(callback(dependencyMap[7]).t.0dO1t+);
  obj4.checked = false;
  obj[constants.MESSAGES] = obj4;
  const obj5 = { value: constants.GUILDS };
  const intl6 = callback(dependencyMap[7]).intl;
  obj5.label = intl6.string(callback(dependencyMap[7]).t.JN9c36);
  obj5.checked = false;
  obj[constants.GUILDS] = obj5;
  const obj6 = { value: constants.ZENDESK };
  const intl7 = callback(dependencyMap[7]).intl;
  obj6.label = intl7.string(callback(dependencyMap[7]).t.yaLeEB);
  obj6.checked = false;
  obj[constants.ZENDESK] = obj6;
  const tmp3 = callback2(importAllResult.useState(obj), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  const callback2 = tmp3[1];
  const keys = Object.keys(first);
  const obj7 = { style: tmp.content };
  const obj8 = { style: tmp.header };
  const mapped = keys.map((arg0, arg1, arg2) => {
    let checked;
    let label;
    ({ label, checked } = first[arg0]);
    const callback = arg0;
    return callback3(callback(first[8]).TableCheckboxRow, {
      label,
      checked,
      onPress: (arg0) => {
        callback((arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[closure_0]);
          obj["checked"] = arg0;
          obj[arg0] = obj;
          return obj;
        });
      },
      start: 0 === arg1,
      end: arg1 === arg2.length - 1
    }, arg0);
  });
  const obj9 = { style: tmp.title };
  const intl8 = callback(dependencyMap[7]).intl;
  obj9.children = intl8.string(callback(dependencyMap[7]).t.jxXMEz);
  const items = [callback3(callback(dependencyMap[9]).Text, obj9), ];
  const obj10 = { style: tmp.description };
  const intl9 = callback(dependencyMap[7]).intl;
  const obj11 = { helpdeskArticle: importDefault(dependencyMap[10]).getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
  obj10.children = intl9.format(callback(dependencyMap[7]).t.vtRhDA, obj11);
  items[1] = callback3(callback(dependencyMap[9]).Text, obj10);
  obj8.children = items;
  const items1 = [callback4(closure_5, obj8), , ];
  const obj15 = importDefault(dependencyMap[10]);
  items1[1] = callback3(closure_5, { style: tmp.checkboxContainer, children: callback3(callback(dependencyMap[11]).TableRowGroup, { children: mapped }) });
  const obj13 = {};
  const intl10 = callback(dependencyMap[7]).intl;
  obj13.text = intl10.string(callback(dependencyMap[7]).t.NYgNg9);
  obj13.onPress = function onPress() {
    const keys = Object.keys(first);
    const found = keys.filter((arg0) => closure_2[arg0].checked);
    const mapped = found.map((arg0) => closure_2[arg0].value);
    if (0 !== mapped.length) {
      callback2(true);
      let obj = callback(first[14]);
      const dataHarvest = obj.requestDataHarvest(mapped);
      dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            let obj = {};
            const intl3 = arr(closure_2[7]).intl;
            obj.title = intl3.string(arr(closure_2[7]).t.i2iul5);
            const intl4 = arr(closure_2[7]).intl;
            obj.body = intl4.string(arr(closure_2[7]).t.6Nmv4i);
            callback(closure_2[13]).show(obj);
            const arr = arr.pop();
            const obj3 = callback(closure_2[13]);
          }
        }
        obj = callback(closure_2[13]);
        obj = {};
        const intl = arr(closure_2[7]).intl;
        obj.title = intl.string(arr(closure_2[7]).t.OjbtDm);
        const intl2 = arr(closure_2[7]).intl;
        obj.body = intl2.string(arr(closure_2[7]).t.0F5Jyt);
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
          const intl = arr(closure_2[7]).intl;
          message = intl.string(arr(closure_2[7]).t.0F5Jyt);
        }
        let obj = callback(closure_2[13]);
        obj = {};
        const intl2 = arr(closure_2[7]).intl;
        obj.title = intl2.string(arr(closure_2[7]).t.OjbtDm);
        obj.body = message;
        obj.show(obj);
      }).finally(() => callback(false));
      const nextPromise = dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            let obj = {};
            const intl3 = arr(closure_2[7]).intl;
            obj.title = intl3.string(arr(closure_2[7]).t.i2iul5);
            const intl4 = arr(closure_2[7]).intl;
            obj.body = intl4.string(arr(closure_2[7]).t.6Nmv4i);
            callback(closure_2[13]).show(obj);
            const arr = arr.pop();
            const obj3 = callback(closure_2[13]);
          }
        }
        obj = callback(closure_2[13]);
        obj = {};
        const intl = arr(closure_2[7]).intl;
        obj.title = intl.string(arr(closure_2[7]).t.OjbtDm);
        const intl2 = arr(closure_2[7]).intl;
        obj.body = intl2.string(arr(closure_2[7]).t.0F5Jyt);
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
          const intl = arr(closure_2[7]).intl;
          message = intl.string(arr(closure_2[7]).t.0F5Jyt);
        }
        let obj = callback(closure_2[13]);
        obj = {};
        const intl2 = arr(closure_2[7]).intl;
        obj.title = intl2.string(arr(closure_2[7]).t.OjbtDm);
        obj.body = message;
        obj.show(obj);
      });
    } else {
      obj = {};
      const intl = callback(first[7]).intl;
      obj.title = intl.string(callback(first[7]).t.OjbtDm);
      const intl2 = callback(first[7]).intl;
      obj.body = intl2.string(callback(first[7]).t.W1Rw3D);
      callback2(first[13]).show(obj);
      const obj2 = callback2(first[13]);
    }
  };
  obj13.loading = tmp2[0];
  items1[2] = callback3(callback(dependencyMap[12]).Button, obj13);
  obj7.children = items1;
  return callback4(closure_6, obj7);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default memoResult;
