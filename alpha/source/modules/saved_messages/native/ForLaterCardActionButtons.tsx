// Module ID: 11165
// Function ID: 11166
// Name: ForLaterCardActionButtons
// Dependencies: [19, 17, 21, 5014, 5258, 11166, 1994, 11159, 11169, 1113, 11170, 7054, 11172, 10232, 9874, 8028, 9207, 2]
// Exports: default, useForLaterCardMenuItems

// Module 11165 (ForLaterCardActionButtons)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import IconButton2 from "IconButton" /* 8028 */;
import AssetRegistryDefault from "AssetRegistry" /* 9207 */;
import ContextMenu from "ContextMenu" /* 9874 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11159 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(menuItems) {
  menuItems = menuItems.menuItems;
  let merged = Object.assign(menuItems, Object.assign({ menuItems: 0 }));
  let merged1 = Object.assign(merged);
  return <View style={closure_6().actionGroup}>{jsx(ContextMenu.ContextMenu, {
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
};
export function useForLaterCardMenuItems(savedMessage) {
  let PencilIcon;
  let SvXS1Z;
  let intl;
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  const throttledNow = savedMessage.throttledNow;
  let obj = {
    label: intl.string(savedMessage(1113).t["+TSRGD"]),
    IconComponent: savedMessage(11170).ChatArrowRightIcon,
    action() {
      return jumpToMessage();
    }
  };
  const callback = react.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    let obj2 = {
      createReminder(dueAt) {
        const obj = { dueAt, source: savedMessage(dependencyMap[8]).SavedMessageSources.FOR_LATER_LIST };
        const addOrUpdateSavedMessage = savedMessage(dependencyMap[7]).addOrUpdateSavedMessage;
        savedMessage(dependencyMap[7]);
        const merged = Object.assign(closure_1_0.saveData);
        return addOrUpdateSavedMessage(obj);
      },
      removeReminder() {
        const obj = savedMessage(dependencyMap[7]);
        const obj2 = { channelId: closure_1_0.saveData.channelId, messageId: closure_1_0.saveData.messageId, displayToast: true, isReminder: true };
        return obj.removeSavedMessage(obj2);
      },
      channelId: savedMessage.saveData.channelId,
      messageId: savedMessage.saveData.messageId
    };
    return obj.openLazy(asyncRequire(11166, dependencyMap.paths), "MessageReminderDurationActionSheet", obj2);
  }, items);
  intl = savedMessage(1113).intl;
  const items1 = [obj, ];
  const intl2 = savedMessage(1113).intl;
  const string = intl2.string;
  if (null != savedMessage.saveData.dueAt) {
    SvXS1Z = tmp2(1113).t["a6gcZ/"];
  } else {
    SvXS1Z = tmp2(1113).t.SvXS1Z;
  }
  let obj2 = {
    label: string(SvXS1Z),
    IconComponent: tmp2(7054).XSmallIcon,
    action() {
      const obj = SavedMessageHelpers;
      return obj.removeSavedMessage(savedMessage.saveData);
    },
    variant: "destructive"
  };
  items1[1] = obj2;
  if (null != savedMessage.saveData.dueAt) {
    const unshift = items1.unshift;
    const intl3 = tmp2(1113).intl;
    const string2 = intl3.string;
    const t = tmp2(1113).t;
    const obj3 = { label: string2(throttledNow > savedMessage.saveData.dueAt ? t.GtBCnz : t.vrbqs1), IconComponent: PencilIcon, action: callback };
    if (throttledNow > savedMessage.saveData.dueAt) {
      PencilIcon = tmp2(11172).BellZIcon;
    } else {
      PencilIcon = tmp2(10232).PencilIcon;
    }
    unshift(obj3);
  }
  return items1;
}
