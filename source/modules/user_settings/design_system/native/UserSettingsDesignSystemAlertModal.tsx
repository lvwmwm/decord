// Module ID: 14485
// Function ID: 110647
// Name: DemoModal
// Dependencies: [5, 31, 27, 33, 4475, 4472, 4130, 4543, 2]
// Exports: default

// Module 14485 (DemoModal)
import useAlertStore from "useAlertStore";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function DemoModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  callback = React.useCallback(callback(tmp), []);
  let obj = { title: "Are you sure?", content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed." };
  obj = { variant: "destructive", onPress: callback, text: "Clear" };
  const items = [jsx(require(4475) /* getAlertModalItemKey */.AlertActionButton, { variant: "destructive", onPress: callback, text: "Clear" }, "clear"), ];
  obj = { variant: "secondary", onPress: callback, text: "Cancel" };
  items[1] = jsx(require(4475) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", onPress: callback, text: "Cancel" }, "cancel");
  obj.actions = items;
  return jsx(require(4475) /* getAlertModalItemKey */.AlertModal, { variant: "secondary", onPress: callback, text: "Cancel" });
}
function openDemoModal() {
  require(4472) /* useAlertStore */.openAlert("demo-1", <DemoModal />);
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  let obj = {};
  obj = { style: callback2().container, children: jsx(require(4543) /* Button */.Button, {}) };
  obj = { onPress: openDemoModal, text: "Show Alert" };
  obj.children = <closure_4 onPress={openDemoModal} text="Show Alert" />;
  return <closure_5 onPress={openDemoModal} text="Show Alert" />;
};
