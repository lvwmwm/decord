// Module ID: 15173
// Function ID: 115357
// Name: ChannelListPanelBackdrop
// Dependencies: [31, 27, 653, 33, 4165, 689, 14905, 1557, 14096, 15174, 2]
// Exports: default

// Module 15173 (ChannelListPanelBackdrop)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { DM_WIDTH } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, position: "relative", overflow: "hidden" } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.PANEL_BG;
_createForOfIteratorHelperLoose.panelTint = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.listWrapper = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default function ChannelListPanelBackdrop(children) {
  const style = children.style;
  const contentInset = children.contentInset;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = style(14096);
  const mobileQuestDockHeight = obj.useMobileQuestDockHeight();
  let items = [tmp, contentInset, mobileQuestDockHeight, style];
  obj = {
    style: mobileQuestDockHeight.useMemo(() => {
      const items = [tmp.container, , ];
      const obj = {};
      let top;
      if (null != contentInset) {
        top = contentInset.top;
      }
      let num = 0;
      if (null != top) {
        num = top;
      }
      obj.marginTop = num;
      let bottom;
      if (null != contentInset) {
        bottom = contentInset.bottom;
      }
      let num2 = 0;
      if (null != bottom) {
        num2 = bottom;
      }
      obj.paddingBottom = num2 + mobileQuestDockHeight;
      let left;
      if (null != contentInset) {
        left = contentInset.left;
      }
      let num3 = 0;
      if (null != left) {
        num3 = left;
      }
      obj.marginLeft = num3;
      let right;
      if (null != contentInset) {
        right = contentInset.right;
      }
      let num4 = 0;
      if (null != right) {
        num4 = right;
      }
      obj.marginRight = num4;
      items[1] = obj;
      items[2] = style;
      return items;
    }, items)
  };
  obj = { offsetX: DM_WIDTH, offsetY: contentInset(1557)().top, parentSpringTranslateX: mobileQuestDockHeight.useContext(style(14905).HomeDrawerStateContext).panelSpringTranslateX };
  const items1 = [callback(contentInset(15174), obj), callback(View, { pointerEvents: "none", style: tmp.panelTint }), callback(View, { style: tmp.listWrapper, children: children.children })];
  obj.children = items1;
  return callback2(View, obj);
};
