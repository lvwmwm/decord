// Module ID: 9915
// Function ID: 76717
// Name: items
// Dependencies: []

// Module 9915 (items)
const items = [
  {
    getDueAt() {
      const obj = importDefault(dependencyMap[0])();
      return importDefault(dependencyMap[0])().add(30, "minutes").toDate();
    },
    getLabel() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.OV8l/H);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(dependencyMap[0])();
      return importDefault(dependencyMap[0])().add(1, "hour").toDate();
    },
    getLabel() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.zf0R+0);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(dependencyMap[0])();
      return importDefault(dependencyMap[0])().add(4, "hour").toDate();
    },
    getLabel() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.5gztZN);
    }
  },
  {
    getDueAt() {
      const obj = importDefault(dependencyMap[0])();
      const addResult = importDefault(dependencyMap[0])().startOf("day").add(9, "hours");
      const startOfResult = importDefault(dependencyMap[0])().startOf("day");
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
        const intl2 = require(dependencyMap[1]).intl;
        let stringResult = intl2.string(require(dependencyMap[1]).t.7MKr2P);
      } else {
        const intl = require(dependencyMap[1]).intl;
        stringResult = intl.string(require(dependencyMap[1]).t.FnFI3m);
      }
      return stringResult;
    }
  },
  {
    getDueAt() {
      const dayResult = importDefault(dependencyMap[0])().day();
      if (0 === dayResult) {
        let num3 = 1;
      } else {
        num3 = 8;
        if (1 === dayResult) {
          const obj2 = importDefault(dependencyMap[0])();
          const startOfResult = importDefault(dependencyMap[0])().startOf("day");
          num3 = 8;
          const addResult = importDefault(dependencyMap[0])().startOf("day").add(9, "hours");
        }
      }
      const obj = importDefault(dependencyMap[0])();
      const obj5 = importDefault(dependencyMap[0])();
      const dayResult1 = importDefault(dependencyMap[0])().day(num3);
      const startOfResult1 = importDefault(dependencyMap[0])().day(num3).startOf("day");
      return importDefault(dependencyMap[0])().day(num3).startOf("day").add(9, "hours").toDate();
    },
    getLabel() {
      const intl = require(dependencyMap[1]).intl;
      return intl.string(require(dependencyMap[1]).t.q+Ls05);
    }
  }
];
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersTypes.tsx");

export const MESSAGE_REMINDER_DURATION_ITEMS = items;
