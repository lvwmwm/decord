// Module ID: 11155
// Function ID: 86753
// Name: Placeholder
// Dependencies: []
// Exports: default

// Module 11155 (Placeholder)
function Placeholder() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[12]);
  const placeholderWidth = obj.usePlaceholderWidth(20, 90);
  let obj1 = arg1(dependencyMap[12]);
  obj = { style: tmp.commandContainer };
  obj = { style: tmp.loadingCommandIcon };
  const placeholderWidth1 = obj1.usePlaceholderWidth(20, 70);
  const items = [callback2(closure_5, obj), ];
  obj1 = {};
  const items1 = [tmp.loadingTextPlaceholder, { width: placeholderWidth }];
  const items2 = [callback2(closure_5, { style: items1 }), ];
  const items3 = [tmp.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
  items2[1] = callback2(closure_5, { style: items3 });
  obj1.children = items2;
  items[1] = callback3(closure_5, obj1);
  obj.children = items;
  return callback3(closure_5, obj);
}
function FrecentActivityOneClickCTA(context) {
  let entrypoint;
  let onActivityItemSelected;
  context = context.context;
  const arg1 = context;
  const app = context.app;
  const importDefault = app;
  let dependencyMap;
  let obj = arg1(dependencyMap[13]);
  const appLauncherContext = obj.useAppLauncherContext();
  ({ entrypoint, onActivityItemSelected } = appLauncherContext);
  const id = React.useId();
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_7];
  const tmp3 = callback(obj1.useStateFromStoresArray(items, () => {
    const items = [closure_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = closure_7.getLaunchState(app.applicationId, id);
    return items;
  }), 2);
  let first = tmp3[0];
  obj = { context, applicationId: app.applicationId };
  let isLaunching = null != tmp5;
  const activityAction = arg1(dependencyMap[30]).useActivityAction(obj);
  if (isLaunching) {
    isLaunching = tmp5.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp5.componentId === id;
  }
  const obj3 = arg1(dependencyMap[30]);
  obj = { applicationId: app.applicationId, context, sectionName: arg1(dependencyMap[15]).AppLauncherSectionName.RECENT_APPS, onActivityItemSelected, location: arg1(dependencyMap[31]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  const handleActivityItemSelected = arg1(dependencyMap[22]).useHandleActivityItemSelected(obj).handleActivityItemSelected;
  dependencyMap = handleActivityItemSelected;
  const items1 = [handleActivityItemSelected];
  obj1 = { app };
  const callback = React.useCallback(() => {
    handleActivityItemSelected();
  }, items1);
  if (!first) {
    first = activityAction === arg1(dependencyMap[30]).ActivityAction.LEAVE;
  }
  obj1.disabled = first;
  obj1.submitting = isLaunching;
  obj1.onAppSelected = callback;
  return closure_11(FrecentApp, obj1);
}
function FrecentApp(app) {
  let disabled;
  let submitting;
  app = app.app;
  const arg1 = app;
  ({ disabled, submitting } = app);
  if (submitting === undefined) {
    submitting = false;
  }
  const importDefault = app.onAppSelected;
  const tmp = callback4();
  if (null == app.section) {
    return null;
  } else {
    const appLauncherIconSource = arg1(dependencyMap[22]).getAppLauncherIconSource(app.section.application);
    let obj = { style: disabled ? tmp.appContainerDisabled : tmp.appContainer, disabled, accessible: true };
    const application = app.section.application;
    let name;
    if (null != application) {
      name = application.name;
    }
    obj.accessibilityLabel = name;
    obj.accessibilityRole = "button";
    obj.onPress = function onPress() {
      let tmp = null != onAppSelected;
      if (tmp) {
        tmp = null != app.section.application;
      }
      if (tmp) {
        const obj = { application: app.section.application, sectionName: app(closure_2[15]).AppLauncherSectionName.RECENT_APPS };
        onAppSelected(obj);
      }
    };
    let tmp3 = null != appLauncherIconSource;
    if (tmp3) {
      obj = { style: tmp.appIcon, source: appLauncherIconSource };
      tmp3 = callback2(importDefault(dependencyMap[32]), obj);
    }
    const items = [tmp3, ];
    obj = { submitting, style: tmp.submittingOverlay };
    items[1] = callback2(arg1(dependencyMap[33]).SubmittingOverlay, obj);
    obj.children = items;
    return closure_12(arg1(dependencyMap[29]).PressableOpacity, obj, app.applicationId);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const FrecencySectionSelection = arg1(dependencyMap[4]).FrecencySectionSelection;
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
obj.container = obj;
obj.headerContainer = { "Bool(true)": "<string:3435973836>", "Bool(true)": "<string:1903247380>", "Bool(true)": "r" };
const obj1 = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[8]).space.PX_4 };
obj.header = obj1;
obj.scrollView = {};
const tmp3 = arg1(dependencyMap[6]);
obj.scrollViewContentContainer = { gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.contextMenuIcon = { <string:1140607356>: "<string:16777479>", <string:1751293292>: "<string:36295491>" };
const obj2 = { gap: importDefault(dependencyMap[8]).space.PX_8 };
const merged = Object.assign(importDefault(dependencyMap[8]).shadows.SHADOW_LOW);
obj.appContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.lg };
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.lg };
const merged1 = Object.assign(importDefault(dependencyMap[8]).shadows.SHADOW_LOW);
obj.appContainerDisabled = { backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.lg, opacity: 0.4 };
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.lg, opacity: 0.4 };
const merged2 = Object.assign(importDefault(dependencyMap[8]).shadows.SHADOW_LOW);
obj.commandContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.md, paddingLeft: importDefault(dependencyMap[8]).space.PX_12, paddingRight: importDefault(dependencyMap[8]).space.PX_16, paddingVertical: importDefault(dependencyMap[8]).space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: importDefault(dependencyMap[8]).space.PX_8 };
const obj6 = { aze: 43429575352196550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, azj: 13343160674537630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.appIcon = obj6;
const obj7 = { aze: false, azj: false, borderRadius: importDefault(dependencyMap[8]).radii.sm, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE };
obj.loadingCommandIcon = obj7;
const obj5 = { backgroundColor: importDefault(dependencyMap[8]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[8]).radii.md, paddingLeft: importDefault(dependencyMap[8]).space.PX_12, paddingRight: importDefault(dependencyMap[8]).space.PX_16, paddingVertical: importDefault(dependencyMap[8]).space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.loadingTextPlaceholder = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: importDefault(dependencyMap[8]).radii.lg, alignSelf: "flex-start", marginBottom: importDefault(dependencyMap[8]).space.PX_4 };
const obj8 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: importDefault(dependencyMap[8]).radii.lg, alignSelf: "flex-start", marginBottom: importDefault(dependencyMap[8]).space.PX_4 };
obj.loadingTextPlaceholderSmall = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: importDefault(dependencyMap[8]).radii.lg, alignSelf: "flex-start" };
const obj9 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: importDefault(dependencyMap[8]).radii.lg, alignSelf: "flex-start" };
obj.submittingOverlay = { borderRadius: importDefault(dependencyMap[8]).radii.lg };
let closure_13 = obj.createStyles(obj);
const obj11 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
let closure_15 = { code: "function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}" };
const obj10 = { borderRadius: importDefault(dependencyMap[8]).radii.lg };
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySection.tsx");

