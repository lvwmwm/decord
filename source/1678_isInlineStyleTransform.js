// Module ID: 1678
// Function ID: 18597
// Name: isInlineStyleTransform
// Dependencies: [6, 7, 57, 1631, 1679, 1680, 1681, 1682, 1630]
// Exports: getInlineStyle

// Module 1678 (isInlineStyleTransform)
import configureProps from "configureProps";
import updateProps from "updateProps";
import _slicedToArray from "_slicedToArray";

const require = arg1;
function isInlineStyleTransform(arr) {
  const tmp = !Array.isArray(arr);
  let someResult = !tmp;
  if (!tmp) {
    someResult = arr.some((arg0) => outer1_9(arg0));
  }
  return someResult;
}
function hasInlineStyles(viewDescriptors) {
  let closure_0 = viewDescriptors;
  let someResult = !tmp;
  if (!!viewDescriptors) {
    const _Object = Object;
    const keys = Object.keys(viewDescriptors);
    someResult = keys.some((arg0) => {
      let isSharedValueResult = viewDescriptors(outer1_1[3]).isSharedValue(tmp);
      if (!isSharedValueResult) {
        let tmp3 = "transform" === arg0;
        if (tmp3) {
          tmp3 = outer1_8(tmp);
        }
        isSharedValueResult = tmp3;
      }
      return isSharedValueResult;
    });
  }
  return someResult;
}
function getInlinePropsUpdate(iter) {
  let tmp16;
  let tmp17;
  const obj = {};
  const entries = Object.entries(iter);
  while (tmp2 !== undefined) {
    let tmp14 = callback2;
    let tmp15 = callback2(tmp3, 2);
    [tmp16, tmp17] = tmp15;
    iter = tmp17;
    let tmp18 = require;
    let tmp19 = dependencyMap;
    let obj2 = require(1631) /* isSharedValue */;
    if (obj2.isSharedValue(tmp17)) {
      let tmp11 = obj;
      let tmp12 = tmp16;
      let tmp13 = tmp17;
      obj[tmp16] = iter.value;
    } else {
      let _Array = Array;
      let tmp4 = tmp17;
      let tmp5 = obj;
      let tmp6 = tmp16;
      let tmp7 = tmp17;
      if (Array.isArray(iter)) {
        obj[tmp16] = iter.map((arg0) => outer1_5(arg0));
      } else {
        if ("object" === typeof iter) {
          let tmp9 = getInlinePropsUpdate;
          let tmp10 = tmp17;
          let tmp8 = getInlinePropsUpdate(iter);
        } else {
          tmp8 = tmp17;
        }
        obj[tmp16] = tmp8;
      }
    }
    continue;
  }
  return obj;
}
getInlinePropsUpdate.__closure = { isSharedValue: require("isSharedValue").isSharedValue };
getInlinePropsUpdate.__workletHash = 14886679339062;
getInlinePropsUpdate.__initData = { code: "function getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(inlineProps){const getInlinePropsUpdate_Pnpm_InlinePropManagerTs1=this._recur;const{isSharedValue}=this.__closure;const update={};for(const[key,styleValue]of Object.entries(inlineProps)){if(isSharedValue(styleValue)){update[key]=styleValue.value;}else if(Array.isArray(styleValue)){update[key]=styleValue.map(function(item){return getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(item);});}else if(typeof styleValue==='object'){update[key]=getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(styleValue);}else{update[key]=styleValue;}}return update;}" };
let closure_7 = { code: "function pnpm_InlinePropManagerTs2(){const{getInlinePropsUpdate,newInlineProps,updateProps,shareableViewDescriptors}=this.__closure;const update=getInlinePropsUpdate(newInlineProps);updateProps(shareableViewDescriptors,update);}" };

