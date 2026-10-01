// Module ID: 11622
// Function ID: 11623
// Name: ActivityDetailContent
// Dependencies: [5, 32, 19, 17, 8320, 2003, 1074, 21, 576, 4836, 4832, 10785, 11623, 11539, 11533, 6943, 8590, 1115, 1241, 8712, 5281, 4849, 10741, 8790, 6583, 6603, 10456, 5438, 504, 5914, 6621, 10742, 6024, 6589, 11624, 11625, 11626, 1177, 11566, 8589, 5403, 11628, 2]
// Exports: default

// Module 11622 (ActivityDetailContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4832 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import DetailsHeaderDefault from "DetailsHeader" /* 8589 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8590 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8712 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import DeveloperActivityShelfActionCreatorsAll from "DeveloperActivityShelfActionCreators" /* 10742 */;
import AppLauncherContext from "AppLauncherContext" /* 10785 */;
import useActivityShelfItem from "useActivityShelfItem" /* 11539 */;
import HeroMediaDefault from "HeroMedia" /* 11566 */;
import useIsPrimaryEntryPointDisabledDefault from "useIsPrimaryEntryPointDisabled" /* 11625 */;
import useShowTryItOutButtonInAppLauncherDefault from "useShowTryItOutButtonInAppLauncher" /* 11626 */;
import getItemSubtitleForMaxPlayersDefault from "getItemSubtitleForMaxPlayers" /* 11628 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8320 */;
import ApplicationRecord from "ApplicationRecord" /* 2003 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3, c4, c5, dependencyMap, importDefault;

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
  return closure_12(View, obj);
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
function TryItOutButton(botUserId) {
  let closure_3;
  let closure_4;
  let first;
  let intl;
  botUserId = botUserId.botUserId;
  const applicationId = botUserId.applicationId;
  const analyticsLocations = botUserId.analyticsLocations;
  dependencyMap = undefined;
  const context = botUserId.context;
  [first, dependencyMap] = react.useState(false);
  _asyncToGenerator = react.useRef(null);
  const items = [botUserId, applicationId, analyticsLocations];
  let str = "primary";
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let obj9;
    if (c5 === 2) {
      c5 = 3;
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
        let channelId;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            channelId = undefined;
            const obj4 = { application_id: applicationId, button_action: channelId(c3[19]).EntryPointCommandButtonActions.OPEN_APP_DM };
            const track = tmp(c3[18]).track;
            const APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED = constants.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED;
            const tmp27 = tmp(c3[18]);
            track(APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, obj4);
            const _setTimeout = setTimeout;
            closure_4.current = setTimeout(() => {
              closure_1_3(true);
            }, 250);
            c3 = 1;
            const obj5 = { recipientIds: botUserId };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj9.openPrivateChannel(obj5), done: false };
            obj9 = tmp(c3[21]);
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              channelId = value;
              const obj8 = { targetApplicationId: closure_129_1, channelId, analyticsLocations: closure_129_2 };
              c4 = 3;
              c5 = 1;
              const obj10 = { value: tmp(c3[22])(obj8), done: false };
              return obj10;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_129_4.current);
          closure_129_3(false);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        let closure_2 = tmp18;
        if (0 === c3) {
          c5 = 3;
          throw tmp18;
        } else {
          c4 = 1;
        }
      }
    }
  }), items);
  if ("channel" === context.type) {
    str = "secondary";
  }
  let obj = { size: "lg", loading: first, variant: str, text: intl.string(botUserId(1115).t.AUM8hY), onPress: callback };
  const Button = botUserId(5281).Button;
  intl = botUserId(1115).intl;
  return closure_11(Button, obj);
}
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, cardContainer: obj2, activityHeroDetailsLandscape: { flexDirection: "row" }, heroMediaContainerLandscape: { width: "65%" }, detailsContainerLandscape: { width: "35%" }, details: { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 }, tagList: obj3, tag: obj4, tagText: { top: -1 }, tagIcon: { marginRight: 4 }, buttonContainer: { paddingTop: 16 }, activityUrlOverrideInputContainer: { marginTop: -4 }, primaryEntryPointButtonDisabledCTA: obj5, tryItOutButtonContainerStyle: { marginTop: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden", gap: nativeDefault.space.PX_16, paddingBottom: PX_12 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: nativeDefault.space.PX_8, columnGap: 4, rowGap: 6 };
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingVertical: 4 };
obj5 = { marginTop: nativeDefault.space.PX_12, color: nativeDefault.colors.TEXT_MUTED, textAlign: "center" };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx");

export default function ActivityDetailContent(application) {
  let HelpMessage;
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
  let items5;
  let items7;
  let items8;
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
  let obj = application(10785);
  const width = obj.useRequiredAppLauncherContext().width;
  let obj2 = application(8790);
  const getPrimaryAppCommand = obj2.useGetPrimaryAppCommand(context, application.id);
  const tmp6 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp6(AnalyticsLocationDefault.APP_DETAIL).analyticsLocations;
  [tmp8, c1] = react.useState(undefined);
  _slicedToArray(react.useState(undefined), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.width));
  }, []);
  const obj3 = application(5438);
  const isScreenLandscape = obj3.useIsScreenLandscape();
  let detailsContainerLandscape = entrypoint !== application(8712).AppLauncherEntrypoint.VOICE && isScreenLandscape;
  const items = [DeveloperActivityShelfStore];
  const tmp2Result = application(504);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items, () => {
    const obj = { isDeveloperOfThisApp: DeveloperActivityShelfStore.inDevModeForApplication(application.id), activityUrlOverride: DeveloperActivityShelfStore.getActivityUrlOverride(), useActivityUrlOverride: DeveloperActivityShelfStore.getUseActivityUrlOverride() };
    return obj;
  });
  ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
  const tmp2Result7 = application(8590);
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
      items1 = [closure_11(application(5914).TableRowDivider, {}), , ];
      const obj6 = { label: intl.string(application(1115).t["3TSGuD"]), value: useActivityUrlOverride, onValueChange: DeveloperActivityShelfActionCreatorsAll.toggleUseActivityUrlOverride, end: true };
      const TableSwitchRow = tmp2(6621).TableSwitchRow;
      intl = tmp2(1115).intl;
      items1[1] = closure_11(TableSwitchRow, obj6);
      let tmp20Result = null;
      const tmp21 = importAll;
      if (useActivityUrlOverride) {
        const obj7 = { style: tmp.activityUrlOverrideInputContainer, children: closure_11(TextInput, obj8) };
        TextInput = tmp2(6024).TextInput;
        obj8 = { placeholder: "e.g. http://192.168.1.1:3000", value: activityUrlOverride, onChange: tmp21(10742).setActivityUrlOverride };
        tmp20Result = tmp20(tmp19, obj7);
      }
      items1[2] = tmp20Result;
      tmp18Result = tmp18(tmp19, obj5);
    }
    const tmp2Result8 = application(6589);
    const getOrFetchApplication = tmp2Result8.useGetOrFetchApplication(application.id);
    let bot;
    if (getOrFetchApplication != null) {
      bot = getOrFetchApplication.bot;
    }
    const obj9 = { context, applicationId: application.id };
    const tmp2Result9 = application(11539);
    const activityAction = tmp2Result9.useActivityAction(obj9);
    const tmp2Result10 = application(11624);
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
          obj14 = { botUserId: bot.id, applicationId: application.id, analyticsLocations, context };
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
        tmp37Result2 = tmp37(tmp2(4832).Text, obj17);
      }
      items3[1] = tmp37Result2;
      tmp35Result = closure_12(tmp43, obj16);
    } else {
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = !hasCommands;
      }
      if (isDeveloperOfThisApp) {
        const tmp2Result11 = application(8590);
        isDeveloperOfThisApp = tmp2Result11.isEmbeddedApp(application);
      }
      if (isDeveloperOfThisApp) {
        const obj18 = { style: tmp.buttonContainer, children: closure_11(HelpMessage, obj19) };
        obj19 = { messageType: application(1177).HelpMessageTypes.WARNING, children: intl2.format(application(1115).t["s/3hjE"], {}) };
        HelpMessage = tmp2(1177).HelpMessage;
        intl2 = tmp2(1115).intl;
        tmp31 = closure_11(View, obj18);
      }
    }
    const obj20 = { value: analyticsLocations, children: closure_11(View, obj21) };
    obj21 = { style: items4, children: closure_11(View, obj22) };
    items4 = [tmp.container];
    let activityHeroDetailsLandscape = detailsContainerLandscape;
    obj22 = { style: tmp.cardContainer, children: closure_12(View, obj23) };
    const AnalyticsLocationProvider = tmp2(6583).AnalyticsLocationProvider;
    if (detailsContainerLandscape) {
      activityHeroDetailsLandscape = tmp.activityHeroDetailsLandscape;
    }
    obj23 = { style: activityHeroDetailsLandscape, children: items5 };
    const obj24 = { style: tmp48, onLayout: callback, children: closure_11(tmp5Result3, obj25) };
    obj25 = { applicationId: application.id, width: result, contentWidth: tmp8 };
    result = width;
    tmp48 = detailsContainerLandscape && tmp.heroMediaContainerLandscape;
    tmp5Result3 = HeroMediaDefault;
    if (detailsContainerLandscape) {
      result = 65 * width / 100;
    }
    items5 = [closure_11(View, obj24), ];
    const items6 = [tmp.details, ];
    if (detailsContainerLandscape) {
      detailsContainerLandscape = tmp.detailsContainerLandscape;
    }
    const obj26 = { style: items6, children: items7 };
    items6[1] = detailsContainerLandscape;
    const obj27 = { application };
    items7 = [closure_11(DetailsHeaderDefault, obj27), , , , ];
    const obj28 = { style: tmp.tagList, children: items8 };
    const obj29 = { icon: closure_11(application(5403).GroupIcon, obj30), tagName: getItemSubtitleForMaxPlayersShort(num5), accessibilityLabel: tmp5Result4(num) };
    num5 = num;
    obj30 = { style: tmp.tagIcon, size: "xs" };
    getItemSubtitleForMaxPlayersShort = application(11628).getItemSubtitleForMaxPlayersShort;
    application(11628);
    const tmp51 = Tag;
    if (num == null) {
      num5 = 0;
    }
    tmp5Result4 = getItemSubtitleForMaxPlayersDefault;
    if (num == null) {
      num = 0;
    }
    items8 = [closure_11(tmp51, obj29, "participants"), ];
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
    items8[1] = mapped;
    items7[1] = closure_12(View, obj28);
    items7[2] = tmp35Result;
    items7[3] = tmp31;
    items7[4] = tmp18Result;
    items5[1] = closure_12(View, obj26);
    return closure_11(AnalyticsLocationProvider, obj20);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
    throw error;
  }
};
