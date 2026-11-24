// Module ID: 14349
// Function ID: 14350
// Name: createConjureProjectLinkEmbed
// Dependencies: [17, 12719, 4917, 575, 1112, 4192, 11412, 11848, 12236, 12721, 14193, 11849, 2]
// Exports: default

// Module 14349 (createConjureProjectLinkEmbed)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4192 from "module_4192" /* 4192 */;
import conjureDefaultAppIcon2 from "conjureDefaultAppIcon" /* 11412 */;
import conjureProjectLinkCard2 from "conjureProjectLinkCard" /* 11848 */;
import conjureSharedProjectSurfaces from "conjureSharedProjectSurfaces" /* 11849 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 12236 */;
import CodedLinksConstants from "CodedLinksConstants" /* 12719 */;
import CodedLinksTypes from "CodedLinksTypes" /* 12721 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

const processColor = react_native.processColor;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let obj = { titleColor: nativeDefault.colors.TEXT_STRONG, bodyTextColor: nativeDefault.colors.TEXT_SUBTLE, headerColor: nativeDefault.colors.TEXT_MUTED, coverBackgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, tagBackgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, tagCoverBackgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tagTextColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_5 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/conjure/share/native/createConjureProjectLinkEmbed.tsx");

export default function createConjureProjectLinkEmbed(applicationId, ticket, theme, memo2) {
  let ConjureProjectEmbedDisplayType;
  let character;
  let color;
  let coverImageURL;
  let creatorAvatarUrl;
  let defaultUsernameColor;
  let formatToPartsResult;
  let id;
  let intl6;
  let mapped;
  let name;
  let obj6;
  let stringResult1;
  let stringResult2;
  let stringResult3;
  let tmp21;
  let tmp27;
  let tmp30Result;
  let tmp31;
  let obj = conjureProjectLinkCard2;
  const conjureProjectLinkCard = obj.readConjureProjectLinkCard(applicationId, ticket, memo2);
  if (null == conjureProjectLinkCard) {
    return null;
  } else {
    let obj2 = { extendedType: CodedLinkExtendedType.CONJURE_PROJECT_EMBED, type: null, headerText: null, applicationId, embedCanBeTapped: !tmp4 };
    const merged = Object.assign(getEmbedThemeColorsDefault(theme).baseColors);
    const merged1 = Object.assign(closure_5(theme));
    if ("no_access" === conjureProjectLinkCard.type || "expired" === conjureProjectLinkCard.type) {
      let mQma36;
      const intl7 = tmp(1112).intl;
      const string = intl7.string;
      if ("expired" === conjureProjectLinkCard.type) {
        mQma36 = tmp6(4192).wahvH2;
      } else {
        mQma36 = tmp6(4192).mQma36;
      }
      const stringResult = string(mQma36);
      const obj3 = { displayType: CodedLinksTypes.ConjureProjectEmbedDisplayType.NO_ACCESS, title: null, description: null, creatorContent: null, creatorAvatarUrl: null, projectTypes: [], noticeText: stringResult, iconUrl: null, iconFallback: null, coverUrl: null, installLabel: null, remixLabel: null, coverAction: null, coverActionLabel: null, accessibilityLabel: stringResult };
      const merged2 = Object.assign(obj2);
      return obj3;
    } else {
      const application = conjureProjectLinkCard.application;
      let iconURL = application.getIconURL(80);
      if (iconURL == null) {
        iconURL = null;
      }
      let str3;
      if (application.description != null) {
        str3 = str2.trim();
      }
      if (str3 == null) {
        str3 = "";
      }
      let coverAction = null;
      const tmp15 = "ready" === conjureProjectLinkCard.type && conjureProjectLinkCard.canRemix;
      if ("ready" === conjureProjectLinkCard.type) {
        coverAction = conjureProjectLinkCard.coverAction;
      }
      let creator = null;
      if ("ready" === conjureProjectLinkCard.type) {
        creator = conjureProjectLinkCard.creator;
      }
      const obj4 = { displayType: "ready" === conjureProjectLinkCard.type ? ConjureProjectEmbedDisplayType.READY : ConjureProjectEmbedDisplayType.INFO_ONLY, title: application.name, description: tmp21, creatorContent: formatToPartsResult, creatorAvatarUrl, projectTypes: mapped, noticeText: stringResult1, iconUrl: iconURL, iconFallback: tmp27, coverUrl: coverImageURL, installLabel: stringResult2, remixLabel: null, coverAction, coverActionLabel: stringResult3, accessibilityLabel: intl6.formatToPlainString(_modDef4192.c8DqSD, obj8) };
      const merged3 = Object.assign(obj2);
      ConjureProjectEmbedDisplayType = tmp(12721).ConjureProjectEmbedDisplayType;
      tmp21 = null;
      if ("" !== str3) {
        tmp21 = str3;
      }
      formatToPartsResult = null;
      if (null != creator) {
        const intl = tmp(1112).intl;
        const formatToParts = intl.formatToParts;
        const obj5 = { name: creator.name, nameOnClick: obj6 };
        obj6 = { linkColor: defaultUsernameColor };
        const dMdop9 = tmp6(4192).dMdop9;
        const merged4 = Object.assign(creator.onClick);
        defaultUsernameColor = creator.onClick.linkColor;
        if (defaultUsernameColor == null) {
          defaultUsernameColor = tmp6(14193)(theme).defaultUsernameColor;
        }
        formatToPartsResult = formatToParts(dMdop9, obj5);
      }
      creatorAvatarUrl = null;
      if ("ready" === conjureProjectLinkCard.type) {
        creatorAvatarUrl = conjureProjectLinkCard.creatorAvatarUrl;
      }
      if ("ready" === conjureProjectLinkCard.type) {
        const projectTypes = conjureProjectLinkCard.projectTypes;
        mapped = projectTypes.map((type) => {
          let obj2;
          const obj = { type, label: obj2.conjureSharedProjectTypeLabel(type) };
          obj2 = conjureSharedProjectSurfaces;
          return obj;
        });
      } else {
        mapped = [];
      }
      stringResult1 = null;
      if ("ready" !== conjureProjectLinkCard.type) {
        const intl2 = tmp(1112).intl;
        stringResult1 = intl2.string(tmp6(4192)["2DSRxV"]);
      }
      tmp27 = null;
      if (null == iconURL) {
        ({ id, name } = application);
        const tmpResult = conjureDefaultAppIcon2;
        const getConjureDefaultAppIconColors = tmpResult.getConjureDefaultAppIconColors;
        const conjureDefaultAppIcon = tmpResult.getConjureDefaultAppIcon(id, name);
        ({ color, character } = conjureDefaultAppIcon);
        const internal = tmp6(575).internal;
        const conjureDefaultAppIconColors = getConjureDefaultAppIconColors(color, internal.resolveSemanticColor(theme, tmp6(575).colors.BACKGROUND_BASE_LOWER));
        const foregroundColor = conjureDefaultAppIconColors.foregroundColor;
        const obj7 = { character, backgroundColor: tmp31, foregroundColor: tmp30Result };
        tmp31 = processColor(conjureDefaultAppIconColors.backgroundColor);
        const tmp30 = processColor;
        if (tmp31 == null) {
          tmp31 = null;
        }
        tmp30Result = tmp30(foregroundColor);
        if (tmp30Result == null) {
          tmp30Result = null;
        }
        tmp27 = obj7;
      }
      coverImageURL = application.getCoverImageURL(1024);
      if (coverImageURL == null) {
        coverImageURL = null;
      }
      stringResult2 = null;
      if (tmp15) {
        const intl3 = tmp(1112).intl;
        stringResult2 = intl3.string(tmp6(4192).XWgAfc);
      }
      if ("launch" === coverAction) {
        const intl5 = tmp(1112).intl;
        stringResult3 = intl5.string(tmp6(4192)["1cF7L4"]);
      } else {
        stringResult3 = null;
        if ("open" === coverAction) {
          const intl4 = tmp(1112).intl;
          stringResult3 = intl4.string(tmp(1112).t["3xjX0U"]);
        }
      }
      intl6 = tmp(1112).intl;
      return obj4;
    }
  }
};
