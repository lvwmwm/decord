// Module ID: 14584
// Function ID: 111180
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 13552, 10096, 33, 4130, 689, 14575, 13557, 44, 13555, 8360, 8760, 8758, 2]
// Exports: default

// Module 14584 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import zustandStore from "zustandStore";
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.controlContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.pageContainer = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default function SettingSegmentedControl(node) {
  let dependencyMap;
  let require;
  let settings;
  let tmp3;
  let tmp5;
  ({ defaultIndex: require, settings } = node.node);
  let tmp = _createForOfIteratorHelperLoose();
  [tmp3, dependencyMap] = callback(React.useState(0), 2);
  let tmp2 = callback(React.useState(0), 2);
  [tmp5, r10022] = callback(React.useState(() => {
    const field = outer1_6.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const tmp5 = outer1_12(settings(outer1_2[8]).getAncestors(field));
        const iter = tmp5();
        let iter2 = iter;
        if (!iter.done) {
          const index1 = settings.indexOf(iter2.value);
          while (-1 === index1) {
            let iter3 = tmp5();
            iter2 = iter3;
          }
          return index1;
        }
        const obj = settings(outer1_2[8]);
      }
    }
    return closure_0;
  }), 2);
  let items = [settings];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = React.useMemo(() => {
    const items = [];
    const item = settings.forEach((id) => {
      const tmp = outer2_0(outer2_2[9]).SETTING_RENDERER_CONFIG[id];
      settings(outer2_2[10])(tmp.type === outer2_7.ROUTE, "Invalid setting type for segmented control: " + id);
      const screen = tmp.screen;
      const obj = {};
      const component = screen.getComponent();
      const tmp2 = settings(outer2_2[10]);
      obj.label = outer2_0(outer2_2[11]).getSettingTitle(id);
      obj.id = id;
      obj.page = outer2_8(component, {});
      items.push(obj);
    });
    return items;
  }, items);
  let obj = require(8360) /* useSegmentedControlState */;
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp3, defaultIndex: tmp5 });
  obj = {};
  obj = { style: tmp.controlContainer, onLayout: callback, children: callback2(require(8760) /* SegmentedControl */.SegmentedControl, { state: segmentedControlState }) };
  const items1 = [callback2(View, obj), ];
  const tmp4 = callback(React.useState(() => {
    const field = outer1_6.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const tmp5 = outer1_12(settings(outer1_2[8]).getAncestors(field));
        const iter = tmp5();
        let iter2 = iter;
        if (!iter.done) {
          const index1 = settings.indexOf(iter2.value);
          while (-1 === index1) {
            let iter3 = tmp5();
            iter2 = iter3;
          }
          return index1;
        }
        const obj = settings(outer1_2[8]);
      }
    }
    return closure_0;
  }), 2);
  items1[1] = callback2(View, { style: tmp.pageContainer, children: callback2(require(8758) /* SegmentedControlPage */.SegmentedControlPages, { state: segmentedControlState }) });
  obj.children = items1;
  return callback3(closure_9, obj);
};
