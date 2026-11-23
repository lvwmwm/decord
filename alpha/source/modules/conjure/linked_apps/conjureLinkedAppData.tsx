// Module ID: 18335
// Function ID: 18336
// Name: conjureLinkedAppData
// Dependencies: [4190, 1112, 2]
// Exports: linkedAppCallerSides, linkedAppChatAria, linkedAppChatData, linkedAppDataSummary, linkedAppHeaderAria, linkedAppPurpose, linkedAppSettings, linkedAppTargetSides

// Module 18335 (conjureLinkedAppData)
import intl6 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

function settingOption(targetLive, data, arg2, arg3) {
  let intl3;
  if ("live" === data) {
    let formatToPlainStringResult;
    if (!targetLive.targetLive) {
      const intl = intl6.intl;
      obj = { target: targetLive.target };
      formatToPlainStringResult = intl.formatToPlainString(_modDef4190.GNcOoY, obj);
    }
    obj2 = { data, label: intl3.string(obj[data]), description: formatToPlainStringResult, disabled: tmp13 };
    intl3 = intl6.intl;
    return obj2;
  }
  let stringResult;
  if (arg3) {
    if ("preview" === data) {
      if (targetLive.callerLiveOnVibeyard) {
        const intl2 = intl6.intl;
        stringResult = intl2.string(_modDef4190.bSQXpN);
      }
    }
  }
  formatToPlainStringResult = stringResult;
}
let obj = { live: _modDef4190.MLa86y, preview: _modDef4190["6uafcy"] };
let obj2 = { live: _modDef4190["PeX+1n"], preview: _modDef4190["Gtd/KL"] };
let obj3 = { gets: _modDef4190.aiHmSc, sends: _modDef4190.i1D8eM, both: _modDef4190.QEIP5j };
const result = size.fileFinishedImporting("modules/conjure/linked_apps/conjureLinkedAppData.tsx");

