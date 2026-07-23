// Module ID: 112
// Function ID: 1614
// Name: View
// Dependencies: [29, 113, 31, 33, 114, 79, 115]

// Module 112 (View)
import _objectWithoutProperties from "_objectWithoutProperties";
import _objectDestructuringEmpty from "_objectDestructuringEmpty";
import { use } from "result";
import { jsx } from "jsxProd";

let closure_3 = ["accessibilityState", "accessibilityValue", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-selected", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "id", "tabIndex"];
let closure_4 = ["accessibilityElementsHidden", "accessibilityLabel", "accessibilityLabelledBy", "accessibilityLiveRegion", "accessibilityState", "accessibilityValue", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-selected", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "focusable", "id", "importantForAccessibility", "nativeID", "tabIndex"];
const forwardRefResult = require("result").forwardRef(function View_withRef(arg0, ref) {
  let accessibilityElementsHidden;
  let accessibilityLabel;
  let accessibilityLabelledBy;
  let accessibilityLiveRegion;
  let accessibilityState;
  let accessibilityState2;
  let accessibilityValue;
  let accessibilityValue2;
  let focusable;
  let id;
  let id2;
  let nativeID;
  let str;
  let str5;
  let tabIndex;
  let tabIndex2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp4;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = globalThis;
  callback2(arg0);
  const merged = Object.assign({}, arg0);
  let obj1 = importAll(79);
  if (obj1.reduceDefaultPropsInView()) {
    ({ accessibilityState: accessibilityState2, accessibilityValue: accessibilityValue2, aria-busy: tmp37, aria-checked: tmp38, aria-disabled: tmp39, aria-expanded: tmp40, aria-hidden: tmp41, aria-label: tmp42, aria-labelledby: str5, aria-live: tmp43, aria-selected: tmp44, aria-valuemax: tmp45, aria-valuemin: tmp46, aria-valuenow: tmp47, aria-valuetext: tmp48, id: id2, tabIndex: tabIndex2 } = merged);
    const tmp51 = callback(merged, closure_3);
    let parts;
    if (null != str5) {
      parts = str5.split(/\s*,\s*/g);
    }
    if (undefined !== parts) {
      tmp51.accessibilityLabelledBy = parts;
    }
    if (undefined !== tmp42) {
      tmp51.accessibilityLabel = tmp42;
    }
    if (undefined !== tmp43) {
      let str6 = "none";
      if ("off" !== tmp43) {
        str6 = tmp43;
      }
      tmp51.accessibilityLiveRegion = str6;
    }
    if (undefined !== tmp41) {
      tmp51.accessibilityElementsHidden = tmp41;
      if (true === tmp41) {
        tmp51.importantForAccessibility = "no-hide-descendants";
      }
    }
    if (undefined !== id2) {
      tmp51.nativeID = id2;
    }
    if (undefined !== tabIndex2) {
      tmp51.focusable = !tabIndex2;
    }
    if (!tmp54) {
      obj = {};
      if (null == tmp37) {
        let busy;
        if (null != accessibilityState2) {
          busy = accessibilityState2.busy;
        }
      }
      obj.busy = tmp37;
      if (null == tmp38) {
        let checked;
        if (null != accessibilityState2) {
          checked = accessibilityState2.checked;
        }
      }
      obj.checked = tmp38;
      if (null == tmp39) {
        let disabled;
        if (null != accessibilityState2) {
          disabled = accessibilityState2.disabled;
        }
      }
      obj.disabled = tmp39;
      if (null == tmp40) {
        let expanded;
        if (null != accessibilityState2) {
          expanded = accessibilityState2.expanded;
        }
      }
      obj.expanded = tmp40;
      if (null == tmp44) {
        let selected;
        if (null != accessibilityState2) {
          selected = accessibilityState2.selected;
        }
      }
      obj.selected = tmp44;
      tmp51.accessibilityState = obj;
    }
    if (!tmp60) {
      obj = {};
      if (null == tmp45) {
        let max;
        if (null != accessibilityValue2) {
          max = accessibilityValue2.max;
        }
      }
      obj.max = tmp45;
      if (null == tmp46) {
        let min;
        if (null != accessibilityValue2) {
          min = accessibilityValue2.min;
        }
      }
      obj.min = tmp46;
      if (null == tmp47) {
        let now;
        if (null != accessibilityValue2) {
          now = accessibilityValue2.now;
        }
      }
      obj.now = tmp47;
      if (null == tmp48) {
        let text;
        if (null != accessibilityValue2) {
          text = accessibilityValue2.text;
        }
      }
      obj.text = tmp48;
      tmp51.accessibilityValue = obj;
    }
    if (null == ref) {
      const _Object2 = obj.Object;
      obj = {};
      obj1 = _Object2.assign(obj, tmp51);
    } else {
      const _Object = Object;
      const obj2 = { ref };
      obj1 = Object.assign({}, tmp51, obj2);
    }
    jsx(importDefault(115), obj1);
    tmp54 = null == accessibilityState2 && null == tmp37 && null == tmp38 && null == tmp39 && null == tmp40 && null == tmp44;
    tmp60 = null == accessibilityValue2 && null == tmp45 && null == tmp46 && null == tmp47 && null == tmp48;
    const tmp65 = jsx;
    const tmp68 = importDefault(115);
  } else {
    ({ accessibilityElementsHidden, accessibilityLabel, accessibilityLabelledBy, accessibilityLiveRegion, accessibilityState, accessibilityValue, aria-busy: tmp4, aria-checked: tmp5, aria-disabled: tmp6, aria-expanded: tmp7, aria-hidden: tmp8, aria-label: tmp9, aria-labelledby: str, aria-live: tmp10, aria-selected: tmp11, aria-valuemax: tmp12, aria-valuemin: tmp13, aria-valuenow: tmp14, aria-valuetext: tmp15, focusable, id, nativeID, tabIndex } = merged);
    let parts1;
    if (null != str) {
      parts1 = str.split(/\s*,\s*/g);
    }
    if (null != parts1) {
      accessibilityLabelledBy = parts1;
    }
    if (null == accessibilityState) {
      if (null == tmp4) {
        if (null == tmp5) {
          if (null == tmp6) {
            if (null == accessibilityValue) {
              if (null == tmp12) {
                if (null == tmp13) {
                  const obj3 = {};
                  let str2 = "none";
                  if ("off" !== tmp10) {
                    if (null != tmp10) {
                      accessibilityLiveRegion = tmp10;
                    }
                    str2 = accessibilityLiveRegion;
                  }
                  obj3.accessibilityLiveRegion = str2;
                  if (null != tmp9) {
                    accessibilityLabel = tmp9;
                  }
                  obj3.accessibilityLabel = accessibilityLabel;
                  if (undefined !== tabIndex) {
                    focusable = !tabIndex;
                  }
                  obj3.focusable = focusable;
                  obj3.accessibilityState = tmp21;
                  if (null != tmp8) {
                    accessibilityElementsHidden = tmp8;
                  }
                  obj3.accessibilityElementsHidden = accessibilityElementsHidden;
                  obj3.accessibilityLabelledBy = accessibilityLabelledBy;
                  obj3.accessibilityValue = tmp27;
                  let str4 = "no-hide-descendants";
                  if (true !== tmp8) {
                    str4 = merged.importantForAccessibility;
                  }
                  obj3.importantForAccessibility = str4;
                  if (null != id) {
                    nativeID = id;
                  }
                  obj3.nativeID = nativeID;
                  obj3.ref = ref;
                  const tmp32Result = jsx(importDefault(115), Object.assign({}, tmp18, obj3));
                  if (tmp3) {
                    const obj4 = { value: false, children: tmp32Result };
                    return jsx(importDefault(114), { value: false, children: tmp32Result });
                  } else {
                    return tmp32Result;
                  }
                  const tmp32 = jsx;
                  const tmp35 = importDefault(115);
                }
              }
            }
            const obj5 = {};
            if (null == tmp12) {
              let max1;
              if (null != accessibilityValue) {
                max1 = accessibilityValue.max;
              }
            }
            obj5.max = tmp12;
            if (null == tmp13) {
              let min1;
              if (null != accessibilityValue) {
                min1 = accessibilityValue.min;
              }
            }
            obj5.min = tmp13;
            if (null == tmp14) {
              let now1;
              if (null != accessibilityValue) {
                now1 = accessibilityValue.now;
              }
            }
            obj5.now = tmp14;
            if (null == tmp15) {
              let text1;
              if (null != accessibilityValue) {
                text1 = accessibilityValue.text;
              }
            }
            obj5.text = tmp15;
            tmp27 = obj5;
          }
        }
      }
    }
    const obj6 = {};
    if (null == tmp4) {
      let busy1;
      if (null != accessibilityState) {
        busy1 = accessibilityState.busy;
      }
    }
    obj6.busy = tmp4;
    if (null == tmp5) {
      let checked1;
      if (null != accessibilityState) {
        checked1 = accessibilityState.checked;
      }
    }
    obj6.checked = tmp5;
    if (null == tmp6) {
      let disabled1;
      if (null != accessibilityState) {
        disabled1 = accessibilityState.disabled;
      }
    }
    obj6.disabled = tmp6;
    if (null == tmp7) {
      let expanded1;
      if (null != accessibilityState) {
        expanded1 = accessibilityState.expanded;
      }
    }
    obj6.expanded = tmp7;
    if (null == tmp11) {
      let selected1;
      if (null != accessibilityState) {
        selected1 = accessibilityState.selected;
      }
    }
    obj6.selected = tmp11;
    tmp18 = callback(merged, closure_4);
    tmp21 = obj6;
  }
});
forwardRefResult.displayName = "View";

export default forwardRefResult;
