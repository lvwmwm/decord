// Module ID: 12292
// Function ID: 12293
// Name: ActivityDetailContent
// Dependencies: [5, 32, 19, 17, 5669, 2017, 1072, 21, 575, 5009, 5619, 11466, 12293, 12207, 12201, 5678, 9741, 1114, 1253, 11467, 5629, 11656, 11698, 7320, 7345, 12233, 8765, 504, 6966, 7363, 12294, 7076, 7324, 12295, 12296, 12297, 8017, 12234, 9740, 8653, 12299, 2]
// Exports: default

// Module 12292 (ActivityDetailContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Text_Text from "Text/Text" /* 5619 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import DetailsHeaderDefault from "DetailsHeader" /* 9740 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9741 */;
import AppLauncherContext from "AppLauncherContext" /* 11466 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11467 */;
import useActivityShelfItem from "useActivityShelfItem" /* 12207 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12233 */;
import HeroMediaDefault from "HeroMedia" /* 12234 */;
import DeveloperActivityShelfActionCreatorsAll from "DeveloperActivityShelfActionCreators" /* 12294 */;
import useIsPrimaryEntryPointDisabledDefault from "useIsPrimaryEntryPointDisabled" /* 12296 */;
import useShowTryItOutButtonInAppLauncherDefault from "useShowTryItOutButtonInAppLauncher" /* 12297 */;
import getItemSubtitleForMaxPlayersDefault from "getItemSubtitleForMaxPlayers" /* 12299 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5669 */;
import ApplicationRecord from "ApplicationRecord" /* 2017 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3, c4, dependencyMap, importDefault;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function Tag(arg0) {
  let accessibilityLabel;
  let icon;
  let items;
  let tagName;
  ({ tagName, icon, accessibilityLabel } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.tag, accessible: true, accessibilityLabel, children: items };
  items = [icon, ];
  const obj2 = { variant: "text-sm/normal", style: tmp.tagText, children: tagName };
  items[1] = unpackModuleId(Text_Text.Text, obj2);
  return authStore2(View, obj);
}
function PrimaryEntryPointButton(applicationId) {
  let context;
  let disabled;
  let entrypoint;
  let onActivityItemSelected;
  let primaryEntryPointCommand;
  let sectionName;
  let str;
  let tmp7;
  applicationId = applicationId.applicationId;
  ({ context, primaryEntryPointCommand } = applicationId);
  const activityAction = applicationId.activityAction;
  let chatInputRef;
  let handleActivityItemSelected;
  let obj = handleActivityItemSelected;
  ({ sectionName, disabled, onActivityItemSelected, entrypoint } = applicationId);
  const id = handleActivityItemSelected.useId();
  let obj2 = applicationId(chatInputRef[11]);
  const requiredAppLauncherContext = obj2.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const items = [chatInputRef, keyboardCloseReasonRef];
  const callback = handleActivityItemSelected.useCallback(() => {
    keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.ACTIVITY;
    const current = chatInputRef.current;
    if (current != null) {
      current.closeCustomKeyboard();
    }
  }, items);
  const obj3 = { applicationId, context, launchingComponentId: id, onSubmissionComplete: tmp7 };
  tmp7 = undefined;
  const tmp6 = primaryEntryPointCommand(chatInputRef[12]);
  if (activityAction !== applicationId(chatInputRef[13]).ActivityAction.LEAVE) {
    tmp7 = callback;
  }
  const submitting = tmp6(obj3).submitting;
  const tmp2Result = applicationId(chatInputRef[14]);
  const obj4 = { applicationId, context, sectionName, onActivityItemSelected, location: applicationId(chatInputRef[15]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, entrypoint, launchingComponentId: id };
  handleActivityItemSelected = tmp2Result.useHandleActivityItemSelected(obj4).handleActivityItemSelected;
  const items1 = [primaryEntryPointCommand.displayName];
  let memo = obj.useMemo(() => {
    const obj = AppLauncherUtils;
    return obj.formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName);
  }, items1);
  if (memo == null) {
    const intl = tmp2(tmp3[17]).intl;
    memo = intl.string(tmp2(tmp3[17]).t.zKX8Nu);
  }
  if (activityAction === applicationId(chatInputRef[13]).ActivityAction.JOIN) {
    const intl3 = tmp2(tmp3[17]).intl;
    memo = intl3.string(tmp2(tmp3[17]).t.d9PsMj);
    str = "active";
  } else {
    str = "primary";
    if (activityAction === applicationId(chatInputRef[13]).ActivityAction.LEAVE) {
      const intl2 = tmp2(tmp3[17]).intl;
      memo = intl2.string(tmp2(tmp3[17]).t["Hi1/aQ"]);
      str = "destructive";
    }
  }
  const items2 = [handleActivityItemSelected, activityAction, callback, applicationId];
  let tmp10 = null;
  if ("channel" === context.type) {
    const obj5 = { size: "lg", loading: submitting, variant: str, text: memo, disabled, onPress: tmp9 };
    tmp10 = closure_11(tmp2(tmp3[20]).Button, obj5);
  }
  return tmp10;
}
function TryItOutButton(applicationId) {
  let closure_2;
  let closure_3;
  let first;
  let intl;
  applicationId = applicationId.applicationId;
  let analyticsLocations = applicationId.analyticsLocations;
  closure_2 = undefined;
  const context = applicationId.context;
  [first, closure_2] = react.useState(false);
  dependencyMap = react.useRef(null);
  const items = [applicationId, analyticsLocations];
  let str = "primary";
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === analyticsLocations) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { application_id: applicationId, button_action: tmp(c3[19]).EntryPointCommandButtonActions.OPEN_APP_DM };
            const track = analyticsLocations(c3[18]).track;
            const APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED = constants.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED;
            const tmp20 = analyticsLocations(c3[18]);
            track(APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, obj4);
            const _setTimeout = setTimeout;
            closure_3.current = setTimeout(() => {
              closure_1_2(true);
            }, 250);
            c3 = 1;
            const obj5 = { applicationId, analyticsLocations };
            const obj6 = analyticsLocations(c3[21]);
            analyticsLocations = 2;
            c4 = 1;
            const obj7 = { value: obj6.launch(obj5), done: false };
            return obj7;
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_128_3.current);
          closure_128_2(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        closure_2 = tmp11;
        if (0 === c3) {
          c4 = 3;
          throw tmp11;
        } else {
          analyticsLocations = 1;
        }
      }
    }
  }), items);
  if ("channel" === context.type) {
    str = "secondary";
  }
  let obj = { size: "lg", loading: first, variant: str, text: intl.string(applicationId(1114).t.AUM8hY), onPress: callback };
  const Button = applicationId(5629).Button;
  intl = applicationId(1114).intl;
  return closure_11(Button, obj);
}
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, cardContainer: obj2, activityHeroDetailsLandscape: { flexDirection: "row" }, heroMediaContainerLandscape: { width: "65%" }, detailsContainerLandscape: { width: "35%" }, details: { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 }, tagList: obj3, tag: obj4, tagText: { top: -1 }, tagIcon: { marginRight: 4 }, buttonContainer: { paddingTop: 16 }, activityUrlOverrideInputContainer: { marginTop: -4 }, primaryEntryPointButtonDisabledCTA: obj5, tryItOutButtonContainerStyle: { marginTop: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderRadius: nativeDefault.radii.lg, overflow: "hidden", gap: nativeDefault.space.PX_16, paddingBottom: PX_12 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: nativeDefault.space.PX_8, columnGap: 4, rowGap: 6 };
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingVertical: 4 };
obj5 = { marginTop: nativeDefault.space.PX_12, color: nativeDefault.colors.TEXT_MUTED, textAlign: "center" };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx");

export default function ActivityDetailContent(application) {
  let InlineNotice;
  let TextInput;
  let _undefined;
  let activityUrlOverride;
  let c1;
  let context;
  let disabled;
  let entrypoint;
  let getItemSubtitleForMaxPlayersShort;
  let hasCommands;
  let intl;
  let intl2;
  let isDeveloperOfThisApp;
  let items1;
  let items3;
  let items4;
  let items6;
  let items7;
  let num2;
  let num5;
  let obj14;
  let obj19;
  let obj21;
  let obj22;
  let obj23;
  let obj25;
  let obj30;
  let obj8;
  let onActivityItemSelected;
  let reason;
  let result;
  let sectionName;
  let tmp48;
  let tmp5Result3;
  let tmp5Result4;
  let tmp8;
  let useActivityUrlOverride;
  application = application.application;
  ({ context, entrypoint } = application);
  importDefault = undefined;
  ({ sectionName, onActivityItemSelected, hasCommands } = application);
  const tmp = closure_15();
  let obj = application(11466);
  const width = obj.useRequiredAppLauncherContext().width;
  let obj2 = application(11698);
  const getPrimaryAppCommand = obj2.useGetPrimaryAppCommand(context, application.id);
  const tmp6 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp6(AnalyticsLocationDefault.APP_DETAIL).analyticsLocations;
  [tmp8, c1] = react.useState(undefined);
  _slicedToArray(react.useState(undefined), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.width));
  }, []);
  const obj3 = application(8765);
  const isScreenLandscape = obj3.useIsScreenLandscape();
  let detailsContainerLandscape = entrypoint !== application(11467).AppLauncherEntrypoint.VOICE && isScreenLandscape;
  const items = [DeveloperActivityShelfStore];
  const tmp2Result = application(504);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items, () => {
    const obj = { isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id), activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(), useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride() };
    return obj;
  });
  ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
  const tmp2Result7 = application(9741);
  if (tmp2Result7.isRealApplication(application)) {
    let tmp35Result;
    let tmp31;
    let num = application instanceof ApplicationRecord ? application.maxParticipants : application.max_participants;
    if (num == null) {
      num = 0;
    }
    let tmp18Result = null;
    if (isDeveloperOfThisApp) {
      const obj4 = { marginTop: PX_12, marginBottom: num2 };
      num2 = 0;
      const tmp18 = closure_12;
      if (!useActivityUrlOverride) {
        num2 = -PX_12;
      }
      const obj5 = { style: obj4, children: items1 };
      items1 = [closure_11(application(6966).TableRowDivider, {}), , ];
      const obj6 = { label: intl.string(application(1114).t["3TSGuD"]), value: useActivityUrlOverride, onValueChange: DeveloperActivityShelfActionCreatorsAll.toggleUseActivityUrlOverride, end: true };
      const TableSwitchRow = tmp2(7363).TableSwitchRow;
      intl = tmp2(1114).intl;
      items1[1] = closure_11(TableSwitchRow, obj6);
      let tmp20Result = null;
      const tmp21 = importAll;
      if (useActivityUrlOverride) {
        const obj7 = { style: tmp.activityUrlOverrideInputContainer, children: closure_11(TextInput, obj8) };
        TextInput = tmp2(7076).TextInput;
        obj8 = { placeholder: "e.g. http://192.168.1.1:3000", value: activityUrlOverride, onChange: tmp21(12294).setActivityUrlOverride };
        tmp20Result = tmp20(tmp19, obj7);
      }
      items1[2] = tmp20Result;
      tmp18Result = tmp18(tmp19, obj5);
    }
    const tmp2Result8 = application(7324);
    const getOrFetchApplication = tmp2Result8.useGetOrFetchApplication(application.id);
    let bot;
    if (getOrFetchApplication != null) {
      bot = getOrFetchApplication.bot;
    }
    const obj9 = { context, applicationId: application.id };
    const tmp2Result9 = application(12207);
    const activityAction = tmp2Result9.useActivityAction(obj9);
    const tmp2Result10 = application(12295);
    const delayedSwapToActivityActionLeave = tmp2Result10.useDelayedSwapToActivityActionLeave(activityAction);
    const obj10 = { context, application, activityAction: delayedSwapToActivityActionLeave };
    ({ reason, disabled } = useIsPrimaryEntryPointDisabledDefault(obj10));
    let id;
    useIsPrimaryEntryPointDisabledDefault(obj10);
    useShowTryItOutButtonInAppLauncherDefault;
    if (bot != null) {
      id = bot.id;
    }
    if (null != getPrimaryAppCommand) {
      const obj12 = { applicationId: application.id, context, sectionName, primaryEntryPointCommand: getPrimaryAppCommand, disabled, onActivityItemSelected, entrypoint, activityAction: delayedSwapToActivityActionLeave };
      const items2 = [closure_11(PrimaryEntryPointButton, obj12), ];
      let tmp37Result = null;
      const tmp36 = closure_13;
      if (tmp30) {
        let id1;
        if (bot != null) {
          id1 = bot.id;
        }
        tmp37Result = null;
        if (null != id1) {
          const obj13 = { style: tmp.tryItOutButtonContainerStyle, children: closure_11(TryItOutButton, obj14) };
          obj14 = { applicationId: application.id, analyticsLocations, context };
          tmp37Result = tmp37(View, obj13);
        }
      }
      const obj15 = { children: items2 };
      items2[1] = tmp37Result;
      const obj16 = { style: tmp.buttonContainer, children: items3 };
      items3 = [closure_12(tmp36, obj15), ];
      let tmp37Result2 = null != reason;
      const tmp43 = View;
      if (tmp37Result2) {
        const obj17 = { variant: "text-sm/normal", style: tmp.primaryEntryPointButtonDisabledCTA, children: reason };
        tmp37Result2 = tmp37(tmp2(5619).Text, obj17);
      }
      items3[1] = tmp37Result2;
      tmp35Result = closure_12(tmp43, obj16);
    } else {
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = !hasCommands;
      }
      if (isDeveloperOfThisApp) {
        const tmp2Result11 = application(9741);
        isDeveloperOfThisApp = tmp2Result11.isActivityApp(application);
      }
      if (isDeveloperOfThisApp) {
        const obj18 = { style: tmp.buttonContainer, children: closure_11(InlineNotice, obj19) };
        obj19 = { type: "warning", message: intl2.format(application(1114).t["s/3hjE"], {}), role: "none" };
        InlineNotice = tmp2(8017).InlineNotice;
        intl2 = tmp2(1114).intl;
        tmp31 = closure_11(View, obj18);
      }
    }
    const obj20 = { value: analyticsLocations, children: closure_11(View, obj21) };
    obj21 = { style: tmp.container, children: closure_11(View, obj22) };
    let activityHeroDetailsLandscape = detailsContainerLandscape;
    obj22 = { style: tmp.cardContainer, children: closure_12(View, obj23) };
    const AnalyticsLocationProvider = tmp2(7320).AnalyticsLocationProvider;
    if (detailsContainerLandscape) {
      activityHeroDetailsLandscape = tmp.activityHeroDetailsLandscape;
    }
    obj23 = { style: activityHeroDetailsLandscape, children: items4 };
    const obj24 = { style: tmp48, onLayout: callback, children: closure_11(tmp5Result3, obj25) };
    obj25 = { applicationId: application.id, width: result, contentWidth: tmp8 };
    result = width;
    tmp48 = detailsContainerLandscape && tmp.heroMediaContainerLandscape;
    tmp5Result3 = HeroMediaDefault;
    if (detailsContainerLandscape) {
      result = 65 * width / 100;
    }
    items4 = [closure_11(View, obj24), ];
    const items5 = [tmp.details, ];
    if (detailsContainerLandscape) {
      detailsContainerLandscape = tmp.detailsContainerLandscape;
    }
    const obj26 = { style: items5, children: items6 };
    items5[1] = detailsContainerLandscape;
    const obj27 = { application };
    items6 = [closure_11(DetailsHeaderDefault, obj27), , , , ];
    const obj28 = { style: tmp.tagList, children: items7 };
    const obj29 = { icon: closure_11(application(8653).GroupIcon, obj30), tagName: getItemSubtitleForMaxPlayersShort(num5), accessibilityLabel: tmp5Result4(num) };
    num5 = num;
    obj30 = { style: tmp.tagIcon, size: "xs" };
    getItemSubtitleForMaxPlayersShort = application(12299).getItemSubtitleForMaxPlayersShort;
    application(12299);
    const tmp51 = Tag;
    if (num == null) {
      num5 = 0;
    }
    tmp5Result4 = getItemSubtitleForMaxPlayersDefault;
    if (num == null) {
      num = 0;
    }
    items7 = [closure_11(tmp51, obj29, "participants"), ];
    const tags = application.tags;
    let mapped;
    if (tags != null) {
      mapped = tags.map((tagName) => {
        let intl;
        let obj2;
        const obj = { tagName, accessibilityLabel: intl.formatToPlainString(application(dependencyMap[17]).t.tXXD6v, obj2) };
        intl = application(dependencyMap[17]).intl;
        obj2 = { tagName };
        return closure_1_11(Tag, obj, tagName);
      });
    }
    items7[1] = mapped;
    items6[1] = closure_12(View, obj28);
    items6[2] = tmp35Result;
    items6[3] = tmp31;
    items6[4] = tmp18Result;
    items4[1] = closure_12(View, obj26);
    return closure_11(AnalyticsLocationProvider, obj20);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
    throw error;
  }
};
