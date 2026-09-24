// Module ID: 8227
// Function ID: 8228
// Name: RowGenerator
// Dependencies: [1186, 8228, 8229, 12, 8230, 8232, 13591, 13592, 1374, 2]

// Module 8227 (RowGenerator)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1374 */;
import BlockedGroup from "BlockedGroup" /* 8230 */;
import MessageWithContent from "MessageWithContent" /* 8232 */;
import Separator from "Separator" /* 13591 */;
import Loading from "Loading" /* 13592 */;
import ThemeStore from "ThemeStore" /* 1186 */;

require = fn;
const RowGeneratorConstants = fn(8228);
({ RowType: closure_4, SeparatorType: hasOwnProperty, LoadingType: metroRequire } = RowGeneratorConstants);
let obj = { constrainedWidth: 0, animatingStickerMessageId: null, forcedTheme: null, shouldObscureSpoiler: true, shouldDisableInteractiveComponents: true };
let merged = Object.assign(fn(8229).DEFAULT_OPTIONS);
class RowManager {
  constructor() {
    merged = Object.assign({ options: null });
    merged[0] = closure_7;
    return merged;
  }
}
const prototype = RowManager.prototype;
prototype["setOptions"] = function setOptions(arg0) {
  obj = _modDef12;
  this.options = obj.merge({}, obj, this.options, arg0);
};
prototype["generate"] = function generate(rowType) {
  const self = this;
  rowType = rowType.rowType;
  let theme = this.options.forcedTheme;
  if (theme == null) {
    theme = ThemeStore.theme;
  }
  if (constants.BLOCKED_GROUP !== rowType) {
    if (tmp2.IGNORED_GROUP !== rowType) {
      if (tmp2.SUSPENDED_USER_GROUP !== rowType) {
        if (tmp2.MESSAGE === rowType) {
          return MessageWithContent.generateMessageRowData(rowType, self.options, theme);
        } else {
          if (constants2.DAY !== rowType) {
            if (tmp12.UNREAD !== rowType) {
              if (tmp12.SUMMARY !== rowType) {
                if (constants3.LOAD_BEFORE !== rowType) {
                  if (constants3.LOAD_AFTER !== rowType) {
                    GlobalUtils.assertNever(rowType);
                  }
                }
                return Loading.generateLoadingRowData(rowType, theme);
              }
            }
          }
          return Separator.generateSeparatorRowData(rowType, theme);
        }
      }
    }
  }
  return BlockedGroup.generateBlockedGroupRowData(rowType, theme, self);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default RowManager;
