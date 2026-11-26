// Module ID: 1841
// Function ID: 1842
// Name: PropsFilter
// Dependencies: [41, 42, 1828, 1842, 1827, 1866, 1772, 1761, 1867]

// Module 1841 (PropsFilter)
import _createClassDefault from "_createClass" /* 42 */;
import _mod1761 from "module_1761" /* 1761 */;
import InlinePropManager from "InlinePropManager" /* 1827 */;
import flattenArray2 from "flattenArray" /* 1828 */;
import _mod1842 from "module_1842" /* 1842 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const require = globalThis.__r;
let _require, set, viewDescriptors;

function dummyListener() {

}
class PropsFilter {
  constructor() {
    _classCallCheck(this, PropsFilter);
    this._initialPropsMap = new Map();
    new Map();
  }
}
const entry = {
  key: "filterNonAnimatedProps",
  value: function filterNonAnimatedProps(props) {
    _require = props;
    const self = this;
    props = props.props;
    let obj = {};
    let c3 = false;
    for (const key10013 in props) {
      let iter = props[key10013];
      if ("style" === key10013) {
        let style = props.style;
        let tmp5 = _require;
        let tmp7 = require("flattenArray");
        let flattenArray = tmp7.flattenArray;
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = flattenArray(style);
        obj[key10013] = flattenArrayResult.map((viewDescriptors) => {
          viewDescriptors = undefined;
          if (viewDescriptors != null) {
            viewDescriptors = viewDescriptors.viewDescriptors;
          }
          if (viewDescriptors) {
            if (props._isFirstRender) {
              const _initialPropsMap = self._initialPropsMap;
              const obj3 = {};
              set = _initialPropsMap.set;
              const merged = Object.assign(viewDescriptors.initial.value);
              const obj4 = _mod1842;
              const merged1 = Object.assign(obj4.initialUpdaterRun(viewDescriptors.initial.updater));
              const result = set(viewDescriptors, obj3);
            }
            const _initialPropsMap2 = self._initialPropsMap;
            let obj5 = _initialPropsMap2.get(viewDescriptors);
            if (obj5 == null) {
              obj5 = {};
            }
            return obj5;
          } else {
            let inlineStyle = viewDescriptors;
            obj = InlinePropManager;
            if (obj.hasInlineStyles(viewDescriptors)) {
              const obj2 = InlinePropManager;
              inlineStyle = obj2.getInlineStyle(viewDescriptors, props._isFirstRender);
            }
            return inlineStyle;
          }
        });
        continue;
      } else {
        if ("animatedProps" === key10013) {
          continue;
        } else {
          let tmp = _require;
          let tmp2 = self;
          let obj2 = require("flattenArray");
          if (obj2.has("workletEventHandler", iter)) {
            if (iter.workletEventHandler instanceof tmp(tmp2[5]).WorkletEventHandler) {
              if (iter.workletEventHandler.eventNames.length > 0) {
                let eventNames = iter.workletEventHandler.eventNames;
                let item = eventNames.forEach((item) => {
                  let tmp3;
                  const tmp = obj;
                  obj = flattenArray2;
                  const tmp2 = iter;
                  if (obj.has("listeners", iter.workletEventHandler)) {
                    tmp3 = tmp2.workletEventHandler.listeners[item];
                  } else {
                    tmp3 = dummyListener;
                  }
                  tmp[item] = tmp3;
                });
                continue;
              } else {
                let tmp3 = c3;
                obj[key10013] = c3;
                continue;
              }
              continue;
            }
          }
          let tmpResult = tmp(tmp2[6]);
          if (tmpResult.isSharedValue(iter)) {
            if (!props._isFirstRender) {
              continue;
            } else {
              obj[key10013] = iter.value;
              continue;
            }
            continue;
          } else {
            obj[key10013] = iter;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    const animatedProps = props.animatedProps;
    if (animatedProps) {
      let tmp8 = _require;
      let tmp9 = self;
      let obj4 = require("flattenArray");
      const flattenArrayResult1 = obj4.flattenArray(animatedProps);
      const item1 = flattenArrayResult1.forEach((viewDescriptors) => {
        const tmp = viewDescriptors;
        if (tmp) {
          if (viewDescriptors.viewDescriptors) {
            if (viewDescriptors.initial) {
              const value = viewDescriptors.initial.value;
              for (const key10021 in value) {
                obj[key10021] = value[key10021];
                continue;
              }
            }
          }
          for (const key10007 in viewDescriptors) {
            let tmp8 = require;
            let obj2 = _mod1761;
            if (obj2.isCSSConfigProp(key10007)) {
              continue;
            } else {
              let tmp3 = viewDescriptors[key10007];
              let tmp8Result = tmp8(1761);
              if (tmp8Result.isPseudoSelectorValue(tmp3)) {
                c3 = true;
                if (undefined === tmp3.default) {
                  continue;
                } else {
                  obj[key10007] = tmp3.default;
                  continue;
                }
                continue;
              } else {
                obj[key10007] = tmp3;
                continue;
              }
              continue;
            }
            continue;
          }
        }
      });
    }
    let tmp11 = _require;
    const tmp12 = self;
    const tmp13 = require("svgHitTestResponder").svgHitTestResponder && c3 && !obj.onStartShouldSetResponder;
    if (tmp13) {
      obj.onStartShouldSetResponder = tmp11(tmp12[8]).svgHitTestResponder;
    }
    return obj;
  }
};
const items = [entry];
const PropsFilter_export = _createClassDefault(PropsFilter, items);

export { PropsFilter_export as PropsFilter };
