// Module ID: 14947
// Function ID: 14948
// Name: UserProfilePrivateInfoBanner
// Dependencies: [17, 21, 5009, 575, 5619, 1114, 2]
// Exports: default

// Module 14947 (UserProfilePrivateInfoBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { banner: obj2 };
obj2 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default function UserProfilePrivateInfoBanner(containerBackground) {
  let intl;
  containerBackground = containerBackground.containerBackground;
  const username = containerBackground.username;
  const items = [closure_4().banner, ];
  let tmp3 = null != containerBackground;
  if (tmp3) {
    tmp3 = { backgroundColor: containerBackground };
    const obj = { backgroundColor: containerBackground };
  }
  items[1] = tmp3;
  ({ variant: "text-sm/normal", children: intl.format(intl2.t.P8ij6Z, { username }) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <tmp2 style={items}>{null}</tmp2>;
};
