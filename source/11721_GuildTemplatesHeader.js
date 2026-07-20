// Module ID: 11721
// Function ID: 91062
// Name: GuildTemplatesHeader
// Dependencies: []
// Exports: default

// Module 11721 (GuildTemplatesHeader)
function GuildTemplatesHeader() {
  const tmp = callback5();
  let obj = { style: tmp.headerContainer };
  obj = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.headerTitle };
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.5HZu07);
  const items = [callback3(arg1(dependencyMap[10]).Text, obj), ];
  obj = { style: tmp.headerDescription };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.children = intl2.string(arg1(dependencyMap[11]).t./k/L/j);
  items[1] = callback3(arg1(dependencyMap[10]).Text, obj);
  obj.children = items;
  return callback4(closure_5, obj);
}
function GuildTemplatesJoinFooter(trigger) {
  trigger = trigger.trigger;
  const arg1 = trigger;
  const onHeightChange = trigger.onHeightChange;
  const importDefault = onHeightChange;
  const tmp = callback5();
  let obj = arg1(closure_2[12]);
  closure_2 = obj.useNavigation();
  if (trigger === constants.NUF) {
    const intl2 = arg1(closure_2[11]).intl;
    let stringResult = intl2.string(arg1(closure_2[11]).t.INo2NK);
  } else {
    const intl = arg1(closure_2[11]).intl;
    stringResult = intl.string(arg1(closure_2[11]).t.riOUtB);
  }
  const items = [onHeightChange];
  obj = {
    style: items1,
    onLayout: React.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items)
  };
  const items1 = [tmp.footerSafeAreaContainer, { paddingBottom: importDefault(closure_2[13])().bottom }];
  obj = { style: tmp.footerContainer };
  const obj1 = { Promise: "done", marginTop: "construct", flags: "apply", style: tmp.footerTitle };
  const intl3 = arg1(closure_2[11]).intl;
  obj1.children = intl3.string(arg1(closure_2[11]).t.N+Mi/U);
  const items2 = [callback3(arg1(closure_2[10]).Text, obj1), ];
  const obj2 = {
    0: null,
    0: null,
    text: stringResult,
    onPress() {
      if (constants2.NUF === trigger) {
        let obj = trigger(arr[15]);
        obj = { skip: false };
        obj.trackNUFStep(constants3.STEP_GUILD_TEMPLATE, constants3.STEP_GUILD_JOIN, obj);
        onHeightChange(arr[16]).track(constants4.JOIN_GUILD_VIEWED);
        const obj3 = onHeightChange(arr[16]);
      } else if (constants2.IN_APP === tmp) {
        obj = { location_section: constants5.CREATE_JOIN_GUILD_MODAL };
        onHeightChange(arr[16]).track(constants4.JOIN_GUILD_VIEWED, obj);
        const obj4 = onHeightChange(arr[16]);
      }
      const arr = arr.push(constants.JOIN_SERVER, {});
    }
  };
  items2[1] = callback3(arg1(closure_2[14]).Button, obj2);
  obj.children = items2;
  obj.children = callback4(closure_5, obj);
  return callback3(closure_5, obj);
}
function GuildTemplatesItem(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const arg1 = guildTemplate;
  const importDefault = guildTemplate.onGuildTemplatePress;
  const obj = {
    Icon: arg1(dependencyMap[18]).GUILD_TEMPLATE_ICON_COMPONENTS[guildTemplate.id],
    message: guildTemplate.label,
    onPress() {
      return onGuildTemplatePress(guildTemplate);
    }
  };
  return callback3(importDefault(dependencyMap[17]), obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ getGuildTemplatesMap: closure_7, GuildTemplateId: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ CreateGuildModalStates: closure_9, GuildTemplateTriggers: closure_10, NUXGuildTemplatesAnalytics: closure_11 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
({ AnalyticEvents: closure_12, AnalyticsLocations: closure_13 } = arg1(dependencyMap[5]));
const tmp5 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { flex: { flex: 1 } };
obj = { marginTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT };
obj.contentContainer = obj;
const tmp6 = arg1(dependencyMap[6]);
obj.scrollContainer = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER };
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER };
obj.sections = { paddingHorizontal: importDefault(dependencyMap[9]).modules.mobile.TABLE_ROW_PADDING, gap: 24 };
obj.headerContainer = { ownedByVerticalScrollExperiment: "not_verified", desktopBitrate: "gr", HeaderTitle: null, FORUM_CHANNEL_FOOTER: "Group 8" };
obj.headerTitle = { person_pouting: -0.0014069081515246523, cv: -0.0001058445630777106 };
obj.headerDescription = { 9223372036854775807: false, 9223372036854775807: false };
const obj2 = { paddingHorizontal: importDefault(dependencyMap[9]).modules.mobile.TABLE_ROW_PADDING, gap: 24 };
obj.footerSafeAreaContainer = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.footerContainer = { 9223372036854775807: false, -9223372036854775808: false, 0: false, 0: false };
obj.footerTitle = {};
let closure_16 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/create_guild/native/components/GuildTemplates.tsx");

