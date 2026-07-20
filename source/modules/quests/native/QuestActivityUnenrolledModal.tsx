// Module ID: 15580
// Function ID: 118917
// Name: QuestActivityUnenrolledModalInner
// Dependencies: []
// Exports: default

// Module 15580 (QuestActivityUnenrolledModalInner)
function QuestActivityUnenrolledModalInner(quest) {
  let accessibilityRole;
  let accessibilityState;
  quest = quest.quest;
  const arg1 = quest;
  let obj = arg1(closure_2[11]);
  const theme = obj.useTheme();
  let obj1 = arg1(closure_2[12]);
  const tmp2 = callback5(obj1.isThemeDark(theme));
  let obj2 = arg1(closure_2[13]);
  const items = [closure_9];
  const tmp3 = callback2(React.useState(obj2.useStateFromStores(items, () => state.getState().autoEnroll)), 2);
  const first = tmp3[0];
  const importDefault = first;
  closure_2 = tmp3[1];
  let obj3 = arg1(closure_2[14]);
  let obj4 = arg1(closure_2[15]);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(obj4.getActivityApplicationId(quest));
  let callback = getOrFetchApplication;
  let obj5 = arg1(closure_2[16]);
  const questTaskDetails = obj5.useQuestTaskDetails(quest);
  let obj6 = arg1(closure_2[17]);
  obj = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: arg1(closure_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  const items1 = [getOrFetchApplication];
  const fn = () => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      let obj = first(closure_2[19]);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      obj.size = 87;
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  };
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj);
  const memo = React.useMemo(fn, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [quest.id];
  callback = React.useCallback(callback(fn), items2);
  let obj8 = arg1(closure_2[23]);
  const checkboxA11yNative = obj8.useCheckboxA11yNative({ checked: first });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = { -9223372036854775808: 1.2, 0: -228344806301899660000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0: -4818682305010937000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: tmp2.container };
  obj1 = { style: tmp2.content };
  obj2 = { style: tmp2.baseShadow };
  obj3 = { style: tmp2.imagesContainer };
  let tmp18 = null != memo;
  if (tmp18) {
    obj4 = { style: tmp2.appIconContainer };
    obj5 = {};
    obj6 = { uri: memo };
    obj5.source = obj6;
    obj5.style = tmp2.appIcon;
    obj4.children = callback3(importDefault(closure_2[25]), obj5);
    tmp18 = callback3(closure_7, obj4);
  }
  const items3 = [tmp18, ];
  obj8 = { marginLeft: -1546187982, fontSize: -418759312, lineHeight: 2061584447, quest, style: tmp2.questRewardTile };
  items3[1] = callback3(closure_7, { style: tmp2.rewardTileContainer, children: callback3(importDefault(closure_2[26]), obj8) });
  obj3.children = items3;
  obj2.children = callback4(closure_7, obj3);
  const items4 = [callback3(closure_7, obj2), ];
  const obj9 = { style: tmp2.textContainer };
  const obj10 = { style: { textAlign: "center" } };
  const intl = arg1(closure_2[28]).intl;
  obj10.children = intl.string(arg1(closure_2[28]).t.IrNgN4);
  const items5 = [callback3(arg1(closure_2[27]).Text, obj10), ];
  const obj11 = { INTEGRATION_CREATE: "<string:1900005261>", ConstraintReasonCode: "Array", style: { textAlign: "center" } };
  const intl2 = arg1(closure_2[28]).intl;
  const items6 = [intl2.format(arg1(closure_2[28]).t.V3NSJx, { questName: quest.config.messages.questName }), "\u00A0", questsInstructionsToWinReward];
  obj11.children = items6;
  items5[1] = callback4(arg1(closure_2[27]).Text, obj11);
  obj9.children = items5;
  items4[1] = callback4(closure_7, obj9);
  obj1.children = items4;
  const items7 = [callback4(closure_7, obj1), ];
  const obj13 = { style: tmp2.footer };
  const obj14 = { style: tmp2.buttonsContainer };
  const obj15 = { size: "lg" };
  const intl3 = arg1(closure_2[28]).intl;
  obj15.text = intl3.string(arg1(closure_2[28]).t.l7E81v);
  obj15.onPress = callback;
  const items8 = [callback3(arg1(closure_2[29]).Button, obj15), ];
  const obj16 = { size: "lg" };
  const intl4 = arg1(closure_2[28]).intl;
  obj16.text = intl4.string(arg1(closure_2[28]).t.fyT2ol);
  obj16.onPress = function onPress() {
    const result = quest(closure_2[20]).dismissQuestActivityModal(quest.id);
    let arr = first(closure_2[22]);
    arr = arr.pop();
  };
  obj16.variant = "secondary";
  items8[1] = callback3(arg1(closure_2[29]).Button, obj16);
  obj14.children = items8;
  const items9 = [callback4(closure_7, obj14), ];
  const obj17 = { accessibilityRole };
  const intl5 = arg1(closure_2[28]).intl;
  obj17.accessibilityLabel = intl5.string(arg1(closure_2[28]).t.931n1T);
  obj17.accessibilityState = accessibilityState;
  obj17.onPress = function onPress() {
    callback(!first);
    quest(callback[20]).setAutoEnroll(!first);
  };
  obj17.style = { "Bool(false)": 1.08, "Bool(false)": -64776102579265070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -22892810781829656000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 2.0000004801551365 };
  const items10 = [callback3(arg1(closure_2[30]).FormCheckbox, { checked: first }), ];
  const obj18 = { INTEGRATION_CREATE: "<string:1900005261>", ConstraintReasonCode: "Array" };
  const intl6 = arg1(closure_2[28]).intl;
  obj18.children = intl6.string(arg1(closure_2[28]).t.931n1T);
  items10[1] = callback3(arg1(closure_2[27]).Text, obj18);
  obj17.children = items10;
  items9[1] = callback4(closure_6, obj17);
  obj13.children = items9;
  items7[1] = callback4(closure_7, obj13);
  obj.children = items7;
  return callback4(arg1(closure_2[24]).Stack, obj);
}
function CloseButton() {
  const obj = {
    source: importDefault(dependencyMap[32]),
    onPress() {
      return callback(closure_2[22]).pop();
    }
  };
  const intl = arg1(dependencyMap[28]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[28]).t.cpT0Cq);
  return callback3(arg1(dependencyMap[31]).HeaderActionButton, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Pressable: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const QuestsExperimentLocations = arg1(dependencyMap[6]).QuestsExperimentLocations;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = { MAIN: "main" };
const tmp3 = arg1(dependencyMap[7]);
let closure_14 = arg1(dependencyMap[8]).createStyles((arg0) => {
  let obj = {};
  obj = { flex: 1, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_24, paddingVertical: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_48 };
  obj.container = obj;
  obj.content = { marginTop: "auto" };
  obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, marginBottom: importDefault(dependencyMap[9]).space.PX_32 };
  let obj3 = arg1(dependencyMap[10]);
  if (obj3.isIOS()) {
    if (arg0) {
      const obj1 = { <string:3806585169>: "channelId", <string:1549155172>: "channelId", <string:2898154082>: "channelId", <string:1415687317>: "transform", shadowOffset: { aze: false, azj: true } };
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
  } else {
    obj3 = {};
    if (arg0) {
      const obj4 = { dropShadow: {} };
      const items = [obj4, ];
      const obj5 = { dropShadow: { active: true, initialX: true, initialY: true, panelX: true } };
      items[1] = obj5;
      let items1 = items;
    } else {
      items1 = [];
    }
    obj3.filter = items1;
    const merged = Object.assign(obj3);
    obj.imagesContainer = obj;
    let obj9 = arg1(dependencyMap[10]);
    const obj6 = {};
    if (obj9.isIOS()) {
      if (arg0) {
        const obj7 = { shadowOffset: {} };
        let obj8 = obj7;
      } else {
        obj8 = {};
      }
      const merged1 = Object.assign(obj8);
    } else {
      obj.baseShadow = obj6;
      obj9 = { borderRadius: importDefault(dependencyMap[9]).radii.xl };
      const obj10 = { rotate: "-12.41deg" };
      const items2 = [obj10];
      obj9.transform = items2;
      obj.appIconContainer = obj9;
      const obj11 = { aze: null, azj: null, borderRadius: importDefault(dependencyMap[9]).radii.xl - 2.18 };
      obj.appIcon = obj11;
      const obj12 = { borderRadius: importDefault(dependencyMap[9]).radii.xl };
      const obj13 = { translateX: -10 };
      const items3 = [obj13, ];
      const obj14 = { rotate: "7.81deg" };
      items3[1] = obj14;
      obj12.transform = items3;
      obj.rewardTileContainer = obj12;
      const obj15 = { borderRadius: importDefault(dependencyMap[9]).radii.xl - 2.18 };
      obj.questRewardTile = obj15;
      const obj16 = { alignItems: "center", gap: importDefault(dependencyMap[9]).space.PX_8 };
      obj.textContainer = obj16;
      const obj17 = { gap: importDefault(dependencyMap[9]).space.PX_8 };
      obj.buttonsContainer = obj17;
      obj.footer = { 0: null, 9223372036854775807: null, 9223372036854775807: null };
      return obj;
    }
  }
});
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default function QuestActivityUnenrolledModal(questId) {
  const arg1 = questId.questId;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => quest.getQuest(questId));
  const importDefault = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    obj = {
      headerLeft: CloseButton,
      headerRight() {
          return null;
        },
      headerTitle() {
          const obj = { INTEGRATION_CREATE: true, ConstraintReasonCode: true };
          const intl = questId(closure_2[28]).intl;
          obj.children = intl.string(questId(closure_2[28]).t.l7E81v);
          return callback(questId(closure_2[27]).Text, obj);
        },
      render() {
          const obj = {
            questOrQuests: stateFromStores,
            questContent: questId(closure_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: questId(closure_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            children() {
              return callback(closure_15, { quest: closure_1 });
            }
          };
          return callback(questId(closure_2[33]).QuestContentImpressionTrackerNative, obj);
        }
    };
    obj[constants.MAIN] = obj;
    const obj1 = { screens: obj, initialRouteName: constants.MAIN };
    return callback3(arg1(dependencyMap[34]).Modal, obj1);
  }
};
