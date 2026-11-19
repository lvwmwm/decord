// Module ID: 18140
// Function ID: 18141
// Name: ICYMISettingsActionSheet
// Dependencies: [19, 17, 21, 4792, 575, 7434, 7229, 1113, 6926, 9920, 6308, 18141, 2121, 18150, 5006, 2]
// Exports: default

// Module 18140 (ICYMISettingsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import TableRow2 from "TableRow" /* 6926 */;
import TableRowGroup2 from "TableRowGroup" /* 7229 */;
import ActionSheet2 from "ActionSheet" /* 7434 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { padding: obj2 };
obj2 = { bottomPadding: nativeDefault.space.PX_16, width: "100%" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMISettingsActionSheet.tsx");

export default function ICYMISettingsActionSheet() {
  let TableRow;
  let intl;
  let intl2;
  let items;
  let obj3;
  let paths;
  let obj = { showGradient: true, startExpanded: true, children: items };
  const tmp = closure_6();
  const ActionSheet = ActionSheet2.ActionSheet;
  let obj2 = { title: intl.string(intl3.t["7Si8Ul"]), hasIcons: false, children: React3(TableRow, obj3) };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  intl = intl3.intl;
  obj3 = {
    label: intl2.string(intl3.t.Eorjmy),
    onPress() {
      const obj = require("ICYMIActionCreators");
      obj.itemInteracted("icymi_settings_action_sheet", "icymi_settings_action_sheet", "custom_scoring_button");
      const obj2 = require("ICYMIActionCreators");
      obj2.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "tune_settings_button", actionIntentType: "open", actionDestinationType: null } });
      const pushLazy = require("ModalActionCreators").pushLazy;
      require("ModalActionCreators");
      const tmp4 = require("asyncRequire")(paths[11], paths.paths);
      pushLazy(tmp4, {}, require("ICYMICustomScoreTypes").ICYMI_CUSTOM_SCORES_MODAL_KEY, { presentation: "modal" });
      const obj3 = require("ActionSheetActionCreators");
      obj3.hideActionSheet();
    }
  };
  TableRow = TableRow2.TableRow;
  intl2 = intl3.intl;
  items = [React3(TableRowGroup, obj2), ];
  const obj4 = { style: tmp.padding };
  items[1] = React3(View, obj4);
  return hasOwnProperty(ActionSheet, obj);
};
