// Module ID: 12570
// Function ID: 12571
// Name: FrecencySection
// Dependencies: [32, 19, 17, 5018, 12571, 1072, 21, 5170, 575, 9867, 1380, 7414, 12572, 11664, 504, 11665, 5916, 1652, 5400, 1113, 9301, 12573, 12569, 2116, 9090, 12574, 5781, 10012, 11573, 7068, 12575, 5837, 5872, 12578, 2]
// Exports: default

// Module 12570 (FrecencySection)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import _modDef1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5781 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5916 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9867 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11665 */;
import FrecencySectionStore2 from "FrecencySectionStore" /* 12571 */;
import react2 from "react" /* 12572 */;
import FrecencySectionStoreActionCreators from "FrecencySectionStoreActionCreators" /* 12573 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let tmp6;
let unpackModuleId;
const ChevronSmallDownIcon = tmp6(11573);
function Placeholder() {
  let items;
  let items1;
  let items2;
  let items3;
  const tmp = closure_13();
  const obj = react2;
  const placeholderWidth = obj.usePlaceholderWidth(20, 90);
  const obj3 = { style: tmp.commandContainer, children: items };
  const obj2 = react2;
  const obj4 = { style: tmp.loadingCommandIcon };
  const placeholderWidth1 = obj2.usePlaceholderWidth(20, 70);
  items = [unpackModuleId(hasOwnProperty, obj4), ];
  const obj6 = { style: items1 };
  items1 = [tmp.loadingTextPlaceholder, { width: placeholderWidth }];
  const obj5 = { children: items2 };
  items2 = [unpackModuleId(hasOwnProperty, obj6), ];
  const obj7 = { style: items3 };
  items3 = [tmp.loadingTextPlaceholderSmall, { width: placeholderWidth1 }];
  items2[1] = unpackModuleId(hasOwnProperty, obj7);
  items[1] = authStore2(hasOwnProperty, obj5);
  return authStore2(hasOwnProperty, obj3);
}
function FrecentActivityOneClickCTA(context) {
  let callback;
  let entrypoint;
  let onActivityItemSelected;
  let tmp6;
  let tmp7;
  const f103187 = () => {
    const items = [EmbeddedActivitiesStore.isLaunchingActivity(), ];
    let id;
    const getLaunchState = EmbeddedActivitiesStore.getLaunchState;
    const applicationId = app.applicationId;
    if ("channel" === context.type) {
      id = context.channel.id;
    }
    items[1] = getLaunchState(applicationId, id);
    return items;
  };
  context = context.context;
  const app = context.app;
  let handleActivityItemSelected;
  const obj = context(handleActivityItemSelected[13]);
  const appLauncherContext = obj.useAppLauncherContext();
  ({ entrypoint, onActivityItemSelected } = appLauncherContext);
  let id = react.useId();
  let items = [EmbeddedActivitiesStore];
  const obj3 = context(handleActivityItemSelected[14]);
  [tmp6, tmp7] = obj3.useStateFromStoresArray(items, f103187);
  _slicedToArray(obj3.useStateFromStoresArray(items, f103187), 2);
  let isLaunching = null != tmp7;
  const obj4 = context(handleActivityItemSelected[30]);
  const obj5 = { context, applicationId: app.applicationId };
  const activityAction = obj4.useActivityAction(obj5);
  const obj2 = react;
  if (isLaunching) {
    isLaunching = tmp7.isLaunching;
  }
  if (isLaunching) {
    isLaunching = tmp7.componentId === id;
  }
  const tmpResult = context(handleActivityItemSelected[22]);
  const obj6 = { applicationId: app.applicationId, context, sectionName: context(handleActivityItemSelected[15]).AppLauncherSectionName.RECENT_APPS, onActivityItemSelected, location: context(handleActivityItemSelected[31]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME, entrypoint, launchingComponentId: id, fetchesApplication: false };
  handleActivityItemSelected = tmpResult.useHandleActivityItemSelected(obj6).handleActivityItemSelected;
  const items1 = [handleActivityItemSelected];
  const obj7 = { app, disabled: tmp6, submitting: isLaunching, onAppSelected: callback };
  callback = obj2.useCallback(() => {
    handleActivityItemSelected();
  }, items1);
  const tmp10 = closure_11;
  const tmp11 = FrecentApp;
  if (!tmp6) {
    tmp6 = activityAction === context(handleActivityItemSelected[30]).ActivityAction.LEAVE;
  }
  return tmp10(tmp11, obj7);
}
function FrecentApp(app) {
  let disabled;
  let items;
  let name;
  let submitting;
  app = app.app;
  ({ disabled, submitting } = app);
  if (submitting === undefined) {
    submitting = false;
  }
  const onAppSelected = app.onAppSelected;
  let tmp = closure_13();
  if (null == app.section) {
    return null;
  } else {
    const obj4 = app(12569);
    const appLauncherIconSource = obj4.getAppLauncherIconSource(app.section.application);
    let obj = {
      style: disabled ? tmp.appContainerDisabled : tmp.appContainer,
      disabled,
      accessible: true,
      accessibilityLabel: name,
      accessibilityRole: "button",
      onPress() {
          let tmp2 = null != onAppSelected;
          const tmp = onAppSelected;
          if (tmp2) {
            tmp2 = null != app.section.application;
          }
          if (tmp2) {
            const obj = { application: app.section.application, sectionName: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS };
            tmp(obj);
          }
        },
      children: items
    };
    const application = app.section.application;
    name = undefined;
    const PressableOpacity = app(7068).PressableOpacity;
    const tmp10 = closure_12;
    const tmp7 = app;
    if (application != null) {
      name = application.name;
    }
    let tmp3 = null != appLauncherIconSource;
    if (tmp3) {
      const obj2 = { style: tmp.appIcon, source: appLauncherIconSource };
      tmp3 = closure_11(onAppSelected(5872), obj2);
    }
    items = [tmp3, ];
    const obj3 = { submitting, style: tmp.submittingOverlay };
    items[1] = closure_11(tmp7(12578).SubmittingOverlay, obj3);
    return tmp10(PressableOpacity, obj, app.applicationId);
  }
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
let FrecencySectionSelection = FrecencySectionStore2.FrecencySectionSelection;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, header: obj3, scrollView: { marginTop: 8, overflow: "visible" }, scrollViewContentContainer: obj4, contextMenuIcon: { height: 16, width: 16 }, appContainer: obj5, appContainerDisabled: obj6, commandContainer: obj7, appIcon: size, loadingCommandIcon: size1, loadingTextPlaceholder: obj8, loadingTextPlaceholderSmall: obj9, submittingOverlay: size2 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg, opacity: 0.4 };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.md, paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
size1 = { width: 36, height: 36, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 };
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
size2 = { position: "absolute", top: 0, left: 0, width: 60, height: 60, borderRadius: nativeDefault.radii.lg };
let closure_13 = createStyles(obj);
let obj10 = { APPS: 0, [0]: "APPS", COMMANDS: 1, [1]: "COMMANDS" };
let closure_16 = { code: "(function FrecencySectionTsx1(){let[withTiming,isRecentsMenuOpen]=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySection.tsx");

export default function FrecencySection(loading) {
  let Text;
  let _undefined;
  let c9;
  let closure_5;
  let closure_6;
  let commands;
  let context;
  let intl;
  let intl2;
  let intl3;
  let items7;
  let launchingActivity;
  let prop;
  let prop1;
  let tmp10;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp6;
  let tmp9;
  ({ context: require, sectionDescriptors: importDefault, commands } = loading);
  loading = loading.loading;
  const apps = loading.apps;
  ({ onAppSelected: closure_5, onCommandSelected: closure_6, onViewAllSelected: EmbeddedActivitiesStore } = loading);
  FrecencySectionSelection = undefined;
  let first;
  let closure_11;
  let closure_12;
  let style;
  let COMMANDS;
  let tmp = style();
  const selection = tmp;
  let tmp2 = require;
  let tmp3 = commands;
  let obj = require("AppLauncherContext");
  let obj2 = apps;
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  let tmp4 = loading;
  const tmp5 = loading(apps.useState(false), 2);
  [tmp6, c9] = tmp5;
  let obj3 = require("get initialized");
  let items = [selection];
  const stateFromStores = obj3.useStateFromStores(items, () => selection.getSelection());
  let tmp8 = require("get initialized");
  [][0] = EmbeddedActivitiesStore;
  if (commands.length > 0) {
    let APPS;
    let tmp12;
    let tmp11 = FrecencySectionSelection;
    if (stateFromStores === FrecencySectionSelection.COMMANDS) {
      APPS = obj10.COMMANDS;
      tmp12 = obj10;
    }
    const tmp4Result = tmp4(tmp10(APPS), 2);
    first = tmp4Result[0];
    closure_11 = tmp4Result[1];
    const tmp16 = entrypoint === tmp2(tmp3[15]).AppLauncherEntrypoint.VOICE;
    closure_12 = tmp16;
    let items1 = [commands.length, apps.length, loading, first];
    const effect = obj2.useEffect(() => {
      let RECENT_COMMANDS;
      let tmp = loading;
      if (!tmp) {
        tmp = 0 === commands.length && 0 === apps.length;
        const tmp3 = 0 === commands.length && 0 === apps.length;
      }
      if (!tmp) {
        let length;
        const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
        const APP_LAUNCHER_FRECENTS_SEEN = AnalyticEvents.APP_LAUNCHER_FRECENTS_SEEN;
        AppAnalyticsUtils;
        const tmp10 = obj10;
        const tmp9 = first;
        if (first === obj10.APPS) {
          length = apps.length;
        } else {
          length = commands.length;
        }
        const obj = { num: length, section_name: RECENT_COMMANDS, location: AppLauncherTypes.AppLauncherLocations.HOME };
        if (tmp9 === tmp10.APPS) {
          RECENT_COMMANDS = tmp5(11665).AppLauncherSectionName.RECENT_APPS;
        } else {
          RECENT_COMMANDS = tmp5(11665).AppLauncherSectionName.RECENT_COMMANDS;
        }
        trackWithMetadata(APP_LAUNCHER_FRECENTS_SEEN, obj);
      }
    }, items1);
    const items2 = [apps];
    const memo = obj2.useMemo(() => apps.slice(0, 8), items2);
    let closure_1 = tmp16;
    const items3 = [memo, tmp16];
    const memo1 = obj2.useMemo(() => {
      const mapped = memo.map((section) => {
        let tmp = null;
        if (null != section.section) {
          let id = null;
          if (null != section.section.application) {
            id = null;
            const obj = memo(commands[9]);
            if (obj.isActivityApp(section.section.application)) {
              id = null;
              if (closure_1_1) {
                id = section.section.application.id;
              }
            }
          }
          tmp = id;
        }
        return tmp;
      });
      return mapped.filter(require("GlobalUtils").isNotNullish);
    }, items3);
    require("useGetOrFetchApplications")(memo1);
    const tmp2Result = tmp2(tmp3[17]);
    const items4 = [closure_16, , ];
    const useAnimatedStyle = tmp2Result.useAnimatedStyle;
    items4[1] = tmp2(tmp3[18]).withTiming;
    items4[2] = tmp6;
    let c0;
    let c1;
    [tmp24, tmp25, tmp26] = items4;
    class FrecencySectionTsx1 {
      constructor() {
        let items;
        let str = "0deg";
        if (c1) {
          str = "-180deg";
        }
        const obj = { transform: items };
        items = [{ rotate: tmp(str) }];
        ({ rotate: _undefined(str) });
        return obj;
      }
    }
    const items5 = [tmp25, tmp26];
    FrecencySectionTsx1.__closure = items5;
    FrecencySectionTsx1.__workletHash = 11443963555117;
    FrecencySectionTsx1.__initData = tmp24;
    style = useAnimatedStyle(FrecencySectionTsx1);
    if (0 === commands.length) {
      if (0 === apps.length) {
        return null;
      }
    }
    let obj4 = {
      label: intl.string(tmp2(tmp3[19]).t.XRBNsN),
      IconComponent: prop,
      action() {
          closure_11(obj10.COMMANDS);
          const obj = FrecencySectionStoreActionCreators;
          const result = obj.setFrecencySectionSelection(FrecencySectionSelection.COMMANDS);
          const obj2 = AppAnalyticsUtils;
          const obj3 = { num: commands.length, section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_COMMANDS };
          obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, obj3);
        }
    };
    intl = tmp2(tmp3[19]).intl;
    prop = undefined;
    if (first === tmp12.COMMANDS) {
      prop = tmp2(tmp3[20]).CheckmarkSmallBoldIcon;
    }
    const items6 = [obj4, ];
    let obj5 = {
      label: intl2.string(tmp2(tmp3[19]).t.TCAk0p),
      IconComponent: prop1,
      action() {
          closure_11(obj10.APPS);
          const obj = FrecencySectionStoreActionCreators;
          const result = obj.setFrecencySectionSelection(FrecencySectionSelection.APPS);
          const obj2 = AppAnalyticsUtils;
          const obj3 = { num: apps.length, section_name: AppLauncherTypes.AppLauncherSectionName.RECENT_APPS };
          obj2.trackWithMetadata(AnalyticEvents.APP_LAUNCHER_FRECENTS_TOGGLED, obj3);
        }
    };
    intl2 = tmp2(tmp3[19]).intl;
    prop1 = undefined;
    if (first === tmp12.APPS) {
      prop1 = tmp2(tmp3[20]).CheckmarkSmallBoldIcon;
    }
    items6[1] = obj5;
    const substr = commands.slice(0, 8);
    let mapped = substr.map((type) => {
      let found;
      let items;
      let items1;
      found = found.find((id) => id.id === type.applicationId);
      let application;
      const getAppLauncherIconSource = require("AppLauncherNativeUtils").getAppLauncherIconSource;
      require("AppLauncherNativeUtils");
      if (found != null) {
        application = found.application;
      }
      const appLauncherIconSource = getAppLauncherIconSource(application);
      if (null == found) {
        return null;
      } else {
        let displayName;
        let FAKE_BUILT_IN_APP = found.application;
        const getSectionName = require("AppLauncherUtils").getSectionName;
        require("AppLauncherUtils");
        if (FAKE_BUILT_IN_APP == null) {
          FAKE_BUILT_IN_APP = tmp2(tmp3[9]).FAKE_BUILT_IN_APP;
        }
        const sectionName = getSectionName(FAKE_BUILT_IN_APP);
        if (type.type === require("Server").ApplicationCommandType.PRIMARY_ENTRY_POINT) {
          const tmp2Result2 = require("AppLauncherUtils");
          displayName = tmp2Result2.formatPrimaryEntryPointCommandName(type.displayName);
        } else {
          displayName = type.displayName;
        }
        const _HermesInternal = HermesInternal;
        const obj = {
          style: selection.commandContainer,
          accessible: true,
          accessibilityLabel: "" + displayName + " " + sectionName,
          accessibilityRole: "button",
          onPress() {
              return closure_6(type, found);
            },
          children: items
        };
        const PressableScale = tmp2(tmp3[24]).PressableScale;
        let tmp11 = null != appLauncherIconSource;
        if (tmp11) {
          const obj2 = { iconSize: 36, iconSource: appLauncherIconSource };
          tmp11 = closure_11(require("EntityBorderAppIcon"), obj2);
        }
        items = [tmp11, ];
        const obj3 = { children: items1 };
        const obj4 = { variant: "body-sm/semibold", color: "mobile-text-heading-primary", children: displayName };
        items1 = [closure_11(require("Text/Text").Text, obj4), ];
        const obj5 = { variant: "body-xs/normal", color: "text-subtle", children: sectionName };
        items1[1] = closure_11(require("Text/Text").Text, obj5);
        items[1] = closure_12(closure_5, obj3);
        return closure_12(PressableScale, obj, type.id);
      }
    });
    let found = mapped.filter(tmp2(tmp3[10]).isNotNullish);
    const mapped1 = memo.map((section) => {
      let tmp = null;
      if (null != section.section) {
        if (null != section.section.application) {
          const obj = AppLauncherUtils;
          if (obj.isActivityApp(section.section.application)) {
            let tmp8;
            const tmp4 = closure_12;
            if (tmp4) {
              const obj2 = { context: require, app: section };
              tmp8 = unpackModuleId(FrecentActivityOneClickCTA, obj2, section.applicationId);
            }
            tmp = tmp8;
          }
        }
        const obj3 = { app: section, onAppSelected };
        tmp8 = unpackModuleId(FrecentApp, obj3, section.applicationId);
      }
      return tmp;
    });
    const filter = mapped1.filter;
    if (0 === commands.length) {
      if (apps.length > 0) {
        COMMANDS = tmp12.APPS;
      }
      let mapped2 = tmp30;
      if (COMMANDS === tmp12.COMMANDS) {
        mapped2 = found;
      }
      let tmp35 = commands.length > 0;
      const obj6 = { style: tmp.container, children: tmp37 };
      const obj7 = { style: tmp.headerContainer, children: items7 };
      const ContextMenu = tmp2(tmp3[27]).ContextMenu;
      if (tmp35) {
        tmp35 = apps.length > 0;
      }
      const obj8 = {
        enabled: tmp35,
        items: items6,
        triggerOnTap: true,
        onOpen() {
              return _undefined(true);
            },
        onClose() {
              return _undefined(false);
            },
        children(ref) {
              let intl;
              let items;
              let obj4;
              const obj = { style: selection.header, ref, children: items };
              ref = ref.ref;
              const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
              const obj2 = { accessibilityRole: "header", variant: "body-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.acSE0h) };
              const Text = Text_Text.Text;
              intl = intl4.intl;
              items = [unpackModuleId(Text, obj2), ];
              let tmp5Result = null;
              const tmp = authStore2;
              const tmp2 = hasOwnProperty;
              const tmp3 = selection;
              if (commands.length > 0) {
                tmp5Result = null;
                if (apps.length > 0) {
                  const obj3 = { style, children: unpackModuleId(ChevronSmallDownIcon.ChevronSmallDownIcon, obj4) };
                  const View = _modDef1652.View;
                  obj4 = { color: "interactive-text-default", style: tmp3.contextMenuIcon };
                  tmp5Result = tmp5(View, obj3);
                }
              }
              items[1] = tmp5Result;
              return tmp(tmp2, obj);
            }
      };
      items7 = [closure_11(ContextMenu, obj8), ];
      let tmp36 = COMMANDS === tmp12.APPS;
      const PressableOpacity = tmp2(tmp3[29]).PressableOpacity;
      if (tmp36) {
        tmp36 = tmp9;
      }
      const obj9 = {
        disabled: tmp36,
        onPress() {
              return EmbeddedActivitiesStore(COMMANDS);
            },
        accessibilityRole: "button",
        children: closure_11(Text, obj10)
      };
      obj10 = { variant: "body-sm/medium", color: "text-brand", children: intl3.string(tmp2(tmp3[19]).t["/qG8v7"]) };
      Text = tmp2(tmp3[26]).Text;
      intl3 = tmp2(tmp3[19]).intl;
      items7[1] = closure_11(PressableOpacity, obj9);
      class FrecencySectionTsx1 {
        constructor() {
          let items;
          let str = "0deg";
          if (c1) {
            str = "-180deg";
          }
          const obj = { transform: items };
          items = [{ rotate: tmp(str) }];
          ({ rotate: _undefined(str) });
          return obj;
        }
      }
      tmp37[0] = closure_12(onAppSelected, obj7);
      const obj19 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: mapped2 };
      ({ scrollView: obj11.style, scrollViewContentContainer: obj11.contentContainerStyle } = tmp);
      const tmp38 = closure_6;
      if (loading) {
        const items8 = [1, 2, 3, 4, 5];
        mapped2 = items8.map((item, index) => closure_11(COMMANDS, {}, index));
      }
      tmp37[1] = closure_11(tmp38, obj19);
      return closure_12(onAppSelected, obj6);
    }
    COMMANDS = first;
    if (commands.length > 0) {
      COMMANDS = first;
      if (0 === apps.length) {
        COMMANDS = tmp12.COMMANDS;
      }
    }
  }
  tmp12 = obj10;
  APPS = obj10.APPS;
};
export const SectionItemType = obj10;
