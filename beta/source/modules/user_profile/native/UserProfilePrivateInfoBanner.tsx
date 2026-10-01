// Module ID: 12664
// Function ID: 12665
// Name: UserProfilePrivateInfoBanner
// Dependencies: [17, 21, 4836, 576, 4832, 1115, 2]
// Exports: default

// Module 12664 (UserProfilePrivateInfoBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import createStyles from "createStyles" /* 4836 */;
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
