// Module ID: 13445
// Function ID: 102092
// Name: ProfileCustomizationSubsection
// Dependencies: []

// Module 13445 (ProfileCustomizationSubsection)
let closure_3 = [1077651832];
let closure_4 = [-0.0000000000000000000000000000000000000000000000000000000000000000006398718284889051, 0.000000000000000000000000000000000000000000000000000000000000000000000018134775577771325];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[3]);
const View = arg1(dependencyMap[4]).View;
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const ProfileCustomizationSubsection = arg1(dependencyMap[7]).ProfileCustomizationSubsection;
({ AnalyticEvents: closure_13, AnalyticsSections: closure_14 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
let closure_17 = arg1(dependencyMap[10]).createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let obj = {
  renderLabel() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.2p07FR);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return callback4(importDefault(dependencyMap[12]), { autoFocusElement: autoFocusElement.autoFocusElement });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
const items = [obj, ];
obj = {
  renderLabel() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.kPHroX);
  },
  id: "edit-user-profiles-guilds",
  renderPage() {
    return callback4(importDefault(dependencyMap[13]), {});
  },
  subSection: ProfileCustomizationSubsection.GUILD
};
items[1] = obj;
const obj2 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(() => {
  const tmp = callback6();
  const tmp2 = callback3(importAllResult.useState(0), 2);
  let callback = tmp2[1];
  let obj = callback(dependencyMap[14]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const importDefault = nativeStackNavigation;
  let obj1 = callback(dependencyMap[15]);
  const params = obj1.useSettingNavigationRoute().params;
  let autoFocusElement;
  if (null != params) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = closure_10.useField("subsection");
  const dependencyMap = field;
  obj = { autoFocusElement };
  const tmp6 = function getTabItems(arg0) {
    let closure_0 = arg0;
    return closure_18.map((renderLabel) => {
      let id;
      let renderPage;
      ({ id, renderPage } = renderLabel);
      return { label: renderLabel.renderLabel(), id, page: renderPage(renderLabel) };
    });
  }(obj);
  obj = { items: tmp6, pageWidth: tmp2[0] };
  let num = 0;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  obj.defaultIndex = num;
  obj.onPageChange = function onPageChange(arg0) {
    let first = closure_18[arg0];
    if (null == first) {
      first = closure_18[0];
    }
    const obj = { subsection: first.subSection };
    state.setState(obj);
  };
  obj.onPageChangeStart = function onPageChangeStart(arg0, onConfirm) {
    const obj = { hasEdits: stateFromStores, resetPending: callback(field[18]).resetAllPending, onHasEdits: callback(field[19]).dismissKeyboard, onConfirm };
    return nativeStackNavigation(field[17])(obj);
  };
  const segmentedControlState = callback(dependencyMap[16]).useSegmentedControlState(obj);
  const activeIndex = segmentedControlState.activeIndex;
  let first = items[activeIndex.get(activeIndex)];
  if (null == first) {
    first = items[0];
  }
  let closure_3 = first;
  const tmp10 = importDefault(dependencyMap[20])();
  const handleSubmit = tmp10.handleSubmit;
  let closure_4 = handleSubmit;
  const obj4 = callback(dependencyMap[16]);
  const tmp12 = importDefault(dependencyMap[21])();
  const guild = tmp12.guild;
  let closure_5 = guild;
  const handleSubmit2 = tmp12.handleSubmit;
  const callback2 = handleSubmit2;
  const tmp11 = callback2(tmp10, closure_3);
  const tmp13 = callback2(tmp12, closure_4);
  const items = [closure_11];
  let stateFromStores = callback(dependencyMap[22]).useStateFromStores(items, () => closure_11.showNotice());
  const callback3 = stateFromStores;
  const items1 = [field, handleSubmit, handleSubmit2];
  callback = importAllResult.useCallback(() => {
    if (field === constants.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const View = callback;
  const items2 = [first.subSection];
  const effect = importAllResult.useEffect(() => {
    let obj = nativeStackNavigation(field[23]);
    obj = { settings_type: "user", subsection: first.subSection, destination_pane: constants3.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [guild];
  const effect1 = importAllResult.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = callback(field[24]).initGuildIdentitySettings(guild.id);
      const obj = callback(field[24]);
    }
    return callback(field[18]).resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = importAllResult.useEffect(() => () => {
    closure_10.resetState();
  }, []);
  const items4 = [nativeStackNavigation, stateFromStores, tmp11.isSubmitting || tmp13.isSubmitting, callback];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    nativeStackNavigation.setOptions({
      headerShadowVisible: false,
      headerRight: tmp15 ? () => callback3(callback(closure_2[25]).HeaderSubmittingIndicator, {}) : (arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = callback(closure_2[11]).intl;
        obj["label"] = intl.string(callback(closure_2[11]).t.R3BPH+);
        obj["disabled"] = !closure_7;
        // CreateGeneratorClosureLongIndex (0x67)
        obj["onPress"] = callback2(tmp);
        return callback3(callback(closure_2[26]).HeaderTextButton, obj);
      }
    });
  }, items4);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj6 = callback(dependencyMap[22]);
  if (stateFromStores) {
    stateFromStores = !tmp15;
  }
  importDefault(dependencyMap[28])(stateFromStores, (data) => {
    const callback = data.data.action;
    const obj = {
      hasEdits: stateFromStores,
      resetPending: callback(field[18]).resetAllPending,
      onHasEdits: callback(field[19]).dismissKeyboard,
      onConfirm() {
        return closure_1.dispatch(action);
      }
    };
    nativeStackNavigation(field[17])(obj);
  });
  obj1 = { style: tmp.container, onLayout: callback1 };
  const tmp22 = importDefault(dependencyMap[28]);
  const items5 = [callback4(View, { style: tmp.controls, children: callback4(callback(dependencyMap[29]).Tabs, { state: segmentedControlState }) }), callback4(callback(dependencyMap[30]).SegmentedControlPages, { state: segmentedControlState })];
  obj1.children = items5;
  return callback5(View, obj1);
});
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
