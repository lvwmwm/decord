// Module ID: 19830
// Function ID: 19831
// Name: LaunchAccountLinkingCampaignActionSheet
// Dependencies: [32, 19, 17, 2165, 1388, 19831, 5152, 21, 5306, 504, 7919, 7918, 7937, 15282, 1089, 5552, 6338, 1264, 19832, 19834, 2121, 19836, 6337, 7924, 7420, 575, 9442, 5936, 1113, 3579, 15195, 10713, 2]
// Exports: default

// Module 19830 (LaunchAccountLinkingCampaignActionSheet)
import react_native from "react-native" /* 17 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import AccountLinkManager from "AccountLinkManager" /* 19832 */;
import AccountLinkingCampaignActionCreators from "AccountLinkingCampaignActionCreators" /* 19836 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserStore from "UserStore" /* 1388 */;
import AccountLinkingCampaignStore from "AccountLinkingCampaignStore" /* 19831 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let unpackModuleId;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" } });
let result = size.fileFinishedImporting("modules/application_account_linking/native/LaunchAccountLinkingCampaignActionSheet.tsx");

export default function LaunchAccountLinkingCampaignActionSheet(markAsDismissed) {
  let OrbsIcon;
  let WindowLaunchIcon;
  let endAtUnixS;
  let formatResult;
  let intl;
  let intl2;
  let intl3;
  let items7;
  let items8;
  let obj11;
  let obj15;
  let obj18;
  let obj7;
  let orbCount;
  let tmp24Result4;
  let tmp6Result4;
  _require = markAsDismissed;
  let obj = endAtUnixS;
  const first = orbCount(endAtUnixS.useState(() => {
    let id;
    const obj = { campaignId: markAsDismissed.campaignId, applicationId: markAsDismissed.applicationId, orbCount: markAsDismissed.orbCount, endAtUnixS: markAsDismissed.endAtUnixS, openedUserId: id, openedSessionGeneration: AccountLinkingCampaignStore.getSessionGeneration() };
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return obj;
  }), 1)[0];
  const campaignId = first.campaignId;
  const applicationId = first.applicationId;
  orbCount = first.orbCount;
  endAtUnixS = first.endAtUnixS;
  const openedUserId = first.openedUserId;
  const openedSessionGeneration = first.openedSessionGeneration;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const actionSheetKey = markAsDismissed.actionSheetKey;
  let tmp2 = closure_13();
  let tmp3 = _require;
  let obj2 = require("get initialized");
  const items = [openedSessionGeneration];
  const stateFromStores = obj2.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  let tmp6 = campaignId;
  const startAuthorization = campaignId(applicationId[10])(stateFromStores).startAuthorization;
  let tmp7 = campaignId(applicationId[11]);
  const analyticsLocations = tmp7(campaignId(applicationId[12]).ACTION_SHEET).analyticsLocations;
  const items1 = [openedUserId, openedSessionGeneration];
  const callback = endAtUnixS.useCallback(() => {
    let tmp2 = null != openedUserId;
    if (tmp2) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp2 = id === tmp;
    }
    if (tmp2) {
      tmp2 = AccountLinkingCampaignStore.getSessionGeneration() === openedSessionGeneration;
    }
    return tmp2;
  }, items1);
  const items2 = [markAsDismissed, actionSheetKey];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let tmp2 = null == openedUserId;
    if (!tmp2) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp2 = id !== tmp;
    }
    if (!tmp2) {
      tmp2 = AccountLinkingCampaignStore.getSessionGeneration() !== openedSessionGeneration;
    }
    return tmp2;
  });
  let tmp10 = orbCount(endAtUnixS.useState(Date.now), 2);
  let closure_12 = tmp10[1];
  let result = 1000 * endAtUnixS;
  let tmp12 = null != stateFromStores && result > Math.max(tmp10[0], Date.now()) && !stateFromStores1;
  closure_13 = tmp12;
  let minResult = null;
  const tmp6Result = tmp6(applicationId[13]);
  if (tmp12) {
    const _Math = Math;
    const _Date = Date;
    const result1 = 1000 * endAtUnixS;
    const diff = result1 - Date.now();
    minResult = min(diff, tmp6(tmp4[14]).Millis.DAY);
  }
  tmp6Result(() => closure_12(Date.now()), minResult);
  const items3 = [actionSheetKey, tmp12];
  const effect = obj.useEffect(() => {
    const tmp = closure_13;
    if (!tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(actionSheetKey);
    }
  }, items3);
  const obj4 = { type: tmp3(applicationId[17]).ImpressionTypes.HALFSHEET, name: tmp3(applicationId[17]).ImpressionNames.LAUNCH_ACCOUNT_LINKING_CAMPAIGN_SHEET, properties: { campaign_id: campaignId, application_id: applicationId, orb_count: orbCount } };
  const obj5 = { disableTrack: !tmp12 };
  const tmp6Result3 = tmp6(applicationId[16]);
  tmp6Result3(obj4, obj5);
  let closure_14 = tmp21;
  const items4 = [analyticsLocations, applicationId, endAtUnixS, orbCount > 0, callback, markAsDismissed, orbCount, startAuthorization];
  const items5 = [campaignId, markAsDismissed];
  const callback1 = obj.useCallback(() => {
    let closure_1;
    let obj = campaignId(applicationId[15]);
    obj.hideActionSheet();
    let result = 1000 * endAtUnixS;
    if (result > Date.now()) {
      if (callback()) {
        let currentUser = markAsDismissed.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (null != id) {
          const sessionGeneration = actionSheetKey.getSessionGeneration();
          function isCurrentSession() {

          }
          let tmp8 = markAsDismissed;
          const tmp10 = markAsDismissed(startAuthorization.TAKE_ACTION);
          let obj2 = {
            analyticsLocations,
            onSuccess() {
                    let tmp = closure_14;
                    if (tmp) {
                      if (typeof isCurrentSession === "function") {
                        let currentUser = UserStore.getCurrentUser();
                        id = undefined;
                        if (currentUser != null) {
                          id = currentUser.id;
                        }
                        let tmp8 = id === id;
                        if (tmp8) {
                          tmp8 = AccountLinkingCampaignStore.getSessionGeneration() === closure_1;
                        }
                        tmp = tmp8;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (tmp) {
                      let obj = AccountLinkManager;
                      let obj2 = {
                        applicationId,
                        onSuccess() {
                            if (typeof isCurrentSession === "function") {
                              const currentUser = markAsDismissed.getCurrentUser();
                              id = undefined;
                              if (currentUser != null) {
                                id = currentUser.id;
                              }
                              const tmp6 = id === closure_1_0 && actionSheetKey.getSessionGeneration() === closure_1_1;
                              if (tmp6) {
                                const obj2 = { orbCount };
                                const obj = campaignId(applicationId[15]);
                                obj.openLazy(closure_0(applicationId[20])(applicationId[19], applicationId.paths), "IncentivizedAccountLinkConfirmationBottomSheet", obj2);
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                      };
                      const result = obj.claimIncentivizedAccountLinkingReward(obj2);
                    }
                  }
          };
          startAuthorization(obj2);
        }
      }
    }
  }, items4);
  if (tmp12) {
    const obj6 = { style: tmp2.iconContainer, children: analyticsLocations(tmp6Result4, obj7) };
    const Stack = tmp3(tmp4[22]).Stack;
    obj7 = { game: stateFromStores, size: tmp3(applicationId[23]).GameIconSizes.NORMAL };
    tmp6Result4 = tmp6(applicationId[23]);
    const items6 = [analyticsLocations(openedUserId, obj6), ];
    let tmp24Result = tmp21;
    const tmp26 = openedUserId;
    if (tmp24Result) {
      const obj8 = { children: items7 };
      const obj9 = { size: "md", color: tmp6(applicationId[25]).colors.ICON_MUTED, accessible: false };
      const MoreHorizontalIcon = tmp3(tmp4[24]).MoreHorizontalIcon;
      items7 = [analyticsLocations(MoreHorizontalIcon, obj9), ];
      const obj10 = { style: tmp2.iconContainer, children: analyticsLocations(OrbsIcon, obj11) };
      obj11 = { size: "lg", color: tmp6(applicationId[25]).colors.TEXT_STRONG };
      OrbsIcon = tmp3(tmp4[26]).OrbsIcon;
      items7[1] = analyticsLocations(tmp26, obj10);
      tmp24Result = tmp24(callback, obj8);
    }
    const obj12 = { direction: "horizontal", justify: "center", align: "center", children: items6 };
    items6[1] = tmp24Result;
    const obj13 = { children: items8 };
    const tmp24Result3 = closure_12(Stack, obj12);
    const Stack2 = tmp3(tmp4[22]).Stack;
    const obj14 = { text: intl.string(tmp6(applicationId[29]).QrkiD2), icon: analyticsLocations(WindowLaunchIcon, obj15), iconPosition: "end", size: "lg", onPress: callback1 };
    const Button = tmp3(tmp4[27]).Button;
    intl = tmp3(tmp4[28]).intl;
    obj15 = { size: "sm", color: tmp6(applicationId[25]).colors.ICON_OVERLAY_LIGHT };
    WindowLaunchIcon = tmp3(tmp4[30]).WindowLaunchIcon;
    items8 = [analyticsLocations(Button, obj14), ];
    const obj16 = { text: intl2.string(tmp3(applicationId[28]).t.TulDPl), variant: "secondary", size: "lg", onPress: tmp23 };
    const Button2 = tmp3(tmp4[27]).Button;
    intl2 = tmp3(tmp4[28]).intl;
    items8[1] = analyticsLocations(Button2, obj16);
    const obj17 = {
      title: intl3.formatToPlainString(tmp6(applicationId[29]).UV9ikL, obj18),
      description: formatResult,
      illustration: tmp24Result3,
      actions: tmp24Result4,
      onDismiss() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
    };
    tmp24Result4 = closure_12(Stack2, obj13);
    const PromoSheet = tmp3(tmp4[31]).PromoSheet;
    intl3 = tmp3(tmp4[28]).intl;
    obj18 = { applicationName: stateFromStores.name };
    const intl4 = tmp3(tmp4[28]).intl;
    if (orbCount > 0) {
      const obj19 = {
        orbCount,
        orbsIconHook(arg0, arg1) {
              const obj = { size: "xs", color: campaignId(applicationId[25]).colors.TEXT_STRONG };
              const OrbsIcon = markAsDismissed(applicationId[26]).OrbsIcon;
              return analyticsLocations(OrbsIcon, obj, arg1);
            }
      };
      formatResult = intl4.format(tmp6(tmp4[29]).SRetJj, obj19);
    } else {
      formatResult = intl4.string(tmp6(tmp4[29])["jX/Uhq"]);
    }
    return analyticsLocations(PromoSheet, obj17);
  } else {
    return null;
  }
};
