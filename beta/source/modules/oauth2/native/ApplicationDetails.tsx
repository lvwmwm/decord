// Module ID: 8733
// Function ID: 8734
// Name: ApplicationDetails
// Dependencies: [19, 17, 21, 4836, 576, 8519, 8354, 8734, 11, 8517, 4775, 1115, 5409, 8521, 8736, 4795, 7787, 8738, 8705, 4832, 2]
// Exports: default

// Module 8733 (ApplicationDetails)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8354 */;
import scopes from "scopes" /* 8517 */;
import disclosures from "disclosures" /* 8519 */;
import EmbedIcon from "EmbedIcon" /* 8734 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
let tmp4;
const intl5 = tmp4(1115);
const LinkIcon = tmp4(4775);
const ClockIcon = tmp4(4795);
const LockIcon = tmp4(5409);
const OAuth2Scopes = tmp4(7787);
const Utils = tmp4(8521);
const ShieldIcon = tmp4(8705);
const HammerIcon = tmp4(8736);
const RobotIcon = tmp4(8738);
function ApplicationDetailsEntry(iconComponent) {
  let items;
  iconComponent = iconComponent.iconComponent;
  const text = iconComponent.text;
  const tmp = closure_6();
  let iconComponentResult = null;
  const obj = { style: tmp.entry, children: items };
  const tmp2 = hasOwnProperty;
  const tmp3 = View;
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  items = [iconComponentResult, ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: text };
  items[1] = React3(Text_Text.Text, obj3);
  return tmp2(tmp3, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 }, entryIcon: size };
size = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default function ApplicationDetails(arg0) {
  let application;
  let approximateGuildCount;
  let connectedAccount;
  let disclosures;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isEmbeddedFlow;
  let items;
  let obj10;
  let obj5;
  let redirectUri;
  let scopes;
  let tmp4Result;
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  const tmp = closure_6();
  let obj = SnowflakeUtilsDefault;
  let tmp4 = require;
  const date = new Date(obj.extractTimestamp(application.id));
  let obj2 = scopes;
  let joined = null;
  const securityMessage = obj2.getSecurityMessage(scopes);
  if (null != redirectUri) {
    if (!isEmbeddedFlow) {
      try {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(redirectUri);
        const str = uRL.href;
        const parts = str.split("/");
        const substr = parts.slice(0, 3);
        joined = substr.join("/");
      } catch (err) {
        joined = redirectUri;
      }
    }
  }
  let obj3 = { style: tmp.applicationDetails, children: items };
  let tmp12 = null;
  const tmp10 = hasOwnProperty;
  const tmp11 = View;
  if (null != joined) {
    let obj4 = { iconComponent: LinkIcon.LinkIcon, text: intl.format(intl5.t["5k5OKD"], obj5) };
    intl = intl5.intl;
    obj5 = { origin: joined };
    tmp12 = React3(ApplicationDetailsEntry, obj4);
  }
  items = [tmp12, , , , , , ];
  const obj6 = { iconComponent: LockIcon.LockIcon, text: tmp4Result.getApplicationDetailsText(application) };
  tmp4Result = Utils;
  items[1] = React3(ApplicationDetailsEntry, obj6);
  let tmp15Result = null;
  if (null != connectedAccount) {
    const obj7 = { iconComponent: HammerIcon.HammerIcon, text: intl2.string(intl5.t["8qui3M"]) };
    intl2 = intl5.intl;
    tmp15Result = tmp15(tmp16, obj7);
  }
  items[2] = tmp15Result;
  const obj8 = { iconComponent: ClockIcon.ClockIcon, text: intl3.formatToPlainString(intl5.t["+1bjc8"], { date }) };
  intl3 = intl5.intl;
  items[3] = React3(ApplicationDetailsEntry, obj8);
  let tmp15Result2 = null;
  if (scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT)) {
    tmp15Result2 = null;
    if (null != approximateGuildCount) {
      const obj9 = { iconComponent: RobotIcon.RobotIcon, text: intl4.formatToPlainString(intl5.t.UHGHSP, obj10) };
      intl4 = intl5.intl;
      obj10 = { guildCount: approximateGuildCount };
      tmp15Result2 = tmp15(tmp16, obj9);
    }
  }
  items[4] = tmp15Result2;
  const obj11 = { iconComponent: ShieldIcon.ShieldIcon, text: securityMessage };
  items[5] = React3(ApplicationDetailsEntry, obj11);
  let mapped = null;
  if (null != disclosures) {
    mapped = disclosures.map((toFixed) => {
      let tmp4;
      const obj = disclosures;
      const textForDisclosure = obj.getTextForDisclosure(toFixed);
      if (disclosures.ApplicationDisclosure.IP_LOCATION === toFixed) {
        tmp4 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
        const obj2 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
      } else {
        tmp4 = null;
        if (disclosures.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
          tmp4 = { iconComponent: EmbedIcon.EmbedIcon };
          const obj3 = { iconComponent: EmbedIcon.EmbedIcon };
        }
      }
      let tmp5 = null;
      if (null != tmp4) {
        tmp5 = null;
        if (null != textForDisclosure) {
          const obj4 = { text: textForDisclosure };
          const merged = Object.assign(tmp4);
          tmp5 = closure_1_4(ApplicationDetailsEntry, obj4, toFixed.toFixed());
        }
      }
      return tmp5;
    });
  }
  items[6] = mapped;
  return tmp10(tmp11, obj3);
};
