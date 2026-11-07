// Module ID: 15400
// Function ID: 15401
// Name: createConjureProjectLinkEmbed
// Dependencies: [10238, 5140, 575, 1113, 4026, 11715, 8465, 13938, 2]
// Exports: default

// Module 15400 (createConjureProjectLinkEmbed)
import nativeDefault from "native" /* 575 */;
import _modDef4026 from "module_4026" /* 4026 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8465 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10238 */;
import conjureProjectLinkCard2 from "conjureProjectLinkCard" /* 11715 */;
import CodedLinksTypes from "CodedLinksTypes" /* 13938 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let obj = { titleColor: nativeDefault.colors.TEXT_STRONG, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, headerColor: nativeDefault.colors.TEXT_MUTED, acceptLabelBackgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, acceptLabelColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, secondaryButtonBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, secondaryButtonTextColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, coverBackgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_4 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/conjure/share/native/createConjureProjectLinkEmbed.tsx");

export default function createConjureProjectLinkEmbed(applicationId, ticket, arg2, memo2) {
  let ConjureProjectEmbedDisplayType;
  let coverImageURL;
  let formatToPlainStringResult;
  let iconURL;
  let intl7;
  let stringResult1;
  let stringResult2;
  let stringResult3;
  let stringResult4;
  let tmp19;
  const obj = conjureProjectLinkCard2;
  const conjureProjectLinkCard = obj.readConjureProjectLinkCard(applicationId, ticket, memo2);
  if (null == conjureProjectLinkCard) {
    return null;
  } else {
    const obj2 = { extendedType: CodedLinkExtendedType.CONJURE_PROJECT_EMBED, type: null, headerText: null, applicationId, embedCanBeTapped: !("no_access" === conjureProjectLinkCard.type || "expired" === conjureProjectLinkCard.type) };
    const merged = Object.assign(getEmbedThemeColorsDefault(arg2).baseColors);
    const merged1 = Object.assign(closure_4(arg2));
    if ("no_access" === conjureProjectLinkCard.type || "expired" === conjureProjectLinkCard.type) {
      let mQma36;
      const intl8 = tmp(1113).intl;
      const string = intl8.string;
      if ("expired" === conjureProjectLinkCard.type) {
        mQma36 = tmp6(4026).wahvH2;
      } else {
        mQma36 = tmp6(4026).mQma36;
      }
      const stringResult = string(mQma36);
      const obj3 = { displayType: CodedLinksTypes.ConjureProjectEmbedDisplayType.NO_ACCESS, title: null, description: null, creatorText: null, noticeText: stringResult, iconUrl: null, coverUrl: null, installLabel: null, remixLabel: null, coverAction: null, coverActionLabel: null, accessibilityLabel: stringResult };
      const merged2 = Object.assign(obj2);
      return obj3;
    } else {
      const application = conjureProjectLinkCard.application;
      let str3;
      if (application.description != null) {
        str3 = str2.trim();
      }
      if (str3 == null) {
        str3 = "";
      }
      let coverAction = null;
      if ("ready" === conjureProjectLinkCard.type) {
        coverAction = conjureProjectLinkCard.coverAction;
      }
      const obj4 = { displayType: "ready" === conjureProjectLinkCard.type ? ConjureProjectEmbedDisplayType.READY : ConjureProjectEmbedDisplayType.INFO_ONLY, title: application.name, description: tmp19, creatorText: formatToPlainStringResult, noticeText: stringResult1, iconUrl: iconURL, coverUrl: coverImageURL, installLabel: stringResult2, remixLabel: stringResult3, coverAction, coverActionLabel: stringResult4, accessibilityLabel: intl7.formatToPlainString(_modDef4026.c8DqSD, obj6) };
      const merged3 = Object.assign(obj2);
      ConjureProjectEmbedDisplayType = tmp(13938).ConjureProjectEmbedDisplayType;
      tmp19 = null;
      if ("" !== str3) {
        tmp19 = str3;
      }
      formatToPlainStringResult = null;
      if ("ready" === conjureProjectLinkCard.type) {
        formatToPlainStringResult = null;
        if (null != conjureProjectLinkCard.creatorName) {
          const intl = tmp(1113).intl;
          const obj5 = { name: conjureProjectLinkCard.creatorName };
          formatToPlainStringResult = intl.formatToPlainString(tmp6(4026)["6/x9LD"], obj5);
        }
      }
      stringResult1 = null;
      if ("ready" !== conjureProjectLinkCard.type) {
        const intl2 = tmp(1113).intl;
        stringResult1 = intl2.string(tmp6(4026)["2DSRxV"]);
      }
      iconURL = application.getIconURL(80);
      if (iconURL == null) {
        iconURL = null;
      }
      coverImageURL = application.getCoverImageURL(1024);
      if (coverImageURL == null) {
        coverImageURL = null;
      }
      stringResult2 = null;
      if ("ready" === conjureProjectLinkCard.type && conjureProjectLinkCard.canRemix) {
        const intl3 = tmp(1113).intl;
        stringResult2 = intl3.string(tmp6(4026)["UsUa/c"]);
      }
      stringResult3 = null;
      if ("ready" === conjureProjectLinkCard.type && conjureProjectLinkCard.canRemix) {
        const intl4 = tmp(1113).intl;
        stringResult3 = intl4.string(tmp6(4026)["6RGR3m"]);
      }
      if ("launch" === coverAction) {
        const intl6 = tmp(1113).intl;
        stringResult4 = intl6.string(tmp6(4026)["1cF7L4"]);
      } else {
        stringResult4 = null;
        if ("open" === coverAction) {
          const intl5 = tmp(1113).intl;
          stringResult4 = intl5.string(tmp(1113).t["3xjX0U"]);
        }
      }
      intl7 = tmp(1113).intl;
      return obj4;
    }
  }
};
