// Module ID: 7713
// Function ID: 7714
// Name: setOptions
// Dependencies: [1302, 7714, 7715, 12, 7716, 7718, 12393, 12394, 1351, 2]

// Module 7713 (setOptions)
import handleThemeChange from "handleThemeChange";
import Changeset from "Changeset";

let c4;
let c5;
let closure_6;
const require = arg1;
({ RowType: c4, SeparatorType: c5, LoadingType: closure_6 } = Changeset);
let obj = { constrainedWidth: 0, animatingStickerMessageId: null, forcedTheme: null, shouldObscureSpoiler: true, shouldDisableInteractiveComponents: true };
const merged = Object.assign(require("UserOption").DEFAULT_OPTIONS);
class RowManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = LoadingType;
    return obj;
  }
}
const prototype = RowManager.prototype;
prototype["setOptions"] = function setOptions(arg0) {
  const obj = importDefault(12);
  this.options = obj.merge({}, obj, this.options, arg0);
};
prototype["generate"] = function generate(rowType) {
  const self = this;
  rowType = rowType.rowType;
  let theme = this.options.forcedTheme;
  if (theme == null) {
    theme = theme.theme;
  }
  if (constants.BLOCKED_GROUP !== rowType) {
    if (tmp2.IGNORED_GROUP !== rowType) {
      if (tmp2.SUSPENDED_USER_GROUP !== rowType) {
        if (tmp2.MESSAGE === rowType) {
          return require(7718) /* generateMessageRowData */.generateMessageRowData(rowType, self.options, theme);
        } else {
          if (constants2.DAY !== rowType) {
            if (tmp12.UNREAD !== rowType) {
              if (tmp12.SUMMARY !== rowType) {
                if (constants3.LOAD_BEFORE !== rowType) {
                  if (constants3.LOAD_AFTER !== rowType) {
                    require(1351) /* isDiscordFrontendDevelopment */.assertNever(rowType);
                  }
                }
                return require(12394) /* generateLoadingRowData */.generateLoadingRowData(rowType, theme);
              }
            }
          }
          return require(12393) /* generateSeparatorRowData */.generateSeparatorRowData(rowType, theme);
        }
      }
    }
  }
  return require(7716) /* generateBlockedGroupRowData */.generateBlockedGroupRowData(rowType, theme, self);
};
const result = require("UserOption").fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default RowManager;
