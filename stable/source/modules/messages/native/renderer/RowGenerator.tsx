// Module ID: 7378
// Function ID: 7379
// Name: RowGenerator
// Dependencies: [1194, 7379, 7380, 12, 7381, 7383, 12823, 12824, 1376, 2]

// Module 7378 (RowGenerator)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import RenderMessageOptionsContext from "RenderMessageOptionsContext" /* 7380 */;
import BlockedGroup from "BlockedGroup" /* 7381 */;
import MessageWithContent from "MessageWithContent" /* 7383 */;
import Separator from "Separator" /* 12823 */;
import Loading from "Loading" /* 12824 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7379 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ RowType: closure_4, SeparatorType: hasOwnProperty, LoadingType: metroRequire } = RowGeneratorConstants);
let obj = { constrainedWidth: 0, animatingStickerMessageId: null, forcedTheme: null, shouldObscureSpoiler: true, shouldDisableInteractiveComponents: true };
let merged = Object.assign(RenderMessageOptionsContext.DEFAULT_OPTIONS);
class RowManager {
  constructor() {
    const merged = Object.assign({ options: null });
    merged[0] = obj;
    return merged;
  }
  setOptions(arg0) {
    obj = _modDef12;
    this.options = obj.merge({}, obj, this.options, arg0);
  }
  generate(rowType) {
    const self = this;
    rowType = rowType.rowType;
    let theme = this.options.forcedTheme;
    if (theme == null) {
      theme = ThemeStore.theme;
    }
    if (constants.BLOCKED_GROUP !== rowType) {
      if (constants.IGNORED_GROUP !== rowType) {
        if (constants.SUSPENDED_USER_GROUP !== rowType) {
          if (constants.MESSAGE === rowType) {
            const obj4 = MessageWithContent;
            return obj4.generateMessageRowData(rowType, self.options, theme);
          } else {
            if (hasOwnProperty.DAY !== rowType) {
              if (hasOwnProperty.UNREAD !== rowType) {
                if (hasOwnProperty.SUMMARY !== rowType) {
                  if (metroRequire.LOAD_BEFORE !== rowType) {
                    if (metroRequire.LOAD_AFTER !== rowType) {
                      obj = GlobalUtils;
                      obj.assertNever(rowType);
                    }
                  }
                  const obj2 = Loading;
                  return obj2.generateLoadingRowData(rowType, theme);
                }
              }
            }
            const obj3 = Separator;
            return obj3.generateSeparatorRowData(rowType, theme);
          }
        }
      }
    }
    const obj5 = BlockedGroup;
    return obj5.generateBlockedGroupRowData(rowType, theme, self);
  }
}
const prototype = RowManager.prototype;
const result = size.fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default RowManager;
