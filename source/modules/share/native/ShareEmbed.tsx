// Module ID: 12788
// Function ID: 97987
// Name: ShareEmbed
// Dependencies: []
// Exports: default

// Module 12788 (ShareEmbed)
let closure_2 = importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { shouldReturnInvoiceCache: "r", genContentSubtitle: "createLogEnvelope", EMBED_TYPES_WITH_PARSEABLE_FIELDS: "r", initialRouteName: "_requiresManualStart", flying_disc: "CacheDirPath", handleConnectionChange: "optimal", useProductPurchaseState: "LI", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderColor: importDefault(dependencyMap[4]).colors.BORDER_STRONG, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.container = obj;
obj.containerRevamp = { borderWidth: 0 };
obj.thumbnail = { width: 80 };
obj.contentContainer = {};
obj.authorView = {};
const tmp3 = arg1(dependencyMap[2]);
obj.authorThumbnail = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.loadingSpinner = { flex: 1 };
let closure_8 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/share/native/ShareEmbed.tsx");

export default function ShareEmbed(embed) {
  embed = embed.embed;
  const arg1 = embed;
  const isLoadingEmbed = embed.isLoadingEmbed;
  const dependencyMap = isLoadingEmbed;
  const tmp = callback3();
  const React = tmp;
  const items = [embed];
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
      tmp = callback(embed(isLoadingEmbed[5]).ActivityIndicator, obj);
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
        tmp6 = callback(memo3, obj);
      }
      const items = [tmp6, ];
      const obj1 = { children: author.name };
      items[1] = callback(embed(isLoadingEmbed[6]).Text, obj1);
      obj.children = items;
      return closure_6(closure_4, obj);
    }
  }, items2);
  const memo3 = React.useMemo(() => {
    let title;
    if (null != embed) {
      title = embed.title;
    }
    let tmp3 = null;
    if (null != title) {
      let obj = {};
      obj = { marginVertical: 1 };
      obj.style = obj;
      obj.children = title;
      tmp3 = callback(embed(isLoadingEmbed[6]).Text, obj);
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
        let obj = {};
        obj = { marginVertical: 1 };
        obj.style = obj;
        obj.children = description;
        tmp2 = callback(embed(isLoadingEmbed[6]).Text, obj);
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
      const obj1 = { style: tmp.contentContainer };
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
