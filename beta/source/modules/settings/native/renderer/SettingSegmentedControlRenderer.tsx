// Module ID: 14261
// Function ID: 14262
// Name: SettingSegmentedControlRenderer
// Dependencies: [32, 19, 17, 14249, 11007, 21, 4836, 576, 14252, 14142, 38, 14251, 9083, 9084, 12113, 2]
// Exports: default

// Module 14261 (SettingSegmentedControlRenderer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11007 */;
import SettingTreeManagerDefault from "SettingTreeManager" /* 14252 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14249 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
const NodeType = SettingRendererConstants.NodeType;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = { controlContainer: obj2, pageContainer: { flex: 1 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default function SettingSegmentedControl(node) {
  let _undefined;
  let c0;
  let c2;
  let items1;
  let settings;
  let tmp3;
  let tmp5;
  const f99403 = () => {
    const field = UserSettingSearchStore.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const obj = SettingTreeManagerDefault;
        const ancestors = obj.getAncestors(field);
        for (const item10020 of ancestors) {
          let index1 = settings.indexOf(item10020);
          if (-1 !== index1) {
            obj2.return();
            return index1;
          }
        }
      }
    }
    return c0;
  };
  _require = undefined;
  settings = undefined;
  dependencyMap = undefined;
  ({ defaultIndex: c0, settings } = node.node);
  let tmp = closure_11();
  let tmp2 = _slicedToArray(react.useState(0), 2);
  [tmp3, c2] = tmp2;
  [tmp5, r10021] = _slicedToArray(react.useState(f99403), 2);
  let items = [settings];
  const tmp4 = _slicedToArray(react.useState(f99403), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = react.useMemo(() => {
    const items = [];
    const item = settings.forEach((id) => {
      let component;
      let obj2;
      const tmp = closure_2_0(_undefined[9]).SETTING_RENDERER_CONFIG[id];
      const tmp2 = settings(_undefined[10]);
      tmp2(tmp.type === constants.ROUTE, "Invalid setting type for segmented control: " + id);
      const screen = tmp.screen;
      const obj = { label: obj2.getSettingTitle(id), id, page: closure_2_8(component, {}) };
      component = screen.getComponent();
      const push = items.push;
      obj2 = closure_2_0(_undefined[11]);
      push(obj);
    });
    return items;
  }, items);
  let obj = require("SegmentedControlState");
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp3, defaultIndex: tmp5 });
  let obj2 = { children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.controlContainer, onLayout: callback, children: closure_8(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }) };
  items1[0] = closure_8(View, obj3);
  const obj4 = { style: tmp.pageContainer, children: closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }) };
  items1[1] = closure_8(View, obj4);
  return closure_10(closure_9, obj2);
};
