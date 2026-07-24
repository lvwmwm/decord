// Module ID: 8523
// Function ID: 67861
// Name: DeleteEventAlert
// Dependencies: [5, 31, 6758, 33, 4130, 566, 8388, 4098, 4475, 1212, 4126, 2]
// Exports: default

// Module 8523 (DeleteEventAlert)
import initialize from "initialize";
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ contentText: { textAlign: "center" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx");

export default function DeleteEventAlert(eventException) {
  let importDefault;
  let recurrenceId;
  let require;
  ({ eventId: require, guildId: importDefault, recurrenceId } = eventException);
  eventException = eventException.eventException;
  let c4;
  function _handleConfirmClick(AlertActionButton, arg1, cancel) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = eventException(tmp);
    return obj(...arguments);
  }
  let obj = require(recurrenceId[5]);
  const items = [c4];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.getGuildScheduledEvent(closure_0));
  let recurrence_rule;
  if (null != stateFromStores) {
    recurrence_rule = stateFromStores.recurrence_rule;
  }
  c4 = tmp5;
  obj = {};
  const intl = require(recurrenceId[9]).intl;
  const string = intl.string;
  const t = require(recurrenceId[9]).t;
  if (null != recurrenceId) {
    let stringResult = string(t.tqClly);
  } else if (tmp4) {
    stringResult = string(t.wr33rW);
  } else {
    stringResult = string(t.B9sJLX);
  }
  obj.title = stringResult;
  const intl2 = tmp7(tmp8[9]).intl;
  obj.content = intl2.string(require(recurrenceId[9]).t.v2GWNQ);
  let tmp10 = null;
  if (null != recurrence_rule) {
    tmp10 = null;
    if (!tmp5) {
      obj = { variant: "text-md/medium", color: "text-default", style: tmp.contentText };
      const intl3 = require(recurrenceId[9]).intl;
      obj.children = intl3.format(require(recurrenceId[9]).t.ZcpcyO, {});
      tmp10 = _handleConfirmClick(require(recurrenceId[10]).Text, obj);
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
      const intl4 = require(recurrenceId[9]).intl;
      let stringResult1 = intl4.string(require(recurrenceId[9]).t["8ZsNv5"]);
    }
    obj1.text = stringResult1;
    const items1 = [_handleConfirmClick(tmp15, obj1, "delete"), ];
    const obj2 = { variant: "secondary" };
    const intl6 = require(recurrenceId[9]).intl;
    obj2.text = intl6.string(require(recurrenceId[9]).t.oEAioF);
    items1[1] = _handleConfirmClick(require(recurrenceId[8]).AlertActionButton, obj2, "cancel");
    obj.actions = items1;
    return _handleConfirmClick(require(recurrenceId[8]).AlertModal, obj);
  }
  const intl5 = require(recurrenceId[9]).intl;
  stringResult1 = intl5.string(require(recurrenceId[9]).t.B9sJLX);
};
