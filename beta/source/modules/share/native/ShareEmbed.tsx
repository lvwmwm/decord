// Module ID: 13449
// Function ID: 13450
// Name: ShareEmbed
// Dependencies: [19, 17, 21, 4836, 576, 5889, 4832, 2]
// Exports: default

// Module 13449 (ShareEmbed)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5889 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let react = react_mod;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerRevamp: { borderWidth: 0 }, thumbnail: { width: 80 }, contentContainer: { flex: 1, flexDirection: "column", justifyContent: "center", paddingLeft: 12, paddingRight: 24 }, authorView: { flexDirection: "row", alignItems: "center", marginBottom: 3 }, authorThumbnail: size, loadingSpinner: { flex: 1 } };
obj2 = { flexDirection: "row", height: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { height: 16, width: 16, borderRadius: nativeDefault.radii.sm, marginRight: 4 };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/share/native/ShareEmbed.tsx");

export default function ShareEmbed(embed) {
  let closure_2;
  let items6;
  let items7;
  let tmp9Result2;
  embed = embed.embed;
  const isLoadingEmbed = embed.isLoadingEmbed;
  const isRevamp = embed.isRevamp;
  let tmp = closure_8();
  react = tmp;
  let items = [embed];
  const memo = react.useMemo(() => {
    if (null != embed) {
      const thumbnail = tmp.thumbnail;
      let url;
      if (thumbnail != null) {
        url = thumbnail.url;
      }
      if (url == null) {
        const image = tmp.image;
        let url1;
        if (image != null) {
          url1 = image.url;
        }
        url = url1;
      }
      if (null != url) {
        return { uri: url };
      }
    }
  }, items);
  const items1 = [isLoadingEmbed, tmp];
  let memo1 = react.useMemo(() => {
    let tmp = null;
    if (isLoadingEmbed) {
      const obj = { style: closure_2.loadingSpinner };
      tmp = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
    }
    return tmp;
  }, items1);
  const items2 = [embed, tmp];
  const items3 = [embed];
  const memo2 = react.useMemo(() => {
    let items;
    let obj3;
    let author;
    if (embed != null) {
      author = embed.author;
    }
    if (null == author) {
      return null;
    } else {
      let icon_url = author.proxy_icon_url;
      if (icon_url == null) {
        icon_url = author.icon_url;
      }
      let tmp5 = null != icon_url;
      const obj = { style: closure_2.authorView, children: items };
      const tmp2 = metroRequire;
      const tmp3 = React3;
      if (tmp5) {
        const obj2 = { style: tmp4.authorThumbnail, source: obj3, resizeMode: "cover" };
        obj3 = { uri: icon_url };
        tmp5 = hasOwnProperty(_false, obj2);
      }
      items = [tmp5, ];
      const obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", ellipsizeMode: "tail", lineClamp: 1, children: author.name };
      items[1] = hasOwnProperty(Text_Text.Text, obj4);
      return tmp2(tmp3, obj);
    }
  }, items2);
  const memo3 = react.useMemo(() => {
    let title;
    if (embed != null) {
      title = embed.title;
    }
    let tmp2 = null;
    if (null != title) {
      const obj = { style: { marginVertical: 1 }, variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail", children: title };
      tmp2 = hasOwnProperty(Text_Text.Text, obj);
    }
    return tmp2;
  }, items3);
  const items4 = [embed, memo3];
  [][0] = embed;
  const memo4 = react.useMemo(() => {
    let description;
    if (embed != null) {
      description = embed.description;
    }
    let tmp = null;
    if (null == memo3) {
      tmp = null;
      if (null != description) {
        const obj = { style: { marginVertical: 1 }, variant: "text-xs/medium", color: "text-default", lineClamp: 1, ellipsizeMode: "tail", children: description };
        tmp = hasOwnProperty(Text_Text.Text, obj);
      }
    }
    return tmp;
  }, items4);
  if (null != embed) {
    const items5 = [tmp.container, ];
    let containerRevamp;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    let obj = { style: items5, children: memo1 };
    items5[1] = containerRevamp;
    if (!isLoadingEmbed) {
      let tmp9Result = null != memo;
      const tmp13 = closure_7;
      if (tmp9Result) {
        let obj2 = { style: tmp.thumbnail, source: memo, resizeMode: "cover" };
        tmp9Result = tmp9(memo3, obj2);
      }
      let obj3 = { children: items6 };
      items6 = [tmp9Result, ];
      let obj4 = { style: tmp.contentContainer, children: items7 };
      items7 = [memo2, memo3, memo4, tmp7];
      items6[1] = closure_6(closure_4, obj4);
      memo1 = tmp12(tmp13, obj3);
    }
    tmp9Result2 = tmp9(tmp10, obj);
  } else {
    tmp9Result2 = null;
  }
  return tmp9Result2;
};
