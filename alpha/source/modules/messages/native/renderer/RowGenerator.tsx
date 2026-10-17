// Module ID: 8013
// Function ID: 8014
// Name: RowGenerator
// Dependencies: [1207, 8014, 8015, 12, 8016, 8018, 14336, 14337, 1388, 2]

// Module 8013 (RowGenerator)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import RenderMessageOptionsContext from "RenderMessageOptionsContext" /* 8015 */;
import BlockedGroup from "BlockedGroup" /* 8016 */;
import MessageWithContent from "MessageWithContent" /* 8018 */;
import Separator from "Separator" /* 14336 */;
import Loading from "Loading" /* 14337 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8014 */;
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