export { hasInlineStyles };
export const getInlineStyle = function getInlineStyle(viewDescriptors, _isFirstRender) {
  let tmp10;
  let tmp9;
  if (_isFirstRender) {
    return getInlinePropsUpdate(viewDescriptors);
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(viewDescriptors);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp7 = callback2;
      let tmp8 = callback2(tmp5, 2);
      [tmp9, tmp10] = tmp8;
      let tmp11 = tmp10;
      let tmp12 = require;
      let tmp13 = dependencyMap;
      let obj2 = require(1631) /* isSharedValue */;
      let isSharedValueResult = obj2.isSharedValue(tmp10);
      let tmp15 = isSharedValueResult;
      if (!isSharedValueResult) {
        let tmp16 = tmp9;
        let tmp17 = "transform" === tmp9;
        let tmp18 = tmp17;
        if (tmp17) {
          let tmp19 = isInlineStyleTransform;
          let tmp20 = tmp10;
          tmp18 = isInlineStyleTransform(tmp11);
        }
        tmp15 = tmp18;
      }
      if (!tmp15) {
        let tmp21 = obj;
        let tmp22 = tmp9;
        let tmp23 = tmp10;
        obj[tmp9] = tmp11;
      }
      continue;
    }
    return obj;
  }
};
export const InlinePropManager = (() => {
  class InlinePropManager {
    constructor() {
      tmp = outer1_2(this, InlinePropManager);
      this._inlinePropsViewDescriptors = null;
      this._inlinePropsMapperId = null;
      this._inlineProps = {};
      return;
    }
  }
  let obj = {
    key: "attachInlineProps",
    value: function attachInlineProps(self, self2) {
      let shadowNodeWrapper;
      let viewName;
      let viewTag;
      self = this;
      let tmp = (function extractSharedValuesMapFromProps(props) {
        let obj = {};
        for (const key10010 in arg0) {
          let tmp6 = key10010;
          let tmp7 = arg0[key10010];
          if ("style" === key10010) {
            let tmp3 = InlinePropManager;
            let tmp4 = outer2_1;
            let obj3 = InlinePropManager(outer2_1[4]);
            let style = arg0.style;
            let items = style;
            if (null == style) {
              items = [];
            }
            let flattenArrayResult = obj3.flattenArray(items);
            let item = flattenArrayResult.forEach((arg0) => {
              let tmp10;
              let tmp9;
              if (arg0) {
                const _Object = Object;
                const entries = Object.entries(arg0);
                const tmp4 = entries[Symbol.iterator]();
                while (tmp4 !== undefined) {
                  let tmp7 = outer3_4;
                  let tmp8 = outer3_4(tmp5, 2);
                  [tmp9, tmp10] = tmp8;
                  let tmp11 = tmp10;
                  let tmp12 = InlinePropManager;
                  let tmp13 = outer3_1;
                  let obj = InlinePropManager(outer3_1[3]);
                  let isSharedValueResult = obj.isSharedValue(tmp10);
                  let tmp15 = isSharedValueResult;
                  if (!isSharedValueResult) {
                    let tmp16 = tmp9;
                    let tmp17 = "transform" === tmp9;
                    let tmp18 = tmp17;
                    if (tmp17) {
                      let tmp19 = outer3_8;
                      let tmp20 = tmp10;
                      tmp18 = outer3_8(tmp11);
                    }
                    tmp15 = tmp18;
                  }
                  if (tmp15) {
                    let tmp21 = obj;
                    let tmp22 = tmp9;
                    let tmp23 = tmp10;
                    obj[tmp9] = tmp11;
                  }
                  continue;
                }
              }
            });
            continue;
          } else {
            let tmp = InlinePropManager;
            let tmp2 = outer2_1;
            let obj2 = InlinePropManager(outer2_1[3]);
            if (!obj2.isSharedValue(tmp7)) {
              continue;
            } else {
              obj[key10010] = tmp7;
              continue;
            }
            continue;
          }
          continue;
        }
        return obj;
      })(self.props);
      const InlinePropManager = tmp;
      const _inlineProps = this._inlineProps;
      let flag = true;
      if (Object.keys(tmp).length === Object.keys(_inlineProps).length) {
        let _Object = Object;
        const keys = Object.keys(tmp2);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        flag = false;
        while (iter !== undefined) {
          let tmp8 = tmp;
          let tmp9 = _inlineProps;
          if (tmp2[nextResult] !== _inlineProps[nextResult]) {
            iter.return();
            flag = true;
            break;
          }
          break;
        }
      }
      if (flag) {
        if (!self._inlinePropsViewDescriptors) {
          let obj = InlinePropManager(outer1_1[5]);
          self._inlinePropsViewDescriptors = obj.makeViewDescriptorsSet();
          const viewConfig = self2.viewConfig;
          const _Object2 = Object;
          ({ viewTag, viewName, shadowNodeWrapper } = self2);
          if (tmp12) {
            InlinePropManager(outer1_1[6]).adaptViewConfig(viewConfig);
            let obj2 = InlinePropManager(outer1_1[6]);
          }
          const _inlinePropsViewDescriptors = self._inlinePropsViewDescriptors;
          obj = { tag: viewTag, name: viewName, shadowNodeWrapper };
          _inlinePropsViewDescriptors.add(obj);
          tmp12 = Object.keys(tmp).length && viewConfig;
        }
        const shareableViewDescriptors = self._inlinePropsViewDescriptors.shareableViewDescriptors;
        /* worklet (recovered source) */ function pnpm_InlinePropManagerTs2(){const{getInlinePropsUpdate,newInlineProps,updateProps,shareableViewDescriptors}=this.__closure;const update=getInlinePropsUpdate(newInlineProps);updateProps(shareableViewDescriptors,update);}
        obj = { getInlinePropsUpdate: outer1_6, newInlineProps: tmp, updateProps: InlinePropManager(outer1_1[7]).updateProps, shareableViewDescriptors };
        pnpm_InlinePropManagerTs2.__closure = obj;
        pnpm_InlinePropManagerTs2.__workletHash = 4459550727912;
        pnpm_InlinePropManagerTs2.__initData = outer1_7;
        self._inlineProps = tmp;
        if (self._inlinePropsMapperId) {
          InlinePropManager(outer1_1[8]).stopMapper(self._inlinePropsMapperId);
          const obj5 = InlinePropManager(outer1_1[8]);
        }
        self._inlinePropsMapperId = null;
        const _Object3 = Object;
        if (Object.keys(tmp).length) {
          const _Object4 = Object;
          self._inlinePropsMapperId = InlinePropManager(outer1_1[8]).startMapper(pnpm_InlinePropManagerTs2, Object.values(tmp));
          const obj6 = InlinePropManager(outer1_1[8]);
        }
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "detachInlineProps",
    value: function detachInlineProps() {
      if (this._inlinePropsMapperId) {
        InlinePropManager(outer1_1[8]).stopMapper(tmp._inlinePropsMapperId);
        const obj = InlinePropManager(outer1_1[8]);
      }
    }
  };
  items[1] = obj;
  return callback(InlinePropManager, items);
})();
