// Module ID: 11292
// Function ID: 87847
// Name: Tag
// Dependencies: [5, 57, 31, 27, 7370, 4153, 653, 33, 689, 4130, 4126, 10911, 11293, 11207, 11201, 6755, 8006, 1212, 675, 8226, 4543, 4140, 10856, 10859, 5462, 5482, 4663, 566, 5125, 5502, 10857, 7574, 5468, 11294, 11295, 11296, 1273, 11233, 9050, 4646, 11298, 2]
// Exports: default

// Module 11292 (Tag)
import _callSuper from "_callSuper";
import _slicedToArray from "_slicedToArray";
import TextInput from "TextInput";
import { View } from "initialize";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_callSuper";
import { AnalyticEvents } from "ME";
import jsxProd from "useDelayedSwapToActivityActionLeave";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function Tag(arg0) {
  let accessibilityLabel;
  let icon;
  let tagName;
  ({ tagName, icon, accessibilityLabel } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.tag, accessible: true, accessibilityLabel };
  const items = [icon, ];
  obj = { variant: "text-sm/normal", style: tmp.tagText, children: tagName };
  items[1] = callback3(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback4(View, obj);
}
function PrimaryEntryPointButton(applicationId) {
  let context;
  let disabled;
  let entrypoint;
  let onActivityItemSelected;
  let primaryEntryPointCommand;
  let sectionName;
  applicationId = applicationId.applicationId;
  ({ context, primaryEntryPointCommand } = applicationId);
  const activityAction = applicationId.activityAction;
  let handleActivityItemSelected;
  ({ sectionName, disabled, onActivityItemSelected, entrypoint } = applicationId);
  const id = handleActivityItemSelected.useId();
  let obj = applicationId(chatInputRef[11]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const items = [chatInputRef, keyboardCloseReasonRef];
  const callback = handleActivityItemSelected.useCallback(() => {
    keyboardCloseReasonRef.current = applicationId(chatInputRef[11]).AppLauncherKeyboardCloseReason.ACTIVITY;
    const current = chatInputRef.current;
    if (null != current) {
      current.closeCustomKeyboard();
    }
  }, items);
  obj = { applicationId, context, launchingComponentId: id };
  let tmp5;
  if (activityAction !== applicationId(chatInputRef[13]).ActivityAction.LEAVE) {
    tmp5 = callback;
  }
  obj.onSubmissionComplete = tmp5;
  const tmp4 = primaryEntryPointCommand(chatInputRef[12]);
  obj = { applicationId, context, sectionName, onActivityItemSelected, location: applicationId(chatInputRef[15]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, entrypoint, launchingComponentId: id };
  handleActivityItemSelected = applicationId(chatInputRef[14]).useHandleActivityItemSelected(obj).handleActivityItemSelected;
  const items1 = [primaryEntryPointCommand.displayName];
  let memo = handleActivityItemSelected.useMemo(() => applicationId(chatInputRef[16]).formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName), items1);
  if (null == memo) {
    const intl = applicationId(chatInputRef[17]).intl;
    memo = intl.string(applicationId(chatInputRef[17]).t.zKX8Nu);
  }
  if (activityAction === applicationId(chatInputRef[13]).ActivityAction.JOIN) {
    const intl2 = applicationId(chatInputRef[17]).intl;
    memo = intl2.string(applicationId(chatInputRef[17]).t.d9PsMj);
    let str = "active";
  } else {
    str = "primary";
    if (activityAction === applicationId(chatInputRef[13]).ActivityAction.LEAVE) {
      const intl3 = applicationId(chatInputRef[17]).intl;
      memo = intl3.string(applicationId(chatInputRef[17]).t["Hi1/aQ"]);
      str = "destructive";
    }
  }
  const items2 = [handleActivityItemSelected, activityAction, callback, applicationId];
  let tmp14 = null;
  if ("channel" === context.type) {
    const obj1 = { size: "lg", loading: tmp4(obj).submitting, variant: str, text: memo, disabled, onPress: tmp13 };
    tmp14 = callback3(applicationId(chatInputRef[20]).Button, obj1);
  }
  return tmp14;
}
function TryItOutButton(botUserId) {
  botUserId = botUserId.botUserId;
  const applicationId = botUserId.applicationId;
  const analyticsLocations = botUserId.analyticsLocations;
  const tmp2 = callback2(React.useState(false), 2);
  const dependencyMap = tmp2[1];
  let callback = React.useRef(null);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [botUserId, applicationId, analyticsLocations];
  let str = "primary";
  callback = React.useCallback(callback(tmp), items);
  if ("channel" === botUserId.context.type) {
    str = "secondary";
  }
  const obj = { size: "lg", loading: tmp2[0], variant: str };
  const intl = botUserId(1212).intl;
  obj.text = intl.string(botUserId(1212).t.AUM8hY);
  obj.onPress = callback;
  return callback3(botUserId(4543).Button, obj);
}
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", gap: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: PX_12 };
_createForOfIteratorHelperLoose.cardContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.activityHeroDetailsLandscape = { flexDirection: "row" };
_createForOfIteratorHelperLoose.heroMediaContainerLandscape = { width: "65%" };
_createForOfIteratorHelperLoose.detailsContainerLandscape = { width: "35%" };
let obj1 = { marginTop: 16, paddingHorizontal: PX_12, rowGap: 4 };
_createForOfIteratorHelperLoose.details = obj1;
let obj2 = { display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, columnGap: 4, rowGap: 6 };
_createForOfIteratorHelperLoose.tagList = obj2;
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingHorizontal: 12, paddingVertical: 4 };
_createForOfIteratorHelperLoose.tag = obj3;
_createForOfIteratorHelperLoose.tagText = { top: -1 };
_createForOfIteratorHelperLoose.tagIcon = { marginRight: 4 };
_createForOfIteratorHelperLoose.buttonContainer = { paddingTop: 16 };
_createForOfIteratorHelperLoose.activityUrlOverrideInputContainer = { marginTop: -4 };
_createForOfIteratorHelperLoose.primaryEntryPointButtonDisabledCTA = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, textAlign: "center" };
_createForOfIteratorHelperLoose.tryItOutButtonContainerStyle = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, textAlign: "center" };
let result = require("result").fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx");

