// Module ID: 13786
// Function ID: 13787
// Name: BugReporterModal
// Dependencies: [5, 32, 19, 17, 1392, 13785, 21, 4971, 587, 683, 1104, 6672, 1505, 504, 1128, 6924, 8145, 8144, 5663, 13787, 569, 13788, 7485, 6984, 5669, 1417, 1384, 8155, 11759, 1647, 7181, 5977, 5234, 6905, 12169, 6908, 1202, 8115, 5244, 7008, 6987, 6903, 5210, 13797, 2002, 6985, 7180, 1373, 13798, 10170, 558, 576, 7095, 2]

// Module 13786 (BugReporterModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1104 */;
import intl13 from "intl" /* 1128 */;
import AvatarUtils from "AvatarUtils" /* 1417 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import FastImageDefault from "FastImage" /* 5669 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import NavigatorHeader from "NavigatorHeader" /* 6924 */;
import TableRadioRow2 from "TableRadioRow" /* 6984 */;
import Navigator from "Navigator" /* 7095 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7485 */;
import UploadDefault from "Upload" /* 8144 */;
import UploadPlatform from "UploadPlatform" /* 8145 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1392 */;
import BugReportStore from "BugReportStore" /* 13785 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import module_683 from "module_683" /* 683 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c2, c5, c6, closure_14, closure_2, dependencyMap, navigation, priority;

let alphaResult;
let c10;
let closure_12;
let metroImportDefault;
let metroRequire;
let rect;
let size;
let unpackModuleId;
function render(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return closure_1_10(closure_1_20, obj);
}
function handleClose() {
  BugReportStore.setState({ isReportOpen: false });
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
class BugCreateScreen {
  constructor(screenshotUri) {
    let Button2;
    let Stack;
    let TableRow;
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl7;
    let intl8;
    let intl9;
    let items6;
    let items7;
    let items8;
    let name;
    let obj12;
    let obj17;
    let obj4;
    let priorities;
    screenshotUri = screenshotUri.screenshotUri;
    const screenshot = screenshotUri.screenshot;
    let first1;
    let num;
    closure_14 = undefined;
    let obj = function _pickAttachment() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let mimeType;
        let obj10;
        let obj8;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let filename;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_4 = tmp4;
                let closure_3 = tmp;
                filename = undefined;
                first = undefined;
                size = undefined;
                first1 = undefined;
                const obj14 = filename(size[26]);
                if (obj14.isIOS()) {
                  c5 = 1;
                  c6 = 1;
                  const obj4 = { value: obj10.launchImageLibraryAsync({ mediaType: "mixed", includeBase64: false, selectionLimit: 1 }), done: false };
                  obj10 = mimeType(size[27]);
                  return obj4;
                } else {
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: obj8.handleDocumentSelection({ pickMultiple: false }), done: false };
                  obj8 = filename(size[28]);
                  return obj5;
                }
              }
            } else if (1 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                filename = value;
                const assets = filename.assets;
                first = undefined;
                if (assets != null) {
                  first = assets[0];
                }
                let tmp28 = null;
                if (!filename.didCancel) {
                  tmp28 = null;
                  if (null != first) {
                    const obj7 = { uri: first.uri, originalUri: first.uri, platform: filename(size[16]).UploadPlatform.REACT_NATIVE, filename: first.fileName };
                    const merged = Object.assign(first);
                    tmp28 = obj7;
                  }
                }
                c6 = 3;
                const obj9 = { value: tmp28, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              size = value;
              first1 = undefined;
              if (size != null) {
                first1 = size[0];
              }
              let tmp8 = null;
              if (null != first1) {
                obj = { uri: first1.uri, originalUri: first1.uri, platform: filename(size[16]).UploadPlatform.REACT_NATIVE, filename, mimeType, size };
                const name = first1.name;
                filename = name;
                if (name == null) {
                  const str = first1.uri;
                  const parts = str.split("/");
                  filename = parts.at(-1);
                }
                const type = first1.type;
                mimeType = type;
                if (type == null) {
                  mimeType = undefined;
                }
                size = first1.size ?? undefined;
                tmp8 = obj;
              }
              c6 = 3;
              const obj12 = { value: tmp8, done: true };
              return obj12;
            }
          } catch (tmp45) {
            c6 = 3;
            throw tmp45;
          }
        }
      });
      return obj(...arguments);
    };
    obj = function _handleAttachmentSelect() {
      obj = _asyncToGenerator(async function(arg0, value) {
        let closure_1;
        function pickAttachment() {
          return closure_1_25(...arguments);
        }
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
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let closure_0;
            let tmp4;
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
                closure_0 = undefined;
                tmp4 = undefined;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: pickAttachment(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              if (null != closure_0) {
                const self = this;
                const self2 = this;
                const tmp10 = new tmp4(c2[17])(closure_0);
                tmp4 = tmp10;
                closure_129_23.current = closure_129_7.length;
                closure_129_8((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_1;
                  return items;
                });
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            c3 = 3;
            throw tmp16;
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = closure_14();
    dependencyMap = tmp;
    const tmp2 = first1(num.useState(""), 2);
    let first = tmp2[0];
    let tmp4 = tmp2[1];
    let tmp5 = first1(num.useState(""), 2);
    first1 = tmp5[0];
    let tmp7 = tmp5[1];
    let tmp8 = first1(num.useState(null), 2);
    num = tmp8[0];
    let tmp9 = tmp8[1];
    let tmp10 = first1(num.useState(""), 2);
    const first2 = tmp10[0];
    let tmp12 = tmp10[1];
    const tmp13 = first1(num.useState([]), 2);
    const first3 = tmp13[0];
    let currentUser = tmp13[1];
    const state = num.useRef(false);
    let tmp14 = first1(num.useState(false), 2);
    const first4 = tmp14[0];
    let closure_11 = tmp14[1];
    const callback = num.useCallback((current) => {
      state.current = current;
      closure_11(current);
    }, []);
    let tmp17 = first1(num.useState(false), 2);
    const first5 = tmp17[0];
    closure_14 = tmp17[1];
    let tmp19 = first1(num.useState(false), 2);
    const first6 = tmp19[0];
    closure_16 = tmp19[1];
    let tmp21 = first1(num.useState(null), 2);
    const first7 = tmp21[0];
    let closure_18 = tmp21[1];
    let tmp23 = first1(num.useState(null), 2);
    const first8 = tmp23[0];
    const setFeature = tmp23[1];
    let tmp25 = screenshotUri;
    obj = screenshotUri(1505);
    navigation = obj.useNavigation();
    num.useRef(null);
    const ref = num.useRef(0);
    let obj2 = screenshotUri(504);
    let items = [currentUser];
    let stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        let isStaffPersonalResult;
        if (currentUser != null) {
          isStaffPersonalResult = currentUser.isStaffPersonal();
        }
        isStaffResult = isStaffPersonalResult;
      }
      return isStaffResult;
    });
    const items1 = [navigation];
    const effect = num.useEffect(() => {
      let intl;
      let obj2;
      const setOptions = navigation.setOptions;
      obj = { title: intl.string(intl13.t.mCCdwi), headerLeft: obj2.getHeaderCloseButton(handleClose) };
      intl = intl13.intl;
      obj2 = NavigatorHeader;
      setOptions(obj);
    }, items1);
    const items2 = [screenshotUri, screenshot];
    const effect1 = num.useEffect(function() {
      if (null != screenshotUri) {
        obj = { uri: screenshotUri, originalUri: screenshotUri, platform: UploadPlatform.UploadPlatform.REACT_NATIVE };
        const merged = Object.assign(screenshot);
        const self = this;
        const self2 = this;
        let closure_0 = new UploadDefault(obj);
        const tmp9 = new UploadDefault(obj);
        currentUser((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
          return items;
        });
      }
    }, items2);
    const items3 = [first1, first8, first, navigation, num, first2, first3, first4, first5, first6, callback];
    const effect2 = num.useEffect(() => {
      function handleSubmit() {
        return obj(...arguments);
      }
      obj = function _handleSubmit() {
        let duration;
        obj = _asyncToGenerator(async (arg0, value) => {
          let intl;
          let intl2;
          function submitReportWithNotifications(arg0, arg1, value) {
            return name(...arguments);
          }
          if (priority === 2) {
            priority = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else {
            const str2 = "BUG_REPORT_SUBMITTING_BUG";
            const flag = true;
            const str3 = "BUG_REPORT_FAILED_TO_SUBMIT";
            const flag2 = false;
            if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let closure_0;
                let timeout;
                let _clearTimeout;
                priority = 2;
                const tmp4 = description;
                if (0 === description) {
                  if (arg0 === 1) {
                    priority = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    priority = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_0 = undefined;
                    timeout = undefined;
                    closure_2 = undefined;
                    obj = function _submitReportWithNotifications() {
                      obj = c3(function*(arg0, value, arg2) {
                        let intl;
                        let intl2;
                        let obj7;
                        closure_0 = arg0;
                        closure_1 = value;
                        closure_2 = arg2;
                        if (c6 === 2) {
                          c6 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj2 = { value, done: true };
                            return obj2;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          try {
                            let ok;
                            let closure_5;
                            let c4;
                            c6 = 2;
                            if (0 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                let closure_4 = tmp;
                                let c3 = 1;
                                ok = undefined;
                                const self3 = this;
                                const self4 = this;
                                const tmp58 = new closure_2_1(closure_2_2[20])(closure_2_17, closure_2_18, true);
                                let closure_3 = tmp58;
                                c4 = false;
                                closure_5 = 0;
                                if (closure_5 >= 20) {
                                  let flag3;
                                  if (c4) {
                                    closure_3.succeed();
                                    const obj4 = { text: intl2.string(closure_2_0(closure_2_2[14]).t.jB8yOL), variant: "success", duration };
                                    const open2 = closure_2_1(closure_2_2[18]).open;
                                    const tmp31 = closure_2_1(closure_2_2[18]);
                                    intl2 = closure_2_0(closure_2_2[14]).intl;
                                    open2("BUG_REPORT_BUG_SUBMITTED", obj4);
                                    flag3 = true;
                                  } else {
                                    const obj5 = { text: intl.string(closure_2_0(closure_2_2[14]).t["4t1o0u"]), variant: "critical" };
                                    const open = closure_2_1(closure_2_2[18]).open;
                                    const tmp21 = closure_2_1(closure_2_2[18]);
                                    intl = closure_2_0(closure_2_2[14]).intl;
                                    open("BUG_REPORT_FAILED_TO_SUBMIT", obj5);
                                    flag3 = false;
                                  }
                                  c6 = 3;
                                  const obj6 = { value: flag3, done: true };
                                  return obj6;
                                }
                              }
                            } else if (1 === tmp4) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                const obj8 = { value, done: true };
                                return obj8;
                              } else {
                                ok = undefined;
                                if (ok != null) {
                                  ok = ok.ok;
                                }
                                if (ok) {
                                  c4 = true;
                                } else if (closure_1_15) {
                                  const self = this;
                                  const self2 = this;
                                  const promise = new Promise((arg0) => {
                                    closure_1_3.fail(arg0);
                                  });
                                  c5 = 2;
                                  c6 = 1;
                                  const obj9 = { value: promise, done: false };
                                  return obj9;
                                } else {
                                  c4 = false;
                                }
                              }
                            } else if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c6 = 3;
                              obj = { value, done: true };
                              return obj;
                            } else {
                              closure_5 = closure_5 + 1;
                            }
                            c5 = 1;
                            c6 = 1;
                            const obj10 = { value: obj7.submitReport(closure_0, closure_1, closure_2), done: false };
                            obj7 = closure_2_0(closure_2_2[21]);
                            return obj10;
                          } catch (tmp45) {
                            c6 = 3;
                            throw tmp45;
                          }
                        }
                      });
                      return obj(...arguments);
                    };
                    if (ref.current) {
                      const tmp52 = closure_1_13;
                      if (tmp52) {
                        const tmp55 = closure_2_1(closure_2_2[18]);
                        let obj5 = { text: intl2.string(handleSubmit(closure_2_2[14]).t.Uuqbcm), variant: "critical", duration };
                        let open = tmp55.open;
                        intl2 = handleSubmit(closure_2_2[14]).intl;
                        let tmp58 = handleSubmit;
                        const openResult = open("BUG_REPORT_SUBMITTING_BUG", obj5);
                        _clearTimeout = duration(true);
                        first8();
                      }
                    } else {
                      closure_1_12(true);
                      if (null == priority) {
                        const tmp44 = closure_2_1(closure_2_2[18]);
                        _clearTimeout = tmp44.open;
                        let obj6 = { text: intl.string(handleSubmit(closure_2_2[14]).t["4t1o0u"]), variant: "critical" };
                        const tmp45 = handleSubmit;
                        intl = handleSubmit(closure_2_2[14]).intl;
                        _clearTimeout("BUG_REPORT_FAILED_TO_SUBMIT", obj6);
                        const tmp51 = closure_1_12(false);
                        priority = 3;
                        let obj7 = { value: undefined, done: true };
                        return obj7;
                      } else {
                        let obj4 = handleSubmit(closure_2_2[19]);
                        _clearTimeout = obj4.getAttachments(closure_1_7);
                        description = 1;
                        priority = 1;
                        let obj8 = { value: _clearTimeout, done: false };
                        return obj8;
                      }
                    }
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    priority = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    priority = 3;
                    let obj9 = { value, done: true };
                    return obj9;
                  } else {
                    closure_0 = value;
                    closure_1_14(false);
                    const _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      closure_1_14(true);
                    }, first6);
                    name = 1;
                    let obj10 = { name, priority, description, feature, url };
                    description = 3;
                    priority = 1;
                    const obj11 = { value: submitReportWithNotifications(obj10, { overridePlatformInformation: false }, closure_0), done: false };
                    return obj11;
                  }
                } else if (2 === tmp4) {
                  name = 0;
                  let tmp31 = closure_1_12;
                  const tmp32 = closure_1_12(false);
                  const tmp34 = closure_1_14(false);
                  const _clearTimeout2 = clearTimeout;
                  _clearTimeout = clearTimeout(timeout);
                  throw closure_2;
                } else if (arg0 === 1) {
                  priority = 3;
                  throw value;
                } else if (arg0 === 2) {
                  name = 0;
                  let tmp21 = closure_1_12;
                  const tmp22 = closure_1_12(false);
                  const tmp24 = closure_1_14(false);
                  _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                  priority = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_2 = value;
                  const tmp6 = closure_2;
                  if (tmp6) {
                    _clearTimeout = duration(true);
                    const tmp10 = first8();
                  }
                  name = 0;
                  const tmp14 = closure_1_12(false);
                  const tmp16 = closure_1_14(false);
                  _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                }
                priority = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp65) {
                closure_2 = tmp65;
                if (0 === name) {
                  priority = 3;
                  throw tmp65;
                } else {
                  description = 2;
                }
              }
            }
          }
        });
        return obj(...arguments);
      };
      obj = {
        headerRight() {
          let stringResult;
          let tmp8;
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          const tmp = authStore;
          if (first5) {
            const intl2 = tmp2(1128).intl;
            stringResult = intl2.string(tmp2(1128).t["tUu8V+"]);
          } else {
            const intl = tmp2(1128).intl;
            const string = intl.string;
            const t = tmp2(1128).t;
            if (first4) {
              stringResult = string(t.ZiWcJ0);
            } else {
              stringResult = string(t.geKm7t);
            }
          }
          obj = { text: stringResult, textStyle: { maxWidth: null }, onPress: handleSubmit, disabled: tmp8 };
          tmp8 = null == first || "" === tmp7 || null == num || null == first1 || "" === first1;
          if (!tmp8) {
            tmp8 = first4 && !first5;
          }
          return tmp(HeaderActionButton, obj);
        }
      };
      navigation.setOptions(obj);
    }, items3);
    const items4 = [stateFromStores];
    const effect3 = num.useEffect(() => {
      function fetchConfig() {
        return obj(...arguments);
      }
      obj = function _fetchConfig() {
        obj = _asyncToGenerator(async (arg0, value) => {
          let obj2;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
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
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let closure_1 = tmp4;
                  closure_0 = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: obj2.fetchBugReportConfig(), done: false };
                  obj2 = closure_2_0(closure_2_2[21]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                closure_1_18(closure_0);
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp12) {
              c3 = 3;
              throw tmp12;
            }
          }
        });
        return obj(...arguments);
      };
      const tmp = stateFromStores;
      if (tmp) {
        fetchConfig();
      }
    }, items4);
    const items5 = [first3];
    const effect4 = num.useEffect(() => {
      if (first3.length > ref.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }
    }, items5);
    let tmp35 = closure_11;
    let tmp36 = callback;
    let obj3 = { bottomOffset: screenshotUri(7181).TEXT_AREA_HEIGHT, children: tmp35(Stack, obj4) };
    const KeyboardAwareScrollView = screenshotUri(1647).KeyboardAwareScrollView;
    obj4 = { spacing: 24, style: tmp.container, children: items8 };
    Stack = screenshotUri(5977).Stack;
    let obj5 = { spacing: 8, children: items6 };
    const Stack2 = screenshotUri(5977).Stack;
    let obj6 = { variant: "text-sm/semibold", color: "text-subtle", children: intl.string(screenshotUri(1128).t.tM969v) };
    let Text = screenshotUri(5234).Text;
    intl = screenshotUri(1128).intl;
    items6 = [first4(Text, obj6), ];
    let obj7 = { children: items7 };
    let obj8 = {
      horizontal: true,
      ref,
      contentContainerStyle: tmp.attachmentCarousel,
      children: first3.map((uri) => {
        let Icon;
        let items;
        let obj3;
        size = { uri: uri.item.uri, isImage: uri.isImage, isVideo: uri.isVideo, height: 280, width: 134 };
        obj = { style: closure_2.attachmentContainer, children: items };
        items = [first4(screenshot(closure_2[34]), size), ];
        let closure_0 = uri;
        const obj2 = {
          onPress: () => {
            currentUser((arr) => arr.filter((item) => item !== closure_1_0));
          },
          style: closure_2.closeContainer,
          children: first4(Icon, obj3)
        };
        const PressableOpacity = screenshotUri(closure_2[35]).PressableOpacity;
        obj3 = { source: screenshot(closure_2[37]), size: screenshotUri(closure_2[36]).Icon.Sizes.REFRESH_SMALL_16, color: screenshot(closure_2[8]).unsafe_rawColors.WHITE };
        Icon = screenshotUri(closure_2[36]).Icon;
        items[1] = first4(PressableOpacity, obj2);
        return closure_11(first2, obj, uri.id);
      })
    };
    const Card = screenshotUri(6905).Card;
    items7 = [first4(first3, obj8), ];
    let obj9 = {
      text: intl2.string(screenshotUri(1128).t.HVxmOD),
      onPress: function handleAttachmentSelect() {
        return obj(...arguments);
      }
    };
    const Button = screenshotUri(5244).Button;
    intl2 = screenshotUri(1128).intl;
    items7[1] = first4(Button, obj9);
    items6[1] = closure_11(Card, obj7);
    items8 = [closure_11(Stack2, obj5), , , , , , ];
    let obj10 = { label: intl3.string(screenshotUri(1128).t.OZRgjw), placeholder: intl4.string(screenshotUri(1128).t["6mpW05"]), onChange: tmp4, clearable: true, autoCapitalize: "sentences" };
    const TextInput = screenshotUri(7008).TextInput;
    intl3 = screenshotUri(1128).intl;
    intl4 = screenshotUri(1128).intl;
    items8[1] = first4(TextInput, obj10);
    if (stateFromStores) {
      let obj11 = { title: intl5.string(tmp25(1128).t["77VVd8"]), hasIcons: false, children: tmp37(TableRow, obj12) };
      const TableRowGroup = tmp25(6987).TableRowGroup;
      intl5 = tmp25(1128).intl;
      obj12 = {
        disabled: null == first7,
        onPress() {
            obj = ActionSheetActionCreatorsDefault;
            const obj2 = { features: null != first7 ? first7.features : [], feature: first8, setFeature };
            return obj.openLazy(asyncRequire(13797, dependencyMap.paths), "BugReporterFeatureActionSheet", obj2);
          },
        label: name,
        arrow: true
      };
      TableRow = tmp25(6903).TableRow;
      if (null != first8) {
        name = first8.name;
      } else {
        const intl6 = tmp25(1128).intl;
        name = intl6.string(tmp25(1128).t["77VVd8"]);
      }
      stateFromStores = tmp37(TableRowGroup, obj11);
    }
    items8[2] = stateFromStores;
    const obj13 = {
      title: intl7.string(tmp25(1128).t.xMXLda),
      defaultValue: num,
      onChange: tmp9,
      hasIcons: true,
      children: priorities.map((value) => {
        let description;
        let emoji;
        let obj2;
        let obj3;
        let obj4;
        let title;
        let tmp;
        value = value.value;
        ({ title, description, emoji } = value);
        obj = { value, label: title, subLabel: description, icon: authStore(tmp, obj2) };
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        obj2 = { style: closure_2.priorityIcon, source: obj3, resizeMode: "contain" };
        obj3 = { uri: obj4.getEmojiURL({ id: emoji, animated: true, size: 48 }) };
        tmp = FastImageDefault;
        obj4 = AvatarUtils;
        return authStore(TableRadioRow, obj, value);
      })
    };
    const TableRadioGroup = tmp25(6985).TableRadioGroup;
    intl7 = tmp25(1128).intl;
    if (num == null) {
      num = -1;
    }
    const tmp25Result = tmp25(13788);
    priorities = tmp25Result.getPriorities();
    items8[3] = first4(TableRadioGroup, obj13);
    let obj14 = { label: intl8.string(tmp25(1128).t["1SplH2"]), placeholder: intl9.string(tmp25(1128).t.CQmAZd), onChange: tmp7, autoCorrect: true, autoCapitalize: "sentences" };
    const TextArea = tmp25(7180).TextArea;
    intl8 = tmp25(1128).intl;
    intl9 = tmp25(1128).intl;
    items8[4] = first4(TextArea, obj14);
    const obj15 = { label: intl10.string(tmp25(1128).t["7p5pqh"]), placeholder: intl11.string(tmp25(1128).t.HewMzo), onChange: tmp12, clearable: true };
    const TextInput2 = tmp25(7008).TextInput;
    intl10 = tmp25(1128).intl;
    intl11 = tmp25(1128).intl;
    items8[5] = first4(TextInput2, obj15);
    const obj16 = { style: tmp.offButton, children: first4(Button2, obj17) };
    obj17 = {
      text: intl12.string(tmp25(1128).t["636e+U"]),
      size: "sm",
      variant: "secondary",
      onPress() {
        let intl;
        obj = screenshotUri(closure_2[47]);
        const result = obj.setDeveloperOptionSettings({ bugReporterEnabled: false });
        const obj2 = screenshot(closure_2[48]);
        obj2.terminate(true);
        state.setState({ isReportOpen: false });
        const arr = screenshot(closure_2[11]);
        arr.pop();
        const obj3 = { text: intl.string(screenshotUri(closure_2[14]).t["J3/feu"]), variant: "success" };
        const open = screenshot(closure_2[18]).open;
        screenshot(closure_2[18]);
        intl = screenshotUri(closure_2[14]).intl;
        open("BUG_REPORT_HAS_BEEN_TURNED_OFF_TEXT", obj3);
      }
    };
    Button2 = tmp25(5244).Button;
    intl12 = tmp25(1128).intl;
    items8[6] = first4(first2, obj16);
    const children = [tmp37(KeyboardAwareScrollView, obj3), ];
    let tmp37Result = null;
    if (first4) {
      tmp37Result = tmp37(function Submitting() {
        let intl;
        let items;
        const tmp = closure_14();
        obj = { style: tmp.submittingOverlay, children: items };
        items = [, ];
        const obj2 = { sticker: first5, animated: true, size: 148 };
        items[0] = first4(screenshot(closure_2[49]), obj2);
        const obj3 = { style: tmp.submittingText, variant: "heading-md/medium", children: intl.string(screenshotUri(closure_2[14]).t.Uuqbcm) };
        const Text = screenshotUri(closure_2[32]).Text;
        intl = screenshotUri(closure_2[14]).intl;
        items[1] = first4(Text, obj3);
        return closure_11(first2, obj);
      }, {});
    }
    children[1] = tmp37Result;
    return tmp35(tmp36, { children });
  }
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = Object.freeze({ id: "749049128012742676", format_type: 3, name: "Wumpus zipping by on a monowheel" });
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, attachmentCarousel: { justifyContent: "center", minWidth: "100%" }, attachmentContainer: { marginHorizontal: 4, marginBottom: 16 }, closeContainer: size, priorityIcon: { width: 24, height: 24 }, offButton: { marginBottom: 24 }, submittingOverlay: rect, submittingText: { marginTop: 8 } };
size = { position: "absolute", top: 6, right: 10, height: 20, width: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", backgroundColor: alphaResult.css() };
createStyles = createStyles.createStyles;
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.5);
rect = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, bottom: 0, flex: 1, justifyContent: "center", position: "absolute", top: 0, width: "100%" };
const syncedClientThemes = createStyles(obj);
let closure_15 = 5 * DurationsDefault.Millis.SECOND;
let closure_16 = 10 * DurationsDefault.Millis.SECOND;
let closure_17 = 5 * DurationsDefault.Millis.SECOND;
const MINUTE = DurationsDefault.Millis.MINUTE;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function BugReportModal(arg0) {
  let intl;
  let obj4;
  let screenshot;
  let screenshotUri;
  const obj = react2;
  const cResult = obj.c(5);
  ({ screenshotUri, screenshot } = arg0);
  if (cResult[0] === screenshot) {
    let tmp4;
    let tmp5;
    if (cResult[1] === screenshotUri) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { screens: tmp4, initialRouteName: "BUG_REPORT_CREATE" };
      const tmp7 = authStore(Navigator.Navigator, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp7;
      tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj3 = { BUG_REPORT_CREATE: obj4 };
  obj4 = { title: intl.string(intl13.t.mCCdwi), initialParams: { screenshotUri, screenshot }, ignoreKeyboard: true, render };
  intl = tmp(1128).intl;
  cResult[0] = screenshot;
  cResult[1] = screenshotUri;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : (function BugReportModal(screenshotUri) {
  screenshotUri = screenshotUri.screenshotUri;
  const screenshot = screenshotUri.screenshot;
  const items = [screenshotUri, screenshot];
  const screens = react.useMemo(() => {
    let intl;
    let obj3;
    let obj = { screenshotUri, screenshot };
    const obj2 = { BUG_REPORT_CREATE: obj3 };
    obj3 = { title: intl.string(intl13.t.mCCdwi), initialParams: obj, ignoreKeyboard: true, render };
    intl = intl13.intl;
    return obj2;
  }, items);
  return closure_10(screenshotUri(7095).Navigator, { screens, initialRouteName: "BUG_REPORT_CREATE" });
});
size = size_mod;
let result = size.fileFinishedImporting("modules/bug_reporter/native/components/BugReporterModal.tsx");

export default tmp6;
export { BugCreateScreen };
