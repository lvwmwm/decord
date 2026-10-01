// Module ID: 6482
// Function ID: 6483
// Name: useFastestListPropsPlaceholder
// Dependencies: [19, 17, 6483, 4683, 2]
// Exports: default

// Module 6482 (useFastestListPropsPlaceholder)
import react_native from "react-native" /* 17 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6483 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

function createNativePlaceholderConfig(listFooter) {
  let labelPaddingInnerRatio;
  let labelSecondarySize;
  let spaceGap;
  let verticalAlignment;
  let type;
  if (listFooter != null) {
    type = listFooter.type;
  }
  let NONE = type;
  if (type == null) {
    NONE = FastestListPropsPlaceholder.FastestListPropsPlaceholderType.NONE;
  }
  size = { borderRadius: "Array", borderTopLeftRadius: "create", borderTopRightRadius: "diversity", borderBottomLeftRadius: "h", borderBottomRightRadius: "e", divider: "isArray", dividerColor: "isArray", dividerPaddingLeft: "Number", dividerPaddingRight: "e", placeholderShape: "isArray", placeholderShapeColor: "isArray", placeholderShapeCount: "Object", placeholderShapeGap: "e", placeholderShapePaddingHorizontal: "isArray", placeholderShapePaddingVertical: "isArray", placeholderFeedBackgroundColor: "PX_16", placeholderFeedColor: "e", placeholderFeedLabelPadding: "isArray", placeholderFeedLabelPaddingInnerRatio: "isArray", placeholderFeedLabelSize: "flex", placeholderFeedLabelSecondarySize: "e", placeholderFeedPadding: "isArray", placeholderFeedShape: "isArray", placeholderFeedShapeSize: "channel", placeholderType: NONE, width: "\u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442", height: "\u0441\u0442\u043E", verticalAlignment: "\u0441\u0442\u043E \u0442\u043E\u0447\u043A\u0438", horizontalAlignment: 2082 };
  if (null == listFooter) {
    return size;
  } else {
    if (FastestListPropsPlaceholder.FastestListPropsPlaceholderType.NONE !== type) {
      if (FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE === type) {
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
        const tmp13Result = ColorUtils;
        size.placeholderShapeColor = processColor(tmp13Result.hexToRgbaString(listFooter.colorHex, listFooter.opacity));
        let num12 = listFooter.shapeCount;
        const tmp12 = processColor(tmp13Result.hexToRgbaString(listFooter.colorHex, listFooter.opacity));
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
      } else if (FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM === type) {
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
        size.dividerColor = processColor(listFooter.dividerColorHex);
        let num6 = listFooter.dividerPaddingLeft;
        const tmp8 = processColor(listFooter.dividerColorHex);
        if (num6 == null) {
          num6 = 0;
        }
        size.dividerPaddingLeft = num6;
        let num7 = listFooter.dividerPaddingRight;
        if (num7 == null) {
          num7 = 0;
        }
        size.dividerPaddingRight = num7;
        size.placeholderFeedBackgroundColor = processColor(listFooter.backgroundColorHex);
        const tmp7Result = processColor(listFooter.backgroundColorHex);
        size.placeholderFeedColor = processColor(listFooter.colorHex);
        ({ labelSize: obj.placeholderFeedLabelSize, labelSecondarySize } = listFooter);
        const tmp7Result2 = processColor(listFooter.colorHex);
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
        const self = this;
        const self2 = this;
        const error = new Error("Invalid placeholder type: " + type);
        throw error;
      }
    }
    return size;
  }
}
const processColor = react_native.processColor;
let obj = { sectionItem: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.NONE } };
({ type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.NONE });
let size = size_mod;
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx");

export default function useFastestListPropsPlaceholder() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => {
    obj = { listFooter: createNativePlaceholderConfig(closure_0.listFooter), listHeader: createNativePlaceholderConfig(closure_0.listHeader), sectionFooter: createNativePlaceholderConfig(closure_0.sectionFooter), sectionHeader: createNativePlaceholderConfig(closure_0.sectionHeader), sectionItem: createNativePlaceholderConfig(closure_0.sectionItem), sectionItemAtFront: createNativePlaceholderConfig(closure_0.sectionItemAtFront), sectionItemAtRear: createNativePlaceholderConfig(closure_0.sectionItemAtRear), sectionItemSingleton: createNativePlaceholderConfig(closure_0.sectionItemSingleton) };
    return obj;
  }, items);
};
