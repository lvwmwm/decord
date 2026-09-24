// Module ID: 8230
// Function ID: 8231
// Name: BlockedGroup
// Dependencies: [8228, 1089, 12, 4642, 580, 4640, 8231, 2]
// Exports: generateBlockedGroupRowData

// Module 8230 (BlockedGroup)
import nativeDefault from "native" /* 580 */;
import Constants from "Constants" /* 1089 */;
import shared from "shared" /* 4642 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8228 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8231 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const SeparatorAction = RowGeneratorConstants.SeparatorAction;
const UNSAFE_Colors = Constants.UNSAFE_Colors;
let closure_5 = apply.memoize((arg0) => {
  let str = "#DBE0E4";
  if (obj.isThemeDark(arg0)) {
    str = nativeDefault.unsafe_rawColors.PRIMARY_700;
  }
  obj = shared;
  let str2 = "#FAFAFA";
  if (tmpResult.isThemeDark(arg0)) {
    str2 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  tmpResult = shared;
  if (tmpResult6.isThemeDark(arg0)) {
    let GREY1 = tmp(4640).hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_300, 0.6);
    const tmpResult7 = tmp(4640);
  } else {
    GREY1 = UNSAFE_Colors.GREY1;
  }
  const obj2 = { borderColor: null, backgroundColor: null, color: null };
  tmpResult6 = shared;
  obj2.borderColor = RowGeneratorStyleSheet.processColorOrThrow(str);
  const tmpResult8 = RowGeneratorStyleSheet;
  obj2.backgroundColor = RowGeneratorStyleSheet.processColorOrThrow(str2);
  const tmpResult9 = RowGeneratorStyleSheet;
  obj2.color = RowGeneratorStyleSheet.processColorOrThrow(GREY1);
  return obj2;
});
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/BlockedGroup.tsx");

export const generateBlockedGroupRowData = function generateBlockedGroupRowData(canUncollapse, theme, self) {
  const _self = self;
  ({ content, context } = canUncollapse);
  canUncollapse = !("canUncollapse" in canUncollapse);
  ({ changeType, message, text, revealed, rowType } = canUncollapse);
  if (!canUncollapse) {
    canUncollapse = canUncollapse.canUncollapse;
  }
  const obj = {};
  const merged = Object.assign(closure_5(theme));
  obj.type = rowType;
  obj.content = content.map((item) => _self.generate(item));
  const obj2 = { type: SeparatorAction.TOGGLE_BLOCKED_MESSAGES, context: null };
  if (context == null) {
    context = message.id;
  }
  obj2.context = context;
  obj.button = { action: obj2 };
  obj.changeType = changeType;
  obj.text = text;
  obj.revealed = revealed;
  obj.canUncollapse = canUncollapse;
  return obj;
};
