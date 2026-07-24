// Module ID: 10167
// Function ID: 78624
// Name: SafetyToolsActionSheet
// Dependencies: [31, 27, 3767, 10166, 33, 4130, 689, 10168, 10169, 10160, 566, 10163, 5512, 1212, 8716, 8715, 4098, 10172, 1934, 3827, 8778, 8542, 8777, 9254, 8962, 10175, 5776, 7568, 4471, 10176, 9454, 9453, 7689, 9115, 9114, 4337, 10178, 10183, 10184, 10185, 8216, 8217, 10187, 10173, 5501, 5165, 5170, 2]
// Exports: default

// Module 10167 (SafetyToolsActionSheet)
import FlagIcon from "FlagIcon";
import { View } from "module_7568";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import { jsx } from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ ACTION_SHEET_CONTEXT_MOBILE: closure_6, getSafetyToolsActionSheetKey: closure_7, THROUGHLINE_URL: closure_8, NOFILTR_URL: closure_9, VIBING_WUMPUS_MODAL_KEY: closure_10 } = LOCATION_CONTEXT_MOBILE);
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.actionRowGroup = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheet.tsx");

export default function SafetyToolsActionSheet(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const recipientId = channelId.recipientId;
  const onClose = channelId.onClose;
  let tmp = callback();
  let _isNativeReflectConstruct = tmp;
  let obj = channelId(warningType[7]);
  const lastChannelMessage = obj.useLastChannelMessage(channelId);
  const shouldShowHelplineLink = channelId(warningType[8]).useShouldShowHelplineLink();
  let obj2 = channelId(warningType[8]);
  const shouldShowThroughlineLink = channelId(warningType[8]).useShouldShowThroughlineLink();
  let obj3 = channelId(warningType[8]);
  const tmp5 = null != channelId(warningType[9]).useSafetyToolsButtonTooltipForChannel(channelId);
  let closure_9 = tmp5;
  let obj4 = channelId(warningType[9]);
  let items = [_isNativeReflectConstruct];
  let items1 = [recipientId];
  const stateFromStores = channelId(warningType[10]).useStateFromStores(items, () => tmp.isBlocked(recipientId), items1);
  let obj5 = channelId(warningType[10]);
  let items2 = [_isNativeReflectConstruct];
  let items3 = [recipientId];
  const stateFromStores1 = channelId(warningType[10]).useStateFromStores(items2, () => tmp.isIgnored(recipientId), items3);
  const items4 = [channelId, warningId, warningType, recipientId, tmp5];
  callback = recipientId.useCallback((cta) => {
    let obj = channelId(warningType[11]);
    obj = { channelId, warningId, senderId: recipientId, warningType, cta, isNudgeWarning: closure_9 };
    obj.trackCtaEvent(obj);
  }, items4);
  const items5 = [stateFromStores, stateFromStores1, shouldShowHelplineLink, shouldShowThroughlineLink, callback, recipientId, channelId, warningId, warningType, onClose, lastChannelMessage];
  const memo = recipientId.useMemo(() => {
    let obj = { size: "md", color: warningId(warningType[6]).colors.INTERACTIVE_TEXT_DEFAULT };
    const tmp = stateFromStores1(channelId(warningType[12]).ChevronSmallRightIcon, obj);
    obj = {};
    const intl = channelId(warningType[13]).intl;
    obj.label = intl.string(channelId(warningType[13]).t.ZSbbMJ);
    const intl2 = channelId(warningType[13]).intl;
    obj.subLabel = intl2.string(channelId(warningType[13]).t.iNcsrW);
    obj.icon = warningId(warningType[14]);
    obj.IconComponent = channelId(warningType[15]).HeartIcon;
    obj.trailing = tmp;
    obj.onPress = function onPress() {
      let closure_0 = shouldShowHelplineLink(outer1_0);
      let obj = warningId(warningType[16]);
      obj = {
        recipientId: outer1_3,
        channelId: outer1_0,
        warningId: outer1_1,
        warningType: outer1_2,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        },
        trackAnalyticsEvent: outer1_12
      };
      obj.openLazy(channelId(warningType[18])(warningType[17], warningType.paths), shouldShowHelplineLink(outer1_0), obj);
      outer1_12(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL);
    };
    obj = {};
    const intl3 = channelId(warningType[13]).intl;
    obj.label = intl3.string(channelId(warningType[13]).t.ZSbbMJ);
    const intl4 = channelId(warningType[13]).intl;
    obj.subLabel = intl4.string(channelId(warningType[13]).t.S9O1ZZ);
    obj.icon = warningId(warningType[14]);
    obj.IconComponent = channelId(warningType[15]).HeartIcon;
    obj.onPress = function onPress() {
      warningId(warningType[19]).openURL(shouldShowThroughlineLink);
      outer1_12(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_THROUGHLINE);
    };
    let obj1 = {};
    const intl5 = channelId(warningType[13]).intl;
    obj1.label = intl5.string(channelId(warningType[13]).t.ZSbbMJ);
    const intl6 = channelId(warningType[13]).intl;
    obj1.subLabel = intl6.string(channelId(warningType[13]).t.g5uwC5);
    obj1.icon = warningId(warningType[14]);
    obj1.IconComponent = channelId(warningType[15]).HeartIcon;
    obj1.onPress = function onPress() {
      warningId(warningType[19]).openURL(closure_9);
      outer1_12(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR);
    };
    const obj2 = { sectionKey: "action" };
    const obj3 = {};
    const intl7 = channelId(warningType[13]).intl;
    const string = intl7.string;
    const t = channelId(warningType[13]).t;
    if (stateFromStores1) {
      let stringResult = string(t["9e0wLn"]);
    } else {
      stringResult = string(t.B7ZT06);
    }
    obj3.label = stringResult;
    let stringResult1;
    if (!stateFromStores1) {
      const intl8 = channelId(warningType[13]).intl;
      stringResult1 = intl8.string(channelId(warningType[13]).t.fCfp49);
    }
    obj3.subLabel = stringResult1;
    if (stateFromStores1) {
      let tmp8 = tmp7[20];
    } else {
      tmp8 = tmp7[21];
    }
    obj3.icon = warningId(tmp8);
    if (stateFromStores1) {
      let EyeSlashIcon = tmp9(tmp10[22]).EyeIcon;
    } else {
      EyeSlashIcon = tmp9(tmp10[23]).EyeSlashIcon;
    }
    obj3.IconComponent = EyeSlashIcon;
    obj3.disabled = stateFromStores;
    obj3.onPress = function onPress() {
      const obj = warningId(warningType[24]);
      if (outer1_11) {
        obj.unignoreUser(outer1_3, lastChannelMessage, outer1_0);
        outer1_12(channelId(tmp[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNIGNORE);
      } else {
        obj.ignoreUser(outer1_3, lastChannelMessage, outer1_0);
        outer1_12(channelId(tmp[11]).CtaEventTypes.USER_SAFETY_TOOLS_IGNORE);
      }
    };
    const items = [obj3, , ];
    const obj4 = {};
    const intl9 = channelId(warningType[13]).intl;
    const string2 = intl9.string;
    const t2 = channelId(warningType[13]).t;
    if (stateFromStores) {
      let string2Result = string2(t2.Hro40y);
    } else {
      string2Result = string2(t2.oDxaKy);
    }
    obj4.label = string2Result;
    const intl10 = channelId(warningType[13]).intl;
    obj4.subLabel = intl10.string(channelId(warningType[13]).t.Lj37az);
    obj4.icon = warningId(warningType[25]);
    obj4.IconComponent = channelId(warningType[26]).CircleXIcon;
    obj4.onPress = function onPress() {
      if (outer1_10) {
        let tmpResult = tmp(tmp2[24]);
        let obj = { location: lastChannelMessage };
        tmpResult.unblockUser(outer1_3, obj);
        tmpResult = tmp(tmp2[27]);
        const result = tmpResult.showUnblockSuccessToast(outer1_3, outer1_0);
        outer1_12(channelId(tmp2[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK);
      } else {
        obj = {
          importer() {
              return channelId(warningType[18])(warningType[29], warningType.paths).then((arg0) => {
                let closure_0 = arg0.default;
                return () => { ... };
              });
            }
        };
        tmp(tmp2[28]).openLazy(obj);
        const tmpResult1 = tmp(tmp2[28]);
      }
    };
    items[1] = obj4;
    const obj5 = {};
    const intl11 = channelId(warningType[13]).intl;
    obj5.label = intl11.string(channelId(warningType[13]).t.X27yhD);
    const intl12 = channelId(warningType[13]).intl;
    obj5.subLabel = intl12.string(channelId(warningType[13]).t["0tydOa"]);
    obj5.icon = warningId(warningType[30]);
    obj5.IconComponent = channelId(warningType[31]).FlagIcon;
    obj5.onPress = function onPress() {
      outer1_4();
      const result = channelId(warningType[32]).showReportModalForInappropriateConversationSafetyAlert(outer1_6);
      outer1_12(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_REPORT);
    };
    items[2] = obj5;
    obj2.buttons = items;
    const items1 = [obj2, , ];
    const obj6 = { sectionKey: "support" };
    const obj7 = {};
    const intl13 = channelId(warningType[13]).intl;
    obj7.label = intl13.string(channelId(warningType[13]).t.syuaPI);
    const intl14 = channelId(warningType[13]).intl;
    obj7.subLabel = intl14.string(channelId(warningType[13]).t.LLBnNk);
    obj7.icon = warningId(warningType[33]);
    obj7.IconComponent = channelId(warningType[34]).MusicIcon;
    obj7.trailing = tmp;
    obj7.onPress = function onPress() {
      let obj = warningId(warningType[16]);
      obj.hideActionSheet();
      obj = {
        onClose() {

        }
      };
      warningId(warningType[35]).pushLazy(channelId(warningType[18])(warningType[36], warningType.paths), obj, stateFromStores);
      outer1_12(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS);
    };
    const items2 = [obj7, , ];
    const obj8 = {};
    const intl15 = channelId(warningType[13]).intl;
    obj8.label = intl15.string(channelId(warningType[13]).t["7LgVmt"]);
    const intl16 = channelId(warningType[13]).intl;
    obj8.subLabel = intl16.string(channelId(warningType[13]).t.pwoRjc);
    obj8.icon = warningId(warningType[37]);
    obj8.IconComponent = channelId(warningType[38]).EducationIcon;
    obj8.trailing = tmp;
    obj8.onPress = function onPress() {
      let closure_0 = shouldShowHelplineLink(outer1_0);
      let obj = warningId(warningType[16]);
      obj = {
        recipientId: outer1_3,
        channelId: outer1_0,
        warningId: outer1_1,
        warningType: outer1_2,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        }
      };
      obj.openLazy(channelId(warningType[18])(warningType[39], warningType.paths), shouldShowHelplineLink(outer1_0), obj);
      outer1_12(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS);
    };
    items2[1] = obj8;
    if (!shouldShowHelplineLink) {
      if (shouldShowThroughlineLink) {
        obj1 = obj;
      }
      obj = obj1;
    }
    items2[2] = obj;
    obj6.buttons = items2;
    items1[1] = obj6;
    const obj9 = { sectionKey: "info" };
    const obj10 = {};
    const intl17 = channelId(warningType[13]).intl;
    obj10.label = intl17.string(channelId(warningType[13]).t.otdt24);
    obj10.icon = warningId(warningType[40]);
    obj10.IconComponent = channelId(warningType[41]).ShieldIcon;
    obj10.trailing = tmp;
    obj10.onPress = function onPress() {
      let closure_0 = shouldShowHelplineLink(outer1_0);
      let obj = warningId(warningType[16]);
      obj = {
        recipientId: outer1_3,
        channelId: outer1_0,
        warningId: outer1_1,
        warningType: outer1_2,
        onClose() {
          warningId(warningType[16]).hideActionSheet(closure_0);
        }
      };
      obj.openLazy(channelId(warningType[18])(warningType[42], warningType.paths), shouldShowHelplineLink(outer1_0), obj);
      outer1_12(channelId(warningType[11]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
    };
    const items3 = [obj10];
    obj9.buttons = items3;
    items1[2] = obj9;
    return items1;
  }, items5);
  obj = {};
  let obj6 = channelId(warningType[10]);
  let intl = channelId(warningType[13]).intl;
  obj.headerTitle = intl.string(channelId(warningType[13]).t.MAhAp6);
  obj.channelId = channelId;
  obj.recipientId = recipientId;
  obj.warningId = warningId;
  obj.warningType = warningType;
  obj.onClose = onClose;
  obj = {
    style: tmp.container,
    children: memo.map((buttons) => {
      let obj = { style: tmp.actionRowGroup };
      obj = { hasIcons: true };
      buttons = buttons.buttons;
      obj.children = buttons.map((arg0, arg1) => {
        let IconComponent;
        let disabled;
        let icon;
        let label;
        let onPress;
        let subLabel;
        let trailing;
        ({ label, subLabel, IconComponent, icon, trailing, onPress, disabled } = arg0);
        const obj = { label, subLabel, onPress, trailing, disabled, icon: stateFromStores1(channelId(warningType[46]).TableRowIcon, { source: icon, IconComponent }) };
        return stateFromStores1(channelId(warningType[45]).TableRow, obj, arg1);
      });
      obj.children = stateFromStores1(channelId(warningType[44]).TableRowGroup, obj);
      return stateFromStores1(onClose, obj, buttons.sectionKey);
    })
  };
  obj.children = stateFromStores1(onClose, obj);
  return stateFromStores1(warningId(warningType[43]), obj);
};
