// Module ID: 14284
// Function ID: 14285
// Name: ForLaterCardActionButtons
// Dependencies: [109, 19, 17, 21, 5005, 5247, 14285, 2000, 14278, 14288, 1125, 12616, 6991, 14289, 10187, 558, 576, 8014, 9175, 9827, 2]
// Exports: useForLaterCardMenuItems

// Module 14284 (ForLaterCardActionButtons)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1125 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import IconButton2 from "IconButton" /* 8014 */;
import AssetRegistryDefault from "AssetRegistry" /* 9175 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 14278 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ContextMenu = tmp(9827);
let closure_3 = ["menuItems"];
let closure_4 = ["ref"];
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterCardActionButtons(menuItems) {
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== menuItems) {
    menuItems = menuItems.menuItems;
    const tmp8 = _objectWithoutProperties(menuItems, closure_3);
    cResult[0] = menuItems;
    cResult[1] = tmp8;
    cResult[2] = menuItems;
    tmp5 = menuItems;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_9();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(ref) {
      ref = ref.ref;
      const tmp = _objectWithoutProperties(ref, closure_1_4);
      const IconButton = IconButton2.IconButton;
      const merged = Object.assign(tmp);
      const intl = intl4.intl;
      return <IconButton ref={ref} variant="secondary" accessibilityLabel={intl.string(intl4.t.e1heBD)} size="sm" icon={AssetRegistryDefault} />;
    };
    cResult[3] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const tmp13 = jsx(ContextMenu.ContextMenu, { items: tmp5, keyboardShouldPersistTaps: "handled", triggerOnTap: true, children: tmp10 });
    cResult[4] = tmp5;
    cResult[5] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp9.actionGroup) {
      let tmp14;
      if (cResult[8] === tmp11) {
        tmp14 = cResult[9];
      }
      return tmp14;
    }
  }
  let merged = Object.assign(tmp4);
  const tmp16 = <View style={tmp9.actionGroup}>{tmp11}</View>;
  cResult[6] = tmp4;
  cResult[7] = tmp9.actionGroup;
  cResult[8] = tmp11;
  cResult[9] = tmp16;
  tmp14 = tmp16;
}) : (function ForLaterCardActionButtons(menuItems) {
  menuItems = menuItems.menuItems;
  let merged = Object.assign(menuItems, Object.assign({ menuItems: 0 }));
  let merged1 = Object.assign(merged);
  return <View style={closure_9().actionGroup}>{jsx(ContextMenu.ContextMenu, {
    items: menuItems,
    keyboardShouldPersistTaps: "handled",
    triggerOnTap: true,
    children(ref) {
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const IconButton = IconButton2.IconButton;
      const merged1 = Object.assign(merged);
      const intl = intl4.intl;
      return <IconButton ref={ref} variant="secondary" accessibilityLabel={intl.string(intl4.t.e1heBD)} size="sm" icon={AssetRegistryDefault} />;
    }
  })}</View>;
});
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default tmp2;
export function useForLaterCardMenuItems(savedMessage) {
  let PencilIcon;
  let SvXS1Z;
  let intl;
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  const throttledNow = savedMessage.throttledNow;
  let obj = {
    label: intl.string(savedMessage(1125).t["+TSRGD"]),
    IconComponent: savedMessage(12616).ChatArrowRightIcon,
    action() {
      return jumpToMessage();
    }
  };
  const callback = react.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    let obj2 = {
      createReminder(dueAt) {
        const obj = { dueAt, source: savedMessage(dependencyMap[9]).SavedMessageSources.FOR_LATER_LIST };
        const addOrUpdateSavedMessage = savedMessage(dependencyMap[8]).addOrUpdateSavedMessage;
        savedMessage(dependencyMap[8]);
        const merged = Object.assign(closure_1_0.saveData);
        return addOrUpdateSavedMessage(obj);
      },
      removeReminder() {
        const obj = savedMessage(dependencyMap[8]);
        const obj2 = { channelId: closure_1_0.saveData.channelId, messageId: closure_1_0.saveData.messageId, displayToast: true, isReminder: true };
        return obj.removeSavedMessage(obj2);
      },
      channelId: savedMessage.saveData.channelId,
      messageId: savedMessage.saveData.messageId
    };
    return obj.openLazy(asyncRequire(14285, dependencyMap.paths), "MessageReminderDurationActionSheet", obj2);
  }, items);
  intl = savedMessage(1125).intl;
  const items1 = [obj, ];
  const intl2 = savedMessage(1125).intl;
  const string = intl2.string;
  if (null != savedMessage.saveData.dueAt) {
    SvXS1Z = tmp2(1125).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp2(1125).t.SvXS1Z;
  }
  let obj2 = {
    label: string(SvXS1Z),
    IconComponent: tmp2(6991).XSmallIcon,
    action() {
      const obj = SavedMessageHelpers;
      return obj.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive"
  };
  items1[1] = obj2;
  if (null != savedMessage.saveData.dueAt) {
    const unshift = items1.unshift;
    const intl3 = tmp2(1125).intl;
    const string2 = intl3.string;
    const t = tmp2(1125).t;
    const obj3 = { label: string2(throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1), IconComponent: PencilIcon, action: callback };
    if (throttledNow > savedMessage.saveData.dueAt) {
      PencilIcon = tmp2(14289).BellZIcon;
    } else {
      PencilIcon = tmp2(10187).PencilIcon;
    }
    unshift(obj3);
  }
  return items1;
}
