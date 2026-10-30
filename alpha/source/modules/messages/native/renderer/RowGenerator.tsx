// Module ID: 8369
// Function ID: 8370
// Name: RowGenerator
// Dependencies: [1193, 8370, 8371, 12, 8372, 8374, 15113, 15114, 1380, 2]

// Module 8369 (RowGenerator)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import RenderMessageOptionsContext from "RenderMessageOptionsContext" /* 8371 */;
import BlockedGroup from "BlockedGroup" /* 8372 */;
import MessageWithContent from "MessageWithContent" /* 8374 */;
import Separator from "Separator" /* 15113 */;
import Loading from "Loading" /* 15114 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8370 */;
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
                  if (hasOwnProperty.CONVERSATION !== rowType) {
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
