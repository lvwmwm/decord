// Module ID: 9922
// Function ID: 76750
// Name: ForLaterCardActionButtons
// Dependencies: [31, 27, 33, 4130, 4098, 9923, 1934, 9911, 1212, 9926, 5119, 9106, 9302, 7771, 8969, 2]
// Exports: default

// Module 9922 (ForLaterCardActionButtons)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ actionGroup: { flexDirection: "row", gap: 8 } });
const result = require("jsxProd").fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const jumpToMessage = savedMessage.jumpToMessage;
  const items = [savedMessage];
  let obj = {};
  const callback = React.useCallback(() => {
    let obj = jumpToMessage(outer1_2[4]);
    obj = {
      createReminder(arg0) {
        let obj = savedMessage(outer2_2[7]);
        obj = {};
        const merged = Object.assign(outer1_0.saveData);
        obj["dueAt"] = arg0;
        return obj.addOrUpdateSavedMessage(obj);
      },
      removeReminder() {
        let obj = savedMessage(outer2_2[7]);
        obj = { channelId: outer1_0.saveData.channelId, messageId: outer1_0.saveData.messageId, displayToast: true, isReminder: true };
        return obj.removeSavedMessage(obj);
      },
      channelId: savedMessage.saveData.channelId,
      messageId: savedMessage.saveData.messageId
    };
    return obj.openLazy(savedMessage(outer1_2[6])(outer1_2[5], outer1_2.paths), "MessageReminderDurationActionSheet", obj);
  }, items);
  let intl = savedMessage(1212).intl;
  obj.label = intl.string(savedMessage(1212).t["+TSRGD"]);
  obj.IconComponent = savedMessage(9926).ChatArrowRightIcon;
  obj.action = function action() {
    return jumpToMessage();
  };
  const items1 = [obj, ];
  obj = {};
  const intl2 = savedMessage(1212).intl;
  if (null != savedMessage.saveData.dueAt) {
    let SvXS1Z = savedMessage(1212).t["a6gcZ/"];
  } else {
    SvXS1Z = savedMessage(1212).t.SvXS1Z;
  }
  obj.label = intl2.string(SvXS1Z);
  obj.IconComponent = savedMessage(5119).XSmallIcon;
  obj.action = function action() {
    return savedMessage(outer1_2[7]).removeSavedMessage(savedMessage.saveData);
  };
  obj.variant = "destructive";
  items1[1] = obj;
  if (null != savedMessage.saveData.dueAt) {
    obj = {};
    const intl3 = savedMessage(1212).intl;
    obj.label = intl3.string(savedMessage(1212).t.vrbqs1);
    obj.IconComponent = savedMessage(9106).PencilIcon;
    obj.action = callback;
    items1.unshift(obj);
  }
  const tmp = callback();
  const obj2 = {
    items: items1,
    keyboardShouldPersistTaps: "handled",
    triggerOnTap: true,
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      const merged = Object.assign(ref, obj);
      obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj["variant"] = "secondary";
      const intl = savedMessage(outer1_2[8]).intl;
      obj["accessibilityLabel"] = intl.string(savedMessage(outer1_2[8]).t.e1heBD);
      obj["size"] = "sm";
      obj["icon"] = jumpToMessage(outer1_2[14]);
      return outer1_5(savedMessage(outer1_2[13]).IconButton, obj);
    }
  };
  return <View style={callback().actionGroup}>{jsx(savedMessage(9302).ContextMenu, {
    items: items1,
    keyboardShouldPersistTaps: "handled",
    triggerOnTap: true,
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      const merged = Object.assign(ref, obj);
      obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj["variant"] = "secondary";
      const intl = savedMessage(outer1_2[8]).intl;
      obj["accessibilityLabel"] = intl.string(savedMessage(outer1_2[8]).t.e1heBD);
      obj["size"] = "sm";
      obj["icon"] = jumpToMessage(outer1_2[14]);
      return outer1_5(savedMessage(outer1_2[13]).IconButton, obj);
    }
  })}</View>;
};
