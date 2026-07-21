// Module ID: 11730
// Function ID: 91097
// Name: CreationIntent
// Dependencies: []
// Exports: default

// Module 11730 (CreationIntent)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ CreateGuildModalStates: closure_6, GuildTemplateTriggers: closure_7, NUXGuildTemplatesAnalytics: closure_8 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_9, AnalyticsLocations: closure_10 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, marginTop: arg1(dependencyMap[6]).NAV_BAR_HEIGHT };
obj.contentContainer = obj;
const tmp5 = arg1(dependencyMap[4]);
obj.scrollContainer = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
obj.headerContainer = {};
obj.headerTitle = { collapsable: "absolute", preventClipping: 0 };
obj.headerDescription = { "Bool(false)": null, "Bool(false)": null };
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
obj.sections = { paddingHorizontal: importDefault(dependencyMap[7]).modules.mobile.TABLE_ROW_PADDING };
obj.skipDescription = { <string:3246022526>: "079f1f5099b5396d01af5ed23e7bac76", <string:1764223313>: "ic_invites_disabled", <string:3679956194>: "png", <string:944643202>: true };
let closure_13 = obj.createStyles(obj);
let closure_14 = Math.random() < 0.5;
const obj2 = { paddingHorizontal: importDefault(dependencyMap[7]).modules.mobile.TABLE_ROW_PADDING };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default function CreationIntent(arg0) {
  let trigger;
  ({ guildTemplate: closure_0, trigger } = arg0);
  const importDefault = trigger;
  let closure_2;
  function onPress(isCommunityIntent) {
    let obj = trigger(arr[12]);
    obj = { skipped: null == isCommunityIntent };
    let tmp = null != isCommunityIntent;
    if (tmp) {
      tmp = isCommunityIntent;
    }
    obj.is_community = tmp;
    obj.track(constants4.GUILD_CREATION_INTENT_SELECTED, obj);
    obj = { guildTemplate: lib, isCommunityIntent };
    const arr = arr.push(constants.CREATE_SERVER, obj);
    if (constants2.NUF === trigger) {
      let obj3 = lib(arr[11]);
      const obj1 = { skip: false };
      obj3.trackNUFStep(constants3.STEP_CREATION_INTENT, constants3.STEP_GUILD_CREATE, obj1);
      const obj2 = {};
      let id;
      if (null != lib) {
        id = lib.id;
      }
      obj2.guild_template_name = id;
      trigger(arr[12]).track(constants4.CREATE_GUILD_VIEWED, obj2);
      const obj6 = trigger(arr[12]);
    } else if (constants2.IN_APP === tmp4) {
      obj3 = { type: "Create Guild Step 2", location_section: constants5.CREATE_JOIN_GUILD_MODAL };
      trigger(arr[12]).track(constants4.OPEN_MODAL, obj3);
      const obj8 = trigger(arr[12]);
      const obj4 = { location_section: constants5.CREATE_JOIN_GUILD_MODAL };
      let id1;
      if (null != lib) {
        id1 = lib.id;
      }
      obj4.guild_template_name = id1;
      trigger(arr[12]).track(constants4.CREATE_GUILD_VIEWED, obj4);
      const obj10 = trigger(arr[12]);
    }
  }
  const tmp = callback3();
  let obj = arg1(closure_2[8]);
  closure_2 = obj.useNavigation();
  let obj1 = arg1(closure_2[9]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const React = isScreenReaderEnabled;
  const ref = React.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = lib(closure_2[10]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = React.useEffect(() => {
    if (constants2.NUF === trigger) {
      let obj = { skip: false };
      lib(closure_2[11]).trackNUFStep(constants3.STEP_GUILD_TEMPLATE, constants3.STEP_CREATION_INTENT, obj);
      const obj3 = lib(closure_2[11]);
    } else if (constants2.IN_APP === tmp) {
      obj = trigger(closure_2[12]);
      obj = { type: "Server Intent Discovery" };
      obj.track(constants4.OPEN_MODAL, obj);
    }
  }, items1);
  obj = { top: true, style: tmp.contentContainer };
  obj = { style: tmp.scrollContainer };
  obj1 = { style: tmp.headerContainer };
  const obj2 = { ref, style: tmp.headerTitle };
  const intl = arg1(closure_2[15]).intl;
  obj2.children = intl.string(arg1(closure_2[15]).t.f3MvGS);
  const items2 = [callback(arg1(closure_2[14]).Text, obj2), ];
  const obj3 = { style: tmp.headerDescription };
  const intl2 = arg1(closure_2[15]).intl;
  obj3.children = intl2.string(arg1(closure_2[15]).t.nOzc7w);
  items2[1] = callback(arg1(closure_2[14]).Text, obj3);
  obj1.children = items2;
  const items3 = [callback2(ref, obj1), , ];
  const obj4 = { style: tmp.sections };
  const obj5 = { hasIcons: true };
  const tmp13 = importDefault(closure_2[17]);
  const obj6 = {};
  const tmp15 = arg1(closure_2[18]);
  if (closure_14) {
    obj6.Icon = tmp15.ChairIllocon;
    const intl5 = tmp14(tmp12[15]).intl;
    obj6.message = intl5.string(tmp14(tmp12[15]).t.uE7zcu);
    obj6.onPress = function onPress() {
      onPress(false);
    };
    const items4 = [tmp10(tmp13, obj6), ];
    const obj7 = {};
    let tmp11Result = tmp11(tmp12[17]);
    obj7.Icon = tmp14(tmp12[18]).WorldIllocon;
    const intl6 = tmp14(tmp12[15]).intl;
    obj7.message = intl6.string(tmp14(tmp12[15]).t.h9Q1lG);
    obj7.onPress = function onPress() {
      onPress(true);
    };
    items4[1] = tmp10(tmp11Result, obj7);
    obj5.children = items4;
    let tmp17 = obj5;
  } else {
    obj6.Icon = tmp15.WorldIllocon;
    const intl3 = tmp14(tmp12[15]).intl;
    obj6.message = intl3.string(tmp14(tmp12[15]).t.h9Q1lG);
    obj6.onPress = function onPress() {
      onPress(true);
    };
    const items5 = [tmp10(tmp13, obj6), ];
    const obj8 = {};
    tmp11Result = tmp11(tmp12[17]);
    obj8.Icon = tmp14(tmp12[18]).ChairIllocon;
    const intl4 = tmp14(tmp12[15]).intl;
    obj8.message = intl4.string(tmp14(tmp12[15]).t.uE7zcu);
    obj8.onPress = function onPress() {
      onPress(false);
    };
    items5[1] = tmp10(tmp11Result, obj8);
    obj5.children = items5;
    tmp17 = obj5;
  }
  obj4.children = callback2(arg1(closure_2[16]).TableRowGroup, tmp17);
  items3[1] = callback(ref, obj4);
  const obj9 = { style: tmp.skipDescription };
  const intl7 = arg1(closure_2[15]).intl;
  obj9.children = intl7.format(arg1(closure_2[15]).t.SMc+Gz, {
    onSkip(arg0) {
      onPress(null);
    }
  });
  items3[2] = callback(arg1(closure_2[19]).TextWithIOSLinkWorkaround, obj9);
  obj.children = items3;
  obj.children = callback2(onPress, obj);
  return callback(arg1(closure_2[13]).SafeAreaPaddingView, obj);
};
