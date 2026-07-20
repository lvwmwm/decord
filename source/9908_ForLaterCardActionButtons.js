// Module ID: 9908
// Function ID: 76665
// Name: ForLaterCardActionButtons
// Dependencies: []
// Exports: default

// Module 9908 (ForLaterCardActionButtons)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ actionGroup: { 0: null, 9223372036854775807: null } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/saved_messages/native/ForLaterCardActionButtons.tsx");

export default function ForLaterCardActionButtons(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  const arg1 = savedMessage;
  const importDefault = savedMessage.jumpToMessage;
  const items = [savedMessage];
  let closure_2 = React.useCallback((arg0) => {
    let obj = jumpToMessage(lib[4]);
    obj = {
      createReminder(arg0) {
        let obj = lib(closure_2[7]);
        obj = {};
        const merged = Object.assign(lib.saveData);
        obj["dueAt"] = arg0;
        return obj.addOrUpdateSavedMessage(obj);
      }
    };
    let fn;
    if (arg0) {
      fn = () => {
        let obj = lib(closure_2[7]);
        obj = {};
        const merged = Object.assign(lib.saveData);
        obj["dueAt"] = undefined;
        return obj.addOrUpdateSavedMessage(obj);
      };
    }
    obj.removeReminder = fn;
    obj.channelId = savedMessage.saveData.channelId;
    obj.messageId = savedMessage.saveData.messageId;
    obj.onBack = jumpToMessage(lib[4]).hideActionSheet;
    return obj.openLazy(savedMessage(lib[6])(lib[5], lib.paths), "MessageReminderDurationActionSheet", obj);
  }, items);
  if (null != savedMessage.saveData.dueAt) {
    let obj = {};
    const intl = arg1(closure_2[8]).intl;
    obj.label = intl.string(arg1(closure_2[8]).t.vrbqs1);
    obj.IconComponent = arg1(closure_2[9]).PencilIcon;
    obj.action = function action() {
      return lib(true);
    };
    const items1 = [obj, , ];
    obj = {};
    const intl2 = arg1(closure_2[8]).intl;
    obj.label = intl2.string(arg1(closure_2[8]).t.+TSRGD);
    obj.IconComponent = arg1(closure_2[10]).ChatArrowRightIcon;
    obj.action = function action() {
      return jumpToMessage();
    };
    items1[1] = obj;
    obj = {};
    const intl3 = arg1(closure_2[8]).intl;
    obj.label = intl3.string(arg1(closure_2[8]).t.SvXS1Z);
    obj.IconComponent = arg1(closure_2[11]).BookmarkIcon;
    obj.action = function action() {
      return savedMessage(closure_2[7]).removeSavedMessage(savedMessage.saveData);
    };
    obj.variant = "destructive";
    items1[2] = obj;
    let items2 = items1;
  } else {
    const obj1 = {};
    const intl5 = arg1(closure_2[8]).intl;
    obj1.label = intl5.string(arg1(closure_2[8]).t.mJ3P0N);
    obj1.IconComponent = arg1(closure_2[12]).ClockIcon;
    obj1.action = function action() {
      return lib(false);
    };
    items2 = [obj1, , ];
    const obj2 = {};
    const intl6 = arg1(closure_2[8]).intl;
    obj2.label = intl6.string(arg1(closure_2[8]).t.+TSRGD);
    obj2.IconComponent = arg1(closure_2[10]).ChatArrowRightIcon;
    obj2.action = function action() {
      return jumpToMessage();
    };
    items2[1] = obj2;
    const obj3 = {};
    const intl7 = arg1(closure_2[8]).intl;
    obj3.label = intl7.string(arg1(closure_2[8]).t.SvXS1Z);
    obj3.IconComponent = arg1(closure_2[11]).BookmarkIcon;
    obj3.action = function action() {
      return savedMessage(closure_2[7]).removeSavedMessage(savedMessage.saveData);
    };
    obj3.variant = "destructive";
    items2[2] = obj3;
  }
  const obj4 = { style: callback2().actionGroup };
  const obj5 = {
    0: 40,
    9223372036854775807: true,
    0: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==",
    items: items2,
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      const merged = Object.assign(ref, obj);
      obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj["variant"] = "secondary";
      const intl = savedMessage(closure_2[8]).intl;
      obj["accessibilityLabel"] = intl.string(savedMessage(closure_2[8]).t.e1heBD);
      obj["size"] = "sm";
      obj["icon"] = jumpToMessage(closure_2[15]);
      return callback(savedMessage(closure_2[14]).IconButton, obj);
    }
  };
  const items3 = [callback(arg1(closure_2[13]).ContextMenu, obj5), ];
  let tmp6 = null;
  if (null != savedMessage.saveData.dueAt) {
    const obj6 = {};
    const intl4 = arg1(closure_2[8]).intl;
    obj6.accessibilityLabel = intl4.string(arg1(closure_2[8]).t.yjGtdJ);
    obj6.icon = importDefault(closure_2[16]);
    obj6.onPress = function onPress() {
      let obj = savedMessage(closure_2[7]);
      obj = {};
      const merged = Object.assign(savedMessage.saveData);
      obj["dueAt"] = undefined;
      return obj.addOrUpdateSavedMessage(obj);
    };
    tmp6 = callback(arg1(closure_2[14]).IconButton, obj6);
  }
  items3[1] = tmp6;
  obj4.children = items3;
  return closure_6(View, obj4);
};
