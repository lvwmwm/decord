// Module ID: 14470
// Function ID: 109027
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14470 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const NodeType = arg1(dependencyMap[4]).NodeType;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj.controlContainer = obj;
obj.pageContainer = { flex: 1 };
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default function SettingSegmentedControl(node) {
  let settings;
  let tmp3;
  let tmp5;
  ({ defaultIndex: closure_0, settings } = node.node);
  const importDefault = settings;
  const tmp = callback4();
  [tmp3, closure_2] = callback(React.useState(0), 2);
  const tmp2 = callback(React.useState(0), 2);
  [tmp5, r10022] = callback(React.useState(() => {
    const field = field.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const tmp5 = callback2(settings(closure_2[8]).getAncestors(field));
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
        const obj = settings(closure_2[8]);
      }
    }
    return closure_0;
  }), 2);
  const items = [settings];
  const callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = React.useMemo(() => {
    const items = [];
    const item = settings.forEach((id) => {
      const tmp = items(closure_2[9]).SETTING_RENDERER_CONFIG[id];
      callback(closure_2[10])(tmp.type === constants.ROUTE, "Invalid setting type for segmented control: " + id);
      const screen = tmp.screen;
      const obj = {};
      const component = screen.getComponent();
      const tmp2 = callback(closure_2[10]);
      obj.label = items(closure_2[11]).getSettingTitle(id);
      obj.id = id;
      obj.page = callback2(component, {});
      items.push(obj);
    });
    return items;
  }, items);
  let obj = arg1(dependencyMap[12]);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp3, defaultIndex: tmp5 });
  obj = {};
  obj = { style: tmp.controlContainer, onLayout: callback, children: callback2(arg1(dependencyMap[13]).SegmentedControl, { state: segmentedControlState }) };
  const items1 = [callback2(View, obj), ];
  const tmp4 = callback(React.useState(() => {
    const field = field.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const tmp5 = callback2(settings(closure_2[8]).getAncestors(field));
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
        const obj = settings(closure_2[8]);
      }
    }
    return closure_0;
  }), 2);
  items1[1] = callback2(View, { style: tmp.pageContainer, children: callback2(arg1(dependencyMap[14]).SegmentedControlPages, { state: segmentedControlState }) });
  obj.children = items1;
  return callback3(closure_9, obj);
};