export default function GuildTemplates(trigger) {
  trigger = trigger.trigger;
  const arg1 = trigger;
  const _location = trigger.location;
  const importDefault = _location;
  const fromStep = trigger.fromStep;
  const dependencyMap = fromStep;
  let callback;
  function onGuildTemplatePress(guildTemplate) {
    let obj = { guildTemplate, trigger };
    if (trigger === constants2.IN_APP) {
      obj = { template_name: guildTemplate.id };
      _location(fromStep[16]).track(constants4.GUILD_TEMPLATE_SELECTED, obj);
      const obj2 = _location(fromStep[16]);
    }
  }
  const tmp = callback5();
  let obj = arg1(dependencyMap[12]);
  callback = obj.useNavigation();
  const items = [trigger, _location, fromStep];
  const effect = React.useEffect(() => {
    if (constants2.NUF === trigger) {
      let obj = trigger(fromStep[15]);
      if (null != fromStep) {
        let STEP_REGISTRATION = fromStep;
      } else {
        STEP_REGISTRATION = constants3.STEP_REGISTRATION;
      }
      obj = { skip: false };
      obj.trackNUFStep(STEP_REGISTRATION, constants3.STEP_GUILD_TEMPLATE, obj);
    } else if (constants2.IN_APP === tmp) {
      obj = { type: "Create Guild Templates" };
      let str = "Guild List";
      if (null != _location) {
        str = _location;
      }
      obj.source = str;
      _location(fromStep[16]).track(constants4.OPEN_MODAL, obj);
      const obj3 = _location(fromStep[16]);
    }
  }, items);
  const first = callback(React.useState(callback2()), 1)[0];
  const tmp4 = callback(React.useState(110), 2);
  const React = tmp4[1];
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  obj = { top: true, style: items1 };
  const items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  obj = { style: tmp.flex };
  const obj1 = { style: tmp.scrollContainer, contentContainerStyle: obj2 };
  const items2 = [callback3(GuildTemplatesHeader, {}), ];
  const obj3 = { style: tmp.sections };
  const obj4 = { hasIcons: true, children: callback3(GuildTemplatesItem, { guildTemplate: first[closure_8.CREATE], onGuildTemplatePress }) };
  const items3 = [callback3(arg1(dependencyMap[20]).TableRowGroup, obj4), ];
  const obj6 = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj6.title = intl.string(arg1(dependencyMap[11]).t.JGDkfg);
  obj6.hasIcons = true;
  const items4 = [callback3(GuildTemplatesItem, { guildTemplate: first[closure_8.GAMING], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[closure_8.SCHOOL_CLUB], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[closure_8.STUDY], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[closure_8.FRIENDS], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[closure_8.CREATORS], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[closure_8.LOCAL_COMMUNITY], onGuildTemplatePress })];
  obj6.children = items4;
  items3[1] = callback4(arg1(dependencyMap[20]).TableRowGroup, obj6);
  obj3.children = items3;
  items2[1] = callback4(closure_5, obj3);
  obj1.children = items2;
  const items5 = [callback4(closure_6, obj1), callback3(GuildTemplatesJoinFooter, { trigger, onHeightChange: callback })];
  obj.children = items5;
  obj.children = callback4(closure_5, obj);
  return callback3(arg1(dependencyMap[19]).SafeAreaPaddingView, obj);
};
