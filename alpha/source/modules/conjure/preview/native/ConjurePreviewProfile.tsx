// Module ID: 18559
// Function ID: 18560
// Name: ConjurePreviewProfile
// Dependencies: [19, 17, 5241, 7526, 21, 5012, 575, 5750, 14610, 7484, 7481, 14555, 9445, 1494, 14797, 6131, 9443, 9447, 18560, 5073, 14800, 1112, 9468, 9478, 14913, 5603, 6143, 6140, 14505, 2]
// Exports: default

// Module 18559 (ConjurePreviewProfile)
import nativeDefault from "native" /* 575 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5241 */;
import OAuth2Scopes from "OAuth2Scopes" /* 5750 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 6140 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6143 */;
import useStartAuthorizeDefault from "useStartAuthorize" /* 7481 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7484 */;
import Constants from "Constants" /* 7526 */;
import useApplicationWidgetLayoutRendererPropsDefault from "useApplicationWidgetLayoutRendererProps" /* 14610 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp;
const UserProfileApplicationWidgetCardDefault = tmp(14555);
function PreviewApplicationWidgetCard(arg0) {
  let cardStyle;
  let isPreviewApp;
  let userId;
  let widget;
  ({ userId, widget } = arg0);
  ({ cardStyle, isPreviewApp } = arg0);
  const tmp3 = useApplicationWidgetLayoutRendererPropsDefault(userId, widget.applicationId);
  const obj = useGetOrFetchApplications;
  const getOrFetchApplication = obj.useGetOrFetchApplication(widget.applicationId);
  const token = useStartAuthorizeDefault(getOrFetchApplication).token;
  useStartAuthorizeDefault(getOrFetchApplication);
  if (!isPreviewApp) {
    if (!tmp3.isLoading) {
      if (!tmp3.hasIdentity) {
        if (tmp7) {
          let tmp13;
          if (tmp8) {
            let tmp10 = null != token;
            if (tmp10) {
              const _Array = Array;
              const arr = Array.from(OAuth2Scopes.OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
              let someResult = arr.some((item) => {
                const scopes = token.scopes;
                return scopes.includes(item);
              });
              if (!someResult) {
                let scopes = token.scopes;
                someResult = scopes.includes(tmp4(5750).OAuth2Scopes.SDK_SOCIAL_LAYER);
              }
              if (!someResult) {
                const scopes2 = token.scopes;
                someResult = scopes2.includes(tmp4(5750).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
              }
              tmp10 = someResult;
            }
            tmp13 = null;
          }
          return tmp13;
        }
      }
    }
  }
  tmp13 = metroRequire(UserProfileApplicationWidgetCardDefault, { userId, widget, cardStyle, rendererProps: tmp3 });
}
({ ScrollView: c3, View: closure_4 } = react_native);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING = Constants.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, content: obj2, tabs: obj3, tab: obj4, selectedTab: obj5, board: obj6 };
obj2 = { paddingTop: PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING, paddingBottom: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { paddingBottom: nativeDefault.space.PX_8 };
obj5 = { borderBottomWidth: 2, borderBottomColor: nativeDefault.colors.TEXT_STRONG };
obj6 = { gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/preview/native/ConjurePreviewProfile.tsx");

export default function ConjurePreviewProfile(user) {
  let avatarBackground;
  let containerBackground;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj3;
  let obj5;
  let statusBackground;
  user = user.user;
  const applicationId = user.applicationId;
  let items;
  const projectId = user.projectId;
  const tmp = closure_8();
  const tmp2 = applicationId(items[12])();
  const height = applicationId(items[13])().height;
  let tmp3 = applicationId(items[14])(ACTION_SHEET_MAX_WIDTH);
  const tmp4 = applicationId(items[15])(user.id);
  const tmp5 = applicationId(items[16])({ user, displayProfile: tmp4 });
  let obj = user(items[17]);
  const userProfileColors = obj.useUserProfileColors(tmp5);
  ({ containerBackground, avatarBackground, statusBackground } = userProfileColors);
  const arr = applicationId(items[18])(user.id, projectId, applicationId);
  items = [tmp2.card, { backgroundColor: containerBackground }];
  let obj2 = { theme: tmp5.theme, primaryColor: tmp5.primaryColor, secondaryColor: tmp5.secondaryColor, children: closure_7(closure_4, obj3) };
  obj3 = { style: tmp.container, children: items1 };
  const ThemeContextProvider = user(items[19]).ThemeContextProvider;
  items1 = [closure_6(applicationId(items[20]), { gradientHeight: height, bannerHeight: tmp3 }), ];
  const obj4 = { style: tmp.container, children: closure_7(closure_4, obj5) };
  obj5 = { pointerEvents: "none", importantForAccessibility: "yes", accessibilityLabel: intl.string(user(items[21]).t.Vs0dLi), children: items2 };
  intl = user(items[21]).intl;
  items2 = [closure_6(applicationId(items[22]), { user, displayProfile: tmp4, bannerHeight: tmp3, disableInteraction: true }), ];
  const obj6 = { children: items3 };
  items3 = [, ];
  const obj7 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground } };
  items3[0] = closure_6(applicationId(items[23]), obj7);
  const obj8 = { style: items4, children: items5 };
  items4 = [tmp.content, tmp2.profileContent];
  items5 = [, , ];
  const obj9 = { style: tmp2.primaryInfo, children: closure_6(user(items[24]).PrimaryInfo, { user, displayProfile: tmp4, badgeContainerBackground: containerBackground, isPreviewingChanges: true }) };
  items5[0] = closure_6(closure_4, obj9);
  const obj10 = { style: tmp.tabs, children: items7 };
  const obj11 = { variant: "body-md/semibold", color: "text-strong", style: items6, children: intl2.string(user(items[21]).t.laViwx) };
  items6 = [, ];
  ({ tab: arr8[0], selectedTab: arr8[1] } = tmp);
  const Text = user(items[25]).Text;
  intl2 = user(items[21]).intl;
  items7 = [closure_6(Text, obj11), , ];
  const obj12 = { variant: "body-md/medium", color: "text-subtle", style: tmp.tab, children: intl3.string(user(items[21]).t.chq59f) };
  const Text2 = user(items[25]).Text;
  intl3 = user(items[21]).intl;
  items7[1] = closure_6(Text2, obj12);
  const obj13 = { variant: "body-md/medium", color: "text-subtle", style: tmp.tab, children: intl4.string(user(items[21]).t["7lZ31J"]) };
  const Text3 = user(items[25]).Text;
  intl4 = user(items[21]).intl;
  items7[2] = closure_6(Text3, obj13);
  items5[1] = closure_7(closure_4, obj10);
  const obj14 = {
    style: tmp.board,
    children: arr.map((widget) => {
      let tmp3;
      if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
        const obj = { userId: user.id, widget, cardStyle: items, isPreviewApp: widget.applicationId === applicationId };
        tmp3 = metroRequire(PreviewApplicationWidgetCard, obj, widget.getUniqueKey());
      } else {
        tmp3 = null;
        const tmpResult = UserProfileGameWidgetTypes;
        if (tmpResult.isGameWidget(widget)) {
          const obj2 = { userId: user.id, widget, cardStyle: items, disableInteraction: true };
          tmp3 = metroRequire(tmp(14505).WidgetSection, obj2, widget.getUniqueKey());
        }
      }
      return tmp3;
    })
  };
  items5[2] = closure_6(closure_4, obj14);
  items3[1] = closure_7(closure_4, obj8);
  items2[1] = closure_7(closure_4, obj6);
  items1[1] = closure_6(closure_3, obj4);
  return closure_6(ThemeContextProvider, obj2);
};
