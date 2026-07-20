// Module ID: 7610
// Function ID: 60993
// Name: RowManager
// Dependencies: []

// Module 7610 (RowManager)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ RowType: closure_6, SeparatorType: closure_7, LoadingType: closure_8 } = arg1(dependencyMap[3]));
const obj = { GuildBadgeBee: null, extraKeyboardSpace: null, limits: null, expandTopic: null, bounty: null };
const merged = Object.assign(arg1(dependencyMap[4]).DEFAULT_OPTIONS);
const tmp2 = arg1(dependencyMap[3]);
const tmp4 = () => {
  class RowManager {
    constructor() {
      tmp = closure_3(this, RowManager);
      this.options = closure_9;
      return;
    }
  }
  const arg1 = RowManager;
  let obj = {
    key: "setOptions",
    value(arg0) {
      this.options = callback(closure_2[5]).merge({}, closure_9, this.options, arg0);
    }
  };
  const items = [obj, ];
  obj = {
    key: "generate",
    value(rowType) {
      const self = this;
      rowType = rowType.rowType;
      let theme = this.options.forcedTheme;
      if (null == theme) {
        theme = theme.theme;
      }
      if (constants.BLOCKED_GROUP !== rowType) {
        if (constants.IGNORED_GROUP !== rowType) {
          if (constants.SUSPENDED_USER_GROUP !== rowType) {
            if (constants.MESSAGE === rowType) {
              return RowManager(closure_2[7]).generateMessageRowData(rowType, self.options, theme);
            } else {
              if (constants2.DAY !== rowType) {
                if (constants2.UNREAD !== rowType) {
                  if (constants2.SUMMARY !== rowType) {
                    if (constants3.LOAD_BEFORE !== rowType) {
                      if (constants3.LOAD_AFTER !== rowType) {
                        RowManager(closure_2[10]).assertNever(rowType);
                      }
                    }
                    return RowManager(closure_2[9]).generateLoadingRowData(rowType, theme);
                  }
                }
              }
              return RowManager(closure_2[8]).generateSeparatorRowData(rowType, theme);
            }
          }
        }
      }
      return RowManager(closure_2[6]).generateBlockedGroupRowData(rowType, theme, self);
    }
  };
  items[1] = obj;
  return callback(RowManager, items);
}();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default tmp4;
