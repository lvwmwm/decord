// Module ID: 13982
// Function ID: 13983
// Name: TagGraphic
// Dependencies: [19, 17, 21, 4836, 576, 13979, 2]
// Exports: TagGraphic

// Module 13982 (TagGraphic)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import TagGroupTypes from "TagGroupTypes" /* 13979 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
({ Image: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((width, backgroundColor) => {
  let size1;
  const obj = { image: { width, height: width }, avatar: size, roleDot: size1 };
  size = { width, height: width, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  size1 = { width, height: width, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.TEXT_STRONG, backgroundColor };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGraphic.native.tsx");

export const TagGraphic = function TagGraphic(arg0) {
  let graphic;
  ({ graphic, size } = arg0);
  let color;
  if ("type" in graphic) {
    if ("role" === graphic.type) {
      color = graphic.color;
    }
  }
  const obj = TagGroupTypes;
  const tmp4 = closure_6(obj.getTagGraphicDimension(size), color);
  if ("type" in graphic) {
    const type = graphic.type;
    if ("role" === type) {
      return <React3 style={tmp4.roleDot} accessible={false} />;
    } else if ("avatar" === type) {
      return <_false source={graphic.source} style={tmp4.avatar} resizeMode="cover" accessible={false} />;
    } else if ("image" === type) {
      return <_false source={graphic.source} style={tmp4.image} resizeMode="contain" accessible={false} />;
    }
  }
  const tmp2Result = TagGroupTypes;
  return <graphic size={tmp2Result.getTagIconSize(size)} color={nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT} accessible={false} />;
};
