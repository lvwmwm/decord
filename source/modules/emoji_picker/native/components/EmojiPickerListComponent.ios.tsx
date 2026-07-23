// Module ID: 9377
// Function ID: 73140
// Dependencies: [31, 9329, 33, 9357, 9367, 9378, 7879, 2]

// Module 9377
import importAllResult from "result";
import IMAGE_SIZE from "IMAGE_SIZE";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ ROW_HEIGHT: closure_4, LABEL_HEIGHT: closure_5, LABEL_TOP_PADDING: closure_6, LABEL_BOTTOM_PADDING: closure_7 } = IMAGE_SIZE);
const forwardRefResult = importAllResult.forwardRef((paddingTop) => {
  let data;
  let onShowNitroUpsell;
  let renderItem;
  let require;
  ({ categoryIndexActive: require, data } = paddingTop);
  const stickyHeaderIndices = data.headerIndices;
  paddingTop = paddingTop.paddingTop;
  const paddingBottom = paddingTop.paddingBottom;
  ({ onShowNitroUpsell, renderItem } = paddingTop);
  const ref = paddingBottom.useRef(null);
  const items = [paddingTop, paddingBottom];
  const contentContainerStyle = paddingBottom.useMemo(() => ({ paddingTop, paddingBottom }), items);
  const getItemType = paddingBottom.useCallback((type) => type.type, []);
  const keyExtractor = paddingBottom.useCallback((type) => "" + type.type + "-" + arg1, []);
  const overrideItemLayout = paddingBottom.useCallback((arg0, type) => {
    type = type.type;
    if (outer1_0(paddingTop[3]).EmojiPickerItemType.PLACEHOLDER === type) {
      arg0.size = 0;
    } else if (outer1_0(paddingTop[3]).EmojiPickerItemType.TITLE === type) {
      arg0.size = outer1_5 + outer1_6 + outer1_7;
    } else {
      if (outer1_0(paddingTop[3]).EmojiPickerItemType.EMOJI_ROW !== type) {
        if (outer1_0(paddingTop[3]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
          if (outer1_0(paddingTop[3]).EmojiPickerItemType.FOOTER_UPSELL === type) {
            arg0.size = outer1_0(paddingTop[4]).EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT;
          }
        }
      }
      arg0.size = ref;
    }
  }, []);
  const imperativeHandle = paddingBottom.useImperativeHandle(arg1, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      const current = outer1_4.current;
      if (null != current) {
        const obj = {};
        let num = 0;
        if (null != outer1_1[animated.index]) {
          num = tmp2;
        }
        obj.index = num;
        obj.animated = flag;
        current.scrollToIndex(obj);
      }
    },
    forceUpdate() {
      const current = outer1_4.current;
      if (null != current.forceUpdate) {
        current.forceUpdate();
      }
    },
    onStickyHeaderRendered(arg0) {
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      if (0 < outer1_1.length) {
        do {
          let tmp = outer1_1;
          if (arg0 >= outer1_1[num3]) {
            num2 = num3;
          }
          num3 = num3 + 1;
          let tmp2 = outer1_1;
          num = num2;
        } while (num3 < outer1_1.length);
      }
      const result = outer1_0.set(num);
    }
  }));
  return jsx(require(paddingTop[6]).BottomSheetFlashList, { contentContainerStyle, data: data.data, getItemType, keyboardShouldPersistTaps: "always", keyExtractor, onViewableItemsChanged: stickyHeaderIndices(paddingTop[5])(onViewableItemsChanged).onViewableItemsChanged, overrideItemLayout, ref, renderItem, stickyHeaderIndices });
});
let result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx");

export default forwardRefResult;
