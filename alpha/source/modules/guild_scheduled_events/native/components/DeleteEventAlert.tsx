// Module ID: 9262
// Function ID: 9263
// Name: DeleteEventAlert
// Dependencies: [5, 19, 6941, 21, 4829, 504, 8970, 4796, 5202, 1115, 4825, 2]
// Exports: default

// Module 9262 (DeleteEventAlert)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6941 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_6 = createStyles.createStyles({ contentText: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx");

export default function DeleteEventAlert(eventException) {
  ({ eventId: require, guildId: importDefault, recurrenceId } = eventException);
  eventException = eventException.eventException;
  closure_4 = undefined;
  closure_5 = async function _handleConfirmClick(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp4;
            const obj8 = v1(8970);
            if (GuildScheduledEventStore) {
              v1 = 2;
              dependencyMap = 1;
              const obj5 = { value: obj8.deleteRecurrence(importDefault, require, recurrenceId, eventException), done: false };
              return obj5;
            } else {
              v1 = 1;
              dependencyMap = 1;
              const obj6 = { value: obj8.deleteGuildEvent(require, importDefault), done: false };
              return obj6;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          }
          v1(4796).hideActionSheet();
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  };
  const tmp = closure_6();
  const items = [closure_4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(require));
  let recurrence_rule;
  if (stateFromStores != null) {
    recurrence_rule = stateFromStores.recurrence_rule;
  }
  closure_4 = tmp7;
  const intl = tmp2(tmp3[9]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[9]).t;
  if (null != recurrenceId) {
    let stringResult = string(t.tqClly);
  } else if (tmp6) {
    stringResult = string(t.wr33rW);
  } else {
    stringResult = string(t.B9sJLX);
  }
  const obj2 = { title: stringResult, content: null, extraContent: null, actions: null };
  const intl2 = tmp2(tmp3[9]).intl;
  obj2.content = intl2.string(require("util").t.v2GWNQ);
  let tmp8Result = null;
  if (null != recurrence_rule) {
    tmp8Result = null;
    if (!tmp7) {
      let obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.contentText, children: null };
      const intl3 = tmp2(tmp3[9]).intl;
      obj3.children = intl3.format(tmp2(tmp3[9]).t.ZcpcyO, {});
      tmp8Result = tmp8(tmp2(tmp3[10]).Text, obj3);
    }
  }
  obj2.extraContent = tmp8Result;
  let obj4 = {
    variant: "destructive",
    onPress: function handleConfirmClick() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    text: null
  };
  if (null != recurrence_rule) {
    if (!tmp7) {
      const intl4 = tmp2(tmp3[9]).intl;
      let stringResult1 = intl4.string(tmp2(tmp3[9]).t["8ZsNv5"]);
    }
    obj4.text = stringResult1;
    const items1 = [tmp8(tmp11, obj4, "delete"), ];
    let obj5 = { variant: "secondary", text: null };
    const intl6 = tmp2(tmp3[9]).intl;
    obj5.text = intl6.string(tmp2(tmp3[9]).t.oEAioF);
    items1[1] = tmp8(tmp2(tmp3[8]).AlertActionButton, obj5, "cancel");
    obj2.actions = items1;
    return tmp8(tmp2(tmp3[8]).AlertModal, obj2);
  }
  const intl5 = tmp2(tmp3[9]).intl;
  stringResult1 = intl5.string(tmp2(tmp3[9]).t.B9sJLX);
};
