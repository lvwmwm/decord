// Module ID: 12530
// Function ID: 12531
// Name: TagGraphic
// Dependencies: [19, 17, 21, 5014, 575, 12527, 5717, 2]
// Exports: TagGraphic

// Module 12530 (TagGraphic)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5717 */;
import TagGroupTypes from "TagGroupTypes" /* 12527 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((width, backgroundColor) => {
  let size1;
  const obj = { image: { width, height: width }, avatar: size, roleDot: size1 };
  size = { width, height: width, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  size1 = { width, height: width, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_STRONG, backgroundColor };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGraphic.native.tsx");

export function TagGraphic(arg0) {
  let graphic;
  ({ graphic, size } = arg0);
  let color;
  if ("type" in graphic) {
    if ("role" === graphic.type) {
      color = graphic.color;
    }
  }
  const obj = TagGroupTypes;
  const tmp4 = closure_5(obj.getTagGraphicDimension(size), color);
  if ("type" in graphic) {
    const type = graphic.type;
    if ("role" === type) {
      return <View style={tmp4.roleDot} accessible={false} />;
    } else if ("avatar" === type) {
      return jsx(FastImageDefault, { source: graphic.source, style: tmp4.avatar, resizeMode: "cover", accessible: false });
    } else if ("image" === type) {
      return jsx(FastImageDefault, { source: graphic.source, style: tmp4.image, resizeMode: "contain", accessible: false });
    }
  }
  const tmp2Result = TagGroupTypes;
  return <graphic size={tmp2Result.getTagIconSize(size)} color={nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT} accessible={false} />;
}
