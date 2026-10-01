// Module ID: 9786
// Function ID: 9787
// Name: components/EmojiPickerListComponent
// Dependencies: [19, 9753, 21, 9763, 9774, 9787, 9783, 8179, 2]

// Module 9786 (components/EmojiPickerListComponent)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9753 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let paddingTop;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ ROW_HEIGHT: closure_4, LABEL_HEIGHT: hasOwnProperty, LABEL_TOP_PADDING: metroRequire, LABEL_BOTTOM_PADDING: metroImportDefault } = EmojiPickerListConstants);
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((paddingTop, ref) => {
  let data;
  let onShowNitroUpsell;
  let renderItem;
  ({ categoryIndexActive: require, data } = paddingTop);
  const stickyHeaderIndices = data.headerIndices;
  paddingTop = paddingTop.paddingTop;
  const paddingBottom = paddingTop.paddingBottom;
  const data2 = data.data;
  ({ onShowNitroUpsell, renderItem } = paddingTop);
  ref = paddingBottom.useRef(null);
  const items = [paddingTop, paddingBottom];
  const contentContainerStyle = paddingBottom.useMemo(() => ({ paddingTop, paddingBottom }), items);
  const getItemType = paddingBottom.useCallback((type) => type.type, []);
  const keyExtractor = paddingBottom.useCallback((type, arg1) => "" + type.type + "-" + arg1, []);
  const overrideItemLayout = paddingBottom.useCallback((arg0, type) => {
    type = type.type;
    if (require("useEmojiPickerData").EmojiPickerItemType.PLACEHOLDER === type) {
      arg0.size = 0;
    } else if (require("useEmojiPickerData").EmojiPickerItemType.TITLE === type) {
      arg0.size = closure_1_5 + closure_1_6 + closure_1_7;
    } else {
      if (require("useEmojiPickerData").EmojiPickerItemType.EMOJI_ROW !== type) {
        if (require("useEmojiPickerData").EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
          if (require("useEmojiPickerData").EmojiPickerItemType.FOOTER_UPSELL === type) {
            arg0.size = require("PremiumExpressionPickerSearchUpsell").PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
          }
        }
      }
      arg0.size = ref;
    }
  }, []);
  const imperativeHandle = paddingBottom.useImperativeHandle(ref, () => {
    let length;
    let obj = {
      scrollToHeaderIndex(animated) {
        let flag = animated.animated;
        const index = animated.index;
        if (flag === undefined) {
          flag = true;
        }
        const current = ref.current;
        if (current != null) {
          let num = length[index];
          const scrollToIndex = current.scrollToIndex;
          if (num == null) {
            num = 0;
          }
          const obj = { index: num, animated: flag };
          scrollToIndex(obj);
        }
      },
      forceUpdate() {
        const current = ref.current;
        if (null != current.forceUpdate) {
          current.forceUpdate();
        }
      },
      onStickyHeaderRendered(arg0) {
        let arr;
        let num = 0;
        let num2 = 0;
        let num3 = 0;
        if (0 < length.length) {
          do {
            let tmp2 = num3;
            arr = length;
            if (arg0 >= length[num2]) {
              tmp2 = num2;
            }
            num2 = num2 + 1;
            num3 = tmp2;
            num = tmp2;
          } while (num2 < arr.length);
        }
        const result = closure_1_0.set(num);
      }
    };
    return obj;
  });
  const onViewableItemsChanged = stickyHeaderIndices(paddingTop[5])(onShowNitroUpsell).onViewableItemsChanged;
  let obj = require("PortalKeyboardModalContext");
  const preventNativeModalDismiss = obj.useIsPortalKeyboardInModal();
  return jsx(require("defaultMVCPConfig").BottomSheetFlashList, { contentContainerStyle, data: data2, getItemType, keyboardShouldPersistTaps: "always", keyExtractor, onViewableItemsChanged, overrideItemLayout, preventNativeModalDismiss, ref, renderItem, stickyHeaderIndices });
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx");

export default forwardRefResult;
