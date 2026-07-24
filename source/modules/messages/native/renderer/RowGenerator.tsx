// Module ID: 7710
// Function ID: 61350
// Name: RowManager
// Dependencies: [6, 7, 1278, 7711, 7712, 22, 7713, 7715, 12351, 12352, 1327, 2]

// Module 7710 (RowManager)
import generateBlockedGroupRowData from "generateBlockedGroupRowData";
import generateMessageRowData from "generateMessageRowData";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import Changeset from "Changeset";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ RowType: closure_6, SeparatorType: closure_7, LoadingType: closure_8 } = Changeset);
let obj = { constrainedWidth: 0, animatingStickerMessageId: null, forcedTheme: null, shouldObscureSpoiler: true, shouldDisableInteractiveComponents: true };
const merged = Object.assign(require("UserOption").DEFAULT_OPTIONS);
const tmp4 = (() => {
  class RowManager {
    constructor() {
      tmp = outer1_3(this, RowManager);
      this.options = outer1_9;
      return;
    }
  }
  let obj = {
    key: "setOptions",
    value(arg0) {
      this.options = outer1_1(outer1_2[5]).merge({}, outer1_9, this.options, arg0);
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
        theme = outer1_5.theme;
      }
      if (outer1_6.BLOCKED_GROUP !== rowType) {
        if (outer1_6.IGNORED_GROUP !== rowType) {
          if (outer1_6.SUSPENDED_USER_GROUP !== rowType) {
            if (outer1_6.MESSAGE === rowType) {
              return RowManager(outer1_2[7]).generateMessageRowData(rowType, self.options, theme);
            } else {
              if (outer1_7.DAY !== rowType) {
                if (outer1_7.UNREAD !== rowType) {
                  if (outer1_7.SUMMARY !== rowType) {
                    if (outer1_8.LOAD_BEFORE !== rowType) {
                      if (outer1_8.LOAD_AFTER !== rowType) {
                        RowManager(outer1_2[10]).assertNever(rowType);
                      }
                    }
                    return RowManager(outer1_2[9]).generateLoadingRowData(rowType, theme);
                  }
                }
              }
              return RowManager(outer1_2[8]).generateSeparatorRowData(rowType, theme);
            }
          }
        }
      }
      return RowManager(outer1_2[6]).generateBlockedGroupRowData(rowType, theme, self);
    }
  };
  items[1] = obj;
  return callback(RowManager, items);
})();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default tmp4;
