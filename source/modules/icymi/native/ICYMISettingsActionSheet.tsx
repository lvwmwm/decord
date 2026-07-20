// Module ID: 15048
// Function ID: 113305
// Name: ICYMISettingsActionSheet
// Dependencies: []
// Exports: default

// Module 15048 (ICYMISettingsActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { bottomPadding: importDefault(dependencyMap[9]).space.PX_16, width: "100%" };
obj.padding = obj;
let closure_13 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/icymi/native/ICYMISettingsActionSheet.tsx");

export default function ICYMISettingsActionSheet() {
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => state.getState());
  const arg1 = stateFromStoresObject;
  const ICYMIStaffDebuggingUtilityExperiment = arg1(dependencyMap[11]).ICYMIStaffDebuggingUtilityExperiment;
  obj = { Kn: null, ContentInventoryFeedKey: null };
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.title = intl.string(arg1(dependencyMap[14]).t.7Si8Ul);
  obj.hasIcons = false;
  let tmp5Result = null;
  if (ICYMIStaffDebuggingUtilityExperiment.useConfig({ location: "settings action sheet" }).enabled) {
    const obj1 = {};
    const obj2 = {};
    const intl2 = arg1(dependencyMap[14]).intl;
    obj2.label = intl2.string(arg1(dependencyMap[14]).t.3wDyfQ);
    const filterStaffContent = stateFromStoresObject.filterStaffContent;
    obj2.value = null != filterStaffContent && filterStaffContent;
    obj2.onValueChange = function onValueChange() {
      let obj = callback(closure_2[16]);
      obj = {};
      const merged = Object.assign(stateFromStoresObject);
      obj["filterStaffContent"] = !stateFromStoresObject.filterStaffContent;
      obj.setFilters(obj);
      const dehydrated = callback(closure_2[16]).fetchDehydrated();
    };
    const items1 = [callback2(arg1(dependencyMap[15]).TableSwitchRow, obj2), , ];
    const obj3 = {
      label: "Clear read states",
      onPress() {
          const dehydratedItems = dehydratedItems.getDehydratedItems();
          const item = dehydratedItems.forEach((type) => {
            let tmp = type.type === callback(closure_2[18]).ICYMIItemTypes.MESSAGE;
            if (tmp) {
              tmp = type.data.channel_type === callback(closure_2[19]).ChannelTypes.GUILD_ANNOUNCEMENT;
            }
            if (tmp) {
              let obj = callback2(closure_2[20]);
              tmp = obj.compare(closure_5.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
            }
            if (tmp) {
              const obj2 = callback(closure_2[21]);
              const channel_id = type.data.channel_id;
              obj = { object: constants2.ACK_GRAVITY_CLEAR_READ_STATES_BUTTON, objectType: constants.ACK_SEMI_AUTOMATIC };
              obj2.ack(channel_id, obj, true, true, callback2(closure_2[20]).atPreviousMillisecond(type.data.message_id));
              const obj4 = callback2(closure_2[20]);
            }
          });
          callback(closure_2[16]).clearReadStates();
          const obj = callback(closure_2[16]);
          callback(closure_2[22]).hideActionSheet();
        }
    };
    items1[1] = callback2(arg1(dependencyMap[17]).TableRow, obj3);
    const obj4 = { label: "Regenerate feed and clear read states" };
    // CreateGeneratorClosureLongIndex (0x67)
    obj4.onPress = callback("Regenerate feed and clear read states");
    items1[2] = callback2(arg1(dependencyMap[17]).TableRow, obj4);
    obj1.children = items1;
    tmp5Result = closure_12(closure_11, obj1);
    const tmp5 = closure_12;
    const tmp6 = closure_11;
    const tmp7 = callback2;
  }
  const items2 = [tmp5Result, ];
  const obj5 = {};
  const intl3 = arg1(dependencyMap[14]).intl;
  obj5.label = intl3.string(arg1(dependencyMap[14]).t.Eorjmy);
  obj5.onPress = function onPress() {
    let obj = callback(paths[16]);
    obj.itemInteracted("icymi_settings_action_sheet", "icymi_settings_action_sheet", "custom_scoring_button");
    callback(paths[16]).feedPageActioned({ actionParameters: {} });
    const obj2 = callback(paths[16]);
    const obj3 = callback(paths[24]);
    obj = { presentation: "modal" };
    obj3.pushLazy(stateFromStoresObject(paths[26])(paths[25], paths.paths), {}, stateFromStoresObject(paths[27]).ICYMI_CUSTOM_SCORES_MODAL_KEY, obj);
    const tmp3 = stateFromStoresObject(paths[26])(paths[25], paths.paths);
    callback(paths[22]).hideActionSheet();
  };
  items2[1] = callback2(arg1(dependencyMap[17]).TableRow, obj5);
  obj.children = items2;
  const items3 = [closure_12(arg1(dependencyMap[13]).TableRowGroup, obj), ];
  const tmp2 = callback3();
  items3[1] = callback2(View, { style: callback3().padding });
  obj.children = items3;
  return closure_12(arg1(dependencyMap[12]).ActionSheet, obj);
};