export function linkedAppCallerSides(project_id, has_preview) {
  return { caller: project_id.names[has_preview.project_id], target: project_id.name, targetLive: project_id.live, targetHasPreview: project_id.hasPreview, callerHasPreview: false !== has_preview.has_preview, callerLiveOnVibeyard: true === has_preview.live_on_vibeyard };
}
export function linkedAppTargetSides(project_id, live) {
  return { caller: project_id.name, target: project_id.names[live.project_id], targetLive: live.live, targetHasPreview: live.has_preview, callerHasPreview: project_id.hasPreview, callerLiveOnVibeyard: false };
}
export function linkedAppChatData(targetHasPreview, build) {
  let intl;
  let intl3;
  let intl4;
  let intl5;
  if (targetHasPreview.targetHasPreview) {
    obj2 = { target: targetHasPreview.target };
    let str = "preview";
    if ("preview" === build) {
      obj3 = { sentence: intl5.formatToPlainString(_modDef4190.Q0D9Ie, obj2), options: [] };
      intl5 = intl6.intl;
      return obj3;
    } else if (targetHasPreview.callerHasPreview) {
      let FKHnHv;
      let tmp9;
      if ("published" === build) {
        str = "live";
      }
      const intl2 = intl6.intl;
      const formatToPlainString = intl2.formatToPlainString;
      if ("live" === str) {
        FKHnHv = _modDef4190["9iFuxr"];
      } else {
        FKHnHv = _modDef4190.FKHnHv;
      }
      const obj4 = { sentence: formatToPlainString(FKHnHv, obj2), options: null };
      if (targetHasPreview.targetLive) {
        const obj5 = { build: "published", label: intl3.string(obj.live) };
        intl3 = tmp5(1112).intl;
        const items = [obj5, ];
        const obj6 = { build: "auto", label: intl4.string(obj.preview) };
        intl4 = tmp5(1112).intl;
        items[1] = obj6;
        obj4.options = items;
        tmp9 = obj4;
      } else {
        obj4.options = [];
        tmp9 = obj4;
      }
      return tmp9;
    } else {
      const obj7 = { sentence: intl.formatToPlainString(_modDef4190.QhPlAe, obj2), options: [] };
      intl = intl6.intl;
      return obj7;
    }
  } else {
    obj = { sentence: null, options: [] };
    return obj;
  }
}
export function linkedAppSettings(targetHasPreview, build) {
  let formatToPlainStringResult;
  let intl2;
  let items;
  let items1;
  _require = targetHasPreview;
  importDefault = build;
  if (targetHasPreview.targetHasPreview) {
    let YbEDjJ;
    let tmp6;
    obj = { caller: null, target: null };
    ({ caller: obj.caller, target: obj.target } = targetHasPreview);
    let str = "live";
    let str2 = "preview";
    let str3 = "live";
    if ("preview" === build) {
      str3 = str2;
    }
    const intl = require("intl").intl;
    const formatToPlainString = intl.formatToPlainString;
    const callerHasPreview = targetHasPreview.callerHasPreview;
    const tmp5 = require("module_4190");
    if (callerHasPreview) {
      YbEDjJ = tmp5.zxQdoh;
      tmp6 = tmp4;
    } else {
      YbEDjJ = tmp5.YbEDjJ;
      tmp6 = tmp4;
    }
    obj2 = {
      label: formatToPlainString(YbEDjJ, obj),
      value: str3,
      options: items.map((item) => settingOption(targetHasPreview, item, str3, true)),
      locked: false,
      buildFor(arg0) {
          let str = "preview";
          if ("preview" !== arg0) {
            let tmp = build;
            if ("preview" === build) {
              str2 = "published";
              if (targetHasPreview.callerHasPreview) {
                str2 = "auto";
              }
              tmp = str2;
            }
            str = tmp;
          }
          return str;
        }
    };
    items = ["live", "preview"];
    let tmp8 = str2;
    if (str2 !== str3) {
      if ("published" === build) {
        str2 = "live";
      }
      tmp8 = str2;
    }
    str2 = tmp8;
    let tmp9 = null;
    if (targetHasPreview.callerHasPreview) {
      obj3 = {
        label: intl2.formatToPlainString(tmp6(str3[0]).dpSkBA, obj),
        value: tmp8,
        options: items1.map((item) => settingOption(targetHasPreview, item, str2, false)),
        locked: str2 === str3,
        buildFor(arg0) {
              let str = "auto";
              if ("live" === arg0) {
                str = "published";
              }
              return str;
            }
      };
      intl2 = tmp2(tmp3[1]).intl;
      items1 = ["live", "preview"];
      tmp9 = obj3;
    }
    const obj4 = { preview: tmp9, live: obj2, note: formatToPlainStringResult };
    formatToPlainStringResult = null;
    if (str2 === str3) {
      const intl3 = tmp2(tmp3[1]).intl;
      const obj5 = { caller: targetHasPreview.caller };
      formatToPlainStringResult = intl3.formatToPlainString(tmp6(tmp3[0])["U+jxta"], obj5);
    }
    return obj4;
  } else {
    let tmp = null;
    return null;
  }
}
export function linkedAppDataSummary(linkedAppTargetSidesResult, build) {
  let intl2;
  let intl3;
  let intl4;
  let str;
  let str5;
  let str6;
  let tmp9;
  if (linkedAppTargetSidesResult.targetHasPreview) {
    let formatToPlainStringResult;
    const callerHasPreview = linkedAppTargetSidesResult.callerHasPreview;
    const intl = intl6.intl;
    const formatToPlainString = intl.formatToPlainString;
    const tmp6 = _modDef4190;
    if (callerHasPreview) {
      obj2 = { caller: linkedAppTargetSidesResult.caller, preview: intl3.string(obj2[str5]), live: intl4.string(tmp9[str6]) };
      str5 = "preview";
      const MZuPO3 = tmp6.MZuPO3;
      if ("published" === build) {
        str5 = "live";
      }
      intl3 = tmp3(1112).intl;
      str6 = "live";
      tmp9 = obj2;
      if ("preview" === build) {
        str6 = "preview";
      }
      intl4 = tmp3(1112).intl;
      formatToPlainStringResult = formatToPlainString(MZuPO3, obj2);
    } else {
      obj = { caller: linkedAppTargetSidesResult.caller, live: intl2.string(obj2[str]) };
      str = "live";
      const Tt5ih9 = tmp6.Tt5ih9;
      if ("preview" === build) {
        str = "preview";
      }
      intl2 = tmp3(1112).intl;
      formatToPlainStringResult = formatToPlainString(Tt5ih9, obj);
    }
    return formatToPlainStringResult;
  } else {
    return null;
  }
}
export function linkedAppPurpose(purpose) {
  let str;
  if (purpose != null) {
    str = purpose.trim();
  }
  if (str == null) {
    str = "";
  }
  let sum = null;
  if ("" !== str) {
    const charAtResult = str.charAt(0);
    const toLocaleUpperCaseResult = charAtResult.toLocaleUpperCase();
    sum = toLocaleUpperCaseResult + str.slice(1);
  }
  return sum;
}
export function linkedAppHeaderAria(caller, flow) {
  let tkCyiM;
  const intl = intl6.intl;
  const formatToPlainString = intl.formatToPlainString;
  if (null == flow) {
    tkCyiM = _modDef4190.tkCyiM;
  } else {
    tkCyiM = obj3[flow];
  }
  obj = { caller: caller.caller, target: caller.target };
  return formatToPlainString(tkCyiM, obj);
}
export function linkedAppChatAria(caller) {
  const intl = intl6.intl;
  obj = { caller: caller.caller, target: caller.target };
  return intl.formatToPlainString(_modDef4190.rCqv8t, obj);
}