export default function FrecencySection(loading) {
  let commands;
  ({ context: closure_0, sectionDescriptors: closure_1, commands } = loading);
  const dependencyMap = commands;
  loading = loading.loading;
  const callback = loading;
  const apps = loading.apps;
  const React = apps;
  ({ onAppSelected: closure_5, onCommandSelected: closure_6, onViewAllSelected: closure_7 } = loading);
  let first1;
  let closure_12;
  let callback4;
  let constants;
  let closure_15;
  const tmp = callback4();
  let closure_8 = tmp;
  let obj = arg1(dependencyMap[13]);
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const FrecencySectionSelection = first;
  let closure_10 = tmp2[1];
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => tmp.getSelection());
  arg1(dependencyMap[14]);
  [][0] = closure_7;
  if (commands.length > 0) {
    if (stateFromStores === FrecencySectionSelection.COMMANDS) {
      let APPS = constants.COMMANDS;
    }
    const tmp12 = callback(tmp8(APPS), 2);
    first1 = tmp12[0];
    closure_12 = tmp12[1];
    const tmp16 = obj.useAppLauncherContext().entrypoint === arg1(dependencyMap[15]).AppLauncherEntrypoint.VOICE;
    callback4 = tmp16;
    const items1 = [commands.length, apps.length, loading, first1];
    const effect = React.useEffect(() => {
      let tmp = loading;
      if (!loading) {
        let tmp3 = 0 === commands.length;
        if (tmp3) {
          tmp3 = 0 === apps.length;
        }
        tmp = tmp3;
      }
      if (!tmp) {
        let trackWithMetadataResult = callback(commands[16]);
        trackWithMetadataResult = {};
        if (first1 === constants.APPS) {
          let length = apps.length;
        } else {
          length = commands.length;
        }
        trackWithMetadataResult.num = length;
        if (first1 === constants.APPS) {
          let RECENT_COMMANDS = callback(commands[15]).AppLauncherSectionName.RECENT_APPS;
        } else {
          RECENT_COMMANDS = callback(commands[15]).AppLauncherSectionName.RECENT_COMMANDS;
        }
        trackWithMetadataResult.section_name = RECENT_COMMANDS;
        trackWithMetadataResult.location = callback(commands[15]).AppLauncherLocations.HOME;
        trackWithMetadataResult = trackWithMetadataResult.trackWithMetadata(lib.APP_LAUNCHER_FRECENTS_SEEN, trackWithMetadataResult);
      }
    }, items1);
    const items2 = [apps];
    const memo = React.useMemo(() => apps.slice(0, 8), items2);
    obj = { apps: memo, onlyActivityApps: tmp16 };
    function useFetchFrecentActivityApps(apps) {
      apps = apps.apps;
      const onlyActivityApps = apps.onlyActivityApps;
      const items = [apps, onlyActivityApps];
      const memo = apps.useMemo(() => {
        const mapped = apps.map((section) => {
          let tmp = null;
          if (null != section.section) {
            let id = null;
            if (null != section.section.application) {
              id = null;
              if (obj.isEmbeddedApp(section.section.application)) {
                id = null;
                if (closure_1) {
                  id = section.section.application.id;
                }
              }
              const obj = callback(closure_2[9]);
            }
            tmp = id;
          }
          return tmp;
        });
        return mapped.filter(apps(closure_2[10]).isNotNullish);
      }, items);
      onlyActivityApps(commands[11])(memo);
    }(obj);
    let obj3 = arg1(dependencyMap[17]);
    class V {
      constructor() {
        obj = {};
        obj = {};
        obj3 = context(commands[18]);
        str = "0deg";
        if (closure_9) {
          str = "-180deg";
        }
        obj.rotate = obj3.withTiming(str);
        items = [];
        items[0] = obj;
        obj.transform = items;
        return obj;
      }
    }
    obj = { withTiming: arg1(dependencyMap[18]).withTiming, isRecentsMenuOpen: first };
    V.__closure = obj;
    V.__workletHash = 4528534448308;
    V.__initData = closure_15;
    constants = obj3.useAnimatedStyle(V);
    if (0 === commands.length) {
      if (0 === apps.length) {
        return null;
      }
    }
    obj1 = {};
    const intl = arg1(dependencyMap[19]).intl;
    obj1.label = intl.string(arg1(dependencyMap[19]).t.XRBNsN);
    let prop;
    if (first1 === constants.COMMANDS) {
      prop = arg1(dependencyMap[20]).CheckmarkSmallBoldIcon;
    }
    obj1.IconComponent = prop;
    obj1.action = function action() {
      callback3(constants.COMMANDS);
      let obj = callback(commands[21]);
      const result = obj.setFrecencySectionSelection(first.COMMANDS);
      obj = { num: commands.length, section_name: callback(commands[15]).AppLauncherSectionName.RECENT_COMMANDS };
      callback(commands[16]).trackWithMetadata(lib.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    const items3 = [obj1, ];
    const obj2 = {};
    const intl2 = arg1(dependencyMap[19]).intl;
    obj2.label = intl2.string(arg1(dependencyMap[19]).t.TCAk0p);
    let prop1;
    if (first1 === constants.APPS) {
      prop1 = arg1(dependencyMap[20]).CheckmarkSmallBoldIcon;
    }
    obj2.IconComponent = prop1;
    obj2.action = function action() {
      callback3(constants.APPS);
      let obj = callback(commands[21]);
      const result = obj.setFrecencySectionSelection(first.APPS);
      obj = { num: apps.length, section_name: callback(commands[15]).AppLauncherSectionName.RECENT_APPS };
      callback(commands[16]).trackWithMetadata(lib.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    items3[1] = obj2;
    const substr = commands.slice(0, 8);
    const mapped = substr.map((type) => {
      const found = found.find((id) => id.id === id.applicationId);
      let obj = type(commands[22]);
      let application;
      if (null != found) {
        application = found.application;
      }
      const appLauncherIconSource = obj.getAppLauncherIconSource(application);
      if (null == found) {
        return null;
      } else {
        let FAKE_BUILT_IN_APP = found.application;
        if (null == FAKE_BUILT_IN_APP) {
          FAKE_BUILT_IN_APP = type(commands[9]).FAKE_BUILT_IN_APP;
        }
        const sectionName = type(commands[9]).getSectionName(FAKE_BUILT_IN_APP);
        if (type.type === type(commands[23]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
          let obj1 = type(commands[9]);
          let displayName = obj1.formatPrimaryEntryPointCommandName(type.displayName);
        } else {
          displayName = type.displayName;
        }
        obj = { style: tmp.commandContainer, accessible: true };
        const _HermesInternal = HermesInternal;
        obj.accessibilityLabel = "" + displayName + " " + sectionName;
        obj.accessibilityRole = "button";
        obj.onPress = function onPress() {
          return callback(arg0, found);
        };
        let tmp16 = null != appLauncherIconSource;
        if (tmp16) {
          obj = { iconSize: 36, iconSource: appLauncherIconSource };
          tmp16 = first1(found(commands[25]), obj);
        }
        const items = [tmp16, ];
        obj1 = {};
        const obj2 = { INTEGRATION_CREATE: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007863204514436, ConstraintReasonCode: 127277221446373050000000000, children: displayName };
        const items1 = [first1(type(commands[26]).Text, obj2), ];
        const obj3 = { INTEGRATION_CREATE: false, ConstraintReasonCode: false, children: sectionName };
        items1[1] = first1(type(commands[26]).Text, obj3);
        obj1.children = items1;
        items[1] = callback3(closure_5, obj1);
        obj.children = items;
        return callback3(type(commands[24]).PressableScale, obj, type.id);
      }
    });
    const found = mapped.filter(arg1(dependencyMap[10]).isNotNullish);
    const mapped1 = memo.map((section) => {
      let applicationId = section;
      if (null == section.section) {
        return null;
      } else {
        if (null != applicationId.section.application) {
          let obj = callback(commands[9]);
          obj = { context: callback, app: applicationId };
          applicationId = applicationId.applicationId;
          let tmp7 = first1(closure_17, obj, applicationId);
        }
        obj = { app: applicationId, onAppSelected: closure_5 };
        tmp7 = first1(closure_18, obj, applicationId.applicationId);
      }
    });
    const filter = mapped1.filter;
    if (0 === commands.length) {
      if (apps.length > 0) {
        let COMMANDS = constants.APPS;
      }
      closure_15 = COMMANDS;
      let mapped2 = tmp37;
      if (COMMANDS === constants.COMMANDS) {
        mapped2 = found;
      }
      obj3 = { style: tmp.container };
      const obj4 = { style: tmp.headerContainer };
      const obj5 = {};
      let tmp49 = commands.length > 0;
      const ContextMenu = arg1(dependencyMap[27]).ContextMenu;
      if (tmp49) {
        tmp49 = apps.length > 0;
      }
      obj5.enabled = tmp49;
      obj5.items = items3;
      obj5.triggerOnTap = true;
      obj5.onOpen = function onOpen() {
        return lib(true);
      };
      obj5.onClose = function onClose() {
        return lib(false);
      };
      obj5.children = function children(ref) {
        let obj = Object.create(null);
        obj.ref = 0;
        obj = { style: tmp.header };
        const merged = Object.assign(Object.assign(ref, obj));
        obj["ref"] = ref.ref;
        obj = { 9223372036854775807: "238a115f1ad03e07bad0181bb5c110d4", 9223372036854775807: "ic_playstation_device_ps5_32px", 9223372036854775807: "png" };
        const intl = callback(commands[19]).intl;
        obj.children = intl.string(callback(commands[19]).t.acSE0h);
        const items = [first1(callback(commands[26]).Text, obj), ];
        let tmp5 = null;
        if (commands.length > 0) {
          tmp5 = null;
          if (apps.length > 0) {
            const obj1 = { style: closure_14 };
            const obj2 = { color: "interactive-text-default", style: tmp.contextMenuIcon };
            obj1.children = first1(callback(commands[28]).ChevronSmallDownIcon, obj2);
            tmp5 = first1(callback2(commands[17]).View, obj1);
          }
        }
        items[1] = tmp5;
        obj["children"] = items;
        return closure_12(closure_5, obj);
      };
      const items4 = [, ];
      class V {
        constructor() {
          obj = {};
          obj = {};
          obj3 = context(commands[18]);
          str = "0deg";
          if (closure_9) {
            str = "-180deg";
          }
          obj.rotate = obj3.withTiming(str);
          items = [];
          items[0] = obj;
          obj.transform = items;
          return obj;
        }
      }
      const obj6 = {};
      let tmp54 = COMMANDS === constants.APPS;
      if (tmp54) {
        tmp54 = tmp6;
      }
      obj6.disabled = tmp54;
      obj6.onPress = function onPress() {
        return launchingActivity(COMMANDS);
      };
      obj6.accessibilityRole = "button";
      const obj7 = { INTEGRATION_CREATE: -436207324, ConstraintReasonCode: 301991094 };
      const intl3 = arg1(dependencyMap[19]).intl;
      obj7.children = intl3.string(arg1(dependencyMap[19]).t./qG8v7);
      obj6.children = first1(arg1(dependencyMap[26]).Text, obj7);
      items4[1] = first1(arg1(dependencyMap[29]).PressableOpacity, obj6);
      obj4.children = items4;
      const items5 = [closure_12(closure_5, obj4), ];
      const obj8 = {};
      ({ scrollView: obj13.style, scrollViewContentContainer: obj13.contentContainerStyle } = tmp);
      obj8.horizontal = true;
      obj8.showsHorizontalScrollIndicator = false;
      if (loading) {
        const items6 = [];
        mapped2 = items6.map((arg0, arg1) => first1(closure_16, {}, arg1));
      }
      obj8.children = mapped2;
      items5[1] = first1(closure_6, obj8);
      obj3.children = items5;
      return closure_12(closure_5, obj3);
    }
    COMMANDS = first1;
    if (commands.length > 0) {
      COMMANDS = first1;
      if (0 === apps.length) {
        COMMANDS = constants.COMMANDS;
      }
    }
  }
  APPS = constants.APPS;
};
export const SectionItemType = obj11;
