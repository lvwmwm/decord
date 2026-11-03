// Module ID: 1824
// Function ID: 1825
// Name: InlinePropManager
// Dependencies: [41, 42, 32, 1769, 1825, 1826, 1835, 1834]
// Exports: getInlineStyle, hasInlineStyles

// Module 1824 (InlinePropManager)
import _mod1769 from "module_1769" /* 1769 */;
import mappersNative from "mappersNative" /* 1834 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let tmp3;
let tmp4;
function isInlineStyleTransform(arr) {
  const f82471 = (item) => {
    let someResult = item;
    if (someResult) {
      let tmp2 = globalThis;
      let _Object = Object;
      let keys = Object.keys(item);
      someResult = keys.some(f82472);
    }
    return someResult;
  };
  const tmp = Array.isArray(arr) && arr.some(f82471);
  return tmp;
}
function inlinePropsHasChanged(arg0, _inlineStyleProps) {
  if (Object.keys(arg0).length !== Object.keys(_inlineStyleProps).length) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(arg0);
    for (const item10018 of keys) {
      if (arg0[item10018] !== _inlineStyleProps[item10018]) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
let items = [{ code: "(function getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(styleValue){const getInlinePropsUpdate_Pnpm_InlinePropManagerTs1=this._recur;let[isSharedValue]=this.__closure;if(isSharedValue(styleValue)){return styleValue.value;}if(Array.isArray(styleValue)){return styleValue.map(getInlinePropsUpdate_Pnpm_InlinePropManagerTs1);}if(styleValue&&typeof styleValue==='object'){const update={};for(const[key,value]of Object.entries(styleValue)){update[key]=getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(value);}return update;}return styleValue;})" }, _mod1769.isSharedValue];
let c0;
[tmp3, tmp4] = items;
function getInlinePropsUpdate(value) {
  if (_undefined(value)) {
    return value.value;
  } else {
    const _Array = Array;
    if (Array.isArray(value)) {
      return value.map(getInlinePropsUpdate);
    } else {
      if (value) {
        if (typeof value === "object") {
          const obj = {};
          const _Object = Object;
          const entries = Object.entries(value);
          const tmp4 = entries[Symbol.iterator]();
          while (tmp4 !== undefined) {
            let tmp9 = _slicedToArray(tmp6, 2);
            obj[tmp9[0]] = getInlinePropsUpdate(tmp9[1]);
            continue;
          }
          return obj;
        }
      }
      return value;
    }
  }
}
let items1 = [tmp4];
getInlinePropsUpdate.__closure = items1;
getInlinePropsUpdate.__workletHash = 10013339811272;
getInlinePropsUpdate.__initData = tmp3;
let closure_7 = { code: "(function pnpm_InlinePropManagerTs2(){let[hasInlineStyleProps,updateProps,shareableViewDescriptors,getInlinePropsUpdate,inlineStyleProps,hasInlineTopLevelProps,inlineTopLevelProps]=this.__closure;if(hasInlineStyleProps){updateProps(shareableViewDescriptors,getInlinePropsUpdate(inlineStyleProps));}if(hasInlineTopLevelProps){updateProps(shareableViewDescriptors,getInlinePropsUpdate(inlineTopLevelProps),true);}})" };
class InlinePropManager {
  constructor() {
    _classCallCheck(this, InlinePropManager);
    this._inlinePropsViewDescriptors = null;
    this._inlinePropsMapperId = null;
    this._inlineStyleProps = {};
    this._inlineTopLevelProps = {};
  }
}
const entry = {
  key: "attachInlineProps",
  value: function attachInlineProps(self, self2) {
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    const props = self.props;
    const _inlineStyleProps = {};
    const obj2 = {};
    for (const key10009 in props) {
      let tmp31 = props[key10009];
      if ("style" === key10009) {
        let tmp4 = dependencyMap;
        let tmp5 = _inlineStyleProps(1825);
        let style = props.style;
        let flattenArray = tmp5.flattenArray;
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = flattenArray(style);
        let item = flattenArrayResult.forEach((item) => {
          let tmp10;
          let tmp11;
          if (item) {
            const _Object = Object;
            const entries = Object.entries(item);
            const tmp4 = entries[Symbol.iterator]();
            while (tmp4 !== undefined) {
              let tmp9 = _slicedToArray(tmp6, 2);
              [tmp10, tmp11] = tmp9;
              let tmp12 = tmp11;
              let obj = _mod1769;
              let isSharedValueResult = obj.isSharedValue(tmp11);
              if (!isSharedValueResult) {
                let tmp17 = "transform" === tmp10;
                if (tmp17) {
                  tmp17 = isInlineStyleTransform(tmp12);
                }
                isSharedValueResult = tmp17;
              }
              if (isSharedValueResult) {
                obj[tmp10] = tmp12;
              }
              continue;
            }
          }
        });
        continue;
      } else {
        let tmp = _inlineStyleProps;
        let obj3 = _inlineStyleProps(1769);
        if (!obj3.isSharedValue(tmp31)) {
          continue;
        } else {
          obj2[key10009] = tmp31;
          continue;
        }
        continue;
      }
      continue;
    }
    self = this;
    let tmp7 = inlinePropsHasChanged;
    if (inlinePropsHasChanged(_inlineStyleProps, this._inlineStyleProps)) {
      if (!self._inlinePropsViewDescriptors) {
        let tmp8 = self2;
        let tmp9 = _inlineStyleProps;
        const tmp10 = dependencyMap;
        const obj4 = _inlineStyleProps(1826);
        self._inlinePropsViewDescriptors = obj4.makeViewDescriptorsSet();
        const _inlinePropsViewDescriptors = self._inlinePropsViewDescriptors;
        const obj6 = { tag: null, shadowNodeWrapper: null };
        ({ viewTag: obj5.tag, shadowNodeWrapper: obj5.shadowNodeWrapper } = self2);
        _inlinePropsViewDescriptors.add(obj6);
      }
      let tmp12 = globalThis;
      let _Object = Object;
      const shareableViewDescriptors = self._inlinePropsViewDescriptors.shareableViewDescriptors;
      let tmp13 = Object.keys(_inlineStyleProps).length > 0;
      const _Object2 = Object;
      let tmp14 = Object.keys(obj2).length > 0;
      let tmp16 = closure_7;
      const items = [, , , , , , , ];
      const tmp15 = tmp13 || tmp14;
      items[0] = closure_7;
      items[1] = tmp13;
      let tmp17 = _inlineStyleProps;
      let tmp18 = dependencyMap;
      items[2] = _inlineStyleProps(1835).updateProps;
      items[3] = shareableViewDescriptors;
      let tmp19 = getInlinePropsUpdate;
      items[4] = getInlinePropsUpdate;
      items[5] = _inlineStyleProps;
      items[6] = tmp14;
      items[7] = obj2;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let tmp20 = items;
      [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items;
      function pnpm_InlinePropManagerTs2() {
        const tmp = c0;
        if (tmp) {
          _undefined(c2, _undefined2(c4));
        }
        const tmp7 = c5;
        if (tmp7) {
          _undefined(c2, _undefined2(c6), true);
        }
      }
      const items1 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
      pnpm_InlinePropManagerTs2.__closure = items1;
      pnpm_InlinePropManagerTs2.__workletHash = 16733823581382;
      pnpm_InlinePropManagerTs2.__initData = tmp21;
      self._inlineStyleProps = _inlineStyleProps;
      self._inlineTopLevelProps = obj2;
      if (self._inlinePropsMapperId) {
        const tmp17Result = tmp17(1834);
        tmp17Result.stopMapper(self._inlinePropsMapperId);
      }
      self._inlinePropsMapperId = null;
      if (tmp15) {
        const items2 = [_inlineStyleProps, obj2];
        const tmp17Result2 = tmp17(1834);
        self._inlinePropsMapperId = tmp17Result2.startMapper(pnpm_InlinePropManagerTs2, items2);
      }
    }
  }
};
let items2 = [
  entry,
  {
    key: "detachInlineProps",
    value: function detachInlineProps() {
      const self = this;
      if (this._inlinePropsMapperId) {
        const obj = mappersNative;
        obj.stopMapper(self._inlinePropsMapperId);
        self._inlinePropsMapperId = null;
      }
      self._inlinePropsViewDescriptors = null;
      self._inlineStyleProps = {};
      self._inlineTopLevelProps = {};
    }
  }
];
const InlinePropManager_export = _createClass(InlinePropManager, items2);

export function hasInlineStyles(viewDescriptors) {
  const f82472 = (item) => {
    let obj = item[item];
    let obj2 = closure_2_0(closure_2_1[3]);
    let isSharedValueResult = obj2.isSharedValue(obj);
    if (!isSharedValueResult) {
      let str = "transform";
      let tmp2 = "transform" === item;
      if (tmp2) {
        let tmp3 = globalThis;
        let _Array = Array;
        let tmp4 = Array.isArray(obj) && obj.some(f82471);
        tmp2 = tmp4;
      }
      isSharedValueResult = tmp2;
    }
    return isSharedValueResult;
  };
  let closure_0 = viewDescriptors;
  let someResult = viewDescriptors;
  if (someResult) {
    const _Object = Object;
    const keys = Object.keys(viewDescriptors);
    someResult = keys.some(f82472);
  }
  return someResult;
}
export function getInlineStyle(viewDescriptors, _isFirstRender) {
  let tmp11;
  let tmp12;
  const tmp = _isFirstRender;
  if (tmp) {
    return getInlinePropsUpdate(viewDescriptors);
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(viewDescriptors);
    const tmp5 = entries[Symbol.iterator]();
    while (tmp5 !== undefined) {
      let tmp10 = _slicedToArray(tmp7, 2);
      [tmp11, tmp12] = tmp10;
      let tmp13 = tmp12;
      let obj2 = _mod1769;
      let isSharedValueResult = obj2.isSharedValue(tmp12);
      if (!isSharedValueResult) {
        let tmp18 = "transform" === tmp11;
        if (tmp18) {
          tmp18 = isInlineStyleTransform(tmp13);
        }
        isSharedValueResult = tmp18;
      }
      if (!isSharedValueResult) {
        obj[tmp11] = tmp13;
      }
      continue;
    }
    return obj;
  }
}
export { InlinePropManager_export as InlinePropManager };
