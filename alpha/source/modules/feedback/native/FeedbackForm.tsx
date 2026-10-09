// Module ID: 9623
// Function ID: 9624
// Name: FeedbackForm
// Dependencies: [32, 19, 9621, 21, 5091, 587, 558, 576, 5929, 12, 9624, 5393, 8563, 5087, 6188, 9625, 1126, 2]

// Module 9623 (FeedbackForm)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 9621 */;
import FeedbackUtils from "FeedbackUtils" /* 9624 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
let FeedbackRating = Constants.FeedbackRating;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { ratingsLabel: { textAlign: "center" }, reasonsHeader: { marginBottom: 8 }, reasonsList: { overflow: "hidden", marginBottom: 12, padding: 0 }, reason: obj2, doNotShowAgainContainer: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: 0, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FeedbackForm(otherKey) {
  let Checkbox;
  let Label;
  let arr;
  let closure_5;
  let closure_6;
  let intl;
  let items;
  let items1;
  let obj6;
  let obj7;
  let onFeedbackChanged;
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showDoNotShowAgainCheckbox;
  let tmp25;
  let tmp7;
  let tmp = reasons;
  let tmp2 = onFeedbackChanged;
  let obj = reasons(onFeedbackChanged[7]);
  const cResult = obj.c(48);
  ({ showDoNotShowAgainCheckbox, ratingsBodyLabel, reasonsHeaderLabel, reasons } = otherKey);
  otherKey = otherKey.otherKey;
  onFeedbackChanged = otherKey.onFeedbackChanged;
  const trackOpen = otherKey.trackOpen;
  const tmp4 = closure_8();
  react = tmp4;
  const tmp6 = otherKey(onFeedbackChanged[8])(reasons);
  FeedbackRating = tmp6;
  if (cResult[0] !== reasons) {
    const tmp5Result = otherKey(tmp2[9]);
    const shuffleResult = tmp5Result.shuffle(reasons);
    cResult[0] = reasons;
    cResult[1] = shuffleResult;
    tmp7 = shuffleResult;
  } else {
    tmp7 = cResult[1];
  }
  let obj3 = react;
  [arr, closure_6] = trackOpen(react.useState(tmp7), 2);
  trackOpen(react.useState(tmp7), 2);
  const tmp9 = trackOpen;
  if (cResult[2] === otherKey) {
    if (cResult[3] === tmp6) {
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp18;
      if (cResult[4] === reasons) {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const effect = obj3.useEffect(tmp11, tmp12);
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {};
        cResult[7] = obj2;
        tmp15 = obj2;
      } else {
        tmp15 = cResult[7];
      }
      const tmp9Result = tmp9(obj3.useState(tmp15), 2);
      const first = tmp9Result[0];
      closure_8 = tmp9Result[1];
      if (cResult[8] !== trackOpen) {
        const fn2 = function _() {
          trackOpen();
        };
        cResult[8] = trackOpen;
        cResult[9] = fn2;
        tmp18 = fn2;
      } else {
        tmp18 = cResult[9];
      }
      otherKey(tmp2[11])(tmp18);
      if (cResult[10] === first) {
        let tmp20;
        if (cResult[11] === onFeedbackChanged) {
          tmp20 = cResult[12];
        }
        if (cResult[13] === first) {
          let tmp21;
          if (cResult[14] === onFeedbackChanged) {
            tmp21 = cResult[15];
          }
          if (cResult[16] === first) {
            let tmp22;
            let tmp24;
            let tmp23;
            if (cResult[17] === onFeedbackChanged) {
              tmp22 = cResult[18];
            }
            let closure_9 = tmp22;
            if (cResult[19] === tmp22) {
              if (cResult[20] === arr) {
                if (cResult[21] === tmp4) {
                  tmp23 = cResult[22];
                }
                if (cResult[27] === (null != first.rating && first.rating !== FeedbackRating.GOOD)) {
                  if (cResult[28] === tmp23) {
                    if (cResult[29] === reasonsHeaderLabel) {
                      let tmp30;
                      if (cResult[30] === tmp4) {
                        tmp30 = cResult[31];
                      }
                      if (cResult[32] === ratingsBodyLabel) {
                        let tmp34;
                        if (cResult[33] === tmp4) {
                          tmp34 = cResult[34];
                        }
                        let rating = first.rating;
                        if (rating == null) {
                          rating = null;
                        }
                        if (cResult[35] === tmp21) {
                          let tmp38;
                          if (cResult[36] === rating) {
                            tmp38 = cResult[37];
                          }
                          if (cResult[38] === first.doNotShowAgain) {
                            if (cResult[39] === tmp20) {
                              if (cResult[40] === showDoNotShowAgainCheckbox) {
                                let tmp41;
                                if (cResult[41] === tmp4) {
                                  tmp41 = cResult[42];
                                }
                                if (cResult[43] === tmp30) {
                                  if (cResult[44] === tmp34) {
                                    if (cResult[45] === tmp38) {
                                      let tmp44;
                                      if (cResult[46] === tmp41) {
                                        tmp44 = cResult[47];
                                      }
                                      return tmp44;
                                    }
                                  }
                                }
                                const obj4 = { children: items };
                                items = [tmp34, tmp38, tmp30, tmp41];
                                const tmp46 = first(obj3.Fragment, obj4);
                                cResult[43] = tmp30;
                                cResult[44] = tmp34;
                                cResult[45] = tmp38;
                                cResult[46] = tmp41;
                                cResult[47] = tmp46;
                                tmp44 = tmp46;
                              }
                            }
                          }
                          let tmp43Result = null;
                          if (showDoNotShowAgainCheckbox) {
                            const obj5 = { style: tmp4.doNotShowAgainContainer, leading: closure_6(Checkbox, obj6), label: closure_6(Label, obj7), onPress: tmp20 };
                            let FormRow = tmp(tmp2[12]).FormRow;
                            let flag = first.doNotShowAgain;
                            Checkbox = tmp(tmp2[12]).FormRow.Checkbox;
                            if (flag == null) {
                              flag = false;
                            }
                            obj6 = { selected: flag };
                            obj7 = { text: intl.string(tmp(tmp2[16]).t["5E9SB9"]) };
                            Label = tmp(tmp2[12]).FormRow.Label;
                            intl = tmp(tmp2[16]).intl;
                            tmp43Result = tmp43(FormRow, obj5);
                          }
                          cResult[38] = first.doNotShowAgain;
                          cResult[39] = tmp20;
                          cResult[40] = showDoNotShowAgainCheckbox;
                          cResult[41] = tmp4;
                          cResult[42] = tmp43Result;
                          tmp41 = tmp43Result;
                        }
                        const obj8 = { selectedRating: rating, onChangeRating: tmp21 };
                        const tmp40 = closure_6(otherKey(tmp2[15]), obj8);
                        cResult[35] = tmp21;
                        cResult[36] = rating;
                        cResult[37] = tmp40;
                        tmp38 = tmp40;
                      }
                      let tmp35 = null;
                      if (null != ratingsBodyLabel) {
                        const obj9 = { style: tmp4.ratingsLabel, variant: "heading-md/semibold", color: "text-default", children: ratingsBodyLabel };
                        tmp35 = closure_6(tmp(tmp2[13]).Text, obj9);
                      }
                      cResult[32] = ratingsBodyLabel;
                      cResult[33] = tmp4;
                      cResult[34] = tmp35;
                      tmp34 = tmp35;
                    }
                  }
                }
                let tmp31 = null;
                if (null != first.rating && first.rating !== FeedbackRating.GOOD) {
                  let Fragment = obj3.Fragment;
                  const obj10 = { children: items1 };
                  const obj11 = { style: tmp4.reasonsHeader, variant: "eyebrow", color: "text-default", children: reasonsHeaderLabel };
                  items1 = [closure_6(tmp(tmp2[13]).Text, obj11), ];
                  const obj12 = { border: "subtle", style: tmp4.reasonsList, children: tmp23 };
                  items1[1] = closure_6(tmp(tmp2[14]).Card, obj12);
                  tmp31 = first(Fragment, obj10);
                }
                cResult[27] = null != first.rating && first.rating !== FeedbackRating.GOOD;
                cResult[28] = tmp23;
                cResult[29] = reasonsHeaderLabel;
                cResult[30] = tmp4;
                cResult[31] = tmp31;
                tmp30 = tmp31;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor(label) {
                  return Boolean(label.label);
                }
              }
              cResult[23] = V;
              tmp24 = V;
            } else {
              class V {
                constructor(label) {
                  return Boolean(label.label);
                }
              }
            }
            if (cResult[24] === tmp22) {
              class V {
                constructor(label) {
                  return Boolean(label.label);
                }
              }
              const found = arr.filter(tmp24);
              const mapped = found.map(tmp25);
              cResult[19] = tmp22;
              cResult[20] = arr;
              cResult[21] = tmp4;
              cResult[22] = mapped;
              tmp23 = mapped;
            }
            const fn4 = function q(label, arg1) {
              let items;
              let obj3;
              let closure_0 = label;
              let tmp2 = null;
              const Fragment = React.Fragment;
              const tmp = first;
              if (arg1 > 0) {
                tmp2 = closure_6(reasons(onFeedbackChanged[12]).FormDivider, {});
              }
              const obj = { children: items };
              items = [tmp2, ];
              const obj2 = {
                labelStyle: React.reason,
                label: closure_6(reasons(onFeedbackChanged[12]).FormLabel, obj3),
                onPress() {
                  return closure_9(label);
                }
              };
              const FormRow = reasons(onFeedbackChanged[12]).FormRow;
              obj3 = { text: label.label, numberOfLines: 2 };
              items[1] = closure_6(FormRow, obj2);
              return tmp(Fragment, obj, arg1);
            };
            cResult[24] = tmp22;
            cResult[25] = tmp4;
            cResult[26] = fn4;
            tmp25 = fn4;
          }
          function handlePressReason(reason) {
            const obj = { reason };
            const merged = Object.assign(first);
            closure_8(obj);
            onFeedbackChanged(obj);
          }
          cResult[16] = first;
          cResult[17] = onFeedbackChanged;
          cResult[18] = handlePressReason;
          tmp22 = handlePressReason;
        }
        function handleChangeRating(rating) {
          let reason = null;
          if (rating !== FeedbackRating.GOOD) {
            reason = first.reason;
          }
          const obj = { rating, reason };
          const merged = Object.assign(first);
          closure_8(obj);
          onFeedbackChanged(obj);
        }
        cResult[13] = first;
        cResult[14] = onFeedbackChanged;
        cResult[15] = handleChangeRating;
        tmp21 = handleChangeRating;
      }
      const fn3 = function p() {
        let flag = first.doNotShowAgain;
        if (flag == null) {
          flag = false;
        }
        const obj = { doNotShowAgain: !flag };
        const merged = Object.assign(tmp);
        closure_8(obj);
        onFeedbackChanged(first);
      };
      cResult[10] = first;
      cResult[11] = onFeedbackChanged;
      cResult[12] = fn3;
      tmp20 = fn3;
    }
  }
  const fn = function y() {
    const obj = _modDef12;
    const tmp2 = reasons;
    if (!obj.isEqual(closure_5, reasons)) {
      const obj2 = FeedbackUtils;
      closure_6(obj2.shuffleProblems(tmp2, otherKey));
    }
  };
  const items2 = [reasons, tmp6, otherKey];
  cResult[2] = otherKey;
  cResult[3] = tmp6;
  cResult[4] = reasons;
  cResult[5] = fn;
  cResult[6] = items2;
  tmp12 = items2;
  tmp11 = fn;
}) : (function FeedbackForm(otherKey) {
  let Checkbox;
  let Label;
  let _undefined;
  let arr;
  let c6;
  let closure_5;
  let intl;
  let items2;
  let obj8;
  let obj9;
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showDoNotShowAgainCheckbox;
  ({ ratingsBodyLabel, reasons } = otherKey);
  otherKey = otherKey.otherKey;
  const onFeedbackChanged = otherKey.onFeedbackChanged;
  const trackOpen = otherKey.trackOpen;
  c6 = undefined;
  closure_8 = undefined;
  ({ showDoNotShowAgainCheckbox, reasonsHeaderLabel } = otherKey);
  let tmp = closure_8();
  react = tmp;
  const tmp3 = onFeedbackChanged;
  let tmp2 = otherKey;
  const tmp4 = otherKey(onFeedbackChanged[8])(reasons);
  FeedbackRating = tmp4;
  const useState = react.useState;
  let obj = otherKey(onFeedbackChanged[9]);
  [arr, c6] = trackOpen(useState(obj.shuffle(reasons)), 2);
  let items = [reasons, tmp4, otherKey];
  const tmp6 = trackOpen(useState(obj.shuffle(reasons)), 2);
  const effect = react.useEffect(() => {
    const obj = _modDef12;
    const tmp2 = reasons;
    if (!obj.isEqual(closure_5, reasons)) {
      const obj2 = FeedbackUtils;
      _undefined(obj2.shuffleProblems(tmp2, otherKey));
    }
  }, items);
  const tmp8 = trackOpen(react.useState({}), 2);
  const first = tmp8[0];
  closure_8 = tmp8[1];
  otherKey(onFeedbackChanged[11])(() => {
    trackOpen();
  });
  const items1 = [first, onFeedbackChanged];
  const callback = react.useCallback(() => {
    let flag = first.doNotShowAgain;
    if (flag == null) {
      flag = false;
    }
    const obj = { doNotShowAgain: !flag };
    const merged = Object.assign(tmp);
    closure_8(obj);
    onFeedbackChanged(first);
  }, items1);
  const found = arr.filter((label) => Boolean(label.label));
  let tmp14 = null;
  if (null != first.rating) {
    tmp14 = null;
    if (first.rating !== FeedbackRating.GOOD) {
      let obj2 = { children: items2 };
      const Fragment2 = tmp5.Fragment;
      let obj3 = { style: tmp.reasonsHeader, variant: "eyebrow", color: "text-default", children: reasonsHeaderLabel };
      items2 = [c6(reasons(tmp3[13]).Text, obj3), ];
      const obj4 = { border: "subtle", style: tmp.reasonsList, children: tmp13 };
      items2[1] = c6(reasons(tmp3[14]).Card, obj4);
      tmp14 = first(Fragment2, obj2);
    }
  }
  let tmp17 = null;
  let Fragment = tmp5.Fragment;
  const tmp16 = first;
  if (null != ratingsBodyLabel) {
    const obj5 = { style: tmp.ratingsLabel, variant: "heading-md/semibold", color: "text-default", children: ratingsBodyLabel };
    tmp17 = c6(reasons(tmp3[13]).Text, obj5);
  }
  const children = [tmp17, , , ];
  let rating = first.rating;
  const tmp2Result = tmp2(tmp3[15]);
  if (rating == null) {
    rating = null;
  }
  const obj6 = {
    selectedRating: rating,
    onChangeRating: function handleChangeRating(rating) {
      let reason = null;
      if (rating !== FeedbackRating.GOOD) {
        reason = first.reason;
      }
      const obj = { rating, reason };
      const merged = Object.assign(first);
      closure_8(obj);
      onFeedbackChanged(obj);
    }
  };
  children[1] = c6(tmp2Result, obj6);
  children[2] = tmp14;
  let tmp20Result = null;
  if (showDoNotShowAgainCheckbox) {
    const obj7 = { style: tmp.doNotShowAgainContainer, leading: c6(Checkbox, obj8), label: c6(Label, obj9), onPress: callback };
    let FormRow = reasons(tmp3[12]).FormRow;
    let flag = first.doNotShowAgain;
    Checkbox = reasons(tmp3[12]).FormRow.Checkbox;
    if (flag == null) {
      flag = false;
    }
    obj8 = { selected: flag };
    obj9 = { text: intl.string(reasons(tmp3[16]).t["5E9SB9"]) };
    Label = tmp24(tmp3[12]).FormRow.Label;
    intl = tmp24(tmp3[16]).intl;
    tmp20Result = tmp20(FormRow, obj7);
  }
  children[3] = tmp20Result;
  return tmp16(Fragment, { children });
});
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackForm.tsx");

export const FeedbackForm = tmp4;
