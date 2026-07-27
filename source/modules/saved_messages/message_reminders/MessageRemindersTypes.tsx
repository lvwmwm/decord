// Module ID: 9884
// Function ID: 76580
// Name: items
// Dependencies: [3713, 1212, 2]

// Module 9884 (items)
const items = [
  {
    getDueAt() {
      const obj = importDefault(3713)();
      return importDefault(3713)().add(30, "minutes").toDate();
    },
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["OV8l/H"]);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(3713)();
      return importDefault(3713)().add(1, "hour").toDate();
    },
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["zf0R+0"]);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(3713)();
      return importDefault(3713)().add(4, "hour").toDate();
    },
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["5gztZN"]);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(3713)();
      const addResult = importDefault(3713)().startOf("day").add(9, "hours");
      const startOfResult = importDefault(3713)().startOf("day");
      if (obj4.hour() >= 9) {
        let toDateResult = addResult.add(1, "day").toDate();
        const addResult1 = addResult.add(1, "day");
      } else {
        toDateResult = addResult.toDate();
      }
      return toDateResult;
    },
    getLabel() {
      if (obj.hour() >= 9) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["7MKr2P"]);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t.FnFI3m);
      }
      return stringResult;
    }
  },
  {
    getDueAt() {
      const dayResult = importDefault(3713)().day();
      if (0 === dayResult) {
        let num3 = 1;
      } else {
        num3 = 8;
        if (1 === dayResult) {
          const obj2 = importDefault(3713)();
          const startOfResult = importDefault(3713)().startOf("day");
          num3 = 8;
          const addResult = importDefault(3713)().startOf("day").add(9, "hours");
        }
      }
      const obj = importDefault(3713)();
      const obj5 = importDefault(3713)();
      const dayResult1 = importDefault(3713)().day(num3);
      const startOfResult1 = importDefault(3713)().day(num3).startOf("day");
      return importDefault(3713)().day(num3).startOf("day").add(9, "hours").toDate();
    },
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["q+Ls05"]);
    }
  }
];
const result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;
