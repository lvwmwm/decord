// Module ID: 18765
// Function ID: 18766
// Name: ChannelDetailsLinkedLobby
// Dependencies: [19, 17, 1072, 21, 5009, 575, 7324, 5619, 1114, 2062, 2]
// Exports: default

// Module 18765 (ChannelDetailsLinkedLobby)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7324 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ Fragment: hasOwnProperty, jsxs: metroRequire, jsx: metroImportDefault } = Fragment);
let obj = { container: { alignItems: "center" }, divider: size };
size = { height: 1, width: 48, marginTop: 12, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_8 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default function ChannelDetailsLinkedLobby(channel) {
  let items;
  let items1;
  let items2;
  let obj4;
  let obj6;
  channel = channel.channel;
  const containerStyle = channel.containerStyle;
  const tmp = closure_8();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
  useGetOrFetchApplications;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  let tmp8Result = null;
  if (null != channel.linkedLobby) {
    let formatResult;
    const obj = { style: items, children: items2 };
    items = [tmp.container, containerStyle];
    const Text = tmp2(5619).Text;
    const tmp11 = hasOwnProperty;
    if (null != getOrFetchApplication) {
      const intl2 = tmp2(1114).intl;
      const obj2 = { applicationName: getOrFetchApplication.name };
      formatResult = intl2.format(tmp2(1114).t.SgxMJs, obj2);
    } else {
      const intl = tmp2(1114).intl;
      formatResult = intl.string(tmp2(1114).t.yQqVss);
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: metroRequire(tmp11, obj4) };
    obj4 = { children: items1 };
    items1 = [formatResult, "  \u2022  ", ];
    const intl3 = tmp2(1114).intl;
    const format = intl3.format;
    const obj5 = { helpdeskArticle: obj6.getArticleURL(HelpdeskArticles.LINKED_LOBBIES) };
    const BPDKoA = tmp2(1114).t.BPDKoA;
    obj6 = HelpdeskUtilsDefault;
    items1[2] = format(BPDKoA, obj5);
    items2 = [metroImportDefault(Text, obj3), ];
    const obj7 = { style: tmp.divider };
    items2[1] = metroImportDefault(View, obj7);
    tmp8Result = tmp8(tmp9, obj);
  }
  return tmp8Result;
};
