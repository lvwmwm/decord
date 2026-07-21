// Module ID: 8471
// Function ID: 67571
// Name: DeleteEventAlert
// Dependencies: []
// Exports: default

// Module 8471 (DeleteEventAlert)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles({ contentText: { textAlign: "center" } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx");

export default function DeleteEventAlert(eventException) {
  let recurrenceId;
  ({ eventId: closure_0, guildId: closure_1, recurrenceId } = eventException);
  const dependencyMap = recurrenceId;
  eventException = eventException.eventException;
  let closure_4;
  function _handleConfirmClick(AlertActionButton, arg1, cancel) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = eventException(tmp);
    const _handleConfirmClick = obj;
    return obj(...arguments);
  }
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => tmp5.getGuildScheduledEvent(closure_0));
  let recurrence_rule;
  if (null != stateFromStores) {
    recurrence_rule = stateFromStores.recurrence_rule;
  }
  closure_4 = tmp5;
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[9]).t;
  if (null != recurrenceId) {
    let stringResult = string(t.tqClly);
  } else if (tmp4) {
    stringResult = string(t.wr33rW);
  } else {
    stringResult = string(t.B9sJLX);
  }
  obj.title = stringResult;
  const intl2 = tmp7(tmp8[9]).intl;
  obj.content = intl2.string(arg1(dependencyMap[9]).t.v2GWNQ);
  let tmp10 = null;
  if (null != recurrence_rule) {
    tmp10 = null;
    if (!tmp5) {
      obj = { style: tmp.contentText };
      const intl3 = arg1(dependencyMap[9]).intl;
      obj.children = intl3.format(arg1(dependencyMap[9]).t.ZcpcyO, {});
      tmp10 = _handleConfirmClick(arg1(dependencyMap[10]).Text, obj);
    }
  }
  obj.extraContent = tmp10;
  const obj1 = {
    variant: "destructive",
    onPress: function handleConfirmClick() {
      return _handleConfirmClick(...arguments);
    }
  };
  if (null != recurrence_rule) {
    if (!tmp5) {
      const intl4 = arg1(dependencyMap[9]).intl;
      let stringResult1 = intl4.string(arg1(dependencyMap[9]).t.8ZsNv5);
    }
    obj1.text = stringResult1;
    const items1 = [_handleConfirmClick(tmp15, obj1, "delete"), ];
    const obj2 = { variant: "secondary" };
    const intl6 = arg1(dependencyMap[9]).intl;
    obj2.text = intl6.string(arg1(dependencyMap[9]).t.oEAioF);
    items1[1] = _handleConfirmClick(arg1(dependencyMap[8]).AlertActionButton, obj2, "cancel");
    obj.actions = items1;
    return _handleConfirmClick(arg1(dependencyMap[8]).AlertModal, obj);
  }
  const intl5 = arg1(dependencyMap[9]).intl;
  stringResult1 = intl5.string(arg1(dependencyMap[9]).t.B9sJLX);
};
