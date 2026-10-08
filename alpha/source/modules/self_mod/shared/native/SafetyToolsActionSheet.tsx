// Module ID: 10402
// Function ID: 10403
// Name: SafetyToolsActionSheet
// Dependencies: [19, 17, 4717, 10361, 21, 5090, 587, 10400, 10403, 10404, 504, 10374, 6892, 1126, 8948, 8947, 5054, 10408, 1999, 4763, 6644, 6642, 6643, 6641, 7004, 10411, 4997, 7014, 5298, 10398, 9508, 9507, 7695, 10234, 10233, 5940, 10412, 10416, 10417, 10418, 10387, 10386, 10419, 10409, 6267, 6184, 6192, 2]
// Exports: default

// Module 10402 (SafetyToolsActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl18 from "intl" /* 1126 */;
import TableRowGroup2 from "TableRowGroup" /* 6267 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 6892 */;
import HeartIcon from "HeartIcon" /* 8947 */;
import AssetRegistryDefault from "AssetRegistry" /* 8948 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9508 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10234 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10374 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10387 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10411 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10416 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import Constants from "Constants" /* 10361 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let buttons;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const CircleXIcon = tmp(4997);
const EyeSlashIcon2 = tmp(6641);
const EyeIcon = tmp(6643);
const FlagIcon = tmp(9507);
const MusicIcon = tmp(10233);
const ShieldIcon = tmp(10386);
const EducationIcon = tmp(10417);
const View = react_native.View;
({ ACTION_SHEET_CONTEXT_MOBILE: metroRequire, getSafetyToolsActionSheetKey: metroImportDefault, THROUGHLINE_URL: metroImportAll, NOFILTR_URL: c9, VIBING_WUMPUS_MODAL_KEY: c10 } = Constants);
const jsx = Fragment.jsx;
let obj = { container: { flex: 1 }, actionRowGroup: obj2 };
obj2 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24 };
let closure_12 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheet.tsx");

export default function SafetyToolsActionSheet(channelId) {
  let intl;
  let obj8;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const recipientId = channelId.recipientId;
  const onClose = channelId.onClose;
  let callback;
  let tmp = callback();
  const actionRowGroup = tmp;
  let obj = channelId(warningType[7]);
  const lastChannelMessage = obj.useLastChannelMessage(channelId);
  let obj2 = channelId(warningType[8]);
  const shouldShowHelplineLink = obj2.useShouldShowHelplineLink();
  let obj3 = channelId(warningType[8]);
  const shouldShowThroughlineLink = obj3.useShouldShowThroughlineLink();
  let obj4 = channelId(warningType[9]);
  const tmp5 = null != obj4.useSafetyToolsButtonTooltipForChannel(channelId);
  const isNudgeWarning = tmp5;
  let obj5 = channelId(warningType[10]);
  let items = [actionRowGroup];
  let items1 = [recipientId];
  const stateFromStores = obj5.useStateFromStores(items, () => RelationshipStore.isBlocked(recipientId), items1);
  let obj6 = channelId(warningType[10]);
  let items2 = [actionRowGroup];
  let items3 = [recipientId];
  const stateFromStores1 = obj6.useStateFromStores(items2, () => RelationshipStore.isIgnored(recipientId), items3);
  const items4 = [channelId, warningId, warningType, recipientId, tmp5];
  callback = recipientId.useCallback((cta) => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId: recipientId, warningType, cta, isNudgeWarning };
    obj.trackCtaEvent(obj2);
  }, items4);
  const items5 = [stateFromStores, stateFromStores1, shouldShowHelplineLink, shouldShowThroughlineLink, callback, recipientId, channelId, warningId, warningType, onClose, lastChannelMessage];
  const memo = recipientId.useMemo(() => {
    let EyeSlashIcon;
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl15;
    let intl16;
    let intl17;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let items3;
    let string2Result;
    let stringResult;
    let stringResult1;
    let trackAnalyticsEvent;
    let tmp2 = dependencyMap;
    const ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
    const tmp4 = <ChevronSmallRightIcon size="md" color={nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT} />;
    let obj2 = {
      label: intl.string(intl18.t.ZSbbMJ),
      subLabel: intl2.string(intl18.t.iNcsrW),
      icon: AssetRegistryDefault,
      IconComponent: HeartIcon.HeartIcon,
      trailing: tmp4,
      onPress() {
        let closure_0 = shouldShowHelplineLink(channelId);
        const openLazy = warningId(warningType[16]).openLazy;
        warningId(warningType[16]);
        let obj = {
          recipientId,
          channelId,
          warningId,
          warningType,
          onClose() {
            const obj = warningId(warningType[16]);
            obj.hideActionSheet(closure_0);
          },
          trackAnalyticsEvent
        };
        const tmp2 = channelId(warningType[18])(warningType[17], warningType.paths);
        openLazy(tmp2, shouldShowHelplineLink(channelId), obj);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL);
      }
    };
    intl = intl18.intl;
    intl2 = intl18.intl;
    let obj3 = {
      label: intl3.string(intl18.t.ZSbbMJ),
      subLabel: intl4.string(intl18.t.S9O1ZZ),
      icon: AssetRegistryDefault,
      IconComponent: HeartIcon.HeartIcon,
      onPress() {
        const obj = warningId(warningType[19]);
        obj.openURL(shouldShowThroughlineLink);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_THROUGHLINE);
      }
    };
    intl3 = intl18.intl;
    intl4 = intl18.intl;
    let obj4 = {
      label: intl5.string(intl18.t.ZSbbMJ),
      subLabel: intl6.string(intl18.t.g5uwC5),
      icon: AssetRegistryDefault,
      IconComponent: HeartIcon.HeartIcon,
      onPress() {
        const obj = warningId(warningType[19]);
        obj.openURL(isNudgeWarning);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR);
      }
    };
    intl5 = intl18.intl;
    intl6 = intl18.intl;
    const intl7 = intl18.intl;
    const string = intl7.string;
    const t = intl18.t;
    if (stateFromStores1) {
      stringResult = string(t["9e0wLn"]);
    } else {
      stringResult = string(t.B7ZT06);
    }
    let obj5 = {
      label: stringResult,
      subLabel: stringResult1,
      icon: tmp3(tmp5 ? 6644 : 6642),
      IconComponent: EyeSlashIcon,
      disabled: stateFromStores,
      onPress() {
        const obj = warningId(warningType[24]);
        if (stateFromStores1) {
          obj.unignoreUser(recipientId, lastChannelMessage, closure_1_0);
          trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNIGNORE);
        } else {
          obj.ignoreUser(recipientId, lastChannelMessage, closure_1_0);
          trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_IGNORE);
        }
      }
    };
    stringResult1 = undefined;
    if (!stateFromStores1) {
      const intl8 = intl18.intl;
      stringResult1 = intl8.string(intl18.t.fCfp49);
    }
    if (stateFromStores1) {
      EyeSlashIcon = EyeIcon.EyeIcon;
    } else {
      EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
    }
    const items = [obj5, , ];
    const intl9 = intl18.intl;
    const string2 = intl9.string;
    const t2 = intl18.t;
    if (stateFromStores) {
      string2Result = string2(t2.Hro40y);
    } else {
      string2Result = string2(t2.oDxaKy);
    }
    const obj6 = { sectionKey: "action", buttons: items };
    const obj7 = {
      label: string2Result,
      subLabel: intl10.string(intl18.t.Lj37az),
      icon: AssetRegistryDefault5,
      IconComponent: CircleXIcon.CircleXIcon,
      onPress() {
        if (stateFromStores) {
          let obj = { location: lastChannelMessage };
          const tmpResult = warningId(warningType[24]);
          tmpResult.unblockUser(recipientId, obj);
          const obj5 = warningId(warningType[27]);
          const result = obj5.showUnblockSuccessToast(recipientId, closure_1_0);
          trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK);
        } else {
          const obj2 = {
            importer() {
                let senderId;
                const promise = channelId(warningType[18])(warningType[29], warningType.paths);
                return promise.then((result) => {
                  let closure_0 = result.default;
                  return (arg0) => {
                    const obj = { channelId, warningId, warningType, senderId, analyticsBlockContext: closure_3_0(closure_3_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CONFIRM, analyticsBlockAndReportContext: closure_3_0(closure_3_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM, analyticsCancelContext: closure_3_0(closure_3_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_BLOCK_CANCEL };
                    const merged = Object.assign(arg0);
                    return closure_3_11(closure_0, obj);
                  };
                });
              },
            isDismissable: false
          };
          const tmpResult2 = warningId(warningType[28]);
          tmpResult2.openLazy(obj2);
        }
      }
    };
    intl10 = intl18.intl;
    items[1] = obj7;
    const obj8 = {
      label: intl11.string(intl18.t.X27yhD),
      subLabel: intl12.string(intl18.t["0tydOa"]),
      icon: AssetRegistryDefault2,
      IconComponent: FlagIcon.FlagIcon,
      onPress() {
        onClose();
        const obj = channelId(warningType[32]);
        const result = obj.showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_REPORT);
      }
    };
    intl11 = intl18.intl;
    intl12 = intl18.intl;
    items[2] = obj8;
    const items1 = [obj6, , ];
    const obj9 = {
      label: intl13.string(intl18.t.syuaPI),
      subLabel: intl14.string(intl18.t.LLBnNk),
      icon: AssetRegistryDefault3,
      IconComponent: MusicIcon.MusicIcon,
      trailing: tmp4,
      onPress() {
        const obj = warningId(warningType[16]);
        obj.hideActionSheet();
        const obj2 = warningId(warningType[35]);
        const obj3 = {
          onClose() {

          }
        };
        obj2.pushLazy(channelId(warningType[18])(warningType[36], warningType.paths), obj3, stateFromStores);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS);
      }
    };
    intl13 = intl18.intl;
    intl14 = intl18.intl;
    const items2 = [obj9, , ];
    const obj10 = {
      label: intl15.string(intl18.t["7LgVmt"]),
      subLabel: intl16.string(intl18.t.pwoRjc),
      icon: AssetRegistryDefault6,
      IconComponent: EducationIcon.EducationIcon,
      trailing: tmp4,
      onPress() {
        let closure_0 = shouldShowHelplineLink(channelId);
        const openLazy = warningId(warningType[16]).openLazy;
        warningId(warningType[16]);
        let obj = {
          recipientId,
          channelId,
          warningId,
          warningType,
          onClose() {
            const obj = warningId(warningType[16]);
            obj.hideActionSheet(closure_0);
          }
        };
        const tmp2 = channelId(warningType[18])(warningType[39], warningType.paths);
        openLazy(tmp2, shouldShowHelplineLink(channelId), obj);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS);
      }
    };
    intl15 = intl18.intl;
    intl16 = intl18.intl;
    items2[1] = obj10;
    const tmp9 = shouldShowHelplineLink;
    if (!tmp9) {
      const tmp10 = shouldShowThroughlineLink;
      if (tmp10) {
        obj4 = obj3;
      }
      obj2 = obj4;
    }
    items2[2] = obj2;
    items1[1] = { sectionKey: "support", buttons: items2 };
    const obj11 = { sectionKey: "info", buttons: items3 };
    const obj12 = {
      label: intl17.string(intl18.t.otdt24),
      icon: AssetRegistryDefault4,
      IconComponent: ShieldIcon.ShieldIcon,
      trailing: tmp4,
      onPress() {
        let closure_0 = shouldShowHelplineLink(channelId);
        const openLazy = warningId(warningType[16]).openLazy;
        warningId(warningType[16]);
        let obj = {
          recipientId,
          channelId,
          warningId,
          warningType,
          onClose() {
            const obj = warningId(warningType[16]);
            obj.hideActionSheet(closure_0);
          }
        };
        const tmp2 = channelId(warningType[18])(warningType[42], warningType.paths);
        openLazy(tmp2, shouldShowHelplineLink(channelId), obj);
        trackAnalyticsEvent(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
      }
    };
    intl17 = intl18.intl;
    items3 = [obj12];
    items1[2] = obj11;
    return items1;
  }, items5);
  let obj7 = { headerTitle: intl.string(channelId(warningType[13]).t.MAhAp6), channelId, recipientId, warningId, warningType, onClose, children: stateFromStores1(onClose, obj8) };
  let tmp9 = warningId(warningType[43]);
  intl = channelId(warningType[13]).intl;
  obj8 = {
    style: tmp.container,
    children: memo.map((buttons) => {
      ({
        hasIcons: true,
        children: buttons.map((item, index) => {
          let IconComponent;
          let disabled;
          let icon;
          let label;
          let onPress;
          let subLabel;
          let trailing;
          ({ label, subLabel, IconComponent, icon, trailing, onPress, disabled } = item);
          const obj = { label, subLabel, onPress, trailing, disabled, icon: stateFromStores1(channelId(warningType[46]).TableRowIcon, { source: icon, IconComponent }) };
          const TableRow = channelId(warningType[45]).TableRow;
          return stateFromStores1(TableRow, obj, index);
        })
      });
      buttons = buttons.buttons;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      return <View key={arg0.sectionKey} style={actionRowGroup.actionRowGroup}>{null}</View>;
    })
  };
  return stateFromStores1(tmp9, obj7);
};
