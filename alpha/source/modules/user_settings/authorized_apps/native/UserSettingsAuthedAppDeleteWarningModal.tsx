// Module ID: 12292
// Function ID: 12293
// Name: UserSettingsAuthedAppDeleteWarningModal
// Dependencies: [21, 558, 576, 10650, 1126, 12293, 10475, 5304, 2]

// Module 12292 (UserSettingsAuthedAppDeleteWarningModal)
import intl7 from "intl" /* 1126 */;
import InfoBox from "InfoBox" /* 10475 */;
import isSocialLayerApplication from "isSocialLayerApplication" /* 10650 */;
import shouldWarnAuthorizedAppTwoWayDefault from "shouldWarnAuthorizedAppTwoWay" /* 12293 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const InfoBoxDefault = InfoBox;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsAuthedAppDeleteWarningModal(arg0) {
  let application;
  let closure_0;
  let intl4;
  let items;
  let onDelete;
  let scopes;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(25);
  ({ application, scopes, onDelete } = arg0);
  if (cResult[0] === application) {
    let tmp4;
    let formatToPlainStringResult1;
    if (cResult[1] === scopes) {
      tmp4 = cResult[2];
    }
    _require = tmp4;
    if (cResult[3] === application.name) {
      let tmp6;
      let formatToPlainStringResult;
      if (cResult[4] === tmp4) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === application.name) {
        let tmp8;
        let tmp10;
        if (cResult[7] === tmp4) {
          tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp4) {
          function getInfoBox(id) {
            let intl;
            let intl2;
            let obj2;
            let tmp5 = shouldWarnAuthorizedAppTwoWayDefault(id.id);
            const tmp = hasOwnProperty;
            const tmp2 = React3;
            if (tmp5) {
              const obj = { children: intl.format(intl7.t.KRnERi, obj2) };
              const tmp3Result = InfoBoxDefault;
              intl = intl7.intl;
              obj2 = { applicationName: id.name };
              tmp5 = _false(tmp3Result, obj);
            }
            const children = [tmp5, ];
            let tmp9 = closure_0;
            if (tmp9) {
              const obj3 = { look: InfoBox.InfoBoxLooks.WARNING, children: intl2.string(intl7.t.LY35Zy) };
              const tmp3Result2 = InfoBoxDefault;
              intl2 = intl7.intl;
              tmp9 = _false(tmp3Result2, obj3);
            }
            children[1] = tmp9;
            return tmp(tmp2, { children });
          }
          cResult[9] = tmp4;
          cResult[10] = getInfoBox;
          tmp10 = getInfoBox;
        } else {
          tmp10 = cResult[10];
        }
        if (cResult[11] === application) {
          let tmp11;
          let tmp14;
          let tmp16;
          let tmp19;
          let tmp22;
          if (cResult[12] === tmp10) {
            tmp11 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult = intl3.string(tmp(1126).t.xUqheM);
            cResult[14] = stringResult;
            tmp14 = stringResult;
          } else {
            tmp14 = cResult[14];
          }
          if (cResult[15] !== onDelete) {
            let obj2 = { variant: "destructive", text: tmp14, onPress: onDelete };
            const tmp18 = closure_3(tmp(5304).AlertActionButton, obj2, "confirm");
            cResult[15] = onDelete;
            cResult[16] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            let obj3 = { variant: "secondary", text: intl4.string(tmp(1126).t["ETE/oC"]) };
            const AlertActionButton = tmp(5304).AlertActionButton;
            intl4 = tmp(1126).intl;
            const tmp21 = closure_3(AlertActionButton, obj3, "cancel");
            cResult[17] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[17];
          }
          if (cResult[18] !== tmp16) {
            const obj4 = { children: items };
            items = [tmp16, tmp19];
            const tmp25 = closure_5(closure_4, obj4);
            cResult[18] = tmp16;
            cResult[19] = tmp25;
            tmp22 = tmp25;
          } else {
            tmp22 = cResult[19];
          }
          if (cResult[20] === tmp8) {
            if (cResult[21] === tmp11) {
              if (cResult[22] === tmp22) {
                let tmp26;
                if (cResult[23] === tmp6) {
                  tmp26 = cResult[24];
                }
                return tmp26;
              }
            }
          }
          const obj5 = { title: tmp6, content: tmp8, extraContent: tmp11, actions: tmp22 };
          const tmp28 = closure_3(tmp(5304).AlertModal, obj5);
          cResult[20] = tmp8;
          cResult[21] = tmp11;
          cResult[22] = tmp22;
          cResult[23] = tmp6;
          cResult[24] = tmp28;
          tmp26 = tmp28;
        }
        const tmp10Result = tmp10(application);
        cResult[11] = application;
        cResult[12] = tmp10;
        cResult[13] = tmp10Result;
        tmp11 = tmp10Result;
      }
      let intl2 = tmp(1126).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = tmp(1126).t;
      if (tmp4) {
        const obj6 = { applicationName: application.name };
        formatToPlainStringResult = formatToPlainString(t.inM1Yt, obj6);
      } else {
        const obj7 = { applicationName: application.name };
        formatToPlainStringResult = formatToPlainString(t.QWGvxA, obj7);
      }
      cResult[6] = application.name;
      cResult[7] = tmp4;
      cResult[8] = formatToPlainStringResult;
      tmp8 = formatToPlainStringResult;
    }
    let intl = tmp(1126).intl;
    if (tmp4) {
      const obj8 = { applicationName: application.name };
      formatToPlainStringResult1 = intl.formatToPlainString(tmp(1126).t["paC+US"], obj8);
    } else {
      formatToPlainStringResult1 = intl.string(tmp(1126).t["DT39A+"]);
    }
    cResult[3] = application.name;
    cResult[4] = tmp4;
    cResult[5] = formatToPlainStringResult1;
    tmp6 = formatToPlainStringResult1;
  }
  const tmpResult = tmp(10650);
  const result = tmpResult.isSocialLayerSDKAuthorization(application, scopes);
  cResult[0] = application;
  cResult[1] = scopes;
  cResult[2] = result;
  tmp4 = result;
}) : (function UserSettingsAuthedAppDeleteWarningModal(application) {
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let obj6;
  let obj9;
  let onDelete;
  let scopes;
  application = application.application;
  ({ scopes, onDelete } = application);
  const obj = isSocialLayerApplication;
  const result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = intl7.intl;
  if (result) {
    const obj2 = { applicationName: application.name };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["paC+US"], obj2);
  } else {
    formatToPlainStringResult = intl.string(tmp(1126).t["DT39A+"]);
  }
  const intl2 = tmp(1126).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp(1126).t;
  if (result) {
    const obj3 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj3);
  } else {
    const obj4 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj4);
  }
  let tmp9 = shouldWarnAuthorizedAppTwoWayDefault(application.id);
  if (tmp9) {
    const obj5 = { children: intl3.format(intl7.t.KRnERi, obj6) };
    const tmp8Result = InfoBoxDefault;
    intl3 = tmp(1126).intl;
    obj6 = { applicationName: application.name };
    tmp9 = _false(tmp8Result, obj5);
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (tmp12) {
    const obj7 = { look: InfoBox.InfoBoxLooks.WARNING, children: intl4.string(intl7.t.LY35Zy) };
    const tmp8Result2 = InfoBoxDefault;
    intl4 = tmp(1126).intl;
    tmp12 = _false(tmp8Result2, obj7);
  }
  items[1] = tmp12;
  const obj8 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: hasOwnProperty(React3, { children: items }), actions: hasOwnProperty(React3, obj9) };
  obj9 = { children: items1 };
  const AlertModal = tmp(5304).AlertModal;
  const obj10 = { variant: "destructive", text: intl5.string(intl7.t.xUqheM), onPress: onDelete };
  const AlertActionButton = tmp(5304).AlertActionButton;
  intl5 = tmp(1126).intl;
  items1 = [_false(AlertActionButton, obj10, "confirm"), ];
  const obj11 = { variant: "secondary", text: intl6.string(intl7.t["ETE/oC"]) };
  const AlertActionButton2 = tmp(5304).AlertActionButton;
  intl6 = tmp(1126).intl;
  items1[1] = _false(AlertActionButton2, obj11, "cancel");
  return _false(AlertModal, obj8);
});
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default tmp3;
