// Module ID: 15118
// Function ID: 15119
// Name: RequestDataContent
// Dependencies: [32, 19, 17, 1085, 21, 5092, 558, 576, 1503, 1126, 5299, 15119, 6176, 5088, 2128, 6264, 5379, 2]

// Module 15118 (RequestDataContent)
import Constants from "Constants" /* 1085 */;
import intl11 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 6176 */;
import DataHarvestActionCreators from "DataHarvestActionCreators" /* 15119 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const constants = { USERS: "Account", MESSAGES: "Messages", GUILDS: "Servers", ANALYTICS: "Analytics", ACTIVITIES: "Activities", ADS: "Ads", ZENDESK: "Zendesk" };
let closure_11 = createStyles.createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RequestDataContent() {
  let ZENDESK;
  let closure_3;
  let closure_4;
  let content;
  let first;
  let first1;
  let header;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items1;
  let obj14;
  let title;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp21;
  let tmp25;
  let tmp8;
  let tmp = navigation;
  let obj = navigation(first1[7]);
  const cResult = obj.c(37);
  const tmp4 = closure_11();
  let obj2 = navigation(first1[8]);
  navigation = obj2.useNavigation();
  const tmp6 = _slicedToArray;
  const tmp7 = _slicedToArray(react.useState(false), 2);
  [tmp8, importDefault] = tmp7;
  const obj3 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { value: constants.USERS, label: intl.string(tmp(first1[9]).t["rfe/x8"]), checked: false };
    intl = tmp(tmp2[9]).intl;
    cResult[0] = obj4;
    first = obj4;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { value: constants.ANALYTICS, label: intl2.string(tmp(first1[9]).t["j+d6RN"]), checked: false };
    intl2 = tmp(tmp2[9]).intl;
    cResult[1] = obj5;
    tmp11 = obj5;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { value: constants.ACTIVITIES, label: intl3.string(tmp(first1[9]).t.KO88BS), checked: false };
    intl3 = tmp(tmp2[9]).intl;
    cResult[2] = obj6;
    tmp13 = obj6;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { value: constants.ADS, label: intl4.string(tmp(first1[9]).t.wb7QJ3), checked: false };
    intl4 = tmp(tmp2[9]).intl;
    cResult[3] = obj7;
    tmp15 = obj7;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { value: constants.MESSAGES, label: intl5.string(tmp(first1[9]).t["0dO1t+"]), checked: false };
    intl5 = tmp(tmp2[9]).intl;
    cResult[4] = obj8;
    tmp17 = obj8;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { value: constants.GUILDS, label: intl6.string(tmp(first1[9]).t.JN9c36), checked: false };
    intl6 = tmp(tmp2[9]).intl;
    cResult[5] = obj9;
    tmp19 = obj9;
  } else {
    tmp19 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = {};
    obj10[constants.USERS] = first;
    obj10[constants.ANALYTICS] = tmp11;
    obj10[constants.ACTIVITIES] = tmp13;
    obj10[constants.ADS] = tmp15;
    obj10[constants.MESSAGES] = tmp17;
    obj10[constants.GUILDS] = tmp19;
    ({ ZENDESK: obj11.value, ZENDESK } = constants);
    const obj12 = { value: null, label: intl7.string(tmp(first1[9]).t.yaLeEB), checked: false };
    intl7 = tmp(tmp2[9]).intl;
    obj10[ZENDESK] = obj12;
    cResult[6] = obj10;
    tmp21 = obj10;
  } else {
    tmp21 = cResult[6];
  }
  const tmp6Result = tmp6(obj3.useState(tmp21), 2);
  first1 = tmp6Result[0];
  _slicedToArray = tmp6Result[1];
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    function handleCheckboxChange(arg0) {
      let closure_0 = arg0;
      return (checked) => {
        closure_1_3((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const obj2 = { checked };
          const merged1 = Object.assign(arg0[checked]);
          obj[checked] = obj2;
          return obj;
        });
      };
    }
    cResult[7] = handleCheckboxChange;
    tmp25 = handleCheckboxChange;
  } else {
    tmp25 = cResult[7];
  }
  react = tmp25;
  if (cResult[8] === first1) {
    let tmp26;
    let tmp27;
    let tmp29;
    let tmp31;
    let tmp34;
    let tmp38;
    if (cResult[9] === navigation) {
      tmp26 = cResult[10];
    }
    if (cResult[11] !== first1) {
      const _Object = Object;
      let keys = Object.keys(first1);
      let mapped = keys.map((item, index, arg2) => {
        let checked;
        let label;
        ({ label, checked } = first1[item]);
        const obj = { label, checked, onPress: closure_4(item), start: 0 === index, end: index === arg2.length - 1 };
        const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
        return metroImportAll(TableCheckboxRow, obj, item);
      });
      cResult[11] = first1;
      cResult[12] = mapped;
      tmp27 = mapped;
    } else {
      tmp27 = cResult[12];
    }
    const _Symbol = Symbol;
    ({ content, header, title } = tmp4);
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = tmp(tmp2[9]).intl;
      const stringResult = intl8.string(tmp(first1[9]).t.jxXMEz);
      cResult[13] = stringResult;
      tmp29 = stringResult;
    } else {
      tmp29 = cResult[13];
    }
    if (cResult[14] !== tmp4.title) {
      const obj13 = { style: title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp29 };
      const tmp33 = closure_8(tmp(first1[13]).Text, obj13);
      cResult[14] = tmp4.title;
      cResult[15] = tmp33;
      tmp31 = tmp33;
    } else {
      tmp31 = cResult[15];
    }
    const _Symbol2 = Symbol;
    const description = tmp4.description;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      const intl9 = tmp(tmp2[9]).intl;
      const format = intl9.format;
      const obj15 = { helpdeskArticle: obj14.getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
      const vtRhDA = tmp(tmp2[9]).t.vtRhDA;
      obj14 = require("HelpdeskUtils");
      const formatResult = format(vtRhDA, obj15);
      cResult[16] = formatResult;
      tmp34 = formatResult;
    } else {
      tmp34 = cResult[16];
    }
    if (cResult[17] !== tmp4.description) {
      const obj16 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp34 };
      const tmp40 = closure_8(tmp(first1[13]).Text, obj16);
      cResult[17] = tmp4.description;
      cResult[18] = tmp40;
      tmp38 = tmp40;
    } else {
      tmp38 = cResult[18];
    }
    if (cResult[19] === tmp4.header) {
      if (cResult[20] === tmp31) {
        let tmp41;
        let tmp45;
        if (cResult[21] === tmp38) {
          tmp41 = cResult[22];
        }
        if (cResult[23] !== tmp27) {
          const obj17 = { title: "", hasIcons: false, children: tmp27 };
          const tmp47 = closure_8(tmp(first1[15]).TableRowGroup, obj17);
          cResult[23] = tmp27;
          cResult[24] = tmp47;
          tmp45 = tmp47;
        } else {
          tmp45 = cResult[24];
        }
        if (cResult[25] === tmp4.checkboxContainer) {
          let tmp48;
          let tmp52;
          if (cResult[26] === tmp45) {
            tmp48 = cResult[27];
          }
          const _Symbol3 = Symbol;
          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
            const intl10 = tmp(tmp2[9]).intl;
            const stringResult1 = intl10.string(tmp(first1[9]).t.NYgNg9);
            cResult[28] = stringResult1;
            tmp52 = stringResult1;
          } else {
            tmp52 = cResult[28];
          }
          if (cResult[29] === tmp26) {
            let tmp54;
            if (cResult[30] === tmp8) {
              tmp54 = cResult[31];
            }
            if (cResult[32] === tmp4.content) {
              if (cResult[33] === tmp41) {
                if (cResult[34] === tmp48) {
                  let tmp57;
                  if (cResult[35] === tmp54) {
                    tmp57 = cResult[36];
                  }
                  return tmp57;
                }
              }
            }
            const obj18 = { style: content, children: items };
            items = [tmp41, tmp48, tmp54];
            const tmp60 = closure_9(closure_6, obj18);
            cResult[32] = tmp4.content;
            cResult[33] = tmp41;
            cResult[34] = tmp48;
            cResult[35] = tmp54;
            cResult[36] = tmp60;
            tmp57 = tmp60;
          }
          const obj19 = { text: tmp52, onPress: tmp26, loading: tmp8 };
          const tmp56 = closure_8(tmp(first1[16]).Button, obj19);
          cResult[29] = tmp26;
          cResult[30] = tmp8;
          cResult[31] = tmp56;
          tmp54 = tmp56;
        }
        const obj20 = { style: tmp4.checkboxContainer, children: tmp45 };
        const tmp51 = closure_8(closure_5, obj20);
        cResult[25] = tmp4.checkboxContainer;
        cResult[26] = tmp45;
        cResult[27] = tmp51;
        tmp48 = tmp51;
      }
    }
    const obj36 = { style: header, children: items1 };
    items1 = [tmp31, tmp38];
    const tmp44 = closure_9(closure_5, obj36);
    cResult[19] = tmp4.header;
    cResult[20] = tmp31;
    cResult[21] = tmp38;
    cResult[22] = tmp44;
    tmp41 = tmp44;
  }
  function handleRequestData() {
    let intl;
    let intl2;
    const keys = Object.keys(first1);
    const found = keys.filter((item) => first1[item].checked);
    const mapped = found.map((item) => first1[item].value);
    if (0 !== mapped.length) {
      importDefault(true);
      let obj = DataHarvestActionCreators;
      const dataHarvest = obj.requestDataHarvest(mapped);
      const nextPromise = dataHarvest.then((body) => {
        let intl;
        let intl2;
        let intl3;
        let intl4;
        if (null != body) {
          if (null != body.body) {
            const obj2 = { title: intl3.string(navigation(first1[9]).t.i2iul5), body: intl4.string(navigation(first1[9]).t["6Nmv4i"]) };
            const show2 = require("AlertActionCreators").show;
            require("AlertActionCreators");
            intl3 = navigation(first1[9]).intl;
            intl4 = navigation(first1[9]).intl;
            show2(obj2);
            closure_1_0.pop();
          }
        }
        const obj = { title: intl.string(navigation(first1[9]).t.OjbtDm), body: intl2.string(navigation(first1[9]).t["0F5Jyt"]) };
        const show = require("AlertActionCreators").show;
        require("AlertActionCreators");
        intl = navigation(first1[9]).intl;
        intl2 = navigation(first1[9]).intl;
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
          const intl = navigation(first1[9]).intl;
          message = intl.string(navigation(first1[9]).t["0F5Jyt"]);
        }
        const obj = { title: intl2.string(navigation(first1[9]).t.OjbtDm), body: message };
        const show = closure_1_1(first1[10]).show;
        closure_1_1(first1[10]);
        intl2 = navigation(first1[9]).intl;
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
  }
  cResult[8] = first1;
  cResult[9] = navigation;
  cResult[10] = handleRequestData;
  tmp26 = handleRequestData;
}) : (function RequestDataContent() {
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
    return closure_1_8(closure_0(first1[12]).TableCheckboxRow, obj, item);
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
    onPress: function handleRequestData() {
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
              const obj2 = { title: intl3.string(closure_0(first1[9]).t.i2iul5), body: intl4.string(closure_0(first1[9]).t["6Nmv4i"]) };
              const show2 = closure_1(first1[10]).show;
              closure_1(first1[10]);
              intl3 = closure_0(first1[9]).intl;
              intl4 = closure_0(first1[9]).intl;
              show2(obj2);
              closure_1_0.pop();
            }
          }
          const obj = { title: intl.string(closure_0(first1[9]).t.OjbtDm), body: intl2.string(closure_0(first1[9]).t["0F5Jyt"]) };
          const show = closure_1(first1[10]).show;
          closure_1(first1[10]);
          intl = closure_0(first1[9]).intl;
          intl2 = closure_0(first1[9]).intl;
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
            const intl = closure_1_0(first1[9]).intl;
            message = intl.string(closure_1_0(first1[9]).t["0F5Jyt"]);
          }
          const obj = { title: intl2.string(closure_1_0(first1[9]).t.OjbtDm), body: message };
          const show = closure_1_1(first1[10]).show;
          closure_1_1(first1[10]);
          intl2 = closure_1_0(first1[9]).intl;
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
}));
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default memoResult;