export default function ActivityDetailContent(application) {
  let activityUrlOverride;
  let context;
  let entrypoint;
  let hasCommands;
  let isDeveloperOfThisApp;
  let onActivityItemSelected;
  let sectionName;
  let useActivityUrlOverride;
  application = application.application;
  ({ context, entrypoint } = application);
  ({ sectionName, onActivityItemSelected, hasCommands } = application);
  let mapped = _createForOfIteratorHelperLoose();
  let obj = application(10911);
  const width = obj.useRequiredAppLauncherContext().width;
  let obj1 = application(10859);
  const getPrimaryAppCommand = obj1.useGetPrimaryAppCommand(context, application.id);
  const analyticsLocations = importDefault(5462)(importDefault(5482).APP_DETAIL).analyticsLocations;
  let obj2 = application(4663);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  let detailsContainerLandscape = entrypoint !== application(8226).AppLauncherEntrypoint.VOICE && isScreenLandscape;
  let obj3 = application(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ isDeveloperOfThisApp: outer1_8.inDevModeForApplication(application.id), activityUrlOverride: outer1_8.getActivityUrlOverride(), useActivityUrlOverride: outer1_8.getUseActivityUrlOverride() }));
  ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
  let obj4 = application(8006);
  if (obj4.isRealApplication(application)) {
    const tmp12 = application instanceof closure_9 ? application.maxParticipants : application.max_participants;
    let num = 0;
    if (null != tmp12) {
      num = tmp12;
    }
    let tmp15Result = null;
    if (isDeveloperOfThisApp) {
      obj = {};
      obj = { marginTop: PX_12 };
      let num2 = 0;
      if (!useActivityUrlOverride) {
        num2 = -PX_12;
      }
      obj.marginBottom = num2;
      obj.style = obj;
      const items1 = [callback3(application(5125).TableRowDivider, {}), , ];
      obj1 = {};
      let intl = application(1212).intl;
      obj1.label = intl.string(application(1212).t["3TSGuD"]);
      obj1.value = useActivityUrlOverride;
      obj1.onValueChange = importAll(10857).toggleUseActivityUrlOverride;
      obj1.end = true;
      items1[1] = callback3(application(5502).TableSwitchRow, obj1);
      let tmp25Result = null;
      if (useActivityUrlOverride) {
        obj2 = { style: mapped.activityUrlOverrideInputContainer };
        obj3 = { placeholder: "e.g. http://192.168.1.1:3000" };
        let tmp30;
        if (null != activityUrlOverride) {
          tmp30 = activityUrlOverride;
        }
        obj3.value = tmp30;
        obj3.onChange = importAll(10857).setActivityUrlOverride;
        obj2.children = callback3(application(7574).TextInput, obj3);
        tmp25Result = callback3(View, obj2);
        const tmp25 = callback3;
        const tmp26 = View;
        const tmp27 = callback3;
      }
      items1[2] = tmp25Result;
      obj.children = items1;
      tmp15Result = closure_12(View, obj);
      const tmp15 = closure_12;
      const tmp16 = View;
    }
    let obj10 = application(5468);
    const getOrFetchApplication = obj10.useGetOrFetchApplication(application.id);
    let bot;
    if (null != getOrFetchApplication) {
      bot = getOrFetchApplication.bot;
    }
    let obj11 = application(11207);
    obj4 = { context, applicationId: application.id };
    const activityAction = obj11.useActivityAction(obj4);
    let obj13 = application(11294);
    const delayedSwapToActivityActionLeave = obj13.useDelayedSwapToActivityActionLeave(activityAction);
    const obj5 = { context, application, activityAction: delayedSwapToActivityActionLeave };
    const tmp42 = importDefault(11295)(obj5);
    const reason = tmp42.reason;
    const obj6 = { context, application };
    let id;
    importDefault(11296);
    if (null != bot) {
      id = bot.id;
    }
    obj6.botUserId = id;
    if (null != getPrimaryAppCommand) {
      const obj7 = {};
      const obj8 = { applicationId: application.id, context, sectionName, primaryEntryPointCommand: getPrimaryAppCommand, disabled: tmp42.disabled, onActivityItemSelected, entrypoint, activityAction: delayedSwapToActivityActionLeave };
      const items2 = [callback3(PrimaryEntryPointButton, obj8), ];
      let tmp59 = null;
      if (tmp45) {
        let id1;
        if (null != bot) {
          id1 = bot.id;
        }
        tmp59 = null;
        if (null != id1) {
          const obj9 = { style: mapped.tryItOutButtonContainerStyle };
          obj10 = { botUserId: bot.id, applicationId: application.id, analyticsLocations, context };
          obj9.children = callback3(TryItOutButton, obj10);
          tmp59 = callback3(View, obj9);
        }
      }
      items2[1] = tmp59;
      obj7.children = items2;
      obj11 = { style: mapped.buttonContainer };
      const items3 = [closure_12(closure_13, obj7), ];
      let tmp67 = null != reason;
      if (tmp67) {
        const obj12 = { variant: "text-sm/normal", style: mapped.primaryEntryPointButtonDisabledCTA, children: reason };
        tmp67 = callback3(application(4126).Text, obj12);
      }
      items3[1] = tmp67;
      obj11.children = items3;
      const tmp55 = closure_12;
      const tmp56 = closure_13;
      const tmp65 = closure_12;
      const tmp65Result = closure_12(View, obj11);
      const tmp66 = View;
    } else {
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = !hasCommands;
      }
      if (isDeveloperOfThisApp) {
        let obj16 = application(8006);
        isDeveloperOfThisApp = obj16.isEmbeddedApp(application);
      }
      if (isDeveloperOfThisApp) {
        obj13 = { style: mapped.buttonContainer };
        const obj14 = { messageType: application(1273).HelpMessageTypes.WARNING };
        const intl2 = application(1212).intl;
        obj14.children = intl2.format(application(1212).t["s/3hjE"], {});
        obj13.children = callback3(application(1273).HelpMessage, obj14);
        const tmp49 = callback3(View, obj13);
      }
    }
    const obj15 = { value: analyticsLocations };
    obj16 = {};
    const items4 = [mapped.container];
    obj16.style = items4;
    const obj17 = { style: mapped.cardContainer };
    const obj18 = {};
    let activityHeroDetailsLandscape = detailsContainerLandscape;
    if (detailsContainerLandscape) {
      activityHeroDetailsLandscape = mapped.activityHeroDetailsLandscape;
    }
    obj18.style = activityHeroDetailsLandscape;
    const obj19 = {};
    let heroMediaContainerLandscape = detailsContainerLandscape;
    if (detailsContainerLandscape) {
      heroMediaContainerLandscape = mapped.heroMediaContainerLandscape;
    }
    obj19.style = heroMediaContainerLandscape;
    const obj20 = { applicationId: application.id };
    let result = width;
    if (detailsContainerLandscape) {
      result = 65 * width / 100;
    }
    obj20.width = result;
    obj19.children = callback3(importDefault(11233), obj20);
    const items5 = [callback3(View, obj19), ];
    const obj21 = {};
    const items6 = [mapped.details, ];
    if (detailsContainerLandscape) {
      detailsContainerLandscape = mapped.detailsContainerLandscape;
    }
    items6[1] = detailsContainerLandscape;
    obj21.style = items6;
    const obj22 = { application };
    const items7 = [callback3(importDefault(9050), obj22), , , , ];
    const obj23 = { style: mapped.tagList };
    const obj24 = {};
    const obj25 = { style: mapped.tagIcon, size: "xs" };
    obj24.icon = callback3(application(4646).GroupIcon, obj25);
    const tmp71 = callback3;
    const tmp74 = callback3;
    const tmp75 = View;
    const tmp76 = callback3;
    const tmp77 = View;
    const tmp78 = closure_12;
    const tmp79 = View;
    const tmp80 = callback3;
    const tmp81 = View;
    const tmp82 = callback3;
    const tmp85 = importDefault(11233);
    const tmp87 = closure_12;
    const tmp88 = View;
    const tmp92 = closure_12;
    const tmp93 = View;
    const tmp94 = callback3;
    const tmp95 = Tag;
    let num22 = 0;
    if (null != num) {
      num22 = num;
    }
    obj24.tagName = application(11298).getItemSubtitleForMaxPlayersShort(num22);
    let num23 = 0;
    const obj37 = application(11298);
    if (null != num) {
      num23 = num;
    }
    obj24.accessibilityLabel = importDefault(11298)(num23);
    const items8 = [tmp94(tmp95, obj24, "participants"), ];
    const tags = application.tags;
    mapped = undefined;
    if (null != tags) {
      mapped = tags.map((tagName) => {
        let obj = { tagName };
        const intl = application(outer1_3[17]).intl;
        obj = { tagName };
        obj.accessibilityLabel = intl.formatToPlainString(application(outer1_3[17]).t.tXXD6v, obj);
        return outer1_11(outer1_16, obj, tagName);
      });
    }
    items8[1] = mapped;
    obj23.children = items8;
    items7[1] = tmp92(tmp93, obj23);
    items7[2] = tmp65Result;
    items7[3] = tmp49;
    items7[4] = tmp15Result;
    obj21.children = items7;
    items5[1] = tmp87(tmp88, obj21);
    obj18.children = items5;
    obj17.children = tmp78(tmp79, obj18);
    obj16.children = tmp76(tmp77, obj17);
    obj15.children = tmp74(tmp75, obj16);
    return tmp71(application(5462).AnalyticsLocationProvider, obj15);
  } else {
    const _Error = Error;
    const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
    throw error;
  }
  const tmp3 = importDefault(5462);
};
