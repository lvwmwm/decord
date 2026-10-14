// Module ID: 11949
// Function ID: 11950
// Name: directory_channels/GuildDirectoryUtils
// Dependencies: [5, 19, 21, 11944, 5708, 11950, 1987, 2]
// Exports: onAddDirectoryGuildEntry

// Module 11949 (directory_channels/GuildDirectoryUtils)
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let obj = function _onAddDirectoryGuildEntry() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let id;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            id = undefined;
            c5 = undefined;
            ({ directoryChannelId: c0, directoryGuildName: c1, guild: c2, description: c3, category: c4, onClose: c5 } = closure_0);
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: null };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj4 = closure_130_2(closure_130_3[3]);
            c3 = 2;
            c4 = 1;
            const obj6 = { value: obj4.addDirectoryGuildEntry(c0, id.id, c3, c4), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c5();
          obj = closure_130_1(closure_130_3[4]);
          const obj8 = {
            importer() {
                    let directoryGuildName;
                    let guild;
                    const promise = closure_0(paths[6])(paths[5], paths.paths);
                    return promise.then((result) => {
                      closure_0 = result.default;
                      return (arg0) => {
                        obj = { guild, directoryGuildName };
                        const merged = Object.assign(arg0);
                        return closure_3_5(closure_0, obj);
                      };
                    });
                  },
            isDismissable: false
          };
          obj.openLazy(obj8);
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp21) {
        c4 = 3;
        throw tmp21;
      }
    }
  });
  return obj(...arguments);
};
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryUtils.tsx");

export const onAddDirectoryGuildEntry = function onAddDirectoryGuildEntry() {
  return obj(...arguments);
};
