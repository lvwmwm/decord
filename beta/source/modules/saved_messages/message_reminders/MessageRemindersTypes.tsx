// Module ID: 11084
// Function ID: 11085
// Name: MessageRemindersTypes
// Dependencies: [4424, 1127, 2]

// Module 11084 (MessageRemindersTypes)
import intl3 from "intl" /* 1127 */;
import _modDef4424 from "module_4424" /* 4424 */;
import size from "module_2" /* 2 */;

let obj = {
  getDueAt() {
    const obj = _modDef4424();
    const addResult = obj.add(30, "minutes");
    return addResult.toDate();
  },
  getLabel() {
    const intl = intl3.intl;
    return intl.string(intl3.t["OV8l/H"]);
  }
};
const items = [
  obj,
  {
    getDueAt() {
      const obj = _modDef4424();
      const addResult = obj.add(1, "hour");
      return addResult.toDate();
    },
    getLabel() {
      const intl = intl3.intl;
      return intl.string(intl3.t["zf0R+0"]);
    }
  },
  {
    getDueAt() {
      const obj = _modDef4424();
      const addResult = obj.add(4, "hour");
      return addResult.toDate();
    },
    getLabel() {
      const intl = intl3.intl;
      return intl.string(intl3.t["5gztZN"]);
    }
  },
  {
    getDueAt() {
      let toDateResult;
      const obj = _modDef4424();
      const startOfResult = obj.startOf("day");
      const addResult = startOfResult.add(9, "hours");
      const obj4 = _modDef4424();
      if (obj4.hour() >= 9) {
        const addResult1 = addResult.add(1, "day");
        toDateResult = addResult1.toDate();
      } else {
        toDateResult = addResult.toDate();
      }
      return toDateResult;
    },
    getLabel() {
      let stringResult;
      const obj = _modDef4424();
      if (obj.hour() >= 9) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t["7MKr2P"]);
      } else {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t.FnFI3m);
      }
      return stringResult;
    }
  },
  {
    getDueAt() {
      let num3;
      const obj = _modDef4424();
      const dayResult = obj.day();
      if (0 === dayResult) {
        num3 = 1;
      } else {
        num3 = 8;
        if (1 === dayResult) {
          const obj2 = _modDef4424();
          num3 = 8;
          const startOfResult = obj2.startOf("day");
          startOfResult.add(9, "hours");
        }
      }
      const obj5 = _modDef4424();
      const dayResult1 = obj5.day(num3);
      const startOfResult1 = dayResult1.startOf("day");
      const addResult1 = startOfResult1.add(9, "hours");
      return addResult1.toDate();
    },
    getLabel() {
      const intl = intl3.intl;
      return intl.string(intl3.t["q+Ls05"]);
    }
  }
];
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;
