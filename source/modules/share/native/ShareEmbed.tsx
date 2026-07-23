// Module ID: 12911
// Function ID: 100198
// Name: ShareEmbed
// Dependencies: [31, 27, 33, 4130, 689, 5586, 4126, 2]
// Exports: default

// Module 12911 (ShareEmbed)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", height: 80, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerRevamp = { borderWidth: 0 };
_createForOfIteratorHelperLoose.thumbnail = { width: 80 };
_createForOfIteratorHelperLoose.contentContainer = { flex: 1, flexDirection: "column", justifyContent: "center", paddingLeft: 12, paddingRight: 24 };
_createForOfIteratorHelperLoose.authorView = { flexDirection: "row", alignItems: "center", marginBottom: 3 };
let obj1 = { height: 16, width: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 4 };
_createForOfIteratorHelperLoose.authorThumbnail = obj1;
_createForOfIteratorHelperLoose.loadingSpinner = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/share/native/ShareEmbed.tsx");

export default function ShareEmbed(embed) {
  embed = embed.embed;
  const isLoadingEmbed = embed.isLoadingEmbed;
  let tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  let items = [embed];
  const memo = React.useMemo(() => {
    if (null != embed) {
      const thumbnail = embed.thumbnail;
      let url;
      if (null != thumbnail) {
        url = thumbnail.url;
      }
      if (null == url) {
        const image = embed.image;
        let url1;
        if (null != image) {
          url1 = image.url;
        }
        url = url1;
      }
      if (null != url) {
        const obj = { uri: url };
        return obj;
      }
    }
  }, items);
  const items1 = [isLoadingEmbed, tmp];
  let memo1 = React.useMemo(() => {
    let tmp = null;
    if (isLoadingEmbed) {
      const obj = { style: tmp.loadingSpinner };
      tmp = outer1_5(embed(isLoadingEmbed[5]).ActivityIndicator, obj);
    }
    return tmp;
  }, items1);
  const items2 = [embed, tmp];
  const items3 = [embed];
  const memo2 = React.useMemo(() => {
    let author;
    if (null != embed) {
      author = embed.author;
    }
    if (null == author) {
      return null;
    } else {
      let icon_url = author.proxy_icon_url;
      if (null == icon_url) {
        icon_url = author.icon_url;
      }
      let obj = { style: tmp.authorView };
      let tmp6 = null != icon_url;
      if (tmp6) {
        obj = { style: tmp.authorThumbnail };
        obj = { uri: icon_url };
        obj.source = obj;
        obj.resizeMode = "cover";
        tmp6 = outer1_5(memo3, obj);
      }
      const items = [tmp6, ];
      const obj1 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", ellipsizeMode: "tail", lineClamp: 1, children: author.name };
      items[1] = outer1_5(embed(isLoadingEmbed[6]).Text, obj1);
      obj.children = items;
      return outer1_6(outer1_4, obj);
    }
  }, items2);
  const memo3 = React.useMemo(() => {
    let title;
    if (null != embed) {
      title = embed.title;
    }
    let tmp3 = null;
    if (null != title) {
      let obj = { style: null, variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail" };
      obj = { marginVertical: 1 };
      obj.style = obj;
      obj.children = title;
      tmp3 = outer1_5(embed(isLoadingEmbed[6]).Text, obj);
    }
    return tmp3;
  }, items3);
  const items4 = [embed, memo3];
  [][0] = embed;
  const memo4 = React.useMemo(() => {
    if (null != embed) {
      const description = embed.description;
    }
    let tmp2 = null;
    if (null == memo3) {
      tmp2 = null;
      if (null != description) {
        let obj = { style: null, variant: "text-xs/medium", color: "text-default", lineClamp: 1, ellipsizeMode: "tail" };
        obj = { marginVertical: 1 };
        obj.style = obj;
        obj.children = description;
        tmp2 = outer1_5(embed(isLoadingEmbed[6]).Text, obj);
      }
    }
    return tmp2;
  }, items4);
  if (null != embed) {
    let obj = {};
    const items5 = [tmp.container, ];
    let containerRevamp;
    if (embed.isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    items5[1] = containerRevamp;
    obj.style = items5;
    if (!isLoadingEmbed) {
      obj = {};
      let tmp14 = null != memo;
      if (tmp14) {
        obj = { style: tmp.thumbnail, source: memo, resizeMode: "cover" };
        tmp14 = callback(memo3, obj);
      }
      const items6 = [tmp14, ];
      let obj1 = { style: tmp.contentContainer };
      const items7 = [memo2, memo3, memo4, tmp7];
      obj1.children = items7;
      items6[1] = callback2(closure_4, obj1);
      obj.children = items6;
      memo1 = callback2(closure_7, obj);
      const tmp12 = callback2;
      const tmp13 = closure_7;
    }
    obj.children = memo1;
    let tmp9Result = callback(closure_4, obj);
    const tmp10 = closure_4;
    const tmp9 = callback;
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};
