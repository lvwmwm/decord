// Module ID: 7338
// Function ID: 7339
// Name: useFastestListPropsPlaceholder
// Dependencies: [19, 17, 7339, 4637, 2]
// Exports: default

// Module 7338 (useFastestListPropsPlaceholder)
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7339 */;
import noop from "module_19" /* 19 */;

require = fn;
function createNativePlaceholderConfig(listFooter) {
  let type;
  if (listFooter != null) {
    type = listFooter.type;
  }
  let NONE = type;
  if (type == null) {
    NONE = FastestListPropsPlaceholder.FastestListPropsPlaceholderType.NONE;
  }
  const size = { borderRadius: "Array", borderTopLeftRadius: "count", borderTopRightRadius: "channel", borderBottomLeftRadius: "keys", borderBottomRightRadius: "then", divider: "kind", dividerColor: "then", dividerPaddingLeft: "call", dividerPaddingRight: "assign", placeholderShape: "_desired", placeholderShapeColor: "code", placeholderShapeCount: "a", placeholderShapeGap: "isArray", placeholderShapePaddingHorizontal: "paddingHorizontal", placeholderShapePaddingVertical: "Path", placeholderFeedBackgroundColor: "a", placeholderFeedColor: "isArray", placeholderFeedLabelPadding: "context", placeholderFeedLabelPaddingInnerRatio: "borderRadius", placeholderFeedLabelSize: "a", placeholderFeedLabelSecondarySize: "isArray", placeholderFeedPadding: "to", placeholderFeedShape: "error", placeholderFeedShapeSize: "a", placeholderType: NONE, width: true, height: true, verticalAlignment: true, horizontalAlignment: true };
  if (null == listFooter) {
    return size;
  } else {
    if (FastestListPropsPlaceholder.FastestListPropsPlaceholderType.NONE !== type) {
      if (tmp15(7339).FastestListPropsPlaceholderType.SHAPE === type) {
        let num9 = listFooter.borderRadius;
        if (num9 == null) {
          num9 = 0;
        }
        size.borderRadius = num9;
        ({ shape: obj.placeholderShape, spaceGap } = listFooter);
        if (spaceGap == null) {
          spaceGap = 0;
        }
        size.placeholderShapeGap = spaceGap;
        let num10 = listFooter.paddingHorizontal;
        if (num10 == null) {
          num10 = 0;
        }
        size.placeholderShapePaddingHorizontal = num10;
        let num11 = listFooter.paddingVertical;
        if (num11 == null) {
          num11 = 0;
        }
        size.placeholderShapePaddingVertical = num11;
        const tmp14 = processColor(tmp15(4637).hexToRgbaString(listFooter.colorHex, listFooter.opacity));
        size.placeholderShapeColor = tmp14;
        let num12 = listFooter.shapeCount;
        if (num12 == null) {
          num12 = 1;
        }
        size.placeholderShapeCount = num12;
        ({ width: obj.width, height: obj.height, verticalAlignment } = listFooter);
        if (verticalAlignment == null) {
          verticalAlignment = "center";
        }
        size.verticalAlignment = verticalAlignment;
        let str2 = listFooter.horizonalAlignment;
        if (str2 == null) {
          str2 = "center";
        }
        size.horizontalAlignment = str2;
        const tmp15Result = tmp15(4637);
      } else if (tmp15(7339).FastestListPropsPlaceholderType.FEED_ITEM === type) {
        let num = listFooter.borderRadius;
        if (num == null) {
          num = 0;
        }
        size.borderRadius = num;
        let num2 = listFooter.borderTopLeftRadius;
        if (num2 == null) {
          num2 = 0;
        }
        size.borderTopLeftRadius = num2;
        let num3 = listFooter.borderTopRightRadius;
        if (num3 == null) {
          num3 = 0;
        }
        size.borderTopRightRadius = num3;
        let num4 = listFooter.borderBottomLeftRadius;
        if (num4 == null) {
          num4 = 0;
        }
        size.borderBottomLeftRadius = num4;
        let num5 = listFooter.borderBottomRightRadius;
        if (num5 == null) {
          num5 = 0;
        }
        size.borderBottomRightRadius = num5;
        let flag = listFooter.divider;
        if (flag == null) {
          flag = false;
        }
        size.divider = flag;
        const tmp10 = processColor(listFooter.dividerColorHex);
        size.dividerColor = tmp10;
        let num6 = listFooter.dividerPaddingLeft;
        if (num6 == null) {
          num6 = 0;
        }
        size.dividerPaddingLeft = num6;
        let num7 = listFooter.dividerPaddingRight;
        if (num7 == null) {
          num7 = 0;
        }
        size.dividerPaddingRight = num7;
        const tmp9Result = processColor(listFooter.backgroundColorHex);
        size.placeholderFeedBackgroundColor = tmp9Result;
        const tmp9Result2 = processColor(listFooter.colorHex);
        size.placeholderFeedColor = tmp9Result2;
        ({ labelSize: obj.placeholderFeedLabelSize, labelSecondarySize } = listFooter);
        if (labelSecondarySize == null) {
          labelSecondarySize = 0;
        }
        size.placeholderFeedLabelSecondarySize = labelSecondarySize;
        ({ labelPadding: obj.placeholderFeedLabelPadding, labelPaddingInnerRatio } = listFooter);
        if (labelPaddingInnerRatio == null) {
          labelPaddingInnerRatio = 0.4;
        }
        size.placeholderFeedLabelPaddingInnerRatio = labelPaddingInnerRatio;
        let num8 = listFooter.padding;
        if (num8 == null) {
          num8 = 0;
        }
        size.placeholderFeedPadding = num8;
        ({ shape: obj.placeholderFeedShape, shapeSize: obj.placeholderFeedShapeSize } = listFooter);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid placeholder type: " + type);
        throw error;
      }
    }
    return size;
  }
}
const processColor = fn(17).processColor;
const obj = { sectionItem: { type: fn(7339).FastestListPropsPlaceholderType.NONE } };
let size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx");

export default function useFastestListPropsPlaceholder() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => ({ listFooter: createNativePlaceholderConfig(closure_0.listFooter), listHeader: createNativePlaceholderConfig(closure_0.listHeader), sectionFooter: createNativePlaceholderConfig(closure_0.sectionFooter), sectionHeader: createNativePlaceholderConfig(closure_0.sectionHeader), sectionItem: createNativePlaceholderConfig(closure_0.sectionItem), sectionItemAtFront: createNativePlaceholderConfig(closure_0.sectionItemAtFront), sectionItemAtRear: createNativePlaceholderConfig(closure_0.sectionItemAtRear), sectionItemSingleton: createNativePlaceholderConfig(closure_0.sectionItemSingleton) }), items);
};
