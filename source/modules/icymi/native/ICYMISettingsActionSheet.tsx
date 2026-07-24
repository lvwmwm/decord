// Module ID: 15228
// Function ID: 115897
// Name: ICYMISettingsActionSheet
// Dependencies: [5, 31, 27, 4142, 8362, 8350, 653, 33, 4130, 689, 566, 8366, 5498, 5501, 1212, 5502, 8365, 5165, 7086, 669, 21, 5069, 4098, 8364, 4337, 15229, 1934, 15238, 2]
// Exports: default

// Module 15228 (ICYMISettingsActionSheet)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import "result";
import { View } from "ICYMI_CUSTOM_SCORES_MODAL_KEY";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9 } = ME);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { bottomPadding: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%" };
_createForOfIteratorHelperLoose.padding = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/ICYMISettingsActionSheet.tsx");

export default function ICYMISettingsActionSheet() {
  let obj = stateFromStoresObject(566);
  const items = [closure_6];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => outer1_6.getState());
  const ICYMIStaffDebuggingUtilityExperiment = stateFromStoresObject(8366).ICYMIStaffDebuggingUtilityExperiment;
  obj = { showGradient: true, startExpanded: true };
  obj = {};
  const intl = stateFromStoresObject(1212).intl;
  obj.title = intl.string(stateFromStoresObject(1212).t["7Si8Ul"]);
  obj.hasIcons = false;
  let tmp5Result = null;
  if (ICYMIStaffDebuggingUtilityExperiment.useConfig({ location: "settings action sheet" }).enabled) {
    const obj1 = {};
    let obj2 = {};
    const intl2 = stateFromStoresObject(1212).intl;
    obj2.label = intl2.string(stateFromStoresObject(1212).t["3wDyfQ"]);
    const filterStaffContent = stateFromStoresObject.filterStaffContent;
    obj2.value = null != filterStaffContent && filterStaffContent;
    obj2.onValueChange = function onValueChange() {
      let obj = outer1_1(outer1_2[16]);
      obj = {};
      const merged = Object.assign(stateFromStoresObject);
      obj["filterStaffContent"] = !stateFromStoresObject.filterStaffContent;
      obj.setFilters(obj);
      const dehydrated = outer1_1(outer1_2[16]).fetchDehydrated();
    };
    const items1 = [callback2(stateFromStoresObject(5502).TableSwitchRow, obj2), , ];
    let obj3 = {
      label: "Clear read states",
      onPress() {
          const dehydratedItems = outer1_7.getDehydratedItems();
          const item = dehydratedItems.forEach((type) => {
            let tmp = type.type === stateFromStoresObject(outer2_2[18]).ICYMIItemTypes.MESSAGE;
            if (tmp) {
              tmp = type.data.channel_type === stateFromStoresObject(outer2_2[19]).ChannelTypes.GUILD_ANNOUNCEMENT;
            }
            if (tmp) {
              let obj = outer2_1(outer2_2[20]);
              tmp = obj.compare(outer2_5.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
            }
            if (tmp) {
              const obj2 = stateFromStoresObject(outer2_2[21]);
              const channel_id = type.data.channel_id;
              obj = { object: outer2_9.ACK_GRAVITY_CLEAR_READ_STATES_BUTTON, objectType: outer2_8.ACK_SEMI_AUTOMATIC };
              obj2.ack(channel_id, obj, true, true, outer2_1(outer2_2[20]).atPreviousMillisecond(type.data.message_id));
              const obj4 = outer2_1(outer2_2[20]);
            }
          });
          outer1_1(outer1_2[16]).clearReadStates();
          let obj = outer1_1(outer1_2[16]);
          outer1_1(outer1_2[22]).hideActionSheet();
        }
    };
    items1[1] = callback2(stateFromStoresObject(5165).TableRow, obj3);
    let obj4 = { label: "Regenerate feed and clear read states" };
    // CreateGeneratorClosureLongIndex (0x67)
    obj4.onPress = callback("Regenerate feed and clear read states");
    items1[2] = callback2(stateFromStoresObject(5165).TableRow, obj4);
    obj1.children = items1;
    tmp5Result = closure_12(closure_11, obj1);
    const tmp5 = closure_12;
    const tmp6 = closure_11;
    const tmp7 = callback2;
  }
  const items2 = [tmp5Result, ];
  const obj5 = {};
  const intl3 = stateFromStoresObject(1212).intl;
  obj5.label = intl3.string(stateFromStoresObject(1212).t.Eorjmy);
  obj5.onPress = function onPress() {
    let obj = outer1_1(outer1_2[16]);
    obj.itemInteracted("icymi_settings_action_sheet", "icymi_settings_action_sheet", "custom_scoring_button");
    outer1_1(outer1_2[16]).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "tune_settings_button", actionIntentType: "open", actionDestinationType: null } });
    const obj2 = outer1_1(outer1_2[16]);
    const obj3 = outer1_1(outer1_2[24]);
    obj = { presentation: "modal" };
    obj3.pushLazy(stateFromStoresObject(outer1_2[26])(outer1_2[25], outer1_2.paths), {}, stateFromStoresObject(outer1_2[27]).ICYMI_CUSTOM_SCORES_MODAL_KEY, obj);
    const tmp3 = stateFromStoresObject(outer1_2[26])(outer1_2[25], outer1_2.paths);
    outer1_1(outer1_2[22]).hideActionSheet();
  };
  items2[1] = callback2(stateFromStoresObject(5165).TableRow, obj5);
  obj.children = items2;
  const items3 = [closure_12(stateFromStoresObject(5501).TableRowGroup, obj), ];
  const tmp2 = _createForOfIteratorHelperLoose();
  items3[1] = callback2(View, { style: _createForOfIteratorHelperLoose().padding });
  obj.children = items3;
  return closure_12(stateFromStoresObject(5498).ActionSheet, obj);
};
