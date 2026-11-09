// Module ID: 16920
// Function ID: 16921
// Name: SettingSegmentedControlRenderer
// Dependencies: [32, 19, 17, 16907, 11686, 21, 5140, 575, 9069, 16910, 16754, 38, 16909, 9059, 9294, 14436, 2]
// Exports: default

// Module 16920 (SettingSegmentedControlRenderer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11686 */;
import SettingTreeManagerDefault from "SettingTreeManager" /* 16910 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16907 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
  let c0;
  let first;
  let items1;
  let onLayout;
  let ref;
  let settings;
  _require = undefined;
  settings = undefined;
  ({ defaultIndex: c0, settings } = node.node);
  let tmp = closure_11();
  let tmp2 = dependencyMap;
  const tmp3 = settings(9069)();
  const width = tmp3.width;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  if (undefined !== width) {
    num = width;
  }
  [first] = react.useState(() => {
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
  });
  let items = [settings];
  const memo = react.useMemo(() => {
    const items = [];
    const item = settings.forEach((id) => {
      let component;
      let obj2;
      const tmp = closure_2_0(closure_2_2[10]).SETTING_RENDERER_CONFIG[id];
      const tmp2 = settings(closure_2_2[11]);
      tmp2(tmp.type === constants.ROUTE, "Invalid setting type for segmented control: " + id);
      const screen = tmp.screen;
      const obj = { label: obj2.getSettingTitle(id), id, page: closure_2_8(component, {}) };
      component = screen.getComponent();
      const push = items.push;
      obj2 = closure_2_0(closure_2_2[12]);
      push(obj);
    });
    return items;
  }, items);
  let obj = require("SegmentedControlState");
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: first });
  let obj2 = { children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.controlContainer, ref, onLayout, children: closure_8(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }) };
  items1[0] = closure_8(View, obj3);
  const obj4 = { style: tmp.pageContainer, children: closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }) };
  items1[1] = closure_8(View, obj4);
  return closure_10(closure_9, obj2);
};
