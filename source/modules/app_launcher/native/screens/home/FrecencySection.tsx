// Module ID: 11172
// Function ID: 86851
// Name: Placeholder
// Dependencies: [57, 31, 27, 1347, 11173, 653, 33, 4130, 689, 7919, 1327, 5470, 1324, 11174, 10884, 566, 8182, 4324, 3991, 4131, 1212, 8524, 11175, 11171, 1881, 8372, 11176, 4126, 9302, 8525, 4660, 11177, 6755, 5085, 11180, 2]
// Exports: default

// Module 11172 (Placeholder)
import _slicedToArray from "_slicedToArray";
import getStaffReleasePhase from "getStaffReleasePhase";
import get_ActivityIndicator from "Text";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FrecencySectionSelection } from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "preload";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_5;
let closure_6;
const require = arg1;
function Placeholder() {
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = require(11174) /* usePlaceholderWidth */;
  const placeholderWidth = obj.usePlaceholderWidth(20, 90);
  let obj1 = require(11174) /* usePlaceholderWidth */;
  obj = {};
  const items = [tmp2.commandContainer, ];
  let rowShadow = !importDefault(1324)("AppLauncherRecents-native");
  const placeholderWidth1 = obj1.usePlaceholderWidth(20, 70);
  if (rowShadow) {
    rowShadow = tmp2.rowShadow;
  }
  items[1] = rowShadow;
  obj.style = items;
  obj = { style: tmp2.loadingCommandIcon };
  const items1 = [callback2(closure_5, obj), ];
  obj1 = {};
  const items2 = [tmp2.loadingTextPlaceholder, { width: placeholderWidth }];
  const items3 = [callback2(closure_5, { style: items2 }), ];
  const items4 = [tmp2.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
  items3[1] = callback2(closure_5, { style: items4 });
  obj1.children = items3;
  items1[1] = callback3(closure_5, obj1);
  obj.children = items1;
  return callback3(closure_5, obj);
}
function FrecentActivityOneClickCTA(context) {
  let entrypoint;
  let onActivityItemSelected;
  context = context.context;
  const app = context.app;
  let handleActivityItemSelected;
  let obj = context(handleActivityItemSelected[14]);
  const appLauncherContext = obj.useAppLauncherContext();
  ({ entrypoint, onActivityItemSelected } = appLauncherContext);
  let id = React.useId();
  let obj1 = context(handleActivityItemSelected[15]);
  let items = [closure_7];
  const tmp3 = callback(obj1.useStateFromStoresArray(items, () => {
    const items = [outer1_7.isLaunchingActivity(), ];
    let id;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = outer1_7.getLaunchState(app.applicationId, id);
    return items;
  }), 2);
  let first = tmp3[0];
  obj = { context, applicationId: app.applicationId };
  let isLaunching = null != tmp5;
  const activityAction = context(handleActivityItemSelected[31]).useActivityAction(obj);
  if (isLaunching) {
    isLaunching = tmp5.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp5.componentId === id;
  }
  const obj3 = context(handleActivityItemSelected[31]);
  obj = { applicationId: app.applicationId, context, sectionName: context(handleActivityItemSelected[16]).AppLauncherSectionName.RECENT_APPS, onActivityItemSelected, location: context(handleActivityItemSelected[32]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  handleActivityItemSelected = context(handleActivityItemSelected[23]).useHandleActivityItemSelected(obj).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected];
  obj1 = { app };
  callback = React.useCallback(() => {
    handleActivityItemSelected();
  }, items1);
  if (!first) {
    first = activityAction === context(handleActivityItemSelected[31]).ActivityAction.LEAVE;
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
  ({ disabled, submitting } = app);
  if (submitting === undefined) {
    submitting = false;
  }
  const onAppSelected = app.onAppSelected;
  let tmp = _createForOfIteratorHelperLoose();
  if (null == app.section) {
    return null;
  } else {
    const appLauncherIconSource = app(11171).getAppLauncherIconSource(app.section.application);
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
        const obj = { application: app.section.application, sectionName: app(outer1_2[16]).AppLauncherSectionName.RECENT_APPS };
        onAppSelected(obj);
      }
    };
    let tmp3 = null != appLauncherIconSource;
    if (tmp3) {
      obj = { style: tmp.appIcon, source: appLauncherIconSource };
      tmp3 = callback2(onAppSelected(5085), obj);
    }
    const items = [tmp3, ];
    obj = { submitting, style: tmp.submittingOverlay };
    items[1] = callback2(app(11180).SubmittingOverlay, obj);
    obj.children = items;
    return closure_12(app(4660).PressableOpacity, obj, app.applicationId);
  }
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose.scrollView = { marginTop: 8, overflow: "visible" };
_createForOfIteratorHelperLoose.scrollViewContentContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.contextMenuIcon = { height: 16, width: 16 };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.appContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
const merged1 = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.appContainerDisabled = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, opacity: 0.4 };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, opacity: 0.4 };
_createForOfIteratorHelperLoose.commandContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const merged2 = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.rowShadow = {};
let obj7 = { width: 60, height: 60, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.appIcon = obj7;
let obj8 = { width: 36, height: 36, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.loadingCommandIcon = obj8;
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj6 = {};
_createForOfIteratorHelperLoose.loadingTextPlaceholder = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
const obj9 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.loadingTextPlaceholderSmall = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
const obj11 = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.submittingOverlay = obj11;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj12 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
let closure_15 = { code: "function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}" };
const obj10 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySection.tsx");

export default function FrecencySection(loading) {
  let closure_5;
  let closure_6;
  let closure_7;
  let commands;
  let importDefault;
  let require;
  ({ context: require, sectionDescriptors: importDefault, commands } = loading);
  loading = loading.loading;
  let apps = loading.apps;
  ({ onAppSelected: closure_5, onCommandSelected: closure_6, onViewAllSelected: closure_7 } = loading);
  let first1;
  let _createForOfIteratorHelperLoose;
  let obj12;
  let closure_15;
  let COMMANDS;
  let _isNativeReflectConstruct = importDefault(commands[12])("AppLauncherRecents-native");
  let tmp = _createForOfIteratorHelperLoose();
  const FrecencySectionSelection = tmp;
  let obj = require(commands[14]);
  const tmp2 = loading(apps.useState(false), 2);
  const first = tmp2[0];
  const callback2 = tmp2[1];
  let obj1 = require(commands[15]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => selection.getSelection());
  require(commands[15]);
  [][0] = closure_7;
  if (commands.length > 0) {
    if (stateFromStores === FrecencySectionSelection.COMMANDS) {
      let APPS = obj12.COMMANDS;
    }
    const tmp12 = loading(tmp8(APPS), 2);
    first1 = tmp12[0];
    _createForOfIteratorHelperLoose = tmp12[1];
    const tmp16 = obj.useAppLauncherContext().entrypoint === require(commands[16]).AppLauncherEntrypoint.VOICE;
    obj12 = tmp16;
    let items1 = [commands.length, apps.length, loading, first1];
    const effect = apps.useEffect(() => {
      let tmp = loading;
      if (!loading) {
        let tmp3 = 0 === commands.length;
        if (tmp3) {
          tmp3 = 0 === apps.length;
        }
        tmp = tmp3;
      }
      if (!tmp) {
        let trackWithMetadataResult = outer1_0(commands[17]);
        trackWithMetadataResult = {};
        if (first1 === _undefined.APPS) {
          let length = apps.length;
        } else {
          length = commands.length;
        }
        trackWithMetadataResult.num = length;
        if (first1 === _undefined.APPS) {
          let RECENT_COMMANDS = outer1_0(commands[16]).AppLauncherSectionName.RECENT_APPS;
        } else {
          RECENT_COMMANDS = outer1_0(commands[16]).AppLauncherSectionName.RECENT_COMMANDS;
        }
        trackWithMetadataResult.section_name = RECENT_COMMANDS;
        trackWithMetadataResult.location = outer1_0(commands[16]).AppLauncherLocations.HOME;
        trackWithMetadataResult = trackWithMetadataResult.trackWithMetadata(first.APP_LAUNCHER_FRECENTS_SEEN, trackWithMetadataResult);
      }
    }, items1);
    let items2 = [apps];
    let memo = apps.useMemo(() => apps.slice(0, 8), items2);
    obj = { apps: memo, onlyActivityApps: tmp16 };
    (function useFetchFrecentActivityApps(apps) {
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
                if (outer1_1) {
                  id = section.section.application.id;
                }
              }
              obj = outer3_0(commands[9]);
            }
            tmp = id;
          }
          return tmp;
        });
        return mapped.filter(outer2_0(commands[10]).isNotNullish);
      }, items);
      outer1_1(commands[11])(memo);
    })(obj);
    let obj3 = require(commands[18]);
    class V {
      constructor() {
        obj = {};
        obj = {};
        obj3 = context(commands[19]);
        str = "0deg";
        if (closure_10) {
          str = "-180deg";
        }
        obj.rotate = obj3.withTiming(str);
        items = [];
        items[0] = obj;
        obj.transform = items;
        return obj;
      }
    }
    obj = { withTiming: require(commands[19]).withTiming, isRecentsMenuOpen: first };
    V.__closure = obj;
    V.__workletHash = 4528534448308;
    V.__initData = closure_15;
    closure_15 = obj3.useAnimatedStyle(V);
    if (0 === commands.length) {
      if (0 === apps.length) {
        return null;
      }
    }
    obj1 = {};
    let intl = require(commands[20]).intl;
    obj1.label = intl.string(require(commands[20]).t.XRBNsN);
    let prop;
    if (first1 === obj12.COMMANDS) {
      prop = require(commands[21]).CheckmarkSmallBoldIcon;
    }
    obj1.IconComponent = prop;
    obj1.action = function action() {
      let obj = outer1_0(commands[22]);
      const result = obj.setFrecencySectionSelection(callback3(_undefined.COMMANDS).COMMANDS);
      const tmp = callback3(_undefined.COMMANDS);
      obj = { num: commands.length, section_name: outer1_0(commands[16]).AppLauncherSectionName.RECENT_COMMANDS };
      outer1_0(commands[17]).trackWithMetadata(first.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    const items3 = [obj1, ];
    let obj2 = {};
    const intl2 = require(commands[20]).intl;
    obj2.label = intl2.string(require(commands[20]).t.TCAk0p);
    let prop1;
    if (first1 === obj12.APPS) {
      prop1 = require(commands[21]).CheckmarkSmallBoldIcon;
    }
    obj2.IconComponent = prop1;
    obj2.action = function action() {
      let obj = outer1_0(commands[22]);
      const result = obj.setFrecencySectionSelection(callback3(_undefined.APPS).APPS);
      const tmp = callback3(_undefined.APPS);
      obj = { num: apps.length, section_name: outer1_0(commands[16]).AppLauncherSectionName.RECENT_APPS };
      outer1_0(commands[17]).trackWithMetadata(first.APP_LAUNCHER_FRECENTS_TOGGLED, obj);
    };
    items3[1] = obj2;
    const substr = commands.slice(0, 8);
    let mapped = substr.map((type) => {
      let closure_0 = type;
      found = found.find((id) => id.id === type.applicationId);
      let obj = outer1_0(commands[23]);
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
          FAKE_BUILT_IN_APP = outer1_0(commands[9]).FAKE_BUILT_IN_APP;
        }
        const sectionName = outer1_0(commands[9]).getSectionName(FAKE_BUILT_IN_APP);
        if (type.type === outer1_0(commands[24]).ApplicationCommandType.PRIMARY_ENTRY_POINT) {
          let obj1 = outer1_0(commands[9]);
          let displayName = obj1.formatPrimaryEntryPointCommandName(type.displayName);
        } else {
          displayName = type.displayName;
        }
        obj = {};
        const items = [tmp.commandContainer, ];
        let rowShadow = !_isNativeReflectConstruct;
        if (rowShadow) {
          rowShadow = tmp.rowShadow;
        }
        items[1] = rowShadow;
        obj.style = items;
        obj.accessible = true;
        const _HermesInternal = HermesInternal;
        obj.accessibilityLabel = "" + displayName + " " + sectionName;
        obj.accessibilityRole = "button";
        obj.onPress = function onPress() {
          return outer1_6(closure_0, found);
        };
        let tmp18 = null != appLauncherIconSource;
        if (tmp18) {
          obj = { iconSize: 36, iconSource: appLauncherIconSource };
          tmp18 = callback2(outer1_1(commands[26]), obj);
        }
        const items1 = [tmp18, ];
        obj1 = {};
        const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: displayName };
        const items2 = [callback2(outer1_0(commands[27]).Text, obj2), ];
        const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: sectionName };
        items2[1] = callback2(outer1_0(commands[27]).Text, obj3);
        obj1.children = items2;
        items1[1] = first1(outer1_5, obj1);
        obj.children = items1;
        return first1(outer1_0(commands[25]).PressableScale, obj, type.id);
      }
    });
    let found = mapped.filter(require(commands[10]).isNotNullish);
    const mapped1 = memo.map((section) => {
      let applicationId = section;
      if (null == section.section) {
        return null;
      } else {
        if (null != applicationId.section.application) {
          let obj = outer1_0(commands[9]);
          obj = { context: closure_0, app: applicationId };
          applicationId = applicationId.applicationId;
          let tmp7 = callback2(outer1_17, obj, applicationId);
        }
        obj = { app: applicationId, onAppSelected: closure_5 };
        tmp7 = callback2(outer1_18, obj, applicationId.applicationId);
      }
    });
    const filter = mapped1.filter;
    if (0 === commands.length) {
      if (apps.length > 0) {
        COMMANDS = obj12.APPS;
      }
      let mapped2 = tmp37;
      if (COMMANDS === obj12.COMMANDS) {
        mapped2 = found;
      }
      obj3 = { style: tmp.container };
      const obj4 = { style: tmp.headerContainer };
      const obj5 = {};
      let tmp49 = commands.length > 0;
      const ContextMenu = require(commands[28]).ContextMenu;
      if (tmp49) {
        tmp49 = apps.length > 0;
      }
      obj5.enabled = tmp49;
      obj5.items = items3;
      obj5.triggerOnTap = true;
      obj5.onOpen = function onOpen() {
        return callback2(true);
      };
      obj5.onClose = function onClose() {
        return callback2(false);
      };
      obj5.children = function children(ref) {
        let obj = Object.create(null);
        obj.ref = 0;
        obj = { style: tmp.header };
        const merged = Object.assign(Object.assign(ref, obj));
        obj["ref"] = ref.ref;
        obj = { accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary" };
        const intl = outer1_0(commands[20]).intl;
        obj.children = intl.string(outer1_0(commands[20]).t.acSE0h);
        const items = [callback2(outer1_0(commands[27]).Text, obj), ];
        let tmp5 = null;
        if (commands.length > 0) {
          tmp5 = null;
          if (apps.length > 0) {
            const obj1 = { style: closure_15 };
            const obj2 = { color: "interactive-text-default", style: tmp.contextMenuIcon };
            obj1.children = callback2(outer1_0(commands[29]).ChevronSmallDownIcon, obj2);
            tmp5 = callback2(outer1_1(commands[18]).View, obj1);
          }
        }
        items[1] = tmp5;
        obj["children"] = items;
        return first1(outer1_5, obj);
      };
      const items4 = [, ];
      class V {
        constructor() {
          obj = {};
          obj = {};
          obj3 = context(commands[19]);
          str = "0deg";
          if (closure_10) {
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
      let tmp54 = COMMANDS === obj12.APPS;
      if (tmp54) {
        tmp54 = tmp6;
      }
      obj6.disabled = tmp54;
      obj6.onPress = function onPress() {
        return callback(COMMANDS);
      };
      obj6.accessibilityRole = "button";
      const obj7 = { variant: "text-sm/medium", color: "text-brand" };
      const intl3 = require(commands[20]).intl;
      obj7.children = intl3.string(require(commands[20]).t["/qG8v7"]);
      obj6.children = callback2(require(commands[27]).Text, obj7);
      items4[1] = callback2(require(commands[30]).PressableOpacity, obj6);
      obj4.children = items4;
      const items5 = [first1(closure_5, obj4), ];
      const obj8 = {};
      ({ scrollView: obj13.style, scrollViewContentContainer: obj13.contentContainerStyle } = tmp);
      obj8.horizontal = true;
      obj8.showsHorizontalScrollIndicator = false;
      if (loading) {
        const items6 = [1, 2, 3, 4, 5];
        mapped2 = items6.map((arg0, arg1) => callback2(COMMANDS, {}, arg1));
      }
      obj8.children = mapped2;
      items5[1] = callback2(closure_6, obj8);
      obj3.children = items5;
      return first1(closure_5, obj3);
    }
    COMMANDS = first1;
    if (commands.length > 0) {
      COMMANDS = first1;
      if (0 === apps.length) {
        COMMANDS = obj12.COMMANDS;
      }
    }
  }
  APPS = obj12.APPS;
};
export const SectionItemType = obj12;
