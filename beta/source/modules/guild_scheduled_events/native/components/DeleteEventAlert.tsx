// Module ID: 9273
// Function ID: 9274
// Name: DeleteEventAlert
// Dependencies: [5, 19, 6946, 21, 4836, 504, 8981, 4800, 5209, 1115, 4832, 2]
// Exports: default

// Module 9273 (DeleteEventAlert)
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2;

const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ contentText: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx");

export default function DeleteEventAlert(eventException) {
  let intl2;
  let intl3;
  let intl6;
  let recurrenceId;
  let stringResult;
  let tmp8Result;
  ({ eventId: require, guildId: importDefault, recurrenceId } = eventException);
  eventException = eventException.eventException;
  let closure_4;
  let obj = function _handleConfirmClick() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp3;
              const obj8 = c1(c2[6]);
              if (closure_2_4) {
                c1 = 2;
                c2 = 1;
                const obj5 = { value: obj8.deleteRecurrence(importDefault, require, recurrenceId, eventException), done: false };
                return obj5;
              } else {
                c1 = 1;
                c2 = 1;
                const obj6 = { value: obj8.deleteGuildEvent(require, importDefault), done: false };
                return obj6;
              }
            }
          } else {
            if (1 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj7 = { value, done: true };
                return obj7;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            }
            const obj2 = c1(c2[7]);
            obj2.hideActionSheet();
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c2 = 3;
          throw tmp15;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp2 = require;
  const tmp3 = recurrenceId;
  const tmp = closure_6();
  obj = require("get initialized");
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(require));
  let recurrence_rule;
  if (stateFromStores != null) {
    recurrence_rule = stateFromStores.recurrence_rule;
  }
  closure_4 = tmp7;
  const AlertModal = tmp2(tmp3[8]).AlertModal;
  const intl = tmp2(tmp3[9]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[9]).t;
  if (null != recurrenceId) {
    stringResult = string(t.tqClly);
  } else if (null != recurrence_rule) {
    stringResult = string(t.wr33rW);
  } else {
    stringResult = string(t.B9sJLX);
  }
  let obj2 = { title: stringResult, content: intl2.string(tmp2(tmp3[9]).t.v2GWNQ), extraContent: tmp8Result, actions: null };
  intl2 = tmp2(tmp3[9]).intl;
  tmp8Result = null;
  if (null != recurrence_rule) {
    tmp8Result = null;
    if (null == recurrenceId) {
      let obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.contentText, children: intl3.format(tmp2(tmp3[9]).t.ZcpcyO, {}) };
      const Text = tmp2(tmp3[10]).Text;
      intl3 = tmp2(tmp3[9]).intl;
      tmp8Result = tmp8(Text, obj3);
    }
  }
  let obj4 = {
    variant: "destructive",
    onPress: function handleConfirmClick() {
      return obj(...arguments);
    },
    text: null
  };
  if (null != recurrence_rule) {
    let stringResult1;
    if (null == recurrenceId) {
      const intl4 = tmp2(tmp3[9]).intl;
      stringResult1 = intl4.string(tmp2(tmp3[9]).t["8ZsNv5"]);
    }
    obj4.text = stringResult1;
    const items1 = [tmp8(tmp11, obj4, "delete"), ];
    let obj5 = { variant: "secondary", text: intl6.string(tmp2(tmp3[9]).t.oEAioF) };
    const AlertActionButton = tmp2(tmp3[8]).AlertActionButton;
    intl6 = tmp2(tmp3[9]).intl;
    items1[1] = obj(AlertActionButton, obj5, "cancel");
    obj2.actions = items1;
    return obj(AlertModal, obj2);
  }
  const intl5 = tmp2(tmp3[9]).intl;
  stringResult1 = intl5.string(tmp2(tmp3[9]).t.B9sJLX);
};
