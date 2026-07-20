// Module ID: 9365
// Function ID: 73061
// Dependencies: []

// Module 9365
const importAllResult = importAll(dependencyMap[0]);
({ ROW_HEIGHT: closure_4, LABEL_HEIGHT: closure_5, LABEL_TOP_PADDING: closure_6, LABEL_BOTTOM_PADDING: closure_7 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const forwardRefResult = importAllResult.forwardRef((paddingTop) => {
  let data;
  let onShowNitroUpsell;
  let renderItem;
  ({ categoryIndexActive: closure_0, data } = paddingTop);
  const stickyHeaderIndices = data.headerIndices;
  const importDefault = stickyHeaderIndices;
  paddingTop = paddingTop.paddingTop;
  const dependencyMap = paddingTop;
  const paddingBottom = paddingTop.paddingBottom;
  ({ onShowNitroUpsell, renderItem } = paddingTop);
  const ref = importAllResult.useRef(null);
  const items = [paddingTop, paddingBottom];
  const contentContainerStyle = importAllResult.useMemo(() => ({ paddingTop, paddingBottom }), items);
  const getItemType = importAllResult.useCallback((type) => type.type, []);
  const keyExtractor = importAllResult.useCallback((type) => "" + type.type + "-" + arg1, []);
  const overrideItemLayout = importAllResult.useCallback((arg0, type) => {
    type = type.type;
    if (callback(paddingTop[3]).EmojiPickerItemType.PLACEHOLDER === type) {
      arg0.size = 0;
    } else if (callback(paddingTop[3]).EmojiPickerItemType.TITLE === type) {
      arg0.size = closure_5 + closure_6 + closure_7;
    } else {
      if (callback(paddingTop[3]).EmojiPickerItemType.EMOJI_ROW !== type) {
        if (callback(paddingTop[3]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
          if (callback(paddingTop[3]).EmojiPickerItemType.FOOTER_UPSELL === type) {
            arg0.size = callback(paddingTop[4]).EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT;
          }
        }
      }
      arg0.size = ref;
    }
  }, []);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      const current = ref.current;
      if (null != current) {
        const obj = {};
        let num = 0;
        if (null != closure_1[animated.index]) {
          num = tmp2;
        }
        obj.index = num;
        obj.animated = flag;
        current.scrollToIndex(obj);
      }
    },
    forceUpdate() {
      const current = ref.current;
      if (null != current.forceUpdate) {
        current.forceUpdate();
      }
    },
    onStickyHeaderRendered(arg0) {
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      if (0 < length.length) {
        do {
          let tmp = closure_1;
          if (arg0 >= closure_1[num3]) {
            num2 = num3;
          }
          num3 = num3 + 1;
          let tmp2 = closure_1;
          num = num2;
        } while (num3 < closure_1.length);
      }
      const result = closure_0.set(num);
    }
  }));
  return jsx(arg1(dependencyMap[6]).BottomSheetFlashList, { contentContainerStyle, data: data.data, getItemType, keyboardShouldPersistTaps: "always", keyExtractor, onViewableItemsChanged: importDefault(dependencyMap[5])(onViewableItemsChanged).onViewableItemsChanged, overrideItemLayout, ref, renderItem, stickyHeaderIndices });
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx");

export default forwardRefResult;
