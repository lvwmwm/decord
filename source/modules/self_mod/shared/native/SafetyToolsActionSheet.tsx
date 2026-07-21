// Module ID: 10126
// Function ID: 78377
// Name: SafetyToolsActionSheet
// Dependencies: []
// Exports: default

// Module 10126 (SafetyToolsActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ ACTION_SHEET_CONTEXT_MOBILE: closure_6, getSafetyToolsActionSheetKey: closure_7, THROUGHLINE_URL: closure_8, NOFILTR_URL: closure_9, VIBING_WUMPUS_MODAL_KEY: closure_10 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = { container: { flex: 1 } };
obj = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_24 };
obj.actionRowGroup = obj;
let closure_12 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[47]).fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheet.tsx");

export default function SafetyToolsActionSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const warningId = channelId.warningId;
  const importDefault = warningId;
  const warningType = channelId.warningType;
  const dependencyMap = warningType;
  const recipientId = channelId.recipientId;
  const React = recipientId;
  const onClose = channelId.onClose;
  const View = onClose;
  const tmp = callback();
  let closure_5 = tmp;
  let obj = arg1(dependencyMap[7]);
  const lastChannelMessage = obj.useLastChannelMessage(channelId);
  const shouldShowHelplineLink = arg1(dependencyMap[8]).useShouldShowHelplineLink();
  const obj2 = arg1(dependencyMap[8]);
  const shouldShowThroughlineLink = arg1(dependencyMap[8]).useShouldShowThroughlineLink();
  const obj3 = arg1(dependencyMap[8]);
  const tmp5 = null != arg1(dependencyMap[9]).useSafetyToolsButtonTooltipForChannel(channelId);
  const obj4 = arg1(dependencyMap[9]);
  const items = [closure_5];
  const items1 = [recipientId];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => tmp.isBlocked(recipientId), items1);
  const obj5 = arg1(dependencyMap[10]);
  const items2 = [closure_5];
  const items3 = [recipientId];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items2, () => tmp.isIgnored(recipientId), items3);
  const jsx = stateFromStores1;
  const items4 = [channelId, warningId, warningType, recipientId, tmp5];
  const callback = React.useCallback((cta) => {
    let obj = channelId(warningType[11]);
    obj = { channelId, warningId, senderId: recipientId, warningType, cta, isNudgeWarning: tmp5 };
    obj.trackCtaEvent(obj);
  }, items4);
  const items5 = [stateFromStores, stateFromStores1, shouldShowHelplineLink, shouldShowThroughlineLink, callback, recipientId, channelId, warningId, warningType, onClose, lastChannelMessage];
  const memo = React.useMemo(() => {
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
      const callback = callback4(callback);
      let obj = callback2(closure_2[16]);
      obj = {
        recipientId: closure_3,
        channelId: callback,
        warningId: callback2,
        warningType: closure_2,
        onClose() {
          callback(closure_2[16]).hideActionSheet(closure_0);
        },
        trackAnalyticsEvent: callback5
      };
      obj.openLazy(callback(closure_2[18])(closure_2[17], closure_2.paths), callback4(callback), obj);
      callback5(callback(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL);
    };
    obj = {};
    const intl3 = channelId(warningType[13]).intl;
    obj.label = intl3.string(channelId(warningType[13]).t.ZSbbMJ);
    const intl4 = channelId(warningType[13]).intl;
    obj.subLabel = intl4.string(channelId(warningType[13]).t.S9O1ZZ);
    obj.icon = warningId(warningType[14]);
    obj.IconComponent = channelId(warningType[15]).HeartIcon;
    obj.onPress = function onPress() {
      callback2(closure_2[19]).openURL(closure_8);
      callback5(callback(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_THROUGHLINE);
    };
    let obj1 = {};
    const intl5 = channelId(warningType[13]).intl;
    obj1.label = intl5.string(channelId(warningType[13]).t.ZSbbMJ);
    const intl6 = channelId(warningType[13]).intl;
    obj1.subLabel = intl6.string(channelId(warningType[13]).t.g5uwC5);
    obj1.icon = warningId(warningType[14]);
    obj1.IconComponent = channelId(warningType[15]).HeartIcon;
    obj1.onPress = function onPress() {
      callback2(closure_2[19]).openURL(closure_9);
      callback5(callback(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_NO_FILTR);
    };
    const obj2 = { sectionKey: "action" };
    const obj3 = {};
    const intl7 = channelId(warningType[13]).intl;
    const string = intl7.string;
    const t = channelId(warningType[13]).t;
    if (stateFromStores1) {
      let stringResult = string(t.9e0wLn);
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
      const obj = callback2(closure_2[24]);
      if (closure_11) {
        obj.unignoreUser(closure_3, closure_6, callback);
        callback5(callback(tmp[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNIGNORE);
      } else {
        obj.ignoreUser(closure_3, closure_6, callback);
        callback5(callback(tmp[11]).CtaEventTypes.USER_SAFETY_TOOLS_IGNORE);
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
      if (closure_10) {
        let tmpResult = tmp(tmp2[24]);
        let obj = { location: closure_6 };
        tmpResult.unblockUser(closure_3, obj);
        tmpResult = tmp(tmp2[27]);
        const result = tmpResult.showUnblockSuccessToast(closure_3, callback);
        callback5(callback(tmp2[11]).CtaEventTypes.USER_SAFETY_TOOLS_UNBLOCK);
      } else {
        obj = {
          importer() {
              return callback(paths[18])(paths[29], paths.paths).then((arg0) => {
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
    obj5.subLabel = intl12.string(channelId(warningType[13]).t.0tydOa);
    obj5.icon = warningId(warningType[30]);
    obj5.IconComponent = channelId(warningType[31]).FlagIcon;
    obj5.onPress = function onPress() {
      callback3();
      const result = callback(closure_2[32]).showReportModalForInappropriateConversationSafetyAlert(closure_6);
      callback5(callback(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_REPORT);
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
      let obj = callback2(closure_2[16]);
      obj.hideActionSheet();
      obj = {
        onClose() {

        }
      };
      callback2(closure_2[35]).pushLazy(callback(closure_2[18])(closure_2[36], closure_2.paths), obj, closure_10);
      callback5(callback(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_VIBING_WUMPUS);
    };
    const items2 = [obj7, , ];
    const obj8 = {};
    const intl15 = channelId(warningType[13]).intl;
    obj8.label = intl15.string(channelId(warningType[13]).t.7LgVmt);
    const intl16 = channelId(warningType[13]).intl;
    obj8.subLabel = intl16.string(channelId(warningType[13]).t.pwoRjc);
    obj8.icon = warningId(warningType[37]);
    obj8.IconComponent = channelId(warningType[38]).EducationIcon;
    obj8.trailing = tmp;
    obj8.onPress = function onPress() {
      const callback = callback4(callback);
      let obj = callback2(closure_2[16]);
      obj = {
        recipientId: closure_3,
        channelId: callback,
        warningId: callback2,
        warningType: closure_2,
        onClose() {
          callback(closure_2[16]).hideActionSheet(closure_0);
        }
      };
      obj.openLazy(callback(closure_2[18])(closure_2[39], closure_2.paths), callback4(callback), obj);
      callback5(callback(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_SAFETY_TIPS);
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
      const callback = callback4(callback);
      let obj = callback2(closure_2[16]);
      obj = {
        recipientId: closure_3,
        channelId: callback,
        warningId: callback2,
        warningType: closure_2,
        onClose() {
          callback(closure_2[16]).hideActionSheet(closure_0);
        }
      };
      obj.openLazy(callback(closure_2[18])(closure_2[42], closure_2.paths), callback4(callback), obj);
      callback5(callback(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
    };
    const items3 = [obj10];
    obj9.buttons = items3;
    items1[2] = obj9;
    return items1;
  }, items5);
  obj = {};
  const obj6 = arg1(dependencyMap[10]);
  const intl = arg1(dependencyMap[13]).intl;
  obj.headerTitle = intl.string(arg1(dependencyMap[13]).t.MAhAp6);
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
        const obj = { label, subLabel, onPress, trailing, disabled, icon: callback2(callback(closure_2[46]).TableRowIcon, { source: icon, IconComponent }) };
        return callback2(callback(closure_2[45]).TableRow, obj, arg1);
      });
      obj.children = stateFromStores1(channelId(warningType[44]).TableRowGroup, obj);
      return stateFromStores1(onClose, obj, buttons.sectionKey);
    })
  };
  obj.children = <View {...obj} />;
  return jsx(importDefault(dependencyMap[43]), obj);
};
