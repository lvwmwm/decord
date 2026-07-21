// Module ID: 9242
// Function ID: 72252
// Name: createNativePlaceholderConfig
// Dependencies: []
// Exports: default

// Module 9242 (createNativePlaceholderConfig)
function createNativePlaceholderConfig(type) {
  let labelPaddingInnerRatio;
  let labelSecondarySize;
  let spaceGap;
  let verticalAlignment;
  type = undefined;
  if (null != type) {
    type = type.type;
  }
  const obj = { borderRadius: undefined, borderTopLeftRadius: undefined, borderTopRightRadius: undefined, borderBottomLeftRadius: undefined, borderBottomRightRadius: undefined, divider: undefined, dividerColorRgba: undefined, dividerPaddingLeft: undefined, dividerPaddingRight: undefined, placeholderShape: undefined, placeholderShapeColorRgba: undefined, placeholderShapeCount: undefined, placeholderShapeGap: undefined, placeholderShapePaddingHorizontal: undefined, placeholderShapePaddingVertical: undefined, placeholderFeedBackgroundColorRgba: undefined, placeholderFeedColorRgba: undefined, placeholderFeedLabelPadding: undefined, placeholderFeedLabelPaddingInnerRatio: undefined, placeholderFeedLabelSize: undefined, placeholderFeedLabelSecondarySize: undefined, placeholderFeedPadding: undefined, placeholderFeedShape: undefined, placeholderFeedShapeSize: undefined };
  let NONE = type;
  if (null == type) {
    NONE = arg1(dependencyMap[1]).FastestListPropsPlaceholderType.NONE;
  }
  obj.placeholderType = NONE;
  obj.width = undefined;
  obj.height = undefined;
  obj.verticalAlignment = undefined;
  obj.horizontalAlignment = undefined;
  if (null == type) {
    return obj;
  } else {
    let num20 = 1;
    if (arg1(dependencyMap[1]).FastestListPropsPlaceholderType.NONE !== type) {
      if (arg1(dependencyMap[num20]).FastestListPropsPlaceholderType.SHAPE === type) {
        const borderRadius2 = type.borderRadius;
        let num15 = 0;
        if (null != borderRadius2) {
          num15 = borderRadius2;
        }
        obj.borderRadius = num15;
        ({ shape: obj.placeholderShape, spaceGap } = type);
        let num16 = 0;
        if (null != spaceGap) {
          num16 = spaceGap;
        }
        obj.placeholderShapeGap = num16;
        const paddingHorizontal = type.paddingHorizontal;
        let num17 = 0;
        if (null != paddingHorizontal) {
          num17 = paddingHorizontal;
        }
        obj.placeholderShapePaddingHorizontal = num17;
        const paddingVertical = type.paddingVertical;
        let num18 = 0;
        if (null != paddingVertical) {
          num18 = paddingVertical;
        }
        obj.placeholderShapePaddingVertical = num18;
        obj.placeholderShapeColorRgba = arg1(dependencyMap[2]).hexToRgbaString(type.colorHex, type.opacity);
        const shapeCount = type.shapeCount;
        if (null != shapeCount) {
          num20 = shapeCount;
        }
        obj.placeholderShapeCount = num20;
        ({ width: obj.width, height: obj.height, verticalAlignment } = type);
        let str2 = "center";
        let str3 = "center";
        if (null != verticalAlignment) {
          str3 = verticalAlignment;
        }
        obj.verticalAlignment = str3;
        const horizonalAlignment = type.horizonalAlignment;
        if (null != horizonalAlignment) {
          str2 = horizonalAlignment;
        }
        obj.horizontalAlignment = str2;
        const obj5 = arg1(dependencyMap[2]);
      } else if (arg1(dependencyMap[num20]).FastestListPropsPlaceholderType.FEED_ITEM === type) {
        const borderRadius = type.borderRadius;
        let num2 = 0;
        if (null != borderRadius) {
          num2 = borderRadius;
        }
        obj.borderRadius = num2;
        const borderTopLeftRadius = type.borderTopLeftRadius;
        let num3 = 0;
        if (null != borderTopLeftRadius) {
          num3 = borderTopLeftRadius;
        }
        obj.borderTopLeftRadius = num3;
        const borderTopRightRadius = type.borderTopRightRadius;
        let num4 = 0;
        if (null != borderTopRightRadius) {
          num4 = borderTopRightRadius;
        }
        obj.borderTopRightRadius = num4;
        const borderBottomLeftRadius = type.borderBottomLeftRadius;
        let num5 = 0;
        if (null != borderBottomLeftRadius) {
          num5 = borderBottomLeftRadius;
        }
        obj.borderBottomLeftRadius = num5;
        const borderBottomRightRadius = type.borderBottomRightRadius;
        let num6 = 0;
        if (null != borderBottomRightRadius) {
          num6 = borderBottomRightRadius;
        }
        obj.borderBottomRightRadius = num6;
        const divider = type.divider;
        obj.divider = null != divider && divider;
        let hexToRgbaStringResult;
        if (null != type.dividerColorHex) {
          hexToRgbaStringResult = arg1(dependencyMap[2]).hexToRgbaString(type.dividerColorHex);
          const obj2 = arg1(dependencyMap[2]);
        }
        obj.dividerColorRgba = hexToRgbaStringResult;
        const dividerPaddingLeft = type.dividerPaddingLeft;
        let num8 = 0;
        if (null != dividerPaddingLeft) {
          num8 = dividerPaddingLeft;
        }
        obj.dividerPaddingLeft = num8;
        const dividerPaddingRight = type.dividerPaddingRight;
        let num9 = 0;
        if (null != dividerPaddingRight) {
          num9 = dividerPaddingRight;
        }
        obj.dividerPaddingRight = num9;
        let hexToRgbaStringResult1;
        if (null != type.backgroundColorHex) {
          hexToRgbaStringResult1 = arg1(dependencyMap[2]).hexToRgbaString(type.backgroundColorHex);
          const obj3 = arg1(dependencyMap[2]);
        }
        obj.placeholderFeedBackgroundColorRgba = hexToRgbaStringResult1;
        obj.placeholderFeedColorRgba = arg1(dependencyMap[2]).hexToRgbaString(type.colorHex);
        ({ labelSize: obj.placeholderFeedLabelSize, labelSecondarySize } = type);
        let num12 = 0;
        if (null != labelSecondarySize) {
          num12 = labelSecondarySize;
        }
        obj.placeholderFeedLabelSecondarySize = num12;
        ({ labelPadding: obj.placeholderFeedLabelPadding, labelPaddingInnerRatio } = type);
        let num13 = 0.4;
        if (null != labelPaddingInnerRatio) {
          num13 = labelPaddingInnerRatio;
        }
        obj.placeholderFeedLabelPaddingInnerRatio = num13;
        const padding = type.padding;
        let num14 = 0;
        if (null != padding) {
          num14 = padding;
        }
        obj.placeholderFeedPadding = num14;
        ({ shape: obj.placeholderFeedShape, shapeSize: obj.placeholderFeedShapeSize } = type);
        const obj4 = arg1(dependencyMap[2]);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid placeholder type: " + type);
        throw error;
      }
    }
    return obj;
  }
}
let closure_2 = importAll(dependencyMap[0]);
let obj = {};
obj = { type: arg1(dependencyMap[1]).FastestListPropsPlaceholderType.NONE };
obj.sectionItem = obj;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx");

export default function useFastestListPropsPlaceholder() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  const arg1 = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ listFooter: callback(tmp.listFooter), listHeader: callback(tmp.listHeader), sectionFooter: callback(tmp.sectionFooter), sectionHeader: callback(tmp.sectionHeader), sectionItem: callback(tmp.sectionItem), sectionItemAtFront: callback(tmp.sectionItemAtFront), sectionItemAtRear: callback(tmp.sectionItemAtRear), sectionItemSingleton: callback(tmp.sectionItemSingleton) }), items);
};
