// Module ID: 14819
// Function ID: 14820
// Name: ChangeBannerActionSheet
// Dependencies: [5, 19, 17, 8284, 1085, 21, 5092, 587, 558, 576, 6851, 4769, 5056, 7768, 14820, 6678, 1126, 9035, 6838, 8579, 14821, 6179, 6264, 6898, 504, 8293, 8310, 8374, 1103, 8288, 14822, 14824, 5088, 1200, 14829, 2]

// Module 14819 (ChangeBannerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6838 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6851 */;
import ActionSheet2 from "ActionSheet" /* 6898 */;
import utils_UploadUtilsDefault from "utils/UploadUtils" /* 7768 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8288 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9035 */;
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton" /* 14821 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14822 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let _require, c2, c3, dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
const View = react_native.View;
({ AnalyticsObjects: metroImportDefault, UPLOAD_BANNER_SIZE: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { label: obj2, sublabel: obj3, nitroWheel: obj4, bannerColor: obj5, selectedColor: { flexDirection: "row", alignItems: "center" }, selectedColorHex: { textTransform: "uppercase" }, rowArrow: { height: 13, width: 8, marginLeft: 10, marginTop: 2 }, upsellButton: obj6, remove: obj7, titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { marginLeft: nativeDefault.space.PX_8 };
obj5 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderWidth: 1, borderRadius: nativeDefault.radii.xs, height: 24, minWidth: 24 };
obj6 = { marginTop: nativeDefault.space.PX_8 };
obj7 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeBannerActionSheet(analyticsLocations) {
  let intl4;
  let isTryItOut;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj13;
  let onBannerChange;
  let onGifBannerSelect;
  let removeText;
  let showRemoveBanner;
  let stringResult2;
  let user;
  let tmp = onBannerChange;
  let obj = onBannerChange(576);
  const cResult = obj.c(63);
  ({ user, onBannerChange } = analyticsLocations);
  ({ onGifBannerSelect, removeText, showRemoveBanner, isTryItOut } = analyticsLocations);
  let tmp4 = undefined !== showRemoveBanner;
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (tmp4) {
    tmp4 = showRemoveBanner;
  }
  const tmp6 = closure_12();
  const analyticsLocations2 = useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations;
  if (cResult[0] === (undefined !== isTryItOut && isTryItOut)) {
    let tmp8;
    let tmp10;
    let tmp12;
    let tmp14;
    let tmp16;
    if (cResult[1] === user) {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== onBannerChange) {
      let closure_0 = _asyncToGenerator(async (arg0, value) => {
        let obj4;
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
            let tmp;
            let base64;
            let originalMd5;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let closure_1 = tmp4;
                tmp = undefined;
                base64 = undefined;
                originalMd5 = undefined;
                const obj3 = ActionSheetActionCreatorsDefault;
                obj3.hideActionSheet();
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj4.openImagePicker(closure_2_8), done: false };
                obj4 = utils_UploadUtilsDefault;
                return obj6;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              tmp = value;
              base64 = tmp.base64;
              originalMd5 = tmp.originalMd5;
              if (null != base64) {
                const obj = { assetOrigin: tmp(dependencyMap[15]).AssetOriginTypes.NEW_ASSET, imageUri: base64, description: "", originalAsset: "Array", originalMd5 };
                const createPendingImage = tmp(dependencyMap[14]).createPendingImage;
                const tmp10 = tmp(dependencyMap[14]);
                tmp(createPendingImage(obj));
              }
              c3 = 3;
              return { value: "IconComponent", done: "+51" };
            }
          } catch (tmp20) {
            c3 = 3;
            throw tmp20;
          }
        }
      });
      function handleBannerUploadSelect() {
        return closure_0(...arguments);
      }
      cResult[3] = onBannerChange;
      cResult[4] = handleBannerUploadSelect;
      tmp10 = handleBannerUploadSelect;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== onBannerChange) {
      function handleBannerDelete() {
        onBannerChange(null);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
      cResult[5] = onBannerChange;
      cResult[6] = handleBannerDelete;
      tmp12 = handleBannerDelete;
    } else {
      tmp12 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.Vgdusv);
      cResult[7] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== tmp8) {
      let tmp17 = tmp8;
      if (tmp17) {
        tmp17 = closure_9(tmp(9035).NitroWheelIcon, {});
      }
      cResult[8] = tmp8;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] === tmp6.titleContainer) {
      if (cResult[11] === tmp6.titleWrapper) {
        let tmp19;
        if (cResult[12] === tmp16) {
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp8) {
          let tmp22;
          let tmp26;
          let tmp28;
          if (cResult[15] === user) {
            tmp22 = cResult[16];
          }
          if (cResult[17] !== tmp4) {
            let stringResult1;
            const intl2 = tmp(1126).intl;
            const string = intl2.string;
            const t = tmp(1126).t;
            if (tmp4) {
              stringResult1 = string(t.N0bC3P);
            } else {
              stringResult1 = string(t["70CYsY"]);
            }
            cResult[17] = tmp4;
            cResult[18] = stringResult1;
            tmp26 = stringResult1;
          } else {
            tmp26 = cResult[18];
          }
          if (cResult[19] !== tmp26) {
            let obj2 = { text: tmp26 };
            const tmp30 = closure_9(tmp(8579).FormLabel, obj2);
            cResult[19] = tmp26;
            cResult[20] = tmp30;
            tmp28 = tmp30;
          } else {
            tmp28 = cResult[20];
          }
          if (cResult[21] === tmp8) {
            let tmp31;
            if (cResult[22] === tmp6.nitroWheel) {
              tmp31 = cResult[23];
            }
            if (cResult[24] === tmp6.label) {
              if (cResult[25] === tmp28) {
                let tmp34;
                let tmp38;
                if (cResult[26] === tmp31) {
                  tmp34 = cResult[27];
                }
                if (cResult[28] !== tmp8) {
                  let string2Result;
                  const intl3 = tmp(1126).intl;
                  const string2 = intl3.string;
                  const t2 = tmp(1126).t;
                  if (tmp8) {
                    string2Result = string2(t2.IhzZlo);
                  } else {
                    string2Result = string2(t2.NSTmdO);
                  }
                  cResult[28] = tmp8;
                  cResult[29] = string2Result;
                  tmp38 = string2Result;
                } else {
                  tmp38 = cResult[29];
                }
                if (cResult[30] === tmp6.sublabel) {
                  let tmp40;
                  if (cResult[31] === tmp38) {
                    tmp40 = cResult[32];
                  }
                  if (cResult[33] === tmp8) {
                    let tmp43;
                    if (cResult[34] === tmp6.upsellButton) {
                      tmp43 = cResult[35];
                    }
                    if (cResult[36] === tmp40) {
                      let tmp48;
                      if (cResult[37] === tmp43) {
                        tmp48 = cResult[38];
                      }
                      let tmp52;
                      if (tmp8) {
                        tmp52 = tmp10;
                      }
                      if (cResult[39] === tmp34) {
                        if (cResult[40] === tmp48) {
                          let tmp53;
                          if (cResult[41] === tmp52) {
                            tmp53 = cResult[42];
                          }
                          if (cResult[43] === tmp8) {
                            let tmp56;
                            if (cResult[44] === onGifBannerSelect) {
                              tmp56 = cResult[45];
                            }
                            if (cResult[46] === tmp12) {
                              if (cResult[47] === removeText) {
                                if (cResult[48] === tmp4) {
                                  if (cResult[49] === tmp6.label) {
                                    let tmp60;
                                    if (cResult[50] === tmp6.remove) {
                                      tmp60 = cResult[51];
                                    }
                                    if (cResult[52] === tmp53) {
                                      if (cResult[53] === tmp56) {
                                        if (cResult[54] === tmp60) {
                                          let tmp65;
                                          if (cResult[55] === tmp22) {
                                            tmp65 = cResult[56];
                                          }
                                          if (cResult[57] === tmp65) {
                                            let tmp68;
                                            if (cResult[58] === tmp19) {
                                              tmp68 = cResult[59];
                                            }
                                            if (cResult[60] === analyticsLocations2) {
                                              let tmp71;
                                              if (cResult[61] === tmp68) {
                                                tmp71 = cResult[62];
                                              }
                                              return tmp71;
                                            }
                                            let obj4 = { value: analyticsLocations2, children: tmp68 };
                                            const tmp73 = closure_9(tmp(6851).AnalyticsLocationProvider, obj4);
                                            cResult[60] = analyticsLocations2;
                                            cResult[61] = tmp68;
                                            cResult[62] = tmp73;
                                            tmp71 = tmp73;
                                          }
                                          let obj5 = { children: items };
                                          items = [tmp19, tmp65];
                                          const tmp70 = closure_10(tmp(6898).ActionSheet, obj5);
                                          cResult[57] = tmp65;
                                          cResult[58] = tmp19;
                                          cResult[59] = tmp70;
                                          tmp68 = tmp70;
                                        }
                                      }
                                    }
                                    let obj6 = { hasIcons: false, children: items1 };
                                    items1 = [tmp22, tmp53, tmp56, tmp60];
                                    const tmp67 = closure_10(tmp(6264).TableRowGroup, obj6);
                                    cResult[52] = tmp53;
                                    cResult[53] = tmp56;
                                    cResult[54] = tmp60;
                                    cResult[55] = tmp22;
                                    cResult[56] = tmp67;
                                    tmp65 = tmp67;
                                  }
                                }
                              }
                            }
                            let tmp62Result = tmp4;
                            if (tmp62Result) {
                              const TableRow2 = tmp(6179).TableRow;
                              let obj7 = { style: items2, text: stringResult2 };
                              items2 = [, ];
                              ({ label: arr3[0], remove: arr3[1] } = tmp6);
                              stringResult2 = removeText;
                              const FormLabel = tmp(8579).FormLabel;
                              if (removeText == null) {
                                const intl5 = tmp(1126).intl;
                                stringResult2 = intl5.string(tmp(1126).t.tT9n7D);
                              }
                              const obj8 = { label: closure_9(FormLabel, obj7), onPress: tmp12 };
                              tmp62Result = tmp62(TableRow2, obj8);
                            }
                            cResult[46] = tmp12;
                            cResult[47] = removeText;
                            cResult[48] = tmp4;
                            cResult[49] = tmp6.label;
                            cResult[50] = tmp6.remove;
                            cResult[51] = tmp62Result;
                            tmp60 = tmp62Result;
                          }
                          let tmp57 = tmp8 && null != onGifBannerSelect;
                          if (tmp57) {
                            const obj9 = { label: intl4.string(tmp(1126).t["xsC+/y"]), onPress: onGifBannerSelect };
                            const TableRow = tmp(6179).TableRow;
                            intl4 = tmp(1126).intl;
                            tmp57 = closure_9(TableRow, obj9);
                          }
                          cResult[43] = tmp8;
                          cResult[44] = onGifBannerSelect;
                          cResult[45] = tmp57;
                          tmp56 = tmp57;
                        }
                      }
                      const obj10 = { label: tmp34, subLabel: tmp48, onPress: tmp52 };
                      const tmp55 = closure_9(tmp(6179).TableRow, obj10);
                      cResult[39] = tmp34;
                      cResult[40] = tmp48;
                      cResult[41] = tmp52;
                      cResult[42] = tmp55;
                      tmp53 = tmp55;
                    }
                    const obj11 = { children: items3 };
                    items3 = [tmp40, tmp43];
                    const tmp51 = closure_10(closure_11, obj11);
                    cResult[36] = tmp40;
                    cResult[37] = tmp43;
                    cResult[38] = tmp51;
                    tmp48 = tmp51;
                  }
                  let tmp44 = !tmp8;
                  if (tmp44) {
                    const obj12 = { style: tmp6.upsellButton, children: closure_9(UserProfileUpsellButtonDefault, obj13) };
                    obj13 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
                    tmp44 = closure_9(View, obj12);
                  }
                  cResult[33] = tmp8;
                  cResult[34] = tmp6.upsellButton;
                  cResult[35] = tmp44;
                  tmp43 = tmp44;
                }
                const obj14 = { style: tmp6.sublabel, numberOfLines: 2, text: tmp38 };
                const tmp42 = closure_9(tmp(8579).FormSubLabel, obj14);
                cResult[30] = tmp6.sublabel;
                cResult[31] = tmp38;
                cResult[32] = tmp42;
                tmp40 = tmp42;
              }
            }
            const obj15 = { style: tmp6.label, children: items4 };
            items4 = [tmp28, tmp31];
            const tmp37 = closure_10(View, obj15);
            cResult[24] = tmp6.label;
            cResult[25] = tmp28;
            cResult[26] = tmp31;
            cResult[27] = tmp37;
            tmp34 = tmp37;
          }
          let tmp32 = !tmp8;
          if (tmp32) {
            const obj16 = { style: tmp6.nitroWheel, size: "sm" };
            tmp32 = closure_9(tmp(9035).NitroWheelIcon, obj16);
          }
          cResult[21] = tmp8;
          cResult[22] = tmp6.nitroWheel;
          cResult[23] = tmp32;
          tmp31 = tmp32;
        }
        let tmp23 = null;
        if (!tmp8) {
          const obj17 = { user };
          tmp23 = closure_9(closure_13, obj17);
        }
        cResult[14] = tmp8;
        cResult[15] = user;
        cResult[16] = tmp23;
        tmp22 = tmp23;
      }
    }
    const tmp20 = closure_9;
    const obj18 = { title: tmp14, trailing: tmp16, titleWrapperStyle: null, titleContainerStyle: null };
    ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp6);
    const tmp21 = closure_9(tmp(6838).BottomSheetTitleHeader, obj18);
    cResult[10] = tmp6.titleContainer;
    cResult[11] = tmp6.titleWrapper;
    cResult[12] = tmp16;
    cResult[13] = tmp21;
    tmp19 = tmp21;
  }
  let result = tmp5;
  if (!result) {
    const tmp7Result = PremiumUtilsDefault;
    result = tmp7Result.canUsePremiumProfileCustomization(user);
  }
  cResult[0] = undefined !== isTryItOut && isTryItOut;
  cResult[1] = user;
  cResult[2] = result;
  tmp8 = result;
}) : (function ChangeBannerActionSheet(analyticsLocations) {
  let ActionSheet;
  let handleBannerUploadSelect;
  let intl;
  let intl4;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj14;
  let onGifBannerSelect;
  let removeText;
  let require;
  let showRemoveBanner;
  let string2Result;
  let stringResult;
  let tmp13;
  let tmp7;
  let user;
  ({ user, onBannerChange: require, onGifBannerSelect, removeText, showRemoveBanner } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (showRemoveBanner === undefined) {
    showRemoveBanner = false;
  }
  let flag = analyticsLocations.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = function _handleBannerUploadSelect2() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
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
          let tmp;
          let base64;
          let originalMd5;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              tmp = undefined;
              base64 = undefined;
              originalMd5 = undefined;
              const obj3 = tmp4(c2[12]);
              obj3.hideActionSheet();
              const obj4 = tmp4(c2[13]);
              c2 = 1;
              c3 = 1;
              const obj6 = { value: obj4.openImagePicker(closure_1_8), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            base64 = tmp.base64;
            originalMd5 = tmp.originalMd5;
            if (null != base64) {
              obj = { assetOrigin: tmp(c2[15]).AssetOriginTypes.NEW_ASSET, imageUri: base64, description: "", originalAsset: "Array", originalMd5 };
              const createPendingImage = tmp(c2[14]).createPendingImage;
              const tmp10 = tmp(c2[14]);
              closure_129_0(createPendingImage(obj));
            }
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp20) {
          c3 = 3;
          throw tmp20;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_12();
  const tmp3 = dependencyMap;
  const analyticsLocations2 = obj(6851)(analyticsLocations).analyticsLocations;
  if (!flag) {
    const tmp2Result = obj(4769);
    flag = tmp2Result.canUsePremiumProfileCustomization(user);
  }
  const tmp4 = closure_9;
  obj = { value: analyticsLocations2, children: tmp6(ActionSheet, obj14) };
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  ActionSheet = ActionSheet2.ActionSheet;
  let obj2 = { title: intl.string(intl6.t.Vgdusv), trailing: tmp7, titleWrapperStyle: null, titleContainerStyle: null };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl6.intl;
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  tmp7 = flag && tmp4(NitroWheelIcon.NitroWheelIcon, {});
  const items = [tmp4(BottomSheetTitleHeader, obj2), ];
  let tmp4Result = null;
  const TableRowGroup = tmp5(6264).TableRowGroup;
  if (!flag) {
    let obj4 = { user };
    tmp4Result = tmp4(closure_13, obj4);
  }
  const items1 = [tmp4Result, , , ];
  let tmp10 = View;
  let obj5 = { style: tmp.label, children: items2 };
  const TableRow = tmp5(6179).TableRow;
  const FormLabel = tmp5(8579).FormLabel;
  const intl2 = tmp5(1126).intl;
  const string = intl2.string;
  const t = tmp5(1126).t;
  if (showRemoveBanner) {
    stringResult = string(t.N0bC3P);
  } else {
    stringResult = string(t["70CYsY"]);
  }
  items2 = [tmp4(FormLabel, { text: stringResult }), ];
  let tmp4Result3 = !flag;
  if (tmp4Result3) {
    let obj6 = { style: tmp.nitroWheel, size: "sm" };
    tmp4Result3 = tmp4(tmp5(9035).NitroWheelIcon, obj6);
  }
  let obj7 = { label: tmp6(tmp10, obj5), subLabel: tmp6(tmp13, { children: items3 }), onPress: handleBannerUploadSelect };
  items2[1] = tmp4Result3;
  const obj8 = { style: tmp.sublabel, numberOfLines: 2, text: string2Result };
  const FormSubLabel = tmp5(8579).FormSubLabel;
  const intl3 = tmp5(1126).intl;
  const string2 = intl3.string;
  const t2 = tmp5(1126).t;
  tmp13 = closure_11;
  if (flag) {
    string2Result = string2(t2.IhzZlo);
  } else {
    string2Result = string2(t2.NSTmdO);
  }
  items3 = [tmp4(FormSubLabel, obj8), ];
  let tmp4Result4 = !flag;
  if (tmp4Result4) {
    const obj9 = { style: tmp.upsellButton, children: tmp4(obj(14821), obj10) };
    obj10 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
    tmp4Result4 = tmp4(tmp10, obj9);
  }
  items3[1] = tmp4Result4;
  handleBannerUploadSelect = undefined;
  if (flag) {
    handleBannerUploadSelect = function handleBannerUploadSelect() {
      return obj(...arguments);
    };
  }
  items1[1] = tmp4(TableRow, obj7);
  if (flag) {
    flag = null != onGifBannerSelect;
  }
  if (flag) {
    const obj11 = { label: intl4.string(intl6.t["xsC+/y"]), onPress: onGifBannerSelect };
    const TableRow2 = tmp5(6179).TableRow;
    intl4 = tmp5(1126).intl;
    flag = tmp4(TableRow2, obj11);
  }
  items1[2] = flag;
  if (showRemoveBanner) {
    const TableRow3 = tmp5(6179).TableRow;
    const obj12 = { style: items4, text: removeText };
    items4 = [, ];
    ({ label: arr5[0], remove: arr5[1] } = tmp);
    const FormLabel2 = tmp5(8579).FormLabel;
    if (removeText == null) {
      const intl5 = tmp5(1126).intl;
      removeText = intl5.string(tmp5(1126).t.tT9n7D);
    }
    const obj13 = {
      label: tmp4(FormLabel2, obj12),
      onPress: function handleBannerDelete() {
          _require(null);
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
    };
    showRemoveBanner = tmp4(TableRow3, obj13);
  }
  obj14 = { children: items };
  items1[3] = showRemoveBanner;
  items[1] = closure_10(TableRowGroup, { hasIcons: false, children: items1 });
  return tmp4(AnalyticsLocationProvider, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeBannerColorRow(user) {
  let closure_0;
  let items1;
  let onSelect;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingChanges;
  let tmp14;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(31);
  user = user.user;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function s() {
      return pendingChanges.getPendingChanges();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
  const obj2 = { userId: user.id, image: pendingAvatar };
  const tmpResult6 = tmp(8293);
  let pendingAvatarSrc = tmpResult6.getPendingAvatarSrc(obj2);
  const tmp11 = pendingAccentColor(8310)(user.id);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  const tmpResult7 = tmp(8374);
  const memoizedImageSourceResult = tmpResult7.memoizedImageSource(pendingAvatarSrc);
  const tmpResult8 = tmp(8374);
  const dominantColorFromImage = tmpResult8.useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult);
  if (cResult[2] !== dominantColorFromImage) {
    const tmpResult9 = tmp(1103);
    const rgb2intResult = tmpResult9.rgb2int(dominantColorFromImage);
    cResult[2] = dominantColorFromImage;
    cResult[3] = rgb2intResult;
    tmp14 = rgb2intResult;
  } else {
    tmp14 = cResult[3];
  }
  _require = tmp14;
  if (undefined === pendingAccentColor) {
    let primaryColor;
    if (tmp11 != null) {
      primaryColor = tmp11.primaryColor;
    }
    pendingAccentColor = primaryColor;
  }
  if (pendingAccentColor == null) {
    pendingAccentColor = tmp14;
  }
  if (pendingAccentColor == null) {
    pendingAccentColor = 0;
  }
  if (cResult[4] !== tmp14) {
    const fn2 = function _(arg0) {
      let tmp = arg0;
      if (arg0 === closure_0) {
        tmp = null;
      }
      const obj = UserProfileSettingsActionCreators;
      obj.setPendingChanges({ accentColor: tmp });
    };
    cResult[4] = tmp14;
    cResult[5] = fn2;
    tmp17 = fn2;
  } else {
    tmp17 = cResult[5];
  }
  dependencyMap = tmp17;
  if (cResult[6] === pendingAccentColor) {
    let tmp18;
    let tmp19;
    let tmp21;
    if (cResult[7] === tmp17) {
      tmp18 = cResult[8];
    }
    const _Symbol = Symbol;
    const label = tmp4.label;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.xzNfPz);
      cResult[9] = stringResult;
      tmp19 = stringResult;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] !== tmp4.label) {
      const obj3 = { style: label, text: tmp19 };
      const tmp23 = closure_9(tmp(8579).FormLabel, obj3);
      cResult[10] = tmp4.label;
      cResult[11] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    if (cResult[12] === pendingAccentColor) {
      let tmp25;
      let tmp28;
      if (cResult[13] === tmp4.bannerColor) {
        tmp25 = cResult[14];
      }
      const selectedColorHex = tmp4.selectedColorHex;
      if (cResult[15] !== pendingAccentColor) {
        const tmpResult10 = tmp(1103);
        const int2hexResult = tmpResult10.int2hex(pendingAccentColor);
        cResult[15] = pendingAccentColor;
        cResult[16] = int2hexResult;
        tmp28 = int2hexResult;
      } else {
        tmp28 = cResult[16];
      }
      if (cResult[17] === tmp4.selectedColorHex) {
        let tmp30;
        let tmp33;
        if (cResult[18] === tmp28) {
          tmp30 = cResult[19];
        }
        if (cResult[20] !== tmp4.rowArrow) {
          const obj4 = { style: tmp4.rowArrow, size: tmp(1200).Icon.Sizes.CUSTOM, source: pendingAccentColor(14829) };
          const Icon = tmp(1200).Icon;
          const tmp35 = closure_9(Icon, obj4);
          cResult[20] = tmp4.rowArrow;
          cResult[21] = tmp35;
          tmp33 = tmp35;
        } else {
          tmp33 = cResult[21];
        }
        if (cResult[22] === tmp4.selectedColor) {
          if (cResult[23] === tmp25) {
            if (cResult[24] === tmp30) {
              let tmp36;
              if (cResult[25] === tmp33) {
                tmp36 = cResult[26];
              }
              if (cResult[27] === tmp18) {
                if (cResult[28] === tmp36) {
                  let tmp40;
                  if (cResult[29] === tmp21) {
                    tmp40 = cResult[30];
                  }
                  return tmp40;
                }
              }
              const obj5 = { label: tmp21, trailing: tmp36, onPress: tmp18 };
              const tmp42 = closure_9(tmp(6179).TableRow, obj5);
              cResult[27] = tmp18;
              cResult[28] = tmp36;
              cResult[29] = tmp21;
              cResult[30] = tmp42;
              tmp40 = tmp42;
            }
          }
        }
        const obj6 = { style: tmp24, children: items1 };
        items1 = [tmp25, tmp30, tmp33];
        const tmp39 = closure_10(View, obj6);
        cResult[22] = tmp4.selectedColor;
        cResult[23] = tmp25;
        cResult[24] = tmp30;
        cResult[25] = tmp33;
        cResult[26] = tmp39;
        tmp36 = tmp39;
      }
      const obj7 = { style: selectedColorHex, variant: "text-md/medium", color: "interactive-text-default", children: tmp28 };
      const tmp32 = closure_9(tmp(5088).Text, obj7);
      cResult[17] = tmp4.selectedColorHex;
      cResult[18] = tmp28;
      cResult[19] = tmp32;
      tmp30 = tmp32;
    }
    const obj8 = { style: tmp4.bannerColor, color: pendingAccentColor };
    const tmp27 = closure_9(pendingAccentColor(14824), obj8);
    cResult[12] = pendingAccentColor;
    cResult[13] = tmp4.bannerColor;
    cResult[14] = tmp27;
    tmp25 = tmp27;
  }
  function handleChangeColor() {
    const obj = { color: pendingAccentColor, onSelect };
    showCustomColorPickerActionSheetDefault(obj);
  }
  cResult[6] = pendingAccentColor;
  cResult[7] = tmp17;
  cResult[8] = handleChangeColor;
  tmp18 = handleChangeColor;
}) : (function ChangeBannerColorRow(user) {
  let FormLabel;
  let c0;
  let intl;
  let items2;
  let obj5;
  let obj6;
  let onSelect;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingChanges;
  let tmp2Result6;
  user = user.user;
  _require = undefined;
  pendingAccentColor = undefined;
  dependencyMap = undefined;
  let tmp = closure_12();
  let obj = require("get initialized");
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => pendingChanges.getPendingChanges());
  ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
  const obj2 = require("RecentAvatarUtils");
  const obj3 = { userId: user.id, image: pendingAvatar };
  let pendingAvatarSrc = obj2.getPendingAvatarSrc(obj3);
  const tmp7 = pendingAccentColor(8310)(user.id);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  const tmp2Result = require("VideoBackground");
  const memoizedImageSourceResult = tmp2Result.memoizedImageSource(pendingAvatarSrc);
  const rgb2int = require("utils/ColorUtils").rgb2int;
  require("utils/ColorUtils");
  const tmp2Result5 = require("VideoBackground");
  const rgb2intResult = rgb2int(tmp2Result5.useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult));
  _require = rgb2intResult;
  if (undefined === pendingAccentColor) {
    let primaryColor;
    if (tmp7 != null) {
      primaryColor = tmp7.primaryColor;
    }
    pendingAccentColor = primaryColor;
  }
  if (pendingAccentColor == null) {
    pendingAccentColor = rgb2intResult;
  }
  if (pendingAccentColor == null) {
    pendingAccentColor = 0;
  }
  const items1 = [rgb2intResult];
  dependencyMap = react.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 === c0) {
      tmp = null;
    }
    const obj = UserProfileSettingsActionCreators;
    obj.setPendingChanges({ accentColor: tmp });
  }, items1);
  const obj4 = {
    label: closure_9(FormLabel, obj5),
    trailing: closure_10(View, obj6),
    onPress: function handleChangeColor() {
      const obj = { color: pendingAccentColor, onSelect };
      showCustomColorPickerActionSheetDefault(obj);
    }
  };
  const TableRow = tmp2(6179).TableRow;
  obj5 = { style: tmp.label, text: intl.string(require("intl").t.xzNfPz) };
  FormLabel = tmp2(8579).FormLabel;
  intl = tmp2(1126).intl;
  obj6 = { style: tmp.selectedColor, children: items2 };
  items2 = [, , ];
  const obj7 = { style: tmp.bannerColor, color: pendingAccentColor };
  items2[0] = closure_9(pendingAccentColor(14824), obj7);
  const obj8 = { style: tmp.selectedColorHex, variant: "text-md/medium", color: "interactive-text-default", children: tmp2Result6.int2hex(pendingAccentColor) };
  const Text = tmp2(5088).Text;
  tmp2Result6 = require("utils/ColorUtils");
  items2[1] = closure_9(Text, obj8);
  const obj9 = { style: tmp.rowArrow, size: require("native").Icon.Sizes.CUSTOM, source: pendingAccentColor(14829) };
  const Icon = tmp2(1200).Icon;
  items2[2] = closure_9(Icon, obj9);
  return closure_9(TableRow, obj4);
});
let result = size.fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default tmp5;
