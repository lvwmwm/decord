// Module ID: 7743
// Function ID: 7744
// Name: InAppReportsTextLineElement
// Dependencies: [5, 32, 19, 17, 21, 5092, 587, 558, 576, 5399, 6169, 6885, 4808, 1382, 5068, 4806, 5088, 1126, 5379, 2]

// Module 7743 (InAppReportsTextLineElement)
import nativeDefault from "native" /* 587 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c3, dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ View: metroImportDefault, Linking: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, description: { marginBottom: 16 }, trailingButtonContainer: { paddingHorizontal: 8 }, smsInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, smsNumberContainer: obj2, smsNumberContainerSuccess: obj3, startButtonContainer: { paddingHorizontal: 12, marginBottom: 8, marginLeft: 12 } };
obj2 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
let closure_11 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function TextLineElement(element) {
  let body;
  let closure_3;
  let first;
  let items;
  let items1;
  let items2;
  let sms;
  let title;
  let tmp6;
  let tmp = sms;
  let tmp2 = dependencyMap;
  let obj = sms(576);
  const cResult = obj.c(51);
  const data = element.element.data;
  ({ title, body, sms } = data);
  const sms_body = data.sms_body;
  const is_localized = data.is_localized;
  const tmp4 = closure_11();
  [tmp6, importAll] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const obj = require("CustomMarkup");
      return obj.getParser();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp8 = sms_body(6169)(first);
  if (is_localized) {
    let tmp10;
    let tmp11;
    if (cResult[1] !== sms) {
      function handleCopyPress() {
        const obj = ClipboardUtils;
        obj.copy(sms);
        const obj2 = ToastUtils;
        const result = obj2.presentCopiedToClipboard();
        importAll(true);
      }
      cResult[1] = sms;
      cResult[2] = handleCopyPress;
      tmp10 = handleCopyPress;
    } else {
      tmp10 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      function buildSmsUrl(arg0, arg1) {
        let str = "?";
        const obj = sms(closure_3[13]);
        const tmp = sms;
        const tmp2 = closure_3;
        if (obj.isIOS()) {
          let str2 = "&";
          const tmpResult = tmp(tmp2[14]);
          if (tmpResult.getSystemVersionMajor() < 8) {
            str2 = ";";
          }
          str = str2;
        }
        let str3 = "";
        const combined = "sms:" + arg0;
        if (null != arg1) {
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal = HermesInternal;
          str3 = "" + str + "body=" + encodeURIComponent(arg1);
        }
        return combined + str3;
      }
      cResult[3] = buildSmsUrl;
      tmp11 = buildSmsUrl;
    } else {
      tmp11 = cResult[3];
    }
    dependencyMap = tmp11;
    if (cResult[4] === sms) {
      let tmp12;
      if (cResult[5] === sms_body) {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp6) {
        let tmp14;
        if (cResult[8] === tmp4.smsNumberContainerSuccess) {
          tmp14 = cResult[9];
        }
        if (cResult[10] === tmp4.header) {
          let tmp17;
          if (cResult[11] === title) {
            tmp17 = cResult[12];
          }
          if (cResult[13] === body) {
            let tmp21;
            if (cResult[14] === tmp8) {
              tmp21 = cResult[15];
            }
            if (cResult[16] === tmp4.description) {
              let tmp23;
              if (cResult[17] === tmp21) {
                tmp23 = cResult[18];
              }
              if (cResult[19] === tmp14) {
                let tmp27;
                let tmp28;
                let tmp31;
                if (cResult[20] === tmp4.smsNumberContainer) {
                  tmp27 = cResult[21];
                }
                if (cResult[22] !== sms) {
                  let obj2 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
                  const tmp30 = closure_9(tmp(5088).Text, obj2);
                  cResult[22] = sms;
                  cResult[23] = tmp30;
                  tmp28 = tmp30;
                } else {
                  tmp28 = cResult[23];
                }
                if (cResult[24] !== tmp6) {
                  let stringResult;
                  const intl = tmp(1126).intl;
                  const string = intl.string;
                  const t = tmp(1126).t;
                  if (tmp6) {
                    stringResult = string(t.t5VZ88);
                  } else {
                    stringResult = string(t.OpuAlK);
                  }
                  cResult[24] = tmp6;
                  cResult[25] = stringResult;
                  tmp31 = stringResult;
                } else {
                  tmp31 = cResult[25];
                }
                if (cResult[26] === tmp10) {
                  let tmp33;
                  if (cResult[27] === tmp31) {
                    tmp33 = cResult[28];
                  }
                  if (cResult[29] === tmp4.trailingButtonContainer) {
                    let tmp36;
                    if (cResult[30] === tmp33) {
                      tmp36 = cResult[31];
                    }
                    if (cResult[32] === tmp27) {
                      if (cResult[33] === tmp28) {
                        let tmp40;
                        let tmp44;
                        let tmp46;
                        if (cResult[34] === tmp36) {
                          tmp40 = cResult[35];
                        }
                        const _Symbol2 = Symbol;
                        const startButtonContainer = tmp4.startButtonContainer;
                        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(1126).intl;
                          const stringResult1 = intl2.string(tmp(1126).t.BDYHSe);
                          cResult[36] = stringResult1;
                          tmp44 = stringResult1;
                        } else {
                          tmp44 = cResult[36];
                        }
                        if (cResult[37] !== tmp12) {
                          let obj3 = { text: tmp44, size: "md", onPress: tmp12 };
                          const tmp48 = closure_9(tmp(5379).Button, obj3);
                          cResult[37] = tmp12;
                          cResult[38] = tmp48;
                          tmp46 = tmp48;
                        } else {
                          tmp46 = cResult[38];
                        }
                        if (cResult[39] === tmp4.startButtonContainer) {
                          let tmp49;
                          if (cResult[40] === tmp46) {
                            tmp49 = cResult[41];
                          }
                          if (cResult[42] === tmp4.smsInfoContainer) {
                            if (cResult[43] === tmp40) {
                              let tmp53;
                              if (cResult[44] === tmp49) {
                                tmp53 = cResult[45];
                              }
                              if (cResult[46] === tmp4.container) {
                                if (cResult[47] === tmp23) {
                                  if (cResult[48] === tmp53) {
                                    let tmp57;
                                    if (cResult[49] === tmp17) {
                                      tmp57 = cResult[50];
                                    }
                                    return tmp57;
                                  }
                                }
                              }
                              let obj4 = { style: tmp16, children: items };
                              items = [tmp17, tmp23, tmp53];
                              const tmp60 = closure_10(closure_7, obj4);
                              cResult[46] = tmp4.container;
                              cResult[47] = tmp23;
                              cResult[48] = tmp53;
                              cResult[49] = tmp17;
                              cResult[50] = tmp60;
                              tmp57 = tmp60;
                            }
                          }
                          let obj5 = { style: tmp26, children: items1 };
                          items1 = [tmp40, tmp49];
                          const tmp56 = closure_10(closure_7, obj5);
                          cResult[42] = tmp4.smsInfoContainer;
                          cResult[43] = tmp40;
                          cResult[44] = tmp49;
                          cResult[45] = tmp56;
                          tmp53 = tmp56;
                        }
                        const obj6 = { style: startButtonContainer, children: tmp46 };
                        const tmp52 = closure_9(closure_7, obj6);
                        cResult[39] = tmp4.startButtonContainer;
                        cResult[40] = tmp46;
                        cResult[41] = tmp52;
                        tmp49 = tmp52;
                      }
                    }
                    const obj7 = { style: tmp27, children: items2 };
                    items2 = [tmp28, tmp36];
                    const tmp43 = closure_10(closure_7, obj7);
                    cResult[32] = tmp27;
                    cResult[33] = tmp28;
                    cResult[34] = tmp36;
                    cResult[35] = tmp43;
                    tmp40 = tmp43;
                  }
                  const obj8 = { style: tmp4.trailingButtonContainer, children: tmp33 };
                  const tmp39 = closure_9(closure_7, obj8);
                  cResult[29] = tmp4.trailingButtonContainer;
                  cResult[30] = tmp33;
                  cResult[31] = tmp39;
                  tmp36 = tmp39;
                }
                const obj9 = { text: tmp31, size: "sm", onPress: tmp10, variant: "secondary" };
                const tmp35 = closure_9(tmp(5379).Button, obj9);
                cResult[26] = tmp10;
                cResult[27] = tmp31;
                cResult[28] = tmp35;
                tmp33 = tmp35;
              }
              const items3 = [tmp4.smsNumberContainer, tmp14];
              cResult[19] = tmp14;
              cResult[20] = tmp4.smsNumberContainer;
              cResult[21] = items3;
              tmp27 = items3;
            }
            const obj10 = { style: tmp20, variant: "text-md/medium", children: tmp21 };
            const tmp25 = closure_9(tmp(5088).Text, obj10);
            cResult[16] = tmp4.description;
            cResult[17] = tmp21;
            cResult[18] = tmp25;
            tmp23 = tmp25;
          }
          const tmp8Result = tmp8(body);
          cResult[13] = body;
          cResult[14] = tmp8;
          cResult[15] = tmp8Result;
          tmp21 = tmp8Result;
        }
        const obj11 = { style: tmp4.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
        const tmp19 = closure_9(tmp(5088).Text, obj11);
        cResult[10] = tmp4.header;
        cResult[11] = title;
        cResult[12] = tmp19;
        tmp17 = tmp19;
      }
      const tmp15 = tmp6 ? tmp4.smsNumberContainerSuccess : {};
      cResult[7] = tmp6;
      cResult[8] = tmp4.smsNumberContainerSuccess;
      cResult[9] = tmp15;
      tmp14 = tmp15;
    }
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let v3;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              closure_0 = undefined;
              const tmp14 = c3(closure_0, closure_1);
              closure_0 = tmp14;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: closure_2_8.canOpenURL(tmp14), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (value) {
              const obj = sms_body(closure_2_3[15]);
              obj.openURL(closure_0);
            }
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    });
    function handleOpenSms() {
      return closure_0(...arguments);
    }
    cResult[4] = sms;
    cResult[5] = sms_body;
    cResult[6] = handleOpenSms;
    tmp12 = handleOpenSms;
  } else {
    return null;
  }
}) : (function TextLineElement(element) {
  let Button;
  let Button2;
  let _undefined;
  let body;
  let c2;
  let intl2;
  let is_localized;
  let items;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj8;
  let title;
  let tmp3;
  const data = element.element.data;
  const sms = data.sms;
  const sms_body = data.sms_body;
  c2 = undefined;
  let obj = function _handleOpenSms2() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let tmp2;
      function buildSmsUrl(arg0, arg1) {
        let str = "?";
        obj = closure_1_0(closure_1_3[13]);
        const tmp = closure_1_0;
        const tmp2 = closure_1_3;
        if (obj.isIOS()) {
          let str2 = "&";
          const tmpResult = tmp(tmp2[14]);
          if (tmpResult.getSystemVersionMajor() < 8) {
            str2 = ";";
          }
          str = str2;
        }
        let str3 = "";
        const combined = "sms:" + arg0;
        if (null != arg1) {
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal = HermesInternal;
          str3 = "" + str + "body=" + encodeURIComponent(arg1);
        }
        return combined + str3;
      }
      if (c3 === 2) {
        c3 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let closure_0;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp14 = buildSmsUrl(sms, sms_body);
              closure_0 = tmp14;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: closure_1_8.canOpenURL(tmp14), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (value) {
              obj = tmp2(c3[15]);
              obj.openURL(closure_0);
            }
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    });
    return obj(...arguments);
  };
  ({ title, body, is_localized } = data);
  let tmp = closure_11();
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  const tmp4 = obj;
  if (is_localized) {
    let stringResult;
    obj = { style: tmp.container, children: items };
    let obj2 = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    const tmp7 = tmp3 ? tmp.smsNumberContainerSuccess : {};
    items = [closure_9(sms(tmp4[16]).Text, obj2), , ];
    let obj3 = { style: tmp.description, variant: "text-md/medium", children: tmp5(body) };
    const Text = sms(tmp4[16]).Text;
    items[1] = closure_9(Text, obj3);
    let obj4 = { style: tmp.smsInfoContainer, children: items3 };
    let obj5 = { style: items1, children: items2 };
    items1 = [tmp.smsNumberContainer, tmp7];
    const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
    items2 = [closure_9(sms(tmp4[16]).Text, obj6), ];
    const obj7 = { style: tmp.trailingButtonContainer, children: closure_9(Button, obj8) };
    Button = sms(tmp4[18]).Button;
    const intl = sms(tmp4[17]).intl;
    const string = intl.string;
    const t = sms(tmp4[17]).t;
    if (tmp3) {
      stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    obj8 = {
      text: stringResult,
      size: "sm",
      onPress: function handleCopyPress() {
          obj = ClipboardUtils;
          obj.copy(sms);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          _undefined(true);
        },
      variant: "secondary"
    };
    items2[1] = closure_9(closure_7, obj7);
    items3 = [tmp8(tmp9, obj5), ];
    const obj9 = { style: tmp.startButtonContainer, children: closure_9(Button2, obj10) };
    obj10 = {
      text: intl2.string(sms(tmp4[17]).t.BDYHSe),
      size: "md",
      onPress: function handleOpenSms() {
          return obj(...arguments);
        }
    };
    Button2 = tmp11(tmp4[18]).Button;
    intl2 = tmp11(tmp4[17]).intl;
    items3[1] = closure_9(closure_7, obj9);
    items[2] = closure_10(closure_7, obj4);
    return closure_10(closure_7, obj);
  } else {
    return null;
  }
});
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx");

export default tmp5;
